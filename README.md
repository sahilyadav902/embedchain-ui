# embedchain-ui

embedchain-ui is a responsive full stack web application made using Next.js and Flask and powered by [embedchain](https://github.com/embedchain/embedchain) python package. It provides an easy to use user interface for running the embedchain python package.

# Setup & Installation

## Docker Setup

- To setup embedchain-ui using docker, run the following commands in your terminal after cloning the repository.

```bash
cd embedchain-ui
docker-compose build
```

Note: The build command might take a while to install all the packages depending on your system resources.

- To run the docker application, use the following command.

```bash
docker-compose up
```

## Manual Setup

- To setup embedchain-ui manually, follow the next steps after cloning the repository.

### Setup Backend

- Make sure that you have the following installed: Python 3 and virtualenv, and you are inside the `backend` folder.

```bash
cd embedchain-ui/backend
```

- Create and activate your virtual environment as follows.

```bash
# For Linux Users
virtualenv -p $(which python3) pyenv
source pyenv/bin/activate

# For Windows users
virtualenv pyenv
.\pyenv\Scripts\activate
```

- Install all the required packages using this command.

```bash
pip install -r requirements.txt
```

Note: Installing the packages might take a while, please wait for the installation to complete.

- Run the backend on localhost port 8000, using this command.

```bash
python server.py
```

### Setup Frontend

- Make sure that you have the following installed: Node.js, and you are inside the `frontend` folder.

```bash
cd embedchain-ui/frontend
```

- Install all the packages and run the build command.

```bash
npm install
npm run build
```

- Run the frontend on localhost port 3000, using this command.

```bash
npm start
```

# Usage Instructions

## Dashboard

- Go to [http://localhost:3000/](http://localhost:3000/) in your browser to view the dashboard.

- Here you can control different features for your bots.

Note: You need to enter an OpenAI API key to be able to use `App` and `Person App` bots. You can use `Open Source App` and `Person Open Source App` bots without an OpenAI key.

- To create a new bot, you have to give a name and a personality to the bot and click on `Submit`. The new bot will appear on the `Sidebar` to the left.

Note: You may enter the same name in the personality too for any bot but you can't have multiple bots with the same name.

- Click on any bot name in the Sidebar to reveal the dropdown list and click on `Add Sources`.

- You can also delete a bot you no longer need from the Dashboard.

## Add Sources

- To use a bot, first you need to add data sources to it.

- To use the OpenAI bots, add data sources while selecting the `Embedding Model` as `Open AI`.

- To use the OpenSource bots, add data sources while selecting the `Embedding Model` as `Open Source`.

- Click on `Submit` and wait for the process to complete. You'll be notified with the current progress with a text notification at the bottom.

Note: Adding data sources to `Open Source` model might take some time when used for the first time to install additional packages required to make the bot work.

- After adding the data sources for a bot, click on the bot name in the Sidebar again and select the type of bot you want to use.

- You can reset all your data sources by purging the embeddings database from the Dashboard.

## App

- `App` uses OpenAI's model, so it is a paid bot. You will be charged for embedding model usage and LLM usage.

- You have to setup OpenAI API key in the Dashboard to use this chat bot.

## Person App

- `Person App` uses OpenAI's model, so it is a paid bot. You will be charged for embedding model usage and LLM usage.

- `Person App` gives response to your queries in the form of the personality you set in the dashboard.

- You have to setup OpenAI API key in the Dashboard to use this chat bot.

## Open Source App

- `Open Source App` uses open source embedding and LLM model. It uses `all-MiniLM-L6-v2` from Sentence Transformers library as the embedding model and `gpt4all` as the LLM.

- Here there is no need to setup any api keys.

## Person Open Source App

- `Person Open Source App` uses open source embedding and LLM model. It uses `all-MiniLM-L6-v2` from Sentence Transformers library as the embedding model and `gpt4all` as the LLM.

- `Person Open Source App` gives response to your queries in the form of the personality you set in the dashboard.

- Here there is no need to setup any api keys.

## Chat Features

- Enter your query in the box at the bottom and press `Enter` or click `Send` to receive a response. Please wait for some time till the response gets generated.

- Your chats are saved in your browser itself. You can clear your entire chat logs from the Dashboard.

Note: The Open Source model may take more time than the Open AI model to generate a response as it is running locally on your system.

Note: In case for some reason the chat bot fails to respond, it'll trigger a page reload so you can send the query again.

# Code Structure

## Backend

- `server.py` houses the main flask application that runs the backend.
- `models.py` consists of the DB models APIKey and BotList used to store the user data.
- `paths.py` stored commonly used paths across the different files
- `routes` folder contains Blueprint files for the api routes.
- `chat_response.py` contains API routes to handle the chat functionality for the bots.
- `dashboard.py` contains API routes to handle the functionality of the Dashboard functions.
- `sources.py` contains API routes to handle the addition of data sources to the vector database.
- `database` folder stores all the data used by the application.

## Frontend

- The UI code is housed in multiple folders in the `src` directory.
- Inside `pages` folder, `index.js` houses the homepage and the dashboard for the application.
- The [bot_slug] folder provides dynamic routing for different bots created by the user.
- Inside [bot_slug] folder, all the features specific to a single bot are present.
- The `containers` folder houses large sized code components.
- The `components` folder houses relatively smaller code components.
- The `dashboard` folder houses all components used in the dashboard.
- The `next.config.js` uses an experimental `proxyTimeout` feature to prevent the API calls from failing if a response is not received within 30 seconds (the default timeout for proxies in Next.js).
