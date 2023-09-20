//В разработке пока

//получить url можно в tStoreXHR responseURL 
let url = "https://store.tildacdn.com/api/getproductslist/?storepartuid=985363447691&recid=529868719&c=1695188140424&getparts=true&getoptions=true&slice=1&size=100"
let xhr = new XMLHttpRequest()
xhr.open("GET", url)
xhr.send()
let get_store = JSON.parse(xhr.response)