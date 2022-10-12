var dataReal = new Date();
    var dia = String(dataReal.getDate()).padStart(2, '0');
    var mes = String(dataReal.getMonth() + 1).padStart(2, '0');
    var ano = dataReal.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
    var hora = dataReal.getMinutes()
    var controle = hora + mes + dia

    var logo = window.document.getElementById('logoPrincipal');

    


function gerar() {
    var campos = window.document.getElementById('campos')
    var valor = window.document.getElementById('valor')
    var extenso = window.document.getElementById('extenso')
    var pagador = window.document.getElementById('pagador')
    var documento = window.document.getElementById('documento')
    var referente = window.document.getElementById('referente')

    var checagem = window.document.getElementsByName('formaPagto')
    var formaPagto = ''

    if (checagem[0].checked){
        formaPagto = ' Via PIX'
    } else if(checagem[1].checked){
        formaPagto = ' Em dinheiro'
    } else if(checagem[2].checked) {
        formaPagto = ' Por cartão'
    }




    campos.innerHTML = (`
     <div class="recibo-pronto">
     <div class="cabecalho">
            <img class="logoBranca" id="logoBranca" src="images/logo.png" alt="Logo Cadinho">
            <img class="logoPreta" id="logoPreta" src="images/logo.png" alt="Logo Cadinho">
            <h1 class="titulo-recibo" >Recibo</h1>
            <p class="numero-controle">Nº ${controle}</p>
    </div>

        Recebi(emos) de <strong>${pagador.value.toUpperCase()}</strong> - CPF/CNPJ nº <strong>${documento.value}</strong>, a importância de <strong>R$${valor.value}</strong> <strong>( ${extenso.value.toUpperCase()})</strong> referente à <strong>${referente.value.toUpperCase()}</strong><br><br>Para maior clareza firmo(amos) o presente recibo para que produza os seus efeitos, dando plena, rasa e irrevogável quitação, pelo valor recebido.<br><br>
        <p class="obs">Pagamento:  <strong>${formaPagto}</strong></p></div><br>
        <div class="cidade">
            <p class="data">BIGUAÇU, ${dataAtual} </p>
        </div>
        <div class="assinatura">
            <div class="assinatura-ignacio">
                <img src="images/assinatura-cadinho.png" alt="">
            </div>
            <p>_____________________________________________</p><br><br>
            <p>Ricardo Carlos de Fraga</p>
                <p>26.439.2719/0001-31</p>
                <p>(48) 9 8415-2125</p>
        </div>
            <div class="carimbo">
            <img src="imagens/carimbro.png" alt="">
            </div>
            <div class="btn">
  
                <a href="#" class="btn-neon" onclick="window.print()">Gerar Recibo</a>
       
            </div><br><br><br><br><br>


        `);
        

}