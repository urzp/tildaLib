//get ready for any element on tilda page

function eventLoadElement( elementQuerySelector, callBack, interval = 300){
    let tryGetElement = setInterval(()=>{
        if(!document.querySelector(elementQuerySelector)) return false
        clearInterval(tryGetElement)
        callBack()
    }, interval)
}

//wait ready for any element on tilda page

async function WaitReadyElement(elementQuerySelector, timeRequest = 300, limrequest = 10){
		
    let promise = new Promise((resolve, reject)=>{
        let counter = 0
        let tryGetElement = setInterval(()=>{
            counter++ ; //console.log('tryGet ' + counter)
            if(counter > limrequest) { clearInterval(tryGetElement); return reject(new Error("can't find element " + elementQuerySelector))}
            if(!document.querySelector(elementQuerySelector)) return false
            clearInterval(tryGetElement); return resolve()
        }, timeRequest)
    })

    await promise		
}

//use exsamle
// async function init(){
//     await WaitReadyElement('.counter .t-form')
//     document.querySelector('.counter .t-form').setAttribute('id','vue_app');
// }

// init()

//get Product of tilda

async function productParseTilda(interval = 300, limitTry = 10) {
    let promise = new Promise((resolve, reject)=>{
        let counter = 0
        let tryGetstory = setInterval(()=>{
            counter++;
            try {
                const tildaStoreXHR = window.tStoreXHR;
                const key =  Object.keys(tildaStoreXHR)[0];
                const tildaStore = JSON.parse(tildaStoreXHR[key].response)
                //console.log("ready")
                clearInterval(tryGetstory)
                return resolve(tildaStore)
            } catch (err) {
                //console.log("not ready")
                if(counter > limitTry) return reject(new Error("can't get Tildastore" ));
                
            }
        },interval)
    })

    let result = await promise
    return result
}

//use
// async function init(){
//     window.my_store = await productParseTilda()
//     console.log('get store')
// }
// init()