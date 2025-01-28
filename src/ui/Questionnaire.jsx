import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import Results from "./Results";

const questionsData = [
  {
    id: 1,
    question: "Do you have a documented strategic growth plan with measurable milestones for the short, mid, and long term?",
    options: [
      { label: "Yes", quadrant: "Strength", response: "Great! Your strategic growth plan is a key strength. Continue to review and refine it regularly to ensure it aligns with your business goals." },
      { label: "No", quadrant: "Opportunity", response: "Consider developing a strategic growth plan with clear, measurable milestones. This will help guide your business toward long-term success." },
      { label: "Unsure", quadrant: "Weakness", response: "Evaluate your current planning process. Are there clear goals and timelines in place? If not, start by outlining your business objectives and setting achievable milestones." }
    ]
  },
  {
    id: 2,
    question: "Do you conduct regular market analysis to identify new opportunities?",
    options: [
      { label: "Yes", quadrant: "Strength", response: "Fantastic! Regular market analysis ensures you stay ahead of trends and capitalize on new opportunities." },
      { label: "No", quadrant: "Threat", response: "Consider implementing market analysis as part of your strategy. Understanding market trends can help you adapt and grow your business effectively." },
      { label: "Unsure", quadrant: "Opportunity", response: "Assess your current approach. Identifying market trends is crucial for staying competitive." }
    ]
  },
  {
    id: 3,
    question: "Do you analyze market trends before making business decisions?",
    options: [
      { label: "Yes", quadrant: "Strength", response: "Fantastic! Regular market analysis ensures you stay ahead of trends and capitalize on new opportunities." },
      { label: "No", quadrant: "Weakness", response: "Consider implementing market analysis as part of your strategy. Understanding market trends can help you adapt and grow your business effectively." },
      { label: "Unsure", quadrant: "Opportunity", response: "Assess your current approach. Identifying market trends is crucial for staying competitive." }
    ]
  },
  {
    id: 4,
    question: "Do you have a clear vision for the future of your business?",
    options: [
      { label: "Yes", quadrant: "Strength", response: "Great! A clear vision helps guide decision-making and long-term success." },
      { label: "No", quadrant: "Weakness", response: "Consider defining a clear vision to align your business decisions and strategic planning." },
      { label: "Unsure", quadrant: "Opportunity", response: "Clarifying your business vision can help improve focus and direction." }
    ]
  },
  {
    id: 5,
    question: "Do you have a diversified revenue model?",
    options: [
      { label: "Yes", quadrant: "Strength", response: "Great! A diversified revenue model can provide stability and reduce risk." },
      { label: "No", quadrant: "Threat", response: "Consider diversifying your revenue streams to reduce dependence on a single source and minimize risk." },
      { label: "Unsure", quadrant: "Opportunity", response: "Exploring additional revenue streams could help make your business more resilient." }
    ]
  },
  {
    id: 6,
    question: "Do you regularly assess your competition?",
    options: [
      { label: "Yes", quadrant: "Strength", response: "Fantastic! Knowing your competition helps you stay ahead and adjust your strategy." },
      { label: "No", quadrant: "Weakness", response: "Consider regularly analyzing your competition to stay informed and competitive." },
      { label: "Unsure", quadrant: "Opportunity", response: "Start tracking your competition to uncover areas for improvement and potential advantages." }
    ]
  },
  {
    id: 7,
    question: "Do you invest in innovation and new technologies?",
    options: [
      { label: "Yes", quadrant: "Strength", response: "Fantastic! Investing in innovation keeps your business ahead of the curve." },
      { label: "No", quadrant: "Threat", response: "Consider investing in new technologies to improve efficiency and stay competitive." },
      { label: "Unsure", quadrant: "Opportunity", response: "Evaluate your current investment in innovation and consider exploring new technologies." }
    ]
  }
];


const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalQuestions = questionsData.length;
  const totalSections = 1; // Assuming there's only one section for now

  const handleAnswer = (selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: { 
        selected: selectedOption.label, 
        response: selectedOption.response, 
        quadrant: selectedOption.quadrant // Track the quadrant
      }
    }));
  
    if (currentQuestionIndex < totalQuestions - 1) {
      setTimeout(() => setCurrentQuestionIndex((prev) => prev + 1), 300);
    }
  };
  

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const currentStep = currentQuestionIndex + 1;
  const currentSection = 1; // We can expand this logic to handle multiple sections later

  const progress = (currentStep) / totalQuestions;

  if (isSubmitted) {
    return <Results answers={answers} questions={questionsData} />;
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "100px auto 0 auto",
        padding: "24px",
        backgroundColor: "white",
        // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <ProgressBar 
        progress={progress} 
        currentStep={currentStep} 
        totalSteps={totalQuestions} 
        currentSection={currentSection} 
        totalSections={totalSections} 
      />

      <Question
        question={questionsData[currentQuestionIndex]}
        onAnswer={handleAnswer}
        selectedAnswer={answers[currentQuestionIndex]?.selected}
      />

      <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "16px" }}>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#E5E7EB",
            cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer",
            opacity: currentQuestionIndex === 0 ? 0.5 : 1,
          }}
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className=" prev"
        >
          Previous
        </button>

        {currentQuestionIndex === totalQuestions - 1 ? (
          <button
            style={{
              padding: "8px 16px",
              // backgroundColor: "#16133d",
              background: "linear-gradient(to right, #16133d, #6357a5)",
              color: "white",
              marginLeft: "10px",
              borderRadius: "50px",
              width: "200px",
              fontSize: "15px",
              fontWeight: "bold",
              cursor: answers[currentQuestionIndex] ? "pointer" : "not-allowed",
              opacity: answers[currentQuestionIndex] ? 1 : 0.5,
            }}
            onClick={handleSubmit}
            disabled={!answers[currentQuestionIndex]}
          >
            Submit
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Questionnaire;
