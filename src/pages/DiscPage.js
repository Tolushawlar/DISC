import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "../App.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const questionsUpdate = [
  {
    section: "Section 1",
    questions: [
      {
        id: 1,
        question: "Under intense stress I tend to?",
        options: [
          { text: "plan my way out.", weight: "C" },
          { text: "become distrustful.", weight: "D" }
        ]
      },
      {
        id: 2,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become a big talker.", weight: "B" },
          { text: "become withdrawn.", weight: "C" }
        ]
      },
      {
        id: 3,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become impractical.", weight: "C" },
          { text: "cross.", weight: "D" }
        ]
      },
      {
        id: 4,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become hotheaded.", weight: "A" },
          { text: "careless.", weight: "B" }
        ]
      },
      {
        id: 5,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become negative.", weight: "A" },
          { text: "dictatorial.", weight: "D" }
        ]
      },
      {
        id: 6,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become too permissive.", weight: "B" },
          { text: "stubborn.", weight: "D" }
        ]
      },
      {
        id: 7,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become indecisive.", weight: "A" },
          { text: "more likely to act.", weight: "C" }
        ]
      },
      {
        id: 8,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become bearish.", weight: "A" },
          { text: "manipulative.", weight: "B" }
        ]
      },
      {
        id: 9,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become very cautious.", weight: "A" },
          { text: "abrupt.", weight: "D" }
        ]
      },
      {
        id: 10,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become reckless.", weight: "B" },
          { text: "inflexible.", weight: "D" }
        ]
      },
      {
        id: 11,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become passive.", weight: "A" },
          { text: "insist on my own way.", weight: "C" }
        ]
      },
      {
        id: 12,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become high-handed.", weight: "A" },
          { text: "rebellious.", weight: "B" }
        ]
      },
      {
        id: 13,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become very picky.", weight: "A" },
          { text: "overbearing.", weight: "D" }
        ]
      },
      {
        id: 14,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become extremely careless.", weight: "B" },
          { text: "rigid.", weight: "D" }
        ]
      },
      {
        id: 15,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become scheming.", weight: "C" },
          { text: "concerned with details.", weight: "D" }
        ]
      },
      {
        id: 16,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become conceited.", weight: "B" },
          { text: "anxious and afraid.", weight: "C" }
        ]
      },
      {
        id: 17,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become sensitive.", weight: "A" },
          { text: "hostile.", weight: "C" }
        ]
      },
      {
        id: 18,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become opinionated.", weight: "B" },
          { text: "very emotional.", weight: "C" }
        ]
      },
      {
        id: 19,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become uncertain.", weight: "A" },
          { text: "domineering.", weight: "C" }
        ]
      },
      {
        id: 20,
        question: "Under intense stress I tend to?",
        options: [
          { text: "become a bluffer.", weight: "B" },
          { text: "become distrustful.", weight: "D" }
        ]
      }
    ]
  },
  {
    section: "Section 2",
    questions: [
      {
        id: 21,
        question: "I think I should?",
        options: [
          { text: "develop new plans.", weight: "C" },
          { text: "be consistent.", weight: "D" }
        ]
      },
      {
        id: 22,
        question: "I think I should?",
        options: [
          { text: "stick to the rules.", weight: "A" },
          { text: "supervise others.", weight: "D" }
        ]
      },
      {
        id: 23,
        question: "I think I should?",
        options: [
          { text: "depend on my own experiences.", weight: "A" },
          { text: "be a self-starter.", weight: "C" }
        ]
      },
      {
        id: 24,
        question: "I think I should?",
        options: [
          { text: "confer with other people.", weight: "B" },
          { text: "look for new ideas.", weight: "C" }
        ]
      },
      {
        id: 25,
        question: "I think I should?",
        options: [
          { text: "give others directions.", weight: "A" },
          { text: "influence others.", weight: "B" }
        ]
      },
      {
        id: 26,
        question: "I think I should?",
        options: [
          { text: "conserve resources.", weight: "C" },
          { text: "create ideas.", weight: "D" }
        ]
      },
      {
        id: 27,
        question: "I think I should?",
        options: [
          { text: "do what works.", weight: "A" },
          { text: "develop new approaches.", weight: "C" }
        ]
      },
      {
        id: 28,
        question: "I think I should?",
        options: [
          { text: "coordinate group activities.", weight: "B" },
          { text: "follow tradition.", weight: "D" }
        ]
      },
      {
        id: 29,
        question: "I think I should?",
        options: [
          { text: "achieve by using ideas.", weight: "A" },
          { text: "do something.", weight: "C" }
        ]
      },
      {
        id: 30,
        question: "I think I should?",
        options: [
          { text: "arrange things in a pattern.", weight: "A" },
          { text: "build something.", weight: "D" }
        ]
      },
      {
        id: 31,
        question: "I think I should?",
        options: [
          { text: "explore new ideas.", weight: "B" },
          { text: "help other people.", weight: "C" }
        ]
      },
      {
        id: 32,
        question: "I think I should?",
        options: [
          { text: "involve others.", weight: "B" },
          { text: "keep things in order.", weight: "D" }
        ]
      },
      {
        id: 33,
        question: "I think I should?",
        options: [
          { text: "produce something.", weight: "A" },
          { text: "be precise.", weight: "D" }
        ]
      },
      {
        id: 34,
        question: "I think I should?",
        options: [
          { text: "keep on a schedule.", weight: "B" },
          { text: "be hopeful.", weight: "D" }
        ]
      },
      {
        id: 35,
        question: "I think I should?",
        options: [
          { text: "work with concepts and ideas.", weight: "C" },
          {
            text: "be careful when working with facts and figures.",
            weight: "D"
          }
        ]
      },
      {
        id: 36,
        question: "I think I should?",
        options: [
          { text: "should be persuasive.", weight: "A" },
          { text: "others should respect me.", weight: "B" }
        ]
      },
      {
        id: 37,
        question: "I think I should?",
        options: [
          { text: "promote programs to others.", weight: "B" },
          { text: "compete with myself to do better.", weight: "C" }
        ]
      },
      {
        id: 38,
        question: "I think I should?",
        options: [
          { text: "work within guidelines and forms.", weight: "B" },
          { text: "coordinate group cooperation.", weight: "D" }
        ]
      },
      {
        id: 39,
        question: "I think I should?",
        options: [
          { text: "work with ideas and plans.", weight: "A" },
          { text: "get something done.", weight: "C" }
        ]
      },
      {
        id: 40,
        question: "I think I should?",
        options: [
          { text: "organize others for the good of the group.", weight: "A" },
          { text: "produce things.", weight: "B" }
        ]
      }
    ]
  },
  {
    section: "Section 3",
    questions: [
      {
        id: 41,
        question: "What I am comfortable doing?",
        options: [
          { text: "I am decisive and firm in my actions.", weight: "A" },
          {
            text: "I show great enthusiasm when I am defending a cause.",
            weight: "B"
          }
        ]
      },
      {
        id: 42,
        question: "What I am comfortable doing?",
        options: [
          { text: "I enjoy meeting new people.", weight: "B" },
          { text: "I prefer harmonious conditions.", weight: "C" }
        ]
      },
      {
        id: 43,
        question: "What I am comfortable doing?",
        options: [
          { text: "I am comfortable planning future events.", weight: "C" },
          { text: "I prefer following a procedure.", weight: "D" }
        ]
      },
      {
        id: 44,
        question: "What I am comfortable doing?",
        options: [
          { text: "I am comfortable taking action.", weight: "A" },
          { text: "I am most comfortable being creative.", weight: "C" }
        ]
      },
      {
        id: 45,
        question: "What I am comfortable doing?",
        options: [
          { text: "I enjoy being friendly to people.", weight: "B" },
          { text: "I enjoy working with details and specifics.", weight: "D" }
        ]
      },
      {
        id: 46,
        question: "What I am comfortable doing?",
        options: [
          { text: "I enjoy thinking about alternatives.", weight: "C" },
          { text: "I enjoy looking for exceptions.", weight: "D" }
        ]
      },
      {
        id: 47,
        question: "What I am comfortable doing?",
        options: [
          { text: "I prefer being direct with people.", weight: "C" },
          { text: "I am comfortable checking accuracy.", weight: "D" }
        ]
      },
      {
        id: 48,
        question: "What I am comfortable doing?",
        options: [
          { text: "I enjoy doing things with a group.", weight: "C" },
          { text: "I enjoy looking at things in a new way.", weight: "D" }
        ]
      },
      {
        id: 49,
        question: "What I am comfortable doing?",
        options: [
          { text: "I am comfortable being an idea person.", weight: "C" },
          { text: "I enjoy exercising control and order.", weight: "D" }
        ]
      },
      {
        id: 50,
        question: "What I am comfortable doing?",
        options: [
          { text: "I enjoy being active.", weight: "C" },
          { text: "I enjoy being exact and correct.", weight: "D" }
        ]
      },
      {
        id: 51,
        question: "What I am comfortable doing?",
        options: [
          { text: "I tend to expect the best to happen.", weight: "C" },
          { text: "I enjoy working methodically within a system.", weight: "D" }
        ]
      },
      {
        id: 52,
        question: "What I am comfortable doing?",
        options: [
          {
            text: "I am comfortable being a powerful and forceful person.",
            weight: "C"
          },
          { text: "I enjoy imagining possibilities.", weight: "D" }
        ]
      },
      {
        id: 53,
        question: "What I am comfortable doing?",
        options: [
          { text: "I am at ease cooperating with others.", weight: "C" },
          { text: "I enjoy thinking independently.", weight: "D" }
        ]
      },
      {
        id: 54,
        question: "What I am comfortable doing?",
        options: [
          { text: "I am direct in my approach to others.", weight: "C" },
          {
            text: "I am comfortable being warm and comforting to others.",
            weight: "D"
          }
        ]
      },
      {
        id: 55,
        question: "What I am comfortable doing?",
        options: [
          {
            text: "If I believe in a cause, I will sacrifice my own interest.",
            weight: "C"
          },
          { text: "I enjoy doing things in an orderly way.", weight: "D" }
        ]
      },
      {
        id: 56,
        question: "What I am comfortable doing?",
        options: [
          {
            text: "I am comfortable acting with excitement and focus.",
            weight: "C"
          },
          { text: "I am comfortable thinking about new ideas.", weight: "D" }
        ]
      },
      {
        id: 57,
        question: "What I am comfortable doing?",
        options: [
          { text: "I enjoy the give and take of conversation.", weight: "C" },
          {
            text: "I prefer following a specific order or directions.",
            weight: "D"
          }
        ]
      },
      {
        id: 58,
        question: "What I am comfortable doing?",
        options: [
          {
            text: "I am most comfortable accomplishing something.",
            weight: "C"
          },
          {
            text: "I am comfortable being cautious and conscientious.",
            weight: "D"
          }
        ]
      },
      {
        id: 59,
        question: "What I am comfortable doing?",
        options: [
          {
            text: "I enjoy situations where I can take action or do something.",
            weight: "C"
          },
          {
            text: "I am at ease showing understanding and compassion.",
            weight: "D"
          }
        ]
      },
      {
        id: 60,
        question: "What I am comfortable doing?",
        options: [
          {
            text: "I am comfortable taking command of most situations.",
            weight: "C"
          },
          {
            text: "I am friendly and I enjoy conversations with strangers.",
            weight: "D"
          }
        ]
      }
    ]
  }
];

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelection = (questionId, selectedOption) => {
    // Store answer and its weight in state
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedOption
    }));

    // Move to the next question
    if (
      currentQuestion <
      questionsUpdate[currentSection].questions.length - 1
    ) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // All questions in the current section have been answered
      if (currentSection < questionsUpdate.length - 1) {
        setCurrentSection(prev => prev + 1);
        setCurrentQuestion(0);
      } else {
        // Show results if all sections are completed
        setShowResults(false);
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
      setCurrentQuestion(
        questionsUpdate[currentSection - 1].questions.length - 1
      );
    }
  };

  const calculateProgress = () => {
    const totalQuestions = questionsUpdate.reduce(
      (sum, section) => sum + section.questions.length,
      0
    );
    const answeredQuestions = Object.keys(answers).length;

    return answeredQuestions / totalQuestions * 100;
  };

  const getCurrentStep = () => {
    // Calculate the total number of questions answered so far
    const overallStep =
      questionsUpdate
        .slice(0, currentSection) // Get all sections before the current one
        .reduce((sum, section) => sum + section.questions.length, 0) +
      currentQuestion +
      1; // Add current question index (1-based)

    // Section-specific calculations
    const sectionStep = currentQuestion + 1; // Current question in the section (1-based)
    const sectionTotal = questionsUpdate[currentSection].questions.length; // Total questions in current section

    // Overall total questions
    const overallTotal = questionsUpdate.reduce(
      (sum, section) => sum + section.questions.length,
      0
    );

    // Return formatted step info
    return `Question ${sectionStep} of ${sectionTotal} in ${questionsUpdate[
      currentSection
    ].section} 
    (Question ${overallStep} of ${overallTotal} Overall)`;
  };

  // Calculate the results based on selected answers
  const calculateResults = () => {
    const resultCounts = {};

    Object.entries(answers).forEach(([questionId, selectedOption]) => {
      const question = questionsUpdate
        .flatMap(section => section.questions)
        .find(q => q.id === parseInt(questionId));

      if (question) {
        const option = question.options.find(
          opt => opt.text === selectedOption
        );
        if (option && option.weight) {
          resultCounts[option.weight] = (resultCounts[option.weight] || 0) + 1;
        }
      }
    });

    return resultCounts;
  };

  const handleSubmit = () => {
    console.log("Quiz Submitted", answers);
    setShowResults(true);
  };

  const handleRetake = () => {
    setCurrentSection(0);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const allQuestionsAnswered =
    Object.keys(answers).length ===
    questionsUpdate.reduce((sum, section) => sum + section.questions.length, 0);

  const resultData = calculateResults();
  const data = {
    labels: Object.keys(resultData),
    datasets: [
      {
        label: "Profile Strengths",
        data: Object.values(resultData),
        backgroundColor: [ "#4BC0C0", "#36A2EB", "#FFCE56","#FF6384"], // Add more colors if necessary
        hoverOffset: 4
      }
    ]
  };

  return (
    <div className="App">
      {!showResults
        ? <div>
            {/* Render Progress Bar */}
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${calculateProgress()}%` }}
              />
            </div>
            <p>
              {getCurrentStep()}
            </p>
            <h3>
              {
                questionsUpdate[currentSection].questions[currentQuestion]
                  .question
              }
            </h3>
            {questionsUpdate[currentSection].questions[
              currentQuestion
            ].options.map(option =>
              <button
                key={option.text}
                onClick={() =>
                  handleAnswerSelection(
                    questionsUpdate[currentSection].questions[currentQuestion]
                      .id,
                    option.text
                  )}
                  className="opts"
                style={{
                  backgroundColor:
                    answers[
                      questionsUpdate[currentSection].questions[currentQuestion]
                        .id
                    ] === option.text
                      ? `#6357A4`
                      : "white",
                  color:
                    answers[
                      questionsUpdate[currentSection].questions[currentQuestion]
                        .id
                    ] === option.text
                      ? `white`
                      : "",
                  margin: "5px",
                  padding: "25px",
                  border: "0.5px solid black",
                  borderRadius: "15px",
                  marginTop: "10px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                {option.text}
              </button>
            )}
            <br />
            <div className="controllBtn">
              {(currentQuestion > 0 || currentSection > 0) &&
                <button className="prev" onClick={handlePreviousQuestion}>
                  Previous
                </button>}

              {allQuestionsAnswered &&
                <button className="sub" onClick={handleSubmit}>
                  Submit
                </button>}
            </div>
          </div>
        : <div>
            <h2>Results</h2>
            <button onClick={handleRetake}>Retake Test</button>
            <Doughnut data={data} />
          </div>}
    </div>
  );
};

export default App;
