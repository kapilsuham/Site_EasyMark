export const SITE_NAME="ShipForever" //string
export const MY_CRISP_WEBSITE_ID=""  //string

export const products=[
   { productId1:''}, //string
   { productId2:''} //string
]

export const plan=[
    {
        name:"Basic",
        access:['NextJS boilerplate','MongoDB Database','Component & animations','Payment Gateway','Magic Links'],
        denied:['Resend emails','No Login Authentication','No User Details Edit','Google Oauth','SEO for ranking'],
        popular:false, 
        cuttedPrice:139, 
        price:99,
        purchaseUrl:'/payment'
    },
    {
        name:"Gold",
        access:['NextJS boilerplate','MongoDB Database','Component & animations','Payment Gateway','Magic Links','Resend emails','No Login Authentication','No User Details Edit','Google Oauth','SEO for ranking'],
        denied:[],
        popular:true,
        cuttedPrice:0,
        price:3000,
        purchaseUrl:'/payment'
    },   
    {
        name:"Premium",
        access:['NextJS boilerplate','MongoDB Database','Component & animations','Payment Gateway','Magic Links','Resend emails','No Login Authentication'],
        denied:['No User Details Edit','Google Oauth','SEO for ranking'],
        popular:false,
        cuttedPrice:0,
        price:3000,
        purchaseUrl:'/payment'
    }, 
]
