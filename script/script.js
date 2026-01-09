const people = [
  {
    name: '혜정님 이야기',
    img: 'image/혜정님.jpg'
  },
  {
    name: '민수님 이야기',
    img: 'image/민수님.svg'
  },
  {
    name: '지은님 이야기',
    img: 'image/지은님.svg'
  }
];

let index = 0;
let interval;

const img = document.getElementById('personImg');
const btn = document.getElementById('personBtn');

function updatePerson() {
  img.classList.add('fade-out');

  setTimeout(() => {
    img.src = people[index].img;
    btn.innerText = people[index].name;

    img.classList.remove('fade-out');
    img.classList.add('fade-in');
  }, 200);
}

function nextPerson() {
  index = (index + 1) % people.length;
  updatePerson();
}

function prevPerson() {
  index = (index - 1 + people.length) % people.length;
  updatePerson();
}

/* 🔥 자동 슬라이드 시작 */
function startAutoSlide() {
  interval = setInterval(nextPerson, 2000);
}

/* (선택) 마우스 올리면 멈추기 */
function stopAutoSlide() {
  clearInterval(interval);
}

/* 페이지 로드 시 실행 */
window.onload = () => {
  img.classList.add('fade-in');
  startAutoSlide();
};

/* (선택) 원형 영역에 마우스 올리면 멈춤 */
document.querySelector('.circle-wrap').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.circle-wrap').addEventListener('mouseleave', startAutoSlide);
