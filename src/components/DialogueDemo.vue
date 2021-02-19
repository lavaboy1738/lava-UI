<template>
    <h1>Dialogue Component</h1>
    <Button @click="toggle">Toggle Dialogue</Button>
    <Dialogue isVisible="isVisible" />
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
        return{
            isVisible,
            toggle
        }
    }
}
</script>