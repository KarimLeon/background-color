const span = document.querySelector("#show"),
      button =  document.querySelector('button'),
      body = document.querySelector("body")


  //Generate Hex (Nums: 0-9, letters: A-F)    

button.onclick = () => {
  let valueOfHex = generateHex()
    body.style.backgroundColor = valueOfHex
    span.innerHTML = valueOfHex
}

function generateHex() {
  const hexVals = 'ABCDEF0123456789'.split('')
  let randomIndex1 = Math.trunc(Math.random() * 20), 
      randomIndex2 = Math.trunc(Math.random() * 20),
      randomIndex3 = Math.trunc(Math.random() * 20),
      randomIndex4 = Math.trunc(Math.random() * 20),
      randomIndex5 = Math.trunc(Math.random() * 20),
      randomIndex6 = Math.trunc(Math.random() * 20)

  if (randomIndex1  >= hexVals.length) randomIndex1 = 0
  if (randomIndex2  >= hexVals.length) randomIndex2 = 0
  if (randomIndex3  >= hexVals.length) randomIndex3 = 0
  if (randomIndex4  >= hexVals.length) randomIndex4 = 0
  if (randomIndex5  >= hexVals.length) randomIndex5 = 0
  if (randomIndex6  >= hexVals.length) randomIndex6 = 0


  return '#' + hexVals[randomIndex1] + hexVals[randomIndex2] + hexVals[randomIndex3] +
         hexVals[randomIndex4] + hexVals[randomIndex5] + hexVals[randomIndex6]
}



