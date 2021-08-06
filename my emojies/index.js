'strict';

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer") //2. grab the emoji container div and store it in a variable, log it to the console.
const 

for (let i = 0; i < myEmojis.length; i++) { //1. loop thru the array and log each of them out to the console.
  //console.log(myEmojis[i])
  const emoji = document.createElement('span')
  emoji.textContent = myEmojis[i]
  emojiContainer.append(emoji)
}

