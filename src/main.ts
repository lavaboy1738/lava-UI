import { createApp } from "vue";
import App from "./App.vue";
import Ronnie from "./components/Ronnie.vue";
import Ronnie2 from "./components/Ronnie2.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [{
        path: "/",
        component: Ronnie
    },
    {
        path:"/2",
        component: Ronnie2
    }]
});

const app = createApp(App);
app.use(router);
app.mount("#app");

