let f= function(p, z= Intl.DateTimeFormat().resolvedOptions().timeZone){if(!(p&& p.clientHeight)) return
  let qb= true, r2= 2* Math.PI; r0= Math.sin(r2/ 24); r0= r0/(1+ r0)
  f= function(){let c= document.createElement('canvas'); c.width =c.height= x1; c= c.getContext('2d')
    c.textAlign= 'center'; c.textBaseline= 'middle'; c.lineCap= c.lineJoin= 'round'; return c}
    const x1= 1100, c0= f(), c1= f(), c2= f(), t0= 24*60*60*1000/286, t1= 286,
    c= [c0.strokeStyle= c0.fillStyle= '#111', c0.shadowColor= '#FD941F'], r1= r0/ 5, q= []
    f= function(p, z){q.push(p); p.addEventListener('dragstart', e=> e.preventDefault())
      p.addEventListener('click', _=>{if(qb){qb= false
        q.forEach(e=> e.dispatchEvent(new MouseEvent('click'))); qb= true} else f()})
      p.addEventListener('mouseenter', _=> d1.src= d[db= 0]); p.addEventListener('mouseout', _=> d1.src= d[db= 1])
      const z1= (z.slice(z.lastIndexOf('/')+ 1)).split('_').join(' ')
      let d= [], db= 1, d1= p.appendChild(document.createElement('div')); d1.style.width= d1.style.height= '100%'
      d1= d1.appendChild(document.createElement('img')); d1.style.width= d1.style.height= '100%'; d1.style.objectFit= 'contain'
      d1.parentElement.appendChild(document.createElement('div'))

      let f= function(){let t= new Date(),
        t2= (Date.parse(t.toLocaleString('en', {timeZone: z}))+ t.getMilliseconds()- t.getTimezoneOffset()* 60000)/ t0
        t= t2% 1; setTimeout(f, ((t>= .5)+ .5 -t)* t0); t2= Math.round(t2)% t1
        const x= Math.min(p.clientHeight, p.clientWidth), r3= r1* x, r= x- r3,
          m= (24* t2% t1/ t1- .25)* r2, h= (2* t2% t1/ t1- .25)* r2, cb= Math.floor((t2+ 6)/ 13)% 2
        ;[c0, c1].forEach(c=>{c.setTransform(1, 0, 0, 1, 0, 0); c.lineWidth= 2* r3;
          c.font= `bold ${r/ 4}px arial`; c.clearRect(0, 0, x1, x1); c.translate(x, x)})
        c0.globalCompositeOperation= 'destination-atop'; c0.shadowBlur= r3; c0.shadowOffsetX= c0.shadowOffsetY= -r3/ 2
        c0.beginPath(); c0.lineDashOffset= 0; c0.setLineDash([0, r2* r/ 12])
        c0.arc(0, 0, r, 0, r2); c0.stroke(); c2.canvas.height= c2.canvas.width=2* x; c2.drawImage(c0.canvas, 0, 0)
        c0.beginPath(); c0.lineDashOffset= -(r1+ r0)* x; c0.setLineDash([(-4* r1 + 7* r0)* x])
        c0.arc(0, 0, r, m, m+ .0001); c0.lineTo(0, 0); c0.arc(0, 0, r, h- .0001, h); c0.stroke(); c2.drawImage(c0.canvas, 0, 0);
        c1.globalCompositeOperation= 'source-over'; c1.beginPath(); c1.arc(0, 0, r- 0.5, 0, r2)
        c1.fillStyle= c1.strokeStyle= c[1- cb]; c1.closePath(); c1.fill(); c1.stroke()
        c1.beginPath(); c1.arc(0, 0, r, m, h+ .0001, Math.floor((t2+ 6)/ 6.5)% 2); c1.lineTo(0, 0); c1.closePath()
        c1.fillStyle= c1.strokeStyle= c[cb]; c1.fill(); c1.stroke()
          c0.shadowOffsetX= c0.shadowOffsetY= -(c0.shadowBlur= x/ 100); c1.fillStyle= c[1]
        ;[c0, c1].forEach((c, i)=>{c.globalCompositeOperation= 'difference'; c.fillText(z1, 0, r/ 2); c2.drawImage(c.canvas, 0, 0)
          d[i]= c2.canvas.toDataURL(); c2.clearRect(0, 0, x1, x1)}); d1.src= d[db]}
      f()}
    f(p,z)}