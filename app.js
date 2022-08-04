const  boton=document.querySelector(".boton")
const uno=document.getElementById("uno")
const dos=document.getElementById("dos")
const tres=document.getElementById("tres")
const cuatro=document.getElementById("cuatro")
const cinco=document.getElementById("cinco")
const rango=document.querySelector(".selector")
const  contenedor=document.querySelector(".botones")
const main=document.querySelector(".main")



const botones=[uno,dos,tres,cuatro,cinco]


botones.forEach(bton =>
  bton.addEventListener("click",function(){
    document.querySelector(".rango").innerHTML=bton.value;
    main.setAttribute("id","main")
    
     
  })
  
    );

     
   /*boton de cambio de aplicacion */
   boton.addEventListener("click",function(){
          const r=!!document.getElementById("main")
           console.log(r)
         if(r){
           document.getElementById("main").style.display="none"
            /*document.querySelector(".main-activo").style.display="none"*/
            document.querySelector(".card2").style.display="flex ";
         }else{
             alert("Seleciona un numero del rango del 1 al 5")
         }
        });
        
