from flask import request, jsonify
import logging
from flask_restful import Resource
from backend import engine

class counterApi(Resource):
    def get(self):
        #query the first row from the database and return it
        connection = engine.connect()
        results = connection.execute("SELECT * FROM logins")
        results_list = []
        for row in results:
            print(f'hallo dit is een row {row}')
            results_list.append(row)
        connection.close()
        return jsonify({
            'login' : str(results_list[0][1]),
            'password': str(results_list[0][2])
        })