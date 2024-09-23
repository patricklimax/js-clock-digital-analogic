let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();


const clockSpace = document.getElementById("clock");

const clock = () => {
  let dateDay = new Date();
  let hh = dateDay.getHours();
  let mm = dateDay.getMinutes();
  let ss = dateDay.getSeconds();

  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;
  ss = ss < 10 ? `0${ss}` : ss;

  let clockTime = `${hh} : ${mm} : ${ss}`;
  clockSpace.textContent = clockTime;
  
};

clock();
setInterval(clock, 1000);