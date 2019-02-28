function solve(arr) {
    let sortByLengthThenAlfabet = arr.sort((a, b) =>{
        return a.length - b.length || a.localeCompare(b)
      });
   return sortByLengthThenAlfabet.join('\n');
}

console.log(solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]));
