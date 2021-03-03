<template>
    <div>
        <div class="top-nav">
            <div class="logo">LOGO</div>
            <ul class="menu">
                <li>Menu1</li>
                <li>Menu2</li>
            </ul>
            <span class="toggleMenu" @click="toggleMenu">
                <i class='bx bx-menu'></i>
            </span>
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
        display: flex;
        padding: 1rem;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        justify-content: center;
        align-items: center;
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
        .toggleMenu{
            display: none;
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            i{
                font-size: 1.5rem;
            }
        }
        @media (max-width: 500px){
            .menu{
                display: none;
            }
            .logo{
                margin: 0 auto;
            }
            .toggleMenu{
                display: inline-block;
            }
        }
    }
</style>