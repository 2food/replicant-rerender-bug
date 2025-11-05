goog.provide('replicant.core');
replicant.core.parse_tag = (function replicant$core$parse_tag(tag){
var ns = cljs.core.namespace(tag);
var tag__$1 = cljs.core.name(tag);
var id_index = (function (){var index = tag__$1.indexOf("#");
if((index > (0))){
return index;
} else {
return null;
}
})();
var class_index = (function (){var index = tag__$1.indexOf(".");
if((index > (0))){
return index;
} else {
return null;
}
})();
var tag_name = (function (){var G__37132 = (cljs.core.truth_(id_index)?tag__$1.substring((0),id_index):(cljs.core.truth_(class_index)?tag__$1.substring((0),class_index):tag__$1
));
if(cljs.core.truth_(ns)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,G__37132);
} else {
return G__37132;
}
})();
var id = (cljs.core.truth_(id_index)?(cljs.core.truth_(class_index)?tag__$1.substring((id_index + (1)),class_index):tag__$1.substring((id_index + (1)))):null);
var classes = (cljs.core.truth_(class_index)?cljs.core.seq(tag__$1.substring((class_index + (1))).split(".")):null);
return [tag_name,id,classes];
});
/**
 * Hiccup symbols can include tag name, id and classes. The argument map is
 *   optional. This function finds the important bits of the hiccup data structure
 *   and returns a "headers" tuple with a stable position for:
 * 
 *   - tag-name
 *   - id from the hiccup symbol
 *   - classes from the hiccup symbol
 *   - key
 *   - attributes
 *   - children
 *   - namespace
 *   - original s-expression
 * 
 *   Attributes and children are completely untouched. Headers can be used to
 *   quickly determine tag name and key, or sent to `get-attrs` and
 *   `get-children` for usable information about those things.
 * 
 *   Returns a tuple (instead of a map) for speed.
 * 
 *   - `sexp` is the hiccup to parse
 * 
 *   - `ns` is the namespace of the elements, used for SVG elements. The SVG
 *   element has an explicit namespace, which needs to be set on all of its
 *   children, so they can all be created with createElementNS etc.
 */
replicant.core.get_hiccup_headers = (function replicant$core$get_hiccup_headers(ns,sexp){
if(cljs.core.truth_(sexp)){
if(replicant.hiccup.hiccup_QMARK_(sexp)){
var sym = cljs.core.first(sexp);
var args = cljs.core.rest(sexp);
var has_args_QMARK_ = cljs.core.map_QMARK_(cljs.core.first(args));
var attrs = ((has_args_QMARK_)?cljs.core.first(args):cljs.core.PersistentArrayMap.EMPTY);
if((!(cljs.core.not(cljs.core.re_find(/#($|\.)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)))))){
var fn__36367__auto___37932 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___37933 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___37934 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37134 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = sexp;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," contains an empty id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Either complete the id or remove the # character."], null);
var G__37134__$1 = (cljs.core.truth_(fn__36367__auto___37932)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37134,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___37932):G__37134);
var G__37134__$2 = (cljs.core.truth_(alias__36368__auto___37933)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37134__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___37933):G__37134__$1);
if(cljs.core.truth_(fd__36369__auto___37934)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37134__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___37934);
} else {
return G__37134__$2;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/#[^a-zA-Z_\.]/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)))))){
var fn__36367__auto___37935 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___37936 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___37937 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37135 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = sexp;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," contains an invalid id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"IDs must start with a letter."], null);
var G__37135__$1 = (cljs.core.truth_(fn__36367__auto___37935)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37135,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___37935):G__37135);
var G__37135__$2 = (cljs.core.truth_(alias__36368__auto___37936)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37135__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___37936):G__37135__$1);
if(cljs.core.truth_(fd__36369__auto___37937)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37135__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___37937);
} else {
return G__37135__$2;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/\.$/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)))))){
var fn__36367__auto___37938 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___37939 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___37940 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37139 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = sexp;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," contains an empty class"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"This may cause a DOMException and is considered a coding error. Replicant will not sacrifice performance to work around it."], null);
var G__37139__$1 = (cljs.core.truth_(fn__36367__auto___37938)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37139,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___37938):G__37139);
var G__37139__$2 = (cljs.core.truth_(alias__36368__auto___37939)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37139__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___37939):G__37139__$1);
if(cljs.core.truth_(fd__36369__auto___37940)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37139__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___37940);
} else {
return G__37139__$2;
}
})());
} else {
}

var pt__35964__auto__ = replicant.core.parse_tag(sym);
var G__37140 = pt__35964__auto__;
G__37140.push((function (){var temp__5825__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5825__auto__)){
var k__35916__auto__ = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__35964__auto__[(0)]),k__35916__auto__], null);
} else {
return null;
}
})());

G__37140.push(attrs);

G__37140.push(((has_args_QMARK_)?cljs.core.rest(args):args));

G__37140.push(ns);

G__37140.push(sexp);

G__37140.push(null);

G__37140.push(null);

return G__37140;
} else {
var text__35992__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexp);
return (new Array(null,null,null,null,null,null,null,text__35992__auto__,text__35992__auto__,null));
}
} else {
return null;
}
});
replicant.core.get_classes = (function replicant$core$get_classes(classes){
if((classes instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(classes)], null);
} else {
if((classes instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(classes)], null);
} else {
if(cljs.core.empty_QMARK_(classes)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.coll_QMARK_(classes)){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (class$){
if(cljs.core.truth_(class$)){
if((class$ instanceof cljs.core.Keyword)){
return cljs.core.name(class$);
} else {
if((class$ instanceof cljs.core.Symbol)){
return cljs.core.name(class$);
} else {
if(typeof class$ === 'string'){
return cljs.core.not_empty(class$.trim());
} else {
return null;
}
}
}
} else {
return null;
}
}),classes);
} else {
if(typeof classes === 'string'){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__37141_SHARP_){
return cljs.core.not_empty(p1__37141_SHARP_.trim());
}),classes.split(" "));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("class name is neither string, keyword, or a collection of those",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null));

}
}
}
}
}
});
replicant.core.skip_pixelize_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 26, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),null,new cljs.core.Keyword(null,"box-flex-group","box-flex-group",-1468550335),null,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"column-count","column-count",1235131236),null,new cljs.core.Keyword(null,"flex-negative","flex-negative",-1543996476),null,new cljs.core.Keyword(null,"tab-size","tab-size",-1265790523),null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),null,new cljs.core.Keyword(null,"flex-order","flex-order",-621251126),null,new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),null,new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),null,new cljs.core.Keyword(null,"flex","flex",-1425124628),null,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),null,new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),null,new cljs.core.Keyword(null,"orphans","orphans",1913357231),null,new cljs.core.Keyword(null,"widows","widows",1989591025),null,new cljs.core.Keyword(null,"z-index","z-index",1892827090),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"box-ordinal-group","box-ordinal-group",201694774),null,new cljs.core.Keyword(null,"order","order",-1254677256),null,new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),null,new cljs.core.Keyword(null,"line-clamp","line-clamp",-1079334403),null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),null,new cljs.core.Keyword(null,"flex-positive","flex-positive",-239614242),null,new cljs.core.Keyword(null,"box-flex","box-flex",-831196194),null], null), null);
/**
 * Converts string values for the style attribute to a map of keyword keys and
 *   string values.
 */
replicant.core.explode_styles = (function replicant$core$explode_styles(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (kv){
var vec__37146 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37145_SHARP_){
return p1__37145_SHARP_.trim();
}),kv.split(":"));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37146,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37146,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null);
}),s.split(";")));
});
replicant.core.get_style_val = (function replicant$core$get_style_val(attr,v){
if(typeof v === 'number'){
if(cljs.core.truth_((replicant.core.skip_pixelize_attrs.cljs$core$IFn$_invoke$arity$1 ? replicant.core.skip_pixelize_attrs.cljs$core$IFn$_invoke$arity$1(attr) : replicant.core.skip_pixelize_attrs.call(null,attr)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"px"].join('');
}
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.name(v);
} else {
return v;

}
}
});
replicant.core.prep_attrs = (function replicant$core$prep_attrs(attrs,id,classes){
var classes__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(replicant.core.get_classes(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs)),classes);
var G__37153 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009)], 0));
var G__37153__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37153,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__37153);
var G__37153__$2 = ((cljs.core.seq(classes__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37153__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes__$1):G__37153__$1);
if(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs) === 'string'){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__37153__$2,new cljs.core.Keyword(null,"style","style",-496642736),replicant.core.explode_styles);
} else {
return G__37153__$2;
}
});
/**
 * Given `headers` as produced by `get-hiccup-headers`, returns a map of all HTML
 *   attributes.
 */
replicant.core.get_attrs = (function replicant$core$get_attrs(headers){
if((!((!(cljs.core.contains_QMARK_((headers[(4)]),new cljs.core.Keyword(null,"className","className",-1983287057))))))){
var fn__36367__auto___37941 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___37942 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___37943 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37158 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Use :class, not :className",new cljs.core.Keyword(null,"message","message",-406056002),":className is not supported, please use :class instead. It takes a keyword, a string, or a collection of either of those."], null);
var G__37158__$1 = (cljs.core.truth_(fn__36367__auto___37941)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37158,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___37941):G__37158);
var G__37158__$2 = (cljs.core.truth_(alias__36368__auto___37942)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37158__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___37942):G__37158__$1);
if(cljs.core.truth_(fd__36369__auto___37943)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37158__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___37943);
} else {
return G__37158__$2;
}
})());
} else {
}

