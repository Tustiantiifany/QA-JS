const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function SqrtProgram(x) {
    if (x < 0) {
        return "Tidak bisa input bilangan negatif";
    }
    if (x % 2 !== 0) {
        return "Tidak bisa input bilangan ganjil";
    }
    return Math.sqrt(x);
}

rl.question('Masukkan bilangan genap positif: ', (input) => {
  const userInput = parseInt(input);

  
  const result = SqrtProgram(userInput);
  console.log("Akar Pangkat dari",input, "adalah :", result);

  rl.close();
});
