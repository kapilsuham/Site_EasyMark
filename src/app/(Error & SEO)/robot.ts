import { MetadataRoute } from "next";
export default function robots():MetadataRoute.Robots{
    const baseUrl=process.env.NEXTAUTH_URL
    return{
        rules:{
            userAgent:"*",
            allow:["/"],
            disallow:[]
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}