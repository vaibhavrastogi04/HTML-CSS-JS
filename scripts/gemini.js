// require("dotenv").config();
// import { config } from "dotenv";
import { API_KEY } from "./api.js";
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const genAI = new GoogleGenerativeAI(API_KEY);
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// console.log(process.env.API_KEY);

// export async function runGemini(userPrompt) {
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//   const prompt =
//     "act like an chatbot of a retro camera selling company called PhotoNix. and its work is to interact with customers and solve their queries";
//   const result = await model.generateContent(prompt);
//   const modelResult = await model.generateContent(userPrompt);
//   const modelResponse = await modelResult.response;
//   const text = modelResponse.text();
//   //   console.log(text);

//   return text;
// }

const url =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
  API_KEY;

export async function runGemini(userPrompt) {
  const data = {
    contents: [{ parts: [{ text: userPrompt }] }],
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  // console.log(result);
  const outputText = result.candidates[0].content.parts[0].text;
  console.log(outputText);
  return outputText;
}

// run();
