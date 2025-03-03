document.addEventListener("DOMContentLoaded", function () {
    const timelineContainer = document.querySelector(".timeline-container");
    const searchInput = document.getElementById("search");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

    const careerMilestones = [
        { "year": "1981", "event": "Birth", "description": "MS Dhoni was born on July 7, 1981, in Ranchi, Jharkhand." },
  { "year": "1998", "event": "Domestic Cricket", "description": "Dhoni was selected for the Bihar U-19 team and later played for Bihar in the Ranji Trophy." },
  { "year": "2001", "event": "Railway Job", "description": "Dhoni worked as a Ticket Collector (TTE) at Kharagpur Railway Station while pursuing cricket." },
  { "year": "2004", "event": "International Debut", "description": "Dhoni made his ODI debut for India against Bangladesh on December 23, 2004." },
  { "year": "2005", "event": "First ODI Century", "description": "Scored his maiden ODI century (148) against Pakistan in Vizag on April 5, 2005." },
  { "year": "2005", "event": "Highest ODI Score", "description": "Scored 183* against Sri Lanka in Jaipur on October 31, 2005, his highest ODI score." },
  { "year": "2005", "event": "Test Debut", "description": "Made his Test debut against Sri Lanka on December 2, 2005, in Chennai." },
  { "year": "2007", "event": "T20 World Cup Victory", "description": "Led India to victory in the inaugural ICC T20 World Cup in South Africa." },
  { "year": "2008", "event": "Full-Time Captain", "description": "Took over as India's ODI and Test captain, replacing Anil Kumble in Tests." },
  { "year": "2009", "event": "No.1 Test Ranking", "description": "Led India to the No.1 position in the ICC Test rankings for the first time." },
  { "year": "2011", "event": "World Cup Win", "description": "Hit the winning six in the ICC World Cup final, leading India to their 2nd ODI World Cup title." },
  { "year": "2013", "event": "Champions Trophy Win", "description": "Became the only captain to win all three ICC white-ball trophies by winning the Champions Trophy in England." },
  { "year": "2016", "event": "Stepping Down as Captain", "description": "Resigned as India's ODI and T20I captain but continued as a player." },
  { "year": "2018", "event": "IPL Victory", "description": "Led Chennai Super Kings to their third IPL title after their return from suspension." },
  { "year": "2019", "event": "Last International Match", "description": "Played his final international match in the World Cup semi-final against New Zealand on July 10, 2019." },
  { "year": "2020", "event": "Retirement", "description": "Announced his retirement from international cricket on August 15, 2020." },
  { "year": "2021", "event": "CSK IPL Victory", "description": "Led Chennai Super Kings to their fourth IPL title." },
  { "year": "2023", "event": "Fifth IPL Title", "description": "Guided CSK to their fifth IPL trophy, equaling Mumbai Indians' record." }
    ];

    function loadTimeline(filteredMilestones = careerMilestones) {
        timelineContainer.innerHTML = "";
        filteredMilestones.forEach((milestone, index) => {
            let item = document.createElement("div");
            item.classList.add("timeline-item");
            item.innerHTML = `<strong>${milestone.year}:</strong> ${milestone.event}`;
            item.dataset.description = milestone.description;
            item.addEventListener("click", showDetails);
            timelineContainer.appendChild(item);
        });
    }

    function showDetails(event) {
        modalTitle.textContent = event.target.innerText;
        modalDescription.textContent = event.target.dataset.description;
        modal.style.display = "flex";
    }

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();
        const filteredMilestones = careerMilestones.filter(milestone => 
            milestone.year.includes(searchText) || milestone.event.toLowerCase().includes(searchText)
        );
        loadTimeline(filteredMilestones);
    });

    loadTimeline();
});

