function main(){
  var num1 = numberTiping("Digite um número");
  var num2 = numberTiping("Digite outro número");

  var choice = menu();
  var result = calculadora(parseInt(choice), parseInt(num1), parseInt(num2));

  alert("O resultado é: " + result);
}

function numberTiping(phrase){
  number = prompt(phrase);

  if (isNaN(parseInt(number))){
    numberTiping("Eu estou começando com javascript. Colabora mano, digita um número aí");
  }else{
    return number;
  }
}

function menu(){
  choice = prompt("Escolha uma opção para calcular:\n\n\
  1 - somar \n\
  2 - subtrair \n\
  3 - multiplicar \n\
  4 - dividir");

  if ([1, 2, 3, 4].indexOf(parseInt(choice)) < 0){
    alert("Sério cara, colabora...");
    menu();
  }else{
    return choice
  }
}

function calculadora(operation, numA, numB){
  switch (operation) {
    case operation = 1:
      return numA + numB
      break;
    case operation = 2:
      return numA - numB
      break;
    case operation = 3:
      return numA * numB
      break;
    case operation = 4:
      return numA / numB
      break;
    default:
      alert("Meu, você conseguiu chegar aqui e quebrar... tenta denovo!")
      main()
  }
}

main();
