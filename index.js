let herois = [
  ["João", 15, 3],
  ["Pedro", 36, 10],
  ["Miguel", 31, 1],
  ["Guilherme", 202, 31],
];
for (i = 0; i < herois.length; i++) {
  calcularVitorias(herois[i][1], herois[i][2]);
}

function calcularVitorias(vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  let nivel = "";

  if (saldo < 10) {
    nivel = "Ferro";
  } else if (saldo <= 20) {
    nivel = "Bronze";
  } else if (saldo <= 50) {
    nivel = "Prata";
  } else if (saldo <= 80) {
    nivel = "Ouro";
  } else if (saldo <= 90) {
    nivel = "Diamante";
  } else if (saldo <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  console.log(
    "O Herói " +
      herois[i][0] +
      " tem saldo de " +
      saldo +
      " vitórias e está no nível " +
      nivel
  );
}