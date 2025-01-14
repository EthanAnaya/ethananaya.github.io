document.addEventListener('DOMContentLoaded', function() {
    const notificationDisplay = document.getElementById('notification-display');
    
    fetch('notification-source.html')
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const content = doc.querySelector('#notification-content');
            if (content) {
                notificationDisplay.innerHTML = content.innerHTML;
            }
        })
        .catch(error => console.error('Error loading notification:', error));
});
