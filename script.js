// Write your code here:
const convertToBaby = (arr) =>{
  let newArray = [];
  for(let i=0; i<arr.length; i++ ){
    newArray.push('baby ' + arr[i]);
  }
  return newArray;
}
const array = ['gato', 'oso', 'perezoso', 'caracol']
console.log(convertToBaby(array));

