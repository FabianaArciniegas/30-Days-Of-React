// Ejercicio: Nivel 1


// 1. Declarar una matriz vacía;
  let arrayEmpty = []

// 2. Declarar una matriz con más de 5 números de elementos
  let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 27]

// 3. Encuentra la longitud de tu matriz
  let lengthPrimeNumbers = primeNumbers.length
  console.log (lengthPrimeNumbers)

// 4. Obtener el primer elemento, el elemento del medio y el último elemento de la matriz
  let firstElement =  primeNumbers[0]
  console.log(firstElement)

  let mediumElement = primeNumbers.length / 2
  console.log(primeNumbers[mediumElement - 1])

  let lastElement = primeNumbers.length - 1
  console.log(primeNumbers[lastElement])

// 5. Declare una matriz llamada mixedDataTypes, coloque diferentes tipos de datos en la matriz y encuentre la longitud de la matriz. El tamaño de la matriz debe ser mayor que 5
  let mixedDataTypes = ['hola', 25, 'maria', 'colombia', 85, 'jose']
  console.log(mixedDataTypes.length)

// 6. Declarar un nombre de variable de matriz itCompanies y asignar valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7. Imprime la matriz usando console.log()
  console.log(itCompanies)

// 8. Imprime el número de empresas de la matriz
  console.log(itCompanies.length);

// 9. Imprime la primera empresa, la segunda y la última empresa
  console.log(itCompanies[0]);
  console.log(itCompanies[1]);
  console.log(itCompanies[itCompanies.length - 1])

// 10. Imprime cada empresa
  console.log(itCompanies.toString())
  console.log(itCompanies.join(' '))

// 11. Cambie el nombre de cada empresa a mayúsculas una por una e imprímalas
  console.log(itCompanies[0].toUpperCase())
  console.log(itCompanies[1].toUpperCase())
  console.log(itCompanies[2].toUpperCase())
  console.log(itCompanies[3].toUpperCase())
  console.log(itCompanies[4].toUpperCase())
  console.log(itCompanies[5].toUpperCase())
  console.log(itCompanies[6].toUpperCase())

// 12. Imprima la matriz como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
  console.log(`${itCompanies.join(', ')} son grandes empresas de TI`)

// 13. Compruebe si existe una determinada empresa en la matriz itCompanies. Si existe, devuelve la empresa, de lo contrario, devuelve una empresa no se encuentra
  if (itCompanies.includes('Facebook')){
    console.log('La empresa si existe - Facebook')
  } else {
    console.log('La empresa no se encuentra')
  }

// 14. Filtre las empresas que tienen más de una 'o' sin el método de filtro
  let filterItCompanies = []
  itCompanies.forEach((company) => {
    let count = company.toLowerCase().split('o').length - 1;
    if(count > 1)
      filterItCompanies.push(company)
  })
    console.log(filterItCompanies);

// 15. Ordene la matriz usando el método sort()
  console.log(itCompanies.sort())

// 16. Invierta la matriz usando el método reverse()
  console.log(itCompanies.reverse())

// 17. Corta las 3 primeras empresas de la matriz
  console.log(itCompanies.slice(0,3))
  console.log(itCompanies)

// 18. Corta las últimas 3 empresas de la matriz
  console.log(itCompanies.slice(itCompanies.length - 3))
  console.log(itCompanies)

// 19. Separar a la empresa o empresas de TI intermedias de la matriz
  let intermediaItCompanies = itCompanies.length / 2
  console.log(intermediaItCompanies)
  console.log(itCompanies.slice(intermediaItCompanies, intermediaItCompanies + 1))
  console.log(itCompanies)

// 20 .Quitar la primera empresa de TI de la matriz
  console.log(itCompanies.shift());
  console.log(itCompanies)

// 21. Elimine la empresa o empresas de TI intermedias de la matriz
  let intermediumItCompanies = (itCompanies.length / 2)
  console.log(intermediumItCompanies)
  console.log(itCompanies.splice(intermediumItCompanies, 1))
  console.log(itCompanies)

// 22. Quitar la última empresa de TI de la matriz
  console.log(itCompanies.pop())
  console.log(itCompanies)

// 23. Eliminar todas las empresas de TI
  console.log(itCompanies.splice(0, itCompanies.length))
  console.log(itCompanies)