**# 🖥️ Sunder Kumar — Interactive Full Stack Developer Portfolio**

\> An interactive personal developer portfolio designed as a desktop-style experience to showcase software projects, development experience, skills, achievements, certifications, community work, and technical work.

**---**

**## 🌐 Live Portfolio**

Explore the deployed portfolio:

https\://raksha-portfolio-xi.vercel.app/

The portfolio goes beyond a traditional scrolling website with an operating-system-inspired interface, application-style navigation, interactive windows, portfolio search, and an AI-powered **\*\*Ask Sunder\*\*** assistant.

**---**

**## 🚀 Key Features**

\* Interactive desktop-style portfolio experience

\* macOS-inspired interface with desktop icons, Dock, menu bar, and application windows

\* Open, close, minimize, maximize, and focus management for windows

\* Finder-style portfolio explorer

\* Projects showcase with technology stacks, screenshots, GitHub repositories, demos, and limitations

\* Dedicated sections for experience, education, skills, achievements, certifications, community, photos, resume, and contact

\* Portfolio-wide search across structured profile information

\* Dedicated responsive mobile experience

\* AI-powered **\*\*Ask Sunder\*\*** assistant for natural-language questions

\* Streaming AI responses using Google Gemini

\* AI-generated navigation actions that can open relevant portfolio sections

**---**

**## 🤖 Ask Sunder — AI Portfolio Assistant**

**\*\*Ask Sunder\*\*** is the conversational AI layer of the portfolio.

Instead of manually navigating through different sections, visitors can ask questions about Sunder's professional background in natural language.

Example questions:

