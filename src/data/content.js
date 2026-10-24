// Single source of truth for all page copy. Every component in src/components reads from here.
// PLACEHOLDER text: replace with your own details (photo path, email, links, bio, jobs, projects).

// used by Navbar, Hero, About, Contact, Footer
export const profile = {
  name: "Md Rashadul Islam",
  initials: "MRI",
  role: "Software Engineer · SDET",
  pitch: "Software engineer who builds the product and proves it works.",
  email: "rsrashad99@gmail.com",
  phone: "+8801959981909", // international format; used for tel: and the WhatsApp link
  phoneDisplay: "+880 1959 981909",
  cv: "/my_cv/Md-Rashadul-Islam-CV.pdf", // file in public/my_cv/; Download CV shows it in a pop-up first (CvViewer.jsx), download is inside the pop-up. Set to null to show a do-nothing button
  photo: "/images/profile.webp", // smaller copy of profile.png (kept as the original); file lives in public/images/; set to null to show initials instead
  github: "https://github.com/rashadkhan97",
  linkedin: "https://www.linkedin.com/in/rashadkhan97",
};

// Contact.jsx copy; whatsappMessage is the text pre-filled when a visitor opens the WhatsApp chat
export const contact = {
  whatsappMessage:
    "Hi Rashadul, I found your portfolio and would like to talk.",
  eyebrow: "Let's connect",
  heading: "Let's build something reliable.",
  text: "I'm actively looking for QA and SDET opportunities. I reply to every message.",
  location: "Dhaka, Bangladesh",
};

// Navbar + Footer; id must match the section element ids
export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

// Quotes.jsx strip under the hero. Quotes change by themselves, in a different order on every visit.
// quoteSeconds = how long each quote stays on screen; quoteFadeSeconds = length of each fade (out, then in).
export const quoteSeconds = 8;
export const quoteFadeSeconds = 1;
export const quotes = [
  {
    text: "Program testing can be used to show the presence of bugs, but never to show their absence.",
    author: "Edsger W. Dijkstra",
  },
  {
    text: "Testing is the process of executing a program with the intent of finding errors.",
    author: "Glenford Myers",
  },
  {
    text: "Legacy code is code without tests.",
    author: "Michael Feathers",
  },
  {
    text: "Everyone knows that debugging is twice as hard as writing a program in the first place.",
    author: "Brian Kernighan",
  },
  {
    text: "Code without tests is broken by design.",
    author: "Jacob Kaplan-Moss",
  },
  {
    text: "Plan to throw one away; you will, anyhow.",
    author: "Fred Brooks",
  },
  {
    text: "The only way to go fast is to go well.",
    author: "Robert C. Martin",
  },
  {
    text: "Verification: are we building the product right? Validation: are we building the right product?",
    author: "Barry Boehm",
  },
  {
    text: "Adding manpower to a late software project makes it later.",
    author: "Fred Brooks",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
];

// About.jsx
export const about = {
  heading: "Software engineer who builds and tests",
  paragraphs: [
    "I'm Rashadul, a software engineer based in Dhaka. I'm early in my career, and I've worked on both sides of the job: building web applications and making sure they work. I can build a feature, then test it the way a user would, through the interface and through the API.",
    "I write automated tests, look for defects, and report them clearly so they can be fixed quickly. I use AI tools to understand unfamiliar code, track down bugs, and draft test scenarios, and I always check what they give me myself. I mostly work with JavaScript, TypeScript, React, and Node.js, and I test with Postman, Playwright, and Selenium.",
    "I'm looking for a team where I can build and test together, and grow into a well-rounded software engineer. I'm especially interested in SDET roles, because I like caring about the whole product, not just one part of it.",
  ],
  cards: [
    {
      title: "Tests that run themselves",
      text: "My Playwright suite runs on every push through GitHub Actions, so a broken change shows up right away.",
    },
    {
      title: "Numbers, not guesses",
      text: "My k6 load tests set clear limits: under 1% failed requests and p95 under 1000 ms.",
    },
    {
      title: "Clear bug reports",
      text: "Every bug I report has steps to reproduce, severity and priority, with screenshots or video.",
    },
  ],
};

// Skills.jsx; one card per group
// groups and wording follow the instructor's suggested technical skills list
export const skillGroups = [
  {
    title: "Software Testing & Quality Engineering",
    items: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "API Testing",
      "Integration Testing",
      "Test Case Design",
      "Bug Reporting",
      "Playwright",
      "Selenium",
      "Postman",
      "Newman",
      "TestNG",
      "REST Assured",
      "Mocha",
      "Chai",
      "Axios",
      "JMeter",
      "k6",
    ],
  },
  {
    title: "AI-Assisted Software Engineering",
    items: [
      "AI-Assisted Coding",
      "AI-Assisted Debugging",
      "Code Analysis",
      "Test Scenario Generation",
      "Test Case Generation",
      "Prompt Engineering",
      "Context Engineering",
      "Requirement Analysis",
      "Troubleshooting",
    ],
  },
  {
    title: "Automation & Engineering",
    items: [
      "UI Test Automation",
      "API Test Automation",
      "Git",
      "GitHub",
      // "CI/CD Fundamentals", // hidden for now; remove the // to show it again
      "Docker Fundamentals",
      "Basic Linux",
      "Basic Deployment",
    ],
  },
  {
    title: "Software Development",
    items: [
      "Java",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "REST API Development",
      "MySQL",
    ],
  },
  {
    title: "Tools",
    items: [
      "GitHub",
      "Jira",
      "Postman",
      "VS Code",
      "Claude Code",
      "ChatGPT",
      "GitHub Copilot",
    ],
  },
];

