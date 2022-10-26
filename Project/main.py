import eel
import sqlite3
import os
import module.AccesoDatos as ad
eel.init("www")
data=ad.accesoDato()
@eel.expose    
def obtenerTabla(tabla):
    if tabla=="Cuenca":
        cuencas=data.obtenerCuenca()
        lista=[]
        for row in cuencas:
            lista.append(row)
        return lista
    elif tabla=="MetodoPesca":
        metodos=data.obtenerMetodo()
        lista=[]
        for row in metodos:
            lista.append(row)
        return lista
    else:
        pesca=data.obtenerPesca()
        lista=[]
        for row in pesca:
            lista.append(row)
        return lista

@eel.expose
def enviarPesca(valores):
    data.crearPesca(valores)
@eel.expose
def enviarMetodo(metodo):
    data.crearMetodo(metodo)
@eel.expose
def enviarCuenca(cuenca):
    data.crearCuenca(cuenca)
    
    
@eel.expose
def eliminarCuenca(cuenca):
    data.eliminarCuenca(cuenca)
@eel.expose
def eliminarMetodo(metodo):
    data.eliminarMetodo(metodo)
@eel.expose
def eliminarPesca(pesca):
    data.eliminarPesca(pesca)
    
    
    
@eel.expose
def actualizarCuenca(cuenca):
    data.actualizarCuenca(cuenca)
@eel.expose
def actualizarMetodo(metodo):
    data.actualizarMetodo(metodo)
    
eel.start("views/index.html", size=(700,500))

