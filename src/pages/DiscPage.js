import React, { useState, useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Table from "../Components/Table"
import "../App.css";
import { data } from "autoprefixer";
import { colors } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import { useReactToPrint } from "react-to-print";

ChartJS.register(ArcElement, Tooltip, Legend);

const questionsUpdate = [
  {
    section: "Section 1",
    profile: "Profile C",
    questions: [
      {
        id: 1,
        question: "",
        options: [
          { text: "Under intense stress I tend to Plan my way out.", weight: "C" },
          { text: "Under intense stress I tend to Become Distrustful.", weight: "D" }
        ]
      },
      {
        id: 2,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become a big talker.", weight: "B" },
          { text: "Under intense stress I tend to Become Withdrawn.", weight: "C" }
        ]
      },
      {
        id: 3,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Impractical.", weight: "C" },
          { text: "Under intense stress I tend to Become Cross.", weight: "D" }
        ]
      },
      {
        id: 4,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Hotheaded.", weight: "A" },
          { text: "Under intense stress I tend to Become Careless.", weight: "B" }
        ]
      },
      {
        id: 5,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Negative.", weight: "D" },
          { text: "Under intense stress I tend to Become Dictatorial.", weight: "A" }
        ]
      },
      {
        id: 6,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Too Permissive.", weight: "B" },
          { text: "Under intense stress I tend to Become Stubborn.", weight: "D" }
        ]
      },
      {
        id: 7,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Indecisive.", weight: "C" },
          { text: "Under intense stress I tend to Become More Likely To Act.", weight: "A" }
        ]
      },
      {
        id: 8,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Bearish.", weight: "A" },
          { text: "Under intense stress I tend to Become Manipulative.", weight: "B" }
        ]
      },
      {
        id: 9,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Very Cautious.", weight: "D" },
          { text: "Under intense stress I tend to Become Abrupt.", weight: "A" }
        ]
      },
      {
        id: 10,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Reckless.", weight: "B" },
          { text: "Under intense stress I tend to Become Inflexible.", weight: "D" }
        ]
      },
      {
        id: 11,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Passive.", weight: "C" },
          { text: "Under intense stress I tend to Become Insist On My Own Way.", weight: "A" }
        ]
      },
      {
        id: 12,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become High-Handed.", weight: "A" },
          { text: "Under intense stress I tend to Become Rebellious.", weight: "B" }
        ]
      },
      {
        id: 13,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Very Picky.", weight: "D" },
          { text: "Under intense stress I tend to Become Overbearing.", weight: "A" }
        ]
      },
      {
        id: 14,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Extremely Careless.", weight: "B" },
          { text: "Under intense stress I tend to Become Rigid.", weight: "D" }
        ]
      },
      {
        id: 15,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Scheming.", weight: "C" },
          { text: "Under intense stress I tend to Become Concerned With Details.", weight: "D" }
        ]
      },
      {
        id: 16,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Conceited.", weight: "B" },
          { text: "Under intense stress I tend to Become Anxious and Afraid.", weight: "C" }
        ]
      },
      {
        id: 17,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Sensitive.", weight: "C" },
          { text: "Under intense stress I tend to Become Hostile.", weight: "A" }
        ]
      },
      {
        id: 18,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Opinionated.", weight: "B" },
          { text: "Under intense stress I tend to Become Very Emotional.", weight: "C" }
        ]
      },
      {
        id: 19,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become Uncertain.", weight: "C" },
          { text: "Under intense stress I tend to Become Domineering.", weight: "A" }
        ]
      },
      {
        id: 20,
        question: "",
        options: [
          { text: "Under intense stress I tend to Become a Bluffer.", weight: "B" },
          { text: "Under intense stress I tend to Become Distrustful.", weight: "D" }
        ]
      }
    ]
  },
  {
    section: "Section 2",
    profile: "Profile P",
    questions: [
      {
        id: 21,
        question: "",
        options: [
          { text: "I think I should Develop New Plans.", weight: "C" },
          { text: "I think I should Be Consistent.", weight: "D" }
        ]
      },
      {
        id: 22,
        question: "",
        options: [
          { text: "I think I should Stick to the Rules.", weight: "D" },
          { text: "I think I should Supervise Others.", weight: "A" }
        ]
      },
      {
        id: 23,
        question: "",
        options: [
          { text: "I think I should Depend On My Own Experiences.", weight: "A" },
          { text: "I think I should Be a Self-Starter.", weight: "C" }
        ]
      },
      {
        id: 24,
        question: "",
        options: [
          { text: "I think I should Confer with Other People.", weight: "B" },
          { text: "I think I should Look for New Ideas.", weight: "C" }
        ]
      },
      {
        id: 25,
        question: "",
        options: [
          { text: "I think I should Give Others Directions.", weight: "A" },
          { text: "I think I should Influence Others.", weight: "B" }
        ]
      },
      {
        id: 26,
        question: "",
        options: [
          { text: "I think I should Conserve Resources.", weight: "D" },
          { text: "I think I should Create Ideas.", weight: "C" }
        ]
      },
      {
        id: 27,
        question: "",
        options: [
          { text: "I think I should Do What Works.", weight: "A" },
          { text: "I think I should Develop New Approaches.", weight: "C" }
        ]
      },
      {
        id: 28,
        question: "",
        options: [
          { text: "I think I should Coordinate Group Activities.", weight: "B" },
          { text: "I think I should Follow Tradition.", weight: "D" }
        ]
      },
      {
        id: 29,
        question: "",
        options: [
          { text: "I think I should Achieve By Using Ideas.", weight: "C" },
          { text: "I think I should Do Something.", weight: "A" }
        ]
      },
      {
        id: 30,
        question: "",
        options: [
          { text: "I think I should Arrange Things In a Pattern.", weight: "D" },
          { text: "I think I should Build Something.", weight: "A" }
        ]
      },
      {
        id: 31,
        question: "",
        options: [
          { text: "I think I should Explore New Ideas.", weight: "C" },
          { text: "I think I should Help Other People.", weight: "B" }
        ]
      },
      {
        id: 32,
        question: "",
        options: [
          { text: "I think I should Involve Others.", weight: "B" },
          { text: "I think I should Keep Things In Order.", weight: "D" }
        ]
      },
      {
        id: 33,
        question: "",
        options: [
          { text: "I think I should Produce Something.", weight: "A" },
          { text: "I think I should Be Precise.", weight: "D" }
        ]
      },
      {
        id: 34,
        question: "",
        options: [
          { text: "I think I should Keep On a Schedule.", weight: "D" },
          { text: "I think I should Be Hopeful.", weight: "B" }
        ]
      },
      {
        id: 35,
        question: "",
        options: [
          { text: "I think I should Work With Concepts and Ideas.", weight: "C" },
          {
            text: "I think I should Be Careful When Working With Facts and Figures.",
            weight: "D"
          }
        ]
      },
      {
        id: 36,
        question: "",
        options: [
          { text: "I think I should Should Be Persuasive.", weight: "B" },
          { text: "I think I should Others Should Respect Me.", weight: "A" }
        ]
      },
      {
        id: 37,
        question: "",
        options: [
          { text: "I think I should Promote Programs to Others.", weight: "B" },
          { text: "I think I should Compete With Myself To Do Better.", weight: "C" }
        ]
      },
      {
        id: 38,
        question: "",
        options: [
          { text: "I think I should Work Within Guidelines and Forms.", weight: "D" },
          { text: "I think I should Coordinate Group Cooperation.", weight: "B" }
        ]
      },
      {
        id: 39,
        question: "",
        options: [
          { text: "I think I should Work with Ideas and Plans.", weight: "C" },
          { text: "I think I should Get Something Done.", weight: "A" }
        ]
      },
      {
        id: 40,
        question: "",
        options: [
          { text: "I think I should Organize Others For The Good of The Group.", weight: "B" },
          { text: "I think I should Produce Things.", weight: "A" }
        ]
      }
    ]
  },
  {
    section: "Section 3",
    profile: "Profile A",
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
          { text: "I prefer being direct with people.", weight: "A" },
          { text: "I am comfortable checking accuracy.", weight: "D" }
        ]
      },
      {
        id: 48,
        question: "What I am comfortable doing?",
        options: [
          { text: "I enjoy doing things with a group.", weight: "B" },
          { text: "I enjoy looking at things in a new way.", weight: "C" }
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
          { text: "I enjoy being active.", weight: "A" },
          { text: "I enjoy being exact and correct.", weight: "D" }
        ]
      },
      {
        id: 51,
        question: "What I am comfortable doing?",
        options: [
          { text: "I tend to expect the best to happen.", weight: "B" },
          { text: "I enjoy working methodically within a system.", weight: "D" }
        ]
      },
      {
        id: 52,
        question: "What I am comfortable doing?",
        options: [
          {
            text: "I am comfortable being a powerful and forceful person.",
            weight: "A"
          },
          { text: "I enjoy imagining possibilities.", weight: "C" }
        ]
      },
      {
        id: 53,
        question: "What I am comfortable doing?",
        options: [
          { text: "I am at ease cooperating with others.", weight: "B" },
          { text: "I enjoy thinking independently.", weight: "C" }
        ]
      },
      {
        id: 54,
        question: "What I am comfortable doing?",
        options: [
          { text: "I am direct in my approach to others.", weight: "A" },
          {
            text: "I am comfortable being warm and comforting to others.",
            weight: "B"
          }
        ]
      },
      {
        id: 55,
        question: "What I am comfortable doing?",
        options: [
          {
            text: "If I believe in a cause, I will sacrifice my own interest.",
            weight: "B"
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
            weight: "A"
          },
          { text: "I am comfortable thinking about new ideas.", weight: "C" }
        ]
      },
      {
        id: 57,
        question: "What I am comfortable doing?",
        options: [
          { text: "I enjoy the give and take of conversation.", weight: "B" },
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
            weight: "A"
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
            weight: "A"
          },
          {
            text: "I am at ease showing understanding and compassion.",
            weight: "C"
          }
        ]
      },
      {
        id: 60,
        question: "What I am comfortable doing?",
        options: [
          {
            text: "I am comfortable taking command of most situations.",
            weight: "A"
          },
          {
            text: "I am friendly and I enjoy conversations with strangers.",
            weight: "B"
          }
        ]
      }
    ]
  }
];


