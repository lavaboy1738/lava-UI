<template>
    <h1>Dialogue Component</h1>
    <Button @click="toggle">Toggle Dialogue</Button>
    <Dialogue v-model:isVisible="isVisible" 
    :closeOnClickOverlay="false" 
    confirmFn="confirmFn"
    cancelFn = "cancelFn"
    >
    <template v-slot:title>
        <strong>Title</strong>
    </template>
    <template v-slot:content>
        <div>Content</div>
        <div>Biscuits and Gravy</div>
    </template>
    </Dialogue>
</template>

<script lang="ts">
import Dialogue from "../library/Dialogue.vue";
import Button from "../library/Button.vue";
import { ref } from 'vue';
export default {
    components:{Dialogue, Button},
    setup(){
        const isVisible = ref(false);
        const toggle = ()=>{
            isVisible.value = !isVisible.value;
        }
        const confirmFn = ()=>{
            return false;
        }
        const cancelFn = ()=>{
            return false;
        }
        return{
            isVisible,
            toggle, confirmFn, cancelFn,
        }
    }
}
</script>