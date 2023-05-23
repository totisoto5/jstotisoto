//Fetch usando promesas
export default function ajaxFetch (content){
    const $contentFotos = document.getElementById(content),
    $fragment = document.createDocumentFragment();
    


    fetch("https://jsonplaceholder.typicode.com/photo")
    .then((respuesta) => (respuesta.ok ? respuesta.json() : Promise.reject(respuesta) )) //si hay un error salta directamente al catch, sino convierte la respuesta a json
    .then(el =>{
        el.forEach(elemento => { //manejo de la respuesta
            const $img = document.createElement("img");
            $img.setAttribute("src", `${elemento.url}`);
            $fragment.appendChild($img);
        })
        $contentFotos.appendChild($fragment);
    })
    .catch((err) => { //manejo del error
        console.log(`Error: ${err.status}`)
    })
    .finally(); // esto se ejecuta pase lo que pase
    
    
    
}