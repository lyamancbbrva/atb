// burger menu

const hiddenNav = document.querySelector("#hidden-nav");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const faX = document.querySelector(".x");
const burgerMenu = document.querySelector("#burger-menu");
function hideNav(y) {
  y === 1
    ? ((main.style.display = "none"),
      (burgerMenu.style.display = "none"),
      (footer.style.display = "none"),
      (faX.style.display = "block"),
      (hiddenNav.style.transform = "translateX(0)"),
      (y = 0))
    : ((main.style.display = "block"),
      (burgerMenu.style.display = "block"),
      (footer.style.display = "block"),
      (faX.style.display = "none"),
      (hiddenNav.style.transform = "translateX(-100%)"));
}

// slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.3,
  breakpoints: {
    768: {
      slidesPerView: "auto",
    },
  },
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// accardion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const faizSec = document.querySelector(".faiz-sec");
const nagdBtn = document.querySelector(".active-nagd");
const emanetBtn = document.querySelector(".emanet-btn");
const hesab1 = document.querySelector("#hesab1");
const hesab2 = document.querySelector("#hesab2");

let qiymet = 5000;
let ay = 12;
let ayliqOdenis = 442;
let faiz = 11;
let il = 0;
// let faiz2 = 0

// qiymet deyisen desktop
function rangee() {
  const rangeMonth = document.querySelector("#range-aylar").value;
  const rangePrice = document.querySelector("#range-qiymet").value;
  qiymet = rangePrice;
  ay = rangeMonth;
  qiymetDeyis();
}

// qiymeti deyisen

function qiymetDeyis(x) {
  if (x === 1 && qiymet <= 39900) qiymet += 100;
  else if (x === 0 && qiymet >= 400) qiymet -= 100;
  else if (x === 3 && ay <= 47) ay += 1;
  else if (x === 2 && ay >= 4) ay -= 1;

  if (ay == 13)  faiz += 2;
  else if (ay == 24) faiz = 14;
  else if (ay == 36) faiz = 15;
  else if (ay == 48) faiz = 16;
  else if(ay < 13) faiz = 11;


  ayliqOdenis = ((qiymet * faiz) / 100 + +qiymet) / ay;
  faizSec.querySelector("#ayliqodenis span").textContent = `${Math.trunc(ayliqOdenis)} ₼`;
  faizSec.querySelector(".value1 h5").textContent = `${qiymet} AZN`;
  faizSec.querySelector("#ayliqodenis-p").textContent = `${Math.trunc( ayliqOdenis )} ₼`;
  faizSec.querySelector(".value1:nth-child(3) h5").textContent = `${ay} ay`;
  faizSec.querySelector(".faiz").textContent = `${faiz}%`;
  faizSec.querySelector(".faiz-2").textContent = `${faiz}%`;
}

