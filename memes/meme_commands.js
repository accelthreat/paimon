const Discord = require("discord.js");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
  commands: [
    {
      name: "sucrose",
      description: "A bunch of meme commands",
      execute(message, _) {
        let messages = ["Yes.", "Tama 'yan.", "Yes! Tama 'yan"];
        message.channel.send(messages[getRandomInt(messages.length)]);
      },
    },
    {
      name: "razor",
      description: "A bunch of meme commands",
      execute(message, _) {
        let messages = ["Yesssss"];
        message.channel.send(messages[getRandomInt(messages.length)]);
      },
    },
    {
      name: "zhongli",
      description: "A bunch of meme commands",
      execute(message, _) {
        let images = [
          "https://media1.tenor.com/images/373c80cfb4498d2b043572ef58ceb516/tenor.gif",
          "https://i.imgur.com/1EON1kN.png",
          "https://i.kym-cdn.com/photos/images/original/001/925/503/5c2.jpg",
        ];
        const image = images[getRandomInt(images.length)];
        const embeddedMessage = new Discord.MessageEmbed().setImage(image);
        message.channel.send(embeddedMessage);
      },
    },
    {
      name: "ganyu",
      description: "A bunch of meme commands",
      execute(message, _) {
        //Format: [imageLink, messageTitle, probability]
        let memeBundle = [
          ["https://i.imgur.com/f5bMIO8.png", "Come home", 24.2],
          ["https://i.imgur.com/TEVaf9f.png", "Come home", 24.2],
          ["https://i.redd.it/l2x7hzja4ab61.png", "Come home", 50],
          [
            "https://media1.tenor.com/images/5405bb7f7415fe21cc5163f52a56f6f3/tenor.gif",
            "Already home",
            1.6,
          ],
        ];

        let random_index = alias_sampler(memeBundle.map((arr) => arr[2]))();
        let [image, title] = memeBundle[random_index];

        let embeddedMessage = new Discord.MessageEmbed()
          .setImage(image)
          .setTitle(title);

        message.channel.send(embeddedMessage);
      },
    },
    {
      name: "ayaka",
      description: "A bunch of meme commands",
      execute(message, _) {
        let images = [
          "https://pbs.twimg.com/media/ENKta_uXYAEO_RY?format=jpg&name=4096x4096",
        ];
        const image = images[getRandomInt(images.length)];
        const embeddedMessage = new Discord.MessageEmbed()
          .setImage(image)
          .setTitle("Come home");
        message.channel.send(embeddedMessage);
      },
    },
    {
      name: "hu",
      description: "A bunch of meme commands",
      execute(message, _) {
        let images = [
          "https://i.imgur.com/8sOXZs4.png",
          "https://imgur.com/HuCegNK.png",
          "https://media.tenor.com/images/c6c37c4ad12b03fb9581de61a017fcc7/tenor.gif",
          "https://media.tenor.com/images/98153671f5e5be610e95b3f41e482bbc/tenor.gif",
        ];
        const image = images[getRandomInt(images.length)];
        const embeddedMessage = new Discord.MessageEmbed()
          .setImage(image)
          .setTitle("Who tao?");
        message.channel.send(embeddedMessage);
      },
    },
    {
      name: "tao",
      description: "A bunch of meme commands",
      execute(message, _) {
        let images = [
          "https://i.imgur.com/8sOXZs4.png",
          "https://imgur.com/HuCegNK.png",
          "https://media.tenor.com/images/c6c37c4ad12b03fb9581de61a017fcc7/tenor.gif",
          "https://media.tenor.com/images/98153671f5e5be610e95b3f41e482bbc/tenor.gif",
        ];
        const image = images[getRandomInt(images.length)];
        const embeddedMessage = new Discord.MessageEmbed()
          .setImage(image)
          .setTitle("Who tao?");
        message.channel.send(embeddedMessage);
      },
    },
    {
      name: "who",
      description: "A bunch of meme commands",
      execute(message, _) {
        let images = [
          "https://i.imgur.com/8sOXZs4.png",
          "https://imgur.com/HuCegNK.png",
          "https://media.tenor.com/images/c6c37c4ad12b03fb9581de61a017fcc7/tenor.gif",
          "https://media.tenor.com/images/98153671f5e5be610e95b3f41e482bbc/tenor.gif",
        ];
        const image = images[getRandomInt(images.length)];
        const embeddedMessage = new Discord.MessageEmbed()
          .setImage(image)
          .setTitle("Who tao?");
        message.channel.send(embeddedMessage);
      },
    },
    {
      name: "xiao",
      description: "A bunch of meme commands",
      execute(message, _) {
        // Format: [image, title]
        let images = [
          ["https://imgur.com/g46z8mi.png", "Xiaomachurl"],
          ["https://imgur.com/xGWq8ef.png", "Xiao Long Bao"],
          ["https://imgur.com/SPczhak.png", "Xiaomai Rice"]
        ];
        let [image, title] = images[getRandomInt(images.length)];
        const embeddedMessage = new Discord.MessageEmbed()
          .setImage(image)
          .setTitle(title);
        message.channel.send(embeddedMessage);
      },
    },
  ],
};

//https://gist.github.com/TheHans255/7a072162ec171e72f766ea954c5f11b3
function alias_sampler(inputProbabilities) {
  var probabilities, aliases;

  probabilities = inputProbabilities.map(function (p, i) {
    if (Number.isNaN(Number(p))) {
      throw new TypeError("Non-numerical value in distribution at index " + i);
    }
    return Number(p);
  });
  var probsum = inputProbabilities.reduce(function (sum, p) {
    return sum + p;
  }, 0);

  var probMultiplier = inputProbabilities.length / probsum;
  probabilities = probabilities.map(function (p, i) {
    return p * probMultiplier;
  });

  var overFull = [],
    underFull = [];
  probabilities.forEach(function (p, i) {
    if (p > 1) overFull.push(i);
    else if (p < 1) underFull.push(i);
    else if (p !== 1) {
      throw new Error(
        "User program has disrupted JavaScript defaults " +
          "and prevented this function from executing correctly."
      );
    }
  });

  aliases = [];
  while (overFull.length > 0 || underFull.length > 0) {
    if (overFull.length > 0 && underFull.length > 0) {
      aliases[underFull[0]] = overFull[0];
      probabilities[overFull[0]] += probabilities[underFull[0]] - 1;
      underFull.shift();
      if (probabilities[overFull[0]] > 1) overFull.push(overFull.shift());
      else if (probabilities[overFull[0]] < 1) underFull.push(overFull.shift());
      else overFull.shift();
    } else {
      var notEmptyArray = overFull.length > 0 ? overFull : underFull;
      notEmptyArray.forEach(function (index) {
        probabilities[index] = 1;
      });
      notEmptyArray.length = 0;
    }
  }

  return function sample() {
    var index = Math.floor(Math.random() * probabilities.length);
    return Math.random() < probabilities[index] ? index : aliases[index];
  };
}
