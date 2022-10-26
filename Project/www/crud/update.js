var select;
var tablav;
function seccion(){
    const secciones=document.getElementById('secciones');
    const filtro=document.getElementById('filtro');
    select=secciones.options[secciones.selectedIndex].value
    tablav=filtro.options[filtro.selectedIndex].value;
}

function call(){
    obtenerTabla();
    const filtro=document.getElementById('filtro');
    var seleccion = filtro.options[filtro.selectedIndex].value;
    eel.obtenerTabla(seleccion)(insertarCampos)
}
function insertarCampos(valores_tabla){
    const filtro=document.getElementById('filtro');
    const campos=document.getElementById('datos');
    var seleccion = filtro.options[filtro.selectedIndex].value;
    if(seleccion=="Cuenca"){
        campos.innerHTML=""
        campos.innerHTML+=`Elige cual quieres actualizar: `;
        campos.innerHTML+=` <select id="secciones" onchange="seccion()">`
        const secciones=document.getElementById('secciones');
        secciones.innerHTML+=`<option disabled selected value> -- selecciona una opción -- </option>`
        for(var i=0; i<valores_tabla.length;i++){
            var cuenca=valores_tabla[i][0] + " ~ "+ valores_tabla[i][1];
            secciones.innerHTML+=`<option value="${valores_tabla[i][0]}">${cuenca}</option>`;
        }
        campos.innerHTML+=`<p>Nombre de cuenca: <input type="text" id="cuenca"/></p>`
        campos.innerHTML+=`<button onclick="actualizarDatos()">Actualizar cuenca</button><br>`;
    }else if(seleccion=="MetodoPesca"){
        campos.innerHTML=""
        campos.innerHTML+=`Elige cual quieres actualizar: `;
        campos.innerHTML+=` <select id="secciones" onchange="seccion()">`
        const secciones=document.getElementById('secciones');
        secciones.innerHTML+=`<option disabled selected value> -- selecciona una opción -- </option>`
        for(var i=0; i<valores_tabla.length;i++){
            var metodop=valores_tabla[i][0] + " ~ "+ valores_tabla[i][1];
            secciones.innerHTML+=`<option value="${valores_tabla[i][0]}">${metodop}</option>`;
        }
        campos.innerHTML+=`<p>Metodo de pesca: <input type="text" id="metodop"/></p>`
        campos.innerHTML+=`<button onclick="actualizarDatos()">Actualizar Metodo de pesca</button><br>`;
    }else{
        campos.innerHTML=""
        campos.innerHTML+=`Elige cual quieres actualizar: `;
        campos.innerHTML+=` <select id="secciones" onchange="seccion()">`
        const secciones=document.getElementById('secciones');
        secciones.innerHTML+=`<option disabled selected value> -- selecciona una opción -- </option>`
        for(var i=0; i<valores_tabla.length;i++){
            secciones.innerHTML+=`<option value="${valores_tabla[i][0]}">${valores_tabla[i][0]}</option>`;
        }
        campos.innerHTML+=`<p>Cuenca: <input type="number" id="cuenca"/></p>
        Metodo de pesca: <input type="number" id="metodo"/></p>
        Fecha de la actividad: <input type="date"  id="fecha"></p>
        Peso del pescado: <input type="text" id="peso"/></p>`

        campos.innerHTML+=`<button onclick="actualizarDatos()">Actualizar pesca</button><br>`;
    }
}
function actualizarDatos(){
    if(tablav=="Cuenca"){
        var cuenca=document.getElementById('cuenca').value;
        let valores=[select,cuenca]
        eel.actualizarCuenca(valores)
    }else if(tablav=="MetodoPesca"){
        var metodo=document.getElementById('metodop').value;
        let valores=[select,metodo]
        eel.actualizarMetodo(valores)
    }else{
        eel.eliminarPesca(select)
    }
    call();
}