goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30292 = (function (f,blockable,meta30293){
this.f = f;
this.blockable = blockable;
this.meta30293 = meta30293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30294,meta30293__$1){
var self__ = this;
var _30294__$1 = this;
return (new cljs.core.async.t_cljs$core$async30292(self__.f,self__.blockable,meta30293__$1));
}));

(cljs.core.async.t_cljs$core$async30292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30294){
var self__ = this;
var _30294__$1 = this;
return self__.meta30293;
}));

(cljs.core.async.t_cljs$core$async30292.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30292.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30293","meta30293",-1694945066,null)], null);
}));

(cljs.core.async.t_cljs$core$async30292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30292");

(cljs.core.async.t_cljs$core$async30292.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async30292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30292.
 */
cljs.core.async.__GT_t_cljs$core$async30292 = (function cljs$core$async$__GT_t_cljs$core$async30292(f,blockable,meta30293){
return (new cljs.core.async.t_cljs$core$async30292(f,blockable,meta30293));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30290 = arguments.length;
switch (G__30290) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async30292(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30324 = arguments.length;
switch (G__30324) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30341 = arguments.length;
switch (G__30341) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30355 = arguments.length;
switch (G__30355) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34082 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34082) : fn1.call(null,val_34082));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34082) : fn1.call(null,val_34082));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30386 = arguments.length;
switch (G__30386) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___34089 = n;
var x_34090 = (0);
while(true){
if((x_34090 < n__5616__auto___34089)){
(a[x_34090] = x_34090);

var G__34091 = (x_34090 + (1));
x_34090 = G__34091;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30425 = (function (flag,meta30426){
this.flag = flag;
this.meta30426 = meta30426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30427,meta30426__$1){
var self__ = this;
var _30427__$1 = this;
return (new cljs.core.async.t_cljs$core$async30425(self__.flag,meta30426__$1));
}));

(cljs.core.async.t_cljs$core$async30425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30427){
var self__ = this;
var _30427__$1 = this;
return self__.meta30426;
}));

(cljs.core.async.t_cljs$core$async30425.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30426","meta30426",-724427432,null)], null);
}));

(cljs.core.async.t_cljs$core$async30425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30425");

(cljs.core.async.t_cljs$core$async30425.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async30425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30425.
 */
cljs.core.async.__GT_t_cljs$core$async30425 = (function cljs$core$async$__GT_t_cljs$core$async30425(flag,meta30426){
return (new cljs.core.async.t_cljs$core$async30425(flag,meta30426));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async30425(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30463 = (function (flag,cb,meta30464){
this.flag = flag;
this.cb = cb;
this.meta30464 = meta30464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30465,meta30464__$1){
var self__ = this;
var _30465__$1 = this;
return (new cljs.core.async.t_cljs$core$async30463(self__.flag,self__.cb,meta30464__$1));
}));

(cljs.core.async.t_cljs$core$async30463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30465){
var self__ = this;
var _30465__$1 = this;
return self__.meta30464;
}));

(cljs.core.async.t_cljs$core$async30463.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30463.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30464","meta30464",-435105358,null)], null);
}));

