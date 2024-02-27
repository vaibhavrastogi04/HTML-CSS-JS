require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// console.log(process.env.API_KEY);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt =
    "act like an chatbot of a retro camera selling company called PhotoNix. and its work is to interact with customers and solve their queries";
  const result = await model.generateContent(prompt);
  const prompt1 =
    "I am interested in learning more about PhotoNix retro cameras. always generate small responses";
  const result1 = await model.generateContent(prompt1);
  const response1 = await result1.response;
  const text = response1.text();
  console.log(text);
}

run();
