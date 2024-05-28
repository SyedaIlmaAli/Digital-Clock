"use strict";
function clock() {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let hrs = document.getElementById("hours");
    let mins = document.getElementById("minutes");
    let secs = document.getElementById("seconds");
    let period = document.getElementById("AMPM");
    let day = document.getElementById("dd");
    let date = document.getElementById("ddmmyy");
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let d = time.getDay();
    let dd = time.getDate();
    let mm = time.getMonth();
    let yy = time.getFullYear();
    let ampm = h >= 12 ? "PM" : "AM";
    if (h > 12) {
        h = h - 12;
    }
    if (h === 0) {
        h = 12;
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hrs.innerHTML = h;
    mins.innerHTML = m;
    secs.innerHTML = s;
    period.innerHTML = ampm;
    day.innerHTML = days[d];
    date.innerHTML = `${months[mm]} ${dd}, ${yy}`;
}
clock();
setInterval(clock, 1000);
