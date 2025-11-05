goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34637){
var map__34638 = p__34637;
var map__34638__$1 = cljs.core.__destructure_map(map__34638);
var m = map__34638__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34638__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34638__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34650_34960 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34651_34961 = null;
var count__34652_34962 = (0);
var i__34653_34963 = (0);
while(true){
if((i__34653_34963 < count__34652_34962)){
var f_34966 = chunk__34651_34961.cljs$core$IIndexed$_nth$arity$2(null,i__34653_34963);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34966], 0));


var G__34967 = seq__34650_34960;
var G__34968 = chunk__34651_34961;
var G__34969 = count__34652_34962;
var G__34970 = (i__34653_34963 + (1));
seq__34650_34960 = G__34967;
chunk__34651_34961 = G__34968;
count__34652_34962 = G__34969;
i__34653_34963 = G__34970;
continue;
} else {
var temp__5825__auto___34972 = cljs.core.seq(seq__34650_34960);
if(temp__5825__auto___34972){
var seq__34650_34973__$1 = temp__5825__auto___34972;
if(cljs.core.chunked_seq_QMARK_(seq__34650_34973__$1)){
var c__5548__auto___34974 = cljs.core.chunk_first(seq__34650_34973__$1);
var G__34975 = cljs.core.chunk_rest(seq__34650_34973__$1);
var G__34976 = c__5548__auto___34974;
var G__34977 = cljs.core.count(c__5548__auto___34974);
var G__34978 = (0);
seq__34650_34960 = G__34975;
chunk__34651_34961 = G__34976;
count__34652_34962 = G__34977;
i__34653_34963 = G__34978;
continue;
} else {
var f_34980 = cljs.core.first(seq__34650_34973__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34980], 0));


var G__34981 = cljs.core.next(seq__34650_34973__$1);
var G__34982 = null;
var G__34983 = (0);
var G__34984 = (0);
seq__34650_34960 = G__34981;
chunk__34651_34961 = G__34982;
count__34652_34962 = G__34983;
i__34653_34963 = G__34984;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34985 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34985], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34985)))?cljs.core.second(arglists_34985):arglists_34985)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34696_34995 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34697_34996 = null;
var count__34698_34997 = (0);
var i__34699_34998 = (0);
while(true){
if((i__34699_34998 < count__34698_34997)){
var vec__34720_35003 = chunk__34697_34996.cljs$core$IIndexed$_nth$arity$2(null,i__34699_34998);
var name_35004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34720_35003,(0),null);
var map__34723_35005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34720_35003,(1),null);
var map__34723_35006__$1 = cljs.core.__destructure_map(map__34723_35005);
var doc_35007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34723_35006__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34723_35006__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35004], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35008], 0));

if(cljs.core.truth_(doc_35007)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35007], 0));
} else {
}


var G__35012 = seq__34696_34995;
var G__35013 = chunk__34697_34996;
var G__35014 = count__34698_34997;
var G__35015 = (i__34699_34998 + (1));
seq__34696_34995 = G__35012;
chunk__34697_34996 = G__35013;
count__34698_34997 = G__35014;
i__34699_34998 = G__35015;
continue;
} else {
var temp__5825__auto___35020 = cljs.core.seq(seq__34696_34995);
if(temp__5825__auto___35020){
var seq__34696_35021__$1 = temp__5825__auto___35020;
if(cljs.core.chunked_seq_QMARK_(seq__34696_35021__$1)){
var c__5548__auto___35023 = cljs.core.chunk_first(seq__34696_35021__$1);
var G__35024 = cljs.core.chunk_rest(seq__34696_35021__$1);
var G__35025 = c__5548__auto___35023;
var G__35026 = cljs.core.count(c__5548__auto___35023);
var G__35027 = (0);
seq__34696_34995 = G__35024;
chunk__34697_34996 = G__35025;
count__34698_34997 = G__35026;
i__34699_34998 = G__35027;
continue;
} else {
var vec__34725_35028 = cljs.core.first(seq__34696_35021__$1);
var name_35029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35028,(0),null);
var map__34728_35030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35028,(1),null);
var map__34728_35031__$1 = cljs.core.__destructure_map(map__34728_35030);
var doc_35032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728_35031__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728_35031__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35029], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35033], 0));

if(cljs.core.truth_(doc_35032)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35032], 0));
} else {
}


var G__35036 = cljs.core.next(seq__34696_35021__$1);
var G__35037 = null;
var G__35038 = (0);
var G__35039 = (0);
seq__34696_34995 = G__35036;
chunk__34697_34996 = G__35037;
count__34698_34997 = G__35038;
i__34699_34998 = G__35039;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34730 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34731 = null;
var count__34732 = (0);
var i__34733 = (0);
while(true){
if((i__34733 < count__34732)){
var role = chunk__34731.cljs$core$IIndexed$_nth$arity$2(null,i__34733);
var temp__5825__auto___35042__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___35042__$1)){
var spec_35043 = temp__5825__auto___35042__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35043)], 0));
} else {
}