if((!((function (){var class__36878__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return (((!(typeof class__36878__auto__ === 'string'))) || ((class__36878__auto__.indexOf(" ") < (0))));
})()))){
var fn__36367__auto___37944 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___37945 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___37946 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37161 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid space separated :class strings",new cljs.core.Keyword(null,"message","message",-406056002),(function (){var class__36878__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return [":class supports collections of keywords and/or strings as classes. These perform better, and are usually more convenient to work with. Solve by converting ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class__36878__auto__], 0))," to ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(class__36878__auto__.split(" "))], 0))].join('');
})()], null);
var G__37161__$1 = (cljs.core.truth_(fn__36367__auto___37944)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37161,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___37944):G__37161);
var G__37161__$2 = (cljs.core.truth_(alias__36368__auto___37945)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37161__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___37945):G__37161__$1);
if(cljs.core.truth_(fd__36369__auto___37946)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37161__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___37946);
} else {
return G__37161__$2;
}
})());
} else {
}

if((!((!(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1((headers[(4)])) === 'string'))))){
var fn__36367__auto___37947 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___37948 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___37949 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37165 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid string styles",new cljs.core.Keyword(null,"message","message",-406056002),":style supports structured maps of CSS property/value pairs. Strings must be parsed, so they're both slower and harder to read and write."], null);
var G__37165__$1 = (cljs.core.truth_(fn__36367__auto___37947)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37165,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___37947):G__37165);
var G__37165__$2 = (cljs.core.truth_(alias__36368__auto___37948)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37165__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___37948):G__37165__$1);
if(cljs.core.truth_(fd__36369__auto___37949)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37165__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___37949);
} else {
return G__37165__$2;
}
})());
} else {
}

return replicant.core.prep_attrs((headers[(4)]),(headers[(1)]),(headers[(2)]));
});
replicant.core.merge_attrs = (function replicant$core$merge_attrs(attrs,overrides){
var G__37169 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(overrides,new cljs.core.Keyword(null,"style","style",-496642736))], 0));
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides);
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__37169,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides));
} else {
return G__37169;
}
});
replicant.core.get_mounting_attrs = (function replicant$core$get_mounting_attrs(headers){
var temp__5823__auto__ = new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(temp__5823__auto__)){
var mounting = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs(headers),(function (){var headers__$1 = (function (){var G__37172 = headers;
if(cljs.core.truth_(mounting)){
var headers__36005__auto__ = G__37172;
(headers__36005__auto__[(4)] = replicant.core.merge_attrs((headers__36005__auto__[(4)]),mounting));

return headers__36005__auto__;
} else {
return G__37172;
}
})();
return replicant.core.prep_attrs((headers__$1[(4)]),(headers__$1[(1)]),(headers__$1[(2)]));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs(headers)], null);
}
});
replicant.core.get_unmounting_attrs = (function replicant$core$get_unmounting_attrs(vdom){
if(cljs.core.truth_((vdom[(6)]))){
return replicant.core.prep_attrs(replicant.core.merge_attrs((vdom[(3)]),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2((vdom[(7)]),(1)))),null,(vdom[(2)]));
} else {
return null;
}
});
replicant.core.flatten_seqs_STAR_ = (function replicant$core$flatten_seqs_STAR_(xs,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.seq_QMARK_(x)){
return (replicant.core.flatten_seqs_STAR_.cljs$core$IFn$_invoke$arity$2 ? replicant.core.flatten_seqs_STAR_.cljs$core$IFn$_invoke$arity$2(x,coll) : replicant.core.flatten_seqs_STAR_.call(null,x,coll));
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(coll,x);

}
}),null,xs);
});
replicant.core.flatten_seqs = (function replicant$core$flatten_seqs(xs){
var coll = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
replicant.core.flatten_seqs_STAR_(xs,coll);

return cljs.core.persistent_BANG_(coll);
});
replicant.core.flatten_map_seqs_STAR_ = (function replicant$core$flatten_map_seqs_STAR_(f,xs,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.seq_QMARK_(x)){
return (replicant.core.flatten_map_seqs_STAR_.cljs$core$IFn$_invoke$arity$3 ? replicant.core.flatten_map_seqs_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,coll) : replicant.core.flatten_map_seqs_STAR_.call(null,f,x,coll));
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(coll,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));

}
}),null,xs);
});
replicant.core.flatten_map_seqs = (function replicant$core$flatten_map_seqs(f,xs){
var coll = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
replicant.core.flatten_map_seqs_STAR_(f,xs,coll);

return cljs.core.persistent_BANG_(coll);
});
/**
 * Given an optional tag namespace `ns` (e.g. for SVG nodes) and `headers`, as
 *   produced by `get-hiccup-headers`, returns a flat collection of children as
 *   "hiccup headers". Children will carry the `ns`, if any.
 */
replicant.core.get_children = (function replicant$core$get_children(headers,ns){
if(cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers[(4)])))){
return null;
} else {
return replicant.core.flatten_map_seqs((function (p1__37177_SHARP_){
var G__37179 = p1__37177_SHARP_;
if((G__37179 == null)){
return null;
} else {
return replicant.core.get_hiccup_headers(ns,G__37179);
}
}),(headers[(5)]));
}
});
/**
 * Like `get-children` but returns a tuple of `[children ks]` where `ks` is a set
 *   of the keys in `children`.
 */
replicant.core.get_children_ks = (function replicant$core$get_children_ks(headers,ns){
var vec__37188 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__37191,hiccup){
var vec__37192 = p__37191;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37192,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37192,(1),null);
if(cljs.core.truth_(hiccup)){
var headers__$1 = replicant.core.get_hiccup_headers(ns,hiccup);
var k = (headers__$1[(3)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,headers__$1),(function (){var G__37196 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__37196,k);
} else {
return G__37196;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY)], null),replicant.core.flatten_seqs((headers[(5)])));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37188,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37188,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(children),cljs.core.persistent_BANG_(ks)], null);
});
replicant.core._STAR_dispatch_STAR_ = null;
/**
 * Returns the function to use for handling DOM events. Uses `handler` directly
 *   when it's a function or a string (assumed to be inline JavaScript, not really
 *   recommended), or a wrapper that dispatches through
 *   `replicant.core/*dispatch*`, if it is bound to a function. 
 */
replicant.core.get_event_handler = (function replicant$core$get_event_handler(handler,event){
var or__5025__auto__ = ((((cljs.core.fn_QMARK_(handler)) || (((cljs.core.var_QMARK_(handler)) && (cljs.core.fn_QMARK_(cljs.core.deref(handler)))))))?handler:null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = ((cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_))?(function (e){
var node = e.target;
var rd = (function (){var G__37202 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","dom-event","replicant.trigger/dom-event",930136738),new cljs.core.Keyword("replicant","js-event","replicant/js-event",1927942146),e,new cljs.core.Keyword("replicant","dom-event","replicant/dom-event",-1613182512),e], null);
if(cljs.core.truth_(node)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37202,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node);
} else {
return G__37202;
}
})();
return replicant.core._STAR_dispatch_STAR_.call(null,rd,handler);
}):null);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = ((typeof handler === 'string')?handler:null);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot use non-function event handler when replicant.core/*dispatch* is not bound to a function",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),replicant.core._STAR_dispatch_STAR_], null));
}
}
}
});
/**
 * Returns the function to use to dispatch life-cycle hooks on an element. Uses
 *   `handler` directly when it's a function, or a wrapper that dispatches through
 *   `replicant.core/*dispatch*`, if it is bound to a function.
 */
replicant.core.get_life_cycle_hook = (function replicant$core$get_life_cycle_hook(handler){
var or__5025__auto__ = ((cljs.core.fn_QMARK_(handler))?handler:null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (cljs.core.truth_((function (){var and__5023__auto__ = handler;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_);
} else {
return and__5023__auto__;
}
})())?(function (e){
return replicant.core._STAR_dispatch_STAR_.call(null,e,handler);
}):null);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
if(cljs.core.truth_(handler)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot use non-function life-cycle hook when replicant.core/*dispatch* is not bound to a function",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),replicant.core._STAR_dispatch_STAR_], null));
} else {
return null;
}
}
}
});
replicant.core.call_hook = (function replicant$core$call_hook(renderer,p__37206){
var vec__37207 = p__37206;
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(1),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(2),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(3),null);
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(4),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(5),null);
var f = replicant.core.get_life_cycle_hook(hook);
var life_cycle = (((old == null))?new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865):(((new$ == null))?new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184):new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235)
));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),k)) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865))))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235))))))))))){
var G__37210 = (function (){var G__37211 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","life-cycle","replicant.trigger/life-cycle",-205660972),new cljs.core.Keyword("replicant","life-cycle","replicant/life-cycle",1802888458),life_cycle,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node,new cljs.core.Keyword("replicant","remember","replicant/remember",809947829),(function replicant$core$call_hook_$_remember(memory){
return replicant.protocols.remember(renderer,node,memory);
})], null);
var G__37211__$1 = (cljs.core.truth_(details)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37211,new cljs.core.Keyword("replicant","details","replicant/details",-1846218867),details):G__37211);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37211__$1,new cljs.core.Keyword("replicant","memory","replicant/memory",-1882688464),replicant.protocols.recall(renderer,node));
} else {
return G__37211__$1;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__37210) : f.call(null,G__37210));
} else {
return null;
}
});
/**
 * Register the life-cycle hooks from the corresponding virtual DOM node to call
 *   in `impl`, if any. `details` is a vector of keywords that provide some detail
 *   about why the hook is invoked.
 */
replicant.core.register_hooks = (function replicant$core$register_hooks(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37950 = arguments.length;
var i__5750__auto___37951 = (0);
while(true){
if((i__5750__auto___37951 < len__5749__auto___37950)){
args__5755__auto__.push((arguments[i__5750__auto___37951]));

var G__37952 = (i__5750__auto___37951 + (1));
i__5750__auto___37951 = G__37952;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (p__37226,node,headers,p__37227){
var map__37228 = p__37226;
var map__37228__$1 = cljs.core.__destructure_map(map__37228);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37228__$1,new cljs.core.Keyword(null,"hooks","hooks",-413590103));
var vec__37229 = p__37227;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37229,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37229,(1),null);
var target = (cljs.core.truth_(headers)?(headers[(4)]):(vdom[(3)]));
var new_hooks = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (life_cycle_key){
var temp__5825__auto__ = (life_cycle_key.cljs$core$IFn$_invoke$arity$1 ? life_cycle_key.cljs$core$IFn$_invoke$arity$1(target) : life_cycle_key.call(null,target));
if(cljs.core.truth_(temp__5825__auto__)){
var hook = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [life_cycle_key,hook], null);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753),new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394)], null));
if(cljs.core.empty_QMARK_(new_hooks)){
return null;
} else {
var headers_sexp = (function (){var G__37243 = headers;
if((G__37243 == null)){
return null;
} else {
return (G__37243[(7)]);
}
})();
var vdom_sexp = (function (){var G__37250 = vdom;
if((G__37250 == null)){
return null;
} else {
return (G__37250[(7)]);
}
})();
return cljs.core._vreset_BANG_(hooks,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(hooks),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37252){
var vec__37253 = p__37252;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37253,(0),null);
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37253,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook,k,node,headers_sexp,vdom_sexp,details], null);
}),new_hooks)));
}
}));

