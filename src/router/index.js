import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHome from '../views/TheHome.vue'
import ProfilePage from "@/views/ProfilePage";
import ListingAdminPage from "@/views/ListingAdminPage";
import ContactsPage from "@/views/ContactsPage";
import ServicesPage from "@/views/ServicesPage";
import PricingPage from "@/views/PricingPage";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: TheHome,
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfilePage,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsPage,
    },
    {
        path: '/services',
        name: 'services',
        component: ServicesPage,
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: PricingPage,
    },
    {
        path: '/listing',
        name: 'listing',
        component: ListingAdminPage,
    },
    {
        path: '/about',
        name: 'aboutus',
        component: ProfilePage,
    },
    {
        path: '/med-dep',
        name: 'meddep',
        component: ProfilePage,
    },
    {
        path: '/surgery-dep',
        name: 'surgerydep',
        component: ProfilePage,
    },
    {
        path: '/radiology-dep',
        name: 'radiologydep',
        component: ProfilePage,
    },
    {
        path: '/dental-dep',
        name: 'dentaldep',
        component: ProfilePage,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router