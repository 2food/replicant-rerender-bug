goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37601 = arguments.length;
var i__5750__auto___37602 = (0);
while(true){
if((i__5750__auto___37602 < len__5749__auto___37601)){
args__5755__auto__.push((arguments[i__5750__auto___37602]));

var G__37603 = (i__5750__auto___37602 + (1));
i__5750__auto___37602 = G__37603;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37149){
var G__37150 = cljs.core.first(seq37149);
var seq37149__$1 = cljs.core.next(seq37149);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37150,seq37149__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37154 = cljs.core.seq(sources);
var chunk__37155 = null;
var count__37156 = (0);
var i__37157 = (0);
while(true){
if((i__37157 < count__37156)){
var map__37167 = chunk__37155.cljs$core$IIndexed$_nth$arity$2(null,i__37157);
var map__37167__$1 = cljs.core.__destructure_map(map__37167);
var src = map__37167__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37167__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37167__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37167__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37167__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37168){var e_37610 = e37168;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37610);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37610.message)].join('')));
}

var G__37611 = seq__37154;
var G__37612 = chunk__37155;
var G__37613 = count__37156;
var G__37614 = (i__37157 + (1));
seq__37154 = G__37611;
chunk__37155 = G__37612;
count__37156 = G__37613;
i__37157 = G__37614;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37154);
if(temp__5825__auto__){
var seq__37154__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37154__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37154__$1);
var G__37615 = cljs.core.chunk_rest(seq__37154__$1);
var G__37616 = c__5548__auto__;
var G__37617 = cljs.core.count(c__5548__auto__);
var G__37618 = (0);
seq__37154 = G__37615;
chunk__37155 = G__37616;
count__37156 = G__37617;
i__37157 = G__37618;
continue;
} else {
var map__37170 = cljs.core.first(seq__37154__$1);
var map__37170__$1 = cljs.core.__destructure_map(map__37170);
var src = map__37170__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37170__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37170__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37170__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37170__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37171){var e_37628 = e37171;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37628);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37628.message)].join('')));
}

var G__37629 = cljs.core.next(seq__37154__$1);
var G__37630 = null;
var G__37631 = (0);
var G__37632 = (0);
seq__37154 = G__37629;
chunk__37155 = G__37630;
count__37156 = G__37631;
i__37157 = G__37632;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37173 = cljs.core.seq(js_requires);
var chunk__37174 = null;
var count__37175 = (0);
var i__37176 = (0);
while(true){
if((i__37176 < count__37175)){
var js_ns = chunk__37174.cljs$core$IIndexed$_nth$arity$2(null,i__37176);
var require_str_37633 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37633);


var G__37634 = seq__37173;
var G__37635 = chunk__37174;
var G__37636 = count__37175;
var G__37637 = (i__37176 + (1));
seq__37173 = G__37634;
chunk__37174 = G__37635;
count__37175 = G__37636;
i__37176 = G__37637;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37173);
if(temp__5825__auto__){
var seq__37173__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37173__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37173__$1);
var G__37638 = cljs.core.chunk_rest(seq__37173__$1);
var G__37639 = c__5548__auto__;
var G__37640 = cljs.core.count(c__5548__auto__);
var G__37641 = (0);
seq__37173 = G__37638;
chunk__37174 = G__37639;
count__37175 = G__37640;
i__37176 = G__37641;
continue;
} else {
var js_ns = cljs.core.first(seq__37173__$1);
var require_str_37642 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37642);


