export default async function sitemap() {
    const baseUrl=process.env.SITE_URL
    return [
        {
            url: baseUrl,
            lastModified: new Date()
        }
    ]
}