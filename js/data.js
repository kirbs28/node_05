/* =========================================================
   TEAM DATA. Edit here. Items with todo:true show a dashed
   "to be added" style until the real content is filled in.
   photo: put a data: URI or a relative path ("img/kirby.jpg").
   ========================================================= */
var TEAM = [
  {
    id:"kirby", nick:"Kirby", first:"Kirby", last:"Ramilo", initials:"KR", color:"#3cf2a6", photo:"images/kirby.png",
    roles:[
      "BSIT Student · TUP Manila",
      "President, University Student Government",
      "Core Lead, AI & Machine Learning · Google Developer Groups on Campus TUP Manila"
    ],
    intro:["BSIT student working across cybersecurity, machine learning, AI and networking."],
    signature:"",
    card:{Program:"BS Information Technology", Campus:"TUP Manila", Lead:"USG · GDG on Campus"},
    highlights:["University Student Government President","GDG on Campus TUP Manila · AI/ML Core Lead"],
    stack:[
      {group:"Languages", items:["C++","Python","Java"]},
      {group:"Frameworks & UI", items:["React.js","React Native","Tailwind CSS"]},
      {group:"Platforms & Cloud", items:["GitHub","Vercel","Supabase","AWS"]},
      {group:"AI tools", items:["Antigravity","Claude"]}
    ],
    focus:[{t:"Cybersecurity"},{t:"Machine Learning"},{t:"Artificial Intelligence"},{t:"Networking"}],
    projects:[
      {name:"clear.Img", file:"clear.img", meta:"Web app · TypeScript", status:"", desc:"A background remover that runs entirely on your own device using WebGPU. Nothing is uploaded or stored online: images stay local to your browser.", tags:["TypeScript","WebGPU","Privacy-first"],
        built:["Background removal powered by the user's GPU through WebGPU","No server upload: images are processed and kept locally","No files saved online"]},
      {name:"Multi-modal AI Chatbox", file:"Multi-modal-AI-Chatbox", meta:"AI · JavaScript", status:"", desc:"A ChatGPT-style chatbox that combines several open-source AI models with free usage, so there are no paid token limits.", tags:["AI","Open-source models","JavaScript"],
        built:["Chat interface similar to ChatGPT","Connects multiple open-source AI models in one chatbox","Uses models with free tokens"]},
      {name:"Restaurant POS with Stock Forecasting", file:"POS-System-with-Linear-Regression-Forecasting-of-stocks", meta:"Machine learning · JavaScript", status:"", desc:"A point-of-sale system for restaurants that records items sold and uses linear regression to forecast stock needs three months ahead, so ingredients and materials match the demand for each menu item.", tags:["POS","Linear regression","Forecasting","JavaScript"],
        built:["Point-of-sale for menu items sold","Linear regression forecast of stock, 3 months ahead","Projects the ingredients and materials needed to meet demand per product or menu item"]},
      {name:"Opioid & Sedative Dispensing Tracker", file:"Opioid-Sedative-Dispensing-Tracker", meta:"Data analysis · Python", status:"", desc:"A tracker for the dispensing of opioids and sedatives that flags outliers in prescriptions of controlled substances and shows which specific drugs account for the highest percentages.", tags:["Python","Outlier detection","Healthcare data"],
        built:["Tracks opioid and sedative usage","Highlights outliers in prescribing","Shows the highest-percentage drugs"]},
      {name:"node/05 Group Portfolio", file:"node_05", meta:"Web · JavaScript", status:"", desc:"A group portfolio that brings together the individual portfolios of five BSIT students from TUP Manila.", tags:["JavaScript","HTML","CSS"]},
      {name:"Water Demand Forecast", file:"water-forecast", meta:"Machine learning · Python", status:"", desc:"A trio-model forecasting project that compares SARIMA, Random Forest and XGBoost to find the best model for forecasting water demand in specific areas.", tags:["SARIMA","Random Forest","XGBoost","Forecasting"],
        built:["Compares three models: SARIMA, Random Forest and XGBoost","Finds which model forecasts water demand best","Forecasts demand for specific areas"]}
    ],
    contact:[
      {type:"github", label:"GitHub", value:"github.com/kirbs28", href:"https://github.com/kirbs28"},
      {type:"linkedin", label:"LinkedIn", value:"linkedin.com/in/kirbyramilo", href:"https://www.linkedin.com/in/kirbyramilo/"}
    ]
  },
  {
    id:"mel", nick:"Mel", first:"Mel Fredrick", last:"Sablan", initials:"MS", color:"#ffb547", photo:"",
    roles:[
      "BSIT Student · TUP Manila",
      "Cloud & AI on AWS",
      "Vendor Master Data Intern · Cambridge University Press & Assessment"
    ],
    intro:[
      "I bridge the gap between technical and non-technical people, turning complex cloud and data work into solutions that are clear and easy to use.",
      "I built and deployed a full-stack web app on EC2, Amplify and RDS, with a retrieval-augmented generation (RAG) chatbot on Amazon Bedrock. Good cloud and AI work starts with good data, and that is where my day-to-day work comes from."
    ],
    signature:"From AWS apps to an AI chatbot on Bedrock, I build things people can actually use.",
    card:{Program:"BS Information Technology", Campus:"TUP Manila", Base:"Tanza, Cavite"},
    highlights:[
      "Vendor Master Data Intern · Cambridge University Press & Assessment (Mar–Jun 2026)",
      "Customer Service Associate · Amazon (May 2024–Apr 2026)",
      "AWS Agentic AI Demonstrated (Oct 2026)"
    ],
    stack:[
      {group:"AWS Cloud", items:["AWS EC2","AWS Amplify","Amazon RDS","Amazon Bedrock","Linux / Unix"]},
      {group:"Languages & Web", items:["Python","React JS","CSS","Flask"]},
      {group:"Data & Analytics", items:["SQL","MySQL","SQLite","Power BI","Tableau","R","Excel"]},
      {group:"Platforms", items:["SAP ERP","Zendesk"]}
    ],
    focus:[
      {t:"Cloud on AWS", d:"Deploying apps on EC2, Amplify and RDS."},
      {t:"AI & RAG Chatbots", d:"Conversational AI on Amazon Bedrock."},
      {t:"Data Governance & Quality", d:"Master data management, validation and root cause analysis."},
      {t:"Analytics & Reporting", d:"KPI dashboards and SLA metrics in Power BI and Tableau."}
    ],
    projects:[
      {name:"Barangay Website with Online Services & AI Chatbot", file:"barangay-portal", meta:"Full-stack · AWS", status:"Deployed",
       desc:"A full-stack web platform for a simulated barangay's online services, with a RAG chatbot built on Amazon Bedrock that answers resident inquiries. Developed and deployed end to end.",
       tags:["Amazon Bedrock","EC2","AWS Amplify","RDS / MySQL","Python","React JS","CSS"]},
      {name:"Personal Portfolio Website", file:"portfolio.html", meta:"Web", status:"Live",
       desc:"A single-file, responsive portfolio with a light/dark theme toggle, smooth-scroll navigation and an accessible, fast-loading layout.",
       tags:["HTML","CSS","JavaScript"]}
    ],
    contact:[
      {type:"email", label:"Email", value:"melsablan15@gmail.com", href:"mailto:melsablan15@gmail.com"},
      {type:"linkedin", label:"LinkedIn", value:"linkedin.com/in/mel-fredrick-sablan", href:"https://www.linkedin.com/in/mel-fredrick-sablan"},
      {type:"pin", label:"Location", value:"Tanza, Cavite, Philippines", href:""}
    ]
  },
  {
    id:"carl", nick:"Carl", first:"Justine Carl", last:"Fabian", initials:"JC", color:"#5ab8ff", photo:"images/carl.png",
    roles:[
      "BSIT Student · TUP Manila",
      "Software Engineer · systems, automation & networks"
    ],
    intro:[
      "Carl approaches technology the way he approaches everything: with discipline, order and precision.",
      "He builds robust systems, automations and networks designed to perform reliably under pressure."
    ],
    signature:"The art of precision in technology. Perfection is power.",
    card:{Program:"BS Information Technology", Campus:"TUP Manila", Motto:"Passion. Grit. Progress."},
    highlights:[
      "Discipline: clear processes and resilient deployments",
      "Precision: clean architecture and careful testing",
      "Trust: security-first thinking and observability"
    ],
    stack:[
      {group:"Tech stack", items:["Add Carl's stack"], todo:true}
    ],
    focus:[
      {t:"AI & Automation"},{t:"Web Systems"},{t:"Network & Infrastructure"},{t:"Applications"}
    ],
    projects:[
      {name:"AI & Automation project", file:"ai-automation", meta:"AI & Automation", status:"", desc:"Project details to be added.", tags:[], todo:true},
      {name:"Web Systems project", file:"web-systems", meta:"Web Systems", status:"", desc:"Project details to be added.", tags:[], todo:true},
      {name:"Network & Infra project", file:"net-infra", meta:"Network & Infra", status:"", desc:"Project details to be added.", tags:[], todo:true},
      {name:"Applications project", file:"apps", meta:"Applications", status:"", desc:"Project details to be added.", tags:[], todo:true}
    ],
    contact:[
      {type:"email", label:"Email", value:"repivstiih@gmail.com", href:"mailto:repivstiih@gmail.com"},
      {type:"phone", label:"Phone", value:"(02) 8706 7966", href:"tel:+63287067966"},
      {type:"facebook", label:"Facebook", value:"Justine Carl", href:"", todo:true}
    ]
  },
  {
    id:"althea", nick:"Althea", first:"Althea Marie", last:"Laurente", initials:"AL", color:"#ff6b81", photo:"",
    roles:[
      "BSIT 4A · TUP Manila, Ermita",
      "Web systems for real communities",
      "Open to internships"
    ],
    intro:[
      "IT student building web systems for real communities, starting with the parishes and churches around me. I like software that is simple to use and honest with people's data.",
      "Most of my work starts with a real group of users: parishioners, parish staff and church volunteers. Before writing code, I ask them what they need. I'm now moving into building and training machine learning models, and studying professional practice in IT."
    ],
    signature:"hi, I build things for real people.",
    card:{Program:"BS Information Technology", Year:"4th year · 4A", Campus:"TUP Manila"},
    highlights:[
      "50 survey respondents shaped our capstone's requirements",
      "3 user roles designed into SacraDigit: parishioner, parish admin and IT"
    ],
    stack:[
      {group:"Web", items:["HTML","CSS","JavaScript"]},
      {group:"Payments", items:["QR generation","GCash / Maya"]},
      {group:"Learning now", items:["Machine learning"]}
    ],
    focus:[
      {t:"Web Development", d:"Form and payment flows, role-based system design."},
      {t:"Systems Analysis & User Research", d:"User surveys, requirements and technical documentation."},
      {t:"Machine Learning", d:"Model evaluation, data leakage and fair evaluation."},
      {t:"IT Ethics", d:"ACM Code of Ethics, privacy and professional practice."}
    ],
    projects:[
      {name:"SacraDigit", file:"sacradigit/dashboard", meta:"Capstone · team", status:"In development",
       desc:"A parish management system that brings parish services online. Built around three user roles, each with its own view, with requirements validated by a 50-respondent survey before building.",
       tags:["Systems analysis","Role-based access","User research","Team project"],
       built:["Parishioner view: Mass intentions, certificate requests, announcements","Parish admin view: review and approve requests, schedule of services","IT view: user accounts and roles, backups, activity log"]},
      {name:"Church Donation Website", file:"give/donate", meta:"Personal", status:"In development",
       desc:"A giving site for a local church. Donors type an amount and the site generates a QR code for it, so they can pay from GCash or Maya. Free to run, with no business payment account needed.",
       tags:["Web development","QR generation","GCash / Maya","Form design"]}
    ],
    contact:[
      {type:"email", label:"Email", value:"your.email@example.com", href:"", todo:true}
    ]
  },
  {
    id:"kwiz", nick:"Kwiz", first:"Krizten Antoinette", last:"Lapuz", initials:"KL", color:"#c792ff", photo:"images/kwiz.png",
    roles:[
      "4th-year BSIT · TUP Manila · Dean's Lister",
      "UI/UX Designer & Web/Mobile Developer",
      "Open to internships"
    ],
    intro:[
      "4th-year BSIT student at TUP Manila who designs and builds web and mobile apps. With a background in graphic design, social media and journalism, I make products that are functional, well presented and easy to use.",
      "My approach: understand the audience and the brand first, then deliver designs that are visually appealing, functional and aligned with business goals."
    ],
    signature:"recipe: simple + useful + a little bit pretty.",
    card:{Program:"BS Information Technology", Campus:"TUP Manila", Base:"Metro Manila"},
    highlights:[
      "IT & E-Commerce Coordinator · LJ Farm Supply & General Merchandise (Aug 2024–Jan 2026)",
      "Girls Who Build PH · GDG on Campus TUP Manila · WIKA PH pioneer member",
      "TUPM Official Chess Team · joined SCUAA"
    ],
    stack:[
      {group:"Development", items:["React Native","Laravel","HTML · CSS · JS","Android","Git & GitHub"]},
      {group:"Design", items:["Figma","Canva"]},
      {group:"AI & dev tools", items:["Claude","Kiro","VS Code","Gemini","ChatGPT"]}
    ],
    focus:[
      {t:"UI/UX Design", d:"Interfaces and prototypes in Figma."},
      {t:"Web Development", d:"Front-end and storefront builds."},
      {t:"Mobile App Development", d:"Android apps with React Native."},
      {t:"Graphic Design & Branding", d:"Visual branding and social media content."}
    ],
    projects:[
      {name:"MySalapi", file:"mysalapi.app", meta:"Undergrad thesis · Android · 2026–2027", status:"In development",
       desc:"A team-built Android app for tracking personal finances, loans and shared group expenses.",
       tags:["Mobile","UI/UX","Thesis","Email API"],
       built:["Brevo email API integration for forgot-password recovery and registration emails","Login, registration and forgot-password screens with validation, show/hide toggle and a Terms & Conditions prompt","Ambagan partial payments and Favorite Billers with recurring bill reminders","Animated splash screen"]},
      {name:"StayCrafty", file:"staycrafty.html", meta:"Web development course · 2024–2025", status:"Completed",
       desc:"An e-commerce storefront for kawaii stationery, designed and developed end to end.",
       tags:["Web","E-commerce","Front-end"]},
      {name:"Finery Thread", file:"finery-thread.fig", meta:"Figma · mobile UI design", status:"Completed",
       desc:"A clothing-shop mobile app designed in Figma: a complete flow from onboarding and shopping to checkout and account settings.",
       tags:["Figma","UI/UX","Mobile","E-commerce"],
       built:["Onboarding, welcome, sign up and registration success screens","Home, shop, item detail, favorites and cart","Order summary, my orders and notifications","Profile and account settings"]},
      {name:"Kita-Kita", file:"kita-kita.plan", meta:"Group entrepreneurship project", status:"Concept",
       desc:"A business plan and concept for a sari-sari store management app, helping small neighborhood stores run smarter.",
       tags:["Business plan","App concept","Teamwork"]},
      {name:"kriznbows", file:"kriznbows.brand", meta:"Social media · branding", status:"Ongoing",
       desc:"Her own thrift business brand: content, visuals and community-building on social media from start to finish.",
       tags:["Social media","Branding","Canva"]}
    ],
    contact:[
      {type:"linkedin", label:"LinkedIn", value:"linkedin.com/in/lapuzkriztenantoinette", href:"https://www.linkedin.com/in/lapuzkriztenantoinette/"},
      {type:"github", label:"GitHub", value:"github.com/krizxei", href:"https://github.com/krizxei"},
      {type:"instagram", label:"Instagram", value:"@kwiztenn", href:"https://www.instagram.com/kwiztenn/"},
      {type:"facebook", label:"Facebook", value:"kriztenantoinette.lapuz", href:"https://www.facebook.com/kriztenantoinette.lapuz"}
    ]
  }
];