(replicant.core.register_hooks.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.register_hooks.cljs$lang$applyTo = (function (seq37214){
var G__37215 = cljs.core.first(seq37214);
var seq37214__$1 = cljs.core.next(seq37214);
var G__37216 = cljs.core.first(seq37214__$1);
var seq37214__$2 = cljs.core.next(seq37214__$1);
var G__37217 = cljs.core.first(seq37214__$2);
var seq37214__$3 = cljs.core.next(seq37214__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37215,G__37216,G__37217,seq37214__$3);
}));

replicant.core.register_mount = (function replicant$core$register_mount(p__37257,node,mounting_attrs,attrs){
var map__37259 = p__37257;
var map__37259__$1 = cljs.core.__destructure_map(map__37259);
var mounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37259__$1,new cljs.core.Keyword(null,"mounts","mounts",-791474425));
return cljs.core._vreset_BANG_(mounts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(mounts),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,mounting_attrs,attrs], null)));
});
replicant.core.update_styles = (function replicant$core$update_styles(renderer,el,new_styles,old_styles){
var new_ks = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37260_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__37260_SHARP_) == null);
}),cljs.core.keys(new_styles)));
var old_ks = cljs.core.set(cljs.core.keys(old_styles));
cljs.core.run_BANG_((function (p1__37261_SHARP_){
return replicant.protocols.remove_style(renderer,el,p1__37261_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new_ks,old_ks));

return cljs.core.run_BANG_((function (p1__37262_SHARP_){
var new_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__37262_SHARP_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_style,cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_styles,p1__37262_SHARP_))){
if((!((p1__37262_SHARP_ instanceof cljs.core.Keyword)))){
var fn__36367__auto___37953 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___37954 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___37955 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37265 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37262_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),["Replicant expects your style keys to be keywords. While anything that supports `name` (strings, symbols) will ","technically work, mixing types will hinder Replicant from recognizing changes properly. Rendering once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37262_SHARP_)," and once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37262_SHARP_)))," may produce undesired results. Your safest option is to always use keywords."].join('')], null);
var G__37265__$1 = (cljs.core.truth_(fn__36367__auto___37953)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37265,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___37953):G__37265);
var G__37265__$2 = (cljs.core.truth_(alias__36368__auto___37954)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37265__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___37954):G__37265__$1);
if(cljs.core.truth_(fd__36369__auto___37955)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37265__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___37955);
} else {
return G__37265__$2;
}
})());
} else {
}

if((!((function (){var name__36927__auto__ = cljs.core.name(p1__37262_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__36927__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__36927__auto__,clojure.string.lower_case(name__36927__auto__))));
})()))){
var fn__36367__auto___37956 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___37957 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___37958 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37274 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__37262_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37262_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__37274__$1 = (cljs.core.truth_(fn__36367__auto___37956)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37274,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___37956):G__37274);
var G__37274__$2 = (cljs.core.truth_(alias__36368__auto___37957)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37274__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___37957):G__37274__$1);
if(cljs.core.truth_(fd__36369__auto___37958)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37274__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___37958);
} else {
return G__37274__$2;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__37262_SHARP_,replicant.core.get_style_val(p1__37262_SHARP_,new_style));
} else {
return null;
}
}),new_ks);
});
replicant.core.update_classes = (function replicant$core$update_classes(renderer,el,new_classes,old_classes){
cljs.core.run_BANG_((function (p1__37276_SHARP_){
return replicant.protocols.remove_class(renderer,el,p1__37276_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new_classes),old_classes));

return cljs.core.run_BANG_((function (p1__37277_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__37277_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(old_classes),new_classes));
});
replicant.core.get_event_handler_options = (function replicant$core$get_event_handler_options(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,k){
var G__37279 = res;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("replicant.event",cljs.core.namespace(k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37279,cljs.core.name(k),(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(m) : k.call(null,m)));
} else {
return G__37279;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006))));
});
replicant.core.add_event_listeners = (function replicant$core$add_event_listeners(renderer,el,val){
return cljs.core.run_BANG_((function (p__37288){
var vec__37289 = p__37288;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37289,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37289,(1),null);
if((!((function (){var event__36889__auto__ = cljs.core.name(event);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("DOMContentLoaded",event__36889__auto__)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event__36889__auto__,clojure.string.lower_case(event__36889__auto__))));
})()))){
var fn__36367__auto___37959 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___37960 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___37961 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37293 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.name(event)))),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Most event names should be in all lower-case. Replicant passes your event names directly to addEventListener, and mis-cased event names will fail silently."], null);
var G__37293__$1 = (cljs.core.truth_(fn__36367__auto___37959)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37293,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___37959):G__37293);
var G__37293__$2 = (cljs.core.truth_(alias__36368__auto___37960)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37293__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___37960):G__37293__$1);
if(cljs.core.truth_(fd__36369__auto___37961)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37293__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___37961);
} else {
return G__37293__$2;
}
})());
} else {
}

var temp__5823__auto__ = new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006).cljs$core$IFn$_invoke$arity$1(handler);
if(cljs.core.truth_(temp__5823__auto__)){
var eh = temp__5823__auto__;
var temp__5825__auto__ = replicant.core.get_event_handler(eh,event);
if(cljs.core.truth_(temp__5825__auto__)){
var eh__$1 = temp__5825__auto__;
return replicant.protocols.set_event_handler(renderer,el,event,eh__$1,replicant.core.get_event_handler_options(handler));
} else {
return null;
}
} else {
var temp__5825__auto__ = replicant.core.get_event_handler(handler,event);
if(cljs.core.truth_(temp__5825__auto__)){
var handler__$1 = temp__5825__auto__;
return replicant.protocols.set_event_handler(renderer,el,event,handler__$1,null);
} else {
return null;
}
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),val));
});
replicant.core.update_event_listeners = (function replicant$core$update_event_listeners(renderer,el,new_handlers,old_handlers){
return cljs.core.run_BANG_((function (event){
var new_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_handlers,event);
var old_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_handlers,event);
var old_opts = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_handler,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006)))?cljs.core.not_empty(replicant.core.get_event_handler_options(old_handler)):null);
var new_opts = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_handler,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006)))?cljs.core.not_empty(replicant.core.get_event_handler_options(new_handler)):null);
if(cljs.core.truth_((function (){var and__5023__auto__ = old_handler;
if(cljs.core.truth_(and__5023__auto__)){
return (((new_handler == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_opts,new_opts)));
} else {
return and__5023__auto__;
}
})())){
replicant.protocols.remove_event_handler(renderer,el,event,old_opts);
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = new_handler;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_handler,old_handler);
} else {
return and__5023__auto__;
}
})())){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_handler,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006));
if(cljs.core.truth_(temp__5823__auto__)){
var handler = temp__5823__auto__;
return replicant.protocols.set_event_handler(renderer,el,event,replicant.core.get_event_handler(handler,event),new_opts);
} else {
return replicant.protocols.set_event_handler(renderer,el,event,replicant.core.get_event_handler(new_handler,event),null);
}
} else {
return null;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_handlers)),cljs.core.keys(old_handlers)));
});
replicant.core.xlinkns = "http://www.w3.org/1999/xlink";
replicant.core.xmlns = "http://www.w3.org/XML/1998/namespace";
replicant.core.stringify = (function replicant$core$stringify(x){
return [(function (){var temp__5825__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return [ns,"/"].join('');
} else {
return null;
}
})(),cljs.core.name(x)].join('');
});
replicant.core.set_attr_val = (function replicant$core$set_attr_val(renderer,el,attr,v){
var an = cljs.core.name(attr);
if((!((!(clojure.string.starts_with_QMARK_(cljs.core.name(attr),"on")))))){
var fn__36367__auto___37962 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___37963 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___37964 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37307 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Set event listeners in the :on map",new cljs.core.Keyword(null,"message","message",-406056002),["Event handler attributes are not supported. Instead of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," set :on {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash(cljs.core.name(attr).substring((2)))))," ,,,}"].join('')], null);
var G__37307__$1 = (cljs.core.truth_(fn__36367__auto___37962)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37307,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___37962):G__37307);
var G__37307__$2 = (cljs.core.truth_(alias__36368__auto___37963)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37307__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___37963):G__37307__$1);
if(cljs.core.truth_(fd__36369__auto___37964)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37307__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___37964);
} else {
return G__37307__$2;
}
})());
} else {
}

