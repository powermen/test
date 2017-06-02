var model = {
    //Attack options
    options: ["Piedra", "Papel", "Tijera"],
    //VariaBle to set the numBer of hits a fighter can take until defeat
    numHits: 8,
    //Size of the HP Bar
    sizeOfHPBar: 300,
    //Launches an attack from user vs the enemy    
    startAttack: function (userSelection) {
        //Get the enemy (CPU) selection
        var cpuSelection = Math.floor(Math.random() * (3 - 0));
        console.log("El usuario seleccionó " + this.options[cpuSelection]);
        console.log("El cpu seleccionó " + this.options[userSelection]);
        //Rules-comparision
        if (cpuSelection == userSelection) {
            console.log(this.options[userSelection], "vs", this.options[cpuSelection], ": ¡Empate!");
            userConsecutiveHits = 0;
            enemyConsecutiveHits = 0;
            document.getElementById("narration").innerHTML = "¡Empate!";
            //Update Attack image on Browser
            this.attack(userSelection, cpuSelection);
            setTimeout(this.restore, 1250);
        }
        else if (userSelection == cpuSelection - 1 || userSelection == cpuSelection + 2) {
            console.log(this.options[userSelection], "vs", this.options[cpuSelection], ": ¡Te golpearon!");
            userIsHit++;
            userConsecutiveHits++;
            enemyConsecutiveHits = 0;
            document.getElementById("userStatusHPBar").setAttribute("style", "width:" + ((this.sizeOfHPBar / this.numHits) * userIsHit) + "px");
            console.log("Han golpeado al usuario " + userIsHit + " veces en total y " + userConsecutiveHits + " consecutivas.");
            document.getElementById("narration").innerHTML = "¡Te ha golpeado The Machine!";
            this.attack(userSelection, cpuSelection);
            setTimeout(this.restore, 1250);
        }
        else if (userSelection == cpuSelection - 2 || userSelection == cpuSelection + 1) {
            console.log(this.options[userSelection], "vs", this.options[cpuSelection], ": ¡Golpeaste!");
            enemyIsHit++;
            enemyConsecutiveHits++;
            userConsecutiveHits = 0;
            document.getElementById("enemyStatusHPBar").setAttribute("style", "width:" + ((this.sizeOfHPBar / this.numHits) * enemyIsHit) + "px");
            console.log("Han golpeado al CPU " + enemyIsHit + " veces y " + enemyConsecutiveHits + " consecutivas.");
            document.getElementById("narration").innerHTML = "¡Golpeaste a The Machin!";
            this.attack(userSelection, cpuSelection);
            setTimeout(this.restore, 1250);
        }
    },
    //Update User View with the selected attack
    attack: function (userSelection, cpuSelection) {
        document.getElementById("userView").setAttribute("class", "userAttack" + userSelection);
        document.getElementById("enemyView").setAttribute("class", "enemyAttack" + cpuSelection);
        document.getElementById("buttonArea").setAttribute("class", "hide");
        document.getElementById('punch').play();
    },
    //Restore the user View after an attack
    restore: function () {
        document.getElementById("buttonArea").setAttribute("class", "show");
        if (lowHP <= userIsHit) {
            document.getElementById("userView").setAttribute("class", "userLowHP");
            console.log("lowHP = " + lowHP);
            console.log("userIsHit = " + userIsHit);
        }
        else {
            document.getElementById("userView").setAttribute("class", "userNormal");
            console.log("lowHP = " + lowHP);
            console.log("userIsHit = " + userIsHit);
        };
        if (lowHP <= enemyIsHit) {
            document.getElementById("enemyView").setAttribute("class", "enemyLowHP");
            console.log("lowHP = " + lowHP);
            console.log("enemyIsHit = " + enemyIsHit);
        }
        else {
            document.getElementById("enemyView").setAttribute("class", "enemyNormal")
            console.log("lowHP = " + lowHP);
            console.log("enemyIsHit = " + enemyIsHit);
        };
        gameStatus();
    }
};
//-VariaBle to change animation to "damaged" when the fighter has low Health Points related to numHits
var lowHP = model.numHits - 2;
//Initialaze statusHPBars
var userIsHit = 0;
var userConsecutiveHits = 0;
var enemyIsHit = 0;
var enemyConsecutiveHits = 0;
//Check is the game is over
function gameStatus() {
    if (userIsHit == model.numHits) {
        alert("¡Perdiste!");
        window.location.reload(true);
    }
    if (enemyIsHit == model.numHits) {
        alert("¡Ganaste!");
        window.location.reload(true);
    }
}
window.onload = gameStatus;


    // *** TO ADD ***
    //-Action when it is a draw
    // draw: function () {
    //     document.getElementById("userView").setAttribute("class", "userDraw");
    //     setTimeout(this.restore, 1250);
    // },
    //-Action when Dizzy using xConsecutiveHits variables and isDizzy array [true, 3]

