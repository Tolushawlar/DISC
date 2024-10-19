import React, { useState } from 'react';
import "../Swot.css";

const swotData = {
  swotQuestions: [
    {
      "section": "Strengths",
      "questions": [
        {
          "id": 1,
          "question": "Patents?",
          "options": [
            {
              "text": "Yes",
              "result": "You have strong intellectual property protection, which gives a competitive edge."
            },
            {
              "text": "No",
              "result": "Lack of patents could expose your business to copying and lost market share."
            }
          ]
        },
        {
          "id": 2,
          "question": "Strong brand name?",
          "options": [
            {
              "text": "Yes",
              "result": "A strong brand name enhances recognition and trust among customers."
            },
            {
              "text": "No",
              "result": "Developing a stronger brand could improve customer loyalty and market positioning."
            }
          ]
        },
        {
          "id": 3,
          "question": "Good reputation among customers?",
          "options": [
            {
              "text": "Yes",
              "result": "Your business benefits from positive customer perception, increasing loyalty and trust."
            },
            {
              "text": "No",
              "result": "Building a good reputation is essential to gain customer trust and market share."
            }
          ]
        },
        {
          "id": 4,
          "question": "Many product lines?",
          "options": [
            {
              "text": "Yes",
              "result": "A diverse product range spreads risk and caters to different customer needs."
            },
            {
              "text": "No",
              "result": "Consider expanding product lines to attract more customers and mitigate risks."
            }
          ]
        },
        {
          "id": 5,
          "question": "Broad market coverage?",
          "options": [
            {
              "text": "Yes",
              "result": "Broad coverage ensures higher market penetration and better customer reach."
            },
            {
              "text": "No",
              "result": "Expanding market coverage could improve sales and brand visibility."
            }
          ]
        },
        {
          "id": 6,
          "question": "Manufacturing competence?",
          "options": [
            {
              "text": "Yes",
              "result": "Strong manufacturing capabilities can enhance product quality and reduce costs."
            },
            {
              "text": "No",
              "result": "Improving manufacturing efficiency could reduce costs and increase competitiveness."
            }
          ]
        },
        {
          "id": 7,
          "question": "Good marketing skills?",
          "options": [
            {
              "text": "Yes",
              "result": "Effective marketing efforts boost visibility and customer engagement."
            },
            {
              "text": "No",
              "result": "Improving marketing strategies can enhance customer acquisition and retention."
            }
          ]
        },
        {
          "id": 8,
          "question": "Good materials management systems?",
          "options": [
            {
              "text": "Yes",
              "result": "Efficient materials management reduces waste and ensures smooth operations."
            },
            {
              "text": "No",
              "result": "Optimizing materials management can lower costs and improve efficiency."
            }
          ]
        },
        {
          "id": 9,
          "question": "R&D skills and leadership?",
          "options": [
            {
              "text": "Yes",
              "result": "Strong R&D capabilities drive innovation and competitive advantage."
            },
            {
              "text": "No",
              "result": "Investing in R&D can help develop new products and stay ahead of competitors."
            }
          ]
        },
        {
          "id": 10,
          "question": "Information system competencies?",
          "options": [
            {
              "text": "Yes",
              "result": "Advanced information systems enhance decision-making and operational efficiency."
            },
            {
              "text": "No",
              "result": "Developing robust IT systems can streamline processes and improve outcomes."
            }
          ]
        },
        {
          "id": 11,
          "question": "Human resource competencies?",
          "options": [
            {
              "text": "Yes",
              "result": "Skilled employees improve productivity and drive business success."
            },
            {
              "text": "No",
              "result": "Investing in employee training can enhance skills and boost performance."
            }
          ]
        },
        {
          "id": 12,
          "question": "Brand name reputation?",
          "options": [
            {
              "text": "Yes",
              "result": "A reputable brand builds customer trust and encourages repeat business."
            },
            {
              "text": "No",
              "result": "Building a strong brand reputation can enhance loyalty and market positioning."
            }
          ]
        },
        {
          "id": 13,
          "question": "Portfolio management skills?",
          "options": [
            {
              "text": "Yes",
              "result": "Strong portfolio management helps balance risk and maximize returns."
            },
            {
              "text": "No",
              "result": "Improving portfolio management can enhance resource allocation and profitability."
            }
          ]
        },
        {
          "id": 14,
          "question": "Cost of differentiation advantage?",
          "options": [
            {
              "text": "Yes",
              "result": "A cost advantage enables competitive pricing without compromising quality."
            },
            {
              "text": "No",
              "result": "Developing cost advantages can help attract price-sensitive customers."
            }
          ]
        },
        {
          "id": 15,
          "question": "New-venture management expertise?",
          "options": [
            {
              "text": "Yes",
              "result": "Expertise in managing new ventures enhances business growth opportunities."
            },
            {
              "text": "No",
              "result": "Building management expertise can improve success rates in new ventures."
            }
          ]
        },
        {
          "id": 16,
          "question": "Appropriate management style?",
          "options": [
            {
              "text": "Yes",
              "result": "A suitable management style fosters teamwork and boosts morale."
            },
            {
              "text": "No",
              "result": "Adopting the right management approach can improve employee engagement."
            }
          ]
        },
        {
          "id": 17,
          "question": "Appropriate organizational structure?",
          "options": [
            {
              "text": "Yes",
              "result": "An effective structure improves communication and operational efficiency."
            },
            {
              "text": "No",
              "result": "Optimizing the organizational structure can enhance performance and collaboration."
            }
          ]
        },
        {
          "id": 18,
          "question": "Appropriate control systems?",
          "options": [
            {
              "text": "Yes",
              "result": "Robust control systems ensure smooth operations and risk management."
            },
            {
              "text": "No",
              "result": "Developing better control systems can improve operational oversight."
            }
          ]
        },
        {
          "id": 19,
          "question": "Ability to manage strategic change?",
          "options": [
            {
              "text": "Yes",
              "result": "Strong change management capabilities enable adaptability and growth."
            },
            {
              "text": "No",
              "result": "Improving change management skills can enhance responsiveness to market shifts."
            }
          ]
        },
        {
          "id": 20,
          "question": "Well-developed corporate strategy?",
          "options": [
            {
              "text": "Yes",
              "result": "A clear strategy guides decisions and aligns efforts toward business goals."
            },
            {
              "text": "No",
              "result": "Developing a robust strategy can provide direction and competitive advantage."
            }
          ]
        },
        {
          "id": 21,
          "question": "Good international operations?",
          "options": [
            {
              "text": "Yes",
              "result": "Strong international operations enhance market presence and diversification."
            },
            {
              "text": "No",
              "result": "Expanding international operations can open new growth opportunities."
            }
          ]
        },
        {
          "id": 22,
          "question": "Able to profit during pandemics?",
          "options": [
            {
              "text": "Yes",
              "result": "Your business is resilient and can thrive in challenging environments."
            },
            {
              "text": "No",
              "result": "Building resilience can ensure continuity and profitability during crises."
            }
          ]
        }
      ]
    },
    {
      "section": "Weaknesses",
      "questions": [
        {
          "id": 1,
          "question": "Obsolete, narrow product lines?",
          "options": [
            {
              "text": "Yes",
              "result": "Limited product variety can reduce market appeal and revenue streams."
            },
            {
              "text": "No",
              "result": "Your product lines are diverse and relevant to market demands."
            }
          ]
        },
        {
          "id": 2,
          "question": "Prone to loss during pandemics?",
          "options": [
            {
              "text": "Yes",
              "result": "Lack of crisis resilience can lead to significant financial losses."
            },
            {
              "text": "No",
              "result": "Your business model is adaptable to challenges like pandemics."
            }
          ]
        },
        {
          "id": 3,
          "question": "Rising manufacturing costs?",
          "options": [
            {
              "text": "Yes",
              "result": "Increased costs can reduce profitability and pricing competitiveness."
            },
            {
              "text": "No",
              "result": "Manufacturing costs are well-controlled, ensuring efficiency."
            }
          ]
        },
        {
          "id": 4,
          "question": "Decline in R&D innovations?",
          "options": [
            {
              "text": "Yes",
              "result": "Limited innovation can hinder growth and market competitiveness."
            },
            {
              "text": "No",
              "result": "Strong R&D efforts are driving continuous innovation."
            }
          ]
        },
        {
          "id": 5,
          "question": "Poor marketing skills?",
          "options": [
            {
              "text": "Yes",
              "result": "Weak marketing can limit brand visibility and customer acquisition."
            },
            {
              "text": "No",
              "result": "Your marketing strategies effectively attract and retain customers."
            }
          ]
        },
        {
          "id": 6,
          "question": "Poor materials management systems?",
          "options": [
            {
              "text": "Yes",
              "result": "Inefficient materials management increases waste and costs."
            },
            {
              "text": "No",
              "result": "Materials management is efficient, reducing waste and improving operations."
            }
          ]
        },
        {
          "id": 7,
          "question": "Poor reputation?",
          "options": [
            {
              "text": "Yes",
              "result": "Negative reputation can damage customer trust and sales."
            },
            {
              "text": "No",
              "result": "Your business enjoys a positive reputation among stakeholders."
            }
          ]
        },
        {
          "id": 8,
          "question": "High cost structure?",
          "options": [
            {
              "text": "Yes",
              "result": "High costs reduce margins and limit pricing flexibility."
            },
            {
              "text": "No",
              "result": "Your cost structure is optimized for profitability."
            }
          ]
        },
        {
          "id": 9,
          "question": "Loss of customer goodwill?",
          "options": [
            {
              "text": "Yes",
              "result": "Losing customer goodwill can result in churn and reduced sales."
            },
            {
              "text": "No",
              "result": "Your business maintains strong relationships with customers."
            }
          ]
        },
        {
          "id": 10,
          "question": "Inadequate information systems?",
          "options": [
            {
              "text": "Yes",
              "result": "Weak IT systems can lead to inefficiencies and poor decision-making."
            },
            {
              "text": "No",
              "result": "Your information systems are effective and well-integrated."
            }
          ]
        },
        {
          "id": 11,
          "question": "Inadequate human resources?",
          "options": [
            {
              "text": "Yes",
              "result": "Inadequate staffing can reduce productivity and performance."
            },
            {
              "text": "No",
              "result": "Your workforce is well-equipped to meet business needs."
            }
          ]
        },
        {
          "id": 12,
          "question": "Lack of access to distribution channels?",
          "options": [
            {
              "text": "Yes",
              "result": "Limited distribution reduces market reach and sales."
            },
            {
              "text": "No",
              "result": "Your business has effective distribution channels."
            }
          ]
        },
        {
          "id": 13,
          "question": "Lack of access to natural resources?",
          "options": [
            {
              "text": "Yes",
              "result": "Limited resources can impact production and growth."
            },
            {
              "text": "No",
              "result": "Your business has sufficient access to required resources."
            }
          ]
        },
        {
          "id": 14,
          "question": "Loss of brand name capital?",
          "options": [
            {
              "text": "Yes",
              "result": "Losing brand value can hurt loyalty and customer engagement."
            },
            {
              "text": "No",
              "result": "Your brand remains strong and recognizable."
            }
          ]
        },
        {
          "id": 15,
          "question": "Lack of patent protection?",
          "options": [
            {
              "text": "Yes",
              "result": "Lack of patents can expose products to imitation."
            },
            {
              "text": "No",
              "result": "Your patents provide strong intellectual property protection."
            }
          ]
        },
        {
          "id": 16,
          "question": "Growth without direction?",
          "options": [
            {
              "text": "Yes",
              "result": "Unplanned growth can lead to inefficiencies and confusion."
            },
            {
              "text": "No",
              "result": "Your growth strategy is well-aligned with business goals."
            }
          ]
        },
        {
          "id": 17,
          "question": "Poor product innovation?",
          "options": [
            {
              "text": "Yes",
              "result": "Weak innovation reduces competitiveness and market relevance."
            },
            {
              "text": "No",
              "result": "Product innovation is a strength of your business."
            }
          ]
        },
        {
          "id": 18,
          "question": "Inconsistent operations?",
          "options": [
            {
              "text": "Yes",
              "result": "Operational inconsistencies can affect performance and quality."
            },
            {
              "text": "No",
              "result": "Your operations are consistent and reliable."
            }
          ]
        },
        {
          "id": 19,
          "question": "Inadequate organizational structure?",
          "options": [
            {
              "text": "Yes",
              "result": "Poor structure can hinder communication and efficiency."
            },
            {
              "text": "No",
              "result": "Your organizational structure supports effective operations."
            }
          ]
        },
        {
          "id": 20,
          "question": "Inappropriate control systems?",
          "options": [
            {
              "text": "Yes",
              "result": "Weak controls can lead to risks and inefficiencies."
            },
            {
              "text": "No",
              "result": "Your control systems are robust and effective."
            }
          ]
        },
        {
          "id": 21,
          "question": "High conflict and politics?",
          "options": [
            {
              "text": "Yes",
              "result": "Internal conflicts can reduce collaboration and performance."
            },
            {
              "text": "No",
              "result": "Your organization maintains a positive work environment."
            }
          ]
        },
        {
          "id": 22,
          "question": "Poor financial management?",
          "options": [
            {
              "text": "Yes",
              "result": "Weak financial management can jeopardize profitability."
            },
            {
              "text": "No",
              "result": "Your financial management practices are sound."
            }
          ]
        }
      ]
    },
    {
      "section": "Opportunities",
      "questions": [
        {
          "id": 1,
          "question": "Expand core business(es)?",
          "options": [
            {
              "text": "Yes",
              "result": "Expanding core operations can boost revenue and market share."
            },
            {
              "text": "No",
              "result": "Focusing on existing business levels without expansion for now."
            }
          ]
        },
        {
          "id": 2,
          "question": "Exploit new market segments?",
          "options": [
            {
              "text": "Yes",
              "result": "Entering new segments can unlock hidden revenue opportunities."
            },
            {
              "text": "No",
              "result": "Staying focused on current target markets."
            }
          ]
        },
        {
          "id": 3,
          "question": "Arrival of new technologies?",
          "options": [
            {
              "text": "Yes",
              "result": "Leveraging new technologies can drive innovation and efficiency."
            },
            {
              "text": "No",
              "result": "Current technology solutions are adequate."
            }
          ]
        },
        {
          "id": 4,
          "question": "Removal of international trade barriers?",
          "options": [
            {
              "text": "Yes",
              "result": "Lower trade barriers can open new export opportunities."
            },
            {
              "text": "No",
              "result": "No significant changes in international trade policies relevant to your business."
            }
          ]
        },
        {
          "id": 5,
          "question": "Exploit unfulfilled customer needs?",
          "options": [
            {
              "text": "Yes",
              "result": "Meeting unmet needs can increase customer satisfaction and loyalty."
            },
            {
              "text": "No",
              "result": "Current offerings align well with customer needs."
            }
          ]
        },
        {
          "id": 6,
          "question": "Widen new market segments?",
          "options": [
            {
              "text": "Yes",
              "result": "Expanding into new segments can boost business growth."
            },
            {
              "text": "No",
              "result": "Current segments provide sufficient opportunities."
            }
          ]
        },
        {
          "id": 7,
          "question": "Extend cost or differentiation advantage?",
          "options": [
            {
              "text": "Yes",
              "result": "Strengthening these advantages improves competitiveness."
            },
            {
              "text": "No",
              "result": "Current strategies are effective as they are."
            }
          ]
        },
        {
          "id": 8,
          "question": "Diversify into new growth businesses?",
          "options": [
            {
              "text": "Yes",
              "result": "Diversification can reduce risk and increase revenue streams."
            },
            {
              "text": "No",
              "result": "Focusing on core business activities for now."
            }
          ]
        },
        {
          "id": 9,
          "question": "Expand into foreign markets?",
          "options": [
            {
              "text": "Yes",
              "result": "International expansion can create new growth avenues."
            },
            {
              "text": "No",
              "result": "Staying focused on domestic markets for the moment."
            }
          ]
        },
        {
          "id": 10,
          "question": "Apply R&D skills in new areas?",
          "options": [
            {
              "text": "Yes",
              "result": "Exploring new areas with R&D can boost innovation."
            },
            {
              "text": "No",
              "result": "R&D will remain focused on current projects."
            }
          ]
        },
        {
          "id": 11,
          "question": "Enter new related businesses?",
          "options": [
            {
              "text": "Yes",
              "result": "Entering related businesses can increase market synergies."
            },
            {
              "text": "No",
              "result": "Staying focused on existing business operations."
            }
          ]
        },
        {
          "id": 12,
          "question": "Vertically integrate forward?",
          "options": [
            {
              "text": "Yes",
              "result": "Forward integration can enhance control over the distribution process."
            },
            {
              "text": "No",
              "result": "Maintaining the current level of control over distribution."
            }
          ]
        },
        {
          "id": 13,
          "question": "Vertically integrate backward?",
          "options": [
            {
              "text": "Yes",
              "result": "Backward integration can secure key inputs and reduce costs."
            },
            { "text": "No", "result": "Relying on existing suppliers for now." }
          ]
        },
        {
          "id": 14,
          "question": "Integrate corporate portfolio?",
          "options": [
            {
              "text": "Yes",
              "result": "Integration can optimize portfolio performance."
            },
            {
              "text": "No",
              "result": "Current portfolio management practices are sufficient."
            }
          ]
        },
        {
          "id": 15,
          "question": "Lower barriers to entry?",
          "options": [
            {
              "text": "Yes",
              "result": "Reduced barriers can attract new opportunities."
            },
            {
              "text": "No",
              "result": "Barriers remain challenging but manageable."
            }
          ]
        },
        {
          "id": 16,
          "question": "Acquire foreign competitors?",
          "options": [
            {
              "text": "Yes",
              "result": "Acquisitions can strengthen market position and reduce competition."
            },
            {
              "text": "No",
              "result": "Acquisitions are not a strategic priority at the moment."
            }
          ]
        },
        {
          "id": 17,
          "question": "Increase product innovations?",
          "options": [
            {
              "text": "Yes",
              "result": "More innovations can enhance competitive advantage."
            },
            { "text": "No", "result": "Current products are performing well." }
          ]
        },
        {
          "id": 18,
          "question": "Seek fast market growth?",
          "options": [
            {
              "text": "Yes",
              "result": "Pursuing rapid growth can increase market share."
            },
            {
              "text": "No",
              "result": "Focusing on sustainable, steady growth instead."
            }
          ]
        },
        {
          "id": 19,
          "question": "Growth during pandemics?",
          "options": [
            {
              "text": "Yes",
              "result": "Pandemic conditions can present unique growth opportunities."
            },
            {
              "text": "No",
              "result": "Focus is on stability rather than growth during pandemics."
            }
          ]
        }
      ]
    },
    {
      "section": "Threats",
      "questions": [
        {
          "id": 1,
          "question": "Attacks on core business(es)?",
          "options": [
            {
              "text": "Yes",
              "result": "External threats could disrupt key operations or revenue streams."
            },
            { "text": "No", "result": "Core businesses are currently secure." }
          ]
        },
        {
          "id": 2,
          "question": "Pandemics cause business interruption?",
          "options": [
            {
              "text": "Yes",
              "result": "Pandemics could disrupt supply chains and operations."
            },
            {
              "text": "No",
              "result": "Pandemic-related risks are under control."
            }
          ]
        },
        {
          "id": 3,
          "question": "Increases in domestic competition?",
          "options": [
            {
              "text": "Yes",
              "result": "Increased competition can pressure market share and profitability."
            },
            { "text": "No", "result": "Competition levels remain stable." }
          ]
        },
        {
          "id": 4,
          "question": "Shift in consumer tastes?",
          "options": [
            {
              "text": "Yes",
              "result": "Changes in consumer preferences could impact demand."
            },
            {
              "text": "No",
              "result": "Consumer preferences align with current offerings."
            }
          ]
        },
        {
          "id": 5,
          "question": "Emergence of substitute products?",
          "options": [
            {
              "text": "Yes",
              "result": "Substitute products could threaten market position."
            },
            {
              "text": "No",
              "result": "Current products have a strong market presence."
            }
          ]
        },
        {
          "id": 6,
          "question": "New regulations?",
          "options": [
            {
              "text": "Yes",
              "result": "New regulations could increase compliance costs."
            },
            { "text": "No", "result": "Current regulations are manageable." }
          ]
        },
        {
          "id": 7,
          "question": "Increased trade barriers?",
          "options": [
            {
              "text": "Yes",
              "result": "Trade barriers could limit foreign market access."
            },
            { "text": "No", "result": "Trade barriers remain unchanged." }
          ]
        },
        {
          "id": 8,
          "question": "Increases in foreign competition?",
          "options": [
            {
              "text": "Yes",
              "result": "Foreign competitors could capture market share."
            },
            { "text": "No", "result": "Foreign competition is stable." }
          ]
        },
        {
          "id": 9,
          "question": "Fall in barriers to entry?",
          "options": [
            {
              "text": "Yes",
              "result": "Easier market entry could attract new competitors."
            },
            { "text": "No", "result": "Barriers to entry remain high." }
          ]
        },
        {
          "id": 10,
          "question": "Rise in new or substitute products?",
          "options": [
            {
              "text": "Yes",
              "result": "New products could shift customer demand away."
            },
            {
              "text": "No",
              "result": "Current offerings maintain strong customer interest."
            }
          ]
        },
        {
          "id": 11,
          "question": "Increase in industry rivalry?",
          "options": [
            {
              "text": "Yes",
              "result": "Intensified rivalry could reduce profitability."
            },
            { "text": "No", "result": "Industry rivalry remains moderate." }
          ]
        },
        {
          "id": 12,
          "question": "Higher labor costs?",
          "options": [
            {
              "text": "Yes",
              "result": "Rising labor costs could impact profitability."
            },
            { "text": "No", "result": "Labor costs remain stable." }
          ]
        },
        {
          "id": 13,
          "question": "New forms of industry competition?",
          "options": [
            {
              "text": "Yes",
              "result": "Emerging competition could disrupt the market."
            },
            {
              "text": "No",
              "result": "Current competition landscape remains unchanged."
            }
          ]
        },
        {
          "id": 14,
          "question": "Potential for takeover?",
          "options": [
            {
              "text": "Yes",
              "result": "Takeover threats could destabilize the company."
            },
            {
              "text": "No",
              "result": "The company is secure from hostile takeovers."
            }
          ]
        },
        {
          "id": 15,
          "question": "Susceptible to corporate raiders?",
          "options": [
            {
              "text": "Yes",
              "result": "Corporate raiders could pose governance risks."
            },
            { "text": "No", "result": "Corporate raiding risks are minimal." }
          ]
        },
        {
          "id": 16,
          "question": "Changes in demographic factors?",
          "options": [
            {
              "text": "Yes",
              "result": "Demographic shifts could affect demand."
            },
            { "text": "No", "result": "Demographic trends remain favorable." }
          ]
        },
        {
          "id": 17,
          "question": "Negative economic factors?",
          "options": [
            {
              "text": "Yes",
              "result": "Economic downturns could hurt business performance."
            },
            { "text": "No", "result": "Economic conditions are stable." }
          ]
        },
        {
          "id": 18,
          "question": "Increase in political risk?",
          "options": [
            {
              "text": "Yes",
              "result": "Political instability could impact operations."
            },
            { "text": "No", "result": "Political risks are low." }
          ]
        },
        {
          "id": 19,
          "question": "Rising labor costs?",
          "options": [
            {
              "text": "Yes",
              "result": "Higher wages could increase operating costs."
            },
            { "text": "No", "result": "Labor costs remain stable." }
          ]
        },
        {
          "id": 20,
          "question": "Slow market growth?",
          "options": [
            {
              "text": "Yes",
              "result": "Slow market growth could limit expansion opportunities."
            },
            { "text": "No", "result": "Market growth remains favorable." }
          ]
        }
      ]
    }
  ],
}

