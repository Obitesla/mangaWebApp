<template>
    <keep-alive>
        <div id="app" class="main">
            <router-view class="content"></router-view>
            <footer-list class="foot border-top"></footer-list>
        </div>
    </keep-alive>

</template>

<script>
import FooterList from './components/FooterList'
export default {
    name: 'App',
    components: {
        FooterList
    }
}
</script>

<style lang="stylus" scoped>
    .main
        display flex
        flex-direction column
        height 100%
        .content
            flex 1
        .foot
            flex 0 0 1.2rem
            border-radius 5px
</style>
