from flask import request, jsonify
import logging
from flask_restful import Resource

class counterApi(Resource):
    def get(self):
        return jsonify({
            'hello' : 'world'
        })