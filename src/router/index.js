import {createRouter, createWebHistory} from "vue-router"

const routes=[
    {
        path:"/",
        component: ()=>import('../pages/dashboard.vue')
    },
    {
        path:"/payment",
        component:()=>import('../pages/payment.vue')
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router