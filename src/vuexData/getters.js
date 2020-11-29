export default {
    createMangaList(state) {
        // console.log(state.subscribeData.toString())
        let data = state.subscribeShowArr;
        if(data){
            let rowCount = Math.ceil(data.length / 3);
            let subscribeShowArr = new Array(rowCount);
            for(let i=0; i<rowCount; i++){
                console.log(subscribeShowArr)
                subscribeShowArr[i] = (data.slice(i*3,(i+1)*3))
            }
            return subscribeShowArr
        }
    }
}
