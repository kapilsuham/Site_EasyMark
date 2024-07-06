export const SITE_NAME = "ShipForever" //string
// REQUIRED: a short description of your app for SEO tags (can be overwritten)
export const AppDescription = "Grow Your Startups in Minutes,Save Months | ShipForever"
// REQUIRED (no https://, not trialing slash at the end, just the naked domain)
export const DomainName = "localhost:3000"

export const MY_CRISP_WEBSITE_ID = ""  //string


export const products = [
    { productId1: '' }, //string
    { productId2: '' } //string
]

export const plan = [
    {
        id: 1,
        name: "Basic",
        access: [
            { id: 1, tag: 'NextJS boilerplate' },
            { id: 2, tag: 'SEO & Google Ranking' },
            { id: 3, tag: 'Component & animations' },
            { id: 4, tag: 'LemonSqueezy' },
            { id: 5, tag: 'Resend emails' },],
        denied: [
            { id: 6, tag: 'Discord community & Leaderboard' },
            { id: 7, tag: 'Lifetime Updates' },
            { id: 8, tag: 'Page Access after Payment' },
            { id: 9, tag: 'Page Access after subscription' },
            { id: 10, tag: 'JWT session data' },
            { id: 11, tag: 'Chat Gpt-4 integrated' },
            { id: 12, tag: 'Chat Gpt prompt for license, privacy, T&C' },],
        popular: false,
        cuttedPrice: 269,
        price: 169,
        mode: 'plan1',
        productId: '424261'
    },
    {
        id: 2,
        name: "Silver",
        access: [
            { id: 1, tag: 'NextJS boilerplate' },
            { id: 2, tag: 'SEO & Google Ranking' },
            { id: 3, tag: 'Component & animations' },
            { id: 4, tag: 'LemonSqueezy' },
            { id: 5, tag: 'Resend emails' },
            { id: 6, tag: 'Discord community & Leaderboard' },
            { id: 7, tag: 'Lifetime Updates' },
        ],
        denied: [
            { id: 8, tag: 'Page Access after Payment' },
            { id: 9, tag: 'Page Access after subscription' },
            { id: 10, tag: 'JWT session data' },
            { id: 11, tag: 'Chat Gpt-4 integrated' },
            { id: 12, tag: 'Chat Gpt prompt for license, privacy, T&C' },
        ],
        popular: false,
        cuttedPrice: 299,
        price: 199,
        mode: 'plan2',
        productId: ''
    },
]
