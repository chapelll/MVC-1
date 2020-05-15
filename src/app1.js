let n = parseInt(localStorage.getItem("n")) || 100
$("#app1 #output #number").text(n)

let add1 = $("#add1")
let minu1 = $("#minus1")
let mul2 = $("#mul2")
let divide2 = $("#divide2")

add1.on("click", () => {
    n = n + 1
    localStorage.setItem("n",n)
    $("#app1 #output #number").text(n)
})
minu1.on("click", () => {
    n = n - 1
    localStorage.setItem("n",n)
    $("#app1 #output #number").text(n)
})
mul2.on("click", () => {
    n = n * 2
    localStorage.setItem("n",n)
    $("#app1 #output #number").text(n)
})
divide2.on("click", () => {
    n = n / 2
    localStorage.setItem("n",n)
    $("#app1 #output #number").text(n)
})
