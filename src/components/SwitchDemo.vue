<template>
    <div>
        <Switch v-model:value="inputValue" />
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from "../library/Switch.vue";
export default {
    components: {Switch},
    setup(){
        const inputValue = ref(false);
        return{inputValue}
    }
}
</script>