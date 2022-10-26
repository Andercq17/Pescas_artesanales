import sqlite3
import os
class accesoDato:
    def __obtenerCadenaConexion__(self,id):
        return os.path.abspath(id)
    def __realizarConexion(self):
        cadena_conexion=self.__obtenerCadenaConexion__("pescas_Artesanales.db")
        con=sqlite3.Connection(cadena_conexion) #conexion
        cur= con.cursor() #cursor
        return (cur, con)
    def obtenerCuenca(self):
        (cur,con)= self.__realizarConexion() #cursor
        res=cur.execute("select * from cuenca").fetchall()
        lista=[]
        for row in res:
            lista.append(row)
        return lista #devuelve lista
    def obtenerMetodo(self):
        (cur,con)= self.__realizarConexion() #cursor
        res=cur.execute("select * from metodoPesca")
        return res #devuelve lista
    def obtenerPesca(self):
        (cur,con)= self.__realizarConexion() #cursor
        res=cur.execute("select * from pesca")
        return res #devuelve lista
    
    def crearPesca(self,valores):
        (cur,con)= self.__realizarConexion()
        cur.execute(f"INSERT INTO pesca(cuenca,metodoPesca,fechaActividad,pesoPescado)VALUES({str(valores[0])},{str(valores[1])},'{str(valores[2])}',{str(valores[3])})")
        con.commit()
    def crearMetodo(self,metodo):
        (cur,con)= self.__realizarConexion()
        cur.execute(f"INSERT INTO metodoPesca(tipoMetodo)VALUES('{str(metodo)}')")
        con.commit()
    def crearCuenca(self,cuenca):
        (cur,con)= self.__realizarConexion()
        cur.execute(f"INSERT INTO cuenca(nombreCuenca)VALUES('{str(cuenca)}')")
        con.commit()
        
        
    def eliminarCuenca(self,cuenca):
        (cur,con)= self.__realizarConexion()
        cur.execute(f"DELETE FROM cuenca WHERE nombreCuenca='{str(cuenca)}'")
        con.commit()
    def eliminarMetodo(self, metodo):
        (cur,con)= self.__realizarConexion()
        cur.execute(f"DELETE FROM metodoPesca WHERE tipoMetodo='{str(metodo)}'")
        con.commit()
    def eliminarPesca(self, pesca):
        (cur,con)= self.__realizarConexion()
        cur.execute(f"DELETE FROM pesca WHERE consecutivo={pesca}")
        con.commit()
        
    
    def actualizarCuenca(self, cuenca):
        (cur,con)= self.__realizarConexion()
        cur.execute(f"UPDATE cuenca SET nombreCuenca = '{cuenca[1]}' WHERE id = {cuenca[0]}")
        con.commit()
    def actualizarMetodo(self, metodo):
        (cur,con)= self.__realizarConexion()
        cur.execute(f"UPDATE metodoPesca SET tipoMetodo = '{metodo[1]}' WHERE id = {metodo[0]}")
        con.commit()
    
         