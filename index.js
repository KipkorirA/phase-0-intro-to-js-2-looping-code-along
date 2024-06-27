
// writeCards

function writeCards(names, event) {

    const messages = [];

    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;

        messages.push(message);
    }
    
    return messages;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

//countdown

function countDown() {
    for (let i = 10; i >= 0; i--) {
     console.log(i);
    }
    }