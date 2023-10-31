



function init() {

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const busqueda = params.get("busqueda");

    if (busqueda.length > 0) {
        let listaSearch = [];

        listaSearch = [];
        mockproductos.map(value => {

            if (value.titulo.toUpperCase().includes(busqueda.toUpperCase())) {
                listaSearch.push(value);
            }
        });
        console.log(listaSearch);

        //const divs = document.getElementById("search-result");

        if (listaSearch.length !== 0) {
            for (const libro of listaSearch) {
                console.log(libro.titulo);
                
                const div = document.createElement("div");
                //div.classList.add("div-elemento");
                div.textContent = libro.titulo;
                //console.log(div);
                //const divs =
               //const divpadre =  document.getElementById("result");
               //divpadre.appendChild(div);
               
               //document.querySelector("#resultado").appendChild(div);
//                divs.appendChild(div);
            }
        }


    }
}

init();