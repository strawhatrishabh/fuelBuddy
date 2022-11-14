import { createWebHistory, createRouter } from "vue-router"
import Home from "./views/Home.vue"
import Dashboard from "./views/Dashboard.vue"
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