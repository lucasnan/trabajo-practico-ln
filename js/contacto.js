function submitForm() {
  var inputEmail = document.getElementById("email").value;
  var inputMensaje = document.getElementById("mensaje").value;

  console.log(inputEmail, inputMensaje);

  const bodyMensaje = {
    email: inputEmail,
    mensaje: inputMensaje,
  };

  fetch("http://localhost:4050/api/postExample", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyMensaje),
  }).then((response) => response.json()).then((data) => {
      console.log(data);
      mensajeExitoError(data.ok);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


function mensajeExitoError(params) {
    
    if (params === true) {
        var divMensaje = document.createElement("div");
        divMensaje.classList.add("contacto-mensaje");
        divMensaje.textContent="se envio el mensaje con exito!!";

        var contactoPage = document.getElementById("contacto-page");
        contactoPage.appendChild(divMensaje);

    }else{
        var divMensaje = document.createElement("div");
        divMensaje.classList.add("contacto-mensaje");
        divMensaje.textContent="hubo un error al enviar el mensaje";

        var contactoPage = document.getElementById("contacto-page");
        contactoPage.appendChild(divMensaje);
    }

}