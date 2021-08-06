

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container") //2. grab the emoji container div and store it in a variable, log it to the console.



for (let i = 0; i < myEmojis.length; i++) { //1. loop thru the array and log each of them out to the console.
  //console.log(myEmojis[i]) ------check to see if it works
  const emoji = document.createElement('span')
  emoji.textContent = myEmojis[i]
  emojiContainer.append(emoji)
}

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function() {
  const emojiInput = document.getElementById("emoji-input")
  myEmojis.push(emojiInput.value)
  emojiInput.value = ""
  console.log(myEmojis)
})



// Push the emoji into the myEmoji's array, and clear the input field
// However, if the input value is empty, don't do anything
