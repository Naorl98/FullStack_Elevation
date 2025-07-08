const isArmstrong = function(num){
  let strNum = num.toString()
  let sum = 0

  for(let i = 0; i < strNum.length; i++){
    let digit = Number(strNum[i])
    sum += digit ** strNum.length
  }

  return sum === num
}

for(let n = 100; n <= 999; n++){
  if(isArmstrong(n)){
    console.log(n)
  }
}

