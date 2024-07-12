// Ejercicio: Nivel 2


// 1. Cree un archivo countries.js independiente y almacene la matriz countries en este archivo, cree un archivo separado web_techs.js y almacene la matriz webTechs en este archivo. 
    // Acceder a ambos archivos en main.js archivo
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
    const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// 2. Primero elimine todos los signos de puntuación y cambie la cadena a matriz y cuente el número de palabras en la matriz

    let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

    words = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    console.log(words)
    array = words.split(' ')
    console.log(array)
    console.log(array.length)

// 3. En la siguiente cesta de la compra añadir, eliminar, editar artículos

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

    // a. agregue 'Carne' al comienzo de su carrito de compras si aún no se ha agregado
    shoppingCart.unshift('Meat')
    console.log(shoppingCart)

    // b. agregue azúcar al final de su carrito de compras si aún no se ha agregado
    shoppingCart.push('Sugar')
    console.log(shoppingCart)

    // c. Elimine 'Miel' si es alérgico a la miel
    let indexHoney = shoppingCart.indexOf('Honey')
    console.log(indexHoney)
    console.log(shoppingCart.splice(indexHoney, 1))
    console.log(shoppingCart)

    // d. modificar Té a 'Té Verde'
    let indexTea = shoppingCart.indexOf('Tea')
    console.log(indexTea)
    shoppingCart[indexTea] = 'Tea Green'
    console.log(shoppingCart)

// 4. En la matriz de países, compruebe si existe 'Etiopía' en la matriz, si existe, imprima 'ETIOPÍA'. Si no existe, agréguelo a la lista de países.
    //Ejemplo, por SI existe.
    if(countries.includes('Ethiopia')){
        console.log('Ethiopia')
    } else {
        countries.push('Ethiopia')
    }
    console.log(countries)

    //Ejemplo, por si NO existe.
    if(countries.includes('Colombia')){
        console.log('Colombia')
    } else {
        countries.push('Colombia')
    }
    console.log(countries)


// 5. En la matriz webTechs, compruebe si Sass existe en la matriz y, si existe, imprima 'Sass es un preproceso CSS'. Si no existe, agregue Sass a la matriz e imprima la matriz.
    //Ejemplo, por si NO existe.
    if(webTechs.includes('Sass')){
        console.log('Sass es un preproceso CSS')
    } else {
        webTechs.push('Sass')
    }
    console.log(webTechs)

    //Ejemplo, por SI existe.
    if(webTechs.includes('Sass')){
        console.log('Sass es un preproceso CSS')
    } else {
        webTechs.push('Sass')
    }
    console.log(webTechs)

// 6. Concatene las dos variables siguientes y guárdelas en una variable fullStack.

    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node', 'Express', 'MongoDB']

    let fullStack = frontEnd.concat(backEnd)
    console.log(fullStack)

