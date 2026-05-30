let runde=0;
let brojacLik=0;
let brojacKomp=0;
function randomNum(){

let randomNum = Math.random();
return Math.floor(Math.random() * 3) + 1;
}

function Racunar(Kompjuter, slikaAI){

if(Kompjuter==1){
 return slikaAI.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfbjd6z-RA_Vrs4rbfwdwvge5PyzdSjXudg&s';

}
  if(Kompjuter==2){
 return slikaAI.src = 'https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyZDkzZmNnemc1czhhOTUxN2h6eWpmbm5yMWxsdTR0bGtlenh2djdubSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Y4VkyhG1RO7pQbQFhF/200.gif';

}

  if(Kompjuter==3){
 return slikaAI.src = 'https://assets.manufactum.de/p/046/046504/46504_01.jpg/sheep-shears-carbon-steel.jpg?profile=pdsmain_1500';
}

}

function covek(odabir, slikaMoja){

      if(odabir==1){
return slikaMoja.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfbjd6z-RA_Vrs4rbfwdwvge5PyzdSjXudg&s';
}
  if(odabir==2){
return slikaMoja.src = 'https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyZDkzZmNnemc1czhhOTUxN2h6eWpmbm5yMWxsdTR0bGtlenh2djdubSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Y4VkyhG1RO7pQbQFhF/200.gif';
}
  if(odabir==3){
 return slikaMoja.src = 'https://assets.manufactum.de/p/046/046504/46504_01.jpg/sheep-shears-carbon-steel.jpg?profile=pdsmain_1500';
}
}

function Odred(odabir, Kompjuter){
if(odabir==Kompjuter){
    
    
}
else if((odabir==1 && Kompjuter==2)  || ( odabir==2 && Kompjuter==3)|| (odabir==3 && Kompjuter==1)){
    
brojacKomp++;
}
else{
    

brojacLik++;
}
runde++;
}


function pokreni(odabir){
    let slikaMoja = document.getElementById('yourImage');
let slikaAI = document.getElementById('enemyImage');
let Gledanje= document.getElementById('pobednik');
let Kompjuter = randomNum();
   if(runde>=5){
    return;
}


  
covek(odabir, slikaMoja);
Racunar(Kompjuter, slikaAI);


Odred(odabir, Kompjuter);



  if(runde==5){
     if(brojacLik>brojacKomp){
     Gledanje.textContent="ljud pobednik";
  }
  else if(brojacLik<brojacKomp){
     Gledanje.textContent="racunar pobednik";
  }
  else{
    Gledanje.textContent="nereseno";
  }
  
}

     
   

  


}


