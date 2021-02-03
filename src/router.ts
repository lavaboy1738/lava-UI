import { createWebHashHistory, createRouter } from "vue-router";
//views 
import Home from "./views/Home.vue";
import Docs from "./views/Docs.vue";
//components
import WelcomeDocs from "./components/WelcomeDocs.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DialogueDemo from "./components/DialogueDemo.vue";

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
            component: SwitchDemo
        },
        {
            path: "button",
            component: ButtonDemo
        },
        {
            path: "tabs",
            component: TabsDemo
        },
        {
            path: "dialogue",
            component: DialogueDemo
        }]
    }]
});