const input = require('prompt-sync')();
//------- les variables globale.
let choix;
let condidateurs = [];
let condidateur = {}


menuprincipale = () => {
    console.log("1. Ajouter les condidat.")
    console.log("2. Afficher la liste des condidats.")
    console.log("3. Voter.")
    console.log("4. Modifier les informations.")
    console.log("5. Supprimer un condidat.")
    console.log("6. Recherche")
    console.log("7. Statiques")
    console.log("0. Exit")
}
sousMenuAjouter = () => {
    console.log("1. Ajouter un condidat")
    console.log("2. Ajouter plusieur condidats")
    console.log("0. Revenir au menu principale")
}
ajouterAction = () => {
    do {
        console.log("-----------------------------Menu D'ajouter-----------------------------")

        sousMenuAjouter();
        choix = input("Entez votre vhoix s'il vous plais: ");
        switch (choix) {
            case "1":
                ajouterCondidat(1);
                break;
            case "2":
                n = +input("Entez le nombre de condidat que voulez ajouter: ")
                ajouterCondidat(n)

                break;
            case "0":
                Action();
                break;
            default:
                console.log("votre choix invalid")
        }
    } while (choix != 0)

}
ajouterCondidat = (n) => {
    for (let i = 0; i < n; i++) {
        condidateur.CIN = input("Entez CIN: ")
        condidateur.nom = input("Entre le nom de condidat: ")
        condidateur.prenom = input("Entre le prénom de condidat: ")

        condidateur.partiPolitique = input("Entez la partie politique: ")
        condidateur.age = input("Entez l'age de condidat: ") - 0;
        condidateur.electural = [];
        condidateurs.push(condidateur)

    }
    return condidateurs;
}
sousMenuAffichage = () => {
    console.log("1. Affichage normal")
    console.log("2. Affichage trié")
    console.log("3. Affichage par filter")
    console.log("0. Revenir au menu principale");

}
AffichegeAction = () => {
    do {
        console.log("--------------------------------Menu d'affichage---------------------------------------")
        sousMenuAffichage();
        choix = input("Entez votre vhoix s'il vous plais : ")
        switch (choix) {
            case "1":
                console.table(condidateurs)
                break;
            case "2":
                console.log("vous choisi 2.2")
                break;
            case "3":
                console.log("vous choisi 2.3")
                break;
            case "0":
                Action();
                break;
            default:
                console.log("choix invalid")
        }
    } while (choix != 0)

}
Action = () => {
    console.log("-----------------------------Menu principale-----------------------------")
    menuprincipale();
    choix = input("Entez votre vhoix s'il vous plais : ")
    switch (choix) {
        case "1":
            ajouterAction();
            break;
        case "2":
            AffichegeAction();
            break;
        case "3":
            console.log("vous choisi 3")
            break;
        case "4":
            console.log("vous choisi 4")
            break;
        case "5":
            console.log("vous choisi 5")
            break;
        case "6":
            console.log("vous choisi 6")
            break;
        case "7":
            console.log("vous choisi 7")
            break;
        case "0":
            console.log("Merci pour votre visite.")
            break;
        default:
            console.log("chiox invalid here")
    }

}
// ------ main

do {

    Action();
} while (choix != 0)