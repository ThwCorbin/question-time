# Question Time Planning

## Brief

Question Time is a React front end that uses a MongoDB, Express, and Node.js back end that I built for an API project called [pub-quiz](https://github.com/ThwCorbin/pub-quiz "repo on GitHub"). The JSON API I built provides access to trivia questions for a pub quiz game.[1] For the purposes of this project, I will use one trivia category: History. A user will see a history question on page load. The user can answer the question and then see the answer. The user can request another question. The user can change or delete the question. The user can add a question. The user has access to the Pub Quiz API! Scary.

Note: The questions I used to seed the database came from Open Trivia Database.[2]

## Bronze, Silver, and Gold

### Bronze: minimum viable product

- React front end contacts the Pub Quiz API on page load
- API responds with 50 history questions
- Front end displays a question and a list of answers
- User can click button to answer
- User can see the correct answer
- User can see the next question
- User can carry out CRUD operations by clicking an Add, Change, or Delete button
- API responds on completion of CRUD operations, and front end displays result
- Website displays well on a 768x1024 screen and larger
- CRUD form is basic
- Front end is deployed
- README is well documented

### Silver: looks and works better

- Website displays well on small phones
- CRUD form is fancy
- Add another trivia question category (e.g Mythology)
- Track right and wrong answers and display results
- Show how many questions are left out of X questions

### Gold: bells and whistles

- Return questions based on difficulty level
- Make questions progessively harder
- Add five or more trivia question categories
- Allow user to select category
- Store user data even if page reloads

## Data

- MongoDB database seeded with history trivia questions from OpenTriviaDB
- Mongoose
- Express
- Node.js
- API served by Heroku: [Pub Quiz API](https://pub-quiz-game.herokuapp.com/history "JSON API history route") response for /history route
- API documentation: [Pub Quiz API Docs](https://pub-quiz-game.herokuapp.com/doc "API documentation")
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

- Header - header > h1
- Question - div > p
- Answers - div > ul > li
- AnswerBtn - div > button
- Edits - div > ul > li
- EditBtn - div > button
- Form - form
- Input - div > input
- TextArea - div > input
- Submit - div > button
- Cancel - div > button
- Next - div > button

## Variables

- questions Array of Objects
- questionObj Object
- question String
- answers Array of Strings
- correctIDX Number

<!-- ## Class -->

## Functions

- onLoad()
- shuffle()
- answerEvent()
- nextQuestion()
- addEvent()
- submitFormAdd()
- editEvent()
- submitFormEdit()
- deleteEvent()
- submitFormDelete()
- cancelDelete()

<!-- ## Presentation -->

<!-- ## Views -->

<!-- ## Style -->

<!-- ## DOM Manipulation -->

<!-- ## Resources -->

## Footnotes

[1] Chambers Dictionary definition for [pub quiz](https://chambers.co.uk/search/?query=pub+quiz&title=21st "Chambers definition of pub quiz"): noun a quiz held in a pub, often on a regular basis, where teams of contestants try to answer questions on various subjects, eg general knowledge, sport, music, current affairs, etc. It is usually played in good spirits and the winners often receive a small prize.

[2] API to seed my database: [Open Trivia Database](https://opentdb.com/, "Free to use, user-contributed trivia question database.")
