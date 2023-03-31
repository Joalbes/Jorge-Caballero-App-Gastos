//vistas
const formulario = document.getElementById('formulario');
const contenedorTabla = document.getElementById('contenedorTabla');
//evento
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    const objDatos = new FormData(formulario);
    // contenedorTabla.innerHTML+=`
    // <tr class="border-solid">
    //         <td class="px-[2rem] text-ls">${objDatos.get('transactionType')}</th>
    //         <td class="px-[2rem] text-ls ">${objDatos.get('transactionDescription')}</th>
    //         <td class="px-[2rem] text-ls">${objDatos.get('transactionAmount')}</th>
    //         <td class="px-[3rem] text-ls">${objDatos.get('transactionCategory')}</th>
    //     </tr>
    llenarTabla(objDatos);
    
   
})

function llenarTabla(objDatos) {
    // agrego Fila
    let fila = contenedorTabla.insertRow(-1);
    //agrego celda0
    let celda = fila.insertCell(0);
    celda.textContent = objDatos.get('transactionType');
    // agrego celda1
    celda = fila.insertCell(1);
    celda.textContent = objDatos.get('transactionDescription');
    // agrego celda2
    celda = fila.insertCell(2);
    celda.textContent = objDatos.get('transactionAmount')
    // agrego celda3
    celda = fila.insertCell(3);
    celda.textContent = objDatos.get('transactionCategory')
    
}

