const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');                // Utilise un environnement 2d avec canvas
ctx.canvas.width = window.innerWidth;               // Spécifier de prendre largeur et hauteur
ctx.canvas.height = window.innerHeight;            
let particuleTab;
let obj;


class Particule {
    
    constructor(x, y, directionX, directionY, taille, couleur) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.taille = taille;
        this.couleur = couleur;
    }
    dessine() {
        ctx.beginPath();                                              // Commence un chemin
        ctx.arc(this.x, this.y, this.taille, 0, Math.PI * 2, false);  // Permet de créer des cercles
        ctx.fillStyle = this.couleur;                                 // Définit une couleur
        ctx.fill();
    }
}

const obj1 = new Particule(300,300,50,50,100,"white");
console.log(obj1);
obj1.dessine();



// CREATION DE PARTICULES
function init() {
    particuleTab = [];

    for (let i = 0; i < 100; i++) {
        
        let taille = (Math.random() + 0.01) * 20;
        let x = Math.random() * (window.innerWidth - taille * 2);
        let y = Math.random() * (window.innerHeight - taille * 2);
        let directionX = (Math.random() * 0.04) - 0.2;
        let directionY = (Math.random() * 0.04) - 0.2;
        let couleur = "white";
    
        particuleTab.push(new Particule(x, y, directionX, directionY, taille, couleur))
    }
}

init();
console.log(particuleTab);




/*
NOTES :

Tous les arguments que l'on va passer lors de la création d'objet représentent les paramètres du constructeur et cela va devenir les propriétés de notre objet

 */