const SwotPage = () => {
  const [activeTab, setActiveTab] = useState(0); // Current tab index
  const [responses, setResponses] = useState({}); // Store user responses
  const [submitted, setSubmitted] = useState(false); // Check if form is submitted

  const handleOptionChange = (section, questionId, optionText) => {
    setResponses((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [questionId]: optionText,
      },
    }));
  };

  const isSectionCompleted = (section) => {
    const questions = swotData.swotQuestions.find((q) => q.section === section).questions;
    return questions.every((q) => responses[section]?.[q.id]);
  };

  const handleSubmit = () => {
    const allSectionsCompleted = swotData.swotQuestions.every((section) => isSectionCompleted(section.section));

    if (allSectionsCompleted) {
      setSubmitted(true);
    } else {
      alert('Please complete all sections before submitting.');
    }
  };

  const handleRetake = () => {
    setResponses({});
    setSubmitted(false);
  };

  const renderResults = (section) => {
    const questions = swotData.swotQuestions.find((q) => q.section === section).questions;

    return questions.map(({ id, question, options }) => {
      const userResponse = responses[section]?.[id];
      const result = options.find((opt) => opt.text === userResponse)?.result;
      return (
        <div key={id}>
          <p><strong>{question}</strong></p>
          <p>{result || 'No response given.'}</p>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="tabs">
        {swotData.swotQuestions.map((section, index) => (
          <button
            key={section.section}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {section.section}
          </button>
        ))}
      </div>

      {!submitted ? (
        <div className="questions">
          {swotData.swotQuestions[activeTab].questions.map(({ id, question, options }) => (
            <div key={id} className="question">
              <p className='questionText'><strong>{question}</strong></p>
              {options.map((option) => (
                <label key={option.text}>
                  <input
                    type="radio"
                    name={`question-${id}`}
                    value={option.text}
                    checked={responses[swotData.swotQuestions[activeTab].section]?.[id] === option.text}
                    onChange={() =>
                      handleOptionChange(swotData.swotQuestions[activeTab].section, id, option.text)
                    }
                  />
                  {option.text}
                </label>
              ))}
            </div>
          ))}
          <button onClick={handleSubmit} className='sub'>Submit</button>
        </div>
      ) : (
        <div className="results">
          <h2>{swotData.swotQuestions[activeTab].section} Results</h2>
          {renderResults(swotData.swotQuestions[activeTab].section)}
          <button onClick={handleRetake}>Retake Test</button>
        </div>
      )}
    </div>
  );
};

export default SwotPage;
