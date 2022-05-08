// Write a function to change text

function changeText(main,words){
  main.textContent = words;
}

document.getElementById('oA').addEventListener("click", function(e){
  changeText(e.target, 'Welcome')
})

document.getElementById('oH').addEventListener("mousemove", function(e){
  changeText(e.target,'You Good?')
})
document.getElementById('oH').addEventListener("mouseout", function(e){
  changeText(e.target,'Mouse On Me')
})

document.getElementById('oG').addEventListener("mousedown", function(e){
  changeText(e.target,'Let Me Go')
})
document.getElementById('oG').addEventListener("mouseup", function(e){
  changeText(e.target,'Mouse Down')
})

document.getElementById('oB').addEventListener("mouseover", function(e){
  changeText(e.target,'See You Later')
})
document.getElementById('oB').addEventListener("mouseout", function(e){
  changeText(e.target,'Mouse Over Me')
})
