# Pub Quiz Game API Pseudocode

## On page load

- display a header: Header
- display a question: Question
- display an anwser area: Answers
- display answer buttons: AnswerBtn
- display CRUD buttons: EditBtn

## Add button

- display form that user can fill out to submit a new question
- trigger the API to add the question and return it
- display the added question

## Change button

- display form with current question that the user can change and submit
- trigger the API to update and return it
- display the updated message

## Delete button

- delete the question from the database
- display confirmation: "You will not see that question again"
- after X seconds, display the next question

<!-- ## Create db directory data files

- create ./db/get-data.js, ./db/historyData.json, and ./db/mythologyData.json
- ./db/get-data.js

- require node fs module

- require above files and assign to variables

- function: fetch/axios from urls

- 50 results each for History and Mythology categories

- History url: https://opentdb.com/api.php?amount=50&category=23

- Mythology url: https://opentdb.com/api.php?amount=50&category=20

- then: write the data to json files

- fs.writeFile(file, data[, options], callback)

## Retrieve data from an API and save to .json files

- Run node db/get-data.js in the terminal

- returns two arrays with 50 questions each:

```json
[
	{
		"category": "History",
		"type": "multiple",
		"difficulty": "medium",
		"question": "In what year did Neil Armstrong and Buzz Aldrin land on the moon?",
		"correct_answer": "1969",
		"incorrect_answers": ["1965", "1966", "1973"]
	},
	{
		// 50 History question objects
	}
]
```

-- use fs.writefile to write data to ./db/historyData.json and ./db/mythologyData.json

## Define connection

- db/connection.js

- run mongod in the terminal to connect to MongoDB

- require mongoose

- connect mongoose to local host which creates the database categorys (which I could change to categories)

- exports mongoose

## Define Mongoose Schema

- models/Category.js

- require db/connection.js and assign to mongoose constant

- assign mongoose.Schema to a constant Schema

- initialize schema with a configuration object

- categorySchema will have 5 properties

1. category String
2. difficulty String
3. question String
4. answer String
5. incorrect Array of three Strings

## Define Mongoose Model

- models/Category.js

- assign a mongoose model to Category constant using the categorySchema

- exports the Category model

## Seed a database

- db/seed.js

- require and assign Category model to a constant

- require and assign ./db/historyData.json and ./db/mythologyData.json to constants

- delete data from the categorys/categories database via the Catagory model

- create data via the Category model passing the jsonHistory and jsonMythology constants

- then print to the console and exit the process

- run db/seeds.js in terminal to seed categories/catagorys

## Set Up Express

- index.js

- require and assign express to an app constant

- invoke app

- app listens on port 4000 and prints affirmative message in the console

- run nodemon index.js in the terminal to check code

## Create routes

### root route

- create a GET root route passing "/" and request/response objects

- root route responds with a message to display ("Welcome to the Pub Quiz")

### history route

- GET history route passing "/history" and req/resp objects

- find the history questions in the database

- route responds with history questions

### history create route

- require and use body-parser

- POST history route passing "/history" and req/resp objects

- create a new history question object passing request body

- then print the new question object

### history update route

- PUT history route passing "/history/:id" and req/resp objects

- find one question by id and update the difficulty property

- then print the updated object {new: true}

### history delete route

- DEL history route passing "/history/:id" and req/resp objects

- find one question by id and remove it

- then print the deleted object

### mythology route (Silver)

### history/difficulty route (Gold) -->
