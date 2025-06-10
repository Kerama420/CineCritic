from config import create_app, db
from models import User, Movie, Review

app = create_app()

@app.route("/")
def home():
    return {"message": "CineCritic backend running!"}

if __name__ == "__main__":
    app.run(port=5555, debug=True)
