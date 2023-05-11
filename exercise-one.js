
module.exports = {
    
    suma(a, b){
        // ejercisio: tu tarea es devolver de esta funcion la suma de sus parametros pasados...
        //ejemplo: si a vale "5" y b vale "10" la suma deveria dar "15"
        //escrive aqui abajo tu codigo:
        return a + b
    },

    resta(a, b){
        // ejercisio: tu tarea es devolver de esta funcion la resta de sus parametros pasados...
        //ejemplo: si a vale "25" y b vale "10" la resta deveria dar "15"
        //escrive aqui abajo tu codigo:
        return a - b
    },

    multiplicacion(a, b){
        // ejercisio: tu tarea es devolver de esta funcion la multiplicacion de sus parametros pasados...
        //ejemplo: si a vale "5" y b vale "10" la multiplicacion deveria dar "50"
        //escrive aqui abajo tu codigo:
        return a * b
    },
    
    division(a, b){
        // ejercisio: tu tarea es devolver de esta funcion la division de sus parametros pasados...
        //ejemplo: si a vale "6" y b vale "3" la division deveria dar "2"
        //escrive aqui abajo tu codigo:
        return a / b
    },

    mayorOmenorDeEdad(num){
        // ejercisio: tu tarea es devolver un string que compare el numero pasado por parametro si es mayor o menor de edad o no es un numero
        //ejemplo: si num es 32 deves devolver "Es mayor" , si num es 15 deves devolver "Es menor"
        // y si num no es un numero deves devolver "No es un numero"
        //No olvides escrivirlo tal cual figura en el ejemplo
        //escrive aqui abajo tu codigo:
        if(num >= 18){
            return 'Es mayor'
        }
        else if(num < 18){
            return 'Es menor'
        }
        else if(typeof num !== 'number'){
            return 'No es un numero'
        }
    },

    sumaTotal(array){
        // ejercisio: tu tarea es devolver la suma total de todos los numeros en el array
        //ejemplo: si array es [1,2,3,4] deves devolver 10 , si array es [20,3,1] deves devolver 24
        //escrive aqui abajo tu codigo:
        return array.reduce((a, b) => a + b)
    },

    multiplicaCadaNumero(array, n){
        // ejercisio: se te dara un array y un numero(n) tu tarea es devolver un array con cada numero multiplicado por (n)
        //ejemplo: si array es [1,2,3,4,5] deves devolver [2,4,6,8,10]
        //escrive aqui abajo tu codigo:
        return array.map((index) => index * n)
    }

};