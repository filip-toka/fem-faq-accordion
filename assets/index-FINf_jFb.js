(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s=document.querySelectorAll(".accordion");s.forEach(o=>{a(o)});function a(o){if(o.classList.contains("accordion-inited"))return;o.classList.add("accordion-inited"),o.querySelectorAll(".accordion__heading--button").forEach(n=>{n.addEventListener("click",function(){this.classList.toggle("accordion__heading--button-opened"),this.setAttribute("aria-expanded",this.getAttribute("aria-expanded")==="false"?"true":"false");const i=this.getAttribute("aria-controls"),e=o.querySelector("#"+i);e&&e.classList.toggle("accordion__content--opened")})})}
