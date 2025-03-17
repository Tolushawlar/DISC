import { jsPDF } from "jspdf";
import logo from "./logo-white.png";

const newpdfBW = (
  userDetails,
  feedback,
  identity,
  feedback2,
  identity2,
  feedback3,
  identity3,
  feedback4,
  identity4,
  sortedCombined,
  childWithColorsPdf,
  parentWithColorsPdf,
  adultWithColorsPdf
) => {
  const doc = new jsPDF();
  let pageNumber = 1;
  let currentY = 40;

  // Modified to use grayscale background
  const drawPageBorder = () => {
    doc.setDrawColor(50, 50, 50); // Dark gray border
    doc.setLineWidth(1.5);
    doc.roundedRect(5, 5, 200, 287, 10, 10, "S");
  };

  // Changed to grayscale background
  const addSoftBackground = () => {
    doc.setFillColor(240, 240, 240); // Light gray background
    doc.rect(0, 0, 210, 297, "F");
  };

  const addFooter = () => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50); // Dark gray text
    doc.text("www.beteachable.com", 105, 285, { align: "center" });
    doc.text(`Page ${pageNumber}`, 105, 290, { align: "center" });
  };

  // Keep the original color functions
  const namedColors = {
    red: [255, 0, 0],
    blue: [0, 0, 255],
    yellow: [255, 255, 0],
    green: [0, 128, 0],
    orange: [255, 165, 0],
    purple: [128, 0, 128],
  };

  const hexToRgbInd = (hex) => {
    if (namedColors[hex]) return namedColors[hex];
    // ... rest of the original function
  };

  const hexToRgb = (hex) => {
    // ... keep original function
  };

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const addIndividualProfilesSection = () => {
    const sections = [
      { title: "How You React Under Stress", data: childWithColorsPdf },
      {
        title: "What You Feel You Ought to Do/How You Should Think",
        data: parentWithColorsPdf,
      },
      {
        title: "What You Prefer To Do/How You Are Effective",
        data: adultWithColorsPdf,
      },
    ];

    sections.forEach(({ title, data }) => {
      if (!data || !Array.isArray(data) || !data.length) return;

      data.sort((a, b) => b.value - a.value);

      // Modified text colors to dark gray
      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.setTextColor(50, 50, 50);
      doc.text(title, 15, currentY);
      currentY += 10;

      doc.setFontSize(10);
      doc.text("Color", 15, currentY);
      doc.text("", 35, currentY);
      doc.text("Score", 45, currentY);
      doc.text("Profile", 65, currentY);
      currentY += 5;

      // Keep original colors for the results table
      data.forEach(({ color, profile, value }) => {
        if (currentY > 260) return;

        const rgbColor = hexToRgbInd(color);
        const capitalizedColor = capitalize(color);

        doc.setFontSize(10);
        doc.setTextColor(50, 50, 50);
        doc.text(`${capitalizedColor || "N/A"}`, 15, currentY);

        // Keep color squares colorful
        doc.setFillColor(...rgbColor);
        doc.rect(35, currentY - 3, 4, 4, "F");

        doc.text(`${value || "N/A"}`, 45, currentY);
        doc.text(`${profile || "N/A"}`, 65, currentY);

        currentY += 7;
      });

      currentY += 10;
    });
  };

  const addTotalResultSection = () => {
    if (
      !sortedCombined ||
      !Array.isArray(sortedCombined) ||
      !sortedCombined.length
    )
      return;

    // Modified text colors to dark gray
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.setTextColor(50, 50, 50);
    doc.text("Total Result", 15, currentY);
    currentY += 10;

    doc.setFontSize(10);
    doc.text("Color", 15, currentY);
    doc.text("", 35, currentY);
    doc.text("Score", 45, currentY);
    doc.text("Profile", 65, currentY);
    currentY += 5;

    // Keep original colors for the results
    sortedCombined.forEach(({ code, name, value, result }) => {
      if (currentY > 260) return;

      const rgbColor = hexToRgb(code);

      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      doc.text(`${name || "N/A"}`, 15, currentY);

      doc.setFillColor(...rgbColor);
      doc.rect(35, currentY - 3, 4, 4, "F");

      doc.text(`${result || "N/A"}`, 45, currentY);
      doc.text(`${value || "N/A"}`, 65, currentY);

      currentY += 7;
    });

    currentY += 5;
  };

  const addFeedbackSection = (feedbackDataArray) => {
    if (
      !feedbackDataArray ||
      !Array.isArray(feedbackDataArray) ||
      !feedbackDataArray.length
    )
      return;

    feedbackDataArray.forEach(({ feedback, identity }, index) => {
      if (!feedback || !identity) return;

      doc.addPage();
      pageNumber += 1;

      addSoftBackground();
      drawPageBorder();
      addFooter();

      let currentY = 30;
      doc.setDrawColor(50, 50, 50);
      doc.setLineWidth(0.5);
      doc.setFillColor(200, 200, 200); // Light gray background for header
      doc.roundedRect(10, currentY, 190, 20, 10, 10, "FD");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(50, 50, 50);
      doc.text(`Personality Feedback ${index + 1}`, 15, currentY + 12);

      currentY += 35;

      // Modified addTextBlock to use grayscale
      const addTextBlock = (text, isHeading = false) => {
        const fontSize = isHeading ? 14 : 12;
        const lineHeight = isHeading ? 8 : 6;
        doc.setFont("helvetica", isHeading ? "bold" : "normal");
        doc.setFontSize(fontSize);
        doc.setTextColor(50, 50, 50);

        const lines = doc.splitTextToSize(text, 180);
        lines.forEach((line) => {
          if (currentY > 260) {
            addFooter();
            doc.addPage();
            addSoftBackground();
            drawPageBorder();
            pageNumber += 1;
            currentY = 30;
          }
          doc.text(line, 15, currentY);
          currentY += lineHeight;
        });
        currentY += 4;
      };

      // Keep the rest of the feedback section logic
      // ... (keep all the identity-based content)
    });
  };

  // First Page Setup
  addSoftBackground();
  drawPageBorder();

  // Add logo
  doc.addImage(logo, "PNG", 75, 10, 60, 20);

  // Modified title color
  doc.setFont("helvetica", "bold");
  doc.setFontSize(25);
  doc.setTextColor(50, 50, 50);
  doc.text(userDetails.name + " " + "Strengths-Matrix Result", 105, currentY, {
    align: "center",
  });
  currentY += 15;

  addIndividualProfilesSection();
  addTotalResultSection();
  addFeedbackSection(
    [
      { feedback, identity },
      { feedback: feedback2, identity: identity2 },
      { feedback: feedback3, identity: identity3 },
      { feedback: feedback4, identity: identity4 },
    ].filter((item) => item.feedback && item.identity)
  );

  addFooter();
  doc.save(userDetails.name + " " + "Strengths-Matrix Result (B&W).pdf");
};

export default newpdfBW;
