console.log("Esercizio")

// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero 
// e per i multipli di 5 stampi Buzz. 
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

for (let i = 0; i < 100; i++) {
  let num = i +1

  if (num % 3 === 0 && num % 5 === 0) {
    console.log(`FizzBuzz:${num}`)
  }

  else if (num % 3 === 0) {
    console.log(`Fizz:${num}`)

  } else if (num % 5 === 0) {
    console.log(`Buzz:${num}`)

  } else {
    console.log(`Numero= ${num}`)
  }
}


