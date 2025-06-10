# CineCritic
# CineCritic

CineCritic is a full-stack movie review platform built using Flask and React. Users can rate and comment on movies, view what others have said, and explore reviews.

## Features

- User accounts and reviews
- Movie database
- Review form with validation
- Three React routes (Home, Movies, Review)
- One-to-many and many-to-many database relationships

## Technologies

- Flask (API backend)
- React (frontend)
- SQLAlchemy (ORM)
- Formik + Yup (form validation)
- React Router DOM

## Getting Started

### Backend Setup

```bash
cd server
pipenv install
pipenv shell
flask db upgrade
python seed.py
python app.py

cd server
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

**1. Start the Backend (Flask)**
# Make sure you're in the `server` folder and set up Flask
export FLASK_APP=app:create_app
export FLASK_ENV=development

# (Optional: use a `.flaskenv` file to skip this every time)

# Set up the database
flask db init      # Run only once
flask db revision --autogenerate -m "Initial tables"
flask db upgrade

# Start the server
flask run

Server should be running at: http://127.0.0.1:5000

**2. Start the Frontend (React)**
cd ../client
npm install
npm start
React App runs on: http://localhost:3000

**3. Testing with Postman**
Open Postman and enter the backend URL (e.g., http://127.0.0.1:5000/movies).

Test the following endpoints:

GET /movies
Returns all movies

POST /movies
Body (JSON):

{
  "title": "Inception",
  "description": "A mind-bending thriller",
  "year": 2010
}
PATCH /movies/<id>
Body (JSON):

{
  "title": "Inception (Updated)"
}
DELETE /movies/<id>

Features
React frontend with React Router (at least 3 routes)
Flask RESTful API
Full CRUD for at least one resource
Formik for form validation
At least:
Two one-to-many relationships
One many-to-many relationship with a user-submitted field
PostgreSQL database with SQLAlchemy