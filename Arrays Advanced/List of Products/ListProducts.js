function solve(arr){
   let result = arr.sort();
   let i = 1;

   result = result.map((e) => i++ +'.'+ e);
   
   return result.join('\n');
}

console.log(solve(["Potatoes", "Tomatoes", "Onions", "Apples"]));

