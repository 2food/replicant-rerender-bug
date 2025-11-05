goog.provide('replicant.alias');
replicant.alias.aliases = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Register an alias. Associates the alias key `k` with the function `f`:
 * 
 * ```clj
 * (replicant.alias/register! :ui/a custom-link)
 * ```
 */
replicant.alias.register_BANG_ = (function replicant$alias$register_BANG_(k,f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(replicant.alias.aliases,cljs.core.assoc,k,f);
});
/**
 * Returns globally registered aliases
 */
replicant.alias.get_registered_aliases = (function replicant$alias$get_registered_aliases(){
return cljs.core.deref(replicant.alias.aliases);
});
replicant.alias.__GT_hiccup = (function replicant$alias$__GT_hiccup(headers){
if(cljs.core.truth_(headers)){
var or__5025__auto__ = (headers[(8)]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((headers[(0)])),(function (){var attrs = replicant.core.get_attrs(headers);
var G__28814 = (headers[(4)]);
var G__28814__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28814,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs)):G__28814);
if(cljs.core.truth_(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28814__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.set(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(attrs)));
} else {
return G__28814__$1;
}
})()], null),replicant.core.flatten_seqs((headers[(5)])));
}
} else {
return null;
}
});
replicant.alias.alias_hiccup_QMARK_ = (function replicant$alias$alias_hiccup_QMARK_(x){
return ((replicant.hiccup.hiccup_QMARK_(x)) && (cljs.core.qualified_keyword_QMARK_(cljs.core.first(x))));
});
replicant.alias.expand_aliased_hiccup = (function replicant$alias$expand_aliased_hiccup(x,opt){
if(replicant.alias.alias_hiccup_QMARK_(x)){
var headers = replicant.core.get_hiccup_headers(null,x);
var defined_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"aliases","aliases",1346874714).cljs$core$IFn$_invoke$arity$1(opt),(headers[(0)]));
if(((cljs.core.not(defined_QMARK_)) && (cljs.core.get.cljs$core$IFn$_invoke$arity$3(opt,new cljs.core.Keyword(null,"ignore-missing-alias?","ignore-missing-alias?",1175846938),true) === false))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Tried to expand undefined alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((headers[(0)]))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alias","alias",-2039751630),(headers[(0)])], null));
} else {
}

var G__28815 = headers;
var G__28815__$1 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"aliases","aliases",1346874714).cljs$core$IFn$_invoke$arity$1(opt),(headers[(0)])))?replicant.core.get_alias_headers(opt,G__28815):G__28815);
return replicant.alias.__GT_hiccup(G__28815__$1);

} else {
return x;
}
});
replicant.alias.get_opts = (function replicant$alias$get_opts(opt){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(opt,new cljs.core.Keyword(null,"aliases","aliases",1346874714),(function (p1__28816_SHARP_){
var or__5025__auto__ = p1__28816_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return replicant.alias.get_registered_aliases();
}
}));
});
/**
 * Expand the first level of aliases in `hiccup`. The result may contain aliases
 *   if returned by the top-level aliases. If using aliases that are not in the
 *   global registry, pass `:aliases` in `opt`.
 */
replicant.alias.expand_1 = (function replicant$alias$expand_1(var_args){
var args__5755__auto__ = [];
var len__5749__auto___28831 = arguments.length;
var i__5750__auto___28832 = (0);
while(true){
if((i__5750__auto___28832 < len__5749__auto___28831)){
args__5755__auto__.push((arguments[i__5750__auto___28832]));

var G__28833 = (i__5750__auto___28832 + (1));
i__5750__auto___28832 = G__28833;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return replicant.alias.expand_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(replicant.alias.expand_1.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__28820){
var vec__28821 = p__28820;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28821,(0),null);
var opt__$1 = replicant.alias.get_opts(opt);
return clojure.walk.postwalk((function (p1__28817_SHARP_){
return replicant.alias.expand_aliased_hiccup(p1__28817_SHARP_,opt__$1);
}),hiccup);
}));

(replicant.alias.expand_1.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(replicant.alias.expand_1.cljs$lang$applyTo = (function (seq28818){
var G__28819 = cljs.core.first(seq28818);
var seq28818__$1 = cljs.core.next(seq28818);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28819,seq28818__$1);
}));

/**
 * Recursively expand all aliases in `hiccup`. The result will not contain
 *   aliases. If using aliases that are not in the global registry, pass `:aliases`
 *   in `opt`.
 */
replicant.alias.expand = (function replicant$alias$expand(var_args){
var args__5755__auto__ = [];
var len__5749__auto___28834 = arguments.length;
var i__5750__auto___28835 = (0);
while(true){
if((i__5750__auto___28835 < len__5749__auto___28834)){
args__5755__auto__.push((arguments[i__5750__auto___28835]));

var G__28836 = (i__5750__auto___28835 + (1));
i__5750__auto___28835 = G__28836;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return replicant.alias.expand.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(replicant.alias.expand.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__28827){
var vec__28828 = p__28827;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28828,(0),null);
var opt__$1 = replicant.alias.get_opts(opt);
return clojure.walk.prewalk((function (p1__28824_SHARP_){
return replicant.alias.expand_aliased_hiccup(p1__28824_SHARP_,opt__$1);
}),hiccup);
}));

(replicant.alias.expand.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(replicant.alias.expand.cljs$lang$applyTo = (function (seq28825){
var G__28826 = cljs.core.first(seq28825);
var seq28825__$1 = cljs.core.next(seq28825);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28826,seq28825__$1);
}));


//# sourceMappingURL=replicant.alias.js.map
