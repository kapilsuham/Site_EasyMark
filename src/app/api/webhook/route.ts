import UserModel from "@/(more)/models/User";
import dbConnect from "@/lib/dbConnect";
import crypto from "crypto";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
export async function POST(req: Request) {
  try {


    // Catch the event type
    const clonedReq = req.clone();
    const eventType = req.headers.get("X-Event-Name");
    const body = await req.json();



    // Check signature
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SIGNATURE as string;
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(await clonedReq.text()).digest("hex"),
      "utf8"
    );
    const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }
    // console.log(body);


    ///////////// Logic according to event/////////////////////////////////

    const email = body.data.attributes.user_email
    if (eventType === "order_created") {
      // const userId = body.meta.custom_data.user_id;
      const isSuccessful = body.data.attributes.status === "paid";

      if (isSuccessful) {
        if (body.meta.custom_data.subscriptionType === 'onetime') {
          await dbConnect()
          const user = await UserModel.findOne({ email, isVerified: true })
          if (user) {
            user.LifeTimeHasAccess = true
            await user.save()
            console.log('===============order_paid');
          }
        }
      }
    }

    if (eventType === 'subscription_payment_success') {
      const isSuccessful = body.data.attributes.status === "paid";
      if (isSuccessful) {
        if (body.meta.custom_data.subscriptionType === 'subscription') {
          await dbConnect()
          const user = await UserModel.findOne({ email, isVerified: true })
          if (user) {
            user.subscriptionHasAccess = true
            await user.save()
            console.log('===============subscription_payment_paid');
          }
        }
      }
    }
    if (eventType === "subscription_expired") {
      const isExpired = body.data.attributes.status === "expired";
      // console.log(body.data);
      if (isExpired) {
        await dbConnect()
        const user = await UserModel.findOne({ email, isVerified: true })
        if (user) {
          user.subscriptionHasAccess = false
          await user.save()
          console.log('===================subscription_is_expired');

        }
      }
    }
    if (eventType === 'subscription_cancelled') {
      const isCancelled = body.data.attributes.status === "cancelled";
      if (isCancelled) {
        await dbConnect()
        const user = await UserModel.findOne({ email, isVerified: true })
        if (user) {
          user.subscriptionHasAccess = false
          await user.save()
          console.log('===============subscription_is_cancelled');
        }
      }
    }

    return Response.json({ message: "Webhook received" });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  const session = await getServerSession(authOptions)
  try {
    await dbConnect()
    const _id = session!.user._id
    const user = await UserModel.findOne({ _id })
    if (user) {
      const username = user.username
      const email = user.email
      const LifeTimeHasAccess = user.LifeTimeHasAccess
      const subscriptionHasAccess = user.subscriptionHasAccess
      return Response.json({
        data: { username, email, LifeTimeHasAccess, subscriptionHasAccess },
        message: 'user details send'
      })
    }
    return Response.json({
      success: false,
      message: 'Error finding user details in database'
    },
      {
        status: 400
      })

  } catch (error) {
    console.log("Error finding user details in database", error);
    return Response.json({
      success: false,
      message: "Error finding user details in database"
    },
      {
        status: 500
      })

  }
}