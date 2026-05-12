let blague1 = `Qu'est-ce qu'une pizza dit à une autre pizza qui lui fait de l'ombre ? "Arrête de me trancher la route !`;
let blague2 = `Qu'est-ce qu'une pizza a dit à une autre pizza qui lui demandait des conseils ? "Suis ta pâte et tout ira bien" (Je ne comprends pas la blague)`;
let orderedPizza = "Ananas";
let timeTilArrival = "22 minutes";
let clientName = "Sasuke49";
let clientAdress = "29 rue des lilas 00000";

let phrase1 = `Bonjour ${clientName}, votre Pizza ${orderedPizza} est en préparation !
Elle arrivera d'ici ${timeTilArrival} à l'adresse ${clientAdress}.
Merci de votre fidéliter ! Pour vous foutre un peu le seum, une petite blague que je ne comprends pas moi-même : 
${blague1}`

let phrase2 = `Bonjour ${clientName}, votre Pizza ${orderedPizza} est en préparation !
Elle arrivera d'ici ${timeTilArrival} à l'adresse ${clientAdress}.
Merci de votre fidélité ! Pour vous foutre un peu le seum, une petite blague que je ne comprends pas moi-même : 
_______
${blague2}`

document.querySelector('p').innerText = phrase2;