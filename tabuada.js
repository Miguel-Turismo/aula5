function calcular() {
   //pegar o numero vindo do formulário
   var num = parseFloat(document.getElementById("numero").value);
   var resposta = document.getElementById("resposta");
   var tabuada = "";
   for (var i=0; i<=100; i++){
        tabuada += num + "x" + i + "=" +Math.floor( num * i) + "<br/>";
   }
   resposta.innerHTML = tabuada; 
}

