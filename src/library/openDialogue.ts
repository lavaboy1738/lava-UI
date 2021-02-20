import Dialogue from "./Dialogue.vue";
import {createApp, h} from "vue";

export const openDialogue = (options)=>{
    const {title, content, confirmFn, cancelFn} = options;
    const tempDiv = document.createElement("div");
    document.body.appendChild(tempDiv);
    const closeDialogue = ()=>{
        app.unmount(tempDiv);
        tempDiv.remove();
    }
    const app = createApp({
        render(){
            return h(Dialogue, 
            //props
                {
                    isVisible: true,
                    "onUpdate:isVisible" : (newVisible) => {
                        if(newVisible === false){
                            closeDialogue();
                        }
                    },
                    confirmFn, cancelFn,
                },
            //slots
                {
                    title, content,
                }
            )
        }
    })
    app.mount(tempDiv);
}