var G__37643 = cljs.core.next(seq__37173__$1);
var G__37644 = null;
var G__37645 = (0);
var G__37646 = (0);
seq__37173 = G__37643;
chunk__37174 = G__37644;
count__37175 = G__37645;
i__37176 = G__37646;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37180){
var map__37181 = p__37180;
var map__37181__$1 = cljs.core.__destructure_map(map__37181);
var msg = map__37181__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37181__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37181__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37182(s__37183){
return (new cljs.core.LazySeq(null,(function (){
var s__37183__$1 = s__37183;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37183__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__37195 = cljs.core.first(xs__6385__auto__);
var map__37195__$1 = cljs.core.__destructure_map(map__37195);
var src = map__37195__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37195__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37195__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__37183__$1,map__37195,map__37195__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37181,map__37181__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37182_$_iter__37184(s__37185){
return (new cljs.core.LazySeq(null,((function (s__37183__$1,map__37195,map__37195__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37181,map__37181__$1,msg,info,reload_info){
return (function (){
var s__37185__$1 = s__37185;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37185__$1);
if(temp__5825__auto____$1){
var s__37185__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37185__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37185__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37187 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37186 = (0);
while(true){
if((i__37186 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__37186);
cljs.core.chunk_append(b__37187,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37648 = (i__37186 + (1));
i__37186 = G__37648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37187),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37182_$_iter__37184(cljs.core.chunk_rest(s__37185__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37187),null);
}
} else {
var warning = cljs.core.first(s__37185__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37182_$_iter__37184(cljs.core.rest(s__37185__$2)));
}
} else {
return null;
}
break;
}
});})(s__37183__$1,map__37195,map__37195__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37181,map__37181__$1,msg,info,reload_info))
,null,null));
});})(s__37183__$1,map__37195,map__37195__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37181,map__37181__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37182(cljs.core.rest(s__37183__$1)));
} else {
var G__37652 = cljs.core.rest(s__37183__$1);
s__37183__$1 = G__37652;
continue;
}
} else {
var G__37653 = cljs.core.rest(s__37183__$1);
s__37183__$1 = G__37653;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37197_37654 = cljs.core.seq(warnings);
var chunk__37198_37655 = null;
var count__37199_37656 = (0);
var i__37200_37657 = (0);
while(true){
if((i__37200_37657 < count__37199_37656)){
var map__37204_37658 = chunk__37198_37655.cljs$core$IIndexed$_nth$arity$2(null,i__37200_37657);
var map__37204_37659__$1 = cljs.core.__destructure_map(map__37204_37658);
var w_37660 = map__37204_37659__$1;
var msg_37661__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204_37659__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204_37659__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204_37659__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204_37659__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37664)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37662),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37663),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37661__$1)].join(''));


var G__37667 = seq__37197_37654;
var G__37668 = chunk__37198_37655;
var G__37669 = count__37199_37656;
var G__37670 = (i__37200_37657 + (1));
seq__37197_37654 = G__37667;
chunk__37198_37655 = G__37668;
count__37199_37656 = G__37669;
i__37200_37657 = G__37670;
continue;
} else {
var temp__5825__auto___37671 = cljs.core.seq(seq__37197_37654);
if(temp__5825__auto___37671){
var seq__37197_37675__$1 = temp__5825__auto___37671;
if(cljs.core.chunked_seq_QMARK_(seq__37197_37675__$1)){
var c__5548__auto___37676 = cljs.core.chunk_first(seq__37197_37675__$1);
var G__37677 = cljs.core.chunk_rest(seq__37197_37675__$1);
var G__37678 = c__5548__auto___37676;
var G__37679 = cljs.core.count(c__5548__auto___37676);
var G__37680 = (0);
seq__37197_37654 = G__37677;
chunk__37198_37655 = G__37678;
count__37199_37656 = G__37679;
i__37200_37657 = G__37680;
continue;
} else {
var map__37205_37681 = cljs.core.first(seq__37197_37675__$1);
var map__37205_37682__$1 = cljs.core.__destructure_map(map__37205_37681);
var w_37683 = map__37205_37682__$1;
var msg_37684__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37205_37682__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37205_37682__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37205_37682__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37205_37682__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37687)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37685),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37686),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37684__$1)].join(''));


var G__37692 = cljs.core.next(seq__37197_37675__$1);
var G__37693 = null;
var G__37694 = (0);
var G__37695 = (0);
seq__37197_37654 = G__37692;
chunk__37198_37655 = G__37693;
count__37199_37656 = G__37694;
i__37200_37657 = G__37695;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37178_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37178_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5023__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37213 = node_uri;
G__37213.setQuery(null);

G__37213.setPath(new$);

