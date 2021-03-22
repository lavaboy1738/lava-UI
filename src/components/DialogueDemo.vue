<template>
    <h1>Dialogue Component</h1>
    <Button @click="toggle">Toggle Dialogue</Button>
    <Dialogue v-model:isVisible="isVisible" 
    :closeOnClickOverlay="true"
    v-bind:confirmFn="confirmFn"
    v-bind:cancelFn = "cancelFn"
    >
    <template v-slot:title>
        <div>Dialogue Title</div>
    </template>
    <template v-slot:content>
        <div>Click the outside overlay to close the window</div>
    </template>
    </Dialogue>
    <h1>Open Dialogue Function</h1>
    <Button @click="showDialogue">Show Dialogue</Button>
</template>

<script lang="ts">
import Dialogue from "../library/Dialogue.vue";
import Button from "../library/Button.vue";
import {openDialogue} from "../library/openDialogue";
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
        const showDialogue = ()=>{
            openDialogue({
                title: "Open Dialogue Function",
                content: "This dialogue is opened through a function.",
            });
        }
        return{
            isVisible,
            toggle, confirmFn, cancelFn,
            showDialogue,
        }
    }
}
</script>