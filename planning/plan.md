# Pub Quiz Game API Planning

## Brief

Build a JSON API of trivia questions for a [pub quiz](https://chambers.co.uk/search/?query=pub+quiz&title=21st, "Chambers definition of pub quiz") game.[1] Use Mongoose and Express to build the API. Seed a Mongo database with question categories from the Open Trivia Database. GET several categories (questions about History, Art, Mythology, etc), which will require at least one Mongoose model.

## Bronze, Silver, and Gold

### Bronze: minimum viable product

- Use Mongo, Mongooose, and Express to build a JSON API
- GET seed data from another API (OpenTriviaDB)
- Use one category of questions (50 questions per category)
- Use one Mongoose model
- Deploy Pub Quiz API to Heroku
- Document project well in a README

### Silver: looks and works better

- Use two categories of questions (50 questions per category)
- Consider need for more models

### Gold: bells and whistles

- Return questions based on difficulty level
- Use five or more categories of questions from OpenTriviaDB to seed the database
- Consider need for more models

## Data

- Mongo database seeded with trivia questions from OpenTriviaDB
- Start with one category History
- Silver: two categories (History and Mythology) and add more if possible
- Create one Mongoose model for the seed data
- OpenTriviaDB API returns up to 50 results per category as JSON in this format:

```json
    {
			"category": "Entertainment: Books",
      "type": "multiple",
      "difficulty": "easy",
      "question": "&quot;Green Eggs And Ham&quot; is a book by which author?",
      "correct_answer": "Dr. Seuss",
      "incorrect_answers": [
				"Beatrix Potter",
        "Roald Dahl",
        "A.A. Milne"
      ]
    },
```

- Categories will serve as my routes

## Components

## Variables

## Class

## Functions

## Presentation

## Views

## Style

## DOM Manipulation

## Resources

- API to seed my database: [Open Trivia Database](https://opentdb.com/, "Free to use, user-contributed trivia question database.")

## Footnotes

[1] Chambers Dictionary definition for [pub quiz](https://chambers.co.uk/search/?query=pub+quiz&title=21st, "Chambers definition of pub quiz"): noun a quiz held in a pub, often on a regular basis, where teams of contestants try to answer questions on various subjects, eg general knowledge, sport, music, current affairs, etc. It is usually played in good spirits and the winners often receive a small prize.
