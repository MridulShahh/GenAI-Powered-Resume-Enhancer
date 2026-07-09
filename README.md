#  GenAI Powered Resume Enhancer

An AI-powered career assistant that helps users optimize their resumes, analyze job descriptions, identify skill gaps, and prepare for interviews using **Google Gemini AI**. Built with the **MERN Stack**, the application provides secure authentication, AI-generated interview reports, and ATS-friendly resume generation.

---

##  Live Demo

**Frontend:**  
https://your-frontend-url.vercel.app

**Backend API:**  
https://your-backend-url.onrender.com

> **Note:** The backend is hosted on Render's free tier and may take **30–60 seconds** to respond on the first request if it has been inactive.

---

##  Tech Stack

| Frontend | Backend | Database | AI | Deployment |
|----------|----------|----------|----------|------------|
| React.js | Node.js | MongoDB | Google Gemini AI | Vercel |
| Vite | Express.js | Mongoose | Puppeteer | Render |
| React Router DOM | REST APIs | JWT Authentication | Multer | Axios |

---

##  Features

-  JWT Authentication
-  Login, Register & Logout
-  Token Blacklisting
-  Resume Upload
-  AI Resume Analysis
-  Job Description Analysis
-  Skill Gap Detection
-  AI-Generated Interview Questions
-  ATS-Optimized Resume Generation
-  Resume PDF Export
-  Interview History
-  Responsive UI

---

##  Project Structure

```text
GenAI-Powered-Resume-Enhancer
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── routes/
│   │   └── utils/
│   │
│   ├── public/
│   └── package.json
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── validators/
│   │
│   ├── package.json
│   └── .env.example
│
└── README.md
```

---

##  Environment Variables

Create a `.env` file inside the **Backend** folder.

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_GENAI_API_KEY=your_google_gemini_api_key
```

---

##  Local Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/MridulShahh/GenAI-Powered-Resume-Enhancer.git

cd GenAI-Powered-Resume-Enhancer
```

### 2️⃣ Backend Setup

```bash
cd Backend

npm install

npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

---

## 🔄 Application Workflow

- User Registration & Authentication
- Upload Resume
- Enter Job Description
- AI Resume Analysis
- Skill Gap Detection
- AI Interview Question Generation
- ATS Resume Generation
- Resume PDF Download
- Save & View Previous Reports

---

## 🚀Future Enhancements

- AI Resume Scoring
- Cover Letter Generator
- Mock Interview Chatbot
- Resume Version Management
- LinkedIn Profile Analysis
- Multi-language Resume Support
- Admin Dashboard

---

##  Acknowledgments

This project was built while learning from the excellent Full Stack GenAI tutorial by **Ankur Prajapati** and has been customized for learning and portfolio purposes.

---

##  Author

**Mridul Shah**

GitHub: https://github.com/MridulShahh
