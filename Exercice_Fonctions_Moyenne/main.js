let notesTibo = [0, 3, 4, 6, 18, 19, 4];

function calculerMoyenne(tab) {
    let sum = 0;
    tab.forEach(element => {
        sum += element;
    });
    return sum/tab.length;
}

console.log(`La moyenne de Tibo est de : ${calculerMoyenne(notesTibo)}`);