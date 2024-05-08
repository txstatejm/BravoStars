// script.js
const quizData = [
    {
      question: "Which closest resembles your dream job?",
      answers: [
        { option: "Running your own business", character: "Lisa" },
        { option: "Dabbling in lots of different areas, but struggling", character: "Ariana" },
        { option: "It doesn't matter, because you have shrooms", character: "Sandoval" }
      ]
    },
    {
        question: "What body type would you want if you could choose?",
        answers: [
          { option: "Voluptuous", character: "Lisa" },
          { option: "Skinny, but younger and always smiling", character: "Ariana" },
          { option: "It doesn't matter, because you have shrooms", character: "Sandoval" }
        ]
    },
    {
        question: "What would you rather be doing on a Friday night?",
        answers: [
          { option: "Relaxing with your man and animal(s)", character: "Lisa" },
          { option: "Hanging out with your ex-bf who cheated on you", character: "Ariana" },
          { option: "It doesn't matter, because you have shrooms", character: "Sandoval" }
        ]
    }
    // Add more questions here
  ];
  
  const quizContainer = document.getElementById('quiz');
  const questionElement = document.getElementById('question');
  const answerButtons = document.getElementById('answers');
  const resultElement = document.getElementById('result');
  let currentQuestionIndex = 0;
  let characterScores = {};
  
  // Function to start the quiz
  function startQuiz() {
    currentQuestionIndex = 0;
    characterScores = {};
    showQuestion();
  }
  
  // Function to display current question
  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answerButtons.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.option;
      button.addEventListener('click', () => selectAnswer(answer.character));
      answerButtons.appendChild(button);
    });
  }
  
  // Function to handle answer selection
  function selectAnswer(character) {
    if (characterScores[character]) {
      characterScores[character]++;
    } else {
      characterScores[character] = 1;
    }
  
    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      showResult();
    }
  }
  
  // Function to display result
  function showResult() {
    const maxScore = Math.max(...Object.values(characterScores));
    const resultCharacter = Object.keys(characterScores).find(key => characterScores[key] === maxScore);
    
    // Create an image element
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', `assets/${resultCharacter.toLowerCase()}.png`); // Assuming character names are lowercase and image formats are jpg
    imageElement.setAttribute('alt', `${resultCharacter} Image`);
    
    // Clear previous result and display image
    resultElement.innerHTML = '';
    resultElement.appendChild(imageElement);
  }
  
  // Event listener for starting the quiz
  document.getElementById('submit').addEventListener('click', startQuiz);
  
  // Start the quiz
  startQuiz();
  