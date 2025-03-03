const decisionContainer = document.getElementById('decision-container');
const simulateButton = document.getElementById('simulate-decision');

// Sample scenarios
const scenarios = [
    { situation: "Last over, 12 runs needed to win.", options: ["Go for a big hit", "Play safe", "Take a single"] },
    { situation: "Bowler is struggling, what to do?", options: ["Change the bowler", "Give him another over", "Set attacking field"] }
];

// Function to load scenarios
function loadScenarios() {
    scenarios.forEach((scenario, index) => {
        const scenarioElement = document.createElement('div');
        scenarioElement.innerHTML = `<p>${scenario.situation}</p>`;
        scenario.options.forEach(option => {
            scenarioElement.innerHTML += `<button onclick="makeDecision('${option}')">${option}</button>`;
        });
        decisionContainer.appendChild(scenarioElement);
    });
}

// Function to handle decision making
function makeDecision(option) {
    alert(`You chose to: ${option}`);
}

// Load scenarios on page load
loadScenarios();