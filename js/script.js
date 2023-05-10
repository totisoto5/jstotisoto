import {contador} from "../js/contador.js";
import menuHamb from "./menuHamb.js";
import ajaxFetch from "./ajax-fetch.js";

const d = document;


    d.addEventListener("DOMContentLoaded", e=>{
        //Llamado al modulo del menu hamburguesa
        menuHamb(".panel_menu",".menu_hamb", ".menu-item", "is_visible")
        //Llamado al modulo de la cuenta regresiva
        contador("12 may, 2023 00:00:00","reloj","Llegó el día")
        // Llamadoi al módulo de ajax con fetch
        ajaxFetch("fotos");
    })
    

