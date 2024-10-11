import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

ChartJS.register(ArcElement, Tooltip, Legend);


const questions = [
  {
    section: "Section 1",
    questions: [
      { id: 1, question: "Under intense stress I tend to?", options: ["plan my way out.", "become distrustful."], answer: ["C", "D"] },
      { id: 2, question: "Under intense stress I tend to?", options: ["become a big talker.", "become withdrawn."], answer: ["B", "C"] },
      { id: 3, question: "Under intense stress I tend to?", options: ["become impractical.", "cross."], answer: ["C", "D"] },
      { id: 4, question: "Under intense stress I tend to?", options: ["become hotheaded.", "careless."], answer: ["A", "B"] },
      { id: 5, question: "Under intense stress I tend to?", options: ["become negative.", "dictatorial."], answer: ["A", "D"] },
      { id: 6, question: "Under intense stress I tend to?", options: ["become too permissive.", "stubborn."], answer: ["B", "D"] },
      { id: 7, question: "Under intense stress I tend to?", options: ["become indecisive.", "more likely to act."], answer: ["A", "C"] },
      { id: 8, question: "Under intense stress I tend to?", options: ["become bearish.", "manipulative."], answer: ["A", "B"] },
      { id: 9, question: "Under intense stress I tend to?", options: ["become very cautious.", "abrupt."], answer: ["A", "D"] },
      { id: 10, question: "Under intense stress I tend to?", options: ["become reckless.", "inflexible."], answer: ["B", "D"] },
      { id: 11, question: "Under intense stress I tend to?", options: ["become passive.", "insist on my own way."], answer: ["A", "C"] },
      { id: 12, question: "Under intense stress I tend to?", options: ["become high-handed.", "rebellious."], answer: ["A", "B"] },
      { id: 13, question: "Under intense stress I tend to?", options: ["become very picky.", "overbearing."], answer: ["A", "D"] },
      { id: 14, question: "Under intense stress I tend to?", options: ["become extremely careless.", "rigid."], answer: ["B", "D"] },
      { id: 15, question: "Under intense stress I tend to?", options: ["become scheming.", "concerned with details."], answer: ["C", "D"] },
      { id: 16, question: "Under intense stress I tend to?", options: ["become conceited.", "anxious and afraid."], answer: ["B", "C"] },
      { id: 17, question: "Under intense stress I tend to?", options: ["become sensitive.", "hostile."], answer: ["A", "C"] },
      { id: 18, question: "Under intense stress I tend to?", options: ["become opinionated.", "very emotional."], answer: ["B", "C"] },
      { id: 19, question: "Under intense stress I tend to?", options: ["become uncertain.", "domineering."], answer: ["A", "C"] },
      { id: 20, question: "Under intense stress I tend to?", options: ["become a bluffer.", "become distrustful."], answer: ["B", "D"] },
      // More questions in section 1...
    ]
  },
  {
    section: "Section 2",
    questions: [
      { id: 21, question: "I think I should?", options: ["develop new plans.", "be consistent"], answer: ["C", "D"] },
      { id: 22, question: "I think I should?", options: ["stick to the rules.", "supervise others."], answer: ["A", "D"] },
      { id: 23, question: "I think I should?", options: ["depend on my own experiences.", "be a self-starter."], answer: ["A", "C"] },
      { id: 24, question: "I think I should?", options: ["confer with other people.", "look for new ideas."], answer: ["B", "C"] },
      { id: 25, question: "I think I should?", options: ["give others directions.", "influence others."], answer: ["A", "B"] },
      { id: 26, question: "I think I should?", options: ["conserve resources.", " create ideas."], answer: ["C", "D"] },
      { id: 27, question: "I think I should?", options: ["do what works.", "develop new approaches."], answer: ["A", "C"] },
      { id: 28, question: "I think I should?", options: ["coordinate group activities.", "follow tradition."], answer: ["B", "D"] },
      { id: 29, question: "I think I should?", options: ["achieve by using ideas.", "do something."], answer: ["A", "C"] },
      { id: 30, question: "I think I should?", options: ["arrange things in a pattern.", "build something."], answer: ["A", "D"] },
      { id: 31, question: "I think I should?", options: ["explore new ideas.", "help other people."], answer: ["B", "C"] },
      { id: 32, question: "I think I should?", options: ["involve others.", "keep things in order."], answer: ["B", "D"] },
      { id: 33, question: "I think I should?", options: ["produce something.", "be precise."], answer: ["A", "D"] },
      { id: 34, question: "I think I should?", options: ["keep on a schedule.", "be hopeful."], answer: ["B", "D"] },
      { id: 35, question: "I think I should?", options: ["work with concepts and ideas.", "be careful when working with facts and figures."], answer: ["C", "D"] },
      { id: 36, question: "I think I should?", options: ["should be persuasive.", "others should respect me."], answer: ["A", "B"] },
      { id: 37, question: "I think I should?", options: ["promote programs to others.", "compete with myself to do better."], answer: ["B", "C"] },
      { id: 38, question: "I think I should?", options: ["work within guidelines and forms.", "coordinate group cooperation."], answer: ["B", "D"] },
      { id: 39, question: "I think I should?", options: ["work with ideas and plans", "get something done."], answer: ["A", "C"] },
      { id: 40, question: "I think I should?", options: ["organize others for the good of the group.", "produce things."], answer: ["A", "B"] }
      // More questions in section 2...
    ]
  },
  {
    section: "Section 3",
    questions: [
      { id: 41, question: "What I am comfortable doing?", options: ["I am decisive and firm in my actions.", "I show great enthusiasm when I am defending a cause."], answer: ["A", "B"] },
      { id: 42, question: "What I am comfortable doing?", options: ["I enjoy meeting new people.", "I prefer harmonious conditions."], answer: ["B", "C"] },
      { id: 43, question: "What I am comfortable doing?", options: ["I am comfortable planning future events.", "I prefer following a procedure."], answer: ["C", "D"] },
      { id: 44, question: "What I am comfortable doing?", options: ["I am comfortable taking action.", "I am most comfortable being creative."], answer: ["A", "C"] },
      { id: 45, question: "What I am comfortable doing?", options: ["I enjoy being friendly to people.", "I enjoy working with details and specifics."], answer: ["B", "D"] },
      { id: 46, question: "What I am comfortable doing?", options: ["I enjoy thinking about alternatives.", "I enjoy looking for exceptions."], answer: ["C", "D"] },
      { id: 47, question: "What I am comfortable doing?", options: ["I prefer being direct with people.", "I am comfortable checking accuracy."], answer: ["C", "D"] },
      { id: 48, question: "What I am comfortable doing?", options: ["I enjoy doing things with a group.", "I enjoy looking at things in a new way."], answer: ["C", "D"] },
      { id: 49, question: "What I am comfortable doing?", options: ["I am comfortable being an idea person.", "I enjoy exercising control and order."], answer: ["C", "D"] },
      { id: 50, question: "What I am comfortable doing?", options: ["I enjoy being active.", "I enjoy being exact and correct."], answer: ["C", "D"] },
      { id: 51, question: "What I am comfortable doing?", options: ["I tend to expect the best to happen.", "I enjoy working methodically within a system."], answer: ["C", "D"] },
      { id: 52, question: "What I am comfortable doing?", options: ["I am comfortable being a powerful and forceful person.", "I enjoy imagining possibilities."], answer: ["C", "D"] },
      { id: 53, question: "What I am comfortable doing?", options: ["I am at ease cooperating with others.", "I enjoy thinking independently."], answer: ["C", "D"] },
      { id: 54, question: "What I am comfortable doing?", options: ["I am direct in my approach to others.", "I am comfortable being warm and comforting to others."], answer: ["C", "D"] },
      { id: 55, question: "What I am comfortable doing?", options: ["If I believe in a cause, I will sacrifice my own interest.", "I enjoy doing things in an orderly way."], answer: ["C", "D"] },
      { id: 56, question: "What I am comfortable doing?", options: ["I am comfortable acting with excitement and focus.", "I am comfortable thinking about new ideas."], answer: ["C", "D"] },
      { id: 57, question: "What I am comfortable doing?", options: ["I enjoy the give and take of conversation.", "I prefer following a specific order or directions."], answer: ["C", "D"] },
      { id: 58, question: "What I am comfortable doing?", options: ["I am most comfortable accomplishing something.", "I am comfortable being cautious and conscientious."] },
      { id: 59, question: "What I am comfortable doing?", options: ["I enjoy situations where I can take action or do something.", "I am at ease showing understanding and compassion."], answer: ["C", "D"] },
      { id: 60, question: "What I am comfortable doing?", options: ["I am comfortable taking command of most situations.", "I am friendly and I enjoy conversations with strangers."], answer: ["C", "D"] },
      // More questions in section 3...
    ]
  }
];

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelection = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
    if (currentQuestion < questions[currentSection].questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else if (currentSection < questions.length - 1) {
      setCurrentSection((prev) => prev + 1);
      setCurrentQuestion(0);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    } else if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
      setCurrentQuestion(questions[currentSection - 1].questions.length - 1);
    }
  };

  const calculateProgress = () => {
    const totalQuestions = questions.reduce(
      (sum, section) => sum + section.questions.length,
      0
    );
    const answeredQuestions = Object.keys(answers).length;
    return (answeredQuestions / totalQuestions) * 100;
  };

  const getCurrentStep = () => {
    const overallStep = questions
      .slice(0, currentSection)
      .reduce((sum, section) => sum + section.questions.length, 0) + currentQuestion + 1;
    const sectionStep = currentQuestion + 1;
    const sectionTotal = questions[currentSection].questions.length;
    const overallTotal = questions.reduce(
      (sum, section) => sum + section.questions.length,
      0
    );

    return `Step ${sectionStep}`;
    // return `Question ${sectionStep} of ${sectionTotal} in ${questions[currentSection].section} (Question ${overallStep} of ${overallTotal} Overall)`;
  };

  const renderQuestions = () => {
    const section = questions[currentSection];
    const question = section.questions[currentQuestion];

    return (
      <div className="renderedQuestion">
        <div className="stepDiv">
          <p className="sectionHeader">{section.section} OF 3</p>
          <p className="sectionHeader">{getCurrentStep()}</p>
        </div>
        <p className="questionTitle">{question.question}</p>
        {question.options.map((option, index) => (
          <button
            key={index}
            className="opt"
            onClick={() => handleAnswerSelection(question.id, option)}
            style={{
              backgroundColor:
                answers[question.id] === option ? `#6357A4` : "white",
              color: answers[question.id] === option ? `white` : "",
              margin: "5px",
              padding: "25px",
              border: "0.5px solid black",
              borderRadius: "15px",
              marginTop: "10px",
              fontFamily: "Poppins",
              fontSize: "15px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {option}
          </button>
        ))}
        <br />
        <div className="controllBtn">
          {currentQuestion > 0 || currentSection > 0 ? (
            <button className="prev" onClick={handlePreviousQuestion}>Previous</button>
          ) : null}

          {Object.keys(answers).length ===
            questions.reduce((sum, section) => sum + section.questions.length, 0) ? (
            <button className="sub" onClick={handleSubmit}>Submit</button>
          ) : null}
        </div>
      </div>
    );
  };

  const handleRetake = () => {
    setCurrentSection(0);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const getChartData = () => {
    const resultData = {
      labels: ["A", "B", "C", "D"],
      datasets: [
        {
          data: [3, 5, 2, 4], // Example data for DISC categories
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        },
      ],
    };
    return resultData;
  };

  return (
    <div className="App">
      <div className="left">
        <h1 className="overHeader">4 Profile Strengths Analysis</h1>

        {showResults ? (
          <div>
            <h2>Results</h2>
            <button onClick={handleRetake}>Retake Test</button>
            <Doughnut data={getChartData()} />
          </div>
        ) : (
          <>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${calculateProgress()}%`,
                  backgroundColor: `#16133D`,
                  height: "5px",
                }}
              ></div>
            </div>
            {renderQuestions()}
            {/* {Object.keys(answers).length ===
              questions.reduce((sum, section) => sum + section.questions.length, 0) ? (
              <button onClick={handleSubmit}>Submit</button>
            ) : null} */}
          </>
        )}
      </div>
      <div className="right">
        <img src='./image (2).png' alt='logo-img' />
      </div>
    </div>
  );
};

export default App;
