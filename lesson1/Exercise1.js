const array1 = [1, 2, 3, 4, 5, 6],
array2 = [3, 4, 8, 9, 12];
let test = array1.filter((number) => {
    for (let i = 0; i< array2.length; i++){
        if(array2[i] === number) return true; 
    }
})
console.log(test);
