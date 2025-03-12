function delayedMessage(message, dalay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, dalay);
    });
}

function chainMessages() {
    delayedMessage('One Second', 1000)
    .then(() => delayedMessage('Two Seconds', 2000))
    .then(() => delayedMessage('Three Seconds', 3000))
}

chainMessages()