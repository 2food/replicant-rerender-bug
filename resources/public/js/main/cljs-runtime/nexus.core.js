goog.provide('nexus.core');
nexus.core.conjv = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
nexus.core.intov = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY);
nexus.core.action_QMARK_ = (function nexus$core$action_QMARK_(data){
return ((cljs.core.vector_QMARK_(data)) && ((cljs.core.first(data) instanceof cljs.core.Keyword)));
});
nexus.core.actions_QMARK_ = (function nexus$core$actions_QMARK_(data){
return ((cljs.core.sequential_QMARK_(data)) && (cljs.core.every_QMARK_(nexus.core.action_QMARK_,data)));
});
nexus.core.run_interceptors = (function nexus$core$run_interceptors(ctx,interceptors,p__28860){
var vec__28861 = p__28860;
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28861,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28861,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28861,(2),null);
var invoke = (function nexus$core$run_interceptors_$_invoke(f,state,phase,interceptor){
try{var G__28867 = state;
if(cljs.core.ifn_QMARK_(f)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28867) : f.call(null,G__28867));
} else {
return G__28867;
}
}catch (e28866){var e = e28866;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"errors","errors",-908790718),nexus.core.conjv,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"phase","phase",575722892),phase,new cljs.core.Keyword(null,"err","err",-2089457205),e,k,(ctx.cljs$core$IFn$_invoke$arity$1 ? ctx.cljs$core$IFn$_invoke$arity$1(k) : ctx.call(null,k))]),cljs.core.select_keys(interceptor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null))));
}});
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"queue","queue",1455835879),interceptors,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.List.EMPTY], null)], 0));
while(true){
if(cljs.core.truth_(new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(state))){
var interceptor = cljs.core.first(new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(state));
var state__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.next),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,interceptor);
var G__28916 = invoke((before.cljs$core$IFn$_invoke$arity$1 ? before.cljs$core$IFn$_invoke$arity$1(interceptor) : before.call(null,interceptor)),state__$1,(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(interceptor);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return before;
}
})(),interceptor);
state = G__28916;
continue;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(state))){
var interceptor = cljs.core.first(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(state));
var state__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.next);
var G__28917 = invoke((after.cljs$core$IFn$_invoke$arity$1 ? after.cljs$core$IFn$_invoke$arity$1(interceptor) : after.call(null,interceptor)),state__$1,after,interceptor);
state = G__28917;
continue;
} else {
return state;

}
}
break;
}
});
nexus.core.wrap_action_handler = (function nexus$core$wrap_action_handler(f,ctx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.next(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(ctx))));
});
nexus.core.interpolate_1 = (function nexus$core$interpolate_1(p__28868,dispatch_data,action){
var map__28869 = p__28868;
var map__28869__$1 = cljs.core.__destructure_map(map__28869);
var placeholders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28869__$1,new cljs.core.Keyword("nexus","placeholders","nexus/placeholders",1656029064));
var interpolated = clojure.walk.postwalk((function (x){
var temp__5823__auto__ = ((cljs.core.vector_QMARK_(x))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(placeholders,cljs.core.first(x)):null);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dispatch_data,cljs.core.next(x));
} else {
return x;
}
}),action);
var G__28870 = interpolated;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(interpolated,action)){
return cljs.core.with_meta(G__28870,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nexus","action","nexus/action",-1495019145),action], null));
} else {
return G__28870;
}
});
nexus.core.expand_action = (function nexus$core$expand_action(nexus__$1,state,p__28871,p__28872){
var vec__28873 = p__28871;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28873,(0),null);
var action = vec__28873;
var map__28876 = p__28872;
var map__28876__$1 = cljs.core.__destructure_map(map__28876);
var dispatch_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28876__$1,new cljs.core.Keyword(null,"dispatch-data","dispatch-data",658842324));
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28876__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var action__$1 = nexus.core.interpolate_1(nexus__$1,dispatch_data,action);
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(nexus__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nexus","actions","nexus/actions",-707386605),kind], null));
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
var map__28877 = nexus.core.run_interceptors((function (){var G__28878 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"action","action",-811238024),action__$1], null);
if(cljs.core.truth_(errors)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28878,new cljs.core.Keyword(null,"errors","errors",-908790718),errors);
} else {
return G__28878;
}
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(new cljs.core.Keyword("nexus","interceptors","nexus/interceptors",-569564390).cljs$core$IFn$_invoke$arity$1(nexus__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"expand-action","expand-action",-565829596),new cljs.core.Keyword(null,"before-action","before-action",1841179242),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nexus.core.wrap_action_handler,f)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"before-action","before-action",1841179242),new cljs.core.Keyword(null,"after-action","after-action",-22240574),new cljs.core.Keyword(null,"action","action",-811238024)], null));
var map__28877__$1 = cljs.core.__destructure_map(map__28877);
var action__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28877__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28877__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var errors__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28877__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var acc = (function (){var G__28879 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.seq(errors__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28879,new cljs.core.Keyword(null,"errors","errors",-908790718),errors__$1);
} else {
return G__28879;
}
})();
if((actions == null)){
return acc;
} else {
if((!(nexus.core.actions_QMARK_(actions)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action__$2,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"expand-action","expand-action",-565829596),new cljs.core.Keyword(null,"err","err",-2089457205),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(action__$2))," should expand to a collection of actions"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"res","res",-1395007879),actions], null))], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(actions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action__$2], null))){
var G__28880 = acc;
if(cljs.core.seq(actions)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28880,new cljs.core.Keyword(null,"actions","actions",-812656882),actions);
} else {
return G__28880;
}
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,action__$3){
var map__28881 = (function (){var G__28882 = nexus__$1;
var G__28883 = state;
var G__28884 = action__$3;
var G__28885 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-data","dispatch-data",658842324),dispatch_data,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(res)], null);
return (nexus.core.expand_action.cljs$core$IFn$_invoke$arity$4 ? nexus.core.expand_action.cljs$core$IFn$_invoke$arity$4(G__28882,G__28883,G__28884,G__28885) : nexus.core.expand_action.call(null,G__28882,G__28883,G__28884,G__28885));
})();
var map__28881__$1 = cljs.core.__destructure_map(map__28881);
var errors__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28881__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var actions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28881__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var G__28886 = res;
var G__28886__$1 = ((cljs.core.seq(errors__$2))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__28886,new cljs.core.Keyword(null,"errors","errors",-908790718),nexus.core.intov,errors__$2):G__28886);
if(cljs.core.seq(actions__$1)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__28886__$1,new cljs.core.Keyword(null,"actions","actions",-812656882),nexus.core.intov,actions__$1);
} else {
return G__28886__$1;
}
}),acc,actions);

}
}
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action__$1], null)], null);
}
});
/**
 * Loops over `actions`, and expands each action to a list of actions with
 *   available implementations in `nexus`. Passes `state` to each implementation.
 *   Calls every available `:before-action` interceptor before expanding and every
 *   `:after-action` interceptor after. Returns a map of `{:effects :errors}`.
 */
