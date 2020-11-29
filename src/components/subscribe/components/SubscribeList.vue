<template>
    <div class="mangaContent">
        <!--漫画刷新组件设计为与漫画列表组件设置为同一层，为了让此组件在初始状态不显示，通过设置marginTop将其顶到上方，显示时通过设置marginTop将其移动下来-->
        <div class="refresh" style="margin-top: -60px" ref="refreshPlane">
            <div class="refreshcontent"><span class="iconfont" style="margin: 10px; font-size: 20px">&#xe506;</span><span style="font-weight: bold" ref="refreshText">下拉刷新</span></div>
        </div>
        <!--为漫画的列表元素添加touchstart/touchmove/touchend三个事件-->
        <!--触发touchstart事件：获取touch事件的clientY,并设置刷新初始文字为“下拉刷新”-->
        <!--触发touchmove事件：再获取touch事件的clientY，计算两个clientY的差值，通过此差值改变marginTop，若差值超过界限则表示要刷新，此时改变标志位；反之不刷新-->
        <!--触发touchend事件：根据标志位要更新时发送axios请求，并重新渲染；不更新时则直接变回原样-->
        <div class="list" @touchstart="showRefreshPlane" @touchmove="showY" @touchend="doRefresh">
            <div class="list-row" v-for="(listItem,listIndex) in this.$store.getters.createMangaList" :key="listIndex">
                <div class="list-column" v-for="(item,index) in listItem" :key="index">
                    <subscribe-list-item :mangaInfo="item"></subscribe-list-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SubscribeListItem from './SubscribeListItem'
export default {
    name: "SubscribeList",
    components: {
        SubscribeListItem
    },
    data() {
        return {
            startY: 0,
            distance: 0,
            isRefresh: false,
            isBack: false,
            isDone: true,
            mangaList: Array,
            listRow: Array,
            timer: 0
        }
    },
    created() {
        // console.log(this.$store.state.subscribeData)
        // this.getManga()
    },
    methods: {
        // getManga: function() {
        //     this.$axios.get('http://192.168.124.86:8080/static/mangainfo.json').then(res => {
        //         this.$store.state.subscribeData = res.data.mangaList;
        //         let data = res.data;
        //         this.mangaList = data.mangaList;
        //         let rowCount = Math.ceil(this.mangaList.length / 3);
        //         this.listRow = new Array(rowCount);
        //         for(let i=0; i<rowCount; i++){
        //             this.listRow[i] = (this.mangaList.slice(i*3,(i+1)*3))
        //         }
        //     })
        //     console.log(666)
        // },
        showRefreshPlane: function (e) {
            console.log(this.isDone)
            if(this.isDone){
                this.startY = e.targetTouches[0].clientY;
                this.$refs.refreshText.textContent = '下拉刷新';
            }
        },
        showY: function (e) {
            if(this.isDone){
                this.distance = e.targetTouches[0].clientY - this.startY;
                if(this.distance>0 && this.distance<60){
                    this.$refs.refreshPlane.style.marginTop = (-60 + this.distance) + 'px';
                    this.$refs.refreshText.textContent = '下拉刷新';
                    this.isRefresh = false
                }else if(this.distance>=60){
                    this.$refs.refreshPlane.style.marginTop = '0px';
                    this.isRefresh = true;
                    this.$refs.refreshText.textContent = '松开刷新页面'
                }
                this.isBack = true
            }
        },
        doRefresh: function () {
            if(this.isBack){
                if(this.isRefresh){
                    this.isDone =false;
                    this.$refs.refreshText.textContent = '正在加载，请稍后···^-^'
                    console.log('开始更新');
                    this.$axios.get('http://192.168.124.86:8080/static/mangainfo.json').then(res => {
                        for(let i=60; i>=0; i--){
                            this.timer = setTimeout(() => {
                                this.$refs.refreshPlane.style.marginTop = (-60 + i) + 'px';
                                if(this.$refs.refreshPlane.style.marginTop === '-55px'){
                                    console.log(this.isDone)
                                    this.isDone = true;
                                }
                            },4*(60 - i));
                        }
                        this.$store.state.subscribeData = res.data.mangaList;
                        this.$store.state.subscribeShowArr = this.$store.state.subscribeData;
                        this.$store.state.subscribeSearch = '';

                    })
                    // //模拟加载的等待时间
                    // setTimeout(() => {
                    //     for(let i=60; i>=0; i--){
                    //         this.timer = setTimeout(() => {
                    //             this.$refs.refreshPlane.style.marginTop = (-60 + i) + 'px';
                    //             if(this.$refs.refreshPlane.style.marginTop === '-55px'){
                    //                 console.log(this.isDone)
                    //                 this.isDone = true;
                    //             }
                    //         },4*(60 - i));
                    //     }
                    // },600);



                }else{
                    for(let i=this.distance; i>=0; i--){
                        this.timer = setTimeout(() => {
                            this.$refs.refreshPlane.style.marginTop = (-60 + i) + 'px';
                        },6*(this.distance - i))
                    }
                }
                this.isRefresh = false;
                this.isBack = false;
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "../../../assets/style/flex.styl"
    .mangaContent
        display flex
        flex-direction column
        .refresh
            flexcenter()
            flex 0 0 60px
            .refreshcontent
                flexcenter()
        .list
            display flex
            flex-direction column
            .list-row
                flex 1
                display flex
                height 4rem
                .list-column
                    flexcenter()
                    flex 0 1 33.33%
                    height 4rem
                    overflow hidden
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
