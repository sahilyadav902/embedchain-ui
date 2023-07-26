import os 
import time
from flask import Blueprint, request, jsonify, make_response
from embedchain import App, OpenSourceApp

from models import APIKey
from paths import DB_DIRECTORY_OPEN_AI, DB_DIRECTORY_OPEN_SOURCE

sources_bp = Blueprint('sources', __name__)


# API route to add data sources
@sources_bp.route('/api/add_sources', methods=['POST'])
def add_sources():
    try:
        embedding_model = request.json.get('embedding_model')
        name = request.json.get('name')
        value = request.json.get('value')
        if embedding_model == 'open_ai':
            os.chdir(DB_DIRECTORY_OPEN_AI)
            api_key = APIKey.query.first().key
            os.environ['OPENAI_API_KEY'] = api_key
            chat_bot = App()
        # elif embedding_model == 'open_source':
        #     os.chdir(DB_DIRECTORY_OPEN_SOURCE)
        #     chat_bot = OpenSourceApp()
        chat_bot.add(name, value)
        return make_response(jsonify(message='Sources added successfully'), 200)
    except Exception as e:
        return make_response(jsonify(message=f'Error adding sources: {str(e)}'), 400)