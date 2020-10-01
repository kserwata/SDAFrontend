function update_timer() {
    const current_date = new Date();
    document.getElementById('timer-content').innerHTML = `${format_number(current_date.getDate())}-${format_number(current_date.getMonth() + 1)}-${current_date.getFullYear()} ${format_number(current_date.getHours())}:${format_number(current_date.getMinutes())}:${format_number(current_date.getSeconds())}`;
}

function format_number(input) {
    return (input < 10) ? `0${input}` : input;
}

window.onload = function() {
    setInterval(() => {
        update_timer();
    }, 1000);
}

// format number function using arrow function
// var format_number = (input) => (input < 10) ? `0${input}` : input;


// format number function 
/* var format_number = function(input) {
    return (input < 10) ? `0${input}` : input;
} */