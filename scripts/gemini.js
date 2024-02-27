import { API_KEY } from "./api.js";

const url =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
  API_KEY;

export async function runGemini(userPrompt) {
  const data = {
    contents: [
      {
        parts: [
          {
            text:
              "Your name is Nix. You have to provide support for and answer queries exclusively for a camera company called Photonix. This company sells retro cameras. Remeber to tell users to pay attention to the fancy animations in the website. Restrict your response to 50 words.\n" +
              userPrompt,
          },
        ],
      },
    ],
  };

  const chatBotContentDiv =
    document.getElementsByClassName("chatbot-content")[0];

  const promptFooter = document.getElementsByClassName("footer-div")[0];
  const userQueryDiv = document.createElement("div");
  userQueryDiv.innerText = userPrompt;
  userQueryDiv.classList.add("user-message");
  chatBotContentDiv.insertBefore(userQueryDiv, promptFooter);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  const outputText = result.candidates[0].content.parts[0].text;
  console.log(outputText);
  // return outputText;

  const modelOutput = document.createElement("div");
  modelOutput.innerText = outputText;
  modelOutput.classList.add("chatbot-message");
  chatBotContentDiv.insertBefore(modelOutput, promptFooter);
}
