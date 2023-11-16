// Define USS Assembly
const ussAssembly = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    // attack(target) {
    //     if (Math.random() < this.accuracy) {
    //         target.takeDamage(this.firepower);
    //     }
    // },
};

const alienShip = {
    hull: 5, // You can generate this randomly
    firepower: 3, // You can generate this randomly
    accuracy: 0.6, // You can generate this randomly
    takeDamage(damage) {
        this.hull -= damage;
    },
};


// Event listeners for the Attack and Retreat buttons
document.getElementById("attack-button").addEventListener("click", attack);
document.getElementById("retreat-button").addEventListener("click", retreat);

// Start the game
startGame();