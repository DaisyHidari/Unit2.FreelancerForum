// List of names and occupations for freelancers
const names = ["Alice", "Bob", "Carol", "David", "Eva"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Consultant"];

// Initial arrays and functions
let freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 }
];

function renderFreelancers() {
    const freelancersList = document.getElementById("freelancersList");
    freelancersList.innerHTML = ""; 

    freelancers.forEach(freelancer => {
        const freelancerDiv = document.createElement("div");
        freelancerDiv.innerHTML = `<p>${freelancer.name}, ${freelancer.occupation}, starting at $${freelancer.startingPrice}</p>`;
        freelancersList.appendChild(freelancerDiv);
    });
}

function generateRandomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 1; 

    const newFreelancer = {
        name: randomName,
        occupation: randomOccupation,
        startingPrice: randomStartingPrice
    };

    freelancers.push(newFreelancer);
    renderFreelancers();
    updateAverageStartingPrice();
}

function updateAverageStartingPrice() {
    const averagePriceSpan = document.getElementById("averagePrice");
    const totalStartingPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const averagePrice = totalStartingPrice / freelancers.length;

    averagePriceSpan.textContent = averagePrice.toFixed(2); // Display average with 2 decimal places
}

renderFreelancers();

setInterval(generateRandomFreelancer, 5000); 