let etanol;
let gasolina;
let resultado;
function calcular(){
    let etanol = parseFloat(document.getElementById('etanol').value);
    let gasolina = parseFloat(document.getElementById('gasolina').value);
    let resultado = etanol/gasolina;
    if (etanol<= 0.70 * gasolina){
        document.getElementById("status").src = 'etanol.png'
    }
    else{
        document.getElementById("status").src = 'gasolina.png'
    }
    document.getElementById("mensagem").innerHTML = `Resultado: ${resultado.toFixed(2)}`;
}
function limpar() {
    document.getElementById('status').src = 'tanque.png'
    document.getElementById('mensagem').innerHTML = '';
    document.getElementById('etanol').value = '';
    document.getElementById('gasolina').value = '';
}