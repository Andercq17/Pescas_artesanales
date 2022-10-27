function call(){
    obtenerTabla();
    insertarCampos();
}
function insertarCampos(){
    const filtro=document.getElementById('filtro');
    const campos=document.getElementById('datos');
    var seleccion = filtro.options[filtro.selectedIndex].value;
    if(seleccion=="Cuenca"){
        campos.innerHTML=""
        campos.innerHTML+=`<p>Nombre de cuenca: <input type="text" id="cuenca"/></p>
        <button onclick="enviarDatos('cuenca')">Enviar nueva cuenca</button><br>`;
    }else if(seleccion=="MetodoPesca"){
        campos.innerHTML=""
        campos.innerHTML+=`<p>Metodo de pesca: <input type="text" id="metodop"/></p>
        <button onclick="enviarDatos('metodo')">Enviar nuevo metodo de pesca</button><br>`;
    }else{
        campos.innerHTML=""
        eel.obtenerTabla("Cuenca")(obtenerCuencas)
        eel.obtenerTabla("MetodoPesca")(obtenerMetodos)
        campos.innerHTML+=`
        Fecha de la actividad: <input type="date"  id="fecha"></p>
        Peso del pescado: <input type="number" id="peso"/></p>
        <button onclick="enviarDatos('pesca')">Enviar nueva pesca</button><br>`;
    }
}
function enviarDatos(tabla){
    if (tabla=="pesca"){
        const secciones=document.getElementById('secciones');
        const secciones2=document.getElementById('secciones2');
        var cuenca = secciones.options[secciones.selectedIndex].value;
        var metodo = secciones2.options[secciones2.selectedIndex].value;
        var fecha=document.getElementById('fecha').value;
        var peso=document.getElementById('peso').value;
        let valores=[cuenca,metodo,fecha,peso];
        if(cuenca=="" || metodo=="" || fecha=="" || peso==""){
            alert("Hay valores en blanco")
        }else{   
            eel.enviarPesca(valores)()
        }
    }else if(tabla=="metodo"){
        var metodo=document.getElementById('metodop').value;
        if(metodo==""){
            alert("Hay valores en blanco")
        }else{
            eel.enviarMetodo(metodo)(validacion)
        }
    }else{
        var cuenca=document.getElementById('cuenca').value;
        if(cuenca==""){
            alert("Hay valores en blanco")
        }else{
            eel.enviarCuenca(cuenca)(validacion)
        }
    }
    obtenerTabla();
}
function obtenerCuencas(valores_tabla){
    const campos=document.getElementById('datos');
    campos.innerHTML+=`<p> Cuenca: <select id="secciones"></p>`
    const secciones=document.getElementById('secciones');
    secciones.innerHTML+=`<option disabled selected value> -- selecciona una opción -- </option>`
    for(var i=0; i<valores_tabla.length;i++){
        var cuenca=valores_tabla[i][0] + " ~ "+ valores_tabla[i][1];
        secciones.innerHTML+=`<option value="${valores_tabla[i][1]}">${cuenca}</option>`;
    }
}
function obtenerMetodos(valores_tabla){
    const campos=document.getElementById('datos');
    campos.innerHTML+=`<p>Metodos:  <select id="secciones2"></p>`
    const secciones2=document.getElementById('secciones2');
    secciones2.innerHTML+=`<option disabled selected value> -- selecciona una opción -- </option>`
    for(var i=0; i<valores_tabla.length;i++){
        var metodop=valores_tabla[i][0] + " ~ "+ valores_tabla[i][1];
        secciones2.innerHTML+=`<option value="${valores_tabla[i][1]}">${metodop}</option>`;
    }
}
function validacion(valores_tabla){
    if(valores_tabla=="True"){
        alert("Ya existe en la tabla")
    }else{
        alert("Ingresado Correctamente")
    }
}