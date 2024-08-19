const duplicados = (nums) =>{
  const result = {};

  nums.forEach((value) => {
    result[value] = (result[value] || 0) + 1;
  });
  let cantidad = 0;
  const claves = Object.keys(result);
  
  for(let i = 0; i < claves.length; i++) {
    if(result[claves[i]] > 1) {
      cantidad++;
    }
  }
  return cantidad;
}


const nums = [1,1,2,2,1,3,3,4,5,6];


console.log(duplicados(nums));