import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
//views 
import Home from "./views/Home.vue";
import Docs from "./views/Docs.vue";


const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [{
        path: "/",
        component: Home
    },
    {
        path:"/docs",
        component: Docs
    }]
});

const app = createApp(App);
app.use(router);
app.mount("#app");