// Experience.jsx; placeholder entry, add real jobs here
export const experience = [
  {
    role: "QA Engineer",
    company: "Company Name",
    location: "City, Country",
    period: "Mon YYYY - Present",
    bullets: [
      "Perform manual, functional, and regression testing across web applications.",
      "Validate APIs with Postman and report defects through structured test cases.",
      "Work with developers in Agile sprints to keep releases reliable.",
    ],
  },
];

// Projects.jsx; the course projects (the blog backend and frontend are one card), ordered by hiring demand. link goes to the GitHub repository
// (or elsewhere); linkLabel is optional and defaults to "View on GitHub"
export const projects = [
  {
    label: "Test Automation",
    category: "Playwright · TypeScript",
    title: "dMoney Portal UI Automation",
    description:
      "End-to-end UI automation of a mobile-money web portal, covering one full agent journey from sign-up to a statement export.",
    bullets: [
      "13-test regression suite (9 positive, 4 negative) plus a 9-test smoke suite chosen by tag.",
      "Page Object Model, Faker test data, and the Gmail API to read OTP and reset-link emails.",
      "HTML report and a GitHub Actions workflow that runs the suite on every push.",
    ],
    tags: ["Playwright", "TypeScript", "Page Object Model", "GitHub Actions"],
    link: "https://github.com/rashadkhan97/Playwright-Automation-DMoney",
  },
  {
    label: "API Testing",
    category: "Postman · Newman",
    title: "dMoney API Tests with Postman and Newman",
    description:
      "A Postman collection and a Newman runner that test the User and Transaction APIs of a demo mobile financial service.",
    bullets: [
      "Six-step scenario from admin login to cash-out and merchant payment.",
      "Newman with the htmlextra reporter produces a shareable HTML report.",
      "Published Postman API documentation.",
    ],
    tags: ["Postman", "Newman", "htmlextra", "API Testing"],
    link: "https://github.com/rashadkhan97/dMoney_Postman-API-with-Newman_B19",
  },
  {
    label: "Integration Testing",
    category: "Mocha · Chai · Axios",
    title: "dMoney API Integration Tests with Mocha and Axios",
    description:
      "An integration test suite for the dMoney transaction flow, from admin login and user onboarding to deposits, money transfer, cash-out and merchant payment, run against a local API server.",
    bullets: [
      "21 chained scenarios in one Mocha spec, each reusing tokens and IDs from the earlier steps.",
      "Checks status codes, messages and fee rules: 2.5% agent commission, a flat 5 tk send-money fee, and the larger of 1% or 5 tk on cash-out and payment.",
      "Random phone numbers and emails on every run, plus OTP login steps for each user.",
    ],
    tags: ["Mocha", "Chai", "Axios", "Node.js", "Integration Testing"],
    link: "https://github.com/rashadkhan97/API-Integration-Testing-with-Mocha-and-Axios",
  },
  {
    label: "Full-Stack Development",
    category: "Next.js · Node.js · MySQL",
    title: "Blog Management Website",
    description:
      "A full-stack blog where guests read and search, users manage their posts, and admins manage everything.",
    bullets: [
      "Next.js 16, React 19 and Tailwind CSS 4 frontend, connected to its own REST API with no mock data.",
      "REST API on Node.js, Express and MySQL (Sequelize): JWT login, bcrypt-hashed passwords, role checks, and 13 endpoints with title and category search.",
      "Registration, login, password reset by email and avatar upload, plus admin tools to manage every blog and user.",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MySQL", "JWT"],
    link: "https://github.com/rashadkhan97/blogsite-using-NextJS-and-Tailwind",
  },
  {
    label: "Performance Testing",
    category: "k6 · JavaScript",
    title: "dMoney API Performance Testing",
    description:
      "Load tests on three transaction APIs (Deposit, Send Money, Payment) with six test users over a two-minute scenario.",
    bullets: [
      "Thresholds of under 1% failed requests and p95 under 1000 ms. The full run passed with 0% failures and p95 between 105 and 137 ms.",
      "A trial run without a database index had 13% failed requests, and the full run with the index had none.",
      "HTML report, k6 dashboard export and a Markdown comparison.",
    ],
    tags: ["k6", "JavaScript", "MySQL", "Performance Testing"],
    link: "https://github.com/rashadkhan97/K6-Performance-Testing_DMoney",
  },
  {
    label: "Manual Testing",
    category: "Test Design · Bug Reporting",
    title: "EasyPay Manual Testing",
    description:
      "Manual testing of a payment app: merchant and utility bill payments, and a loan system with repayment rules.",
    bullets: [
      "Positive and negative test cases for both features, across admin, agent, customer and merchant roles.",
      "Bug reports with description, steps to reproduce, severity and priority, backed by screenshots and videos.",
      "Written answers on acceptance criteria, task priority and a validation checklist.",
    ],
    tags: ["Manual Testing", "Test Cases", "Bug Reporting", "Excel"],
    link: "https://drive.google.com/drive/folders/1wdh-LXS7ZQ4AMtPBFm39phb_-7IL8s0m",
    linkLabel: "View on Google Drive",
  },
];

// Education.jsx; newest first. short + icon feed the journey strip (icon: msc, bsc, hsc, ssc);
// ongoing: true highlights the entry and shows "Ongoing" instead of a year
export const education = [
  {
    degree: "M.Sc. in CSE",
    school: "Bangladesh University of Professionals",
    location: "Dhaka, Bangladesh",
    year: "Ongoing",
    short: "M.Sc.",
    icon: "msc",
    ongoing: true,
  },
  {
    degree: "B.Sc. in CSE",
    school: "Bangladesh University of Business and Technology",
    location: "Dhaka, Bangladesh",
    year: "2024",
    short: "B.Sc.",
    icon: "bsc",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Savar Laboratory College",
    location: "Savar, Dhaka, Bangladesh",
    year: "2019",
    short: "HSC",
    icon: "hsc",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Mirpur Bangla School and College",
    location: "Dhaka, Bangladesh",
    year: "2017",
    short: "SSC",
    icon: "ssc",
  },
];

// Education.jsx; extra courses shown as certificate cards below the degrees, newest first.
// year can be "In progress" (shown in gold).
// file: the certificate image in public/my_Certificates/ (jpg or png); adds a "View Certificate" button that opens it
// in a new tab. Leave file out to show no button.
// type is optional and defaults to "Certificate of Completion".
export const certifications = [
  {
    title: "Full Stack SQA and Software Test Automation",
    issuer: "Road to SDET",
    year: "2026",
    file: "/my_Certificates/road-2-sdet-certificate.jpg",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    year: "2026",
    file: "/my_Certificates/claude-101-certificate.jpg",
  },
  {
    title: "SQL (Basic)",
    type: "Certificate of Accomplishment",
    issuer: "HackerRank",
    year: "2026",
    file: "/my_Certificates/sql-basic-certificate.jpg",
  },
  {
    title: "Java for Beginners: Learn All the Basics of Java",
    issuer: "Udemy",
    year: "2024",
    file: "/my_Certificates/java-for-beginners-certificate.jpg",
  },
];
