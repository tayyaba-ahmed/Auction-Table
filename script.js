$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsiveClass: true,
        center: true,
        nav: true,
        NavText: [
            "<i class='fa-solid fa-angle-left'></i>",
            "<i class='fa-solid fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        }
    })
    $(".testmonial_slider_area").owlCarousel({
        autoplay: true,
        slideSpeed: 1000,
        items: 3,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
        margin: 30,
        dots: true,
        responsive: {
            320: {
                items: 1
            },
            767: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }

    });
});

function valid1() {
    let a = document.getElementById("email").value;
    let btn = document.getElementById("btnn");
    if (a === "") {
        alert("Write a valid email address");
    } else if (a.includes("@")) {
        alert("You are subscribed!");
    } else {
        alert("Email address must contain '@'.");
    }
}
function bidding(cardIndex) {
    let btnn = document.querySelectorAll('.btn.haha')[cardIndex];
    let currentbid = document.querySelectorAll('.page2input')[cardIndex].value;
    let number = document.querySelectorAll('.biddinginput.number')[cardIndex].value;
    let currentbidchange = document.querySelectorAll('.page2input')[cardIndex];
    let currentbidchange1 = document.querySelectorAll('.biddinginput.page2input1')[cardIndex];
    let name = document.querySelectorAll('.biddinginput.name')[cardIndex].value;
    let email = document.querySelectorAll('.biddinginput.email')[cardIndex].value;
    let error_message = document.querySelectorAll('.biddiv.error_message')[cardIndex];
    let error_message1 = document.querySelectorAll('.biddiv.error_message1')[cardIndex];
    let error_message2 = document.querySelectorAll('.biddiv.error_message2')[cardIndex];
    let accepted = document.querySelectorAll('.accepted')[cardIndex];
    let nameRegex = /^[A-Za-z]{3,}(?:\s[A-Za-z]{3,})+$/;
    let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    var numberRegex = /^\$\d+$/;
    let currentbidvalue = parseFloat(currentbid.replace(/[^\d.]/g, ''));
    let numbervalue = parseFloat(number.replace(/[^\d.]/g, ''));
    let text;
    if (!nameRegex.test(name)) {
        text = "- Please Enter Valid Full Name (Each name should have minimum 3 characters)";
        error_message.innerHTML = text;
    } else {
        text = "";
        error_message.innerHTML = text;
    }
    let text1;
    if (!emailRegex.test(email)) {
        text1 = "- Please Enter Valid Email Address";
        error_message1.innerHTML = text1;
    } else {
        text1 = "";
        error_message1.innerHTML = text1;
    }
    let text2;
    if (!numberRegex.test(number) || numbervalue <= currentbidvalue) {
        text2 = "- Your Bid should start with $ and it should be greater than current bid (no need to write million)";
        error_message2.innerHTML = text2;
    } else {
        text2 = "";
        error_message2.innerHTML = text2;
    }
    if (text === "" && text1 === "" && text2 === "") {
        accepted.innerHTML = "if you've already sign up then your bid will be automatically accepted! Thanks for bidding!";
        currentbidchange.value = number + " million"
        currentbidchange1.value = number + " million"
        btnn.textContent = "Bid Again"
    } else {
        accepted.innerHTML = "";
    }
    console.log(jj)
}
function work() {
    let FirstName = document.getElementById("firstname").value;
    let LastName = document.getElementById("lastname").value;
    let PhoneN = document.getElementById("signupphone").value;
    let SignupEmail = document.getElementById("signupemail").value;
    let DateOB = document.getElementById("signupdob").value;
    let CardN = document.getElementById("cardnumber").value;
    let MMYY = document.getElementById("mmyy").value;
    let CVC = document.getElementById("cvc").value;
    let password = document.getElementById("signuppw").value;
    let error_message11 = document.getElementById("error_message11");
    let error_message12 = document.getElementById("error_message12");
    let error_message13 = document.getElementById("error_message13");
    let error_message14 = document.getElementById("error_message14");
    let error_message15 = document.getElementById("error_message15");
    let error_message16 = document.getElementById("error_message16");
    let error_message17 = document.getElementById("error_message17");
    let error_message18 = document.getElementById("error_message18");
    let error_message21 = document.getElementById("error_message21");
    let name2Regex = /^[A-Za-z]{3,}/;
    let name3Regex = /^[A-Za-z]{3,}/;
    let emaillRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    let numberRegex = /^(\+92|0)[0-9]{10}$/;
    let dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    let CardNRegex = /^\d{14}$/;
    let MMYYRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    let CVCRegex = /^\d{3}$/;
    let passwordRegex = /^.{6,}$/;
    let text;
    if (!name2Regex.test(FirstName)) {
        text = "Please Enter Valid First Name (Minimum 3 characters)";
        error_message11.innerHTML = text;
    } else {
        text = "";
        error_message11.innerHTML = text;
    }
    let text1;
    if (!name3Regex.test(LastName)) {
        text1 = "Please Enter Valid Last Name (Minimum 3 characters)";
        error_message12.innerHTML = text1;
    } else {
        text1 = "";
        error_message12.innerHTML = text1;
    }
    let text2;
    if (!numberRegex.test(PhoneN)) {
        text2 = "Please enter a valid phone number (11 characters and should start with +92/0";
        error_message13.innerHTML = text2;
    } else {
        text2 = "";
        error_message13.innerHTML = text2;
    }
    let text3;
    if (!dobRegex.test(DateOB)) {
        text3 = "Please enter in DD/MM/YYYY format";
        error_message15.innerHTML = text3;
    } else {
        text3 = "";
        error_message15.innerHTML = text3;
    }
    let text4;
    if (!emaillRegex.test(SignupEmail)) {
        text4 = "Please enter a valid email address";
        error_message14.innerHTML = text4;
    } else {
        text4 = "";
        error_message14.innerHTML = text4;
    }
    let text5;
    if (!CardNRegex.test(CardN)) {
        text5 = "Write a Valid Card Number (14 Characters)";
        error_message17.innerHTML = text5;
    } else {
        text5 = "";
        error_message17.innerHTML = text5;
    }
    let text6;
    if (!MMYYRegex.test(MMYY)) {
        text6 = "Please Enter in MM/YY format";
        error_message18.innerHTML = text6;
    } else {
        text6 = "";
        error_message18.innerHTML = text6;
    }
    let text7;
    if (!CVCRegex.test(CVC)) {
        text7 = "Please Enter Valid CVC (3 characters)";
        error_message21.innerHTML = text7;
    } else {
        text7 = "";
        error_message21.innerHTML = text7;
    }
    let text8;
    if (!passwordRegex.test(password)) {
        text8 = "Please enter a Valid Password (Minimum 6 characters)";
        error_message16.innerHTML = text8;
    } else {
        text8 = "";
        error_message16.innerHTML = text8;
    }
    if (text === "" && text1 === "" && text2 === "" && text3 === "" && text4 === "" && text5 === "" && text6 === "" && text7 === "" && text8 === "") {
        document.getElementById("registered").innerHTML = "You are registered :)"
        alert("You Are Registered Successfully");
    } else {
        document.getElementById("registered").innerHTML = ""
    }
};
function work2() {
    let error_message19 = document.getElementById("error_message19");
    let error_message20 = document.getElementById("error_message20");
    let username = document.getElementById("loginusername").value;
    let password = document.getElementById("loginpw").value;
    let usernameRegex = /^[A-Za-z]{3,}/;
    let passwordRegex = /^.{6,}$/;
    let text1;
    if (!usernameRegex.test(username)) {
        text1 = "Please Enter Valid Username (Minimum 3 characters)";
        error_message19.innerHTML = text1;
    } else {
        text1 = "";
        error_message19.innerHTML = text1;
    }
    let text2;
    if (!passwordRegex.test(password)) {
        text2 = "Please enter a Valid Password (Minimum 6 characters)";
        error_message20.innerHTML = text2;
    } else {
        text2 = "";
        error_message20.innerHTML = text2;
    }
    if (text1 === "" && text2 === "") {
        document.getElementById("login").innerHTML = "You are Login :)"
        alert("You Are Login Successfully");
    } else {
        document.getElementById("login").innerHTML = ""
    }
}
function contactclick() {
    let contactname = document.getElementById("contactname").value;
    let contactemail = document.getElementById("contactemail").value;
    let contactmessage = document.getElementById("message").value;
    let error_message50 = document.getElementById("error_message50");
    let error_message51 = document.getElementById("error_message51");
    let error_message52 = document.getElementById("error_message52");
    let contactnameRegex = /^[A-Za-z]{3,}/;
    let contactemailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    let messageRegex = /.{30,500}$/;
    let text;
    if (!contactnameRegex.test(contactname)) {
        text = "Please Enter Valid Name (Minimum 3 characters/Don't use digits)";
        error_message50.innerHTML = text;
    } else {
        text = "";
        error_message50.innerHTML = text;
    }
    let text1;
    if (!contactemailRegex.test(contactemail)) {
        text1 = "Please Enter Valid Email Address (no caps)";
        error_message51.innerHTML = text1;
    } else {
        text1 = "";
        error_message51.innerHTML = text1;
    }
    let text2;
    if (!messageRegex.test(contactmessage)) {
        text2 = "Please enter more than 30 and less than 500 Characters in Message Box";
        error_message52.innerHTML = text2;
    } else {
        text2 = "";
        error_message52.innerHTML = text2;
    }

    if (((text) || (text1) || (text2)) !== "") {
        return false;
    }
    alert("Form submitted successfully! Thank you for contacting us");
    return true;
}
function Tclick() {
    const titleElement = document.querySelector('.navbarbrand');
    const titleElement1 = document.querySelector('.p1');

    if (titleElement.textContent === "" || titleElement1.textContent === "") {
        titleElement.textContent = "Auction Table"
        titleElement1.textContent = "BID, WIN, SELL, PROFIT!"
      } else {
        titleElement.textContent = "";
        titleElement1.textContent = "";
      }
}
