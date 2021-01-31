<template>
  <div>hi <router-link to="/2">go to 2</router-link> <router-link to="/">home</router-link> </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>
