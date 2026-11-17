(function(){
  var BP=980;
  var burger=document.querySelector('.burger'), menu=document.getElementById('mobilemenu');
  if(burger&&menu){
    burger.addEventListener('click',function(){
      var open=menu.classList.toggle('open');
      burger.setAttribute('aria-expanded',open?'true':'false');
      burger.setAttribute('aria-label',open?'Close menu':'Open menu');
    });
    window.addEventListener('resize',function(){
      if(window.innerWidth>BP){menu.classList.remove('open');burger.setAttribute('aria-expanded','false');}
    });
  }
  var navBtns=document.querySelectorAll('.navitem>button');
  Array.prototype.forEach.call(navBtns,function(b){
    b.addEventListener('click',function(e){
      var item=b.parentNode, open=item.classList.toggle('open');
      b.setAttribute('aria-expanded',open?'true':'false');
      e.stopPropagation();
    });
  });
  document.addEventListener('click',function(){
    Array.prototype.forEach.call(document.querySelectorAll('.navitem.open'),function(n){n.classList.remove('open');n.firstChild.setAttribute('aria-expanded','false');});
  });
  var qs=document.querySelectorAll('.faq-q');
  Array.prototype.forEach.call(qs,function(q){
    q.addEventListener('click',function(){
      var item=q.parentNode, ans=item.querySelector('.faq-a'), open=item.classList.toggle('open');
      q.setAttribute('aria-expanded',open?'true':'false');
      ans.style.maxHeight=open?ans.scrollHeight+'px':'0px';
    });
  });
})();
