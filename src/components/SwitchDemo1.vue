<template>
    <Switch v-model:value="bool" />
</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from "../library/Switch.vue";
export default {
     components: {Switch},
    setup(){
        const bool = ref(false);
        return{bool};
    }
}
</script>