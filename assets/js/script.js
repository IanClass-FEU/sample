function showPopup(restaurant) {
    const popup = document.getElementById("popup");
    const title = document.getElementById("popup-title");
    const description = document.getElementById("popup-description");

    const data = {
        gabel: "Traditional homemade meals with a touch of love.",
        gary: "Exotic drinks and gourmet steak platters.",
        piato: "Delicious grilled meats with unique seasoning.",
        pierre: "Seafood and steak with a modern twist."
    };

    title.textContent = restaurant.toUpperCase();
    description.textContent = data[restaurant];

    popup.style.display = "flex";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}
