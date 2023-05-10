export default function ajaxFetch (content){
    const $contentFotos = document.getElementById(content),
    $fragment = document.createDocumentFragment();
    


    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((respuesta) => (respuesta.ok ? respuesta.json() : Promise.reject(respuesta) ))
    .then(el =>{
        el.forEach(elemento => {
            const $img = document.createElement("img");
            $img.setAttribute("src", `${elemento.url}`);
            $fragment.appendChild($img);
        })
        $contentFotos.appendChild($fragment);
    })
    .catch((err) => {
        console.log(`Error: ${err.status}`)
    })
    .finally();
    
    
    
    console.log($fragment)
}