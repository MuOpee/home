// script.js
function updateTime() {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Dhaka', // Set the timezone to GMT+6
        hour12: false, // Use 24-hour format
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const formattedTime = now.toLocaleTimeString('en-US', options);
    const formattedDate = now.toLocaleDateString('en-US', options);

    document.getElementById('time').textContent = formattedTime;
    document.getElementById('date').textContent = formattedDate;
}

// Update the clock every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();
