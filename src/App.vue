<template>
  <router-view/>
</template>

<script lang="ts">
import { provide, ref } from 'vue'
export default {
  name: 'App',
  setup(){
    const menuVisible = ref(false)
    provide("menuVisible", menuVisible)
  }
}
</script>
