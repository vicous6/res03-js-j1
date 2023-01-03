function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log()

let truc;
let number = getRandomInt(100);

console.log(truc , number)
while(number !== parseInt(truc)){
    
    
    
     truc = window.prompt("deviner le nombre entre 1 et 100")
    console.log(truc)
    
    if(parseInt(truc)< number){
      alert("c'est plus")
    }else
      if(parseInt(truc)> number){
      alert("c'est moins ")
    }
    
    
    
    
}

alert("bravo tu as trouvé la reponse ")