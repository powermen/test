var options = ["Piedra", "Papel", "Tijera"];
var cpuSelection = getRandomInt(0, 3);
var cpuSelectionTitle = options[cpuSelection];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
function getWinner(userSelection) {
    var userSelectionTitle = options[userSelection];
    if (userSelection >= 3 || userSelection <= -1)
        console.log("Sólo puedes seleccionar entre 0, 1 y 2");
    else if (cpuSelection == userSelection)
        console.log(userSelectionTitle, "vs", cpuSelectionTitle, ": ¡Empate!");
    else if (userSelection == cpuSelection - 1 || userSelection == cpuSelection + 2)
        console.log(userSelectionTitle, "vs", cpuSelectionTitle, ": ¡Perdiste!");
    else if (userSelection == cpuSelection - 2 || userSelection == cpuSelection + 1)
        console.log(userSelectionTitle, "vs", cpuSelectionTitle, ": ¡Ganaste!");
};
getWinner(2);