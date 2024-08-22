// NAVBAR ADVERTISEMENT
const navbar  = document.querySelector(".navbarText");
gsap.fromTo(navbar,{
    duration: 14,
    x: "220%",
    ease: "linear",
    repeat: -1,
    yoyo:true
},{
    duration: 14,
    x: "-200%",
    ease: "linear",
    repeat: -1,
})

// SOCIAL ICONS
const socialIcons = document.querySelectorAll(".social-icon");
function socialIconAnimation() {
    gsap.to(this, {
        scale: 1.5,
        duration: 0.3,
        ease: "linear",
        repeat: -1,
        yoyo: true,
    });
}
function stopSocialIconAnimation() {
    gsap.killTweensOf(this); 
    gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: "linear",
    });
}
socialIcons.forEach(icon => {
    icon.addEventListener("mouseover", socialIconAnimation);
    icon.addEventListener("mouseleave", stopSocialIconAnimation);
});


const subNavbar = document.querySelector(".subNavbar");
gsap.from(subNavbar,{
    duration: .5,
    opacity : 0,
    y: "-50%",
    ease: "linear"
})

const cards = document.querySelector(".cards");
gsap.from(cards,{
    duration: 1.2,
    opacity : 0,
    y: "50%",
    ease: "bounce"
})














