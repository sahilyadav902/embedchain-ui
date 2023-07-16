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
    embedding_model = request.json.get('embedding_model')
    fields = request.json
    if embedding_model == 'open_ai':
        os.chdir(DB_DIRECTORY_OPEN_AI)
        api_key = APIKey.query.first().key
        os.environ['OPENAI_API_KEY'] = api_key
        chat_bot = App()
    elif embedding_model == 'open_source':
        os.chdir(DB_DIRECTORY_OPEN_SOURCE)
        chat_bot = OpenSourceApp()
    add_sources_to_db(chat_bot, embedding_model, fields)
    return make_response(jsonify(message='Sources added successfully'), 200)


# Add data sources to vector DB
def add_sources_to_db(chat_bot, embedding_model, fields):
    for field, value in fields.items():
        if field != 'embedding_model' and value:
            if field == 'qna_pair':
                question, answer = value
                if question and answer:
                    chat_bot.add_local(field, value)
            else:
                chat_bot.add(field, value)
            if embedding_model == "open_ai":
                time.sleep(10)