import { createWebHashHistory, createRouter } from "vue-router";
//views 
import Home from "./views/Home.vue";
import Docs from "./views/Docs.vue";
//components
import WelcomeDocs from "./components/WelcomeDocs.vue";
import Switch from "./components/Switch.vue";
import Button from "./components/Button.vue";
import Tabs from "./components/Tabs.vue";
import Dialogue from "./components/Dialogue.vue";

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [{
        path: "/",
        component: Home
    },
    {
        path:"/docs",
        component: Docs,
        children: [{
            path: "",
            component: WelcomeDocs
        },{
            path: "switch",
            component: Switch
        },
        {
            path: "button",
            component: Button
        },
        {
            path: "tabs",
            component: Tabs
        },
        {
            path: "dialogue",
            component: Dialogue
        }]
    }]
});