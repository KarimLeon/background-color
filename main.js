const span = document.querySelector("#show"),
      button =  document.querySelector('button')


  //Generate Hex (Nums: 0-9, letters: A-F)    

button.onclick = () => {
    span.innerHTML = Math.random()
}