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
        campos.innerHTML+=`<p>Cuenca: <input type="number" id="cuenca"/></p>
        Metodo de pesca: <input type="number" id="metodo"/></p>
        Fecha de la actividad: <input type="date"  id="fecha"></p>
        Peso del pescado: <input type="text" id="peso"/></p>
        <button onclick="enviarDatos('pesca')">Enviar nueva pesca</button><br>`;
    }
}
function enviarDatos(tabla){
    if (tabla=="pesca"){
        var cuenca=document.getElementById('cuenca').value;
        var metodo=document.getElementById('metodo').value;
        var fecha=document.getElementById('fecha').value;
        var peso=document.getElementById('peso').value;
        let valores=[cuenca,metodo,fecha,peso];
        eel.enviarPesca(valores)()
    }else if(tabla=="metodo"){
        var metodo=document.getElementById('metodop').value;
        eel.enviarMetodo(metodo)
    }else{
        var cuenca=document.getElementById('cuenca').value;
        eel.enviarCuenca(cuenca);
    }
    obtenerTabla();
}