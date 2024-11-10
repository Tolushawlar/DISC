import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Table from "../Components/Table"
import "../App.css";
import { data } from "autoprefixer";
import { colors } from "@mui/material";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

ChartJS.register(ArcElement, Tooltip, Legend);

const questionsUpdate = [
  {
    section: "Section 1",
    questions: [
      {
        id: 1,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Plan my way out.", weight: "C" },
          { text: "Become Distrustful.", weight: "D" }
        ]
      },
      {
        id: 2,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become a big talker.", weight: "B" },
          { text: "Become Withdrawn.", weight: "C" }
        ]
      },
      {
        id: 3,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Impractical.", weight: "C" },
          { text: "Become Cross.", weight: "D" }
        ]
      },
      {
        id: 4,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Hotheaded.", weight: "A" },
          { text: "Become Careless.", weight: "B" }
        ]
      },
      {
        id: 5,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Negative.", weight: "A" },
          { text: "Become Dictatorial.", weight: "D" }
        ]
      },
      {
        id: 6,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Too Permissive.", weight: "B" },
          { text: "Become Stubborn.", weight: "D" }
        ]
      },
      {
        id: 7,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Indecisive.", weight: "A" },
          { text: "Become More Likely To Act.", weight: "C" }
        ]
      },
      {
        id: 8,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Bearish.", weight: "A" },
          { text: "Become Manipulative.", weight: "B" }
        ]
      },
      {
        id: 9,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Very Cautious.", weight: "A" },
          { text: "Become Abrupt.", weight: "D" }
        ]
      },
      {
        id: 10,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Reckless.", weight: "B" },
          { text: "Become Inflexible.", weight: "D" }
        ]
      },
      {
        id: 11,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Passive.", weight: "A" },
          { text: "Become Insist On My Own Way.", weight: "C" }
        ]
      },
      {
        id: 12,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become High-Handed.", weight: "A" },
          { text: "Become Rebellious.", weight: "B" }
        ]
      },
      {
        id: 13,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Very Picky.", weight: "A" },
          { text: "Become Overbearing.", weight: "D" }
        ]
      },
      {
        id: 14,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Extremely Careless.", weight: "B" },
          { text: "Become Rigid.", weight: "D" }
        ]
      },
      {
        id: 15,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Scheming.", weight: "C" },
          { text: "Become Concerned With Details.", weight: "D" }
        ]
      },
      {
        id: 16,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Conceited.", weight: "B" },
          { text: "Become Anxious and Afraid.", weight: "C" }
        ]
      },
      {
        id: 17,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Sensitive.", weight: "A" },
          { text: "Sensitive Hostile.", weight: "C" }
        ]
      },
      {
        id: 18,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Opinionated.", weight: "B" },
          { text: "Become Very Emotional.", weight: "C" }
        ]
      },
      {
        id: 19,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become Uncertain.", weight: "A" },
          { text: "Become Domineering.", weight: "C" }
        ]
      },
      {
        id: 20,
        question: "Under intense stress I tend to?",
        options: [
          { text: "Become a Bluffer.", weight: "B" },
          { text: "Become Distrustful.", weight: "D" }
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
          { text: "Develop New Plans.", weight: "C" },
          { text: "Be Consistent.", weight: "D" }
        ]
      },
      {
        id: 22,
        question: "I think I should?",
        options: [
          { text: "Stick to the Rules.", weight: "A" },
          { text: "Supervise Others.", weight: "D" }
        ]
      },
      {
        id: 23,
        question: "I think I should?",
        options: [
          { text: "Depend On My Own Experiences.", weight: "A" },
          { text: "Be a Self-Starter.", weight: "C" }
        ]
      },
      {
        id: 24,
        question: "I think I should?",
        options: [
          { text: "Confer with Other People.", weight: "B" },
          { text: "Look for New Ideas.", weight: "C" }
        ]
      },
      {
        id: 25,
        question: "I think I should?",
        options: [
          { text: "Give Others Directions.", weight: "A" },
          { text: "Influence Others.", weight: "B" }
        ]
      },
      {
        id: 26,
        question: "I think I should?",
        options: [
          { text: "Conserve Resources.", weight: "C" },
          { text: "Create Ideas.", weight: "D" }
        ]
      },
      {
        id: 27,
        question: "I think I should?",
        options: [
          { text: "Do What Works.", weight: "A" },
          { text: "Develop New Approaches.", weight: "C" }
        ]
      },
      {
        id: 28,
        question: "I think I should?",
        options: [
          { text: "Coordinate Group Activities.", weight: "B" },
          { text: "Follow Tradition.", weight: "D" }
        ]
      },
      {
        id: 29,
        question: "I think I should?",
        options: [
          { text: "Achieve By Using Ideas.", weight: "A" },
          { text: "Do Something.", weight: "C" }
        ]
      },
      {
        id: 30,
        question: "I think I should?",
        options: [
          { text: "Arrange Things In a Pattern.", weight: "A" },
          { text: "Build Something.", weight: "D" }
        ]
      },
      {
        id: 31,
        question: "I think I should?",
        options: [
          { text: "Explore New Ideas.", weight: "B" },
          { text: "Help Other People.", weight: "C" }
        ]
      },
      {
        id: 32,
        question: "I think I should?",
        options: [
          { text: "Involve Others.", weight: "B" },
          { text: "Keep Things In Order.", weight: "D" }
        ]
      },
      {
        id: 33,
        question: "I think I should?",
        options: [
          { text: "Produce Something.", weight: "A" },
          { text: "Be Precise.", weight: "D" }
        ]
      },
      {
        id: 34,
        question: "I think I should?",
        options: [
          { text: "Keep On a Schedule.", weight: "B" },
          { text: "Be Hopeful.", weight: "D" }
        ]
      },
      {
        id: 35,
        question: "I think I should?",
        options: [
          { text: "Work With Concepts and Ideas.", weight: "C" },
          {
            text: "Be Careful When Working With Facts and Figures.",
            weight: "D"
          }
        ]
      },
      {
        id: 36,
        question: "I think I should?",
        options: [
          { text: "Should Be Persuasive.", weight: "A" },
          { text: "Others Should Respect Me.", weight: "B" }
        ]
      },
      {
        id: 37,
        question: "I think I should?",
        options: [
          { text: "Promote Programs to Others.", weight: "B" },
          { text: "Compete With Myself To Do Better.", weight: "C" }
        ]
      },
      {
        id: 38,
        question: "I think I should?",
        options: [
          { text: "Work Within Guidelines and Forms.", weight: "B" },
          { text: "Coordinate Group Cooperation.", weight: "D" }
        ]
      },
      {
        id: 39,
        question: "I think I should?",
        options: [
          { text: "Work with Ideas and Plans.", weight: "A" },
          { text: "Get Something Done.", weight: "C" }
        ]
      },
      {
        id: 40,
        question: "I think I should?",
        options: [
          { text: "Organize Others For The Good of The Group.", weight: "A" },
          { text: "Produce Things.", weight: "B" }
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
  const [identity, setIdentity] = useState("")

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
    return `Step ${sectionStep} of ${sectionTotal} in ${questionsUpdate[
      currentSection
    ].section} 
    (${overallStep} of ${overallTotal})`;
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
        // backgroundColor: [ "#4BC0C0", "#36A2EB", "#FFCE56","#FF6384"], 
        backgroundColor: ["red", "yellow", "blue", "green"],
        hoverOffset: 4
      }
    ]
  };

  const valuesArray = data.datasets[0].data;
  const colorsArray = data.datasets[0].backgroundColor;
  const maxValue = Math.max(...valuesArray); // Find the highest value
  const maxIndex = valuesArray.indexOf(maxValue); // Find the index of the highest value

  // Step 2: Get the corresponding color from the colors array
  const correspondingColor = colorsArray[maxIndex];

  console.log(`Highest value: ${maxValue}, Position: ${maxIndex}, Color: ${correspondingColor}`);
  console.log(colorsArray[0])
  console.log(colors)
  const ColorFeedback = () => {
    const [feedback, setFeedback] = useState('');

    const colors = [
      { name: 'Red', value: 'Decision Makers, Goal Oriented, Results', code: '#FF0000', result: valuesArray[0] },
      { name: 'Yellow', value: 'Communicators, Participants, Adaptable', code: '#FFFF00', result: valuesArray[1] },
      {
        name: 'Blue', value: 'Problem Solver, Good Listener', code: '#0000FF', result: valuesArray[2]
      },
      { name: 'Green', value: 'Accurate, Consistent, Analytical', code: '#00FF00', result: valuesArray[3] },
    ];

    const sortedColors = [...colors].sort((a, b) => b.result - a.result);

    // Helper function to convert hex color to an integer value
    const hexToInt = (hex) => parseInt(hex.slice(1), 16);

    // Find the color with the highest value
    const getHighestColor = () =>
      colors.reduce((max, color) =>
        hexToInt(color.value) > hexToInt(max.value) ? color : max
      );

    // Generate feedback message based on the highest color value
    useEffect(() => {
      const highestColor = getHighestColor();
      if (correspondingColor === 'red') {
        setIdentity("Decision Makers, Goal Oriented, Result Driven")
        setFeedback(
          <>
            {/* 🎨 The color with the highest value is <strong>{correspondingColor}</strong> ({maxValue}).
            <p>Your major strength is associated with {correspondingColor}!</p> */}
            <p>You are result Oriented and driven, Direct to the point, confident and competitve and you are always in a hurray.</p>
            <h3>How To Communicate: Tell them WHAT</h3>
            <p>Be direct and concise, Reds think they should know what they are doing, therefore, they like to work with people who know what they are doing, Tell them the WHAT and forget the rest of the story. These are the "bottom line" people. </p>
            <table className
              ="custom-table">
              <thead>
                <tr style={{ textAlign: "left" }}>
                  <th>STRENGTHS</th>
                  <th>WEAKNESS</th>
                  <th>NEEDS</th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr style={{ textAlign: "left" }}>
                  <td data-label="STRENGTHS">Get Results</td>
                  <td data-label="WEAKNESSES">Not Cautious</td>
                  <td data-label="NEEDS">Power</td>
                </tr>
                <tr style={{ textAlign: "left" }}>
                  <td data-label="STRENGTHS">Decision Makers</td>
                  <td data-label="WEAKNESSES">Run Over People</td>
                  <td data-label="NEEDS">Authority</td>
                </tr>
                <tr style={{ textAlign: "left" }}>
                  <td data-label="STRENGTHS">Achieve Goals</td>
                  <td data-label="WEAKNESSES">Focus On Short Term Results</td>
                  <td data-label="NEEDS">To win</td>
                </tr>
                <tr style={{ textAlign: "left" }}>
                  <td data-label="STRENGTHS">Risk Takers</td>
                  <td data-label="WEAKNESSES">Focus On Wrong Thing</td>
                  <td data-label="NEEDS">Quantifiable Results</td>
                </tr>
              </tbody>
            </table>
          </>
        );
      } else if (correspondingColor === 'yellow') {
        setIdentity("Communicators, Participants, Adaptable")
        setFeedback(
          <>
            {/* 🎨 The color with the highest value is <strong>{correspondingColor}</strong> ({maxValue}).
            <p>Your major strength is associated with {correspondingColor}!</p> */}
            <p>You are friendly, outgoing and emotional. Your orientation is people first, results second. You like to combine food with talk, and you talk a lot. You are very spontaneous.</p>
            <h3>How To Communicate: Ask for their HELP</h3>
            <p>Be direct and concise, Reds think they should know what they are doing, therefore, they like to work with people who know what they are doing, Tell them the WHAT and forget the rest of the story. These are the "bottom line" people. </p>
            <table className
              ="custom-table">
              <thead>
                <tr style={{ textAlign: "left" }}>
                  <th>STRENGTHS</th>
                  <th>WEAKNESS</th>
                  <th>NEEDS</th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr style={{ textAlign: "left" }}>
                  <td>Communicators</td>
                  <td>No Sense of Time</td>
                  <td>Recognition</td>
                </tr>
                <tr style={{ textAlign: "left" }}>
                  <td>Participants</td>
                  <td>Lack Follow-Up</td>
                  <td>Acceptance</td>
                </tr>
                <tr style={{ textAlign: "left" }}>
                  <td>Adaptability</td>
                  <td>Lack Objectivity</td>
                  <td>Influence</td>
                </tr>
                <tr style={{ textAlign: "left" }}>
                  <td>Optimistic</td>
                  <td>Chamelon</td>
                  <td>Involvement</td>
                </tr>
              </tbody>
            </table>
          </>
        );
      } else if (correspondingColor === 'blue') {
        setIdentity("Patient, Problem Solver, Good Listener")
        setFeedback(
          <>
            {/* 🎨 The color with the highest value is <strong>{correspondingColor}</strong> ({maxValue}).
            <p>Your major strength is associated with {correspondingColor}!</p> */}
            <p>You are a sincere person and good Listener, a problem solver and peace keeper. You are appreciated for who you are, not what you do. You focus on how to make things better</p>
            <h3>How To Communicate: Ask what they THINK</h3>
            <p>They want to have input, Provide alternatives and allow them the freedom to choose the best one. Show appreciation for their ideas and input. ASK them what they think about your idea. Give them a problem to solve- they think yhey should know how!</p>

            <table class="custom-table">
              <thead>
                <tr style={{ textAlign: "left" }}>
                  <th>STRENGTHS</th>
                  <th>WEAKNESS</th>
                  <th>NEEDS</th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr style={{ textAlign: "left" }}>
                  <td>Patient</td>
                  <td>Avoid Conflct</td>
                  <td>Time</td>
                </tr>
                <tr style={{ textAlign: "left" }}>
                  <td>Problem Solver</td>
                  <td>Procastination</td>
                  <td>Freedom</td>
                </tr>
                <tr style={{ textAlign: "left" }}>
                  <td>Evalute Alternative</td>
                  <td>Rationalize</td>
                  <td>Alternatives</td>
                </tr>
                <tr style={{ textAlign: "left" }}>
                  <td>Improvments</td>
                  <td>"Over-imporove"</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </>
        );
      } else if (correspondingColor === 'green') {
        setIdentity("Accurate, Consistent, Analytical")
        setFeedback(
          <>
            {/* 🎨 The color with the highest value is <strong>{correspondingColor}</strong> ({maxValue}).
            <p>Your major strength is associated with {correspondingColor}!</p> */}
            <p>A cautious person, that tend to do all 'by the book', you analyze any situation before you commit to it, you look before you cross the street and walk before you run, your goal is to avoid to making the same mistake twice.</p>
            <h3>How To Communicate: Tell them HOW you want it done</h3>
            <p>They need consistency, predictablility and control. They want to see proff. Use testimonials. Lay the facts out early. Tell them the bad news first. Make a formal presentation and answer all the HOW question.</p>
            <table class="custom-table">
              <thead>
                <tr style={{ textAlign: "left" }}>
                  <th>STRENGTHS</th>
                  <th>WEAKNESSES</th>
                  <th>M=NEEDS</th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr style={{ textAlign: "left" }}>
                  <td>Patient</td>
                  <td>Avoid Conflct</td>
                  <td>Time</td>
                </tr>
                <tr style={{ textAlign: "left" }}>
                  <td>Problem Solver</td>
                  <td>Procastination</td>
                  <td>Freedom</td>
                </tr>
                <tr style={{ textAlign: "left" }}>
                  <td>Evalute Alternative</td>
                  <td>Rationalize</td>
                  <td>Alternatives</td>
                </tr>
                <tr style={{ textAlign: "left" }}>
                  <td>Improvments</td>
                  <td>"Over-imporove"</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </>
        );
      }
    }, []);

    return (
      <div className="feedbackCol">
        <div className="container mx-auto p-4 custom-box colorBox">
          {/* <h1 className="text-2xl font-bold mb-4">Color List</h1> */}
          <table className="min-w-full border-collapse border border-gray-300 mb-4"
          // style={{
          //   border: '1px solid #ccc',
          //   padding: '20px',
          //   borderRadius: '5px',
          //   backgroundColor: '#f9f9f9',
          //   marginTop: "40px"
          // }}
          >
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Color</th>
                <th className="border border-gray-300 px-4 py-2 text-left"></th>
                <th className="border border-gray-300 px-4 py-2 text-left">Profile</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Score</th>
              </tr>
            </thead>
            <tbody>
              {sortedColors.map((color, index) => (
                <tr key={index} className="">
                  <td className="border border-gray-300 px-4 py-2">{color.name}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div
                      style={{
                        backgroundColor: color.code,
                        width: '30px',
                        height: '30px',
                        borderRadius: '4px',
                      }}
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2 profileHead">{color.value}</td>
                  <td className="border border-gray-300 px-4 py-2">{color.result}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Feedback Section */}
        <div
          className="custom-box"
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
            marginTop: "40px"
          }}
        >
          <h3 style={{ color: "#16133d", fontSize: "24px", fontWeight: "bolder" }} className="text-lg font-bold">Feedback for {identity} </h3>
          <p>{feedback}</p>
        </div>
      </div>
    );
  };

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("STRENGTHS-MATRIX RESULTS", 14, 20);

    let yPos = 30; // Initial Y position for questions

    // Flatten all questions across sections and map questions to responses
    const questionsMap = {};
    questionsUpdate.forEach((section) => {
      section.questions.forEach(({ id, question, options }) => {
        const userResponse = answers[id] || "No response given";
        const result = options.find((opt) => opt.text === userResponse)?.result || "N/A";

        if (!questionsMap[question]) {
          questionsMap[question] = []; // Initialize response array for each question
        }
        questionsMap[question].push({ userResponse, result });
      });
    });

    // Format PDF with each question appearing only once
    Object.entries(questionsMap).forEach(([question, responses], index) => {
      // Add question as a header in the PDF
      doc.setFontSize(14);
      doc.text(`${index + 1}. ${question}`, 14, yPos);
      yPos += 5; // Add space after question title

      const data = responses.map(({ userResponse }) => [userResponse]);

      // Generate table for responses
      doc.autoTable({
        head: [["Response"]],
        body: data,
        startY: yPos,
        margin: { top: 10, left: 14, right: 14 },
      });

      yPos = doc.autoTable.previous.finalY + 15; // Update Y position after table with additional space
    });

    doc.save("SWOT_Analysis_Results.pdf");
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
          <h3 style={{ marginTop: "50px" }}>
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
        : <div className="riz">
          <h2 className="resultHeader">STRENGTHS MATRIX RESULTS </h2>
          <div className="innerResults">
            <div className="chart">
              <Doughnut data={data} className="dou" />
              <button onClick={handleRetake} className="retake">Retake Test</button>
              <button onClick={handleDownloadPdf} className="pdf">Download Result</button>
            </div>
            <div style={{ marginBottom: "80px" }} className="feedback">
              <ColorFeedback />
            </div>
          </div>
        </div>}
    </div>
  );
};

export default App;
