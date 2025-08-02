let  main = document.querySelector(".main");

let cur = document.querySelector(".cousor")
  
  main.addEventListener("mousemove",function( dets){
  cur.style.left = dets.x+"px"
  cur.style.top = dets.y+"px"
  }
  )
