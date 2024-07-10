import UserModel from "@/(more)/models/User";
import dbConnect from "@/lib/dbConnect";
import crypto from "crypto";
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