let e,t,n,o,c;const r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=document.querySelector(".news-button-general"),a=document.querySelector(".news-button-business"),s=document.querySelector(".news-button-technology"),d=document.querySelector(".news-button-entertainment"),i=document.querySelector(".news-button-sports"),u=document.querySelector(".news-button-science"),m=document.querySelector(".news-button-health");document.getElementById("#panel-item-family");const p=document.querySelector(".titleDate"),f=document.querySelector(".titleWeekday"),y=document.querySelector(".title-time"),h={HaNhu:"2000-07-08",MinhNhu:"2004-03-06",Dad:"1953-01-04",Sang:"1988-05-01",Ngan:"1982-10-06",Huyen:"1980-10-10",Trong:"1980-03-16"},S=[{color:"#ff4081",shadow:"0 0 5px #ff4081, 0 0 10px #ff4081, 0 0 15px #ff4081"},{color:"#00bcd4",shadow:"0 0 5px #00bcd4, 0 0 10px #00bcd4, 0 0 15px #00bcd4"},{color:"#ffffff",shadow:"0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff"},{color:"#8bc34a",shadow:"0 0 5px #8bc34a, 0 0 10px #8bc34a, 0 0 15px #8bc34a"},{color:"#ffeb3b",shadow:"0 0 5px #ffeb3b, 0 0 10px #ffeb3b, 0 0 15px #ffeb3b"},{color:"#9c27b0",shadow:"0 0 5px #9c27b0, 0 0 10px #9c27b0, 0 0 15px #9c27b0"},{color:"#e91e63",shadow:"0 0 5px #e91e63, 0 0 10px #e91e63, 0 0 15px #e91e63"},{color:"#2196f3",shadow:"0 0 5px #2196f3, 0 0 10px #2196f3, 0 0 15px #2196f3"},{color:"#ff5722",shadow:"0 0 5px #ff5722, 0 0 10px #ff5722, 0 0 15px #ff5722"},{color:"#673ab7",shadow:"0 0 5px #673ab7, 0 0 10px #673ab7, 0 0 15px #673ab7"},{color:"#4caf50",shadow:"0 0 5px #4caf50, 0 0 10px #4caf50, 0 0 15px #4caf50"},{color:"#ff9800",shadow:"0 0 5px #ff9800, 0 0 10px #ff9800, 0 0 15px #ff9800"},{color:"#3f51b5",shadow:"0 0 5px #3f51b5, 0 0 10px #3f51b5, 0 0 15px #3f51b5"},{color:"#009688",shadow:"0 0 5px #009688, 0 0 10px #009688, 0 0 15px #009688"},{color:"#c2185b",shadow:"0 0 5px #c2185b, 0 0 10px #c2185b, 0 0 15px #c2185b"},{color:"#607d8b",shadow:"0 0 5px #607d8b, 0 0 10px #607d8b, 0 0 15px #607d8b"},{color:"#795548",shadow:"0 0 5px #795548, 0 0 10px #795548, 0 0 15px #795548"},{color:"#ffb300",shadow:"0 0 5px #ffb300, 0 0 10px #ffb300, 0 0 15px #ffb300"}];function b(){let e=new Date,t=e.getMonth(),n=e.getDate();for(let e in h){let o=new Date(h[e]),c=o.getMonth(),r=o.getDate();if(t===c&&n===r){console.log(o.getMonth(),o.getDate()),document.querySelector(".moving-message").textContent=`Happy Birthday to ${e}!!!`;let t=document.querySelector(".right-container");!function(){for(let e=0;e<100;e++){let e=document.createElement("div");e.classList.add("firework"),e.style.top=`${100*Math.random()}%`,e.style.left=`${100*Math.random()}%`,t.appendChild(e)}let e=t.querySelectorAll(".firework");console.log("fireworks.length:",e.length);for(let t=0;t<e.length;t++){let n=Math.floor(Math.random()*S.length),{color:o,shadow:c}=S[n];e[t].style.backgroundColor=o,e[t].style.boxShadow=c}}(),setTimeout(()=>{t.querySelectorAll(".firework").forEach(e=>e.remove())},1e5)}}}document.querySelector(".news-button-general"),document.querySelector(".news-button-business"),document.querySelector(".news-button-technology"),document.querySelector(".news-button-entertainment"),document.querySelector(".news-button-sports"),document.querySelector(".news-button-science"),document.querySelector(".news-button-health"),document.getElementById("#panel-item-family");const g=document.querySelector(".bitcoin-title"),w=document.querySelector(".bitcoin-price"),x=document.querySelector(".bitcoin-market-cap"),q=document.querySelector(".bitcoin-max-supply"),k=document.querySelector(".ethereum-title"),E=document.querySelector(".ethereum-price"),v=document.querySelector(".ethereum-market-cap"),C=document.querySelector(".ethereum-max-supply"),L=document.querySelector(".solana-title"),$=document.querySelector(".solana-price"),I=document.querySelector(".solana-market-cap"),M=document.querySelector(".solana-max-supply"),D=document.querySelector(".tether-title"),N=document.querySelector(".tether-price"),T=document.querySelector(".tether-market-cap"),B=document.querySelector(".tether-max-supply"),O=document.querySelector(".dogecoin-title"),A=document.querySelector(".dogecoin-price"),J=document.querySelector(".dogecoin-market-cap"),U=document.querySelector(".dogecoin-max-supply");async function j(){try{let r=await fetch("https://api.coingecko.com/api/v3/coins/list");if(!r.ok)throw Error(`HTTP Error: ${r.status}`);let l=await r.json();for(let r=0;r<l.length;r++){let a=l[r].name.toLowerCase();"bitcoin"===a&&(e=`${l[r].symbol}-${l[r].id}`),"ethereum"===a&&(t=`${l[r].symbol}-${l[r].id}`),"tether"===a&&(n=`${l[r].symbol}-${l[r].id}`),"solana"===a&&(o=`${l[r].symbol}-${l[r].id}`),"dogecoin"===a&&(c=`${l[r].symbol}-${l[r].id}`)}let a=await fetch(`https://api.coinpaprika.com/v1/tickers/${e}`);if(!a.ok)throw Error(`Bitcoin fetch failed: ${a.status}`);let s=await a.json(),d=await fetch(`https://api.coinpaprika.com/v1/tickers/${t}`);if(!d.ok)throw Error(`Ethereum fetch failed: ${d.status}`);let i=await d.json(),u=await fetch(`https://api.coinpaprika.com/v1/tickers/${o}`);if(!u.ok)throw Error(`Solana fetch failed: ${u.status}`);let m=await u.json(),p=await fetch(`https://api.coinpaprika.com/v1/tickers/${n}`);if(!p.ok)throw Error(`Tether fetch failed: ${p.status}`);let f=await p.json(),y=await fetch(`https://api.coinpaprika.com/v1/tickers/${c}`);if(!y.ok)throw Error(`Dogecoin fetch failed: ${y.status}`);let h=await y.json(),S=(e,t,n,o,c,r,l)=>{setTimeout(()=>{n&&(n.textContent=l.toUpperCase()),o&&(o.textContent=`Price: ${t.quotes.USD.price.toLocaleString("en-US",{style:"currency",currency:"USD"})}`),c&&(c.textContent=`Market cap: ${t.quotes.USD.market_cap.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0})}`),r&&(r.textContent=`Max supply: ${t.max_supply?t.max_supply.toLocaleString("en-US"):"N/A"}`)},e)};S(0,s,g,w,x,q,e),S(5e3,i,k,E,v,C,t),S(1e4,m,L,$,I,M,o),S(15e3,f,D,N,T,B,n),S(2e4,h,O,A,J,U,c)}catch(e){console.error("Error:",e.message)}}const F=document.querySelector(".news-render");async function H(e){try{F.innerHTML="",F.style.alignItems="center",F.textContent="Loading...";let t=document.createElement("div");t.classList.add("spinner"),t.id="spinner",F.appendChild(t),t.style.display="block";let n=await fetch(`https://gnews.io/api/v4/top-headlines?category=${e}&lang=ja&country=jp&apikey=98b015ea23fe1c48e0824579120bc116`),o=await n.json();F.textContent="",t.style.display="none",function(e){if(0===e.articles.length){F.style.alignItems="unset";let e=document.createElement("em");e.classList.add("news-content"),e.textContent="No top headlines for now...",F.appendChild(e)}if(e.articles.length>5){F.style.alignItems="unset";for(let t=0;t<5;t++){let n=document.createElement("li");n.classList.add("news-content"),n.textContent=e.articles[t].title;let o=document.createElement("a");o.href=e.articles[t].url,o.classList.add("newsUrl"),o.textContent=e.articles[t].url,o.target="_blank",F.appendChild(n),F.appendChild(o)}}else{F.style.alignItems="unset";for(let t=0;t<e.articles.length;t++){let n=document.createElement("li");n.classList.add("news-content"),n.textContent=e.articles[t].title;let o=document.createElement("a");o.classList.add("newsUrl"),o.href=e.articles[t].url,o.textContent=e.articles[t].url,o.target="_blank",F.appendChild(n),F.appendChild(o)}}}(o)}catch(e){console.log(e),F.textContent=`ERROR FETCHING NEWS: ${e.message} ${resultForNews.status} ${e}. Please try later.`,setTimeout(()=>{F.textContent=""},15e3),spinner.style.display="none"}finally{console.log("doing something here later")}}async function R(){l.addEventListener("click",async function(){H("general")}),a.addEventListener("click",async function(){H("business")}),s.addEventListener("click",async function(){H("technology")}),d.addEventListener("click",async function(){H("entertainment")}),i.addEventListener("click",async function(){H("sports")}),u.addEventListener("click",async function(){H("science")}),m.addEventListener("click",async function(){H("health")})}document.querySelectorAll(".back-to-homepage").forEach(e=>{e.addEventListener("click",function(){let e=document.getElementById("homepage");e&&e.scrollIntoView({behavior:"smooth",block:"start"})})}),document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",document.body.style.height="100vh",document.body.style.position="fixed",function e(){let t=new Date,n=t.getFullYear(),o=r[t.getMonth()],c=t.getDate(),l=t.getHours().toString().padStart(2,"0"),a=t.getMinutes().toString().padStart(2,"0"),s=t.getSeconds().toString().padStart(2,"0");y.textContent=`${l}:${a}:${s}`,p.textContent=`${n} ${o} ${c},`,f.textContent=function(){let e;switch(new Date().getDay()){case 0:e="Sunday";break;case 1:e="Monday";break;case 2:e="Tuesday";break;case 3:e="Wednesday";break;case 4:e="Thursday";break;case 5:e="Friday";break;case 6:e="Saturday"}return e}(),setTimeout(e,1e3)}(),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".taskInputBox"),t=document.querySelector(".taskList"),n=document.querySelector(".clearTaskBtn");function o(e){let n=document.createElement("li");n.classList.add("task-item"),n.textContent=e,t.appendChild(n)}function c(){let e=localStorage.getItem("tasks");return null===e?[]:JSON.parse(e)}c().forEach(e=>{o(e)}),e.addEventListener("keydown",function(t){if("Enter"===t.key){var n;let r;t.preventDefault();let l=e.value.trim();if(""===l)return alert("You haven't input your task yet");o(l),n=l,(r=c()).push(n),localStorage.setItem("tasks",JSON.stringify(r)),e.value=""}}),n.addEventListener("click",function(){if(0===c().length)return alert("no tasks registered yet");localStorage.removeItem("tasks"),t.innerHTML=""})}),document.querySelector(".side-panel-button").addEventListener("mouseenter",function(){document.querySelector(".side-panel").style.transform="translateX(22.3vw)"}),document.querySelector(".panel-button-container").addEventListener("mouseleave",function(){document.querySelector(".side-panel").style.transform="translateX(-22.3vw)"}),document.getElementById("panel-item-news").addEventListener("click",function(){document.getElementById("newspage").scrollIntoView()}),document.getElementById("panel-item-family").addEventListener("click",function(){document.querySelector(".investment-general-container").scrollIntoView()}),document.getElementById("panel-item-professional").addEventListener("click",function(){document.querySelector(".professional-general-container").scrollIntoView()}),b(),setInterval(b,6e4),j(),setInterval(j,6e4),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".table-cashflow tbody");if(null!==localStorage.getItem("cashflow"))for(let t of JSON.parse(localStorage.getItem("cashflow"))){let n=document.createElement("tr");n.classList.add("new-tr");let o=document.createElement("td");o.textContent=t.date,n.appendChild(o);let c=document.createElement("td");c.textContent=t.money,n.append(c),e.appendChild(n)}}),function(){let e=[],t=document.querySelector(".table-cashflow tbody");document.querySelector(".button-add").addEventListener("click",function(n){if(n.preventDefault(),null===localStorage.getItem("cashflow")){let n=document.querySelector(".input-date").value,o=document.querySelector(".input-money").value;if(n&&o){e.push({date:n,money:o}),localStorage.setItem("cashflow",JSON.stringify(e));let c=document.createElement("tr");c.classList.add("new-tr");let r=document.createElement("td");r.textContent=n,c.appendChild(r);let l=document.createElement("td");l.textContent=o,c.append(l),t.appendChild(c)}else alert("please input date and money")}else{e=JSON.parse(localStorage.getItem("cashflow"));let n=document.querySelector(".input-date").value,o=document.querySelector(".input-money").value;if(n&&o){e.push({date:n,money:o}),localStorage.setItem("cashflow",JSON.stringify(e));let c=document.createElement("tr");c.classList.add("new-tr");let r=document.createElement("td");r.textContent=n,c.appendChild(r);let l=document.createElement("td");l.textContent=o,c.append(l),t.appendChild(c)}}})}(),document.querySelector(".table-cashflow-remove-button").addEventListener("click",()=>{localStorage.removeItem("cashflow"),document.querySelectorAll("tr.new-tr").forEach(e=>e.remove())}),function(){let e=(JSON.parse(localStorage.getItem("cashflow"))||[]).map(e=>e.money);document.querySelector(".mwrr").addEventListener("click",()=>{let t=function(e,t=.1,n=100,o=1e-6){let c=t;for(let t=0;t<n;t++){let t=0,n=0;for(let o=0;o<e.length;o++)t+=e[o]/Math.pow(1+c,o),n+=-o*e[o]/Math.pow(1+c,o+1);if(Math.abs(t)<o||(c-=t/n,Math.abs(t)<o))return 100*c}return null}(e);if(null!=t){let e=document.createElement("p");e.classList.add("box-calculate-result-name"),e.textContent="MWRR";let n=document.createElement("p");n.classList.add("box-calculate-result-number"),n.textContent=`${t.toFixed(2)}%`,document.querySelector(".box-calculate-render").appendChild(e),document.querySelector(".box-calculate-render").appendChild(n)}})}(),document.querySelectorAll(".box-calculate-render p")&&document.querySelector(".box-calculate-clear-button").addEventListener("click",()=>{document.querySelectorAll(".box-calculate-render p").forEach(e=>e.remove())}),document.querySelector(".table-cashflow-remove-button").addEventListener("click",()=>{localStorage.removeItem("cashflow"),document.querySelectorAll("tr.new-tr").forEach(e=>e.remove())}),R();
//# sourceMappingURL=index.4227d4a4.js.map
