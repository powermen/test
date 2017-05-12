var options = ["Piedra", "Papel", "Tijera"];
var cpuSelection = getRandomInt(0, 4);
var cpuSelectionTitle = options[cpuSelection];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
function getWinner(userSelection) {
    var userSelectionTitle = options[userSelection];
    if (userSelection == cpuSelection)
        console.log(userSelectionTitle, "vs", cpuSelectionTitle, ": ¡Empate!");
    else if (userSelection == 0 && cpuSelection == 1)
        console.log(userSelectionTitle, "vs", cpuSelectionTitle, ": ¡Perdiste!");
    else if (userSelection == 0 && cpuSelection == 2)
        console.log(userSelectionTitle, "vs", cpuSelectionTitle, ": ¡Ganaste!");
    else if (userSelection == 1 && cpuSelection == 0)
        console.log(userSelectionTitle, "vs", cpuSelectionTitle, ": ¡Ganaste!");
    else if (userSelection == 1 && cpuSelection == 2)
        console.log(userSelectionTitle, "vs", cpuSelectionTitle, ": ¡Perdiste!");
    else if (userSelection == 2 && cpuSelection == 0)
        console.log(userSelectionTitle, "vs", cpuSelectionTitle, ": Perdiste!");
    else
        console.log(userSelectionTitle, "vs", cpuSelectionTitle, ": ¡Ganaste!");
};
getWinner(2);