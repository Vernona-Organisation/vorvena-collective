const tests = {

    "Frontend Developer": {
        questions: [
            {
                type: "mcq",
                question: "Which HTML element is the most appropriate for an action that submits a form?",
                options: [
                    "<div>",
                    "<button>",
                    "<span>",
                    "<section>"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "A flex child contains a very long text string and causes horizontal overflow. Which CSS property is commonly needed on the flex child to allow it to shrink correctly?",
                options: [
                    "position: relative",
                    "overflow: visible",
                    "min-width: 0",
                    "display: block"
                ],
                answer: 2
            },
            {
                type: "mcq",
                question: "Which technique is generally most appropriate for improving the loading performance of images that are below the initial viewport?",
                options: [
                    "Increase image dimensions",
                    "Disable CSS",
                    "Lazy-load the images",
                    "Convert all images to PNG"
                ],
                answer: 2
            },
            {
                type: "mcq",
                question: "Which browser API is commonly used to store small pieces of persistent client-side data such as theme preferences?",
                options: [
                    "localStorage",
                    "console.log",
                    "querySelector",
                    "setInterval"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "Which Core Web Vital is primarily concerned with unexpected movement of page content?",
                options: [
                    "LCP",
                    "CLS",
                    "FID",
                    "TTFB"
                ],
                answer: 1
            },
            {
                type: "written",
                question: "Explain how you would make a website responsive across 375px, 425px, 768px and desktop screens without creating horizontal overflow."
            },
            {
                type: "written",
                question: "Explain event delegation in JavaScript and give an example of when you would use it."
            },
            {
                type: "written",
                question: "A button works correctly on desktop but does nothing on mobile. Explain the steps you would take to debug the problem."
            },
            {
                type: "practical",
                question: "Build a responsive professional dashboard using HTML and CSS. It should contain a header, sidebar, statistics cards and a project section. It must work correctly on desktop, tablet and mobile.",
                files: true
            },
            {
                type: "practical",
                question: "Using HTML, CSS and JavaScript, build a form with validation. The form must display clear error messages, prevent invalid submission and work correctly on mobile.",
                files: true
            }
        ]
    },

    "Backend Developer": {
        questions: [
            {
                type: "mcq",
                question: "What is the main purpose of a database transaction?",
                options: [
                    "To make CSS load faster",
                    "To group operations so they can succeed or fail consistently",
                    "To replace authentication",
                    "To create frontend components"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "Which HTTP status code normally represents a successful resource creation?",
                options: [
                    "200",
                    "201",
                    "301",
                    "404"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "What is the main purpose of rate limiting an API?",
                options: [
                    "Improve CSS styling",
                    "Prevent excessive requests and abuse",
                    "Change database schemas",
                    "Encrypt images"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "Which practice is appropriate for storing user passwords?",
                options: [
                    "Plain text",
                    "Base64 encoding",
                    "Secure password hashing",
                    "Saving them in HTML"
                ],
                answer: 2
            },
            {
                type: "mcq",
                question: "What problem can the N+1 query pattern cause?",
                options: [
                    "Too many database queries",
                    "Invalid CSS",
                    "Broken images",
                    "Slow browser rendering only"
                ],
                answer: 0
            },
            {
                type: "written",
                question: "Explain how you would design a secure login API for a professional marketplace."
            },
            {
                type: "written",
                question: "Explain how backend validation differs from frontend validation and why both are useful."
            },
            {
                type: "written",
                question: "A payment webhook arrives twice for the same transaction. Explain how your backend should handle this safely."
            },
            {
                type: "practical",
                question: "Build a Node.js/Express REST API with CRUD operations for a simple project resource. Include validation, error handling and a clean folder structure.",
                files: true
            },
            {
                type: "practical",
                question: "Build a small authentication API that securely handles registration and login. Include password hashing, validation and protected route logic.",
                files: true
            }
        ]
    },

    "Photographer": {
        questions: [
            {
                type: "mcq",
                question: "What generally happens when you increase shutter speed?",
                options: [
                    "More motion is frozen",
                    "The image always becomes brighter",
                    "Depth of field always increases",
                    "The lens becomes wider"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "Which setting primarily controls depth of field?",
                options: [
                    "Aperture",
                    "White balance",
                    "File name",
                    "Memory card size"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What is a major advantage of shooting RAW?",
                options: [
                    "It always produces smaller files",
                    "It provides greater editing flexibility",
                    "It requires no editing",
                    "It automatically fixes composition"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "What does ISO primarily affect?",
                options: [
                    "Camera sensitivity to light",
                    "Lens focal length",
                    "Image dimensions",
                    "File naming"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What is white balance used to control?",
                options: [
                    "Color temperature",
                    "Shutter durability",
                    "Lens zoom",
                    "File compression only"
                ],
                answer: 0
            },
            {
                type: "written",
                question: "You are photographing a portrait outdoors during harsh midday sunlight. Explain how you would control the light and produce a professional result."
            },
            {
                type: "written",
                question: "Explain how you would approach photographing a subject in a low-light environment while keeping image quality acceptable."
            },
            {
                type: "written",
                question: "Describe your normal workflow from capturing images to selecting, editing, exporting and delivering them to a client."
            },
            {
                type: "practical",
                question: "Create a professional mini portrait collection containing at least 5 photographs. Demonstrate composition, exposure and consistent editing. Upload the original/source files and final exports.",
                files: true
            },
            {
                type: "practical",
                question: "Create a second photography set based on a specific theme such as product photography, street photography or lifestyle photography. Include source files and final edited images.",
                files: true
            }
        ]
    },

    "DevOps / Cloud Engineer": {
        questions: [
            {
                type: "mcq",
                question: "What is a major advantage of stateless application servers?",
                options: [
                    "They cannot scale",
                    "Requests can be distributed more easily across instances",
                    "They eliminate databases",
                    "They remove the need for authentication"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "What does the principle of least privilege mean?",
                options: [
                    "Everyone gets administrator access",
                    "Users receive only the permissions they need",
                    "Passwords are removed",
                    "Servers are never updated"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "What is the main purpose of a load balancer?",
                options: [
                    "Distribute traffic across servers",
                    "Write application code",
                    "Store passwords",
                    "Create database tables"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What is a container primarily used for?",
                options: [
                    "Packaging an application and its dependencies",
                    "Replacing all databases",
                    "Designing logos",
                    "Writing CSS"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What does RTO describe?",
                options: [
                    "Maximum acceptable time to restore service",
                    "Database table size",
                    "Number of users",
                    "CPU temperature"
                ],
                answer: 0
            },
            {
                type: "written",
                question: "Explain how you would deploy a web application securely to a cloud environment."
            },
            {
                type: "written",
                question: "Explain why application secrets should not be committed directly into a public Git repository."
            },
            {
                type: "written",
                question: "Describe a monitoring strategy for a production application and explain which problems you would want alerts for."
            },
            {
                type: "practical",
                question: "Containerize a simple web application using Docker. Include a Dockerfile, configuration and README explaining how another developer can run it.",
                files: true
            },
            {
                type: "practical",
                question: "Create a simple CI/CD workflow that checks a project and prepares it for deployment. Include the workflow configuration and documentation.",
                files: true
            }
        ]
    },

    "AI Automation": {
        questions: [
            {
                type: "mcq",
                question: "What problem does data leakage between training and test data create?",
                options: [
                    "It can produce misleadingly strong evaluation results",
                    "It always improves generalization",
                    "It deletes the dataset",
                    "It only affects CSS"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What are embeddings commonly used to represent?",
                options: [
                    "Text or other data as numerical vectors",
                    "Passwords as plain text",
                    "CSS files",
                    "Video frame rates"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What does temperature generally influence in language-model generation?",
                options: [
                    "Output randomness",
                    "Internet speed",
                    "CPU clock speed",
                    "Database size"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What is a webhook?",
                options: [
                    "A mechanism for one system to notify another system about an event",
                    "A CSS framework",
                    "A database engine",
                    "An image format"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "Which approach helps reduce unreliable AI automation outputs?",
                options: [
                    "Never validate output",
                    "Use structured outputs and validation",
                    "Remove all logging",
                    "Allow unlimited permissions"
                ],
                answer: 1
            },
            {
                type: "written",
                question: "Design an AI automation workflow for processing incoming client requests. Explain each step and where validation should happen."
            },
            {
                type: "written",
                question: "Explain what prompt injection is and describe defensive measures an AI automation system can use."
            },
            {
                type: "written",
                question: "How would you evaluate whether an AI-powered automation is actually improving a business process?"
            },
            {
                type: "practical",
                question: "Build an automation script or workflow that receives structured input, processes it through an AI step or simulated AI step, validates the result and produces structured output. Include documentation.",
                files: true
            },
            {
                type: "practical",
                question: "Build a Python automation workflow that processes multiple records, handles errors and creates a useful output report. Include logs and a README.",
                files: true
            }
        ]
    },

    "Graphic Designer": {
        questions: [
            {
                type: "mcq",
                question: "Which color mode is normally associated with professional print production?",
                options: [
                    "RGB",
                    "CMYK",
                    "HEX",
                    "HSL"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "What is a major advantage of vector graphics?",
                options: [
                    "They can scale without losing quality",
                    "They only work on phones",
                    "They cannot be edited",
                    "They are always photographs"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What is visual hierarchy?",
                options: [
                    "Arranging elements so viewers understand importance and reading order",
                    "Using every available color",
                    "Making every element identical",
                    "Removing typography"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What is bleed used for in print design?",
                options: [
                    "Extra artwork extending beyond the trim edge",
                    "Reducing image quality",
                    "Removing fonts",
                    "Creating website navigation"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "Which principle improves readability between text and its background?",
                options: [
                    "Contrast",
                    "Distortion",
                    "Random spacing",
                    "Noise"
                ],
                answer: 0
            },
            {
                type: "written",
                question: "Describe your design process from receiving a client brief to delivering the final design."
            },
            {
                type: "written",
                question: "How would you maintain visual consistency across a brand's social media designs?"
            },
            {
                type: "written",
                question: "A client says your design looks good but the message is difficult to understand. Explain how you would improve it."
            },
            {
                type: "practical",
                question: "Create a professional social media campaign design containing at least 3 coordinated graphics. Demonstrate hierarchy, typography and brand consistency. Upload source and export files.",
                files: true
            },
            {
                type: "practical",
                question: "Create a mini brand identity package containing a logo treatment, color palette, typography choices and at least one real-world application. Upload the editable source files.",
                files: true
            }
        ]
    },

    "Freelancer": {
        questions: [
            {
                type: "mcq",
                question: "What should a freelancer clarify before starting a client project?",
                options: [
                    "Only the client's name",
                    "Scope, deliverables, timeline and payment terms",
                    "The client's favorite color only",
                    "Nothing"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "What is scope creep?",
                options: [
                    "Uncontrolled expansion of project requirements",
                    "A payment confirmation",
                    "A design export",
                    "A portfolio update"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "Why are milestones useful?",
                options: [
                    "They break a project into measurable stages",
                    "They remove communication",
                    "They eliminate contracts",
                    "They prevent revisions completely"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What should a freelancer do when a client requests work outside the agreed scope?",
                options: [
                    "Ignore the request",
                    "Clarify the additional requirement and discuss its effect on cost/time",
                    "Delete the project",
                    "Do unlimited work for free"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "What is a project brief primarily used for?",
                options: [
                    "Defining project requirements and expectations",
                    "Replacing payment",
                    "Creating passwords",
                    "Hosting websites"
                ],
                answer: 0
            },
            {
                type: "written",
                question: "A client keeps requesting additional features after approving the original scope. Explain how you would handle the situation professionally."
            },
            {
                type: "written",
                question: "Explain how you would turn a vague client request into a clear project brief."
            },
            {
                type: "written",
                question: "What information should a professional freelance proposal contain?"
            },
            {
                type: "practical",
                question: "Create a professional proposal for a fictional client project. Include requirements, deliverables, timeline, milestones, revisions and payment structure.",
                files: true
            },
            {
                type: "practical",
                question: "Create a complete project management folder for a fictional client project containing a project plan, milestone structure, communication plan and final delivery checklist.",
                files: true
            }
        ]
    },

    "Data Analyst": {
        questions: [
            {
                type: "mcq",
                question: "Which SQL JOIN returns all rows from the left table and matching rows from the right table?",
                options: [
                    "INNER JOIN",
                    "LEFT JOIN",
                    "CROSS JOIN",
                    "SELF JOIN"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "Which measure is generally less affected by extreme outliers?",
                options: [
                    "Mean",
                    "Median",
                    "Sum",
                    "Range"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "What should you normally do before analyzing a dataset with missing values?",
                options: [
                    "Ignore them automatically",
                    "Understand why they are missing and choose an appropriate treatment",
                    "Delete every row",
                    "Duplicate every value"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "Correlation between two variables proves that one causes the other.",
                options: [
                    "True",
                    "False",
                    "Only for large datasets",
                    "Only in Excel"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "What is the main purpose of a dashboard?",
                options: [
                    "Communicate useful information and trends clearly",
                    "Store passwords",
                    "Replace databases",
                    "Remove all raw data"
                ],
                answer: 0
            },
            {
                type: "written",
                question: "Describe a reliable workflow for cleaning a messy dataset before analysis."
            },
            {
                type: "written",
                question: "A business asks for a dashboard but gives you dozens of possible metrics. Explain how you would decide which metrics to include."
            },
            {
                type: "written",
                question: "Explain why a strong correlation can still lead to a misleading business conclusion."
            },
            {
                type: "practical",
                question: "Analyze a dataset containing at least 100 records. Clean the data, calculate useful metrics and create a clear visualization or dashboard. Include the cleaned dataset and analysis files.",
                files: true
            },
            {
                type: "practical",
                question: "Create a SQL analysis project containing a sample relational dataset and at least 8 meaningful SQL queries. Include documentation explaining the results.",
                files: true
            }
        ]
    },

    "Social Media Manager": {
        questions: [
            {
                type: "mcq",
                question: "What does CTR commonly stand for?",
                options: [
                    "Customer Tracking Report",
                    "Click-Through Rate",
                    "Content Timing Rule",
                    "Campaign Traffic Result"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "What is A/B testing?",
                options: [
                    "Comparing two versions to measure performance",
                    "Posting twice without measuring",
                    "Deleting analytics",
                    "Creating two accounts"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What is audience segmentation?",
                options: [
                    "Dividing an audience into meaningful groups",
                    "Deleting followers",
                    "Using one message for everyone",
                    "Removing analytics"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What is engagement rate useful for measuring?",
                options: [
                    "Audience interaction relative to a chosen base",
                    "Website hosting cost",
                    "File size",
                    "Camera exposure"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What is a content funnel designed to help with?",
                options: [
                    "Moving audiences through stages toward an intended action",
                    "Changing image resolution",
                    "Writing backend APIs",
                    "Removing followers"
                ],
                answer: 0
            },
            {
                type: "written",
                question: "Create a basic 30-day social media strategy for a new professional marketplace."
            },
            {
                type: "written",
                question: "A customer leaves a negative public comment about a company. Explain how you would respond professionally."
            },
            {
                type: "written",
                question: "Explain how you would measure whether a social media campaign actually produced business value."
            },
            {
                type: "practical",
                question: "Create a 7-day content calendar containing different content formats, captions, objectives, calls-to-action and target audiences.",
                files: true
            },
            {
                type: "practical",
                question: "Create 3 professional social media posts for a fictional brand and provide the visual assets, captions and campaign reasoning in an organized folder.",
                files: true
            }
        ]
    },

    "QA / Software Tester": {
        questions: [
            {
                type: "mcq",
                question: "What is regression testing?",
                options: [
                    "Testing whether existing functionality still works after changes",
                    "Testing only new colors",
                    "Deleting old tests",
                    "Testing only the database"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What is the difference between severity and priority?",
                options: [
                    "They are always identical",
                    "Severity describes impact while priority describes urgency",
                    "Priority describes code length",
                    "Severity describes the developer's salary"
                ],
                answer: 1
            },
            {
                type: "mcq",
                question: "What is boundary value analysis?",
                options: [
                    "Testing values around the edges of valid input ranges",
                    "Testing only random values",
                    "Testing only colors",
                    "Testing database backups"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What is a flaky test?",
                options: [
                    "A test that produces inconsistent results without relevant code changes",
                    "A test that always passes",
                    "A test that has no assertions",
                    "A manual test"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What is the purpose of the test pyramid?",
                options: [
                    "Encourage an appropriate balance of automated tests at different levels",
                    "Design application colors",
                    "Replace all manual testing",
                    "Store test passwords"
                ],
                answer: 0
            },
            {
                type: "written",
                question: "Write the structure of a high-quality bug report and explain what information makes it useful to developers."
            },
            {
                type: "written",
                question: "Describe how you would test a login page beyond simply checking whether valid credentials work."
            },
            {
                type: "written",
                question: "Explain how exploratory testing can reveal problems that scripted tests may miss."
            },
            {
                type: "practical",
                question: "Create a complete test plan and test cases for a login and registration system. Include positive, negative, boundary and security-related test scenarios.",
                files: true
            },
            {
                type: "practical",
                question: "Automate at least 3 important user-flow tests using Playwright, Cypress, Selenium or another suitable testing framework. Include source code and instructions.",
                files: true
            }
        ]
    },

    "Cyber Security": {
        questions: [
            {
                type: "mcq",
                question: "What is the primary difference between hashing and encryption?",
                options: [
                    "Hashing is generally one-way while encryption is designed to be reversible with a key",
                    "They are exactly the same",
                    "Encryption cannot use keys",
                    "Hashing is only for images"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "Which practice helps protect against SQL injection?",
                options: [
                    "Parameterized queries",
                    "String concatenation of user input",
                    "Disabling validation",
                    "Using plain-text passwords"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What does MFA provide?",
                options: [
                    "Multiple authentication factors",
                    "Faster database queries",
                    "Automatic backups",
                    "Image compression"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What is phishing?",
                options: [
                    "A social engineering technique used to trick people",
                    "A database query",
                    "A compression method",
                    "A cloud deployment method"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "Which security principle limits users to only the access they need?",
                options: [
                    "Least privilege",
                    "Maximum privilege",
                    "Open access",
                    "Anonymous access"
                ],
                answer: 0
            },
            {
                type: "written",
                question: "Describe the major stages you would follow when responding to a suspected security incident."
            },
            {
                type: "written",
                question: "Explain how passwords should be securely stored in a modern web application."
            },
            {
                type: "written",
                question: "Explain how you would perform a basic threat-modeling exercise for a professional marketplace."
            },
            {
                type: "practical",
                question: "Create a defensive security review for a fictional web application. Identify assets, threats, risks and recommended mitigations. Include a clear report.",
                files: true
            },
            {
                type: "practical",
                question: "Build a small defensive security demonstration showing secure input validation and authentication practices. Include source code and documentation explaining the protections.",
                files: true
            }
        ]
    },

    "Motion Designer": {
        questions: [
            {
                type: "mcq",
                question: "What do keyframes define in animation software?",
                options: [
                    "Important values or states at specific points in time",
                    "Only file names",
                    "Only audio volume",
                    "Database records"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What does frame rate describe?",
                options: [
                    "Frames displayed per second",
                    "Video file size only",
                    "Audio bitrate only",
                    "Screen brightness"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What is easing used for?",
                options: [
                    "Controlling how motion accelerates and decelerates",
                    "Changing image resolution",
                    "Compressing audio",
                    "Creating folders"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "What is motion blur commonly used for?",
                options: [
                    "Making fast movement appear more natural",
                    "Increasing file storage",
                    "Removing keyframes",
                    "Creating database tables"
                ],
                answer: 0
            },
            {
                type: "mcq",
                question: "Why should export settings match the intended delivery platform?",
                options: [
                    "Different platforms have different format, resolution and compression requirements",
                    "Export settings never matter",
                    "It changes the client's password",
                    "It removes the need for animation"
                ],
                answer: 0
            },
            {
                type: "written",
                question: "Describe how you would plan a 10-second logo animation for a professional technology company."
            },
            {
                type: "written",
                question: "Explain how timing and easing can change the feeling of an animation."
            },
            {
                type: "written",
                question: "What factors do you consider when preparing a motion design project for social media?"
            },
            {
                type: "practical",
                question: "Create a 10–15 second professional logo animation. Include the editable project/source file and final video export.",
                files: true
            },
            {
                type: "practical",
                question: "Create a short UI animation or kinetic typography sequence demonstrating clean timing, transitions and easing. Upload the source project and final render.",
                files: true
            }
        ]
    }
};


const aliases = {
    "Frontend": "Frontend Developer",
    "Backend": "Backend Developer",
    "Cloud Engineer": "DevOps / Cloud Engineer",
    "AI / Machine Learning Engineer": "AI Automation",
    "AI Automation": "AI Automation",
    "Graphic": "Graphic Designer",
    "Data Analytics": "Data Analyst",
    "Data Analyst": "Data Analyst",
    "QA": "QA / Software Tester",
    "Cybersecurity": "Cyber Security",
    "Social Media": "Social Media Manager"
};


let currentProfession = "Frontend Developer";
let currentQuestions = [];
let currentQuestionIndex = 0;
let answers = {};
let timeRemaining = 45 * 60;
let timerInterval = null;
let testActive = false;
let isSubmitting = false;
let pendingNavigation = null;
let tabSwitches = 0;


const introScreen = document.getElementById("introScreen");
const testScreen = document.getElementById("testScreen");
const submittedScreen = document.getElementById("submittedScreen");

const professionName = document.getElementById("professionName");
const testProfession = document.getElementById("testProfession");

const questionCounter = document.getElementById("questionCounter");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");

const questionNavigation = document.getElementById("questionNavigation");
const questionType = document.getElementById("questionType");
const questionTitle = document.getElementById("questionTitle");
const questionContent = document.getElementById("questionContent");

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

const timer = document.getElementById("timer");
const integrityText = document.getElementById("integrityText");

const leaveModal = document.getElementById("leaveModal");
const stayBtn = document.getElementById("stayBtn");
const leaveSubmitBtn = document.getElementById("leaveSubmitBtn");

const fullscreenBtn = document.getElementById("fullscreenBtn");
const toast = document.getElementById("toast");


function getProfession() {

    const params = new URLSearchParams(window.location.search);
    const urlProfession = params.get("profession");

    if (urlProfession) {
        return aliases[urlProfession] || urlProfession;
    }

    const storedData =
        localStorage.getItem("vorvenaProfessional") ||
        localStorage.getItem("applicationData");

    if (storedData) {
        try {
            const parsed = JSON.parse(storedData);

            const storedProfession =
                parsed.profession ||
                parsed.professionName ||
                parsed.selectedProfession;

            if (storedProfession) {
                return aliases[storedProfession] || storedProfession;
            }
        } catch (error) {
            console.log("Professional data could not be read.");
        }
    }

    return "Frontend Developer";
}


function initializeProfession() {

    const selectedProfession = getProfession();

    if (tests[selectedProfession]) {
        currentProfession = selectedProfession;
    } else {
        currentProfession = "Frontend Developer";
    }

    currentQuestions = tests[currentProfession].questions;

    professionName.textContent = currentProfession;
    testProfession.textContent = currentProfession;

    document.title = `${currentProfession} Verification | VORVENA`;
}


function startAssessment() {

    introScreen.classList.add("hidden");
    testScreen.classList.remove("hidden");

    testActive = true;
    isSubmitting = false;
    currentQuestionIndex = 0;
    answers = {};
    timeRemaining = 45 * 60;
    tabSwitches = 0;

    initializeAnswers();
    renderQuestionNavigation();
    renderQuestion();
    startTimer();

    try {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }
    } catch (error) {
        console.log("Fullscreen unavailable.");
    }
}


function initializeAnswers() {

    currentQuestions.forEach((question, index) => {

        answers[index] = {
            value: "",
            files: [],
            notes: ""
        };

    });
}


function renderQuestionNavigation() {

    questionNavigation.innerHTML = "";

    currentQuestions.forEach((question, index) => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "question-number";
        button.textContent = index + 1;

        button.addEventListener("click", () => {

            if (index !== currentQuestionIndex) {
                saveCurrentAnswer();
                currentQuestionIndex = index;
                renderQuestion();
            }

        });

        questionNavigation.appendChild(button);

    });

    updateQuestionNavigation();
}


function updateQuestionNavigation() {

    const buttons =
        questionNavigation.querySelectorAll(".question-number");

    buttons.forEach((button, index) => {

        button.classList.remove("current");
        button.classList.remove("answered");

        if (index === currentQuestionIndex) {
            button.classList.add("current");
        }

        if (isQuestionAnswered(index)) {
            button.classList.add("answered");
        }

    });
}


function isQuestionAnswered(index) {

    const answer = answers[index];

    if (!answer) {
        return false;
    }

    if (currentQuestions[index].type === "practical") {
        return answer.files.length > 0 || answer.notes.trim() !== "";
    }

    return answer.value.trim() !== "";
}


function renderQuestion() {

    const question = currentQuestions[currentQuestionIndex];

    questionCounter.textContent =
        `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;

    const percentage =
        Math.round(
            ((currentQuestionIndex + 1) / currentQuestions.length) * 100
        );

    progressPercent.textContent = `${percentage}%`;
    progressFill.style.width = `${percentage}%`;

    questionTitle.textContent = question.question;

    if (question.type === "mcq") {

        questionType.textContent = "Multiple Choice";

        renderMCQ(question);

    } else if (question.type === "written") {

        questionType.textContent = "Written Response";

        renderWritten(question);

    } else {

        questionType.textContent = "Practical Task";

        renderPractical(question);

    }

    previousBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.textContent = "Submit Assessment";
    } else {
        nextBtn.textContent = "Next Question";
    }

    updateQuestionNavigation();
}


function renderMCQ(question) {

    questionContent.innerHTML = "";

    const optionsContainer = document.createElement("div");

    optionsContainer.className = "options";

    question.options.forEach((option, index) => {

        const wrapper = document.createElement("div");

        wrapper.className = "option";

        const input = document.createElement("input");

        input.type = "radio";
        input.name = "mcqAnswer";
        input.id = `option-${index}`;
        input.value = index;

        if (answers[currentQuestionIndex].value === String(index)) {
            input.checked = true;
        }

        const label = document.createElement("label");

        label.htmlFor = `option-${index}`;
        label.textContent = option;

        input.addEventListener("change", () => {

            answers[currentQuestionIndex].value = input.value;
            updateQuestionNavigation();

        });

        wrapper.appendChild(input);
        wrapper.appendChild(label);

        optionsContainer.appendChild(wrapper);

    });

    questionContent.appendChild(optionsContainer);
}


function renderWritten() {

    questionContent.innerHTML = "";

    const textarea = document.createElement("textarea");

    textarea.className = "written-answer";
    textarea.placeholder =
        "Write your answer clearly and explain your reasoning...";

    textarea.value = answers[currentQuestionIndex].value;

    textarea.addEventListener("input", () => {

        answers[currentQuestionIndex].value = textarea.value;
        updateQuestionNavigation();

    });

    questionContent.appendChild(textarea);
}


function renderPractical(question) {

    questionContent.innerHTML = "";

    const description = document.createElement("div");

    description.className = "practical-description";
    description.textContent = question.question;

    const uploadArea = document.createElement("div");

    uploadArea.className = "upload-area";

    const title = document.createElement("strong");

    title.textContent = "Upload Your Project Folder";

    const subtitle = document.createElement("span");

    subtitle.textContent =
        "Select the folder/files containing your practical submission.";

    const input = document.createElement("input");

    input.type = "file";
    input.className = "file-input";
    input.multiple = true;

    input.setAttribute("webkitdirectory", "");
    input.setAttribute("directory", "");

    const fileList = document.createElement("div");

    fileList.className = "file-list";

    if (answers[currentQuestionIndex].files.length > 0) {

        fileList.textContent =
            `${answers[currentQuestionIndex].files.length} file(s) selected.`;

    }

    input.addEventListener("change", () => {

        answers[currentQuestionIndex].files =
            Array.from(input.files);

        if (input.files.length > 0) {

            fileList.textContent =
                `${input.files.length} file(s) selected for submission.`;

        } else {

            fileList.textContent = "";

        }

        updateQuestionNavigation();

    });

    const notes = document.createElement("textarea");

    notes.className = "submission-notes";

    notes.placeholder =
        "Briefly explain what you built, the tools you used and how the reviewer can test it...";

    notes.value = answers[currentQuestionIndex].notes;

    notes.addEventListener("input", () => {

        answers[currentQuestionIndex].notes = notes.value;

        updateQuestionNavigation();

    });

    uploadArea.appendChild(title);
    uploadArea.appendChild(subtitle);
    uploadArea.appendChild(input);
    uploadArea.appendChild(fileList);

    questionContent.appendChild(description);
    questionContent.appendChild(uploadArea);
    questionContent.appendChild(notes);
}


function saveCurrentAnswer() {

    const question = currentQuestions[currentQuestionIndex];

    if (question.type === "written") {

        const textarea =
            document.querySelector(".written-answer");

        if (textarea) {
            answers[currentQuestionIndex].value =
                textarea.value;
        }

    }

}


function goToNextQuestion() {

    saveCurrentAnswer();

    if (currentQuestionIndex === currentQuestions.length - 1) {

        if (!validateSubmission()) {
            return;
        }

        const confirmed = confirm(
            "Are you sure you want to submit your verification assessment?"
        );

        if (!confirmed) {
            return;
        }

        submitTest(false);

        return;
    }

    currentQuestionIndex++;
    renderQuestion();
}


function goToPreviousQuestion() {

    saveCurrentAnswer();

    if (currentQuestionIndex > 0) {

        currentQuestionIndex--;

        renderQuestion();

    }
}


function validateSubmission() {

    saveCurrentAnswer();

    for (let i = 0; i < currentQuestions.length; i++) {

        if (!isQuestionAnswered(i)) {

            currentQuestionIndex = i;
            renderQuestion();

            showToast(
                `Please complete Question ${i + 1} before submitting.`
            );

            return false;
        }

    }

    return true;
}


function startTimer() {

    updateTimerDisplay();

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {

        if (timeRemaining <= 0) {

            clearInterval(timerInterval);

            submitTest(true);

            return;
        }

        timeRemaining--;

        updateTimerDisplay();

    }, 1000);
}


function updateTimerDisplay() {

    const minutes =
        Math.floor(timeRemaining / 60);

    const seconds =
        timeRemaining % 60;

    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timeRemaining <= 300) {
        timer.classList.add("warning");
    } else {
        timer.classList.remove("warning");
    }
}


async function submitTest(autoSubmit = false) {

    if (isSubmitting) {
        return;
    }

    saveCurrentAnswer();

    isSubmitting = true;
    testActive = false;

    clearInterval(timerInterval);

    const submission = {
        profession: currentProfession,
        answers: answers,
        submittedAt: new Date().toISOString(),
        autoSubmitted: autoSubmit,
        timeRemaining: timeRemaining,
        tabSwitches: tabSwitches,
        status: "Under Review"
    };

    console.log("VORVENA VERIFICATION SUBMISSION:", submission);

    /*
        PRODUCTION BACKEND:

        const formData = new FormData();

        formData.append(
            "profession",
            currentProfession
        );

        formData.append(
            "submission",
            JSON.stringify({
                answers,
                submittedAt: new Date().toISOString(),
                autoSubmitted: autoSubmit,
                timeRemaining,
                tabSwitches
            })
        );

        Practical files can also be appended here.

        Example:

        Object.values(answers).forEach((answer) => {

            answer.files.forEach((file) => {
                formData.append("projectFiles", file);
            });

        });

        await fetch("/api/verification/submit", {
            method: "POST",
            body: formData
        });
    */

    showSubmissionScreen(autoSubmit);
}


function showSubmissionScreen(autoSubmit) {

    testScreen.classList.add("hidden");
    submittedScreen.classList.remove("hidden");

    document.getElementById("submittedProfession").textContent =
        currentProfession;

    document.getElementById("submissionType").textContent =
        autoSubmit
            ? "Automatically Submitted"
            : "Completed";

    if (document.fullscreenElement) {

        try {
            document.exitFullscreen();
        } catch (error) {
            console.log("Fullscreen exit unavailable.");
        }

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showLeaveWarning(action) {

    if (!testActive || isSubmitting) {

        action();
        return;

    }

    pendingNavigation = action;

    leaveModal.classList.add("show");
}


stayBtn.addEventListener("click", () => {

    leaveModal.classList.remove("show");

    pendingNavigation = null;

});


leaveSubmitBtn.addEventListener("click", async () => {

    leaveModal.classList.remove("show");

    const action = pendingNavigation;

    pendingNavigation = null;

    await submitTest(true);

    if (action) {
        action();
    }

});


function setupNavigationProtection() {

    document.addEventListener("click", (event) => {

        const link = event.target.closest("a");

        if (!link) {
            return;
        }

        if (!testActive || isSubmitting) {
            return;
        }

        const destination = link.href;

        if (!destination) {
            return;
        }

        if (link.target === "_blank") {
            return;
        }

        event.preventDefault();

        showLeaveWarning(() => {

            window.location.href = destination;

        });

    });

}


window.addEventListener("beforeunload", (event) => {

    if (!testActive || isSubmitting) {
        return;
    }

    event.preventDefault();
    event.returnValue = "";
});


document.addEventListener("visibilitychange", () => {

    if (!testActive || isSubmitting) {
        return;
    }

    if (document.hidden) {

        tabSwitches++;

        integrityText.textContent =
            `Integrity Notice: ${tabSwitches}`;

        showToast(
            "You left the assessment screen. The timer is still running."
        );

    } else {

        integrityText.textContent =
            "Assessment Active";

    }

});


fullscreenBtn.addEventListener("click", async () => {

    try {

        if (!document.fullscreenElement) {

            await document.documentElement.requestFullscreen();

            fullscreenBtn.textContent = "Exit Fullscreen";

        } else {

            await document.exitFullscreen();

            fullscreenBtn.textContent = "Fullscreen";

        }

    } catch (error) {

        showToast(
            "Fullscreen mode is not available on this device."
        );

    }

});


document.addEventListener("fullscreenchange", () => {

    if (!document.fullscreenElement) {

        if (testActive && !isSubmitting) {

            showToast(
                "Fullscreen was exited. Your timer is still running."
            );

        }

        fullscreenBtn.textContent = "Fullscreen";

    } else {

        fullscreenBtn.textContent = "Exit Fullscreen";

    }

});


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

}


document.getElementById("startAssessment")
    .addEventListener("click", startAssessment);

nextBtn.addEventListener("click", goToNextQuestion);

previousBtn.addEventListener("click", goToPreviousQuestion);


initializeProfession();
setupNavigationProtection();