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
            { id: 2, tag: 'MongoDB Database' },
            { id: 3, tag: 'Component & animations' },
            { id: 4, tag: 'Payment Gateway' },
            { id: 5, tag: 'Deadly Easy Documentation' }],
        denied: [
            { id: 1, tag: 'Resend emails' },
            { id: 2, tag: 'No Login Authentication' },
            { id: 3, tag: 'No User Details Edit' },
            { id: 4, tag: 'Google Oauth' },
            { id: 5, tag: 'SEO for ranking' }],
        popular: false,
        cuttedPrice: 179,
        price: 139,
        mode: 'onetime', //can set to subscription
        productId:''
    },
    {
        id: 2,
        name: "Gold",
        access: [
            { id: 1, tag: 'NextJS boilerplate' },
            { id: 2, tag: 'MongoDB Database' },
            { id: 3, tag: 'Component & animations' },
            { id: 4, tag: 'Payment Gateway' },
            { id: 5, tag: 'Deadly Easy Documentation' },
            { id: 6, tag: 'Resend emails' },
            { id: 7, tag: 'No Login Authentication' },
            { id: 8, tag: 'No User Details Edit' },
            { id: 9, tag: 'Google Oauth' },
            { id: 10, tag: 'SEO for ranking' }],
        denied: [],
        popular: true,
        cuttedPrice: 199,
        price: 169,
        mode: 'onetime',
        productId: ''
    },
    {
        id: 3,
        name: "Premium",
        access: [
            { id: 1, tag: 'NextJS boilerplate' },
            { id: 2, tag: 'MongoDB Database' },
            { id: 3, tag: 'Component & animations' },
            { id: 4, tag: 'Payment Gateway' },
            { id: 5, tag: 'Deadly Easy Documentation' },
            { id: 6, tag: 'Resend emails' },
            { id: 7, tag: 'No Login Authentication' }],

        denied: [
            { id: 1, tag: 'No User Details Edit' },
            { id: 2, tag: 'Google Oauth' },
            { id: 3, tag: 'SEO for ranking' }],
        popular: false,
        cuttedPrice: 249,
        price: 199,
        mode: 'onetime',
        productId: ''
    },
]
