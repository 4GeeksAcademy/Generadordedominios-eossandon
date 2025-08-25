let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let exten = ['.com', '.net', '.us', '.io']

for (const dominio1 of pronoun) {
  for (const dominio2 of adj) {
    for (const dominio3 of noun) {
      console.log(dominio1 + dominio2 + dominio3 + exten[(Math.floor(Math.random() * 3))]);
    }
  }
}
