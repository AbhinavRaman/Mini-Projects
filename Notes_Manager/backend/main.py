from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models import Note
from data import notes

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/notes")
def get_notes():
    return notes

@app.post("/api/notes")
def add_note(note: Note):
    notes.append(note)
    return {
        "message": "Note added successfully",
        "note": note
    }
