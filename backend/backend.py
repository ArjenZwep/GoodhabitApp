from flask import Flask, request, jsonify, render_template
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate
import os
import numpy as np
import logging
from sqlalchemy import create_engine, ForeignKey
from sqlalchemy import Column, Date, Integer, String
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine('sqlite:///database/goodhabit.db', echo=True)
Base = declarative_base()


class School(Base):

    __tablename__ = "logins"

    id = Column(Integer, primary_key=True)
    name = Column(String)  
    password = Column(String)

    def __init__(self, name):

        self.name = name    


Base.metadata.create_all(engine)

api = Api()
migrate = Migrate()
db = SQLAlchemy()
migrate = Migrate()
ma = Marshmallow()

def create_app():
    app = Flask(__name__)
    
    from counter import counterApi
    api.add_resource(counterApi, '/counter')    

    api.init_app(app)
    db.init_app(app)
    ma.init_app(app)

    migrate.init_app(app, db)

    return app


if __name__ == '__main__':
    app = create_app()
    logging.critical("Created APP")
    app.run(host='0.0.0.0', port=5000)