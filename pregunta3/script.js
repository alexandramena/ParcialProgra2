function tableForm() {
    var table = document.getElementById("tablabebidas");
    var row = table.insertRow(-1);
    var celdafecha = row.insertCell(0);
    var celdabebida = row.insertCell(1);
    var celdacantidad = row.insertCell(2);
    var celdamensaje = row.insertCell(3);
    var fecha = document.getElementById("fecha").value;
    var bebida = document.getElementById("bebida").value;
    var cantidad = document.getElementById("cantidad").value;
    celdafecha.innerHTML = fecha;
    celdabebida.innerHTML = bebida;
    celdacantidad.innerHTML = cantidad;
    if(bebida == "agua" && cantidad < 8){
        celdamensaje.innerHTML = "Toma más agua";
    }
    elseif(bebida == "agua" && cantidad = 8){
        celdamensaje.innerHTML = "Meta alcanzada";
    }
    elseif(bebida == "agua" && cantidad < 0) {
        celdamensaje.innerHTML = "Incorrecto";
    }
}