

const bulb =
document.querySelector(".light");
const btn1 =
document.querySelector(".btn1");
const btn2 =
document.querySelector(".btn2");
const superbutton1 =
document.querySelector(".superbutton1");
const superbutton2 =
document.querySelector(".superbutton2");
const topsuperbutton =
document.querySelector(".topsuperbutton");




btn1.addEventListener("click" ,function(){
          bulb.src = "bulb2.png";
          bulb.style.filter = "drop-shadow(0 0 20px #fff179) drop-shadow(0 0 40px #ffd54f) drop-shadow(0 0 60px #ffeb3b)"
});

btn2.addEventListener("click",function(){
     bulb.src = "bulb.png";
     bulb.style.filter = "none" 
      // document.body.style.backgroundColor="black" 
     
});

superbutton1.addEventListener("click",function(){
    let a = 0
    if(a===0){
      document.body.style.backgroundColor="white"
      superbutton2.style.backgroundColor="black"
      topsuperbutton.style.border = "2px solid black"
      
    }
   
})
superbutton2.addEventListener("click",function(){
    let a = 0
    if(a===0){
      document.body.style.backgroundColor="black"
        topsuperbutton.style.border = "2px solid white"
            
    }
   
})


