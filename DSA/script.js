class RenderForm {
  constructor() {
    this.wrapper = document.createElement("div");
    this.input = document.createElement("input");
  }
  rendorInputs(type, options, question, number) {
    let cloneWrapper = this.wrapper.cloneNode(true);
    let questionHeader = document.createElement("h4");
    questionHeader.innerHTML = `${number || "#"} ${question}`;
    cloneWrapper.append(questionHeader);

    switch (type) {
      case "radio":
        this.input.type = "radio";
        options.forEach((option) => {
          let inputWrapper = cloneWrapper.cloneNode("true");
          inputWrapper.innerHTML = option;
          inputWrapper.append(this.input.cloneNode("true"));
          cloneWrapper.append(inputWrapper);
        });
        break;
      case "text": {
        let inputWrapper = cloneWrapper.cloneNode("true");
        this.input.type = "text";
        inputWrapper.append(this.input.cloneNode("true"));
        cloneWrapper.append(inputWrapper);
        break;
      }
      case "number": {
        let inputWrapper = cloneWrapper.cloneNode("true");
        this.input.type = "number";
        inputWrapper.append(this.input.cloneNode("true"));
        cloneWrapper.append(inputWrapper);
        break;
      }
      case "checkbox":
        this.input.type = "checkbox";
        options.forEach((option) => {
          let inputWrapper = cloneWrapper.cloneNode("true");
          inputWrapper.innerHTML = option;
          inputWrapper.append(this.input.cloneNode("true"));
          cloneWrapper.append(inputWrapper);
        });
        break;
      default:
        break;
    }
    return cloneWrapper;
  }
}

let qustions = {
  surveyTitle: "User Experience Survey",
  questions: [
    {
      id: 1,
      question: "How often do you use our product?",
      type: "radio",
      options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"],
    },
    {
      id: 2,
      question:
        "On a scale of 1 to 5, how would you rate the ease of navigating our website?",
      type: "number",
      min: 1,
      max: 5,
    },
    {
      id: 3,
      question:
        "What features do you find most useful in our app? (Select all that apply)",
      type: "checkbox",
      options: [
        "Search functionality",
        "User profiles",
        "Notifications",
        "In-app messaging",
      ],
    },
    {
      id: 4,
      question:
        "How satisfied are you with the response time of our customer support?",
      type: "radio",
      options: [
        "Very Satisfied",
        "Satisfied",
        "Neutral",
        "Dissatisfied",
        "Very Dissatisfied",
      ],
    },
    {
      id: 5,
      question:
        "Please share any additional comments or suggestions for improvement.",
      type: "text",
    },
    {
      id: 6,
      question: "What device do you primarily use to access our platform?",
      type: "radio",
      options: ["Desktop", "Laptop", "Tablet", "Smartphone"],
    },
    {
      id: 7,
      question:
        "On a scale of 1 to 10, how likely are you to recommend our service to others?",
      type: "number",
      min: 1,
      max: 10,
    },
    {
      id: 8,
      question: "Which aspect of our product needs the most improvement?",
      type: "text",
    },
    {
      id: 9,
      question: "How satisfied are you with the variety of features offered?",
      type: "radio",
      options: [
        "Very Satisfied",
        "Satisfied",
        "Neutral",
        "Dissatisfied",
        "Very Dissatisfied",
      ],
    },
    {
      id: 10,
      question: "Do you find the onboarding process helpful and informative?",
      type: "radio",
      options: ["Yes", "No", "Not Sure"],
    },
  ],
};

qustions.questions.forEach((q, index) => {
  let input = new RenderForm();
  let section = document.getElementById("section");
  section.append(input.rendorInputs(q.type, q.options, q.question, index+1));
});
