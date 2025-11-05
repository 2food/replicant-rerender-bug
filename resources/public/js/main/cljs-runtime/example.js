goog.provide('example');
example.alert = (function example$alert(p__30349){
var map__30350 = p__30349;
var map__30350__$1 = cljs.core.__destructure_map(map__30350);
var alert__$1 = map__30350__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30350__$1,new cljs.core.Keyword(null,"content","content",15833224));
var remove = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30350__$1,new cljs.core.Keyword(null,"remove","remove",-131428414));
if(cljs.core.truth_(alert__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("replicant","key","replicant/key",-670108117),"alert",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),"5rem",new cljs.core.Keyword(null,"right","right",-452581833),"5%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"45%",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"45%",new cljs.core.Keyword(null,"transition","transition",765692007),"opacity 0.5s ease-out, transform 0.3s ease-out"], null),new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(100%)"], null)], null),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(100%)"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),remove], null)], null),"Remove"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),content], null)], null)], null);
} else {
return null;
}
});
example.page = (function example$page(store){
var data = cljs.core.deref(store);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),example.alert(new cljs.core.Keyword(null,"alert","alert",-571950580).cljs$core$IFn$_invoke$arity$1(data)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),text," "], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list","of","things"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","assoc-in","state/assoc-in",-1779984903),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert","alert",-571950580)], null),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","assoc-in","state/assoc-in",-1779984903),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert","alert",-571950580)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),"Alert!",new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","assoc-in","state/assoc-in",-1779984903),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert","alert",-571950580)], null),null], null)], null)], null)], null)], null)], null)], null),"Click me"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null)], null);
});
example.store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
example.render = (function example$render(){
return replicant.dom.render(document.getElementById("app"),example.page(example.store));
});
nexus.registry.register_system__GT_state_BANG_((function (store){
return cljs.core.deref(store);
}));
nexus.registry.register_interceptor_BANG_.cljs$core$IFn$_invoke$arity$1(nexus.strategies.fail_fast);
example.exception_logger = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"exception-logger","exception-logger",-368208010),new cljs.core.Keyword(null,"after-effect","after-effect",933600904),(function (p__30351){
var map__30352 = p__30351;
var map__30352__$1 = cljs.core.__destructure_map(map__30352);
var ctx = map__30352__$1;
var effect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30352__$1,new cljs.core.Keyword(null,"effect","effect",347343289));
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30352__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
if(cljs.core.seq(errors)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\u26A0\uFE0F  Errors while handling",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([effect], 0)),":"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(errors);
} else {
}

return ctx;
})], null);
nexus.registry.register_interceptor_BANG_.cljs$core$IFn$_invoke$arity$1(example.exception_logger);
nexus.registry.register_effect_BANG_(new cljs.core.Keyword("state","assoc-in","state/assoc-in",-1779984903),(function (_,store,path,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(store,cljs.core.assoc_in,path,val);
}));
example.init_BANG_ = (function example$init_BANG_(store){
replicant.dom.set_dispatch_BANG_((function (p1__30353_SHARP_,p2__30354_SHARP_){
return nexus.registry.dispatch(store,p1__30353_SHARP_,p2__30354_SHARP_);
}));

cljs.core.add_watch(store,new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return example.render();
}));

return example.render();
});
example.init_BANG_(example.store);

//# sourceMappingURL=example.js.map
