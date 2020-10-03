
// Time Complexity:
// Space Complexity:o(n) due to making an array of past answers.

function newmanConway(num) {
  let answers = [0,1,1]

  if ( num === 0 ){
    throw new Error("really 0");
  }
  
  if ( num === 1 ){
    return '1'
  }

  if ( num === 2 ){
    return '1 1'
  }

  for(let i = 3; i <= num; i++){
    answers.push(answers[answers[i - 1]] + answers[i - answers[i - 1]])
  }
  
  let string = ''

  answers.shift()

  for(let i = 0; i < answers.length; i++){
    string = string.concat(`${answers[i]}`)
    if (i !== answers.length - 1){
      string = string.concat(` `)
    }
  
  }
  return string
}

module.exports = {
  newmanConway
};