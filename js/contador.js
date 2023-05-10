export function contador(fecha, idContenedor, mensajeFinal){

    const d = document;
    const $contenedor = d.getElementById(idContenedor);
    

    let countDown = setInterval(()=>{
        let dias, 
        horas,
        minutos,
        segundos,
        dateMiliseconds = new Date(fecha).getTime(),
        dateNow = new Date().getTime(),
        resta,
        factor;

        resta = dateMiliseconds - dateNow;

        dias = Math.floor(resta / (1000 * 60 * 60 * 24))
        horas = Math.floor((resta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        minutos = Math.floor(resta % (1000 * 60 * 60) / (1000 * 60))
        segundos = Math.floor(resta % (1000 * 60) / 1000)

        $contenedor.innerHTML = `
        <h3> Cuanto falta para llegar a la fecha: ${fecha}</h3>
        <h3> Faltan ${dias} dias,${horas} horas,${minutos} minutos,${segundos} segundos</h3>
        `
    },1000)

    
    

} 