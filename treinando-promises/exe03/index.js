function task1(){
    return new Promise( (resolve, rejetc) => {
        setTimeout( () => {
            console.log('Task 1 terceiro')
            resolve()
        }, 3000)
    })
}

function task2(){
    return new Promise( (resolve, rejetc) => {
        setTimeout( () => {
            console.log('Task 2 primeiro')
        resolve()
        }, 1000)
    })
}

function task3(){
    return new Promise( (resolve, rejetc) => {
        setTimeout( () => {
            console.log('Task 3 segundo')
            resolve()
        }, 2000)
    })
}

function raceTask(){
    task1();
    task2();
    task3();
}

raceTask();