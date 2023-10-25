

function openDialog() {
    let customMsg = "Ya tenés el Reprocann?";
    let number = 0;
    
    if (confirm(customMsg, number, length)) {
        number = Number(prompt("Ingrese su número de autorización de 5 dígitos."));
        length = number.toString().length;
        presupuesto(length);
    } else {
        alert("Ingresá a https://reprocann.msal.gob.ar/auth y obtenelo!");
    };
    
}

function presupuesto(cantidad) {
    if (length<=5){
        cantidad = Number(prompt("Cuantos gramos necesitas?"));
        gramos = cantidad;
    } else {
        alert("Número incorrecto, vuelva a escribirlo.")
    }

    calculo(gramos);
}

function calculo() {
        if (gramos<=10) {
            multi = gramos*3;
            alert('El valor total es de u$d '+multi);
        } else {
            multi1 = gramos*2;
            alert('El valor total es de u$d '+multi1);
        }
}

