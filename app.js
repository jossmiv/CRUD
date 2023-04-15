function obtenerRegistros() {
  if (localStorage.getItem('registros') === null) {
      localStorage.setItem("registros", "[]");
  } 
    return JSON.parse(localStorage.getItem('registros'));
}
function limpiarTabla() {
  let tab = document.getElementById('tablaRegistro');
  // Eliminar todas las filas de la tabla
  while (tab.rows.length > 1) {
    tab.deleteRow(1);
  }
}

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
  // Limpiar el formulario
  llenarTabla();
  var formulario = document.getElementById('captura');
  formulario.reset();
})
// Función para actualizar un registro existente
  function actualizarRegistro(id, nombre, correo, descripcion) {
  let registros = JSON.parse(localStorage.getItem('registros'));
  var idNum = Number(id);
  // Buscar el registro con el ID dado
  let editarRegistro = registros.findIndex(r => r.id === idNum);

  // Si se encuentra el registro, actualizar sus valores
  if (editarRegistro >= 0) {
    registros[editarRegistro].nombre = nombre;
    registros[editarRegistro].correo = correo;
    registros[editarRegistro].descripcion = descripcion;

    // Actualizar los campos del formulario de edición con los nuevos valores
    document.getElementById('datoNombreE').value = nombre;
    document.getElementById('datoCorreoE').value = correo;
    document.getElementById('txtDescripcionE').value = descripcion;

    // Mostrar un mensaje de éxito en la actualización
    alert('Registro actualizado correctamente');

    // Actualizar la tabla con los registros actualizados
    localStorage.setItem('registros', JSON.stringify(registros));
    llenarTabla();
  }
}

function mostrarFormularioEdicion(id) {
  // Obtener el registro con el ID dado
  var registros = JSON.parse(localStorage.getItem('registros'));
  var idNum = Number(id);
  var registro = registros.find(r => r.id === idNum);
  
  // Rellenar los campos del formulario con los valores del registro
  document.getElementById('datoNombreE').value = registro.nombre;
  document.getElementById('datoCorreoE').value = registro.correo;
  document.getElementById('txtDescripcionE').value = registro.descripcion;
  
  // Mostrar el formulario de edición
  document.getElementById('formularioEdicion').style.display = 'block';
  
  // Guardar el ID del registro en un campo oculto del formulario
  document.getElementById('idRegistro').value = id;
}


  var formularioEdicion = document.getElementById('capturaEdicion');
  formularioEdicion.addEventListener('submit', function (e) {
      e.preventDefault();

      // Obtener los valores del formulario de edición
      var nombreEd = document.getElementById('datoNombre').value;
      var correoEd = document.getElementById('datoCorreo').value;
      var descripcionEd = document.getElementById('txtDescripcion').value;
      var idEd = document.getElementById('idRegistro').value;

      // Actualizar el registro en el arreglo de registros
      actualizarRegistro(Number(idEd), nombreEd, correoEd, descripcionEd);

      // Ocultar el formulario de edición
      document.getElementById('formularioEdicion').style.display = 'none';

      // Limpiar el formulario de edición
      formularioEdicion.reset();
  });

function eliminarRegistro(id) {
  var registros = JSON.parse(localStorage.getItem('registros'));
  var idNum = Number(id);
  // Buscar el registro con el id dado
  let indice = registros.findIndex(r => r.id === idNum);
  // Si se encuentra el registro, eliminarlo del arreglo
  if (indice >= 0) {
      registros.splice(indice, 1);
  }
  localStorage.setItem('registros', JSON.stringify(registros));
  llenarTabla();
}


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

      var botonEditar = document.createElement("button");
      botonEditar.innerText = "Editar";
      botonEditar.setAttribute("data-id", registro.id);
      botonEditar.addEventListener("click", function () {
          console.log(registro.id)
          console.log(registro);
        // Al hacer clic en el botón, mostrar el formulario de edición
        mostrarFormularioEdicion(registro.id);
      });
      celdaEdicion.appendChild(botonEditar);

      var botonEliminar = document.createElement("button");
      botonEliminar.innerText = "Eliminar";
      botonEliminar.setAttribute("data-id", registro.id);
      botonEliminar.addEventListener("click", function () {
      // Al hacer clic en el botón, eliminar el registro
          eliminarRegistro(this.getAttribute("data-id"));
      });
      celdaEdicion.appendChild(botonEliminar);
}
}
llenarTabla();