var select;
var tablav;
function seccion(){
    const secciones=document.getElementById('secciones');
    const filtro=document.getElementById('filtro');
    select=secciones.options[secciones.selectedIndex].value
    tablav=filtro.options[filtro.selectedIndex].value;
}

function call(){
    select=""
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
        eel.obtenerTabla("Cuenca")(obtenerCuencas)
        eel.obtenerTabla("MetodoPesca")(obtenerMetodos)
        campos.innerHTML+=`
        Fecha de la actividad: <input type="date"  id="fecha"></p>
        Peso del pescado: <input type="number" id="peso"/></p>`

        campos.innerHTML+=`<button onclick="actualizarDatos()">Actualizar pesca</button><br>`;
    }
}
function actualizarDatos(){
    if(select==""){
        alert("Hay valores en blanco")
    }else{
        if(tablav=="Cuenca"){
            var cuenca=document.getElementById('cuenca').value;
            if(cuenca==""){
                alert("Hay valores en blanco")
            }else{
                let valores=[select,cuenca]
                eel.actualizarCuenca(valores)(validacion)
            }
        }else if(tablav=="MetodoPesca"){
            var metodo=document.getElementById('metodop').value;
            if(metodo==""){
                alert("Hay valores en blanco")
            }else{
                let valores=[select,metodo]
                eel.actualizarMetodo(valores)(validacion)
            }
        }else{
            const secciones3=document.getElementById('secciones3');
            const secciones2=document.getElementById('secciones2');
            var cuenca = secciones3.options[secciones3.selectedIndex].value;
            var metodo = secciones2.options[secciones2.selectedIndex].value;
            var fecha=document.getElementById('fecha').value;
            var peso=document.getElementById('peso').value;

            if(peso=="" || fecha=="" || metodo=="" || cuenca==""){
                alert("Hay valores en blanco")
            }else{
                let valores=[select,cuenca,metodo,fecha,peso];
                eel.actualizarPesca(valores)
            }  
        }
    }
    call();
}
function obtenerCuencas(valores_tabla){
    const campos=document.getElementById('datos');
    campos.innerHTML+=` <p>Cuenca: <select id="secciones3"></p>`
    const secciones3=document.getElementById('secciones3');
    secciones3.innerHTML+=`<option disabled selected value> -- selecciona una opción -- </option>`
    for(var i=0; i<valores_tabla.length;i++){
        var cuenca=valores_tabla[i][0] + " ~ "+ valores_tabla[i][1];
        secciones3.innerHTML+=`<option value="${valores_tabla[i][1]}">${cuenca}</option>`;
    }
}
function obtenerMetodos(valores_tabla){
    const campos=document.getElementById('datos');
    campos.innerHTML+=`<p>Metodos: <select id="secciones2"></p>`
    const secciones2=document.getElementById('secciones2');
    secciones2.innerHTML+=`<option disabled selected value> -- selecciona una opción -- </option>`
    for(var i=0; i<valores_tabla.length;i++){
        var metodop=valores_tabla[i][0] + " ~ "+ valores_tabla[i][1];
        secciones2.innerHTML+=`<option value="${valores_tabla[i][1]}">${metodop}</option>`;
    }
}
function validacion(valores_tabla){
    if(valores_tabla=="False"){
        alert("Actualizado correctamente")
    }else{
        alert("El dato a actualizar está siendo usado en la tabla pesca")
    }
}