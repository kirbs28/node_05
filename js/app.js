(function(){
  var $=function(s,r){return (r||document).querySelector(s)}, $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function byId(id){for(var i=0;i<TEAM.length;i++)if(TEAM[i].id===id)return TEAM[i];return null}
  function nick(m){return m.nick||m.first.split(' ')[0]}
  function full(m){return m.first+' '+m.last}
  function avatar(m,cls){return '<span class="av '+(cls||'')+'" style="--pc:'+m.color+'">'+(m.photo?'<img src="'+esc(m.photo)+'" alt="">':esc(m.initials))+'</span>'}
  function toast(t){var el=$('#toast');el.textContent=t;el.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(function(){el.classList.remove('show')},1800)}
  function glyph(name){
    var map={"C++":"C++","Python":"Py","Java":"Jv","React.js":"Re","React JS":"Re","React Native":"RN","Tailwind CSS":"Tw","GitHub":"Gh","Git & GitHub":"Git","Vercel":"▲","Supabase":"Sb","AWS":"AWS","Antigravity":"AG","Claude":"✺","AWS EC2":"EC2","AWS Amplify":"Amp","Amazon RDS":"RDS","Amazon Bedrock":"Bdr","Linux / Unix":"$_","CSS":"CSS","Flask":"Fl","SQL":"SQL","MySQL":"My","SQLite":"Lt","Power BI":"BI","Tableau":"Tb","R":"R","Excel":"Xl","SAP ERP":"SAP","Zendesk":"Zd","HTML":"&lt;/&gt;","JavaScript":"JS","HTML · CSS · JS":"&lt;/&gt;","QR generation":"QR","GCash / Maya":"₱","Machine learning":"ML","Laravel":"Lv","Android":"And","Figma":"Fg","Canva":"Cv","Kiro":"Ki","VS Code":"VS","Gemini":"✦","ChatGPT":"◎"};
    return map[name]||esc(name.replace(/[^A-Za-z0-9+]/g,'').slice(0,2)||'•');
  }
  var ICONS={
    github:'<path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z" fill="currentColor"/>',
    linkedin:'<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14M8.3 17v-7H5.8v7h2.5M7 8.9a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6M18.2 17v-3.6c0-2.2-1.1-3.4-3-3.4-1.1 0-1.9.6-2.2 1.2V10h-2.5v7H13v-3.2c0-.9.2-1.8 1.3-1.8 1 0 1.1.9 1.1 1.8V17h2.8z" fill="currentColor"/>',
    email:'<path d="M3 6.5h18v11H3z M3 7l9 6.5L21 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
    phone:'<path d="M6.6 3h3l1.5 4-2 1.3a11 11 0 0 0 6.6 6.6l1.3-2 4 1.5v3a2 2 0 0 1-2 2A17 17 0 0 1 4.6 5a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
    facebook:'<path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" fill="currentColor"/>',
    instagram:'<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/>',
    pin:'<path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/>'
  };
  function icon(t){return '<svg viewBox="0 0 24 24" aria-hidden="true">'+(ICONS[t]||ICONS.email)+'</svg>'}

  /* ---------- derived counts ---------- */
  var allTech={},allFocus={},projCount=0;
  TEAM.forEach(function(m){
    m.stack.forEach(function(g){if(!g.todo)g.items.forEach(function(t){allTech[t.toLowerCase()]=t})});
    m.focus.forEach(function(f){allFocus[f.t.toLowerCase()]=1});
    projCount+=m.projects.filter(function(p){return !p.todo}).length;
  });
  var techList=Object.keys(allTech).map(function(k){return allTech[k]});

  $('#stats').innerHTML=[
    [TEAM.length,'members'],[projCount,'projects shipped'],[techList.length,'tools in stack'],[Object.keys(allFocus).length,'focus fields']
  ].map(function(s){return '<div><b>'+s[0]+'</b><span>'+s[1]+'</span></div>'}).join('');
  var bandHtml=techList.map(function(t){return '<span>'+esc(t)+'</span>'}).join('');
  $('#band').innerHTML=bandHtml+bandHtml;
  $('#yr').textContent=new Date().getFullYear();

  /* ---------- nav people ---------- */
  $('#navPeople').innerHTML=TEAM.map(function(m){
    return '<a class="np" href="#'+m.id+'" data-id="'+m.id+'" style="--pc:'+m.color+'" title="'+esc(full(m))+'">'+avatar(m)+'<span class="np-name">'+esc(nick(m))+'</span></a>';
  }).join('');

  /* ---------- roster ---------- */
  $('#rosterGrid').innerHTML=TEAM.map(function(m,i){
    var tech=m.stack.reduce(function(n,g){return n+(g.todo?0:g.items.length)},0);
    var proj=m.projects.length;
    return '<a class="mc rv" href="#'+m.id+'" style="--pc:'+m.color+'">'+
      '<div class="mc-top"><span>0'+(i+1)+' / '+esc(m.id)+'</span><span class="on"><i></i>online</span></div>'+
      '<div class="mc-id">'+avatar(m)+'<div><h3>'+esc(full(m))+'</h3><p class="role">'+esc(m.roles[1]||m.roles[0])+'</p></div></div>'+
      '<ul class="tags">'+m.focus.slice(0,4).map(function(f){return '<li>'+esc(f.t)+'</li>'}).join('')+'</ul>'+
      '<div class="mc-foot"><span>'+proj+' projects · '+(tech||'—')+' tools</span><b>open portfolio →</b></div></a>';
  }).join('');
  $$('.mc').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--x',(e.clientX-r.left)+'px');c.style.setProperty('--y',(e.clientY-r.top)+'px')})});

  /* ---------- project header art ---------- */
  function hash(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
  function drawArt(cv,seed,color){
    var r=cv.getBoundingClientRect(),d=devicePixelRatio||1,W=Math.max(1,r.width),H=Math.max(1,r.height);
    cv.width=W*d;cv.height=H*d;var x=cv.getContext('2d');x.setTransform(d,0,0,d,0,0);
    var s=hash(seed);function rnd(){s=(s*1664525+1013904223)>>>0;return s/4294967296}
    var S=14;
    for(var yy=0;yy<H;yy+=S)for(var xx=0;xx<W;xx+=S){var v=rnd();var k=xx/W;
      if(v>.78-k*.25){x.fillStyle=color;x.globalAlpha=.08+rnd()*.5*k;x.fillRect(xx+3,yy+3,S-6,S-6)}
      else if(v<.06){x.fillStyle='#2a3646';x.globalAlpha=1;x.fillRect(xx+5,yy+5,S-10,S-10)}}
    x.globalAlpha=1;
  }

  /* ---------- member view ---------- */
  var SECS=[['s-intro','01 intro'],['s-stack','02 stack'],['s-focus','03 focus'],['s-projects','04 projects'],['s-contact','05 contact']];
  function renderMember(m){
    var i=TEAM.indexOf(m),prev=TEAM[(i-1+TEAM.length)%TEAM.length],next=TEAM[(i+1)%TEAM.length];
    var cardRows=Object.keys(m.card).map(function(k){return '<div><dt>'+esc(k)+'</dt><dd>'+esc(m.card[k])+'</dd></div>'}).join('');
    var h='';
    h+='<div class="wrap"><div class="crumbs"><span><a href="#home">~/team</a> / <span class="here">'+esc(m.id)+'</span></span>'+
       '<span class="pn"><button type="button" data-go="'+prev.id+'" aria-label="Previous member: '+esc(full(prev))+'">← '+esc(nick(prev))+'</button><button type="button" data-go="'+next.id+'" aria-label="Next member: '+esc(full(next))+'">'+esc(nick(next))+' →</button></span></div>';
    /* intro */
    h+='<section class="intro" id="s-intro"><div>'+
       '<span class="label"><b>01</b> · introduction · member 0'+(i+1)+'/0'+TEAM.length+'</span>'+
       '<h1>'+esc(m.first)+'<br><span class="last">'+esc(m.last)+'</span></h1>'+
       '<ul class="roles">'+m.roles.map(function(r){return '<li>'+esc(r)+'</li>'}).join('')+'</ul>'+
       '<div class="copy">'+m.intro.map(function(p){return '<p>'+esc(p)+'</p>'}).join('')+'</div>'+
       (m.signature?'<p class="sig">“'+esc(m.signature)+'”</p>':'')+
       '<div class="intro-cta"><button class="btn primary" type="button" data-sec="s-projects">View projects</button><button class="btn" type="button" data-sec="s-contact">Contact '+esc(nick(m))+'</button></div>'+
       '</div><aside class="opcard" style="--pc:'+m.color+'"><div class="op-head"><span>member card</span><b>ID-0'+(i+1)+'</b></div>'+
       avatar(m,'op-av')+'<dl class="op-dl"><div><dt>Name</dt><dd>'+esc(full(m))+'</dd></div>'+cardRows+'</dl>'+
       (m.highlights&&m.highlights.length?'<ul class="highlights">'+m.highlights.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul>':'')+
       '</aside></section></div>';
    /* subnav */
    h+='<nav class="subnav" aria-label="Sections"><div class="wrap">'+SECS.map(function(s){return '<button type="button" data-sec="'+s[0]+'">'+s[1]+'</button>'}).join('')+'</div></nav>';
    /* stack */
    h+='<div class="wrap"><section class="msec" id="s-stack"><span class="label"><b>02</b> · tech stack</span><h2>Tools of the trade</h2><div class="stack-groups">'+
       m.stack.map(function(g){return '<div class="sg rv"><h4>'+esc(g.group)+(g.todo?' <span class="todo-tag">to be added</span>':'')+'</h4><div class="tiles">'+
         g.items.map(function(t){return '<div class="tile'+(g.todo?' todo':'')+'"><span class="gl">'+(g.todo?'?':glyph(t))+'</span><span>'+esc(t)+'</span></div>'}).join('')+'</div></div>'}).join('')+
       '</div></section>';
    /* focus */
    h+='<section class="msec" id="s-focus"><span class="label"><b>03</b> · field of focus</span><h2>Where '+esc(nick(m))+' goes deep</h2><div class="focus">'+
       m.focus.map(function(f,k){return '<div class="fc rv" data-g="0'+(k+1)+'"><span class="n">[0'+(k+1)+']</span><h3>'+esc(f.t)+'</h3>'+(f.d?'<p>'+esc(f.d)+'</p>':'')+'</div>'}).join('')+
       '</div></section>';
    /* projects */
    h+='<section class="msec" id="s-projects"><span class="label"><b>04</b> · projects</span><h2>Selected work</h2><div class="projects">'+
       m.projects.map(function(p,k){
         return '<article class="pc rv'+(p.todo?' todo':'')+'"><div class="pc-bar"><i></i><i></i><i></i><span>~/'+esc(m.id)+'/'+esc(p.file||p.name)+'</span></div>'+
           '<div class="pc-art"><canvas data-seed="'+esc(m.id+p.name)+'"></canvas><span class="big">P-0'+(k+1)+'</span></div>'+
           '<div class="pc-body"><div class="pc-meta"><span>'+esc(p.meta||'')+'</span>'+(p.todo?'<span class="todo-tag">to be added</span>':(p.status?'<span class="status"><i></i>'+esc(p.status)+'</span>':''))+'</div>'+
           '<h3>'+esc(p.name)+'</h3><p>'+esc(p.desc)+'</p>'+
           (p.tags&&p.tags.length?'<ul class="tags">'+p.tags.map(function(t){return '<li>'+esc(t)+'</li>'}).join('')+'</ul>':'')+
           (p.built&&p.built.length?'<button type="button" class="more" aria-expanded="false">what was built <i>▾</i></button><div class="built"><div><ul>'+p.built.map(function(b){return '<li>'+esc(b)+'</li>'}).join('')+'</ul></div></div>':'')+
           '</div></article>';
       }).join('')+'</div></section>';
    /* contact */
    h+='<section class="msec" id="s-contact" style="border-bottom:0"><div class="contact"><div><span class="label"><b>05</b> · contact</span><h2>Reach '+esc(nick(m))+'</h2>'+
       '<p class="lead">For internships, collaborations and projects, use the channels listed here.</p></div><div class="clist">'+
       m.contact.map(function(c){
         var inner='<span class="ic">'+icon(c.type)+'</span><span class="tx"><small>'+esc(c.label)+'</small><b>'+esc(c.value)+'</b></span>';
         var copyable=c.type==='email'||c.type==='phone';
         var tail=c.todo?'<span class="todo-tag">to be added</span>':(copyable?'<button type="button" class="copy-btn" data-copy="'+esc(c.value)+'">copy</button>':(c.href?'<span class="go">↗</span>':''));
         if(c.href&&!c.todo&&!copyable)return '<a class="ci" href="'+esc(c.href)+'" target="_blank" rel="noopener">'+inner+tail+'</a>';
         if(c.href&&!c.todo)return '<div class="ci"><a href="'+esc(c.href)+'" style="display:contents">'+inner+'</a>'+tail+'</div>';
         return '<div class="ci'+(c.todo?' todo':'')+'">'+inner+tail+'</div>';
       }).join('')+'</div></div>'+
       '<button type="button" class="next" data-go="'+next.id+'" style="--pc:'+next.color+'"><span class="l">'+avatar(next)+'<span><span class="label">next member</span><span class="nh">'+esc(full(next))+'</span></span></span><span class="arrow">open portfolio →</span></button>'+
       '</section></div>';
    var v=$('#view-member');v.innerHTML=h;v.style.setProperty('--m',m.color);
    $$('.pc-art canvas',v).forEach(function(cv){drawArt(cv,cv.dataset.seed,m.color)});
    $$('.more',v).forEach(function(b){b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);b.nextElementSibling.classList.toggle('open',!o)})});
    observe();watchSections();
  }

  /* ---------- routing (plain #name) ---------- */
  function route(){
    var id=(location.hash||'').slice(1).toLowerCase(),m=byId(id);
    $$('.np').forEach(function(a){a.toggleAttribute('aria-current',false);if(m&&a.dataset.id===m.id)a.setAttribute('aria-current','page')});
    if(m){
      $('#view-home').classList.remove('active');renderMember(m);$('#view-member').classList.add('active');
      document.documentElement.style.setProperty('--m',m.color);document.title=full(m)+' · node/05';
      window.scrollTo(0,0);
    }else{
      $('#view-member').classList.remove('active');$('#view-member').innerHTML='';$('#view-home').classList.add('active');
      document.documentElement.style.setProperty('--m','#3cf2a6');document.title='node/05 · Group Portfolio';
      if(id&&id!=='home'&&document.getElementById(id))document.getElementById(id).scrollIntoView();else if(!id||id==='home')window.scrollTo(0,0);
    }
  }
  function go(id){if(location.hash==='#'+id)route();else location.hash=id}
  addEventListener('hashchange',route);

  /* ---------- delegated clicks ---------- */
  document.addEventListener('click',function(e){
    var t=e.target.closest('[data-go],[data-sec],[data-scroll],[data-copy],a.lnk');if(!t)return;
    if(t.dataset.go){go(t.dataset.go)}
    else if(t.dataset.sec){var s=document.getElementById(t.dataset.sec);if(s)s.scrollIntoView({behavior:reduce?'auto':'smooth'})}
    else if(t.dataset.scroll){e.preventDefault();var el=document.getElementById(t.dataset.scroll);if(el)el.scrollIntoView({behavior:reduce?'auto':'smooth'})}
    else if(t.dataset.copy){var v=t.dataset.copy;try{navigator.clipboard.writeText(v).then(function(){toast('copied: '+v)},function(){toast(v)})}catch(err){toast(v)}}
    else if(t.classList.contains('lnk')){go(t.dataset.id)}
  });

  /* ---------- reveal + section spy ---------- */
  var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}):null;
  function observe(){$$('.rv:not(.in)').forEach(function(el){if(io&&!reduce)io.observe(el);else el.classList.add('in')})}
  var spy;
  function watchSections(){
    if(spy)spy.disconnect();if(!('IntersectionObserver' in window))return;
    spy=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){$$('.subnav button').forEach(function(b){b.classList.toggle('on',b.dataset.sec===e.target.id)})}})},{rootMargin:'-40% 0px -55% 0px'});
    SECS.forEach(function(s){var el=document.getElementById(s[0]);if(el)spy.observe(el)});
  }

  /* ---------- hero word cycle ---------- */
  (function(){
    if(reduce)return;var words=['One stack.','One team.','One portfolio.'],k=0,el=$('#heroWord');
    setInterval(function(){k=(k+1)%words.length;var w=words[k],n=0;el.textContent='';
      var iv=setInterval(function(){n++;el.textContent=w.slice(0,n);if(n>=w.length)clearInterval(iv)},45)},3600);
  })();

  /* ---------- terminal ---------- */
  var tb=$('#termBody'),ti=$('#termInput');
  function out(html){var p=document.createElement('p');p.innerHTML=html;tb.appendChild(p);tb.scrollTop=tb.scrollHeight}
  function find(q){q=q.toLowerCase().trim();if(!q)return null;var n=parseInt(q,10);if(n>=1&&n<=TEAM.length)return TEAM[n-1];
    for(var i=0;i<TEAM.length;i++){var m=TEAM[i];if(m.id===q||full(m).toLowerCase().indexOf(q)>-1||m.initials.toLowerCase()===q)return m}return null}
  var CMD={
    help:function(){out('<span class="c">commands</span>\n  ls            list members\n  open &lt;name&gt;   open a portfolio (name, id or 1–5)\n  whoami        about this site\n  stack         combined team stack\n  focus         every field of focus\n  projects      all shipped projects\n  clear         clear the screen')},
    ls:function(){TEAM.forEach(function(m,i){out('<span class="d">0'+(i+1)+'</span>  <a class="lnk" data-id="'+m.id+'">'+esc(m.id)+'/</a>  <span class="d">'+esc(full(m))+'</span>')})},
    whoami:function(){out('guest. this is the group portfolio of '+TEAM.length+' BSIT students from TUP Manila.\ntype <span class="c">ls</span> to see them, then <span class="c">open kirby</span>.')},
    stack:function(){out('<span class="b">'+techList.length+' tools</span>: '+esc(techList.join(', ')))},
    focus:function(){TEAM.forEach(function(m){out('<span class="c">'+esc(m.id)+'</span>  '+esc(m.focus.map(function(f){return f.t}).join(' · ')))})},
    projects:function(){TEAM.forEach(function(m){m.projects.forEach(function(p){if(!p.todo)out('<span class="d">'+esc(m.id)+'/</span>'+esc(p.name))})});out('<span class="d">more being added.</span>')},
    clear:function(){tb.innerHTML=''},
    open:function(arg){var m=find(arg);if(!m){out('<span class="w">no member matches "'+esc(arg)+'". try</span> ls');return}out('opening <span class="c">~/'+m.id+'</span> …');setTimeout(function(){go(m.id)},350)},
    sudo:function(arg){out(arg.indexOf('hire')>-1?'<span class="c">✓ permission granted.</span> pick anyone from <span class="c">ls</span>, they are all open to opportunities.':'<span class="w">sudo: nice try.</span>')}
  };
  CMD.members=CMD.ls;CMD.cd=CMD.open;
  function run(raw){var line=raw.trim();if(!line)return;out('<span class="c">guest@node05:~$</span> '+esc(line));
    var parts=line.split(/\s+/),c=parts[0].toLowerCase(),arg=parts.slice(1).join(' ');
    if(CMD[c])CMD[c](arg);else if(find(line))CMD.open(line);else out('<span class="w">command not found:</span> '+esc(c)+'. type <span class="c">help</span>')}
  $('#termForm').addEventListener('submit',function(e){e.preventDefault();run(ti.value);ti.value=''});
  $('#termChips').innerHTML=['help','ls','open 1','stack','focus','projects','sudo hire team'].map(function(c){return '<button type="button" data-cmd="'+c+'">'+c+'</button>'}).join('');
  $('#termChips').addEventListener('click',function(e){var b=e.target.closest('button');if(b)run(b.dataset.cmd)});
  out('<span class="d">node/05 shell · v1.0</span>');out('<span class="c">✓</span> '+TEAM.length+' members mounted');out('type <span class="c">help</span>, or tap a command below.');
  function focusTerm(){if(location.hash&&location.hash!=='#home'&&byId(location.hash.slice(1))){location.hash='home';setTimeout(focusTerm,60);return}
    $('#term').scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'});setTimeout(function(){ti.focus({preventScroll:true})},300)}
  $('#termJump').addEventListener('click',focusTerm);$('#heroTerm').addEventListener('click',focusTerm);

  /* ---------- keyboard ---------- */
  document.addEventListener('keydown',function(e){
    if(e.target.closest('input,textarea')||e.metaKey||e.ctrlKey||e.altKey)return;
    var n=parseInt(e.key,10);if(n>=1&&n<=TEAM.length){go(TEAM[n-1].id)}
    else if(e.key==='/'){e.preventDefault();focusTerm()}
    else if(e.key==='Escape'){go('home')}
    else if(byId((location.hash||'').slice(1))&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){var i=TEAM.indexOf(byId(location.hash.slice(1)));go(TEAM[(i+(e.key==='ArrowRight'?1:-1)+TEAM.length)%TEAM.length].id)}
  });

  addEventListener('resize',function(){var m=byId((location.hash||'').slice(1));if(m)$$('.pc-art canvas').forEach(function(cv){drawArt(cv,cv.dataset.seed,m.color)})});

  /* ---------- boot ---------- */
  route();observe();
  (function(){
    var boot=$('#boot'),seen=false;try{seen=sessionStorage.getItem('n05-boot')==='1'}catch(e){}
    if(seen||reduce){boot.classList.add('done');return}
    var lines=['establishing secure session','loading team manifest ('+TEAM.length+' nodes)','mounting '+TEAM.map(function(m){return '/'+m.id}).join(' '),'compiling unified stack ('+techList.length+' tools)','rendering portfolios'];
    var box=$('#bootLines'),bar=$('#bootBar'),k=0,done=false;
    function finish(){if(done)return;done=true;try{sessionStorage.setItem('n05-boot','1')}catch(e){}boot.classList.add('done')}
    function step(){if(done)return;if(k<lines.length){var d=document.createElement('div');d.className='boot-line';
        var dots=Array(Math.max(3,44-lines[k].length)).join('.');d.innerHTML='&gt; '+esc(lines[k])+' '+dots+' <span class="ok">ok</span>';box.appendChild(d);
        requestAnimationFrame(function(){d.classList.add('on')});k++;bar.style.width=(k/(lines.length+1)*100)+'%';setTimeout(step,260)}
      else{var f=document.createElement('div');f.className='boot-line final on';f.textContent='✓ PORTFOLIO READY';box.appendChild(f);bar.style.width='100%';setTimeout(finish,500)}}
    setTimeout(step,200);
    boot.addEventListener('click',finish);addEventListener('keydown',finish,{once:true});
  })();
})();
