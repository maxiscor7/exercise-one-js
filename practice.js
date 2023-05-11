function multiplicaCadaNumero(array, n){
    // ejercisio: tu tarea es devolver de esta funcion la division de sus parametros pasados...
    //ejemplo: si a vale "6" y b vale "3" la division deveria dar "2"
    //escrive aqui abajo tu codigo:
    return array.map((index) => index * n)
    
}
console.log(multiplicaCadaNumero([10,5,7,8],4))