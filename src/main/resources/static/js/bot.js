const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;
const API_KEY = "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";
const inputInitHeight = chatInput.scrollHeight;
const createChatLi = (message, className) => {
    // create a caht <li> element with passed message and className
    // 전달된 메시지와 클래스 이름을 사용하여 새로운 <li> 요소를 생성합니다.
    //이를 이용해 원하는 곳에 요소를 추가할 수 있습니다.
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symols-outlined"><img src="../UI_A_4/img/stev.png" alt=""></span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}]
        })
    }
    //API에 POST 요청을 보내서 응답을 받아오는
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error)=>{
        messageElement.classList.add("error");
        messageElement.textContent = "정보를 찾지 못했습니다.다시 질문해보세요.";
    })
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage)return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    //사용자의 메시지를 채팅 상자에 추가하겠습니다
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    setTimeout(() => {
        //응답을 기다리는 동안 생각 중입니다...
        const incomingChatLi = createChatLi("...", "incoming");
        chatbox.appendChild(incomingChatLi);
        generateResponse(incomingChatLi);
    }, 600);


}
// chatInput.addEventListener("keydown", ()=>{
//     //
//     chatInput.style.height = `${inputInitHeight}px`;
//     chatInput.style.height = `${chatInput.scrollHeight}px`;
// });
// chatInput.addEventListener("keyup", ()=>{
//     //
//     if(e.key === "Enter" && !e.shiftkey && window.innerHTML > 800){
//         e.preventDefault();
//         handleChat();
//     }
// });

chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
sendChatBtn.addEventListener("click", handleChat);