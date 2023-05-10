export default function menuHamb(clasePanel, claseBoton, claseBoton2, claseToggle){
    const d = document;
    d.addEventListener("click", (e)=>{
        const d = document;
        if (e.target.matches(claseBoton) || (e.target.matches(claseBoton2))){
            d.querySelector(clasePanel).classList.toggle(claseToggle)
        }
        
    })
}
