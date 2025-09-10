// Ejercicio de FIZZ BUZZ

for(let i = 1; i <=100; i++ ) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('Fizz Buzz');
    } else if(i %  3 === 0) {
        console.log('FIZZ');
    } else if(i %  5 === 0) {
        console.log('buzz');
    } else {
        console.log(i);
    }
}

for(let i = 1; i <=100; i++ ) {
    switch(0) {
        case i%15:
            console.log('FizzBuzz');
            break;
        case i%3:
            console.log('Fizz');
            break;
        case i%5:
            console.log('Buzz');
            break;
        default:
            console.log(i);
    }
}