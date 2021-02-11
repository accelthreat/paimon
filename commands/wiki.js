function capitalize(string) {
  let word_exceptions = [
    "a",
    "an",
    "the",
    "aboard",
    "about",
    "above",
    "across",
    "after",
    "against",
    "along",
    "amid",
    "among",
    "anti",
    "around",
    "as",
    "at",
    "before",
    "behind",
    "below",
    "beneath",
    "beside",
    "besides",
    "between",
    "beyond",
    "but",
    "by",
    "concerning",
    "considering",
    "despite",
    "down",
    "during",
    "except",
    "excepting",
    "excluding",
    "following",
    "for",
    "from",
    "in",
    "inside",
    "into",
    "like",
    "minus",
    "near",
    "of",
    "off",
    "on",
    "onto",
    "opposite",
    "outside",
    "over",
    "past",
    "per",
    "plus",
    "regarding",
    "round",
    "save",
    "since",
    "than",
    "through",
    "to",
    "toward",
    "towards",
    "under",
    "underneath",
    "unlike",
    "until",
    "up",
    "upon",
    "versus",
    "via",
    "with",
    "within",
    "without",
    "is",
  ];

  return word_exceptions.includes(string)
    ? string
    : string.charAt(0).toUpperCase() + string.slice(1);
}

function replace_html_characters(string) {
  let html_exceptions = ["$", "&", "+", ",", "/", ":", ";", "=", "?", "@", "'"];

  return string
    .split("")
    .map((letter) =>
      html_exceptions.includes(letter)
        ? "%" + letter.charCodeAt().toString(16).toUpperCase()
        : letter
    )
    .join("");
}

module.exports = {
  name: "wiki",
  description: "Returns the homepage of the Genshin Impact wiki fandom.",
  execute(message, args) {
    if (args.length === 0) {
      message.channel.send(
        "https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki"
      );
    } else if (args.length === 1) {
      message.channel.send(
        `https://genshin-impact.fandom.com/wiki/${capitalize(
          args[0].toLowerCase()
        )}`
      );
    } else {
      let cap = args
        .map((string) => capitalize(string))
        .map((string) => replace_html_characters(string))
        .join("_");
      message.channel.send(`https://genshin-impact.fandom.com/wiki/${cap}`);
    }
  },
};
