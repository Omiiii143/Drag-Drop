const light = document.querySelector(".light")
const button  = document.querySelector(".button")

let flag = 0;

button.addEventListener("click",function(){
    if(flag ==0){
        light.src = "https://pngimg.com/d/bulb_PNG1243.png"
        flag =1;
    }
    else{
        light.src = "https://5.imimg.com/data5/WL/SG/MY-8835990/10w-gls-light-bulb-500x500.jpg"

        flag=0;
    }
})
