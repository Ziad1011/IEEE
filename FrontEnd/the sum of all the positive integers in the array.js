const array =  [1, -2, 3, 4, -5]
 const getPositiveArray= (arr) =>{
 return arr.filter(item=>item>0).reduce((a,b)=> a+b);
};
console.log(getPositiveArray(array));