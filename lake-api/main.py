from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import sqlite3
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # React app running on port 3080
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Subscription(BaseModel):
    email: str

def create_db():
    conn = sqlite3.connect("subscribers.db")
    cursor = conn.cursor()

    # Create the subscribers table if it doesn't already exist
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS subscribers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL
    )
    """)
    conn.commit()
    conn.close()

create_db()

def add_email_to_db(email: str):
    # Add email to the database
    conn = sqlite3.connect("subscribers.db")
    cursor = conn.cursor()

    try:
        cursor.execute("INSERT INTO subscribers (email) VALUES (?)", (email,))
        conn.commit()
    except sqlite3.IntegrityError:
        raise HTTPException(status_code=400, detail="Email is already subscribed.")
    finally:
        conn.close()

@app.post("/subscribe")
async def subscribe(subscription: Subscription):
    email = subscription.email

    # Store the email in the database
    add_email_to_db(email)

    return {"message": "Subscription successful!", "email": email}
