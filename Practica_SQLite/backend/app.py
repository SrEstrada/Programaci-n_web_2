from flask import Flask, jsonify
import sqlite3
import os

app = Flask(__name__)

@app.route('/api/peliculas')
def obtener_peliculas():
    # Ruta absoluta segura
    ruta_base = os.path.abspath(os.path.dirname(__file__))
    ruta_db = os.path.join(ruta_base, 'imdb.db')

    # Verifica que la ruta sea correcta (DEBUG)
    print(f"Ruta completa a la base de datos: {ruta_db}")

    conexion = sqlite3.connect(ruta_db)
    cursor = conexion.cursor()

    cursor.execute("SELECT * FROM peliculas")
    peliculas = cursor.fetchall()

    conexion.close()
    return jsonify(peliculas)

if __name__ == '__main__':
    app.run(debug=True)
