# NutriStack

NutriStack is a nutrition education website that helps people understand essential nutrients in a simple and interactive way. The idea behind this project was to create a place where anyone can learn about nutrition without reading long and confusing articles.

Instead of showing only basic information, NutriStack organizes nutrients into categories and provides detailed explanations about their functions, benefits, food sources, recommended intake, deficiency symptoms, and possible risks of excessive intake. Everything is presented in a clean interface that works well on desktop as well as mobile devices.

The project also includes an AI powered chatbot that uses the Google Gemini API. Users can ask nutrition related questions in natural language and receive informative responses instantly. The chatbot is designed to feel like a part of the website instead of a separate tool.

## Features

* Detailed guide for essential nutrients
* Separate sections for vitamins and minerals with individual information
* Food sources for important nutrients
* Daily nutrition tips
* Frequently asked questions
* AI powered nutrition chatbot using Google Gemini
* Live search functionality
* Light and dark mode
* Responsive design for desktop tablets and mobile devices
* Clean and organized user interface

## Tech Stack

Frontend

* HTML5
* CSS3
* JavaScript

Backend

* Node.js
* Express.js

AI

* Google Gemini API

## Project Structure

```text
NutriStack
│
├── assets
│   ├── css
│   ├── images
│   └── js
│
├── data
│
├── node_modules
│
├── index.html
├── server.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Getting Started

Clone the repository

```bash
git clone https://github.com/your-username/NutriStack.git
```

Move into the project folder

```bash
cd NutriStack
```

Install dependencies

```bash
npm install
```

Create a `.env` file in the project root and add your Gemini API key

```env
GEMINI_API_KEY=YOUR_API_KEY
PORT=3000
```

Start the backend

```bash
npm start
```

Open `index.html` using Live Server or any local web server and start exploring the website.

## Why I Built This

I wanted to build something that was both educational and practical. Nutrition is a topic that many people search for every day, but reliable information is often scattered across different websites. NutriStack brings everything together in one place with a simple interface and an AI assistant that makes learning easier.

This project also gave me the opportunity to work with frontend development, responsive design, API integration, and backend development while keeping the project organized with a modular file structure.

## Future Improvements

* Conversation history
* Voice input for the chatbot
* More nutrition categories
* Personalized nutrition recommendations
* User accounts and saved chats
* Multi language support

## License

This project is open for learning and personal use.
Copyright © 2026 Aashish Maurya.
