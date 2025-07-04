// // Toggle Aside Navigation
// const navToggler = document.querySelector(".nav-toggler");
// const aside = document.querySelector(".aside");
// const mainContent = document.querySelector(".main-content");

// navToggler.addEventListener("click", () => {
//     aside.classList.toggle("open");
//     mainContent.classList.toggle("open");
// });

// // Section Switching
// const navLinks = document.querySelectorAll(".nav li a");
// const allSections = document.querySelectorAll(".section");

// navLinks.forEach((link) => {
//     link.addEventListener("click", function () {
//         // Remove 'active' from all links
//         navLinks.forEach((nav) => nav.classList.remove("active"));
//         this.classList.add("active");

//         // // Show corresponding section
//         // const target = this.textContent.trim().toLowerCase();
//         // allSections.forEach((section) => {
//         //     if (section.classList.contains(target)) {
//         //         section.classList.remove("hidden");
//         //     } else {
//         //         section.classList.add("hidden");
//         //     }
//         // });
//     });
// });

var typed = new Typed(".typing", {
    strings: ["MCA Graduate","Aspiring Web Developer" ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      allSection=document.querySelectorAll(".section"),
      totalSection = allSection.length;


for (let i = 0; i < totalNavList; i++) {

    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {


        for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
        
    }




        for (let j = 0; j < totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section")
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth<1200){
            asideSectionTogglerBtn();
        }
    })
}
function showSection(element){
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
        
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}




const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () =>
     {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection;i++){
    allSection[i].classList.toggle("open");
 }

}
//gpt
document.addEventListener('DOMContentLoaded', function () {
  const downloadBtn = document.getElementById('downloadCV');

  if (downloadBtn) {
    downloadBtn.addEventListener('click', function (event) {
      event.preventDefault();

      const cvUrl = 'immage/Dibyasmruti_Routray_CV.pdf.pdf'; // ✅ Correct path
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Dibyasmruti_Routray_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});


 


  // send mail
// function sendmail() {
//   let p = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     subject: document.getElementById("sub").value,
//     message: document.getElementById("msg").value,
//     phone:document.getElementById("num").value,
//     gender:document.getElementById("g").value
//   };

//   // Simple email validation regex
//   let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(p.email)) {
//     alert("Please enter a valid email address.");
//     return; // Stop sending email if invalid
//   }

//   emailjs.send("service_msi4k6a", "template_h501awk", p)
//     .then(function(response) {
//       alert("Hi, your email has been sent. Thank you!");

//       // Clear all fields
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("sub").value = "";
//       document.getElementById("msg").value = "";
//       document.getElementById("num").value = "";
//       document.getElementById("g").value = "";
//     })
//     .catch(function(error) {
//       alert("Failed to send email. Please try again.");
//       console.error(error);
//     });
// }




function sendmail() {
  // Show loader
  document.getElementById("loader").style.display = "block";

  let p = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("sub").value,
    message: document.getElementById("msg").value,
    phone: document.getElementById("num").value,
    gender: document.getElementById("g").value
  };

  // Email validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(p.email)) {
    alert("Please enter a valid email address.");
    document.getElementById("loader").style.display = "none";
    return;
  }

  // Phone number validation (10 digits)
  let phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(p.phone)) {
    alert("Please enter a valid 10-digit phone number.");
    document.getElementById("loader").style.display = "none";
    return;
  }

  // Check required fields
  if (!p.name || !p.subject || !p.message || !p.gender) {
    alert("Please fill in all the required fields.");
    document.getElementById("loader").style.display = "none";
    return;
  }

  // Send email using EmailJS
  emailjs.send("service_msi4k6a", "template_h501awk", p)
    .then(function(response) {
      alert("Hi, your email has been sent. Thank you!");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("sub").value = "";
      document.getElementById("msg").value = "";
      document.getElementById("num").value = "";
      document.getElementById("g").value = "";
    })
    .catch(function(error) {
      alert("Failed to send email. Please try again.");
      console.error(error);
    })
    .finally(function() {
      // Hide loader after send completes
      document.getElementById("loader").style.display = "none";
    });
}
