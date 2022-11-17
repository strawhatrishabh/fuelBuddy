import { createWebHistory, createRouter } from "vue-router"
import Home from "./views/Home.vue"
import Dashboard from "./views/Dashboard.vue"
import SignUp from "./views/signup.vue"
import { useLoginStore } from "./store/index.ts";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    const loginStore = useLoginStore();
    if(to.name == 'Dashboard' && !loginStore.loggedUser) {
        return false
    }
})

export default router