// script.js
document.addEventListener("DOMContentLoaded", function () {
    const notificationPopup = document.getElementById('notification-popup');
    const closeButton = document.getElementById('close-notification');

    // Fetch the notification HTML file
    fetch('notification.html')
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

            // Update the notification content
            if (notificationContent) {
                notificationPopup.innerHTML = notificationContent.innerHTML + '<button id="close-notification">Close</button>';

                // Re-assign close button functionality
                document.getElementById('close-notification').addEventListener('click', function () {
                    notificationPopup.style.display = 'none';
                });

                // Show the popup
                notificationPopup.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error loading notification:', error);
            notificationPopup.innerHTML = `<p style="color: red;">Failed to load notification!</p>`;
        });

    // Close button listener
    closeButton.addEventListener('click', () => {
        notificationPopup.style.display = 'none';
    });
});
