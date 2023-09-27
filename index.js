var buy =document.querySelectorAll(".list li")
var contant=document.querySelector("#contant")
var bto=document.querySelector("#btt")
var proudect=document.querySelectorAll("#prodecut")
var total =0
var totalplace =document.querySelector("place-total")
buy.forEach(function(item){
    item.onclick= function(){
        contant.innerHTML += item.textContent + " + "
        total +=  +(item.getAttribute("price"))
       
         if(contant.innerHTML != "" )
         {
         bto.style.display = "block"
         }
       
    }
  
    
})
bto.onclick = function()
{
  
    document.getElementById("ce").innerHTML =total +"$"
}


