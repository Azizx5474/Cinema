const login = document.getElementById("login");
const login_end = document.getElementById("login_end");
const scheme_svg = document.querySelector(".scheme-svg");
const cash = document.getElementById("cash");
const selected_places = document.getElementById("selected_places");
const payment_btn = document.getElementById("payment-btn");
const date_box = document.querySelectorAll(".date-box");
const selector_1 = document.getElementById("cimena-select");
const selector_2 = document.getElementById("cimena-time-select");

let count_date_box;
//date-box
const day_1 = document.getElementById("date-box1");
const day_2 = document.getElementById("date-box2");
const day_3 = document.getElementById("date-box3");
const day_4 = document.getElementById("date-box4");
let total_sum = 1;
function main() {
  if (localStorage.getItem("name")) {
    login_end.textContent = `Привет ${localStorage.getItem("name")}`;
} else {
    login_end.textContent = `Login`;
}
  login.addEventListener("click", () => {
    const name = prompt(`Введите ваше имя`);
    localStorage.setItem("name", name);
    login_end.textContent = `Привет ${name}`;
    //
});
  //Если есть имя в Local Storage, то мы его вставляем
  //Функция для выбора мест
  function select_area() {
    scheme_svg.addEventListener("click", (event) => {
      if (!event.target.classList.contains("booked")) {
        event.target.classList.toggle("active");
        let count_selected = scheme_svg.querySelectorAll(".active").length;
        total_sum = count_selected * 450;
        cash.textContent = `${total_sum}₽ `;
        selected_places.textContent = `Количество выбранных мест ${count_selected}`;
      }
    });
}
  select_area();

payment_btn.addEventListener("click", () => {
  const dates = document.querySelectorAll(".date-box");
  let is_active = false;
  for (let i = 0; i < dates.length; i++) {
    if (dates[i].classList.contains("day_select")) {
      is_active = true;
    }
  }
  let count_places = scheme_svg.querySelectorAll(".active").length;
  if (localStorage.getItem("name") && is_active && count_places > 0) {
    alert(`Кинотеатр${selector_1.value} 
Время${selector_2.value} 
Сумма оплаты${total_sum}₽ 
Мест${total_sum / 450}
  `);
  } else {
    alert("Зарегистрируйтесь перед покупкой и выберете места!");
  }
});
const data = document.querySelectorAll(".date-box");
  for (let i = 0; i < data.length; i++) {
    data[i].addEventListener("click", () => {
      console.log(1);
      data[i].classList.toggle("day_select");
      if (data[i].classList.contains("day_select")) {
        for (let j = 0; j < data.length; j++) {
          data[j].classList.remove("day_select");
          if (j == i) {
            data[i].classList.toggle("day_select");
          }
        }
      }
    });
  }
}
main();