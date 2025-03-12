function countdown(number){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
    
            if(number > 0) {
                console.log(`${number} segundos`)
                resolve(number - 1)
            } else {
                reject(new Error('Feliz Ano Novo!'))
            }
        
        }, 1000)
    })
}


function starCountdown(){
    countdown(5)
    .then(number => countdown(number))
    .then(number => countdown(number))
    .then(number => countdown(number))
    .then(number => countdown(number))
    .then(number => countdown(number))
   .catch((error) => console.error(error.message))
}

starCountdown()