document.addEventListener("DOMContentLoaded", function () {
    const achievementsContainer = document.querySelector(".achievements-container");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

    const achievements = [
        { 
            title: "🏆 ICC T20 World Cup 2007", 
            description: "MS Dhoni led India to victory in the inaugural T20 World Cup, defeating Pakistan in the final.", 
            image: "assets/dhoni.jpg" 
        },
        { 
            title: "🏆 ICC Cricket World Cup 2011", 
            description: "Dhoni played a match-winning knock of 91* and hit the iconic winning six, leading India to their second ODI World Cup title.", 
            image: "assets/dhoni.jpg"  
        },
        { 
            title: "🏆 ICC Champions Trophy 2013", 
            description: "Under Dhoni's captaincy, India remained unbeaten and won the Champions Trophy by defeating England in the final.", 
            image: "assets/dhoni.jpg"  
        },
        { 
            title: "🏆 Asia Cup Titles", 
            description: "MS Dhoni led India to multiple Asia Cup victories in 2010 and 2016, dominating the tournament.", 
            image: "assets/dhoni.jpg"  
        },
        { 
            title: "🏆 ICC Test Mace (No.1 Test Team)", 
            description: "India reached the No.1 Test ranking under Dhoni’s leadership in 2009 and held the spot for 18 months.", 
            image: "assets/dhoni.jpg"  
        },
        { 
            title: "🏆 5-Time IPL Champion with CSK", 
            description: "MS Dhoni led Chennai Super Kings to IPL titles in 2010, 2011, 2018, 2021, and 2023.", 
            image: "assets/dhoni.jpg"  
        },
        { 
            title: "🎖️ Padma Bhushan (2018)", 
            description: "Dhoni received India’s third-highest civilian award for his contribution to cricket.", 
            image: "assets/dhoni.jpg"  
        },
        { 
            title: "🎖️ Honorary Lieutenant Colonel (2011)", 
            description: "The Indian Army honored Dhoni with the rank of Lieutenant Colonel for his patriotism and leadership.", 
            image: "assets/dhoni.jpg"  
        },
        { 
            title: "💥 Most Sixes as Captain in ODIs", 
            description: "Dhoni smashed 204 sixes as an ODI captain, the highest by any leader in cricket history.", 
            image: "assets/dhoni.jpg"  
        },
        { 
            title: "🔥 Fastest Stumpings in Cricket", 
            description: "Known for lightning-fast hands, Dhoni holds the record for the most stumpings in international cricket.", 
            image: "assets/dhoni.jpg"  
        }
    ];

    function loadAchievements() {
        achievementsContainer.innerHTML = "";
        achievements.forEach((achievement) => {
            let card = document.createElement("div");
            card.classList.add("achievement-card");
            card.innerHTML = `
                <img src="${achievement.image}" alt="${achievement.title}">
                <h3>${achievement.title}</h3>
            `;
            card.dataset.description = achievement.description;
            card.addEventListener("click", showDetails);
            achievementsContainer.appendChild(card);
        });
    }

    function showDetails(event) {
        let card = event.currentTarget;
        modalTitle.textContent = card.querySelector("h3").innerText;
        modalDescription.textContent = card.dataset.description;
        modal.style.display = "flex";
    }

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    loadAchievements();
});

document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.getElementById("video-container");
    const searchBar = document.getElementById("search-bar");

    const videos = [
        {
            "title": "Dhoni 183 vs Sri Lanka (ODI)",
            "format": "ODI",
            "url": "https://www.youtube.com/embed/6d0RO0kcX2c"
          },
          {
            "title": "Dhoni 91* vs Sri Lanka (2011 World Cup Final)",
            "format": "ODI",
            "url": "https://www.youtube.com/embed/kp9eD2YNnH8"
          },
          {
            "title": "Dhoni 224 vs Australia (Test)",
            "format": "Test",
            "url": "https://www.youtube.com/embed/2pNGDYe7gmc"
          },
          {
            "title": "Dhoni 113 vs Pakistan (ODI)",
            "format": "ODI",
            "url": "https://www.youtube.com/embed/f1OXYiINj9I"
          },
          {
            "title": "Dhoni 54* vs KXIP (IPL 2010)",
            "format": "IPL",
            "url": "https://www.youtube.com/embed/8uZlF9Ct9fE"
          },
          {
            "title": "Dhoni's Winning Six (2011 WC Final)",
            "format": "ODI",
            "url": "https://www.youtube.com/embed/yA9sNl5RDCc"
          },
          {
            "title": "Dhoni Fastest Stumping (0.08s)",
            "format": "T20I",
            "url": "https://www.youtube.com/embed/OA8dzupUHgU"
          },
          {
            "title": "Dhoni's Best Finishes in IPL",
            "format": "IPL",
            "url": "https://www.youtube.com/embed/5MHN3msr2U8"
          },
          {
            "title": "Dhoni's Captaincy Masterclass (T20 WC 2007)",
            "format": "T20I",
            "url": "https://www.youtube.com/embed/5CkVj64pW7E"
          },
          {
            "title": "Dhoni's Iconic Run-Out of Guptill (2019 WC)",
            "format": "ODI",
            "url": "https://www.youtube.com/embed/4LQMnsmuHd0"
          }
    ];

    function loadVideos(filter = "All") {
        videoContainer.innerHTML = "";
        videos
            .filter(video => filter === "All" || video.format === filter)
            .forEach(video => {
                let videoCard = document.createElement("div");
                videoCard.classList.add("video-card");
                videoCard.innerHTML = `
                    <h3>${video.title}</h3>
                    <iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
                `;
                videoContainer.appendChild(videoCard);
            });
    }

    function searchVideos() {
        const query = searchBar.value.toLowerCase();
        videoContainer.innerHTML = "";
        videos
            .filter(video => video.title.toLowerCase().includes(query))
            .forEach(video => {
                let videoCard = document.createElement("div");
                videoCard.classList.add("video-card");
                videoCard.innerHTML = `
                    <h3>${video.title}</h3>
                    <iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
                `;
                videoContainer.appendChild(videoCard);
            });
    }

    function filterVideos(filter) {
        loadVideos(filter);
    }

    searchBar.addEventListener("keyup", searchVideos);
    loadVideos();
});

