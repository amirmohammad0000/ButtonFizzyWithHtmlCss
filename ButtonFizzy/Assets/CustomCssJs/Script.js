"use strict";

let SectionButtonFizzy = document.querySelector(".section_button_fizzy");
let IconButtonFizzy = document.querySelector(".icon_button_fizzy");
let SetTime;
let StatusButton = true;

SectionButtonFizzy.addEventListener("click", () => {
  if (StatusButton) {
    let SectionButtonFizzy = document.querySelector(".section_button_fizzy");
    let IconButtonFizzy = document.querySelector(".icon_button_fizzy");

    SectionButtonFizzy.style.width = "150px";
    SectionButtonFizzy.style.borderRadius = "1000px";
    SectionButtonFizzy.style.transform = "rotate(90deg)";

    IconButtonFizzy.style.opacity = "1";
    IconButtonFizzy.style.bottom = "16px";
    IconButtonFizzy.style.animation = "RunArrow 1.5s 4";

    SetTime = setTimeout(() => {
      SectionButtonFizzy.innerHTML =
        '<i class="fa-solid fa-check icon_check"></i>';
      SectionButtonFizzy.style.width = "60px";
      SectionButtonFizzy.style.paddingLeft = "0px";
      SectionButtonFizzy.style.backgroundColor = "transparent";
    }, 6000);

    StatusButton = false;
  } else {
    let SectionButtonFizzy = document.querySelector(".section_button_fizzy");
    let IconButtonFizzy = document.querySelector(".icon_button_fizzy");

    SectionButtonFizzy.style.width = "220px";
    SectionButtonFizzy.style.borderRadius = "2px";
    SectionButtonFizzy.style.transform = "rotate(0deg)";
    SectionButtonFizzy.innerHTML =
      '<i class="fa-solid fa-arrow-right icon_button_fizzy"></i>' + "Downloads";
    SectionButtonFizzy.style.paddingLeft = "";
    SectionButtonFizzy.style.backgroundColor = "";
    SectionButtonFizzy = document.querySelector(".section_button_fizzy");

    IconButtonFizzy = document.querySelector(".icon_button_fizzy");
    IconButtonFizzy.style.animation = "";

    clearTimeout(SetTime);

    StatusButton = true;
  }
});
