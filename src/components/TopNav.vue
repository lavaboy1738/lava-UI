<template>
    <div>
        <div class="top-nav">
            <div class="logo" @click="toggleMenu">LOGO</div>
            <ul class="menu">
                <li>Menu1</li>
                <li>Menu2</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    setup(){
        const menuVisible = inject<Ref<boolean>>("menuVisible");
        const toggleMenu = ()=>{
            menuVisible.value = !menuVisible.value;
        }
        return {toggleMenu}
    }
}
</script>

<style lang="scss" scoped>
    .top-nav{
        background: pink;
        display: flex;
        padding: 1rem;
        position: relative;
        z-index: 10;
        .logo{
            max-width: 6rem;
            margin-right: auto;
        }
        .menu{
            display: flex;
            white-space: nowrap;
            flex-wrap: no-wrap;
            li{
                margin: 0 1rem;
            }
        }
    }
</style>