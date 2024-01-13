

function initBooks(){
    fetch('http://localhost:4050/allBook')
    .then(response => response.json())
    .then(data => {
         console.log(data.body.Allbooks);
         agregarDivs(data.body.Allbooks)
        }
         );
}

function agregarDivs(AllBooks) {
    for (let i = 0; i < AllBooks.length ; i++) {
      var divhome = document.createElement("div");
      divhome.classList.add("card-home");
      var divcontent = document.createElement("div");
      divcontent.classList.add("card-content");
      var img = document.createElement("img");

      var h3tag= document.createElement("h3");
      var ptag= document.createElement("p");
      var ptag2= document.createElement("p");
      var ptag3= document.createElement("p");
      var atag= document.createElement("a");
      
      img.classList.add("card-image");
      img.src=AllBooks[i].img;
      
      h3tag.textContent= AllBooks[i].titulo;
      ptag.textContent="autor: "+ AllBooks[i].autor;
      ptag2.textContent="Año de publicacion: "+ AllBooks[i].fechaPublicacion;
      ptag3.textContent="Precio: $"+ AllBooks[i].precio;
      atag.textContent="Ir al libro";
      atag.href=AllBooks[i].url;
      // se agrega al div card-content
      divcontent.appendChild(img);
      divcontent.appendChild(h3tag);
      divcontent.appendChild(ptag);
      divcontent.appendChild(ptag2);
      divcontent.appendChild(ptag3);
      divcontent.appendChild(atag);
      // se agrega al div card-home
      divhome.appendChild(divcontent);

      var novedadesColDiv = document.getElementById("novedades-col");
      // se agrega al div novedades-col
      novedadesColDiv.appendChild(divhome);
    }
  }
  
initBooks();


