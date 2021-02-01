<template>
  <router-view/>
</template>

<script lang="ts">
import { provide, ref } from 'vue'
export default {
  name: 'App',
  setup(){
    const width = window.innerWidth;
    const menuVisible = ref(width < 500? false: true)
    provide("menuVisible", menuVisible)
  }
}
</script>
