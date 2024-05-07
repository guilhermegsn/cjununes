
document.addEventListener('DOMContentLoaded', function () {
  emailjs.init({ publicKey: 'TXqW6ZR1OD66YiIgJ' });
});

function sendEmail() {
  document.getElementById('submit-btn').addEventListener('click', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_gd5js56', 'template_3afgngi', this)
      .then(() => {
        alert('Mensagem enviada com sucesso.')
      }, (error) => {
        console.log('FAILED...', error);
      });
  });
}

function enviarWhatsapp() {
  console.log('oie')
  var mensagem = document.getElementById("mensagem").value;

  // Substitua 'seu_numerodo_whatsapp' pelo seu número de telefone no formato internacional
  var numeroWhatsapp = '+5518996696854';

  // Criar o link do WhatsApp
  var linkWhatsapp = 'https://wa.me/' + numeroWhatsapp + '?text=' + encodeURIComponent(mensagem);

  // Redirecionar para o WhatsApp
  window.location.href = linkWhatsapp;
}


$(document).ready(function () {
  var modal = $("#modalConsultoria");
  var modal2 = $("#modalProjetos");
  var modal3 = $("#modalAuditoria");
  var span = $(".close");
 
  function closeModal() {
    modal.hide();
    modal2.hide()
    modal3.hide()
  }
  
  $(".openModalBtn").click(function () {
    modal.show();
  });

  $(".openModalBtn2").click(function () {
    modal2.show();
  });

  $(".openModalBtn3").click(function () {
    modal3.show();
  });

  span.click(function () {
    closeModal();
  });

  $(window).click(function (event) {
    if (event.target == modal[0]) {
      closeModal();
    }
  });

  $(".sendWhats").click(function () {
    enviarWhatsapp()
  });

});




// document.addEventListener("DOMContentLoaded", function() {
//   // Get the modal
//   var modal = document.getElementById("myModal");

//   // Get the button that opens the modal
//   var btn = document.getElementById("openModalBtn");
  
//   // Verificar se o botão foi encontrado corretamente
//   console.log(btn);

//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];

//   // When the user clicks the button, open the modal 
//   btn.onclick = function() {
//     modal.style.display = "block";
//   }

//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//     modal.style.display = "none";
//   }

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }
// });