var data=document.getElementById("div1")
var img=document.createElement("img")
var ptag=document.createElement("p")
var atag=document.createElement("a")
var buttontag=document.createElement("button");

img.setAttribute("src","https://images.indianexpress.com/2023/12/salaar-1.jpg")
img.style.width="310px";
img.style.height="50%";
img.style.paddingLeft="42.5px"
img.style.paddingTop="35px"
img.style.paddingBottom="35px"

img.addEventListener("mouseover",function(){
  
    img.src="https://www.businessoftollywood.com/wp-content/uploads/2023/12/SALAAR-GUN-POSTER-PLAIN-e1703248175742.jpg";
})
img.addEventListener("mouseout",function(){
  
    img.src="https://m.media-amazon.com/images/M/MV5BYmNlN2U1ZDgtNDA2My00YjlmLTkwN2EtN2U1YmZiYTNiY2I5XkEyXkFqcGc@._V1_.jpg";
})


data.style.border="3px  solid grey";
data.style.borderRadius="10px";
data.style.height="500px"
data.style.width="400px"
data.style.padding="15px"
data.style.backgroundColor="#FFE6A9"
data.style.margin="auto"

atag.setAttribute("href","https://www.imdb.com/title/tt13927994/");
atag.innerHTML=("IMDB");
atag.style.paddingLeft="10px";

buttontag.innerHTML="Click More";
buttontag.onclick= function(){
    alert("Salaar 2- Shouryanga Parvam   Comming Soon....");
    confirm("IMDB Rating is 7.8")
}
ptag.innerHTML='<b> Salaar: Part1- Ceasefire </b>(: Part 1 Ceasefire) is a 2023 Indian Telugu-language epic action thriller film directed by Prashanth Neel and produced by Vijay Kiragandur under Hombale Films. The film stars <i>Prabhas</i> as the title character <br> The fate of a violently contested kingdom hangs on the fraught bond between two friends-turned-foes in this saga of power, bloodshed and betrayal.'
ptag.addEventListener("mouseover",function(){
    ptag.style.color="red";
})
ptag.addEventListener("mouseout",function(){
    ptag.style.color="black";
})

buttontag.addEventListener("mouseover",function(){
    buttontag.style.backgroundColor="orange";
    buttontag.style.border="none";
    buttontag.style.borderRadius="4.5px";
    buttontag.style.color="green";
    buttontag.style.height="30px"
    buttontag.style.width="120px";
    //  buttontag.style.marginLeft="100px"
   
})
buttontag.addEventListener("mouseout",function(){
    buttontag.style.color="black";
    buttontag.style.borderRadius="10px";
    buttontag.style.marginLeft="100px"

})


data.append(img,ptag,buttontag,atag);





  