//{C: red, B: yellow, D: blue, A: green}
// (4) ['red', 'yellow', 'blue', 'green']


const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [identity, setIdentity] = useState("")
  const [userDetails, setUserDetails] = useState({ name: "", email: "", phone: "" });
  const chartRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false); // State to track PDF generation

  const generatePDF = async () => {
    setIsGenerating(true); // Hide button
    // Temporarily hide button using a CSS class
    const buttonElement = document.getElementById("download-button");
    const buttonElement2 = document.getElementById("download-button2");
    buttonElement.style.display = "none";
    buttonElement2.style.display = "none";

    const element = document.body; // Capture the entire page
    const canvas = await html2canvas(element, {
      useCORS: true,
      scale: 2, // Improves resolution
    });

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = 297; // A4 height in mm
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const imgData = canvas.toDataURL("image/png");
    const imgHeight = (pdfWidth / canvasWidth) * canvasHeight;

    let currentHeight = 0; // Track how much content is rendered

    while (currentHeight < canvasHeight) {
      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = canvas.width;
      pageCanvas.height = Math.min(canvas.height - currentHeight, canvas.height);

      const context = pageCanvas.getContext("2d");
      context.drawImage(
        canvas,
        0,
        currentHeight,
        canvas.width,
        pageCanvas.height,
        0,
        0,
        canvas.width,
        pageCanvas.height
      );

      const pageData = pageCanvas.toDataURL("image/png");
      const pageHeight = (pdfWidth / canvasWidth) * pageCanvas.height;

      pdf.addImage(pageData, "PNG", 0, 0, pdfWidth, pageHeight);

      currentHeight += pageCanvas.height;

      if (currentHeight < canvasHeight) {
        pdf.addPage();
      }
    }

    pdf.save(`${userDetails.name}'s Strengths-Matrix Results.pdf`);
    buttonElement.style.display = "block";
    buttonElement2.style.display = "block";
    setIsGenerating(false); // Show button again
  };

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
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

  console.log(currentSection)
  const profiling = () => {
    if (currentSection === 0) {
      return (
        <>
          <p style={{ fontSize: "18px", fontWeight: "bolder" }}>Profile C</p>
          <p className="intro" style={{ maxWidth: "40vw", fontSize: "12px" }}>Each question below is divided into two statements. Choose the statement in either column that best describes
            how you feel under intense stress. There are no wrong answers. . For example: On Statement 1 if you tend to become distrustful under
            stress more than you tend to plan your way out, you would click on that option. You must
            select one answer for each of the 20 statements even if you do not agree completely with either answer.</p>
        </>
      );
    } else if (currentSection === 1) {
      return (
        <>
          <p style={{ fontSize: "18px", fontWeight: "bolder" }}>Profile P</p>
          <p className="intro" style={{ maxWidth: "40vw", fontSize: "12px" }}>Each question below is divided into two statements. Choose the statement in either column that best describes
            what you think you should do (or how you think others want you be).There are no wrong answers. For example: On Statement 1 if
            you think you should develop new plans more than you think you should be consistent, you would click on that option. You need to select one answer for each of the 20 statements even if you do not
            agree completely with either answer.</p>
        </>
      );
    } else if (currentSection === 2) {
      return (
        <>
          <p style={{ fontSize: "18px", fontWeight: "bolder" }}>Profile A</p>
          <p className="intro" style={{ maxWidth: "40vw", fontSize: "12px" }}>Each question below is divided into two statements. Choose the statement in either column that best describes
            what you are comfortable doing. There are no wrong answers. For example: On Statement 1 if you show great enthusiasm defending
            a cause more than you are decisive and firm in your actions, you would click on that option.
            You must select one answer for each of the 20 statements even if you do not agree completely with either
            answer.</p>
        </>
      );
    } else {
      return <p>No profile available</p>;
    }
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

    console.log(resultCounts)
    return resultCounts;
  };

  const handleSubmit = () => {
    console.log("Quiz Submitted", answers);
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      alert("Please fill in all fields before submitting.");
      return;
    }
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
        backgroundColor: ["blue", "green", "red", "yellow"],
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
  console.log(valuesArray)
  console.log(colorsArray)
  console.log(`Highest value: ${maxValue}, Position: ${maxIndex}, Color: ${correspondingColor}`);
  console.log(colorsArray[0])
  console.log(colors)
  const ColorFeedback = () => {
    const [feedback, setFeedback] = useState('');

    const colors = [
      { name: 'Red', value: 'Decision Makers, Goal Oriented, Results', code: '#FF0000', result: valuesArray[2] },
      { name: 'Yellow', value: 'Communicators, Participants, Adaptable', code: '#FFFF00', result: valuesArray[3] },
      {
        name: 'Blue', value: 'Problem Solver, Good Listener', code: '#0000FF', result: valuesArray[0]
      },
      { name: 'Green', value: 'Accurate, Consistent, Analytical', code: '#00FF00', result: valuesArray[1] },
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
          <div>
            {/* 🎨 The color with the highest value is <strong>{correspondingColor}</strong> ({maxValue}).
            <p>Your major strength is associated with {correspondingColor}!</p> */}
            <p>You are result Oriented and driven, Direct to the point, confident and competitve and you are always in a hurray.</p>
            <div>
              <h3>How To Communicate: Tell them WHAT</h3>
              <p>Be direct and concise, Reds think they should know what they are doing, therefore, they like to work with people who know what they are doing, Tell them the WHAT and forget the rest of the story. These are the "bottom line" people. </p>
            </div>
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
          </div>
        );
      } else if (correspondingColor === 'yellow') {
        setIdentity("Communicators, Participants, Adaptable")
        setFeedback(
          <div>
            {/* 🎨 The color with the highest value is <strong>{correspondingColor}</strong> ({maxValue}).
            <p>Your major strength is associated with {correspondingColor}!</p> */}
            <p>You are friendly, outgoing and emotional. Your orientation is people first, results second. You like to combine food with talk, and you talk a lot. You are very spontaneous.</p>
            <div>
              <h3>How To Communicate: Ask for their HELP</h3>
              <p>Be direct and concise, Reds think they should know what they are doing, therefore, they like to work with people who know what they are doing, Tell them the WHAT and forget the rest of the story. These are the "bottom line" people. </p>
            </div>
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
          </div>
        );
      } else if (correspondingColor === 'blue') {
        setIdentity("Patient, Problem Solver, Good Listener")
        setFeedback(
          <div>
            {/* 🎨 The color with the highest value is <strong>{correspondingColor}</strong> ({maxValue}).
            <p>Your major strength is associated with {correspondingColor}!</p> */}
            <p>You are a sincere person and good Listener, a problem solver and peace keeper. You are appreciated for who you are, not what you do. You focus on how to make things better</p>
            <div>
              <h3>How To Communicate: Ask what they THINK</h3>
              <p>They want to have input, Provide alternatives and allow them the freedom to choose the best one. Show appreciation for their ideas and input. ASK them what they think about your idea. Give them a problem to solve- they think yhey should know how!</p>
            </div>
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
          </div>
        );
      } else if (correspondingColor === 'green') {
        setIdentity("Accurate, Consistent, Analytical")
        setFeedback(
          <div>
            {/* 🎨 The color with the highest value is <strong>{correspondingColor}</strong> ({maxValue}).
            <p>Your major strength is associated with {correspondingColor}!</p> */}
            <p>A cautious person, that tend to do all 'by the book', you analyze any situation before you commit to it, you look before you cross the street and walk before you run, your goal is to avoid to making the same mistake twice.</p>
            <div>
              <h3>How To Communicate: Tell them HOW you want it done</h3>
              <p>They need consistency, predictablility and control. They want to see proff. Use testimonials. Lay the facts out early. Tell them the bad news first. Make a formal presentation and answer all the HOW question.</p>
            </div>
            <table class="custom-table">
              <thead>
                <tr style={{ textAlign: "left" }}>
                  <th>STRENGTHS</th>
                  <th>WEAKNESSES</th>
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
          </div>
        );
      }
    }, []);

    return (
      <div className="feedbackCol">
        <h2>Total Result</h2>
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
            marginTop: "40px",
            marginBottom: "100px"
          }}
        >
          <h3 style={{ color: "#16133d", fontSize: "24px", fontWeight: "bolder" }} className="text-lg font-bold">Feedback for {identity} </h3>
          {feedback}
        </div>
      </div>
    );
  };

  const ColorFeedback2 = () => {
    const [feedback2, setFeedback2] = useState('');

    const colors = [
      { name: 'Red', value: "Action", code: '#FF0000', result: adultResult[0] },
      { name: 'Yellow', value: "Talking", code: '#FFFF00', result: adultResult[1] },
      {
        name: 'Blue', value: 'Thinking', code: '#0000FF', result: adultResult[2]
      },
      { name: 'Green', value: 'Checking', code: '#00FF00', result: adultResult[3] },
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
    // useEffect(() => {
    //   const highestColor = getHighestColor();
    //   if (correspondingColor === 'red') {
    //     setIdentity("Decision Makers, Goal Oriented, Result Driven")
    //     setFeedback(
    //       <div>
    //         {/* 🎨 The color with the highest value is <strong>{correspondingColor}</strong> ({maxValue}).
    //         <p>Your major strength is associated with {correspondingColor}!</p> */}
    //         <p>You are result Oriented and driven, Direct to the point, confident and competitve and you are always in a hurray.</p>
    //         <div>
    //           <h3>How To Communicate: Tell them WHAT</h3>
    //           <p>Be direct and concise, Reds think they should know what they are doing, therefore, they like to work with people who know what they are doing, Tell them the WHAT and forget the rest of the story. These are the "bottom line" people. </p>
    //         </div>
    //         <table className
    //           ="custom-table">
    //           <thead>
    //             <tr style={{ textAlign: "left" }}>
    //               <th>STRENGTHS</th>
    //               <th>WEAKNESS</th>
    //               <th>NEEDS</th>
    //             </tr>
    //           </thead>
    //           <tbody className="tbody">
    //             <tr style={{ textAlign: "left" }}>
    //               <td data-label="STRENGTHS">Get Results</td>
    //               <td data-label="WEAKNESSES">Not Cautious</td>
    //               <td data-label="NEEDS">Power</td>
    //             </tr>
    //             <tr style={{ textAlign: "left" }}>
    //               <td data-label="STRENGTHS">Decision Makers</td>
    //               <td data-label="WEAKNESSES">Run Over People</td>
    //               <td data-label="NEEDS">Authority</td>
    //             </tr>
    //             <tr style={{ textAlign: "left" }}>
    //               <td data-label="STRENGTHS">Achieve Goals</td>
    //               <td data-label="WEAKNESSES">Focus On Short Term Results</td>
    //               <td data-label="NEEDS">To win</td>
    //             </tr>
    //             <tr style={{ textAlign: "left" }}>
    //               <td data-label="STRENGTHS">Risk Takers</td>
    //               <td data-label="WEAKNESSES">Focus On Wrong Thing</td>
    //               <td data-label="NEEDS">Quantifiable Results</td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     );
    //   } else if (correspondingColor === 'yellow') {
    //     setIdentity("Communicators, Participants, Adaptable")
    //     setFeedback(
    //       <div>
    //         {/* 🎨 The color with the highest value is <strong>{correspondingColor}</strong> ({maxValue}).
    //         <p>Your major strength is associated with {correspondingColor}!</p> */}
    //         <p>You are friendly, outgoing and emotional. Your orientation is people first, results second. You like to combine food with talk, and you talk a lot. You are very spontaneous.</p>
    //         <div>
    //           <h3>How To Communicate: Ask for their HELP</h3>
    //           <p>Be direct and concise, Reds think they should know what they are doing, therefore, they like to work with people who know what they are doing, Tell them the WHAT and forget the rest of the story. These are the "bottom line" people. </p>
    //         </div>
    //         <table className
    //           ="custom-table">
    //           <thead>
    //             <tr style={{ textAlign: "left" }}>
    //               <th>STRENGTHS</th>
    //               <th>WEAKNESS</th>
    //               <th>NEEDS</th>
    //             </tr>
    //           </thead>
    //           <tbody className="tbody">
    //             <tr style={{ textAlign: "left" }}>
    //               <td>Communicators</td>
    //               <td>No Sense of Time</td>
    //               <td>Recognition</td>
    //             </tr>
    //             <tr style={{ textAlign: "left" }}>
    //               <td>Participants</td>
    //               <td>Lack Follow-Up</td>
    //               <td>Acceptance</td>
    //             </tr>
    //             <tr style={{ textAlign: "left" }}>
    //               <td>Adaptability</td>
    //               <td>Lack Objectivity</td>
    //               <td>Influence</td>
    //             </tr>
    //             <tr style={{ textAlign: "left" }}>
    //               <td>Optimistic</td>
    //               <td>Chamelon</td>
    //               <td>Involvement</td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     );
    //   } else if (correspondingColor === 'blue') {
    //     setIdentity("Patient, Problem Solver, Good Listener")
    //     setFeedback(
    //       <div>
    //         {/* 🎨 The color with the highest value is <strong>{correspondingColor}</strong> ({maxValue}).
    //         <p>Your major strength is associated with {correspondingColor}!</p> */}
    //         <p>You are a sincere person and good Listener, a problem solver and peace keeper. You are appreciated for who you are, not what you do. You focus on how to make things better</p>
    //         <div>
    //           <h3>How To Communicate: Ask what they THINK</h3>
    //           <p>They want to have input, Provide alternatives and allow them the freedom to choose the best one. Show appreciation for their ideas and input. ASK them what they think about your idea. Give them a problem to solve- they think yhey should know how!</p>
    //         </div>
    //         <table class="custom-table">
    //           <thead>
    //             <tr style={{ textAlign: "left" }}>
    //               <th>STRENGTHS</th>
    //               <th>WEAKNESS</th>
    //               <th>NEEDS</th>
    //             </tr>
    //           </thead>
    //           <tbody className="tbody">
    //             <tr style={{ textAlign: "left" }}>
    //               <td>Patient</td>
    //               <td>Avoid Conflct</td>
    //               <td>Time</td>
    //             </tr>
    //             <tr style={{ textAlign: "left" }}>
    //               <td>Problem Solver</td>
    //               <td>Procastination</td>
    //               <td>Freedom</td>
    //             </tr>
    //             <tr style={{ textAlign: "left" }}>
    //               <td>Evalute Alternative</td>
    //               <td>Rationalize</td>
    //               <td>Alternatives</td>
    //             </tr>
    //             <tr style={{ textAlign: "left" }}>
    //               <td>Improvments</td>
    //               <td>"Over-imporove"</td>
    //               <td></td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     );
    //   } else if (correspondingColor === 'green') {
    //     setIdentity("Accurate, Consistent, Analytical")
    //     setFeedback(
    //       <div>
    //         {/* 🎨 The color with the highest value is <strong>{correspondingColor}</strong> ({maxValue}).
    //         <p>Your major strength is associated with {correspondingColor}!</p> */}
    //         <p>A cautious person, that tend to do all 'by the book', you analyze any situation before you commit to it, you look before you cross the street and walk before you run, your goal is to avoid to making the same mistake twice.</p>
    //         <div>
    //           <h3>How To Communicate: Tell them HOW you want it done</h3>
    //           <p>They need consistency, predictablility and control. They want to see proff. Use testimonials. Lay the facts out early. Tell them the bad news first. Make a formal presentation and answer all the HOW question.</p>
    //         </div>
    //         <table class="custom-table">
    //           <thead>
    //             <tr style={{ textAlign: "left" }}>
    //               <th>STRENGTHS</th>
    //               <th>WEAKNESSES</th>
    //               <th>M=NEEDS</th>
    //             </tr>
    //           </thead>
    //           <tbody className="tbody">
    //             <tr style={{ textAlign: "left" }}>
    //               <td>Patient</td>
    //               <td>Avoid Conflct</td>
    //               <td>Time</td>
    //             </tr>
    //             <tr style={{ textAlign: "left" }}>
    //               <td>Problem Solver</td>
    //               <td>Procastination</td>
    //               <td>Freedom</td>
    //             </tr>
    //             <tr style={{ textAlign: "left" }}>
    //               <td>Evalute Alternative</td>
    //               <td>Rationalize</td>
    //               <td>Alternatives</td>
    //             </tr>
    //             <tr style={{ textAlign: "left" }}>
    //               <td>Improvments</td>
    //               <td>"Over-imporove"</td>
    //               <td></td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     );
    //   }
    // }, []);

    return (
      <div className="feedbackCol">
        <h2>Adult Strengths Profile Result</h2>
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
        {/* <div
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
          {feedback2}
        </div> */}
      </div>
    );
  };

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`${userDetails.name}'s Strengths-Matrix Results`, 14, 20);
    let yPos = 30; // Initial Y position for questions

    // Add chart
    console.log(chartRef)
    if (chartRef.current) {
      const chartImage = chartRef.current.toBase64Image();
      doc.addImage(chartImage, "PNG", 14, yPos, 100, 90);
      yPos += 100;
    }

    // Add feedback
    const feedbackText = document.querySelector(".feedback").innerText;
    doc.text("Feedback:", 14, yPos);
    yPos += 10;
    doc.setFontSize(11);
    doc.text(feedbackText, 14, yPos, { maxWidth: 180 });

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
      // doc.text(`${index + 1}. ${question}`, 14, yPos);
      doc.text(`Section ${index + 1}.`, 14, yPos);
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

    doc.save(`${userDetails.name}_Strengths_Matrix_Results.pdf`);
  };

  const extractLast20Weights = () => {
    // Flatten all questions across sections
    const allQuestions = questionsUpdate.flatMap(section => section.questions);

    // Get the last 20 questions
    const last20Questions = allQuestions.slice(-20);

    // Extract their IDs
    const last20QuestionIds = last20Questions.map(q => q.id);

    // Filter answers for these IDs and calculate weights
    const last20Weights = last20QuestionIds
      .map(id => {
        const question = allQuestions.find(q => q.id === id);
        const selectedOption = answers[id];
        const option = question?.options.find(opt => opt.text === selectedOption);

        return option?.weight || 0; // Return weight if exists, otherwise 0
      })
      .filter(weight => weight !== 0); // Filter out any invalid weights

    return last20Weights;
  };

  // Call the function and store the result when needed
  const last20Weights = extractLast20Weights();
  console.log("Last 20 Question Weights:", last20Weights);


  const adultResult = ['A', 'B', 'C', 'D'].map(value =>
    last20Weights.filter(item => item === value).length
  );
  console.log(adultResult)

  const letterToColor = {
    C: 'blue',
    B: 'yellow',
    D: 'green',
    A: 'red',
  };

  // Count the occurrences of each letter
  const colorCounts = last20Weights.reduce((acc, letter) => {
    const color = letterToColor[letter]; // Get the corresponding color
    if (color) {
      acc[color] = (acc[color] || 0) + 1; // Increment the count for this color
    }
    return acc;
  }, {});

  console.log("Color Counts:", colorCounts);

  const FourStrengthsTable = () => {
    const tableData = [
      { position: "Buyer", red: 8, yellow: 7, blue: 2, green: 3 },
      { position: "Sales", red: 7, yellow: 8, blue: 5, green: 0 },
      { position: "Research Specialist", red: 5, yellow: 5, blue: 5, green: 5 },
      { position: "Dig Lead Coordinator", red: 5, yellow: 6, blue: 4, green: 5 },
      { position: "Dig Lead Locator", red: 5, yellow: 3, blue: 6, green: 6 },
      { position: "Locator Buyer", red: 5, yellow: 7, blue: 3, green: 5 },
      { position: "Coordinator (New Office)", red: 5, yellow: 6, blue: 4, green: 5 },
      { position: "Appointment Specialist", red: 5, yellow: 7, blue: 3, green: 5 },
      { position: "Closing Coordinator", red: 5, yellow: 5, blue: 5, green: 5 },
      { position: "Office Manager", red: 5, yellow: 5, blue: 5, green: 5 },
      { position: "Sales Manager", red: 7, yellow: 7, blue: 5, green: 1 },
      { position: "Construction Manager", red: 6, yellow: 7, blue: 2, green: 5 },
      { position: "Investor Relations", red: 6, yellow: 7, blue: 5, green: 2 },
    ];

    return (
      <div className="fourTable" style={{ padding: "20px" }}>
        <h2>Adult Strengths Profile for Organizational Positions</h2>
        <table border="1" style={{ borderCollapse: "collapse", }} className="tablePro">
          <thead>
            <tr>
              <th>Position</th>
              <th>Red (Action)</th>
              <th>Yellow (Talking)</th>
              <th>Blue (Thinking)</th>
              <th>Green (Checking)</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.position}</td>
                <td>{row.red}</td>
                <td>{row.yellow}</td>
                <td>{row.blue}</td>
                <td>{row.green}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="App">
      {!showResults
        ? <div style={{ display: "flex", flexDirection: "column", alignItems: "start", minWidth: "700px" }}>
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
          <p>{profiling()}</p>
          <h3 style={{ marginTop: "0px" }}>
            {
              questionsUpdate[currentSection].questions[currentQuestion]
                .question
            }
          </h3>
          {questionsUpdate[currentSection].questions[
            currentQuestion
          ].options.map(option =>
            <div  style={{ display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", justifyContent: "center", alignItems: "center" }}>
              <p className="options" style={{ fontSize: "18px" }}>{option.text}</p>
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
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >

              </button>
            </div>
          )}
          <br />
          {allQuestionsAnswered && currentQuestion === 19 && (
            <div className="details">
              <h3>Enter Your Details:</h3>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={userDetails.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userDetails.email}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={userDetails.phone}
                onChange={handleInputChange}
              />
            </div>
          )}

          < div className="controllBtn">
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
          <h2 className="resultHeader">{userDetails.name}'s Strengths-Matrix Results</h2>
          <div className="innerResults">
            <div className="chart charDiv">
              <Doughnut data={data} className="dou" ref={chartRef} />
              <button onClick={handleRetake} className="retake" id="download-button2">Retake Test</button>
              {/* <button onClick={generatePDF} className="pdf">Download Result</button> */}
              {/* Hide button while generating PDF */}
              {!isGenerating && (
                <button id="download-button" className="pdf" onClick={generatePDF}>Download PDF</button>
              )}

              {isGenerating && <p>Generating PDF, please wait...</p>}

            </div>
            <div style={{ marginBottom: "80px" }} className="feedback">
              <ColorFeedback2 />
              <FourStrengthsTable/>
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
