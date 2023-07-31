/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Tiny Slider          *
 *     02.  Swiper slider        *
 *     03.  Countdown Js         * 
 *     04.  Maintenance js       * 
 *     05.  Data Counter         *
 *     06.  Datepicker js        *
 *     07.  Gallery filter js    * 
 *     08.  Tobii lightbox       * 
 *     09.  CK Editor            * 
 *     10.  Fade Animation       * 
 *     11.  Typed Text animation (animation) * 
 *     12.  Validation Form      * 
 *     13.  Switcher Pricing Plan* 
 *     14.  Cookies Policy       *
 *     15.  Back Button          *
 *     16.  Particles            *
 *     17.  Components           *
 *          1. Navtabs           *
 *          2. Modal             *
 *          3. Carousel          *
 *          4. Accordions        *
 *     18. Upload Profile        *
 *     19. Custom Dropdown       * (For Dropdown)
 *     20. Connect wallet        * (Only For MetaMask)
 ================================*/

//=========================================//
/*            01) Tiny slider              */
//=========================================//

if (document.getElementsByClassName("tiny-single-item").length > 0) {
  var slider = tns({
    // mode: "gallery",
    // animateIn: "animate__rotateInDownLeft",
    // animateOut: "animate__rotateOutDownLeft",
    container: ".tiny-single-item",
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: false,
    autoplayButtonOutput: false,
    // autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 1000,
    gutter: 16,
  });
}

if (document.getElementsByClassName("tiny-one-item").length > 0) {
  var slider = tns({
    container: ".tiny-one-item",
    items: 1,
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 0,
  });
}

if (document.getElementsByClassName("tiny-two-item").length > 0) {
  var slider = tns({
    container: ".tiny-two-item",
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
      768: {
        items: 2,
      },
    },
  });
}

//=========================================//
/*            02) Swiper slider            */
//=========================================//
try {
  var menu = [];
  var interleaveOffset = 0.5;
  var swiperOptions = {
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    on: {
      progress: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".slide-inner").style.transform =
            "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      },

      touchStart: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },

      setTransition: function (speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide-inner").style.transition =
            speed + "ms";
        }
      },
    },
  };

  // DATA BACKGROUND IMAGE
  var swiper = new Swiper(".swiper-container", swiperOptions);

  let data = document.querySelectorAll(".slide-bg-image");
  data.forEach((e) => {
    e.style.backgroundImage = `url(${e.getAttribute("data-background")})`;
  });
} catch (err) {}

//=========================================//
/*/*            05) Data Counter           */
//=========================================//

try {
  const counter = document.querySelectorAll(".counter-value");
  const speed = 2500; // The lower the slower

  counter.forEach((counter_value) => {
    const updateCount = () => {
      const target = +counter_value.getAttribute("data-target");
      const count = +counter_value.innerText;

      // Lower inc to slow and higher to slow
      var inc = target / speed;

      if (inc < 1) {
        inc = 1;
      }

      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter_value
        counter_value.innerText = (count + inc).toFixed(0);
        // Call function every ms
        setTimeout(updateCount, 1);
      } else {
        counter_value.innerText = target;
      }
    };

    updateCount();
  });
} catch (err) {}

