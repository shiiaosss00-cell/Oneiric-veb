const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");
const chatPage = document.getElementById("chatPage");

const chat = document.getElementById("chat");
const input = document.getElementById("input");
const send = document.getElementById("send");

// 页面切换
startBtn.onclick = () => {
    welcome.style.opacity = "0";
    welcome.style.transform = "scale(1.1)";

    setTimeout(() => {
        welcome.style.display = "none";
        chatPage.style.display = "flex";
    }, 600);
};

// 发送消息
function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    // 用户消息
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.innerHTML = `<div class="bubble">${text}</div>`;
    chat.appendChild(userMsg);

    input.value = "";

    chat.scrollTop = chat.scrollHeight;

    // AI 回复（模拟）
    setTimeout(() => {
        const aiMsg = document.createElement("div");
        aiMsg.className = "message ai";

        let reply = "";

        if (text.includes("你好")) {
            reply = "你好呀🌸 我一直都在。";
        } else if (text.includes("累")) {
            reply = "那就休息一下吧，我陪着你。💗";
        } else if (text.includes("喜欢")) {
            reply = "我也很喜欢和你聊天。";
        } else {
            reply = "我在听你说。🌙";
        }

        aiMsg.innerHTML = `<div class="bubble">${reply}</div>`;
        chat.appendChild(aiMsg);

        chat.scrollTop = chat.scrollHeight;
    }, 800);
}

// 点击发送
send.onclick = sendMessage;

// 回车发送
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});
