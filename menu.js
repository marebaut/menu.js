fetch(menu.json)
//Que hace esta linea? esta linea indica la carga del archivo menu.json,
//fetch es una funcion de javascript que facilita la realizacion de solicitudes
//de red como tener datos de un archivo o un endpoint de API.
//como funciona? fetch devuelve una promesa que cuando se resuelve, te da accaso
//a la arespuesta de la solicitud . Esta respuesta no es directamente los
//dsatos en formato JSON, si no un objeto de brespuesta que incluye varios
//detalles sobre la respuesta misma.
.then(response => response.json())
//que hace? esta linea toma el objeto de respuesta obtenido del fetch by
//utiliza el metodo.json() tambi8en devuelve una promesa, la cual se
//resuleve con el contenido del cuerpo en formato JSON.
.then(data =>{
    //que hace? aqui se procesan los datos JSON ya convertidos.Se obtiene
    //una referencia el contenedor del menu en el HTML  mediante getElementId
    //('menu-container'),
const menuContainer = document.getElementById('menu-container');
data.items.array.forEach(element => {
    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = category.category;
    menuContainer.appendChild (categoryTitle);

    const table = document.createElement('table');
    //que hace?se crea un elemento table para cada cxategoria.Ademas, se prepara el
    //encabezado(tablehead)con las columnas pertinentes. tableBody se inicializa 
    //vacio y  se llenara con los elementos de la category.
    const tableHead ='<tr><th>Foto</th><th>Descripcion</th><th>Precio</th></tr>';
    let tablebody ='';
});

})
