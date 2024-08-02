from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

RASA_SERVER_URL = "http://localhost:5005/webhooks/rest/webhook"

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    response = requests.post(RASA_SERVER_URL, json={"sender": "user", "message": user_message})
    bot_response = response.json()[0].get('text')
    return jsonify({"response": bot_response})

if __name__ == '__main__':
    app.run(debug=True)
