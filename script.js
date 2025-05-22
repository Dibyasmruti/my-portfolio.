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


  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_9tw97tw", "template_h501awk", this)
      .then(() => {
        alert("Message sent successfully!");
      }, (err) => {
        alert("Failed to send email. " + JSON.stringify(err));
      });
  });
 // send mail

  function sendmail(){
    let p ={
      name :document.getElementById("name").value ,
      email : document.getElementById("email").value ,
      subject:document.getElementById("sub").value ,
      message:document.getElementById("msg").value 

    }
    emailjs.send("service_msi4k6a", "template_h501awk",p).then(alert("Hy,Your Email Has Been Send . Thanku !"))
  }