const scenarios = [
    {
        text: "It's the T20 World Cup Final Toss. What will you choose?",
        options: ["Bat First", "Bowl First", "Let Vice-Captain Decide"],
        points: [10, 5, -5]
    },
    {
        text: "Your opponent is attacking. What fielding setup will you use?",
        options: ["Aggressive Fielding", "Balanced Fielding", "Defensive Fielding"],
        points: [10, 5, -5]
    },
    {
        text: "Your best batsman is injured. Who will replace him?",
        options: ["Aggressive Power Hitter", "Stable Middle-Order Batsman", "Rookie Player"],
        points: [10, 5, -5]
    },
    {
        text: "Final Over! 10 Runs Needed. What is your strategy?",
        options: ["Go for Boundaries", "Rotate Strike", "Play Safe"],
        points: [10, 5, -5]
    },
    {
        text: "Match is tied. Will you go for a super over?",
        options: ["Yes", "No", "Discuss with team"],
        points: [10, -5, 5]
    }
];

let currentScenario = 0;
let score = 0;

function nextScenario() {
    if (currentScenario < scenarios.length) {
        document.getElementById("scenario-text").innerText = scenarios[currentScenario].text;
        let buttons = document.querySelectorAll(".decision-btn");
        scenarios[currentScenario].options.forEach((option, index) => {
            buttons[index].innerText = option;
        });
        document.getElementById("options").classList.remove("hidden");
    } else {
        endGame();
    }
}

function makeDecision(choice) {
    score += scenarios[currentScenario].points[choice];
    document.getElementById("score").innerText = score;

    // Update progress bar
    let progressBar = document.getElementById("progress-bar");
    let progress = (score / 50) * 100; 
    progressBar.style.width = progress + "%";

    currentScenario++;

    // Play sound effect
    let cheerSound = document.getElementById("cheer-sound");
    let booSound = document.getElementById("boo-sound");
    if (scenarios[currentScenario - 1].points[choice] > 0) {
        cheerSound.play();
    } else {
        booSound.play();
    }

    // Smooth transition effect
    document.querySelector("main").style.transform = "scale(1.05)";
    setTimeout(() => {
        document.querySelector("main").style.transform = "scale(1)";
    }, 300);

    nextScenario();
}

function endGame() {
    document.getElementById("scenario-text").innerText = "Game Over! Your final score: " + score;
    document.getElementById("options").classList.add("hidden");
    document.getElementById("simulate-decision").classList.add("hidden");
    saveScore();
}

function saveScore() {
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.push(score);
    leaderboard.sort((a, b) => b - a);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    updateLeaderboard();
}

function updateLeaderboard() {
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    let leaderboardElement = document.getElementById("leaderboard");
    leaderboardElement.innerHTML = "";
    leaderboard.slice(0, 5).forEach(score => {
        let li = document.createElement("li");
        li.innerText = "Score: " + score;
        leaderboardElement.appendChild(li);
    });
}

// Initialize leaderboard on page load
updateLeaderboard();
