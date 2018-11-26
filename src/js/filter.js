// 按照价格从高到低排序
export function filterFromLtoH(param){
    param.sort(function(obj1,obj2){
        return obj1.priceFrame-obj2.priceFrame
    })
};

//  按照价格从低到高排序
export function filterFromHtoL(param){
    param.sort(function(obj1,obj2){
        return obj2.priceFrame-obj1.priceFrame
    })
}

// 按照面积从低到高排序
export function areaFromHtoL(param){
    param.sort(function(obj1,obj2){
        return obj1.area-obj2.area
    })
}

// 按照面积从高到低排序
export function areaFromLtoH(param){
    param.sort(function(obj1,obj2){
        return obj2.area-obj1.area
    })
}