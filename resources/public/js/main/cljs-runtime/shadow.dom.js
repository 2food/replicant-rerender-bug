goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_30545 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_30545(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_30551 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_30551(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__29230 = coll;
var G__29231 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__29230,G__29231) : shadow.dom.lazy_native_coll_seq.call(null,G__29230,G__29231));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__29257 = arguments.length;
switch (G__29257) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__29262 = arguments.length;
switch (G__29262) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__29267 = arguments.length;
switch (G__29267) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__29275 = arguments.length;
switch (G__29275) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__29283 = arguments.length;
switch (G__29283) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__29292 = arguments.length;
switch (G__29292) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e29307){if((e29307 instanceof Object)){
var e = e29307;
return console.log("didnt support attachEvent",el,e);
} else {
throw e29307;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__29314 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__29315 = null;
var count__29316 = (0);
var i__29317 = (0);
while(true){
if((i__29317 < count__29316)){
var el = chunk__29315.cljs$core$IIndexed$_nth$arity$2(null,i__29317);
var handler_30591__$1 = ((function (seq__29314,chunk__29315,count__29316,i__29317,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29314,chunk__29315,count__29316,i__29317,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30591__$1);


var G__30592 = seq__29314;
var G__30593 = chunk__29315;
var G__30594 = count__29316;
var G__30595 = (i__29317 + (1));
seq__29314 = G__30592;
chunk__29315 = G__30593;
count__29316 = G__30594;
i__29317 = G__30595;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29314);
if(temp__5825__auto__){
var seq__29314__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29314__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__29314__$1);
var G__30596 = cljs.core.chunk_rest(seq__29314__$1);
var G__30597 = c__5548__auto__;
var G__30598 = cljs.core.count(c__5548__auto__);
var G__30599 = (0);
seq__29314 = G__30596;
chunk__29315 = G__30597;
count__29316 = G__30598;
i__29317 = G__30599;
continue;
} else {
var el = cljs.core.first(seq__29314__$1);
var handler_30600__$1 = ((function (seq__29314,chunk__29315,count__29316,i__29317,el,seq__29314__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29314,chunk__29315,count__29316,i__29317,el,seq__29314__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30600__$1);


var G__30602 = cljs.core.next(seq__29314__$1);
var G__30603 = null;
var G__30604 = (0);
var G__30605 = (0);
seq__29314 = G__30602;
chunk__29315 = G__30603;
count__29316 = G__30604;
i__29317 = G__30605;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__29329 = arguments.length;
switch (G__29329) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__29353 = cljs.core.seq(events);
var chunk__29354 = null;
var count__29355 = (0);
var i__29356 = (0);
while(true){
if((i__29356 < count__29355)){
var vec__29379 = chunk__29354.cljs$core$IIndexed$_nth$arity$2(null,i__29356);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29379,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29379,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30616 = seq__29353;
var G__30617 = chunk__29354;
var G__30618 = count__29355;
var G__30619 = (i__29356 + (1));
seq__29353 = G__30616;
chunk__29354 = G__30617;
count__29355 = G__30618;
i__29356 = G__30619;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29353);
if(temp__5825__auto__){
var seq__29353__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29353__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__29353__$1);
var G__30625 = cljs.core.chunk_rest(seq__29353__$1);
var G__30626 = c__5548__auto__;
var G__30627 = cljs.core.count(c__5548__auto__);
var G__30628 = (0);
seq__29353 = G__30625;
chunk__29354 = G__30626;
count__29355 = G__30627;
i__29356 = G__30628;
continue;
} else {
var vec__29383 = cljs.core.first(seq__29353__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29383,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29383,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30630 = cljs.core.next(seq__29353__$1);
var G__30631 = null;
var G__30632 = (0);
var G__30633 = (0);
seq__29353 = G__30630;
chunk__29354 = G__30631;
count__29355 = G__30632;
i__29356 = G__30633;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__29400 = cljs.core.seq(styles);
var chunk__29401 = null;
var count__29402 = (0);
var i__29403 = (0);
while(true){
if((i__29403 < count__29402)){
var vec__29429 = chunk__29401.cljs$core$IIndexed$_nth$arity$2(null,i__29403);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29429,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29429,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30638 = seq__29400;
var G__30639 = chunk__29401;
var G__30640 = count__29402;
var G__30641 = (i__29403 + (1));
seq__29400 = G__30638;
chunk__29401 = G__30639;
count__29402 = G__30640;
i__29403 = G__30641;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29400);
if(temp__5825__auto__){
var seq__29400__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29400__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__29400__$1);
var G__30644 = cljs.core.chunk_rest(seq__29400__$1);
var G__30645 = c__5548__auto__;
var G__30646 = cljs.core.count(c__5548__auto__);
var G__30647 = (0);
seq__29400 = G__30644;
chunk__29401 = G__30645;
count__29402 = G__30646;
i__29403 = G__30647;
continue;
} else {
var vec__29432 = cljs.core.first(seq__29400__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29432,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29432,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30655 = cljs.core.next(seq__29400__$1);
var G__30656 = null;
var G__30657 = (0);
var G__30658 = (0);
seq__29400 = G__30655;
chunk__29401 = G__30656;
count__29402 = G__30657;
i__29403 = G__30658;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__29441_30660 = key;
var G__29441_30661__$1 = (((G__29441_30660 instanceof cljs.core.Keyword))?G__29441_30660.fqn:null);
switch (G__29441_30661__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_30675 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_30675,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_30675,"aria-");
}
})())){
el.setAttribute(ks_30675,value);
} else {
(el[ks_30675] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__29576){
var map__29578 = p__29576;
var map__29578__$1 = cljs.core.__destructure_map(map__29578);
var props = map__29578__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29578__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__29581 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29581,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29581,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29581,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__29584 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__29584,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__29584;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__29586 = arguments.length;
switch (G__29586) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__29598){
var vec__29602 = p__29598;
var seq__29603 = cljs.core.seq(vec__29602);
var first__29604 = cljs.core.first(seq__29603);
var seq__29603__$1 = cljs.core.next(seq__29603);
var nn = first__29604;
var first__29604__$1 = cljs.core.first(seq__29603__$1);
var seq__29603__$2 = cljs.core.next(seq__29603__$1);
var np = first__29604__$1;
var nc = seq__29603__$2;
var node = vec__29602;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29614 = nn;
var G__29615 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29614,G__29615) : create_fn.call(null,G__29614,G__29615));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29616 = nn;
var G__29617 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29616,G__29617) : create_fn.call(null,G__29616,G__29617));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__29619 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29619,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29619,(1),null);
var seq__29624_30694 = cljs.core.seq(node_children);
var chunk__29625_30695 = null;
var count__29626_30696 = (0);
var i__29627_30697 = (0);
while(true){
if((i__29627_30697 < count__29626_30696)){
var child_struct_30700 = chunk__29625_30695.cljs$core$IIndexed$_nth$arity$2(null,i__29627_30697);
var children_30701 = shadow.dom.dom_node(child_struct_30700);
if(cljs.core.seq_QMARK_(children_30701)){
var seq__29687_30702 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30701));
var chunk__29689_30703 = null;
var count__29690_30704 = (0);
var i__29691_30705 = (0);
while(true){
if((i__29691_30705 < count__29690_30704)){
var child_30706 = chunk__29689_30703.cljs$core$IIndexed$_nth$arity$2(null,i__29691_30705);
if(cljs.core.truth_(child_30706)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30706);


var G__30707 = seq__29687_30702;
var G__30708 = chunk__29689_30703;
var G__30709 = count__29690_30704;
var G__30710 = (i__29691_30705 + (1));
seq__29687_30702 = G__30707;
chunk__29689_30703 = G__30708;
count__29690_30704 = G__30709;
i__29691_30705 = G__30710;
continue;
} else {
var G__30711 = seq__29687_30702;
var G__30712 = chunk__29689_30703;
var G__30713 = count__29690_30704;
var G__30714 = (i__29691_30705 + (1));
seq__29687_30702 = G__30711;
chunk__29689_30703 = G__30712;
count__29690_30704 = G__30713;
i__29691_30705 = G__30714;
continue;
}
} else {
var temp__5825__auto___30717 = cljs.core.seq(seq__29687_30702);
if(temp__5825__auto___30717){
var seq__29687_30718__$1 = temp__5825__auto___30717;
if(cljs.core.chunked_seq_QMARK_(seq__29687_30718__$1)){
var c__5548__auto___30721 = cljs.core.chunk_first(seq__29687_30718__$1);
var G__30722 = cljs.core.chunk_rest(seq__29687_30718__$1);
var G__30723 = c__5548__auto___30721;
var G__30724 = cljs.core.count(c__5548__auto___30721);
var G__30725 = (0);
seq__29687_30702 = G__30722;
chunk__29689_30703 = G__30723;
count__29690_30704 = G__30724;
i__29691_30705 = G__30725;
continue;
} else {
var child_30730 = cljs.core.first(seq__29687_30718__$1);
if(cljs.core.truth_(child_30730)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30730);


var G__30731 = cljs.core.next(seq__29687_30718__$1);
var G__30732 = null;
var G__30733 = (0);
var G__30734 = (0);
seq__29687_30702 = G__30731;
chunk__29689_30703 = G__30732;
count__29690_30704 = G__30733;
i__29691_30705 = G__30734;
continue;
} else {
var G__30735 = cljs.core.next(seq__29687_30718__$1);
var G__30736 = null;
var G__30737 = (0);
var G__30738 = (0);
seq__29687_30702 = G__30735;
chunk__29689_30703 = G__30736;
count__29690_30704 = G__30737;
i__29691_30705 = G__30738;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30701);
}


var G__30739 = seq__29624_30694;
var G__30740 = chunk__29625_30695;
var G__30741 = count__29626_30696;
var G__30742 = (i__29627_30697 + (1));
seq__29624_30694 = G__30739;
chunk__29625_30695 = G__30740;
count__29626_30696 = G__30741;
i__29627_30697 = G__30742;
continue;
} else {
var temp__5825__auto___30743 = cljs.core.seq(seq__29624_30694);
if(temp__5825__auto___30743){
var seq__29624_30744__$1 = temp__5825__auto___30743;
if(cljs.core.chunked_seq_QMARK_(seq__29624_30744__$1)){
var c__5548__auto___30745 = cljs.core.chunk_first(seq__29624_30744__$1);
var G__30746 = cljs.core.chunk_rest(seq__29624_30744__$1);
var G__30747 = c__5548__auto___30745;
var G__30748 = cljs.core.count(c__5548__auto___30745);
var G__30749 = (0);
seq__29624_30694 = G__30746;
chunk__29625_30695 = G__30747;
count__29626_30696 = G__30748;
i__29627_30697 = G__30749;
continue;
} else {
var child_struct_30750 = cljs.core.first(seq__29624_30744__$1);
var children_30751 = shadow.dom.dom_node(child_struct_30750);
if(cljs.core.seq_QMARK_(children_30751)){
var seq__29710_30753 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30751));
var chunk__29712_30754 = null;
var count__29713_30755 = (0);
var i__29714_30756 = (0);
while(true){
if((i__29714_30756 < count__29713_30755)){
var child_30757 = chunk__29712_30754.cljs$core$IIndexed$_nth$arity$2(null,i__29714_30756);
if(cljs.core.truth_(child_30757)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30757);


var G__30758 = seq__29710_30753;
var G__30759 = chunk__29712_30754;
var G__30760 = count__29713_30755;
var G__30761 = (i__29714_30756 + (1));
seq__29710_30753 = G__30758;
chunk__29712_30754 = G__30759;
count__29713_30755 = G__30760;
i__29714_30756 = G__30761;
continue;
} else {
var G__30762 = seq__29710_30753;
var G__30763 = chunk__29712_30754;
var G__30764 = count__29713_30755;
var G__30765 = (i__29714_30756 + (1));
seq__29710_30753 = G__30762;
chunk__29712_30754 = G__30763;
count__29713_30755 = G__30764;
i__29714_30756 = G__30765;
continue;
}
} else {
var temp__5825__auto___30766__$1 = cljs.core.seq(seq__29710_30753);
if(temp__5825__auto___30766__$1){
var seq__29710_30767__$1 = temp__5825__auto___30766__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29710_30767__$1)){
var c__5548__auto___30768 = cljs.core.chunk_first(seq__29710_30767__$1);
var G__30769 = cljs.core.chunk_rest(seq__29710_30767__$1);
var G__30770 = c__5548__auto___30768;
var G__30771 = cljs.core.count(c__5548__auto___30768);
var G__30772 = (0);
seq__29710_30753 = G__30769;
chunk__29712_30754 = G__30770;
count__29713_30755 = G__30771;
i__29714_30756 = G__30772;
continue;
} else {
var child_30773 = cljs.core.first(seq__29710_30767__$1);
if(cljs.core.truth_(child_30773)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30773);


var G__30774 = cljs.core.next(seq__29710_30767__$1);
var G__30775 = null;
var G__30776 = (0);
var G__30777 = (0);
seq__29710_30753 = G__30774;
chunk__29712_30754 = G__30775;
count__29713_30755 = G__30776;
i__29714_30756 = G__30777;
continue;
} else {
var G__30778 = cljs.core.next(seq__29710_30767__$1);
var G__30779 = null;
var G__30780 = (0);
var G__30781 = (0);
seq__29710_30753 = G__30778;
chunk__29712_30754 = G__30779;
count__29713_30755 = G__30780;
i__29714_30756 = G__30781;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30751);
}


var G__30783 = cljs.core.next(seq__29624_30744__$1);
var G__30784 = null;
var G__30785 = (0);
var G__30786 = (0);
seq__29624_30694 = G__30783;
chunk__29625_30695 = G__30784;
count__29626_30696 = G__30785;
i__29627_30697 = G__30786;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__29742 = cljs.core.seq(node);
var chunk__29743 = null;
var count__29744 = (0);
var i__29745 = (0);
while(true){
if((i__29745 < count__29744)){
var n = chunk__29743.cljs$core$IIndexed$_nth$arity$2(null,i__29745);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30795 = seq__29742;
var G__30796 = chunk__29743;
var G__30797 = count__29744;
var G__30798 = (i__29745 + (1));
seq__29742 = G__30795;
chunk__29743 = G__30796;
count__29744 = G__30797;
i__29745 = G__30798;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29742);
if(temp__5825__auto__){
var seq__29742__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29742__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__29742__$1);
var G__30801 = cljs.core.chunk_rest(seq__29742__$1);
var G__30802 = c__5548__auto__;
var G__30803 = cljs.core.count(c__5548__auto__);
var G__30804 = (0);
seq__29742 = G__30801;
chunk__29743 = G__30802;
count__29744 = G__30803;
i__29745 = G__30804;
continue;
} else {
var n = cljs.core.first(seq__29742__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30805 = cljs.core.next(seq__29742__$1);
var G__30806 = null;
var G__30807 = (0);
var G__30808 = (0);
seq__29742 = G__30805;
chunk__29743 = G__30806;
count__29744 = G__30807;
i__29745 = G__30808;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__29761 = arguments.length;
switch (G__29761) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__29763 = arguments.length;
switch (G__29763) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__29793 = arguments.length;
switch (G__29793) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30852 = arguments.length;
var i__5750__auto___30853 = (0);
while(true){
if((i__5750__auto___30853 < len__5749__auto___30852)){
args__5755__auto__.push((arguments[i__5750__auto___30853]));

var G__30856 = (i__5750__auto___30853 + (1));
i__5750__auto___30853 = G__30856;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__29832_30858 = cljs.core.seq(nodes);
var chunk__29833_30859 = null;
var count__29834_30860 = (0);
var i__29835_30861 = (0);
while(true){
if((i__29835_30861 < count__29834_30860)){
var node_30862 = chunk__29833_30859.cljs$core$IIndexed$_nth$arity$2(null,i__29835_30861);
fragment.appendChild(shadow.dom._to_dom(node_30862));


var G__30863 = seq__29832_30858;
var G__30864 = chunk__29833_30859;
var G__30865 = count__29834_30860;
var G__30866 = (i__29835_30861 + (1));
seq__29832_30858 = G__30863;
chunk__29833_30859 = G__30864;
count__29834_30860 = G__30865;
i__29835_30861 = G__30866;
continue;
} else {
var temp__5825__auto___30867 = cljs.core.seq(seq__29832_30858);
if(temp__5825__auto___30867){
var seq__29832_30869__$1 = temp__5825__auto___30867;
if(cljs.core.chunked_seq_QMARK_(seq__29832_30869__$1)){
var c__5548__auto___30870 = cljs.core.chunk_first(seq__29832_30869__$1);
var G__30871 = cljs.core.chunk_rest(seq__29832_30869__$1);
var G__30872 = c__5548__auto___30870;
var G__30873 = cljs.core.count(c__5548__auto___30870);
var G__30874 = (0);
seq__29832_30858 = G__30871;
chunk__29833_30859 = G__30872;
count__29834_30860 = G__30873;
i__29835_30861 = G__30874;
continue;
} else {
var node_30875 = cljs.core.first(seq__29832_30869__$1);
fragment.appendChild(shadow.dom._to_dom(node_30875));


var G__30876 = cljs.core.next(seq__29832_30869__$1);
var G__30877 = null;
var G__30878 = (0);
var G__30879 = (0);
seq__29832_30858 = G__30876;
chunk__29833_30859 = G__30877;
count__29834_30860 = G__30878;
i__29835_30861 = G__30879;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq29830){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29830));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__29851_30881 = cljs.core.seq(scripts);
var chunk__29852_30882 = null;
var count__29853_30883 = (0);
var i__29854_30884 = (0);
while(true){
if((i__29854_30884 < count__29853_30883)){
var vec__29870_30886 = chunk__29852_30882.cljs$core$IIndexed$_nth$arity$2(null,i__29854_30884);
var script_tag_30887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29870_30886,(0),null);
var script_body_30888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29870_30886,(1),null);
eval(script_body_30888);


var G__30889 = seq__29851_30881;
var G__30890 = chunk__29852_30882;
var G__30891 = count__29853_30883;
var G__30892 = (i__29854_30884 + (1));
seq__29851_30881 = G__30889;
chunk__29852_30882 = G__30890;
count__29853_30883 = G__30891;
i__29854_30884 = G__30892;
continue;
} else {
var temp__5825__auto___30893 = cljs.core.seq(seq__29851_30881);
if(temp__5825__auto___30893){
var seq__29851_30896__$1 = temp__5825__auto___30893;
if(cljs.core.chunked_seq_QMARK_(seq__29851_30896__$1)){
var c__5548__auto___30897 = cljs.core.chunk_first(seq__29851_30896__$1);
var G__30898 = cljs.core.chunk_rest(seq__29851_30896__$1);
var G__30899 = c__5548__auto___30897;
var G__30900 = cljs.core.count(c__5548__auto___30897);
var G__30901 = (0);
seq__29851_30881 = G__30898;
chunk__29852_30882 = G__30899;
count__29853_30883 = G__30900;
i__29854_30884 = G__30901;
continue;
} else {
var vec__29880_30903 = cljs.core.first(seq__29851_30896__$1);
var script_tag_30904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29880_30903,(0),null);
var script_body_30905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29880_30903,(1),null);
eval(script_body_30905);


var G__30906 = cljs.core.next(seq__29851_30896__$1);
var G__30907 = null;
var G__30908 = (0);
var G__30909 = (0);
seq__29851_30881 = G__30906;
chunk__29852_30882 = G__30907;
count__29853_30883 = G__30908;
i__29854_30884 = G__30909;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__29890){
var vec__29892 = p__29890;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29892,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29892,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__29909 = arguments.length;
switch (G__29909) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__29920 = cljs.core.seq(style_keys);
var chunk__29921 = null;
var count__29922 = (0);
var i__29923 = (0);
while(true){
if((i__29923 < count__29922)){
var it = chunk__29921.cljs$core$IIndexed$_nth$arity$2(null,i__29923);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30923 = seq__29920;
var G__30924 = chunk__29921;
var G__30925 = count__29922;
var G__30926 = (i__29923 + (1));
seq__29920 = G__30923;
chunk__29921 = G__30924;
count__29922 = G__30925;
i__29923 = G__30926;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29920);
if(temp__5825__auto__){
var seq__29920__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29920__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__29920__$1);
var G__30930 = cljs.core.chunk_rest(seq__29920__$1);
var G__30931 = c__5548__auto__;
var G__30932 = cljs.core.count(c__5548__auto__);
var G__30933 = (0);
seq__29920 = G__30930;
chunk__29921 = G__30931;
count__29922 = G__30932;
i__29923 = G__30933;
continue;
} else {
var it = cljs.core.first(seq__29920__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30936 = cljs.core.next(seq__29920__$1);
var G__30937 = null;
var G__30938 = (0);
var G__30939 = (0);
seq__29920 = G__30936;
chunk__29921 = G__30937;
count__29922 = G__30938;
i__29923 = G__30939;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k29933,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__30025 = k29933;
var G__30025__$1 = (((G__30025 instanceof cljs.core.Keyword))?G__30025.fqn:null);
switch (G__30025__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29933,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__30032){
var vec__30035 = p__30032;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30035,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30035,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29932){
var self__ = this;
var G__29932__$1 = this;
return (new cljs.core.RecordIter((0),G__29932__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29934,other29935){
var self__ = this;
var this29934__$1 = this;
return (((!((other29935 == null)))) && ((((this29934__$1.constructor === other29935.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29934__$1.x,other29935.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29934__$1.y,other29935.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29934__$1.__extmap,other29935.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k29933){
var self__ = this;
var this__5330__auto____$1 = this;
var G__30070 = k29933;
var G__30070__$1 = (((G__30070 instanceof cljs.core.Keyword))?G__30070.fqn:null);
switch (G__30070__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29933);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__29932){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__30071 = cljs.core.keyword_identical_QMARK_;
var expr__30072 = k__5332__auto__;
if(cljs.core.truth_((pred__30071.cljs$core$IFn$_invoke$arity$2 ? pred__30071.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__30072) : pred__30071.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__30072)))){
return (new shadow.dom.Coordinate(G__29932,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30071.cljs$core$IFn$_invoke$arity$2 ? pred__30071.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__30072) : pred__30071.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__30072)))){
return (new shadow.dom.Coordinate(self__.x,G__29932,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__29932),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__29932){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__29932,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__29988){
var extmap__5365__auto__ = (function (){var G__30085 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29988,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__29988)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30085);
} else {
return G__30085;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__29988),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__29988),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k30115,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__30136 = k30115;
var G__30136__$1 = (((G__30136 instanceof cljs.core.Keyword))?G__30136.fqn:null);
switch (G__30136__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30115,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__30141){
var vec__30143 = p__30141;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30143,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30143,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30114){
var self__ = this;
var G__30114__$1 = this;
return (new cljs.core.RecordIter((0),G__30114__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30116,other30117){
var self__ = this;
var this30116__$1 = this;
return (((!((other30117 == null)))) && ((((this30116__$1.constructor === other30117.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30116__$1.w,other30117.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30116__$1.h,other30117.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30116__$1.__extmap,other30117.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k30115){
var self__ = this;
var this__5330__auto____$1 = this;
var G__30216 = k30115;
var G__30216__$1 = (((G__30216 instanceof cljs.core.Keyword))?G__30216.fqn:null);
switch (G__30216__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k30115);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__30114){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__30239 = cljs.core.keyword_identical_QMARK_;
var expr__30240 = k__5332__auto__;
if(cljs.core.truth_((pred__30239.cljs$core$IFn$_invoke$arity$2 ? pred__30239.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__30240) : pred__30239.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__30240)))){
return (new shadow.dom.Size(G__30114,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30239.cljs$core$IFn$_invoke$arity$2 ? pred__30239.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__30240) : pred__30239.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__30240)))){
return (new shadow.dom.Size(self__.w,G__30114,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__30114),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__30114){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__30114,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__30124){
var extmap__5365__auto__ = (function (){var G__30271 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30124,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__30124)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30271);
} else {
return G__30271;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__30124),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__30124),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__31050 = (i + (1));
var G__31051 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__31050;
ret = G__31051;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30306){
var vec__30307 = p__30306;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30307,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30307,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__30312 = arguments.length;
switch (G__30312) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__31063 = ps;
var G__31064 = (i + (1));
el__$1 = G__31063;
i = G__31064;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__30360 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30360,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30360,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30360,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__30368_31075 = cljs.core.seq(props);
var chunk__30369_31076 = null;
var count__30370_31077 = (0);
var i__30371_31078 = (0);
while(true){
if((i__30371_31078 < count__30370_31077)){
var vec__30384_31080 = chunk__30369_31076.cljs$core$IIndexed$_nth$arity$2(null,i__30371_31078);
var k_31081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30384_31080,(0),null);
var v_31082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30384_31080,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_31081);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31081),v_31082);


var G__31088 = seq__30368_31075;
var G__31089 = chunk__30369_31076;
var G__31090 = count__30370_31077;
var G__31091 = (i__30371_31078 + (1));
seq__30368_31075 = G__31088;
chunk__30369_31076 = G__31089;
count__30370_31077 = G__31090;
i__30371_31078 = G__31091;
continue;
} else {
var temp__5825__auto___31093 = cljs.core.seq(seq__30368_31075);
if(temp__5825__auto___31093){
var seq__30368_31095__$1 = temp__5825__auto___31093;
if(cljs.core.chunked_seq_QMARK_(seq__30368_31095__$1)){
var c__5548__auto___31096 = cljs.core.chunk_first(seq__30368_31095__$1);
var G__31097 = cljs.core.chunk_rest(seq__30368_31095__$1);
var G__31098 = c__5548__auto___31096;
var G__31099 = cljs.core.count(c__5548__auto___31096);
var G__31100 = (0);
seq__30368_31075 = G__31097;
chunk__30369_31076 = G__31098;
count__30370_31077 = G__31099;
i__30371_31078 = G__31100;
continue;
} else {
var vec__30394_31101 = cljs.core.first(seq__30368_31095__$1);
var k_31102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394_31101,(0),null);
var v_31103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394_31101,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_31102);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31102),v_31103);


var G__31107 = cljs.core.next(seq__30368_31095__$1);
var G__31108 = null;
var G__31109 = (0);
var G__31110 = (0);
seq__30368_31075 = G__31107;
chunk__30369_31076 = G__31108;
count__30370_31077 = G__31109;
i__30371_31078 = G__31110;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__30414 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30414,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30414,(1),null);
var seq__30418_31113 = cljs.core.seq(node_children);
var chunk__30420_31114 = null;
var count__30421_31115 = (0);
var i__30422_31116 = (0);
while(true){
if((i__30422_31116 < count__30421_31115)){
var child_struct_31117 = chunk__30420_31114.cljs$core$IIndexed$_nth$arity$2(null,i__30422_31116);
if((!((child_struct_31117 == null)))){
if(typeof child_struct_31117 === 'string'){
var text_31120 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31120),child_struct_31117].join(''));
} else {
var children_31124 = shadow.dom.svg_node(child_struct_31117);
if(cljs.core.seq_QMARK_(children_31124)){
var seq__30479_31126 = cljs.core.seq(children_31124);
var chunk__30481_31127 = null;
var count__30482_31128 = (0);
var i__30483_31130 = (0);
while(true){
if((i__30483_31130 < count__30482_31128)){
var child_31134 = chunk__30481_31127.cljs$core$IIndexed$_nth$arity$2(null,i__30483_31130);
if(cljs.core.truth_(child_31134)){
node.appendChild(child_31134);


var G__31139 = seq__30479_31126;
var G__31140 = chunk__30481_31127;
var G__31142 = count__30482_31128;
var G__31143 = (i__30483_31130 + (1));
seq__30479_31126 = G__31139;
chunk__30481_31127 = G__31140;
count__30482_31128 = G__31142;
i__30483_31130 = G__31143;
continue;
} else {
var G__31146 = seq__30479_31126;
var G__31147 = chunk__30481_31127;
var G__31148 = count__30482_31128;
var G__31149 = (i__30483_31130 + (1));
seq__30479_31126 = G__31146;
chunk__30481_31127 = G__31147;
count__30482_31128 = G__31148;
i__30483_31130 = G__31149;
continue;
}
} else {
var temp__5825__auto___31150 = cljs.core.seq(seq__30479_31126);
if(temp__5825__auto___31150){
var seq__30479_31153__$1 = temp__5825__auto___31150;
if(cljs.core.chunked_seq_QMARK_(seq__30479_31153__$1)){
var c__5548__auto___31154 = cljs.core.chunk_first(seq__30479_31153__$1);
var G__31157 = cljs.core.chunk_rest(seq__30479_31153__$1);
var G__31158 = c__5548__auto___31154;
var G__31159 = cljs.core.count(c__5548__auto___31154);
var G__31160 = (0);
seq__30479_31126 = G__31157;
chunk__30481_31127 = G__31158;
count__30482_31128 = G__31159;
i__30483_31130 = G__31160;
continue;
} else {
var child_31166 = cljs.core.first(seq__30479_31153__$1);
if(cljs.core.truth_(child_31166)){
node.appendChild(child_31166);


var G__31173 = cljs.core.next(seq__30479_31153__$1);
var G__31174 = null;
var G__31175 = (0);
var G__31176 = (0);
seq__30479_31126 = G__31173;
chunk__30481_31127 = G__31174;
count__30482_31128 = G__31175;
i__30483_31130 = G__31176;
continue;
} else {
var G__31184 = cljs.core.next(seq__30479_31153__$1);
var G__31186 = null;
var G__31187 = (0);
var G__31188 = (0);
seq__30479_31126 = G__31184;
chunk__30481_31127 = G__31186;
count__30482_31128 = G__31187;
i__30483_31130 = G__31188;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31124);
}
}


var G__31193 = seq__30418_31113;
var G__31194 = chunk__30420_31114;
var G__31195 = count__30421_31115;
var G__31196 = (i__30422_31116 + (1));
seq__30418_31113 = G__31193;
chunk__30420_31114 = G__31194;
count__30421_31115 = G__31195;
i__30422_31116 = G__31196;
continue;
} else {
var G__31199 = seq__30418_31113;
var G__31200 = chunk__30420_31114;
var G__31201 = count__30421_31115;
var G__31202 = (i__30422_31116 + (1));
seq__30418_31113 = G__31199;
chunk__30420_31114 = G__31200;
count__30421_31115 = G__31201;
i__30422_31116 = G__31202;
continue;
}
} else {
var temp__5825__auto___31203 = cljs.core.seq(seq__30418_31113);
if(temp__5825__auto___31203){
var seq__30418_31205__$1 = temp__5825__auto___31203;
if(cljs.core.chunked_seq_QMARK_(seq__30418_31205__$1)){
var c__5548__auto___31206 = cljs.core.chunk_first(seq__30418_31205__$1);
var G__31207 = cljs.core.chunk_rest(seq__30418_31205__$1);
var G__31208 = c__5548__auto___31206;
var G__31209 = cljs.core.count(c__5548__auto___31206);
var G__31210 = (0);
seq__30418_31113 = G__31207;
chunk__30420_31114 = G__31208;
count__30421_31115 = G__31209;
i__30422_31116 = G__31210;
continue;
} else {
var child_struct_31211 = cljs.core.first(seq__30418_31205__$1);
if((!((child_struct_31211 == null)))){
if(typeof child_struct_31211 === 'string'){
var text_31214 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31214),child_struct_31211].join(''));
} else {
var children_31217 = shadow.dom.svg_node(child_struct_31211);
if(cljs.core.seq_QMARK_(children_31217)){
var seq__30501_31219 = cljs.core.seq(children_31217);
var chunk__30503_31220 = null;
var count__30504_31221 = (0);
var i__30505_31222 = (0);
while(true){
if((i__30505_31222 < count__30504_31221)){
var child_31224 = chunk__30503_31220.cljs$core$IIndexed$_nth$arity$2(null,i__30505_31222);
if(cljs.core.truth_(child_31224)){
node.appendChild(child_31224);


var G__31225 = seq__30501_31219;
var G__31226 = chunk__30503_31220;
var G__31227 = count__30504_31221;
var G__31228 = (i__30505_31222 + (1));
seq__30501_31219 = G__31225;
chunk__30503_31220 = G__31226;
count__30504_31221 = G__31227;
i__30505_31222 = G__31228;
continue;
} else {
var G__31230 = seq__30501_31219;
var G__31231 = chunk__30503_31220;
var G__31232 = count__30504_31221;
var G__31233 = (i__30505_31222 + (1));
seq__30501_31219 = G__31230;
chunk__30503_31220 = G__31231;
count__30504_31221 = G__31232;
i__30505_31222 = G__31233;
continue;
}
} else {
var temp__5825__auto___31234__$1 = cljs.core.seq(seq__30501_31219);
if(temp__5825__auto___31234__$1){
var seq__30501_31235__$1 = temp__5825__auto___31234__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30501_31235__$1)){
var c__5548__auto___31237 = cljs.core.chunk_first(seq__30501_31235__$1);
var G__31238 = cljs.core.chunk_rest(seq__30501_31235__$1);
var G__31239 = c__5548__auto___31237;
var G__31240 = cljs.core.count(c__5548__auto___31237);
var G__31241 = (0);
seq__30501_31219 = G__31238;
chunk__30503_31220 = G__31239;
count__30504_31221 = G__31240;
i__30505_31222 = G__31241;
continue;
} else {
var child_31243 = cljs.core.first(seq__30501_31235__$1);
if(cljs.core.truth_(child_31243)){
node.appendChild(child_31243);


var G__31245 = cljs.core.next(seq__30501_31235__$1);
var G__31246 = null;
var G__31247 = (0);
var G__31248 = (0);
seq__30501_31219 = G__31245;
chunk__30503_31220 = G__31246;
count__30504_31221 = G__31247;
i__30505_31222 = G__31248;
continue;
} else {
var G__31250 = cljs.core.next(seq__30501_31235__$1);
var G__31251 = null;
var G__31252 = (0);
var G__31253 = (0);
seq__30501_31219 = G__31250;
chunk__30503_31220 = G__31251;
count__30504_31221 = G__31252;
i__30505_31222 = G__31253;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31217);
}
}


var G__31255 = cljs.core.next(seq__30418_31205__$1);
var G__31256 = null;
var G__31257 = (0);
var G__31258 = (0);
seq__30418_31113 = G__31255;
chunk__30420_31114 = G__31256;
count__30421_31115 = G__31257;
i__30422_31116 = G__31258;
continue;
} else {
var G__31261 = cljs.core.next(seq__30418_31205__$1);
var G__31262 = null;
var G__31263 = (0);
var G__31264 = (0);
seq__30418_31113 = G__31261;
chunk__30420_31114 = G__31262;
count__30421_31115 = G__31263;
i__30422_31116 = G__31264;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___31274 = arguments.length;
var i__5750__auto___31275 = (0);
while(true){
if((i__5750__auto___31275 < len__5749__auto___31274)){
args__5755__auto__.push((arguments[i__5750__auto___31275]));

var G__31276 = (i__5750__auto___31275 + (1));
i__5750__auto___31275 = G__31276;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq30536){
var G__30537 = cljs.core.first(seq30536);
var seq30536__$1 = cljs.core.next(seq30536);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30537,seq30536__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
