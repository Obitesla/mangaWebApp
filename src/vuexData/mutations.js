export default {
    search: function (state) {
        if(state.subscribeSearch!==''){
            state.subscribeShowArr = state.subscribeShowArr.filter((item) => {
                return item.mangaName.includes(state.subscribeSearch)
            })
        }else{
            state.subscribeShowArr = state.subscribeData
        }
    },
    updateMessage: function(state, message) {
        state.subscribeSearch = message
    }
}
