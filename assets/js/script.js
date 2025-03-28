function showPopup(name, address, category, time, price, description, image) {
    document.getElementById('popup-title').innerText = name;
    document.getElementById('popup-address').innerText = address;
    document.getElementById('popup-category').innerText = category;
    document.getElementById('popup-time').innerText = time;
    document.getElementById('popup-price').innerText = price;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('popup-image').src = image;
    
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('main-menu').style.zIndex = '3000';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}
