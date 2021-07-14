function calcularGorjeta(event){
  event.preventDefault();
  var conta = document.getElementById('conta').value;
  var servico = document.getElementById('qualidadeServ').value;
  var pessoas = document.getElementById('pessoas').value;

  if(pessoas == "" | pessoas <= 1){
    pessoas = 1;
    document.getElementById('cada').style.display = "none";
  }else{
    document.getElementById('cada').style.display = "block";
  }

  var total = (conta * servico) / pessoas;
  total = total.toFixed(2);
  document.getElementById('gorjeta').innerHTML = total;
  document.getElementById('totalGorjeta').style.display = "block";
}

document.getElementById('totalGorjeta').style.display = "none";
document.getElementById('cada').style.display = "none";

document.getElementById('formularioGorjeta').addEventListener('submit', calcularGorjeta);
