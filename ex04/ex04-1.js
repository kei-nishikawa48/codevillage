function cointoss() {

  const num = Math.random()
  
  if(num<=0.5){
    console.log("表")
  } else {
    console.log("裏")
  } 
}
for (let i=0; i < 10; i++){
  cointoss()
}



function scoring(score){
  if(score >= 50 && score < 70){
    a = "良"
  } else if(score>=70) {
    a= "秀"
  } else {
    a= "不可"
  }
  return a
}

console.log(scoring(80))
console.log(scoring(51))
console.log(scoring(30))


const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scoreing(score){
  if (score >= 50 && score < 70) {
    a = "良"
  } else if (score >= 70) {
    a = "秀"
  } else {
    a = "不可"
  }
  return a
}

scores.forEach((score)=>{
  console.log(scoreing(score))
})

