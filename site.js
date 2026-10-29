(function(){
var PR=[],SET={},ok=0;
function g(f){return fetch("data/"+f+"?t="+Date.now()).then(function(r){return r.ok?r.json():null}).catch(function(){return null})}
function safe(u){u=String(u||"");return /^(https:\/\/|uploads\/)/i.test(u)?u:""}
var st=document.createElement("style");
st.textContent=".pimg{width:100%;height:150px;object-fit:cover;border-radius:18px}.card[data-pid]{cursor:pointer}#pm{position:fixed;inset:0;z-index:90;display:grid;place-items:center;padding:16px;background:rgba(20,10,5,.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);opacity:0;pointer-events:none;transition:opacity .3s}#pm.open{opacity:1;pointer-events:auto}#pb{position:relative;width:min(560px,100%);max-height:calc(100vh - 32px);overflow:auto;padding:22px;border-radius:28px;background:var(--bg1);border:1px solid var(--bd);box-shadow:0 30px 80px rgba(0,0,0,.4);transform:translateY(24px) scale(.94);transition:transform .45s cubic-bezier(.5,1.5,.4,1)}#pm.open #pb{transform:none}#pb h3{margin:14px 0 6px;font-size:22px}#pb p{color:var(--mut);line-height:1.9;margin:6px 0}#pb img{width:100%;border-radius:18px}#pb iframe,#pb video{display:block;width:100%;aspect-ratio:16/9;border:0;border-radius:18px;margin-top:12px}.pdx{position:absolute;top:12px;inset-inline-end:14px;width:34px;height:34px;border-radius:50%;background:rgba(127,127,127,.25);font-size:20px;z-index:2}";
document.head.appendChild(st);
var pm=document.createElement("div");pm.id="pm";pm.innerHTML='<div id="pb"></div>';document.body.appendChild(pm);
var ct=document.createElement("div");ct.id="ct";ct.className="cta glass";ct.hidden=true;document.querySelector("main").insertBefore(ct,document.querySelector("footer"));
function emb(u){u=safe(u);if(!u)return"";var m;
 if(m=u.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/))return '<iframe src="https://www.youtube.com/embed/'+m[1]+'" allowfullscreen loading="lazy"></iframe>';
 if(m=u.match(/aparat\.com\/v\/(\w+)/))return '<iframe src="https://www.aparat.com/video/video/embed/videohash/'+m[1]+'/vt/frame" allowfullscreen loading="lazy"></iframe>';
 if(/\.mp4(\?|$)/i.test(u))return '<video src="'+he(u)+'" controls playsinline></video>';
 return""}
function pcard(p,i,nf){var im=safe(p.img);return '<article class="card rv" data-pid="'+p.id+'">'+(im?'<img class="pimg" src="'+he(im)+'" alt="" loading="lazy">':'')+'<span class="chip">'+LV[L][p.lv]+'</span><h3>'+he(i?(p.en||p.fa):p.fa)+'</h3><div class="row"><span class="price">'+nf.format(p.pr)+' '+T[L].toman+'</span><button class="btn ghost">'+T[L].pv+'</button></div></article>'}
function openP(id){var p=PR.filter(function(x){return x.id==id})[0];if(!p)return;var i=L=="fa"?0:1,nf=new Intl.NumberFormat(i?"en-US":"fa-IR"),im=safe(p.img),d=(i?(p.de||p.df):(p.df||p.de))||"",v=safe(p.vd);
 $b("pb").innerHTML='<button class="pdx" aria-label="Close">×</button>'+(im?'<img src="'+he(im)+'" alt="">':'')+'<span class="chip" style="--ac:var(--or2);margin-top:12px">'+LV[L][p.lv]+'</span><h3>'+he(i?(p.en||p.fa):p.fa)+'</h3>'+(d?'<p>'+he(d).replace(/\n/g,"<br>")+'</p>':'')+'<p><b class="price" style="color:var(--ink)">'+nf.format(p.pr)+' '+T[L].toman+'</b></p>'+emb(v)+(v?'<p><a class="btn ghost" target="_blank" rel="noopener" href="'+he(v)+'">'+(i?"Open video":"باز کردن ویدیو")+'</a></p>':'');
 pm.classList.add("open")}
function $b(id){return document.getElementById(id)}
function dec(){var i=L=="fa"?0:1,nf=new Intl.NumberFormat(i?"en-US":"fa-IR");
 if(ok)K.forEach(function(k){var s=document.getElementById("v-"+k);if(!s)return;
  var ls=PR.filter(function(p){return p.inst==k&&p.pub}),per=6,n=Math.max(1,Math.ceil(ls.length/per)),h="",j;
  s.querySelectorAll(".pg,.pager").forEach(function(e){e.remove()});
  for(j=0;j<n;j++)h+='<div class="grid pg'+(j?" hid":"")+'" data-p="'+(j+1)+'">'+(ls.length?ls.slice(j*per,j*per+per).map(function(p){return pcard(p,i,nf)}).join(""):'<p style="color:var(--mut)">'+(i?"No scores yet.":"هنوز نتی اضافه نشده.")+'</p>')+'</div>';
  if(n>1){h+='<div class="pager">';for(j=1;j<=n;j++)h+='<button class="pgb'+(j==1?" on":"")+'" data-n="'+j+'">'+nf.format(j)+'</button>';h+="</div>"}
  var h2=s.querySelector("h2");h2.textContent=i?"Scores":"نت‌ها";h2.insertAdjacentHTML("afterend",h)});
 if(SET.name){document.title=SET.name;document.querySelectorAll(".logo").forEach(function(l){l.lastChild.nodeValue=SET.name})}
 var lg=safe(SET.logo);if(lg)document.querySelectorAll(".logo b").forEach(function(b){b.innerHTML='<img src="'+he(lg)+'" alt="" style="width:100%;height:100%;border-radius:50%;object-fit:cover">'});
 var cs=[];
 if(SET.ig)cs.push(["Instagram","https://instagram.com/"+encodeURIComponent(String(SET.ig).replace(/^@/,""))]);
 if(SET.tg)cs.push(["Telegram","https://t.me/"+encodeURIComponent(String(SET.tg).replace(/^@/,""))]);
 if(SET.em)cs.push([SET.em,"mailto:"+SET.em]);
 if(SET.ph)cs.push([SET.ph,"tel:"+String(SET.ph).replace(/[^0-9+]/g,"")]);
 ct.hidden=!cs.length;
 if(cs.length)ct.innerHTML='<h2>'+(i?"Contact us":"تماس با ما")+'</h2><div class="row" style="justify-content:center">'+cs.map(function(a){return '<a class="btn ghost" target="_blank" rel="noopener" href="'+he(a[1])+'">'+he(a[0])+'</a>'}).join("")+'</div>';
 observe()}
var _r=render;render=function(){_r();dec()};
document.addEventListener("click",function(e){
 if(e.target.closest(".pdx")||e.target===pm){pm.classList.remove("open");return}
 var c=e.target.closest(".card[data-pid]");if(c)openP(c.dataset.pid)});
document.addEventListener("keydown",function(e){if(e.key=="Escape")pm.classList.remove("open")});
Promise.all([g("products.json"),g("settings.json")]).then(function(r){var s=r[1];
 if(s&&typeof s=="object"){SET=s;if(s.h1f)T.fa.h1=s.h1f;if(s.h2f)T.fa.h2=s.h2f;if(s.h1e)T.en.h1=s.h1e;if(s.h2e)T.en.h2=s.h2e;if(s.name)T.fa.foot=T.en.foot="© "+s.name}
 if(Array.isArray(r[0])){PR=r[0];ok=1}
 if(ok||s)render()});
})();
