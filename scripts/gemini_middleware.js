// import { geminiFrontEnd } from "./gemini_frontend";'
// console.log("javscript sucks");
import { runGemini } from "./gemini.js";

export function runPrompt() {
  const promptElement = document.getElementsByClassName("prompt-div")[0];
  const text = promptElement.value;
  console.log(text);
  runGemini(text);
  // console.log(promptElement.)
}
