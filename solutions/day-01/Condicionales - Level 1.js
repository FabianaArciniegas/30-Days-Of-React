// Ejercicios: Nivel 1


// 1. Obtenga la entrada del usuario mediante prompt("Ingrese su edad:").
    // Si el usuario tiene 18 años o más, dé su opinión: "Tiene la edad suficiente para conducir",
    // pero si no tiene 18 años, dé otro comentario indicando que espere el número de años que necesita para cumplir 18 años.

    // let user = prompt('Ingrese su edad:')
    let user = 10
    if(user >= 18){
        console.log('Tiene la edad suficiente para conducir')
    } else {
        console.log(`Te quedan ${18 - user} años para conducir`)
    }

// 2. Compare los valores de myAge y yourAge usando if ... else.
    // Basado en la comparación y registra el resultado en la consola indicando quién es mayor (yo o tú).
    // Use prompt("Ingrese su edad:") para obtener la edad como entrada.
    let myAge = 28
    if(user < myAge){
        console.log(`Eres ${myAge - user} años menor que yo `)
    } else if(user > myAge){
        console.log(`Eres ${user - myAge} años mayor que yo`)
    } else if(user = myAge){
        console.log(`Tenemos la misma edad`)
    }

// 3. Si a es mayor que b, devuelve 'a es mayor que b', de lo contrario, 'a es menor que b'.
    // Intenta implementarlo de dos maneras: Usar if else y operador ternario.
    let a = 4
    let b = 3

    //a. Usar if else
    if(a >= b){
        console.log(`${a} es mayor que ${b}`)
    } else {
        console.log(`${a} es menor que ${b}`)
    }

    //b. Usar operador ternario.
    a >= b ? console.log(`${a} es mayor que ${b}`) : console.log(`${a} es menor que ${b}`)

// 4. Los números pares son divisibles por 2 y el resto es cero. ¿Cómo se comprueba si un número es par o no usa JavaScript?

    // let number = prompt('Ingrese un numero:')
    let number = 17
    let divisible = number % 2
    console.log(divisible)
    if(divisible === 0){
        console.log(`${number} es un numero par`)
    } else if(divisible != 0){
        console.log(`${number} es un numero impar`)
    }