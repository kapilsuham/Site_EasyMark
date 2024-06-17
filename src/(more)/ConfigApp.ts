export const SITE_NAME = "ShipForever" //string
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
            { id: 5, tag: 'Magic Links' }],
        denied: [
            { id: 1, tag: 'Resend emails' },
            { id: 2, tag: 'No Login Authentication' },
            { id: 3, tag: 'No User Details Edit' },
            { id: 4, tag: 'Google Oauth' },
            { id: 5, tag: 'SEO for ranking' }],
        popular: false,
        cuttedPrice: 139,
        price: 99,
        purchaseUrl: '/payment'
    },
    {
        id: 2,
        name: "Gold",
        access: [
            { id: 1, tag: 'NextJS boilerplate' },
            { id: 2, tag: 'MongoDB Database' },
            { id: 3, tag: 'Component & animations' },
            { id: 4, tag: 'Payment Gateway' },
            { id: 5, tag: 'Magic Links' },
            { id: 6, tag: 'Resend emails' },
            { id: 7, tag: 'No Login Authentication' },
            { id: 8, tag: 'No User Details Edit' },
            { id: 9, tag: 'Google Oauth' },
            { id: 10, tag: 'SEO for ranking' }],
        denied: [],
        popular: true,
        cuttedPrice: 0,
        price: 3000,
        purchaseUrl: '/payment'
    },
    {
        id: 3,
        name: "Premium",
        access: [
            { id: 1, tag: 'NextJS boilerplate' },
            { id: 2, tag: 'MongoDB Database' },
            { id: 3, tag: 'Component & animations' },
            { id: 4, tag: 'Payment Gateway' },
            { id: 5, tag: 'Magic Links' },
            { id: 6, tag: 'Resend emails' },
            { id: 7, tag: 'No Login Authentication' }],

        denied: [
            { id: 1, tag: 'No User Details Edit' },
            { id: 2, tag: 'Google Oauth' },
            { id: 3, tag: 'SEO for ranking' }],
        popular: false,
        cuttedPrice: 0,
        price: 3000,
        purchaseUrl: '/payment'
    },
]
