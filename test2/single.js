
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
                }

            ],
            "title": "Screening Questions"
        },
        {
            "name": "page2",
            "elements": [

                {
                    "type": "text",
                    "name": "Q3",
                    "description": "How do you see yourself contributing in this position?"
                },
                {
                    "type": "text",
                    "name": "Q4",
                    "description": "Where do you see yourself in five years?"
                }

            ],
            "title": "Screening Questions"
        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "text",
                    "name": "Q5",
                    "description": "What reasons do you have for leaving your most recent job?"
                },
                {
                    "type": "text",
                    "name": "question3",
                    "title": "Q6",
                    "description": "How do you see your skillset fitting into our environment?"
                }
            ],
            "title": "Screening Questions"
        },
        {
            "name": "page4",
            "elements": [
                {
                    "type": "text",
                    "name": "question4",
                    "title": "Q7",
                    "description": "What characteristics are you looking for in a supervisor/manager?",
                    "inputType": "datetime"
                },
                {
                    "type": "text",
                    "name": "question6",
                    "title": "Q8",
                    "description": "What did you learn from your biggest failure?"
                }

            ],
            "title": "Screening Questions"
        },
        {
            "name": "page5",
            "elements": [
                {
                    "type": "text",
                    "name": "question2",
                    "title": "Q9",
                    "description": "What is your least favorite part of your chosen profession?"
                },
                {
                    "type": "text",
                    "name": "question1",
                    "title": "Q10",
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
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });