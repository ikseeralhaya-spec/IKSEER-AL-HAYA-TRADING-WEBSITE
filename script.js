(function(){
  "use strict";
  var root = document.documentElement;
  var STORAGE_KEY = "ikseer-lang";

  function applyLang(lang){
    root.setAttribute("lang", lang);
    document.title = lang === "ar"
      ? "إكسير الحياة للتجارة | Ikseer Al Haya Trading"
      : "Ikseer Al Haya Trading | إكسير الحياة للتجارة";
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
  }

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch(e){}
  if (saved === "ar" || saved === "en") applyLang(saved);

  var langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", function(){
      applyLang(root.getAttribute("lang") === "ar" ? "en" : "ar");
    });
  }

  var nav    = document.getElementById("nav");
  var burger = document.getElementById("burger");
  var links  = document.getElementById("navLinks");
  if (burger && nav) {
    burger.addEventListener("click", function(){
      var open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    if (links) {
      links.addEventListener("click", function(e){
        if (e.target.tagName === "A"){
          nav.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
        }
      });
    }
  }
})();
