module.exports = {
    name: "swipe",
    description: "Returns a google sheet link of the whale leaderboard",
    execute(message, args){
      message.channel.send('https://docs.google.com/spreadsheets/d/1nS08D0UI0vCBBropXBRxFEEG076MDoV9b53VgIxfnlc/edit?usp=sharing');
    }
  }