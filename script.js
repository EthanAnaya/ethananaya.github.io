document.addEventListener("DOMContentLoaded", function() {
    const notificationDisplay = document.getElementById('notification-display');

    fetch('notification-source.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            const notificationContent = tempDiv.querySelector('#notification-content');

            if (notificationContent) {
                notificationDisplay.textContent = notificationContent.innerText;
            }
        })
        .catch(error => {
            console.error('Error loading notification:', error);
            notificationDisplay.textContent = 'Failed to load notification content.';
        });
});