nexus.core.expand_actions = (function nexus$core$expand_actions(var_args){
var args__5755__auto__ = [];
var len__5749__auto___28920 = arguments.length;
var i__5750__auto___28922 = (0);
while(true){
if((i__5750__auto___28922 < len__5749__auto___28920)){
args__5755__auto__.push((arguments[i__5750__auto___28922]));

var G__28923 = (i__5750__auto___28922 + (1));
i__5750__auto___28922 = G__28923;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return nexus.core.expand_actions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(nexus.core.expand_actions.cljs$core$IFn$_invoke$arity$variadic = (function (nexus__$1,state,actions,p__28891){
var vec__28892 = p__28891;
var dispatch_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28892,(0),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,action){
var map__28895 = nexus.core.expand_action(nexus__$1,state,action,res);
var map__28895__$1 = cljs.core.__destructure_map(map__28895);
var actions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28895__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28895__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var G__28896 = res;
var G__28896__$1 = ((cljs.core.seq(actions__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__28896,new cljs.core.Keyword(null,"effects","effects",-282369292),nexus.core.intov,actions__$1):G__28896);
if(cljs.core.seq(errors)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28896__$1,new cljs.core.Keyword(null,"errors","errors",-908790718),errors);
} else {
return G__28896__$1;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-data","dispatch-data",658842324),dispatch_data], null),actions);
}));

(nexus.core.expand_actions.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(nexus.core.expand_actions.cljs$lang$applyTo = (function (seq28887){
var G__28888 = cljs.core.first(seq28887);
var seq28887__$1 = cljs.core.next(seq28887);
var G__28889 = cljs.core.first(seq28887__$1);
var seq28887__$2 = cljs.core.next(seq28887__$1);
var G__28890 = cljs.core.first(seq28887__$2);
var seq28887__$3 = cljs.core.next(seq28887__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28888,G__28889,G__28890,seq28887__$3);
}));

/**
 * Walks `actions`, and replaces any forms matching a registered placeholder with
 *   the value of calling the corresponding function with `dispatch-data`. Returns
 *   interpolated `actions`.
 */
nexus.core.interpolate = (function nexus$core$interpolate(nexus__$1,dispatch_data,actions){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28897_SHARP_){
return nexus.core.interpolate_1(nexus__$1,dispatch_data,p1__28897_SHARP_);
}),actions);
});
nexus.core.get_batched_effects = (function nexus$core$get_batched_effects(nexus__$1){
return cljs.core.set(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("nexus","batch","nexus/batch",-625048559),cljs.core.meta,cljs.core.val),new cljs.core.Keyword("nexus","effects","nexus/effects",-865511691).cljs$core$IFn$_invoke$arity$1(nexus__$1))));
});
nexus.core.wrap_batched_effect_handler = (function nexus$core$wrap_batched_effect_handler(f,ctx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"res","res",-1395007879),(function (){var G__28898 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"stack","stack",-793405930)], 0));
var G__28899 = new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(ctx);
var G__28900 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.next,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(ctx));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28898,G__28899,G__28900) : f.call(null,G__28898,G__28899,G__28900));
})());
});
nexus.core.wrap_effect_handler = (function nexus$core$wrap_effect_handler(f,ctx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"res","res",-1395007879),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"effect","effect",347343289),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"stack","stack",-793405930)], 0)),new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.next(new cljs.core.Keyword(null,"effect","effect",347343289).cljs$core$IFn$_invoke$arity$1(ctx))));
});
nexus.core.execute_batch = (function nexus$core$execute_batch(acc,nexus__$1,ctx,effect_k,effects,k,wrap_handler){
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(nexus__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nexus","effects","nexus/effects",-865511691),effect_k], null));
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
var v = (function (){var G__28901 = effects;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"effect","effect",347343289))){
return cljs.core.first(G__28901);
} else {
return G__28901;
}
})();
var ret = nexus.core.run_interceptors(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,k,v),cljs.core.select_keys(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null))),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(new cljs.core.Keyword("nexus","interceptors","nexus/interceptors",-569564390).cljs$core$IFn$_invoke$arity$1(nexus__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execute-effect","execute-effect",440233016),new cljs.core.Keyword(null,"before-effect","before-effect",-1455186134),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(wrap_handler,f)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"before-effect","before-effect",-1455186134),new cljs.core.Keyword(null,"after-effect","after-effect",933600904),new cljs.core.Keyword(null,"effect","effect",347343289)], null));
var G__28902 = acc;
var G__28902__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"res","res",-1395007879).cljs$core$IFn$_invoke$arity$1(ret))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__28902,new cljs.core.Keyword(null,"results","results",-1134170113),nexus.core.conjv,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),cljs.core.select_keys(ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"res","res",-1395007879)], null)))):G__28902);
if(cljs.core.truth_(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(ret))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28902__$1,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(ret));
} else {
return G__28902__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"errors","errors",-908790718),nexus.core.conjv,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execute-effect","execute-effect",440233016),new cljs.core.Keyword(null,"effect-k","effect-k",137284057),effect_k,new cljs.core.Keyword(null,"err","err",-2089457205),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No such effect",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"available-effects","available-effects",2081495292),cljs.core.keys(new cljs.core.Keyword("nexus","effects","nexus/effects",-865511691).cljs$core$IFn$_invoke$arity$1(nexus__$1))], null))], null));
}
});
/**
 * Execute `effects` one by one. Calls every `:before-effect` interceptor before
 *   executing the action, and every `:after-effect` interceptor after. Returns a
 *   collection of maps of `{:action :res}` where `:res` is the return value of the
 *   effect implementation.
 */
