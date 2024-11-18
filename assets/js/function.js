// Toggle dropdown visibility
function toggleDropdown() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('hidden');
}

document.getElementById('dropdownButton').addEventListener('click', toggleDropdown);

function showPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// To open popups on click
document.querySelector('.material-icons.add_circle').onclick = function () {
    showPopup('reminderPopup');
};

document.querySelector('.notifications').onclick = function () {
    const popup = document.getElementById('notificationsPopup');
    popup.classList.toggle('hidden');
};

document.addEventListener('click', function (event) {
    const popup = document.getElementById('notificationsPopup');
    const notificationIcon = document.querySelector('.notifications');

    if (!popup.contains(event.target) && !notificationIcon.contains(event.target)) {
        popup.classList.add('hidden');
    }
});

