const filterButtons = document.querySelectorAll('[data-filter]');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  document.querySelectorAll('.treatment-card').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
}));
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header nav');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기'); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', '메뉴 열기'); }));
const dialog = document.querySelector('#consult-dialog');
const program = document.querySelector('#program');
const result = document.querySelector('#consult-result');
document.querySelectorAll('[data-consult], [data-treatment]').forEach(button => button.addEventListener('click', () => { program.value = button.dataset.treatment || ''; result.hidden = true; dialog.showModal(); }));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
document.querySelector('#consult-form').addEventListener('submit', event => { event.preventDefault(); result.replaceChildren(); const title = document.createElement('strong'); title.textContent = program.value + ' 상담 준비사항'; const body = document.createElement('p'); body.textContent = '현재 사용 중인 화장품과 복용 중인 약, 이전 시술 이력, 궁금한 점을 정리해 주세요. 구체적인 진료 방향은 의료진과의 상담 후 결정됩니다.'; result.append(title, body); result.hidden = false; });
