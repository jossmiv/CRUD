# CRUD
Proyecto CRUD sin bases de datos en JavaScript que administra una tabla y su contenido, agregando, actualizando y eliminando registros a través de un formulario. Los datos del formulario se almacenan en el almacenamiento local de la página web. 

La carpeta principal y a evaluar es CRUD/CRUD los archivos app.js e index.html

La función obtenerRegistros() verifica si hay algún registro en el almacenamiento local. Si no hay ningún registro, se crea una matriz vacía y se almacena en el almacenamiento local. Luego, se devuelve la matriz de registros en el almacenamiento local.

La función limpiarTabla() elimina todas las filas de la tabla excepto la primera fila que contiene los encabezados de la tabla.

El código también establece un evento para el botón "Upload" que se activa cuando se hace clic en él. Este evento se encarga de agregar un nuevo registro a la tabla utilizando los datos ingresados en el formulario de captura. Si algún campo del formulario está vacío, se muestra una alerta y se evita que se agregue el registro.

La función actualizarRegistro() busca un registro en el arreglo de registros utilizando el ID proporcionado. Si se encuentra el registro, se actualiza con los nuevos valores proporcionados. La función también actualiza los campos del formulario de edición con los nuevos valores, muestra una alerta de éxito en la actualización y actualiza la tabla con los registros actualizados.

La función mostrarFormularioEdicion() muestra un formulario de edición con los valores del registro seleccionado.

La función eliminarRegistro() busca un registro en el arreglo de registros utilizando el ID proporcionado y lo elimina si se encuentra.

La función llenarTabla() se encarga de obtener los registros del almacenamiento local, limpiar la tabla y agregar cada registro a la tabla en filas nuevas. Además, cada fila de la tabla tiene un botón de edición y eliminación que llama a las funciones correspondientes cuando se hace clic en ellos.
