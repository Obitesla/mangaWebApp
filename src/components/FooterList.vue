<template>
    <div class="footerlist">
        <div  v-for="(item, index) in iconList" class="footeritem" @click="jumpTo(item.path,index)" :key="index">
            <span class="iconfont" v-html="item.iconfont"></span>
            <span class="iconname" v-show="index == showFlag">{{item.iconname}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterList",
        data() {
          return {
              showFlag : 0,
              iconList: [
                  {
                      iconfont:'&#xe7b3;',
                      iconname:'订阅',
                      path:'/'
                  },{
                      iconfont:'&#xe743;',
                      iconname:'发现',
                      path:'/find'
                  },{
                      iconfont:'&#xe7b4;',
                      iconname:'搜索',
                      path:'/search'
                  },{
                      iconfont:'&#xe74d;',
                      iconname:'下载',
                      path:'/download'
                  },{
                      iconfont:'&#xe6ef;',
                      iconname:'我的',
                      path:'/info'
                  }
              ]
          }
        },
        mounted() {
            console.log(this.$route.path)
            console.log(this.$route.params)
        },
        computed: {

        },
        methods: {
            jumpTo(path,key){
                this.$router.push({path: path});
                this.showFlag = key;
                console.log(key)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .footerlist
        display flex
        justify-content space-between
        align-items center
        .footeritem
            flex 1
            text-align center
            height 100%
            span
                display inline-block
                line-height 1.2rem
                vertical-align middle
            .iconfont
                font-size 0.5rem
            .iconname
                font-size 0.2rem
</style>