if(cljs.core.not(cljs.core.re_find(/^[a-zA-Z\-:_][a-zA-Z0-9\-:\._]*$/,cljs.core.name(attr)))){
var fn__36367__auto___37965 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___37966 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___37967 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37319 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Invalid attribute name ",cljs.core.name(attr)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var attr__36939__auto__ = cljs.core.name(attr);
return ["Tried to set attribute ",attr__36939__auto__," to value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),". This will fail","horribly in the browser because ",(cljs.core.truth_(cljs.core.re_find(/^[0-9]/,attr__36939__auto__))?" it starts with a number":(cljs.core.truth_(cljs.core.re_find(/^\./,attr__36939__auto__))?" it starts with a dot":[" it contains the character ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/[^a-zA-Z0-9\-:\._]/,attr__36939__auto__))].join('')
)),", which isn't allowed as per the HTML spec."].join('');
})()], null);
var G__37319__$1 = (cljs.core.truth_(fn__36367__auto___37965)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37319,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___37965):G__37319);
var G__37319__$2 = (cljs.core.truth_(alias__36368__auto___37966)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37319__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___37966):G__37319__$1);
if(cljs.core.truth_(fd__36369__auto___37967)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37319__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___37967);
} else {
return G__37319__$2;
}
})());
} else {
}

return replicant.protocols.set_attribute(renderer,el,an,(function (){var G__37331 = v;
if((((v instanceof cljs.core.Keyword)) || ((v instanceof cljs.core.Symbol)))){
return replicant.core.stringify(G__37331);
} else {
return G__37331;
}
})(),(function (){var G__37334 = cljs.core.PersistentArrayMap.EMPTY;
var G__37334__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xml:")))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37334,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xmlns):G__37334);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xlink:"))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37334__$1,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xlinkns);
} else {
return G__37334__$1;
}
})());
});
replicant.core.update_attr = (function replicant$core$update_attr(renderer,el,attr,new$,old){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__37339 = attr;
var G__37339__$1 = (((G__37339 instanceof cljs.core.Keyword))?G__37339.fqn:null);
switch (G__37339__$1) {
case "style":
return replicant.core.update_styles(renderer,el,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(old));

break;
case "classes":
return replicant.core.update_classes(renderer,el,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(old));

break;
case "on":
return replicant.core.update_event_listeners(renderer,el,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(old));

break;
default:
var temp__5823__auto__ = (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(new$) : attr.call(null,new$));
if(cljs.core.truth_(temp__5823__auto__)){
var v = temp__5823__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,(attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(old) : attr.call(null,old)))){
return replicant.core.set_attr_val(renderer,el,attr,v);
} else {
return null;
}
} else {
return replicant.protocols.remove_attribute(renderer,el,cljs.core.name(attr));
}

}
}
});
replicant.core.update_attributes = (function replicant$core$update_attributes(renderer,el,new_attrs,old_attrs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37343_SHARP_,p2__37342_SHARP_){
return replicant.core.update_attr(renderer,el,p2__37342_SHARP_,new_attrs,old_attrs);
}),null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_attrs)),cljs.core.keys(old_attrs)));
});
replicant.core.reconcile_attributes = (function replicant$core$reconcile_attributes(renderer,el,new_attrs,old_attrs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_attrs,old_attrs)){
return false;
} else {
replicant.core.update_attributes(renderer,el,new_attrs,old_attrs);

return true;
}
});
replicant.core.set_styles = (function replicant$core$set_styles(renderer,el,new_styles){
return cljs.core.run_BANG_((function (p1__37346_SHARP_){
if((!((p1__37346_SHARP_ instanceof cljs.core.Keyword)))){
var fn__36367__auto___37969 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___37970 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___37971 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37348 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37346_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),["Replicant expects your style keys to be keywords. While anything that supports `name` (strings, symbols) will ","technically work, mixing types will hinder Replicant from recognizing changes properly. Rendering once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37346_SHARP_)," and once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37346_SHARP_)))," may produce undesired results. Your safest option is to always use keywords."].join('')], null);
var G__37348__$1 = (cljs.core.truth_(fn__36367__auto___37969)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37348,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___37969):G__37348);
var G__37348__$2 = (cljs.core.truth_(alias__36368__auto___37970)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37348__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___37970):G__37348__$1);
if(cljs.core.truth_(fd__36369__auto___37971)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37348__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___37971);
} else {
return G__37348__$2;
}
})());
} else {
}

if((!((function (){var name__36927__auto__ = cljs.core.name(p1__37346_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__36927__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__36927__auto__,clojure.string.lower_case(name__36927__auto__))));
})()))){
var fn__36367__auto___37972 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___37973 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___37974 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37357 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__37346_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37346_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__37357__$1 = (cljs.core.truth_(fn__36367__auto___37972)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37357,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___37972):G__37357);
var G__37357__$2 = (cljs.core.truth_(alias__36368__auto___37973)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37357__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___37973):G__37357__$1);
if(cljs.core.truth_(fd__36369__auto___37974)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37357__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___37974);
} else {
return G__37357__$2;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__37346_SHARP_,replicant.core.get_style_val(p1__37346_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__37346_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_styles,cljs.core.keys(new_styles)));
});
replicant.core.set_classes = (function replicant$core$set_classes(renderer,el,new_classes){
return cljs.core.run_BANG_((function (p1__37359_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__37359_SHARP_);
}),new_classes);
});
replicant.core.set_attr = (function replicant$core$set_attr(renderer,el,attr,new$){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__37361 = attr;
var G__37361__$1 = (((G__37361 instanceof cljs.core.Keyword))?G__37361.fqn:null);
switch (G__37361__$1) {
case "style":
return replicant.core.set_styles(renderer,el,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new$));

break;
case "classes":
return replicant.core.set_classes(renderer,el,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(new$));

break;
case "on":
return replicant.core.add_event_listeners(renderer,el,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(new$));

break;
default:
return replicant.core.set_attr_val(renderer,el,attr,(attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(new$) : attr.call(null,new$)));

}
}
});
replicant.core.set_attributes = (function replicant$core$set_attributes(renderer,el,new_attrs){
return cljs.core.run_BANG_((function (p1__37363_SHARP_){
return replicant.core.set_attr(renderer,el,p1__37363_SHARP_,new_attrs);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_attrs,cljs.core.keys(new_attrs)));
});
replicant.core.render_default_alias = (function replicant$core$render_default_alias(tag_name,_attrs,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-replicant-error","data-replicant-error",1583668098),["Undefined alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)].join('')], null),(function (){var iter__5503__auto__ = (function replicant$core$render_default_alias_$_iter__37371(s__37372){
return (new cljs.core.LazySeq(null,(function (){
var s__37372__$1 = s__37372;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37372__$1);
if(temp__5825__auto__){
var s__37372__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37372__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37372__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37374 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37373 = (0);
while(true){
if((i__37373 < size__5502__auto__)){
var child = cljs.core._nth(c__5501__auto__,i__37373);
cljs.core.chunk_append(b__37374,(function (){var G__37377 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_(child)))))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__37377], 0));
} else {
return G__37377;
}
})());

var G__37976 = (i__37373 + (1));
i__37373 = G__37976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37374),replicant$core$render_default_alias_$_iter__37371(cljs.core.chunk_rest(s__37372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37374),null);
}
} else {
var child = cljs.core.first(s__37372__$2);
return cljs.core.cons((function (){var G__37379 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_(child)))))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__37379], 0));
} else {
return G__37379;
}
})(),replicant$core$render_default_alias_$_iter__37371(cljs.core.rest(s__37372__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(children);
})()], null);
});
replicant.core.add_classes = (function replicant$core$add_classes(class_attr,classes){
if(cljs.core.coll_QMARK_(class_attr)){
return cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(class_attr,classes));
} else {
if((class_attr == null)){
return cljs.core.set(classes);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(classes),class_attr);

}
}
});
replicant.core.get_alias_headers = (function replicant$core$get_alias_headers(p__37399,headers){
var map__37400 = p__37399;
var map__37400__$1 = cljs.core.__destructure_map(map__37400);
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37400__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37400__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var on_alias_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37400__$1,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043));
var tag_name = (headers[(0)]);
if((tag_name instanceof cljs.core.Keyword)){
var f = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(aliases,tag_name);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(replicant.core.render_default_alias,tag_name);
}
})();
var id = (headers[(1)]);
var classes = (headers[(2)]);
var attrs = (headers[(4)]);
var attrs__$1 = (function (){var G__37402 = attrs;
var G__37402__$1 = (cljs.core.truth_(id)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__37402,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__37391_SHARP_){
var or__5025__auto__ = p1__37391_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return id;
}
})):G__37402);
var G__37402__$2 = (cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.seq(classes);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs);
}
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__37402__$1,new cljs.core.Keyword(null,"class","class",-2030961996),replicant.core.add_classes,classes):G__37402__$1);
if(cljs.core.truth_(alias_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37402__$2,new cljs.core.Keyword("replicant","alias-data","replicant/alias-data",1929752572),alias_data);
} else {
return G__37402__$2;
}
})();
var children = cljs.core.seq(replicant.core.flatten_seqs((headers[(5)])));
if((!(cljs.core.fn_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(aliases,tag_name))))){
var fn__36367__auto___37977 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___37978 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___37979 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37405 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)," isn't defined"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),["There's no available function to render this alias. Replicant will ","render an empty element with data attributes in its place. Available ","aliases are:\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.keys(aliases))].join('')], null);
var G__37405__$1 = (cljs.core.truth_(fn__36367__auto___37977)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37405,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___37977):G__37405);
var G__37405__$2 = (cljs.core.truth_(alias__36368__auto___37978)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37405__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___37978):G__37405__$1);
if(cljs.core.truth_(fd__36369__auto___37979)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37405__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___37979);
} else {
return G__37405__$2;
}
})());
} else {
}

