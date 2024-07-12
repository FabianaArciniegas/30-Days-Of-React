// Ejercicio: Nivel 3


// 1. La siguiente es una matriz de 10 edades de los estudiantes:

    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

    //a. Ordene la matriz y encuentre la edad mínima y máxima
    let orderAges = ages.sort()
    console.log(orderAges)

    let miniumAges = Math.min(...ages)
    console.log(miniumAges)

    let maxiumAges = Math.max(...ages)
    console.log(maxiumAges)

    //b. Encuentre la edad mediana (un elemento del medio o dos elementos del medio divididos por dos)
    let mediumAges = ages.length / 2
    console.log(mediumAges)
    console.log(ages[mediumAges])

    //c. Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
    let averogeAges =  (miniumAges + maxiumAges) / 2
    console.log(averogeAges)

    let totalAges = ages.reduce((a,b) => a + b, 0 )
    console.log(totalAges)
    let lengthAges = ages.length
    console.log(lengthAges)
    let promedioAges = totalAges / lengthAges
    console.log(promedioAges)

    //d. Encuentre el rango de las edades (máximo menos mínimo)
    let rangeAges = maxiumAges - miniumAges
    console.log(rangeAges)

    //e. Compare el valor de (mínimo - promedio) y (máximo - promedio), Utilice el método abs()
    let compMinAve = miniumAges - promedioAges
    console.log(Math.abs(compMinAve))

    let compMaxAve = maxiumAges - promedioAges
    console.log(Math.abs(compMaxAve))

// 2. Cortar los primeros diez países de la matriz de países
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

    console.log(countries.slice(0, 10))
    console.log(countries)

// 3. Encuentre los países intermedios en la matriz de países
    let medium = Math.round(countries.length / 2)
    console.log(medium)
    console.log(countries[medium - 1])

// 4. Divida la matriz de países en dos matrices iguales si es par. Si la matriz de países no es par, un país más para la primera mitad.
    let primerCountries = countries.slice(0, medium)
    console.log(primerCountries)

    let secondCountries = countries.slice(medium)
    console.log(secondCountries)