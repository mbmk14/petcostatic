//tealium universal tag - utag.67 ut4.0.201804040506, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.map={"js_page.PetcoDataLayer.page.page_type":"pagetype","js_page.PetcoDataLayer.product.product_price":"ecomm.pvalue,product_unit_price","js_page.PetcoDataLayer.order.order_merchandise_total":"value,ecomm.totalvalue,order_subtotal","js_page.PetcoDataLayer.product.product_parent_sku":"product_id,ecomm.prodid"};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g;u.data={"google_conversion_id":"1070953857","pagetype":"other","value":"","google_remarketing_only":true,"base_url":"//www.googleadservices.com/pagead/conversion_async.js","params":{},"product_id":[],"product_category":[],"product_quantity":[],"product_unit_price":[]};c=[],g={};var prefix="";u.data.google_custom_params={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){prefix=/^ecomm\.|^hotel\.|^edu\.|^flight\.|^hrental\.|^job\.|^local\.|^listing\.|^travel\.|^dynx\./.exec(e[f]);if(prefix!==null){prefix=prefix[0].slice(0,-1);u.data.params[prefix]=u.data.params[prefix]||{};u.data.params[prefix][e[f].substr(prefix.length+1)]=b[d];}else if(e[f].indexOf("custom.")==0){u.data.google_custom_params[e[f].substr(7)]=b[d];}else{u.data[e[f]]=b[d];}}}}
u.data.order_id=u.data.order_id||b._corder||"";u.data.order_subtotal=u.data.order_subtotal||b._csubtotal||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
if(u.data.product_id.length>0){u.data.params.ecomm=u.data.params.ecomm||{};if(u.data.params.ecomm.prodid===undefined){u.data.params.ecomm.prodid=u.data.product_id;}
if(u.data.product_category.length>0&&u.data.params.ecomm.category===undefined){u.data.params.ecomm.category=u.data.product_category;}
if(u.data.product_quantity.length>0&&u.data.params.ecomm.quantity===undefined){u.data.params.ecomm.quantity=u.data.product_quantity;}
if(u.data.product_unit_price.length>0&&u.data.params.ecomm.pvalue===undefined){u.data.params.ecomm.pvalue=u.data.product_unit_price;}}
u.data.google_conversion_id=parseInt(u.data.google_conversion_id);g.google_conversion_id=u.data.google_conversion_id;u.data.value=u.data.value||u.data.order_subtotal;u.data.value=parseFloat(u.data.value);if(u.data.google_conversion_label){g.google_conversion_label=u.data.google_conversion_label;}
for(d in u.data.params){u.data.google_custom_params[d+"_pagetype"]=u.data.pagetype;if(u.data.order_id||/purchase|conversion|cart|conversionintent/.test(u.data.pagetype)){u.data.google_custom_params[d+"_totalvalue"]=u.data.value;}
for(f in u.data.params[d]){u.data.google_custom_params[d+"_"+f]=u.data.params[d][f];}}
g.google_custom_params=u.data.google_custom_params;if(u.data.google_remarketing_only){g.google_remarketing_only=u.data.google_remarketing_only;}
u.loader_cb=function(g){u.initialized=true;window.google_trackConversion(g);};u.callBack=function(){var data={};while(data=u.queue.shift()){u.loader_cb(data.g);}};if(u.initialized){u.loader_cb(g);}else{u.queue.push({"g":g});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"utag_67"});}}
}};utag.o[loader].loader.LOAD(id);}("67","petco.petcoweb"));}catch(error){utag.DB(error);}
