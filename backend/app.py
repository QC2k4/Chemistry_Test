from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from pymongo import MongoClient # type: ignore
from datetime import datetime, timezone
import os

app = Flask(__name__)
CORS(app)

# Grab the MongoDB URI from environment variable
load_dotenv()
mongo_uri = os.getenv("MONGO_URI")

client = MongoClient(mongo_uri)
db = client["chemistry"]  # Replace with your DB name
collection = db["audit"]  # Replace with your collection name

@app.route("/")
def home():
    return "MongoDB Atlas connected!"

# Example route to insert a document
@app.route('/log', methods=['POST'])
def log_access():
    try:
        data = request.json
        if not data or 'log' not in data:
            return jsonify({"error": "Missing 'log' field"}), 400

        log_entry = {
            "log": data['log'],
            "date": datetime.now(timezone.utc)
        }
        result = collection.insert_one(log_entry)
        return jsonify({"message": "Log saved", "id": str(result.inserted_id)}), 201
    except Exception as e:
        return jsonify({"message": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
