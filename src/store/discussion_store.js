export default{
    state:{
        commentNums:""
    },
    actions:{
        ComSummer:function(state,data){
            state.commentNums=data
            console.log("commentNums是"+state.commentNums)
        }
    }
}