return G__37213;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37218){
var map__37219 = p__37218;
var map__37219__$1 = cljs.core.__destructure_map(map__37219);
var msg = map__37219__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37219__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37219__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37220 = cljs.core.seq(updates);
var chunk__37222 = null;
var count__37223 = (0);
var i__37224 = (0);
while(true){
if((i__37224 < count__37223)){
var path = chunk__37222.cljs$core$IIndexed$_nth$arity$2(null,i__37224);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37380_37701 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37384_37702 = null;
var count__37385_37703 = (0);
var i__37386_37704 = (0);
while(true){
if((i__37386_37704 < count__37385_37703)){
var node_37705 = chunk__37384_37702.cljs$core$IIndexed$_nth$arity$2(null,i__37386_37704);
if(cljs.core.not(node_37705.shadow$old)){
var path_match_37706 = shadow.cljs.devtools.client.browser.match_paths(node_37705.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37706)){
var new_link_37707 = (function (){var G__37421 = node_37705.cloneNode(true);
G__37421.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37706),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37421;
})();
(node_37705.shadow$old = true);

(new_link_37707.onload = ((function (seq__37380_37701,chunk__37384_37702,count__37385_37703,i__37386_37704,seq__37220,chunk__37222,count__37223,i__37224,new_link_37707,path_match_37706,node_37705,path,map__37219,map__37219__$1,msg,updates,reload_info){
return (function (e){
var seq__37422_37712 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37424_37713 = null;
var count__37425_37714 = (0);
var i__37426_37715 = (0);
while(true){
if((i__37426_37715 < count__37425_37714)){
var map__37434_37716 = chunk__37424_37713.cljs$core$IIndexed$_nth$arity$2(null,i__37426_37715);
var map__37434_37717__$1 = cljs.core.__destructure_map(map__37434_37716);
var task_37718 = map__37434_37717__$1;
var fn_str_37719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37434_37717__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37434_37717__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37721 = goog.getObjectByName(fn_str_37719,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37720)].join(''));

(fn_obj_37721.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37721.cljs$core$IFn$_invoke$arity$2(path,new_link_37707) : fn_obj_37721.call(null,path,new_link_37707));


var G__37722 = seq__37422_37712;
var G__37723 = chunk__37424_37713;
var G__37724 = count__37425_37714;
var G__37725 = (i__37426_37715 + (1));
seq__37422_37712 = G__37722;
chunk__37424_37713 = G__37723;
count__37425_37714 = G__37724;
i__37426_37715 = G__37725;
continue;
} else {
var temp__5825__auto___37726 = cljs.core.seq(seq__37422_37712);
if(temp__5825__auto___37726){
var seq__37422_37727__$1 = temp__5825__auto___37726;
if(cljs.core.chunked_seq_QMARK_(seq__37422_37727__$1)){
var c__5548__auto___37728 = cljs.core.chunk_first(seq__37422_37727__$1);
var G__37729 = cljs.core.chunk_rest(seq__37422_37727__$1);
var G__37730 = c__5548__auto___37728;
var G__37731 = cljs.core.count(c__5548__auto___37728);
var G__37732 = (0);
seq__37422_37712 = G__37729;
chunk__37424_37713 = G__37730;
count__37425_37714 = G__37731;
i__37426_37715 = G__37732;
continue;
} else {
var map__37441_37733 = cljs.core.first(seq__37422_37727__$1);
var map__37441_37734__$1 = cljs.core.__destructure_map(map__37441_37733);
var task_37735 = map__37441_37734__$1;
var fn_str_37736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37441_37734__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37441_37734__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37738 = goog.getObjectByName(fn_str_37736,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37737)].join(''));

(fn_obj_37738.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37738.cljs$core$IFn$_invoke$arity$2(path,new_link_37707) : fn_obj_37738.call(null,path,new_link_37707));


var G__37739 = cljs.core.next(seq__37422_37727__$1);
var G__37740 = null;
var G__37741 = (0);
var G__37742 = (0);
seq__37422_37712 = G__37739;
chunk__37424_37713 = G__37740;
count__37425_37714 = G__37741;
i__37426_37715 = G__37742;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37705);
});})(seq__37380_37701,chunk__37384_37702,count__37385_37703,i__37386_37704,seq__37220,chunk__37222,count__37223,i__37224,new_link_37707,path_match_37706,node_37705,path,map__37219,map__37219__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37706], 0));

goog.dom.insertSiblingAfter(new_link_37707,node_37705);


var G__37743 = seq__37380_37701;
var G__37744 = chunk__37384_37702;
var G__37745 = count__37385_37703;
var G__37746 = (i__37386_37704 + (1));
seq__37380_37701 = G__37743;
chunk__37384_37702 = G__37744;
count__37385_37703 = G__37745;
i__37386_37704 = G__37746;
continue;
} else {
var G__37747 = seq__37380_37701;
var G__37748 = chunk__37384_37702;
var G__37749 = count__37385_37703;
var G__37750 = (i__37386_37704 + (1));
seq__37380_37701 = G__37747;
chunk__37384_37702 = G__37748;
count__37385_37703 = G__37749;
i__37386_37704 = G__37750;
continue;
}
} else {
var G__37751 = seq__37380_37701;
var G__37752 = chunk__37384_37702;
var G__37753 = count__37385_37703;
var G__37754 = (i__37386_37704 + (1));
seq__37380_37701 = G__37751;
chunk__37384_37702 = G__37752;
count__37385_37703 = G__37753;
i__37386_37704 = G__37754;
continue;
}
} else {
var temp__5825__auto___37755 = cljs.core.seq(seq__37380_37701);
if(temp__5825__auto___37755){
var seq__37380_37756__$1 = temp__5825__auto___37755;
if(cljs.core.chunked_seq_QMARK_(seq__37380_37756__$1)){
var c__5548__auto___37757 = cljs.core.chunk_first(seq__37380_37756__$1);
var G__37758 = cljs.core.chunk_rest(seq__37380_37756__$1);
var G__37759 = c__5548__auto___37757;
var G__37760 = cljs.core.count(c__5548__auto___37757);
var G__37761 = (0);
seq__37380_37701 = G__37758;
chunk__37384_37702 = G__37759;
count__37385_37703 = G__37760;
i__37386_37704 = G__37761;
continue;
} else {
var node_37762 = cljs.core.first(seq__37380_37756__$1);
if(cljs.core.not(node_37762.shadow$old)){
var path_match_37763 = shadow.cljs.devtools.client.browser.match_paths(node_37762.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37763)){
var new_link_37764 = (function (){var G__37450 = node_37762.cloneNode(true);
G__37450.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37763),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37450;
})();
(node_37762.shadow$old = true);

(new_link_37764.onload = ((function (seq__37380_37701,chunk__37384_37702,count__37385_37703,i__37386_37704,seq__37220,chunk__37222,count__37223,i__37224,new_link_37764,path_match_37763,node_37762,seq__37380_37756__$1,temp__5825__auto___37755,path,map__37219,map__37219__$1,msg,updates,reload_info){
return (function (e){
var seq__37451_37766 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37453_37767 = null;
var count__37454_37768 = (0);
var i__37455_37769 = (0);
while(true){
if((i__37455_37769 < count__37454_37768)){
var map__37459_37770 = chunk__37453_37767.cljs$core$IIndexed$_nth$arity$2(null,i__37455_37769);
var map__37459_37771__$1 = cljs.core.__destructure_map(map__37459_37770);
var task_37772 = map__37459_37771__$1;
var fn_str_37773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37459_37771__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37459_37771__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37775 = goog.getObjectByName(fn_str_37773,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37774)].join(''));

(fn_obj_37775.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37775.cljs$core$IFn$_invoke$arity$2(path,new_link_37764) : fn_obj_37775.call(null,path,new_link_37764));


var G__37776 = seq__37451_37766;
var G__37777 = chunk__37453_37767;
var G__37778 = count__37454_37768;
var G__37779 = (i__37455_37769 + (1));
seq__37451_37766 = G__37776;
chunk__37453_37767 = G__37777;
count__37454_37768 = G__37778;
i__37455_37769 = G__37779;
continue;
} else {
var temp__5825__auto___37780__$1 = cljs.core.seq(seq__37451_37766);
if(temp__5825__auto___37780__$1){
var seq__37451_37781__$1 = temp__5825__auto___37780__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37451_37781__$1)){
var c__5548__auto___37782 = cljs.core.chunk_first(seq__37451_37781__$1);
var G__37783 = cljs.core.chunk_rest(seq__37451_37781__$1);
var G__37784 = c__5548__auto___37782;
var G__37785 = cljs.core.count(c__5548__auto___37782);
var G__37786 = (0);
seq__37451_37766 = G__37783;
chunk__37453_37767 = G__37784;
count__37454_37768 = G__37785;
i__37455_37769 = G__37786;
continue;
} else {
var map__37460_37787 = cljs.core.first(seq__37451_37781__$1);
var map__37460_37788__$1 = cljs.core.__destructure_map(map__37460_37787);
var task_37789 = map__37460_37788__$1;
var fn_str_37790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37460_37788__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37460_37788__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37792 = goog.getObjectByName(fn_str_37790,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37791)].join(''));

(fn_obj_37792.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37792.cljs$core$IFn$_invoke$arity$2(path,new_link_37764) : fn_obj_37792.call(null,path,new_link_37764));


var G__37793 = cljs.core.next(seq__37451_37781__$1);
var G__37794 = null;
var G__37795 = (0);
var G__37796 = (0);
seq__37451_37766 = G__37793;
chunk__37453_37767 = G__37794;
count__37454_37768 = G__37795;
i__37455_37769 = G__37796;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37762);
});})(seq__37380_37701,chunk__37384_37702,count__37385_37703,i__37386_37704,seq__37220,chunk__37222,count__37223,i__37224,new_link_37764,path_match_37763,node_37762,seq__37380_37756__$1,temp__5825__auto___37755,path,map__37219,map__37219__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37763], 0));

goog.dom.insertSiblingAfter(new_link_37764,node_37762);


var G__37797 = cljs.core.next(seq__37380_37756__$1);
var G__37798 = null;
var G__37799 = (0);
var G__37800 = (0);
seq__37380_37701 = G__37797;
chunk__37384_37702 = G__37798;
count__37385_37703 = G__37799;
i__37386_37704 = G__37800;
continue;
} else {
var G__37801 = cljs.core.next(seq__37380_37756__$1);
var G__37802 = null;
var G__37803 = (0);
var G__37804 = (0);
seq__37380_37701 = G__37801;
chunk__37384_37702 = G__37802;
count__37385_37703 = G__37803;
i__37386_37704 = G__37804;
continue;
}
} else {
var G__37805 = cljs.core.next(seq__37380_37756__$1);
var G__37806 = null;
var G__37807 = (0);
var G__37808 = (0);
seq__37380_37701 = G__37805;
chunk__37384_37702 = G__37806;
count__37385_37703 = G__37807;
i__37386_37704 = G__37808;
continue;
}
}
} else {
}
}
break;
}


