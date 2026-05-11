let variable1 = [
    1,
    "test",
    {
        titre: 'title',
    },
    "L'objet ne s'affiche pas",

];

console.log(variable1);
console.log(variable1[2]);

let paragraphe = document.querySelector('#test')
variable1.forEach((element) => {
    paragraphe.innerHTML += element + '<br/>'
})