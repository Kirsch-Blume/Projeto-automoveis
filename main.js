$(".phone_with_ddd").mask("(00) 00000-0000");

function enviarFormulario(evento) {
  evento.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const mensagem = document.getElementById("mensagem").value;
  const itemInteresse = document.getElementById("item").value;

  const mensagemFormatada = `Nome: ${nome}
Email: ${email}
Número: ${whatsapp}
Item de interesse: ${itemInteresse}
Mensagem: ${mensagem}
    `;

  const mensagemCodificada = encodeURIComponent(mensagemFormatada.trim());

  const linkWhatsapp = `https://wa.me/5534998669830?text=${mensagemCodificada}`;

  window.open(linkWhatsapp, "_blank");
}

document.querySelector("form").addEventListener("submit", enviarFormulario);
