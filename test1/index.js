
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "checkbox",
            "name": "question5",
            "title": "Q1",
            "description": "How much do you expect to earn in this position?",
            "choices": [
            {
            "value": "item1",
            "text": "$50000"
            },
            {
            "value": "item2",
            "text": "$60000"
            },
            {
            "value": "item3",
            "text": "$70000"
            }
            ],
            "hasOther": true
            },
           {
            "type": "text",
            "name": "Q2",
            "description": "Tell me about your frustrations in workplace."
           },
           {
            "type": "text",
            "name": "Q3",
            "description": "How do you see yourself contributing in this position?"
           },
           {
            "type": "text",
            "name": "Q4",
            "description": "Where do you see yourself in five years?"
           },
           {
            "type": "text",
            "name": "Q5",
            "description": "What reasons do you have for leaving your most recent job?"
           },
           {
            "type": "text",
            "name": "Q6",
            "description": "What is your least favorite part of your chosen profession?"
           },
           {
            "type": "text",
            "name": "Q7",
            "description": "How do you see your skillset fitting into our environment?"
           },
           {
            "type": "text",
            "name": "Q8",
            "description": "What characteristics are you looking for in a supervisor/manager?",
            "inputType": "datetime"
           },
           {
            "type": "text",
            "name": "Q9",
            "description": "What did you learn from your biggest failure?"
           },
           {
            "type": "text",
            "name": "Q10",
            "description": "When can you start working?"
           }
          ],
          "title": "Screening Questions"
         }
        ]
       };

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });