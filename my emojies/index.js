

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container") //2. grab the emoji container div and store it in a variable, log it to the console.
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")




function renderEmojis() {
  emojiContainer.innerHTML = "" //clearing the old array
  for (let i = 0; i < myEmojis.length; i++) { //1. loop thru the array and log each of them out to the console.
    //console.log(myEmojis[i]) ------check to see if it works
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
  } //closing loop
} //closing the function


renderEmojis()


pushBtn.addEventListener("click", function() {
  //the if statement parameter below '(emojiInput.value)' based on if user entered anything into the input. 
  if (emojiInput.value) { 
    myEmojis.push(emojiInput.value)
    emojiInput.value = ""
    renderEmojis() //this renders new array 
  } //closing if statement
  
}) //closing addEventListener



unshiftBtn.addEventListener("click", function() {
  //the if statement parameter below '(emojiInput.value)' based on if user entered anything into the input. 
  if (emojiInput.value) { 
    myEmojis.unshift(emojiInput.value)
    emojiInput.value = ""
    renderEmojis() //this renders new array 
  } //closing if statement
  
}) //closing addEventListener


popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})


shiftBtn.addEventListener("click", function() {
  myEmojis.shift()
  renderEmojis()
})