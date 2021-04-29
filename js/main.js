// FAIRE DISPARAÎTRE LES DIV.CONTENTS

// Sélection de tous les éléments de la classe "contents"
const contents = document.getElementsByClassName("contents");

// Création de la fonction pour cacher les éléments "contents"
const hideContents = () => {
    for(let i = 0; i < contents.length; i++) {
        if (i >= 0) {
            contents[i].style.display = "none";
        }
    }
}

hideContents(); // Appel de la fonction


// FAIRE APPARAÎTRE LES DIV.CONTENTS AVEC CLICK
const categories = document.querySelectorAll("div.category");

categories.forEach((category) => {
    category.addEventListener("click", function() { // Fonction click
        const newContents = this.querySelector("div.contents"); // Cherche le .contents concerné
        newContents.style.display = "block"; // Fait apparaître le .contents 
        category.classList.replace("category", "category-click"); //Changement de classe
        const selectH2 = this.querySelector("h2");
        const selectChevron = this.querySelector("img.chevron");
        selectH2.removeChild(selectChevron); // Supprime le chevron de la category cliquée
    });
});