//=========================================//
/*            06) Countdown                */
//=========================================//
try {
  var setEndDate1 = "December 29, 2023 6:0:0";
  var setEndDate2 = "January 13, 2024 5:3:1";
  var setEndDate3 = "January 22, 2024 1:0:1";
  var setEndDate4 = "February 14, 2024 1:2:1";
  var setEndDate5 = "March 01, 2024 1:6:6";
  var setEndDate6 = "March 15, 2024 2:5:5";
  var setEndDate7 = "April 08, 2024 5:1:4";
  var setEndDate8 = "April 20, 2024 1:6:3";
  var setEndDate9 = "May 30, 2024 1:5:2";

  function startCountDownDate(dateVal) {
    var countDownDate = new Date(dateVal).getTime();
    return countDownDate;
  }

  function countDownTimer(start, targetDOM) {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = start - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // add 0 at the beginning if days, hours, minutes, seconds values are less than 10
    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Output the result in an element with auction-item-x"
    document.querySelector("#" + targetDOM).textContent =
      days + " : " + hours + " : " + minutes + " : " + seconds;

    // If the count down is over, write some text
    if (distance < 0) {
      // clearInterval();
      document.querySelector("#" + targetDOM).textContent = "00 : 00 : 00 : 00";
    }
  }

  var cdd1 = startCountDownDate(setEndDate1);
  var cdd2 = startCountDownDate(setEndDate2);
  var cdd3 = startCountDownDate(setEndDate3);
  var cdd4 = startCountDownDate(setEndDate4);
  var cdd5 = startCountDownDate(setEndDate5);
  var cdd6 = startCountDownDate(setEndDate6);
  var cdd7 = startCountDownDate(setEndDate7);
  var cdd8 = startCountDownDate(setEndDate8);
  var cdd9 = startCountDownDate(setEndDate9);

  if (document.getElementById("auction-item-1"))
    setInterval(function () {
      countDownTimer(cdd1, "auction-item-1");
    }, 1000);
  if (document.getElementById("auction-item-2"))
    setInterval(function () {
      countDownTimer(cdd2, "auction-item-2");
    }, 1000);
  if (document.getElementById("auction-item-3"))
    setInterval(function () {
      countDownTimer(cdd3, "auction-item-3");
    }, 1000);
  if (document.getElementById("auction-item-4"))
    setInterval(function () {
      countDownTimer(cdd4, "auction-item-4");
    }, 1000);
  if (document.getElementById("auction-item-5"))
    setInterval(function () {
      countDownTimer(cdd5, "auction-item-5");
    }, 1000);
  if (document.getElementById("auction-item-6"))
    setInterval(function () {
      countDownTimer(cdd6, "auction-item-6");
    }, 1000);
  if (document.getElementById("auction-item-7"))
    setInterval(function () {
      countDownTimer(cdd7, "auction-item-7");
    }, 1000);
  if (document.getElementById("auction-item-8"))
    setInterval(function () {
      countDownTimer(cdd8, "auction-item-8");
    }, 1000);
  if (document.getElementById("auction-item-9"))
    setInterval(function () {
      countDownTimer(cdd9, "auction-item-9");
    }, 1000);
} catch (error) {}

try {
  if (document.getElementById("days")) {
    // The data/time we want to countdown to
    var eventCountDown = new Date("December 25, 2023 16:37:52").getTime();

    // Run myfunc every second
    var myfunc = setInterval(function () {
      var now = new Date().getTime();
      var timeleft = eventCountDown - now;

      // Calculating the days, hours, minutes and seconds left
      var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      // Result is output to the specific element
      document.getElementById("days").innerHTML =
        days + "<p class='count-head'>Days</p> ";
      document.getElementById("hours").innerHTML =
        hours + "<p class='count-head'>Hours</p> ";
      document.getElementById("mins").innerHTML =
        minutes + "<p class='count-head'>Mins</p> ";
      document.getElementById("secs").innerHTML =
        seconds + "<p class='count-head'>Secs</p> ";

      // Display the message when countdown is over
      if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = "";
        document.getElementById("hours").innerHTML = "";
        document.getElementById("mins").innerHTML = "";
        document.getElementById("secs").innerHTML = "";
        document.getElementById("end").innerHTML = "00:00:00:00";
      }
    }, 1000);
  }
} catch (err) {}

//=========================================//
/*/*            04) Maintenance js         */
//=========================================//

try {
  if (document.getElementById("maintenance")) {
    var seconds = 3599;
    function secondPassed() {
      var minutes = Math.round((seconds - 30) / 60);
      var remainingSeconds = seconds % 60;
      if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
      }
      document.getElementById("maintenance").innerHTML =
        minutes + ":" + remainingSeconds;
      if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById("maintenance").innerHTML = "Buzz Buzz";
      } else {
        seconds--;
      }
    }
    var countdownTimer = setInterval("secondPassed()", 1000);
  }
} catch (err) {}
