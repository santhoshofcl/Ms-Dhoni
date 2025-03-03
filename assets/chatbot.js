document.addEventListener("DOMContentLoaded", function () {
    const chatWindow = document.getElementById("chat-window");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-message");

    // Sample responses (Replace with AI API integration)
    const responses = {
        "hi": "Hello! How can I help you?",
        "who is ms dhoni?": "MS Dhoni, also known as 'Captain Cool,' is a former Indian cricketer and one of the most successful captains in cricket history. He is known for his calm demeanor, sharp cricketing mind, and exceptional finishing ability.",
        "what is dhoni's full name?": "Mahendra Singh Dhoni.",
        "when was dhoni born?": "MS Dhoni was born on July 7, 1981, in Ranchi, Jharkhand, India.",
        "what are dhoni's major achievements?": "Dhoni led India to victories in the 2007 T20 World Cup, 2011 ODI World Cup, and 2013 Champions Trophy. He has also won multiple IPL titles with Chennai Super Kings.",
        "which world cups did dhoni win?": "Dhoni captained India to victory in the 2007 ICC T20 World Cup, the 2011 ICC Cricket World Cup, and the 2013 ICC Champions Trophy.",
        "when did dhoni retire from international cricket?": "MS Dhoni announced his retirement from international cricket on August 15, 2020.",
        "how many IPL titles has dhoni won?": "MS Dhoni has won 5 IPL titles (2010, 2011, 2018, 2021, and 2023) as the captain of Chennai Super Kings.",
        "what is dhoni's highest ODI score?": "MS Dhoni's highest ODI score is 183* against Sri Lanka in 2005.",
        "what is dhoni's role in cricket?": "Dhoni was a wicketkeeper-batsman and captain. He was known for his exceptional finishing skills and tactical brilliance on the field.",
        "what is dhoni's batting style?": "Dhoni is a right-handed batsman known for his aggressive yet calculated finishing style.",
        "what is dhoni's jersey number?": "Dhoni's jersey number is 7.",
        "where does dhoni live?": "MS Dhoni lives in Ranchi, Jharkhand, India. He owns a farmhouse named 'Kailashpati' in Ranchi.",
        "does dhoni play IPL now?": "Yes, MS Dhoni continues to play in the IPL as the captain of Chennai Super Kings (CSK).",
        "what is dhoni's nickname?": "MS Dhoni is popularly known as 'Captain Cool' and 'Mahi' by his fans.",
        "when did dhoni make his international debut?": "Dhoni made his ODI debut on December 23, 2004, against Bangladesh, his Test debut on December 2, 2005, against Sri Lanka, and his T20I debut on December 1, 2006, against South Africa.",
        "bye": "Goodbye! Have a great day!",
        "default": "I'm not sure about that. Try asking something else!"
    };
    

    function addMessage(message, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.innerHTML = message;
        chatWindow.appendChild(messageDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to latest message
    }

    function getBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        return responses[lowerCaseMessage] || responses["default"];
    }

    function simulateTyping(callback) {
        const typingDiv = document.createElement("div");
        typingDiv.classList.add("message", "bot", "typing");
        typingDiv.innerHTML = "MS Dhoni is typing...";
        chatWindow.appendChild(typingDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;

        setTimeout(() => {
            chatWindow.removeChild(typingDiv);
            callback();
        }, 1000); // Simulate typing delay
    }

    sendButton.addEventListener("click", function () {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        addMessage(userMessage, "user");
        userInput.value = "";

        simulateTyping(() => {
            const botResponse = getBotResponse(userMessage);
            addMessage(botResponse, "bot");
        });
    });

    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
});
