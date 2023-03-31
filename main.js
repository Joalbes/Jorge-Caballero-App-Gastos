//varibalbes
let alamcenamientoData = [];
//vistas
const formulario = document.getElementById('formulario');
const contenedorTabla = document.getElementById('contenedorTabla');
//evento
formulario.addEventListener('submit',(e)=>{
    //elimina el comportamineto por defecto del evento submit
    e.preventDefault();
    // creo un objeto con todos los datos del formulario
    const objDatos = new FormData(formulario);
    //creo objeto que almacena en variables el valor de los inputs del formulario.
    let objVariableDatos = crearData(objDatos);
    //guardo en el local storage los inputs del formulario
    guardarObjlLocalStorage(objVariableDatos);
    //lleno la tabla: creando una fila en la ultima posicion e ingreso las 4 celdas.
    llenarTabla(objVariableDatos);
    // contenedorTabla.innerHTML+=`
    // <tr class="border-solid">
    //         <td class="px-[2rem] text-ls">${objDatos.get('transactionType')}</th>
    //         <td class="px-[2rem] text-ls ">${objDatos.get('transactionDescription')}</th>
    //         <td class="px-[2rem] text-ls">${objDatos.get('transactionAmount')}</th>
    //         <td class="px-[3rem] text-ls">${objDatos.get('transactionCategory')}</th>
    //     </tr>
    
    
   
})

function crearData(obj) {
    let transactionType = obj.get('transactionType');
    let transactionDescription = obj.get('transactionDescription');
    let transactionAmount = obj.get('transactionAmount')
    let transactionCategory = obj.get('transactionCategory')
    return {'transactionType':transactionType , 'transactionDescription':transactionDescription , 'transactionAmount':transactionAmount , 'transactionCategory':transactionCategory }
    
}

function guardarObjlLocalStorage(obj) {
    //almaceno en vector cada obj nuevo.
    alamcenamientoData.push(obj);
    //guardo en el localStorage.
    localStorage.setItem('objVariablesData',JSON.stringify(alamcenamientoData));
}

function llenarTabla(obj) {
    // agrego Fila
    let fila = contenedorTabla.insertRow(-1);
    //agrego celda0
    let celda = fila.insertCell(0);
    celda.textContent = obj['transactionType']
    // agrego celda1
    celda = fila.insertCell(1);
    celda.textContent = obj.transactionDescription
    // agrego celda2
    celda = fila.insertCell(2);
    celda.textContent = obj.transactionAmount
    // agrego celda3
    celda = fila.insertCell(3);
    celda.textContent = obj.transactionCategory    
}

