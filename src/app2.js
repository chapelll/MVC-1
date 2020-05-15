// let click1 = $("#tab-bar").children().eq(0)
// let click2 = $("#tab-bar").children().eq(1)

// let li1 = $("#li1")
// let li2 = $("#li2")

// click1.on("click",()=>{
//     li1.removeClass("active")
//     li2.removeClass("active")
//     li1.addClass("active")
// })

// click2.on("click",()=>{
//     li1.removeClass("active")
//     li2.removeClass("active")
//     li2.addClass("active")
// })

// click1.click()

let tabbar = $("#tab-bar")
let tabcontent = $("#tab-content")
tabbar.on("click","li",(e)=>{
    let c = $(e.currentTarget) //e.currentTarget 指向的是添加了事件的点击对象
    let index = c.index()
    tabcontent.children().removeClass("active").eq(index).addClass("active")
})

tabbar.children().eq(0).click()