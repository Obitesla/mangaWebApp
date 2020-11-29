<template>
    <div class="subscribe">
        <subscribe-header class="header"></subscribe-header>
        <subscribe-search class="search"></subscribe-search>
        <subscribe-list class="list"></subscribe-list>
    </div>
</template>

<script>
    import SubscribeHeader from './components/SubscribeHeader'
    import SubscribeList from './components/SubscribeList'
    import SubscribeSearch from './components/SubscribeSearch'
    export default {
        name: "SubscribePage",
        components: {
            SubscribeHeader,
            SubscribeList,
            SubscribeSearch
        },
        created() {
            this.$axios.get('http://192.168.124.86:8080/static/mangainfo.json').then(res => {
                this.$store.state.subscribeData = res.data.mangaList;
                this.$store.state.subscribeShowArr = this.$store.state.subscribeData;
                console.log(111)
                // let mangaListArr = res.data.mangaList
                // let rowCount = Math.ceil(mangaListArr.length / 3);
                // this.$store.state.subscribeShowArr = new Array(rowCount);
                // for(let i=0; i<rowCount; i++){
                //     this.$store.state.subscribeShowArr[i] = (mangaListArr.slice(i*3,(i+1)*3))
                // }
                // console.log(this.$store.state.subscribeData)
                // console.log(this.$store.state.subscribeShowArr)
                // console.log(555)
            })
        },
        mounted() {

            // console.log(document.documentElement.style.fontSize)
            // console.log(window.innerHeight)
            // console.log(document.body.clientWidth)
            // console.log(document.body.clientHeight)
        },
        computed: {

        },
        methods: {

        }
    }
</script>

<style lang="stylus" scoped>
    .subscribe
        display flex
        flex-direction column
        overflow hidden
        .header
            background: blue
            flex 0 0 4rem
        .search
            flex 0 0 0.8rem
            background: #ffffff
        .list
            flex 1
            overflow scroll
</style>
