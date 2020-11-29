<template>
    <div class="comiclist">
        <div class="comiccover" style="overflow: hidden; height: 3rem;">
            <img :src=mangaInfo.mangaCover height="auto" width="100%">
        </div>
        <div class="comicname">{{mangaInfo.mangaName}}</div>
        <div class="comicprocess">
            <div class="comicprocesssome" :style="getProcess"></div>
        </div>
        <div class="comicpronum">
            <span>{{mangaInfo.sawNum}}话</span>
            <span>{{this.processatiao}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SubscribeListItem",
        props:{
            mangaInfo: Object
        },
        data() {
          return {
              processatiao: String
          }
        },
        computed: {
            getProcess: function() {
                return 'width: ' + this.processatiao
            }
        },
        mounted: function() {
                this.processatiao = ((this.mangaInfo.sawNum / this.mangaInfo.totalNum)*100).toFixed(2) + "%";
        },
        updated: function() {
            this.processatiao = ((this.mangaInfo.sawNum / this.mangaInfo.totalNum)*100).toFixed(2) + "%";
        }
    }
</script>

<style lang="stylus" scoped>
    .comiclist
        width 90%
        flexcenter()
        flex-direction column
        border-radius 5px
        box-shadow darkgray 3px 3px 3px
        .comiccover
            overflow hidden
            height 3rem
        .comicname
            text-align center
            margin 4px 2px 2px 2px
            width 90%
            font-size 15px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
        .comicprocess
            height 4px
            width 95%
            border-radius 2px
            background #cdcdcd
            margin 2px
            .comicprocesssome
                height 100%
                background-color #555555
                border-radius 2px
        .comicpronum
            display flex
            width 100%
            font-size 0.1rem
            justify-content space-between
            margin 2px
</style>
