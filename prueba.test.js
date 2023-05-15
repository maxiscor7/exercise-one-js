const exerciseOne = require("./exercise-one")

test('sumar dos numeros', () => {
    expect(exerciseOne.suma(3, 3)).toBe(6)
    expect(exerciseOne.suma(3, 7)).toBe(10)
})
test('restar dos numeros', () => {
    expect(exerciseOne.resta(10, 3)).toBe(7)
    expect(exerciseOne.resta(204, 100)).toBe(104)
})
test('multiplicar dos numeros', () => {
    expect(exerciseOne.multiplicacion(3, 3)).toBe(9)
    expect(exerciseOne.multiplicacion(3, 7)).toBe(21)
})
test('dividir dos numeros', () => {
    expect(exerciseOne.division(10, 2)).toBe(5)
    expect(exerciseOne.division(120, 3)).toBe(40)
})
test('es mayor o menor o no es un numero', () => {
    expect(exerciseOne.mayorOmenorDeEdad(23)).toBe('Es mayor')
    expect(exerciseOne.mayorOmenorDeEdad(16)).toBe('Es menor')
    expect(exerciseOne.mayorOmenorDeEdad(46)).toBe('Es mayor')
    expect(exerciseOne.mayorOmenorDeEdad('soy un string')).toBe('No es un numero')
})
test('suma todo el array', () => {
    expect(exerciseOne.sumaTotal([1,2,3,4])).toBe(10)
    expect(exerciseOne.sumaTotal([6,4,25,5])).toBe(40)
})
test('multiplica cada numero en el array', () => {
    expect(exerciseOne.multiplicaCadaNumero([1,2,3,4],2)).toEqual([2,4,6,8])
    expect(exerciseOne.multiplicaCadaNumero([10,5,7,8],4)).toEqual([40,20,28,32])
})
test('Encuentra el numero mayor y sumalo', () => {
    expect(exerciseOne.encuentraMayor([10,2,34,8,90,3])).toBeTruthy()
    expect(exerciseOne.encuentraMayor([105])).toBeFalsy()
    expect(exerciseOne.encuentraMayor([121])).toBeTruthy()
    expect(exerciseOne.encuentraMayor([40,4,7,18,50,30])).toBeTruthy()
    expect(exerciseOne.encuentraMayor([1,5,66,30,17,9])).toBeFalsy()
    
    
})
test('convierte decimal a binario', () => {
    expect(exerciseOne.binario(115)).toBe(1110011)
    expect(exerciseOne.binario(1080)).toBe(10000111000)
    expect(exerciseOne.binario(7)).toBe(111)
    
})