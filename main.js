const html = {
    get(element) {
        return document.querySelector(element);
    },
    getAll(element) {
        return document.querySelectorAll(element);
    }
}
    function abrirWhatsapp() {
      var nome = document.getElementById("nome").value;
      var telefone = document.getElementById("telefone").value;
      var email = document.getElementById("email").value;
      var msg = document.getElementById("msg").value;
      var url = "https://wa.me/5524999945742?text=" 
        + "*Formulário de Contato*" + "%0a" 
        + "%0a" // 
        + "*Nome*: " + nome + "%0a" 
        + "*Telefone*: " + telefone + "%0a"
        + "*E-mail*: " + email + "%0a"
        + "*Mensagem*: " + msg;
      window.open(url, '_blank').focus();
}