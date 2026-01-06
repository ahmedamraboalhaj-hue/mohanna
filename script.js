// Simple Scroll Reveal
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', reveal);
reveal(); // Run at start

// Smooth Scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// WhatsApp Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        const whatsappNumber = '201127833693'; // الشيخ مهنا ربيع

        const text = `السلام عليكم ورحمة الله وبركاته%0A%0A` +
            `الاسم: ${name}%0A` +
            `رقم الهاتف: ${phone}%0A` +
            `الرسالة: %0A${message}`;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

        window.open(whatsappUrl, '_blank');
    });
}
