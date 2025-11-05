goog.provide('nexus.strategies');
nexus.strategies.abort_on_first_error = (function nexus$strategies$abort_on_first_error(k,ctx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(ctx))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"effect","effect",347343289),new cljs.core.Keyword(null,"effects","effects",-282369292)], 0));
} else {
return ctx;
}
});
nexus.strategies.fail_fast = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"after-action","after-action",-22240574),(function (p1__28932_SHARP_){
return nexus.strategies.abort_on_first_error(new cljs.core.Keyword(null,"after-action","after-action",-22240574),p1__28932_SHARP_);
}),new cljs.core.Keyword(null,"before-effect","before-effect",-1455186134),(function (p1__28933_SHARP_){
return nexus.strategies.abort_on_first_error(new cljs.core.Keyword(null,"before-effect","before-effect",-1455186134),p1__28933_SHARP_);
})], null);

//# sourceMappingURL=nexus.strategies.js.map
