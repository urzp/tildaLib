//get ready for any element on tilda page

function eventLoadElement( elementQuerySelector, callBack, interval = 300){
    let tryGetElement = setInterval(()=>{
        if(!document.querySelector(elementQuerySelector)) return false
        clearInterval(tryGetElement)
        callBack()
    }, interval)
}

//get Product of tilda

function productParseTilda() {
    try {
        const tildaStoreXHR = window.tStoreXHR;
        const key =  Object.keys(tildaStoreXHR)[0];
        const tildaStore = JSON.parse(tildaStoreXHR[key].response)
        console.log("ready")
        return tildaStore
    } catch (err) {
        console.log("not ready")
        return false;
    }
}