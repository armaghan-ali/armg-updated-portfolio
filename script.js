const header=document.querySelector('.header'),menu=document.querySelector('.menu'),links=document.querySelector('.links'),cursor=document.querySelector('.cursor');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>15),{passive:true});
menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open);});
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
if(cursor&&matchMedia('(pointer:fine)').matches)addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'},{passive:true});else cursor.style.display='none';
document.getElementById('year').textContent=new Date().getFullYear();