nexus.core.execute = (function nexus$core$execute(nexus__$1,ctx,effects){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__28905){
var vec__28906 = p__28905;
var effect_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28906,(0),null);
var effects__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28906,(1),null);
if(cljs.core.truth_(effect_k)){
return nexus.core.execute_batch(acc,nexus__$1,ctx,effect_k,effects__$1,new cljs.core.Keyword(null,"effects","effects",-282369292),nexus.core.wrap_batched_effect_handler);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28903_SHARP_,p2__28904_SHARP_){
return nexus.core.execute_batch(p1__28903_SHARP_,nexus__$1,ctx,cljs.core.first(p2__28904_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__28904_SHARP_], null),new cljs.core.Keyword(null,"effect","effect",347343289),nexus.core.wrap_effect_handler);
}),acc,effects__$1);
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nexus.core.get_batched_effects(nexus__$1),cljs.core.first),effects));
});
nexus.core.dispatch = (function nexus$core$dispatch(nexus__$1,system,dispatch_data,actions){
if(cljs.core.truth_(new cljs.core.Keyword("nexus","actions","nexus/actions",-707386605).cljs$core$IFn$_invoke$arity$1(nexus__$1))){
if(cljs.core.ifn_QMARK_(new cljs.core.Keyword("nexus","system->state","nexus/system->state",-142405750).cljs$core$IFn$_invoke$arity$1(nexus__$1))){
} else {
throw (new Error(["Assert failed: ",":nexus/system->state must be a function","\n","(ifn? (:nexus/system->state nexus))"].join('')));
}
} else {
}

var dispatch_BANG_ = (function() { 
var nexus$core$dispatch_$_dispatch_BANG___delegate = function (actions__$1,p__28909){
var vec__28910 = p__28909;
var disp_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28910,(0),null);
var handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"action-dispatch","action-dispatch",-1732769405),new cljs.core.Keyword(null,"before-dispatch","before-dispatch",395669799),(function (ctx){
var map__28913 = nexus.core.expand_actions.cljs$core$IFn$_invoke$arity$variadic(nexus__$1,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dispatch-data","dispatch-data",658842324).cljs$core$IFn$_invoke$arity$1(ctx)], 0));
var map__28913__$1 = cljs.core.__destructure_map(map__28913);
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28913__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28913__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var G__28914 = ctx;
var G__28914__$1 = (cljs.core.truth_(errors)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28914,new cljs.core.Keyword(null,"errors","errors",-908790718),errors):G__28914);
if(cljs.core.truth_(effects)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__28914__$1,nexus.core.execute(nexus__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"actions","actions",-812656882)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),nexus$core$dispatch_$_dispatch_BANG_),(function (){var G__28915 = effects;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(actions__$1,effects)){
return nexus.core.interpolate(nexus__$1,new cljs.core.Keyword(null,"dispatch-data","dispatch-data",658842324).cljs$core$IFn$_invoke$arity$1(ctx),G__28915);
} else {
return G__28915;
}
})()));
} else {
return G__28914__$1;
}
})], null);
return nexus.core.run_interceptors(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"system","system",-29381724),system,new cljs.core.Keyword(null,"state","state",-1988618099),(function (){var temp__5825__auto__ = new cljs.core.Keyword("nexus","system->state","nexus/system->state",-142405750).cljs$core$IFn$_invoke$arity$1(nexus__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var system__GT_state = temp__5825__auto__;
return (system__GT_state.cljs$core$IFn$_invoke$arity$1 ? system__GT_state.cljs$core$IFn$_invoke$arity$1(system) : system__GT_state.call(null,system));
} else {
return null;
}
})(),new cljs.core.Keyword(null,"dispatch-data","dispatch-data",658842324),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dispatch_data,disp_data], 0)),new cljs.core.Keyword(null,"actions","actions",-812656882),actions__$1], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(new cljs.core.Keyword("nexus","interceptors","nexus/interceptors",-569564390).cljs$core$IFn$_invoke$arity$1(nexus__$1)),handler),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"before-dispatch","before-dispatch",395669799),new cljs.core.Keyword(null,"after-dispatch","after-dispatch",183497585)], null));
};
var nexus$core$dispatch_$_dispatch_BANG_ = function (actions__$1,var_args){
var p__28909 = null;
if (arguments.length > 1) {
var G__28930__i = 0, G__28930__a = new Array(arguments.length -  1);
while (G__28930__i < G__28930__a.length) {G__28930__a[G__28930__i] = arguments[G__28930__i + 1]; ++G__28930__i;}
  p__28909 = new cljs.core.IndexedSeq(G__28930__a,0,null);
} 
return nexus$core$dispatch_$_dispatch_BANG___delegate.call(this,actions__$1,p__28909);};
nexus$core$dispatch_$_dispatch_BANG_.cljs$lang$maxFixedArity = 1;
nexus$core$dispatch_$_dispatch_BANG_.cljs$lang$applyTo = (function (arglist__28931){
var actions__$1 = cljs.core.first(arglist__28931);
var p__28909 = cljs.core.rest(arglist__28931);
return nexus$core$dispatch_$_dispatch_BANG___delegate(actions__$1,p__28909);
});
nexus$core$dispatch_$_dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = nexus$core$dispatch_$_dispatch_BANG___delegate;
return nexus$core$dispatch_$_dispatch_BANG_;
})()
;
return cljs.core.select_keys(dispatch_BANG_(actions),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"errors","errors",-908790718)], null));
});

//# sourceMappingURL=nexus.core.js.map
