//tealium universal tag - utag.72 ut4.0.201804040506, Copyright 2018 Tealium.com Inc. All Rights Reserved.
var gts=gts||[];try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={'view':1};u.map={"customer_email":"gts-o-email","js_page.PetcoDataLayer.order.order_merchandise_total":"gts-o-total","dom.domain":"gts-o-domain","preorder":"gts-o-has-preorder","digital":"gts-o-has-digital","badge_container":"badge_container","badge_position":"badge_position","order_date":"gts-o-est-ship","js_page.PetcoDataLayer.order.order_id":"gts-o-id","js_page.PetcoDataLayer.order.order_discount":"gts-o-discounts","country_code":"gts-o-country","currency_code":"gts-o-currency","js_page.PetcoDataLayer.order.order_shipping_amount":"gts-o-shipping-total","js_page.PetcoDataLayer.order.order_tax_amount":"gts-o-tax-total","js_page.PetcoDataLayer.product.product_parent_sku":"google_base_offer_id"};u.extend=[function(a,b){try{if(1){if(typeof PetcoDataLayer.page.page_type!=='undefined'&&PetcoDataLayer.page.page_type==='Receipt'){if(typeof b.triggergooglereviewsoptin==='undefined'||b.triggergooglereviewsoptin!=='true'){return false;}}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){function formatDate(date){var d=new Date(date),month=''+(d.getMonth()+1),day=''+d.getDate(),year=d.getFullYear();if(month.length<2)month='0'+month;if(day.length<2)day='0'+day;return[year,month,day].join('-');};b.order_date=formatDate(Date());}}catch(e){utag.DB(e)}},function(a,b){try{if(1){b['badge_position']='USER_DEFINED';b['badge_container']='GTS_CONTAINER'}}catch(e){utag.DB(e)}},function(a,b){try{if(1){b['currency_code']='USD';b['country_code']='US'}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"//www.googlecommerce.com/trustedstores/api/js","merchantid":"563554","offerid":"","subid":"2653025","product_id":[],"product_name":[],"product_sku":[],"product_brand":[],"product_category":[],"product_subcategory":[],"product_quantity":[],"product_unit_price":[],"product_discount":[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};c={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf('gts-')==0){c[e[f]]=b[d];}else{gts.push([e[f],encodeURIComponent(b[d])]);}}}}
u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";u.data.order_shipping=u.data.order_shipping||b._cship||"";u.data.order_tax=u.data.order_tax||b._ctax||"";u.data.order_store=u.data.order_store||b._cstore||"";u.data.order_currency=u.data.order_currency||b._ccurrency||"";u.data.customer_id=u.data.customer_id||b._ccustid||"";u.data.customer_country=u.data.customer_country||b._ccountry||"";if(u.data.product_discount.length===0&&b._cpdisc!==undefined){u.data.product_discount=b._cpdisc.slice(0);}
if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(typeof c["gts-o-id"]!="undefined"||u.data.order_id){u.data.discount=c["gts-o-discounts"];if(typeof u.data.discount!="undefined"){u.data.discount=0;for(d=0;d<u.data.product_discount.length;d++){u.data.discount+=parseFloat(u.data.product_discount[d]);}}else if(typeof u.data.discount==="undefined"){u.data.discount="0";}
f='<div id="gts-order" style="display:none;">';f+='<span id="gts-o-id">'+((c["gts-o-id"])?c["gts-o-id"]:u.data.order_id)+'</span>';f+='<span id="gts-o-domain">'+((c["gts-o-domain"])?c["gts-o-domain"]:b["dom.domain"])+'</span>';f+='<span id="gts-o-email">'+((c["gts-o-email"])?c["gts-o-email"]:u.data.customer_id)+'</span>';f+='<span id="gts-o-country">'+((c["gts-o-country"])?c["gts-o-country"]:u.data.customer_country)+'</span>';f+='<span id="gts-o-total">'+((c["gts-o-total"])?c["gts-o-total"]:u.data.order_total)+'</span>';f+='<span id="gts-o-discounts">'+u.data.discount+'</span>';f+='<span id="gts-o-shipping-total">'+((c["gts-o-shipping-total"])?c["gts-o-shipping-total"]:u.data.order_shipping)+'</span>';f+='<span id="gts-o-tax-total">'+((c["gts-o-tax-total"])?c["gts-o-tax-total"]:u.data.order_tax)+'</span>';f+='<span id="gts-o-est-ship-date">'+((c["gts-o-est-ship-date"])?c["gts-o-est-ship-date"]:"")+'</span>';f+='<span id="gts-o-has-preorder">'+((c["gts-o-has-preorder"])?c["gts-o-has-preorder"]:"")+'</span>';f+='<span id="gts-o-has-digital">'+((c["gts-o-has-digital"])?c["gts-o-has-digital"]:"")+'</span>';for(d=0;d<u.data.product_id.length;d++){f+='<span class="gts-item">';f+='<span class="gts-i-name">'+u.data.product_name[d]+'</span>';f+='<span class="gts-i-price">'+u.data.product_unit_price[d]+'</span>';f+='<span class="gts-i-quantity">'+u.data.product_quantity[d]+'</span>';f+='<span id="gts-o-currency">'+((c["gts-o-currency"])?c["gts-o-currency"]:u.data.order_currency)+'</span>';f+='<span class="gts-i-prodsearch-id">'+u.data.product_id[d]+'</span>';f+='<span class="gts-i-prodsearch-store-id">'+((c["gts-i-prodsearch-store-id"])?c["gts-i-prodsearch-store-id"]:u.data.order_store)+'</span>';f+='<span class="gts-i-prodsearch-country">'+u.data.customer_country+'</span>';f+='<span class="gts-i-prodsearch-language">'+((c["gts-i-prodsearch-language"])?c["gts-i-prodsearch-language"]:"")+'</span>';f+='</span>';}
f+='</div>';e=document.createElement('div');e.innerHTML=f;d=document.getElementsByTagName('body')[0];d.appendChild(e);}
if(u.data.merchantid)gts.push(['id',u.data.merchantid]);if(u.data.offerid)gts.push(['google_base_offer_id',u.data.offerid||c['google_base_offer_id']]);if(u.data.subid)gts.push(['google_base_subaccount_id',u.data.subid||c['google_base_subaccount_id']]);u.loader_cb=function(a,b,c){u.initialized=true;};if(u.initialized===undefined){u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":'utag_72'});}}};utag.o[loader].loader.LOAD(id);})('72','petco.petcoweb');}catch(error){utag.DB(error);}