//Fetch usando try catch
export default function crudFetch (){
    const d = document,
        $table = d.querySelector(".crud-table"),
        $form = d.querySelector(".crud-form"),
        $title = d.querySelector(".crud-titulo"),
        $template = d.getElementById("crud-template").content,
        $fragment = d.createDocumentFragment();  

    
    const getAll = async () =>{
        
        try {
            let res = await fetch("http://localhost:3000/clubes"),
            json = await res.json(); // convierto la request a json

            if (!res.ok){ //en caso de haber un error saltamos al catch y pasamos un objeto
                throw {status : res.status, statusText : res.statusText } 
            }

                json.forEach(el => {
                    let $clone = d.importNode($template, true);
                    $clone.querySelector(".name").textContent = el.nombre;
                    $clone.querySelector(".ciudad").textContent = el.ciudad;
                    $clone.querySelector(".titulos").textContent = el.titulos;
                    $clone.querySelector(".edit").dataset.id = el.id;
                    $clone.querySelector(".edit").dataset.nombre = el.nombre;
                    $clone.querySelector(".edit").dataset.ciudad = el.ciudad;
                    $clone.querySelector(".edit").dataset.titulos = el.titulos;
                    $clone.querySelector(".delete").dataset.id = el.id;
                    $clone.querySelector(".delete").dataset.name = el.nombre;

                    $fragment.appendChild($clone);
                    
                });

                $table.querySelector("tbody").appendChild($fragment);
            
            
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            $table.insertAdjacentHTML("afterend", `<p><b>error ${err.status}: ${message}</b></p>`)
        }
        

    }

    getAll();

    d.addEventListener("submit", async e=>{
        if (e.target === $form){
            e.preventDefault(); //quitamos las acciones por defecto del formulario

            if(!e.target.id.value){
                //CREATE - POST
                try {
                    let options ={
                        method: "POST",
                        headers: {"Content-type": "application/json; charset=utf-8"},
                        body: JSON.stringify({
                            nombre : e.target.nombre.value,
                            ciudad : e.target.ciudad.value,
                            titulos : e.target.titulos.value
                        })
                    },
                    res = await fetch("http://localhost:3000/clubes", options);
                    location.reload();

                    if (!res.ok){ //en caso de haber un error saltamos al catch y pasamos un objeto
                        throw {status : res.status, statusText : res.statusText } 
                    }
                } catch (err) {
                    let message = err.statusText || "Ocurrió un error";
                    $form.insertAdjacentHTML("afterend", `<p><b>error ${err.status}: ${message}</b></p>`)
                }
            }else{
                //UPDATE - PUT
                try {
                    let options ={
                        method: "PUT",
                        headers: {"Content-type": "application/json; charset=utf-8"},
                        body: JSON.stringify({
                            nombre : e.target.nombre.value,
                            ciudad : e.target.ciudad.value,
                            titulos : e.target.titulos.value
                        })
                    },
                    res = await fetch(`http://localhost:3000/clubes/${e.target.id.value}`, options);


                    if (!res.ok){ //en caso de haber un error saltamos al catch y pasamos un objeto
                        throw {status : res.status, statusText : res.statusText } 
                    }

                    location.reload();
                } catch (err) {
                    let message = err.statusText || "Ocurrió un error";
                    $form.insertAdjacentHTML("afterend", `<p><b>error ${err.status}: ${message}</b></p>`)
                }
            }
        }
        
    });

    d.addEventListener("click", async e=>{
        if (e.target.matches(".edit")){
            $title.textContent = "Editar equipo";
            $form.nombre.value = e.target.dataset.nombre;
            $form.ciudad.value = e.target.dataset.ciudad;
            $form.titulos.value = e.target.dataset.titulos;
            $form.id.value = e.target.dataset.id; //dejamos guardado el id del equipo a editar
        }

        if(e.target.matches(".delete")){
            // DELETE - DELETE

            let isDelete = confirm(`Estás seguro que queres eliminar a ${e.target.dataset.name}`)

            if (isDelete){
                try {
                    let options ={
                        method: "DELETE",
                        headers: {"Content-type": "application/json; charset=utf-8"}
                    },
                    res = await fetch(`http://localhost:3000/clubes/${e.target.dataset.id}`, options);


                    if (!res.ok){ //en caso de haber un error saltamos al catch y pasamos un objeto
                        throw {status : res.status, statusText : res.statusText } 
                    }

                    location.reload();

                } catch (err) {
                    let message = err.statusText || "Ocurrió un error";
                    $form.insertAdjacentHTML("afterend", `<p><b>error ${err.status}: ${message}</b></p>`)
                }
            }
        }
    })
}