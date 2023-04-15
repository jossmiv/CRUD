// let registros = [
//     {
//         id: 1 ,
//         nombre:'José',
//         correo:'pepemijares1@hotmail.com',
//         descripcion:'Estudiante'
//     },
// ]

// localStorage.setItem('registros', JSON.stringify(registros));

function obtenerRegistros() {
    if (localStorage.getItem('registros') === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem('registros'));
    }
}
function limpiarTabla() {
    let tab = document.getElementById('tablaRegistro');
    // Eliminar todas las filas de la tabla, excepto la primera
    while (tab.rows.length > 0) {
      tab.deleteRow(0);
    }
  }

  if (localStorage.getItem('registros') === null) {
    localStorage.setItem("registros", "[]");
  }
  //  else {
  //   return JSON.parse(localStorage.getItem('registros'));
  // }


//Crate
let upload =  document.getElementById('btnUpload')
upload.addEventListener('click', (e)=>{

    e.preventDefault();

    var nombreCap = document.getElementById('datoNombre').value;
    var correoCap = document.getElementById('datoCorreo').value;
    var descripcionCap = document.getElementById('txtDescripcion').value;
    
    if (nombreCap.trim() === '' || correoCap.trim() === '' || descripcionCap.trim() === '') {
        alert('Por favor, rellena todos los campos del formulario');
        return;
    }

    var registros = JSON.parse(localStorage.getItem("registros"));

    var registro = {
        id : registros.length + 1,
        nombre : nombreCap,
        correo : correoCap,
        descripcion : descripcionCap
    }
    registros.push(registro);
    
    localStorage.setItem('registros', JSON.stringify(registros)); 
    //Read
    limpiarTabla();
    // imprimirRegistro(registro);
    // var tabla = document.querySelector('tbody');

    // Obtener el elemento <table> del documento HTML

    // for (var i = 0; i < registros.length; i++) {
    //     // Obtener el registro actual
    //     var registro = registros[i];
        
    //     var fila = tabla.insertRow();
  
    //     // Crear las celdas de la fila nueva
    //     var celdaID = fila.insertCell(0);
    //     var celdaNombre = fila.insertCell(1);
    //     var celdaCorreo = fila.insertCell(2);
    //     var celdaDescripcion = fila.insertCell(3);
    //     var celdaEdicion = fila.insertCell(4);
        
    //     // Subir los valores capturados a la fila nueva
    //     celdaID.innerHTML = registro.id;
    //     celdaNombre.innerHTML = registro.nombre;
    //     celdaCorreo.innerHTML = registro.correo;
    //     celdaDescripcion.innerHTML = registro.descripcion;
        

    //     var botonEliminar = document.createElement("button")
    //     botonEliminar.innerText = "eliminar";
    //     botonEliminar.addEventListener("click", () =>
    //     eliminarRegistro(i+1))
    //     celdaEdicion.appendChild(botonEliminar);
    // Limpiar el formulario
    llenarTabla();
    var formulario = document.getElementById('captura');
    formulario.reset();

    

  // }
})

// Función para obtener todos los registros
function obtenerRegistros() {
  return registros;
}


// Función para actualizar un registro existente
function actualizarRegistro(id, nombre, correo, descripcion) {
  // Buscar el registro con el nombre dado
  let indice = registros.findIndex(r => r.id === id);

  // Si se encuentra el registro, actualizar sus valores
  if (indice >= 0) {
    registros[indice].nombre = nombre;
    registros[indice].correo = correo;
    registros[indice].descripcion = descripcion;
  }
}

// Función para eliminar un registro existente
function eliminarRegistro(id) {

  var registros = JSON.parse(localStorage.getItem("registros"));    

  // Buscar el registro con el nombre dado
  let indice = registros.findIndex(r => r.id === id);

  // Si se encuentra el registro, eliminarlo del arreglo
  if (indice >= 0) {
    registros.splice(indice, 1);
  }
  localStorage.setItem('registros', JSON.stringify(registros)); 
  llenarTabla();
}


// let update = document.getElementById('btnEditar')
// update.addEventListener('click', (c) =>{
//   obtenerRegistros();
//   for (let i = 0; i < registros.length; i++) {
//     if (registros[i].id === document.getElementById('btnEditar').value) {
//       // Se ha encontrado una coincidencia, interrumpe el ciclo

//     registros[i].nombre = nombre;
//     registros[i].correo = correo;
//     registros[i].descripcion = descripcion;
//   }
//     }
//   }
  
// )

function llenarTabla (){
  var registros = JSON.parse(localStorage.getItem("registros"));    
    //Read
    limpiarTabla();
    // imprimirRegistro(registro);
    var tabla = document.querySelector('tbody');

    // Obtener el elemento <table> del documento HTML
    for (let i = 0; i < registros.length; i++) {
        // Obtener el registro actual
        var registro = registros[i];
        
        var fila = tabla.insertRow();
  
        // Crear las celdas de la fila nueva
        var celdaID = fila.insertCell(0);
        var celdaNombre = fila.insertCell(1);
        var celdaCorreo = fila.insertCell(2);
        var celdaDescripcion = fila.insertCell(3);
        var celdaEdicion = fila.insertCell(4);
        
        // Subir los valores capturados a la fila nueva
        celdaID.innerHTML = registro.id;
        celdaNombre.innerHTML = registro.nombre;
        celdaCorreo.innerHTML = registro.correo;
        celdaDescripcion.innerHTML = registro.descripcion;

        var botonEliminar = document.createElement("button")
        botonEliminar.innerText = "Eliminar";
        
        botonEliminar.addEventListener("click", () => eliminarRegistro(registro.id));
       
        celdaEdicion.appendChild(botonEliminar);

    

  }
}
llenarTabla();