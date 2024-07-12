// Ejercicios: Nivel 2


// 1. Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
    // 80-100, A
    // 70 a 89, B
    // 60-69, C
    // 50 a 59, D
    // 0-49, F

    let calificacion = prompt('Ingrese su calificacion:')
    switch(true){
        case (calificacion >= 80 && calificacion <= 100):
            console.log('Su calificacion es A')
            break
        case (calificacion >= 70 && calificacion <= 89):
            console.log('Su calificacion es B')
            break
        case (calificacion >= 60 && calificacion <= 69):
            console.log('Su calificacion es C')
            break
        case (calificacion >= 50 && calificacion <= 59):
            console.log('Su calificacion es D')
            break
        case (calificacion >= 0 && calificacion <= 49):
            console.log('Su calificacion es F')
            break
        default:
            console.log('No es una calificacion valida')
    }

// 2. Comprueba si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es:
    // Septiembre, octubre o noviembre, la temporada es otoño.
    // Diciembre, enero o febrero, la temporada es invierno.
    // Marzo, abril o mayo, la temporada es primavera
    // Junio, julio o agosto, la temporada es verano

    let mes = prompt('Ingrese un mes:')
    switch(mes){
        case 'septiembre':
        case 'octubre':
        case 'noviembre':
            console.log('La temporada es Otoño')
            break
        case 'diciembre':
        case 'enero':
        case 'febrero':
            console.log('La temporada es Invierno')
            break
        case 'marzo':
        case 'abril':
        case 'mayo':
            console.log('La temporada es Primavera')
            break
        case 'junio':
        case 'julio':
        case 'agosto':
            console.log('La temporada es Verano')
            break
        default:
            console.log('Mes no existe')
    }


// 3. Compruebe si un día es un día de fin de semana o un día laborable. Su guión tomará el día como entrada.

    let dia = prompt('Ingrese un dia:')
    switch(dia){
        case 'lunes':
        case 'martes':
        case 'miercoles':
        case 'jueves':
        case 'viernes':
            console.log('Es un dia laborable')
            break
        case 'sabado':
        case 'domingo':
            console.log('Es un dia de fin de semana')
            break
        default:
            console.log('Dia no existe')
    }