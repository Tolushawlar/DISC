import React from "react";

const Results = ({ answers, questions }) => {
  // Group answers by their quadrant
  const groupedResults = {
    Strength: [],
    Weakness: [],
    Opportunity: [],
    Threat: [],
  };

  Object.entries(answers).forEach(([questionId, answer]) => {
    const question = questions.find((q) => q.id === Number(questionId));
    if (question) {
      groupedResults[answer.quadrant].push({
        question: question.question,
        selectedAnswer: answer.selected,
        response: answer.response,
      });
    }
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h2
        style={{
          fontSize: "2.25rem",
          fontWeight: "bold",
          marginTop: "20px",
          marginBottom: "16px",
        }}
      >
        Results
      </h2>

      {/* Render Strength category */}
      <div
      className="custom-box"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "60vw",
          maxHeight: "30vh",
          overflowY: "scroll",
          marginBottom: "25px",
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3
          style={{
            color: "white",
            width: "400px",
            textAlign: "center",
            borderRadius: "20px",
            padding: "10px",
            background: "linear-gradient(to right, #16133d, #6357a5)",
          }}
        >
          Strength
        </h3>
        {groupedResults.Strength.map((result, index) => (
          <div
            key={index}
            style={{
              marginBottom: "16px",
              padding: "16px",
              backgroundColor: "#D1FAE5",
              borderRadius: "8px",
              maxWidth: "500px",
            }}
          >
            <p style={{ fontWeight: "600" }}>{result.question}</p>
            <p style={{ color: "#3B82F6" }}>Answer: {result.selectedAnswer}</p>
            <p style={{ color: "#6B7280" }}>Response: {result.response}</p>
          </div>
        ))}
      </div>

      {/* Render Weakness category */}
      <div
      className="custom-box"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "60vw",
          maxHeight: "30vh",
          overflowY: "scroll",
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)",
          marginBottom: "25px",
        }}
      >
        <h3
          style={{
            color: "white",
            width: "400px",
            textAlign: "center",
            borderRadius: "20px",
            padding: "10px",
            background: "linear-gradient(to right, #16133d, #6357a5)",
          }}
        >
          Weakness
        </h3>
        {groupedResults.Weakness.map((result, index) => (
          <div
            key={index}
            style={{
              marginBottom: "16px",
              padding: "16px",
              backgroundColor: "#FECACA",
              borderRadius: "8px",
              maxWidth: "500px",
            }}
          >
            <p style={{ fontWeight: "600" }}>{result.question}</p>
            <p style={{ color: "#F87171" }}>Answer: {result.selectedAnswer}</p>
            <p style={{ color: "#6B7280" }}>Response: {result.response}</p>
          </div>
        ))}
      </div>

      {/* Render Opportunity category */}
      <div
      className="custom-box"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "60vw",
          maxHeight: "30vh",
          overflowY: "scroll",
          marginBottom: "25px",
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3
          style={{
            color: "white",
            width: "400px",
            textAlign: "center",
            borderRadius: "20px",
            padding: "10px",
            background: "linear-gradient(to right, #16133d, #6357a5)",
          }}
        >
          Opportunity
        </h3>
        {groupedResults.Opportunity.map((result, index) => (
          <div
            key={index}
            style={{
              marginBottom: "16px",
              padding: "16px",
              backgroundColor: "#FEF3C7",
              borderRadius: "8px",
              maxWidth: "500px",
            }}
          >
            <p style={{ fontWeight: "600" }}>{result.question}</p>
            <p style={{ color: "#F59E0B" }}>Answer: {result.selectedAnswer}</p>
            <p style={{ color: "#6B7280" }}>Response: {result.response}</p>
          </div>
        ))}
      </div>

      {/* Render Threat category */}
      <div
      className="custom-box"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "60vw",
          maxHeight: "30vh",
          overflowY: "scroll",
          marginBottom: "25px",
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3
          style={{
            color: "white",
            width: "400px",
            textAlign: "center",
            borderRadius: "20px",
            padding: "10px",
            background: "linear-gradient(to right, #16133d, #6357a5)",
          }}
        >
          Threat
        </h3>
        {groupedResults.Threat.map((result, index) => (
          <div
            key={index}
            style={{
              marginBottom: "16px",
              padding: "16px",
              backgroundColor: "#F9A8D4",
              borderRadius: "8px",
              maxWidth: "500px",
            }}
          >
            <p style={{ fontWeight: "600" }}>{result.question}</p>
            <p style={{ color: "#EC4899" }}>Answer: {result.selectedAnswer}</p>
            <p style={{ color: "#6B7280" }}>Response: {result.response}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
