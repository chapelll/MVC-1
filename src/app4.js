let circle = $("#circle")
circle.on("mouseenter",()=>{
    circle.addClass("active")
})
circle.on("mouseleave",()=>{
    circle.removeClass("active")
})