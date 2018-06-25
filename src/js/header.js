// function s() {
//   w || (w = setTimeout(function() {
//     w = null;
//     d()
//   }, 66))
// }
//
// function d() {
//   var e = window.matchMedia("(max-width: 768px)");
//   if (e.matches) {
//     S.destruct();
//     g()
//   } else {
//     f();
//     S.init()
//   }
// }
//
// function l() {
//   var e = dojo.byId("headerWidget"),
//     t = dojo.byId("header-top-banner"),
//     r = dojo.byId("primary-nav"),
//     i = e ? dojo.position(e).h : 0,
//     s = t ? dojo.position(t).h : 0,
//     d = r ? dojo.position(r).h : 0,
//     l = dojo.body(),
//     u = i + d - s;
//   if (e)
//     if (D.matches) {
//       if (s < $(window).scrollTop() && !$("body").hasClass("sticky-header")) {
//         $("body").addClass("sticky-header");
//         $("#headerWidget").css("margin-bottom", $("#header").outerHeight());
//         c()
//       }
//       if (s >= $(window).scrollTop() && $("body").hasClass("sticky-header")) {
//         $("body").removeClass("sticky-header");
//         $("#headerWidget").css("margin-bottom", 0)
//       }
//     } else {
//       $("#headerWidget").css("margin-bottom", 0);
//       if (dojo.position(e).y + dojo.position(e).h <= 0 && !dojo.hasClass(l, "sticky-header")) {
//         $("#search").attr("aria-expanded", "false");
//         $(".mini-cart.tab.persist-active").attr("aria-expanded", "false");
//         n.add(l, "sticky-header");
//         o.set(l, "padding-top", u + "px");
//         c();
//         setTimeout(function() {
//           n.add(a("#search")[0], "persist-active");
//           n.add(a(".mini-cart")[0], "persist-active")
//         }, 300)
//       }
//       if (dojo.position(e).y >= 0 && dojo.hasClass(l, "sticky-header")) {
//         n.remove(l, "sticky-header");
//         n.remove(a("#search")[0], "persist-active active");
//         n.remove(a(".mini-cart")[0], "persist-active");
//         o.set(l, "padding-top", 0);
//         o.set(dojo.byId("search"), {
//           left: "auto",
//           right: "auto"
//         });
//         o.set(a(".mini-cart")[0], {
//           left: "",
//           right: ""
//         })
//       }
//     }
// }
//
// function c() {
//   var e = a(".persistent-search")[0],
//     t = dojo.byId("search"),
//     n = window.matchMedia("(max-width: 768px)");
//   if (a("body.sticky-header").length > 0) {
//     var r = dojo.position(t).w,
//       i = dojo.position(e).x;
//     i + r / 2 < window.innerWidth ? n.matches ? o.set(t, {
//       left: "0px",
//       right: "auto"
//     }) : o.set(t, {
//       left: i - r / 2 + "px",
//       right: "auto"
//     }) : o.set(t, {
//       right: "20px",
//       left: "auto"
//     })
//   }
// }
//
// function u() {
//   var e = dojo.byId("search");
//   $("#search").attr("aria-expanded", "true");
//   a("body.sticky-header").length > 0 && n.add(e, "active")
// }
//
// function p() {
//   var e = dojo.byId("search"),
//     t = document.getElementById("SimpleSearchForm_SearchTerm");
//   $("#search").attr("aria-expanded", "false");
//   t !== document.activeElement && n.remove(e, "active")
// }
//
// function m() {
//   $(".mini-cart.tab.persist-active").attr("aria-expanded", "true");
//   var e = a(".persistent-cart")[0],
//     t = a(".mini-cart")[0];
//   if (a("body.sticky-header").length > 0) {
//     toggleMiniShopCartDropDown("mini-cart-icon", "quick_cart_container", "orderItemsList");
//     n.add(t, "active");
//     var r = dojo.position(t).w,
//       i = dojo.position(e).x;
//     i + r / 2 < window.innerWidth ? o.set(t, {
//       left: i - r / 2 + "px",
//       right: "auto"
//     }) : o.set(t, {
//       right: "0px",
//       left: "auto"
//     })
//   }
// }
//
// function h() {
//   var e = a(".mini-cart")[0];
//   $(".mini-cart.tab.persist-active").attr("aria-expanded", "true");
//   n.remove(e, "active")
// }
//
// function f() {
//   var e = window.matchMedia("(max-width: 768px)");
//   if (!e.matches) {
//     a(".persistent-search, #search").on("mouseover", function() {
//       u();
//       setTimeout(function() {
//         $("input#SimpleSearchForm_SearchTerm").length > 0 && $("input#SimpleSearchForm_SearchTerm").focus()
//       }, 500)
//     });
//     a(".persistent-search, #search").on("mouseout", function() {
//       setTimeout(function() {
//         p()
//       }, 500)
//     });
//     a(".persistent-cart, .mini-cart.tab").on("mouseover", function() {
//       m()
//     });
//     a(".persistent-cart, .mini-cart.tab").on("mouseout", function() {
//       h()
//     })
//   }
// }
//
// function g() {
//   function e() {
//     t("none")
//   }
//
//   function t(e) {
//     for (var t = !1, o = 0; o < i.length; o++)
//       if (i[o] != e) n.remove(i[o], "open");
//       else {
//         n.add(i[o], "open");
//         t = !0
//       }
//     $("#mobileOverlay").toggleClass("active", t)
//   }
//   var o = document.getElementById("mobile-menu"),
//     r = document.getElementById("mobileOverlay"),
//     i = (document.getElementById("MiniShoppingCart"), ["stores", "MiniShoppingCart", "search"]);
//   if (r) {
//     r.onclick = function(t) {
//       e()
//     };
//     r.ontouchmove = function(t) {
//       e()
//     }
//   }
//   var a = document.getElementById("header");
//   a && (a.ontouchmove = function(e) {
//     $(r).hasClass("active") && e.preventDefault()
//   });
//   if (o && D.matches) {
//     var s = document.getElementById("primary-nav"),
//       d = document.getElementById("nav-exit"),
//       l = (document.querySelectorAll(".mobile-header"), document.querySelectorAll(".toggle-open")),
//       c = document.querySelectorAll(".shop-by-brand-fullpage .brand-filter li"),
//       u = document.querySelectorAll(".shop-by-brand-fullpage .brand-list > ul > li");
//     if (s) {
//       o.onclick = function(t) {
//         e();
//         s.classList.add("active");
//         document.body.classList.add("no-scroll")
//       };
//       d.onclick = function(e) {
//         for (var t = document.querySelectorAll("#primary-nav .open"), n = 0; n < t.length; n++) t[n].classList.remove("open");
//         s.classList.remove("active");
//         document.body.classList.remove("no-scroll")
//       };
//       for (var p = 0; p < l.length; p++) l[p].onclick = function(e) {
//         e.preventDefault();
//         this.classList.toggle("open")
//       };
//       for (var m = 0; m < c.length; m++) c[m].onclick = function(e) {
//         e.preventDefault();
//         for (var t = document.querySelectorAll(".brand-filter li.active"), n = this.classList[0], o = 0; o < t.length; o++) t[o].classList.remove("active");
//         this.classList.add("active");
//         if ("all" === n)
//           for (var r = 0; r < u.length; r++) u[r].style.display = "block";
//         else {
//           for (var i = 0; i < u.length; i++) u[i].style.display = "none";
//           document.querySelectorAll(".shop-by-brand-fullpage .brand-list ." + n)[0].style.display = "block";
//           $("html, body").animate({
//             scrollTop: $("#" + n).offset().top - 300
//           }, 500)
//         }
//       }
//     }
//     var h = document.getElementById("mobile-search");
//     h && (h.onclick = function(e) {
//       e.preventDefault();
//       document.getElementById("search").style.left = "0";
//       t("search")
//     });
//     var f = document.getElementById("mobile-stores");
//     f && (f.onclick = function(e) {
//       e.preventDefault();
//       t("stores")
//     });
//     var g = document.getElementById("mobile-cart");
//     g && (g.onclick = function(e) {
//       e.preventDefault();
//       document.querySelectorAll(".mini-cart")[0].style.left = "0";
//       toggleMiniShopCartDropDown("mini-cart-icon", "quick_cart_container", "orderItemsList");
//       t("MiniShoppingCart")
//     })
//   }
// }
//
// function y() {
//   var e = dojo.byId("footer");
//   if (e && D.matches) {
//     var t = a("#footer h5");
//     i(t, "click", function() {
//       n.toggle(this, "open")
//     })
//   }
//   if (document.querySelectorAll("#policy-collapse").length > 0) {
//     var o = document.querySelectorAll("#policy-collapse")[0];
//     o.onclick = function(e) {
//       e.preventDefault();
//       this.nextElementSibling.classList.contains("open") ? this.nextElementSibling.classList.remove("open") : this.nextElementSibling.classList.add("open")
//     }
//   }
// }
//
// function v(e) {
//   var t = "departmentMenu_",
//     o = e.id.slice(0, t.length) == t;
//   if (o) {
//     wc.render.updateContext("departmentSubMenuContext", {
//       targetId: e.id
//     });
//     "function" == typeof cX && setTimeout(function() {
//       cX("")
//     }, 1e3)
//   } else {
//     var r = e.getAttribute("data-parent");
//     r && activeElements[r] && deactivate(activeElements[r]);
//     r && v(document.getElementById(r));
//     n.add(e, "active");
//     a('a[data-activate="' + e.id + '"]').addClass("selected");
//     a('a[data-toggle="' + e.id + '"]').addClass("selected");
//     activeElements[r] = e
//   }
// }
//
// function I(e) {
//   n.contains(e, "active") ? deactivate(e) : v(e)
// }
//
// function b() {
//   i(document, "a[data-activate]:click", function(t) {
//     var n = this.getAttribute("data-activate");
//     v(document.getElementById(n));
//     e.stop(t)
//   });
//   i(document, "a[data-deactivate]:click", function(t) {
//     var n = this.getAttribute("data-deactivate");
//     deactivate(document.getElementById(n));
//     e.stop(t)
//   });
//   i(document, "a[data-toggle]:click", function(t) {
//     var n = this.getAttribute("data-toggle");
//     null != document.getElementById(n) && I(document.getElementById(n));
//     e.stop(t)
//   });
//   i(document, "a[data-toggle]:keydown", function(t) {
//     var n;
//     if (27 == t.keyCode) {
//       n = this.getAttribute("data-toggle");
//       deactivate(document.getElementById(n));
//       e.stop(t)
//     } else if (40 == t.keyCode) {
//       n = this.getAttribute("data-toggle");
//       var o = document.getElementById(n);
//       v(o);
//       a('[class*="menuLink"]', o)[0].focus();
//       e.stop(t)
//     }
//   });
//   r("ie") < 10 && a("input[placeholder]").forEach(function(e) {
//     var t = e.getAttribute("placeholder");
//     if (t) {
//       var n = document.createElement("label");
//       n.className = "placeholder";
//       n.innerHTML = t;
//       var o = function() {
//         n.style.display = e.value ? "none" : "block"
//       };
//       window.setTimeout(o, 200);
//       i(e, "blur, focus, keyup", o);
//       i(n, "click", function() {
//         e.focus()
//       })
//     }
//   })
// }
//
// function C() {
//   window.setTimeout(function() {
//     var e = document.getElementById("SimpleSearchForm_SearchTerm");
//     e && i(e, "click", function() {
//       var e = a('.selected:not(a[data-toggle="searchBar"])', document.getElementById("header"));
//       e.forEach(function(e) {
//         deactivate(document.getElementById(e.getAttribute("data-toggle")))
//       })
//     })
//   }, 100);
//   a("#searchBox > .submitButton").on("click", function() {
//     var e = document.getElementById("SimpleSearchForm_SearchTerm");
//     e.value = t.trim(e.value);
//     var n = t.trim(e.value.replace(/'|"/g, ""));
//     e.value && "" != n && document.getElementById("searchBox").submit()
//   });
//   a("#searchBox").on("submit", function(n) {
//     var o = document.getElementById("SimpleSearchForm_SearchTerm"),
//       r = o.value,
//       i = t.trim(o.value.replace(/'|"/g, ""));
//     o.value = i;
//     if (!o.value) {
//       e.stop(n);
//       return !1
//     }
//     o.value = t.trim(r).toLowerCase()
//   });
//   a("#SimpleSearchForm_SearchTerm").on("keyup", function() {
//     var e = document.getElementById("SimpleSearchForm_SearchTerm"),
//       t = document.getElementById("submitButton");
//     e.value.length > 0 ? t.classList.add("active") : t.classList.remove("active")
//   })
// }
//
// function _() {
//   wc.render.declareContext("departmentSubMenuContext", {
//     targetId: ""
//   }, "");
//   wc.render.declareRefreshController({
//     id: "departmentSubMenu_Controller",
//     renderContext: wc.render.getContextById("departmentSubMenuContext"),
//     url: "",
//     formId: "",
//     renderContextChangedHandler: function(e, t) {
//       cursor_wait();
//       t.refresh(this.renderContext.properties)
//     },
//     postRefreshHandler: function() {
//       updateDepartmentsMenu();
//       v(document.getElementById(this.renderContext.properties.targetId));
//       cursor_clear()
//     }
//   })
// }
//
// function E() {
//   var e = a(".expandable");
//   e && i(e, "click", function() {
//     n.toggle(this, "open")
//   });
//   var t = $(".banner-promo .collapse-toggle");
//   if (t) {
//     var o = $(".banner-promo .close"),
//       r = $(".banner-promo .carousel-inner .active a");
//     t.attr("tabindex") || t.attr("tabindex", "0");
//     t.attr("aria-label") || t.attr("aria-label", t.find(".carousel-inner .item p").text() + " expandable promotion");
//     t.attr("aria-expanded") || t.attr("aria-expanded", "false");
//     t.attr("role") || t.attr("role", "button");
//     t.on("click keydown", function(e) {
//       if ("click" == e.type || "13" == e.which) {
//         $(this).addClass("open");
//         $(".banner-promo .collapsible").addClass("open");
//         t.attr("aria-expanded", "true").attr("tabindex", "-1");
//         o.attr("tabindex", "0");
//         r.each(function(e) {
//           $(this).attr("tabindex", "0")
//         })
//       }
//     });
//     o.on("click keydown", function(e) {
//       if ("click" == e.type || "13" == e.which) {
//         $(".banner-promo .collapse-toggle").removeClass("open");
//         $(".banner-promo .collapsible").removeClass("open");
//         t.attr("aria-expanded", "false").attr("tabindex", "0");
//         o.attr("tabindex", "-1");
//         r.each(function(e) {
//           $(this).attr("tabindex", "-1")
//         })
//       }
//     })
//   }
//   $(".carousel-sync").on("click", ".carousel-control[data-slide]", function(e) {
//     e.preventDefault();
//     $(".carousel-sync").carousel($(this).data("slide"))
//   });
//   $(".carousel-sync").on("mouseover", function(e) {
//     e.preventDefault();
//     $(".carousel-sync").carousel("pause")
//   });
//   $(".carousel-sync").on("mouseleave", function(e) {
//     e.preventDefault();
//     $(".carousel-sync").carousel("cycle")
//   })
// }
// if (!dojo.byId("checkoutHeaderIdForJS")) {
//   var S = function() {
//     function e(e, t) {
//       "boolean" != typeof t && (t = !1);
//       var n = g.filter("." + D).length > 0;
//       MouseObserver.hoverTimeout && clearTimeout(MouseObserver.hoverTimeout);
//       MouseObserver.hoverTimeout = setTimeout(function() {
//         g.filter("." + D).removeClass(D).find("> a").attr("aria-expanded", "false").attr("tabIndex", -1);
//         e.addClass(D).find("> a").attr("aria-expanded", "true").attr("tabIndex", 0);
//         C.show();
//         f.find("> ul").addClass("active");
//         var n = e.attr("id");
//         v.filter("." + D).removeClass(D).closest(".drawer-container").attr("aria-hidden", "true");
//         v.each(function() {
//           var e = $(this);
//           if (e.hasClass(n)) {
//             e.addClass(D).closest(".drawer-container").attr("aria-hidden", "false");
//             e.find(".pet-list li").removeClass(D).first().addClass(D).find("> a").attr("aria-expanded", "true").attr("tabIndex", 0);
//             e.find(".pet-nav").removeClass(D).first().addClass(D).attr("aria-hidden", !1)
//           }
//         });
//         t && e.find("li > a").first().focus()
//       }, n ? MouseObserver.hoverDelay : 20)
//     }
//
//     function t(e) {
//       I.filter("." + D).removeClass(D).find("> a").attr("aria-expanded", "false").attr("tabIndex", -1);
//       e.addClass(D).find("> a").attr("aria-expanded", "true").attr("tabIndex", 0);
//       var t = e.attr("id");
//       b.filter("." + D).removeClass(D).attr("aria-hidden", "true");
//       b.each(function() {
//         var e = $(this);
//         e.hasClass(t) && e.addClass(D).attr("aria-hidden", "false")
//       })
//     }
//
//     function n(e) {
//       "boolean" != typeof e && (e = !1);
//       var t = g.filter("." + D).length > 0,
//         n = t ? g.filter("." + D) : g.has('> a[tabindex="0"]');
//       g.removeClass(D).find("> a").attr("aria-expanded", "false").attr("tabIndex", -1);
//       n.find("> a").attr("tabIndex", 0);
//       e && n.find("> a").focus();
//       v.removeClass(D);
//       I.removeClass(D).find("> a").attr("aria-expanded", "false").attr("tabIndex", -1);
//       C.hide();
//       f.find("> ul").removeClass("active");
//       y.attr("aria-hidden", "true");
//       b.removeClass(D).attr("aria-hidden", "true");
//       MouseObserver.hoverTimeout && clearTimeout(MouseObserver.hoverTimeout)
//     }
//
//     function o(t) {
//       a(t) ? n(!0) : e(t, !0)
//     }
//
//     function r(e, t) {
//       var n;
//       n = t.prev(e.selector).length ? t.prev(e.selector) : e.last();
//       return n
//     }
//
//     function i(e, t) {
//       var n;
//       n = t.next(e.selector).length ? t.next(e.selector) : e.first();
//       return n
//     }
//
//     function a(e) {
//       return e.hasClass(D)
//     }
//
//     function s(e, t) {
//       e.find("> a").attr("tabIndex", -1);
//       t.find("> a").attr("tabIndex", 0).focus()
//     }
//
//     function d() {
//       f.on("keydown", function(d) {
//         if ("TEXTAREA" != d.target.tagName) {
//           var l = d.keyCode;
//           if ("I" != d.target.tagName || l !== keyboardHelper.keys.ENTER && l !== keyboardHelper.keys.SPACEBAR) {
//             if ("I" == d.target.tagName && 9 === l) {
//               p();
//               h()
//             } else if (keyboardHelper.isMenuKey(d.keyCode)) {
//               var c = g.filter("." + D).length > 0,
//                 y = I.filter("." + D).length > 0,
//                 b = I.filter("." + D),
//                 C = c ? g.filter("." + D) : g.has('> a[tabindex="0"]');
//               if (l === keyboardHelper.keys.ESCAPE) {
//                 d.preventDefault();
//                 d.stopPropagation();
//                 n(!0);
//                 return
//               }
//               if (l === keyboardHelper.keys.LEFTARROW) {
//                 d.preventDefault();
//                 d.stopPropagation();
//                 var _ = r(g, C);
//                 s(g, _);
//                 a(C) && e(_, !0);
//                 return
//               }
//               if (l === keyboardHelper.keys.RIGHTARROW) {
//                 d.preventDefault();
//                 d.stopPropagation();
//                 var E = i(g, C);
//                 s(g, E);
//                 a(C) && e(E, !0);
//                 return
//               }
//               if (c) switch (l) {
//                 case keyboardHelper.keys.UPARROW:
//                   d.preventDefault();
//                   d.stopPropagation();
//                   if (y) {
//                     var S = f.find(".drawer." + D + " " + I.selector),
//                       _ = r(S, b);
//                     s(S, _);
//                     t(_)
//                   }
//                   break;
//                 case keyboardHelper.keys.DOWNARROW:
//                   d.preventDefault();
//                   d.stopPropagation();
//                   if (y) {
//                     var S = f.find(".drawer." + D + " " + I.selector),
//                       E = i(S, b);
//                     t(E);
//                     s(S, E)
//                   }
//                   break;
//                 case keyboardHelper.keys.SPACEBAR:
//                 case keyboardHelper.keys.ENTER:
//                   d.preventDefault();
//                   d.stopPropagation();
//                   var w = v.find(":focus");
//                   w.length && (window.location = w.attr("href"))
//               } else switch (l) {
//                 case keyboardHelper.keys.UPARROW:
//                 case keyboardHelper.keys.DOWNARROW:
//                   d.preventDefault();
//                   d.stopPropagation();
//                   e(C, !0);
//                   break;
//                 case keyboardHelper.keys.SPACEBAR:
//                 case keyboardHelper.keys.ENTER:
//                   d.preventDefault();
//                   d.stopPropagation();
//                   o(C)
//               }
//             }
//           } else {
//             d.preventDefault();
//             if (d.target.classList.contains("persistent-search")) {
//               u();
//               setTimeout(function() {
//                 $("input#SimpleSearchForm_SearchTerm").focus()
//               }, 500)
//             } else {
//               m();
//               showMiniShopCartDropDownEvent(d, "MiniShoppingCart", "MiniShopCartContents", "orderItemsList");
//               setTimeout(function() {
//                 $(".mini-cart.tab.persist-active #MiniShopCartContents").find("a")[0].focus()
//               }, 500)
//             }
//           }
//         }
//       });
//       g.on("mouseenter", function() {
//         e($(this))
//       });
//       g.on("mouseleave", function() {
//         MouseObserver.hoverTimeout && clearTimeout(MouseObserver.hoverTimeout)
//       });
//       y.each(function() {
//         var e = $(this),
//           t = e.find(".drawer");
//         t && e.on("mouseover", function(e) {
//           var o = e.target,
//             r = $.contains(t[0], o) || $(o).is(t);
//           r || n()
//         })
//       });
//       f.on("mouseleave", n);
//       C.on("mouseenter", n);
//       I.on("mouseenter", function() {
//         t($(this))
//       });
//       _.on("click", function() {
//         var e = $(this).attr("class"),
//           t = $('.shop-by-brand-fullpage .brand-list a[href="#' + e + '"]'),
//           n = 1 * t.offset().top - 50;
//         window.scrollTo(0, n)
//       })
//     }
//
//     function l() {
//       f.off("keydown");
//       g.off("mouseenter");
//       g.off("mouseleave");
//       y.off("mouseover");
//       f.off("mouseleave");
//       C.off("mouseenter");
//       I.off("mouseenter");
//       _.off("click")
//     }
//
//     function c() {
//       if (!$("#nav-header-offer").length) {
//         var e = $("#header-offer").clone();
//         e.removeClass("header-offer-mobile").attr("id", "nav-header-offer");
//         $("ul.nav-items").append(e);
//         $("ul.nav-items #nav-header-offer").wrap('<li class="header-offer-desktop"></li>')
//       }
//     }
//     var f = $("#primary-nav"),
//       g = $(".nav-items > li:not(.mobile-only)"),
//       y = $(".drawer-container"),
//       v = $(".drawer"),
//       I = ($(".pet-list"), $(".pet-list li")),
//       b = $(".pet-nav"),
//       C = $(".nav-mask"),
//       _ = $(".shop-by-brand-fullpage .brand-filter li"),
//       E = $("nav > .persistent-utility"),
//       S = !1,
//       D = "focus";
//     f.find("ul").attr("role", "menu").end().find("> ul").attr("aria-label", "Main Navigation").attr("role", "menubar").end().find("li").attr("role", "none").end().find("a").attr("role", "menuitem").attr("tabIndex", -1).end().find(".drawer .container a").attr("tabIndex", 0);
//     g.find("> a").attr("aria-haspopup", "true").attr("aria-expanded", "false").first().attr("tabIndex", 0);
//     y.attr("aria-hidden", "true");
//     I.find("> a").attr("aria-haspopup", "true").attr("aria-expanded", "false").attr("tabIndex", -1);
//     b.attr("aria-hidden", "true");
//     E.children("i").each(function() {
//       $(this).attr("tabindex", "0")
//     });
//     return {
//       init: function() {
//         if (!S) {
//           d();
//           c();
//           S = !0
//         }
//       },
//       destruct: function() {
//         if (S) {
//           l();
//           S = !1
//         }
//       }
//     }
//   }();
//   E();
//   i(window, "scroll", function() {
//     l()
//   });
//   b();
//   var D = window.matchMedia("(max-width: 769px)");
//   if (D.matches) g();
//   else {
//     f();
//     S.init()
//   }
//   window.addEventListener("resize", s, !1);
//   var w;
//   y();
//   C();
//   _()
// }

// custom start here

// Mobile Menu Toggle Open/Close
$('#mobile-menu').click(function () {
  $('#primary-nav').addClass("active");
  $('body').addClass("no-scroll");
});

$('#nav-exit').click(function () {
  $('#primary-nav').removeClass("active");
  $('body').removeClass("no-scroll");
});
