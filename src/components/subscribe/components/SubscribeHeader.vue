<template>
    <div class="header">
        <img src="../../../../static/678024.png" height="auto" width="100%" />
        <div class="cover">
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SubscribeHeader"
    }
</script>

<style lang="stylus" scoped>
    .header
        overflow hidden
        .cover
            height 4rem
            width 100%
            position absolute
            top 0
            left 0
            background rgba(0,0,0,0.4)
            z-index 10
            display flex
            flex-direction column
            align-items center
            div
                line-height 1rem
                height 1rem
                color #ffffff
</style>
