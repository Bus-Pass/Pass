const correctPassword = 'iforgor';

function checkPassword() {
    const inputPassword = document.getElementById('password-input').value;
    if (inputPassword === correctPassword) {
        document.getElementById('password-form').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
}

function updateClock() {
    const now = new Date();

    // Date parts (short form)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayOfWeek = days[now.getDay()];
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    // Time parts
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zeros to minutes and seconds
    const minuteString = minutes < 10 ? '0' + minutes : minutes;
    const secondString = seconds < 10 ? '0' + seconds : seconds;

    // Update the DOM
    document.getElementById('date').textContent = `${dayOfWeek} ${month} ${day} ${year}`;
    document.getElementById('time').textContent = `${hours}:${minuteString}:${secondString} ${amPm}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();
