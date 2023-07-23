# embedchain-ui

embedchain-ui is a responsive full stack web application made using Next.js and Flask and powered by [embedchain](https://github.com/embedchain/embedchain) python package. It provides an easy-to-use user interface for running the embedchain python package.

# 🔧 Setup & Installation

## 🐳 Docker Setup

- To setup embedchain-ui using docker, run the following commands in your terminal after cloning the repository.

```bash
cd embedchain-ui
docker-compose build
```

📝 Note: The build command might take a while to install all the packages depending on your system resources.

- To run the docker application, use the following command.

```bash
docker-compose up
```

📝 Note: If a new version of the `embedchain` package is released, open Docker Desktop, go to the `embedchain_backend` container inside the `embedchain_ui` container, and run the following command in its terminal. After that restart your server to see the changes.

```bash
pip install embedchain --upgrade
```

## 🛠️ Manual Setup

- To setup embedchain-ui manually, follow the next steps after cloning the repository.

### 🧩 Setup Backend

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

📝 Note: Installing the packages might take a while, please wait for the installation to complete.

- Run the backend on localhost port 8000, using this command.

```bash
python server.py
```

📝 Note: If a new version of the `embedchain` package is released, activate your virtual environment and run the following command. After that restart your server to see the changes.

```bash
pip install embedchain --upgrade
```

### 🎨 Setup Frontend

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

# 🚀 Usage Instructions

## Dashboard

- Go to [http://localhost:3000/](http://localhost:3000/) in your browser to view the dashboard.
- Here you can control different features for your bots.
- Create a new bot and it will appear on the `Sidebar` to the left.
- Click on the bot name in the Sidebar to reveal the two types of bot.
- You can also delete a bot you no longer need from the Dashboard.

## App

- `App` uses OpenAI's model, so it is a paid bot. You will be charged for embedding model usage and LLM usage.
- You have to setup `OpenAI API key` 🔑 in the Dashboard to use this chat bot.

## Open Source App

- `Open Source App` uses open source embedding and LLM model. It uses `all-MiniLM-L6-v2` from Sentence Transformers library as the embedding model and `gpt4all` as the LLM.
- Here there is no need to setup any api keys.

🎉 Happy Chatting! 🎉
