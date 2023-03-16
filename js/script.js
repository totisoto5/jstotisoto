const d = document;
const claseBoton = ".menu_hamb"
const boton = d.querySelector("menu_hamb");

    d.addEventListener("click", (ev)=>{
        if (ev.target.matches(claseBoton) || (ev.target.matches(".menu-item"))){
            d.querySelector(".panel_menu").classList.toggle("is_visible");
        }
        
    })