var alias_hiccup = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(attrs__$1,children) : f.call(null,attrs__$1,children));
if((!(((typeof alias_hiccup === 'string') || (replicant.hiccup.hiccup_QMARK_(alias_hiccup)))))){
var fn__36367__auto___37980 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___37981 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___37982 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37414 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Aliases must return valid hiccup",new cljs.core.Keyword(null,"message","message",-406056002),["Aliases must always represent a node in the document, and ","cannot return ",(((alias_hiccup == null))?"nil":((cljs.core.map_QMARK_(alias_hiccup))?"a map":((cljs.core.coll_QMARK_(alias_hiccup))?"multiple nodes":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alias_hiccup], 0))
))),". Please check the implementation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name),"."].join('')], null);
var G__37414__$1 = (cljs.core.truth_(fn__36367__auto___37980)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37414,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___37980):G__37414);
var G__37414__$2 = (cljs.core.truth_(alias__36368__auto___37981)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37414__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___37981):G__37414__$1);
if(cljs.core.truth_(fd__36369__auto___37982)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37414__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___37982);
} else {
return G__37414__$2;
}
})());
} else {
}

var hh__36016__auto__ = replicant.core.get_hiccup_headers(null,alias_hiccup);
var alias__36017__auto__ = headers;
if(cljs.core.truth_(hh__36016__auto__)){
var G__37416 = hh__36016__auto__;
(G__37416[(3)] = (function (){var or__5025__auto__ = (alias__36017__auto__[(3)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (hh__36016__auto__[(3)]);
}
})());

(G__37416[(7)] = (hh__36016__auto__[(7)]));

(G__37416[(9)] = (alias__36017__auto__[(7)]));

return G__37416;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Create DOM node according to virtual DOM in `headers`. Register relevant
 *   life-cycle hooks from the new node or its descendants in `impl`. Returns a
 *   tuple of the newly created node and the fully realized vdom.
 */
replicant.core.create_node = (function replicant$core$create_node(p__37419,headers){
var map__37420 = p__37419;
var map__37420__$1 = cljs.core.__destructure_map(map__37420);
var impl = map__37420__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37420__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5825__auto___37983 = (function (){var or__5025__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5825__auto___37983)){
var ctx__36350__auto___37984 = temp__5825__auto___37983;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__36350__auto___37984);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

var or__5025__auto__ = (function (){var temp__5825__auto__ = (headers[(8)]);
if(cljs.core.truth_(temp__5825__auto__)){
var text = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.protocols.create_text_node(renderer,text),(function (){var text__36727__auto__ = text;
return (new Array(null,null,null,null,null,null,false,text__36727__auto__,text__36727__auto__,null,null));
})()], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var temp__5825__auto__ = replicant.core.get_alias_headers(impl,headers);
if(cljs.core.truth_(temp__5825__auto__)){
var alias_headers = temp__5825__auto__;
var vec__37429 = (replicant.core.create_node.cljs$core$IFn$_invoke$arity$2 ? replicant.core.create_node.cljs$core$IFn$_invoke$arity$2(impl,alias_headers) : replicant.core.create_node.call(null,impl,alias_headers));
var child_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37429,(0),null);
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37429,(1),null);
var k = (alias_headers[(3)]);
var vdom__$1 = (function (){var headers__36734__auto__ = headers;
return (new Array((headers__36734__auto__[(0)]),(headers__36734__auto__[(3)]),(headers__36734__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom], null),(function (){var G__37433 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__37433,k);
} else {
return G__37433;
}
})(),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__36734__auto__[(4)]))),(headers__36734__auto__[(7)]),null,null,(1)));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_node,vdom__$1], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var tag_name = (headers[(0)]);
var ns = (function (){var or__5025__auto____$2 = (headers[(6)]);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("svg",tag_name)){
return "http://www.w3.org/2000/svg";
} else {
return null;
}
}
})();
var node = replicant.protocols.create_element(renderer,tag_name,(cljs.core.truth_(ns)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns], null):null));
var vec__37435 = replicant.core.get_mounting_attrs(headers);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37435,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37435,(1),null);
var _ = replicant.core.set_attributes(renderer,node,(function (){var or__5025__auto____$2 = mounting_attrs;
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return attrs;
}
})());
var vec__37438 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__37442,child_headers){
var vec__37443 = p__37442;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37443,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37443,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37443,(2),null);
if(cljs.core.truth_(child_headers)){
var vec__37446 = (replicant.core.create_node.cljs$core$IFn$_invoke$arity$2 ? replicant.core.create_node.cljs$core$IFn$_invoke$arity$2(impl,child_headers) : replicant.core.create_node.call(null,impl,child_headers));
var child_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37446,(0),null);
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37446,(1),null);
var k = (vdom[(1)]);
replicant.protocols.append_child(renderer,node,child_node);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,vdom),(function (){var G__37449 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__37449,k);
} else {
return G__37449;
}
})(),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks,n], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),(0)], null),replicant.core.get_children(headers,ns));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37438,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37438,(1),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37438,(2),null);
replicant.core.register_hooks(impl,node,headers);

if(cljs.core.truth_(mounting_attrs)){
replicant.core.register_mount(impl,node,mounting_attrs,attrs);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,(function (){var headers__36734__auto__ = headers;
return (new Array((headers__36734__auto__[(0)]),(headers__36734__auto__[(3)]),(headers__36734__auto__[(2)]),attrs,cljs.core.persistent_BANG_(children),cljs.core.persistent_BANG_(ks),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__36734__auto__[(4)]))),(headers__36734__auto__[(7)]),null,null,n_children));
})()], null);
}
}
});
/**
 * Two elements are considered similar enough for reuse if they are both hiccup
 *   elements with the same tag name and the same key (or both have no key) - or
 *   they are both strings.
 * 
 *   Similarity in this case indicates that the node can be used for reconciliation
 *   instead of creating a new node from scratch.
 */
