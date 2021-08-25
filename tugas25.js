const angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("Sebelumnya : ",angka.join(","));
console.log("Ascendant : ",angka.sort().join(","));
console.log("Descendant : ",angka.sort().reverse().join(","));

let filterArray = angka.filter(element => element > 10);
console.log('Filter > 10 : ',filterArray.join(","));