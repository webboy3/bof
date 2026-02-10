// -----------------------------
// SAVE USER ID FUNCTIONALITY
// -----------------------------
window.onload = () => {
    const savedUserId = localStorage.getItem("userId");

    if (savedUserId) {
        document.querySelector("#userId").value = savedUserId;
        document.querySelector("#saveUserId").checked = true;
    }
};

// -----------------------------
// LOGIN FUNCTION
// -----------------------------
function login() {
    const userId = document.querySelector("#userId").value.trim();
    const password = document.querySelector("#password").value.trim();
    const saveId = document.querySelector("#saveUserId").checked;

    if (userId === "" || password === "") {
        alert("Please enter both your User ID and Password.");
        return;
    }

    // Save user ID if checkbox checked
    if (saveId) {
        localStorage.setItem("userId", userId);
    } else {
        localStorage.removeItem("userId");
    }

    // Fake login process
    alert("Login successful (continue and validate your card).");
}

// -----------------------------
// SEARCH BAR FUNCTIONALITY
// -----------------------------
document.querySelector("#searchInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        performSearch();
    }
});

function performSearch() {
    const query = document.querySelector("#searchInput").value.trim();

    if (query === "") {
        alert("Please enter a search term.");
        return;
    }

    alert("You searched for: " + query);
}

// -----------------------------
// LET’S TALK BUTTON
// -----------------------------
function openTalkModal() {
    alert("A representative will contact you soon! (demo modal)");
}
