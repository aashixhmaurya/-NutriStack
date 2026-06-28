const chatbotFab = document.getElementById("chatbotFab");
      const chatbotWindow = document.getElementById("chatbotWindow");
      const chatbotClose = document.getElementById("chatbotClose");
      const chatbotMessages = document.getElementById("chatbotMessages");
      const chatbotInput = document.getElementById("chatbotInput");
      const chatbotSend = document.getElementById("chatbotSend");
      const chatbotQuick = document.getElementById("chatbotQuick");

      function openChat() {
        chatbotWindow.classList.add("chatbot--open");
        chatbotFab.classList.add("chatbot__fab--open");
        chatbotInput.focus();
      }

      function closeChat() {
        chatbotWindow.classList.remove("chatbot--open");
        chatbotFab.classList.remove("chatbot__fab--open");
      }

      chatbotFab.addEventListener("click", () => chatbotWindow.classList.contains("chatbot--open") ? closeChat() : openChat());
      chatbotClose.addEventListener("click", closeChat);

      if (chatbotQuick) {
        chatbotQuick.innerHTML = quickQuestions.map(q => `<button class="chatbot__quick-btn">${q}</button>`).join("");
        chatbotQuick.querySelectorAll(".chatbot__quick-btn").forEach(btn => {
          btn.addEventListener("click", function() { handleUserMessage(this.textContent); });
        });
      }

      function addMessage(text, sender) {
        const msg = document.createElement("div");
        msg.className = "chatbot__msg chatbot__msg--" + sender;
        if (sender === "bot") msg.innerHTML = text.replace(/\n/g, "<br>");
        else msg.textContent = text;
        chatbotMessages.appendChild(msg);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }

      function showTyping() {
        const typing = document.createElement("div");
        typing.className = "chatbot__msg chatbot__msg--typing";
        typing.id = "chatbotTyping";
        typing.innerHTML = '<div class="chatbot__typing-dots"><span></span><span></span><span></span></div>';
        chatbotMessages.appendChild(typing);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }

      function removeTyping() {
        const el = document.getElementById("chatbotTyping");
        if (el) el.remove();
      }

      addMessage("👋 Hi! I'm the NutriStack AI assistant.\n\nI can help you understand essential nutrients, food sources, deficiency symptoms, and healthy eating tips.\n\nTry asking a question or tap one of the quick questions above!", "bot");

      async function handleUserMessage(text) {
        const trimmed = text.trim();
        if (!trimmed) return;
        addMessage(trimmed, "user");
        chatbotInput.value = "";
        showTyping();
        
        try {
          const response = await fetch("http://localhost:3000/api/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: trimmed })
          });
          
          removeTyping();
          
          if (!response.ok) throw new Error("Server error");
          
          const data = await response.json();
          addMessage(data.reply, "bot");
        } catch (error) {
          removeTyping();
          console.error("Chatbot API Error:", error);
          addMessage("Sorry, NutriStack AI is currently unavailable.", "bot");
        }
      }

      chatbotSend.addEventListener("click", () => handleUserMessage(chatbotInput.value));
      chatbotInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleUserMessage(chatbotInput.value);
        }
      });
