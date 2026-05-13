function moyenne(tab) {
    let sum = 0;
    tab.forEach(element => {
        sum += element;
    });

    let commentaire = "";
    if(sum/tab.length >= 15) {
        commentaire = "très bien";
    }
    else if (sum/tab.length>=10) {
        commentaire = "assez bien";
    }
    else if (sum/tab.length<10) {
        commentaire = "Refus";
    }
    return commentaire;
}

console.log(moyenne([16]));
console.log(moyenne([11]));
console.log(moyenne([9]));
