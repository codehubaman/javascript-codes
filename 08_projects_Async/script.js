const interval = (str) => {
    const now = new Date(); // Create a Date object for the current time
    const formattedDate = now.toLocaleString('en-US', {
        month: 'long',    // Full month name (e.g., "October")
        day: 'numeric',   // Day of the month (e.g., "5")
        year: 'numeric',  // Full year (e.g., "2023")
        hour: 'numeric',  // Hour (e.g., "10")
        minute: 'numeric', // Minute (e.g., "30")
        second: 'numeric', // Second (e.g., "45")
        hour12: true      // Use 12-hour format (e.g., "10:30:45 AM")
    })
    console.log(str, formattedDate);
}


const timeexecute = setInterval(interval, 4000, "hii");
// const timeexecute = setInterval(interval, 5000, "hii"); // 5 seconds"
//  to stop the timer

clearInterval(timeexecute);
