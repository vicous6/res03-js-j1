for (let i =0; i< 100;i++){
    
    if(i>= 0 && i <= 50 && i%2===0){
    
    
    console.log(i)
    }
    
     if(i>= 51 && i <= 100 && i%3===0){
    
    
            if(i%2===0) {
                console.log(i + " pair")
            }else{
               console.log(i + " impair")  
            }
    }
}