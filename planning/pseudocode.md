# Question Time Pseudocode

## On page load

- onLoad()
- GET questions from API
- store in variable: questions Array of Objects
- shuffle questions Array -> shuffle()
- display header: Header
- display question: Question
- display answer area: Answers
- display answer buttons: AnswerBtn
- display CRUD area: Edits
- display CRUD buttons: EditBtn

## Shuffle

- shuffle()
- shuffle what is passed to me and return it

## Answer question: Event Listener in AnswerBtn

- onClick={handle this event} -> answerEvent()

## Answer button clicked: Handle event

- answerEvent(event)
- If correct, turn button green
- If incorrect, turn button red and turn the correct button green
- after X seconds, then -> nextQuestion()
- OR provide a next question button

## Next question

- nextQuestion()
- select questionObj Object from questions Array
- push answer Strings into answers Array
- shuffle answer Strings -> shuffle()
- store index of correct answer String in correctIDX
- display question String and answers Strings

## Add question: Event listener in Edits

- onClick={ handle this event} -> addEvent()

## Add button clicked: Handle event

- addEvent(event)
- display add question form: Form

## User fills out form to add question: Event listener in Form

- onClick={ handle this event } -> submitFormAdd()

## Submit form add clicked: Handle event

- submitFormAdd(event)
- axios.post form data to API to add a question
- then wait for API to return added question Object
- unshift question Object on questions Array
- then display the added question

## Edit question: Event listener in Edits

- onClick={ handle this event} -> editEvent()

## Edit button clicked: Handle event

- editEvent(event)
- display edit question form: Form

## User fills out form to edit question: Event listener in Form

- onClick={ handle this event } -> submitFormEdit()

## Submit form edit clicked: Handle event

- submitFormEdit(event)
- axios.put form data to API to edit a question by ID
- then wait for API to return edited question Object
- then shift first question Object off questions Array
- then unshift returned edited question Object on questions Array
- then display added question

## Delete question: Event listener in Edits

- onClick={ handle this event} -> deleteEvent()

## Delete button clicked: Handle event

- deleteEvent(event)
- display delete question form: Form

## User confirms delete this question: Event listener in Form

- onClick={ handle this event } -> submitFormDelete()

## Submit form delete clicked: Handle event

- submitFormDelete(event)
- axios.delete form data to API to delete a question by ID
- then wait for API to return deleted question Object
- then shift first question Object off questions Array
- then display confirmation: "You will not see that question again"
- after X seconds, then -> nextQuestion()

## User cancels delete this question: Event listener in Form

- onClick={ handle this event } -> cancelDelete()

## Cancel button clicked: Handle event

- cancelDelete(event)
- display "not" deleted question