var G__35045 = seq__34730;
var G__35046 = chunk__34731;
var G__35047 = count__34732;
var G__35048 = (i__34733 + (1));
seq__34730 = G__35045;
chunk__34731 = G__35046;
count__34732 = G__35047;
i__34733 = G__35048;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__34730);
if(temp__5825__auto____$1){
var seq__34730__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34730__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__34730__$1);
var G__35051 = cljs.core.chunk_rest(seq__34730__$1);
var G__35052 = c__5548__auto__;
var G__35053 = cljs.core.count(c__5548__auto__);
var G__35054 = (0);
seq__34730 = G__35051;
chunk__34731 = G__35052;
count__34732 = G__35053;
i__34733 = G__35054;
continue;
} else {
var role = cljs.core.first(seq__34730__$1);
var temp__5825__auto___35056__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___35056__$2)){
var spec_35057 = temp__5825__auto___35056__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35057)], 0));
} else {
}


var G__35058 = cljs.core.next(seq__34730__$1);
var G__35059 = null;
var G__35060 = (0);
var G__35061 = (0);
seq__34730 = G__35058;
chunk__34731 = G__35059;
count__34732 = G__35060;
i__34733 = G__35061;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34774 = datafied_throwable;
var map__34774__$1 = cljs.core.__destructure_map(map__34774);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34774__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34774__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34774__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34775 = cljs.core.last(via);
var map__34775__$1 = cljs.core.__destructure_map(map__34775);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34775__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34775__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34775__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34776 = data;
var map__34776__$1 = cljs.core.__destructure_map(map__34776);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34776__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34776__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34776__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34777 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34777__$1 = cljs.core.__destructure_map(map__34777);
var top_data = map__34777__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34777__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34784 = phase;
var G__34784__$1 = (((G__34784 instanceof cljs.core.Keyword))?G__34784.fqn:null);
switch (G__34784__$1) {
case "read-source":
var map__34788 = data;
var map__34788__$1 = cljs.core.__destructure_map(map__34788);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34788__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34788__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34792 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34792__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34792,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34792);
var G__34792__$2 = (cljs.core.truth_((function (){var fexpr__34796 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34796.cljs$core$IFn$_invoke$arity$1 ? fexpr__34796.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34796.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34792__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34792__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34792__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34792__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34804 = top_data;
var G__34804__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34804,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34804);
var G__34804__$2 = (cljs.core.truth_((function (){var fexpr__34806 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34806.cljs$core$IFn$_invoke$arity$1 ? fexpr__34806.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34806.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34804__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34804__$1);
var G__34804__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34804__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34804__$2);
var G__34804__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34804__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34804__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34804__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34804__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34811 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34811,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34811,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34811,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34811,(3),null);
var G__34816 = top_data;
var G__34816__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34816,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34816);
var G__34816__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34816__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34816__$1);
var G__34816__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34816__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34816__$2);
var G__34816__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34816__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34816__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34816__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34816__$4;
}

break;
case "execution":
var vec__34818 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34818,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34818,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34818,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34818,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34766_SHARP_){
var or__5025__auto__ = (p1__34766_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__34823 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34823.cljs$core$IFn$_invoke$arity$1 ? fexpr__34823.cljs$core$IFn$_invoke$arity$1(p1__34766_SHARP_) : fexpr__34823.call(null,p1__34766_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__34826 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34826__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34826,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34826);
var G__34826__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34826__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34826__$1);
var G__34826__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34826__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34826__$2);
var G__34826__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34826__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34826__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34826__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34826__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34784__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34852){
var map__34854 = p__34852;
var map__34854__$1 = cljs.core.__destructure_map(map__34854);
var triage_data = map__34854__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34854__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34854__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34854__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34854__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34854__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34854__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34854__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34854__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = source;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = line;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34867 = phase;
var G__34867__$1 = (((G__34867 instanceof cljs.core.Keyword))?G__34867.fqn:null);
switch (G__34867__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34875 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34876 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34877 = loc;
var G__34878 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34885_35122 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34886_35123 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34887_35124 = true;
var _STAR_print_fn_STAR__temp_val__34888_35125 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34887_35124);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34888_35125);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34849_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34849_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34886_35123);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34885_35122);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34875,G__34876,G__34877,G__34878) : format.call(null,G__34875,G__34876,G__34877,G__34878));

break;
case "macroexpansion":
var G__34896 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34897 = cause_type;
var G__34898 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34899 = loc;
var G__34900 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34896,G__34897,G__34898,G__34899,G__34900) : format.call(null,G__34896,G__34897,G__34898,G__34899,G__34900));

break;
case "compile-syntax-check":
var G__34906 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34907 = cause_type;
var G__34908 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34909 = loc;
var G__34910 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34906,G__34907,G__34908,G__34909,G__34910) : format.call(null,G__34906,G__34907,G__34908,G__34909,G__34910));

break;
case "compilation":
var G__34912 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34913 = cause_type;
var G__34914 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34915 = loc;
var G__34916 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34912,G__34913,G__34914,G__34915,G__34916) : format.call(null,G__34912,G__34913,G__34914,G__34915,G__34916));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34919 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34920 = symbol;
var G__34921 = loc;
var G__34922 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34923_35136 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34924_35137 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34925_35138 = true;
var _STAR_print_fn_STAR__temp_val__34926_35139 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34925_35138);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34926_35139);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34851_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34851_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34924_35137);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34923_35136);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34919,G__34920,G__34921,G__34922) : format.call(null,G__34919,G__34920,G__34921,G__34922));
} else {
var G__34933 = "Execution error%s at %s(%s).\n%s\n";
var G__34934 = cause_type;
var G__34935 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34936 = loc;
var G__34937 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34933,G__34934,G__34935,G__34936,G__34937) : format.call(null,G__34933,G__34934,G__34935,G__34936,G__34937));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34867__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
