# Question Time Planning

## Brief

I will Build a front end that uses a back end I built for an API project called [pub-quiz](https://github.com/ThwCorbin/pub-quiz "repo on GitHub"). The JSON API I built provides access to trivia questions for a pub quiz game.[1] For the purposes of this project, I will use one trivia category: History. A user will see a history question on page load. The user can answer the question and then see the answer. The user can request another question. The user can change or delete the question. The user can add a question. The user has access to the Pub Quiz API! Scary power.

Note: The questions I used to seed the database came from Open Trivia Database.[2]

## Bronze, Silver, and Gold

### Bronze: minimum viable product

- React front end contacts the Pub Quiz API on page load
- API responds with 50 history questions
- Front end displays one question and a list of answers (buttons)
- User pushes button to answer
- If correct, the button turns green
- If incorrect, the button turns red and the correct button turns green
- After X seconds, the user sees the next question
- User can carry out CRUD operations by pushing an Add, Change, or Delete button
- API responds on completion of CRUD operations, and front end displays result
- Front end is deployed
- README is well documented
- Website displays well on a 768x1024 screen

### Silver: looks and works better

- Use a CSS framework (BronzePlus)
- Website displays well on small phones and large screens
- Track right and wrong answers and display results
- Show how many questions are left out of X questions
- Add another trivia question category
- Add search

### Gold: bells and whistles

- Return questions based on difficulty level
- Make questions progessively harder
- Use five or more categories of questions
- Store user data even if page reloads

## Data

- MongoDB database seeded with history trivia questions from OpenTriviaDB
- Mongoose
- Express
- Node.js
- API served by Heroku: [Pub Quiz API](https://pub-quiz-game.herokuapp.com/history "JSON API history route")
- CRUD operations' documentation: [Pub Quiz API Docs](https://pub-quiz-game.herokuapp.com/history API documentation)
- API returns results as JSON in this format:

```json
 	HTTP/1.1 200 OK
[
 {
   "incorrect_answers": [
     "Classic",
     "Baroque",
     "Renaissance"
    ],
   "_id": "5f21f0650619bc73ac0f57b3",
   "category": "History",
   "type": "multiple",
   "difficulty": "hard",
   "question": "Pianist Frederic Chopin was a composer of which musical era?",
   "correct_answer": "Romantic",
   "__v": 0
 },
 follwed by 49 more question objects
]
```

## Components

- Header
- Question
- Answers
- AnswerBtn
- EditBtn

## Variables

- questions Array of Objects
- question String
- answers Array of Strings
-

## Class

## Functions

## Presentation

## Views

## Style

## DOM Manipulation

## Resources

## Footnotes

[1] Chambers Dictionary definition for [pub quiz](https://chambers.co.uk/search/?query=pub+quiz&title=21st "Chambers definition of pub quiz"): noun a quiz held in a pub, often on a regular basis, where teams of contestants try to answer questions on various subjects, eg general knowledge, sport, music, current affairs, etc. It is usually played in good spirits and the winners often receive a small prize.

[2] API to seed my database: [Open Trivia Database](https://opentdb.com/, "Free to use, user-contributed trivia question database.")
