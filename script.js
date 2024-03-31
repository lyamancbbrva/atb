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


// qiymet deyisen desktop
function rangee() {
  const rangeMonth = document.querySelector("#range-aylar").value;
  const rangePrice = document.querySelector("#range-qiymet").value;
  qiymet = rangePrice
  ay = rangeMonth
  qiymetDeyis()
}


// qiymeti deyisen

function qiymetDeyis(x) {
  if(x === 1 && qiymet <= 39900) qiymet+=100
  else if(x === 0 && qiymet >= 400) qiymet-=100
  else if(x === 3 && ay <= 47) ay+=1
  else if(x === 2 && ay >= 4) ay-=1

  ayliqOdenis = (((qiymet*11)/100)+ +qiymet)/ay;
  faizSec.querySelector("#ayliqodenis span").textContent = `${Math.trunc(ayliqOdenis)} ₼`;
  faizSec.querySelector(".value1 h5").textContent = `${qiymet} AZN`;
  faizSec.querySelector("#ayliqodenis-p").textContent = `${Math.trunc(ayliqOdenis)} ₼`
  faizSec.querySelector(".value1:nth-child(3) h5").textContent = ` ${ay} ay`;
 
 
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
                      <p>11%</p>
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
            <span>11%</span>
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
                    <select id="valyuta">
                      <option>valyuta</option>
                      <option value="azn">AZN</option>
                      <option value="usd">USD</option>
                    </select>
                    <select id="muddet">
                      <option value="muddet">müddət</option>
                      <option value="12">12</option>
                      <option value="24">24</option>
                      <option value="36">36</option>
                    </select>
                    <select id="odenis">
                      <option>faizlərin ödənilməsi</option>
                      <option value="muddetin sonunda">müddətin sonunda</option>
                      <option  value="ayliq odenis">aylıq ödəniş</option>
                    </select>
                    <input type="text"  id="mebleg" placeholder="məbləğ (minş 1000 AZN /USD)*"/>
                  </div>
                  <div id="ayliq-faiz">
                    <p>faizlər - aylıq</p>
                    <p>0% - 0 AZN</p>
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


const val1 = document.querySelector("#val1").value
let val2 = document.querySelector("#val2")
const sel1 = document.querySelector("#sel1").value
const sel2 = document.querySelector("#sel2").value


function calc(){
  val2.innerHTML = 5

  if(sel1 === "AZN" && sel2 === "EUR"){

  }
  

}
