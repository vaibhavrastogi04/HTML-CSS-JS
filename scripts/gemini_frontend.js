import { runPrompt } from "./gemini_middleware.js";

// runPrompt = require("./gemini_middleware.js").runPrompt;

function geminiFrontEnd() {
  // const runPrompt = require(runPrompt);
  const outerBody = document.createElement("div");
  outerBody.classList.add("outer-body");

  const innerBody = document.createElement("div");
  innerBody.classList.add("inner-body");

  const chatBotHeader = document.createElement("div");
  chatBotHeader.classList.add("chatbot-header");
  const chatBotText = document.createElement("div");
  chatBotText.innerText = "Nix - ai";
  chatBotText.classList.add("chatbot-header-text");
  chatBotHeader.append(chatBotText);

  const closeIcon = document.createElement("div");
  closeIcon.innerHTML = `<a href="" onclick="removeGemini()"
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="red"
    class="bi bi-x-square-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"
    /></svg
></a>`;
  chatBotHeader.classList.add("close-button");
  chatBotHeader.append(closeIcon);

  innerBody.append(chatBotHeader);

  const chatBotContentDiv = document.createElement("div");
  chatBotContentDiv.classList.add("chatbot-content");
  innerBody.append(chatBotContentDiv);

  const chatBotMessageDiv = document.createElement("div");
  chatBotMessageDiv.innerText =
    "Hi there!  I'm Nix, the friendly chatbot assistant at PhotoNix, your one-stop shop for all things retro photography! How can I help you capture the moment in timeless style today?";
  chatBotMessageDiv.classList.add("chatbot-message");
  chatBotContentDiv.append(chatBotMessageDiv);

  const messageDiv = document.createElement("div");
  messageDiv.innerText = "What is Photonix?";
  messageDiv.classList.add("user-message");
  chatBotContentDiv.append(messageDiv);

  const footerDiv = document.createElement("div");
  footerDiv.classList.add("footer-div");
  chatBotContentDiv.append(footerDiv);

  const enterPrompt = document.createElement("input");
  enterPrompt.setAttribute("placeholder", "Enter Prompt:");
  enterPrompt.classList.add("prompt-div");
  footerDiv.append(enterPrompt);

  const sendPromptButton = document.createElement("button");
  sendPromptButton.innerText = "Send";
  sendPromptButton.classList.add("send_button");
  sendPromptButton.addEventListener("click", runPrompt);
  footerDiv.append(sendPromptButton);

  const body = document.getElementById("body");
  body.prepend(outerBody);
  outerBody.append(innerBody);
}

function removeGemini() {
  const outerBody = document.getElementsByClassName("outer-body");
  const body = document.getElementById("body");
  body.remove(outerBody);
}

// export { geminiFrontEnd };
window.geminiFrontEnd = geminiFrontEnd;
