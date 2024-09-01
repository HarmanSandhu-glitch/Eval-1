const gridImages = document.querySelectorAll('.gridImage');
gridImages.forEach(image => {
  image.addEventListener('mouseover', () => {
    gsap.to(image, {
      scale: 1.1,
      duration: 0.8,
      ease: 'power1.inOut',
    });
  });
  image.addEventListener('mouseleave', () => {
    gsap.to(image, {
      scale: 1,
      duration: 0.3,
      ease: 'power1.inOut',
    });
  });
});


const cards = [
  { card: document.querySelector('#card1'), circle: document.querySelector('#circle1') , check: document.querySelector('#check1') },
  { card: document.querySelector('#card2'), circle: document.querySelector('#circle2') , check: document.querySelector('#check2') },
  { card: document.querySelector('#card3'), circle: document.querySelector('#circle3') , check: document.querySelector('#check3') }
];

let activeCard = null;

function setActiveCard(index) {
  if (activeCard !== null) {
      cards[activeCard].card.style.border = '2px solid #212327';
      cards[activeCard].circle.style.backgroundColor = 'black';
      cards[activeCard].circle.style.display = '';
      cards[activeCard].check.style.display = '';
  }

  if (activeCard === index) {
      activeCard = null;
  } else {
      cards[index].card.style.border = '2px solid #E0218A';
      cards[index].circle.style.backgroundColor = 'black';
      cards[index].circle.style.display = 'block';
      cards[index].check.style.display = 'block';
      activeCard = index;
  }
}

cards.forEach((item, index) => {
  item.card.addEventListener('click', () => setActiveCard(index));
});

const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');

card1.addEventListener('mouseover', () => {
  gsap.to(card1, {
    scale: 1.02,
    duration: 0.3,
    ease: 'power1.inOut',
  });
});

card1.addEventListener('mouseleave', () => {
  gsap.to(card1, {
    scale: 1,
    duration: 0.3,
    ease: 'power1.inOut',
  });
});

card2.addEventListener('mouseover', () => {
  gsap.to(card2, {
    scale: 1.02,
    duration: 0.3,
    ease: 'power1.inOut',
  });
});

card2.addEventListener('mouseleave', () => {
  gsap.to(card2, {
    scale: 1,
    duration: 0.3,
    ease: 'power1.inOut',
  });
});

card3.addEventListener('mouseover', () => {
  gsap.to(card3, {
    scale: 1.02,
    duration: 0.3,
    ease: 'power1.inOut',
  });
});

card3.addEventListener('mouseleave', () => {
  gsap.to(card3, {
    scale: 1,
    duration: 0.3,
    ease: 'power1.inOut',
  });
});

