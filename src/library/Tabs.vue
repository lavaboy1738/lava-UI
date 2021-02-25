<template>
    <div>
        <div v-for="(title, index) in titles" :key="index">{{title}}</div>
        <component v-for="(component, index) in defaults" :key="index" :is="component"/>
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
        const titles = defaults.map((tag)=>{
            return tag.props.title
        })
        return {
            defaults,
            titles
        }
    }
}
</script>