<template>
    <div class="lava-tabs">
        <div class="lava-tabs-nav">
            <div class="lava-tabs-nav-item" 
            v-for="(title, index) in titles" :key="index"
            :class="{selected: title === selected}"
            @click="selectTab(title)"
             >{{title}}</div>
             <div class="lava-tabs-nav-indicator"></div>
        </div>
        <div class="lava-tabs-content">
            <component class="lava-tabs-content-item" v-for="(component, index) in defaults" 
            :key="index" :is="component"
            :class="{selected: component.props.title === selected}"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
    props:{
        selected: {
            type: String,
        }
    },
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

        const selectTab = (title: string)=>{
            context.emit("update:selected", title)
        }
        return {
            defaults,
            titles,
            selectTab
        }
    }
}
</script>

<style lang="scss">
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;
    .lava-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;
        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;
                &:first-child {
                    margin-left: 0;
                }
                &.selected {
                    color: $blue;
                }
            }
            &-indicator {
                position: absolute;
                height: 3px;
                background: $blue;
                left: 0;
                bottom: -1px;
                width: 100px;
            }
        }
        
        &-content {
            padding: 8px 0;
            &-item{
                display: none;
                &.selected{
                    display: block;
                }
            }
        }
    }
</style>