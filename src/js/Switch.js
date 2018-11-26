import $ from "jquery";
// 点击左键切换头图
export function Switch(param){ 
    newParam=param;
    let contain=param[0];
    for(let i=0;i<(newParam.length)-1;i++){
        newParam[i]= newParam[1+i];
    }
    newParam[newParam.length-1]=contain;
    
 }