const Discord = require('discord.js'); // Import de la bibliothéque "discord.js".
const client = new Discord.Client();  // Création de la variable client.
const token = require("./token.json");  // Ici on cache le token dans le fichier token.json du répértoire courrant. (Cela me permet d'envoyer mon fichier Index.js vers GitHub sans me soucier.)
const badlist = require("./badlist.json")  // Ici on importe le fichier badlist.json pour une question d'hygiène de code.
client.commands = new Discord.Collection();  // Création de la variable commande.
const fs = require('fs');  // Import de la bibliothéque "FS".

// Chargement des différentes commandes du fichier /Commandes

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

// Chargement des différents événements du fichier Events

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }     
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

// Actions suite à une commande précise dans le chat

client.on("message", (message) => {
    if (message.content.startsWith("<@!430395704268161025>")) { // Ici c'est l'identifiant du bot @CH-FR => Actions après son appel en mention.
        message.channel.send("Qui me veut ? Tu veut de l'aide ? Fait : `!ch fr`.");
    }
    if (message.content.startsWith("Chrétien-Fr")) {
      message.channel.send("Pourquoi parles-tu du meilleur bot de l'univers ? (je suis objectif, promis !)");
    }
    if (message.content.startsWith("chrétien-Fr")) {
        message.channel.send("Pourquoi parles-tu du meilleur bot de l'univers ? (je suis objectif, promis !)");
    }
    if (message.content.startsWith("Ch-Fr")) {
      message.channel.send("Pourquoi parles-tu du meilleur bot de l'univers ? (je suis objectif, promis !)");
    }
    if (message.content.startsWith("ch-fr")) {
      message.channel.send("Pourquoi parles-tu du meilleur bot de l'univers ? (je suis objectif, promis !)");
    } 
    if (message.content.startsWith("WHO MADE CH-FR ?")){
     message.channel.send("@Nem#2318 made me.");
    }
    if (message.content.startsWith("valea")){
     message.channel.bulkDelete(1);
     message.channel.send("+random").then(msg => msg.delete(1000));    }
    if (message.content.startsWith("ALEA")){
     message.channel.bulkDelete(1);
     message.channel.send("+random").then(msg => msg.delete(1000));    }
})
    

// Vérification de gros mots.

client.on("message", msg => {
    let wordArray = msg.content.split("  ");
    console.log(wordArray);

    let filterWords = (badlist.liste) // Ici j'ai placé la liste dans un fichier appart, cela permet de rendre le code plus propre et sans grot mots d'ailleurs.
    for (var i = 0; i < filterWords.length; i++) {
        if (wordArray.includes(filterWords[i])) {
            msg.delete();
            msg.channel.send(
                `Désolé ${
                msg.author.username
                }, Vous n'utilisez pas un language correct...`).then(msg => msg.delete(5000));
            msg.channel.startTyping();
            msg.channel.send(`!ch warn ${msg.author} Propos Obscènes`)
        }
    }
})

client.login(token.token);



/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
//                                                                                                     //
// Jouez franc-jeux quand vous utilisez et/ou modifiez le code d'un autre.                             //
// Même si le code est rendu public sous la licence ISC.                                               //
// Cela relève de l'hygiène de developpement de spécifier les créateurs du code original               //
//                                                                                                     //
//                                                                                                     //
//                                                                                                     //
// Notez cette information pour tout les autres possibles codes que vous récupérez sur GitHub          //
//                                                                                                     //
// --> Spécifiez le nom / pseudo du créateur : nem-developing                                          //
// --> Lien vers son GitHub : https://github.com/nem-developing                                        //
//                                                                                                     //
// (info) Je dit ceci dans le cadre du developement et du partage du code du bot CH-FR cependant       //
// cela relève de la morale, ne faites pas ceci simplement pour moi mais pour tout les autres          //
// projets que vous réalisez en utilisant le code de quelqu'un d'autre . (info)                        //
//                                                                                                     //
//                                                                                                     //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                _______      _____________                 __           _______                       _______                    _________     _________     _________                  ____      //
//  |\      |    |            |      |      |               |   \        |           \            /    |           |              |         |   |         |        |      |\      |      /          //
//  | \     |    |            |      |      |               |     \      |            \          /     |           |              |         |   |         |        |      | \     |     /           //
//  |  \    |    |            |      |      |               |       \    |             \        /      |           |              |         |   |_________|        |      |  \    |     |           //
//  |   \   |    |=====       |      |      |     =====     |        |   |=====         \      /       |=====      |              |         |   |                  |      |   \   |     |     __    //
//  |    \  |    |            |      |      |               |       /    |               \    /        |           |              |         |   |                  |      |    \  |     |       |   //
//  |     \ |    |            |      |      |               |     /      |                \  /         |           |              |         |   |                  |      |     \ |      \      /   //
//  |      \|    |_______     |      |      |               |__ /        |_______          \/          |_______    |_________     |_________|   |              ____|____  |      \|       \____/    //
//                                                                                                                                                                                                  //
//                                                                                                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
