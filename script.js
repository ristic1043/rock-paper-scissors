function randomNum(){

let randomNum = Math.random();
if(randomNum>0){

    return 1;
}
 if(randomNum==0){
    return 2;
 }
 if(randomNum<0){
    return 3;
 }
}
function Racunar(Kompjuter){
 if(Kompjuter==1){
slikaAI.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfbjd6z-RA_Vrs4rbfwdwvge5PyzdSjXudg&s';
}
  if(Kompjuter==2){
slikaAI.src = 'https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyZDkzZmNnemc1czhhOTUxN2h6eWpmbm5yMWxsdTR0bGtlenh2djdubSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Y4VkyhG1RO7pQbQFhF/200.gif';
}
  if(Kompjuter==3){
slikaAI.src = 'https://assets.manufactum.de/p/046/046504/46504_01.jpg/sheep-shears-carbon-steel.jpg?profile=pdsmain_1500';
}

}


function ljud()


function pokreni(odabir){
let slikaMoja = document.getElementById('yourImage');
let slikaAI = document.getElementById('enemyImage');
let Kompjuter = randomNum();
let runde=0;
 




    if(odabir==1){
slikaMoja.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfbjd6z-RA_Vrs4rbfwdwvge5PyzdSjXudg&s';
}
  if(odabir==2){
slikaMoja.src = 'https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyZDkzZmNnemc1czhhOTUxN2h6eWpmbm5yMWxsdTR0bGtlenh2djdubSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Y4VkyhG1RO7pQbQFhF/200.gif';
}
  if(odabir==3){
slikaMoja.src = 'https://assets.manufactum.de/p/046/046504/46504_01.jpg/sheep-shears-carbon-steel.jpg?profile=pdsmain_1500';
}


if(odabir==Kompjuter){
    alert("Tie");
}
if(odabir==1 && Kompjuter==2 || odabir==2 && Kompjuter==3){
    alert("racunar pobednik");
}
else{

}
runde++;
if(runde== 5){
    aler("kraj")
    runde=0;
}
}


