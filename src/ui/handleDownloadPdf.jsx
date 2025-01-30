import { jsPDF } from "jspdf";

const handleDownloadPdf = (groupedResults) => {
  const doc = new jsPDF();

  // Define gradient styles for SWOT sections
  const sectionStyles = {
    Strength: { colorStart: [205, 165, 0], colorEnd: [255, 145, 0] }, // Orange gradient
    Weakness: { colorStart: [173, 216, 230], colorEnd: [100, 149, 237] }, // Light blue gradient
    Opportunity: { colorStart: [128, 0, 128], colorEnd: [75, 0, 130] }, // Purple gradient
    Threat: { colorStart: [0, 100, 0], colorEnd: [0, 128, 0] }, // Deep green gradient
  };

  let pageNumber = 1; // Track the current page number

  // Helper function to draw page border
  const drawPageBorder = (doc) => {
    doc.setDrawColor(0, 0, 0); // Black border color
    doc.setLineWidth(1.5); // Border thickness
    doc.roundedRect(5, 5, 200, 287, 10, 10, "S"); // Rounded border with a radius of 10
  };

  // Helper function to add a soft background
  const addSoftBackground = (doc, color = [22, 0, 57]) => {
    doc.setFillColor(...color);
    doc.rect(0, 0, 210, 297, "F"); // Cover full A4 page with the color
  };

  // Helper function to add a footer
  const addFooter = (doc) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text("www.beteachable.com", 105, 285, { align: "center" });
    doc.text(`Page ${pageNumber}`, 105, 290, { align: "center" }); // Page number in the center
  };

  // Add a background to the first page
  addSoftBackground(doc);
  drawPageBorder(doc); // Add border to the first page

  // Centering "BETEACHABLE" title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(236, 66, 244); // White text
  const title1 = "BETEACHABLE";
  const title1Width =
    (doc.getStringUnitWidth(title1) * doc.internal.getFontSize()) /
    doc.internal.scaleFactor;
  const title1X = (210 - title1Width) / 2; // Center horizontally on the A4 page (210mm width)
  doc.text(title1, title1X, 20); // Y position is 20mm

  // Set up for the second title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(46);
  doc.setTextColor(236, 66, 244); // White text

  // Centering "SWOT ANALYSIS" title
  const title2 = "SWOT ANALYSIS";
  const title2Width =
    (doc.getStringUnitWidth(title2) * doc.internal.getFontSize()) /
    doc.internal.scaleFactor;
  const title2X = (210 - title2Width) / 2; // Center horizontally on the A4 page (210mm width)
  doc.text(title2, title2X, 40); // Y position is 40mm

  // Draw 4 larger circles with letters "S", "W", "O", "T"
  const circleRadius = 15; // Increased circle radius
  const circleY = 40; // Y position for circles

  const letters = ["S", "W", "O", "T"];
  const colors = ["#F44336", "#4CAF50", "#FF9800", "#3F51B5"]; // Color for each letter

  // Draw circles and add letters inside them
  for (let i = 0; i < 4; i++) {
    const circleX = 30 + i * 50; // Increased space between circles horizontally
    // Draw circle
    doc.setFillColor(colors[i]);
    doc.circle(circleX, circleY + 40, circleRadius, "F");
    // Add letter inside the circle
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255); // Set text color to white for contrast
    doc.setFontSize(55);
    doc.text(letters[i], circleX - 8.5, circleY + 48); // Adjust positioning inside the circle
  }

  // Define section titles and content
  const sections = [
    {
      title: "Strengths",
      content: `- Attributes that support a company's success and competitiveness.\n- Characteristics that set the company apart from its competitors.`,
    },
    {
      title: "Weaknesses",
      content: `- Characteristics that put the company at a disadvantage compared to others.\n- Negative internal factors that the company needs to address to achieve its objectives.`,
    },
    {
      title: "Opportunities",
      content: `- External factors that the company can leverage to achieve its objectives.\n- Favorable market conditions that the company can capitalize on.`,
    },
    {
      title: "Threats",
      content: `- Unfavorable market conditions that the company needs to address.\n- Negative external factors that can harm the company's growth and success.`,
    },
  ];

  // Set position for the section titles
  let currentY = 100; // Start position for content

  // Draw section titles and content horizontally in a row under each circle
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const sectionX = 30 + i * 52; // Align text under each circle

    // Add section title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(section.title, sectionX - 15, currentY); // Position section title under each circle

    // Add section content (adjusted to fit horizontally)
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    const contentLines = doc.splitTextToSize(section.content, 30); // Split content to fit
    doc.text(contentLines, sectionX - 15, currentY + 5); // Position content below section title

    currentY = 100; // Increase Y position for the next row of content
  }

  // Start rendering grouped results
  currentY = 190;

  // Loop through SWOT sections
  Object.entries(groupedResults).forEach(([category, results]) => {
    const { colorStart, colorEnd } = sectionStyles[category] || {};

    // Add section title with padding and rounded rectangle
    doc.setDrawColor(0, 0, 0); // Border color
    doc.setLineWidth(0.5);
    doc.setFillColor(...colorStart);
    doc.roundedRect(10, currentY, 190, 20, 10, 10, "FD"); // Rounded rectangle

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255); // White text
    const sectionText = `${category}`;
    // Write the text multiple times with slight shifts
    doc.text(sectionText, 15, currentY + 13);
    doc.text(sectionText, 15.2, currentY + 13);
    doc.text(sectionText, 14.8, currentY + 13);
    doc.text(sectionText, 15, currentY + 13.2);
    doc.text(sectionText, 15, currentY + 12.8);

    // Add spacing for content
    currentY += 25;

    // Loop through each result in the category
    results.forEach((result) => {
      const { question, selectedAnswer, response } = result;

      // Define the box dimensions
      const boxHeight = 28; // Height for the question and response box
      const boxWidth = 180;
      const boxX = 15;

      // Draw a solid background for the box (no gradient)
      doc.setFillColor(...colorStart);
      doc.roundedRect(boxX, currentY, boxWidth, boxHeight, 10, 10, "F"); // Solid fill

      // Add question and response text inside the box with white text
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(255, 255, 255); // Set text color to white for the question
      const questionText = doc.splitTextToSize(`${question}:`, boxWidth - 10);
      doc.text(questionText, boxX + 5, currentY + 7);

      doc.setFont("helvetica", "normal");
      const responseText = `Selected: ${selectedAnswer}\nResponse: ${response}`;
      const responseLines = doc.splitTextToSize(responseText, boxWidth - 10);
      doc.text(responseLines, boxX + 5, currentY + 12);

      // Adjust currentY for the next question
      currentY += boxHeight + 5;

      // Handle page break if content exceeds the page
      if (currentY > 260) {
        addFooter(doc);
        pageNumber += 1;
        doc.addPage();
        addSoftBackground(doc); // Add background to the new page
        drawPageBorder(doc); // Add border to the new page
        currentY = 20; // Reset Y for the new page
      }
    });

    // Add spacing between sections
    currentY += 10;
  });

  // Add footer to the final page
  addFooter(doc);

  // Save the PDF
  doc.save("SWOT_Analysis_Results.pdf");
};

export default handleDownloadPdf;