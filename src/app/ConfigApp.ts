export const SITE_NAME = "EasyMark" //string
// REQUIRED: a short description of your app for SEO tags (can be overwritten)
export const AppDescription = "Best bookmark managing tool"
// REQUIRED (no https://, not trialing slash at the end, just the naked domain)
export const DomainName = "localhost:3000"
export const MY_CRISP_WEBSITE_ID = ""  //string

export const products = [
    { productId1: '464678' }, //string
    { productId2: '' } //string
]

export const plan = [
    {
        id: 1,
        name: "Basic",
        access: [
            { id: 1, tag: 'Multiple device login' },
            { id: 2, tag: 'Create mark groups' },
            { id: 3, tag: 'Create site cards' },
            { id: 4, tag: 'Movable mark & site cards' },
            { id: 5, tag: 'LifeTime Access' },
        ],
        denied: [
            { id: 7, tag: 'Unlimited mark(Limit of 2)' },
            { id: 8, tag: 'Unlimited site card(Limit of 5)' },
            ],
        popular: false,
        cuttedPrice: 39,
        price: 16,
        mode: 'LifeTimeHasAccessBasic',
        productId: '424261'
    },
    {
        id: 2,
        name: "Gold",
        access: [
            { id: 1, tag: 'Multiple device login' },
            { id: 2, tag: 'Create mark groups' },
            { id: 3, tag: 'Create site cards' },
            { id: 4, tag: 'Movable mark & site cards' },
            { id: 5, tag: 'LifeTime Access' },
            { id: 7, tag: 'Unlimited mark (No Limit)' },
            { id: 8, tag: 'Unlimited site card (No Limit)' },
        ],
        denied: [],
        popular: true,
        cuttedPrice: 49,
        price: 25,
        mode: 'LifeTimeHasAccessGold',
        productId: ''
    },
    
]

