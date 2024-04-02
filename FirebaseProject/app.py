from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from chat import get_response

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "https://127.0.0.1:5500"}})

@app.route("/")
def index_get():
    return render_template("chatbot.html")

@app.route("/predict", methods=["POST"])
def predict():
    text = request.get_json().get("message")
    print("Received message:", text)
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)

if __name__ == "__main__":
    app.run(debug=True)
