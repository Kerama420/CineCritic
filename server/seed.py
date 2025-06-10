from config import create_app, db
from models import User, Movie, Review

app = create_app()

with app.app_context():
    db.drop_all()
    db.create_all()

    u1 = User(username="machera")
    u2 = User(username="julian")

    m1 = Movie(title="Interstellar")
    m2 = Movie(title="Get Out")

    r1 = Review(comment="Mind-blowing!", rating=9, user=u1, movie=m1)
    r2 = Review(comment="Creepy and deep", rating=8, user=u2, movie=m2)

    db.session.add_all([u1, u2, m1, m2, r1, r2])
    db.session.commit()
