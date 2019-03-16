const express = require('express');
const path = require('path');

const complements = [
    "You like nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You've gotten far in this course. You're really smart",
    "You're programming! How cool is that?",
    "I'm really proud of you",
    "You made this",
    "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
    "This is my bargain, you mewling quim",
    "Hey, where'd you get those clothes, the toilet store?",
    "Does Barry Manilow know that you raid his wardrobe?",
    "You know what the difference between your momma and a washing machine is? When I dump a load in a machine, the machine doesn't follow me around for three weeks.",
    "You are literally too stupid to insult.",
    "You're what the French call: 'les incompetents'.",
    "Your mother was a hamster and your father smelt of elderberries.",
    "Is that your nose or did a bus park on your face?",
    "You're tacky and I hate you"
];

function getRandomComplement() {
    const randomIndex = Math.floor(Math.random() * complements.length);
    return complements[randomIndex];
}

function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
    res
        .json({
            complement: getRandomComplement()
        })
        .end();
});

app.get("/insult", function(req, res) {
    res
        .json({
            insult: getRandomInsult()
        })
        .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");