var G__37809 = seq__37220;
var G__37810 = chunk__37222;
var G__37811 = count__37223;
var G__37812 = (i__37224 + (1));
seq__37220 = G__37809;
chunk__37222 = G__37810;
count__37223 = G__37811;
i__37224 = G__37812;
continue;
} else {
var G__37813 = seq__37220;
var G__37814 = chunk__37222;
var G__37815 = count__37223;
var G__37816 = (i__37224 + (1));
seq__37220 = G__37813;
chunk__37222 = G__37814;
count__37223 = G__37815;
i__37224 = G__37816;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37220);
if(temp__5825__auto__){
var seq__37220__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37220__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37220__$1);
var G__37817 = cljs.core.chunk_rest(seq__37220__$1);
var G__37818 = c__5548__auto__;
var G__37819 = cljs.core.count(c__5548__auto__);
var G__37820 = (0);
seq__37220 = G__37817;
chunk__37222 = G__37818;
count__37223 = G__37819;
i__37224 = G__37820;
continue;
} else {
var path = cljs.core.first(seq__37220__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37463_37821 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37467_37822 = null;
var count__37468_37823 = (0);
var i__37469_37824 = (0);
while(true){
if((i__37469_37824 < count__37468_37823)){
var node_37825 = chunk__37467_37822.cljs$core$IIndexed$_nth$arity$2(null,i__37469_37824);
if(cljs.core.not(node_37825.shadow$old)){
var path_match_37826 = shadow.cljs.devtools.client.browser.match_paths(node_37825.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37826)){
var new_link_37827 = (function (){var G__37518 = node_37825.cloneNode(true);
G__37518.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37826),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37518;
})();
(node_37825.shadow$old = true);

(new_link_37827.onload = ((function (seq__37463_37821,chunk__37467_37822,count__37468_37823,i__37469_37824,seq__37220,chunk__37222,count__37223,i__37224,new_link_37827,path_match_37826,node_37825,path,seq__37220__$1,temp__5825__auto__,map__37219,map__37219__$1,msg,updates,reload_info){
return (function (e){
var seq__37519_37828 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37521_37829 = null;
var count__37522_37830 = (0);
var i__37523_37831 = (0);
while(true){
if((i__37523_37831 < count__37522_37830)){
var map__37527_37832 = chunk__37521_37829.cljs$core$IIndexed$_nth$arity$2(null,i__37523_37831);
var map__37527_37833__$1 = cljs.core.__destructure_map(map__37527_37832);
var task_37834 = map__37527_37833__$1;
var fn_str_37835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37527_37833__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37527_37833__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37837 = goog.getObjectByName(fn_str_37835,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37836)].join(''));

(fn_obj_37837.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37837.cljs$core$IFn$_invoke$arity$2(path,new_link_37827) : fn_obj_37837.call(null,path,new_link_37827));


var G__37838 = seq__37519_37828;
var G__37839 = chunk__37521_37829;
var G__37840 = count__37522_37830;
var G__37841 = (i__37523_37831 + (1));
seq__37519_37828 = G__37838;
chunk__37521_37829 = G__37839;
count__37522_37830 = G__37840;
i__37523_37831 = G__37841;
continue;
} else {
var temp__5825__auto___37842__$1 = cljs.core.seq(seq__37519_37828);
if(temp__5825__auto___37842__$1){
var seq__37519_37843__$1 = temp__5825__auto___37842__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37519_37843__$1)){
var c__5548__auto___37844 = cljs.core.chunk_first(seq__37519_37843__$1);
var G__37845 = cljs.core.chunk_rest(seq__37519_37843__$1);
var G__37846 = c__5548__auto___37844;
var G__37847 = cljs.core.count(c__5548__auto___37844);
var G__37848 = (0);
seq__37519_37828 = G__37845;
chunk__37521_37829 = G__37846;
count__37522_37830 = G__37847;
i__37523_37831 = G__37848;
continue;
} else {
var map__37528_37849 = cljs.core.first(seq__37519_37843__$1);
var map__37528_37850__$1 = cljs.core.__destructure_map(map__37528_37849);
var task_37851 = map__37528_37850__$1;
var fn_str_37852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37528_37850__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37528_37850__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37854 = goog.getObjectByName(fn_str_37852,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37853)].join(''));

(fn_obj_37854.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37854.cljs$core$IFn$_invoke$arity$2(path,new_link_37827) : fn_obj_37854.call(null,path,new_link_37827));


var G__37855 = cljs.core.next(seq__37519_37843__$1);
var G__37856 = null;
var G__37857 = (0);
var G__37858 = (0);
seq__37519_37828 = G__37855;
chunk__37521_37829 = G__37856;
count__37522_37830 = G__37857;
i__37523_37831 = G__37858;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37825);
});})(seq__37463_37821,chunk__37467_37822,count__37468_37823,i__37469_37824,seq__37220,chunk__37222,count__37223,i__37224,new_link_37827,path_match_37826,node_37825,path,seq__37220__$1,temp__5825__auto__,map__37219,map__37219__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37826], 0));

goog.dom.insertSiblingAfter(new_link_37827,node_37825);


var G__37859 = seq__37463_37821;
var G__37860 = chunk__37467_37822;
var G__37861 = count__37468_37823;
var G__37862 = (i__37469_37824 + (1));
seq__37463_37821 = G__37859;
chunk__37467_37822 = G__37860;
count__37468_37823 = G__37861;
i__37469_37824 = G__37862;
continue;
} else {
var G__37863 = seq__37463_37821;
var G__37864 = chunk__37467_37822;
var G__37865 = count__37468_37823;
var G__37866 = (i__37469_37824 + (1));
seq__37463_37821 = G__37863;
chunk__37467_37822 = G__37864;
count__37468_37823 = G__37865;
i__37469_37824 = G__37866;
continue;
}
} else {
var G__37867 = seq__37463_37821;
var G__37868 = chunk__37467_37822;
var G__37869 = count__37468_37823;
var G__37870 = (i__37469_37824 + (1));
seq__37463_37821 = G__37867;
chunk__37467_37822 = G__37868;
count__37468_37823 = G__37869;
i__37469_37824 = G__37870;
continue;
}
} else {
var temp__5825__auto___37871__$1 = cljs.core.seq(seq__37463_37821);
if(temp__5825__auto___37871__$1){
var seq__37463_37872__$1 = temp__5825__auto___37871__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37463_37872__$1)){
var c__5548__auto___37873 = cljs.core.chunk_first(seq__37463_37872__$1);
var G__37874 = cljs.core.chunk_rest(seq__37463_37872__$1);
var G__37875 = c__5548__auto___37873;
var G__37876 = cljs.core.count(c__5548__auto___37873);
var G__37877 = (0);
seq__37463_37821 = G__37874;
chunk__37467_37822 = G__37875;
count__37468_37823 = G__37876;
i__37469_37824 = G__37877;
continue;
} else {
var node_37878 = cljs.core.first(seq__37463_37872__$1);
if(cljs.core.not(node_37878.shadow$old)){
var path_match_37879 = shadow.cljs.devtools.client.browser.match_paths(node_37878.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37879)){
var new_link_37880 = (function (){var G__37529 = node_37878.cloneNode(true);
G__37529.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37879),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37529;
})();
(node_37878.shadow$old = true);

(new_link_37880.onload = ((function (seq__37463_37821,chunk__37467_37822,count__37468_37823,i__37469_37824,seq__37220,chunk__37222,count__37223,i__37224,new_link_37880,path_match_37879,node_37878,seq__37463_37872__$1,temp__5825__auto___37871__$1,path,seq__37220__$1,temp__5825__auto__,map__37219,map__37219__$1,msg,updates,reload_info){
return (function (e){
var seq__37530_37881 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37532_37882 = null;
var count__37533_37883 = (0);
var i__37534_37884 = (0);
while(true){
if((i__37534_37884 < count__37533_37883)){
var map__37538_37885 = chunk__37532_37882.cljs$core$IIndexed$_nth$arity$2(null,i__37534_37884);
var map__37538_37886__$1 = cljs.core.__destructure_map(map__37538_37885);
var task_37887 = map__37538_37886__$1;
var fn_str_37888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37538_37886__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37538_37886__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37890 = goog.getObjectByName(fn_str_37888,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37889)].join(''));

(fn_obj_37890.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37890.cljs$core$IFn$_invoke$arity$2(path,new_link_37880) : fn_obj_37890.call(null,path,new_link_37880));


var G__37891 = seq__37530_37881;
var G__37892 = chunk__37532_37882;
var G__37893 = count__37533_37883;
var G__37894 = (i__37534_37884 + (1));
seq__37530_37881 = G__37891;
chunk__37532_37882 = G__37892;
count__37533_37883 = G__37893;
i__37534_37884 = G__37894;
continue;
} else {
var temp__5825__auto___37895__$2 = cljs.core.seq(seq__37530_37881);
if(temp__5825__auto___37895__$2){
var seq__37530_37896__$1 = temp__5825__auto___37895__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37530_37896__$1)){
var c__5548__auto___37897 = cljs.core.chunk_first(seq__37530_37896__$1);
var G__37898 = cljs.core.chunk_rest(seq__37530_37896__$1);
var G__37899 = c__5548__auto___37897;
var G__37900 = cljs.core.count(c__5548__auto___37897);
var G__37901 = (0);
seq__37530_37881 = G__37898;
chunk__37532_37882 = G__37899;
count__37533_37883 = G__37900;
i__37534_37884 = G__37901;
continue;
} else {
var map__37542_37902 = cljs.core.first(seq__37530_37896__$1);
var map__37542_37903__$1 = cljs.core.__destructure_map(map__37542_37902);
var task_37904 = map__37542_37903__$1;
var fn_str_37905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37542_37903__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37542_37903__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37907 = goog.getObjectByName(fn_str_37905,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37906)].join(''));

(fn_obj_37907.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37907.cljs$core$IFn$_invoke$arity$2(path,new_link_37880) : fn_obj_37907.call(null,path,new_link_37880));


var G__37908 = cljs.core.next(seq__37530_37896__$1);
var G__37909 = null;
var G__37910 = (0);
var G__37911 = (0);
seq__37530_37881 = G__37908;
chunk__37532_37882 = G__37909;
count__37533_37883 = G__37910;
i__37534_37884 = G__37911;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37878);
});})(seq__37463_37821,chunk__37467_37822,count__37468_37823,i__37469_37824,seq__37220,chunk__37222,count__37223,i__37224,new_link_37880,path_match_37879,node_37878,seq__37463_37872__$1,temp__5825__auto___37871__$1,path,seq__37220__$1,temp__5825__auto__,map__37219,map__37219__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37879], 0));