replicant.core.reusable_QMARK_ = (function replicant$core$reusable_QMARK_(headers,vdom){
var or__5025__auto__ = (function (){var and__5023__auto__ = (headers[(8)]);
if(cljs.core.truth_(and__5023__auto__)){
return (vdom[(8)]);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(3)]),(vdom[(1)]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(0)]),(vdom[(0)]))));
}
});
replicant.core.same_QMARK_ = (function replicant$core$same_QMARK_(headers,vdom){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(3)]),(vdom[(1)]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(0)]),(vdom[(0)]))));
});
replicant.core.index_of = (function replicant$core$index_of(f,xs){
var coll_n = (0);
var dom_n = (0);
var xs__$1 = cljs.core.seq(xs);
while(true){
if((xs__$1 == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null);
} else {
if((cljs.core.first(xs__$1) == null)){
var G__37985 = (coll_n + (1));
var G__37986 = dom_n;
var G__37987 = cljs.core.next(xs__$1);
coll_n = G__37985;
dom_n = G__37986;
xs__$1 = G__37987;
continue;
} else {
if(cljs.core.truth_((function (){var G__37462 = cljs.core.first(xs__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__37462) : f.call(null,G__37462));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_n,dom_n], null);
} else {
var G__37988 = (coll_n + (1));
var G__37989 = (dom_n + (1));
var G__37990 = cljs.core.next(xs__$1);
coll_n = G__37988;
dom_n = G__37989;
xs__$1 = G__37990;
continue;

}
}
}
break;
}
});
replicant.core.get_ns = (function replicant$core$get_ns(headers){
var or__5025__auto__ = (headers[(6)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("svg",(headers[(0)]))){
return "http://www.w3.org/2000/svg";
} else {
return null;
}
}
});
replicant.core.insert_children = (function replicant$core$insert_children(p__37481,el,children,vdom){
var map__37482 = p__37481;
var map__37482__$1 = cljs.core.__destructure_map(map__37482);
var impl = map__37482__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37482__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__37483,child){
var vec__37484 = p__37483;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37484,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37484,(1),null);
if(cljs.core.truth_(child)){
var vec__37488 = replicant.core.create_node(impl,child);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37488,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37488,(1),null);
replicant.protocols.append_child(renderer,el,node);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,vdom__$1),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,null),n], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom,(0)], null),children);
});
replicant.core.remove_child = (function replicant$core$remove_child(p__37492,unmounts,el,n,vdom){
var map__37493 = p__37492;
var map__37493__$1 = cljs.core.__destructure_map(map__37493);
var impl = map__37493__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37493__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var temp__5823__auto__ = (vdom[(9)]);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
if(cljs.core.truth_((unmounts.cljs$core$IFn$_invoke$arity$1 ? unmounts.cljs$core$IFn$_invoke$arity$1(id) : unmounts.call(null,id)))){
return vdom;
} else {
return null;
}
} else {
var res = (function (){var temp__5823__auto____$1 = replicant.core.get_unmounting_attrs(vdom);
if(cljs.core.truth_(temp__5823__auto____$1)){
var attrs = temp__5823__auto____$1;
var vdom__$1 = (function (){var vdom__36721__auto__ = vdom;
(vdom__36721__auto__[(9)] = replicant.vdom.id.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(replicant.vdom.id.cljs$core$IDeref$_deref$arity$1(null) + (1))));

return vdom__36721__auto__;
})();
var child = replicant.protocols.get_child(renderer,el,n);
replicant.core.update_attributes(renderer,child,attrs,(vdom__$1[(3)]));

cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.on_transition_end(renderer,child,(function (){
cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.remove_child(renderer,el,child);

var temp__5825__auto___37991 = new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((vdom__$1[(3)]));
if(cljs.core.truth_(temp__5825__auto___37991)){
var hook_37992 = temp__5825__auto___37991;
replicant.core.call_hook(renderer,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook_37992,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),child,null,vdom__$1], null));
} else {
}

return renderer;
}));

return vdom__$1;
} else {
var child = replicant.protocols.get_child(renderer,el,n);
replicant.protocols.remove_child(renderer,el,child);

replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom], 0));

return null;
}
})();
return res;
}
});
replicant.core.move_node_details = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","move-node","replicant/move-node",-1189251602)], null);
replicant.core.unchanged_QMARK_ = (function replicant$core$unchanged_QMARK_(headers,vdom){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__37504 = headers;
if((G__37504 == null)){
return null;
} else {
return (G__37504[(7)]);
}
})(),(function (){var G__37505 = vdom;
if((G__37505 == null)){
return null;
} else {
return (G__37505[(7)]);
}
})());
});
replicant.core.move_nodes = (function replicant$core$move_nodes(p__37510,el,headers,new_children,vdom,old_children,n,n_children){
var map__37511 = p__37510;
var map__37511__$1 = cljs.core.__destructure_map(map__37511);
var impl = map__37511__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37511__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var vec__37512 = (cljs.core.truth_((headers[(3)]))?replicant.core.index_of((function (p1__37506_SHARP_){
return replicant.core.same_QMARK_(headers,p1__37506_SHARP_);
}),old_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var o_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37512,(0),null);
var o_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37512,(1),null);
var vec__37515 = (cljs.core.truth_((vdom[(1)]))?replicant.core.index_of((function (p1__37508_SHARP_){
return replicant.core.same_QMARK_(p1__37508_SHARP_,vdom);
}),new_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var n_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37515,(0),null);
var n_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37515,(1),null);
if((o_idx < n_idx)){
var idx = ((n + n_dom_idx) + (1));
var child = replicant.protocols.get_child(renderer,el,n);
if((idx < n_children)){
replicant.protocols.insert_before(renderer,el,child,replicant.protocols.get_child(renderer,el,idx));
} else {
replicant.protocols.append_child(renderer,el,child);
}

replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_children,n_idx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom,replicant.core.move_node_details], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_idx,cljs.core.next(old_children)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(old_children)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2((n_idx + (1)),old_children)], 0)),n,(idx - (1))], null);
} else {
var idx = (n + o_dom_idx);
var child = replicant.protocols.get_child(renderer,el,idx);
var corresponding_old_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(old_children,o_idx);
replicant.protocols.insert_before(renderer,el,child,replicant.protocols.get_child(renderer,el,n));

(replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,headers,corresponding_old_vdom,n) : replicant.core.reconcile_STAR_.call(null,impl,el,headers,corresponding_old_vdom,n));

