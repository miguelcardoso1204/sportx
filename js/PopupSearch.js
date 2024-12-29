// Get modal, button, and close elements
const modal = document.getElementById("searchModal");
const searchButton = document.getElementById("searchButton");
const closeBtn = document.getElementsByClassName("close")[0];

// Show the modal when the search button is clicked
searchButton.onclick = function () {
    modal.style.display = "block";
}

// Close the modal when the user clicks anywhere outside the modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}