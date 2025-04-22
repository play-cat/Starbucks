// overlay
const overlay = document.querySelector('.overlay');

// cta button
const ctaBtn = document.querySelector('.btn_beast');

// thx modal
const thxModal = document.querySelector('.thx-modal');
const thxCloseBtn = document.querySelector('#thx');

// forms
const formContactUs = document.querySelector('#contact-us-form');
const formContactUsInput = document.querySelector('#name');
const formContactUsTextarea = document.querySelector('#message');

formContactUsInput.addEventListener('input', e => {
  let name = e.target.value.replace(/[^a-zA-Zа-яА-Я ]/g, '');
  formContactUsTextarea.value = `My name is ${
    name || '__enter-name__'
  }, and I’m interested in your services. I’d like to know more about the training programs and enrollment options. Thank you in advance for your response!`;
});

// submit form
formContactUs.addEventListener('submit', e => {
  const inputs = e.currentTarget.querySelectorAll('input');

  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  });

  if (!isValid) {
    e.preventDefault();
    console.log('not valid');
  } else {
    formContactUs.reset();
    e.preventDefault();
    console.log('send');
    toggleModal();
  }
});

const toggleModal = () => {
  overlay.classList.toggle('none');
  thxModal.classList.toggle('hide');
  document.body.classList.toggle('no-scroll');
};

ctaBtn.addEventListener('click', toggleModal);

thxCloseBtn.addEventListener('click', toggleModal);

overlay.addEventListener('click', toggleModal);
