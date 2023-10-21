let canvas=document.getElementById("canvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let c=canvas.getContext("2d");

/* its for line*/
function f(event){
    let {clientX,clientY}=event;
    console.log(clientX,clientY);
    c.beginPath();
    c.moveTo(clientX,clientY);
    c.strokeStyle="red";
    c.lineWidth=2;
}
function g(event){
    let {clientX,clientY}=event;
    console.log(clientX,clientY);
    c.lineTo(clientX,clientY);
    c.stroke();
    c.closePath();
}

let line=document.querySelector(".minus");
line.addEventListener("click",onclick);
    let isline=false;
   function onclick(){
           line.classList.toggle("active");
           isline=!isline;
           if(isline){
            canvas.addEventListener("mousedown",f);
            canvas.addEventListener("mouseup",g);
           }
           else{
            canvas.removeEventListener("mousedown",f);
            canvas.removeEventListener("mouseup",g);
           }
   }
 

   /* its for card*/
   let menu=document.querySelector(".menu");
   let card =document.querySelector(".card");
   menu.addEventListener("click",display);
   function display(){
          card.classList.toggle("display");
   }


/* its for pencil*/
   let pencil=document.querySelector(".pencil");
   pencil.addEventListener("click",p_click);
   let ispencile=false;
   function p_click(){
    pencil.classList.toggle("active");
    ispencile=!ispencile;
    if(ispencile){
        canvas.addEventListener("mousedown",p_down);
    }
    else{
        canvas.removeEventListener("mousedown",p_down);
    }
   }


   /* its for free hand*/
   canvas.addEventListener("mousedown",p_down);
       let prev=null;
   function p_down(e){
          prev=[e.clientX,e.clientY];
          c.strokeStyle="green";
       c.lineWidth=3;
       canvas.addEventListener("mousemove",p_move);
       canvas.addEventListener("mouseup",p_up);
   }
   function p_move(e){
             let curr=[e.clientX,e.clientY];

             c.beginPath();
             c.moveTo(...prev);
             c.lineTo(...curr);
             c.stroke();
             c.closePath();
             prev=curr;
   }
   function p_up(e){
    canvas.removeEventListener("mousemove",p_move);
   }



   /* its for pencil*/
