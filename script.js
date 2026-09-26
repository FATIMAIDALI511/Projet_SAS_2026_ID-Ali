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
                ajouterCondidat();
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
ajouterCondidat = (n = 1) => {
    for (let i = 0; i < n; i++) {
        console.log(`---------Entez le condidat N° ${i + 1}----------`)
        condidateur.CIN = input("Entez CIN: ")
        if (!virifierCINCondidateur(condidateur.CIN)) {


            condidateur.nom = input("Entre le nom de condidat: ")
            condidateur.prenom = input("Entre le prénom de condidat: ")
            condidateur.partiPolitique = input("Entez la partie politique: ")
            condidateur.age = Number(input("Entez l'age de condidat: "));
            condidateurs.push({
                CIN: condidateur.CIN,
                nom: condidateur.nom,
                prenom: condidateur.prenom,
                partiPolitique: condidateur.partiPolitique,
                age: condidateur.age,
                electeurs: [],
            });
        } else {
            console.log("ce condidateur est déja enregistrer. ")
        }
    }
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
                affichageSelonNombreElecteurs(condidateurs)
                break;
            case "3":
                let condidateursFiltrer = affichegefiltreParPartiPolitique(condidateurs);
                if (condidateursFiltrer.length != 0) {
                    console.table(condidateursFiltrer);
                } else {
                    console.log("noo resultat");
                }
                break;
            case "0":
                Action();
                break;
            default:
                console.log("choix invalid")
        }
    } while (choix != 0)

}
affichegefiltreParPartiPolitique = (condidateurs) => {
    let partiPolitiqueChercher = input("Enter la partie politique que vous cherchez: ")
    let condidateursFiltrer = [];
    for (let i = 0; i < condidateurs.length; i++) {
        let temp = condidateurs[i].partiPolitique;
        if (temp.toLowerCase() == partiPolitiqueChercher.toLowerCase()) {
            condidateursFiltrer.push(condidateurs[i])
        }

    }
    return condidateursFiltrer;

}

affichageSelonNombreElecteurs = (condidateurs) => {
    for (let i = 0; i < condidateurs.length; i++) {
        for (let j = 0; j < condidateurs.length - 1; j++) {
            if (condidateurs[j].electeurs.length < condidateurs[j + 1].electeurs.length) {
                let temp = condidateurs[j];
                condidateurs[j] = condidateurs[j + 1];
                condidateurs[j + 1] = temp
            }
        }
    }
    console.table(condidateurs)

}

virifierCINElecteurs = (electeursCIN) => {

    for (let i = 0; i < condidateurs.length; i++) {
        for (let j = 0; j < condidateurs[i].electeurs.length; j++) {
            if (condidateurs[i].electeurs[j] == electeursCIN) {
                return true;

            }

        }

    }
    return false;
}

virifierCINCondidateur = (condidateurCIN) => {
    for (let i = 0; i < condidateurs.length; i++) {
        if (condidateurs[i].CIN.toLowerCase() == condidateurCIN.toLowerCase())
            return true;
    }
    return false;
}
ajouterCINElecteurs = (electeursCIN, condidateurCIN) => {
    for (let i = 0; i < condidateurs.length; i++) {
        if (condidateurs[i].CIN.toUpperCase() == condidateurCIN.toUpperCase()) {
            condidateurs[i].electeurs.push(electeursCIN)
        }
    }

}
voter = () => {

    let electeursCIN = input("Enter votre CIN s'il vous plais: ")

    if (!virifierCINElecteurs(electeursCIN)) {
        let CIN_valide = false;
        do {
            console.table(condidateurs)
            let condidateurCIN = input("enter le CIN de condidateur s'il vous plais: ")
            let is_ixest = virifierCINCondidateur(condidateurCIN);
            if (is_ixest) {
                ajouterCINElecteurs(electeursCIN, condidateurCIN);
                console.log("Marci pour votre participant");
                CIN_valide = true
            } else {
                console.log("CIN de condidateur n'est pas vrai. ");
            }
        } while (!CIN_valide)

    } else {
        console.log("vous avez déja voter")
    }
}
rechercheUnCondidatParNom = (nom) => {
    for (let i = 0; i < condidateurs.length; i++) {
        if (condidateurs[i].nom.toLowerCase() == nom.toLowerCase()) {
            return condidateurs[i];
        }
    }

}
AgeModification = (CINcondidateur) => {
    let age = input("entrez le nouveau age: ")
    for (let i = 0; i < condidateurs.length; i++) {

        if (condidateurs[i].CIN.toLowerCase() == CINcondidateur.toLowerCase()) {
            condidateurs[i].age = Number(age);
            break;
        }
    }
}
PartiPolitiqueModificatin = (CINcondidateur) => {
    let partiPolitique = input("Enter la nouvelle partie politique: ")
    for (let i = 0; i < condidateurs.length; i++) {
        if (condidateurs[i].CIN.toLowerCase() == CINcondidateur.toLowerCase()) {
            condidateurs[i].partiPolitique = partiPolitique;
            break;

        }
    }

}
ModificationAction = (CINcondidateur) => {

    console.log("-----------------------------------Menu de Modification---------------------------------------")
    console.log("1. Modifier l'age. ")
    console.log("2. Modifier la partie politique. ");
    console.log("0. pour exist. ")

    let choix = input("Entrez votre choix s'il vous plais: ")
    switch (choix) {
        case "1":
            AgeModification(CINcondidateur)
            break;
        case "2":
            PartiPolitiqueModificatin(CINcondidateur);
            break;
        case "0":
            Action();
            break;
        default:
            console.log("choix invalid")
    }

}
ModificationDesInformation = () => {
    console.table(condidateurs);

    let CINcondidateur = input("Entrz CIN de condidateur que vous voullez modifier: ")

    if (virifierCINCondidateur(CINcondidateur)) {

        ModificationAction(CINcondidateur);
        console.table(condidateurs)

    } else {
        console.log("CIN est invalid")
    }
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
            voter();
            break;
        case "4":
            ModificationDesInformation();
            break;
        case "5":
            console.log("vous choisi 5")
            break;
        case "6":
            let nom = input("enter le non de condidateur chercher")
            if (rechercheUnCondidatParNom(nom)) {
                console.table(rechercheUnCondidatParNom(nom))
            } else {
                console.log("le nom chercher n'exist pas")
            };
            break;
        case "7":
            console.log("vous choisi 7")
            break;
        case "0":
            console.log("-------------------------------")
            console.log("Merci pour votre visite.")
            console.log("-------------------------------")
            break;
        default:
            console.log("chiox invalid here")
    }

}
// ------ main-------

do {
    Action();
} while (choix != 0)