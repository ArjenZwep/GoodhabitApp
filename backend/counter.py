from flask import request, jsonify
import logging
from flask_restful import Resource

class counterApi(Resource):
    def get(self):
        #todo build out how many times there has been meditated
        return jsonify({
            'hello' : 'world'
        })