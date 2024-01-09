const btn = document.querySelector("#btn-contact");
btn.addEventListener("mouseover",function(){
    btn.style.backgroundColor="black";
    btn.style.color="white";
})

btn.addEventListener("mouseout",function(){
    btn.style.backgroundColor="white";
    btn.style.color="black";
})