(cljs.core.async.t_cljs$core$async30463.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30463");

(cljs.core.async.t_cljs$core$async30463.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async30463");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30463.
 */
cljs.core.async.__GT_t_cljs$core$async30463 = (function cljs$core$async$__GT_t_cljs$core$async30463(flag,cb,meta30464){
return (new cljs.core.async.t_cljs$core$async30463(flag,cb,meta30464));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async30463(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_34104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34104)){
if((!(((port_34104.cljs$core$IFn$_invoke$arity$1 ? port_34104.cljs$core$IFn$_invoke$arity$1((1)) : port_34104.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34108 = (i + (1));
i = G__34108;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__30489_SHARP_){
var G__30511 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30489_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30511) : fret.call(null,G__30511));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__30491_SHARP_){
var G__30512 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30491_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30512) : fret.call(null,G__30512));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34115 = (i + (1));
i = G__34115;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34116 = arguments.length;
var i__5750__auto___34117 = (0);
while(true){
if((i__5750__auto___34117 < len__5749__auto___34116)){
args__5755__auto__.push((arguments[i__5750__auto___34117]));

var G__34119 = (i__5750__auto___34117 + (1));
i__5750__auto___34117 = G__34119;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30521){
var map__30522 = p__30521;
var map__30522__$1 = cljs.core.__destructure_map(map__30522);
var opts = map__30522__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30518){
var G__30519 = cljs.core.first(seq30518);
var seq30518__$1 = cljs.core.next(seq30518);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30519,seq30518__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30539 = arguments.length;
switch (G__30539) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30138__auto___34126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_30679){
var state_val_30683 = (state_30679[(1)]);
if((state_val_30683 === (7))){
var inst_30670 = (state_30679[(2)]);
var state_30679__$1 = state_30679;
var statearr_30692_34131 = state_30679__$1;
(statearr_30692_34131[(2)] = inst_30670);

(statearr_30692_34131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (1))){
var state_30679__$1 = state_30679;
var statearr_30699_34132 = state_30679__$1;
(statearr_30699_34132[(2)] = null);

(statearr_30699_34132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (4))){
var inst_30610 = (state_30679[(7)]);
var inst_30610__$1 = (state_30679[(2)]);
var inst_30620 = (inst_30610__$1 == null);
var state_30679__$1 = (function (){var statearr_30715 = state_30679;
(statearr_30715[(7)] = inst_30610__$1);

return statearr_30715;
})();
if(cljs.core.truth_(inst_30620)){
var statearr_30719_34134 = state_30679__$1;
(statearr_30719_34134[(1)] = (5));

} else {
var statearr_30726_34135 = state_30679__$1;
(statearr_30726_34135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (13))){
var state_30679__$1 = state_30679;
var statearr_30752_34136 = state_30679__$1;
(statearr_30752_34136[(2)] = null);

(statearr_30752_34136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (6))){
var inst_30610 = (state_30679[(7)]);
var state_30679__$1 = state_30679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30679__$1,(11),to,inst_30610);
} else {
if((state_val_30683 === (3))){
var inst_30672 = (state_30679[(2)]);
var state_30679__$1 = state_30679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30679__$1,inst_30672);
} else {
if((state_val_30683 === (12))){
var state_30679__$1 = state_30679;
var statearr_30789_34138 = state_30679__$1;
(statearr_30789_34138[(2)] = null);

(statearr_30789_34138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (2))){
var state_30679__$1 = state_30679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30679__$1,(4),from);
} else {
if((state_val_30683 === (11))){
var inst_30654 = (state_30679[(2)]);
var state_30679__$1 = state_30679;
if(cljs.core.truth_(inst_30654)){
var statearr_30790_34140 = state_30679__$1;
(statearr_30790_34140[(1)] = (12));

} else {
var statearr_30793_34141 = state_30679__$1;
(statearr_30793_34141[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (9))){
var state_30679__$1 = state_30679;
var statearr_30794_34142 = state_30679__$1;
(statearr_30794_34142[(2)] = null);

(statearr_30794_34142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (5))){
var state_30679__$1 = state_30679;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30799_34143 = state_30679__$1;
(statearr_30799_34143[(1)] = (8));

} else {
var statearr_30800_34144 = state_30679__$1;
(statearr_30800_34144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (14))){
var inst_30668 = (state_30679[(2)]);
var state_30679__$1 = state_30679;
var statearr_30809_34145 = state_30679__$1;
(statearr_30809_34145[(2)] = inst_30668);

(statearr_30809_34145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (10))){
var inst_30650 = (state_30679[(2)]);
var state_30679__$1 = state_30679;
var statearr_30811_34146 = state_30679__$1;
(statearr_30811_34146[(2)] = inst_30650);

(statearr_30811_34146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (8))){
var inst_30637 = cljs.core.async.close_BANG_(to);
var state_30679__$1 = state_30679;
var statearr_30813_34147 = state_30679__$1;
(statearr_30813_34147[(2)] = inst_30637);

(statearr_30813_34147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29032__auto__ = null;
var cljs$core$async$state_machine__29032__auto____0 = (function (){
var statearr_30816 = [null,null,null,null,null,null,null,null];
(statearr_30816[(0)] = cljs$core$async$state_machine__29032__auto__);

(statearr_30816[(1)] = (1));

return statearr_30816;
});
var cljs$core$async$state_machine__29032__auto____1 = (function (state_30679){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_30679);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e30818){var ex__29035__auto__ = e30818;
var statearr_30820_34152 = state_30679;
(statearr_30820_34152[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_30679[(4)]))){
var statearr_30821_34153 = state_30679;
(statearr_30821_34153[(1)] = cljs.core.first((state_30679[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34154 = state_30679;
state_30679 = G__34154;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$state_machine__29032__auto__ = function(state_30679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29032__auto____1.call(this,state_30679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29032__auto____0;
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29032__auto____1;
return cljs$core$async$state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_30826 = f__30139__auto__();
(statearr_30826[(6)] = c__30138__auto___34126);

return statearr_30826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__30837){
var vec__30838 = p__30837;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30838,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30838,(1),null);
var job = vec__30838;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30138__auto___34155 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_30850){
var state_val_30851 = (state_30850[(1)]);
if((state_val_30851 === (1))){
var state_30850__$1 = state_30850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30850__$1,(2),res,v);
} else {
if((state_val_30851 === (2))){
var inst_30847 = (state_30850[(2)]);
var inst_30848 = cljs.core.async.close_BANG_(res);
var state_30850__$1 = (function (){var statearr_30880 = state_30850;
(statearr_30880[(7)] = inst_30847);

return statearr_30880;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30850__$1,inst_30848);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____0 = (function (){
var statearr_30885 = [null,null,null,null,null,null,null,null];
(statearr_30885[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__);

(statearr_30885[(1)] = (1));

return statearr_30885;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____1 = (function (state_30850){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_30850);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e30894){var ex__29035__auto__ = e30894;
var statearr_30895_34157 = state_30850;
(statearr_30895_34157[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_30850[(4)]))){
var statearr_30902_34158 = state_30850;
(statearr_30902_34158[(1)] = cljs.core.first((state_30850[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34163 = state_30850;
state_30850 = G__34163;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__ = function(state_30850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____1.call(this,state_30850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_30911 = f__30139__auto__();
(statearr_30911[(6)] = c__30138__auto___34155);

return statearr_30911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30916){
var vec__30917 = p__30916;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30917,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30917,(1),null);
var job = vec__30917;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5616__auto___34164 = n;
var __34165 = (0);
while(true){
if((__34165 < n__5616__auto___34164)){
var G__30921_34166 = type;
var G__30921_34167__$1 = (((G__30921_34166 instanceof cljs.core.Keyword))?G__30921_34166.fqn:null);
switch (G__30921_34167__$1) {
case "compute":
var c__30138__auto___34169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34165,c__30138__auto___34169,G__30921_34166,G__30921_34167__$1,n__5616__auto___34164,jobs,results,process__$1,async){
return (function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = ((function (__34165,c__30138__auto___34169,G__30921_34166,G__30921_34167__$1,n__5616__auto___34164,jobs,results,process__$1,async){
return (function (state_30952){
var state_val_30953 = (state_30952[(1)]);
if((state_val_30953 === (1))){
var state_30952__$1 = state_30952;
var statearr_30959_34171 = state_30952__$1;
(statearr_30959_34171[(2)] = null);

(statearr_30959_34171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (2))){
var state_30952__$1 = state_30952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30952__$1,(4),jobs);
} else {
if((state_val_30953 === (3))){
var inst_30946 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30952__$1,inst_30946);
} else {
if((state_val_30953 === (4))){
var inst_30929 = (state_30952[(2)]);
var inst_30934 = process__$1(inst_30929);
var state_30952__$1 = state_30952;
if(cljs.core.truth_(inst_30934)){
var statearr_30962_34173 = state_30952__$1;
(statearr_30962_34173[(1)] = (5));

} else {
var statearr_30963_34174 = state_30952__$1;
(statearr_30963_34174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (5))){
var state_30952__$1 = state_30952;
var statearr_30965_34175 = state_30952__$1;
(statearr_30965_34175[(2)] = null);

(statearr_30965_34175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (6))){
var state_30952__$1 = state_30952;
var statearr_30968_34176 = state_30952__$1;
(statearr_30968_34176[(2)] = null);

(statearr_30968_34176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (7))){
var inst_30944 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
var statearr_30969_34177 = state_30952__$1;
(statearr_30969_34177[(2)] = inst_30944);

(statearr_30969_34177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34165,c__30138__auto___34169,G__30921_34166,G__30921_34167__$1,n__5616__auto___34164,jobs,results,process__$1,async))
;
return ((function (__34165,switch__29031__auto__,c__30138__auto___34169,G__30921_34166,G__30921_34167__$1,n__5616__auto___34164,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____0 = (function (){
var statearr_30973 = [null,null,null,null,null,null,null];
(statearr_30973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__);

(statearr_30973[(1)] = (1));

return statearr_30973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____1 = (function (state_30952){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_30952);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e30974){var ex__29035__auto__ = e30974;
var statearr_30977_34178 = state_30952;
(statearr_30977_34178[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_30952[(4)]))){
var statearr_30979_34179 = state_30952;
(statearr_30979_34179[(1)] = cljs.core.first((state_30952[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34180 = state_30952;
state_30952 = G__34180;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__ = function(state_30952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____1.call(this,state_30952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__;
})()
;})(__34165,switch__29031__auto__,c__30138__auto___34169,G__30921_34166,G__30921_34167__$1,n__5616__auto___34164,jobs,results,process__$1,async))
})();
var state__30140__auto__ = (function (){var statearr_30984 = f__30139__auto__();
(statearr_30984[(6)] = c__30138__auto___34169);

return statearr_30984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
});})(__34165,c__30138__auto___34169,G__30921_34166,G__30921_34167__$1,n__5616__auto___34164,jobs,results,process__$1,async))
);


break;
case "async":
var c__30138__auto___34182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34165,c__30138__auto___34182,G__30921_34166,G__30921_34167__$1,n__5616__auto___34164,jobs,results,process__$1,async){
return (function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = ((function (__34165,c__30138__auto___34182,G__30921_34166,G__30921_34167__$1,n__5616__auto___34164,jobs,results,process__$1,async){
return (function (state_31002){
var state_val_31003 = (state_31002[(1)]);
if((state_val_31003 === (1))){
var state_31002__$1 = state_31002;
var statearr_31004_34185 = state_31002__$1;
(statearr_31004_34185[(2)] = null);

(statearr_31004_34185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (2))){
var state_31002__$1 = state_31002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31002__$1,(4),jobs);
} else {
if((state_val_31003 === (3))){
var inst_31000 = (state_31002[(2)]);
var state_31002__$1 = state_31002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31002__$1,inst_31000);
} else {
if((state_val_31003 === (4))){
var inst_30990 = (state_31002[(2)]);
var inst_30991 = async(inst_30990);
var state_31002__$1 = state_31002;
if(cljs.core.truth_(inst_30991)){
var statearr_31006_34190 = state_31002__$1;
(statearr_31006_34190[(1)] = (5));

} else {
var statearr_31008_34191 = state_31002__$1;
(statearr_31008_34191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (5))){
var state_31002__$1 = state_31002;
var statearr_31010_34192 = state_31002__$1;
(statearr_31010_34192[(2)] = null);

(statearr_31010_34192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (6))){
var state_31002__$1 = state_31002;
var statearr_31012_34193 = state_31002__$1;
(statearr_31012_34193[(2)] = null);

(statearr_31012_34193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (7))){
var inst_30998 = (state_31002[(2)]);
var state_31002__$1 = state_31002;
var statearr_31013_34195 = state_31002__$1;
(statearr_31013_34195[(2)] = inst_30998);

(statearr_31013_34195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34165,c__30138__auto___34182,G__30921_34166,G__30921_34167__$1,n__5616__auto___34164,jobs,results,process__$1,async))
;
return ((function (__34165,switch__29031__auto__,c__30138__auto___34182,G__30921_34166,G__30921_34167__$1,n__5616__auto___34164,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____0 = (function (){
var statearr_31014 = [null,null,null,null,null,null,null];
(statearr_31014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__);

(statearr_31014[(1)] = (1));

return statearr_31014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____1 = (function (state_31002){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_31002);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e31015){var ex__29035__auto__ = e31015;
var statearr_31016_34201 = state_31002;
(statearr_31016_34201[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_31002[(4)]))){
var statearr_31018_34202 = state_31002;
(statearr_31018_34202[(1)] = cljs.core.first((state_31002[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34203 = state_31002;
state_31002 = G__34203;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__ = function(state_31002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____1.call(this,state_31002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__;
})()
;})(__34165,switch__29031__auto__,c__30138__auto___34182,G__30921_34166,G__30921_34167__$1,n__5616__auto___34164,jobs,results,process__$1,async))
})();
var state__30140__auto__ = (function (){var statearr_31024 = f__30139__auto__();
(statearr_31024[(6)] = c__30138__auto___34182);

return statearr_31024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
});})(__34165,c__30138__auto___34182,G__30921_34166,G__30921_34167__$1,n__5616__auto___34164,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30921_34167__$1)].join('')));

}

var G__34204 = (__34165 + (1));
__34165 = G__34204;
continue;
} else {
}
break;
}

var c__30138__auto___34205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_31052){
var state_val_31053 = (state_31052[(1)]);
if((state_val_31053 === (7))){
var inst_31046 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31056_34207 = state_31052__$1;
(statearr_31056_34207[(2)] = inst_31046);

(statearr_31056_34207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (1))){
var state_31052__$1 = state_31052;
var statearr_31057_34208 = state_31052__$1;
(statearr_31057_34208[(2)] = null);

(statearr_31057_34208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (4))){
var inst_31029 = (state_31052[(7)]);
var inst_31029__$1 = (state_31052[(2)]);
var inst_31030 = (inst_31029__$1 == null);
var state_31052__$1 = (function (){var statearr_31062 = state_31052;
(statearr_31062[(7)] = inst_31029__$1);

return statearr_31062;
})();
if(cljs.core.truth_(inst_31030)){
var statearr_31065_34210 = state_31052__$1;
(statearr_31065_34210[(1)] = (5));

} else {
var statearr_31066_34214 = state_31052__$1;
(statearr_31066_34214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (6))){
var inst_31029 = (state_31052[(7)]);
var inst_31034 = (state_31052[(8)]);
var inst_31034__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31035 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31037 = [inst_31029,inst_31034__$1];
var inst_31038 = (new cljs.core.PersistentVector(null,2,(5),inst_31035,inst_31037,null));
var state_31052__$1 = (function (){var statearr_31072 = state_31052;
(statearr_31072[(8)] = inst_31034__$1);

return statearr_31072;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31052__$1,(8),jobs,inst_31038);
} else {
if((state_val_31053 === (3))){
var inst_31048 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31052__$1,inst_31048);
} else {
if((state_val_31053 === (2))){
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31052__$1,(4),from);
} else {
if((state_val_31053 === (9))){
var inst_31043 = (state_31052[(2)]);
var state_31052__$1 = (function (){var statearr_31073 = state_31052;
(statearr_31073[(9)] = inst_31043);

return statearr_31073;
})();
var statearr_31074_34220 = state_31052__$1;
(statearr_31074_34220[(2)] = null);

(statearr_31074_34220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (5))){
var inst_31032 = cljs.core.async.close_BANG_(jobs);
var state_31052__$1 = state_31052;
var statearr_31079_34221 = state_31052__$1;
(statearr_31079_34221[(2)] = inst_31032);

(statearr_31079_34221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (8))){
var inst_31034 = (state_31052[(8)]);
var inst_31040 = (state_31052[(2)]);
var state_31052__$1 = (function (){var statearr_31084 = state_31052;
(statearr_31084[(10)] = inst_31040);

return statearr_31084;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31052__$1,(9),results,inst_31034);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____0 = (function (){
var statearr_31094 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__);

(statearr_31094[(1)] = (1));

return statearr_31094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____1 = (function (state_31052){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_31052);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e31104){var ex__29035__auto__ = e31104;
var statearr_31105_34230 = state_31052;
(statearr_31105_34230[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_31052[(4)]))){
var statearr_31106_34232 = state_31052;
(statearr_31106_34232[(1)] = cljs.core.first((state_31052[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34233 = state_31052;
state_31052 = G__34233;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__ = function(state_31052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____1.call(this,state_31052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_31112 = f__30139__auto__();
(statearr_31112[(6)] = c__30138__auto___34205);

return statearr_31112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));


var c__30138__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_31197){
var state_val_31198 = (state_31197[(1)]);
if((state_val_31198 === (7))){
var inst_31189 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
var statearr_31223_34241 = state_31197__$1;
(statearr_31223_34241[(2)] = inst_31189);

(statearr_31223_34241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (20))){
var state_31197__$1 = state_31197;
var statearr_31229_34242 = state_31197__$1;
(statearr_31229_34242[(2)] = null);

(statearr_31229_34242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (1))){
var state_31197__$1 = state_31197;
var statearr_31236_34244 = state_31197__$1;
(statearr_31236_34244[(2)] = null);

(statearr_31236_34244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (4))){
var inst_31123 = (state_31197[(7)]);
var inst_31123__$1 = (state_31197[(2)]);
var inst_31125 = (inst_31123__$1 == null);
var state_31197__$1 = (function (){var statearr_31249 = state_31197;
(statearr_31249[(7)] = inst_31123__$1);

return statearr_31249;
})();
if(cljs.core.truth_(inst_31125)){
var statearr_31254_34245 = state_31197__$1;
(statearr_31254_34245[(1)] = (5));

} else {
var statearr_31260_34246 = state_31197__$1;
(statearr_31260_34246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (15))){
var inst_31152 = (state_31197[(8)]);
var state_31197__$1 = state_31197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31197__$1,(18),to,inst_31152);
} else {
if((state_val_31198 === (21))){
var inst_31180 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
var statearr_31271_34247 = state_31197__$1;
(statearr_31271_34247[(2)] = inst_31180);

(statearr_31271_34247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (13))){
var inst_31182 = (state_31197[(2)]);
var state_31197__$1 = (function (){var statearr_31272 = state_31197;
(statearr_31272[(9)] = inst_31182);

return statearr_31272;
})();
var statearr_31273_34248 = state_31197__$1;
(statearr_31273_34248[(2)] = null);

(statearr_31273_34248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (6))){
var inst_31123 = (state_31197[(7)]);
var state_31197__$1 = state_31197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31197__$1,(11),inst_31123);
} else {
if((state_val_31198 === (17))){
var inst_31171 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
if(cljs.core.truth_(inst_31171)){
var statearr_31277_34249 = state_31197__$1;
(statearr_31277_34249[(1)] = (19));

} else {
var statearr_31278_34250 = state_31197__$1;
(statearr_31278_34250[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (3))){
var inst_31191 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31197__$1,inst_31191);
} else {
if((state_val_31198 === (12))){
var inst_31144 = (state_31197[(10)]);
var state_31197__$1 = state_31197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31197__$1,(14),inst_31144);
} else {
if((state_val_31198 === (2))){
var state_31197__$1 = state_31197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31197__$1,(4),results);
} else {
if((state_val_31198 === (19))){
var state_31197__$1 = state_31197;
var statearr_31283_34263 = state_31197__$1;
(statearr_31283_34263[(2)] = null);

(statearr_31283_34263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (11))){
var inst_31144 = (state_31197[(2)]);
var state_31197__$1 = (function (){var statearr_31284 = state_31197;
(statearr_31284[(10)] = inst_31144);

return statearr_31284;
})();
var statearr_31285_34264 = state_31197__$1;
(statearr_31285_34264[(2)] = null);

(statearr_31285_34264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (9))){
var state_31197__$1 = state_31197;
var statearr_31288_34266 = state_31197__$1;
(statearr_31288_34266[(2)] = null);

(statearr_31288_34266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (5))){
var state_31197__$1 = state_31197;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31289_34267 = state_31197__$1;
(statearr_31289_34267[(1)] = (8));

} else {
var statearr_31291_34268 = state_31197__$1;
(statearr_31291_34268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (14))){
var inst_31152 = (state_31197[(8)]);
var inst_31156 = (state_31197[(11)]);
var inst_31152__$1 = (state_31197[(2)]);
var inst_31155 = (inst_31152__$1 == null);
var inst_31156__$1 = cljs.core.not(inst_31155);
var state_31197__$1 = (function (){var statearr_31292 = state_31197;
(statearr_31292[(8)] = inst_31152__$1);

(statearr_31292[(11)] = inst_31156__$1);

return statearr_31292;
})();
if(inst_31156__$1){
var statearr_31293_34269 = state_31197__$1;
(statearr_31293_34269[(1)] = (15));

} else {
var statearr_31294_34270 = state_31197__$1;
(statearr_31294_34270[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (16))){
var inst_31156 = (state_31197[(11)]);
var state_31197__$1 = state_31197;
var statearr_31296_34271 = state_31197__$1;
(statearr_31296_34271[(2)] = inst_31156);

(statearr_31296_34271[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (10))){
var inst_31137 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
var statearr_31297_34273 = state_31197__$1;
(statearr_31297_34273[(2)] = inst_31137);

(statearr_31297_34273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (18))){
var inst_31168 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
var statearr_31299_34274 = state_31197__$1;
(statearr_31299_34274[(2)] = inst_31168);

(statearr_31299_34274[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (8))){
var inst_31133 = cljs.core.async.close_BANG_(to);
var state_31197__$1 = state_31197;
var statearr_31302_34275 = state_31197__$1;
(statearr_31302_34275[(2)] = inst_31133);

(statearr_31302_34275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____0 = (function (){
var statearr_31304 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__);

(statearr_31304[(1)] = (1));

return statearr_31304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____1 = (function (state_31197){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_31197);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e31305){var ex__29035__auto__ = e31305;
var statearr_31306_34277 = state_31197;
(statearr_31306_34277[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_31197[(4)]))){
var statearr_31307_34278 = state_31197;
(statearr_31307_34278[(1)] = cljs.core.first((state_31197[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34279 = state_31197;
state_31197 = G__34279;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__ = function(state_31197){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____1.call(this,state_31197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_31308 = f__30139__auto__();
(statearr_31308[(6)] = c__30138__auto__);

return statearr_31308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));

return c__30138__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31311 = arguments.length;
switch (G__31311) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31326 = arguments.length;
switch (G__31326) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31332 = arguments.length;
switch (G__31332) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30138__auto___34288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_31368){
var state_val_31369 = (state_31368[(1)]);
if((state_val_31369 === (7))){
var inst_31362 = (state_31368[(2)]);
var state_31368__$1 = state_31368;
var statearr_31372_34289 = state_31368__$1;
(statearr_31372_34289[(2)] = inst_31362);

(statearr_31372_34289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (1))){
var state_31368__$1 = state_31368;
var statearr_31373_34290 = state_31368__$1;
(statearr_31373_34290[(2)] = null);

(statearr_31373_34290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (4))){
var inst_31336 = (state_31368[(7)]);
var inst_31336__$1 = (state_31368[(2)]);
var inst_31337 = (inst_31336__$1 == null);
var state_31368__$1 = (function (){var statearr_31377 = state_31368;
(statearr_31377[(7)] = inst_31336__$1);

return statearr_31377;
})();
if(cljs.core.truth_(inst_31337)){
var statearr_31378_34294 = state_31368__$1;
(statearr_31378_34294[(1)] = (5));

} else {
var statearr_31379_34295 = state_31368__$1;
(statearr_31379_34295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (13))){
var state_31368__$1 = state_31368;
var statearr_31384_34296 = state_31368__$1;
(statearr_31384_34296[(2)] = null);

(statearr_31384_34296[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (6))){
var inst_31336 = (state_31368[(7)]);
var inst_31346 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31336) : p.call(null,inst_31336));
var state_31368__$1 = state_31368;
if(cljs.core.truth_(inst_31346)){
var statearr_31385_34297 = state_31368__$1;
(statearr_31385_34297[(1)] = (9));

} else {
var statearr_31386_34298 = state_31368__$1;
(statearr_31386_34298[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (3))){
var inst_31364 = (state_31368[(2)]);
var state_31368__$1 = state_31368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31368__$1,inst_31364);
} else {
if((state_val_31369 === (12))){
var state_31368__$1 = state_31368;
var statearr_31391_34299 = state_31368__$1;
(statearr_31391_34299[(2)] = null);

(statearr_31391_34299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (2))){
var state_31368__$1 = state_31368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31368__$1,(4),ch);
} else {
if((state_val_31369 === (11))){
var inst_31336 = (state_31368[(7)]);
var inst_31352 = (state_31368[(2)]);
var state_31368__$1 = state_31368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31368__$1,(8),inst_31352,inst_31336);
} else {
if((state_val_31369 === (9))){
var state_31368__$1 = state_31368;
var statearr_31392_34300 = state_31368__$1;
(statearr_31392_34300[(2)] = tc);

(statearr_31392_34300[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (5))){
var inst_31339 = cljs.core.async.close_BANG_(tc);
var inst_31340 = cljs.core.async.close_BANG_(fc);
var state_31368__$1 = (function (){var statearr_31394 = state_31368;
(statearr_31394[(8)] = inst_31339);

return statearr_31394;
})();
var statearr_31395_34302 = state_31368__$1;
(statearr_31395_34302[(2)] = inst_31340);

(statearr_31395_34302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (14))){
var inst_31360 = (state_31368[(2)]);
var state_31368__$1 = state_31368;
var statearr_31400_34303 = state_31368__$1;
(statearr_31400_34303[(2)] = inst_31360);

(statearr_31400_34303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (10))){
var state_31368__$1 = state_31368;
var statearr_31402_34304 = state_31368__$1;
(statearr_31402_34304[(2)] = fc);

(statearr_31402_34304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (8))){
var inst_31354 = (state_31368[(2)]);
var state_31368__$1 = state_31368;
if(cljs.core.truth_(inst_31354)){
var statearr_31403_34305 = state_31368__$1;
(statearr_31403_34305[(1)] = (12));

} else {
var statearr_31404_34306 = state_31368__$1;
(statearr_31404_34306[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29032__auto__ = null;
var cljs$core$async$state_machine__29032__auto____0 = (function (){
var statearr_31406 = [null,null,null,null,null,null,null,null,null];
(statearr_31406[(0)] = cljs$core$async$state_machine__29032__auto__);

(statearr_31406[(1)] = (1));

return statearr_31406;
});
var cljs$core$async$state_machine__29032__auto____1 = (function (state_31368){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_31368);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e31412){var ex__29035__auto__ = e31412;
var statearr_31413_34308 = state_31368;
(statearr_31413_34308[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_31368[(4)]))){
var statearr_31414_34309 = state_31368;
(statearr_31414_34309[(1)] = cljs.core.first((state_31368[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34311 = state_31368;
state_31368 = G__34311;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$state_machine__29032__auto__ = function(state_31368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29032__auto____1.call(this,state_31368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29032__auto____0;
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29032__auto____1;
return cljs$core$async$state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_31418 = f__30139__auto__();
(statearr_31418[(6)] = c__30138__auto___34288);

return statearr_31418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30138__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_31448){
var state_val_31449 = (state_31448[(1)]);
if((state_val_31449 === (7))){
var inst_31444 = (state_31448[(2)]);
var state_31448__$1 = state_31448;
var statearr_31457_34316 = state_31448__$1;
(statearr_31457_34316[(2)] = inst_31444);

(statearr_31457_34316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (1))){
var inst_31425 = init;
var inst_31427 = inst_31425;
var state_31448__$1 = (function (){var statearr_31460 = state_31448;
(statearr_31460[(7)] = inst_31427);

return statearr_31460;
})();
var statearr_31461_34323 = state_31448__$1;
(statearr_31461_34323[(2)] = null);

(statearr_31461_34323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (4))){
var inst_31430 = (state_31448[(8)]);
var inst_31430__$1 = (state_31448[(2)]);
var inst_31431 = (inst_31430__$1 == null);
var state_31448__$1 = (function (){var statearr_31465 = state_31448;
(statearr_31465[(8)] = inst_31430__$1);

return statearr_31465;
})();
if(cljs.core.truth_(inst_31431)){
var statearr_31466_34325 = state_31448__$1;
(statearr_31466_34325[(1)] = (5));

} else {
var statearr_31467_34326 = state_31448__$1;
(statearr_31467_34326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (6))){
var inst_31427 = (state_31448[(7)]);
var inst_31430 = (state_31448[(8)]);
var inst_31434 = (state_31448[(9)]);
var inst_31434__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31427,inst_31430) : f.call(null,inst_31427,inst_31430));
var inst_31435 = cljs.core.reduced_QMARK_(inst_31434__$1);
var state_31448__$1 = (function (){var statearr_31469 = state_31448;
(statearr_31469[(9)] = inst_31434__$1);

return statearr_31469;
})();
if(inst_31435){
var statearr_31473_34327 = state_31448__$1;
(statearr_31473_34327[(1)] = (8));

} else {
var statearr_31474_34328 = state_31448__$1;
(statearr_31474_34328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (3))){
var inst_31446 = (state_31448[(2)]);
var state_31448__$1 = state_31448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31448__$1,inst_31446);
} else {
if((state_val_31449 === (2))){
var state_31448__$1 = state_31448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31448__$1,(4),ch);
} else {
if((state_val_31449 === (9))){
var inst_31434 = (state_31448[(9)]);
var inst_31427 = inst_31434;
var state_31448__$1 = (function (){var statearr_31478 = state_31448;
(statearr_31478[(7)] = inst_31427);

return statearr_31478;
})();
var statearr_31480_34330 = state_31448__$1;
(statearr_31480_34330[(2)] = null);

(statearr_31480_34330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (5))){
var inst_31427 = (state_31448[(7)]);
var state_31448__$1 = state_31448;
var statearr_31482_34332 = state_31448__$1;
(statearr_31482_34332[(2)] = inst_31427);

(statearr_31482_34332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (10))){
var inst_31442 = (state_31448[(2)]);
var state_31448__$1 = state_31448;
var statearr_31487_34333 = state_31448__$1;
(statearr_31487_34333[(2)] = inst_31442);

(statearr_31487_34333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (8))){
var inst_31434 = (state_31448[(9)]);
var inst_31438 = cljs.core.deref(inst_31434);
var state_31448__$1 = state_31448;
var statearr_31488_34334 = state_31448__$1;
(statearr_31488_34334[(2)] = inst_31438);

(statearr_31488_34334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29032__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29032__auto____0 = (function (){
var statearr_31490 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31490[(0)] = cljs$core$async$reduce_$_state_machine__29032__auto__);

(statearr_31490[(1)] = (1));

return statearr_31490;
});
var cljs$core$async$reduce_$_state_machine__29032__auto____1 = (function (state_31448){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_31448);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e31493){var ex__29035__auto__ = e31493;
var statearr_31495_34338 = state_31448;
(statearr_31495_34338[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_31448[(4)]))){
var statearr_31498_34340 = state_31448;
(statearr_31498_34340[(1)] = cljs.core.first((state_31448[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34341 = state_31448;
state_31448 = G__34341;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29032__auto__ = function(state_31448){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29032__auto____1.call(this,state_31448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29032__auto____0;
cljs$core$async$reduce_$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29032__auto____1;
return cljs$core$async$reduce_$_state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_31502 = f__30139__auto__();
(statearr_31502[(6)] = c__30138__auto__);

return statearr_31502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));

return c__30138__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30138__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_31512){
var state_val_31513 = (state_31512[(1)]);
if((state_val_31513 === (1))){
var inst_31507 = cljs.core.async.reduce(f__$1,init,ch);
var state_31512__$1 = state_31512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31512__$1,(2),inst_31507);
} else {
if((state_val_31513 === (2))){
var inst_31509 = (state_31512[(2)]);
var inst_31510 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31509) : f__$1.call(null,inst_31509));
var state_31512__$1 = state_31512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31512__$1,inst_31510);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29032__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29032__auto____0 = (function (){
var statearr_31519 = [null,null,null,null,null,null,null];
(statearr_31519[(0)] = cljs$core$async$transduce_$_state_machine__29032__auto__);

(statearr_31519[(1)] = (1));

return statearr_31519;
});
var cljs$core$async$transduce_$_state_machine__29032__auto____1 = (function (state_31512){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_31512);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e31523){var ex__29035__auto__ = e31523;
var statearr_31524_34346 = state_31512;
(statearr_31524_34346[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_31512[(4)]))){
var statearr_31525_34348 = state_31512;
(statearr_31525_34348[(1)] = cljs.core.first((state_31512[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34352 = state_31512;
state_31512 = G__34352;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29032__auto__ = function(state_31512){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29032__auto____1.call(this,state_31512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29032__auto____0;
cljs$core$async$transduce_$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29032__auto____1;
return cljs$core$async$transduce_$_state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_31530 = f__30139__auto__();
(statearr_31530[(6)] = c__30138__auto__);

return statearr_31530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));

return c__30138__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31543 = arguments.length;
switch (G__31543) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30138__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_31584){
var state_val_31586 = (state_31584[(1)]);
if((state_val_31586 === (7))){
var inst_31563 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
var statearr_31596_34354 = state_31584__$1;
(statearr_31596_34354[(2)] = inst_31563);

(statearr_31596_34354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (1))){
var inst_31556 = cljs.core.seq(coll);
var inst_31557 = inst_31556;
var state_31584__$1 = (function (){var statearr_31600 = state_31584;
(statearr_31600[(7)] = inst_31557);

return statearr_31600;
})();
var statearr_31603_34356 = state_31584__$1;
(statearr_31603_34356[(2)] = null);

(statearr_31603_34356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (4))){
var inst_31557 = (state_31584[(7)]);
var inst_31561 = cljs.core.first(inst_31557);
var state_31584__$1 = state_31584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31584__$1,(7),ch,inst_31561);
} else {
if((state_val_31586 === (13))){
var inst_31578 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
var statearr_31610_34359 = state_31584__$1;
(statearr_31610_34359[(2)] = inst_31578);

(statearr_31610_34359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (6))){
var inst_31567 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
if(cljs.core.truth_(inst_31567)){
var statearr_31613_34360 = state_31584__$1;
(statearr_31613_34360[(1)] = (8));

} else {
var statearr_31615_34361 = state_31584__$1;
(statearr_31615_34361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (3))){
var inst_31582 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31584__$1,inst_31582);
} else {
if((state_val_31586 === (12))){
var state_31584__$1 = state_31584;
var statearr_31620_34362 = state_31584__$1;
(statearr_31620_34362[(2)] = null);

(statearr_31620_34362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (2))){
var inst_31557 = (state_31584[(7)]);
var state_31584__$1 = state_31584;
if(cljs.core.truth_(inst_31557)){
var statearr_31623_34363 = state_31584__$1;
(statearr_31623_34363[(1)] = (4));

} else {
var statearr_31626_34364 = state_31584__$1;
(statearr_31626_34364[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (11))){
var inst_31575 = cljs.core.async.close_BANG_(ch);
var state_31584__$1 = state_31584;
var statearr_31632_34365 = state_31584__$1;
(statearr_31632_34365[(2)] = inst_31575);

(statearr_31632_34365[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (9))){
var state_31584__$1 = state_31584;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31633_34366 = state_31584__$1;
(statearr_31633_34366[(1)] = (11));

} else {
var statearr_31634_34367 = state_31584__$1;
(statearr_31634_34367[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (5))){
var inst_31557 = (state_31584[(7)]);
var state_31584__$1 = state_31584;
var statearr_31639_34368 = state_31584__$1;
(statearr_31639_34368[(2)] = inst_31557);

(statearr_31639_34368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (10))){
var inst_31580 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
var statearr_31641_34369 = state_31584__$1;
(statearr_31641_34369[(2)] = inst_31580);

(statearr_31641_34369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (8))){
var inst_31557 = (state_31584[(7)]);
var inst_31571 = cljs.core.next(inst_31557);
var inst_31557__$1 = inst_31571;
var state_31584__$1 = (function (){var statearr_31645 = state_31584;
(statearr_31645[(7)] = inst_31557__$1);

return statearr_31645;
})();
var statearr_31646_34370 = state_31584__$1;
(statearr_31646_34370[(2)] = null);

(statearr_31646_34370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29032__auto__ = null;
var cljs$core$async$state_machine__29032__auto____0 = (function (){
var statearr_31651 = [null,null,null,null,null,null,null,null];
(statearr_31651[(0)] = cljs$core$async$state_machine__29032__auto__);

(statearr_31651[(1)] = (1));

return statearr_31651;
});
var cljs$core$async$state_machine__29032__auto____1 = (function (state_31584){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_31584);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e31653){var ex__29035__auto__ = e31653;
var statearr_31655_34377 = state_31584;
(statearr_31655_34377[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_31584[(4)]))){
var statearr_31658_34378 = state_31584;
(statearr_31658_34378[(1)] = cljs.core.first((state_31584[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34379 = state_31584;
state_31584 = G__34379;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$state_machine__29032__auto__ = function(state_31584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29032__auto____1.call(this,state_31584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29032__auto____0;
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29032__auto____1;
return cljs$core$async$state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_31662 = f__30139__auto__();
(statearr_31662[(6)] = c__30138__auto__);

return statearr_31662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));

return c__30138__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31683 = arguments.length;
switch (G__31683) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34381 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34381(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34384 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34384(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34385 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34385(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34400 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34400(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31743 = (function (ch,cs,meta31744){
this.ch = ch;
this.cs = cs;
this.meta31744 = meta31744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31745,meta31744__$1){
var self__ = this;
var _31745__$1 = this;
return (new cljs.core.async.t_cljs$core$async31743(self__.ch,self__.cs,meta31744__$1));
}));

(cljs.core.async.t_cljs$core$async31743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31745){
var self__ = this;
var _31745__$1 = this;
return self__.meta31744;
}));

(cljs.core.async.t_cljs$core$async31743.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31743.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31743.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31743.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31743.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31744","meta31744",-383511337,null)], null);
}));

(cljs.core.async.t_cljs$core$async31743.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31743");

(cljs.core.async.t_cljs$core$async31743.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31743");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31743.
 */
cljs.core.async.__GT_t_cljs$core$async31743 = (function cljs$core$async$__GT_t_cljs$core$async31743(ch,cs,meta31744){
return (new cljs.core.async.t_cljs$core$async31743(ch,cs,meta31744));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async31743(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30138__auto___34406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_31902){
var state_val_31903 = (state_31902[(1)]);
if((state_val_31903 === (7))){
var inst_31894 = (state_31902[(2)]);
var state_31902__$1 = state_31902;
var statearr_31910_34410 = state_31902__$1;
(statearr_31910_34410[(2)] = inst_31894);

(statearr_31910_34410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (20))){
var inst_31795 = (state_31902[(7)]);
var inst_31808 = cljs.core.first(inst_31795);
var inst_31809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31808,(0),null);
var inst_31810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31808,(1),null);
var state_31902__$1 = (function (){var statearr_31912 = state_31902;
(statearr_31912[(8)] = inst_31809);

return statearr_31912;
})();
if(cljs.core.truth_(inst_31810)){
var statearr_31913_34413 = state_31902__$1;
(statearr_31913_34413[(1)] = (22));

} else {
var statearr_31914_34414 = state_31902__$1;
(statearr_31914_34414[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (27))){
var inst_31838 = (state_31902[(9)]);
var inst_31840 = (state_31902[(10)]);
var inst_31845 = (state_31902[(11)]);
var inst_31758 = (state_31902[(12)]);
var inst_31845__$1 = cljs.core._nth(inst_31838,inst_31840);
var inst_31846 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31845__$1,inst_31758,done);
var state_31902__$1 = (function (){var statearr_31922 = state_31902;
(statearr_31922[(11)] = inst_31845__$1);

return statearr_31922;
})();
if(cljs.core.truth_(inst_31846)){
var statearr_31924_34415 = state_31902__$1;
(statearr_31924_34415[(1)] = (30));

} else {
var statearr_31926_34416 = state_31902__$1;
(statearr_31926_34416[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (1))){
var state_31902__$1 = state_31902;
var statearr_31930_34417 = state_31902__$1;
(statearr_31930_34417[(2)] = null);

(statearr_31930_34417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (24))){
var inst_31795 = (state_31902[(7)]);
var inst_31815 = (state_31902[(2)]);
var inst_31816 = cljs.core.next(inst_31795);
var inst_31767 = inst_31816;
var inst_31768 = null;
var inst_31769 = (0);
var inst_31770 = (0);
var state_31902__$1 = (function (){var statearr_31931 = state_31902;
(statearr_31931[(13)] = inst_31815);

(statearr_31931[(14)] = inst_31767);

(statearr_31931[(15)] = inst_31768);

(statearr_31931[(16)] = inst_31769);

(statearr_31931[(17)] = inst_31770);

return statearr_31931;
})();
var statearr_31935_34422 = state_31902__$1;
(statearr_31935_34422[(2)] = null);

(statearr_31935_34422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (39))){
var state_31902__$1 = state_31902;
var statearr_31944_34423 = state_31902__$1;
(statearr_31944_34423[(2)] = null);

(statearr_31944_34423[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (4))){
var inst_31758 = (state_31902[(12)]);
var inst_31758__$1 = (state_31902[(2)]);
var inst_31759 = (inst_31758__$1 == null);
var state_31902__$1 = (function (){var statearr_31945 = state_31902;
(statearr_31945[(12)] = inst_31758__$1);

return statearr_31945;
})();
if(cljs.core.truth_(inst_31759)){
var statearr_31946_34424 = state_31902__$1;
(statearr_31946_34424[(1)] = (5));

} else {
var statearr_31947_34425 = state_31902__$1;
(statearr_31947_34425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (15))){
var inst_31770 = (state_31902[(17)]);
var inst_31767 = (state_31902[(14)]);
var inst_31768 = (state_31902[(15)]);
var inst_31769 = (state_31902[(16)]);
var inst_31791 = (state_31902[(2)]);
var inst_31792 = (inst_31770 + (1));
var tmp31937 = inst_31768;
var tmp31938 = inst_31767;
var tmp31939 = inst_31769;
var inst_31767__$1 = tmp31938;
var inst_31768__$1 = tmp31937;
var inst_31769__$1 = tmp31939;
var inst_31770__$1 = inst_31792;
var state_31902__$1 = (function (){var statearr_31953 = state_31902;
(statearr_31953[(18)] = inst_31791);

(statearr_31953[(14)] = inst_31767__$1);

(statearr_31953[(15)] = inst_31768__$1);

(statearr_31953[(16)] = inst_31769__$1);

(statearr_31953[(17)] = inst_31770__$1);

return statearr_31953;
})();
var statearr_31956_34427 = state_31902__$1;
(statearr_31956_34427[(2)] = null);

(statearr_31956_34427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (21))){
var inst_31819 = (state_31902[(2)]);
var state_31902__$1 = state_31902;
var statearr_31963_34431 = state_31902__$1;
(statearr_31963_34431[(2)] = inst_31819);

(statearr_31963_34431[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (31))){
var inst_31845 = (state_31902[(11)]);
var inst_31849 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31845);
var state_31902__$1 = state_31902;
var statearr_31965_34432 = state_31902__$1;
(statearr_31965_34432[(2)] = inst_31849);

(statearr_31965_34432[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (32))){
var inst_31840 = (state_31902[(10)]);
var inst_31837 = (state_31902[(19)]);
var inst_31838 = (state_31902[(9)]);
var inst_31839 = (state_31902[(20)]);
var inst_31851 = (state_31902[(2)]);
var inst_31854 = (inst_31840 + (1));
var tmp31958 = inst_31838;
var tmp31959 = inst_31839;
var tmp31960 = inst_31837;
var inst_31837__$1 = tmp31960;
var inst_31838__$1 = tmp31958;
var inst_31839__$1 = tmp31959;
var inst_31840__$1 = inst_31854;
var state_31902__$1 = (function (){var statearr_31966 = state_31902;
(statearr_31966[(21)] = inst_31851);

(statearr_31966[(19)] = inst_31837__$1);

(statearr_31966[(9)] = inst_31838__$1);

(statearr_31966[(20)] = inst_31839__$1);

(statearr_31966[(10)] = inst_31840__$1);

return statearr_31966;
})();
var statearr_31969_34435 = state_31902__$1;
(statearr_31969_34435[(2)] = null);

(statearr_31969_34435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (40))){
var inst_31867 = (state_31902[(22)]);
var inst_31871 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31867);
var state_31902__$1 = state_31902;
var statearr_31970_34436 = state_31902__$1;
(statearr_31970_34436[(2)] = inst_31871);

(statearr_31970_34436[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (33))){
var inst_31858 = (state_31902[(23)]);
var inst_31860 = cljs.core.chunked_seq_QMARK_(inst_31858);
var state_31902__$1 = state_31902;
if(inst_31860){
var statearr_31975_34438 = state_31902__$1;
(statearr_31975_34438[(1)] = (36));

} else {
var statearr_31979_34439 = state_31902__$1;
(statearr_31979_34439[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (13))){
var inst_31779 = (state_31902[(24)]);
var inst_31788 = cljs.core.async.close_BANG_(inst_31779);
var state_31902__$1 = state_31902;
var statearr_31981_34440 = state_31902__$1;
(statearr_31981_34440[(2)] = inst_31788);

(statearr_31981_34440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (22))){
var inst_31809 = (state_31902[(8)]);
var inst_31812 = cljs.core.async.close_BANG_(inst_31809);
var state_31902__$1 = state_31902;
var statearr_31982_34441 = state_31902__$1;
(statearr_31982_34441[(2)] = inst_31812);

(statearr_31982_34441[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (36))){
var inst_31858 = (state_31902[(23)]);
var inst_31862 = cljs.core.chunk_first(inst_31858);
var inst_31863 = cljs.core.chunk_rest(inst_31858);
var inst_31864 = cljs.core.count(inst_31862);
var inst_31837 = inst_31863;
var inst_31838 = inst_31862;
var inst_31839 = inst_31864;
var inst_31840 = (0);
var state_31902__$1 = (function (){var statearr_31989 = state_31902;
(statearr_31989[(19)] = inst_31837);

(statearr_31989[(9)] = inst_31838);

(statearr_31989[(20)] = inst_31839);

(statearr_31989[(10)] = inst_31840);

return statearr_31989;
})();
var statearr_31992_34450 = state_31902__$1;
(statearr_31992_34450[(2)] = null);

(statearr_31992_34450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (41))){
var inst_31858 = (state_31902[(23)]);
var inst_31873 = (state_31902[(2)]);
var inst_31874 = cljs.core.next(inst_31858);
var inst_31837 = inst_31874;
var inst_31838 = null;
var inst_31839 = (0);
var inst_31840 = (0);
var state_31902__$1 = (function (){var statearr_31993 = state_31902;
(statearr_31993[(25)] = inst_31873);

(statearr_31993[(19)] = inst_31837);

(statearr_31993[(9)] = inst_31838);

(statearr_31993[(20)] = inst_31839);

(statearr_31993[(10)] = inst_31840);

return statearr_31993;
})();
var statearr_31997_34453 = state_31902__$1;
(statearr_31997_34453[(2)] = null);

(statearr_31997_34453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (43))){
var state_31902__$1 = state_31902;
var statearr_31999_34454 = state_31902__$1;
(statearr_31999_34454[(2)] = null);

(statearr_31999_34454[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (29))){
var inst_31882 = (state_31902[(2)]);
var state_31902__$1 = state_31902;
var statearr_32003_34456 = state_31902__$1;
(statearr_32003_34456[(2)] = inst_31882);

(statearr_32003_34456[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (44))){
var inst_31891 = (state_31902[(2)]);
var state_31902__$1 = (function (){var statearr_32004 = state_31902;
(statearr_32004[(26)] = inst_31891);

return statearr_32004;
})();
var statearr_32008_34458 = state_31902__$1;
(statearr_32008_34458[(2)] = null);

(statearr_32008_34458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (6))){
var inst_31829 = (state_31902[(27)]);
var inst_31828 = cljs.core.deref(cs);
var inst_31829__$1 = cljs.core.keys(inst_31828);
var inst_31830 = cljs.core.count(inst_31829__$1);
var inst_31831 = cljs.core.reset_BANG_(dctr,inst_31830);
var inst_31836 = cljs.core.seq(inst_31829__$1);
var inst_31837 = inst_31836;
var inst_31838 = null;
var inst_31839 = (0);
var inst_31840 = (0);
var state_31902__$1 = (function (){var statearr_32010 = state_31902;
(statearr_32010[(27)] = inst_31829__$1);

(statearr_32010[(28)] = inst_31831);

(statearr_32010[(19)] = inst_31837);

(statearr_32010[(9)] = inst_31838);

(statearr_32010[(20)] = inst_31839);

(statearr_32010[(10)] = inst_31840);

return statearr_32010;
})();
var statearr_32011_34461 = state_31902__$1;
(statearr_32011_34461[(2)] = null);

(statearr_32011_34461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (28))){
var inst_31837 = (state_31902[(19)]);
var inst_31858 = (state_31902[(23)]);
var inst_31858__$1 = cljs.core.seq(inst_31837);
var state_31902__$1 = (function (){var statearr_32013 = state_31902;
(statearr_32013[(23)] = inst_31858__$1);

return statearr_32013;
})();
if(inst_31858__$1){
var statearr_32014_34465 = state_31902__$1;
(statearr_32014_34465[(1)] = (33));

} else {
var statearr_32015_34466 = state_31902__$1;
(statearr_32015_34466[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (25))){
var inst_31840 = (state_31902[(10)]);
var inst_31839 = (state_31902[(20)]);
var inst_31842 = (inst_31840 < inst_31839);
var inst_31843 = inst_31842;
var state_31902__$1 = state_31902;
if(cljs.core.truth_(inst_31843)){
var statearr_32017_34468 = state_31902__$1;
(statearr_32017_34468[(1)] = (27));

} else {
var statearr_32018_34469 = state_31902__$1;
(statearr_32018_34469[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (34))){
var state_31902__$1 = state_31902;
var statearr_32020_34470 = state_31902__$1;
(statearr_32020_34470[(2)] = null);

(statearr_32020_34470[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (17))){
var state_31902__$1 = state_31902;
var statearr_32025_34471 = state_31902__$1;
(statearr_32025_34471[(2)] = null);

(statearr_32025_34471[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (3))){
var inst_31896 = (state_31902[(2)]);
var state_31902__$1 = state_31902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31902__$1,inst_31896);
} else {
if((state_val_31903 === (12))){
var inst_31824 = (state_31902[(2)]);
var state_31902__$1 = state_31902;
var statearr_32033_34474 = state_31902__$1;
(statearr_32033_34474[(2)] = inst_31824);

(statearr_32033_34474[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (2))){
var state_31902__$1 = state_31902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31902__$1,(4),ch);
} else {
if((state_val_31903 === (23))){
var state_31902__$1 = state_31902;
var statearr_32034_34479 = state_31902__$1;
(statearr_32034_34479[(2)] = null);

(statearr_32034_34479[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (35))){
var inst_31880 = (state_31902[(2)]);
var state_31902__$1 = state_31902;
var statearr_32040_34480 = state_31902__$1;
(statearr_32040_34480[(2)] = inst_31880);

(statearr_32040_34480[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (19))){
var inst_31795 = (state_31902[(7)]);
var inst_31800 = cljs.core.chunk_first(inst_31795);
var inst_31801 = cljs.core.chunk_rest(inst_31795);
var inst_31802 = cljs.core.count(inst_31800);
var inst_31767 = inst_31801;
var inst_31768 = inst_31800;
var inst_31769 = inst_31802;
var inst_31770 = (0);
var state_31902__$1 = (function (){var statearr_32043 = state_31902;
(statearr_32043[(14)] = inst_31767);

(statearr_32043[(15)] = inst_31768);

(statearr_32043[(16)] = inst_31769);

(statearr_32043[(17)] = inst_31770);

return statearr_32043;
})();
var statearr_32045_34484 = state_31902__$1;
(statearr_32045_34484[(2)] = null);

(statearr_32045_34484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (11))){
var inst_31767 = (state_31902[(14)]);
var inst_31795 = (state_31902[(7)]);
var inst_31795__$1 = cljs.core.seq(inst_31767);
var state_31902__$1 = (function (){var statearr_32051 = state_31902;
(statearr_32051[(7)] = inst_31795__$1);

return statearr_32051;
})();
if(inst_31795__$1){
var statearr_32052_34488 = state_31902__$1;
(statearr_32052_34488[(1)] = (16));

} else {
var statearr_32053_34489 = state_31902__$1;
(statearr_32053_34489[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (9))){
var inst_31826 = (state_31902[(2)]);
var state_31902__$1 = state_31902;
var statearr_32054_34491 = state_31902__$1;
(statearr_32054_34491[(2)] = inst_31826);

(statearr_32054_34491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (5))){
var inst_31765 = cljs.core.deref(cs);
var inst_31766 = cljs.core.seq(inst_31765);
var inst_31767 = inst_31766;
var inst_31768 = null;
var inst_31769 = (0);
var inst_31770 = (0);
var state_31902__$1 = (function (){var statearr_32059 = state_31902;
(statearr_32059[(14)] = inst_31767);

(statearr_32059[(15)] = inst_31768);

(statearr_32059[(16)] = inst_31769);

(statearr_32059[(17)] = inst_31770);

return statearr_32059;
})();
var statearr_32060_34499 = state_31902__$1;
(statearr_32060_34499[(2)] = null);

(statearr_32060_34499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (14))){
var state_31902__$1 = state_31902;
var statearr_32061_34500 = state_31902__$1;
(statearr_32061_34500[(2)] = null);

(statearr_32061_34500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (45))){
var inst_31888 = (state_31902[(2)]);
var state_31902__$1 = state_31902;
var statearr_32062_34506 = state_31902__$1;
(statearr_32062_34506[(2)] = inst_31888);

(statearr_32062_34506[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (26))){
var inst_31829 = (state_31902[(27)]);
var inst_31884 = (state_31902[(2)]);
var inst_31885 = cljs.core.seq(inst_31829);
var state_31902__$1 = (function (){var statearr_32064 = state_31902;
(statearr_32064[(29)] = inst_31884);

return statearr_32064;
})();
if(inst_31885){
var statearr_32065_34516 = state_31902__$1;
(statearr_32065_34516[(1)] = (42));

} else {
var statearr_32066_34518 = state_31902__$1;
(statearr_32066_34518[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (16))){
var inst_31795 = (state_31902[(7)]);
var inst_31797 = cljs.core.chunked_seq_QMARK_(inst_31795);
var state_31902__$1 = state_31902;
if(inst_31797){
var statearr_32067_34523 = state_31902__$1;
(statearr_32067_34523[(1)] = (19));

} else {
var statearr_32069_34524 = state_31902__$1;
(statearr_32069_34524[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (38))){
var inst_31877 = (state_31902[(2)]);
var state_31902__$1 = state_31902;
var statearr_32070_34529 = state_31902__$1;
(statearr_32070_34529[(2)] = inst_31877);

(statearr_32070_34529[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (30))){
var state_31902__$1 = state_31902;
var statearr_32075_34530 = state_31902__$1;
(statearr_32075_34530[(2)] = null);

(statearr_32075_34530[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (10))){
var inst_31768 = (state_31902[(15)]);
var inst_31770 = (state_31902[(17)]);
var inst_31778 = cljs.core._nth(inst_31768,inst_31770);
var inst_31779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31778,(0),null);
var inst_31786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31778,(1),null);
var state_31902__$1 = (function (){var statearr_32080 = state_31902;
(statearr_32080[(24)] = inst_31779);

return statearr_32080;
})();
if(cljs.core.truth_(inst_31786)){
var statearr_32081_34534 = state_31902__$1;
(statearr_32081_34534[(1)] = (13));

} else {
var statearr_32082_34535 = state_31902__$1;
(statearr_32082_34535[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (18))){
var inst_31822 = (state_31902[(2)]);
var state_31902__$1 = state_31902;
var statearr_32084_34536 = state_31902__$1;
(statearr_32084_34536[(2)] = inst_31822);

(statearr_32084_34536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (42))){
var state_31902__$1 = state_31902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31902__$1,(45),dchan);
} else {
if((state_val_31903 === (37))){
var inst_31858 = (state_31902[(23)]);
var inst_31867 = (state_31902[(22)]);
var inst_31758 = (state_31902[(12)]);
var inst_31867__$1 = cljs.core.first(inst_31858);
var inst_31868 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31867__$1,inst_31758,done);
var state_31902__$1 = (function (){var statearr_32093 = state_31902;
(statearr_32093[(22)] = inst_31867__$1);

return statearr_32093;
})();
if(cljs.core.truth_(inst_31868)){
var statearr_32094_34538 = state_31902__$1;
(statearr_32094_34538[(1)] = (39));

} else {
var statearr_32095_34539 = state_31902__$1;
(statearr_32095_34539[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (8))){
var inst_31770 = (state_31902[(17)]);
var inst_31769 = (state_31902[(16)]);
var inst_31772 = (inst_31770 < inst_31769);
var inst_31773 = inst_31772;
var state_31902__$1 = state_31902;
if(cljs.core.truth_(inst_31773)){
var statearr_32096_34541 = state_31902__$1;
(statearr_32096_34541[(1)] = (10));

} else {
var statearr_32100_34542 = state_31902__$1;
(statearr_32100_34542[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29032__auto__ = null;
var cljs$core$async$mult_$_state_machine__29032__auto____0 = (function (){
var statearr_32102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32102[(0)] = cljs$core$async$mult_$_state_machine__29032__auto__);

(statearr_32102[(1)] = (1));

return statearr_32102;
});
var cljs$core$async$mult_$_state_machine__29032__auto____1 = (function (state_31902){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_31902);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e32103){var ex__29035__auto__ = e32103;
var statearr_32107_34546 = state_31902;
(statearr_32107_34546[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_31902[(4)]))){
var statearr_32108_34549 = state_31902;
(statearr_32108_34549[(1)] = cljs.core.first((state_31902[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34550 = state_31902;
state_31902 = G__34550;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29032__auto__ = function(state_31902){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29032__auto____1.call(this,state_31902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29032__auto____0;
cljs$core$async$mult_$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29032__auto____1;
return cljs$core$async$mult_$_state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_32110 = f__30139__auto__();
(statearr_32110[(6)] = c__30138__auto___34406);

return statearr_32110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32113 = arguments.length;
switch (G__32113) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34560 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34560(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34562 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34562(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34581 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34581(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34582 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34582(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34590 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34590(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34598 = arguments.length;
var i__5750__auto___34600 = (0);
while(true){
if((i__5750__auto___34600 < len__5749__auto___34598)){
args__5755__auto__.push((arguments[i__5750__auto___34600]));

var G__34609 = (i__5750__auto___34600 + (1));
i__5750__auto___34600 = G__34609;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32208){
var map__32209 = p__32208;
var map__32209__$1 = cljs.core.__destructure_map(map__32209);
var opts = map__32209__$1;
var statearr_32211_34610 = state;
(statearr_32211_34610[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32213_34619 = state;
(statearr_32213_34619[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_32214_34623 = state;
(statearr_32214_34623[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32202){
var G__32203 = cljs.core.first(seq32202);
var seq32202__$1 = cljs.core.next(seq32202);
var G__32204 = cljs.core.first(seq32202__$1);
var seq32202__$2 = cljs.core.next(seq32202__$1);
var G__32205 = cljs.core.first(seq32202__$2);
var seq32202__$3 = cljs.core.next(seq32202__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32203,G__32204,G__32205,seq32202__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32229 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32230){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32230 = meta32230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32231,meta32230__$1){
var self__ = this;
var _32231__$1 = this;
return (new cljs.core.async.t_cljs$core$async32229(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32230__$1));
}));

(cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32231){
var self__ = this;
var _32231__$1 = this;
return self__.meta32230;
}));

(cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32230","meta32230",1420975021,null)], null);
}));

(cljs.core.async.t_cljs$core$async32229.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32229");

(cljs.core.async.t_cljs$core$async32229.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32229");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32229.
 */
cljs.core.async.__GT_t_cljs$core$async32229 = (function cljs$core$async$__GT_t_cljs$core$async32229(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32230){
return (new cljs.core.async.t_cljs$core$async32229(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32230));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async32229(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__30138__auto___34758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_32327){
var state_val_32328 = (state_32327[(1)]);
if((state_val_32328 === (7))){
var inst_32274 = (state_32327[(2)]);
var state_32327__$1 = state_32327;
if(cljs.core.truth_(inst_32274)){
var statearr_32334_34759 = state_32327__$1;
(statearr_32334_34759[(1)] = (8));

} else {
var statearr_32335_34760 = state_32327__$1;
(statearr_32335_34760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (20))){
var inst_32267 = (state_32327[(7)]);
var state_32327__$1 = state_32327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32327__$1,(23),out,inst_32267);
} else {
if((state_val_32328 === (1))){
var inst_32244 = calc_state();
var inst_32245 = cljs.core.__destructure_map(inst_32244);
var inst_32246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32245,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32245,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32245,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32249 = inst_32244;
var state_32327__$1 = (function (){var statearr_32341 = state_32327;
(statearr_32341[(8)] = inst_32246);

(statearr_32341[(9)] = inst_32247);

(statearr_32341[(10)] = inst_32248);

(statearr_32341[(11)] = inst_32249);

return statearr_32341;
})();
var statearr_32343_34761 = state_32327__$1;
(statearr_32343_34761[(2)] = null);

(statearr_32343_34761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (24))){
var inst_32254 = (state_32327[(12)]);
var inst_32249 = inst_32254;
var state_32327__$1 = (function (){var statearr_32345 = state_32327;
(statearr_32345[(11)] = inst_32249);

return statearr_32345;
})();
var statearr_32346_34762 = state_32327__$1;
(statearr_32346_34762[(2)] = null);

(statearr_32346_34762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (4))){
var inst_32267 = (state_32327[(7)]);
var inst_32269 = (state_32327[(13)]);
var inst_32266 = (state_32327[(2)]);
var inst_32267__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32266,(0),null);
var inst_32268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32266,(1),null);
var inst_32269__$1 = (inst_32267__$1 == null);
var state_32327__$1 = (function (){var statearr_32349 = state_32327;
(statearr_32349[(7)] = inst_32267__$1);

(statearr_32349[(14)] = inst_32268);

(statearr_32349[(13)] = inst_32269__$1);

return statearr_32349;
})();
if(cljs.core.truth_(inst_32269__$1)){
var statearr_32353_34763 = state_32327__$1;
(statearr_32353_34763[(1)] = (5));

} else {
var statearr_32357_34765 = state_32327__$1;
(statearr_32357_34765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (15))){
var inst_32257 = (state_32327[(15)]);
var inst_32293 = (state_32327[(16)]);
var inst_32293__$1 = cljs.core.empty_QMARK_(inst_32257);
var state_32327__$1 = (function (){var statearr_32358 = state_32327;
(statearr_32358[(16)] = inst_32293__$1);

return statearr_32358;
})();
if(inst_32293__$1){
var statearr_32359_34768 = state_32327__$1;
(statearr_32359_34768[(1)] = (17));

} else {
var statearr_32360_34769 = state_32327__$1;
(statearr_32360_34769[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (21))){
var inst_32254 = (state_32327[(12)]);
var inst_32249 = inst_32254;
var state_32327__$1 = (function (){var statearr_32364 = state_32327;
(statearr_32364[(11)] = inst_32249);

return statearr_32364;
})();
var statearr_32365_34770 = state_32327__$1;
(statearr_32365_34770[(2)] = null);

(statearr_32365_34770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (13))){
var inst_32285 = (state_32327[(2)]);
var inst_32286 = calc_state();
var inst_32249 = inst_32286;
var state_32327__$1 = (function (){var statearr_32366 = state_32327;
(statearr_32366[(17)] = inst_32285);

(statearr_32366[(11)] = inst_32249);

return statearr_32366;
})();
var statearr_32367_34772 = state_32327__$1;
(statearr_32367_34772[(2)] = null);

(statearr_32367_34772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (22))){
var inst_32317 = (state_32327[(2)]);
var state_32327__$1 = state_32327;
var statearr_32368_34773 = state_32327__$1;
(statearr_32368_34773[(2)] = inst_32317);

(statearr_32368_34773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (6))){
var inst_32268 = (state_32327[(14)]);
var inst_32272 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32268,change);
var state_32327__$1 = state_32327;
var statearr_32373_34778 = state_32327__$1;
(statearr_32373_34778[(2)] = inst_32272);

(statearr_32373_34778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (25))){
var state_32327__$1 = state_32327;
var statearr_32374_34779 = state_32327__$1;
(statearr_32374_34779[(2)] = null);

(statearr_32374_34779[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (17))){
var inst_32258 = (state_32327[(18)]);
var inst_32268 = (state_32327[(14)]);
var inst_32296 = (inst_32258.cljs$core$IFn$_invoke$arity$1 ? inst_32258.cljs$core$IFn$_invoke$arity$1(inst_32268) : inst_32258.call(null,inst_32268));
var inst_32297 = cljs.core.not(inst_32296);
var state_32327__$1 = state_32327;
var statearr_32375_34780 = state_32327__$1;
(statearr_32375_34780[(2)] = inst_32297);

(statearr_32375_34780[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (3))){
var inst_32321 = (state_32327[(2)]);
var state_32327__$1 = state_32327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32327__$1,inst_32321);
} else {
if((state_val_32328 === (12))){
var state_32327__$1 = state_32327;
var statearr_32389_34781 = state_32327__$1;
(statearr_32389_34781[(2)] = null);

(statearr_32389_34781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (2))){
var inst_32249 = (state_32327[(11)]);
var inst_32254 = (state_32327[(12)]);
var inst_32254__$1 = cljs.core.__destructure_map(inst_32249);
var inst_32257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32254__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32254__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32254__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32327__$1 = (function (){var statearr_32397 = state_32327;
(statearr_32397[(12)] = inst_32254__$1);

(statearr_32397[(15)] = inst_32257);

(statearr_32397[(18)] = inst_32258);

return statearr_32397;
})();
return cljs.core.async.ioc_alts_BANG_(state_32327__$1,(4),inst_32259);
} else {
if((state_val_32328 === (23))){
var inst_32306 = (state_32327[(2)]);
var state_32327__$1 = state_32327;
if(cljs.core.truth_(inst_32306)){
var statearr_32401_34782 = state_32327__$1;
(statearr_32401_34782[(1)] = (24));

} else {
var statearr_32402_34783 = state_32327__$1;
(statearr_32402_34783[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (19))){
var inst_32301 = (state_32327[(2)]);
var state_32327__$1 = state_32327;
var statearr_32404_34785 = state_32327__$1;
(statearr_32404_34785[(2)] = inst_32301);

(statearr_32404_34785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (11))){
var inst_32268 = (state_32327[(14)]);
var inst_32282 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32268);
var state_32327__$1 = state_32327;
var statearr_32412_34787 = state_32327__$1;
(statearr_32412_34787[(2)] = inst_32282);

(statearr_32412_34787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (9))){
var inst_32257 = (state_32327[(15)]);
var inst_32268 = (state_32327[(14)]);
var inst_32290 = (state_32327[(19)]);
var inst_32290__$1 = (inst_32257.cljs$core$IFn$_invoke$arity$1 ? inst_32257.cljs$core$IFn$_invoke$arity$1(inst_32268) : inst_32257.call(null,inst_32268));
var state_32327__$1 = (function (){var statearr_32416 = state_32327;
(statearr_32416[(19)] = inst_32290__$1);

return statearr_32416;
})();
if(cljs.core.truth_(inst_32290__$1)){
var statearr_32417_34790 = state_32327__$1;
(statearr_32417_34790[(1)] = (14));

} else {
var statearr_32418_34791 = state_32327__$1;
(statearr_32418_34791[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (5))){
var inst_32269 = (state_32327[(13)]);
var state_32327__$1 = state_32327;
var statearr_32419_34793 = state_32327__$1;
(statearr_32419_34793[(2)] = inst_32269);

(statearr_32419_34793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (14))){
var inst_32290 = (state_32327[(19)]);
var state_32327__$1 = state_32327;
var statearr_32423_34794 = state_32327__$1;
(statearr_32423_34794[(2)] = inst_32290);

(statearr_32423_34794[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (26))){
var inst_32311 = (state_32327[(2)]);
var state_32327__$1 = state_32327;
var statearr_32424_34795 = state_32327__$1;
(statearr_32424_34795[(2)] = inst_32311);

(statearr_32424_34795[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (16))){
var inst_32303 = (state_32327[(2)]);
var state_32327__$1 = state_32327;
if(cljs.core.truth_(inst_32303)){
var statearr_32426_34797 = state_32327__$1;
(statearr_32426_34797[(1)] = (20));

} else {
var statearr_32427_34798 = state_32327__$1;
(statearr_32427_34798[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (10))){
var inst_32319 = (state_32327[(2)]);
var state_32327__$1 = state_32327;
var statearr_32428_34803 = state_32327__$1;
(statearr_32428_34803[(2)] = inst_32319);

(statearr_32428_34803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (18))){
var inst_32293 = (state_32327[(16)]);
var state_32327__$1 = state_32327;
var statearr_32429_34805 = state_32327__$1;
(statearr_32429_34805[(2)] = inst_32293);

(statearr_32429_34805[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (8))){
var inst_32267 = (state_32327[(7)]);
var inst_32276 = (inst_32267 == null);
var state_32327__$1 = state_32327;
if(cljs.core.truth_(inst_32276)){
var statearr_32430_34807 = state_32327__$1;
(statearr_32430_34807[(1)] = (11));

} else {
var statearr_32431_34808 = state_32327__$1;
(statearr_32431_34808[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29032__auto__ = null;
var cljs$core$async$mix_$_state_machine__29032__auto____0 = (function (){
var statearr_32437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32437[(0)] = cljs$core$async$mix_$_state_machine__29032__auto__);

(statearr_32437[(1)] = (1));

return statearr_32437;
});
var cljs$core$async$mix_$_state_machine__29032__auto____1 = (function (state_32327){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_32327);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e32438){var ex__29035__auto__ = e32438;
var statearr_32439_34810 = state_32327;
(statearr_32439_34810[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_32327[(4)]))){
var statearr_32440_34814 = state_32327;
(statearr_32440_34814[(1)] = cljs.core.first((state_32327[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34815 = state_32327;
state_32327 = G__34815;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29032__auto__ = function(state_32327){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29032__auto____1.call(this,state_32327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29032__auto____0;
cljs$core$async$mix_$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29032__auto____1;
return cljs$core$async$mix_$_state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_32442 = f__30139__auto__();
(statearr_32442[(6)] = c__30138__auto___34758);

return statearr_32442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34817 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34817(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34822 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34822(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34824 = (function() {
var G__34825 = null;
var G__34825__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34825__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34825 = function(p,v){
switch(arguments.length){
case 1:
return G__34825__1.call(this,p);
case 2:
return G__34825__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34825.cljs$core$IFn$_invoke$arity$1 = G__34825__1;
G__34825.cljs$core$IFn$_invoke$arity$2 = G__34825__2;
return G__34825;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32483 = arguments.length;
switch (G__32483) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34824(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34824(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32508 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32509){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32509 = meta32509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32510,meta32509__$1){
var self__ = this;
var _32510__$1 = this;
return (new cljs.core.async.t_cljs$core$async32508(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32509__$1));
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32510){
var self__ = this;
var _32510__$1 = this;
return self__.meta32509;
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32509","meta32509",-973935690,null)], null);
}));

(cljs.core.async.t_cljs$core$async32508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32508");

(cljs.core.async.t_cljs$core$async32508.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32508.
 */
cljs.core.async.__GT_t_cljs$core$async32508 = (function cljs$core$async$__GT_t_cljs$core$async32508(ch,topic_fn,buf_fn,mults,ensure_mult,meta32509){
return (new cljs.core.async.t_cljs$core$async32508(ch,topic_fn,buf_fn,mults,ensure_mult,meta32509));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32502 = arguments.length;
switch (G__32502) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32500_SHARP_){
if(cljs.core.truth_((p1__32500_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32500_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32500_SHARP_.call(null,topic)))){
return p1__32500_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32500_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async32508(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__30138__auto___34846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_32631){
var state_val_32632 = (state_32631[(1)]);
if((state_val_32632 === (7))){
var inst_32627 = (state_32631[(2)]);
var state_32631__$1 = state_32631;
var statearr_32634_34847 = state_32631__$1;
(statearr_32634_34847[(2)] = inst_32627);

(statearr_32634_34847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (20))){
var state_32631__$1 = state_32631;
var statearr_32635_34848 = state_32631__$1;
(statearr_32635_34848[(2)] = null);

(statearr_32635_34848[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (1))){
var state_32631__$1 = state_32631;
var statearr_32636_34850 = state_32631__$1;
(statearr_32636_34850[(2)] = null);

(statearr_32636_34850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (24))){
var inst_32604 = (state_32631[(7)]);
var inst_32619 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32604);
var state_32631__$1 = state_32631;
var statearr_32637_34853 = state_32631__$1;
(statearr_32637_34853[(2)] = inst_32619);

(statearr_32637_34853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (4))){
var inst_32545 = (state_32631[(8)]);
var inst_32545__$1 = (state_32631[(2)]);
var inst_32546 = (inst_32545__$1 == null);
var state_32631__$1 = (function (){var statearr_32638 = state_32631;
(statearr_32638[(8)] = inst_32545__$1);

return statearr_32638;
})();
if(cljs.core.truth_(inst_32546)){
var statearr_32639_34855 = state_32631__$1;
(statearr_32639_34855[(1)] = (5));

} else {
var statearr_32640_34856 = state_32631__$1;
(statearr_32640_34856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (15))){
var inst_32598 = (state_32631[(2)]);
var state_32631__$1 = state_32631;
var statearr_32643_34857 = state_32631__$1;
(statearr_32643_34857[(2)] = inst_32598);

(statearr_32643_34857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (21))){
var inst_32624 = (state_32631[(2)]);
var state_32631__$1 = (function (){var statearr_32645 = state_32631;
(statearr_32645[(9)] = inst_32624);

return statearr_32645;
})();
var statearr_32646_34859 = state_32631__$1;
(statearr_32646_34859[(2)] = null);

(statearr_32646_34859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (13))){
var inst_32574 = (state_32631[(10)]);
var inst_32581 = cljs.core.chunked_seq_QMARK_(inst_32574);
var state_32631__$1 = state_32631;
if(inst_32581){
var statearr_32650_34868 = state_32631__$1;
(statearr_32650_34868[(1)] = (16));

} else {
var statearr_32651_34870 = state_32631__$1;
(statearr_32651_34870[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (22))){
var inst_32616 = (state_32631[(2)]);
var state_32631__$1 = state_32631;
if(cljs.core.truth_(inst_32616)){
var statearr_32652_34879 = state_32631__$1;
(statearr_32652_34879[(1)] = (23));

} else {
var statearr_32656_34880 = state_32631__$1;
(statearr_32656_34880[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (6))){
var inst_32545 = (state_32631[(8)]);
var inst_32604 = (state_32631[(7)]);
var inst_32607 = (state_32631[(11)]);
var inst_32604__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32545) : topic_fn.call(null,inst_32545));
var inst_32606 = cljs.core.deref(mults);
var inst_32607__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32606,inst_32604__$1);
var state_32631__$1 = (function (){var statearr_32659 = state_32631;
(statearr_32659[(7)] = inst_32604__$1);

(statearr_32659[(11)] = inst_32607__$1);

return statearr_32659;
})();
if(cljs.core.truth_(inst_32607__$1)){
var statearr_32660_34881 = state_32631__$1;
(statearr_32660_34881[(1)] = (19));

} else {
var statearr_32662_34882 = state_32631__$1;
(statearr_32662_34882[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (25))){
var inst_32621 = (state_32631[(2)]);
var state_32631__$1 = state_32631;
var statearr_32663_34883 = state_32631__$1;
(statearr_32663_34883[(2)] = inst_32621);

(statearr_32663_34883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (17))){
var inst_32574 = (state_32631[(10)]);
var inst_32588 = cljs.core.first(inst_32574);
var inst_32590 = cljs.core.async.muxch_STAR_(inst_32588);
var inst_32591 = cljs.core.async.close_BANG_(inst_32590);
var inst_32592 = cljs.core.next(inst_32574);
var inst_32556 = inst_32592;
var inst_32557 = null;
var inst_32558 = (0);
var inst_32559 = (0);
var state_32631__$1 = (function (){var statearr_32664 = state_32631;
(statearr_32664[(12)] = inst_32591);

(statearr_32664[(13)] = inst_32556);

(statearr_32664[(14)] = inst_32557);

(statearr_32664[(15)] = inst_32558);

(statearr_32664[(16)] = inst_32559);

return statearr_32664;
})();
var statearr_32665_34889 = state_32631__$1;
(statearr_32665_34889[(2)] = null);

(statearr_32665_34889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (3))){
var inst_32629 = (state_32631[(2)]);
var state_32631__$1 = state_32631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32631__$1,inst_32629);
} else {
if((state_val_32632 === (12))){
var inst_32600 = (state_32631[(2)]);
var state_32631__$1 = state_32631;
var statearr_32666_34890 = state_32631__$1;
(statearr_32666_34890[(2)] = inst_32600);

(statearr_32666_34890[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (2))){
var state_32631__$1 = state_32631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32631__$1,(4),ch);
} else {
if((state_val_32632 === (23))){
var state_32631__$1 = state_32631;
var statearr_32667_34891 = state_32631__$1;
(statearr_32667_34891[(2)] = null);

(statearr_32667_34891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (19))){
var inst_32607 = (state_32631[(11)]);
var inst_32545 = (state_32631[(8)]);
var inst_32614 = cljs.core.async.muxch_STAR_(inst_32607);
var state_32631__$1 = state_32631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32631__$1,(22),inst_32614,inst_32545);
} else {
if((state_val_32632 === (11))){
var inst_32556 = (state_32631[(13)]);
var inst_32574 = (state_32631[(10)]);
var inst_32574__$1 = cljs.core.seq(inst_32556);
var state_32631__$1 = (function (){var statearr_32668 = state_32631;
(statearr_32668[(10)] = inst_32574__$1);

return statearr_32668;
})();
if(inst_32574__$1){
var statearr_32669_34892 = state_32631__$1;
(statearr_32669_34892[(1)] = (13));

} else {
var statearr_32670_34893 = state_32631__$1;
(statearr_32670_34893[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (9))){
var inst_32602 = (state_32631[(2)]);
var state_32631__$1 = state_32631;
var statearr_32672_34895 = state_32631__$1;
(statearr_32672_34895[(2)] = inst_32602);

(statearr_32672_34895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (5))){
var inst_32553 = cljs.core.deref(mults);
var inst_32554 = cljs.core.vals(inst_32553);
var inst_32555 = cljs.core.seq(inst_32554);
var inst_32556 = inst_32555;
var inst_32557 = null;
var inst_32558 = (0);
var inst_32559 = (0);
var state_32631__$1 = (function (){var statearr_32673 = state_32631;
(statearr_32673[(13)] = inst_32556);

(statearr_32673[(14)] = inst_32557);

(statearr_32673[(15)] = inst_32558);

(statearr_32673[(16)] = inst_32559);

return statearr_32673;
})();
var statearr_32674_34905 = state_32631__$1;
(statearr_32674_34905[(2)] = null);

(statearr_32674_34905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (14))){
var state_32631__$1 = state_32631;
var statearr_32679_34911 = state_32631__$1;
(statearr_32679_34911[(2)] = null);

(statearr_32679_34911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (16))){
var inst_32574 = (state_32631[(10)]);
var inst_32583 = cljs.core.chunk_first(inst_32574);
var inst_32584 = cljs.core.chunk_rest(inst_32574);
var inst_32585 = cljs.core.count(inst_32583);
var inst_32556 = inst_32584;
var inst_32557 = inst_32583;
var inst_32558 = inst_32585;
var inst_32559 = (0);
var state_32631__$1 = (function (){var statearr_32682 = state_32631;
(statearr_32682[(13)] = inst_32556);

(statearr_32682[(14)] = inst_32557);

(statearr_32682[(15)] = inst_32558);

(statearr_32682[(16)] = inst_32559);

return statearr_32682;
})();
var statearr_32683_34917 = state_32631__$1;
(statearr_32683_34917[(2)] = null);

(statearr_32683_34917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (10))){
var inst_32557 = (state_32631[(14)]);
var inst_32559 = (state_32631[(16)]);
var inst_32556 = (state_32631[(13)]);
var inst_32558 = (state_32631[(15)]);
var inst_32567 = cljs.core._nth(inst_32557,inst_32559);
var inst_32568 = cljs.core.async.muxch_STAR_(inst_32567);
var inst_32569 = cljs.core.async.close_BANG_(inst_32568);
var inst_32570 = (inst_32559 + (1));
var tmp32675 = inst_32557;
var tmp32676 = inst_32556;
var tmp32677 = inst_32558;
var inst_32556__$1 = tmp32676;
var inst_32557__$1 = tmp32675;
var inst_32558__$1 = tmp32677;
var inst_32559__$1 = inst_32570;
var state_32631__$1 = (function (){var statearr_32684 = state_32631;
(statearr_32684[(17)] = inst_32569);

(statearr_32684[(13)] = inst_32556__$1);

(statearr_32684[(14)] = inst_32557__$1);

(statearr_32684[(15)] = inst_32558__$1);

(statearr_32684[(16)] = inst_32559__$1);

return statearr_32684;
})();
var statearr_32685_34927 = state_32631__$1;
(statearr_32685_34927[(2)] = null);

(statearr_32685_34927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (18))){
var inst_32595 = (state_32631[(2)]);
var state_32631__$1 = state_32631;
var statearr_32686_34928 = state_32631__$1;
(statearr_32686_34928[(2)] = inst_32595);

(statearr_32686_34928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (8))){
var inst_32559 = (state_32631[(16)]);
var inst_32558 = (state_32631[(15)]);
var inst_32564 = (inst_32559 < inst_32558);
var inst_32565 = inst_32564;
var state_32631__$1 = state_32631;
if(cljs.core.truth_(inst_32565)){
var statearr_32687_34929 = state_32631__$1;
(statearr_32687_34929[(1)] = (10));

} else {
var statearr_32688_34930 = state_32631__$1;
(statearr_32688_34930[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29032__auto__ = null;
var cljs$core$async$state_machine__29032__auto____0 = (function (){
var statearr_32689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32689[(0)] = cljs$core$async$state_machine__29032__auto__);

(statearr_32689[(1)] = (1));

return statearr_32689;
});
var cljs$core$async$state_machine__29032__auto____1 = (function (state_32631){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_32631);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e32690){var ex__29035__auto__ = e32690;
var statearr_32692_34931 = state_32631;
(statearr_32692_34931[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_32631[(4)]))){
var statearr_32693_34932 = state_32631;
(statearr_32693_34932[(1)] = cljs.core.first((state_32631[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34938 = state_32631;
state_32631 = G__34938;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$state_machine__29032__auto__ = function(state_32631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29032__auto____1.call(this,state_32631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29032__auto____0;
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29032__auto____1;
return cljs$core$async$state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_32695 = f__30139__auto__();
(statearr_32695[(6)] = c__30138__auto___34846);

return statearr_32695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32703 = arguments.length;
switch (G__32703) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32709 = arguments.length;
switch (G__32709) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32711 = arguments.length;
switch (G__32711) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__30138__auto___34955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_32827){
var state_val_32828 = (state_32827[(1)]);
if((state_val_32828 === (7))){
var state_32827__$1 = state_32827;
var statearr_32835_34956 = state_32827__$1;
(statearr_32835_34956[(2)] = null);

(statearr_32835_34956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (1))){
var state_32827__$1 = state_32827;
var statearr_32839_34957 = state_32827__$1;
(statearr_32839_34957[(2)] = null);

(statearr_32839_34957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (4))){
var inst_32746 = (state_32827[(7)]);
var inst_32745 = (state_32827[(8)]);
var inst_32754 = (inst_32746 < inst_32745);
var state_32827__$1 = state_32827;
if(cljs.core.truth_(inst_32754)){
var statearr_32843_34958 = state_32827__$1;
(statearr_32843_34958[(1)] = (6));

} else {
var statearr_32844_34959 = state_32827__$1;
(statearr_32844_34959[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (15))){
var inst_32811 = (state_32827[(9)]);
var inst_32816 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32811);
var state_32827__$1 = state_32827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32827__$1,(17),out,inst_32816);
} else {
if((state_val_32828 === (13))){
var inst_32811 = (state_32827[(9)]);
var inst_32811__$1 = (state_32827[(2)]);
var inst_32812 = cljs.core.some(cljs.core.nil_QMARK_,inst_32811__$1);
var state_32827__$1 = (function (){var statearr_32852 = state_32827;
(statearr_32852[(9)] = inst_32811__$1);

return statearr_32852;
})();
if(cljs.core.truth_(inst_32812)){
var statearr_32856_34964 = state_32827__$1;
(statearr_32856_34964[(1)] = (14));

} else {
var statearr_32857_34965 = state_32827__$1;
(statearr_32857_34965[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (6))){
var state_32827__$1 = state_32827;
var statearr_32860_34971 = state_32827__$1;
(statearr_32860_34971[(2)] = null);

(statearr_32860_34971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (17))){
var inst_32818 = (state_32827[(2)]);
var state_32827__$1 = (function (){var statearr_32878 = state_32827;
(statearr_32878[(10)] = inst_32818);

return statearr_32878;
})();
var statearr_32880_34979 = state_32827__$1;
(statearr_32880_34979[(2)] = null);

(statearr_32880_34979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (3))){
var inst_32823 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32827__$1,inst_32823);
} else {
if((state_val_32828 === (12))){
var _ = (function (){var statearr_32884 = state_32827;
(statearr_32884[(4)] = cljs.core.rest((state_32827[(4)])));

return statearr_32884;
})();
var state_32827__$1 = state_32827;
var ex32874 = (state_32827__$1[(2)]);
var statearr_32885_34986 = state_32827__$1;
(statearr_32885_34986[(5)] = ex32874);


if((ex32874 instanceof Object)){
var statearr_32886_34988 = state_32827__$1;
(statearr_32886_34988[(1)] = (11));

(statearr_32886_34988[(5)] = null);

} else {
throw ex32874;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (2))){
var inst_32744 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32745 = cnt;
var inst_32746 = (0);
var state_32827__$1 = (function (){var statearr_32893 = state_32827;
(statearr_32893[(11)] = inst_32744);

(statearr_32893[(8)] = inst_32745);

(statearr_32893[(7)] = inst_32746);

return statearr_32893;
})();
var statearr_32894_34993 = state_32827__$1;
(statearr_32894_34993[(2)] = null);

(statearr_32894_34993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (11))){
var inst_32776 = (state_32827[(2)]);
var inst_32780 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32827__$1 = (function (){var statearr_32896 = state_32827;
(statearr_32896[(12)] = inst_32776);

return statearr_32896;
})();
var statearr_32898_34994 = state_32827__$1;
(statearr_32898_34994[(2)] = inst_32780);

(statearr_32898_34994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (9))){
var inst_32746 = (state_32827[(7)]);
var _ = (function (){var statearr_32899 = state_32827;
(statearr_32899[(4)] = cljs.core.cons((12),(state_32827[(4)])));

return statearr_32899;
})();
var inst_32790 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32746) : chs__$1.call(null,inst_32746));
var inst_32793 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32746) : done.call(null,inst_32746));
var inst_32794 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32790,inst_32793);
var ___$1 = (function (){var statearr_32900 = state_32827;
(statearr_32900[(4)] = cljs.core.rest((state_32827[(4)])));

return statearr_32900;
})();
var state_32827__$1 = state_32827;
var statearr_32901_35009 = state_32827__$1;
(statearr_32901_35009[(2)] = inst_32794);

(statearr_32901_35009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (5))){
var inst_32809 = (state_32827[(2)]);
var state_32827__$1 = (function (){var statearr_32902 = state_32827;
(statearr_32902[(13)] = inst_32809);

return statearr_32902;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32827__$1,(13),dchan);
} else {
if((state_val_32828 === (14))){
var inst_32814 = cljs.core.async.close_BANG_(out);
var state_32827__$1 = state_32827;
var statearr_32906_35022 = state_32827__$1;
(statearr_32906_35022[(2)] = inst_32814);

(statearr_32906_35022[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (16))){
var inst_32821 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
var statearr_32907_35034 = state_32827__$1;
(statearr_32907_35034[(2)] = inst_32821);

(statearr_32907_35034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (10))){
var inst_32746 = (state_32827[(7)]);
var inst_32797 = (state_32827[(2)]);
var inst_32803 = (inst_32746 + (1));
var inst_32746__$1 = inst_32803;
var state_32827__$1 = (function (){var statearr_32913 = state_32827;
(statearr_32913[(14)] = inst_32797);

(statearr_32913[(7)] = inst_32746__$1);

return statearr_32913;
})();
var statearr_32917_35035 = state_32827__$1;
(statearr_32917_35035[(2)] = null);

(statearr_32917_35035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (8))){
var inst_32807 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
var statearr_32920_35040 = state_32827__$1;
(statearr_32920_35040[(2)] = inst_32807);

(statearr_32920_35040[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29032__auto__ = null;
var cljs$core$async$state_machine__29032__auto____0 = (function (){
var statearr_32925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32925[(0)] = cljs$core$async$state_machine__29032__auto__);

(statearr_32925[(1)] = (1));

return statearr_32925;
});
var cljs$core$async$state_machine__29032__auto____1 = (function (state_32827){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_32827);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e32929){var ex__29035__auto__ = e32929;
var statearr_32930_35044 = state_32827;
(statearr_32930_35044[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_32827[(4)]))){
var statearr_32931_35049 = state_32827;
(statearr_32931_35049[(1)] = cljs.core.first((state_32827[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35055 = state_32827;
state_32827 = G__35055;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$state_machine__29032__auto__ = function(state_32827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29032__auto____1.call(this,state_32827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29032__auto____0;
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29032__auto____1;
return cljs$core$async$state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_32932 = f__30139__auto__();
(statearr_32932[(6)] = c__30138__auto___34955);

return statearr_32932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32940 = arguments.length;
switch (G__32940) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30138__auto___35066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_32988){
var state_val_32989 = (state_32988[(1)]);
if((state_val_32989 === (7))){
var inst_32966 = (state_32988[(7)]);
var inst_32967 = (state_32988[(8)]);
var inst_32966__$1 = (state_32988[(2)]);
var inst_32967__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32966__$1,(0),null);
var inst_32968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32966__$1,(1),null);
var inst_32969 = (inst_32967__$1 == null);
var state_32988__$1 = (function (){var statearr_32992 = state_32988;
(statearr_32992[(7)] = inst_32966__$1);

(statearr_32992[(8)] = inst_32967__$1);

(statearr_32992[(9)] = inst_32968);

return statearr_32992;
})();
if(cljs.core.truth_(inst_32969)){
var statearr_32994_35068 = state_32988__$1;
(statearr_32994_35068[(1)] = (8));

} else {
var statearr_32996_35069 = state_32988__$1;
(statearr_32996_35069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (1))){
var inst_32953 = cljs.core.vec(chs);
var inst_32954 = inst_32953;
var state_32988__$1 = (function (){var statearr_32999 = state_32988;
(statearr_32999[(10)] = inst_32954);

return statearr_32999;
})();
var statearr_33000_35073 = state_32988__$1;
(statearr_33000_35073[(2)] = null);

(statearr_33000_35073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (4))){
var inst_32954 = (state_32988[(10)]);
var state_32988__$1 = state_32988;
return cljs.core.async.ioc_alts_BANG_(state_32988__$1,(7),inst_32954);
} else {
if((state_val_32989 === (6))){
var inst_32983 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33006_35078 = state_32988__$1;
(statearr_33006_35078[(2)] = inst_32983);

(statearr_33006_35078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (3))){
var inst_32985 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32988__$1,inst_32985);
} else {
if((state_val_32989 === (2))){
var inst_32954 = (state_32988[(10)]);
var inst_32959 = cljs.core.count(inst_32954);
var inst_32960 = (inst_32959 > (0));
var state_32988__$1 = state_32988;
if(cljs.core.truth_(inst_32960)){
var statearr_33013_35080 = state_32988__$1;
(statearr_33013_35080[(1)] = (4));

} else {
var statearr_33014_35081 = state_32988__$1;
(statearr_33014_35081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (11))){
var inst_32954 = (state_32988[(10)]);
var inst_32976 = (state_32988[(2)]);
var tmp33010 = inst_32954;
var inst_32954__$1 = tmp33010;
var state_32988__$1 = (function (){var statearr_33015 = state_32988;
(statearr_33015[(11)] = inst_32976);

(statearr_33015[(10)] = inst_32954__$1);

return statearr_33015;
})();
var statearr_33016_35082 = state_32988__$1;
(statearr_33016_35082[(2)] = null);

(statearr_33016_35082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (9))){
var inst_32967 = (state_32988[(8)]);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32988__$1,(11),out,inst_32967);
} else {
if((state_val_32989 === (5))){
var inst_32981 = cljs.core.async.close_BANG_(out);
var state_32988__$1 = state_32988;
var statearr_33032_35083 = state_32988__$1;
(statearr_33032_35083[(2)] = inst_32981);

(statearr_33032_35083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (10))){
var inst_32979 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33033_35084 = state_32988__$1;
(statearr_33033_35084[(2)] = inst_32979);

(statearr_33033_35084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (8))){
var inst_32954 = (state_32988[(10)]);
var inst_32966 = (state_32988[(7)]);
var inst_32967 = (state_32988[(8)]);
var inst_32968 = (state_32988[(9)]);
var inst_32971 = (function (){var cs = inst_32954;
var vec__32962 = inst_32966;
var v = inst_32967;
var c = inst_32968;
return (function (p1__32938_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32938_SHARP_);
});
})();
var inst_32972 = cljs.core.filterv(inst_32971,inst_32954);
var inst_32954__$1 = inst_32972;
var state_32988__$1 = (function (){var statearr_33038 = state_32988;
(statearr_33038[(10)] = inst_32954__$1);

return statearr_33038;
})();
var statearr_33039_35088 = state_32988__$1;
(statearr_33039_35088[(2)] = null);

(statearr_33039_35088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29032__auto__ = null;
var cljs$core$async$state_machine__29032__auto____0 = (function (){
var statearr_33048 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33048[(0)] = cljs$core$async$state_machine__29032__auto__);

(statearr_33048[(1)] = (1));

return statearr_33048;
});
var cljs$core$async$state_machine__29032__auto____1 = (function (state_32988){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_32988);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e33049){var ex__29035__auto__ = e33049;
var statearr_33050_35096 = state_32988;
(statearr_33050_35096[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_32988[(4)]))){
var statearr_33051_35097 = state_32988;
(statearr_33051_35097[(1)] = cljs.core.first((state_32988[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35099 = state_32988;
state_32988 = G__35099;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$state_machine__29032__auto__ = function(state_32988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29032__auto____1.call(this,state_32988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29032__auto____0;
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29032__auto____1;
return cljs$core$async$state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_33052 = f__30139__auto__();
(statearr_33052[(6)] = c__30138__auto___35066);

return statearr_33052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33055 = arguments.length;
switch (G__33055) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30138__auto___35101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_33096){
var state_val_33098 = (state_33096[(1)]);
if((state_val_33098 === (7))){
var inst_33068 = (state_33096[(7)]);
var inst_33068__$1 = (state_33096[(2)]);
var inst_33069 = (inst_33068__$1 == null);
var inst_33070 = cljs.core.not(inst_33069);
var state_33096__$1 = (function (){var statearr_33111 = state_33096;
(statearr_33111[(7)] = inst_33068__$1);

return statearr_33111;
})();
if(inst_33070){
var statearr_33115_35102 = state_33096__$1;
(statearr_33115_35102[(1)] = (8));

} else {
var statearr_33116_35103 = state_33096__$1;
(statearr_33116_35103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (1))){
var inst_33061 = (0);
var state_33096__$1 = (function (){var statearr_33117 = state_33096;
(statearr_33117[(8)] = inst_33061);

return statearr_33117;
})();
var statearr_33118_35108 = state_33096__$1;
(statearr_33118_35108[(2)] = null);

(statearr_33118_35108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (4))){
var state_33096__$1 = state_33096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33096__$1,(7),ch);
} else {
if((state_val_33098 === (6))){
var inst_33087 = (state_33096[(2)]);
var state_33096__$1 = state_33096;
var statearr_33127_35110 = state_33096__$1;
(statearr_33127_35110[(2)] = inst_33087);

(statearr_33127_35110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (3))){
var inst_33089 = (state_33096[(2)]);
var inst_33091 = cljs.core.async.close_BANG_(out);
var state_33096__$1 = (function (){var statearr_33131 = state_33096;
(statearr_33131[(9)] = inst_33089);

return statearr_33131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33096__$1,inst_33091);
} else {
if((state_val_33098 === (2))){
var inst_33061 = (state_33096[(8)]);
var inst_33063 = (inst_33061 < n);
var state_33096__$1 = state_33096;
if(cljs.core.truth_(inst_33063)){
var statearr_33135_35112 = state_33096__$1;
(statearr_33135_35112[(1)] = (4));

} else {
var statearr_33136_35113 = state_33096__$1;
(statearr_33136_35113[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (11))){
var inst_33061 = (state_33096[(8)]);
var inst_33074 = (state_33096[(2)]);
var inst_33080 = (inst_33061 + (1));
var inst_33061__$1 = inst_33080;
var state_33096__$1 = (function (){var statearr_33139 = state_33096;
(statearr_33139[(10)] = inst_33074);

(statearr_33139[(8)] = inst_33061__$1);

return statearr_33139;
})();
var statearr_33140_35115 = state_33096__$1;
(statearr_33140_35115[(2)] = null);

(statearr_33140_35115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (9))){
var state_33096__$1 = state_33096;
var statearr_33141_35118 = state_33096__$1;
(statearr_33141_35118[(2)] = null);

(statearr_33141_35118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (5))){
var state_33096__$1 = state_33096;
var statearr_33142_35119 = state_33096__$1;
(statearr_33142_35119[(2)] = null);

(statearr_33142_35119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (10))){
var inst_33084 = (state_33096[(2)]);
var state_33096__$1 = state_33096;
var statearr_33145_35120 = state_33096__$1;
(statearr_33145_35120[(2)] = inst_33084);

(statearr_33145_35120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (8))){
var inst_33068 = (state_33096[(7)]);
var state_33096__$1 = state_33096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33096__$1,(11),out,inst_33068);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29032__auto__ = null;
var cljs$core$async$state_machine__29032__auto____0 = (function (){
var statearr_33158 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33158[(0)] = cljs$core$async$state_machine__29032__auto__);

(statearr_33158[(1)] = (1));

return statearr_33158;
});
var cljs$core$async$state_machine__29032__auto____1 = (function (state_33096){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_33096);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e33162){var ex__29035__auto__ = e33162;
var statearr_33163_35127 = state_33096;
(statearr_33163_35127[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_33096[(4)]))){
var statearr_33165_35128 = state_33096;
(statearr_33165_35128[(1)] = cljs.core.first((state_33096[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35129 = state_33096;
state_33096 = G__35129;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$state_machine__29032__auto__ = function(state_33096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29032__auto____1.call(this,state_33096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29032__auto____0;
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29032__auto____1;
return cljs$core$async$state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_33169 = f__30139__auto__();
(statearr_33169[(6)] = c__30138__auto___35101);

return statearr_33169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33205 = (function (f,ch,meta33189,_,fn1,meta33206){
this.f = f;
this.ch = ch;
this.meta33189 = meta33189;
this._ = _;
this.fn1 = fn1;
this.meta33206 = meta33206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33207,meta33206__$1){
var self__ = this;
var _33207__$1 = this;
return (new cljs.core.async.t_cljs$core$async33205(self__.f,self__.ch,self__.meta33189,self__._,self__.fn1,meta33206__$1));
}));

(cljs.core.async.t_cljs$core$async33205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33207){
var self__ = this;
var _33207__$1 = this;
return self__.meta33206;
}));

(cljs.core.async.t_cljs$core$async33205.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33205.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33180_SHARP_){
var G__33218 = (((p1__33180_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33180_SHARP_) : self__.f.call(null,p1__33180_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33218) : f1.call(null,G__33218));
});
}));

(cljs.core.async.t_cljs$core$async33205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33189","meta33189",1268587898,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33188","cljs.core.async/t_cljs$core$async33188",-2044614602,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33206","meta33206",1580266608,null)], null);
}));

(cljs.core.async.t_cljs$core$async33205.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33205");

(cljs.core.async.t_cljs$core$async33205.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33205");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33205.
 */
cljs.core.async.__GT_t_cljs$core$async33205 = (function cljs$core$async$__GT_t_cljs$core$async33205(f,ch,meta33189,_,fn1,meta33206){
return (new cljs.core.async.t_cljs$core$async33205(f,ch,meta33189,_,fn1,meta33206));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33188 = (function (f,ch,meta33189){
this.f = f;
this.ch = ch;
this.meta33189 = meta33189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33190,meta33189__$1){
var self__ = this;
var _33190__$1 = this;
return (new cljs.core.async.t_cljs$core$async33188(self__.f,self__.ch,meta33189__$1));
}));

(cljs.core.async.t_cljs$core$async33188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33190){
var self__ = this;
var _33190__$1 = this;
return self__.meta33189;
}));

(cljs.core.async.t_cljs$core$async33188.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33188.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33188.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33188.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33188.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33205(self__.f,self__.ch,self__.meta33189,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33222 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33222) : self__.f.call(null,G__33222));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33188.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33188.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33189","meta33189",1268587898,null)], null);
}));

(cljs.core.async.t_cljs$core$async33188.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33188");

(cljs.core.async.t_cljs$core$async33188.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33188");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33188.
 */
cljs.core.async.__GT_t_cljs$core$async33188 = (function cljs$core$async$__GT_t_cljs$core$async33188(f,ch,meta33189){
return (new cljs.core.async.t_cljs$core$async33188(f,ch,meta33189));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33188(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33228 = (function (f,ch,meta33229){
this.f = f;
this.ch = ch;
this.meta33229 = meta33229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33230,meta33229__$1){
var self__ = this;
var _33230__$1 = this;
return (new cljs.core.async.t_cljs$core$async33228(self__.f,self__.ch,meta33229__$1));
}));

(cljs.core.async.t_cljs$core$async33228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33230){
var self__ = this;
var _33230__$1 = this;
return self__.meta33229;
}));

(cljs.core.async.t_cljs$core$async33228.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33228.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33228.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33228.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33228.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33228.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33229","meta33229",-1809979051,null)], null);
}));

(cljs.core.async.t_cljs$core$async33228.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33228");

(cljs.core.async.t_cljs$core$async33228.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33228");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33228.
 */
cljs.core.async.__GT_t_cljs$core$async33228 = (function cljs$core$async$__GT_t_cljs$core$async33228(f,ch,meta33229){
return (new cljs.core.async.t_cljs$core$async33228(f,ch,meta33229));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33228(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33247 = (function (p,ch,meta33248){
this.p = p;
this.ch = ch;
this.meta33248 = meta33248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33249,meta33248__$1){
var self__ = this;
var _33249__$1 = this;
return (new cljs.core.async.t_cljs$core$async33247(self__.p,self__.ch,meta33248__$1));
}));

(cljs.core.async.t_cljs$core$async33247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33249){
var self__ = this;
var _33249__$1 = this;
return self__.meta33248;
}));

(cljs.core.async.t_cljs$core$async33247.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33247.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33247.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33247.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33247.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33247.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33247.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33248","meta33248",1727310816,null)], null);
}));

(cljs.core.async.t_cljs$core$async33247.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33247");

(cljs.core.async.t_cljs$core$async33247.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33247");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33247.
 */
cljs.core.async.__GT_t_cljs$core$async33247 = (function cljs$core$async$__GT_t_cljs$core$async33247(p,ch,meta33248){
return (new cljs.core.async.t_cljs$core$async33247(p,ch,meta33248));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33247(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33272 = arguments.length;
switch (G__33272) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30138__auto___35178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_33297){
var state_val_33298 = (state_33297[(1)]);
if((state_val_33298 === (7))){
var inst_33293 = (state_33297[(2)]);
var state_33297__$1 = state_33297;
var statearr_33304_35179 = state_33297__$1;
(statearr_33304_35179[(2)] = inst_33293);

(statearr_33304_35179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (1))){
var state_33297__$1 = state_33297;
var statearr_33305_35182 = state_33297__$1;
(statearr_33305_35182[(2)] = null);

(statearr_33305_35182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (4))){
var inst_33279 = (state_33297[(7)]);
var inst_33279__$1 = (state_33297[(2)]);
var inst_33280 = (inst_33279__$1 == null);
var state_33297__$1 = (function (){var statearr_33306 = state_33297;
(statearr_33306[(7)] = inst_33279__$1);

return statearr_33306;
})();
if(cljs.core.truth_(inst_33280)){
var statearr_33307_35186 = state_33297__$1;
(statearr_33307_35186[(1)] = (5));

} else {
var statearr_33308_35187 = state_33297__$1;
(statearr_33308_35187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (6))){
var inst_33279 = (state_33297[(7)]);
var inst_33284 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33279) : p.call(null,inst_33279));
var state_33297__$1 = state_33297;
if(cljs.core.truth_(inst_33284)){
var statearr_33309_35189 = state_33297__$1;
(statearr_33309_35189[(1)] = (8));

} else {
var statearr_33310_35190 = state_33297__$1;
(statearr_33310_35190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (3))){
var inst_33295 = (state_33297[(2)]);
var state_33297__$1 = state_33297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33297__$1,inst_33295);
} else {
if((state_val_33298 === (2))){
var state_33297__$1 = state_33297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33297__$1,(4),ch);
} else {
if((state_val_33298 === (11))){
var inst_33287 = (state_33297[(2)]);
var state_33297__$1 = state_33297;
var statearr_33314_35196 = state_33297__$1;
(statearr_33314_35196[(2)] = inst_33287);

(statearr_33314_35196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (9))){
var state_33297__$1 = state_33297;
var statearr_33315_35198 = state_33297__$1;
(statearr_33315_35198[(2)] = null);

(statearr_33315_35198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (5))){
var inst_33282 = cljs.core.async.close_BANG_(out);
var state_33297__$1 = state_33297;
var statearr_33316_35199 = state_33297__$1;
(statearr_33316_35199[(2)] = inst_33282);

(statearr_33316_35199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (10))){
var inst_33290 = (state_33297[(2)]);
var state_33297__$1 = (function (){var statearr_33318 = state_33297;
(statearr_33318[(8)] = inst_33290);

return statearr_33318;
})();
var statearr_33319_35200 = state_33297__$1;
(statearr_33319_35200[(2)] = null);

(statearr_33319_35200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (8))){
var inst_33279 = (state_33297[(7)]);
var state_33297__$1 = state_33297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33297__$1,(11),out,inst_33279);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29032__auto__ = null;
var cljs$core$async$state_machine__29032__auto____0 = (function (){
var statearr_33321 = [null,null,null,null,null,null,null,null,null];
(statearr_33321[(0)] = cljs$core$async$state_machine__29032__auto__);

(statearr_33321[(1)] = (1));

return statearr_33321;
});
var cljs$core$async$state_machine__29032__auto____1 = (function (state_33297){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_33297);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e33326){var ex__29035__auto__ = e33326;
var statearr_33327_35204 = state_33297;
(statearr_33327_35204[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_33297[(4)]))){
var statearr_33328_35209 = state_33297;
(statearr_33328_35209[(1)] = cljs.core.first((state_33297[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35213 = state_33297;
state_33297 = G__35213;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$state_machine__29032__auto__ = function(state_33297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29032__auto____1.call(this,state_33297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29032__auto____0;
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29032__auto____1;
return cljs$core$async$state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_33329 = f__30139__auto__();
(statearr_33329[(6)] = c__30138__auto___35178);

return statearr_33329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33345 = arguments.length;
switch (G__33345) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30138__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_33430){
var state_val_33431 = (state_33430[(1)]);
if((state_val_33431 === (7))){
var inst_33422 = (state_33430[(2)]);
var state_33430__$1 = state_33430;
var statearr_33436_35219 = state_33430__$1;
(statearr_33436_35219[(2)] = inst_33422);

(statearr_33436_35219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (20))){
var inst_33383 = (state_33430[(7)]);
var inst_33399 = (state_33430[(2)]);
var inst_33400 = cljs.core.next(inst_33383);
var inst_33364 = inst_33400;
var inst_33365 = null;
var inst_33366 = (0);
var inst_33367 = (0);
var state_33430__$1 = (function (){var statearr_33438 = state_33430;
(statearr_33438[(8)] = inst_33399);

(statearr_33438[(9)] = inst_33364);

(statearr_33438[(10)] = inst_33365);

(statearr_33438[(11)] = inst_33366);

(statearr_33438[(12)] = inst_33367);

return statearr_33438;
})();
var statearr_33439_35220 = state_33430__$1;
(statearr_33439_35220[(2)] = null);

(statearr_33439_35220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (1))){
var state_33430__$1 = state_33430;
var statearr_33440_35221 = state_33430__$1;
(statearr_33440_35221[(2)] = null);

(statearr_33440_35221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (4))){
var inst_33353 = (state_33430[(13)]);
var inst_33353__$1 = (state_33430[(2)]);
var inst_33354 = (inst_33353__$1 == null);
var state_33430__$1 = (function (){var statearr_33457 = state_33430;
(statearr_33457[(13)] = inst_33353__$1);

return statearr_33457;
})();
if(cljs.core.truth_(inst_33354)){
var statearr_33458_35222 = state_33430__$1;
(statearr_33458_35222[(1)] = (5));

} else {
var statearr_33461_35223 = state_33430__$1;
(statearr_33461_35223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (15))){
var state_33430__$1 = state_33430;
var statearr_33467_35224 = state_33430__$1;
(statearr_33467_35224[(2)] = null);

(statearr_33467_35224[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (21))){
var state_33430__$1 = state_33430;
var statearr_33468_35225 = state_33430__$1;
(statearr_33468_35225[(2)] = null);

(statearr_33468_35225[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (13))){
var inst_33367 = (state_33430[(12)]);
var inst_33364 = (state_33430[(9)]);
var inst_33365 = (state_33430[(10)]);
var inst_33366 = (state_33430[(11)]);
var inst_33375 = (state_33430[(2)]);
var inst_33379 = (inst_33367 + (1));
var tmp33464 = inst_33366;
var tmp33465 = inst_33364;
var tmp33466 = inst_33365;
var inst_33364__$1 = tmp33465;
var inst_33365__$1 = tmp33466;
var inst_33366__$1 = tmp33464;
var inst_33367__$1 = inst_33379;
var state_33430__$1 = (function (){var statearr_33470 = state_33430;
(statearr_33470[(14)] = inst_33375);

(statearr_33470[(9)] = inst_33364__$1);

(statearr_33470[(10)] = inst_33365__$1);

(statearr_33470[(11)] = inst_33366__$1);

(statearr_33470[(12)] = inst_33367__$1);

return statearr_33470;
})();
var statearr_33473_35226 = state_33430__$1;
(statearr_33473_35226[(2)] = null);

(statearr_33473_35226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (22))){
var state_33430__$1 = state_33430;
var statearr_33476_35227 = state_33430__$1;
(statearr_33476_35227[(2)] = null);

(statearr_33476_35227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (6))){
var inst_33353 = (state_33430[(13)]);
var inst_33362 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33353) : f.call(null,inst_33353));
var inst_33363 = cljs.core.seq(inst_33362);
var inst_33364 = inst_33363;
var inst_33365 = null;
var inst_33366 = (0);
var inst_33367 = (0);
var state_33430__$1 = (function (){var statearr_33478 = state_33430;
(statearr_33478[(9)] = inst_33364);

(statearr_33478[(10)] = inst_33365);

(statearr_33478[(11)] = inst_33366);

(statearr_33478[(12)] = inst_33367);

return statearr_33478;
})();
var statearr_33479_35228 = state_33430__$1;
(statearr_33479_35228[(2)] = null);

(statearr_33479_35228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (17))){
var inst_33383 = (state_33430[(7)]);
var inst_33391 = cljs.core.chunk_first(inst_33383);
var inst_33392 = cljs.core.chunk_rest(inst_33383);
var inst_33394 = cljs.core.count(inst_33391);
var inst_33364 = inst_33392;
var inst_33365 = inst_33391;
var inst_33366 = inst_33394;
var inst_33367 = (0);
var state_33430__$1 = (function (){var statearr_33483 = state_33430;
(statearr_33483[(9)] = inst_33364);

(statearr_33483[(10)] = inst_33365);

(statearr_33483[(11)] = inst_33366);

(statearr_33483[(12)] = inst_33367);

return statearr_33483;
})();
var statearr_33486_35229 = state_33430__$1;
(statearr_33486_35229[(2)] = null);

(statearr_33486_35229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (3))){
var inst_33424 = (state_33430[(2)]);
var state_33430__$1 = state_33430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33430__$1,inst_33424);
} else {
if((state_val_33431 === (12))){
var inst_33408 = (state_33430[(2)]);
var state_33430__$1 = state_33430;
var statearr_33489_35230 = state_33430__$1;
(statearr_33489_35230[(2)] = inst_33408);

(statearr_33489_35230[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (2))){
var state_33430__$1 = state_33430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33430__$1,(4),in$);
} else {
if((state_val_33431 === (23))){
var inst_33420 = (state_33430[(2)]);
var state_33430__$1 = state_33430;
var statearr_33501_35232 = state_33430__$1;
(statearr_33501_35232[(2)] = inst_33420);

(statearr_33501_35232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (19))){
var inst_33403 = (state_33430[(2)]);
var state_33430__$1 = state_33430;
var statearr_33502_35233 = state_33430__$1;
(statearr_33502_35233[(2)] = inst_33403);

(statearr_33502_35233[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (11))){
var inst_33364 = (state_33430[(9)]);
var inst_33383 = (state_33430[(7)]);
var inst_33383__$1 = cljs.core.seq(inst_33364);
var state_33430__$1 = (function (){var statearr_33512 = state_33430;
(statearr_33512[(7)] = inst_33383__$1);

return statearr_33512;
})();
if(inst_33383__$1){
var statearr_33513_35234 = state_33430__$1;
(statearr_33513_35234[(1)] = (14));

} else {
var statearr_33514_35235 = state_33430__$1;
(statearr_33514_35235[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (9))){
var inst_33410 = (state_33430[(2)]);
var inst_33415 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33430__$1 = (function (){var statearr_33515 = state_33430;
(statearr_33515[(15)] = inst_33410);

return statearr_33515;
})();
if(cljs.core.truth_(inst_33415)){
var statearr_33516_35236 = state_33430__$1;
(statearr_33516_35236[(1)] = (21));

} else {
var statearr_33517_35237 = state_33430__$1;
(statearr_33517_35237[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (5))){
var inst_33356 = cljs.core.async.close_BANG_(out);
var state_33430__$1 = state_33430;
var statearr_33522_35238 = state_33430__$1;
(statearr_33522_35238[(2)] = inst_33356);

(statearr_33522_35238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (14))){
var inst_33383 = (state_33430[(7)]);
var inst_33389 = cljs.core.chunked_seq_QMARK_(inst_33383);
var state_33430__$1 = state_33430;
if(inst_33389){
var statearr_33523_35239 = state_33430__$1;
(statearr_33523_35239[(1)] = (17));

} else {
var statearr_33524_35240 = state_33430__$1;
(statearr_33524_35240[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (16))){
var inst_33406 = (state_33430[(2)]);
var state_33430__$1 = state_33430;
var statearr_33535_35241 = state_33430__$1;
(statearr_33535_35241[(2)] = inst_33406);

(statearr_33535_35241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (10))){
var inst_33365 = (state_33430[(10)]);
var inst_33367 = (state_33430[(12)]);
var inst_33372 = cljs.core._nth(inst_33365,inst_33367);
var state_33430__$1 = state_33430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33430__$1,(13),out,inst_33372);
} else {
if((state_val_33431 === (18))){
var inst_33383 = (state_33430[(7)]);
var inst_33397 = cljs.core.first(inst_33383);
var state_33430__$1 = state_33430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33430__$1,(20),out,inst_33397);
} else {
if((state_val_33431 === (8))){
var inst_33367 = (state_33430[(12)]);
var inst_33366 = (state_33430[(11)]);
var inst_33369 = (inst_33367 < inst_33366);
var inst_33370 = inst_33369;
var state_33430__$1 = state_33430;
if(cljs.core.truth_(inst_33370)){
var statearr_33547_35242 = state_33430__$1;
(statearr_33547_35242[(1)] = (10));

} else {
var statearr_33548_35243 = state_33430__$1;
(statearr_33548_35243[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29032__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29032__auto____0 = (function (){
var statearr_33552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33552[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29032__auto__);

(statearr_33552[(1)] = (1));

return statearr_33552;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29032__auto____1 = (function (state_33430){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_33430);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e33556){var ex__29035__auto__ = e33556;
var statearr_33563_35244 = state_33430;
(statearr_33563_35244[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_33430[(4)]))){
var statearr_33564_35245 = state_33430;
(statearr_33564_35245[(1)] = cljs.core.first((state_33430[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35246 = state_33430;
state_33430 = G__35246;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29032__auto__ = function(state_33430){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29032__auto____1.call(this,state_33430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29032__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29032__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_33578 = f__30139__auto__();
(statearr_33578[(6)] = c__30138__auto__);

return statearr_33578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));

return c__30138__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33580 = arguments.length;
switch (G__33580) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33593 = arguments.length;
switch (G__33593) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33600 = arguments.length;
switch (G__33600) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30138__auto___35250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_33644){
var state_val_33645 = (state_33644[(1)]);
if((state_val_33645 === (7))){
var inst_33639 = (state_33644[(2)]);
var state_33644__$1 = state_33644;
var statearr_33649_35254 = state_33644__$1;
(statearr_33649_35254[(2)] = inst_33639);

(statearr_33649_35254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33645 === (1))){
var inst_33613 = null;
var state_33644__$1 = (function (){var statearr_33655 = state_33644;
(statearr_33655[(7)] = inst_33613);

return statearr_33655;
})();
var statearr_33658_35255 = state_33644__$1;
(statearr_33658_35255[(2)] = null);

(statearr_33658_35255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33645 === (4))){
var inst_33620 = (state_33644[(8)]);
var inst_33620__$1 = (state_33644[(2)]);
var inst_33625 = (inst_33620__$1 == null);
var inst_33626 = cljs.core.not(inst_33625);
var state_33644__$1 = (function (){var statearr_33660 = state_33644;
(statearr_33660[(8)] = inst_33620__$1);

return statearr_33660;
})();
if(inst_33626){
var statearr_33661_35260 = state_33644__$1;
(statearr_33661_35260[(1)] = (5));

} else {
var statearr_33664_35261 = state_33644__$1;
(statearr_33664_35261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33645 === (6))){
var state_33644__$1 = state_33644;
var statearr_33666_35262 = state_33644__$1;
(statearr_33666_35262[(2)] = null);

(statearr_33666_35262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33645 === (3))){
var inst_33641 = (state_33644[(2)]);
var inst_33642 = cljs.core.async.close_BANG_(out);
var state_33644__$1 = (function (){var statearr_33670 = state_33644;
(statearr_33670[(9)] = inst_33641);

return statearr_33670;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33644__$1,inst_33642);
} else {
if((state_val_33645 === (2))){
var state_33644__$1 = state_33644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33644__$1,(4),ch);
} else {
if((state_val_33645 === (11))){
var inst_33620 = (state_33644[(8)]);
var inst_33633 = (state_33644[(2)]);
var inst_33613 = inst_33620;
var state_33644__$1 = (function (){var statearr_33675 = state_33644;
(statearr_33675[(10)] = inst_33633);

(statearr_33675[(7)] = inst_33613);

return statearr_33675;
})();
var statearr_33677_35263 = state_33644__$1;
(statearr_33677_35263[(2)] = null);

(statearr_33677_35263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33645 === (9))){
var inst_33620 = (state_33644[(8)]);
var state_33644__$1 = state_33644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33644__$1,(11),out,inst_33620);
} else {
if((state_val_33645 === (5))){
var inst_33620 = (state_33644[(8)]);
var inst_33613 = (state_33644[(7)]);
var inst_33628 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33620,inst_33613);
var state_33644__$1 = state_33644;
if(inst_33628){
var statearr_33684_35264 = state_33644__$1;
(statearr_33684_35264[(1)] = (8));

} else {
var statearr_33685_35265 = state_33644__$1;
(statearr_33685_35265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33645 === (10))){
var inst_33636 = (state_33644[(2)]);
var state_33644__$1 = state_33644;
var statearr_33687_35266 = state_33644__$1;
(statearr_33687_35266[(2)] = inst_33636);

(statearr_33687_35266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33645 === (8))){
var inst_33613 = (state_33644[(7)]);
var tmp33683 = inst_33613;
var inst_33613__$1 = tmp33683;
var state_33644__$1 = (function (){var statearr_33690 = state_33644;
(statearr_33690[(7)] = inst_33613__$1);

return statearr_33690;
})();
var statearr_33691_35267 = state_33644__$1;
(statearr_33691_35267[(2)] = null);

(statearr_33691_35267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29032__auto__ = null;
var cljs$core$async$state_machine__29032__auto____0 = (function (){
var statearr_33695 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33695[(0)] = cljs$core$async$state_machine__29032__auto__);

(statearr_33695[(1)] = (1));

return statearr_33695;
});
var cljs$core$async$state_machine__29032__auto____1 = (function (state_33644){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_33644);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e33696){var ex__29035__auto__ = e33696;
var statearr_33697_35268 = state_33644;
(statearr_33697_35268[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_33644[(4)]))){
var statearr_33699_35269 = state_33644;
(statearr_33699_35269[(1)] = cljs.core.first((state_33644[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35270 = state_33644;
state_33644 = G__35270;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$state_machine__29032__auto__ = function(state_33644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29032__auto____1.call(this,state_33644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29032__auto____0;
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29032__auto____1;
return cljs$core$async$state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_33705 = f__30139__auto__();
(statearr_33705[(6)] = c__30138__auto___35250);

return statearr_33705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33711 = arguments.length;
switch (G__33711) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30138__auto___35275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_33775){
var state_val_33776 = (state_33775[(1)]);
if((state_val_33776 === (7))){
var inst_33768 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33777_35278 = state_33775__$1;
(statearr_33777_35278[(2)] = inst_33768);

(statearr_33777_35278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (1))){
var inst_33725 = (new Array(n));
var inst_33726 = inst_33725;
var inst_33727 = (0);
var state_33775__$1 = (function (){var statearr_33786 = state_33775;
(statearr_33786[(7)] = inst_33726);

(statearr_33786[(8)] = inst_33727);

return statearr_33786;
})();
var statearr_33787_35283 = state_33775__$1;
(statearr_33787_35283[(2)] = null);

(statearr_33787_35283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (4))){
var inst_33730 = (state_33775[(9)]);
var inst_33730__$1 = (state_33775[(2)]);
var inst_33737 = (inst_33730__$1 == null);
var inst_33738 = cljs.core.not(inst_33737);
var state_33775__$1 = (function (){var statearr_33788 = state_33775;
(statearr_33788[(9)] = inst_33730__$1);

return statearr_33788;
})();
if(inst_33738){
var statearr_33789_35284 = state_33775__$1;
(statearr_33789_35284[(1)] = (5));

} else {
var statearr_33790_35285 = state_33775__$1;
(statearr_33790_35285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (15))){
var inst_33761 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33797_35286 = state_33775__$1;
(statearr_33797_35286[(2)] = inst_33761);

(statearr_33797_35286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (13))){
var state_33775__$1 = state_33775;
var statearr_33798_35287 = state_33775__$1;
(statearr_33798_35287[(2)] = null);

(statearr_33798_35287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (6))){
var inst_33727 = (state_33775[(8)]);
var inst_33757 = (inst_33727 > (0));
var state_33775__$1 = state_33775;
if(cljs.core.truth_(inst_33757)){
var statearr_33800_35288 = state_33775__$1;
(statearr_33800_35288[(1)] = (12));

} else {
var statearr_33801_35289 = state_33775__$1;
(statearr_33801_35289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (3))){
var inst_33773 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33775__$1,inst_33773);
} else {
if((state_val_33776 === (12))){
var inst_33726 = (state_33775[(7)]);
var inst_33759 = cljs.core.vec(inst_33726);
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33775__$1,(15),out,inst_33759);
} else {
if((state_val_33776 === (2))){
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33775__$1,(4),ch);
} else {
if((state_val_33776 === (11))){
var inst_33751 = (state_33775[(2)]);
var inst_33752 = (new Array(n));
var inst_33726 = inst_33752;
var inst_33727 = (0);
var state_33775__$1 = (function (){var statearr_33804 = state_33775;
(statearr_33804[(10)] = inst_33751);

(statearr_33804[(7)] = inst_33726);

(statearr_33804[(8)] = inst_33727);

return statearr_33804;
})();
var statearr_33805_35296 = state_33775__$1;
(statearr_33805_35296[(2)] = null);

(statearr_33805_35296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (9))){
var inst_33726 = (state_33775[(7)]);
var inst_33749 = cljs.core.vec(inst_33726);
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33775__$1,(11),out,inst_33749);
} else {
if((state_val_33776 === (5))){
var inst_33726 = (state_33775[(7)]);
var inst_33727 = (state_33775[(8)]);
var inst_33730 = (state_33775[(9)]);
var inst_33741 = (state_33775[(11)]);
var inst_33740 = (inst_33726[inst_33727] = inst_33730);
var inst_33741__$1 = (inst_33727 + (1));
var inst_33742 = (inst_33741__$1 < n);
var state_33775__$1 = (function (){var statearr_33806 = state_33775;
(statearr_33806[(12)] = inst_33740);

(statearr_33806[(11)] = inst_33741__$1);

return statearr_33806;
})();
if(cljs.core.truth_(inst_33742)){
var statearr_33807_35297 = state_33775__$1;
(statearr_33807_35297[(1)] = (8));

} else {
var statearr_33808_35298 = state_33775__$1;
(statearr_33808_35298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (14))){
var inst_33764 = (state_33775[(2)]);
var inst_33766 = cljs.core.async.close_BANG_(out);
var state_33775__$1 = (function (){var statearr_33810 = state_33775;
(statearr_33810[(13)] = inst_33764);

return statearr_33810;
})();
var statearr_33816_35303 = state_33775__$1;
(statearr_33816_35303[(2)] = inst_33766);

(statearr_33816_35303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (10))){
var inst_33755 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33817_35307 = state_33775__$1;
(statearr_33817_35307[(2)] = inst_33755);

(statearr_33817_35307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (8))){
var inst_33726 = (state_33775[(7)]);
var inst_33741 = (state_33775[(11)]);
var tmp33809 = inst_33726;
var inst_33726__$1 = tmp33809;
var inst_33727 = inst_33741;
var state_33775__$1 = (function (){var statearr_33823 = state_33775;
(statearr_33823[(7)] = inst_33726__$1);

(statearr_33823[(8)] = inst_33727);

return statearr_33823;
})();
var statearr_33824_35310 = state_33775__$1;
(statearr_33824_35310[(2)] = null);

(statearr_33824_35310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29032__auto__ = null;
var cljs$core$async$state_machine__29032__auto____0 = (function (){
var statearr_33825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33825[(0)] = cljs$core$async$state_machine__29032__auto__);

(statearr_33825[(1)] = (1));

return statearr_33825;
});
var cljs$core$async$state_machine__29032__auto____1 = (function (state_33775){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_33775);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e33826){var ex__29035__auto__ = e33826;
var statearr_33830_35313 = state_33775;
(statearr_33830_35313[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_33775[(4)]))){
var statearr_33831_35314 = state_33775;
(statearr_33831_35314[(1)] = cljs.core.first((state_33775[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35317 = state_33775;
state_33775 = G__35317;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$state_machine__29032__auto__ = function(state_33775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29032__auto____1.call(this,state_33775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29032__auto____0;
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29032__auto____1;
return cljs$core$async$state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_33833 = f__30139__auto__();
(statearr_33833[(6)] = c__30138__auto___35275);

return statearr_33833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33840 = arguments.length;
switch (G__33840) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30138__auto___35322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30139__auto__ = (function (){var switch__29031__auto__ = (function (state_33925){
var state_val_33928 = (state_33925[(1)]);
if((state_val_33928 === (7))){
var inst_33905 = (state_33925[(2)]);
var state_33925__$1 = state_33925;
var statearr_33932_35324 = state_33925__$1;
(statearr_33932_35324[(2)] = inst_33905);

(statearr_33932_35324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (1))){
var inst_33846 = [];
var inst_33847 = inst_33846;
var inst_33848 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33925__$1 = (function (){var statearr_33936 = state_33925;
(statearr_33936[(7)] = inst_33847);

(statearr_33936[(8)] = inst_33848);

return statearr_33936;
})();
var statearr_33940_35330 = state_33925__$1;
(statearr_33940_35330[(2)] = null);

(statearr_33940_35330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (4))){
var inst_33851 = (state_33925[(9)]);
var inst_33851__$1 = (state_33925[(2)]);
var inst_33852 = (inst_33851__$1 == null);
var inst_33853 = cljs.core.not(inst_33852);
var state_33925__$1 = (function (){var statearr_33948 = state_33925;
(statearr_33948[(9)] = inst_33851__$1);

return statearr_33948;
})();
if(inst_33853){
var statearr_33949_35336 = state_33925__$1;
(statearr_33949_35336[(1)] = (5));

} else {
var statearr_33955_35337 = state_33925__$1;
(statearr_33955_35337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (15))){
var inst_33847 = (state_33925[(7)]);
var inst_33894 = cljs.core.vec(inst_33847);
var state_33925__$1 = state_33925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33925__$1,(18),out,inst_33894);
} else {
if((state_val_33928 === (13))){
var inst_33882 = (state_33925[(2)]);
var state_33925__$1 = state_33925;
var statearr_33957_35339 = state_33925__$1;
(statearr_33957_35339[(2)] = inst_33882);

(statearr_33957_35339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (6))){
var inst_33847 = (state_33925[(7)]);
var inst_33887 = inst_33847.length;
var inst_33888 = (inst_33887 > (0));
var state_33925__$1 = state_33925;
if(cljs.core.truth_(inst_33888)){
var statearr_33958_35345 = state_33925__$1;
(statearr_33958_35345[(1)] = (15));

} else {
var statearr_33959_35346 = state_33925__$1;
(statearr_33959_35346[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (17))){
var inst_33899 = (state_33925[(2)]);
var inst_33900 = cljs.core.async.close_BANG_(out);
var state_33925__$1 = (function (){var statearr_33961 = state_33925;
(statearr_33961[(10)] = inst_33899);

return statearr_33961;
})();
var statearr_33962_35352 = state_33925__$1;
(statearr_33962_35352[(2)] = inst_33900);

(statearr_33962_35352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (3))){
var inst_33910 = (state_33925[(2)]);
var state_33925__$1 = state_33925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33925__$1,inst_33910);
} else {
if((state_val_33928 === (12))){
var inst_33847 = (state_33925[(7)]);
var inst_33869 = cljs.core.vec(inst_33847);
var state_33925__$1 = state_33925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33925__$1,(14),out,inst_33869);
} else {
if((state_val_33928 === (2))){
var state_33925__$1 = state_33925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33925__$1,(4),ch);
} else {
if((state_val_33928 === (11))){
var inst_33847 = (state_33925[(7)]);
var inst_33851 = (state_33925[(9)]);
var inst_33855 = (state_33925[(11)]);
var inst_33863 = inst_33847.push(inst_33851);
var tmp33963 = inst_33847;
var inst_33847__$1 = tmp33963;
var inst_33848 = inst_33855;
var state_33925__$1 = (function (){var statearr_33967 = state_33925;
(statearr_33967[(12)] = inst_33863);

(statearr_33967[(7)] = inst_33847__$1);

(statearr_33967[(8)] = inst_33848);

return statearr_33967;
})();
var statearr_33968_35354 = state_33925__$1;
(statearr_33968_35354[(2)] = null);

(statearr_33968_35354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (9))){
var inst_33848 = (state_33925[(8)]);
var inst_33859 = cljs.core.keyword_identical_QMARK_(inst_33848,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33925__$1 = state_33925;
var statearr_33969_35355 = state_33925__$1;
(statearr_33969_35355[(2)] = inst_33859);

(statearr_33969_35355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (5))){
var inst_33851 = (state_33925[(9)]);
var inst_33855 = (state_33925[(11)]);
var inst_33848 = (state_33925[(8)]);
var inst_33856 = (state_33925[(13)]);
var inst_33855__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33851) : f.call(null,inst_33851));
var inst_33856__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33855__$1,inst_33848);
var state_33925__$1 = (function (){var statearr_33970 = state_33925;
(statearr_33970[(11)] = inst_33855__$1);

(statearr_33970[(13)] = inst_33856__$1);

return statearr_33970;
})();
if(inst_33856__$1){
var statearr_33971_35356 = state_33925__$1;
(statearr_33971_35356[(1)] = (8));

} else {
var statearr_33972_35357 = state_33925__$1;
(statearr_33972_35357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (14))){
var inst_33851 = (state_33925[(9)]);
var inst_33855 = (state_33925[(11)]);
var inst_33871 = (state_33925[(2)]);
var inst_33875 = [];
var inst_33876 = inst_33875.push(inst_33851);
var inst_33847 = inst_33875;
var inst_33848 = inst_33855;
var state_33925__$1 = (function (){var statearr_33974 = state_33925;
(statearr_33974[(14)] = inst_33871);

(statearr_33974[(15)] = inst_33876);

(statearr_33974[(7)] = inst_33847);

(statearr_33974[(8)] = inst_33848);

return statearr_33974;
})();
var statearr_33976_35358 = state_33925__$1;
(statearr_33976_35358[(2)] = null);

(statearr_33976_35358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (16))){
var state_33925__$1 = state_33925;
var statearr_33977_35359 = state_33925__$1;
(statearr_33977_35359[(2)] = null);

(statearr_33977_35359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (10))){
var inst_33861 = (state_33925[(2)]);
var state_33925__$1 = state_33925;
if(cljs.core.truth_(inst_33861)){
var statearr_33979_35361 = state_33925__$1;
(statearr_33979_35361[(1)] = (11));

} else {
var statearr_33980_35362 = state_33925__$1;
(statearr_33980_35362[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (18))){
var inst_33896 = (state_33925[(2)]);
var state_33925__$1 = state_33925;
var statearr_33981_35363 = state_33925__$1;
(statearr_33981_35363[(2)] = inst_33896);

(statearr_33981_35363[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (8))){
var inst_33856 = (state_33925[(13)]);
var state_33925__$1 = state_33925;
var statearr_33982_35364 = state_33925__$1;
(statearr_33982_35364[(2)] = inst_33856);

(statearr_33982_35364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29032__auto__ = null;
var cljs$core$async$state_machine__29032__auto____0 = (function (){
var statearr_33984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33984[(0)] = cljs$core$async$state_machine__29032__auto__);

(statearr_33984[(1)] = (1));

return statearr_33984;
});
var cljs$core$async$state_machine__29032__auto____1 = (function (state_33925){
while(true){
var ret_value__29033__auto__ = (function (){try{while(true){
var result__29034__auto__ = switch__29031__auto__(state_33925);
if(cljs.core.keyword_identical_QMARK_(result__29034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29034__auto__;
}
break;
}
}catch (e33985){var ex__29035__auto__ = e33985;
var statearr_33987_35365 = state_33925;
(statearr_33987_35365[(2)] = ex__29035__auto__);


if(cljs.core.seq((state_33925[(4)]))){
var statearr_33988_35366 = state_33925;
(statearr_33988_35366[(1)] = cljs.core.first((state_33925[(4)])));

} else {
throw ex__29035__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35367 = state_33925;
state_33925 = G__35367;
continue;
} else {
return ret_value__29033__auto__;
}
break;
}
});
cljs$core$async$state_machine__29032__auto__ = function(state_33925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29032__auto____1.call(this,state_33925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29032__auto____0;
cljs$core$async$state_machine__29032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29032__auto____1;
return cljs$core$async$state_machine__29032__auto__;
})()
})();
var state__30140__auto__ = (function (){var statearr_33990 = f__30139__auto__();
(statearr_33990[(6)] = c__30138__auto___35322);

return statearr_33990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30140__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