if(replicant.core.unchanged_QMARK_(headers,corresponding_old_vdom)){
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,headers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([corresponding_old_vdom,replicant.core.move_node_details], 0));
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(new_children),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(o_idx,old_children),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((o_idx + (1)),old_children)),(n + (1)),((n + o_idx) + (1)),corresponding_old_vdom], null);
}
});
replicant.core.insert_node = (function replicant$core$insert_node(r,el,child,n,n_children){
if((n_children <= n)){
return replicant.protocols.append_child(r,el,child);
} else {
return replicant.protocols.insert_before(r,el,child,replicant.protocols.get_child(r,el,n));
}
});
replicant.core.update_children = (function replicant$core$update_children(impl,el,new_children,new_ks,old_children,old_ks,n_children){
var r = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl);
var unmounts = cljs.core.deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl));
var new_c = cljs.core.seq(new_children);
var old_c = cljs.core.seq(old_children);
var n = (0);
var move_n = (0);
var n_children__$1 = (function (){var or__5025__auto__ = n_children;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var changed_QMARK_ = false;
var vdom = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var new_headers = cljs.core.first(new_c);
var old_vdom = cljs.core.first(old_c);
var new_empty_QMARK_ = (new_c == null);
var old_empty_QMARK_ = (old_c == null);
var new_nil_QMARK_ = (new_headers == null);
var old_nil_QMARK_ = (old_vdom == null);
if(((new_empty_QMARK_) && (old_empty_QMARK_))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [changed_QMARK_,cljs.core.persistent_BANG_(vdom),new_ks,n_children__$1], null);
} else {
if(new_empty_QMARK_){
var children = cljs.core.seq(old_c);
var vdom__$1 = vdom;
var n__$1 = n;
var n_children__$2 = n_children__$1;
while(true){
if((children == null)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_(vdom__$1),new_ks,n_children__$2], null);
} else {
if((cljs.core.first(children) == null)){
var G__37993 = cljs.core.next(children);
var G__37994 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,null);
var G__37995 = n__$1;
var G__37996 = n_children__$2;
children = G__37993;
vdom__$1 = G__37994;
n__$1 = G__37995;
n_children__$2 = G__37996;
continue;
} else {
var temp__5823__auto__ = replicant.core.remove_child(impl,unmounts,el,n__$1,cljs.core.first(children));
if(cljs.core.truth_(temp__5823__auto__)){
var pending_vdom = temp__5823__auto__;
var G__37997 = cljs.core.next(children);
var G__37998 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,pending_vdom);
var G__37999 = (n__$1 + (1));
var G__38000 = n_children__$2;
children = G__37997;
vdom__$1 = G__37998;
n__$1 = G__37999;
n_children__$2 = G__38000;
continue;
} else {
var G__38001 = cljs.core.next(children);
var G__38002 = vdom__$1;
var G__38003 = n__$1;
var G__38004 = (n_children__$2 - (1));
children = G__38001;
vdom__$1 = G__38002;
n__$1 = G__38003;
n_children__$2 = G__38004;
continue;
}

}
}
break;
}
} else {
if(old_empty_QMARK_){
var vec__37566 = replicant.core.insert_children(impl,el,new_c,vdom);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37566,(0),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37566,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_(vdom__$1),new_ks,(n_children__$1 + n__$1)], null);
} else {
if(((new_nil_QMARK_) && (old_nil_QMARK_))){
var G__38005 = cljs.core.next(new_c);
var G__38006 = cljs.core.next(old_c);
var G__38007 = n;
var G__38008 = move_n;
var G__38009 = n_children__$1;
var G__38010 = changed_QMARK_;
var G__38011 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__38005;
old_c = G__38006;
n = G__38007;
move_n = G__38008;
n_children__$1 = G__38009;
changed_QMARK_ = G__38010;
vdom = G__38011;
continue;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = old_vdom;
if(cljs.core.truth_(and__5023__auto__)){
return (old_vdom[(9)]);
} else {
return and__5023__auto__;
}
})())){
var vec__37571 = (cljs.core.truth_((function (){var and__5023__auto__ = new_headers;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not((function (){var G__37576 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__37576) : old_ks.call(null,G__37576));
})());
} else {
return and__5023__auto__;
}
})())?(function (){var res = replicant.core.create_node(impl,new_headers);
replicant.core.insert_node(r,el,cljs.core.first(res),n,n_children__$1);

return res;
})():null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37571,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37571,(1),null);
if(cljs.core.truth_((function (){var G__37578 = (old_vdom[(9)]);
return (unmounts.cljs$core$IFn$_invoke$arity$1 ? unmounts.cljs$core$IFn$_invoke$arity$1(G__37578) : unmounts.call(null,G__37578));
})())){
if(new_nil_QMARK_){
var G__38012 = cljs.core.next(new_c);
var G__38013 = cljs.core.next(old_c);
var G__38014 = (n + (1));
var G__38015 = move_n;
var G__38016 = n_children__$1;
var G__38017 = changed_QMARK_;
var G__38018 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__38012;
old_c = G__38013;
n = G__38014;
move_n = G__38015;
n_children__$1 = G__38016;
changed_QMARK_ = G__38017;
vdom = G__38018;
continue;
} else {
if(cljs.core.truth_(child)){
var G__38019 = cljs.core.next(new_c);
var G__38020 = cljs.core.next(old_c);
var G__38021 = (n + (2));
var G__38022 = move_n;
var G__38023 = (n_children__$1 + (1));
var G__38024 = true;
var G__38025 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__38019;
old_c = G__38020;
n = G__38021;
move_n = G__38022;
n_children__$1 = G__38023;
changed_QMARK_ = G__38024;
vdom = G__38025;
continue;
} else {
var G__38026 = new_c;
var G__38027 = cljs.core.next(old_c);
var G__38028 = (n + (1));
var G__38029 = move_n;
var G__38030 = n_children__$1;
var G__38031 = changed_QMARK_;
var G__38032 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__38026;
old_c = G__38027;
n = G__38028;
move_n = G__38029;
n_children__$1 = G__38030;
changed_QMARK_ = G__38031;
vdom = G__38032;
continue;

}
}
} else {
if(new_nil_QMARK_){
var G__38033 = cljs.core.next(new_c);
var G__38034 = cljs.core.next(old_c);
var G__38035 = n;
var G__38036 = (move_n - (1));
var G__38037 = (n_children__$1 - (1));
var G__38038 = changed_QMARK_;
var G__38039 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__38033;
old_c = G__38034;
n = G__38035;
move_n = G__38036;
n_children__$1 = G__38037;
changed_QMARK_ = G__38038;
vdom = G__38039;
continue;
} else {
if(cljs.core.truth_(child)){
var G__38040 = cljs.core.next(new_c);
var G__38041 = cljs.core.next(old_c);
var G__38042 = (n + (1));
var G__38043 = move_n;
var G__38044 = n_children__$1;
var G__38045 = true;
var G__38046 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__38040;
old_c = G__38041;
n = G__38042;
move_n = G__38043;
n_children__$1 = G__38044;
changed_QMARK_ = G__38045;
vdom = G__38046;
continue;
} else {
var G__38047 = new_c;
var G__38048 = cljs.core.next(old_c);
var G__38049 = n;
var G__38050 = (move_n - (1));
var G__38051 = (n_children__$1 - (1));
var G__38052 = changed_QMARK_;
var G__38053 = vdom;
new_c = G__38047;
old_c = G__38048;
n = G__38049;
move_n = G__38050;
n_children__$1 = G__38051;
changed_QMARK_ = G__38052;
vdom = G__38053;
continue;

}
}
}
} else {
if(new_nil_QMARK_){
if(cljs.core.contains_QMARK_(new_ks,(old_vdom[(1)]))){
var G__38054 = cljs.core.next(new_c);
var G__38055 = old_c;
var G__38056 = n;
var G__38057 = move_n;
var G__38058 = n_children__$1;
var G__38059 = true;
var G__38060 = vdom;
new_c = G__38054;
old_c = G__38055;
n = G__38056;
move_n = G__38057;
n_children__$1 = G__38058;
changed_QMARK_ = G__38059;
vdom = G__38060;
continue;
} else {
var temp__5823__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5823__auto__)){
var unmounting_node = temp__5823__auto__;
var G__38061 = cljs.core.next(new_c);
var G__38062 = cljs.core.next(old_c);
var G__38063 = (n + (1));
var G__38064 = move_n;
var G__38065 = n_children__$1;
var G__38066 = true;
var G__38067 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__38061;
old_c = G__38062;
n = G__38063;
move_n = G__38064;
n_children__$1 = G__38065;
changed_QMARK_ = G__38066;
vdom = G__38067;
continue;
} else {
var G__38068 = cljs.core.next(new_c);
var G__38069 = cljs.core.next(old_c);
var G__38070 = n;
var G__38071 = move_n;
var G__38072 = (n_children__$1 - (1));
var G__38073 = true;
var G__38074 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__38068;
old_c = G__38069;
n = G__38070;
move_n = G__38071;
n_children__$1 = G__38072;
changed_QMARK_ = G__38073;
vdom = G__38074;
continue;
}
}
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = old_vdom;
if(cljs.core.truth_(and__5023__auto__)){
return replicant.core.reusable_QMARK_(new_headers,old_vdom);
} else {
return and__5023__auto__;
}
})())){
var new_vdom = (replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,new_headers,old_vdom,n) : replicant.core.reconcile_STAR_.call(null,impl,el,new_headers,old_vdom,n));
var node_unchanged_QMARK_ = replicant.core.unchanged_QMARK_(new_headers,old_vdom);
if(((node_unchanged_QMARK_) && ((n < move_n)))){
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,replicant.protocols.get_child(r,el,n),new_headers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_vdom,replicant.core.move_node_details], 0));
} else {
}

var G__38075 = cljs.core.next(new_c);
var G__38076 = cljs.core.next(old_c);
var G__38077 = (n + (1));
var G__38078 = move_n;
var G__38079 = n_children__$1;
var G__38080 = (function (){var or__5025__auto__ = changed_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (!(node_unchanged_QMARK_));
}
})();
var G__38081 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,new_vdom);
new_c = G__38075;
old_c = G__38076;
n = G__38077;
move_n = G__38078;
n_children__$1 = G__38079;
changed_QMARK_ = G__38080;
vdom = G__38081;
continue;
} else {
if(cljs.core.not((function (){var G__37584 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__37584) : old_ks.call(null,G__37584));
})())){
var vec__37585 = replicant.core.create_node(impl,new_headers);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37585,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37585,(1),null);
replicant.core.insert_node(r,el,child,n,n_children__$1);

var G__38082 = cljs.core.next(new_c);
var G__38083 = (function (){var G__37588 = old_c;
if((old_vdom == null)){
return cljs.core.next(G__37588);
} else {
return G__37588;
}
})();
var G__38084 = (n + (1));
var G__38085 = move_n;
var G__38086 = (n_children__$1 + (1));
var G__38087 = true;
var G__38088 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__38082;
old_c = G__38083;
n = G__38084;
move_n = G__38085;
n_children__$1 = G__38086;
changed_QMARK_ = G__38087;
vdom = G__38088;
continue;
} else {
if(((old_nil_QMARK_) || (cljs.core.not((function (){var G__37589 = (old_vdom[(1)]);
return (new_ks.cljs$core$IFn$_invoke$arity$1 ? new_ks.cljs$core$IFn$_invoke$arity$1(G__37589) : new_ks.call(null,G__37589));
})())))){
var temp__5823__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5823__auto__)){
var unmounting_node = temp__5823__auto__;
var G__38089 = new_c;
var G__38090 = cljs.core.next(old_c);
var G__38091 = (n + (1));
var G__38092 = move_n;
var G__38093 = n_children__$1;
var G__38094 = true;
var G__38095 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__38089;
old_c = G__38090;
n = G__38091;
move_n = G__38092;
n_children__$1 = G__38093;
changed_QMARK_ = G__38094;
vdom = G__38095;
continue;
} else {
var G__38096 = new_c;
var G__38097 = cljs.core.next(old_c);
var G__38098 = n;
var G__38099 = move_n;
var G__38100 = (n_children__$1 - (1));
var G__38101 = true;
var G__38102 = vdom;
new_c = G__38096;
old_c = G__38097;
n = G__38098;
move_n = G__38099;
n_children__$1 = G__38100;
changed_QMARK_ = G__38101;
vdom = G__38102;
continue;
}
} else {
var vec__37592 = replicant.core.move_nodes(impl,el,new_headers,new_c,old_vdom,old_c,n,n_children__$1);
var nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37592,(0),null);
var oc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37592,(1),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37592,(2),null);
var move_n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37592,(3),null);
var vdom_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37592,(4),null);
var G__38103 = nc;
var G__38104 = oc;
var G__38105 = n__$1;
var G__38106 = move_n__$1;
var G__38107 = n_children__$1;
var G__38108 = true;
var G__38109 = (function (){var G__37595 = vdom;
if(cljs.core.truth_(vdom_node)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__37595,vdom_node);
} else {
return G__37595;
}
})();
new_c = G__38103;
old_c = G__38104;
n = G__38105;
move_n = G__38106;
n_children__$1 = G__38107;
changed_QMARK_ = G__38108;
vdom = G__38109;
continue;

}
}
}
}
}
}
}
}
}
break;
}
});
replicant.core.reconcile_STAR_ = (function replicant$core$reconcile_STAR_(p__37598,el,headers,vdom,index){
var map__37599 = p__37598;
var map__37599__$1 = cljs.core.__destructure_map(map__37599);
var impl = map__37599__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37599__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5825__auto___38110 = (function (){var or__5025__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5825__auto___38110)){
var ctx__36350__auto___38111 = temp__5825__auto___38110;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__36350__auto___38111);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

if((!((!(replicant.asserts.has_bad_conditional_attrs_QMARK_(vdom,headers)))))){
var fn__36367__auto___38112 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__36368__auto___38113 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__36369__auto___38114 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__37600 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid conditionals around the attribute map",new cljs.core.Keyword(null,"message","message",-406056002),replicant.asserts.convey_bad_conditional_attributes(vdom,headers)], null);
var G__37600__$1 = (cljs.core.truth_(fn__36367__auto___38112)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37600,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__36367__auto___38112):G__37600);
var G__37600__$2 = (cljs.core.truth_(alias__36368__auto___38113)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37600__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__36368__auto___38113):G__37600__$1);
if(cljs.core.truth_(fd__36369__auto___38114)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37600__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__36369__auto___38114);
} else {
return G__37600__$2;
}
})());
} else {
}

