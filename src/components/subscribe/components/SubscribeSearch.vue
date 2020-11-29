<template>
    <div class="search">
        <div class="searchbox">
            <span class="iconfont searchicon">&#xe7b4;</span>
            <input class="searchinput" type="text" placeholder="请输入关键词筛选相关订阅" @input="searchSubscribe" ref="searchCondition" v-model="subscribeSearch"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SubscribeSearch",
        data() {
            return {
                condition: ""
            }
        },
        computed: {
            subscribeSearch: {
                get () {
                    return this.$store.state.subscribeSearch
                },
                set (value) {
                    this.$store.commit('updateMessage', value)
                }
            }
        },
        methods: {
            searchSubscribe: function(){

                this.$store.commit('search')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .search
        display flex
        align-items center
        justify-content center
        .searchbox
            height 0.6rem
            background: #dddddd
            width 90%
            border-radius 0.3rem
            .searchicon
                margin-left 5px
                vertical-align middle
                line-height 0.6rem
            .searchinput
                width 90%
                font-size 0.3rem
                background: #dddddd
</style>