\`\`\`text

What projects has Sunder built?

What technical skills does Sunder have?

What experience does Sunder have?

What AI projects has Sunder built?

What technologies does Sunder use?

Tell me about Sunder's experience.

\`\`\`

The assistant uses structured portfolio information as its factual context and supports natural-language questions, paraphrasing, and conversational follow-ups.

**### How it works**

\`\`\`text

Visitor

   ↓

Ask Sunder UI

   ↓

/api/ask-raksha

   ↓

Portfolio Context + Conversation History + Question

   ↓

Google Gemini API

   ↓

Streaming Response

   ↓

Ask Sunder UI

\`\`\`

The server-side API route builds context from the portfolio's profile, education, experience, projects, skills, achievements, certifications, community activity, and contact information.

The current implementation uses the **\*\*Google Generative AI SDK\*\*** and keeps the Gemini API key server-side through the \`GEMINI\_API\_KEY\` environment variable.

**### AI-to-UI integration**

Ask Sunder can also return predefined actions such as:

\`\`\`text

[OPEN\_PROJECTS]

[OPEN\_EXPERIENCE]

[OPEN\_SKILLS]

[OPEN\_ACHIEVEMENTS]

[OPEN\_CERTIFICATIONS]

[OPEN\_COMMUNITY]

[OPEN\_RESUME]

[OPEN\_ABOUT]

[OPEN\_CONTACT]

\`\`\`

The frontend converts these actions into interactive buttons that open the corresponding portfolio section.

This allows Ask Sunder to function as both a conversational assistant and an additional navigation layer for the portfolio.

**---**

**## 🛠️ Tech Stack**

\| Technology                   | Purpose                                                    |

\| ---------------------------- | ---------------------------------------------------------- |

\| **\*\*Next.js 14\*\***               | Application framework, routing, and server-side API routes |

\| **\*\*React 18\*\***                 | Component-based user interface                             |

\| **\*\*TypeScript\*\***               | Type-safe application development                          |

\| **\*\*Tailwind CSS\*\***             | Styling and responsive layouts                             |

\| **\*\*Framer Motion\*\***            | Animations and UI transitions                              |

\| **\*\*Lucide React\*\***             | Interface icons                                            |

\| **\*\*Zustand\*\***                  | Client-side window and application state management        |

\| **\*\*Google Generative AI SDK\*\*** | Gemini API integration                                     |

\| **\*\*Google Gemini\*\***            | Natural-language generation for Ask Sunder                 |

**---**

**## 📂 Portfolio Sections

The portfolio organizes professional information into interactive applications rather than one long page.

### 👨‍💻 About

Personal introduction, technical profile, education, skills, and professional information.

### 💻 Projects

Technical projects are presented with:

* Project purpose
* Category
* Technology stack
* Technical facts
* Status
* Screenshots
* GitHub repository
* Live demo where available
* Limitations

Projects represented in the portfolio include work across Java/Spring Boot, full-stack web development, AI applications, chatbots, automation, and academic software projects.

### 💼 Experience

The portfolio highlights academic, freelance, community, and software-development experience, including freelance web development and developer/community roles.

### 🏆 Achievements

Selected hackathons, university/community activities, programs, and technical achievements are represented in the portfolio.

### 📜 Certifications

The portfolio includes certifications and learning records covering software development, APIs, cloud/AI technologies, and professional development.

### 📄 Resume

The portfolio provides access to Sunder's resume directly through the interface.

### 🔎 Search

The portfolio includes structured search across areas such as:

* Profile
* Projects
* Experience
* Skills
* Achievements
* Certifications
* Community & Events
* Resume
* Contact

### 📱 Responsive Experience

The project includes a dedicated mobile layout rather than simply shrinking the desktop interface.

---

## 🎨 Design & UX**

The portfolio is intentionally designed around an operating-system-inspired experience.

The desktop interface includes:

\* Wallpaper

\* Desktop identity

\* Application icons

\* Dock

\* Menu bar

\* Finder-style navigation

\* Application windows

\* Window controls

\* Interactive navigation

\* Focus management

\* Animated interactions

The mobile experience provides a simplified responsive interface while maintaining the overall visual identity of the desktop version.

**---**

**## 📸 Screenshots**

**### 🖥️ Desktop Overview**

![Sunder Kumar Portfolio Desktop Overview]\(public/assets/screenshots/desktop\_overview\.png)

**---**

**### 📁 Portfolio Explorer**

![Portfolio Explorer]\(public/assets/screenshots/portfolio\_explorer.png)

**---**

**### 👩‍💻 About Sunder**

![About Sunder]\(public/assets/screenshots/about\_raksha.png)

**---**

**### 💻 Projects**

![Projects]\(public/assets/screenshots/projects.png)

**---**

**### 🤖 Ask Sunder AI Assistant**

![Ask Sunder AI Assistant]\(public/assets/screenshots/ask\_raksha.png)

**---**

**### 💻 Terminal**

![Terminal]\(public/assets/screenshots/terminal.png)

**---**

**## 🧠 Engineering Highlights

### Component-Based Architecture

The interface is divided into reusable React/Next.js components for desktop UI, applications, windows, mobile UI, search, navigation, and portfolio sections.

### Structured Portfolio Data

Professional information is centralized in structured portfolio data, providing a common source for profile information, education, experience, projects, skills, achievements, certifications, community activity, and search.

### Server-Side AI Integration

Ask Sunder communicates with the configured AI provider through a Next.js API route, keeping the API key server-side rather than exposing it directly in client-side code.

### Streaming AI Responses

The AI assistant can stream generated output to the browser, allowing responses to appear progressively.

### Client-Side Window State

Zustand is used to manage application and window state, supporting the interactive desktop behavior.

### Environment-Based Secrets

API keys are loaded through environment variables and excluded from version control.

---

## ⚙️ Getting Started**

**### Prerequisites**

\* Node.js

\* npm

\* Git

**### Installation**

Clone the repository:

\`\`\`bash

git clone https\://github.com/Sunder-Kumar/sunder-portfolio.git

cd raksha-portfolio

\`\`\`

Install dependencies:

\`\`\`bash

npm install

\`\`\`

**### Environment Variables**

Create a \`.env\` file in the project root:

\`\`\`env

GEMINI\_API\_KEY=your\_gemini\_api\_key\_here

\`\`\`

The repository includes \`.env.example\` as a configuration template.

**\*\*Never commit your actual API key to GitHub.\*\***

**### Run Locally**

Start the development server:

\`\`\`bash

npm run dev

\`\`\`

Open:

\`\`\`text

http\://localhost:3000

\`\`\`

**### Production Build**

\`\`\`bash

npm run build

npm start

\`\`\`

**---**

**## 🌐 Deployment**

The portfolio is deployed on **\*\*Vercel\*\***.

**### Live Portfolio**

https\://raksha-portfolio-xi.vercel.app/

For the deployed **\*\*Ask Sunder\*\*** assistant to work, the production environment must have:

\`\`\`text

GEMINI\_API\_KEY

\`\`\`

configured.

The API key is accessed server-side through the application and is not intended to be exposed to the browser.

**---**

**## ⚠️ Current AI Limitation**

Ask Sunder depends on the availability and quota of the configured Gemini API.

If the provider's rate limit or daily quota is exhausted, AI requests may temporarily fail. This does not affect the rest of the portfolio.

Potential future improvements include lightweight local retrieval or fallback behavior so portfolio questions can still receive useful responses when the AI service is temporarily unavailable.

**---**

**## 🔮 Future Improvements**

Planned or potential improvements include:

\* Lightweight local retrieval for portfolio questions

\* AI fallback behavior when Gemini is unavailable

\* More efficient context selection for AI requests

\* Further optimization of AI response latency

\* Improved mobile feature parity

\* Additional accessibility refinements

\* More automated testing

\* Additional project demonstrations and technical documentation

**---**

**## 📌 Project Purpose

Sunder's portfolio was built to present a practical software-development profile while also demonstrating modern frontend engineering and AI integration skills.

Rather than treating a portfolio as only a collection of personal information, the project turns the portfolio itself into an interactive software product.

It demonstrates work across:

* Software Engineering
* Java & Spring Boot
* Full Stack Development
* React & Next.js
* REST APIs
* Database Integration
* Generative AI & Chatbots
* AI Automation
* TypeScript & JavaScript
* Responsive UI Development
* Interactive Application Architecture
* Git and GitHub workflows

---

## 👨‍💻 About

**Sunder Kumar**

Computer Science student and Full Stack Developer focused on **Java, Spring Boot, JavaScript, React, REST APIs, databases, AI applications, chatbots, and automation**.

Currently pursuing a **Bachelor of Computer Science (BSCS)** at **Sindh Madressatul Islam University (SMIU), Karachi**.

### Professional Links

* **GitHub:** https://github.com/Sunder-Kumar
* **LinkedIn:** https://www.linkedin.com/in/sunder-kumar-841068279
* **Portfolio:** https://sunderkumar.tech/

---

## 🔗 Other Projects

The portfolio also showcases Sunder's software-development, AI, chatbot, automation, and academic projects through their individual project pages and repositories.

---

## 📄 License**

This project is licensed under the [MIT License]\(LICENSE).

**---**

\<p *align*="center">

  Built and designed by \<strong>Sunder\</strong> with Next.js, React, TypeScript, Tailwind CSS, and Gemini.

\</p>