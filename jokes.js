
const jokes = [
    "Quelle est la spécialité glacée des allemands ? ... Le BananaShoahSplit",
    "J'ai laché un e-i-prout !",
    "Mon esto-emacs attend de se remplir le buffer.",
    "Son anus pourrait être un data-center.",
     "Autre1: Comment on écrit Getter ? <br /> Autre2: 2 T, E, R... <br /> Mimi: Mais du coup ... Si il y 2 TER ... Il n'y a plus de place pour le TGV !",
     "Tu aurais pu naitre en Juan ! (Juin)",
     "Tu veux que je te fasse un dupli-cacatoes ?",
    "Les gens qui vendent leur anus ... Ont un Anustencil !",
    "J'ai invoqué Angoulême de feu !",
    "Tant qu'ils ne sont pas deux séparables, tout va bien !",
    "Dahu-stucru",
    "Tu sais ce qu'ils portent les juifs l'été ? ... Un Talmuda !",
    "Hors-pair ... Hors-pair de chaussettes !",
    "Proxy-tronade !",
    "Tant qu'il y a de la citronnelle pour le Proxy-tronnelle !",
    "Tu sais ce qu'un musulman qui va a la Mecque dit a un musulman qui est déjà a la Mecque ? Bah ... T'es Djellaba ?",
    "Je pensais qu'on était p-hot mais en fait t'es p-cold...",
    "Mais oui, mais Ouistiti !",
    "Concat ? Tant que c'est pas des condog !",
    "C'est l'heure du duel ... Bonduelle... On va manger des carottes !",
    " - L'eurostar c'est le tunnel sous la manche. <br /> - Hé ! Si tu as un pull, t'en as deux !",
    "C'est bon les épautres ! Surtout quand c'est les potes à Jésus !",
    "Hey! Tu vas à la gare Montp-arnanas ?"
]

function randomJoke() {
    var joke = jokes[Math.floor(Math.random() * jokes.length)]
    $('#joke').html(joke)
}

$(function() {
    randomJoke()
})