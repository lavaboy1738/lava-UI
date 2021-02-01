<template>
    <div>
        <div class="top-nav">
            <div class="logo">LOGO</div>
            <ul class="menu">
                <li>Menu1</li>
                <li>Menu2</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .top-nav{
        background: pink;
        display: flex;
        padding: 1rem;
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