const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');                // Utilise un environnement 2d avec canvas
ctx.canvas.width = window.innerWidth;               // Spécifier de prendre largeur et hauteur
ctx.canvas.height = window.innerHeight;            
let particuleTab;



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
    MAJ() {
        
        if (this.x + this.taille > canvas.width || this.x - this.taille < 0) {
            this.directionX = - this.directionX;   // Si on touche on iinverse la direction
        }

        if (this.y + this.taille > canvas.height || this.y - this.taille < 0) {
            this.directionY = - this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.dessine();
    }


}



// const obj1 = new Particule(300,300,50,50,100,"white");
// console.log(obj1);
// obj1.dessine();



// CREATION DE PARTICULES
function init() {
    particuleTab = [];

    for (let i = 0; i < 100; i++) {
        
        let taille = (Math.random() + 0.01) * 20;
        let x = Math.random() * (window.innerWidth - taille * 2);
        let y = Math.random() * (window.innerHeight - taille * 2);
        let directionX = (Math.random() * 8) - 4;
        let directionY = (Math.random() * 8) - 4;
        let couleur = "white";
    
        particuleTab.push(new Particule(x, y, directionX, directionY, taille, couleur))
    }
}

// ANIMATION DES PARTICULES
function animation(){
    requestAnimationFrame(animation);
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight);

    for(let i = 0; i < particuleTab.length; i++){
        particuleTab[i].MAJ();
    }
}   


// LANCER L'ANIMATION
init();
animation();
// console.log(particuleTab);



// GERER RESIZE DU BROWSER

function resize() {
    init();
    animation();
}


// A Chaque resize d'écran on déclenche un setTimeout qui va rafraichir en fct° de la largeur et hauteur d'écran
let doIt;
window.addEventListener('resize', () => {
    clearTimeout(doIt);                             // Si il y a déja un setTimeout on le clear
    doIt = setTimeout(resize, 100);
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
})



/*
NOTES :

Tous les arguments que l'on va passer lors de la création d'objet représentent les paramètres du constructeur et cela va devenir les propriétés de notre objet


MAJ()
if (this.x + this.taille > canvas.width || this.x - this.taille < 0) 
Est-ce que la position de x + sa taille est supérieur à la largeur du canvas ou inversement
(est-ce que ca touche à droite ou à gauche)


On peut modifier la vitesse de déplacement avec les this.direction

let directionX = (Math.random() * 0.4) - 0.2;  => nous retourne un intervale en -0.2 et 0.2
               = valeur en 0.01 et 0.99 * 0.4 - 0.2 
 */