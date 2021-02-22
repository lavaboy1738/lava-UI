<template>
    <div>
        Tabs Component
    </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
    setup(props, context){
        //checking the type of Tabs's children and make sure they're all the Tab type. 
        const defaults = context.slots.default();
        defaults.forEach((tag)=>{
            if(tag.type !== Tab){
                throw new Error("Tabs's children must be Tab")
            }
        })
    }
}
</script>