from flask import Flask, jsonify, send_from_directory
import sqlite3
import os

app = Flask(__name__, static_folder='../frontend', static_url_path='')

@app.route('/api/peliculas')
def obtener_peliculas():
    ruta_absoluta = os.path.abspath(os.path.join(os.path.dirname(__file__), 'imdb.db'))
    conexion = sqlite3.connect(ruta_absoluta)
    cursor = conexion.cursor()

    cursor.execute("SELECT id, titulo, anio, duracion FROM peliculas")
    datos = cursor.fetchall()

    conexion.close()
    return jsonify(datos)

@app.route('/')
def servir_html():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    print("Flask se está ejecutando correctamente")
    app.run(debug=True)