// deyisen sectionlar
function changeHesab(x) {
  if (x === 1) {
    const buttons = [
      { element: nagdBtn, bgColor: "#6f0bbb", textColor: "#fff" },
      { element: hesab1, bgColor: "#6f0bbb", textColor: "#fff" },
      { element: emanetBtn, bgColor: "#f3f3f3", textColor: "#8f8f8f" },
      { element: hesab2, bgColor: "#f3f3f3", textColor: "#8f8f8f" },
    ];

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.element.style.backgroundColor = button.bgColor;
      button.element.style.color = button.textColor;
    }

    faizSec.innerHTML = `
                    <div class="hesab-values">
                    <div class="value1 value">
                      <button onclick="qiymetDeyis(0)">-</button>
                      <div class="value-inner">
                        <div class="value-texts">
                          <p>hansı məbləğ arzunu reallaşdırar?</p>
                        <h5>${qiymet} AZN</h5>
                        </div>
                        <input type="range" class="mobile-none" id="range-qiymet" min="300" max="40000" value="5000" oninput="rangee()" step="100" />
                      </div>
                      <button onclick="qiymetDeyis(1)">+</button>
                    </div>
                    <div class="min-max-texts">
                      <p>300</p>
                      <p>40 000</p>
                    </div>
                    <div class="value1 value">
                      <button onclick="qiymetDeyis(2)">-</button>
                      <div class="value-inner">
                        <div class="value-texts"><p>müddəti seçin</p>
                          <h5>${ay} ay</h5>
                          </div>
                        <input type="range" class="mobile-none" min="3" max="48" value="12" id="range-aylar" oninput="rangee()"/>
                      </div>
                      <button onclick="qiymetDeyis(3)">+</button>
                    </div>
                    <div class="min-max-texts">
                      <p>3 ay</p>
                      <p>48 ay</p>
                    </div>
                    <div class="sifaris-qaydalari mobile-none">
                      <div id="check" onclick="checkNone()">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p>"sifariş" düyməsini basaraq <a href="">müraciət qaydaları</a> ilə razılaşmış olursunuz</p>
                    </div>
                  </div>
                  <div class="faiz-derecesi mobile-none">
                  <h5>bizim <br /> təklif</h5>
                  <div class="faiz-derecesi-texts">
                    <div>
                      <h6>faiz dərəcəsi</h6>
                      <p class="faiz">${faiz}%</p>
                    </div>
                    <div>
                      <h6>aylıq ödəniş</h6>
                      <p id="ayliqodenis-p">${ayliqOdenis}₼</p>
                    </div>
                  </div>
                  <button class="sifaris">sifaris</button>
                </div>
                <div class="faizler">
          <div class="faiz">
            <p>faiz dərəcəsi</p>
            <span class="faiz-2">${faiz}%</span>
          </div>
          <hr>
          <div class="faiz" id="ayliqodenis">
            <p>aylıq ödəniş</p>
            <span>${ayliqOdenis} ₼</span>
          </div>
          <hr>
        </div>
        <button class="sifaris sifaris-mobile">sifaris</button>
         `;
  } else {
    const buttons = [
      { element: nagdBtn, bgColor: "#f3f3f3", textColor: "#8f8f8f" },
      { element: hesab1, bgColor: "#f3f3f3", textColor: "#8f8f8f" },
      { element: emanetBtn, bgColor: "#6f0bbb", textColor: "#fff" },
      { element: hesab2, bgColor: "#6f0bbb", textColor: "#fff" },
    ];

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.element.style.backgroundColor = button.bgColor;
      button.element.style.color = button.textColor;
    }
    faizSec.innerHTML = `
                  <div id="gelir-sec">
                  <div id="gelir-flex">
                  <div id="selects">
                    <select id="valyuta" oninput="selectCalc()">
                      <option>valyuta</option>
                      <option value="AZN">AZN</option>
                      <option value="USD">USD</option>
                    </select>
                    <select id="muddet" oninput="selectCalc()">
                      <option value="muddet">müddət</option>
                      <option value="12">12</option>
                      <option value="24">24</option>
                      <option value="36">36</option>
                    </select>
                    <select id="odenis" oninput="selectCalc()">
                      <option>faizlərin ödənilməsi</option>
                      <option value="muddetin sonunda">müddətin sonunda</option>
                      <option  value="ayliq odenis">aylıq ödəniş</option>
                    </select>
                    <input type="text"  id="mebleg" placeholder="məbləğ (min. 1000 AZN /USD)*"  oninput="selectCalc()"/>
                  </div>
                  <div id="ayliq-faiz">
                    <p>faizlər - aylıq</p>
                    <p id="faiz2">${faiz2}% - ${ayliqEmanet} AZN</p>
                  </div>
                  </div>
                  <div class="gelir-btn">
                  <button class="sifaris gelir-sifaris">sifaris</button>
                  </div>
                </div> `;
    console.log(x);
  }
}
changeHesab(1);

const val1 = document.querySelector("#val1")
let val2 = document.querySelector("#val2");
const sel1 = document.querySelector("#sel1")
const sel2 = document.querySelector("#sel2");

function calc() {

  let kod = '';
    if (sel1.value == 'EUR') {
      if (sel2.value == 'GBP') {
        kod = (val1.value * 0.8346).toFixed(2);
        console.log(kod);

      } else if (sel2.value == 'EUR') {
        kod = val1.value;
        console.log(kod);
      }
      else{
        kod = (val1.value * 1.8120).toFixed(2);
        console.log(kod);
      }
    } 
    
    
    else if (sel1.value == 'AZN') {
      if (sel2.value == 'EUR') {
        kod = (val1.value * 0.5402).toFixed(2);
        console.log(kod);

      } else if (sel2.value == 'AZN') {
        kod = val1.value ;
        console.log(kod);
      }
        else{
          kod = (val1.value * 0.4606).toFixed(2);
          console.log(kod);
        }
      }
       
    else if(sel1.value == 'GBP'){
        if (sel2.value == 'AZN') {
          kod = (val1.value * 2.1110).toFixed(2);
          console.log(kod);
        }
        else if(sel2.value == 'EUR'){
          kod = (val1.value * 1.1405).toFixed(2);
          console.log(kod);
        }
        else{
          kod = val1.value ;
          console.log(kod);
        }

      }
  val2.innerHTML = kod
    
  
}




// o birisi select ifnen olan


let faiz2 = 0
let ayliqEmanet = 0
let  valyutaAd = 'AZN'
function selectCalc() {
  const muddet = document.querySelector("#muddet").value
  const valyuta = document.querySelector("#valyuta").value
  const odenis = document.querySelector("#odenis").value
  const mebleg = document.querySelector("#mebleg").value
  
  if (valyuta === 'AZN') {
    valyutaAd = 'AZN'
    if (muddet === '12') {
      if (odenis === "muddetin sonunda") faiz2 = 5.5
          else faiz2 = 5;
        } 
        if (muddet === '24') {
          if (odenis === "muddetin sonunda") faiz2 = 6.5
          else faiz2 = 6;
          
          if (muddet === '36') {
            if (odenis === "muddetin sonunda") faiz2 = 9
            else faiz2 = 8;
          } 
        } 
      }
      else faiz2 = 0.1; valyutaAd = 'USD'
   
      ayliqEmanet = (mebleg*faiz2)/100
      faizSec.querySelector("#faiz2").textContent = `${faiz2}% - ${ayliqEmanet} ${valyutaAd}`
    }



