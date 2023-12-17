export function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById('contact').elements['name'].value;
  const email = document.getElementById('contact').elements['email'].value;
  const phone = document.getElementById('contact').elements['tel'].value;
  const message = document.getElementById('contact').elements['message'].value;

  const subject = encodeURIComponent('Contact Form Submission');
  const body = encodeURIComponent(`Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`);

  window.location.href = `mailto:ben.b.gardiner@gmail.com?subject=${subject}&body=${body}`;
};
