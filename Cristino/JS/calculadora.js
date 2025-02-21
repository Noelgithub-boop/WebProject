
function calcularCalorias() {
    var edad = parseFloat(document.getElementById("edad").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var genero = document.getElementById("genero").value;
    var actividad = document.getElementById("actividad").value;
    var objetivo = document.getElementById("objetivo").value;
    
    if (genero == "hombre") {
        var calorias = (66 + (13.7 * peso)) + ((5 * altura) - (6.8 * edad));
    } else if (genero == "mujer") {
        var calorias = (65 + (9.6 * peso)) + ((1.8 * altura) - (4.7 * edad));
    } else {
        alert("Rellena todos los campos");
    }

    if (actividad == "sedentario") {
        var calorias = calorias * 1.2;
    } else if (actividad == "ligera") {
        var calorias = calorias * 1.375;
    } else if (actividad == "moderada") {
        var calorias = calorias * 1.55;
    } else if (actividad == "intensa") {
        var calorias = calorias * 1.725;
    } else {
        alert("Rellena todos los campos");
    }

    if (objetivo == "ganarMasa") {
        var calorias = calorias + (calorias * 5 / 100);
        alert("Tus calorías diarias son: "+ parseInt(calorias));
    } else if (objetivo == "perderGrasa") {
        var calorias = calorias - (calorias * 5 / 100);
        alert("Tus calorías diarias son: "+ parseInt(calorias));
    } else if (objetivo == "mantener") {
        alert("Tus calorías diarias son: "+ parseInt(calorias));
    } else {
        alert("Rellena todos los campos");
    }
}