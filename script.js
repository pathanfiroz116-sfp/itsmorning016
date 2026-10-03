// Small entrance animation
document.querySelectorAll('section').forEach((section, i) => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(18px)';
  section.style.transition = 'opacity .7s ease, transform .7s ease';
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('section').forEach(s => observer.observe(s));
