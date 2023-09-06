addEventListener('load', f, {once: true})
function f(){ let s, ss=1, v= .25, y, f3, f2= x=>Math.floor(Math.random()*x),
 a0= [-1,23], a1=[], a2, d= document.body.appendChild(document.createElement('div'))
let a3=['A\u266d','A','B\u266d','B','C','D\u266d','D','E\u266d','E','F','F\u266f','G',
        'A\u266d','A','B\u266d','B','C','D\u266d','D','E\u266d','E','F','F\u266f','G','A\u266d']
for(let i=a0[0]; i<=a0[1]; i++) a1.push(440*1.059463**i); let a1l=a1.length
for(let i= 0; i<= a1l; i++) d.appendChild(document.createElement('div'))
let cc= d.lastChild, x1, latest= cc, current= cc, x2=false, x3=false, x4=false, x5=false
cc.classList.add('s'); d.classList.add('c', 'cd'); d.style.setProperty('--x', f1(cc)); x3= true
d.addEventListener('mouseover', e=>{if(e.target.matches('.c>div')){x5=true; x4=true; latest= e.target}})
d.addEventListener('mouseout', e=>{if(e.target.matches('.c>div')){latest= cc; e.target.classList.remove('s2'); x5=false}})
cc.addEventListener('mousedown', _=>{let ac= new AudioContext(), osc= ac.createOscillator(), g= ac.createGain()
  g.gain.setValueAtTime(0, ac.currentTime); g.connect(ac.destination); osc.connect(g); osc.start()
  f3= _=>{ osc.frequency.setValueAtTime(a1[current.style.order% a1l], ac.currentTime)
    g.gain.setValueAtTime(0, ac.currentTime); g.gain.linearRampToValueAtTime(.05, ac.currentTime+ .07)
    g.gain.setValueAtTime(.05, ac.currentTime+ ss*.45); g.gain.linearRampToValueAtTime(0, ac.currentTime+ ss*.5)}}, {once: true})
d.addEventListener('click', function(e){if(d== (e= e.target)|| e== cc== x2) return
  let f= function(){if(x1=!x1) {if(x4== true) {current= latest; x4= false} else current= (current== latest)? cc: latest
    if(x5) latest.classList.add('s2'); f3()} current.classList.toggle('s', x1)}
    , g= i=> {i.classList.add('c6'); i.textContent=`${a1[i.style.order% a1l].toFixed(2)} Hz`; d.style.setProperty('--y', f1(i))}
  if(x2) {if(!e.classList.contains('s2')) return; let x
    if(e!=d.children[y]) x='\'\u2718'
    else {x2= false; x= '\'\u2714'; clearInterval(s)
      e.classList.add('s'); cc.classList.remove('s'); d.classList.add('cd'); e.style.opacity=1
      d.addEventListener('mouseout',_=> {e.classList.remove('s'); e.style.opacity=''
        cc.className='s'; cc.style.removeProperty('--z'); cc.textContent=''},{once: true})}
    e.classList.add('s1'); e.style.setProperty('--z', x+ `${a3[e.style.order% a1l]}'`); g(e)}
  else {x2= true; y= f2(a1l); a2= [...a1.keys()]; a2[a1l+y]=a1l
    ;((a, i= a.length, j)=>{while(--i) [a[i], a[j]]= [a[j= f2(i+ 1)], a[i]]})(a2,a1l)
    a2.forEach((i, j)=> {let x= d.children[j<a1l? j: a1l]; x.style.order= i* a1l+ j; x.style.removeProperty('--z')
      x.textContent=''; x.className=''; i= (100- 4)/(a1l- 1)**2* (j% a1l-a1l+1)**2+ 4
      x.style.backgroundImage= `repeating-linear-gradient(to top right,#6664,transparent,#6663 ${i}%`})
    x1= false; s= setInterval(f, ss* 500); cc.classList.add('s1'); d.classList.remove('cd')
    e.style.setProperty('--z', `'${a3[e.style.order% a1l]}'`); g(cc)}})
function f1(x) {let q= x3? 200: 0, p= 0; x.style.fontSize= `${v}vmin`
  let f= x=> x.scrollHeight- x.clientHeight< 2 && x.scrollWidth- x.clientWidth< 2,
    g= (x, y)=> v= parseFloat(x.style.fontSize= v+ y+ 'vmin')
  while(++q< 200&& f(x)) g(x, .1); while(++p< 200&& !f(x)) g(x, -.1); x.style.fontSize=''; return `${v}vmin`}}