var or__5025__auto__ = ((replicant.core.unchanged_QMARK_(headers,vdom))?vdom:null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var temp__5825__auto__ = replicant.core.get_alias_headers(impl,headers);
if(cljs.core.truth_(temp__5825__auto__)){
var alias_headers = temp__5825__auto__;
var vdom_child = cljs.core.first((vdom[(4)]));
var updated_vdom = (cljs.core.truth_(replicant.core.reusable_QMARK_(alias_headers,vdom_child))?(replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,alias_headers,vdom_child,index) : replicant.core.reconcile_STAR_.call(null,impl,el,alias_headers,vdom_child,index)):(function (){var vec__37604 = replicant.core.create_node(impl,alias_headers);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37604,(0),null);
var updated_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37604,(1),null);
replicant.protocols.replace_child(renderer,el,node,replicant.protocols.get_child(renderer,el,index));

return updated_vdom;
})());
var headers__36734__auto__ = headers;
return (new Array((headers__36734__auto__[(0)]),(headers__36734__auto__[(3)]),(headers__36734__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_vdom], null),(function (){var temp__5825__auto____$1 = (updated_vdom[(1)]);
if(cljs.core.truth_(temp__5825__auto____$1)){
var k = temp__5825__auto____$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
} else {
return null;
}
})(),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__36734__auto__[(4)]))),(headers__36734__auto__[(7)]),null,null,(1)));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((headers[(8)]),(vdom[(8)])))?(function (){var vec__37607 = replicant.core.create_node(impl,headers);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37607,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37607,(1),null);
replicant.protocols.replace_child(renderer,el,node,replicant.protocols.get_child(renderer,el,index));

return vdom__$1;
})():null);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var child = replicant.protocols.get_child(renderer,el,index);
var headers__$1 = (function (){var or__5025__auto____$3 = replicant.core.get_alias_headers(impl,headers);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
return headers;
}
})();
var attrs = replicant.core.get_attrs(headers__$1);
var vdom_attrs = (vdom[(3)]);
var attrs_changed_QMARK_ = replicant.core.reconcile_attributes(renderer,child,attrs,vdom_attrs);
var vec__37619 = (cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true], null):replicant.core.get_children_ks(headers__$1,replicant.core.get_ns(headers__$1)));
var new_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37619,(0),null);
var new_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37619,(1),null);
var inner_html_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37619,(2),null);
var vec__37622 = (cljs.core.truth_(new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530).cljs$core$IFn$_invoke$arity$1(vdom_attrs))?(function (){
replicant.protocols.remove_all_children(renderer,child);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null);
})()
:(cljs.core.truth_(inner_html_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vdom[(4)]),(vdom[(5)]),(vdom[(10)])], null)
));
var old_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37622,(0),null);
var old_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37622,(1),null);
var old_nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37622,(2),null);
var vec__37625 = replicant.core.update_children(impl,child,new_children,new_ks,old_children,old_ks,old_nc);
var children_changed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37625,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37625,(1),null);
var child_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37625,(2),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37625,(3),null);
var attrs_changed_QMARK___$1 = ((attrs_changed_QMARK_) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1(vdom_attrs))));
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,headers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom,(cljs.core.truth_((function (){var and__5023__auto__ = attrs_changed_QMARK___$1;
if(and__5023__auto__){
return children_changed_QMARK_;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895),new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null):((attrs_changed_QMARK___$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null)
))], 0));

var headers__36734__auto__ = headers__$1;
return (new Array((headers__36734__auto__[(0)]),(headers__36734__auto__[(3)]),(headers__36734__auto__[(2)]),attrs,children,child_ks,cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__36734__auto__[(4)]))),(headers__36734__auto__[(7)]),null,null,n_children));
}
}
}
});
replicant.core.perform_post_mount_update = (function replicant$core$perform_post_mount_update(renderer,p__37647){
var vec__37649 = p__37647;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37649,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37649,(1),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37649,(2),null);
return replicant.core.update_attributes(renderer,node,attrs,mounting_attrs);
});
/**
 * Reconcile the DOM in `el` by diffing `hiccup` with `vdom`. If there is no
 *   `vdom`, `reconcile` will create the DOM as per `hiccup`. Assumes that the DOM
 *   in `el` is in sync with `vdom` - if not, this will certainly not produce the
 *   desired result.
 */
replicant.core.reconcile = (function replicant$core$reconcile(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38115 = arguments.length;
var i__5750__auto___38116 = (0);
while(true){
if((i__5750__auto___38116 < len__5749__auto___38115)){
args__5755__auto__.push((arguments[i__5750__auto___38116]));

var G__38117 = (i__5750__auto___38116 + (1));
i__5750__auto___38116 = G__38117;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic = (function (renderer,el,hiccup,p__37696){
var vec__37697 = p__37696;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37697,(0),null);
var map__37700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37697,(1),null);
var map__37700__$1 = cljs.core.__destructure_map(map__37700);
var unmounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37700__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37700__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37700__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var on_alias_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37700__$1,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043));
var impl = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"mounts","mounts",-791474425),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),(function (){var or__5025__auto__ = unmounts;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
})(),new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930),alias_data,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043),on_alias_exception], null);
var vdom__$1 = ((cljs.core.list_QMARK_(hiccup))?(function (){var vec__37708 = replicant.core.get_children_ks((function (){var pt__35964__auto__ = [null,null,null];
var G__37711 = pt__35964__auto__;
G__37711.push((function (){var temp__5825__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.truth_(temp__5825__auto__)){
var k__35916__auto__ = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__35964__auto__[(0)]),k__35916__auto__], null);
} else {
return null;
}
})());

G__37711.push(null);

G__37711.push(hiccup);

G__37711.push(null);

G__37711.push(null);

G__37711.push(null);

G__37711.push(null);

return G__37711;
})(),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37708,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37708,(1),null);
return cljs.core.second(replicant.core.update_children(impl,el,children,ks,vdom,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__37665_SHARP_){
return (p1__37665_SHARP_[(1)]);
}),vdom)),cljs.core.count(vdom)));
})():(function (){var headers = replicant.core.get_hiccup_headers(null,hiccup);
if(cljs.core.truth_(headers)){
var temp__5825__auto___38118 = (function (){var or__5025__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5825__auto___38118)){
var ctx__36350__auto___38119 = temp__5825__auto___38118;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__36350__auto___38119);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = headers;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = vdom;
if(cljs.core.truth_(and__5023__auto____$1)){
return ((replicant.core.unchanged_QMARK_(headers,cljs.core.first(vdom))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(vdom))));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return vdom;
} else {
var k = (cljs.core.truth_(headers)?(headers[(3)]):null);
return cljs.core.second(replicant.core.update_children(impl,el,(cljs.core.truth_(headers)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [headers], null):null),(function (){var G__37765 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__37765,k);
} else {
return G__37765;
}
})(),vdom,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__37666_SHARP_){
return (p1__37666_SHARP_[(1)]);
}),vdom)),(cljs.core.truth_(cljs.core.first(vdom))?(1):(0))));
}
})());
var hooks = cljs.core.deref(new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(impl));
var temp__5823__auto___38120 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"mounts","mounts",-791474425).cljs$core$IFn$_invoke$arity$1(impl)));
if(temp__5823__auto___38120){
var mounts_38121 = temp__5823__auto___38120;
replicant.protocols.next_frame(renderer,(function (){
cljs.core.run_BANG_((function (p1__37672_SHARP_){
return replicant.core.perform_post_mount_update(renderer,p1__37672_SHARP_);
}),mounts_38121);

return cljs.core.run_BANG_((function (p1__37673_SHARP_){
return replicant.core.call_hook(renderer,p1__37673_SHARP_);
}),hooks);
}));
} else {
cljs.core.run_BANG_((function (p1__37674_SHARP_){
return replicant.core.call_hook(renderer,p1__37674_SHARP_);
}),hooks);
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),hooks,new cljs.core.Keyword(null,"vdom","vdom",953162958),vdom__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521),new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)], null);
}));

(replicant.core.reconcile.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.reconcile.cljs$lang$applyTo = (function (seq37688){
var G__37689 = cljs.core.first(seq37688);
var seq37688__$1 = cljs.core.next(seq37688);
var G__37690 = cljs.core.first(seq37688__$1);
var seq37688__$2 = cljs.core.next(seq37688__$1);
var G__37691 = cljs.core.first(seq37688__$2);
var seq37688__$3 = cljs.core.next(seq37688__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37689,G__37690,G__37691,seq37688__$3);
}));

replicant.assert.add_reporter(new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266),replicant.console_logger.report);

//# sourceMappingURL=replicant.core.js.map
