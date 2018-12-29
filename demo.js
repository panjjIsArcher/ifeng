// 创建promise容器
new Promise(function(resolve,reject){
    // 执行一个异步函数，如果函数执行成功，则返回resolve(data),反之则执行reject(err)
}).then(function(data){
    // 如果函数执行成功，则执行then()，其中function(data)为resolve(data)
},function(err){
    // 如果函数执行不成功，则执行catch()，其中function(err)为rejct(err)
})