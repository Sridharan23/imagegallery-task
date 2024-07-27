let img1 =document.getElementById("aa")
let img2 =document.getElementById("bb")
let img3 =document.getElementById("cc")
let close1 = document.querySelector(".close1")
let close2 = document.querySelector(".close2")
let close3 = document.querySelector(".close3")


let one =document.getElementById("one")
let two =document.getElementById("two")
let three =document.getElementById("three")

img1.addEventListener("click",()=>{
   
    one.style.display = "block"
})
img2.addEventListener("click",()=>{
    two.style.display = "block"
})
img3.addEventListener("click",()=>{
    three.style.display = "block"
})



close1.addEventListener("click",()=>{
    one.style.display="none"
     
})
close2.addEventListener("click",()=>{
  two.style.display="none"
})

close3.addEventListener("click",()=>{
    
     
      three.style.display="none"
})

