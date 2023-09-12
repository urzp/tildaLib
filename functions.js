function eventLoadElement( elementQuerySelector, callBack, interval = 300){
    let tryGetElement = setInterval(()=>{
        if(!document.querySelector(elementQuerySelector)) return false
        clearInterval(tryGetElement)
        callBack()
    }, interval)
}