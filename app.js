const months = [
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
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


document.body.innerHTML = `<section class="section-center">
<article class="gift-img">
  <img src="./gift.jpeg" alt="gift photo">
</article>
<article class="gift-info">
  <h3>old iphone giveaway</h3>
  <h4 class="giveaway">
    giveaway ends on sunday, 15 september 2022, 8:00am
  </h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quaerat alias nam optio sapiente itaque. Asperiores amet autem debitis nemo?</p>
  <div class="deadline">
    <div class="deadline-format">
    <div>
    <h4 class="days">34</h4>
    <span>days</span>
    </div>
    </div>
    <div class="deadline-format">
    <div>
    <h4 class="hours">34</h4>
    <span>hours</span>
      </div>
      </div>
      <div class="deadline-format">
      <div>
        <h4 class="mins">34</h4>
        <span>mins</span>
        </div>
        </div>
        <div class="deadline-format">
        <div>
        <h4 class="sec">34</h4>
        <span>sec</span>
        </div>
        </div>
  </div>
</article>
</section>`;

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022,8,14,23,59,59);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes} pm`;

// future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);

let getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(today);
  // console.log(t);
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days,hours,minutes,seconds];
  
  let format = (item)=>{
    if(item < 10) return (item = `0${item}`);
    return item;
  }

  items.forEach((item,index)=>{
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">
    sorry, this giveaway has expired</h4>`
  }

}
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();