goog.dom.insertSiblingAfter(new_link_37880,node_37878);


var G__37912 = cljs.core.next(seq__37463_37872__$1);
var G__37913 = null;
var G__37914 = (0);
var G__37915 = (0);
seq__37463_37821 = G__37912;
chunk__37467_37822 = G__37913;
count__37468_37823 = G__37914;
i__37469_37824 = G__37915;
continue;
} else {
var G__37916 = cljs.core.next(seq__37463_37872__$1);
var G__37917 = null;
var G__37918 = (0);
var G__37919 = (0);
seq__37463_37821 = G__37916;
chunk__37467_37822 = G__37917;
count__37468_37823 = G__37918;
i__37469_37824 = G__37919;
continue;
}
} else {
var G__37920 = cljs.core.next(seq__37463_37872__$1);
var G__37921 = null;
var G__37922 = (0);
var G__37923 = (0);
seq__37463_37821 = G__37920;
chunk__37467_37822 = G__37921;
count__37468_37823 = G__37922;
i__37469_37824 = G__37923;
continue;
}
}
} else {
}
}
break;
}


var G__37924 = cljs.core.next(seq__37220__$1);
var G__37925 = null;
var G__37926 = (0);
var G__37927 = (0);
seq__37220 = G__37924;
chunk__37222 = G__37925;
count__37223 = G__37926;
i__37224 = G__37927;
continue;
} else {
var G__37928 = cljs.core.next(seq__37220__$1);
var G__37929 = null;
var G__37930 = (0);
var G__37931 = (0);
seq__37220 = G__37928;
chunk__37222 = G__37929;
count__37223 = G__37930;
i__37224 = G__37931;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__37558 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__37558) : success.call(null,G__37558));
}catch (e37557){var e = e37557;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__37560,success,fail){
var map__37561 = p__37560;
var map__37561__$1 = cljs.core.__destructure_map(map__37561);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37561__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__37563 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__37563) : success.call(null,G__37563));
}catch (e37562){var e = e37562;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37564,done,error){
var map__37565 = p__37564;
var map__37565__$1 = cljs.core.__destructure_map(map__37565);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37565__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37569,done,error){
var map__37570 = p__37569;
var map__37570__$1 = cljs.core.__destructure_map(map__37570);
var msg = map__37570__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37570__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37570__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37570__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37574){
var map__37575 = p__37574;
var map__37575__$1 = cljs.core.__destructure_map(map__37575);
var src = map__37575__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37575__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37577 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37577) : done.call(null,G__37577));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37579){
var map__37580 = p__37579;
var map__37580__$1 = cljs.core.__destructure_map(map__37580);
var msg__$1 = map__37580__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37580__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37581){var ex = e37581;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37582){
var map__37583 = p__37582;
var map__37583__$1 = cljs.core.__destructure_map(map__37583);
var env = map__37583__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37590){
var map__37591 = p__37590;
var map__37591__$1 = cljs.core.__destructure_map(map__37591);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37591__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37591__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37596){
var map__37597 = p__37596;
var map__37597__$1 = cljs.core.__destructure_map(map__37597);
var svc = map__37597__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37597__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
