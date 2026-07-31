import { $a as ɵɵdefineComponent, $c as effect, $n as Output, A as contentChild, Bl as operate, Bs as ɵɵtemplate, Bt as computed, Ca as ɵɵconditionalCreate, Dr as ViewEncapsulation, Ds as ɵɵsanitizeHtml, Ei as provideAppInitializer, En as ElementRef, Eo as ɵɵgetInheritedFactory, Er as ViewContainerRef, Es as ɵɵresolveWindow, Fc as PLATFORM_ID, Fl as map, Fn as Injectable, Fs as ɵɵstoreLet, Gl as SafeSubscriber, Hi as setClassMetadata, Hl as pipe, Hs as ɵɵtext, Il as BehaviorSubject, In as Input, Jl as Subscription, Jo as ɵɵloadQuery, Kl as noop, Ko as ɵɵinvalidFactory, Ll as Subject, Ls as ɵɵstyleProp, M as createComponent, Ml as ɵɵnamespaceSVG, Mr as afterNextRender, Nc as NgZone, Nl as ɵɵresetView, O as booleanAttribute, Oa as ɵɵdeclareLet, Ol as ɵɵinject, Pl as ɵɵrestoreView, Qn as Optional, Qo as ɵɵpipeBind2, Rl as createOperatorSubscriber, S as ViewChild, Ss as ɵɵrepeaterTrackByIndex, Ta as ɵɵcontentQuerySignal, Tc as Injector, Tl as ɵɵdefineInjector, To as ɵɵgetCurrentView, Ts as ɵɵresolveDocument, Ul as identity, Us as ɵɵtextInterpolate, Vc as RuntimeError, Vl as Observable, Wc as VERSION, Ws as ɵɵtextInterpolate1, Wt as linkedSignal, X as input, Xc as assertNotInReactiveContext, Xo as ɵɵpipe, Yc as assertInInjectionContext, Yl as arrRemove, Yo as ɵɵnextContext, Zl as isFunction, Zo as ɵɵpipeBind1, _a as ɵɵattribute, _o as ɵɵelementContainerStart, _s as ɵɵreadContextLet, aa as ɵɵHostDirectivesFeature, ac as ɵɵviewQuery, al as inject, an as ChangeDetectionStrategy, ao as ɵɵdomElement, ar as RendererFactory2, as as ɵɵpureFunction0, at as output, au as __spreadArray, bs as ɵɵrepeaterCreate, ca as ɵɵProvidersFeature, cl as isSignal, cn as Component, dr as Service, eo as ɵɵdefineDirective, er as Pipe, es as ɵɵpipeBind4, fc as DOCUMENT, fo as ɵɵdomProperty, ft as reflectComponentType, gc as EnvironmentInjector, go as ɵɵelementContainerEnd, gs as ɵɵqueryRefresh, gt as viewChild, ho as ɵɵelementContainer, hs as ɵɵqueryAdvance, i as ContentChild, io as ɵɵdirectiveInject, ir as Renderer2, is as ɵɵproperty, iu as __read, j as contentChildren, la as ɵɵadvance, lo as ɵɵdomElementEnd, lu as SIGNAL, mo as ɵɵelement, no as ɵɵdefinePipe, ns as ɵɵprojection, nt as model, nu as __extends, oa as ɵɵInheritDefinitionFeature, oc as ɵɵviewQuerySignal, os as ɵɵpureFunction1, p as IterableDiffers, pc as DestroyRef, pr as SkipSelf, qn as NgModule, qo as ɵɵlistener, qt as untracked, r as ChangeDetectorRef, ro as ɵɵdefineService, rs as ɵɵprojectionDef, sa as ɵɵNgOnChangesFeature, ss as ɵɵpureFunction2, tl as forwardRef, tn as ApplicationRef, to as ɵɵdefineNgModule, ts as ɵɵpipeBindV, uo as ɵɵdomElementStart, ur as Self, us as ɵɵpureFunction5, vc as EventEmitter, vo as ɵɵelementEnd, vr as TemplateRef, vs as ɵɵreference, wa as ɵɵcontentQuery, wc as InjectionToken, wl as ɵɵdefineInjectable, wn as Directive, xa as ɵɵconditional, xc as INJECTOR$1, xs as ɵɵrepeaterTrackByIdentity, ya as ɵɵclassProp, yl as signal, yo as ɵɵelementStart, ys as ɵɵrepeater, zl as hasLift } from "./core-ByHjpNVL.js";
import { n as EMPTY, t as take } from "./take-K2Xx--sB.js";
import { a as popResultSelector, i as popNumber, n as observeOn, o as popScheduler, s as isScheduler, t as from } from "./from-AL4g8db_.js";
import { t as innerFrom, u as isArrayLike } from "./innerFrom--LD0KpDL.js";
import { A as EventManagerPlugin, I as mergeMap, L as of, O as EVENT_MANAGER_PLUGINS, P as finalize, j as REMOVE_STYLES_ON_COMPONENT_DESTROY, o as Meta } from "./platform-browser-Yg459RNp.js";
import { At as startWith, Ft as combineLatest, It as isObservable, Mt as catchError, N as ActivationStart, Nt as concat, Ot as tap, Pt as mergeAll, jt as defaultIfEmpty, kt as takeUntil, st as Router } from "./router-CsRqKq1S.js";
import { r as mapOneOrManyArgs } from "./createObject-C-pC6xqJ.js";
import { L as NgModel, M as NG_VALUE_ACCESSOR, N as NgControl, W as RadioControlValueAccessor, j as NG_VALIDATORS, rt as Validators } from "./forms-CoK5D-wl.js";
import { t as NEVER } from "./never-E9TPuaA0.js";
import { n as filter, t as switchMap } from "./switchMap-CKMBGK-i.js";
import { S as AsyncPipe, Z as NgTemplateOutlet, u as isPlatformBrowser } from "./common-CHeQR4lg.js";
//#region node_modules/rxjs/dist/esm5/internal/operators/refCount.js
function refCount() {
	return operate(function(source, subscriber) {
		var connection = null;
		source._refCount++;
		var refCounter = createOperatorSubscriber(subscriber, void 0, void 0, void 0, function() {
			if (!source || source._refCount <= 0 || 0 < --source._refCount) {
				connection = null;
				return;
			}
			var sharedConnection = source._connection;
			var conn = connection;
			connection = null;
			if (sharedConnection && (!conn || sharedConnection === conn)) sharedConnection.unsubscribe();
			subscriber.unsubscribe();
		});
		source.subscribe(refCounter);
		if (!refCounter.closed) connection = source.connect();
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js
var ConnectableObservable = function(_super) {
	__extends(ConnectableObservable, _super);
	function ConnectableObservable(source, subjectFactory) {
		var _this = _super.call(this) || this;
		_this.source = source;
		_this.subjectFactory = subjectFactory;
		_this._subject = null;
		_this._refCount = 0;
		_this._connection = null;
		if (hasLift(source)) _this.lift = source.lift;
		return _this;
	}
	ConnectableObservable.prototype._subscribe = function(subscriber) {
		return this.getSubject().subscribe(subscriber);
	};
	ConnectableObservable.prototype.getSubject = function() {
		var subject = this._subject;
		if (!subject || subject.isStopped) this._subject = this.subjectFactory();
		return this._subject;
	};
	ConnectableObservable.prototype._teardown = function() {
		this._refCount = 0;
		var _connection = this._connection;
		this._subject = this._connection = null;
		_connection === null || _connection === void 0 || _connection.unsubscribe();
	};
	ConnectableObservable.prototype.connect = function() {
		var _this = this;
		var connection = this._connection;
		if (!connection) {
			connection = this._connection = new Subscription();
			var subject_1 = this.getSubject();
			connection.add(this.source.subscribe(createOperatorSubscriber(subject_1, void 0, function() {
				_this._teardown();
				subject_1.complete();
			}, function(err) {
				_this._teardown();
				subject_1.error(err);
			}, function() {
				return _this._teardown();
			})));
			if (connection.closed) {
				this._connection = null;
				connection = Subscription.EMPTY;
			}
		}
		return connection;
	};
	ConnectableObservable.prototype.refCount = function() {
		return refCount()(this);
	};
	return ConnectableObservable;
}(Observable);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/animationFrameProvider.js
var animationFrameProvider = {
	schedule: function(callback) {
		var request = requestAnimationFrame;
		var cancel = cancelAnimationFrame;
		var delegate = animationFrameProvider.delegate;
		if (delegate) {
			request = delegate.requestAnimationFrame;
			cancel = delegate.cancelAnimationFrame;
		}
		var handle = request(function(timestamp) {
			cancel = void 0;
			callback(timestamp);
		});
		return new Subscription(function() {
			return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
		});
	},
	requestAnimationFrame: function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var delegate = animationFrameProvider.delegate;
		return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
	},
	cancelAnimationFrame: function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var delegate = animationFrameProvider.delegate;
		return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
	},
	delegate: void 0
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
	now: function() {
		return (dateTimestampProvider.delegate || Date).now();
	},
	delegate: void 0
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/ReplaySubject.js
var ReplaySubject = function(_super) {
	__extends(ReplaySubject, _super);
	function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
		if (_bufferSize === void 0) _bufferSize = Infinity;
		if (_windowTime === void 0) _windowTime = Infinity;
		if (_timestampProvider === void 0) _timestampProvider = dateTimestampProvider;
		var _this = _super.call(this) || this;
		_this._bufferSize = _bufferSize;
		_this._windowTime = _windowTime;
		_this._timestampProvider = _timestampProvider;
		_this._buffer = [];
		_this._infiniteTimeWindow = true;
		_this._infiniteTimeWindow = _windowTime === Infinity;
		_this._bufferSize = Math.max(1, _bufferSize);
		_this._windowTime = Math.max(1, _windowTime);
		return _this;
	}
	ReplaySubject.prototype.next = function(value) {
		var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
		if (!isStopped) {
			_buffer.push(value);
			!_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
		}
		this._trimBuffer();
		_super.prototype.next.call(this, value);
	};
	ReplaySubject.prototype._subscribe = function(subscriber) {
		this._throwIfClosed();
		this._trimBuffer();
		var subscription = this._innerSubscribe(subscriber);
		var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow;
		var copy = _a._buffer.slice();
		for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) subscriber.next(copy[i]);
		this._checkFinalizedStatuses(subscriber);
		return subscription;
	};
	ReplaySubject.prototype._trimBuffer = function() {
		var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
		var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
		_bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
		if (!_infiniteTimeWindow) {
			var now = _timestampProvider.now();
			var last = 0;
			for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) last = i;
			last && _buffer.splice(0, last + 1);
		}
	};
	return ReplaySubject;
}(Subject);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
var Action = function(_super) {
	__extends(Action, _super);
	function Action(scheduler, work) {
		return _super.call(this) || this;
	}
	Action.prototype.schedule = function(state, delay) {
		if (delay === void 0) delay = 0;
		return this;
	};
	return Action;
}(Subscription);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
var intervalProvider = {
	setInterval: function(handler, timeout) {
		var args = [];
		for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
		var delegate = intervalProvider.delegate;
		if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
		return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
	},
	clearInterval: function(handle) {
		var delegate = intervalProvider.delegate;
		return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
	},
	delegate: void 0
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
var AsyncAction = function(_super) {
	__extends(AsyncAction, _super);
	function AsyncAction(scheduler, work) {
		var _this = _super.call(this, scheduler, work) || this;
		_this.scheduler = scheduler;
		_this.work = work;
		_this.pending = false;
		return _this;
	}
	AsyncAction.prototype.schedule = function(state, delay) {
		var _a;
		if (delay === void 0) delay = 0;
		if (this.closed) return this;
		this.state = state;
		var id = this.id;
		var scheduler = this.scheduler;
		if (id != null) this.id = this.recycleAsyncId(scheduler, id, delay);
		this.pending = true;
		this.delay = delay;
		this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
		return this;
	};
	AsyncAction.prototype.requestAsyncId = function(scheduler, _id, delay) {
		if (delay === void 0) delay = 0;
		return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
	};
	AsyncAction.prototype.recycleAsyncId = function(_scheduler, id, delay) {
		if (delay === void 0) delay = 0;
		if (delay != null && this.delay === delay && this.pending === false) return id;
		if (id != null) intervalProvider.clearInterval(id);
	};
	AsyncAction.prototype.execute = function(state, delay) {
		if (this.closed) return /* @__PURE__ */ new Error("executing a cancelled action");
		this.pending = false;
		var error = this._execute(state, delay);
		if (error) return error;
		else if (this.pending === false && this.id != null) this.id = this.recycleAsyncId(this.scheduler, this.id, null);
	};
	AsyncAction.prototype._execute = function(state, _delay) {
		var errored = false;
		var errorValue;
		try {
			this.work(state);
		} catch (e) {
			errored = true;
			errorValue = e ? e : /* @__PURE__ */ new Error("Scheduled action threw falsy error");
		}
		if (errored) {
			this.unsubscribe();
			return errorValue;
		}
	};
	AsyncAction.prototype.unsubscribe = function() {
		if (!this.closed) {
			var _a = this, id = _a.id, scheduler = _a.scheduler;
			var actions = scheduler.actions;
			this.work = this.state = this.scheduler = null;
			this.pending = false;
			arrRemove(actions, this);
			if (id != null) this.id = this.recycleAsyncId(scheduler, id, null);
			this.delay = null;
			_super.prototype.unsubscribe.call(this);
		}
	};
	return AsyncAction;
}(Action);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/Immediate.js
var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
	if (handle in activeHandles) {
		delete activeHandles[handle];
		return true;
	}
	return false;
}
var Immediate = {
	setImmediate: function(cb) {
		var handle = nextHandle++;
		activeHandles[handle] = true;
		if (!resolved) resolved = Promise.resolve();
		resolved.then(function() {
			return findAndClearHandle(handle) && cb();
		});
		return handle;
	},
	clearImmediate: function(handle) {
		findAndClearHandle(handle);
	}
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/immediateProvider.js
var setImmediate = Immediate.setImmediate;
var clearImmediate = Immediate.clearImmediate;
var immediateProvider = {
	setImmediate: function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var delegate = immediateProvider.delegate;
		return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray([], __read(args)));
	},
	clearImmediate: function(handle) {
		var delegate = immediateProvider.delegate;
		return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
	},
	delegate: void 0
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/AsapAction.js
var AsapAction = function(_super) {
	__extends(AsapAction, _super);
	function AsapAction(scheduler, work) {
		var _this = _super.call(this, scheduler, work) || this;
		_this.scheduler = scheduler;
		_this.work = work;
		return _this;
	}
	AsapAction.prototype.requestAsyncId = function(scheduler, id, delay) {
		if (delay === void 0) delay = 0;
		if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
		scheduler.actions.push(this);
		return scheduler._scheduled || (scheduler._scheduled = immediateProvider.setImmediate(scheduler.flush.bind(scheduler, void 0)));
	};
	AsapAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
		var _a;
		if (delay === void 0) delay = 0;
		if (delay != null ? delay > 0 : this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
		var actions = scheduler.actions;
		if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
			immediateProvider.clearImmediate(id);
			if (scheduler._scheduled === id) scheduler._scheduled = void 0;
		}
	};
	return AsapAction;
}(AsyncAction);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Scheduler.js
var Scheduler = function() {
	function Scheduler(schedulerActionCtor, now) {
		if (now === void 0) now = Scheduler.now;
		this.schedulerActionCtor = schedulerActionCtor;
		this.now = now;
	}
	Scheduler.prototype.schedule = function(work, delay, state) {
		if (delay === void 0) delay = 0;
		return new this.schedulerActionCtor(this, work).schedule(state, delay);
	};
	Scheduler.now = dateTimestampProvider.now;
	return Scheduler;
}();
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js
var AsyncScheduler = function(_super) {
	__extends(AsyncScheduler, _super);
	function AsyncScheduler(SchedulerAction, now) {
		if (now === void 0) now = Scheduler.now;
		var _this = _super.call(this, SchedulerAction, now) || this;
		_this.actions = [];
		_this._active = false;
		return _this;
	}
	AsyncScheduler.prototype.flush = function(action) {
		var actions = this.actions;
		if (this._active) {
			actions.push(action);
			return;
		}
		var error;
		this._active = true;
		do
			if (error = action.execute(action.state, action.delay)) break;
		while (action = actions.shift());
		this._active = false;
		if (error) {
			while (action = actions.shift()) action.unsubscribe();
			throw error;
		}
	};
	return AsyncScheduler;
}(Scheduler);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/asap.js
var asapScheduler = new (function(_super) {
	__extends(AsapScheduler, _super);
	function AsapScheduler() {
		return _super !== null && _super.apply(this, arguments) || this;
	}
	AsapScheduler.prototype.flush = function(action) {
		this._active = true;
		var flushId = this._scheduled;
		this._scheduled = void 0;
		var actions = this.actions;
		var error;
		action = action || actions.shift();
		do
			if (error = action.execute(action.state, action.delay)) break;
		while ((action = actions[0]) && action.id === flushId && actions.shift());
		this._active = false;
		if (error) {
			while ((action = actions[0]) && action.id === flushId && actions.shift()) action.unsubscribe();
			throw error;
		}
	};
	return AsapScheduler;
}(AsyncScheduler))(AsapAction);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/async.js
var asyncScheduler = new AsyncScheduler(AsyncAction);
var async = asyncScheduler;
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/QueueAction.js
var QueueAction = function(_super) {
	__extends(QueueAction, _super);
	function QueueAction(scheduler, work) {
		var _this = _super.call(this, scheduler, work) || this;
		_this.scheduler = scheduler;
		_this.work = work;
		return _this;
	}
	QueueAction.prototype.schedule = function(state, delay) {
		if (delay === void 0) delay = 0;
		if (delay > 0) return _super.prototype.schedule.call(this, state, delay);
		this.delay = delay;
		this.state = state;
		this.scheduler.flush(this);
		return this;
	};
	QueueAction.prototype.execute = function(state, delay) {
		return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
	};
	QueueAction.prototype.requestAsyncId = function(scheduler, id, delay) {
		if (delay === void 0) delay = 0;
		if (delay != null && delay > 0 || delay == null && this.delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
		scheduler.flush(this);
		return 0;
	};
	return QueueAction;
}(AsyncAction);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/queue.js
var queueScheduler = new (function(_super) {
	__extends(QueueScheduler, _super);
	function QueueScheduler() {
		return _super !== null && _super.apply(this, arguments) || this;
	}
	return QueueScheduler;
}(AsyncScheduler))(QueueAction);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameAction.js
var AnimationFrameAction = function(_super) {
	__extends(AnimationFrameAction, _super);
	function AnimationFrameAction(scheduler, work) {
		var _this = _super.call(this, scheduler, work) || this;
		_this.scheduler = scheduler;
		_this.work = work;
		return _this;
	}
	AnimationFrameAction.prototype.requestAsyncId = function(scheduler, id, delay) {
		if (delay === void 0) delay = 0;
		if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
		scheduler.actions.push(this);
		return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider.requestAnimationFrame(function() {
			return scheduler.flush(void 0);
		}));
	};
	AnimationFrameAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
		var _a;
		if (delay === void 0) delay = 0;
		if (delay != null ? delay > 0 : this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
		var actions = scheduler.actions;
		if (id != null && id === scheduler._scheduled && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
			animationFrameProvider.cancelAnimationFrame(id);
			scheduler._scheduled = void 0;
		}
	};
	return AnimationFrameAction;
}(AsyncAction);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js
var animationFrameScheduler = new (function(_super) {
	__extends(AnimationFrameScheduler, _super);
	function AnimationFrameScheduler() {
		return _super !== null && _super.apply(this, arguments) || this;
	}
	AnimationFrameScheduler.prototype.flush = function(action) {
		this._active = true;
		var flushId;
		if (action) flushId = action.id;
		else {
			flushId = this._scheduled;
			this._scheduled = void 0;
		}
		var actions = this.actions;
		var error;
		action = action || actions.shift();
		do
			if (error = action.execute(action.state, action.delay)) break;
		while ((action = actions[0]) && action.id === flushId && actions.shift());
		this._active = false;
		if (error) {
			while ((action = actions[0]) && action.id === flushId && actions.shift()) action.unsubscribe();
			throw error;
		}
	};
	return AnimationFrameScheduler;
}(AsyncScheduler))(AnimationFrameAction);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate(value) {
	return value instanceof Date && !isNaN(value);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js
var nodeEventEmitterMethods = ["addListener", "removeListener"];
var eventTargetMethods = ["addEventListener", "removeEventListener"];
var jqueryMethods = ["on", "off"];
function fromEvent(target, eventName, options, resultSelector) {
	if (isFunction(options)) {
		resultSelector = options;
		options = void 0;
	}
	if (resultSelector) return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
	var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
		return function(handler) {
			return target[methodName](eventName, handler, options);
		};
	}) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
	if (!add) {
		if (isArrayLike(target)) return mergeMap(function(subTarget) {
			return fromEvent(subTarget, eventName, options);
		})(innerFrom(target));
	}
	if (!add) throw new TypeError("Invalid event target");
	return new Observable(function(subscriber) {
		var handler = function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			return subscriber.next(1 < args.length ? args : args[0]);
		};
		add(handler);
		return function() {
			return remove(handler);
		};
	});
}
function toCommonHandlerRegistry(target, eventName) {
	return function(methodName) {
		return function(handler) {
			return target[methodName](eventName, handler);
		};
	};
}
function isNodeStyleEventEmitter(target) {
	return isFunction(target.addListener) && isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
	return isFunction(target.on) && isFunction(target.off);
}
function isEventTarget(target) {
	return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/timer.js
function timer(dueTime, intervalOrScheduler, scheduler) {
	if (dueTime === void 0) dueTime = 0;
	if (scheduler === void 0) scheduler = async;
	var intervalDuration = -1;
	if (intervalOrScheduler != null) if (isScheduler(intervalOrScheduler)) scheduler = intervalOrScheduler;
	else intervalDuration = intervalOrScheduler;
	return new Observable(function(subscriber) {
		var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
		if (due < 0) due = 0;
		var n = 0;
		return scheduler.schedule(function() {
			if (!subscriber.closed) {
				subscriber.next(n++);
				if (0 <= intervalDuration) this.schedule(void 0, intervalDuration);
				else subscriber.complete();
			}
		}, due);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/merge.js
function merge() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	var scheduler = popScheduler(args);
	var concurrent = popNumber(args, Infinity);
	var sources = args;
	return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js
var isArray = Array.isArray;
function argsOrArgArray(args) {
	return args.length === 1 && isArray(args[0]) ? args[0] : args;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/race.js
function race() {
	var sources = [];
	for (var _i = 0; _i < arguments.length; _i++) sources[_i] = arguments[_i];
	sources = argsOrArgArray(sources);
	return sources.length === 1 ? innerFrom(sources[0]) : new Observable(raceInit(sources));
}
function raceInit(sources) {
	return function(subscriber) {
		var subscriptions = [];
		var _loop_1 = function(i) {
			subscriptions.push(innerFrom(sources[i]).subscribe(createOperatorSubscriber(subscriber, function(value) {
				if (subscriptions) {
					for (var s = 0; s < subscriptions.length; s++) s !== i && subscriptions[s].unsubscribe();
					subscriptions = null;
				}
				subscriber.next(value);
			})));
		};
		for (var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) _loop_1(i);
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/audit.js
function audit(durationSelector) {
	return operate(function(source, subscriber) {
		var hasValue = false;
		var lastValue = null;
		var durationSubscriber = null;
		var isComplete = false;
		var endDuration = function() {
			durationSubscriber === null || durationSubscriber === void 0 || durationSubscriber.unsubscribe();
			durationSubscriber = null;
			if (hasValue) {
				hasValue = false;
				var value = lastValue;
				lastValue = null;
				subscriber.next(value);
			}
			isComplete && subscriber.complete();
		};
		var cleanupDuration = function() {
			durationSubscriber = null;
			isComplete && subscriber.complete();
		};
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			hasValue = true;
			lastValue = value;
			if (!durationSubscriber) innerFrom(durationSelector(value)).subscribe(durationSubscriber = createOperatorSubscriber(subscriber, endDuration, cleanupDuration));
		}, function() {
			isComplete = true;
			(!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/auditTime.js
function auditTime(duration, scheduler) {
	if (scheduler === void 0) scheduler = asyncScheduler;
	return audit(function() {
		return timer(duration, scheduler);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/debounce.js
function debounce(durationSelector) {
	return operate(function(source, subscriber) {
		var hasValue = false;
		var lastValue = null;
		var durationSubscriber = null;
		var emit = function() {
			durationSubscriber === null || durationSubscriber === void 0 || durationSubscriber.unsubscribe();
			durationSubscriber = null;
			if (hasValue) {
				hasValue = false;
				var value = lastValue;
				lastValue = null;
				subscriber.next(value);
			}
		};
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			durationSubscriber === null || durationSubscriber === void 0 || durationSubscriber.unsubscribe();
			hasValue = true;
			lastValue = value;
			durationSubscriber = createOperatorSubscriber(subscriber, emit, noop);
			innerFrom(durationSelector(value)).subscribe(durationSubscriber);
		}, function() {
			emit();
			subscriber.complete();
		}, void 0, function() {
			lastValue = durationSubscriber = null;
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js
function debounceTime(dueTime, scheduler) {
	if (scheduler === void 0) scheduler = asyncScheduler;
	return operate(function(source, subscriber) {
		var activeTask = null;
		var lastValue = null;
		var lastTime = null;
		var emit = function() {
			if (activeTask) {
				activeTask.unsubscribe();
				activeTask = null;
				var value = lastValue;
				lastValue = null;
				subscriber.next(value);
			}
		};
		function emitWhenIdle() {
			var targetTime = lastTime + dueTime;
			var now = scheduler.now();
			if (now < targetTime) {
				activeTask = this.schedule(void 0, targetTime - now);
				subscriber.add(activeTask);
				return;
			}
			emit();
		}
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			lastValue = value;
			lastTime = scheduler.now();
			if (!activeTask) {
				activeTask = scheduler.schedule(emitWhenIdle, dueTime);
				subscriber.add(activeTask);
			}
		}, function() {
			emit();
			subscriber.complete();
		}, void 0, function() {
			lastValue = activeTask = null;
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js
function ignoreElements() {
	return operate(function(source, subscriber) {
		source.subscribe(createOperatorSubscriber(subscriber, noop));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mapTo.js
function mapTo(value) {
	return map(function() {
		return value;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/delayWhen.js
function delayWhen(delayDurationSelector, subscriptionDelay) {
	if (subscriptionDelay) return function(source) {
		return concat(subscriptionDelay.pipe(take(1), ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
	};
	return mergeMap(function(value, index) {
		return innerFrom(delayDurationSelector(value, index)).pipe(take(1), mapTo(value));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/delay.js
function delay(due, scheduler) {
	if (scheduler === void 0) scheduler = asyncScheduler;
	var duration = timer(due, scheduler);
	return delayWhen(function() {
		return duration;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js
function distinctUntilChanged(comparator, keySelector) {
	if (keySelector === void 0) keySelector = identity;
	comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
	return operate(function(source, subscriber) {
		var previousKey;
		var first = true;
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			var currentKey = keySelector(value);
			if (first || !comparator(previousKey, currentKey)) {
				first = false;
				previousKey = currentKey;
				subscriber.next(value);
			}
		}));
	});
}
function defaultCompare(a, b) {
	return a === b;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/endWith.js
function endWith() {
	var values = [];
	for (var _i = 0; _i < arguments.length; _i++) values[_i] = arguments[_i];
	return function(source) {
		return concat(source, of.apply(void 0, __spreadArray([], __read(values))));
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/exhaustMap.js
function exhaustMap(project, resultSelector) {
	if (resultSelector) return function(source) {
		return source.pipe(exhaustMap(function(a, i) {
			return innerFrom(project(a, i)).pipe(map(function(b, ii) {
				return resultSelector(a, b, i, ii);
			}));
		}));
	};
	return operate(function(source, subscriber) {
		var index = 0;
		var innerSub = null;
		var isComplete = false;
		source.subscribe(createOperatorSubscriber(subscriber, function(outerValue) {
			if (!innerSub) {
				innerSub = createOperatorSubscriber(subscriber, void 0, function() {
					innerSub = null;
					isComplete && subscriber.complete();
				});
				innerFrom(project(outerValue, index++)).subscribe(innerSub);
			}
		}, function() {
			isComplete = true;
			!innerSub && subscriber.complete();
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/pairwise.js
function pairwise() {
	return operate(function(source, subscriber) {
		var prev;
		var hasPrev = false;
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			var p = prev;
			prev = value;
			hasPrev && subscriber.next([p, value]);
			hasPrev = true;
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/repeat.js
function repeat(countOrConfig) {
	var _a;
	var count = Infinity;
	var delay;
	if (countOrConfig != null) if (typeof countOrConfig === "object") _a = countOrConfig.count, count = _a === void 0 ? Infinity : _a, delay = countOrConfig.delay;
	else count = countOrConfig;
	return count <= 0 ? function() {
		return EMPTY;
	} : operate(function(source, subscriber) {
		var soFar = 0;
		var sourceSub;
		var resubscribe = function() {
			sourceSub === null || sourceSub === void 0 || sourceSub.unsubscribe();
			sourceSub = null;
			if (delay != null) {
				var notifier = typeof delay === "number" ? timer(delay) : innerFrom(delay(soFar));
				var notifierSubscriber_1 = createOperatorSubscriber(subscriber, function() {
					notifierSubscriber_1.unsubscribe();
					subscribeToSource();
				});
				notifier.subscribe(notifierSubscriber_1);
			} else subscribeToSource();
		};
		var subscribeToSource = function() {
			var syncUnsub = false;
			sourceSub = source.subscribe(createOperatorSubscriber(subscriber, void 0, function() {
				if (++soFar < count) if (sourceSub) resubscribe();
				else syncUnsub = true;
				else subscriber.complete();
			}));
			if (syncUnsub) resubscribe();
		};
		subscribeToSource();
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/share.js
function share(options) {
	if (options === void 0) options = {};
	var _a = options.connector, connector = _a === void 0 ? function() {
		return new Subject();
	} : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
	return function(wrapperSource) {
		var connection;
		var resetConnection;
		var subject;
		var refCount = 0;
		var hasCompleted = false;
		var hasErrored = false;
		var cancelReset = function() {
			resetConnection === null || resetConnection === void 0 || resetConnection.unsubscribe();
			resetConnection = void 0;
		};
		var reset = function() {
			cancelReset();
			connection = subject = void 0;
			hasCompleted = hasErrored = false;
		};
		var resetAndUnsubscribe = function() {
			var conn = connection;
			reset();
			conn === null || conn === void 0 || conn.unsubscribe();
		};
		return operate(function(source, subscriber) {
			refCount++;
			if (!hasErrored && !hasCompleted) cancelReset();
			var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
			subscriber.add(function() {
				refCount--;
				if (refCount === 0 && !hasErrored && !hasCompleted) resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
			});
			dest.subscribe(subscriber);
			if (!connection && refCount > 0) {
				connection = new SafeSubscriber({
					next: function(value) {
						return dest.next(value);
					},
					error: function(err) {
						hasErrored = true;
						cancelReset();
						resetConnection = handleReset(reset, resetOnError, err);
						dest.error(err);
					},
					complete: function() {
						hasCompleted = true;
						cancelReset();
						resetConnection = handleReset(reset, resetOnComplete);
						dest.complete();
					}
				});
				innerFrom(source).subscribe(connection);
			}
		})(wrapperSource);
	};
}
function handleReset(reset, on) {
	var args = [];
	for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
	if (on === true) {
		reset();
		return;
	}
	if (on === false) return;
	var onSubscriber = new SafeSubscriber({ next: function() {
		onSubscriber.unsubscribe();
		reset();
	} });
	return innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js
function shareReplay(configOrBufferSize, windowTime, scheduler) {
	var _a, _b, _c;
	var bufferSize;
	var refCount = false;
	if (configOrBufferSize && typeof configOrBufferSize === "object") _a = configOrBufferSize.bufferSize, bufferSize = _a === void 0 ? Infinity : _a, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
	else bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
	return share({
		connector: function() {
			return new ReplaySubject(bufferSize, windowTime, scheduler);
		},
		resetOnError: true,
		resetOnComplete: false,
		resetOnRefCountZero: refCount
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/skip.js
function skip(count) {
	return filter(function(_, index) {
		return count <= index;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/skipWhile.js
function skipWhile(predicate) {
	return operate(function(source, subscriber) {
		var taking = false;
		var index = 0;
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			return (taking || (taking = !predicate(value, index++))) && subscriber.next(value);
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js
function takeWhile(predicate, inclusive) {
	if (inclusive === void 0) inclusive = false;
	return operate(function(source, subscriber) {
		var index = 0;
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			var result = predicate(value, index++);
			(result || inclusive) && subscriber.next(value);
			!result && subscriber.complete();
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/throttle.js
function throttle(durationSelector, config) {
	return operate(function(source, subscriber) {
		var _a = config !== null && config !== void 0 ? config : {}, _b = _a.leading, leading = _b === void 0 ? true : _b, _c = _a.trailing, trailing = _c === void 0 ? false : _c;
		var hasValue = false;
		var sendValue = null;
		var throttled = null;
		var isComplete = false;
		var endThrottling = function() {
			throttled === null || throttled === void 0 || throttled.unsubscribe();
			throttled = null;
			if (trailing) {
				send();
				isComplete && subscriber.complete();
			}
		};
		var cleanupThrottling = function() {
			throttled = null;
			isComplete && subscriber.complete();
		};
		var startThrottle = function(value) {
			return throttled = innerFrom(durationSelector(value)).subscribe(createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
		};
		var send = function() {
			if (hasValue) {
				hasValue = false;
				var value = sendValue;
				sendValue = null;
				subscriber.next(value);
				!isComplete && startThrottle(value);
			}
		};
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			hasValue = true;
			sendValue = value;
			!(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
		}, function() {
			isComplete = true;
			!(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js
function throttleTime(duration, scheduler, config) {
	if (scheduler === void 0) scheduler = asyncScheduler;
	var duration$ = timer(duration, scheduler);
	return throttle(function() {
		return duration$;
	}, config);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/withLatestFrom.js
function withLatestFrom() {
	var inputs = [];
	for (var _i = 0; _i < arguments.length; _i++) inputs[_i] = arguments[_i];
	var project = popResultSelector(inputs);
	return operate(function(source, subscriber) {
		var len = inputs.length;
		var otherValues = new Array(len);
		var hasValue = inputs.map(function() {
			return false;
		});
		var ready = false;
		var _loop_1 = function(i) {
			innerFrom(inputs[i]).subscribe(createOperatorSubscriber(subscriber, function(value) {
				otherValues[i] = value;
				if (!ready && !hasValue[i]) {
					hasValue[i] = true;
					(ready = hasValue.every(identity)) && (hasValue = null);
				}
			}, noop));
		};
		for (var i = 0; i < len; i++) _loop_1(i);
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			if (ready) {
				var values = __spreadArray([value], __read(otherValues));
				subscriber.next(project ? project.apply(void 0, __spreadArray([], __read(values))) : values);
			}
		}));
	});
}
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-math.mjs
/**
* Clamps a value between two inclusive limits
*/
function tuiClamp(value, minimum, maximum) {
	ngDevMode && console.assert(!Number.isNaN(value));
	ngDevMode && console.assert(!Number.isNaN(minimum));
	ngDevMode && console.assert(!Number.isNaN(maximum));
	ngDevMode && maximum && minimum && console.assert(maximum >= minimum);
	const minClamped = max(minimum ?? value, value);
	return min(maximum ?? minClamped, minClamped);
}
function min(x, ...values) {
	return values.reduce((a, b) => a < b ? a : b, x);
}
function max(x, ...values) {
	return values.reduce((a, b) => a > b ? a : b, x);
}
function tuiInRange(value, fromInclude, toExclude) {
	ngDevMode && console.assert(!Number.isNaN(value));
	ngDevMode && console.assert(!Number.isNaN(fromInclude));
	ngDevMode && console.assert(!Number.isNaN(toExclude));
	ngDevMode && console.assert(fromInclude < toExclude);
	return value >= fromInclude && value < toExclude;
}
/**
* Normalizes any number to an integer within inclusive range
*
* @param value
* @param min lower inclusive integer
* @param max upper inclusive integer
* @return an integer between min and max inclusive
*/
function tuiNormalizeToIntNumber(value, min, max) {
	ngDevMode && console.assert(Number.isInteger(min));
	ngDevMode && console.assert(Number.isInteger(max));
	ngDevMode && console.assert(min <= max);
	if (Number.isNaN(value) || value <= min) return min;
	return value >= max ? max : Math.round(value);
}
var MAX_PRECISION = 292;
/**
* Rounding number to the set precision
*
* @param value
* @param precision number of digits in a float part
* @param func rounding function (round, floor, ceil)
*/
function calculate(value, precision, func) {
	if (value === Infinity) return value;
	ngDevMode && console.assert(!Number.isNaN(value), "Value must be number");
	ngDevMode && console.assert(Number.isInteger(precision), "Precision must be integer");
	precision = Math.min(precision, MAX_PRECISION);
	const [significand, exponent = ""] = `${value}`.split("e");
	const roundedInt = func(Number(`${significand}e${Number(exponent) + precision}`));
	/**
	* TODO: use BigInt after bumping Safari to 14+
	*/
	ngDevMode && console.assert(Number.isSafeInteger(roundedInt), "Impossible to correctly round such a large number");
	const processedPair = `${roundedInt}e`.split("e");
	return Number(`${processedPair[0]}e${Number(processedPair[1]) - precision}`);
}
function tuiRound(value, precision = 0) {
	return calculate(value, precision, Math.round);
}
function tuiCeil(value, precision = 0) {
	return calculate(value, precision, Math.ceil);
}
function tuiFloor(value, precision = 0) {
	return calculate(value, precision, Math.floor);
}
function tuiTrunc(value, precision = 0) {
	return calculate(value, precision, Math.trunc);
}
function tuiRoundWith({ value, precision, method }) {
	switch (method) {
		case "ceil": return tuiCeil(value, precision);
		case "floor": return tuiFloor(value, precision);
		case "round": return tuiRound(value, precision);
		default: return tuiTrunc(value, precision);
	}
}
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-miscellaneous.mjs
function tuiArrayRemove(array, index) {
	return array.slice(0, Math.max(index, 0)).concat(array.slice(Math.max(index + 1, 0)));
}
function tuiArrayToggle(array, item, identity) {
	const index = identity ? array.findIndex((it) => identity(it, item)) : array.indexOf(item);
	return index === -1 ? [...array, item] : tuiArrayRemove(array, index);
}
function tuiIsString(value) {
	return typeof value === "string";
}
var autoId = 0;
function tuiGenerateId() {
	return `tui_${autoId++}${Date.now().toString(36)}`;
}
function tuiIsFlat(items) {
	return !Array.isArray(items[0]);
}
function tuiIsNumber(value) {
	return typeof value === "number";
}
function tuiIsPresent(value) {
	return value != null;
}
/**
* Checks identity for nullable elements.
*
* @param a element a
* @param b element b
* @param handler called if both elements are not null
* @return true if either both are null or they pass identity handler
*/
function tuiNullableSame(a, b, handler) {
	if (a === null) return b === null;
	return b === null ? false : handler(a, b);
}
/**
* Adds 'px' to the number and turns it into a string
*/
function tuiPx(value) {
	ngDevMode && console.assert(Number.isFinite(value), "Value must be finite number");
	return `${value}px`;
}
function tuiSetSignal(signal, value) {
	if ("set" in signal) signal.set(value);
	else if ("applyValueToInputSignal" in signal[SIGNAL]) signal[SIGNAL].applyValueToInputSignal(signal[SIGNAL], value);
	else ngDevMode && console.assert(false, "tuiSetSignal was called on read-only signal");
}
var MAP = new InjectionToken(ngDevMode ? "MAP" : "", { factory: () => {
	const map = /* @__PURE__ */ new Map();
	inject(DestroyRef).onDestroy(() => map.forEach((component) => component.destroy()));
	return map;
} });
function tuiWithStyles(component) {
	const map = inject(MAP);
	const environmentInjector = inject(EnvironmentInjector);
	if (!map.has(component)) map.set(component, createComponent(component, { environmentInjector }));
}
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-di.mjs
function tuiProvideOptions(provide, options, fallback) {
	return {
		provide,
		useFactory: () => ({
			...inject(provide, {
				optional: true,
				skipSelf: true
			}) || fallback,
			...inject(options, { optional: true }) || (typeof options === "function" ? options() : options)
		})
	};
}
function tuiCreateOptions(defaults) {
	const token = new InjectionToken(ngDevMode ? "Options token" : "", { factory: () => defaults });
	return [token, (options) => tuiProvideOptions(token, options, defaults)];
}
function tuiDirectiveBinding(token, key, initial, options = { self: true }) {
	const result = isSignal(initial) ? initial : signal(initial);
	const directive = inject(token, options);
	const output = directive?.[`${key.toString()}Change`];
	if (!directive) return result;
	let previous;
	effect(() => {
		const value = result();
		if (previous === value) return;
		if (isSignal(directive[key])) tuiSetSignal(directive[key], value);
		else directive[key] = value;
		directive.ngOnChanges?.({});
		output?.emit?.(value);
		previous = value;
	});
	return result;
}
function tuiProvide(provide, useExisting, multi = false) {
	return {
		provide,
		useExisting,
		multi
	};
}
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_element-chunk.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
	if (_isNumberValue(value)) return Number(value);
	return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
	return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
	return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_array-chunk.mjs
function coerceArray(value) {
	return Array.isArray(value) ? value : [value];
}
//#endregion
//#region node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
	return value != null && `${value}` !== "false";
}
//#endregion
//#region node_modules/@angular/core/fesm2022/rxjs-interop.mjs
/**
* @license Angular v22.1.0
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
function takeUntilDestroyed(destroyRef) {
	if (!destroyRef) {
		ngDevMode && assertInInjectionContext(takeUntilDestroyed);
		destroyRef = inject(DestroyRef);
	}
	const destroyed$ = new Observable((subscriber) => {
		if (destroyRef.destroyed) {
			subscriber.next();
			return;
		}
		return destroyRef.onDestroy(subscriber.next.bind(subscriber));
	});
	return (source) => {
		return source.pipe(takeUntil(destroyed$));
	};
}
var OutputFromObservableRef = class {
	source;
	destroyed = false;
	destroyRef = inject(DestroyRef);
	constructor(source) {
		this.source = source;
		this.destroyRef.onDestroy(() => {
			this.destroyed = true;
		});
	}
	subscribe(callbackFn) {
		if (this.destroyed) throw new RuntimeError(953, ngDevMode && "Unexpected subscription to destroyed `OutputRef`. The owning directive/component is destroyed.");
		const subscription = this.source.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({ next: (value) => callbackFn(value) });
		return { unsubscribe: () => subscription.unsubscribe() };
	}
};
function outputFromObservable(observable, opts) {
	ngDevMode && assertInInjectionContext(outputFromObservable);
	return new OutputFromObservableRef(observable);
}
function toObservable$1(source, options) {
	if (ngDevMode && !options?.injector) assertInInjectionContext(toObservable$1);
	const injector = options?.injector ?? inject(Injector);
	const subject = new ReplaySubject(1);
	const watcher = effect(() => {
		let value;
		try {
			value = source();
		} catch (err) {
			untracked(() => subject.error(err));
			return;
		}
		untracked(() => subject.next(value));
	}, {
		injector,
		manualCleanup: true
	});
	injector.get(DestroyRef).onDestroy(() => {
		watcher.destroy();
		subject.complete();
	});
	return subject.asObservable();
}
function toSignal(source, options) {
	typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
	const requiresCleanup = !options?.manualCleanup;
	if (ngDevMode && requiresCleanup && !options?.injector) assertInInjectionContext(toSignal);
	const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
	const equal = makeToSignalEqual(options?.equal);
	let state;
	if (options?.requireSync) state = signal({ kind: 0 }, {
		equal,
		...ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0
	});
	else state = signal({
		kind: 1,
		value: options?.initialValue
	}, {
		equal,
		...ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0
	});
	let destroyUnregisterFn;
	const sub = source.subscribe({
		next: (value) => state.set({
			kind: 1,
			value
		}),
		error: (error) => {
			state.set({
				kind: 2,
				error
			});
			destroyUnregisterFn?.();
		},
		complete: () => {
			destroyUnregisterFn?.();
		}
	});
	if (options?.requireSync && state().kind === 0) throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
	destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
	return computed(() => {
		const current = state();
		switch (current.kind) {
			case 1: return current.value;
			case 2: throw current.error;
			case 0: throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
		}
	}, {
		equal: options?.equal,
		...ngDevMode ? createDebugNameObject(options?.debugName, "source") : void 0
	});
}
function makeToSignalEqual(userEquality = Object.is) {
	return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
	return { debugName: `toSignal${toSignalDebugName ? "#" + toSignalDebugName : ""}.${internalSignalDebugName}` };
}
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-classes.mjs
var TuiAccessor = class {};
var TuiPositionAccessor = class extends TuiAccessor {};
var TuiRectAccessor = class extends TuiAccessor {};
function tuiProvideAccessor(provide, type, fallback) {
	return {
		provide,
		deps: [[
			new SkipSelf(),
			new Optional(),
			provide
		], fallback],
		useFactory: tuiFallbackAccessor(type)
	};
}
function tuiFallbackAccessor(type) {
	return (accessors, fallback) => accessors?.find?.((accessor) => accessor !== fallback && accessor.type === type) || Object.create(fallback, { type: { value: type } });
}
function tuiPositionAccessorFor(type, fallback) {
	return tuiProvideAccessor(TuiPositionAccessor, type, fallback);
}
function tuiRectAccessorFor(type, fallback) {
	return tuiProvideAccessor(TuiRectAccessor, type, fallback);
}
function tuiAsPositionAccessor(accessor) {
	return tuiProvide(TuiPositionAccessor, accessor, true);
}
function tuiAsRectAccessor(accessor) {
	return tuiProvide(TuiRectAccessor, accessor, true);
}
var TuiVehicle = class {};
function tuiAsVehicle(vehicle) {
	return tuiProvide(TuiVehicle, vehicle, true);
}
var TuiDriver = class extends Observable {};
function tuiAsDriver(driver) {
	return tuiProvide(TuiDriver, driver, true);
}
var TuiDriverDirective = class TuiDriverDirective {
	constructor() {
		this.destroyRef = inject(DestroyRef);
		this.drivers = coerceArray(inject(TuiDriver, {
			self: true,
			optional: true
		}) || []);
		this.vehicles = coerceArray(inject(TuiVehicle, {
			self: true,
			optional: true
		}) || []);
	}
	ngAfterViewInit() {
		const vehicle = this.vehicles.find(({ type }) => type === this.type);
		merge(...this.drivers.filter(({ type }) => type === this.type)).pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
			vehicle?.toggle(value);
		});
	}
	static {
		this.ɵfac = function TuiDriverDirective_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDriverDirective)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({ type: TuiDriverDirective });
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDriverDirective, [{ type: Directive }], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-constants.mjs
var rect = {
	bottom: 0,
	height: 0,
	left: 0,
	right: 0,
	top: 0,
	width: 0,
	x: 0,
	y: 0
};
var EMPTY_FUNCTION = () => {};
var EMPTY_CLIENT_RECT = {
	...rect,
	toJSON: () => rect
};
/**
* Handler that always returns `false`.
*/
var TUI_FALSE_HANDLER = () => false;
/**
* Handler that always returns `true`.
*/
var TUI_TRUE_HANDLER = () => true;
function bothEmpty(item1, item2) {
	return Array.isArray(item1) && Array.isArray(item2) && !item1.length && !item2.length;
}
/**
* Default handler for matching stringified version of an item and a search query
* @param item arbitrary element to match with a string
* @param search search query
* @param stringify handler to turn item into a string
*/
var TUI_DEFAULT_MATCHER = (item, search, stringify = String) => stringify(item).toLowerCase().includes(search.toLowerCase());
/**
* Default handler for strict matching stringified version of an item and a search query
* @param item arbitrary element to match with a string
* @param search search query
* @param stringify handler to turn item into a string
*/
var TUI_STRICT_MATCHER = (item, search, stringify = String) => stringify(item).toLowerCase() === search.toLowerCase();
/**
* Default handler to match equality of two elements
* ATTENTION: considers two empty arrays equal
*
* @param item1 first element
* @param item2 second element
*/
var TUI_DEFAULT_IDENTITY_MATCHER = (item1, item2) => item1 === item2 || bothEmpty(item1, item2);
var svgNodeFilter = { acceptNode(node) {
	return "ownerSVGElement" in node ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
} };
var TUI_VERSION = "5.17.0";
//#endregion
//#region node_modules/@ng-web-apis/common/fesm2022/ng-web-apis-common.mjs
var WA_WINDOW = new InjectionToken(ngDevMode ? "[WA_WINDOW]" : "", { factory: () => {
	const { defaultView } = inject(DOCUMENT);
	if (!defaultView) throw new Error("Window is not available");
	return defaultView;
} });
var WA_ANIMATION_FRAME = new InjectionToken(ngDevMode ? "[WA_ANIMATION_FRAME]" : "", { factory: () => {
	const { requestAnimationFrame, cancelAnimationFrame } = inject(WA_WINDOW);
	return new Observable((subscriber) => {
		let id = NaN;
		const callback = (timestamp) => {
			subscriber.next(timestamp);
			id = requestAnimationFrame(callback);
		};
		id = requestAnimationFrame(callback);
		return () => {
			cancelAnimationFrame(id);
		};
	}).pipe(share());
} });
new InjectionToken(ngDevMode ? "[WA_CACHES]" : "", { factory: () => inject(WA_WINDOW).caches });
new InjectionToken(ngDevMode ? "[WA_CRYPTO]" : "", { factory: () => inject(WA_WINDOW).crypto });
new InjectionToken(ngDevMode ? "[WA_CSS]" : "", { factory: () => inject(WA_WINDOW).CSS ?? {
	escape: (v) => v,
	supports: () => false
} });
new InjectionToken(ngDevMode ? "[WA_HISTORY]" : "", { factory: () => inject(WA_WINDOW).history });
var WA_LOCAL_STORAGE = new InjectionToken(ngDevMode ? "[WA_LOCAL_STORAGE]" : "", { factory: () => inject(WA_WINDOW).localStorage });
new InjectionToken(ngDevMode ? "[WA_LOCATION]" : "", { factory: () => inject(WA_WINDOW).location });
var WA_NAVIGATOR = new InjectionToken(ngDevMode ? "[WA_NAVIGATOR]" : "", { factory: () => inject(WA_WINDOW).navigator });
new InjectionToken(ngDevMode ? "[WA_MEDIA_DEVICES]" : "", { factory: () => inject(WA_NAVIGATOR).mediaDevices });
new InjectionToken(ngDevMode ? "[WA_NETWORK_INFORMATION]" : "", { factory: () => inject(WA_NAVIGATOR).connection || null });
var WA_PAGE_VISIBILITY = new InjectionToken(ngDevMode ? "[WA_PAGE_VISIBILITY]" : "", { factory: () => {
	const documentRef = inject(DOCUMENT);
	return fromEvent(documentRef, "visibilitychange").pipe(startWith(0), map(() => documentRef.visibilityState !== "hidden"), distinctUntilChanged(), shareReplay({
		refCount: false,
		bufferSize: 1
	}));
} });
new InjectionToken(ngDevMode ? "[WA_PERFORMANCE]" : "", { factory: () => inject(WA_WINDOW).performance });
new InjectionToken(ngDevMode ? "[WA_SCREEN]" : "", { factory: () => inject(WA_WINDOW).screen });
new InjectionToken(ngDevMode ? "[WA_SESSION_STORAGE]" : "", { factory: () => inject(WA_WINDOW).sessionStorage });
new InjectionToken(ngDevMode ? "[WA_SPEECH_RECOGNITION]" : "", { factory: () => {
	const windowRef = inject(WA_WINDOW);
	return windowRef.speechRecognition || windowRef.webkitSpeechRecognition || null;
} });
new InjectionToken(ngDevMode ? "[WA_SPEECH_SYNTHESIS]" : "", { factory: () => inject(WA_WINDOW).speechSynthesis });
var WA_USER_AGENT = new InjectionToken(ngDevMode ? "[WA_USER_AGENT]" : "", { factory: () => inject(WA_NAVIGATOR).userAgent });
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-dom.mjs
function tuiContainsOrAfter(current, node) {
	try {
		return current.contains(node) || !!(node.compareDocumentPosition(current) & Node.DOCUMENT_POSITION_PRECEDING);
	} catch {
		return false;
	}
}
function tuiIsInput(element) {
	return element.matches("input");
}
function tuiIsTextarea(element) {
	return element.matches("textarea");
}
function tuiIsTextfield(element) {
	return tuiIsInput(element) || tuiIsTextarea(element);
}
function tuiIsElement(node) {
	return !!node && "nodeType" in node && node.nodeType === Node.ELEMENT_NODE;
}
function tuiIsHTMLElement(node) {
	const defaultView = node?.ownerDocument.defaultView;
	return !!node && !!defaultView && node instanceof defaultView.HTMLElement;
}
function tuiIsTextNode(node) {
	return node.nodeType === Node.TEXT_NODE;
}
/**
* Gets actual target from open Shadow DOM if event happened within it
*/
function tuiGetActualTarget(event) {
	return event.composedPath()[0];
}
function tuiGetDocumentOrShadowRoot(node) {
	return "getRootNode" in node && node.isConnected ? node.getRootNode() : node.ownerDocument;
}
/**
* Returns array of Elements covering edges of given element or null if at least one edge middle point is visible
*
* CAUTION: Empty array means element if offscreen i.e. covered by no elements, rather than not covered
* ```ts
* function tuiGetElementObscures(element: Element): readonly [Element, Element, Element, Element] | [] | null
* ```
*/
function tuiGetElementObscures(element) {
	if (!element.getBoundingClientRect) return null;
	const { left, right, top, bottom, width, height } = element.getBoundingClientRect();
	if (width === 0 && height === 0) return null;
	const doc = tuiGetDocumentOrShadowRoot(element);
	const horizontalMiddle = Math.round(left + width / 2);
	const verticalMiddle = Math.round(top + height / 2);
	const elements = [
		doc.elementFromPoint(horizontalMiddle, Math.round(top) + 2),
		doc.elementFromPoint(horizontalMiddle, Math.round(bottom) - 2),
		doc.elementFromPoint(Math.round(left) + 2, verticalMiddle),
		doc.elementFromPoint(Math.round(right) - 2, verticalMiddle)
	].filter(tuiIsPresent);
	if (!elements.length) return [];
	const filtered = elements.filter((el) => !element.contains(el) && !el.contains(element));
	return filtered.length === 4 ? filtered : null;
}
/**
* Calculates offset for an element relative to it's parent several levels above
*
* @param host parent element
* @param element
* @return object with offsetTop and offsetLeft number properties
*/
function tuiGetElementOffset(host, element) {
	ngDevMode && console.assert(host.contains(element), "Host must contain element");
	let { offsetTop, offsetLeft, offsetParent } = element;
	while (tuiIsHTMLElement(offsetParent) && offsetParent !== host) {
		offsetTop += offsetParent.offsetTop;
		offsetLeft += offsetParent.offsetLeft;
		offsetParent = offsetParent.offsetParent;
	}
	return {
		offsetTop,
		offsetLeft
	};
}
function tuiInjectElement() {
	return inject(ElementRef).nativeElement;
}
function tuiIsElementEditable(element) {
	return tuiIsTextfield(element) && !element.readOnly && element.inputMode !== "none" || Boolean(element.isContentEditable);
}
function tuiPointToClientRect(x = 0, y = 0) {
	const rect = {
		x,
		y,
		left: x,
		right: x,
		top: y,
		bottom: y,
		width: 0,
		height: 0
	};
	return {
		...rect,
		toJSON: () => rect
	};
}
function tuiValue(input, injector = inject(INJECTOR$1)) {
	const win = injector.get(WA_WINDOW);
	if (!win.tuiInputPatched && isPlatformBrowser(injector.get(PLATFORM_ID))) {
		win.tuiInputPatched = true;
		patch(win.HTMLInputElement.prototype);
		patch(win.HTMLTextAreaElement.prototype);
		patch(win.HTMLSelectElement.prototype);
	}
	let element = isSignal(input) ? void 0 : coerceElement(input);
	let cleanup = () => {};
	const options = { injector };
	const value = signal(element?.value || "");
	const process = (el) => {
		const update = () => untracked(() => value.set(el.value));
		el.addEventListener("input", update, { capture: true });
		el.addEventListener("tui-input", update, { capture: true });
		return () => {
			el.removeEventListener("input", update, { capture: true });
			el.removeEventListener("tui-input", update, { capture: true });
		};
	};
	injector.get(DestroyRef).onDestroy(() => cleanup());
	if (isSignal(input)) effect(() => {
		element = coerceElement(input());
		cleanup();
		if (element && !element.matches("select[multiple]")) {
			value.set(element.value);
			cleanup = process(element);
		}
	}, options);
	else if (element && !element.matches("select[multiple]")) cleanup = process(element);
	effect(() => {
		const v = value();
		/**
		* select[multiple] elements have value of first selected option,
		* but there could be more, setting value resets other selected options
		*/
		if (element?.matches("select[multiple]")) return;
		if (element?.matches(":focus") && "selectionStart" in element) {
			const { selectionStart, selectionEnd } = element;
			/**
			* After programmatic updates of input's value, caret is automatically placed at the end –
			* revert to the previous position
			*/
			element.value = v;
			try {
				element.setSelectionRange(selectionStart, selectionEnd);
			} catch {}
		} else if (element) element.value = v;
	}, options);
	return value;
}
function patch(prototype) {
	const { set } = Object.getOwnPropertyDescriptor(prototype, "value");
	Object.defineProperty(prototype, "value", { set(detail) {
		const value = this.value;
		const event = new CustomEvent("tui-input", {
			detail,
			bubbles: true
		});
		set.call(this, detail);
		if (value !== detail) this.dispatchEvent(event);
	} });
}
function tuiWindowSize(window) {
	return toSignal(fromEvent(window, "resize").pipe(startWith(null), map(() => {
		const width = Math.max(window.document.documentElement.clientWidth || 0, window.innerWidth || 0, window.visualViewport?.width || 0);
		const height = Math.max(window.document.documentElement.clientHeight || 0, window.innerHeight || 0, window.visualViewport?.height || 0);
		const rect = {
			width,
			height,
			top: 0,
			left: 0,
			right: width,
			bottom: height,
			x: 0,
			y: 0
		};
		return {
			...rect,
			toJSON: () => JSON.stringify(rect)
		};
	})), { requireSync: true });
}
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-transitioned.mjs
var TuiTransitioned = class TuiTransitioned {
	constructor() {
		const el = tuiInjectElement();
		afterNextRender(() => requestAnimationFrame(() => el.style.setProperty("transition", "")));
	}
	static {
		this.ɵfac = function TuiTransitioned_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiTransitioned)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiTransitioned,
			selectors: [[
				"",
				"tuiTransitioned",
				""
			]],
			hostAttrs: [
				2,
				"transition",
				"none"
			]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTransitioned, [{
		type: Directive,
		args: [{
			selector: "[tuiTransitioned]",
			host: { style: "transition: none" }
		}]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-appearance.mjs
var TUI_APPEARANCE_DEFAULT_OPTIONS = { appearance: "" };
var TUI_APPEARANCE_OPTIONS = new InjectionToken(ngDevMode ? "TUI_APPEARANCE_OPTIONS" : "", { factory: () => TUI_APPEARANCE_DEFAULT_OPTIONS });
function tuiAppearanceOptionsProvider(token) {
	return tuiProvide(TUI_APPEARANCE_OPTIONS, token);
}
var Styles$9 = class Styles$9 {
	static {
		this.ɵfac = function Styles_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || Styles$9)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: Styles$9,
			selectors: [["ng-component"]],
			exportAs: ["tui-appearance-5.17.0"],
			decls: 0,
			vars: 0,
			template: function Styles_Template(rf, ctx) {},
			styles: ["[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"]){transition-property:all;transition-duration:calc(var(--%NS%tui-duration) / 2);transition-timing-function:var(--%NS%tui-curve-productive-standard);position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border-color,border-radius}[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"]):before,[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"]):after{transition-property:none;transition-duration:inherit;transition-timing-function:ease-in-out}[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"]):focus-visible:not([data-focus=false]){outline-color:var(--%NS%tui-border-focus)}[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"])[data-focus=true]{outline-color:var(--%NS%tui-border-focus)}[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"]):disabled:not([data-state]),[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"])[data-state=disabled]{cursor:initial;opacity:var(--%NS%tui-disabled-opacity)}[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"]):disabled:not([data-state]):before,[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"])[data-state=disabled]:before,[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"]):disabled:not([data-state]):after,[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"])[data-state=disabled]:after{cursor:initial}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles$9, [{
		type: Component,
		args: [{
			template: "",
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			exportAs: `tui-appearance-5.17.0`,
			styles: ["[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"]){transition-property:all;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border-color,border-radius}[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"]):before,[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"]):after{transition-property:none;transition-duration:inherit;transition-timing-function:ease-in-out}[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"]):focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"])[data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"]):disabled:not([data-state]),[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"])[data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"]):disabled:not([data-state]):before,[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"])[data-state=disabled]:before,[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"]):disabled:not([data-state]):after,[tuiAppearance]:where(*[data-tui-version=\"5.17.0\"])[data-state=disabled]:after{cursor:initial}\n"]
		}]
	}], null, null);
})();
var TuiAppearance = class TuiAppearance {
	constructor() {
		this.nothing = tuiWithStyles(Styles$9);
		this.modes = computed((mode = this.tuiAppearanceMode()) => !mode || tuiIsString(mode) ? mode : mode.join(" "));
		this.tuiAppearance = input(inject(TUI_APPEARANCE_OPTIONS).appearance);
		this.tuiAppearanceState = input(null);
		this.tuiAppearanceFocus = input(null);
		this.tuiAppearanceMode = input(null);
	}
	static {
		this.ɵfac = function TuiAppearance_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiAppearance)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiAppearance,
			selectors: [[
				"",
				"tuiAppearance",
				""
			]],
			hostAttrs: [
				"data-tui-version",
				"5.17.0",
				"tuiAppearance",
				""
			],
			hostVars: 4,
			hostBindings: function TuiAppearance_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵattribute("data-appearance", ctx.tuiAppearance())("data-focus", ctx.tuiAppearanceFocus())("data-mode", ctx.modes())("data-state", ctx.tuiAppearanceState());
			},
			inputs: {
				tuiAppearance: [1, "tuiAppearance"],
				tuiAppearanceState: [1, "tuiAppearanceState"],
				tuiAppearanceFocus: [1, "tuiAppearanceFocus"],
				tuiAppearanceMode: [1, "tuiAppearanceMode"]
			},
			features: [ɵɵHostDirectivesFeature([TuiTransitioned])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppearance, [{
		type: Directive,
		args: [{
			selector: "[tuiAppearance]",
			hostDirectives: [TuiTransitioned],
			host: {
				"data-tui-version": "5.17.0",
				tuiAppearance: "",
				"[attr.data-appearance]": "tuiAppearance()",
				"[attr.data-focus]": "tuiAppearanceFocus()",
				"[attr.data-mode]": "modes()",
				"[attr.data-state]": "tuiAppearanceState()"
			}
		}]
	}], null, null);
})();
function tuiAppearance(value, options = {}) {
	return tuiDirectiveBinding(TuiAppearance, "tuiAppearance", value, options);
}
function tuiAppearanceState(value, options = {}) {
	return tuiDirectiveBinding(TuiAppearance, "tuiAppearanceState", value, options);
}
function tuiAppearanceFocus(value, options = {}) {
	return tuiDirectiveBinding(TuiAppearance, "tuiAppearanceFocus", value, options);
}
function tuiAppearanceMode(value, options = {}) {
	return tuiDirectiveBinding(TuiAppearance, "tuiAppearanceMode", value, options);
}
var TuiWithAppearance = class TuiWithAppearance {
	static {
		this.ɵfac = function TuiWithAppearance_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiWithAppearance)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiWithAppearance,
			features: [ɵɵHostDirectivesFeature([{
				directive: TuiAppearance,
				inputs: [
					"tuiAppearance",
					"appearance",
					"tuiAppearanceState",
					"tuiAppearanceState",
					"tuiAppearanceFocus",
					"tuiAppearanceFocus",
					"tuiAppearanceMode",
					"tuiAppearanceMode"
				]
			}])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithAppearance, [{
		type: Directive,
		args: [{ hostDirectives: [{
			directive: TuiAppearance,
			inputs: [
				"tuiAppearance: appearance",
				"tuiAppearanceState",
				"tuiAppearanceFocus",
				"tuiAppearanceMode"
			]
		}] }]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/i18n/fesm2022/taiga-ui-i18n-languages-english.mjs
var TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE = {
	cardNumber: ["Number", "Card number"],
	cardExpiry: ["Expires", "Valid through"]
};
var TUI_ENGLISH_LANGUAGE_ADDON_DOC = {
	demoTexts: [
		"Dark mode",
		"Background",
		"Value"
	],
	preview: "Preview",
	menuText: "Menu",
	searchText: "Search",
	seeAlsoText: "See also",
	tocText: "On this page",
	sourceCodeText: "Source code"
};
var TUI_ENGLISH_LANGUAGE_ADDON_EDITOR = {
	colorSelectorModeNames: ["Solid color", "Gradient"],
	toolbarTools: {
		undo: "Undo",
		redo: "Redo",
		font: "Font",
		fontStyle: "Font style",
		fontSize: "Font size",
		bold: "Bold",
		italic: "Italic",
		underline: "Underline",
		strikeThrough: "Strike through",
		justify: "Justify",
		justifyLeft: "Justify left",
		justifyCenter: "Justify center",
		justifyRight: "Justify right",
		justifyFull: "Justify full",
		list: "List",
		indent: "Indent",
		outdent: "Outdent",
		unorderedList: "Unordered list",
		orderedList: "Ordered list",
		quote: "Quote",
		foreColor: "Color",
		backColor: "Background color",
		hiliteColor: "Highlight color",
		clear: "Clear",
		link: "Link",
		attach: "Attach file",
		tex: "Insert TeX",
		code: "Code",
		image: "Insert image",
		insertHorizontalRule: "Insert horizontal rule",
		superscript: "Superscript",
		subscript: "Subscript",
		insertTable: "Insert table",
		insertGroup: "Insert group",
		hiliteGroup: "Hilite group",
		removeGroup: "Remove group",
		insertAnchor: "Insert anchor",
		mergeCells: "Merge cells",
		splitCells: "Split cells",
		rowsColumnsManaging: "Managing rows and columns",
		cellColor: "Cell color",
		setDetails: "Details",
		removeDetails: "Remove details"
	},
	editorEditLink: {
		urlExample: "example.com",
		anchorExample: "anchor"
	},
	editorTableCommands: [
		["Insert column before", "Insert column after"],
		["Insert row before", "Insert row after"],
		["Delete column", "Delete row"]
	],
	editorCodeOptions: ["Code in the text", "Code in block"],
	editorFontOptions: {
		small: "Small",
		large: "Large",
		normal: "Normal",
		title: "Title",
		subtitle: "Subtitle"
	}
};
var TUI_ENGLISH_LANGUAGE_ADDON_TABLE = {
	showHideText: "Show/Hide",
	paginationTexts: {
		pages: "Pages",
		linesPerPage: "Lines per page",
		of: "of"
	}
};
var TUI_ENGLISH_LANGUAGE_CORE = {
	months: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	close: "Close",
	back: "Back",
	clear: "Clear",
	nothingFoundMessage: "Nothing found",
	defaultErrorMessage: "Value is invalid",
	spinTexts: ["Previous", "Next"],
	shortWeekDays: [
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sun"
	],
	countries: {
		AD: "Andorra",
		AE: "United Arab Emirates",
		AF: "Afghanistan",
		AG: "Antigua & Barbuda",
		AI: "Anguilla",
		AL: "Albania",
		AM: "Armenia",
		AO: "Angola",
		AR: "Argentina",
		AT: "Austria",
		AU: "Australia",
		AW: "Aruba",
		AZ: "Azerbaijan",
		BA: "Bosnia & Herzegovina",
		BB: "Barbados",
		BD: "Bangladesh",
		BE: "Belgium",
		BF: "Burkina Faso",
		BG: "Bulgaria",
		BH: "Bahrain",
		BI: "Burundi",
		BJ: "Benin",
		BL: "St. Barthélemy",
		BM: "Bermuda",
		BN: "Brunei",
		BO: "Bolivia",
		BQ: "Caribbean Netherlands",
		BR: "Brazil",
		BS: "Bahamas",
		BT: "Bhutan",
		BW: "Botswana",
		BY: "Belarus",
		BZ: "Belize",
		CA: "Canada",
		CD: "Congo - Kinshasa",
		CF: "Central African Republic",
		CG: "Congo - Brazzaville",
		CH: "Switzerland",
		CI: "Côte d’Ivoire",
		CL: "Chile",
		CM: "Cameroon",
		CN: "China",
		CO: "Colombia",
		CR: "Costa Rica",
		CU: "Cuba",
		CV: "Cape Verde",
		CW: "Curaçao",
		CY: "Cyprus",
		CZ: "Czechia",
		DE: "Germany",
		DJ: "Djibouti",
		DK: "Denmark",
		DM: "Dominica",
		DO: "Dominican Republic",
		DZ: "Algeria",
		EC: "Ecuador",
		EE: "Estonia",
		EG: "Egypt",
		ER: "Eritrea",
		ES: "Spain",
		ET: "Ethiopia",
		FI: "Finland",
		FJ: "Fiji",
		FK: "Falkland Islands",
		FM: "Federated States of Micronesia",
		FR: "France",
		GA: "Gabon",
		GB: "United Kingdom",
		GD: "Grenada",
		GE: "Georgia",
		GF: "French Guiana",
		GH: "Ghana",
		GI: "Gibraltar",
		GL: "Greenland",
		GM: "Gambia",
		GN: "Guinea",
		GP: "Guadeloupe",
		GQ: "Equatorial Guinea",
		GR: "Greece",
		GT: "Guatemala",
		GW: "Guinea-Bissau",
		GY: "Guyana",
		HK: "Hong Kong",
		HN: "Honduras",
		HR: "Croatia",
		HT: "Haiti",
		HU: "Hungary",
		ID: "Indonesia",
		IE: "Ireland",
		IL: "Israel",
		IN: "India",
		IQ: "Iraq",
		IR: "Iran",
		IS: "Iceland",
		IT: "Italy",
		JM: "Jamaica",
		JO: "Jordan",
		JP: "Japan",
		KE: "Kenya",
		KG: "Kyrgyzstan",
		KH: "Cambodia",
		KM: "Comoros",
		KN: "St. Kitts & Nevis",
		KP: "North Korea",
		KR: "South Korea",
		KW: "Kuwait",
		KY: "Cayman Islands",
		KZ: "Kazakhstan",
		LA: "Laos",
		LB: "Lebanon",
		LC: "St. Lucia",
		LI: "Liechtenstein",
		LK: "Sri Lanka",
		LR: "Liberia",
		LS: "Lesotho",
		LT: "Lithuania",
		LU: "Luxembourg",
		LV: "Latvia",
		LY: "Libya",
		MA: "Morocco",
		MC: "Monaco",
		MD: "Moldova",
		ME: "Montenegro",
		MF: "St. Martin",
		MG: "Madagascar",
		MK: "North Macedonia",
		ML: "Mali",
		MM: "Myanmar (Burma)",
		MN: "Mongolia",
		MO: "Macao",
		MQ: "Martinique",
		MR: "Mauritania",
		MS: "Montserrat",
		MT: "Malta",
		MU: "Mauritius",
		MV: "Maldives",
		MW: "Malawi",
		MX: "Mexico",
		MY: "Malaysia",
		MZ: "Mozambique",
		NA: "Namibia",
		NC: "New Caledonia",
		NE: "Niger",
		NG: "Nigeria",
		NI: "Nicaragua",
		NL: "Netherlands",
		NO: "Norway",
		NP: "Nepal",
		NZ: "New Zealand",
		OM: "Oman",
		PA: "Panama",
		PE: "Peru",
		PF: "French Polynesia",
		PG: "Papua New Guinea",
		PH: "Philippines",
		PK: "Pakistan",
		PL: "Poland",
		PT: "Portugal",
		PW: "Palau",
		PY: "Paraguay",
		QA: "Qatar",
		RE: "Réunion",
		RO: "Romania",
		RS: "Serbia",
		RU: "Russia",
		RW: "Rwanda",
		SA: "Saudi Arabia",
		SB: "Solomon Islands",
		SC: "Seychelles",
		SD: "Sudan",
		SE: "Sweden",
		SG: "Singapore",
		SH: "St. Helena",
		SI: "Slovenia",
		SK: "Slovakia",
		SL: "Sierra Leone",
		SM: "San Marino",
		SN: "Senegal",
		SO: "Somalia",
		SR: "Suriname",
		ST: "São Tomé & Príncipe",
		SV: "El Salvador",
		SX: "Sint Maarten",
		SY: "Syria",
		SZ: "Eswatini",
		TC: "Turks & Caicos Islands",
		TD: "Chad",
		TG: "Togo",
		TH: "Thailand",
		TJ: "Tajikistan",
		TL: "Timor-Leste",
		TM: "Turkmenistan",
		TN: "Tunisia",
		TO: "Tonga",
		TR: "Türkiye",
		TT: "Trinidad & Tobago",
		TW: "Taiwan",
		TZ: "Tanzania",
		UA: "Ukraine",
		UG: "Uganda",
		US: "United States",
		UY: "Uruguay",
		UZ: "Uzbekistan",
		VC: "St. Vincent & Grenadines",
		VE: "Venezuela",
		VG: "British Virgin Islands",
		VN: "Vietnam",
		VU: "Vanuatu",
		WS: "Samoa",
		XK: "Kosovo",
		YE: "Yemen",
		YT: "Mayotte",
		ZA: "South Africa",
		ZM: "Zambia",
		ZW: "Zimbabwe",
		AC: "Ascension Island",
		AS: "American Samoa",
		AX: "Åland Islands",
		CC: "Cocos (Keeling) Islands",
		CK: "Cook Islands",
		CX: "Christmas Island",
		EH: "Western Sahara",
		FO: "Faroe Islands",
		GG: "Guernsey",
		GU: "Guam",
		IM: "Isle of Man",
		JE: "Jersey",
		IO: "British Indian Ocean Territory",
		KI: "Kiribati",
		MH: "Marshall Islands",
		MP: "Northern Mariana Islands",
		NF: "Norfolk Island",
		NR: "Nauru",
		NU: "Niue",
		PM: "Saint Pierre and Miquelon",
		PR: "Puerto Rico",
		PS: "Palestine",
		SJ: "Svalbard and Jan Mayen",
		SS: "South Sudan",
		TA: "Tristan da Cunha",
		TK: "Tokelau",
		TV: "Tuvalu",
		VA: "Holy See",
		VI: "Virgin Islands",
		WF: "Wallis and Futuna"
	}
};
var TUI_ENGLISH_LANGUAGE_KIT = {
	cancel: "Cancel",
	done: "Done",
	more: "More",
	otherDate: "Other date...",
	showAll: "Show all",
	hide: "Hide",
	mobileCalendarTexts: [
		"Choose day",
		"Choose range",
		"Choose days"
	],
	range: ["from", "to"],
	countTexts: ["Plus", "Minus"],
	time: {
		"MM:SS": "MM:SS",
		"HH:MM": "HH:MM",
		"HH:MM AA": "HH:MM AA",
		"HH:MM:SS": "HH:MM:SS",
		"HH:MM:SS AA": "HH:MM:SS AA",
		"HH:MM:SS.MSS": "HH:MM:SS.MSS",
		"HH:MM:SS.MSS AA": "HH:MM:SS.MSS AA",
		"HH AA": "HH AA",
		HH: "HH",
		"MM:SS.MSS": "MM:SS.MSS",
		"SS.MSS": "SS.MSS"
	},
	dateTexts: {
		"dd/mm/yyyy": "DD/MM/YYYY",
		"mm/dd/yyyy": "MM/DD/YYYY",
		"yyyy/mm/dd": "YYYY/MM/DD"
	},
	digitalInformationUnits: [
		"B",
		"KiB",
		"MiB"
	],
	passwordTexts: ["Show password", "Hide password"],
	copyTexts: ["Copy", "Copied"],
	shortCalendarMonths: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	],
	pagination: ["Previous page", "Next page"],
	fileTexts: {
		loadingError: "Upload failed",
		preview: "Preview",
		remove: "Remove"
	},
	inputFileTexts: {
		defaultLabelSingle: "or drop\xA0it\xA0here",
		defaultLabelMultiple: "or drop\xA0them\xA0here",
		defaultLinkSingle: "Choose a file",
		defaultLinkMultiple: "Choose files",
		maxSizeRejectionReason: "File is larger than",
		formatRejectionReason: "Wrong file type",
		drop: "Drop file here",
		dropMultiple: "Drop files here"
	},
	multiSelectTexts: {
		all: "Select all",
		none: "Select none"
	},
	confirm: {
		yes: "Yes",
		no: "No"
	},
	previewTexts: { rotate: "Rotate" },
	zoomTexts: {
		zoomOut: "Zoom out",
		zoomIn: "Zoom in",
		reset: "Reset"
	},
	phoneSearch: "Type country or code",
	dayRangePeriods: [
		"For all the time",
		"Today",
		"Yesterday",
		"Current week",
		"Current month",
		"Previous month"
	]
};
var TUI_ENGLISH_LANGUAGE_LAYOUT = { inputSearch: {
	popular: "Popular",
	history: "Recent",
	placeholder: "Type query",
	hotkey: "to search",
	all: "All",
	empty: "Nothing found"
} };
var TUI_ENGLISH_LANGUAGE = {
	name: "english",
	...TUI_ENGLISH_LANGUAGE_CORE,
	...TUI_ENGLISH_LANGUAGE_KIT,
	...TUI_ENGLISH_LANGUAGE_ADDON_TABLE,
	...TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE,
	...TUI_ENGLISH_LANGUAGE_ADDON_EDITOR,
	...TUI_ENGLISH_LANGUAGE_ADDON_DOC,
	...TUI_ENGLISH_LANGUAGE_LAYOUT
};
//#endregion
//#region node_modules/@taiga-ui/i18n/fesm2022/taiga-ui-i18n-tokens.mjs
/**
* Default Language for Taiga UI libraries i18n
*/
var TUI_DEFAULT_LANGUAGE = new InjectionToken(ngDevMode ? "TUI_DEFAULT_LANGUAGE" : "", { factory: () => TUI_ENGLISH_LANGUAGE });
/**
* Language for Taiga UI libraries i18n
*/
var TUI_LANGUAGE = new InjectionToken(ngDevMode ? "TUI_LANGUAGE" : "", { factory: () => signal(inject(TUI_DEFAULT_LANGUAGE)) });
/**
* Webpack chunk loader for Taiga UI libraries i18n
* @note: cannot be transferred to a shared file
* ReferenceError: Cannot access 'TUI_LANGUAGE_LOADER' before initialization
*/
var TUI_LANGUAGE_LOADER = new InjectionToken(ngDevMode ? "TUI_LANGUAGE_LOADER" : "");
/**
* Default key for search value in storage
*/
var TUI_LANGUAGE_STORAGE_KEY = new InjectionToken(ngDevMode ? "TUI_LANGUAGE_STORAGE_KEY" : "", { factory: () => "tuiLanguage" });
//#endregion
//#region node_modules/@taiga-ui/i18n/fesm2022/taiga-ui-i18n-utils.mjs
function tuiExtractI18n(key) {
	return (language = inject(TUI_LANGUAGE)) => computed(() => language()[key]);
}
async function normalizeCommonJSImport(importPromise) {
	return importPromise.then((m) => m.default || m);
}
function tuiLoadLanguage(language, loader) {
	return from(normalizeCommonJSImport(loader(language))).pipe(map((module) => module?.[`TUI_${language.toUpperCase()}_LANGUAGE`]));
}
function tuiAsyncLoadLanguage(language, loader, fallback) {
	return language && loader ? tuiLoadLanguage(language, loader) : of(fallback);
}
var TuiLanguageSwitcherService = class TuiLanguageSwitcherService extends BehaviorSubject {
	constructor() {
		super(tuiAsyncLoadLanguage(inject(WA_LOCAL_STORAGE)?.getItem(inject(TUI_LANGUAGE_STORAGE_KEY)) || null, inject(TUI_LANGUAGE_LOADER, { optional: true }), inject(TUI_DEFAULT_LANGUAGE)));
		this.fallback = inject(TUI_DEFAULT_LANGUAGE);
		this.key = inject(TUI_LANGUAGE_STORAGE_KEY);
		this.storage = inject(WA_LOCAL_STORAGE);
		this.loader = inject(TUI_LANGUAGE_LOADER, { optional: true });
	}
	get language() {
		return this.storage?.getItem(this.key) || this.fallback.name;
	}
	setLanguage(language) {
		this.storage?.setItem(this.key, language);
		this.next(tuiAsyncLoadLanguage(language, this.loader, this.fallback));
	}
	clear() {
		this.storage?.removeItem(this.key);
		this.next(of(this.fallback));
	}
	static {
		this.ɵfac = function TuiLanguageSwitcherService_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiLanguageSwitcherService)();
		};
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiLanguageSwitcherService,
			factory: TuiLanguageSwitcherService.ɵfac,
			providedIn: "root"
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLanguageSwitcherService, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-observables.mjs
function tuiCloseWatcher() {
	return new Observable((subscriber) => {
		let watcher;
		const setup = () => {
			watcher = getWatcher();
			watcher.onclose = () => setup();
			watcher.oncancel = (event) => {
				event.preventDefault();
				subscriber.next();
			};
		};
		setup();
		return () => watcher.destroy();
	});
}
function getWatcher() {
	try {
		return new CloseWatcher();
	} catch {
		return { destroy: () => {} };
	}
}
/**
* Turns AbstractControl/Abstract-control-directive valueChanges into ReplaySubject(1)
*/
function tuiControlValue(control) {
	return new Observable((subscriber) => control?.valueChanges?.pipe(startWith(control.value)).subscribe(subscriber));
}
function tuiTypedFromEvent(target, event, options = {}) {
	/**
	* @note:
	* in RxJS 7 type signature `TuiTypedEventTarget<E>` !== `HasEventTargetAddRemove<E>`
	*/
	return fromEvent(target, event, options);
}
function tuiStopPropagation() {
	return tap((event) => event.stopPropagation());
}
function tuiIfMap(project, predicate = Boolean) {
	return pipe(switchMap((value) => predicate(value) ? project(value) : EMPTY));
}
/**
* Normalizes scroll event in case element is `html` (document.documentElement)
*/
function tuiScrollFrom(element) {
	return tuiTypedFromEvent(element === element.ownerDocument.documentElement ? element.ownerDocument : element, "scroll");
}
function tuiTakeUntilDestroyed(destroyRef) {
	return pipe(takeUntil(NEVER.pipe(takeUntilDestroyed(destroyRef), catchError(() => EMPTY), defaultIfEmpty(null))));
}
var tuiUntrackedScheduler = {
	now: queueScheduler.now.bind(queueScheduler),
	schedule(work, delay, state) {
		return queueScheduler.schedule(function(s) {
			return untracked(() => work.call(this, s));
		}, delay, state);
	}
};
function tuiWatch(cdr = inject(ChangeDetectorRef)) {
	return tap(() => cdr.markForCheck());
}
function tuiZonefull(zone = inject(NgZone)) {
	return (source) => new Observable((subscriber) => source.subscribe({
		next: (value) => zone.run(() => subscriber.next(value)),
		error: (error) => zone.run(() => subscriber.error(error)),
		complete: () => zone.run(() => subscriber.complete())
	}));
}
function tuiZonefree(zone = inject(NgZone)) {
	return (source) => new Observable((subscriber) => zone.runOutsideAngular(() => source.subscribe(subscriber)));
}
function tuiZoneOptimized(zone = inject(NgZone)) {
	return pipe(tuiZonefree(zone), tuiZonefull(zone));
}
var TuiZoneScheduler = class {
	constructor(zoneConditionFn, scheduler = asyncScheduler) {
		this.zoneConditionFn = zoneConditionFn;
		this.scheduler = scheduler;
	}
	now() {
		return this.scheduler.now();
	}
	schedule(...args) {
		return this.zoneConditionFn(() => this.scheduler.schedule(...args));
	}
};
function tuiZonefreeScheduler(zone = inject(NgZone), scheduler = asyncScheduler) {
	return new TuiZoneScheduler(zone.runOutsideAngular.bind(zone), scheduler);
}
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-tokens.mjs
var TUI_REDUCED_MOTION = new InjectionToken(ngDevMode ? "TUI_REDUCED_MOTION" : "", { factory: () => inject(DOCUMENT).defaultView?.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false });
/**
* Speed of all Taiga UI animations. 1 equals 300ms.
*/
var TUI_ANIMATIONS_SPEED = new InjectionToken(ngDevMode ? "TUI_ANIMATIONS_SPEED" : "", { factory: () => inject(TUI_REDUCED_MOTION) ? 0 : 1 });
var TUI_ASSETS_PATH = new InjectionToken(ngDevMode ? "TUI_ASSETS_PATH" : "", { factory: () => "assets/taiga-ui/icons" });
function tuiAssetsPathProvider(useValue) {
	return {
		provide: TUI_ASSETS_PATH,
		useValue
	};
}
var TUI_AUXILIARY = new InjectionToken(ngDevMode ? "TUI_AUXILIARY" : "", { factory: () => null });
function tuiAsAuxiliary(x) {
	return tuiProvide(TUI_AUXILIARY, x);
}
/**
* Token for media constant
*/
var TUI_MEDIA = new InjectionToken(ngDevMode ? "TUI_MEDIA" : "", { factory: () => ({
	mobile: 768,
	desktopSmall: 1280,
	desktopLarge: Infinity
}) });
var TUI_BREAKPOINT = new InjectionToken(ngDevMode ? "TUI_BREAKPOINT" : "", { factory: () => {
	const size = tuiWindowSize(inject(WA_WINDOW));
	const media = inject(TUI_MEDIA);
	const sorted = Object.values(media).sort((a, b) => a - b);
	const invert = Object.keys(media).reduce((ret, key) => ({
		...ret,
		[media[key]]: key
	}), {});
	return computed(() => {
		const { width } = size();
		const index = sorted.find((size) => size > width) || sorted[sorted.length - 1] || 0;
		return invert[index] ?? "desktopLarge";
	});
} });
var [TUI_COMMON_ICONS, tuiCommonIconsProvider] = tuiCreateOptions({
	check: "@tui.check",
	close: "@tui.x",
	error: "@tui.circle-alert",
	more: "@tui.chevron-right",
	search: "@tui.search",
	ellipsis: "@tui.ellipsis",
	decrement: "@tui.chevron-left",
	increment: "@tui.chevron-right"
});
var TUI_DARK_MODE_DEFAULT_KEY = "tuiDark";
var TUI_DARK_MODE_KEY = new InjectionToken(ngDevMode ? "TUI_DARK_MODE_KEY" : "", { factory: () => TUI_DARK_MODE_DEFAULT_KEY });
var TUI_DARK_MODE = new InjectionToken(ngDevMode ? "TUI_DARK_MODE" : "", { factory: () => {
	const storage = inject(WA_LOCAL_STORAGE);
	const key = inject(TUI_DARK_MODE_KEY);
	const saved = storage?.getItem(key);
	const media = inject(WA_WINDOW).matchMedia("(prefers-color-scheme: dark)");
	const result = signal(saved ? saved === "true" : media.matches);
	const set = result.set.bind(result);
	const pin = (value) => {
		storage?.setItem(key, String(value));
		set(value);
	};
	fromEvent(media, "change").pipe(filter(() => !storage?.getItem(key)), takeUntilDestroyed()).subscribe(() => set(media.matches));
	return Object.assign(result, {
		set: pin,
		update: (updater) => pin(updater(result())),
		reset: () => {
			storage?.removeItem(key);
			set(media.matches);
		}
	});
} });
var TUI_DEFAULT_DATE_FORMAT = {
	mode: "dd/mm/yyyy",
	separator: "."
};
/**
* Formatting configuration for displayed dates
*/
var TUI_DATE_FORMAT = new InjectionToken(ngDevMode ? "TUI_DATE_FORMAT" : "", { factory: () => signal(TUI_DEFAULT_DATE_FORMAT) });
function tuiDateFormatProvider(options) {
	return {
		provide: TUI_DATE_FORMAT,
		useFactory: () => {
			const parent = inject(TUI_DATE_FORMAT, {
				optional: true,
				skipSelf: true
			});
			return computed(() => ({
				...parent?.() || TUI_DEFAULT_DATE_FORMAT,
				...options
			}));
		}
	};
}
/**
* Localized months names
*/
var TUI_MONTHS = new InjectionToken(ngDevMode ? "TUI_MONTHS" : "", { factory: tuiExtractI18n("months") });
/**
* i18n 'close' word
*/
var TUI_CLOSE_WORD = new InjectionToken(ngDevMode ? "TUI_CLOSE_WORD" : "", { factory: tuiExtractI18n("close") });
/**
* i18n 'back' word
*/
var TUI_BACK_WORD = new InjectionToken(ngDevMode ? "TUI_BACK_WORD" : "", { factory: tuiExtractI18n("back") });
/**
* i18n 'clear' word
*/
var TUI_CLEAR_WORD = new InjectionToken(ngDevMode ? "TUI_CLEAR_WORD" : "", { factory: tuiExtractI18n("clear") });
/**
* i18n 'Nothing found' message
*/
var TUI_NOTHING_FOUND_MESSAGE = new InjectionToken(ngDevMode ? "TUI_NOTHING_FOUND_MESSAGE" : "", { factory: tuiExtractI18n("nothingFoundMessage") });
/**
* i18n of error message
*/
var TUI_DEFAULT_ERROR_MESSAGE = new InjectionToken(ngDevMode ? "TUI_DEFAULT_ERROR_MESSAGE" : "", { factory: tuiExtractI18n("defaultErrorMessage") });
/**
* spin i18n texts
*/
var TUI_SPIN_TEXTS = new InjectionToken(ngDevMode ? "TUI_SPIN_TEXTS" : "", { factory: tuiExtractI18n("spinTexts") });
/**
* calendars i18n texts
*/
var TUI_SHORT_WEEK_DAYS = new InjectionToken(ngDevMode ? "TUI_SHORT_WEEK_DAYS" : "", { factory: tuiExtractI18n("shortWeekDays") });
var TUI_ICON_START = new InjectionToken(ngDevMode ? "TUI_ICON_START" : "", { factory: () => "" });
var TUI_ICON_END = new InjectionToken(ngDevMode ? "TUI_ICON_END" : "", { factory: () => "" });
var TUI_ICON_REGISTRY = new InjectionToken(ngDevMode ? "TUI_ICON_REGISTRY" : "", { factory: () => ({}) });
function tuiIconsProvider(icons) {
	return {
		provide: TUI_ICON_REGISTRY,
		useFactory: () => ({
			...inject(TUI_ICON_REGISTRY, {
				skipSelf: true,
				optional: true
			}) || {},
			...Object.fromEntries(Object.entries(icons).map(([key, value]) => [key, `"data:image/svg+xml;charset=UTF-8,${encodeURIComponent(value)}"`]))
		})
	};
}
var TUI_ICON_RESOLVER = new InjectionToken(ngDevMode ? "TUI_ICON_RESOLVER" : "", { factory: () => {
	const path = inject(TUI_ASSETS_PATH);
	return (icon) => `${path}/${icon.replace(/@[a-z]+\./i, "").replaceAll(".", "/")}.svg`;
} });
function tuiGetIconMode(icon) {
	return icon?.match(/@([^.]*)\./)?.[1] || icon || void 0;
}
function tuiInjectIconResolver() {
	const icons = inject(TUI_ICON_REGISTRY);
	const resolver = inject(TUI_ICON_RESOLVER);
	return (icon) => {
		if (!icon || icon.includes("/")) return icon.replace(/@[a-z]+\./i, "");
		return icon.startsWith("@font.") ? icon.replace("@font.", "") : icons[icon] ?? resolver(icon);
	};
}
function tuiIconResolverProvider(useValue) {
	return {
		provide: TUI_ICON_RESOLVER,
		useValue
	};
}
var TUI_DEFAULT_NUMBER_FORMAT = {
	precision: NaN,
	decimalSeparator: ".",
	thousandSeparator: "\xA0",
	rounding: "truncate",
	decimalMode: "pad",
	negativePattern: "prefixFirst"
};
/**
* Formatting configuration for displayed numbers
*/
var TUI_NUMBER_FORMAT = new InjectionToken(ngDevMode ? "TUI_NUMBER_FORMAT" : "", { factory: () => signal(TUI_DEFAULT_NUMBER_FORMAT) });
function tuiNumberFormatProvider(options) {
	return {
		provide: TUI_NUMBER_FORMAT,
		useFactory: () => {
			const parent = inject(TUI_NUMBER_FORMAT, {
				optional: true,
				skipSelf: true
			});
			return computed(() => ({
				...parent?.() || TUI_DEFAULT_NUMBER_FORMAT,
				...options
			}));
		}
	};
}
/**
* A stream of possible selection changes
*/
var TUI_SELECTION_STREAM = new InjectionToken(ngDevMode ? "TUI_SELECTION_STREAM" : "", { factory: () => {
	const doc = inject(DOCUMENT);
	return merge(tuiTypedFromEvent(doc, "selectionchange"), tuiTypedFromEvent(doc, "mouseup"), tuiTypedFromEvent(doc, "mousedown").pipe(switchMap(() => tuiTypedFromEvent(doc, "mousemove").pipe(takeUntil(tuiTypedFromEvent(doc, "mouseup"))))), tuiTypedFromEvent(doc, "keydown"), tuiTypedFromEvent(doc, "keyup")).pipe(share());
} });
var TUI_TEXTFIELD_VALUE = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_VALUE" : "");
var TUI_VALIDATION_ERRORS = new InjectionToken(ngDevMode ? "TUI_VALIDATION_ERRORS" : "", { factory: () => ({}) });
var tuiValidationErrorsProvider = (valueOrFactory) => tuiProvideOptions(TUI_VALIDATION_ERRORS, valueOrFactory, {});
/**
* Viewport accessor
*/
var TUI_VIEWPORT = new InjectionToken(ngDevMode ? "TUI_VIEWPORT" : "", { factory: () => {
	const win = inject(WA_WINDOW);
	return {
		type: "viewport",
		getClientRect() {
			const { height = 0, offsetTop = 0 } = win.visualViewport || {};
			const rect = {
				top: 0,
				left: 0,
				right: win.innerWidth,
				bottom: win.innerHeight,
				width: win.innerWidth,
				height: height + offsetTop || win.innerHeight,
				x: 0,
				y: 0
			};
			return {
				...rect,
				toJSON: () => JSON.stringify(rect)
			};
		}
	};
} });
function tuiAsViewport(accessor) {
	return tuiProvide(TUI_VIEWPORT, accessor);
}
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-icons.mjs
var OPT = {
	self: true,
	optional: true
};
var Styles$8 = class Styles$8 {
	static {
		this.ɵfac = function Styles_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || Styles$8)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: Styles$8,
			selectors: [["ng-component"]],
			exportAs: ["tui-icons-5.17.0"],
			decls: 0,
			vars: 0,
			template: function Styles_Template(rf, ctx) {},
			styles: [":where([tuiIcons][data-tui-version=\"5.17.0\"]){--%NS%t-icon-start: none;--%NS%t-icon-end: none;--%NS%t-zoom: clamp(0, var(--%NS%t-font-offset, 0) - 10, 1) }:where([tuiIcons][data-tui-version=\"5.17.0\"]):before,:where([tuiIcons][data-tui-version=\"5.17.0\"]):after{content:\"\";display:var(--%NS%t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:var(--%NS%tui-icon-size, 1.5rem);flex-shrink:0;box-sizing:content-box;background:currentColor;zoom:calc(100% + 25% * var(--%NS%t-zoom));-webkit-mask-image:var(--%NS%t-icon-start);mask-image:var(--%NS%t-icon-start);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(min(1em,100%) + 10 * var(--%NS%tui-stroke-width)) min(1em,100%),100%;mask-size:calc(min(1em,100%) + 10 * var(--%NS%tui-stroke-width)) min(1em,100%),100%;mask-clip:padding-box}:where([tuiIcons][data-tui-version=\"5.17.0\"]):after{display:var(--%NS%t-icon-end);-webkit-mask-image:var(--%NS%t-icon-end);mask-image:var(--%NS%t-icon-end)}:where([tuiIcons][data-tui-version=\"5.17.0\"]):where([data-icon-start=img]):before{-webkit-mask-image:none;mask-image:none;background:var(--%NS%t-icon-start) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version=\"5.17.0\"]):where([data-icon-end=img]):after{-webkit-mask-image:none;mask-image:none;background:var(--%NS%t-icon-end) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version=\"5.17.0\"]):where([data-icon-start=font]):before,:where([tuiIcons][data-tui-version=\"5.17.0\"]):where([data-icon-end=font]):after{display:grid;-webkit-mask-image:none;mask-image:none;background:none;font:1.5em / 1 var(--%NS%tui-font-icon, inherit);text-align:center;place-content:center;text-transform:none}:where([tuiIcons][data-tui-version=\"5.17.0\"]):where([data-icon-start=font]):before{content:var(--%NS%t-icon-start)}:where([tuiIcons][data-tui-version=\"5.17.0\"]):where([data-icon-end=font]):after{content:var(--%NS%t-icon-end)}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles$8, [{
		type: Component,
		args: [{
			template: "",
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			exportAs: `tui-icons-5.17.0`,
			styles: [":where([tuiIcons][data-tui-version=\"5.17.0\"]){--t-icon-start: none;--t-icon-end: none;--t-zoom: clamp(0, var(--t-font-offset, 0) - 10, 1) }:where([tuiIcons][data-tui-version=\"5.17.0\"]):before,:where([tuiIcons][data-tui-version=\"5.17.0\"]):after{content:\"\";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:var(--tui-icon-size, 1.5rem);flex-shrink:0;box-sizing:content-box;background:currentColor;zoom:calc(100% + 25% * var(--t-zoom));-webkit-mask-image:var(--t-icon-start);mask-image:var(--t-icon-start);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-clip:padding-box}:where([tuiIcons][data-tui-version=\"5.17.0\"]):after{display:var(--t-icon-end);-webkit-mask-image:var(--t-icon-end);mask-image:var(--t-icon-end)}:where([tuiIcons][data-tui-version=\"5.17.0\"]):where([data-icon-start=img]):before{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-start) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version=\"5.17.0\"]):where([data-icon-end=img]):after{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-end) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version=\"5.17.0\"]):where([data-icon-start=font]):before,:where([tuiIcons][data-tui-version=\"5.17.0\"]):where([data-icon-end=font]):after{display:grid;-webkit-mask-image:none;mask-image:none;background:none;font:1.5em / 1 var(--tui-font-icon, inherit);text-align:center;place-content:center;text-transform:none}:where([tuiIcons][data-tui-version=\"5.17.0\"]):where([data-icon-start=font]):before{content:var(--t-icon-start)}:where([tuiIcons][data-tui-version=\"5.17.0\"]):where([data-icon-end=font]):after{content:var(--t-icon-end)}\n"]
		}]
	}], null, null);
})();
var TuiIcons = class TuiIcons {
	constructor() {
		this.resolver = tuiInjectIconResolver();
		this.nothing = tuiWithStyles(Styles$8);
		this.start = computed(() => this.resolve(this.iconStart()));
		this.end = computed(() => this.resolve(this.iconEnd()));
		this.startMode = computed(() => tuiGetIconMode(this.iconStart()));
		this.endMode = computed(() => tuiGetIconMode(this.iconEnd()));
		this.iconEnd = input(inject(TUI_ICON_END, OPT));
		this.iconStart = input(inject(TUI_ICON_START, OPT));
	}
	resolve(icon) {
		if (!icon) return null;
		return tuiGetIconMode(icon) === "font" ? `'${this.resolver(icon)}'` : `url(${this.resolver(icon)})`;
	}
	static {
		this.ɵfac = function TuiIcons_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiIcons)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiIcons,
			hostAttrs: [
				"data-tui-version",
				"5.17.0",
				"tuiIcons",
				""
			],
			hostVars: 6,
			hostBindings: function TuiIcons_HostBindings(rf, ctx) {
				if (rf & 2) {
					ɵɵattribute("data-icon-end", ctx.endMode())("data-icon-start", ctx.startMode());
					ɵɵstyleProp("--%NS%t-icon-end", ctx.end())("--%NS%t-icon-start", ctx.start());
				}
			},
			inputs: {
				iconEnd: [1, "iconEnd"],
				iconStart: [1, "iconStart"]
			}
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcons, [{
		type: Directive,
		args: [{ host: {
			"data-tui-version": "5.17.0",
			tuiIcons: "",
			"[attr.data-icon-end]": "endMode()",
			"[attr.data-icon-start]": "startMode()",
			"[style.--t-icon-end]": "end()",
			"[style.--t-icon-start]": "start()"
		} }]
	}], null, null);
})();
function tuiIconStart(value, options) {
	return tuiDirectiveBinding(TuiIcons, "iconStart", value, options);
}
function tuiIconEnd(value, options = {}) {
	return tuiDirectiveBinding(TuiIcons, "iconEnd", value, options);
}
var TuiWithIcons = class TuiWithIcons {
	static {
		this.ɵfac = function TuiWithIcons_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiWithIcons)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiWithIcons,
			features: [ɵɵHostDirectivesFeature([{
				directive: TuiIcons,
				inputs: [
					"iconStart",
					"iconStart",
					"iconEnd",
					"iconEnd"
				]
			}])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithIcons, [{
		type: Directive,
		args: [{ hostDirectives: [{
			directive: TuiIcons,
			inputs: ["iconStart", "iconEnd"]
		}] }]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-button.mjs
var TUI_BUTTON_DEFAULT_OPTIONS = {
	appearance: "primary",
	size: "l"
};
var [TUI_BUTTON_OPTIONS, tuiButtonOptionsProvider] = tuiCreateOptions(TUI_BUTTON_DEFAULT_OPTIONS);
var Styles$7 = class Styles$7 {
	static {
		this.ɵfac = function Styles_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || Styles$7)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: Styles$7,
			selectors: [["ng-component"]],
			exportAs: ["tui-button-5.17.0"],
			decls: 0,
			vars: 0,
			template: function Styles_Template(rf, ctx) {},
			styles: ["[tuiButton]:where(*[data-tui-version=\"5.17.0\"]),[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"]){--%NS%t-size: var(--%NS%tui-height-l);--%NS%t-radius: var(--%NS%tui-radius-l);--%NS%t-gap: .25rem;--%NS%t-padding: .5rem 1.25rem;--%NS%t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--%NS%t-gap, 0rem) - 2 * var(--%NS%t-margin, 0rem));min-block-size:fit-content;block-size:var(--%NS%t-size);justify-content:center;border-radius:var(--%NS%t-radius);padding:var(--%NS%t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--%NS%tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>img,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>img,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>tui-icon,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>tui-icon,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiAvatar],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiAvatar],[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>tui-badge,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>tui-badge,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiBadge],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiBadge],[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiRadio],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiRadio],[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiSwitch],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiSwitch],[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiCheckbox],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiCheckbox],[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:before,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:before,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:after,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:after{margin:var(--%NS%t-margin)}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>.t-loader,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>.t-loader{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%)}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>.t-loader .t-text,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>.t-loader .t-text{position:absolute}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs]{--%NS%t-size: var(--%NS%tui-height-xs);--%NS%t-radius: var(--%NS%tui-radius-xs);--%NS%t-gap: .125rem;--%NS%t-padding: 0 .375rem;--%NS%t-margin: -.125rem;font:var(--%NS%tui-typography-body-s)}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs] tui-icon,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs] tui-icon,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs]:before,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs]:before,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs]:after,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{--%NS%t-size: var(--%NS%tui-height-s);--%NS%t-radius: var(--%NS%tui-radius-m);--%NS%t-gap: .125rem;--%NS%t-padding: .125rem .625rem;--%NS%t-margin: -.125rem;font:var(--%NS%tui-typography-body-s)}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] tui-icon,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] tui-icon,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after{font-size:1rem}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-end=font]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=m],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{--%NS%t-size: var(--%NS%tui-height-m);--%NS%t-radius: var(--%NS%tui-radius-m);--%NS%t-gap: .125rem;--%NS%t-padding: .375rem 1rem;--%NS%t-margin: -.375rem;font:var(--%NS%tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])._loading,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])._loading{--%NS%tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])._loading>*,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])._loading>*,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])._loading:before,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])._loading:before,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])._loading:after,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])._loading:after{opacity:0}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])._loading>.t-loader,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])._loading>.t-loader{opacity:1}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[tuiButtonVertical],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[tuiButtonVertical]{--%NS%t-margin: 0rem !important;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--%NS%tui-typography-ui-s)}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[tuiButtonVertical]>*,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[tuiButtonVertical]>*{max-block-size:calc(var(--%NS%t-line-height) * 2);line-height:inherit!important;--%NS%t-line-height: var(--%NS%tui-lh) !important}[tuiButton]:where(*[data-tui-version=\"5.17.0\"]):is(a):not([href]),[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"]):is(a):not([href]){opacity:var(--%NS%tui-disabled-opacity);pointer-events:none}[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"]){gap:0;inline-size:var(--%NS%t-size);min-inline-size:var(--%NS%t-size);font-size:0!important;font-variant-ligatures:none!important;padding:0}[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-icon-start]:after{display:none}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles$7, [{
		type: Component,
		args: [{
			template: "",
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			exportAs: `tui-button-5.17.0`,
			styles: ["[tuiButton]:where(*[data-tui-version=\"5.17.0\"]),[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"]){--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: .5rem 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));min-block-size:fit-content;block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>img,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>img,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>tui-icon,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>tui-icon,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiAvatar],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiAvatar],[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>tui-badge,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>tui-badge,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiBadge],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiBadge],[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiRadio],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiRadio],[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiSwitch],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiSwitch],[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiCheckbox],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>[tuiCheckbox],[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:before,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:before,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:after,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:after{margin:var(--t-margin)}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>.t-loader,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>.t-loader{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%)}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])>.t-loader .t-text,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])>.t-loader .t-text{position:absolute}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs] tui-icon,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs] tui-icon,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs]:before,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs]:before,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs]:after,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=xs]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: .125rem .625rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] tui-icon,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] tui-icon,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after{font-size:1rem}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-end=font]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=m],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: .375rem 1rem;--t-margin: -.375rem;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])._loading,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])._loading>*,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])._loading>*,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])._loading:before,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])._loading:before,[tuiButton]:where(*[data-tui-version=\"5.17.0\"])._loading:after,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])._loading:after{opacity:0}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])._loading>.t-loader,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])._loading>.t-loader{opacity:1}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[tuiButtonVertical],[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[tuiButtonVertical]{--t-margin: 0rem !important;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-typography-ui-s)}[tuiButton]:where(*[data-tui-version=\"5.17.0\"])[tuiButtonVertical]>*,[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2);line-height:inherit!important;--t-line-height: var(--tui-lh) !important}[tuiButton]:where(*[data-tui-version=\"5.17.0\"]):is(a):not([href]),[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"]):is(a):not([href]){opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"]){gap:0;inline-size:var(--t-size);min-inline-size:var(--t-size);font-size:0!important;font-variant-ligatures:none!important;padding:0}[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[tuiIconButton]:where(*[data-tui-version=\"5.17.0\"])[data-icon-start]:after{display:none}\n"]
		}]
	}], null, null);
})();
var TuiButton = class TuiButton {
	constructor() {
		this.nothing = tuiWithStyles(Styles$7);
		this.size = input(inject(TUI_BUTTON_OPTIONS).size);
	}
	static {
		this.ɵfac = function TuiButton_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiButton)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiButton,
			selectors: [
				[
					"a",
					"tuiButton",
					""
				],
				[
					"button",
					"tuiButton",
					""
				],
				[
					"a",
					"tuiIconButton",
					""
				],
				[
					"button",
					"tuiIconButton",
					""
				]
			],
			hostVars: 1,
			hostBindings: function TuiButton_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵattribute("data-size", ctx.size());
			},
			inputs: { size: [1, "size"] },
			features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButton, [{
		type: Directive,
		args: [{
			selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]",
			providers: [tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)],
			hostDirectives: [TuiWithAppearance, TuiWithIcons],
			host: { "[attr.data-size]": "size()" }
		}]
	}], null, null);
})();
var MAX_YEAR = 9999;
var MAX_DISPLAYED_YEAR = 2099;
var RANGE_SEPARATOR_CHAR = ` – `;
/**
* @internal
* Used in {@link TuiInputDateRange}
*/
var DATE_RANGE_FILLER_LENGTH = 20 + RANGE_SEPARATOR_CHAR.length;
var TuiDayOfWeek = {
	Sunday: 0,
	Monday: 1,
	Tuesday: 2,
	Wednesday: 3,
	Thursday: 4,
	Friday: 5,
	Saturday: 6
};
var TuiMonthNumber = {
	January: 0,
	February: 1,
	March: 2,
	April: 3,
	May: 4,
	June: 5,
	July: 6,
	August: 7,
	September: 8,
	October: 9,
	November: 10,
	December: 11
};
/**
* Immutable year object
* @nosideeffects
*/
var TuiYear = class TuiYear {
	constructor(year) {
		this.year = year;
		ngDevMode && console.assert(TuiYear.isValidYear(year));
	}
	/**
	* Checks year for validity
	*/
	static isValidYear(year) {
		return Number.isInteger(year) && tuiInRange(year, 0, 1e4);
	}
	/**
	* Check if passed year is a leap year
	*/
	static isLeapYear(year) {
		ngDevMode && console.assert(TuiYear.isValidYear(year));
		return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
	}
	/**
	* Returns amount of leap years from year 0 to the passed one
	*/
	static getAbsoluteLeapYears(year) {
		ngDevMode && console.assert(TuiYear.isValidYear(year));
		return Math.ceil(year / 400) + (Math.ceil(year / 4) - Math.ceil(year / 100));
	}
	static lengthBetween(from, to) {
		return to.year - from.year;
	}
	/**
	* Normalizes year by clamping it between min and max years
	*/
	static normalizeYearPart(year) {
		return tuiNormalizeToIntNumber(year, 0, MAX_YEAR);
	}
	get formattedYear() {
		return String(this.year).padStart(4, "0");
	}
	get isLeapYear() {
		return TuiYear.isLeapYear(this.year);
	}
	/**
	* Returns amount of leap years from year 0 to current
	*/
	get absoluteLeapYears() {
		return TuiYear.getAbsoluteLeapYears(this.year);
	}
	/**
	* Passed year is after current
	*/
	yearBefore({ year }) {
		return this.year < year;
	}
	/**
	* Passed year is the same or after current
	*/
	yearSameOrBefore({ year }) {
		return this.year <= year;
	}
	/**
	* Passed year is the same as current
	*/
	yearSame({ year }) {
		return this.year === year;
	}
	/**
	* Passed year is either the same of before the current
	*/
	yearSameOrAfter({ year }) {
		return this.year >= year;
	}
	/**
	* Passed year is before current
	*/
	yearAfter({ year }) {
		return this.year > year;
	}
	/**
	* Immutably offsets year
	*/
	append({ year = 0 }) {
		ngDevMode && console.assert(Number.isInteger(year));
		const resultYear = this.year + year;
		ngDevMode && console.assert(TuiYear.isValidYear(resultYear));
		return new TuiYear(resultYear);
	}
	toString() {
		return this.formattedYear;
	}
	valueOf() {
		return this.year;
	}
	/**
	* Returns the primitive value of the given Date object.
	* Depending on the argument, the method can return either a string or a number.
	* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
	*/
	[Symbol.toPrimitive](hint) {
		return Date.prototype[Symbol.toPrimitive].call(this, hint);
	}
	toJSON() {
		return this.formattedYear;
	}
};
/**
* Immutable object consisting of year and month
*/
var TuiMonth = class TuiMonth extends TuiYear {
	/**
	* @param year
	* @param month (starting with 0)
	*/
	constructor(year, month) {
		super(year);
		this.month = month;
		ngDevMode && console.assert(TuiMonth.isValidMonth(year, month));
	}
	/**
	* Tests month and year for validity
	*/
	static isValidMonth(year, month) {
		return TuiYear.isValidYear(year) && TuiMonth.isValidMonthPart(month);
	}
	/**
	* Returns number of days in a month
	*/
	static getMonthDaysCount(month, isLeapYear) {
		ngDevMode && console.assert(TuiMonth.isValidMonthPart(month));
		switch (month) {
			case TuiMonthNumber.April:
			case TuiMonthNumber.June:
			case TuiMonthNumber.November:
			case TuiMonthNumber.September: return 30;
			case TuiMonthNumber.February: return isLeapYear ? 29 : 28;
			default: return 31;
		}
	}
	/**
	* Returns current month and year based on local time zone
	* @nosideeffects
	*/
	static currentLocal() {
		const nativeDate = /* @__PURE__ */ new Date();
		return new TuiMonth(nativeDate.getFullYear(), nativeDate.getMonth());
	}
	/**
	* Returns current month and year based on UTC
	*/
	static currentUtc() {
		const nativeDate = /* @__PURE__ */ new Date();
		return new TuiMonth(nativeDate.getUTCFullYear(), nativeDate.getUTCMonth());
	}
	static lengthBetween(from, to) {
		const absoluteFrom = from.month + from.year * 12;
		return to.month + to.year * 12 - absoluteFrom;
	}
	/**
	* Normalizes number by clamping it between min and max month
	*/
	static normalizeMonthPart(month) {
		return tuiNormalizeToIntNumber(month, 0, 11);
	}
	/**
	* Tests month for validity
	*/
	static isValidMonthPart(month) {
		return Number.isInteger(month) && tuiInRange(month, 0, 12);
	}
	get formattedMonthPart() {
		return String(this.month + 1).padStart(2, "0");
	}
	/**
	* Returns days in a month
	*/
	get daysCount() {
		return TuiMonth.getMonthDaysCount(this.month, this.isLeapYear);
	}
	/**
	* Passed month and year are after current
	*/
	monthBefore(another) {
		return this.yearBefore(another) || this.yearSame(another) && this.month < another.month;
	}
	/**
	* Passed month and year are after or the same as current
	*/
	monthSameOrBefore(another) {
		return this.yearBefore(another) || this.yearSame(another) && this.month <= another.month;
	}
	/**
	* Passed month and year are the same as current
	*/
	monthSame(another) {
		return this.yearSame(another) && this.month === another.month;
	}
	/**
	* Passed month and year are either before or equal to current
	*/
	monthSameOrAfter(another) {
		return this.yearAfter(another) || this.yearSame(another) && this.month >= another.month;
	}
	/**
	* Passed month and year are before current
	*/
	monthAfter(another) {
		return this.yearAfter(another) || this.yearSame(another) && this.month > another.month;
	}
	/**
	* Immutably alters current month and year by passed offset
	*
	* @param offset
	* @return new month and year object as a result of offsetting current
	*/
	append({ year = 0, month = 0 }) {
		const totalMonths = (this.year + year) * 12 + this.month + month;
		return new TuiMonth(Math.floor(totalMonths / 12), totalMonths % 12);
	}
	toString() {
		return `${this.formattedMonthPart}.${this.formattedYear}`;
	}
	valueOf() {
		return this.toLocalNativeDate().valueOf();
	}
	toJSON() {
		return `${super.toJSON()}-${this.formattedMonthPart}`;
	}
	/**
	* Returns native {@link Date} based on local time zone
	*/
	toLocalNativeDate() {
		const date = new Date(this.year, this.month);
		date.setFullYear(this.year);
		return date;
	}
	/**
	* Returns native {@link Date} based on UTC
	*/
	toUtcNativeDate() {
		return new Date(Date.UTC(this.year, this.month));
	}
};
/**
* Immutable date object, consisting of day, month and year
*/
var TuiDay = class TuiDay extends TuiMonth {
	/**
	* @param year
	* @param month (starting with 0)
	* @param day
	*/
	constructor(year, month, day) {
		super(year, month);
		this.day = day;
		ngDevMode && console.assert(TuiDay.isValidDay(year, month, day));
	}
	/**
	* Creates {@link TuiDay} from native {@link Date} based on local time zone
	*/
	static fromLocalNativeDate(date) {
		return new TuiDay(date.getFullYear(), date.getMonth(), date.getDate());
	}
	/**
	* Creates {@link TuiDay} from native {@link Date} using UTC
	*/
	static fromUtcNativeDate(date) {
		return new TuiDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
	}
	/**
	* Check validity of year, month and day
	*
	* @param year
	* @param month
	* @param day
	* @return boolean validity
	*/
	static isValidDay(year, month, day) {
		return TuiMonth.isValidMonth(year, month) && Number.isInteger(day) && tuiInRange(day, 1, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1);
	}
	/**
	* Current day based on local time zone
	*/
	static currentLocal() {
		const nativeDate = /* @__PURE__ */ new Date();
		const year = nativeDate.getFullYear();
		const month = nativeDate.getMonth();
		const day = nativeDate.getDate();
		return new TuiDay(year, month, day);
	}
	/**
	* Returns current day based on UTC
	*/
	static currentUtc() {
		const nativeDate = /* @__PURE__ */ new Date();
		const year = nativeDate.getUTCFullYear();
		const month = nativeDate.getUTCMonth();
		const day = nativeDate.getUTCDate();
		return new TuiDay(year, month, day);
	}
	/**
	* Calculates {@link TuiDay} normalizing year, month and day. {@link NaN} is turned into minimal value.
	*
	* @param year any year value, including invalid
	* @param month any month value, including invalid (months start with 0)
	* @param day any day value, including invalid
	* @return normalized date
	*/
	static normalizeOf(year, month, day) {
		const normalizedYear = TuiYear.normalizeYearPart(year);
		const normalizedMonth = TuiMonth.normalizeMonthPart(month);
		const normalizedDay = TuiDay.normalizeDayPart(day, normalizedMonth, normalizedYear);
		return new TuiDay(normalizedYear, normalizedMonth, normalizedDay);
	}
	static lengthBetween(from, to) {
		return Math.round((to.toLocalNativeDate().getTime() - from.toLocalNativeDate().getTime()) / (1e3 * 60 * 60 * 24));
	}
	static parseRawDateString(date, dateMode = "dd/mm/yyyy") {
		ngDevMode && console.assert(date.length === 10, "[parseRawDateString]: wrong date string length");
		switch (dateMode) {
			case "mm/dd/yyyy": return {
				day: Number.parseInt(date.slice(3, 5), 10),
				month: Number.parseInt(date.slice(0, 2), 10) - 1,
				year: Number.parseInt(date.slice(6, 10), 10)
			};
			case "yyyy/mm/dd": return {
				day: Number.parseInt(date.slice(8, 10), 10),
				month: Number.parseInt(date.slice(5, 7), 10) - 1,
				year: Number.parseInt(date.slice(0, 4), 10)
			};
			default: return {
				day: Number.parseInt(date.slice(0, 2), 10),
				month: Number.parseInt(date.slice(3, 5), 10) - 1,
				year: Number.parseInt(date.slice(6, 10), 10)
			};
		}
	}
	/**
	* Parsing a string with date with normalization
	*
	* @param rawDate date string
	* @param dateMode date format of the date string (dd/mm/yyyy | mm/dd/yyyy | yyyy/mm/dd)
	* @return normalized date
	*/
	static normalizeParse(rawDate, dateMode = "dd/mm/yyyy") {
		const { day, month, year } = this.parseRawDateString(rawDate, dateMode);
		return TuiDay.normalizeOf(year, month, day);
	}
	/**
	* Parsing a date stringified in a toJSON format
	* @param ymdString date string in format of YYYY-MM-DD
	* @return date
	* @throws exceptions if any part of the date is invalid
	*/
	static jsonParse(ymdString) {
		const { day, month, year } = this.parseRawDateString(ymdString, "yyyy/mm/dd");
		if (!TuiMonth.isValidMonth(year, month) || !Number.isInteger(day) || !tuiInRange(day, 1, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1)) throw new TuiInvalidDayException(year, month, day);
		return new TuiDay(year, month, day);
	}
	static normalizeDayPart(day, month, year) {
		ngDevMode && console.assert(TuiMonth.isValidMonth(year, month));
		return tuiNormalizeToIntNumber(day, 1, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)));
	}
	get formattedDayPart() {
		return String(this.day).padStart(2, "0");
	}
	get isWeekend() {
		const dayOfWeek = this.dayOfWeek(false);
		return dayOfWeek === TuiDayOfWeek.Saturday || dayOfWeek === TuiDayOfWeek.Sunday;
	}
	/**
	* Returns day of week
	*
	* @param startFromMonday whether week starts from Monday and not from Sunday
	* @return day of week (from 0 to 6)
	*/
	dayOfWeek(startFromMonday = true) {
		const dayOfWeek = startFromMonday ? this.toLocalNativeDate().getDay() - 1 : this.toLocalNativeDate().getDay();
		return dayOfWeek < 0 ? 6 : dayOfWeek;
	}
	/**
	* Passed date is after current
	*/
	dayBefore(another) {
		return this.monthBefore(another) || this.monthSame(another) && this.day < another.day;
	}
	/**
	* Passed date is after or equal to current
	*/
	daySameOrBefore(another) {
		return this.monthBefore(another) || this.monthSame(another) && this.day <= another.day;
	}
	/**
	* Passed date is the same as current
	*/
	daySame(another) {
		return this.monthSame(another) && this.day === another.day;
	}
	/**
	* Passed date is either before or the same as current
	*/
	daySameOrAfter(another) {
		return this.monthAfter(another) || this.monthSame(another) && this.day >= another.day;
	}
	/**
	* Passed date is before current
	*/
	dayAfter(another) {
		return this.monthAfter(another) || this.monthSame(another) && this.day > another.day;
	}
	/**
	* Clamping date between two limits
	*
	* @param min
	* @param max
	* @return clamped date
	*/
	dayLimit(min, max) {
		if (min !== null && this.dayBefore(min)) return min;
		return max !== null && this.dayAfter(max) ? max : this;
	}
	/**
	* Immutably alters current day by passed offset
	*
	* If resulting month has more days than original one, date is rounded to the maximum day
	* in the resulting month. Offset of days will be calculated based on the resulted year and month
	* to not interfere with parent classes methods
	*
	* @param offset
	* @return new date object as a result of offsetting current
	*/
	append({ year = 0, month = 0, day = 0 }) {
		const totalMonths = (this.year + year) * 12 + this.month + month;
		let years = Math.floor(totalMonths / 12);
		let months = totalMonths % 12;
		const monthDaysCount = TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
		const currentMonthDaysCount = TuiMonth.getMonthDaysCount(this.month, TuiYear.isLeapYear(years));
		let days = day;
		if (this.day >= monthDaysCount) days += this.day - (currentMonthDaysCount - monthDaysCount);
		else if (currentMonthDaysCount < monthDaysCount && this.day === currentMonthDaysCount) days += this.day + (monthDaysCount - currentMonthDaysCount);
		else days += this.day;
		while (days > TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) {
			days -= TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
			if (months === TuiMonthNumber.December) {
				years++;
				months = TuiMonthNumber.January;
			} else months++;
		}
		while (days < 1) {
			if (months === TuiMonthNumber.January) {
				years--;
				months = TuiMonthNumber.December;
			} else months--;
			days += TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
		}
		return new TuiDay(years, months, days);
	}
	/**
	* Returns formatted whole date
	*/
	getFormattedDay(dateFormat, separator) {
		ngDevMode && console.assert(separator.length === 1, "Separator should consist of only 1 symbol");
		const dd = this.formattedDayPart;
		const mm = this.formattedMonthPart;
		const yyyy = this.formattedYear;
		switch (dateFormat) {
			case "mm/dd/yyyy": return `${mm}${separator}${dd}${separator}${yyyy}`;
			case "yyyy/mm/dd": return `${yyyy}${separator}${mm}${separator}${dd}`;
			default: return `${dd}${separator}${mm}${separator}${yyyy}`;
		}
	}
	toString(dateFormat = "dd/mm/yyyy", separator = ".") {
		return this.getFormattedDay(dateFormat, separator);
	}
	toJSON() {
		return `${super.toJSON()}-${this.formattedDayPart}`;
	}
	/**
	* Returns native {@link Date} based on local time zone
	*/
	toLocalNativeDate() {
		const date = super.toLocalNativeDate();
		date.setDate(this.day);
		return date;
	}
	/**
	* Returns native {@link Date} based on UTC
	*/
	toUtcNativeDate() {
		return new Date(Date.UTC(this.year, this.month, this.day));
	}
};
var TuiInvalidDayException = class extends Error {
	constructor(year, month, day) {
		super(ngDevMode ? `Invalid day: ${year}-${month}-${day}` : "");
	}
};
/**
* An immutable range of two {@link TuiMonth} objects
*/
var TuiMonthRange = class TuiMonthRange {
	constructor(from, to) {
		this.from = from;
		this.to = to;
		ngDevMode && console.assert(from.monthSameOrBefore(to));
	}
	static sort(month1, month2) {
		return month1.monthSameOrBefore(month2) ? new TuiMonthRange(month1, month2) : new TuiMonthRange(month2, month1);
	}
	get isSingleMonth() {
		return this.from.monthSame(this.to);
	}
	monthSame(another) {
		return this.from.monthSame(another.from) && this.to.monthSame(another.to);
	}
	monthInRange(month) {
		return this.from.monthSameOrBefore(month) && this.to.monthSameOrAfter(month);
	}
	toString() {
		return `${this.from}${RANGE_SEPARATOR_CHAR}${this.to}`;
	}
};
/**
* An immutable range of two {@link TuiDay} objects
*/
var TuiDayRange = class TuiDayRange extends TuiMonthRange {
	constructor(from, to) {
		super(from, to);
		this.from = from;
		this.to = to;
		ngDevMode && console.assert(from.daySameOrBefore(to));
	}
	/**
	* Creates range from two days after sorting them
	*
	* @param day1
	* @param day2
	* @return new range with sorted days
	*/
	static sort(day1, day2) {
		return day1.daySameOrBefore(day2) ? new TuiDayRange(day1, day2) : new TuiDayRange(day2, day1);
	}
	/**
	* Parse and correct a day range in string format
	*
	* @param rangeString a string of dates in a format dd/mm/yyyy - dd/mm/yyyy
	* @param dateMode {@link TuiDateMode}
	* @return normalized day range object
	*/
	static normalizeParse(rangeString, dateMode = "dd/mm/yyyy") {
		const leftDay = TuiDay.normalizeParse(rangeString.slice(0, 10), dateMode);
		return rangeString.length < DATE_RANGE_FILLER_LENGTH ? new TuiDayRange(leftDay, leftDay) : TuiDayRange.sort(leftDay, TuiDay.normalizeParse(rangeString.slice(10 + RANGE_SEPARATOR_CHAR.length), dateMode));
	}
	get isSingleDay() {
		return this.from.daySame(this.to);
	}
	/**
	* Tests ranges for identity
	*
	* @param another second range to test against current
	* @return `true` if days are identical
	*/
	daySame(another) {
		return this.from.daySame(another.from) && this.to.daySame(another.to);
	}
	dayInRange(day) {
		return this.from.daySameOrBefore(day) && this.to.daySameOrAfter(day);
	}
	/**
	* Locks range between two days included, or limits from one side if the other is null
	*
	* @param min
	* @param max
	* @return range — clamped range
	*/
	dayLimit(min, max) {
		return new TuiDayRange(this.from.dayLimit(min, max), this.to.dayLimit(min, max));
	}
	/**
	* Human readable format.
	*/
	getFormattedDayRange(dateFormat, dateSeparator) {
		return `${this.from.getFormattedDay(dateFormat, dateSeparator)}${RANGE_SEPARATOR_CHAR}${this.to.getFormattedDay(dateFormat, dateSeparator)}`;
	}
	toString(dateFormat = "dd/mm/yyyy", dateSeparator = ".") {
		return this.getFormattedDayRange(dateFormat, dateSeparator);
	}
	toArray() {
		const { from, to } = this;
		const arr = [];
		for (const day = from.toUtcNativeDate(); day <= to.toUtcNativeDate(); day.setDate(day.getDate() + 1)) arr.push(TuiDay.fromLocalNativeDate(day));
		return arr;
	}
};
var TUI_FIRST_DAY = new TuiDay(0, 0, 1);
var TUI_LAST_DAY = new TuiDay(MAX_YEAR, 11, 31);
var TUI_LAST_DISPLAYED_DAY = new TuiDay(MAX_DISPLAYED_YEAR, 11, 31);
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-validator.mjs
var TuiValidator = class TuiValidator {
	constructor() {
		this.onChange = EMPTY_FUNCTION;
		this.validate = Validators.nullValidator;
	}
	registerOnValidatorChange(onChange) {
		this.onChange = onChange;
	}
	ngOnChanges() {
		this.onChange();
	}
	static {
		this.ɵfac = function TuiValidator_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiValidator)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiValidator,
			selectors: [[
				"",
				"tuiValidator",
				""
			]],
			inputs: { validate: [
				0,
				"tuiValidator",
				"validate"
			] },
			features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, TuiValidator, true)]), ɵɵNgOnChangesFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValidator, [{
		type: Directive,
		args: [{
			selector: "[tuiValidator]",
			inputs: ["validate: tuiValidator"],
			providers: [tuiProvide(NG_VALIDATORS, TuiValidator, true)]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-items-handlers.mjs
var TUI_DEFAULT_ITEMS_HANDLERS = {
	stringify: signal(String),
	identityMatcher: signal(TUI_DEFAULT_IDENTITY_MATCHER),
	disabledItemHandler: signal(TUI_FALSE_HANDLER)
};
/**
* Default items handlers for components
*/
var TUI_ITEMS_HANDLERS = new InjectionToken(ngDevMode ? "TUI_ITEMS_HANDLERS" : "", { factory: () => TUI_DEFAULT_ITEMS_HANDLERS });
function tuiItemsHandlersProvider(options) {
	return {
		provide: TUI_ITEMS_HANDLERS,
		deps: [[
			new Optional(),
			new SkipSelf(),
			TUI_ITEMS_HANDLERS
		]],
		useFactory: (parent) => ({
			stringify: signal(parent?.stringify() ?? TUI_DEFAULT_ITEMS_HANDLERS.stringify()),
			identityMatcher: signal(parent?.identityMatcher() ?? TUI_DEFAULT_ITEMS_HANDLERS.identityMatcher()),
			disabledItemHandler: signal(parent?.disabledItemHandler() ?? TUI_DEFAULT_ITEMS_HANDLERS.disabledItemHandler()),
			...options
		})
	};
}
var TuiItemsHandlersDirective = class TuiItemsHandlersDirective {
	constructor() {
		this.handlers = inject(TUI_ITEMS_HANDLERS, { skipSelf: true });
		this.stringify = input(this.handlers.stringify());
		this.identityMatcher = input(this.handlers.identityMatcher());
		this.disabledItemHandler = input(this.handlers.disabledItemHandler());
	}
	static {
		this.ɵfac = function TuiItemsHandlersDirective_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiItemsHandlersDirective)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiItemsHandlersDirective,
			inputs: {
				stringify: [1, "stringify"],
				identityMatcher: [1, "identityMatcher"],
				disabledItemHandler: [1, "disabledItemHandler"]
			},
			features: [ɵɵProvidersFeature([tuiProvide(TUI_ITEMS_HANDLERS, TuiItemsHandlersDirective)])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsHandlersDirective, [{
		type: Directive,
		args: [{ providers: [tuiProvide(TUI_ITEMS_HANDLERS, TuiItemsHandlersDirective)] }]
	}], null, null);
})();
var TuiWithItemsHandlers = class TuiWithItemsHandlers {
	static {
		this.ɵfac = function TuiWithItemsHandlers_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiWithItemsHandlers)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiWithItemsHandlers,
			features: [ɵɵHostDirectivesFeature([{
				directive: TuiItemsHandlersDirective,
				inputs: [
					"stringify",
					"stringify",
					"identityMatcher",
					"identityMatcher",
					"disabledItemHandler",
					"disabledItemHandler"
				]
			}])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithItemsHandlers, [{
		type: Directive,
		args: [{ hostDirectives: [{
			directive: TuiItemsHandlersDirective,
			inputs: [
				"stringify",
				"identityMatcher",
				"disabledItemHandler"
			]
		}] }]
	}], null, null);
})();
var TuiItemsHandlersValidator = class TuiItemsHandlersValidator extends TuiValidator {
	constructor() {
		super(...arguments);
		this.handlers = inject(TuiItemsHandlersDirective);
		this.initialized = false;
		this.update = effect(() => {
			this.handlers.disabledItemHandler();
			if (this.initialized) this.onChange();
			else this.initialized = true;
		});
		this.disabledItemHandler = (value) => Array.isArray(value) ? value.some((item) => this.handlers.disabledItemHandler()(item)) : Boolean(value) && this.handlers.disabledItemHandler()(value);
		this.validate = ({ value }) => this.disabledItemHandler(value) ? { tuiDisabledItem: value } : null;
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiItemsHandlersValidator_BaseFactory;
			return function TuiItemsHandlersValidator_Factory(__ngFactoryType__) {
				return (ɵTuiItemsHandlersValidator_BaseFactory || (ɵTuiItemsHandlersValidator_BaseFactory = ɵɵgetInheritedFactory(TuiItemsHandlersValidator)))(__ngFactoryType__ || TuiItemsHandlersValidator);
			};
		})();
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiItemsHandlersValidator,
			features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, TuiItemsHandlersValidator, true)]), ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsHandlersValidator, [{
		type: Directive,
		args: [{ providers: [tuiProvide(NG_VALIDATORS, TuiItemsHandlersValidator, true)] }]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-pipes-mapper.mjs
var TuiMapperPipe = class TuiMapperPipe {
	/**
	* Maps object to an arbitrary result through a mapper function
	*
	* @param value an item to transform
	* @param mapper a mapping function
	* @param args arbitrary number of additional arguments
	*/
	transform(value, mapper, ...args) {
		return mapper(value, ...args);
	}
	static {
		this.ɵfac = function TuiMapperPipe_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiMapperPipe)();
		};
	}
	static {
		this.ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
			name: "tuiMapper",
			type: TuiMapperPipe,
			pure: true
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMapperPipe, [{
		type: Pipe,
		args: [{ name: "tuiMapper" }]
	}], null, null);
})();
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_platform-chunk.mjs
var hasV8BreakIterator;
try {
	hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
	hasV8BreakIterator = false;
}
var Platform = class Platform {
	_platformId = inject(PLATFORM_ID);
	isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
	EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
	TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
	BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
	WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
	IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
	FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
	ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
	SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
	static ɵfac = function Platform_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Platform)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineService({
		token: Platform,
		factory: Platform.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{ type: Service }], null, null);
})();
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_directionality-chunk.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
	providedIn: "root",
	factory: () => inject(DOCUMENT)
});
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
	const value = rawValue?.toLowerCase() || "";
	if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
	return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class Directionality {
	get value() {
		return this.valueSignal();
	}
	valueSignal = signal("ltr", ...ngDevMode ? [{ debugName: "valueSignal" }] : []);
	change = new EventEmitter();
	constructor() {
		const _document = inject(DIR_DOCUMENT, { optional: true });
		if (_document) {
			const bodyDir = _document.body ? _document.body.dir : null;
			const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
			this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
		}
	}
	ngOnDestroy() {
		this.change.complete();
	}
	static ɵfac = function Directionality_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Directionality)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineService({
		token: Directionality,
		factory: Directionality.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{ type: Service }], () => [], null);
})();
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_scrolling-chunk.mjs
var RtlScrollAxisType;
(function(RtlScrollAxisType) {
	RtlScrollAxisType[RtlScrollAxisType["NORMAL"] = 0] = "NORMAL";
	RtlScrollAxisType[RtlScrollAxisType["NEGATED"] = 1] = "NEGATED";
	RtlScrollAxisType[RtlScrollAxisType["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
	if (scrollBehaviorSupported == null) {
		if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
			scrollBehaviorSupported = false;
			return scrollBehaviorSupported;
		}
		if (document.documentElement?.style && "scrollBehavior" in document.documentElement.style) scrollBehaviorSupported = true;
		else {
			const scrollToFunction = Element.prototype.scrollTo;
			if (scrollToFunction) scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
			else scrollBehaviorSupported = false;
		}
	}
	return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
	if (typeof document !== "object" || !document) return RtlScrollAxisType.NORMAL;
	if (rtlScrollAxisType == null) {
		const scrollContainer = document.createElement("div");
		const containerStyle = scrollContainer.style;
		scrollContainer.dir = "rtl";
		containerStyle.width = "1px";
		containerStyle.overflow = "auto";
		containerStyle.visibility = "hidden";
		containerStyle.pointerEvents = "none";
		containerStyle.position = "absolute";
		const content = document.createElement("div");
		const contentStyle = content.style;
		contentStyle.width = "2px";
		contentStyle.height = "1px";
		scrollContainer.appendChild(content);
		document.body.appendChild(scrollContainer);
		rtlScrollAxisType = RtlScrollAxisType.NORMAL;
		if (scrollContainer.scrollLeft === 0) {
			scrollContainer.scrollLeft = 1;
			rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
		}
		scrollContainer.remove();
	}
	return rtlScrollAxisType;
}
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_data-source-chunk.mjs
var DataSource = class {};
function isDataSource(value) {
	return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_recycle-view-repeater-strategy-chunk.mjs
var ArrayDataSource = class extends DataSource {
	_data;
	constructor(_data) {
		super();
		this._data = _data;
	}
	connect() {
		return isObservable(this._data) ? this._data : of(this._data);
	}
	disconnect() {}
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation) {
	_ViewRepeaterOperation[_ViewRepeaterOperation["REPLACED"] = 0] = "REPLACED";
	_ViewRepeaterOperation[_ViewRepeaterOperation["INSERTED"] = 1] = "INSERTED";
	_ViewRepeaterOperation[_ViewRepeaterOperation["MOVED"] = 2] = "MOVED";
	_ViewRepeaterOperation[_ViewRepeaterOperation["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _RecycleViewRepeaterStrategy = class {
	viewCacheSize = 20;
	_viewCache = [];
	applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
		changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
			let view;
			let operation;
			if (record.previousIndex == null) {
				const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
				view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
				operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
			} else if (currentIndex == null) {
				this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
				operation = _ViewRepeaterOperation.REMOVED;
			} else {
				view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
				operation = _ViewRepeaterOperation.MOVED;
			}
			if (itemViewChanged) itemViewChanged({
				context: view?.context,
				operation,
				record
			});
		});
	}
	detach() {
		for (const view of this._viewCache) view.destroy();
		this._viewCache = [];
	}
	_insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
		const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
		if (cachedView) {
			cachedView.context.$implicit = value;
			return;
		}
		const viewArgs = viewArgsFactory();
		return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
	}
	_detachAndCacheView(index, viewContainerRef) {
		const detachedView = viewContainerRef.detach(index);
		this._maybeCacheView(detachedView, viewContainerRef);
	}
	_moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
		const view = viewContainerRef.get(adjustedPreviousIndex);
		viewContainerRef.move(view, currentIndex);
		view.context.$implicit = value;
		return view;
	}
	_maybeCacheView(view, viewContainerRef) {
		if (this._viewCache.length < this.viewCacheSize) this._viewCache.push(view);
		else {
			const index = viewContainerRef.indexOf(view);
			if (index === -1) view.destroy();
			else viewContainerRef.remove(index);
		}
	}
	_insertViewFromCache(index, viewContainerRef) {
		const cachedView = this._viewCache.pop();
		if (cachedView) viewContainerRef.insert(cachedView, index);
		return cachedView || null;
	}
};
//#endregion
//#region node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir = class Dir {
	_isInitialized = false;
	_rawDir = "";
	change = new EventEmitter();
	get dir() {
		return this.valueSignal();
	}
	set dir(value) {
		const previousValue = this.valueSignal();
		this.valueSignal.set(_resolveDirectionality(value));
		this._rawDir = value;
		if (previousValue !== this.valueSignal() && this._isInitialized) this.change.emit(this.valueSignal());
	}
	get value() {
		return this.dir;
	}
	valueSignal = signal("ltr", ...ngDevMode ? [{ debugName: "valueSignal" }] : []);
	ngAfterContentInit() {
		this._isInitialized = true;
	}
	ngOnDestroy() {
		this.change.complete();
	}
	static ɵfac = function Dir_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Dir)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: Dir,
		selectors: [[
			"",
			"dir",
			""
		]],
		hostVars: 1,
		hostBindings: function Dir_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵattribute("dir", ctx._rawDir);
		},
		inputs: { dir: "dir" },
		outputs: { change: "dirChange" },
		exportAs: ["dir"],
		features: [ɵɵProvidersFeature([{
			provide: Directionality,
			useExisting: Dir
		}])]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
		type: Directive,
		args: [{
			selector: "[dir]",
			providers: [{
				provide: Directionality,
				useExisting: Dir
			}],
			host: { "[attr.dir]": "_rawDir" },
			exportAs: "dir"
		}]
	}], null, {
		change: [{
			type: Output,
			args: ["dirChange"]
		}],
		dir: [{ type: Input }]
	});
})();
var BidiModule = class BidiModule {
	static ɵfac = function BidiModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BidiModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: BidiModule,
		imports: [Dir],
		exports: [Dir]
	});
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
		type: NgModule,
		args: [{
			imports: [Dir],
			exports: [Dir]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c0$14 = ["contentWrapper"];
var _c1$4 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
	_scrolledIndexChange = new Subject();
	scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
	_viewport = null;
	_itemSize;
	_minBufferPx;
	_maxBufferPx;
	constructor(itemSize, minBufferPx, maxBufferPx) {
		this._itemSize = itemSize;
		this._minBufferPx = minBufferPx;
		this._maxBufferPx = maxBufferPx;
	}
	attach(viewport) {
		this._viewport = viewport;
		this._updateTotalContentSize();
		this._updateRenderedRange();
	}
	detach() {
		this._scrolledIndexChange.complete();
		this._viewport = null;
	}
	updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
		if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
		this._itemSize = itemSize;
		this._minBufferPx = minBufferPx;
		this._maxBufferPx = maxBufferPx;
		this._updateTotalContentSize();
		this._updateRenderedRange();
	}
	onContentScrolled() {
		this._updateRenderedRange();
	}
	onDataLengthChanged() {
		this._updateTotalContentSize();
		this._updateRenderedRange();
	}
	onContentRendered() {}
	onRenderedOffsetChanged() {}
	scrollToIndex(index, behavior) {
		if (this._viewport) this._viewport.scrollToOffset(index * this._itemSize, behavior);
	}
	_updateTotalContentSize() {
		if (!this._viewport) return;
		this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
	}
	_updateRenderedRange() {
		if (!this._viewport) return;
		const renderedRange = this._viewport.getRenderedRange();
		const newRange = {
			start: renderedRange.start,
			end: renderedRange.end
		};
		const viewportSize = this._viewport.getViewportSize();
		const dataLength = this._viewport.getDataLength();
		let scrollOffset = this._viewport.measureScrollOffset();
		let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
		if (newRange.end > dataLength) {
			const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
			const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
			if (firstVisibleIndex != newVisibleIndex) {
				firstVisibleIndex = newVisibleIndex;
				scrollOffset = newVisibleIndex * this._itemSize;
				newRange.start = Math.floor(firstVisibleIndex);
			}
			newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
		}
		const startBuffer = scrollOffset - newRange.start * this._itemSize;
		if (startBuffer < this._minBufferPx && newRange.start != 0) {
			const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
			newRange.start = Math.max(0, newRange.start - expandStart);
			newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
		} else {
			const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
			if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
				const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
				if (expandEnd > 0) {
					newRange.end = Math.min(dataLength, newRange.end + expandEnd);
					newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
				}
			}
		}
		this._viewport.setRenderedRange(newRange);
		this._viewport.setRenderedContentOffset(Math.round(this._itemSize * newRange.start));
		this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
	}
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
	return fixedSizeDir._scrollStrategy;
}
var CdkFixedSizeVirtualScroll = class CdkFixedSizeVirtualScroll {
	get itemSize() {
		return this._itemSize;
	}
	set itemSize(value) {
		this._itemSize = coerceNumberProperty(value);
	}
	_itemSize = 20;
	get minBufferPx() {
		return this._minBufferPx;
	}
	set minBufferPx(value) {
		this._minBufferPx = coerceNumberProperty(value);
	}
	_minBufferPx = 100;
	get maxBufferPx() {
		return this._maxBufferPx;
	}
	set maxBufferPx(value) {
		this._maxBufferPx = coerceNumberProperty(value);
	}
	_maxBufferPx = 200;
	_scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
	ngOnChanges() {
		this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
	}
	static ɵfac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || CdkFixedSizeVirtualScroll)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: CdkFixedSizeVirtualScroll,
		selectors: [[
			"cdk-virtual-scroll-viewport",
			"itemSize",
			""
		]],
		inputs: {
			itemSize: "itemSize",
			minBufferPx: "minBufferPx",
			maxBufferPx: "maxBufferPx"
		},
		features: [ɵɵProvidersFeature([{
			provide: VIRTUAL_SCROLL_STRATEGY,
			useFactory: _fixedSizeVirtualScrollStrategyFactory,
			deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
		}]), ɵɵNgOnChangesFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
		type: Directive,
		args: [{
			selector: "cdk-virtual-scroll-viewport[itemSize]",
			providers: [{
				provide: VIRTUAL_SCROLL_STRATEGY,
				useFactory: _fixedSizeVirtualScrollStrategyFactory,
				deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
			}]
		}]
	}], null, {
		itemSize: [{ type: Input }],
		minBufferPx: [{ type: Input }],
		maxBufferPx: [{ type: Input }]
	});
})();
var ScrollDispatcher = class ScrollDispatcher {
	_ngZone = inject(NgZone);
	_platform = inject(Platform);
	_renderer = inject(RendererFactory2).createRenderer(null, null);
	_cleanupGlobalListener;
	_scrolled = new Subject();
	_scrolledCount = 0;
	scrollContainers = /* @__PURE__ */ new Map();
	register(target) {
		if (!this.scrollContainers.has(target)) this.scrollContainers.set(target, target.elementScrolled().subscribe(() => this._scrolled.next(target)));
	}
	deregister(target) {
		const ref = this.scrollContainers.get(target);
		if (ref) {
			ref.unsubscribe();
			this.scrollContainers.delete(target);
		}
	}
	scrolled(auditTimeInMs = 20) {
		if (!this._platform.isBrowser) return of();
		return new Observable((observer) => {
			if (!this._cleanupGlobalListener) this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
			const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
			this._scrolledCount++;
			return () => {
				subscription.unsubscribe();
				this._scrolledCount--;
				if (!this._scrolledCount) {
					this._cleanupGlobalListener?.();
					this._cleanupGlobalListener = void 0;
				}
			};
		});
	}
	ngOnDestroy() {
		this._cleanupGlobalListener?.();
		this._cleanupGlobalListener = void 0;
		this.scrollContainers.forEach((_, container) => this.deregister(container));
		this._scrolled.complete();
	}
	ancestorScrolled(elementOrElementRef, auditTimeInMs) {
		const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
		return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
	}
	getAncestorScrollContainers(elementOrElementRef) {
		const scrollingContainers = [];
		this.scrollContainers.forEach((_, target) => {
			if (this._targetContainsElement(target, elementOrElementRef)) scrollingContainers.push(target);
		});
		return scrollingContainers;
	}
	_targetContainsElement(scrollable, elementOrElementRef) {
		let element = coerceElement(elementOrElementRef);
		let targetElement = scrollable.getElementRef().nativeElement;
		do
			if (element == targetElement) return true;
		while (element = element.parentElement);
		return false;
	}
	static ɵfac = function ScrollDispatcher_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ScrollDispatcher)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineService({
		token: ScrollDispatcher,
		factory: ScrollDispatcher.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{ type: Service }], null, null);
})();
var CdkScrollable = class CdkScrollable {
	elementRef = inject(ElementRef);
	scrollDispatcher = inject(ScrollDispatcher);
	ngZone = inject(NgZone);
	dir = inject(Directionality, { optional: true });
	_scrollElement = this.elementRef.nativeElement;
	_destroyed = new Subject();
	_renderer = inject(Renderer2);
	_cleanupScroll;
	_elementScrolled = new Subject();
	ngOnInit() {
		this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
		this.scrollDispatcher.register(this);
	}
	ngOnDestroy() {
		this._cleanupScroll?.();
		this._elementScrolled.complete();
		this.scrollDispatcher.deregister(this);
		this._destroyed.next();
		this._destroyed.complete();
	}
	elementScrolled() {
		return this._elementScrolled;
	}
	getElementRef() {
		return this.elementRef;
	}
	scrollTo(options) {
		const el = this.elementRef.nativeElement;
		const isRtl = this.dir && this.dir.value == "rtl";
		if (options.left == null) options.left = isRtl ? options.end : options.start;
		if (options.right == null) options.right = isRtl ? options.start : options.end;
		if (options.bottom != null) options.top = el.scrollHeight - el.clientHeight - options.bottom;
		if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
			if (options.left != null) options.right = el.scrollWidth - el.clientWidth - options.left;
			if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) options.left = options.right;
			else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) options.left = options.right ? -options.right : options.right;
		} else if (options.right != null) options.left = el.scrollWidth - el.clientWidth - options.right;
		this._applyScrollToOptions(options);
	}
	_applyScrollToOptions(options) {
		const el = this.elementRef.nativeElement;
		if (supportsScrollBehavior()) el.scrollTo(options);
		else {
			if (options.top != null) el.scrollTop = options.top;
			if (options.left != null) el.scrollLeft = options.left;
		}
	}
	measureScrollOffset(from) {
		const LEFT = "left";
		const RIGHT = "right";
		const el = this.elementRef.nativeElement;
		if (from == "top") return el.scrollTop;
		if (from == "bottom") return el.scrollHeight - el.clientHeight - el.scrollTop;
		const isRtl = this.dir && this.dir.value == "rtl";
		if (from == "start") from = isRtl ? RIGHT : LEFT;
		else if (from == "end") from = isRtl ? LEFT : RIGHT;
		if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) if (from == LEFT) return el.scrollWidth - el.clientWidth - el.scrollLeft;
		else return el.scrollLeft;
		else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) if (from == LEFT) return el.scrollLeft + el.scrollWidth - el.clientWidth;
		else return -el.scrollLeft;
		else if (from == LEFT) return el.scrollLeft;
		else return el.scrollWidth - el.clientWidth - el.scrollLeft;
	}
	static ɵfac = function CdkScrollable_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || CdkScrollable)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: CdkScrollable,
		selectors: [[
			"",
			"cdk-scrollable",
			""
		], [
			"",
			"cdkScrollable",
			""
		]]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
		type: Directive,
		args: [{ selector: "[cdk-scrollable], [cdkScrollable]" }]
	}], null, null);
})();
var ViewportRuler = class ViewportRuler {
	_platform = inject(Platform);
	_listeners;
	_viewportSize = null;
	_change = new Subject();
	_document = inject(DOCUMENT);
	constructor() {
		const ngZone = inject(NgZone);
		const renderer = inject(RendererFactory2).createRenderer(null, null);
		ngZone.runOutsideAngular(() => {
			if (this._platform.isBrowser) {
				const changeListener = (event) => this._change.next(event);
				this._listeners = [renderer.listen("window", "resize", changeListener), renderer.listen("window", "orientationchange", changeListener)];
			}
			this.change().subscribe(() => this._viewportSize = null);
		});
	}
	ngOnDestroy() {
		this._listeners?.forEach((cleanup) => cleanup());
		this._change.complete();
	}
	getViewportSize() {
		if (!this._viewportSize) this._updateViewportSize();
		const output = {
			width: this._viewportSize.width,
			height: this._viewportSize.height
		};
		if (!this._platform.isBrowser) this._viewportSize = null;
		return output;
	}
	getViewportRect() {
		const scrollPosition = this.getViewportScrollPosition();
		const { width, height } = this.getViewportSize();
		return {
			top: scrollPosition.top,
			left: scrollPosition.left,
			bottom: scrollPosition.top + height,
			right: scrollPosition.left + width,
			height,
			width
		};
	}
	getViewportScrollPosition() {
		if (!this._platform.isBrowser) return {
			top: 0,
			left: 0
		};
		const document = this._document;
		const window = this._getWindow();
		const documentElement = document.documentElement;
		const documentRect = documentElement.getBoundingClientRect();
		return {
			top: -documentRect.top || document.body?.scrollTop || window.scrollY || documentElement.scrollTop || 0,
			left: -documentRect.left || document.body?.scrollLeft || window.scrollX || documentElement.scrollLeft || 0
		};
	}
	change(throttleTime = 20) {
		return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
	}
	_getWindow() {
		return this._document.defaultView || window;
	}
	_updateViewportSize() {
		const window = this._getWindow();
		this._viewportSize = this._platform.isBrowser ? {
			width: window.innerWidth,
			height: window.innerHeight
		} : {
			width: 0,
			height: 0
		};
	}
	static ɵfac = function ViewportRuler_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ViewportRuler)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineService({
		token: ViewportRuler,
		factory: ViewportRuler.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{ type: Service }], () => [], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var CdkVirtualScrollable = class CdkVirtualScrollable extends CdkScrollable {
	measureViewportSize(orientation) {
		const viewportEl = this.elementRef.nativeElement;
		return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
	}
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵCdkVirtualScrollable_BaseFactory;
		return function CdkVirtualScrollable_Factory(__ngFactoryType__) {
			return (ɵCdkVirtualScrollable_BaseFactory || (ɵCdkVirtualScrollable_BaseFactory = ɵɵgetInheritedFactory(CdkVirtualScrollable)))(__ngFactoryType__ || CdkVirtualScrollable);
		};
	})();
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: CdkVirtualScrollable,
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{ type: Directive }], null, null);
})();
function rangesEqual(r1, r2) {
	return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CDK_VIRTUAL_SCROLL_VIEWPORT = new InjectionToken("CDK_VIRTUAL_SCROLL_VIEWPORT");
var CdkVirtualScrollViewport = class CdkVirtualScrollViewport extends CdkVirtualScrollable {
	elementRef = inject(ElementRef);
	_changeDetectorRef = inject(ChangeDetectorRef);
	_scrollStrategy = inject(VIRTUAL_SCROLL_STRATEGY, { optional: true });
	scrollable = inject(VIRTUAL_SCROLLABLE, { optional: true });
	_platform = inject(Platform);
	_detachedSubject = new Subject();
	_renderedRangeSubject = new Subject();
	_renderedContentOffsetSubject = new Subject();
	get orientation() {
		return this._orientation;
	}
	set orientation(orientation) {
		if (this._orientation !== orientation) {
			this._orientation = orientation;
			this._calculateSpacerSize();
		}
	}
	_orientation = "vertical";
	appendOnly = false;
	scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
	_contentWrapper;
	renderedRangeStream = this._renderedRangeSubject;
	renderedContentOffset = this._renderedContentOffsetSubject.pipe(filter((offset) => offset !== null), distinctUntilChanged());
	_totalContentSize = 0;
	_totalContentWidth = signal("", ...ngDevMode ? [{ debugName: "_totalContentWidth" }] : []);
	_totalContentHeight = signal("", ...ngDevMode ? [{ debugName: "_totalContentHeight" }] : []);
	_renderedContentTransform;
	_renderedRange = {
		start: 0,
		end: 0
	};
	_dataLength = 0;
	_viewportSize = 0;
	_forOf = null;
	_renderedContentOffset = 0;
	_renderedContentOffsetNeedsRewrite = false;
	_changeDetectionNeeded = signal(false, ...ngDevMode ? [{ debugName: "_changeDetectionNeeded" }] : []);
	_runAfterChangeDetection = [];
	_viewportChanges = Subscription.EMPTY;
	_injector = inject(Injector);
	_isDestroyed = false;
	constructor() {
		super();
		const viewportRuler = inject(ViewportRuler);
		if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) throw Error("Error: cdk-virtual-scroll-viewport requires the \"itemSize\" property to be set.");
		this._viewportChanges = viewportRuler.change().subscribe(() => {
			this.checkViewportSize();
		});
		if (!this.scrollable) {
			this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
			this.scrollable = this;
		}
		const ref = effect(() => {
			if (this._changeDetectionNeeded()) this._doChangeDetection();
		}, {
			...ngDevMode ? { debugName: "ref" } : {},
			injector: inject(ApplicationRef).injector
		});
		inject(DestroyRef).onDestroy(() => void ref.destroy());
	}
	ngOnInit() {
		if (!this._platform.isBrowser) return;
		if (this.scrollable === this) super.ngOnInit();
		this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
			this._measureViewportSize();
			this._scrollStrategy.attach(this);
			this.scrollable.elementScrolled().pipe(startWith(null), auditTime(0, SCROLL_SCHEDULER), takeUntil(this._destroyed)).subscribe(() => this._scrollStrategy.onContentScrolled());
			this._markChangeDetectionNeeded();
		}));
	}
	ngOnDestroy() {
		this.detach();
		this._scrollStrategy.detach();
		this._renderedRangeSubject.complete();
		this._detachedSubject.complete();
		this._viewportChanges.unsubscribe();
		this._isDestroyed = true;
		super.ngOnDestroy();
	}
	attach(forOf) {
		if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) throw Error("CdkVirtualScrollViewport is already attached.");
		this.ngZone.runOutsideAngular(() => {
			this._forOf = forOf;
			this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
				const newLength = data.length;
				if (newLength !== this._dataLength) {
					this._dataLength = newLength;
					this._scrollStrategy.onDataLengthChanged();
				}
				this._doChangeDetection();
			});
		});
	}
	detach() {
		this._forOf = null;
		this._detachedSubject.next();
	}
	getDataLength() {
		return this._dataLength;
	}
	getViewportSize() {
		return this._viewportSize;
	}
	getRenderedRange() {
		return this._renderedRange;
	}
	measureBoundingClientRectWithScrollOffset(from) {
		return this.getElementRef().nativeElement.getBoundingClientRect()[from];
	}
	setTotalContentSize(size) {
		if (this._totalContentSize !== size) {
			this._totalContentSize = size;
			this._calculateSpacerSize();
			this._markChangeDetectionNeeded();
		}
	}
	setRenderedRange(range) {
		if (!rangesEqual(this._renderedRange, range)) {
			if (this.appendOnly) range = {
				start: 0,
				end: Math.max(this._renderedRange.end, range.end)
			};
			this._renderedRangeSubject.next(this._renderedRange = range);
			this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
		}
	}
	getOffsetToRenderedContentStart() {
		return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
	}
	setRenderedContentOffset(offset, to = "to-start") {
		offset = this.appendOnly && to === "to-start" ? 0 : offset;
		const isRtl = this.dir && this.dir.value == "rtl";
		const isHorizontal = this.orientation == "horizontal";
		const axis = isHorizontal ? "X" : "Y";
		let transform = `translate${axis}(${Number((isHorizontal && isRtl ? -1 : 1) * offset)}px)`;
		this._renderedContentOffset = offset;
		if (to === "to-end") {
			transform += ` translate${axis}(-100%)`;
			this._renderedContentOffsetNeedsRewrite = true;
		}
		if (this._renderedContentTransform != transform) {
			this._renderedContentTransform = transform;
			this._markChangeDetectionNeeded(() => {
				if (this._renderedContentOffsetNeedsRewrite) {
					this._renderedContentOffset -= this.measureRenderedContentSize();
					this._renderedContentOffsetNeedsRewrite = false;
					this.setRenderedContentOffset(this._renderedContentOffset);
				} else this._scrollStrategy.onRenderedOffsetChanged();
			});
		}
	}
	scrollToOffset(offset, behavior = "auto") {
		const options = { behavior };
		if (this.orientation === "horizontal") options.start = offset;
		else options.top = offset;
		this.scrollable.scrollTo(options);
	}
	scrollToIndex(index, behavior = "auto") {
		this._scrollStrategy.scrollToIndex(index, behavior);
	}
	measureScrollOffset(from) {
		let measureScrollOffset;
		if (this.scrollable == this) measureScrollOffset = (_from) => super.measureScrollOffset(_from);
		else measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
		return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
	}
	measureViewportOffset(from) {
		let fromRect;
		const LEFT = "left";
		const RIGHT = "right";
		const isRtl = this.dir?.value == "rtl";
		if (from == "start") fromRect = isRtl ? RIGHT : LEFT;
		else if (from == "end") fromRect = isRtl ? LEFT : RIGHT;
		else if (from) fromRect = from;
		else fromRect = this.orientation === "horizontal" ? "left" : "top";
		const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
		return this.elementRef.nativeElement.getBoundingClientRect()[fromRect] - scrollerClientRect;
	}
	measureRenderedContentSize() {
		const contentEl = this._contentWrapper.nativeElement;
		return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
	}
	measureRangeSize(range) {
		if (!this._forOf) return 0;
		return this._forOf.measureRangeSize(range, this.orientation);
	}
	checkViewportSize() {
		this._measureViewportSize();
		this._scrollStrategy.onDataLengthChanged();
	}
	_measureViewportSize() {
		this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
	}
	_markChangeDetectionNeeded(runAfter) {
		if (runAfter) this._runAfterChangeDetection.push(runAfter);
		if (untracked(this._changeDetectionNeeded)) return;
		this.ngZone.runOutsideAngular(() => {
			Promise.resolve().then(() => {
				this.ngZone.run(() => {
					this._changeDetectionNeeded.set(true);
				});
			});
		});
	}
	_doChangeDetection() {
		if (this._isDestroyed) return;
		this.ngZone.run(() => {
			this._changeDetectorRef.markForCheck();
			this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
			this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart());
			afterNextRender(() => {
				this._changeDetectionNeeded.set(false);
				const runAfterChangeDetection = this._runAfterChangeDetection;
				this._runAfterChangeDetection = [];
				for (const fn of runAfterChangeDetection) fn();
			}, { injector: this._injector });
		});
	}
	_calculateSpacerSize() {
		this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`);
		this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : "");
	}
	static ɵfac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || CdkVirtualScrollViewport)();
	};
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: CdkVirtualScrollViewport,
		selectors: [["cdk-virtual-scroll-viewport"]],
		viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
			if (rf & 1) ɵɵviewQuery(_c0$14, 7);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._contentWrapper = _t.first);
			}
		},
		hostAttrs: [1, "cdk-virtual-scroll-viewport"],
		hostVars: 4,
		hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵclassProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
		},
		inputs: {
			orientation: "orientation",
			appendOnly: [
				2,
				"appendOnly",
				"appendOnly",
				booleanAttribute
			]
		},
		outputs: { scrolledIndexChange: "scrolledIndexChange" },
		features: [ɵɵProvidersFeature([{
			provide: CdkScrollable,
			useFactory: () => inject(VIRTUAL_SCROLLABLE, { optional: true }) || inject(CdkVirtualScrollViewport)
		}, {
			provide: CDK_VIRTUAL_SCROLL_VIEWPORT,
			useExisting: CdkVirtualScrollViewport
		}]), ɵɵInheritDefinitionFeature],
		ngContentSelectors: _c1$4,
		decls: 4,
		vars: 4,
		consts: [
			["contentWrapper", ""],
			[1, "cdk-virtual-scroll-content-wrapper"],
			[1, "cdk-virtual-scroll-spacer"]
		],
		template: function CdkVirtualScrollViewport_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵdomElementStart(0, "div", 1, 0);
				ɵɵprojection(2);
				ɵɵdomElementEnd();
				ɵɵdomElement(3, "div", 2);
			}
			if (rf & 2) {
				ɵɵadvance(3);
				ɵɵstyleProp("width", ctx._totalContentWidth())("height", ctx._totalContentHeight());
			}
		},
		styles: ["cdk-virtual-scroll-viewport {\n  display: block;\n  position: relative;\n  transform: translateZ(0);\n}\n\n.cdk-virtual-scrollable {\n  overflow: auto;\n  will-change: scroll-position;\n  contain: strict;\n  overflow-anchor: none;\n  scroll-behavior: auto;\n}\n\n.cdk-virtual-scroll-content-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  contain: content;\n}\n[dir=rtl] .cdk-virtual-scroll-content-wrapper {\n  right: 0;\n  left: auto;\n}\n\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {\n  min-height: 100%;\n}\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {\n  min-width: 100%;\n}\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top-width: 0;\n  border-bottom-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-spacer {\n  height: 1px;\n  transform-origin: 0 0;\n  flex: 0 0 auto;\n}\n[dir=rtl] .cdk-virtual-scroll-spacer {\n  transform-origin: 100% 0;\n}\n"],
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
		type: Component,
		args: [{
			selector: "cdk-virtual-scroll-viewport",
			host: {
				"class": "cdk-virtual-scroll-viewport",
				"[class.cdk-virtual-scroll-orientation-horizontal]": "orientation === \"horizontal\"",
				"[class.cdk-virtual-scroll-orientation-vertical]": "orientation !== \"horizontal\""
			},
			encapsulation: ViewEncapsulation.None,
			providers: [{
				provide: CdkScrollable,
				useFactory: () => inject(VIRTUAL_SCROLLABLE, { optional: true }) || inject(CdkVirtualScrollViewport)
			}, {
				provide: CDK_VIRTUAL_SCROLL_VIEWPORT,
				useExisting: CdkVirtualScrollViewport
			}],
			template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth()\" [style.height]=\"_totalContentHeight()\"></div>\n",
			styles: ["cdk-virtual-scroll-viewport {\n  display: block;\n  position: relative;\n  transform: translateZ(0);\n}\n\n.cdk-virtual-scrollable {\n  overflow: auto;\n  will-change: scroll-position;\n  contain: strict;\n  overflow-anchor: none;\n  scroll-behavior: auto;\n}\n\n.cdk-virtual-scroll-content-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  contain: content;\n}\n[dir=rtl] .cdk-virtual-scroll-content-wrapper {\n  right: 0;\n  left: auto;\n}\n\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {\n  min-height: 100%;\n}\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {\n  min-width: 100%;\n}\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top-width: 0;\n  border-bottom-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-spacer {\n  height: 1px;\n  transform-origin: 0 0;\n  flex: 0 0 auto;\n}\n[dir=rtl] .cdk-virtual-scroll-spacer {\n  transform-origin: 100% 0;\n}\n"]
		}]
	}], () => [], {
		orientation: [{ type: Input }],
		appendOnly: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		scrolledIndexChange: [{ type: Output }],
		_contentWrapper: [{
			type: ViewChild,
			args: ["contentWrapper", { static: true }]
		}]
	});
})();
function getOffset(orientation, direction, node) {
	const el = node;
	if (!el.getBoundingClientRect) return 0;
	const rect = el.getBoundingClientRect();
	if (orientation === "horizontal") return direction === "start" ? rect.left : rect.right;
	return direction === "start" ? rect.top : rect.bottom;
}
var CdkVirtualForOf = class CdkVirtualForOf {
	_viewContainerRef = inject(ViewContainerRef);
	_template = inject(TemplateRef);
	_differs = inject(IterableDiffers);
	_viewRepeater = new _RecycleViewRepeaterStrategy();
	_viewport = inject(CDK_VIRTUAL_SCROLL_VIEWPORT, { skipSelf: true });
	viewChange = new Subject();
	_dataSourceChanges = new Subject();
	get cdkVirtualForOf() {
		return this._cdkVirtualForOf;
	}
	set cdkVirtualForOf(value) {
		this._cdkVirtualForOf = value;
		if (isDataSource(value)) this._dataSourceChanges.next(value);
		else this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
	}
	_cdkVirtualForOf;
	get cdkVirtualForTrackBy() {
		return this._cdkVirtualForTrackBy;
	}
	set cdkVirtualForTrackBy(fn) {
		this._needsUpdate = true;
		this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
	}
	_cdkVirtualForTrackBy;
	set cdkVirtualForTemplate(value) {
		if (value) {
			this._needsUpdate = true;
			this._template = value;
		}
	}
	get cdkVirtualForTemplateCacheSize() {
		return this._viewRepeater.viewCacheSize;
	}
	set cdkVirtualForTemplateCacheSize(size) {
		this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
	}
	dataStream = this._dataSourceChanges.pipe(startWith(null), pairwise(), switchMap(([prev, cur]) => this._changeDataSource(prev, cur)), shareReplay(1));
	_differ = null;
	_data = [];
	_renderedItems = [];
	_renderedRange = {
		start: 0,
		end: 0
	};
	_needsUpdate = false;
	_destroyed = new Subject();
	constructor() {
		const ngZone = inject(NgZone);
		this.dataStream.subscribe((data) => {
			this._data = data;
			this._onRenderedDataChange();
		});
		this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
			this._renderedRange = range;
			if (this.viewChange.observers.length) ngZone.run(() => this.viewChange.next(this._renderedRange));
			this._onRenderedDataChange();
		});
		this._viewport.attach(this);
	}
	measureRangeSize(range, orientation) {
		if (range.start >= range.end) return 0;
		if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) throw Error(`Error: attempted to measure an item that isn't rendered.`);
		const renderedStartIndex = range.start - this._renderedRange.start;
		const rangeLen = range.end - range.start;
		let firstNode;
		let lastNode;
		for (let i = 0; i < rangeLen; i++) {
			const view = this._viewContainerRef.get(i + renderedStartIndex);
			if (view && view.rootNodes.length) {
				firstNode = lastNode = view.rootNodes[0];
				break;
			}
		}
		for (let i = rangeLen - 1; i > -1; i--) {
			const view = this._viewContainerRef.get(i + renderedStartIndex);
			if (view && view.rootNodes.length) {
				lastNode = view.rootNodes[view.rootNodes.length - 1];
				break;
			}
		}
		return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
	}
	ngDoCheck() {
		if (this._differ && this._needsUpdate) {
			const changes = this._differ.diff(this._renderedItems);
			if (!changes) this._updateContext();
			else this._applyChanges(changes);
			this._needsUpdate = false;
		}
	}
	ngOnDestroy() {
		this._viewport.detach();
		this._dataSourceChanges.next(void 0);
		this._dataSourceChanges.complete();
		this.viewChange.complete();
		this._destroyed.next();
		this._destroyed.complete();
		this._viewRepeater.detach();
	}
	_onRenderedDataChange() {
		if (!this._renderedRange) return;
		this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
		if (!this._differ) this._differ = this._differs.find(this._renderedItems).create((index, item) => {
			return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
		});
		this._needsUpdate = true;
	}
	_changeDataSource(oldDs, newDs) {
		if (oldDs) oldDs.disconnect(this);
		this._needsUpdate = true;
		return newDs ? newDs.connect(this) : of();
	}
	_updateContext() {
		const count = this._data.length;
		let i = this._viewContainerRef.length;
		while (i--) {
			const view = this._viewContainerRef.get(i);
			view.context.index = this._renderedRange.start + i;
			view.context.count = count;
			this._updateComputedContextProperties(view.context);
			view.detectChanges();
		}
	}
	_applyChanges(changes) {
		this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
		changes.forEachIdentityChange((record) => {
			const view = this._viewContainerRef.get(record.currentIndex);
			view.context.$implicit = record.item;
		});
		const count = this._data.length;
		let i = this._viewContainerRef.length;
		while (i--) {
			const view = this._viewContainerRef.get(i);
			view.context.index = this._renderedRange.start + i;
			view.context.count = count;
			this._updateComputedContextProperties(view.context);
		}
	}
	_updateComputedContextProperties(context) {
		context.first = context.index === 0;
		context.last = context.index === context.count - 1;
		context.even = context.index % 2 === 0;
		context.odd = !context.even;
	}
	_getEmbeddedViewArgs(record, index) {
		return {
			templateRef: this._template,
			context: {
				$implicit: record.item,
				cdkVirtualForOf: this._cdkVirtualForOf,
				index: -1,
				count: -1,
				first: false,
				last: false,
				odd: false,
				even: false
			},
			index
		};
	}
	static ngTemplateContextGuard(directive, context) {
		return true;
	}
	static ɵfac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || CdkVirtualForOf)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: CdkVirtualForOf,
		selectors: [[
			"",
			"cdkVirtualFor",
			"",
			"cdkVirtualForOf",
			""
		]],
		inputs: {
			cdkVirtualForOf: "cdkVirtualForOf",
			cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
			cdkVirtualForTemplate: "cdkVirtualForTemplate",
			cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
		}
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
		type: Directive,
		args: [{ selector: "[cdkVirtualFor][cdkVirtualForOf]" }]
	}], () => [], {
		cdkVirtualForOf: [{ type: Input }],
		cdkVirtualForTrackBy: [{ type: Input }],
		cdkVirtualForTemplate: [{ type: Input }],
		cdkVirtualForTemplateCacheSize: [{ type: Input }]
	});
})();
var CdkVirtualScrollableElement = class CdkVirtualScrollableElement extends CdkVirtualScrollable {
	measureBoundingClientRectWithScrollOffset(from) {
		return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
	}
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵCdkVirtualScrollableElement_BaseFactory;
		return function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
			return (ɵCdkVirtualScrollableElement_BaseFactory || (ɵCdkVirtualScrollableElement_BaseFactory = ɵɵgetInheritedFactory(CdkVirtualScrollableElement)))(__ngFactoryType__ || CdkVirtualScrollableElement);
		};
	})();
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: CdkVirtualScrollableElement,
		selectors: [[
			"",
			"cdkVirtualScrollingElement",
			""
		]],
		hostAttrs: [1, "cdk-virtual-scrollable"],
		features: [ɵɵProvidersFeature([{
			provide: VIRTUAL_SCROLLABLE,
			useExisting: CdkVirtualScrollableElement
		}]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
		type: Directive,
		args: [{
			selector: "[cdkVirtualScrollingElement]",
			providers: [{
				provide: VIRTUAL_SCROLLABLE,
				useExisting: CdkVirtualScrollableElement
			}],
			host: { "class": "cdk-virtual-scrollable" }
		}]
	}], null, null);
})();
var CdkVirtualScrollableWindow = class CdkVirtualScrollableWindow extends CdkVirtualScrollable {
	constructor() {
		super();
		const document = inject(DOCUMENT);
		this.elementRef = new ElementRef(document.documentElement);
		this._scrollElement = document;
	}
	measureBoundingClientRectWithScrollOffset(from) {
		return this.getElementRef().nativeElement.getBoundingClientRect()[from];
	}
	static ɵfac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || CdkVirtualScrollableWindow)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: CdkVirtualScrollableWindow,
		selectors: [[
			"cdk-virtual-scroll-viewport",
			"scrollWindow",
			""
		]],
		features: [ɵɵProvidersFeature([{
			provide: VIRTUAL_SCROLLABLE,
			useExisting: CdkVirtualScrollableWindow
		}]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
		type: Directive,
		args: [{
			selector: "cdk-virtual-scroll-viewport[scrollWindow]",
			providers: [{
				provide: VIRTUAL_SCROLLABLE,
				useExisting: CdkVirtualScrollableWindow
			}]
		}]
	}], () => [], null);
})();
var CdkScrollableModule = class CdkScrollableModule {
	static ɵfac = function CdkScrollableModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || CdkScrollableModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: CdkScrollableModule,
		imports: [CdkScrollable],
		exports: [CdkScrollable]
	});
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
		type: NgModule,
		args: [{
			exports: [CdkScrollable],
			imports: [CdkScrollable]
		}]
	}], null, null);
})();
var ScrollingModule = class ScrollingModule {
	static ɵfac = function ScrollingModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ScrollingModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: ScrollingModule,
		imports: [
			BidiModule,
			CdkScrollableModule,
			CdkVirtualScrollViewport,
			CdkFixedSizeVirtualScroll,
			CdkVirtualForOf,
			CdkVirtualScrollableWindow,
			CdkVirtualScrollableElement
		],
		exports: [
			BidiModule,
			CdkScrollableModule,
			CdkFixedSizeVirtualScroll,
			CdkVirtualForOf,
			CdkVirtualScrollViewport,
			CdkVirtualScrollableWindow,
			CdkVirtualScrollableElement
		]
	});
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({ imports: [
		BidiModule,
		CdkScrollableModule,
		BidiModule,
		CdkScrollableModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
		type: NgModule,
		args: [{
			imports: [
				BidiModule,
				CdkScrollableModule,
				CdkVirtualScrollViewport,
				CdkFixedSizeVirtualScroll,
				CdkVirtualForOf,
				CdkVirtualScrollableWindow,
				CdkVirtualScrollableElement
			],
			exports: [
				BidiModule,
				CdkScrollableModule,
				CdkFixedSizeVirtualScroll,
				CdkVirtualForOf,
				CdkVirtualScrollViewport,
				CdkVirtualScrollableWindow,
				CdkVirtualScrollableElement
			]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-animated.mjs
var TUI_ENTER = "tui-enter";
var TUI_LEAVE = "tui-leave";
var TUI_LEAVE_KEY = `${TUI_LEAVE}_${TUI_VERSION.split(".")[0]}`;
var TuiAnimated = class TuiAnimated {
	constructor() {
		this.renderer = inject(ViewContainerRef)._hostLView?.[11];
		this.el = tuiInjectElement();
		afterNextRender(() => this.remove());
		if (this.renderer && isPlatformBrowser(inject(PLATFORM_ID))) wrap(this.renderer.delegate || this.renderer);
	}
	remove() {
		if (this.el.isConnected && !this.el.getAnimations?.().length) this.el.classList.remove(TUI_ENTER);
	}
	static {
		this.ɵfac = function TuiAnimated_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiAnimated)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiAnimated,
			selectors: [[
				"",
				"tuiAnimated",
				""
			]],
			hostAttrs: [
				1,
				"tui-enter",
				"tui-animated"
			],
			hostBindings: function TuiAnimated_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("animationcancel.self", function TuiAnimated_animationcancel_self_HostBindingHandler() {
					return ctx.remove();
				})("animationend.self", function TuiAnimated_animationend_self_HostBindingHandler() {
					return ctx.remove();
				});
			}
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAnimated, [{
		type: Directive,
		args: [{
			selector: "[tuiAnimated]",
			host: {
				class: `tui-enter tui-animated`,
				"(animationcancel.self)": "remove()",
				"(animationend.self)": "remove()"
			}
		}]
	}], () => [], null);
})();
function wrap(renderer) {
	if (renderer.data[TUI_LEAVE_KEY]) return;
	const { removeChild } = renderer;
	renderer.data[TUI_LEAVE_KEY] = true;
	renderer.removeChild = (parent, el, host) => {
		if (!tuiIsElement(el) || !el.classList.contains("tui-animated")) {
			removeChild.call(renderer, parent, el, host);
			return;
		}
		el.classList.remove(TUI_ENTER);
		const { length } = el.getAnimations?.() || [];
		el.classList.add(TUI_LEAVE);
		const animations = el.getAnimations?.() ?? [];
		const last = animations[animations.length - 1];
		const finish = () => {
			if (!parent || parent.contains(el)) removeChild.call(renderer, parent, el, host);
		};
		if (animations.length > length && last) {
			last.onfinish = finish;
			last.oncancel = finish;
		} else finish();
	};
}
//#endregion
//#region node_modules/@ng-web-apis/platform/fesm2022/ng-web-apis-platform.mjs
/**
* Unified mobile detection regex. Tables are NOT mobile intentionally
* https://stackoverflow.com/a/11381730/2706426 http://detectmobilebrowsers.com/
*/
var WA_MOBILE_REGEXP = /(?:android|bb\d|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|^(?:1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[23]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8c]))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-)/i;
var WA_SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;
var WA_IOS_REG_EXP = /ipad|iphone|ipod/i;
function isIos$1({ userAgent, maxTouchPoints }) {
	return WA_IOS_REG_EXP.test(userAgent) || WA_SAFARI_REG_EXP.test(userAgent) && maxTouchPoints > 1;
}
var WA_IS_IOS = new InjectionToken(ngDevMode ? "[WA_IS_IOS]" : "", { factory: () => isIos$1(inject(WA_NAVIGATOR)) });
var WA_IS_MOBILE = new InjectionToken(ngDevMode ? "[WA_IS_MOBILE]" : "", { factory: () => WA_MOBILE_REGEXP.test(inject(WA_USER_AGENT)) });
var WA_IS_ANDROID = new InjectionToken(ngDevMode ? "[WA_IS_ANDROID]" : "", { factory: () => inject(WA_IS_MOBILE) && !inject(WA_IS_IOS) });
new InjectionToken(ngDevMode ? "[WA_IS_E2E]" : "", { factory: () => !!inject(WA_WINDOW).Cypress || inject(WA_NAVIGATOR).webdriver });
var WA_IS_TOUCH = new InjectionToken(ngDevMode ? "[WA_IS_TOUCH]" : "", { factory: () => {
	const media = inject(WA_WINDOW).matchMedia("(pointer: coarse)");
	return toSignal(fromEvent(media, "change").pipe(map(() => media.matches)), { initialValue: media.matches });
} });
var WA_IS_WEBKIT = new InjectionToken(ngDevMode ? "[WA_IS_WEBKIT]" : "", { factory: () => !!inject(WA_WINDOW)?.webkitConvertPointFromNodeToPage });
new InjectionToken(ngDevMode ? "[WA_REDUCED_MOTION]" : "", { factory: () => {
	const media = inject(WA_WINDOW).matchMedia("(prefers-reduced-motion: reduce)");
	return toSignal(fromEvent(media, "change").pipe(map(() => media.matches)), { initialValue: media.matches });
} });
function isSafari({ ownerDocument: doc }) {
	const win = doc?.defaultView;
	const isMacOsSafari = win.safari !== void 0 && win.safari?.pushNotification?.toString() === "[object SafariRemoteNotification]";
	const isIosSafari = !!win.navigator?.vendor?.includes("Apple") && !win.navigator?.userAgent?.includes("CriOS") && !win.navigator?.userAgent?.includes("FxiOS");
	return isMacOsSafari || isIosSafari;
}
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-scrollbar.mjs
function TuiScrollControls_Conditional_0_Template(rf, ctx) {}
function TuiScrollControls_Conditional_1_Conditional_0_Conditional_0_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "div", 2);
		ɵɵlistener("mousedown.capture.prevent", function TuiScrollControls_Conditional_1_Conditional_0_Conditional_0_Template_div_mousedown_capture_prevent_0_listener() {
			return 0;
		});
		ɵɵelement(1, "div", 3);
		ɵɵelementEnd();
	}
	if (rf & 2) ɵɵclassProp("t-bar_has-horizontal", ɵɵnextContext()[1]);
}
function TuiScrollControls_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "div", 4);
		ɵɵlistener("mousedown.capture.prevent", function TuiScrollControls_Conditional_1_Conditional_0_Conditional_1_Template_div_mousedown_capture_prevent_0_listener() {
			return 0;
		});
		ɵɵelement(1, "div", 5);
		ɵɵelementEnd();
	}
	if (rf & 2) ɵɵclassProp("t-bar_has-vertical", ɵɵnextContext()[0]);
}
function TuiScrollControls_Conditional_1_Conditional_0_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵconditionalCreate(0, TuiScrollControls_Conditional_1_Conditional_0_Conditional_0_Template, 2, 2, "div", 0);
		ɵɵconditionalCreate(1, TuiScrollControls_Conditional_1_Conditional_0_Conditional_1_Template, 2, 2, "div", 1);
	}
	if (rf & 2) {
		const bars_r1 = ctx;
		ɵɵconditional(bars_r1[0] ? 0 : -1);
		ɵɵadvance();
		ɵɵconditional(bars_r1[1] ? 1 : -1);
	}
}
function TuiScrollControls_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵconditionalCreate(0, TuiScrollControls_Conditional_1_Conditional_0_Template, 2, 2);
		ɵɵpipe(1, "async");
	}
	if (rf & 2) {
		let tmp_1_0;
		ɵɵconditional((tmp_1_0 = ɵɵpipeBind1(1, 1, ɵɵnextContext().refresh$)) ? 0 : -1, tmp_1_0);
	}
}
var _c0$13 = ["*"];
function TuiScrollbar_Conditional_0_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "tui-scroll-controls", 2);
	if (rf & 2) ɵɵclassProp("t-hover-mode", ɵɵnextContext().options.mode === "hover");
}
var SCROLL_REF_SELECTOR = "[tuiScrollRef]";
var TUI_SCROLL_REF = new InjectionToken(ngDevMode ? "TUI_SCROLL_REF" : "", { factory: () => new ElementRef(inject(DOCUMENT).documentElement) });
var TuiScrollRef = class TuiScrollRef {
	static {
		this.ɵfac = function TuiScrollRef_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiScrollRef)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiScrollRef,
			selectors: [[
				"",
				"tuiScrollRef",
				""
			]],
			features: [ɵɵProvidersFeature([tuiProvide(TUI_SCROLL_REF, ElementRef)])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollRef, [{
		type: Directive,
		args: [{
			selector: "[tuiScrollRef]",
			providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)]
		}]
	}], null, null);
})();
var TuiScrollControlsService = class TuiScrollControlsService extends Observable {
	constructor() {
		super((subscriber) => this.stream$.subscribe(subscriber));
		this.scrollRef = inject(TUI_SCROLL_REF);
		this.stream$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(300, tuiZonefreeScheduler()), map(() => this.scrollbars), startWith([false, false]), distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]), tuiZoneOptimized());
	}
	get scrollbars() {
		const { clientHeight, scrollHeight, clientWidth, scrollWidth } = this.scrollRef.nativeElement;
		return [Math.ceil(clientHeight / scrollHeight * 100) < 100, Math.ceil(clientWidth / scrollWidth * 100) < 100];
	}
	static {
		this.ɵfac = function TuiScrollControlsService_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiScrollControlsService)();
		};
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiScrollControlsService,
			factory: TuiScrollControlsService.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControlsService, [{ type: Injectable }], () => [], null);
})();
var TuiScrollbarService = class TuiScrollbarService extends Observable {
	constructor() {
		super((subscriber) => this.scroll$.subscribe(subscriber));
		this.el = tuiInjectElement();
		this.element = inject(TUI_SCROLL_REF).nativeElement;
		this.scroll$ = merge(tuiTypedFromEvent(this.el.parentElement, "mousedown").pipe(filter(({ target }) => target !== this.el), map((event) => this.getScrolled(event, .5, .5))), tuiTypedFromEvent(this.el, "mousedown").pipe(tuiZonefree(), switchMap((event) => {
			const { ownerDocument } = this.el;
			const rect = this.el.getBoundingClientRect();
			const vertical = getOffsetVertical(event, rect);
			const horizontal = getOffsetHorizontal(event, rect);
			return tuiTypedFromEvent(ownerDocument, "mousemove").pipe(map((event) => this.getScrolled(event, vertical, horizontal)), takeUntil(tuiTypedFromEvent(ownerDocument, "mouseup")));
		})));
	}
	getScrolled({ clientY, clientX }, offsetY, offsetX) {
		const { offsetHeight, offsetWidth } = this.el;
		const { top, left, right, width, height } = this.el.parentElement.getBoundingClientRect();
		const rtl = this.el.matches("[dir=\"rtl\"] :scope");
		const inline = rtl ? right : left;
		const multiplier = rtl ? -1 : 1;
		const maxTop = this.element.scrollHeight - height;
		const maxLeft = this.element.scrollWidth - width;
		const scrolledTop = (clientY - top - offsetHeight * offsetY) / (height - offsetHeight);
		const scrolledLeft = (clientX - inline - offsetWidth * offsetX * multiplier) / (width - offsetWidth);
		return [maxTop * scrolledTop, maxLeft * scrolledLeft];
	}
	static {
		this.ɵfac = function TuiScrollbarService_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiScrollbarService)();
		};
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiScrollbarService,
			factory: TuiScrollbarService.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarService, [{ type: Injectable }], () => [], null);
})();
function getOffsetVertical({ clientY }, { top, height }) {
	return (clientY - top) / height;
}
function getOffsetHorizontal({ clientX }, { left, width }) {
	return (clientX - left) / width;
}
var MIN_WIDTH = 24;
var TuiScrollbarPosition = class TuiScrollbarPosition extends Observable {
	constructor() {
		super((subscriber) => this.stream$.subscribe(subscriber));
		this.scrollRef = inject(TUI_SCROLL_REF);
		this.stream$ = merge(inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler())), tuiScrollFrom(this.el)).pipe(tuiZonefree(), map(() => {
			const dimension = {
				scrollTop: this.el.scrollTop,
				scrollHeight: this.el.scrollHeight,
				clientHeight: this.el.clientHeight,
				scrollLeft: this.el.scrollLeft,
				scrollWidth: this.el.scrollWidth,
				clientWidth: this.el.clientWidth
			};
			const thumb = `${this.getThumb(dimension) * 100}%`;
			const view = `${this.getView(dimension) * 100}%`;
			return this.tuiScrollbar() === "vertical" ? {
				top: thumb,
				height: view
			} : {
				insetInlineStart: thumb,
				width: view
			};
		}));
		this.tuiScrollbar = input("vertical");
	}
	get el() {
		return this.scrollRef.nativeElement;
	}
	getThumb(dimension) {
		const compensation = this.getCompensation(dimension) || this.getView(dimension);
		return Math.abs(this.getScrolled(dimension) * (1 - compensation));
	}
	getView(dimension) {
		return this.tuiScrollbar() === "vertical" ? Math.ceil(dimension.clientHeight / dimension.scrollHeight * 100) / 100 : Math.ceil(dimension.clientWidth / dimension.scrollWidth * 100) / 100;
	}
	getScrolled(dimension) {
		return this.tuiScrollbar() === "vertical" ? dimension.scrollTop / (dimension.scrollHeight - dimension.clientHeight) : dimension.scrollLeft / (dimension.scrollWidth - dimension.clientWidth);
	}
	getCompensation(dimension) {
		if (dimension.clientHeight * dimension.clientHeight / dimension.scrollHeight > MIN_WIDTH && this.tuiScrollbar() === "vertical" || dimension.clientWidth * dimension.clientWidth / dimension.scrollWidth > MIN_WIDTH && this.tuiScrollbar() === "horizontal") return 0;
		return this.tuiScrollbar() === "vertical" ? MIN_WIDTH / dimension.clientHeight : MIN_WIDTH / dimension.clientWidth;
	}
	static {
		this.ɵfac = function TuiScrollbarPosition_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiScrollbarPosition)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiScrollbarPosition,
			inputs: { tuiScrollbar: [1, "tuiScrollbar"] },
			features: [ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarPosition, [{ type: Directive }], () => [], null);
})();
var TuiScrollbarDirective = class TuiScrollbarDirective {
	constructor() {
		this.scrollRef = inject(TUI_SCROLL_REF);
		this.style = tuiInjectElement().style;
		this.scrollSub = inject(TuiScrollbarService).pipe(takeUntilDestroyed()).subscribe(([top, left]) => {
			this.scrollRef.nativeElement.style.scrollBehavior = "auto";
			if (this.tuiScrollbar() === "horizontal") this.scrollRef.nativeElement.scrollLeft = left;
			else this.scrollRef.nativeElement.scrollTop = top;
			this.scrollRef.nativeElement.style.scrollBehavior = "";
		});
		this.styleSub = inject(TuiScrollbarPosition).pipe(takeUntilDestroyed()).subscribe((position) => Object.assign(this.style, position));
		this.tuiScrollbar = input("vertical");
	}
	static {
		this.ɵfac = function TuiScrollbarDirective_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiScrollbarDirective)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiScrollbarDirective,
			selectors: [[
				"",
				"tuiScrollbar",
				""
			]],
			inputs: { tuiScrollbar: [1, "tuiScrollbar"] },
			features: [ɵɵProvidersFeature([TuiScrollbarService]), ɵɵHostDirectivesFeature([{
				directive: TuiScrollbarPosition,
				inputs: ["tuiScrollbar", "tuiScrollbar"]
			}])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarDirective, [{
		type: Directive,
		args: [{
			selector: "[tuiScrollbar]",
			providers: [TuiScrollbarService],
			hostDirectives: [{
				directive: TuiScrollbarPosition,
				inputs: ["tuiScrollbar"]
			}]
		}]
	}], null, null);
})();
var TUI_DEFAULT_SCROLLBAR_OPTIONS = { mode: "always" };
var [TUI_SCROLLBAR_OPTIONS, tuiScrollbarOptionsProvider] = tuiCreateOptions(TUI_DEFAULT_SCROLLBAR_OPTIONS);
var TuiScrollControls = class TuiScrollControls {
	constructor() {
		this.scrollable = inject(CdkScrollable, {
			optional: true,
			host: true
		});
		this.el = tuiInjectElement();
		this.nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === "native";
		this.refresh$ = inject(TuiScrollControlsService);
	}
	ngOnInit() {
		this.scrollable?.getElementRef().nativeElement.prepend(this.el);
	}
	static {
		this.ɵfac = function TuiScrollControls_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiScrollControls)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiScrollControls,
			selectors: [["tui-scroll-controls"]],
			features: [ɵɵProvidersFeature([TuiScrollControlsService])],
			decls: 2,
			vars: 1,
			consts: [
				[
					"tuiAnimated",
					"",
					1,
					"t-bar",
					"t-bar_vertical",
					3,
					"t-bar_has-horizontal"
				],
				[
					"tuiAnimated",
					"",
					1,
					"t-bar",
					"t-bar_horizontal",
					3,
					"t-bar_has-vertical"
				],
				[
					"tuiAnimated",
					"",
					1,
					"t-bar",
					"t-bar_vertical",
					3,
					"mousedown.capture.prevent"
				],
				[
					"tuiScrollbar",
					"vertical",
					1,
					"t-thumb"
				],
				[
					"tuiAnimated",
					"",
					1,
					"t-bar",
					"t-bar_horizontal",
					3,
					"mousedown.capture.prevent"
				],
				[
					"tuiScrollbar",
					"horizontal",
					1,
					"t-thumb"
				]
			],
			template: function TuiScrollControls_Template(rf, ctx) {
				if (rf & 1) ɵɵconditionalCreate(0, TuiScrollControls_Conditional_0_Template, 0, 0)(1, TuiScrollControls_Conditional_1_Template, 2, 3);
				if (rf & 2) ɵɵconditional(ctx.nativeScrollbar ? 0 : 1);
			},
			dependencies: [
				AsyncPipe,
				TuiAnimated,
				TuiScrollbarDirective
			],
			styles: ["[_nghost-%COMP%]{position:sticky;z-index:1;display:block;inset-block-start:0;inset-inline-start:0;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none;overflow:hidden;color:var(--%NS%tui-text-primary)}  [tuiScrollable]{scrollbar-width:none;-ms-overflow-style:none}  [tuiScrollable]::-webkit-scrollbar,   [tuiScrollable]::-webkit-scrollbar-thumb{display:none}.t-bar[_ngcontent-%COMP%]{position:absolute;inset-inline-end:0;pointer-events:auto}.t-bar.tui-enter[_ngcontent-%COMP%], .t-bar.tui-leave[_ngcontent-%COMP%]{animation-name:tuiFade}.t-bar_vertical[_ngcontent-%COMP%]{inset-block:.25rem;inline-size:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]{inset-block-end:0;inset-inline-start:0;block-size:.875rem}.t-bar_has-horizontal[_ngcontent-%COMP%]{inset-block-end:.5rem}.t-bar_has-vertical[_ngcontent-%COMP%]{inset-inline-end:.5rem}.t-thumb[_ngcontent-%COMP%]{transition-property:all;transition-duration:.15s;transition-timing-function:var(--%NS%tui-curve-productive-standard);position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb[_ngcontent-%COMP%]:hover{opacity:.24}.t-thumb[_ngcontent-%COMP%]:active{opacity:.48}.t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{inset-inline-end:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{inline-size:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{inset-block-end:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{block-size:.875rem}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControls, [{
		type: Component,
		args: [{
			selector: "tui-scroll-controls",
			imports: [
				AsyncPipe,
				TuiAnimated,
				TuiScrollbarDirective
			],
			changeDetection: ChangeDetectionStrategy.OnPush,
			providers: [TuiScrollControlsService],
			template: "@if (nativeScrollbar) {\n} @else {\n    @if (refresh$ | async; as bars) {\n        @if (bars[0]) {\n            <div\n                tuiAnimated\n                class=\"t-bar t-bar_vertical\"\n                [class.t-bar_has-horizontal]=\"bars[1]\"\n                (mousedown.capture.prevent)=\"(0)\"\n            >\n                <div\n                    tuiScrollbar=\"vertical\"\n                    class=\"t-thumb\"\n                ></div>\n            </div>\n        }\n        @if (bars[1]) {\n            <div\n                tuiAnimated\n                class=\"t-bar t-bar_horizontal\"\n                [class.t-bar_has-vertical]=\"bars[0]\"\n                (mousedown.capture.prevent)=\"(0)\"\n            >\n                <div\n                    tuiScrollbar=\"horizontal\"\n                    class=\"t-thumb\"\n                ></div>\n            </div>\n        }\n    }\n}\n",
			styles: [":host{position:sticky;z-index:1;display:block;inset-block-start:0;inset-inline-start:0;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none;overflow:hidden;color:var(--tui-text-primary)}::ng-deep [tuiScrollable]{scrollbar-width:none;-ms-overflow-style:none}::ng-deep [tuiScrollable]::-webkit-scrollbar,::ng-deep [tuiScrollable]::-webkit-scrollbar-thumb{display:none}.t-bar{position:absolute;inset-inline-end:0;pointer-events:auto}.t-bar.tui-enter,.t-bar.tui-leave{animation-name:tuiFade}.t-bar_vertical{inset-block:.25rem;inline-size:.875rem}.t-bar_horizontal{inset-block-end:0;inset-inline-start:0;block-size:.875rem}.t-bar_has-horizontal{inset-block-end:.5rem}.t-bar_has-vertical{inset-inline-end:.5rem}.t-thumb{transition-property:all;transition-duration:.15s;transition-timing-function:var(--tui-curve-productive-standard);position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb:hover{opacity:.24}.t-thumb:active{opacity:.48}.t-bar_vertical .t-thumb{inset-inline-end:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical:hover .t-thumb,.t-bar_vertical .t-thumb:active{inline-size:.875rem}.t-bar_horizontal .t-thumb{inset-block-end:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal:hover .t-thumb,.t-bar_horizontal .t-thumb:active{block-size:.875rem}\n"]
		}]
	}], null, null);
})();
/**
* An event for scrolling an element into view within {@link TuiScrollbar}.
*/
var TUI_SCROLL_INTO_VIEW = "tui-scroll-into-view";
/**
* An event to notify {@link TuiScrollbar} that
* it should control a nested element.
*/
var TUI_SCROLLABLE = "tui-scrollable";
var TuiScrollbar = class TuiScrollbar {
	constructor() {
		this.el = tuiInjectElement();
		this.options = inject(TUI_SCROLLBAR_OPTIONS);
		this.isIOS = inject(WA_IS_IOS);
		this.browserScrollRef = new ElementRef(this.el);
	}
	get delegated() {
		return this.scrollRef !== this.el || this.options.mode === "native";
	}
	get scrollRef() {
		return this.browserScrollRef.nativeElement;
	}
	set scrollRef(element) {
		this.browserScrollRef.nativeElement = element;
	}
	scrollIntoView(detail) {
		if (this.delegated) return;
		const { offsetHeight, offsetWidth } = detail;
		const { offsetTop, offsetLeft } = tuiGetElementOffset(this.scrollRef, detail);
		const scrollTop = offsetTop + offsetHeight / 2 - this.scrollRef.clientHeight / 2;
		const scrollLeft = offsetLeft + offsetWidth / 2 - this.scrollRef.clientWidth / 2;
		this.scrollRef.scrollTo?.(scrollLeft, scrollTop);
	}
	static {
		this.ɵfac = function TuiScrollbar_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiScrollbar)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiScrollbar,
			selectors: [["tui-scrollbar"]],
			hostVars: 2,
			hostBindings: function TuiScrollbar_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("tui-scrollable.stop", function TuiScrollbar_tui_scrollable_stop_HostBindingHandler($event) {
					return ctx.scrollRef = $event.detail;
				})("tui-scroll-into-view.stop", function TuiScrollbar_tui_scroll_into_view_stop_HostBindingHandler($event) {
					return ctx.scrollIntoView($event.detail);
				});
				if (rf & 2) ɵɵclassProp("_native-hidden", ctx.options.mode !== "native" && (!ctx.isIOS || ctx.options.mode === "hidden"));
			},
			features: [ɵɵProvidersFeature([{
				provide: TUI_SCROLL_REF,
				useFactory: () => inject(TuiScrollbar).browserScrollRef
			}]), ɵɵHostDirectivesFeature([TuiScrollRef])],
			ngContentSelectors: _c0$13,
			decls: 3,
			vars: 3,
			consts: [
				[
					1,
					"t-bars",
					3,
					"t-hover-mode"
				],
				[1, "t-content"],
				[1, "t-bars"]
			],
			template: function TuiScrollbar_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵconditionalCreate(0, TuiScrollbar_Conditional_0_Template, 1, 2, "tui-scroll-controls", 0);
					ɵɵelementStart(1, "div", 1);
					ɵɵprojection(2);
					ɵɵelementEnd();
				}
				if (rf & 2) {
					ɵɵconditional(!ctx.isIOS && ctx.options.mode !== "native" && ctx.options.mode !== "hidden" ? 0 : -1);
					ɵɵadvance();
					ɵɵclassProp("t-content_delegated", ctx.delegated);
				}
			},
			dependencies: [TuiScrollControls],
			styles: ["[_nghost-%COMP%]{position:relative;display:flex;max-block-size:100%;isolation:isolate;overflow:auto}._native-hidden[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none}._native-hidden[_nghost-%COMP%]::-webkit-scrollbar, ._native-hidden[_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]   .t-hover-mode[_ngcontent-%COMP%]:not(:active){transition-property:opacity;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard);opacity:0}[_nghost-%COMP%]:hover > .t-hover-mode[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard);opacity:1}.t-content[_ngcontent-%COMP%]{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:max-content}.t-content_delegated[_ngcontent-%COMP%]{block-size:100%}.t-bars[_ngcontent-%COMP%]{color:var(--%NS%tui-text-primary)}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbar, [{
		type: Component,
		args: [{
			selector: "tui-scrollbar",
			imports: [TuiScrollControls],
			changeDetection: ChangeDetectionStrategy.OnPush,
			providers: [{
				provide: TUI_SCROLL_REF,
				useFactory: () => inject(TuiScrollbar).browserScrollRef
			}],
			hostDirectives: [TuiScrollRef],
			host: {
				"[class._native-hidden]": "options.mode !== \"native\" && (!isIOS || options.mode === \"hidden\")",
				[`(tui-scrollable.stop)`]: "scrollRef = $event.detail",
				[`(tui-scroll-into-view.stop)`]: "scrollIntoView($event.detail)"
			},
			template: "@if (!isIOS && options.mode !== 'native' && options.mode !== 'hidden') {\n    <tui-scroll-controls\n        class=\"t-bars\"\n        [class.t-hover-mode]=\"options.mode === 'hover'\"\n    />\n}\n<div\n    class=\"t-content\"\n    [class.t-content_delegated]=\"delegated\"\n>\n    <ng-content />\n</div>\n",
			styles: [":host{position:relative;display:flex;max-block-size:100%;isolation:isolate;overflow:auto}:host._native-hidden{scrollbar-width:none;-ms-overflow-style:none}:host._native-hidden::-webkit-scrollbar,:host._native-hidden::-webkit-scrollbar-thumb{display:none}:host .t-hover-mode:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);opacity:0}:host:hover>.t-hover-mode{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);opacity:1}.t-content{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:max-content}.t-content_delegated{block-size:100%}.t-bars{color:var(--tui-text-primary)}\n"]
		}]
	}], null, null);
})();
/**
* Directive scrolls element into view inside tui-scrollbar
*/
var TuiScrollIntoView = class TuiScrollIntoView {
	constructor() {
		this.el = tuiInjectElement();
		this.destroyRef = inject(DestroyRef);
		this.tuiScrollIntoView = input();
		this.dispatchEvent = effect(() => {
			if (!this.tuiScrollIntoView()) return;
			timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
				this.el.dispatchEvent(new CustomEvent(TUI_SCROLL_INTO_VIEW, {
					bubbles: true,
					detail: this.el
				}));
			});
		});
	}
	static {
		this.ɵfac = function TuiScrollIntoView_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiScrollIntoView)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiScrollIntoView,
			selectors: [[
				"",
				"tuiScrollIntoView",
				""
			]],
			inputs: { tuiScrollIntoView: [1, "tuiScrollIntoView"] }
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollIntoView, [{
		type: Directive,
		args: [{ selector: "[tuiScrollIntoView]" }]
	}], null, null);
})();
/**
* @deprecated Use {@link TuiScrollRef} + {@link TuiScrollControls} instead
* TODO: Drop in v6.0
*/
var TuiScrollable = class TuiScrollable {
	constructor() {
		this.el = tuiInjectElement();
	}
	ngOnInit() {
		this.el.dispatchEvent(new CustomEvent(TUI_SCROLLABLE, {
			bubbles: true,
			detail: this.el
		}));
	}
	static {
		this.ɵfac = function TuiScrollable_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiScrollable)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiScrollable,
			selectors: [[
				"",
				"tuiScrollable",
				""
			]],
			features: [ɵɵHostDirectivesFeature([TuiScrollRef])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollable, [{
		type: Directive,
		args: [{
			selector: "[tuiScrollable]",
			hostDirectives: [TuiScrollRef]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-hovered.mjs
function movedOut({ currentTarget, relatedTarget }) {
	return !tuiIsElement(relatedTarget) || !tuiIsElement(currentTarget) || !currentTarget.contains(relatedTarget);
}
var TuiHoveredService = class TuiHoveredService extends Observable {
	constructor() {
		super((subscriber) => this.stream$.subscribe(subscriber));
		this.el = tuiInjectElement();
		this.zone = inject(NgZone);
		this.stream$ = merge(tuiTypedFromEvent(this.el, "mouseenter").pipe(map(TUI_TRUE_HANDLER)), tuiTypedFromEvent(this.el, "mouseleave").pipe(map(TUI_FALSE_HANDLER)), tuiTypedFromEvent(this.el, "mouseout").pipe(filter(movedOut), map(TUI_FALSE_HANDLER))).pipe(distinctUntilChanged(), tuiZoneOptimized(this.zone));
	}
	static {
		this.ɵfac = function TuiHoveredService_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiHoveredService)();
		};
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiHoveredService,
			factory: TuiHoveredService.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHoveredService, [{ type: Injectable }], () => [], null);
})();
var TuiHovered = class TuiHovered {
	constructor() {
		this.tuiHoveredChange = outputFromObservable(inject(TuiHoveredService));
	}
	static {
		this.ɵfac = function TuiHovered_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiHovered)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiHovered,
			selectors: [[
				"",
				"tuiHoveredChange",
				""
			]],
			outputs: { tuiHoveredChange: "tuiHoveredChange" },
			features: [ɵɵProvidersFeature([TuiHoveredService])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHovered, [{
		type: Directive,
		args: [{
			selector: "[tuiHoveredChange]",
			providers: [TuiHoveredService]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-link.mjs
var [TUI_LINK_OPTIONS, tuiLinkOptionsProvider] = tuiCreateOptions({ appearance: "action" });
var Styles$6 = class Styles$6 {
	static {
		this.ɵfac = function Styles_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || Styles$6)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: Styles$6,
			selectors: [["ng-component"]],
			exportAs: ["tui-link-5.17.0"],
			decls: 0,
			vars: 0,
			template: function Styles_Template(rf, ctx) {},
			styles: ["[tuiLink]:where(*[data-tui-version=\"5.17.0\"]){transition-property:color,text-decoration,opacity;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard);padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;border-radius:.125rem;outline-width:1px;outline-offset:-1px;text-underline-offset:.2em;text-decoration:none dashed currentColor 1px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:where(*[data-tui-version=\"5.17.0\"]):before{margin-inline-end:.25rem}[tuiLink]:where(*[data-tui-version=\"5.17.0\"]):after{margin-inline-start:.25rem}[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:where(:not([data-icon-start=font])):before,[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:where(:not([data-icon-end=font])):after{content:\"\\2060\";padding:calc(var(--%NS%tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box;-webkit-mask-size:calc(100% + 10 * var(--%NS%tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--%NS%tui-stroke-width)) 100%;transition:none}[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[data-icon-start=font]:before,[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[data-icon-end=font]:after{display:inline;font-size:var(--%NS%tui-icon-size, 1rem);vertical-align:sub}[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[tuiChevron]:after{display:inline-block;vertical-align:initial}@media(hover:hover)and (pointer:fine){[tuiLink]:where(*[data-tui-version=\"5.17.0\"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){text-decoration-color:currentColor}}[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[data-state=hover]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version=\"5.17.0\"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not([data-state]){text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[data-state=active]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[data-appearance=\"\"]{text-decoration-line:underline;text-decoration-style:solid}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles$6, [{
		type: Component,
		args: [{
			template: "",
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			exportAs: `tui-link-5.17.0`,
			styles: ["[tuiLink]:where(*[data-tui-version=\"5.17.0\"]){transition-property:color,text-decoration,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;border-radius:.125rem;outline-width:1px;outline-offset:-1px;text-underline-offset:.2em;text-decoration:none dashed currentColor 1px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:where(*[data-tui-version=\"5.17.0\"]):before{margin-inline-end:.25rem}[tuiLink]:where(*[data-tui-version=\"5.17.0\"]):after{margin-inline-start:.25rem}[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:where(:not([data-icon-start=font])):before,[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:where(:not([data-icon-end=font])):after{content:\"\\2060\";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box;-webkit-mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;transition:none}[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[data-icon-start=font]:before,[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[data-icon-end=font]:after{display:inline;font-size:var(--tui-icon-size, 1rem);vertical-align:sub}[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[tuiChevron]:after{display:inline-block;vertical-align:initial}@media(hover:hover)and (pointer:fine){[tuiLink]:where(*[data-tui-version=\"5.17.0\"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){text-decoration-color:currentColor}}[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[data-state=hover]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version=\"5.17.0\"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not([data-state]){text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[data-state=active]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version=\"5.17.0\"])[data-appearance=\"\"]{text-decoration-line:underline;text-decoration-style:solid}\n"]
		}]
	}], null, null);
})();
var TuiLink = class TuiLink {
	constructor() {
		this.nothing = tuiWithStyles(Styles$6);
	}
	static {
		this.ɵfac = function TuiLink_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiLink)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiLink,
			selectors: [[
				"a",
				"tuiLink",
				""
			], [
				"button",
				"tuiLink",
				""
			]],
			hostAttrs: ["tuiLink", ""],
			features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLink, [{
		type: Directive,
		args: [{
			selector: "a[tuiLink], button[tuiLink]",
			providers: [tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)],
			hostDirectives: [TuiWithAppearance, TuiWithIcons],
			host: { tuiLink: "" }
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-spin-button.mjs
var _c0$12 = ["*"];
function TuiSpinButton_Conditional_0_Template(rf, ctx) {
	if (rf & 1) {
		const _r1 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "button", 0);
		ɵɵlistener("click", function TuiSpinButton_Conditional_0_Template_button_click_0_listener() {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().onLeftClick());
		});
		ɵɵtext(1);
		ɵɵelementEnd();
		ɵɵelementStart(2, "span", 1);
		ɵɵprojection(3);
		ɵɵelementEnd();
		ɵɵelementStart(4, "button", 2);
		ɵɵlistener("click", function TuiSpinButton_Conditional_0_Template_button_click_4_listener() {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().onRightClick());
		});
		ɵɵtext(5);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const texts_r3 = ctx;
		const ctx_r1 = ɵɵnextContext();
		ɵɵclassProp("t-button_hidden", ctx_r1.disabled() || ctx_r1.leftDisabled());
		ɵɵproperty("iconStart", ctx_r1.icons.decrement)("tabIndex", ctx_r1.focusable() ? 0 : -1);
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", texts_r3[0], " ");
		ɵɵadvance(3);
		ɵɵclassProp("t-button_hidden", ctx_r1.disabled() || ctx_r1.rightDisabled());
		ɵɵproperty("iconStart", ctx_r1.icons.increment)("tabIndex", ctx_r1.focusable() ? 0 : -1);
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", texts_r3[1], " ");
	}
}
var TuiSpinButton = class TuiSpinButton {
	constructor() {
		this.icons = inject(TUI_COMMON_ICONS);
		this.spinTexts = inject(TUI_SPIN_TEXTS);
		this.focusable = input(true);
		this.disabled = input(false);
		this.leftDisabled = input(false);
		this.rightDisabled = input(false);
		this.leftClick = output();
		this.rightClick = output();
	}
	onLeftClick() {
		if (!this.disabled() && !this.leftDisabled()) this.leftClick.emit();
	}
	onRightClick() {
		if (!this.disabled() && !this.rightDisabled()) this.rightClick.emit();
	}
	static {
		this.ɵfac = function TuiSpinButton_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiSpinButton)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiSpinButton,
			selectors: [["tui-spin-button"]],
			hostBindings: function TuiSpinButton_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("keydown.arrowLeft.prevent", function TuiSpinButton_keydown_arrowLeft_prevent_HostBindingHandler() {
					return ctx.onLeftClick();
				})("keydown.arrowRight.prevent", function TuiSpinButton_keydown_arrowRight_prevent_HostBindingHandler() {
					return ctx.onRightClick();
				})("mousedown.zoneless.prevent", function TuiSpinButton_mousedown_zoneless_prevent_HostBindingHandler() {
					return 0;
				});
			},
			inputs: {
				focusable: [1, "focusable"],
				disabled: [1, "disabled"],
				leftDisabled: [1, "leftDisabled"],
				rightDisabled: [1, "rightDisabled"]
			},
			outputs: {
				leftClick: "leftClick",
				rightClick: "rightClick"
			},
			ngContentSelectors: _c0$12,
			decls: 1,
			vars: 1,
			consts: [
				[
					"appearance",
					"flat",
					"automation-id",
					"tui-spin-button__left",
					"size",
					"xs",
					"tuiIconButton",
					"",
					"type",
					"button",
					1,
					"t-button",
					3,
					"click",
					"iconStart",
					"tabIndex"
				],
				[
					1,
					"t-content",
					"t-calendar-title"
				],
				[
					"appearance",
					"flat",
					"automation-id",
					"tui-spin-button__right",
					"size",
					"xs",
					"tuiIconButton",
					"",
					"type",
					"button",
					1,
					"t-button",
					3,
					"click",
					"iconStart",
					"tabIndex"
				]
			],
			template: function TuiSpinButton_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵconditionalCreate(0, TuiSpinButton_Conditional_0_Template, 6, 10);
				}
				if (rf & 2) {
					let tmp_0_0;
					ɵɵconditional((tmp_0_0 = ctx.spinTexts()) ? 0 : -1, tmp_0_0);
				}
			},
			dependencies: [TuiButton],
			styles: ["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;font:var(--%NS%tui-typography-body-l);text-align:center;font-weight:700}.t-button[_ngcontent-%COMP%]{transform:scaleX(var(--%NS%tui-inline))}.t-button_hidden[_ngcontent-%COMP%]{visibility:hidden}.t-content[_ngcontent-%COMP%]{padding:0 .5rem}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSpinButton, [{
		type: Component,
		args: [{
			selector: "tui-spin-button",
			imports: [TuiButton],
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: {
				"(keydown.arrowLeft.prevent)": "onLeftClick()",
				"(keydown.arrowRight.prevent)": "onRightClick()",
				"(mousedown.zoneless.prevent)": "(0)"
			},
			template: "@if (spinTexts(); as texts) {\n    <button\n        appearance=\"flat\"\n        automation-id=\"tui-spin-button__left\"\n        size=\"xs\"\n        tuiIconButton\n        type=\"button\"\n        class=\"t-button\"\n        [class.t-button_hidden]=\"disabled() || leftDisabled()\"\n        [iconStart]=\"icons.decrement\"\n        [tabIndex]=\"focusable() ? 0 : -1\"\n        (click)=\"onLeftClick()\"\n    >\n        {{ texts[0] }}\n    </button>\n    <span class=\"t-content t-calendar-title\">\n        <ng-content />\n    </span>\n    <button\n        appearance=\"flat\"\n        automation-id=\"tui-spin-button__right\"\n        size=\"xs\"\n        tuiIconButton\n        type=\"button\"\n        class=\"t-button\"\n        [class.t-button_hidden]=\"disabled() || rightDisabled()\"\n        [iconStart]=\"icons.increment\"\n        [tabIndex]=\"focusable() ? 0 : -1\"\n        (click)=\"onRightClick()\"\n    >\n        {{ texts[1] }}\n    </button>\n}\n",
			styles: [":host{display:flex;align-items:center;justify-content:space-between;font:var(--tui-typography-body-l);text-align:center;font-weight:700}.t-button{transform:scaleX(var(--tui-inline))}.t-button_hidden{visibility:hidden}.t-content{padding:0 .5rem}\n"]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-calendar.mjs
var _c0$11 = (a0, a1, a2, a3, a4) => [
	a0,
	a1,
	a2,
	a3,
	a4
];
function TuiCalendarSheet_For_2_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "div", 1);
	if (rf & 2) {
		const day_r1 = ctx.$implicit;
		ɵɵproperty("textContent", day_r1);
	}
}
function TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Conditional_2_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "div", 6);
	if (rf & 2) {
		const markers_r5 = ɵɵnextContext();
		ɵɵstyleProp("background", (markers_r5 == null ? null : markers_r5[1]) || "");
	}
}
function TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "div", 5);
		ɵɵelement(1, "div", 6);
		ɵɵconditionalCreate(2, TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Conditional_2_Template, 1, 2, "div", 7);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const markers_r5 = ctx;
		ɵɵadvance();
		ɵɵstyleProp("background", markers_r5 == null ? null : markers_r5[0]);
		ɵɵadvance();
		ɵɵconditional(markers_r5.length > 1 ? 2 : -1);
	}
}
function TuiCalendarSheet_For_9_For_3_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		const _r2 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "div", 4);
		ɵɵpipe(1, "tuiMapper");
		ɵɵlistener("click", function TuiCalendarSheet_For_9_For_3_Conditional_1_Template_div_click_0_listener() {
			ɵɵrestoreView(_r2);
			ɵɵnextContext();
			const item_r3 = ɵɵreadContextLet(0);
			return ɵɵresetView(ɵɵnextContext(2).dayClick.emit(item_r3));
		})("tuiHoveredChange", function TuiCalendarSheet_For_9_For_3_Conditional_1_Template_div_tuiHoveredChange_0_listener($event) {
			ɵɵrestoreView(_r2);
			ɵɵnextContext();
			const item_r3 = ɵɵreadContextLet(0);
			return ɵɵresetView(ɵɵnextContext(2).onItemHovered($event && item_r3));
		});
		ɵɵtext(2);
		ɵɵconditionalCreate(3, TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Template, 3, 3, "div", 5);
		ɵɵpipe(4, "tuiMapper");
		ɵɵelementEnd();
	}
	if (rf & 2) {
		let tmp_30_0;
		ɵɵnextContext();
		const item_r3 = ɵɵreadContextLet(0);
		const ctx_r3 = ɵɵnextContext(2);
		ɵɵclassProp("t-cell_disabled", ctx_r3.disabledItemHandler()(item_r3))("t-cell_today", ctx_r3.itemIsToday(item_r3))("t-cell_unavailable", ctx_r3.itemIsUnavailable(item_r3));
		ɵɵattribute("data-range", ctx_r3.getItemRange(item_r3))("data-type", ɵɵpipeBind2(1, 10, item_r3, ctx_r3.dayType));
		ɵɵadvance(2);
		ɵɵtextInterpolate1(" ", item_r3.day, " ");
		ɵɵadvance();
		ɵɵconditional((tmp_30_0 = ɵɵpipeBindV(4, 13, ɵɵpureFunction5(19, _c0$11, item_r3, ctx_r3.toMarkers, ctx_r3.itemIsToday(item_r3), ctx_r3.getItemRange(item_r3), ctx_r3.markerHandler()))) ? 3 : -1, tmp_30_0);
	}
}
function TuiCalendarSheet_For_9_For_3_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵdeclareLet(0);
		ɵɵconditionalCreate(1, TuiCalendarSheet_For_9_For_3_Conditional_1_Template, 5, 25, "div", 3);
	}
	if (rf & 2) {
		const $index_r6 = ctx.$index;
		ɵɵnextContext();
		const rowIndex_r7 = ɵɵreadContextLet(0);
		const ctx_r3 = ɵɵnextContext();
		const sheet_r8 = ɵɵreadContextLet(5);
		const item_r9 = ɵɵstoreLet(sheet_r8[rowIndex_r7] == null ? null : sheet_r8[rowIndex_r7][$index_r6]);
		ɵɵadvance();
		ɵɵconditional(item_r9 && (!ctx_r3.itemIsUnavailable(item_r9) || ctx_r3.showAdjacent()) ? 1 : -1);
	}
}
function TuiCalendarSheet_For_9_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵdeclareLet(0);
		ɵɵelementStart(1, "div", 2);
		ɵɵrepeaterCreate(2, TuiCalendarSheet_For_9_For_3_Template, 2, 2, null, null, ɵɵrepeaterTrackByIndex);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const $index_r10 = ctx.$index;
		ɵɵnextContext();
		const sheet_r8 = ɵɵreadContextLet(5);
		const rowIndex_r11 = ɵɵstoreLet($index_r10);
		ɵɵadvance(2);
		ɵɵrepeater("-".repeat((sheet_r8[rowIndex_r11] == null ? null : sheet_r8[rowIndex_r11].length) ?? 0));
	}
}
function TuiCalendarSpin_Conditional_2_Template(rf, ctx) {
	if (rf & 1) ɵɵtext(0);
	if (rf & 2) ɵɵtextInterpolate1(" ", ɵɵnextContext().value().formattedYear, " ");
}
function TuiCalendarSpin_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		const _r2 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "button", 2);
		ɵɵlistener("click", function TuiCalendarSpin_Conditional_3_Template_button_click_0_listener() {
			ɵɵrestoreView(_r2);
			const ctx_r0 = ɵɵnextContext();
			return ɵɵresetView(ctx_r0.yearClick.emit(ctx_r0.value()));
		});
		ɵɵtext(1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", ctx_r0.value().formattedYear, " ");
	}
}
function TuiCalendarYear_For_1_For_3_Template(rf, ctx) {
	if (rf & 1) {
		const _r1 = ɵɵgetCurrentView();
		ɵɵdeclareLet(0);
		ɵɵelementStart(1, "div", 2);
		ɵɵlistener("click", function TuiCalendarYear_For_1_For_3_Template_div_click_1_listener() {
			ɵɵrestoreView(_r1);
			const item_r2 = ɵɵreadContextLet(0);
			return ɵɵresetView(ɵɵnextContext(2).yearClick.emit(item_r2));
		})("tuiHoveredChange", function TuiCalendarYear_For_1_For_3_Template_div_tuiHoveredChange_1_listener($event) {
			ɵɵrestoreView(_r1);
			const item_r2 = ɵɵreadContextLet(0);
			return ɵɵresetView(ɵɵnextContext(2).onItemHovered($event, item_r2));
		});
		ɵɵtext(2);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const $index_r4 = ctx.$index;
		ɵɵnextContext();
		const rowIndex_r5 = ɵɵreadContextLet(0);
		const ctx_r2 = ɵɵnextContext();
		const item_r6 = ɵɵstoreLet(ctx_r2.getItem(rowIndex_r5, $index_r4));
		ɵɵadvance();
		ɵɵclassProp("t-cell_disabled", ctx_r2.isDisabled(item_r6))("t-cell_today", ctx_r2.itemIsToday(item_r6));
		ɵɵproperty("tuiScrollIntoView", ctx_r2.scrollItemIntoView(item_r6));
		ɵɵattribute("data-range", ctx_r2.getItemRange(item_r6));
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", item_r6, " ");
	}
}
function TuiCalendarYear_For_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵdeclareLet(0);
		ɵɵelementStart(1, "div", 0);
		ɵɵrepeaterCreate(2, TuiCalendarYear_For_1_For_3_Template, 3, 8, "div", 1, ɵɵrepeaterTrackByIndex);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const $index_r7 = ctx.$index;
		ɵɵstoreLet($index_r7);
		ɵɵadvance(2);
		ɵɵrepeater("-".repeat(4));
	}
}
function TuiCalendar_Conditional_0_Template(rf, ctx) {
	if (rf & 1) {
		const _r1 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "tui-scrollbar", 0)(1, "tui-calendar-year", 1);
		ɵɵlistener("yearClick", function TuiCalendar_Conditional_0_Template_tui_calendar_year_yearClick_1_listener($event) {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().onPickerYearClick($event));
		});
		ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵproperty("initialItem", ctx_r1.month().year)("max", ctx_r1.max().year)("min", ctx_r1.min().year)("rangeMode", ctx_r1.options.rangeMode)("value", ctx_r1.value());
	}
}
function TuiCalendar_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		const _r3 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "tui-calendar-spin", 2);
		ɵɵlistener("valueChange", function TuiCalendar_Conditional_1_Template_tui_calendar_spin_valueChange_0_listener($event) {
			ɵɵrestoreView(_r3);
			return ɵɵresetView(ɵɵnextContext().onPaginationValueChange($event));
		})("yearClick", function TuiCalendar_Conditional_1_Template_tui_calendar_spin_yearClick_0_listener() {
			ɵɵrestoreView(_r3);
			return ɵɵresetView(ɵɵnextContext().view.set("year"));
		});
		ɵɵelementEnd();
		ɵɵelementStart(1, "tui-calendar-sheet", 3);
		ɵɵpipe(2, "tuiMapper");
		ɵɵlistener("dayClick", function TuiCalendar_Conditional_1_Template_tui_calendar_sheet_dayClick_1_listener($event) {
			ɵɵrestoreView(_r3);
			return ɵɵresetView(ɵɵnextContext().onDayClick($event));
		})("hoveredItemChange", function TuiCalendar_Conditional_1_Template_tui_calendar_sheet_hoveredItemChange_1_listener($event) {
			ɵɵrestoreView(_r3);
			return ɵɵresetView(ɵɵnextContext().onHoveredItemChange($event));
		});
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵproperty("max", ctx_r1.computedMaxViewedMonth())("min", ctx_r1.computedMinViewedMonth())("value", ctx_r1.month());
		ɵɵadvance();
		ɵɵproperty("disabledItemHandler", ɵɵpipeBind4(2, 9, ctx_r1.disabledItemHandler(), ctx_r1.disabledItemHandlerMapper, ctx_r1.min(), ctx_r1.max()))("hoveredItem", ctx_r1.hoveredItem())("markerHandler", ctx_r1.markerHandler())("month", ctx_r1.month())("showAdjacent", ctx_r1.showAdjacent())("value", ctx_r1.value());
	}
}
var AbstractTuiCalendar = class AbstractTuiCalendar {
	constructor() {
		this.month = model(TuiMonth.currentLocal());
		this.value = model(null);
		this.min = input(TUI_FIRST_DAY, { transform: (x) => x ?? TUI_FIRST_DAY });
		this.max = input(TUI_LAST_DAY, { transform: (x) => x ?? TUI_LAST_DAY });
		this.disabledItemHandler = input(inject(TUI_ITEMS_HANDLERS).disabledItemHandler());
	}
	static {
		this.ɵfac = function AbstractTuiCalendar_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || AbstractTuiCalendar)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: AbstractTuiCalendar,
			inputs: {
				month: [1, "month"],
				value: [1, "value"],
				min: [1, "min"],
				max: [1, "max"],
				disabledItemHandler: [1, "disabledItemHandler"]
			},
			outputs: {
				month: "monthChange",
				value: "valueChange"
			}
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiCalendar, [{ type: Directive }], null, null);
})();
var TUI_CALENDAR_DEFAULT_OPTIONS = {
	dayType: (day) => day.isWeekend ? "weekend" : "weekday",
	weekStart: signal(TuiDayOfWeek.Monday)
};
var [TUI_CALENDAR_OPTIONS, tuiCalendarOptionsProvider] = tuiCreateOptions(TUI_CALENDAR_DEFAULT_OPTIONS);
var TUI_CALENDAR_SHEET_DEFAULT_OPTIONS = { rangeMode: false };
var [TUI_CALENDAR_SHEET_OPTIONS, tuiCalendarSheetOptionsProvider] = tuiCreateOptions(TUI_CALENDAR_SHEET_DEFAULT_OPTIONS);
var CALENDAR_ROWS_COUNT = 6;
var TuiCalendarSheetPipe = class TuiCalendarSheetPipe {
	constructor() {
		this.options = inject(TUI_CALENDAR_OPTIONS);
		this.currentMonth = null;
		this.currentSheet = [];
	}
	transform(month, showAdjacentDays = false) {
		if (this.currentMonth?.monthSame(month)) return this.currentSheet;
		const sheet = [];
		for (let rowIndex = 0; rowIndex < CALENDAR_ROWS_COUNT; rowIndex++) {
			const row = [];
			for (let colIndex = 0; colIndex < 7; colIndex++) {
				const day = getDayFromMonthRowCol({
					month,
					rowIndex,
					colIndex,
					firstDayOfWeek: this.options.weekStart()
				});
				const isPrevMonthDay = (day, relativeToMonth = month) => day.year < relativeToMonth.year || day.month < relativeToMonth.month;
				const isNextMonthDay = (day, relativeToMonth = month) => day.year > relativeToMonth.year || day.month > relativeToMonth.month;
				if (isPrevMonthDay(day) && !showAdjacentDays) continue;
				if (isNextMonthDay(day) && !showAdjacentDays) break;
				row.push(day);
			}
			sheet.push(row);
		}
		this.currentSheet = sheet.filter((row) => row.length);
		this.currentMonth = month;
		return this.currentSheet;
	}
	static {
		this.ɵfac = function TuiCalendarSheetPipe_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiCalendarSheetPipe)();
		};
	}
	static {
		this.ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
			name: "tuiCalendarSheet",
			type: TuiCalendarSheetPipe,
			pure: true
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheetPipe, [{
		type: Pipe,
		args: [{ name: "tuiCalendarSheet" }]
	}], null, null);
})();
/**
* Computes day of week offset of the beginning of the month
*/
function getMonthStartDaysOffset(month, firstDayOfWeek) {
	const startMonthOffsetFromSunday = new Date(month.year, month.month, 1).getDay();
	return startMonthOffsetFromSunday >= firstDayOfWeek ? startMonthOffsetFromSunday - firstDayOfWeek : 7 - (firstDayOfWeek - startMonthOffsetFromSunday);
}
/**
* Calculated day on a calendar grid
* @return resulting day on these coordinates (could exceed passed month)
*/
function getDayFromMonthRowCol({ month, rowIndex, colIndex, firstDayOfWeek }) {
	ngDevMode && console.assert(Number.isInteger(rowIndex));
	ngDevMode && console.assert(tuiInRange(rowIndex, 0, 6));
	ngDevMode && console.assert(Number.isInteger(colIndex));
	ngDevMode && console.assert(tuiInRange(colIndex, 0, 7));
	let day = rowIndex * 7 + colIndex - getMonthStartDaysOffset(month, firstDayOfWeek) + 1;
	if (day > month.daysCount) {
		day -= month.daysCount;
		month = month.append({ month: 1 });
	}
	if (day <= 0) {
		month = month.append({ month: -1 });
		day = month.daysCount + day;
	}
	return new TuiDay(month.year, month.month, day);
}
function convertToSundayFirstWeekFormat(weekDaysNames) {
	const sundayIndex = weekDaysNames.length - 1;
	return [weekDaysNames[sundayIndex] || "", ...weekDaysNames.slice(0, sundayIndex)];
}
var TuiOrderWeekDaysPipe = class TuiOrderWeekDaysPipe {
	constructor() {
		this.options = inject(TUI_CALENDAR_OPTIONS);
	}
	transform(mondayFirstWeekDays$) {
		return mondayFirstWeekDays$.pipe(map(convertToSundayFirstWeekFormat), map((weekDays) => [...weekDays.slice(this.options.weekStart()), ...weekDays.slice(0, this.options.weekStart())]));
	}
	static {
		this.ɵfac = function TuiOrderWeekDaysPipe_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiOrderWeekDaysPipe)();
		};
	}
	static {
		this.ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
			name: "tuiOrderWeekDays",
			type: TuiOrderWeekDaysPipe,
			pure: true
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOrderWeekDaysPipe, [{
		type: Pipe,
		args: [{ name: "tuiOrderWeekDays" }]
	}], null, null);
})();
var TuiCalendarSheet = class TuiCalendarSheet {
	constructor() {
		this.options = inject(TUI_CALENDAR_SHEET_OPTIONS);
		this.today = TuiDay.currentLocal();
		this.unorderedWeekDays$ = toObservable$1(inject(TUI_SHORT_WEEK_DAYS));
		this.dayType = inject(TUI_CALENDAR_OPTIONS).dayType;
		this.month = input(TuiMonth.currentLocal());
		this.disabledItemHandler = input(TUI_FALSE_HANDLER);
		this.markerHandler = input(null);
		this.value = input(null);
		this.showAdjacent = input(true);
		this.hoveredItem = model(null);
		this.dayClick = output();
		this.toMarkers = (day, today, range, markerHandler) => {
			if (today || [
				"active",
				"end",
				"start"
			].includes(range || "")) return null;
			const markers = markerHandler?.(day);
			return markers?.length ? markers : null;
		};
	}
	onItemHovered(item) {
		this.updateHoveredItem(item || null);
	}
	getItemRange(item) {
		const value = this.value();
		if (!value) return null;
		if (value instanceof TuiDay && !this.computedRangeMode) return value.daySame(item) ? "active" : null;
		if (value instanceof TuiDayRange && value.isSingleDay) return value.from.daySame(item) ? "active" : null;
		if (!(value instanceof TuiDay) && !(value instanceof TuiDayRange)) return value.find((day) => day.daySame(item)) ? "active" : null;
		const range = this.getRange(value, this.hoveredItem());
		if (range.isSingleDay && range.from.daySame(item)) return "active";
		if (range.from.daySame(item)) return "start";
		if (range.to.daySame(item)) return "end";
		return range.from.dayBefore(item) && range.to.dayAfter(item) ? "middle" : null;
	}
	get computedRangeMode() {
		return this.options.rangeMode;
	}
	get isRangePicking() {
		return this.options.rangeMode && this.value() instanceof TuiDay;
	}
	itemIsToday(item) {
		return this.today.daySame(item);
	}
	itemIsUnavailable(item) {
		return !this.month().monthSame(item);
	}
	getRange(value, hoveredItem) {
		if (value instanceof TuiDay) return TuiDayRange.sort(value, hoveredItem ?? value);
		return value.isSingleDay ? TuiDayRange.sort(value.from, hoveredItem ?? value.to) : value;
	}
	updateHoveredItem(day) {
		if (tuiNullableSame(this.hoveredItem(), day, (a, b) => a.daySame(b))) return;
		this.hoveredItem.set(day);
	}
	static {
		this.ɵfac = function TuiCalendarSheet_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiCalendarSheet)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiCalendarSheet,
			selectors: [["tui-calendar-sheet"]],
			hostVars: 2,
			hostBindings: function TuiCalendarSheet_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵclassProp("_picking", ctx.isRangePicking);
			},
			inputs: {
				month: [1, "month"],
				disabledItemHandler: [1, "disabledItemHandler"],
				markerHandler: [1, "markerHandler"],
				value: [1, "value"],
				showAdjacent: [1, "showAdjacent"],
				hoveredItem: [1, "hoveredItem"]
			},
			outputs: {
				hoveredItem: "hoveredItemChange",
				dayClick: "dayClick"
			},
			decls: 10,
			vars: 8,
			consts: [
				[
					1,
					"t-row",
					"t-row_weekday"
				],
				[
					1,
					"t-cell",
					3,
					"textContent"
				],
				[
					"automation-id",
					"tui-calendar-sheet__row",
					1,
					"t-row"
				],
				[
					"automation-id",
					"tui-calendar-sheet__cell",
					1,
					"t-cell",
					3,
					"t-cell_disabled",
					"t-cell_today",
					"t-cell_unavailable"
				],
				[
					"automation-id",
					"tui-calendar-sheet__cell",
					1,
					"t-cell",
					3,
					"click",
					"tuiHoveredChange"
				],
				[1, "t-dots"],
				[1, "t-dot"],
				[
					1,
					"t-dot",
					3,
					"background"
				]
			],
			template: function TuiCalendarSheet_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵelementStart(0, "div", 0);
					ɵɵrepeaterCreate(1, TuiCalendarSheet_For_2_Template, 1, 1, "div", 1, ɵɵrepeaterTrackByIdentity);
					ɵɵpipe(3, "tuiOrderWeekDays");
					ɵɵpipe(4, "async");
					ɵɵelementEnd();
					ɵɵdeclareLet(5);
					ɵɵpipe(6, "tuiCalendarSheet");
					ɵɵelementStart(7, "div");
					ɵɵrepeaterCreate(8, TuiCalendarSheet_For_9_Template, 4, 1, "div", 2, ɵɵrepeaterTrackByIndex);
					ɵɵelementEnd();
				}
				if (rf & 2) {
					ɵɵadvance();
					ɵɵrepeater(ɵɵpipeBind1(4, 2, ɵɵpipeBind1(3, 0, ctx.unorderedWeekDays$)));
					ɵɵadvance(4);
					const sheet_r12 = ɵɵstoreLet(ɵɵpipeBind2(6, 4, ctx.month(), true));
					ɵɵadvance(3);
					ɵɵrepeater("-".repeat(sheet_r12.length));
				}
			},
			dependencies: [
				AsyncPipe,
				TuiCalendarSheetPipe,
				TuiHovered,
				TuiMapperPipe,
				TuiOrderWeekDaysPipe
			],
			styles: [".t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--%NS%tui-typography-body-m)}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:\"\";z-index:-1;border-radius:var(--%NS%tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--%NS%tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--%NS%tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--%NS%tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--%NS%tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--%NS%tui-background-neutral-1);color:var(--%NS%tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--%NS%tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--%NS%tui-background-accent-1);transform:scaleX(var(--%NS%tui-inline))}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--%NS%tui-background-neutral-1);color:var(--%NS%tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--%NS%tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--%NS%tui-background-accent-1);transform:scaleX(calc(var(--%NS%tui-inline) * -1))}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--%NS%tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--%NS%tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--%NS%tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media(hover:hover)and (pointer:fine){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--%NS%tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--%NS%tui-background-accent-1-hover)}}.t-cell[_ngcontent-%COMP%]{inline-size:calc(100% / 7)}[data-type=weekday][_ngcontent-%COMP%]{color:var(--%NS%tui-text-primary)}[data-type=weekend][_ngcontent-%COMP%]{color:var(--%NS%tui-text-negative)}.t-row[_ngcontent-%COMP%]{justify-content:flex-start}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row_weekday[_ngcontent-%COMP%]{font:var(--%NS%tui-typography-body-s);color:var(--%NS%tui-text-secondary);pointer-events:none}.t-cell_unavailable[_ngcontent-%COMP%]{opacity:var(--%NS%tui-disabled-opacity)}.t-dots[_ngcontent-%COMP%]{position:absolute;display:flex;inset-block-end:0;justify-content:center;margin-block-start:-.5rem;padding-block-end:.25rem}.t-dot[_ngcontent-%COMP%]{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheet, [{
		type: Component,
		args: [{
			selector: "tui-calendar-sheet",
			imports: [
				AsyncPipe,
				TuiCalendarSheetPipe,
				TuiHovered,
				TuiMapperPipe,
				TuiOrderWeekDaysPipe
			],
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: { "[class._picking]": "isRangePicking" },
			template: "<div class=\"t-row t-row_weekday\">\n    @for (day of unorderedWeekDays$ | tuiOrderWeekDays | async; track day) {\n        <div\n            class=\"t-cell\"\n            [textContent]=\"day\"\n        ></div>\n    }\n</div>\n@let sheet = month() | tuiCalendarSheet: true;\n<div>\n    @for (_ of '-'.repeat(sheet.length); track $index) {\n        @let rowIndex = $index;\n        <div\n            automation-id=\"tui-calendar-sheet__row\"\n            class=\"t-row\"\n        >\n            @for (_ of '-'.repeat(sheet[rowIndex]?.length ?? 0); track $index) {\n                @let item = sheet[rowIndex]?.[$index];\n                @if (item && (!itemIsUnavailable(item) || showAdjacent())) {\n                    <div\n                        automation-id=\"tui-calendar-sheet__cell\"\n                        class=\"t-cell\"\n                        [attr.data-range]=\"getItemRange(item)\"\n                        [attr.data-type]=\"item | tuiMapper: dayType\"\n                        [class.t-cell_disabled]=\"disabledItemHandler()(item)\"\n                        [class.t-cell_today]=\"itemIsToday(item)\"\n                        [class.t-cell_unavailable]=\"itemIsUnavailable(item)\"\n                        (click)=\"dayClick.emit(item)\"\n                        (tuiHoveredChange)=\"onItemHovered($event && item)\"\n                    >\n                        {{ item.day }}\n                        @if (\n                            item | tuiMapper: toMarkers : itemIsToday(item) : getItemRange(item) : markerHandler();\n                            as markers\n                        ) {\n                            <div class=\"t-dots\">\n                                <div\n                                    class=\"t-dot\"\n                                    [style.background]=\"markers?.[0]\"\n                                ></div>\n                                @if (markers.length > 1) {\n                                    <div\n                                        class=\"t-dot\"\n                                        [style.background]=\"markers?.[1] || ''\"\n                                    ></div>\n                                }\n                            </div>\n                        }\n                    </div>\n                }\n            }\n        </div>\n    }\n</div>\n",
			styles: [".t-row{display:flex;justify-content:flex-start;font:var(--tui-typography-body-m)}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:\"\";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1);transform:scaleX(var(--tui-inline))}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(calc(var(--tui-inline) * -1))}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media(hover:hover)and (pointer:fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}.t-cell{inline-size:calc(100% / 7)}[data-type=weekday]{color:var(--tui-text-primary)}[data-type=weekend]{color:var(--tui-text-negative)}.t-row{justify-content:flex-start}.t-row:first-child{justify-content:flex-end}.t-row_weekday{font:var(--tui-typography-body-s);color:var(--tui-text-secondary);pointer-events:none}.t-cell_unavailable{opacity:var(--tui-disabled-opacity)}.t-dots{position:absolute;display:flex;inset-block-end:0;justify-content:center;margin-block-start:-.5rem;padding-block-end:.25rem}.t-dot{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}\n"]
		}]
	}], null, null);
})();
var TuiCalendarSpin = class TuiCalendarSpin {
	constructor() {
		this.months = inject(TUI_MONTHS);
		this.value = model(TuiMonth.currentLocal());
		this.min = input(TUI_FIRST_DAY);
		this.max = input(TUI_LAST_DAY);
		this.yearClick = output();
	}
	append(date) {
		const value = this.value().append(date);
		const min = this.min();
		const max = this.max();
		if (min.monthSameOrAfter(value)) this.updateValue(min);
		else this.updateValue(max.monthSameOrBefore(value) ? max : value);
	}
	updateValue(value) {
		if (this.value().monthSame(value)) return;
		this.value.set(value);
	}
	static {
		this.ɵfac = function TuiCalendarSpin_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiCalendarSpin)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiCalendarSpin,
			selectors: [["tui-calendar-spin"]],
			inputs: {
				value: [1, "value"],
				min: [1, "min"],
				max: [1, "max"]
			},
			outputs: {
				value: "valueChange",
				yearClick: "yearClick"
			},
			decls: 4,
			vars: 5,
			consts: [
				[
					3,
					"leftClick",
					"rightClick",
					"focusable",
					"leftDisabled",
					"rightDisabled"
				],
				[
					"tabIndex",
					"-1",
					"tuiLink",
					"",
					"type",
					"button"
				],
				[
					"tabIndex",
					"-1",
					"tuiLink",
					"",
					"type",
					"button",
					3,
					"click"
				]
			],
			template: function TuiCalendarSpin_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵelementStart(0, "tui-spin-button", 0);
					ɵɵlistener("leftClick", function TuiCalendarSpin_Template_tui_spin_button_leftClick_0_listener() {
						return ctx.append({ month: -1 });
					})("rightClick", function TuiCalendarSpin_Template_tui_spin_button_rightClick_0_listener() {
						return ctx.append({ month: 1 });
					});
					ɵɵtext(1);
					ɵɵconditionalCreate(2, TuiCalendarSpin_Conditional_2_Template, 1, 1)(3, TuiCalendarSpin_Conditional_3_Template, 2, 1, "button", 1);
					ɵɵelementEnd();
				}
				if (rf & 2) {
					ɵɵproperty("focusable", false)("leftDisabled", ctx.value().monthSameOrBefore(ctx.min()))("rightDisabled", ctx.value().monthSameOrAfter(ctx.max()));
					ɵɵadvance();
					ɵɵtextInterpolate1(" ", ctx.months()[ctx.value().month], " ");
					ɵɵadvance();
					ɵɵconditional(ctx.min().year === ctx.max().year ? 2 : 3);
				}
			},
			dependencies: [TuiLink, TuiSpinButton],
			styles: ["[_nghost-%COMP%]{display:block}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSpin, [{
		type: Component,
		args: [{
			selector: "tui-calendar-spin",
			imports: [TuiLink, TuiSpinButton],
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<tui-spin-button\n    [focusable]=\"false\"\n    [leftDisabled]=\"value().monthSameOrBefore(min())\"\n    [rightDisabled]=\"value().monthSameOrAfter(max())\"\n    (leftClick)=\"append({month: -1})\"\n    (rightClick)=\"append({month: 1})\"\n>\n    {{ months()[value().month] }}\n    @if (min().year === max().year) {\n        {{ value().formattedYear }}\n    } @else {\n        <button\n            tabIndex=\"-1\"\n            tuiLink\n            type=\"button\"\n            (click)=\"yearClick.emit(value())\"\n        >\n            {{ value().formattedYear }}\n        </button>\n    }\n</tui-spin-button>\n",
			styles: [":host{display:block}\n"]
		}]
	}], null, null);
})();
var LIMIT = 100;
var ITEMS_IN_ROW = 4;
var CURRENT_YEAR = TuiMonth.currentLocal().year;
var TuiCalendarYear = class TuiCalendarYear {
	constructor() {
		this.hoveredItem = signal(null);
		this.calculatedMin = computed(() => {
			const initial = this.initialItem() - LIMIT;
			const min = this.min() ?? 0;
			return min > initial ? min : initial;
		});
		this.calculatedMax = computed(() => {
			const initial = this.initialItem() + LIMIT;
			const max = this.max() ?? 9999;
			return max < initial ? max + 1 : initial;
		});
		this.isRangePicking = computed((x = this.value()) => this.rangeMode() && (x instanceof TuiDay || x instanceof TuiMonth));
		this.rows = computed(() => Math.ceil((this.calculatedMax() - this.calculatedMin()) / ITEMS_IN_ROW));
		this.rangeMode = input(false);
		this.disabledItemHandler = input(inject(TUI_ITEMS_HANDLERS).disabledItemHandler());
		this.value = input(null);
		this.min = input(0, { transform: (x) => x ?? 0 });
		this.max = input(MAX_YEAR, { transform: (x) => x ?? 9999 });
		this.initialItem = input(CURRENT_YEAR, { transform: (x) => x ?? CURRENT_YEAR });
		this.yearClick = output();
	}
	isDisabled(item) {
		return this.max() && this.max() < item || this.min() && this.min() > item || this.disabledItemHandler()(item);
	}
	getItemRange(item) {
		const value = this.value();
		const hoveredItem = this.hoveredItem();
		if (value instanceof TuiYear && value.year === item) return "active";
		if (tuiIsNumber(value)) return value === item ? "active" : null;
		if (!(value instanceof TuiMonthRange) && !(value instanceof TuiYear)) return value?.find((day) => day.year === item) ? "active" : null;
		const hovered = this.isRangePicking() ? hoveredItem : null;
		const from = "from" in value ? value.from?.year : value.year;
		const to = "from" in value ? value.to.year : value.year;
		const min = Math.min(from, hovered ?? to);
		const max = Math.max(from, hovered ?? to);
		if (min === max && from === to && from === item) return "active";
		if (min === item) return "start";
		if (max === item) return "end";
		return min < item && item < max ? "middle" : null;
	}
	onItemHovered(hovered, item) {
		this.hoveredItem.set(hovered ? item : null);
	}
	scrollItemIntoView(item) {
		return this.initialItem() === item;
	}
	getItem(rowIndex, colIndex) {
		return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin();
	}
	itemIsToday(item) {
		return CURRENT_YEAR === item;
	}
	static {
		this.ɵfac = function TuiCalendarYear_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiCalendarYear)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiCalendarYear,
			selectors: [["tui-calendar-year"]],
			hostVars: 2,
			hostBindings: function TuiCalendarYear_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵclassProp("_picking", ctx.isRangePicking());
			},
			inputs: {
				rangeMode: [1, "rangeMode"],
				disabledItemHandler: [1, "disabledItemHandler"],
				value: [1, "value"],
				min: [1, "min"],
				max: [1, "max"],
				initialItem: [1, "initialItem"]
			},
			outputs: { yearClick: "yearClick" },
			features: [ɵɵProvidersFeature([tuiAsAuxiliary(TuiCalendarYear)])],
			decls: 2,
			vars: 0,
			consts: [
				[
					"automation-id",
					"tui-calendar-year__row",
					1,
					"t-row"
				],
				[
					"automation-id",
					"tui-calendar-year__cell",
					1,
					"t-cell",
					3,
					"t-cell_disabled",
					"t-cell_today",
					"tuiScrollIntoView"
				],
				[
					"automation-id",
					"tui-calendar-year__cell",
					1,
					"t-cell",
					3,
					"click",
					"tuiHoveredChange",
					"tuiScrollIntoView"
				]
			],
			template: function TuiCalendarYear_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, TuiCalendarYear_For_1_Template, 4, 1, "div", 0, ɵɵrepeaterTrackByIndex);
				if (rf & 2) ɵɵrepeater("-".repeat(ctx.rows()));
			},
			dependencies: [TuiHovered, TuiScrollIntoView],
			styles: [".t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--%NS%tui-typography-body-m)}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:\"\";z-index:-1;border-radius:var(--%NS%tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--%NS%tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--%NS%tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--%NS%tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--%NS%tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--%NS%tui-background-neutral-1);color:var(--%NS%tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--%NS%tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--%NS%tui-background-accent-1);transform:scaleX(var(--%NS%tui-inline))}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--%NS%tui-background-neutral-1);color:var(--%NS%tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--%NS%tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--%NS%tui-background-accent-1);transform:scaleX(calc(var(--%NS%tui-inline) * -1))}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--%NS%tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--%NS%tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--%NS%tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media(hover:hover)and (pointer:fine){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--%NS%tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--%NS%tui-background-accent-1-hover)}}[_nghost-%COMP%]{display:block;padding-inline-end:1rem;inline-size:15.75rem;padding:0 1.125rem}.t-cell[_ngcontent-%COMP%]{flex:1;border-block-start-width:.5rem;border-block-end-width:.5rem}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarYear, [{
		type: Component,
		args: [{
			selector: "tui-calendar-year",
			imports: [TuiHovered, TuiScrollIntoView],
			changeDetection: ChangeDetectionStrategy.OnPush,
			providers: [tuiAsAuxiliary(TuiCalendarYear)],
			host: { "[class._picking]": "isRangePicking()" },
			template: "@for (_ of '-'.repeat(rows()); track $index) {\n    @let rowIndex = $index;\n    <div\n        automation-id=\"tui-calendar-year__row\"\n        class=\"t-row\"\n    >\n        @for (_ of '-'.repeat(4); track $index) {\n            @let item = getItem(rowIndex, $index);\n            <div\n                automation-id=\"tui-calendar-year__cell\"\n                class=\"t-cell\"\n                [attr.data-range]=\"getItemRange(item)\"\n                [class.t-cell_disabled]=\"isDisabled(item)\"\n                [class.t-cell_today]=\"itemIsToday(item)\"\n                [tuiScrollIntoView]=\"scrollItemIntoView(item)\"\n                (click)=\"yearClick.emit(item)\"\n                (tuiHoveredChange)=\"onItemHovered($event, item)\"\n            >\n                {{ item }}\n            </div>\n        }\n    </div>\n}\n",
			styles: [".t-row{display:flex;justify-content:flex-start;font:var(--tui-typography-body-m)}.t-row:first-child{justify-content:flex-end}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:\"\";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1);transform:scaleX(var(--tui-inline))}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(calc(var(--tui-inline) * -1))}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media(hover:hover)and (pointer:fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}:host{display:block;padding-inline-end:1rem;inline-size:15.75rem;padding:0 1.125rem}.t-cell{flex:1;border-block-start-width:.5rem;border-block-end-width:.5rem}\n"]
		}]
	}], null, null);
})();
var TuiCalendar = class TuiCalendar extends AbstractTuiCalendar {
	constructor() {
		super(...arguments);
		this.options = inject(TUI_CALENDAR_SHEET_OPTIONS);
		this.minViewedMonth = input(TUI_FIRST_DAY);
		this.maxViewedMonth = input(TUI_LAST_DAY);
		this.showAdjacent = input(true);
		this.markerHandler = input(null);
		this.initialView = input("month");
		this.hoveredItem = model(null);
		this.dayClick = output();
		this.computedMinViewedMonth = computed(() => {
			const min = this.min();
			const minViewed = this.minViewedMonth() ?? TUI_FIRST_DAY;
			return minViewed.monthSameOrAfter(min) ? minViewed : min;
		});
		this.computedMaxViewedMonth = computed(() => {
			const max = this.max();
			const maxViewed = this.maxViewedMonth() ?? TUI_LAST_DAY;
			return maxViewed.monthSameOrBefore(max) ? maxViewed : max;
		});
		this.view = linkedSignal(() => this.initialView());
		this.syncMonthFromValue = effect(() => {
			const value = this.value();
			if (this.showAdjacent() && value instanceof TuiDay && value.daySameOrBefore(TUI_LAST_DISPLAYED_DAY)) this.month.set(value);
		});
		this.disabledItemHandlerMapper = (disabledItemHandler, min, max) => (item) => item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);
	}
	onPaginationValueChange(month) {
		this.updateViewedMonth(month);
	}
	onDayClick(day) {
		this.dayClick.emit(day);
		this.value.set(day);
	}
	onHoveredItemChange(day) {
		this.updateHoveredDay(day);
	}
	onPickerYearClick(year) {
		this.view.set("month");
		this.updateViewedMonth(new TuiMonth(year, this.month().month));
	}
	updateViewedMonth(month) {
		if (this.month().monthSame(month)) return;
		this.month.set(month);
	}
	updateHoveredDay(day) {
		if (tuiNullableSame(this.hoveredItem(), day, (a, b) => a.daySame(b))) return;
		this.hoveredItem.set(day);
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiCalendar_BaseFactory;
			return function TuiCalendar_Factory(__ngFactoryType__) {
				return (ɵTuiCalendar_BaseFactory || (ɵTuiCalendar_BaseFactory = ɵɵgetInheritedFactory(TuiCalendar)))(__ngFactoryType__ || TuiCalendar);
			};
		})();
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiCalendar,
			selectors: [["tui-calendar"]],
			hostBindings: function TuiCalendar_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("mousedown.prevent.zoneless", function TuiCalendar_mousedown_prevent_zoneless_HostBindingHandler() {
					return 0;
				});
			},
			inputs: {
				minViewedMonth: [1, "minViewedMonth"],
				maxViewedMonth: [1, "maxViewedMonth"],
				showAdjacent: [1, "showAdjacent"],
				markerHandler: [1, "markerHandler"],
				initialView: [1, "initialView"],
				hoveredItem: [1, "hoveredItem"]
			},
			outputs: {
				hoveredItem: "hoveredItemChange",
				dayClick: "dayClick"
			},
			features: [ɵɵProvidersFeature([tuiAsAuxiliary(TuiCalendar), tuiProvide(AbstractTuiCalendar, TuiCalendar)]), ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 1,
			consts: [
				[
					"automation-id",
					"tui-calendar__scrollbar",
					1,
					"t-scrollbar"
				],
				[
					"automation-id",
					"tui-calendar__year",
					3,
					"yearClick",
					"initialItem",
					"max",
					"min",
					"rangeMode",
					"value"
				],
				[
					"automation-id",
					"tui-calendar__pagination",
					1,
					"t-pagination",
					3,
					"valueChange",
					"yearClick",
					"max",
					"min",
					"value"
				],
				[
					"automation-id",
					"tui-calendar__calendar",
					3,
					"dayClick",
					"hoveredItemChange",
					"disabledItemHandler",
					"hoveredItem",
					"markerHandler",
					"month",
					"showAdjacent",
					"value"
				]
			],
			template: function TuiCalendar_Template(rf, ctx) {
				if (rf & 1) ɵɵconditionalCreate(0, TuiCalendar_Conditional_0_Template, 2, 5, "tui-scrollbar", 0)(1, TuiCalendar_Conditional_1_Template, 3, 14);
				if (rf & 2) ɵɵconditional(ctx.view() === "year" ? 0 : 1);
			},
			dependencies: [
				TuiCalendarSheet,
				TuiCalendarSpin,
				TuiCalendarYear,
				TuiMapperPipe,
				TuiScrollbar
			],
			styles: ["[_nghost-%COMP%]{display:block;min-block-size:20.25rem;inline-size:18rem;padding:1rem 1.125rem;box-sizing:border-box;flex-shrink:0}tui-sheet-dialog[_nghost-%COMP%], tui-sheet-dialog   [_nghost-%COMP%]{inline-size:100%}tui-calendar-year[_ngcontent-%COMP%]{padding:0}.t-scrollbar[_ngcontent-%COMP%]{block-size:18.25rem;inline-size:calc(100% + 1rem)}.t-pagination[_ngcontent-%COMP%]{margin-block-end:1rem}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendar, [{
		type: Component,
		args: [{
			selector: "tui-calendar",
			imports: [
				TuiCalendarSheet,
				TuiCalendarSpin,
				TuiCalendarYear,
				TuiMapperPipe,
				TuiScrollbar
			],
			changeDetection: ChangeDetectionStrategy.OnPush,
			providers: [tuiAsAuxiliary(TuiCalendar), tuiProvide(AbstractTuiCalendar, TuiCalendar)],
			host: { "(mousedown.prevent.zoneless)": "0" },
			template: "@if (view() === 'year') {\n    <tui-scrollbar\n        automation-id=\"tui-calendar__scrollbar\"\n        class=\"t-scrollbar\"\n    >\n        <tui-calendar-year\n            automation-id=\"tui-calendar__year\"\n            [initialItem]=\"month().year\"\n            [max]=\"max().year\"\n            [min]=\"min().year\"\n            [rangeMode]=\"options.rangeMode\"\n            [value]=\"value()\"\n            (yearClick)=\"onPickerYearClick($event)\"\n        />\n    </tui-scrollbar>\n} @else {\n    <tui-calendar-spin\n        automation-id=\"tui-calendar__pagination\"\n        class=\"t-pagination\"\n        [max]=\"computedMaxViewedMonth()\"\n        [min]=\"computedMinViewedMonth()\"\n        [value]=\"month()\"\n        (valueChange)=\"onPaginationValueChange($event)\"\n        (yearClick)=\"view.set('year')\"\n    />\n    <tui-calendar-sheet\n        automation-id=\"tui-calendar__calendar\"\n        [disabledItemHandler]=\"disabledItemHandler() | tuiMapper: disabledItemHandlerMapper : min() : max()\"\n        [hoveredItem]=\"hoveredItem()\"\n        [markerHandler]=\"markerHandler()\"\n        [month]=\"month()\"\n        [showAdjacent]=\"showAdjacent()\"\n        [value]=\"value()\"\n        (dayClick)=\"onDayClick($event)\"\n        (hoveredItemChange)=\"onHoveredItemChange($event)\"\n    />\n}\n",
			styles: [":host{display:block;min-block-size:20.25rem;inline-size:18rem;padding:1rem 1.125rem;box-sizing:border-box;flex-shrink:0}:host-context(tui-sheet-dialog){inline-size:100%}tui-calendar-year{padding:0}.t-scrollbar{block-size:18.25rem;inline-size:calc(100% + 1rem)}.t-pagination{margin-block-end:1rem}\n"]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-item.mjs
/**
* Blank directive for queries via `@ContentChildren` / `@ViewChildren` / `querySelector`
*/
var TuiItem = class TuiItem {
	static {
		this.ɵfac = function TuiItem_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiItem)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiItem,
			selectors: [[
				"",
				"tuiItem",
				""
			]]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItem, [{
		type: Directive,
		args: [{ selector: "[tuiItem]" }]
	}], null, null);
})();
//#endregion
//#region node_modules/@ng-web-apis/intersection-observer/fesm2022/ng-web-apis-intersection-observer.mjs
var SafeObserver = typeof IntersectionObserver === "undefined" ? class {
	root = null;
	rootMargin = "";
	thresholds = [];
	observe() {}
	unobserve() {}
	disconnect() {}
	takeRecords() {
		return [];
	}
} : IntersectionObserver;
var WA_INTERSECTION_ROOT = new InjectionToken(ngDevMode ? "[WA_INTERSECTION_ROOT]" : "");
var WA_INTERSECTION_ROOT_MARGIN_DEFAULT = "0px 0px 0px 0px";
var WA_INTERSECTION_ROOT_MARGIN = new InjectionToken(ngDevMode ? "[WA_INTERSECTION_ROOT_MARGIN]" : "", { factory: () => WA_INTERSECTION_ROOT_MARGIN_DEFAULT });
function rootMarginFactory() {
	return inject(ElementRef).nativeElement.getAttribute("waIntersectionRootMargin") || "0px 0px 0px 0px";
}
var WA_INTERSECTION_THRESHOLD = new InjectionToken(ngDevMode ? "[WA_INTERSECTION_THRESHOLD]" : "", { factory: () => 0 });
function thresholdFactory() {
	return inject(ElementRef).nativeElement.getAttribute("waIntersectionThreshold")?.split(",").map(Number.parseFloat) || 0;
}
var WaIntersectionObserverDirective = class WaIntersectionObserverDirective extends SafeObserver {
	callbacks = /* @__PURE__ */ new Map();
	margin = "";
	threshold = "";
	constructor() {
		const root = inject(WA_INTERSECTION_ROOT, { optional: true });
		super((entries) => {
			this.callbacks.forEach((callback, element) => {
				const filtered = entries.filter(({ target }) => target === element);
				if (filtered.length) callback(filtered, this);
			});
		}, {
			root: root?.nativeElement,
			rootMargin: rootMarginFactory(),
			threshold: thresholdFactory()
		});
	}
	observe(target, callback = () => {}) {
		super.observe(target);
		this.callbacks.set(target, callback);
	}
	unobserve(target) {
		super.unobserve(target);
		this.callbacks.delete(target);
	}
	ngOnDestroy() {
		this.disconnect();
	}
	static ɵfac = function WaIntersectionObserverDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || WaIntersectionObserverDirective)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: WaIntersectionObserverDirective,
		selectors: [[
			"",
			"waIntersectionObserver",
			""
		]],
		inputs: {
			margin: [
				0,
				"waIntersectionRootMargin",
				"margin"
			],
			threshold: [
				0,
				"waIntersectionThreshold",
				"threshold"
			]
		},
		exportAs: ["IntersectionObserver"],
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObserverDirective, [{
		type: Directive,
		args: [{
			selector: "[waIntersectionObserver]",
			inputs: ["margin: waIntersectionRootMargin", "threshold: waIntersectionThreshold"],
			exportAs: "IntersectionObserver"
		}]
	}], () => [], null);
})();
var WaIntersectionObserveeService = class WaIntersectionObserveeService extends Observable {
	constructor() {
		const nativeElement = inject(ElementRef).nativeElement;
		const observer = inject(WaIntersectionObserverDirective);
		super((subscriber) => {
			observer.observe(nativeElement, (entries) => {
				subscriber.next(entries);
			});
			return () => {
				observer.unobserve(nativeElement);
			};
		});
		return this.pipe(share());
	}
	static ɵfac = function WaIntersectionObserveeService_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || WaIntersectionObserveeService)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: WaIntersectionObserveeService,
		factory: WaIntersectionObserveeService.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObserveeService, [{ type: Injectable }], () => [], null);
})();
var WaIntersectionObservee = class WaIntersectionObservee {
	waIntersectionObservee = outputFromObservable(inject(WaIntersectionObserveeService));
	static ɵfac = function WaIntersectionObservee_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || WaIntersectionObservee)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: WaIntersectionObservee,
		selectors: [[
			"",
			"waIntersectionObservee",
			""
		]],
		outputs: { waIntersectionObservee: "waIntersectionObservee" },
		features: [ɵɵProvidersFeature([WaIntersectionObserveeService])]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObservee, [{
		type: Directive,
		args: [{
			selector: "[waIntersectionObservee]",
			providers: [WaIntersectionObserveeService]
		}]
	}], null, { waIntersectionObservee: [{
		type: Output,
		args: ["waIntersectionObservee"]
	}] });
})();
var WaIntersectionRoot = class WaIntersectionRoot {
	static ɵfac = function WaIntersectionRoot_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || WaIntersectionRoot)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: WaIntersectionRoot,
		selectors: [[
			"",
			"waIntersectionRoot",
			""
		]],
		features: [ɵɵProvidersFeature([{
			provide: WA_INTERSECTION_ROOT,
			useExisting: ElementRef
		}])]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionRoot, [{
		type: Directive,
		args: [{
			selector: "[waIntersectionRoot]",
			providers: [{
				provide: WA_INTERSECTION_ROOT,
				useExisting: ElementRef
			}]
		}]
	}], null, null);
})();
var WaIntersectionObserver = [
	WaIntersectionObserverDirective,
	WaIntersectionObservee,
	WaIntersectionRoot
];
var WaIntersectionObserverService = class WaIntersectionObserverService extends Observable {
	nativeElement = inject(ElementRef).nativeElement;
	rootMargin = inject(WA_INTERSECTION_ROOT_MARGIN);
	threshold = inject(WA_INTERSECTION_THRESHOLD);
	root = inject(WA_INTERSECTION_ROOT, { optional: true })?.nativeElement ?? null;
	constructor() {
		super((subscriber) => {
			const observer = new SafeObserver((entries) => {
				subscriber.next(entries);
			}, {
				root: this.root,
				rootMargin: this.rootMargin,
				threshold: this.threshold
			});
			observer.observe(this.nativeElement);
			return () => {
				observer.disconnect();
			};
		});
	}
	static ɵfac = function WaIntersectionObserverService_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || WaIntersectionObserverService)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: WaIntersectionObserverService,
		factory: WaIntersectionObserverService.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObserverService, [{ type: Injectable }], () => [], null);
})();
new InjectionToken(ngDevMode ? "[WA_INTERSECTION_OBSERVER_SUPPORT]" : "", { factory: () => !!inject(WA_WINDOW).IntersectionObserver });
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-carousel.mjs
var _c0$10 = (a0) => ({ $implicit: a0 });
function TuiCarouselComponent_ng_container_1_Template(rf, ctx) {
	if (rf & 1) ɵɵelementContainer(0);
}
function TuiCarouselComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
	if (rf & 1) ɵɵelementContainer(0);
}
function TuiCarouselComponent_Conditional_4_Template(rf, ctx) {
	if (rf & 1) {
		const _r1 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "span", 0);
		ɵɵtemplate(1, TuiCarouselComponent_Conditional_4_ng_container_1_Template, 1, 0, "ng-container", 1);
		ɵɵelementStart(2, "span", 2);
		ɵɵlistener("waIntersectionObservee", function TuiCarouselComponent_Conditional_4_Template_span_waIntersectionObservee_2_listener($event) {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().onSlide($event[0]));
		});
		ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", ctx_r1.template())("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0$10, ctx_r1.index()));
	}
}
function TuiCarouselComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
	if (rf & 1) ɵɵelementContainer(0);
}
function TuiCarouselComponent_Conditional_5_Template(rf, ctx) {
	if (rf & 1) {
		const _r3 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "span", 0);
		ɵɵtemplate(1, TuiCarouselComponent_Conditional_5_ng_container_1_Template, 1, 0, "ng-container", 1);
		ɵɵelementStart(2, "span", 2);
		ɵɵlistener("waIntersectionObservee", function TuiCarouselComponent_Conditional_5_Template_span_waIntersectionObservee_2_listener($event) {
			ɵɵrestoreView(_r3);
			return ɵɵresetView(ɵɵnextContext().onSlide($event[0]));
		});
		ɵɵelementEnd();
		ɵɵelementStart(3, "span", 3);
		ɵɵlistener("waIntersectionObservee", function TuiCarouselComponent_Conditional_5_Template_span_waIntersectionObservee_3_listener($event) {
			ɵɵrestoreView(_r3);
			return ɵɵresetView(ɵɵnextContext().onIntersection(!!($event[0] == null ? null : $event[0].isIntersecting), 1));
		});
		ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", ctx_r1.template())("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0$10, ctx_r1.math.min(ctx_r1.index() + 1, ctx_r1.max())));
	}
}
var TuiCarouselComponent = class TuiCarouselComponent {
	constructor() {
		this.el = tuiInjectElement();
		this.win = inject(WA_WINDOW);
		this.behavior = inject(TUI_REDUCED_MOTION) ? "auto" : "smooth";
		this.math = Math;
		this.template = contentChild.required(TuiItem, { read: TemplateRef });
		this.height = signal(NaN);
		this.skipHydration = Number.parseInt(VERSION.major, 10) < 20 ? "" : null;
		this.index = model(0);
		this.min = input(-Infinity);
		this.max = input(Infinity);
		fromEvent(this.el, "scroll").pipe(debounceTime(100), filter(() => this.fallback)).subscribe(() => {
			this.onIntersection(true, 1);
		});
	}
	ngAfterViewInit() {
		if (this.index() > this.min()) this.el.scrollLeft = this.d * this.el.clientWidth;
	}
	next() {
		this.el.scrollTo({
			left: this.d * this.el.scrollWidth,
			behavior: this.behavior
		});
	}
	prev() {
		this.el.scrollTo({
			left: 0,
			behavior: this.behavior
		});
	}
	onIntersection(isIntersecting, step) {
		const index = tuiClamp(this.index() + step, this.min(), this.max());
		if (isIntersecting) {
			if (index !== this.index()) this.el.style.overflow = "hidden";
			this.index.set(index);
			requestAnimationFrame(() => {
				this.el.style.overflow = "";
				if (this.index() > this.min() && this.index() < this.max()) this.el.scrollLeft = this.d * this.el.clientWidth;
			});
		}
	}
	onSlide(entry) {
		if (entry?.isIntersecting) this.height.set(entry.target.parentElement?.clientHeight ?? NaN);
	}
	get d() {
		return this.el.matches("[dir=\"rtl\"] :scope") ? -1 : 1;
	}
	get fallback() {
		return !!(this.win.devicePixelRatio * 100 % 1) && this.el.scrollWidth - this.el.clientWidth - Math.abs(this.el.scrollLeft) < 1;
	}
	static {
		this.ɵfac = function TuiCarouselComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiCarouselComponent)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiCarouselComponent,
			selectors: [["tui-carousel"]],
			contentQueries: function TuiCarouselComponent_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.template, TuiItem, 5, TemplateRef);
				if (rf & 2) ɵɵqueryAdvance();
			},
			hostAttrs: ["waIntersectionThreshold", "0.5"],
			hostVars: 3,
			hostBindings: function TuiCarouselComponent_HostBindings(rf, ctx) {
				if (rf & 2) {
					ɵɵattribute("ngSkipHydration", ctx.skipHydration);
					ɵɵstyleProp("max-block-size", ctx.height(), "px");
				}
			},
			inputs: {
				index: [1, "index"],
				min: [1, "min"],
				max: [1, "max"]
			},
			outputs: { index: "indexChange" },
			features: [ɵɵProvidersFeature([tuiProvide(WA_INTERSECTION_ROOT, ElementRef)]), ɵɵHostDirectivesFeature([WaIntersectionObserverDirective])],
			decls: 6,
			vars: 6,
			consts: [
				[1, "t-item"],
				[
					4,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				],
				[
					1,
					"t-observer",
					3,
					"waIntersectionObservee"
				],
				[
					"waIntersectionObserver",
					"",
					"waIntersectionThreshold",
					"1",
					1,
					"t-bumper",
					3,
					"waIntersectionObservee"
				]
			],
			template: function TuiCarouselComponent_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵelementStart(0, "span", 0);
					ɵɵtemplate(1, TuiCarouselComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
					ɵɵelementStart(2, "span", 2);
					ɵɵlistener("waIntersectionObservee", function TuiCarouselComponent_Template_span_waIntersectionObservee_2_listener($event) {
						return ctx.onSlide($event[0]);
					});
					ɵɵelementEnd();
					ɵɵelementStart(3, "span", 3);
					ɵɵlistener("waIntersectionObservee", function TuiCarouselComponent_Template_span_waIntersectionObservee_3_listener($event) {
						return ctx.onIntersection(!!($event[0] == null ? null : $event[0].isIntersecting), -1);
					});
					ɵɵelementEnd()();
					ɵɵconditionalCreate(4, TuiCarouselComponent_Conditional_4_Template, 3, 4, "span", 0);
					ɵɵconditionalCreate(5, TuiCarouselComponent_Conditional_5_Template, 4, 4, "span", 0);
				}
				if (rf & 2) {
					ɵɵadvance();
					ɵɵproperty("ngTemplateOutlet", ctx.template())("ngTemplateOutletContext", ɵɵpureFunction1(4, _c0$10, ctx.math.max(ctx.index() - 1, ctx.min())));
					ɵɵadvance(3);
					ɵɵconditional(ctx.index() !== ctx.min() && ctx.index() !== ctx.max() ? 4 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.min() !== ctx.max() ? 5 : -1);
				}
			},
			dependencies: [
				NgTemplateOutlet,
				WaIntersectionObserverDirective,
				WaIntersectionObservee
			],
			styles: ["[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;transition-property:max-block-size;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard);display:flex;max-inline-size:100%;overscroll-behavior-x:none;overflow-x:scroll;overflow-y:hidden;scroll-snap-type:x mandatory}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:active   .t-item[_ngcontent-%COMP%]{padding-block-start:1px;margin-block-start:-1px}.t-item[_ngcontent-%COMP%]{position:relative;display:flex;min-inline-size:100%;block-size:100%;box-sizing:content-box;align-items:center;justify-content:center;scroll-snap-align:start;scroll-snap-stop:always}.t-item[_ngcontent-%COMP%]:first-child   .t-bumper[_ngcontent-%COMP%]{inset-inline-start:0}.t-item[_ngcontent-%COMP%]:last-child   .t-bumper[_ngcontent-%COMP%]{inset-inline-end:0}.t-bumper[_ngcontent-%COMP%], .t-observer[_ngcontent-%COMP%]{position:absolute;inset-block-start:.125rem;block-size:.125rem;inline-size:25%;pointer-events:none}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCarouselComponent, [{
		type: Component,
		args: [{
			selector: "tui-carousel",
			imports: [
				NgTemplateOutlet,
				WaIntersectionObserver,
				WaIntersectionObserverDirective
			],
			changeDetection: ChangeDetectionStrategy.OnPush,
			providers: [tuiProvide(WA_INTERSECTION_ROOT, ElementRef)],
			hostDirectives: [WaIntersectionObserverDirective],
			host: {
				waIntersectionThreshold: "0.5",
				"[attr.ngSkipHydration]": "skipHydration",
				"[style.max-block-size.px]": "height()"
			},
			template: "<span class=\"t-item\">\n    <ng-container *ngTemplateOutlet=\"template(); context: {$implicit: math.max(index() - 1, min())}\" />\n    <span\n        class=\"t-observer\"\n        (waIntersectionObservee)=\"onSlide($event[0])\"\n    ></span>\n    <span\n        waIntersectionObserver\n        waIntersectionThreshold=\"1\"\n        class=\"t-bumper\"\n        (waIntersectionObservee)=\"onIntersection(!!$event[0]?.isIntersecting, -1)\"\n    ></span>\n</span>\n@if (index() !== min() && index() !== max()) {\n    <span class=\"t-item\">\n        <ng-container *ngTemplateOutlet=\"template(); context: {$implicit: index()}\" />\n        <span\n            class=\"t-observer\"\n            (waIntersectionObservee)=\"onSlide($event[0])\"\n        ></span>\n    </span>\n}\n@if (min() !== max()) {\n    <span class=\"t-item\">\n        <ng-container *ngTemplateOutlet=\"template(); context: {$implicit: math.min(index() + 1, max())}\" />\n        <span\n            class=\"t-observer\"\n            (waIntersectionObservee)=\"onSlide($event[0])\"\n        ></span>\n        <span\n            waIntersectionObserver\n            waIntersectionThreshold=\"1\"\n            class=\"t-bumper\"\n            (waIntersectionObservee)=\"onIntersection(!!$event[0]?.isIntersecting, 1)\"\n        ></span>\n    </span>\n}\n",
			styles: [":host{scrollbar-width:none;-ms-overflow-style:none;transition-property:max-block-size;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);display:flex;max-inline-size:100%;overscroll-behavior-x:none;overflow-x:scroll;overflow-y:hidden;scroll-snap-type:x mandatory}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host:active .t-item{padding-block-start:1px;margin-block-start:-1px}.t-item{position:relative;display:flex;min-inline-size:100%;block-size:100%;box-sizing:content-box;align-items:center;justify-content:center;scroll-snap-align:start;scroll-snap-stop:always}.t-item:first-child .t-bumper{inset-inline-start:0}.t-item:last-child .t-bumper{inset-inline-end:0}.t-bumper,.t-observer{position:absolute;inset-block-start:.125rem;block-size:.125rem;inline-size:25%;pointer-events:none}\n"]
		}]
	}], () => [], null);
})();
var TuiCarouselDirective = class TuiCarouselDirective {
	constructor() {
		this.el = tuiInjectElement();
		this.carousel = inject(TuiCarouselComponent);
		this.running$ = merge(fromEvent(this.el, "mouseenter").pipe(map(TUI_FALSE_HANDLER)), fromEvent(this.el, "touchstart").pipe(map(TUI_FALSE_HANDLER)), fromEvent(this.el, "touchend").pipe(map(TUI_TRUE_HANDLER)), fromEvent(this.el, "mouseleave").pipe(map(TUI_TRUE_HANDLER)), inject(WA_PAGE_VISIBILITY));
		this.duration = input(0);
		this.progress = toSignal(combineLatest([toObservable$1(this.duration), toObservable$1(this.carousel.index)]).pipe(switchMap(([duration]) => this.running$.pipe(tuiIfMap(() => timer(0, 100).pipe(map((i) => Math.min(100, i * 100 / duration * 100)), takeWhile((percent) => percent < 100, true)))))), { initialValue: 0 });
		this.sync = effect(() => {
			if (this.progress() === 100) this.carousel.next();
		});
	}
	static {
		this.ɵfac = function TuiCarouselDirective_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiCarouselDirective)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiCarouselDirective,
			selectors: [[
				"tui-carousel",
				"duration",
				""
			]],
			inputs: { duration: [1, "duration"] },
			exportAs: ["tuiCarousel"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCarouselDirective, [{
		type: Directive,
		args: [{
			selector: "tui-carousel[duration]",
			exportAs: "tuiCarousel"
		}]
	}], null, null);
})();
var TuiCarousel = [
	TuiCarouselComponent,
	TuiCarouselDirective,
	TuiItem
];
//#endregion
//#region node_modules/@taiga-ui/font-watcher/index.esm.js
var IFRAME = {
	position: "fixed",
	visibility: "hidden",
	pointerEvents: "none"
};
var BODY = {
	height: "fit-content",
	lineHeight: "1em",
	fontSize: "calc(env(preferred-text-scale) * 1em)"
};
function tuiFontSizeWatcher(callback, iframe = globalThis.document.createElement("iframe")) {
	const resize = () => {
		const { innerWidth = 0, outerWidth = 0, devicePixelRatio = 0 } = iframe.ownerDocument.defaultView || {};
		iframe.width = `${innerWidth === outerWidth ? innerWidth : innerWidth / devicePixelRatio}`;
	};
	iframe.ownerDocument.body.append(iframe);
	iframe.ownerDocument.defaultView?.addEventListener("resize", resize);
	const doc = iframe.contentDocument;
	const observer = new ResizeObserver(() => callback(doc?.body.offsetHeight || 0));
	Object.assign(iframe.style, IFRAME);
	Object.assign(doc?.body.style || {}, BODY);
	doc?.head.insertAdjacentHTML("beforeend", "<meta name=\"text-scale\" content=\"scale\">");
	doc?.documentElement.style.setProperty("font", "-apple-system-body");
	doc?.body.insertAdjacentText("beforeend", ".".repeat(1e3));
	observer.observe(doc?.body || iframe);
	resize();
	return () => {
		observer.disconnect();
		iframe.ownerDocument.defaultView?.removeEventListener("resize", resize);
		iframe.remove();
	};
}
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-font-size.mjs
var TUI_FONT_SIZE_HANDLER = new InjectionToken(ngDevMode ? "TUI_FONT_SIZE_HANDLER" : "");
var TuiFontSize = class TuiFontSize {
	constructor() {
		this.handler = inject(TUI_FONT_SIZE_HANDLER, { optional: true });
		this.enabled = !inject(TuiFontSize, {
			optional: true,
			skipSelf: true
		}) && isPlatformBrowser(inject(PLATFORM_ID)) && typeof ResizeObserver !== "undefined";
		this.nothing = inject(DestroyRef).onDestroy(this.enabled && this.handler ? tuiFontSizeWatcher(this.handler, inject(DOCUMENT).createElement("iframe")) : EMPTY_FUNCTION);
	}
	static {
		this.ɵfac = function TuiFontSize_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiFontSize)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({ type: TuiFontSize });
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFontSize, [{ type: Directive }], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/event-plugins/fesm2022/taiga-ui-event-plugins.mjs
var LongtapEvent = class extends CustomEvent {
	constructor(type, { clientX, clientY, ...eventInitDict }) {
		super(type, {
			...eventInitDict,
			detail: {
				clientX,
				clientY
			}
		});
	}
};
var isIos = ({ userAgent, maxTouchPoints }) => /ipad|iphone|ipod/i.test(userAgent) || /^((?!chrome|android).)*safari/i.test(userAgent) && maxTouchPoints > 1;
var TAP_DELAY = 700;
var SAFE_NAVIGATOR = typeof navigator === "undefined" ? null : navigator;
var MOVE_THRESHOLD = 15;
var LongtapEventPlugin = class extends EventManagerPlugin {
	constructor() {
		super(...arguments);
		this.isIOS = !!SAFE_NAVIGATOR && isIos(SAFE_NAVIGATOR);
	}
	addEventListener(element, _event, handler) {
		const removeLongtapEventPolyfill = this.isIOS ? this.listenTouchEvents(element) : this.listenContextmenuEvent(element);
		element.addEventListener("longtap", handler);
		return () => {
			removeLongtapEventPolyfill();
			element.removeEventListener("longtap", handler);
		};
	}
	supports(event) {
		return event === "longtap";
	}
	listenContextmenuEvent(element) {
		return this.manager.addEventListener(element, "contextmenu.prevent.stop", ({ clientX, clientY }) => {
			this.dispatchLongtapEvent(element, clientX, clientY);
		});
	}
	listenTouchEvents(element) {
		let longTapTimeout = null;
		let touchStartCoords = null;
		const reset = () => {
			clearTimeout(longTapTimeout);
			touchStartCoords = null;
			longTapTimeout = null;
		};
		const removeTouchstartListener = this.manager.addEventListener(element, "touchstart.zoneless.passive", ({ touches }) => {
			const touch = touches[0];
			if (!touch) return;
			const { clientX, clientY } = touch;
			touchStartCoords = {
				clientX,
				clientY
			};
			longTapTimeout = setTimeout(() => {
				this.dispatchLongtapEvent(element, clientX, clientY);
				reset();
			}, TAP_DELAY);
		});
		const removeTouchmoveListener = this.manager.addEventListener(element, "touchmove.zoneless.passive", ({ touches }) => {
			const touch = touches[0];
			if (!touch || !touchStartCoords) return;
			const { clientX, clientY } = touch;
			if (Math.hypot(clientX - touchStartCoords.clientX, clientY - touchStartCoords.clientY) <= MOVE_THRESHOLD) return;
			reset();
		});
		const removeTouchcancelListener = this.manager.addEventListener(element, "touchcancel.zoneless.passive", reset);
		const removeTouchendListener = this.manager.addEventListener(element, "touchend.zoneless.passive", reset);
		return () => {
			removeTouchstartListener();
			removeTouchmoveListener();
			removeTouchcancelListener();
			removeTouchendListener();
		};
	}
	dispatchLongtapEvent(element, clientX, clientY) {
		element.dispatchEvent(new LongtapEvent("longtap", {
			clientX,
			clientY,
			bubbles: false,
			cancelable: false,
			composed: false
		}));
	}
};
var TimedEventPlugin = class extends EventManagerPlugin {
	supports(event) {
		return this.regExp.test(event);
	}
	getDelay(event) {
		const match = this.regExp.exec(event);
		if (!match?.groups) throw new Error(`Invalid event: ${event}`);
		const { time, units } = match.groups;
		switch (units) {
			case "ms": return Number(time);
			case "s": return Number(time) * 1e3;
			default: throw new Error(`Invalid event: ${event}`);
		}
	}
	unwrap(event) {
		return event.replace(this.regExp, "");
	}
};
var DebounceEventPlugin = class extends TimedEventPlugin {
	constructor() {
		super(...arguments);
		this.regExp = /\.debounce~(?<time>\d+)(?<units>ms|s)/;
	}
	addEventListener(element, eventName, handler) {
		let timeout;
		const unsubscribe = this.manager.addEventListener(element, this.unwrap(eventName), (event) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				handler(event);
			}, this.getDelay(eventName));
		});
		return () => {
			clearTimeout(timeout);
			unsubscribe();
		};
	}
};
var AbstractEventPlugin = class AbstractEventPlugin extends EventManagerPlugin {
	constructor() {
		super(inject(DOCUMENT));
	}
	supports(event) {
		return event.includes(this.modifier);
	}
	unwrap(event) {
		return event.split(".").filter((v) => !this.modifier.includes(v)).join(".");
	}
	static {
		this.ɵfac = function AbstractEventPlugin_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || AbstractEventPlugin)();
		};
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: AbstractEventPlugin,
			factory: AbstractEventPlugin.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractEventPlugin, [{ type: Injectable }], () => [], null);
})();
var GLOBAL_HANDLER = new InjectionToken(ngDevMode ? "[GLOBAL_HANDLER]: Global event target handler" : "", { factory: () => {
	const document = inject(DOCUMENT);
	return (name) => name.split(".").reduce((obj, prop) => obj?.[prop], document.defaultView);
} });
var GlobalEventPlugin = class GlobalEventPlugin extends AbstractEventPlugin {
	constructor() {
		super(...arguments);
		this.handler = inject(GLOBAL_HANDLER);
		this.modifier = ">";
	}
	addEventListener(_, event, handler) {
		return this.manager.addEventListener(this.handler(event.split(">")[0]), event.split(">")?.[1] ?? "", handler);
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵGlobalEventPlugin_BaseFactory;
			return function GlobalEventPlugin_Factory(__ngFactoryType__) {
				return (ɵGlobalEventPlugin_BaseFactory || (ɵGlobalEventPlugin_BaseFactory = ɵɵgetInheritedFactory(GlobalEventPlugin)))(__ngFactoryType__ || GlobalEventPlugin);
			};
		})();
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: GlobalEventPlugin,
			factory: GlobalEventPlugin.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalEventPlugin, [{ type: Injectable }], null, null);
})();
var OptionsEventPlugin = class OptionsEventPlugin extends AbstractEventPlugin {
	constructor() {
		super(...arguments);
		this.modifier = "capture.once.passive";
	}
	supports(event) {
		return event.includes(".") && !this.unwrap(event).includes(".");
	}
	addEventListener(element, event, handler) {
		const unwrap = this.unwrap(event);
		const capture = event.includes(".capture");
		element.addEventListener(unwrap, handler, {
			capture,
			once: event.includes(".once"),
			passive: event.includes(".passive")
		});
		return () => element.removeEventListener(unwrap, handler, { capture });
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵOptionsEventPlugin_BaseFactory;
			return function OptionsEventPlugin_Factory(__ngFactoryType__) {
				return (ɵOptionsEventPlugin_BaseFactory || (ɵOptionsEventPlugin_BaseFactory = ɵɵgetInheritedFactory(OptionsEventPlugin)))(__ngFactoryType__ || OptionsEventPlugin);
			};
		})();
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: OptionsEventPlugin,
			factory: OptionsEventPlugin.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionsEventPlugin, [{ type: Injectable }], null, null);
})();
var PreventEventPlugin = class PreventEventPlugin extends AbstractEventPlugin {
	constructor() {
		super(...arguments);
		this.modifier = ".prevent";
	}
	addEventListener(element, event, handler) {
		return this.manager.addEventListener(element, this.unwrap(event), (event) => {
			event.preventDefault();
			handler(event);
		});
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵPreventEventPlugin_BaseFactory;
			return function PreventEventPlugin_Factory(__ngFactoryType__) {
				return (ɵPreventEventPlugin_BaseFactory || (ɵPreventEventPlugin_BaseFactory = ɵɵgetInheritedFactory(PreventEventPlugin)))(__ngFactoryType__ || PreventEventPlugin);
			};
		})();
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: PreventEventPlugin,
			factory: PreventEventPlugin.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreventEventPlugin, [{ type: Injectable }], null, null);
})();
var ResizePlugin = class ResizePlugin extends AbstractEventPlugin {
	constructor() {
		super(...arguments);
		this.modifier = "resize";
	}
	supports(event) {
		return event === "resize";
	}
	addEventListener(element, event, handler) {
		if (typeof ResizeObserver === "undefined" || !(element instanceof Element)) {
			element.addEventListener(event, handler);
			return () => element.removeEventListener(event, handler);
		}
		const observer = new ResizeObserver(handler);
		observer.observe(element);
		return () => observer.disconnect();
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵResizePlugin_BaseFactory;
			return function ResizePlugin_Factory(__ngFactoryType__) {
				return (ɵResizePlugin_BaseFactory || (ɵResizePlugin_BaseFactory = ɵɵgetInheritedFactory(ResizePlugin)))(__ngFactoryType__ || ResizePlugin);
			};
		})();
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: ResizePlugin,
			factory: ResizePlugin.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizePlugin, [{ type: Injectable }], null, null);
})();
var SelfEventPlugin = class SelfEventPlugin extends AbstractEventPlugin {
	constructor() {
		super(...arguments);
		this.modifier = ".self";
	}
	addEventListener(element, event, handler) {
		return this.manager.addEventListener(element, this.unwrap(event), (event) => {
			if (event.target === event.currentTarget) handler(event);
		});
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵSelfEventPlugin_BaseFactory;
			return function SelfEventPlugin_Factory(__ngFactoryType__) {
				return (ɵSelfEventPlugin_BaseFactory || (ɵSelfEventPlugin_BaseFactory = ɵɵgetInheritedFactory(SelfEventPlugin)))(__ngFactoryType__ || SelfEventPlugin);
			};
		})();
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: SelfEventPlugin,
			factory: SelfEventPlugin.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelfEventPlugin, [{ type: Injectable }], null, null);
})();
var StopEventPlugin = class StopEventPlugin extends AbstractEventPlugin {
	constructor() {
		super(...arguments);
		this.modifier = ".stop";
	}
	addEventListener(element, event, handler) {
		return this.manager.addEventListener(element, this.unwrap(event), (event) => {
			event.stopPropagation();
			handler(event);
		});
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵStopEventPlugin_BaseFactory;
			return function StopEventPlugin_Factory(__ngFactoryType__) {
				return (ɵStopEventPlugin_BaseFactory || (ɵStopEventPlugin_BaseFactory = ɵɵgetInheritedFactory(StopEventPlugin)))(__ngFactoryType__ || StopEventPlugin);
			};
		})();
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: StopEventPlugin,
			factory: StopEventPlugin.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StopEventPlugin, [{ type: Injectable }], null, null);
})();
var ThrottleEventPlugin = class extends TimedEventPlugin {
	constructor() {
		super(...arguments);
		this.regExp = /\.throttle~(?<time>\d+)(?<units>ms|s)/;
	}
	addEventListener(element, eventName, handler) {
		let timeout;
		const unsubscribe = this.manager.addEventListener(element, this.unwrap(eventName), (event) => {
			if (timeout !== void 0) return;
			handler(event);
			timeout = setTimeout(() => {
				timeout = void 0;
			}, this.getDelay(eventName));
		});
		return () => {
			clearTimeout(timeout);
			unsubscribe();
		};
	}
};
var ZonelessPlugin = class ZonelessPlugin extends AbstractEventPlugin {
	constructor() {
		super(...arguments);
		this.modifier = ".zoneless";
	}
	addEventListener(element, event, handler) {
		ZonelessPlugin.ngZone = this.manager.getZone();
		return ZonelessPlugin.ngZone?.runOutsideAngular(() => this.manager.addEventListener(element, this.unwrap(event), handler));
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵZonelessPlugin_BaseFactory;
			return function ZonelessPlugin_Factory(__ngFactoryType__) {
				return (ɵZonelessPlugin_BaseFactory || (ɵZonelessPlugin_BaseFactory = ɵɵgetInheritedFactory(ZonelessPlugin)))(__ngFactoryType__ || ZonelessPlugin);
			};
		})();
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: ZonelessPlugin,
			factory: ZonelessPlugin.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZonelessPlugin, [{ type: Injectable }], null, null);
})();
/**
* @deprecated: use {@link provideEventPlugins}
*/
var NG_EVENT_PLUGINS = [
	ZonelessPlugin,
	SelfEventPlugin,
	GlobalEventPlugin,
	OptionsEventPlugin,
	PreventEventPlugin,
	ResizePlugin,
	StopEventPlugin,
	LongtapEventPlugin,
	DebounceEventPlugin,
	ThrottleEventPlugin
].map((useClass) => ({
	provide: EVENT_MANAGER_PLUGINS,
	multi: true,
	useClass
}));
function provideEventPlugins() {
	return NG_EVENT_PLUGINS;
}
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-miscellaneous.mjs
var TUI_FONT_OFFSET = new InjectionToken(ngDevMode ? "TUI_FONT_OFFSET" : "", { factory: () => signal(0) });
function tuiEnableFontScaling() {
	return {
		provide: TUI_FONT_SIZE_HANDLER,
		useFactory: () => {
			const offset = inject(TUI_FONT_OFFSET);
			const { documentElement } = inject(DOCUMENT);
			return (size) => {
				const current = tuiClamp(size, 17, 28) - 17;
				offset.set(current);
				return documentElement.style.setProperty("--t-font-offset", String(current));
			};
		}
	};
}
var TUI_ANIMATIONS_DEFAULT_DURATION = 300;
function tuiGetDuration(speed) {
	return speed && 300 / speed;
}
var KEYS = [
	"Spacebar",
	"Backspace",
	"Delete",
	"ArrowLeft",
	"ArrowRight",
	"Left",
	"Right",
	"End",
	"Home"
];
/**
* Check if pressed key is interactive in terms of input field
*/
function tuiIsEditingKey(key = "") {
	return key.length === 1 || KEYS.includes(key);
}
/**
* @internal
*/
function tuiIsObscured(el, exceptSelector = "tui-popups") {
	return !!tuiGetElementObscures(el)?.some((el) => !el.closest(exceptSelector));
}
var DEFAULT$1 = {
	apis: "stable",
	fontScaling: true,
	scrollbars: "custom"
};
var TUI_OPTIONS = new InjectionToken(ngDevMode ? "TUI_OPTIONS" : "");
function provideTaiga(config = {}) {
	const options = {
		...DEFAULT$1,
		...config
	};
	const providers = [
		{
			provide: REMOVE_STYLES_ON_COMPONENT_DESTROY,
			useValue: false
		},
		{
			provide: TUI_OPTIONS,
			useValue: options
		},
		provideEventPlugins(),
		provideAppInitializer(() => {
			const doc = inject(DOCUMENT);
			const meta = inject(Meta);
			const mode = inject(TUI_DARK_MODE);
			if (options.scrollbars === "custom") doc.documentElement.classList.add("tui-zero-scrollbar");
			if (tuiIsPresent(options.mode)) mode.set(options.mode === "dark");
			if (options.fontScaling && !meta.getTag("name=\"text-scale\"")) meta.addTag({
				name: "text-scale",
				content: "scale"
			});
			effect(() => {
				if (mode()) doc.body.setAttribute("tuiTheme", "dark");
				else doc.body.removeAttribute("tuiTheme");
			});
		})
	];
	if (options.fontScaling) providers.push(tuiEnableFontScaling());
	return providers;
}
var TUI_LIQUID_GLASS = new InjectionToken(ngDevMode ? "TUI_LIQUID_GLASS" : "", { factory: () => {
	const { apis } = inject(TUI_OPTIONS);
	return apis !== "stable" && (apis.all || !!apis.liquidGlass);
} });
function tuiOverrideOptions(override, fallback) {
	return (directive, options) => {
		const result = directive || { ...options || fallback };
		Object.keys(override).forEach((key) => {
			result[key] = override[key];
		});
		return result;
	};
}
var SIZES = {
	xxs: 0,
	xs: 1,
	s: 2,
	m: 3,
	l: 4,
	xl: 5,
	xxl: 6
};
/**
* Compares size constants to determine if first size is bigger than the second
*
* @param size size that we need to compare
* @param biggerThanSize size to compare with, 's' by default
*/
function tuiSizeBigger(size, biggerThanSize = "s") {
	return SIZES[size] > SIZES[biggerThanSize];
}
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-cell.mjs
var [TUI_CELL_OPTIONS, tuiCellOptionsProvider] = tuiCreateOptions({
	height: "normal",
	size: "l"
});
var Styles$5 = class Styles$5 {
	static {
		this.ɵfac = function Styles_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || Styles$5)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: Styles$5,
			selectors: [["ng-component"]],
			exportAs: ["tui-cell-5.17.0"],
			decls: 0,
			vars: 0,
			template: function Styles_Template(rf, ctx) {},
			styles: ["[tuiCell]:where(*[data-tui-version=\"5.17.0\"]){--%NS%t-pad: .125rem 1rem;--%NS%t-radius: var(--%NS%tui-radius-s);transition-property:background;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;text-align:start;box-sizing:content-box;isolation:isolate;color:var(--%NS%tui-text-primary);padding:var(--%NS%t-pad);min-block-size:var(--%NS%t-block-size);border-radius:var(--%NS%t-radius)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):is(button,label):not(:disabled):active{background:var(--%NS%tui-background-neutral-1)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):disabled,[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-state=disabled]{opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):disabled>*:not([tuiTooltip]),[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-state=disabled]>*:not([tuiTooltip]){opacity:var(--%NS%tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):is(label):has(input:disabled){opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):is(label):has(input:disabled)>*:not([tuiTooltip]){opacity:var(--%NS%tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiAccessories]{position:relative;display:flex;max-block-size:var(--%NS%t-block-size);align-items:center;align-self:stretch;margin-inline-start:auto}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiCellActions][tuiCellActions]{position:absolute;z-index:1;inset-inline-end:0;padding-inline-end:inherit;--%NS%t-group-mask: none;--%NS%t-group-mask-end: none;--%NS%t-group-mask-start: none}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiCellActions][tuiCellActions]~*{transition-property:opacity;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiCellActions][tuiCellActions] button,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiCellActions][tuiCellActions] a{transition-property:opacity;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard);opacity:0}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiCellActions][tuiCellActions] button:focus-visible,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiCellActions][tuiCellActions] a:focus-visible{opacity:1}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiSubtitle]{display:flex;align-items:center;gap:.25rem;color:var(--%NS%tui-text-secondary)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle]{flex:3 7 30%;align-items:normal;text-align:start;gap:.25rem .5rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]{flex-direction:row;justify-content:space-between}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]>[tuiFade]:first-child,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]>[tuiFade]:first-child,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]>[tuiFade]:last-child,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]>[tuiFade]:last-child{flex:3 7 30%;max-inline-size:max-content;white-space:nowrap}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]>[tuiFade]:last-child,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]>[tuiFade]:last-child{flex:7 3 70%}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]{justify-content:space-between}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle]~[tuiTitle]{flex:7 3 70%;max-inline-size:max-content;margin-inline-start:auto;text-align:end;align-items:flex-end}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle]~[tuiTitle][tuiFade]{align-items:flex-start}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) tui-badge-notification[data-size=xs]{position:absolute;top:50%;transform:translateY(-50%);inset-inline-start:.375rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{--%NS%t-block-size: calc(var(--%NS%tui-height-s) - .125rem);--%NS%t-pad: .1875rem 1rem;gap:.5rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-height=spacious]{--%NS%t-pad: .4375rem 1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-height=compact]{--%NS%t-block-size: calc(var(--%NS%tui-height-s) - .25rem);--%NS%t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiTitle]{max-block-size:100%;font:var(--%NS%tui-typography-ui-s);gap:0}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiSubtitle]{font:var(--%NS%tui-typography-ui-2xs)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiAvatar]{--%NS%t-size: 1.5rem;--%NS%t-radius: var(--%NS%tui-radius-m);font:var(--%NS%tui-typography-body-m);font-size:.5625rem;margin:.1875rem 0}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{--%NS%t-block-size: calc(var(--%NS%tui-height-m) - .75rem);--%NS%t-pad: .375rem 1rem;gap:.5rem .75rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-height=spacious]{--%NS%t-pad: 1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-height=compact]{--%NS%t-block-size: calc(var(--%NS%tui-height-m) - .5rem);--%NS%t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiTitle]{font:var(--%NS%tui-typography-ui-s);gap:.0625rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiSubtitle]{font:var(--%NS%tui-typography-ui-xs)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiAvatar]{--%NS%t-size: 2rem;--%NS%t-radius: var(--%NS%tui-radius-m);align-self:flex-start}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=l]{--%NS%t-block-size: calc(var(--%NS%tui-height-l) - 1rem);--%NS%t-pad: .5rem 1rem;--%NS%t-radius: var(--%NS%tui-radius-l);gap:.5rem 1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=l][data-height=spacious]{--%NS%t-pad: 1.25rem 1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=l][data-height=compact]{--%NS%t-block-size: calc(var(--%NS%tui-height-l) - 1rem);--%NS%t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=l] [tuiAvatar]{--%NS%t-size: 2.5rem;font:var(--%NS%tui-typography-body-m);font-weight:700;align-self:flex-start}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover [tuiCellActions]~*{opacity:0}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover [tuiCellActions] button,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover [tuiCellActions] a,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover [tuiCellActions] label{opacity:1}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):focus-visible{outline:.125rem solid var(--%NS%tui-border-focus);outline-offset:-.125rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[tuiCellStretch]{inline-size:100%;margin-inline:-1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[tuiCellResponsive]{display:grid;grid-auto-flow:column;grid-auto-columns:fit-content(100%);grid-template-columns:auto 1fr}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[tuiCellResponsive]:has(>[tuiTitle]:first-child){grid-template-columns:1fr}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[tuiCellResponsive]>*{grid-row:1}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[tuiCellResponsive]._rearranged [tuiAccessories]{grid-row:2}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[tuiCellResponsive]._rearranged [tuiTitle] [tuiTitle],[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[tuiCellResponsive]._rearranged [tuiTitle] [tuiSubtitle]{display:grid}@media(hover:hover)and (pointer:fine){a[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover:not(:disabled,[data-state=disabled]),button[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover:not(:disabled,[data-state=disabled]),label[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover:not(:disabled,[data-state=disabled]){background:var(--%NS%tui-background-neutral-1);cursor:pointer}label[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover:not(:has(input:disabled)){background:var(--%NS%tui-background-neutral-1);cursor:pointer}}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles$5, [{
		type: Component,
		args: [{
			template: "",
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			exportAs: `tui-cell-5.17.0`,
			styles: ["[tuiCell]:where(*[data-tui-version=\"5.17.0\"]){--t-pad: .125rem 1rem;--t-radius: var(--tui-radius-s);transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;text-align:start;box-sizing:content-box;isolation:isolate;color:var(--tui-text-primary);padding:var(--t-pad);min-block-size:var(--t-block-size);border-radius:var(--t-radius)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):is(button,label):not(:disabled):active{background:var(--tui-background-neutral-1)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):disabled,[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-state=disabled]{opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):disabled>*:not([tuiTooltip]),[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-state=disabled]>*:not([tuiTooltip]){opacity:var(--tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):is(label):has(input:disabled){opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):is(label):has(input:disabled)>*:not([tuiTooltip]){opacity:var(--tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiAccessories]{position:relative;display:flex;max-block-size:var(--t-block-size);align-items:center;align-self:stretch;margin-inline-start:auto}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiCellActions][tuiCellActions]{position:absolute;z-index:1;inset-inline-end:0;padding-inline-end:inherit;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiCellActions][tuiCellActions]~*{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiCellActions][tuiCellActions] button,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiCellActions][tuiCellActions] a{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);opacity:0}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiCellActions][tuiCellActions] button:focus-visible,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiCellActions][tuiCellActions] a:focus-visible{opacity:1}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiSubtitle]{display:flex;align-items:center;gap:.25rem;color:var(--tui-text-secondary)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle]{flex:3 7 30%;align-items:normal;text-align:start;gap:.25rem .5rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]{flex-direction:row;justify-content:space-between}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]>[tuiFade]:first-child,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]>[tuiFade]:first-child,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]>[tuiFade]:last-child,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]>[tuiFade]:last-child{flex:3 7 30%;max-inline-size:max-content;white-space:nowrap}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]>[tuiFade]:last-child,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]>[tuiFade]:last-child{flex:7 3 70%}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]{justify-content:space-between}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle]~[tuiTitle]{flex:7 3 70%;max-inline-size:max-content;margin-inline-start:auto;text-align:end;align-items:flex-end}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle]~[tuiTitle][tuiFade]{align-items:flex-start}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]) tui-badge-notification[data-size=xs]{position:absolute;top:50%;transform:translateY(-50%);inset-inline-start:.375rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{--t-block-size: calc(var(--tui-height-s) - .125rem);--t-pad: .1875rem 1rem;gap:.5rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-height=spacious]{--t-pad: .4375rem 1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-height=compact]{--t-block-size: calc(var(--tui-height-s) - .25rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiTitle]{max-block-size:100%;font:var(--tui-typography-ui-s);gap:0}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-ui-2xs)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiAvatar]{--t-size: 1.5rem;--t-radius: var(--tui-radius-m);font:var(--tui-typography-body-m);font-size:.5625rem;margin:.1875rem 0}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{--t-block-size: calc(var(--tui-height-m) - .75rem);--t-pad: .375rem 1rem;gap:.5rem .75rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-height=spacious]{--t-pad: 1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-height=compact]{--t-block-size: calc(var(--tui-height-m) - .5rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiTitle]{font:var(--tui-typography-ui-s);gap:.0625rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-ui-xs)}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiAvatar]{--t-size: 2rem;--t-radius: var(--tui-radius-m);align-self:flex-start}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=l]{--t-block-size: calc(var(--tui-height-l) - 1rem);--t-pad: .5rem 1rem;--t-radius: var(--tui-radius-l);gap:.5rem 1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=l][data-height=spacious]{--t-pad: 1.25rem 1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=l][data-height=compact]{--t-block-size: calc(var(--tui-height-l) - 1rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[data-size=l] [tuiAvatar]{--t-size: 2.5rem;font:var(--tui-typography-body-m);font-weight:700;align-self:flex-start}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover [tuiCellActions]~*{opacity:0}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover [tuiCellActions] button,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover [tuiCellActions] a,[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover [tuiCellActions] label{opacity:1}[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.125rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[tuiCellStretch]{inline-size:100%;margin-inline:-1rem}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[tuiCellResponsive]{display:grid;grid-auto-flow:column;grid-auto-columns:fit-content(100%);grid-template-columns:auto 1fr}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[tuiCellResponsive]:has(>[tuiTitle]:first-child){grid-template-columns:1fr}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[tuiCellResponsive]>*{grid-row:1}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[tuiCellResponsive]._rearranged [tuiAccessories]{grid-row:2}[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[tuiCellResponsive]._rearranged [tuiTitle] [tuiTitle],[tuiCell]:where(*[data-tui-version=\"5.17.0\"])[tuiCellResponsive]._rearranged [tuiTitle] [tuiSubtitle]{display:grid}@media(hover:hover)and (pointer:fine){a[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover:not(:disabled,[data-state=disabled]),button[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover:not(:disabled,[data-state=disabled]),label[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover:not(:disabled,[data-state=disabled]){background:var(--tui-background-neutral-1);cursor:pointer}label[tuiCell]:where(*[data-tui-version=\"5.17.0\"]):hover:not(:has(input:disabled)){background:var(--tui-background-neutral-1);cursor:pointer}}\n"]
		}]
	}], null, null);
})();
var TuiCell = class TuiCell {
	constructor() {
		this.nothing = tuiWithStyles(Styles$5);
		this.options = inject(TUI_CELL_OPTIONS);
		this.size = input(this.options.size, { alias: "tuiCell" });
		this.height = input(this.options.height, { alias: "tuiCellHeight" });
	}
	static {
		this.ɵfac = function TuiCell_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiCell)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiCell,
			selectors: [[
				"",
				"tuiCell",
				"",
				5,
				"ng-template"
			]],
			hostAttrs: [
				"data-tui-version",
				"5.17.0",
				"tuiCell",
				""
			],
			hostVars: 2,
			hostBindings: function TuiCell_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵattribute("data-height", ctx.height())("data-size", ctx.size() || ctx.options.size || "l");
			},
			inputs: {
				size: [
					1,
					"tuiCell",
					"size"
				],
				height: [
					1,
					"tuiCellHeight",
					"height"
				]
			},
			features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({ size: "s" })])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCell, [{
		type: Directive,
		args: [{
			selector: "[tuiCell]:not(ng-template)",
			providers: [tuiButtonOptionsProvider({ size: "s" })],
			host: {
				"data-tui-version": "5.17.0",
				tuiCell: "",
				"[attr.data-height]": "height()",
				"[attr.data-size]": "size() || options.size || \"l\""
			}
		}]
	}], null, null);
})();
var TuiCellResponsive = class TuiCellResponsive {
	constructor() {
		this.offset = inject(TUI_FONT_OFFSET);
	}
	static {
		this.ɵfac = function TuiCellResponsive_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiCellResponsive)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiCellResponsive,
			selectors: [[
				"",
				"tuiCell",
				"",
				"tuiCellResponsive",
				""
			]],
			hostVars: 2,
			hostBindings: function TuiCellResponsive_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵclassProp("_rearranged", ctx.offset() > 10);
			}
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCellResponsive, [{
		type: Directive,
		args: [{
			selector: "[tuiCell][tuiCellResponsive]",
			host: { "[class._rearranged]": "offset() > 10" }
		}]
	}], null, null);
})();
var TuiCellStretch = class TuiCellStretch {
	constructor() {
		this.isMobile = inject(WA_IS_MOBILE);
	}
	static {
		this.ɵfac = function TuiCellStretch_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiCellStretch)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiCellStretch,
			selectors: [[
				"",
				"tuiCell",
				"",
				"tuiCellStretch",
				""
			]],
			hostVars: 2,
			hostBindings: function TuiCellStretch_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵstyleProp("border-radius", ctx.isMobile ? 0 : null);
			}
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCellStretch, [{
		type: Directive,
		args: [{
			selector: "[tuiCell][tuiCellStretch]",
			host: { "[style.border-radius]": "isMobile ? 0 : null" }
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-native-validator.mjs
var TuiNativeValidator = class TuiNativeValidator {
	constructor() {
		this.el = tuiInjectElement();
		this.doc = inject(DOCUMENT);
		this.control$ = new BehaviorSubject(null);
		this.sub = this.control$.pipe(switchMap((control) => control?.events || of(null)), delay(0), tuiZonefree(), tuiTakeUntilDestroyed()).subscribe(() => this.handleValidation());
		this.tuiNativeValidator = input("Invalid");
		this.id = "";
	}
	get control() {
		return this.control$.value;
	}
	validate(control) {
		this.control$.next(control);
		return null;
	}
	handleValidation() {
		const invalid = !!this.control?.touched && this.control?.invalid;
		this.el.closest("tui-textfield")?.classList.toggle("tui-invalid", invalid);
		this.el.setCustomValidity?.(invalid ? this.tuiNativeValidator() : "");
		this.el.setAttribute("aria-invalid", String(invalid));
		if (!this.id && invalid) {
			this.doc.dispatchEvent(new CustomEvent("tui-validator", { detail: this }));
			this.el.setAttribute("aria-describedby", this.id);
		}
	}
	static {
		this.ɵfac = function TuiNativeValidator_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiNativeValidator)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiNativeValidator,
			selectors: [[
				"",
				"tuiNativeValidator",
				""
			]],
			hostBindings: function TuiNativeValidator_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("focusout", function TuiNativeValidator_focusout_HostBindingHandler() {
					return ctx.handleValidation();
				});
			},
			inputs: { tuiNativeValidator: [1, "tuiNativeValidator"] },
			features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, TuiNativeValidator, true)])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeValidator, [{
		type: Directive,
		args: [{
			selector: "[tuiNativeValidator]",
			providers: [tuiProvide(NG_VALIDATORS, TuiNativeValidator, true)],
			host: { "(focusout)": "handleValidation()" }
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-radio.mjs
var [TUI_RADIO_OPTIONS, tuiRadioOptionsProvider] = tuiCreateOptions({
	size: "m",
	appearance: ({ checked }) => checked ? "primary" : "outline-grayscale"
});
var TuiRadioComponent = class TuiRadioComponent {
	constructor() {
		this.destroyRef = inject(DestroyRef);
		this.el = tuiInjectElement();
		this.options = inject(TUI_RADIO_OPTIONS);
		this.appearance = tuiAppearance(this.options.appearance(this.el));
		this.control = inject(NgControl, {
			self: true,
			optional: true
		});
		this.size = input(this.options.size);
	}
	ngOnInit() {
		tuiControlValue(this.control).pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
			const fix = this.control instanceof NgModel && value == null ? this.control.model : value;
			this.el.indeterminate = fix == null && this.el.matches("[tuiCheckbox]");
			this.ngDoCheck();
		});
	}
	ngDoCheck() {
		this.appearance.set(this.options.appearance(this.el));
	}
	static {
		this.ɵfac = function TuiRadioComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiRadioComponent)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiRadioComponent,
			selectors: [[
				"input",
				"type",
				"radio",
				"tuiRadio",
				""
			]],
			hostVars: 4,
			hostBindings: function TuiRadioComponent_HostBindings(rf, ctx) {
				if (rf & 2) {
					ɵɵdomProperty("disabled", !ctx.control || ctx.control.disabled);
					ɵɵattribute("data-size", ctx.size());
					ɵɵclassProp("_readonly", !ctx.control);
				}
			},
			inputs: { size: [1, "size"] },
			features: [ɵɵHostDirectivesFeature([{
				directive: TuiAppearance,
				inputs: [
					"tuiAppearanceState",
					"tuiAppearanceState",
					"tuiAppearanceFocus",
					"tuiAppearanceFocus",
					"tuiAppearanceMode",
					"tuiAppearanceMode"
				]
			}, TuiNativeValidator])],
			decls: 0,
			vars: 0,
			template: function TuiRadioComponent_Template(rf, ctx) {},
			styles: ["[tuiRadio]:where(*[data-tui-version=\"5.17.0\"]){--%NS%t-size: 1.5rem;transition-property:background,box-shadow;transition-duration:calc(var(--%NS%tui-duration) / 2);transition-timing-function:var(--%NS%tui-curve-productive-standard);inline-size:var(--%NS%t-size);block-size:var(--%NS%t-size);cursor:pointer;margin:0;flex-shrink:0;border-radius:100%;color:var(--%NS%tui-text-primary-on-accent-1)}[tuiRadio]:where(*[data-tui-version=\"5.17.0\"]):disabled._readonly._readonly{opacity:1}[tuiRadio]:where(*[data-tui-version=\"5.17.0\"]):before{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:\"\";margin:auto;border-radius:100%;background:currentColor;transform:scale(0);transition-property:transform}[tuiRadio]:where(*[data-tui-version=\"5.17.0\"]):checked:before{transform:scale(.5)}[tuiRadio]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{--%NS%t-size: 1rem}[tuiRadio]:where(*[data-tui-version=\"5.17.0\"]):invalid:not([data-mode]),[tuiRadio]:where(*[data-tui-version=\"5.17.0\"])[data-mode~=invalid]{color:#fff}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRadioComponent, [{
		type: Component,
		args: [{
			selector: "input[type=\"radio\"][tuiRadio]",
			template: "",
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			hostDirectives: [{
				directive: TuiAppearance,
				inputs: [
					"tuiAppearanceState",
					"tuiAppearanceFocus",
					"tuiAppearanceMode"
				]
			}, TuiNativeValidator],
			host: {
				"[attr.data-size]": "size()",
				"[class._readonly]": "!control",
				"[disabled]": "!control || control.disabled"
			},
			styles: ["[tuiRadio]:where(*[data-tui-version=\"5.17.0\"]){--t-size: 1.5rem;transition-property:background,box-shadow;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);inline-size:var(--t-size);block-size:var(--t-size);cursor:pointer;margin:0;flex-shrink:0;border-radius:100%;color:var(--tui-text-primary-on-accent-1)}[tuiRadio]:where(*[data-tui-version=\"5.17.0\"]):disabled._readonly._readonly{opacity:1}[tuiRadio]:where(*[data-tui-version=\"5.17.0\"]):before{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:\"\";margin:auto;border-radius:100%;background:currentColor;transform:scale(0);transition-property:transform}[tuiRadio]:where(*[data-tui-version=\"5.17.0\"]):checked:before{transform:scale(.5)}[tuiRadio]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{--t-size: 1rem}[tuiRadio]:where(*[data-tui-version=\"5.17.0\"]):invalid:not([data-mode]),[tuiRadio]:where(*[data-tui-version=\"5.17.0\"])[data-mode~=invalid]{color:#fff}\n"]
		}]
	}], null, null);
})();
var TuiRadioDirective = class TuiRadioDirective {
	constructor() {
		this.identityMatcher = input(TUI_DEFAULT_IDENTITY_MATCHER);
		const accessor = inject(RadioControlValueAccessor);
		const writeValue = accessor.writeValue.bind(accessor);
		accessor.writeValue = (value) => {
			if (this.identityMatcher()(value, accessor.value)) writeValue(accessor.value);
			else writeValue(value);
		};
	}
	static {
		this.ɵfac = function TuiRadioDirective_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiRadioDirective)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiRadioDirective,
			selectors: [[
				"input",
				"type",
				"radio",
				"tuiRadio",
				"",
				"identityMatcher",
				""
			]],
			inputs: { identityMatcher: [1, "identityMatcher"] }
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRadioDirective, [{
		type: Directive,
		args: [{ selector: "input[type=\"radio\"][tuiRadio][identityMatcher]" }]
	}], () => [], null);
})();
var TuiRadio = [TuiRadioComponent, TuiRadioDirective];
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-checkbox.mjs
var [TUI_CHECKBOX_OPTIONS, tuiCheckboxOptionsProvider] = tuiCreateOptions({
	size: "m",
	appearance: (el) => el.checked || el.indeterminate ? "primary" : "outline-grayscale",
	icons: {
		checked: () => "@tui.check",
		indeterminate: () => "@tui.minus"
	}
});
var TuiCheckbox = class TuiCheckbox extends TuiRadioComponent {
	constructor() {
		super(...arguments);
		this.check = tuiIconStart(computed(() => this.options.icons.checked(this.size())));
		this.indeterminate = tuiIconEnd(computed(() => this.options.icons.indeterminate(this.size())));
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiCheckbox_BaseFactory;
			return function TuiCheckbox_Factory(__ngFactoryType__) {
				return (ɵTuiCheckbox_BaseFactory || (ɵTuiCheckbox_BaseFactory = ɵɵgetInheritedFactory(TuiCheckbox)))(__ngFactoryType__ || TuiCheckbox);
			};
		})();
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiCheckbox,
			selectors: [[
				"input",
				"type",
				"checkbox",
				"tuiCheckbox",
				""
			]],
			features: [
				ɵɵProvidersFeature([tuiProvide(TUI_RADIO_OPTIONS, TUI_CHECKBOX_OPTIONS)]),
				ɵɵHostDirectivesFeature([TuiIcons]),
				ɵɵInheritDefinitionFeature
			],
			decls: 0,
			vars: 0,
			template: function TuiCheckbox_Template(rf, ctx) {},
			styles: ["[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]){--%NS%t-size: 1.5rem;--%NS%t-radius: var(--%NS%tui-radius-s);inline-size:var(--%NS%t-size);block-size:var(--%NS%t-size);border-radius:var(--%NS%t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]):before{position:absolute;block-size:100%;inline-size:100%;font-size:1rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\"></svg>');mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\"></svg>');transform:scale(0);transition:transform var(--%NS%tui-duration) ease-in-out,mask 0s var(--%NS%tui-duration) ease-in-out}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]):after{display:none}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]):disabled._readonly._readonly{opacity:1;pointer-events:none}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]):checked:before,[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]):indeterminate:before{-webkit-mask-image:var(--%NS%t-icon-start);mask-image:var(--%NS%t-icon-start);transform:scale(1);transition:transform var(--%NS%tui-duration) ease-in-out,mask 0s ease-in-out;transition-duration:inherit}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]):indeterminate:before{-webkit-mask-image:var(--%NS%t-icon-end);mask-image:var(--%NS%t-icon-end)}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{--%NS%t-size: 1rem;--%NS%t-radius: var(--%NS%tui-radius-xs)}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:before{font-size:.875rem}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]):invalid:not([data-mode]),[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"])[data-mode~=invalid]{color:#fff}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCheckbox, [{
		type: Component,
		args: [{
			selector: "input[type=\"checkbox\"][tuiCheckbox]",
			template: "",
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			providers: [tuiProvide(TUI_RADIO_OPTIONS, TUI_CHECKBOX_OPTIONS)],
			hostDirectives: [TuiIcons],
			styles: ["[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]){--t-size: 1.5rem;--t-radius: var(--tui-radius-s);inline-size:var(--t-size);block-size:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]):before{position:absolute;block-size:100%;inline-size:100%;font-size:1rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\"></svg>');mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\"></svg>');transform:scale(0);transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]):after{display:none}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]):disabled._readonly._readonly{opacity:1;pointer-events:none}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]):checked:before,[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]):indeterminate:before{-webkit-mask-image:var(--t-icon-start);mask-image:var(--t-icon-start);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition-duration:inherit}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]):indeterminate:before{-webkit-mask-image:var(--t-icon-end);mask-image:var(--t-icon-end)}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:before{font-size:.875rem}[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"]):invalid:not([data-mode]),[tuiCheckbox]:where(*[data-tui-version=\"5.17.0\"])[data-mode~=invalid]{color:#fff}\n"]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-focus.mjs
function tuiFocusedIn(node) {
	return toSignal(merge(fromEvent(node, "focus", { capture: true }).pipe(map(TUI_TRUE_HANDLER)), fromEvent(node, "blur", { capture: true }).pipe(map(TUI_FALSE_HANDLER))).pipe(observeOn(tuiUntrackedScheduler)), { initialValue: false });
}
/**
* Checks for signs that element can be focused with keyboard. tabIndex above 0 is ignored to
* only target natural focus order. Not checking the possibility of an element to
* be focused, for example element can have display: none applied to it or any other
* circumstances could prevent actual focus.
*/
function tuiIsFocusable(element) {
	if (element.matches(":disabled") || element.getAttribute("tabIndex") === "-1") return false;
	if (tuiIsHTMLElement(element) && element.isContentEditable || element.getAttribute("tabIndex") === "0") return true;
	switch (element.tagName) {
		case "A":
		case "LINK": return element.hasAttribute("href");
		case "AUDIO":
		case "VIDEO": return element.hasAttribute("controls");
		case "BUTTON":
		case "SELECT":
		case "TEXTAREA": return true;
		case "INPUT": return element.getAttribute("type") !== "hidden";
		default: return false;
	}
}
/**
* @description:
* Finds the closest element that can be focused with a keyboard or mouse in theory
*/
function tuiGetClosestFocusable({ initial, root, previous = false }) {
	if (!root.ownerDocument) return null;
	const treeWalker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, svgNodeFilter);
	treeWalker.currentNode = initial;
	do {
		if (tuiIsHTMLElement(treeWalker.currentNode)) initial = treeWalker.currentNode;
		if (tuiIsHTMLElement(initial) && tuiIsFocusable(initial)) return initial;
	} while (previous ? treeWalker.previousNode() : treeWalker.nextNode());
	return null;
}
/**
* Returns current active element, including shadow dom
*
* @return element or null
*/
function tuiGetFocused({ activeElement }) {
	if (!activeElement?.shadowRoot) return activeElement;
	let element = activeElement.shadowRoot.activeElement;
	while (element?.shadowRoot) element = element.shadowRoot.activeElement;
	return element;
}
/**
* Checks if element is focused.
*
* Could return true even after blur since element remains focused if you switch away from a browser tab.
*
* @param node or null (as a common return value of DOM nodes walking)
* @return true if focused
*/
function tuiIsFocused(node) {
	return !!node?.ownerDocument && tuiGetFocused(node.ownerDocument) === node && node.ownerDocument.hasFocus();
}
/**
* Checks if focused element is within given element.
*
* @param node
* @return true if focused node is contained within element
*/
function tuiIsFocusedIn(node) {
	const focused = node?.ownerDocument && tuiGetFocused(node.ownerDocument);
	return !!focused && node.contains(focused) && node.ownerDocument?.hasFocus();
}
/**
* Utility method for moving focus in a list of elements
*
* @param currentIndex currently focused index
* @param elements array of focusable elements
* @param step a step to move focus by, typically -1 or 1
*/
function tuiMoveFocus(currentIndex, elements, step) {
	currentIndex += step;
	while (currentIndex >= 0 && currentIndex < elements.length) {
		elements[currentIndex]?.focus();
		if (tuiIsFocused(elements[currentIndex])) return;
		currentIndex += step;
	}
}
//#endregion
//#region node_modules/@taiga-ui/polymorpheus/fesm2022/taiga-ui-polymorpheus.mjs
/**
* Use this token to access context within your components when
* instantiating them through {@link PolymorpheusOutlet}
*/
var POLYMORPHEUS_CONTEXT = new InjectionToken(ngDevMode ? "POLYMORPHEUS_CONTEXT" : "");
function provideContext(useValue) {
	return {
		provide: POLYMORPHEUS_CONTEXT,
		useValue
	};
}
function injectContext(options = {}) {
	return inject(POLYMORPHEUS_CONTEXT, options);
}
/**
* Wrapper class for a component that will be used as content for {@link PolymorpheusOutlet}
*
* @param component — an Angular component to be dynamically created
* @param injector — optional {@link Injector} for lazy loaded module case
*/
var PolymorpheusComponent = class {
	constructor(component, i) {
		this.component = component;
		this.i = i;
	}
	createInjector(injector, useValue) {
		return Injector.create({
			parent: this.i || injector,
			providers: useValue == null ? [] : [provideContext(useValue)]
		});
	}
};
var PolymorpheusContext = class {
	constructor($implicit) {
		this.$implicit = $implicit;
	}
	get polymorpheusOutlet() {
		return this.$implicit;
	}
};
function isPrimitive(value) {
	return Object(value) !== value;
}
/**
* ng-template wrapper directive also stores {@link ChangeDetectorRef} to properly handle change detection.
*/
var PolymorpheusTemplate = class PolymorpheusTemplate {
	constructor(template = inject(TemplateRef, { self: true }), cdr = inject(ChangeDetectorRef)) {
		this.template = template;
		this.cdr = cdr;
		this.polymorpheus = "";
	}
	static ngTemplateContextGuard(_dir, _ctx) {
		return true;
	}
	check() {
		this.cdr.markForCheck();
	}
	/** @nocollapse */
	static {
		this.ɵfac = function PolymorpheusTemplate_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || PolymorpheusTemplate)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ChangeDetectorRef));
		};
	}
	/** @nocollapse */
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: PolymorpheusTemplate,
			selectors: [[
				"ng-template",
				"polymorpheus",
				""
			]],
			inputs: { polymorpheus: "polymorpheus" },
			exportAs: ["polymorpheus"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusTemplate, [{
		type: Directive,
		args: [{
			selector: "ng-template[polymorpheus]",
			inputs: ["polymorpheus"],
			exportAs: "polymorpheus"
		}]
	}], () => [{ type: TemplateRef }, { type: ChangeDetectorRef }], null);
})();
var PolymorpheusOutlet = class PolymorpheusOutlet {
	constructor() {
		this.vcr = inject(ViewContainerRef);
		this.i = inject(INJECTOR$1);
		this.t = inject(TemplateRef);
		this.content = "";
	}
	static ngTemplateContextGuard(_dir, _ctx) {
		return true;
	}
	ngOnChanges({ content }) {
		const context = this.getContext();
		const component = isComponent(this.content);
		this.update();
		this.c?.injector.get(ChangeDetectorRef).markForCheck();
		if (!content) return;
		this.vcr.clear();
		const proxy = new Proxy(ensureContext(context), { get: (_, key) => ensureContext(component ? this.context : this.getContext())?.[key] });
		if (isComponent(this.content)) {
			this.process(this.content, context == null ? void 0 : proxy);
			this.update();
		} else if ((context instanceof PolymorpheusContext && context.$implicit) != null) this.vcr.createEmbeddedView(this.template, proxy, { injector: this.i });
	}
	ngDoCheck() {
		if (isDirective(this.content)) this.content.check();
	}
	get template() {
		if (isDirective(this.content)) return this.content.template;
		return this.content instanceof TemplateRef ? this.content : this.t;
	}
	getContext() {
		return isTemplate(this.content) || isComponent(this.content) ? this.context : new PolymorpheusContext(typeof this.content === "function" ? this.content(this.context ?? {}) : this.content);
	}
	process(content, proxy) {
		this.c = this.vcr.createComponent(content.component, { injector: content.createInjector(this.i, proxy) });
	}
	update() {
		if (typeof this.context !== "object" || !isComponent(this.content)) return;
		const { inputs = [] } = reflectComponentType(this.content.component) || {};
		for (const { templateName } of inputs) if (templateName in (this.context ?? {})) this.c?.setInput(templateName, this.context?.[templateName]);
	}
	/** @nocollapse */
	static {
		this.ɵfac = function PolymorpheusOutlet_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || PolymorpheusOutlet)();
		};
	}
	/** @nocollapse */
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: PolymorpheusOutlet,
			selectors: [[
				"",
				"polymorpheusOutlet",
				""
			]],
			inputs: {
				content: [
					0,
					"polymorpheusOutlet",
					"content"
				],
				context: [
					0,
					"polymorpheusOutletContext",
					"context"
				]
			},
			features: [ɵɵNgOnChangesFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusOutlet, [{
		type: Directive,
		args: [{
			selector: "[polymorpheusOutlet]",
			inputs: ["content: polymorpheusOutlet", "context: polymorpheusOutletContext"]
		}]
	}], null, null);
})();
function isDirective(content) {
	return content instanceof PolymorpheusTemplate;
}
function isComponent(content) {
	return content instanceof PolymorpheusComponent;
}
function isTemplate(content) {
	return isDirective(content) || content instanceof TemplateRef;
}
function ensureContext(context) {
	return isPrimitive(context) ? new PolymorpheusContext(context) : context;
}
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-vcr.mjs
var TuiVCR = class TuiVCR {
	constructor() {
		this.vcr = inject(ViewContainerRef);
	}
	static {
		this.ɵfac = function TuiVCR_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiVCR)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiVCR,
			selectors: [[
				"",
				"tuiVCR",
				""
			]]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVCR, [{
		type: Directive,
		args: [{ selector: "[tuiVCR]" }]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-portals.mjs
var TuiPortal = class TuiPortal {
	constructor(service) {
		this.service = service;
		this.injector = inject(INJECTOR$1);
	}
	open(content, options = {}) {
		return new Observable(($implicit) => this.add(new PolymorpheusComponent(this.component, Injector.create({
			parent: this.injector,
			providers: [{
				provide: POLYMORPHEUS_CONTEXT,
				useValue: {
					...this.options,
					...options,
					content,
					$implicit,
					createdAt: Date.now(),
					id: tuiGenerateId(),
					completeWith: (v) => {
						$implicit.next(v);
						$implicit.complete();
					}
				}
			}]
		}))));
	}
	add(component) {
		const ref = this.service.add(component);
		return () => ref.destroy();
	}
	static {
		this.ɵfac = function TuiPortal_Factory(__ngFactoryType__) {
			ɵɵinvalidFactory();
		};
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiPortal,
			factory: TuiPortal.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortal, [{ type: Injectable }], () => [{ type: void 0 }], null);
})();
function tuiAsPortal(portal) {
	return tuiProvide(TuiPortal, portal);
}
var TuiPortalDirective = class TuiPortalDirective extends PolymorpheusTemplate {
	constructor() {
		super(...arguments);
		this.service = inject(TuiPortal);
		this.options = input({});
		this.open = input(false);
		this.openChange = outputFromObservable(toObservable$1(this.open).pipe(tuiIfMap(() => this.service.open(this, this.options()).pipe(ignoreElements(), endWith(false))), share()));
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiPortalDirective_BaseFactory;
			return function TuiPortalDirective_Factory(__ngFactoryType__) {
				return (ɵTuiPortalDirective_BaseFactory || (ɵTuiPortalDirective_BaseFactory = ɵɵgetInheritedFactory(TuiPortalDirective)))(__ngFactoryType__ || TuiPortalDirective);
			};
		})();
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiPortalDirective,
			inputs: {
				options: [1, "options"],
				open: [1, "open"]
			},
			outputs: { openChange: "openChange" },
			features: [ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalDirective, [{ type: Directive }], null, null);
})();
var TuiPortalService = class TuiPortalService {
	attach(host) {
		this.host = host;
	}
	add(content, context) {
		if (!this.host) throw new TuiNoHostException();
		return content instanceof PolymorpheusComponent ? this.host.addComponent(content) : this.host.addTemplate(content, context);
	}
	static {
		this.ɵfac = function TuiPortalService_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiPortalService)();
		};
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiPortalService,
			factory: TuiPortalService.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalService, [{ type: Injectable }], null, null);
})();
var TuiNoHostException = class extends Error {
	constructor() {
		super(ngDevMode ? "Portals cannot be used without TuiPortals component; perhaps you forgot to wrap your application with tui-root." : "");
	}
};
var TuiPortals = class TuiPortals {
	constructor() {
		this.injector = inject(INJECTOR$1);
		this.anchor = viewChild.required(TuiVCR);
		inject(TuiPortalService).attach(this);
	}
	addComponent(component) {
		const injector = component.createInjector(this.injector);
		const ref = this.anchor().vcr.createComponent(component.component, { injector });
		ref.changeDetectorRef.detectChanges();
		return ref;
	}
	addTemplate(templateRef, context) {
		return this.anchor().vcr.createEmbeddedView(templateRef, context);
	}
	static {
		this.ɵfac = function TuiPortals_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiPortals)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiPortals,
			viewQuery: function TuiPortals_Query(rf, ctx) {
				if (rf & 1) ɵɵviewQuerySignal(ctx.anchor, TuiVCR, 5);
				if (rf & 2) ɵɵqueryAdvance();
			}
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortals, [{ type: Directive }], () => [], null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-popup.mjs
var _c0$9 = ["*"];
var TuiPopupService = class TuiPopupService extends TuiPortalService {
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiPopupService_BaseFactory;
			return function TuiPopupService_Factory(__ngFactoryType__) {
				return (ɵTuiPopupService_BaseFactory || (ɵTuiPopupService_BaseFactory = ɵɵgetInheritedFactory(TuiPopupService)))(__ngFactoryType__ || TuiPopupService);
			};
		})();
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiPopupService,
			factory: TuiPopupService.ɵfac,
			providedIn: "root"
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopupService, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var TUI_CDR = "_tuiCdr";
var TuiPopups = class TuiPopups extends TuiPortals {
	ngAfterViewChecked() {
		for (let i = 0; i < this.anchor().vcr.length; i++) {
			const ref = this.anchor().vcr.get(i);
			if (isEmbeddedViewRef(ref)) ref.context?.[TUI_CDR]?.markForCheck();
		}
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiPopups_BaseFactory;
			return function TuiPopups_Factory(__ngFactoryType__) {
				return (ɵTuiPopups_BaseFactory || (ɵTuiPopups_BaseFactory = ɵɵgetInheritedFactory(TuiPopups)))(__ngFactoryType__ || TuiPopups);
			};
		})();
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiPopups,
			selectors: [["tui-popups"]],
			features: [ɵɵProvidersFeature([tuiProvide(TuiPortalService, TuiPopupService)]), ɵɵInheritDefinitionFeature],
			ngContentSelectors: _c0$9,
			decls: 2,
			vars: 0,
			consts: [["tuiVCR", ""]],
			template: function TuiPopups_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵprojection(0);
					ɵɵelementContainer(1, 0);
				}
			},
			dependencies: [TuiVCR],
			styles: ["[_nghost-%COMP%]{position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;display:grid;grid-template-rows:repeat(14,min-content) 1fr;pointer-events:none;overflow:hidden;overflow-wrap:break-word;box-sizing:border-box;padding:env(safe-area-inset-top) env(safe-area-inset-left) env(safe-area-inset-bottom) env(safe-area-inset-right)}[_nghost-%COMP%]    >*{pointer-events:auto}[_nghost-%COMP%]:after{content:\"\";grid-row:15}"],
			changeDetection: 1
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopups, [{
		type: Component,
		args: [{
			selector: "tui-popups",
			imports: [TuiVCR],
			template: "<ng-content/><ng-container tuiVCR />",
			changeDetection: ChangeDetectionStrategy.Default,
			providers: [tuiProvide(TuiPortalService, TuiPopupService)],
			styles: [":host{position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;display:grid;grid-template-rows:repeat(14,min-content) 1fr;pointer-events:none;overflow:hidden;overflow-wrap:break-word;box-sizing:border-box;padding:env(safe-area-inset-top) env(safe-area-inset-left) env(safe-area-inset-bottom) env(safe-area-inset-right)}:host ::ng-deep>*{pointer-events:auto}:host:after{content:\"\";grid-row:15}\n"]
		}]
	}], null, null);
})();
function isEmbeddedViewRef(ref) {
	return !!ref && "context" in ref;
}
var TuiPopup = class TuiPopup {
	constructor() {
		this.cdr = inject(ChangeDetectorRef);
		this.template = inject(TemplateRef);
		this.service = inject(TuiPopupService);
		this.show = input(false, { alias: "tuiPopup" });
	}
	ngOnChanges() {
		this.ref?.destroy();
		if (this.show()) this.ref = this.service.add(this.template, { [TUI_CDR]: this.cdr });
	}
	ngOnDestroy() {
		this.ref?.destroy();
	}
	static {
		this.ɵfac = function TuiPopup_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiPopup)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiPopup,
			selectors: [[
				"ng-template",
				"tuiPopup",
				""
			]],
			inputs: { show: [
				1,
				"tuiPopup",
				"show"
			] },
			features: [ɵɵNgOnChangesFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopup, [{
		type: Directive,
		args: [{ selector: "ng-template[tuiPopup]" }]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-dom.mjs
function tuiCheckFixedPosition(element) {
	return !!element && (isFixed(element) || tuiCheckFixedPosition(element.parentElement));
}
function isFixed(element) {
	return element.ownerDocument.defaultView?.getComputedStyle(element).getPropertyValue("position") === "fixed";
}
/**
* @description:
* Cross-browser @media (height/width)
*
* 1. window.innerWidth/Width
* 1.1. gets CSS viewport @media (height/width) which include scrollbars
* 1.2. initial-scale and zoom variations may cause mobile values to
*      wrongly scale down to what PPK calls the visual
*      viewport and be smaller than the @media values
*  1.3. zoom may cause values to be 1px off due to native rounding
*
*  2. document.documentElement.clientHeight/Width
*  2.1. equals CSS viewport width minus scrollbar width
*  2.2. matches @media (height) when there is no scrollbar
*  2.3. available cross-browser
*  2.4. inaccurate if doctype is missing
*/
function tuiGetViewportHeight({ document, innerHeight }) {
	return Math.max(document.documentElement.clientHeight || 0, innerHeight || 0);
}
function tuiGetViewportWidth({ document, innerWidth }) {
	return Math.max(document.documentElement.clientWidth || 0, innerWidth || 0);
}
/**
* Creates a cloned range with its boundaries set at word boundaries
*
* @param currentRange a range to clone
* @return modified range
*/
function tuiGetWordRange(currentRange) {
	const range = currentRange.cloneRange();
	const { startContainer, startOffset, endContainer, endOffset } = range;
	const { ownerDocument } = startContainer;
	if (!ownerDocument) return range;
	const treeWalker = ownerDocument.createTreeWalker(ownerDocument.body, NodeFilter.SHOW_TEXT, svgNodeFilter);
	treeWalker.currentNode = startContainer;
	do {
		const container = treeWalker.currentNode;
		const textContent = container.textContent || "";
		const content = container === startContainer ? textContent.slice(0, Math.max(0, startOffset + 1)) : textContent;
		const offset = Math.max(content.lastIndexOf(" "), content.lastIndexOf("\n"), content.lastIndexOf("\xA0"), content.lastIndexOf("​")) + 1;
		range.setStart(container, 0);
		if (offset) {
			range.setStart(container, offset);
			break;
		}
	} while (treeWalker.previousNode());
	treeWalker.currentNode = endContainer;
	do {
		const container = treeWalker.currentNode;
		const textContent = container.textContent || "";
		const content = container === endContainer ? textContent.slice(endOffset + 1) : textContent;
		const offset = [
			content.indexOf(" "),
			content.lastIndexOf("\n"),
			content.indexOf("\xA0"),
			content.indexOf("​")
		].reduce((result, item) => result === -1 || item === -1 ? Math.max(result, item) : Math.min(result, item), -1);
		range.setEnd(container, textContent.length);
		if (offset !== -1) {
			range.setEnd(container, offset + textContent.length - content.length);
			break;
		}
	} while (treeWalker.nextNode());
	return range;
}
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-tokens.mjs
var TUI_REMOVED_ELEMENT = new InjectionToken(ngDevMode ? "TUI_REMOVED_ELEMENT" : "", { factory: () => {
	const element$ = new Subject();
	const renderer = inject(RendererFactory2).createRenderer(null, null);
	const proto = Object.getPrototypeOf(renderer.delegate ?? renderer);
	const { removeChild } = proto;
	proto.removeChild = function(...args) {
		element$.next(args[1]);
		removeChild.apply(this, args);
	};
	return element$.pipe(startWith(null), switchMap((element) => timer(0).pipe(map(() => null), startWith(element))), share());
} });
function isValidFocusout(target, removedElement = null) {
	return tuiGetDocumentOrShadowRoot(target).activeElement !== target && !target.matches(":disabled") && !removedElement?.contains(target) && (target.getAttribute("tabIndex") === "-1" || tuiIsFocusable(target));
}
function shadowRootActiveElement(root) {
	return merge(tuiTypedFromEvent(root, "focusin").pipe(map(({ target }) => target)), tuiTypedFromEvent(root, "focusout").pipe(filter(({ target, relatedTarget }) => !!relatedTarget && isValidFocusout(target)), map(({ relatedTarget }) => relatedTarget)));
}
/**
* Active element on the document for ActiveZone
*/
var TUI_ACTIVE_ELEMENT = new InjectionToken(ngDevMode ? "TUI_ACTIVE_ELEMENT" : "", { factory: () => {
	const removedElement$ = inject(TUI_REMOVED_ELEMENT);
	const win = inject(WA_WINDOW);
	const doc = inject(DOCUMENT);
	const zone = inject(NgZone);
	const focusout$ = tuiTypedFromEvent(win, "focusout", { capture: true });
	const focusin$ = tuiTypedFromEvent(win, "focusin", { capture: true });
	const blur$ = tuiTypedFromEvent(win, "blur");
	const mousedown$ = tuiTypedFromEvent(win, "mousedown");
	const mouseup$ = tuiTypedFromEvent(win, "mouseup");
	const pointerdown$ = tuiTypedFromEvent(win, "pointerdown");
	const pointercancel$ = tuiTypedFromEvent(win, "pointercancel");
	return merge(focusout$.pipe(takeUntil(pointerdown$.pipe(filter((e) => !e.defaultPrevented))), repeat({ delay: () => merge(mouseup$, pointercancel$) }), withLatestFrom(removedElement$), filter(([event, removedElement]) => isValidFocusout(tuiGetActualTarget(event), removedElement)), map(([{ relatedTarget }]) => relatedTarget)), blur$.pipe(map(() => doc.activeElement), filter((element) => !!element?.matches("iframe"))), focusin$.pipe(switchMap((event) => {
		const target = tuiGetActualTarget(event);
		const root = tuiGetDocumentOrShadowRoot(target) || doc;
		return root === doc ? of(target) : shadowRootActiveElement(root).pipe(startWith(target));
	})), mousedown$.pipe(map(tuiGetActualTarget), switchMap((target) => !doc.activeElement || doc.activeElement === doc.body ? of(target) : focusout$.pipe(take(1), map(() => target), takeUntil(timer(0, tuiZonefreeScheduler(zone))))))).pipe(distinctUntilChanged(), share());
} });
var TUI_FALLBACK_VALUE = new InjectionToken(ngDevMode ? "TUI_FALLBACK_VALUE" : "", { factory: () => null });
function tuiFallbackValueProvider(useValue) {
	return {
		provide: TUI_FALLBACK_VALUE,
		useValue
	};
}
var TUI_PLATFORM = new InjectionToken(ngDevMode ? "TUI_PLATFORM" : "", { factory: () => {
	if (inject(WA_IS_IOS)) return "ios";
	return inject(WA_IS_ANDROID) ? "android" : "web";
} });
new InjectionToken(ngDevMode ? "TUI_WINDOW_SIZE" : "", { factory: () => toObservable$1(tuiWindowSize(inject(WA_WINDOW))) });
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-active-zone.mjs
var TuiActiveZone = class TuiActiveZone {
	constructor() {
		this.active$ = inject(TUI_ACTIVE_ELEMENT);
		this.tuiActiveZoneParent = null;
		this.parent = inject(TuiActiveZone, {
			skipSelf: true,
			optional: true
		});
		this.el = inject(ElementRef, { optional: true })?.nativeElement ?? inject(DOCUMENT).documentElement;
		this.tuiActiveZoneChange = this.active$.pipe(map((element) => tuiIsElement(element) && this.contains(element)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized(), share());
		this.children = [];
		this.parent?.addSubActiveZone(this);
	}
	set tuiActiveZoneParentSetter(zone) {
		this.tuiActiveZoneParent?.removeSubActiveZone(this);
		zone?.addSubActiveZone(this);
		this.tuiActiveZoneParent = zone;
	}
	ngOnDestroy() {
		this.parent?.removeSubActiveZone(this);
		this.tuiActiveZoneParent?.removeSubActiveZone(this);
	}
	contains(node) {
		return this.el.contains(node) || this.children.some((item) => item.contains(node));
	}
	addSubActiveZone(activeZone) {
		this.children = [...this.children, activeZone];
	}
	removeSubActiveZone(activeZone) {
		this.children = tuiArrayRemove(this.children, this.children.indexOf(activeZone));
	}
	static {
		this.ɵfac = function TuiActiveZone_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiActiveZone)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiActiveZone,
			selectors: [
				[
					"",
					"tuiActiveZone",
					"",
					5,
					"ng-container"
				],
				[
					"",
					"tuiActiveZoneChange",
					"",
					5,
					"ng-container"
				],
				[
					"",
					"tuiActiveZoneParent",
					"",
					5,
					"ng-container"
				]
			],
			inputs: { tuiActiveZoneParentSetter: [
				0,
				"tuiActiveZoneParent",
				"tuiActiveZoneParentSetter"
			] },
			outputs: { tuiActiveZoneChange: "tuiActiveZoneChange" },
			exportAs: ["tuiActiveZone"]
		});
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiActiveZone,
			factory: TuiActiveZone.ɵfac,
			providedIn: "root"
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActiveZone, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}, {
		type: Directive,
		args: [{
			selector: "[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)",
			inputs: ["tuiActiveZoneParentSetter: tuiActiveZoneParent"],
			outputs: ["tuiActiveZoneChange"],
			exportAs: "tuiActiveZone"
		}]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-services.mjs
var TuiPositionService = class TuiPositionService extends Observable {
	constructor() {
		const animationFrame$ = inject(WA_ANIMATION_FRAME);
		const zone = inject(NgZone);
		super((subscriber) => animationFrame$.pipe(startWith(null), map(() => {
			const rect = this.el.getBoundingClientRect();
			const animations = this.el.getAnimations?.() || [];
			const animated = animations.length && animations.every(({ effect }) => effect?.getComputedTiming().progress !== null) && animations.some((a) => "animationName" in a && a.animationName === "tuiScale");
			this.rect = animated && this.rect || rect;
			return this.accessor.getPosition(this.rect);
		}), tuiZonefree(zone), finalize(() => this.accessor.getPosition(EMPTY_CLIENT_RECT))).subscribe(subscriber));
		this.el = tuiInjectElement();
		this.accessor = inject(TuiPositionAccessor);
	}
	static {
		this.ɵfac = function TuiPositionService_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiPositionService)();
		};
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiPositionService,
			factory: TuiPositionService.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPositionService, [{ type: Injectable }], () => [], null);
})();
var TuiVisualViewportService = class TuiVisualViewportService {
	constructor() {
		this.isWebkit = inject(WA_IS_WEBKIT);
		this.win = inject(WA_WINDOW);
	}
	correct(point) {
		return this.isWebkit ? [point[0] + (this.win.visualViewport?.offsetLeft ?? 0), point[1] + (this.win.visualViewport?.offsetTop ?? 0)] : point;
	}
	static {
		this.ɵfac = function TuiVisualViewportService_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiVisualViewportService)();
		};
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiVisualViewportService,
			factory: TuiVisualViewportService.ɵfac,
			providedIn: "root"
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewportService, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-obscured.mjs
/**
* Service that monitors element visibility by polling and returning
* either null or an array of elements that overlap given element edges
*/
var TuiObscuredService = class TuiObscuredService extends Observable {
	constructor() {
		super((subscriber) => this.obscured$.subscribe(subscriber));
		this.el = tuiInjectElement();
		this.obscured$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler()), map(() => tuiGetElementObscures(this.el)), startWith(null), distinctUntilChanged(), tuiZoneOptimized());
	}
	static {
		this.ɵfac = function TuiObscuredService_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiObscuredService)();
		};
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiObscuredService,
			factory: TuiObscuredService.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscuredService, [{ type: Injectable }], () => [], null);
})();
/**
* Directive that monitors element visibility
*/
var TuiObscured = class TuiObscured {
	constructor() {
		this.activeZone = inject(TuiActiveZone, { optional: true });
		this.obscured$ = inject(TuiObscuredService, { self: true }).pipe(map((by) => !!by?.every((el) => !this.activeZone?.contains(el))));
		this.tuiObscuredEnabled = input();
		this.tuiObscured$ = toObservable$1(this.tuiObscuredEnabled).pipe(tuiIfMap(() => this.obscured$));
		this.tuiObscured = outputFromObservable(this.tuiObscured$);
	}
	static {
		this.ɵfac = function TuiObscured_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiObscured)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiObscured,
			selectors: [[
				"",
				"tuiObscured",
				""
			]],
			inputs: { tuiObscuredEnabled: [1, "tuiObscuredEnabled"] },
			outputs: { tuiObscured: "tuiObscured" },
			features: [ɵɵProvidersFeature([TuiObscuredService])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscured, [{
		type: Directive,
		args: [{
			selector: "[tuiObscured]",
			providers: [TuiObscuredService]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-dropdown.mjs
var _c0$8 = (a0) => ({ $implicit: a0 });
function TuiDropdownComponent_div_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "div", 2);
		ɵɵtext(1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const text_r1 = ctx.polymorpheusOutlet;
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", text_r1, " ");
	}
}
var _c1$3 = ["tuiDropdownHost"];
var TuiDropdownDriver = class TuiDropdownDriver extends BehaviorSubject {
	constructor() {
		super(false);
		this.type = "dropdown";
	}
	static {
		this.ɵfac = function TuiDropdownDriver_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDropdownDriver)();
		};
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiDropdownDriver,
			factory: TuiDropdownDriver.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDriver, [{ type: Injectable }], () => [], null);
})();
var TuiDropdownDriverDirective = class TuiDropdownDriverDirective extends TuiDriverDirective {
	constructor() {
		super(...arguments);
		this.type = "dropdown";
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiDropdownDriverDirective_BaseFactory;
			return function TuiDropdownDriverDirective_Factory(__ngFactoryType__) {
				return (ɵTuiDropdownDriverDirective_BaseFactory || (ɵTuiDropdownDriverDirective_BaseFactory = ɵɵgetInheritedFactory(TuiDropdownDriverDirective)))(__ngFactoryType__ || TuiDropdownDriverDirective);
			};
		})();
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDropdownDriverDirective,
			features: [ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDriverDirective, [{ type: Directive }], null, null);
})();
var TUI_DROPDOWN_DEFAULT_OPTIONS = {
	align: "start",
	direction: null,
	limitWidth: "auto",
	maxHeight: 400,
	minHeight: 80,
	offset: 4,
	appearance: ""
};
var TUI_DROPDOWN_OPTIONS = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_OPTIONS" : "", { factory: () => TUI_DROPDOWN_DEFAULT_OPTIONS });
var tuiDropdownOptionsProvider = (override) => ({
	provide: TUI_DROPDOWN_OPTIONS,
	deps: [[
		new Optional(),
		new Self(),
		TuiDropdownOptionsDirective
	], [
		new Optional(),
		new SkipSelf(),
		TUI_DROPDOWN_OPTIONS
	]],
	useFactory: tuiOverrideOptions(override, TUI_DROPDOWN_DEFAULT_OPTIONS)
});
var TuiDropdownOptionsDirective = class TuiDropdownOptionsDirective {
	constructor() {
		this.options = inject(TUI_DROPDOWN_OPTIONS, { skipSelf: true });
		this.align = this.options.align;
		this.appearance = this.options.appearance;
		this.direction = this.options.direction;
		this.limitWidth = this.options.limitWidth;
		this.minHeight = this.options.minHeight;
		this.maxHeight = this.options.maxHeight;
		this.offset = this.options.offset;
	}
	static {
		this.ɵfac = function TuiDropdownOptionsDirective_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDropdownOptionsDirective)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDropdownOptionsDirective,
			selectors: [
				[
					"",
					"tuiDropdownAlign",
					""
				],
				[
					"",
					"tuiDropdownAppearance",
					""
				],
				[
					"",
					"tuiDropdownDirection",
					""
				],
				[
					"",
					"tuiDropdownLimitWidth",
					""
				],
				[
					"",
					"tuiDropdownMinHeight",
					""
				],
				[
					"",
					"tuiDropdownMaxHeight",
					""
				],
				[
					"",
					"tuiDropdownOffset",
					""
				]
			],
			inputs: {
				align: [
					0,
					"tuiDropdownAlign",
					"align"
				],
				appearance: [
					0,
					"tuiDropdownAppearance",
					"appearance"
				],
				direction: [
					0,
					"tuiDropdownDirection",
					"direction"
				],
				limitWidth: [
					0,
					"tuiDropdownLimitWidth",
					"limitWidth"
				],
				minHeight: [
					0,
					"tuiDropdownMinHeight",
					"minHeight"
				],
				maxHeight: [
					0,
					"tuiDropdownMaxHeight",
					"maxHeight"
				],
				offset: [
					0,
					"tuiDropdownOffset",
					"offset"
				]
			},
			features: [ɵɵProvidersFeature([tuiProvide(TUI_DROPDOWN_OPTIONS, TuiDropdownOptionsDirective)])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOptionsDirective, [{
		type: Directive,
		args: [{
			selector: "[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]",
			inputs: [
				"align: tuiDropdownAlign",
				"appearance: tuiDropdownAppearance",
				"direction: tuiDropdownDirection",
				"limitWidth: tuiDropdownLimitWidth",
				"minHeight: tuiDropdownMinHeight",
				"maxHeight: tuiDropdownMaxHeight",
				"offset: tuiDropdownOffset"
			],
			providers: [tuiProvide(TUI_DROPDOWN_OPTIONS, TuiDropdownOptionsDirective)]
		}]
	}], null, null);
})();
var TuiDropdownPosition = class TuiDropdownPosition extends TuiPositionAccessor {
	constructor() {
		super(...arguments);
		this.el = tuiInjectElement();
		this.options = inject(TUI_DROPDOWN_OPTIONS);
		this.viewport = inject(TUI_VIEWPORT);
		this.direction = new Subject();
		this.type = "dropdown";
		this.accessor = tuiFallbackAccessor("dropdown")(inject(TuiRectAccessor, {
			self: true,
			optional: true
		}), { getClientRect: () => this.el.getBoundingClientRect() });
		this.tuiDropdownDirectionChange = outputFromObservable(this.direction.pipe(distinctUntilChanged()));
	}
	getPosition({ width, height }) {
		if (!width && !height) this.previous = void 0;
		const hostRect = this.accessor.getClientRect();
		const viewportRect = this.viewport.getClientRect();
		const { minHeight, direction, offset, limitWidth } = this.options;
		const align = this.getAlign(this.options.align);
		const viewport = {
			top: viewportRect.top - offset,
			bottom: viewportRect.bottom + offset,
			right: viewportRect.right - offset,
			left: viewportRect.left + offset
		};
		const previous = this.previous || direction || "bottom";
		const available = {
			top: hostRect.top - 2 * offset - viewport.top,
			bottom: viewport.bottom - hostRect.bottom - 2 * offset
		};
		const rectWidth = limitWidth === "fixed" ? hostRect.width : width;
		const right = Math.max(hostRect.right - rectWidth, offset);
		const left = hostRect.left + width < viewport.right ? hostRect.left : right;
		const position = {
			top: hostRect.top - offset - height,
			bottom: hostRect.bottom + offset,
			right: Math.max(viewport.left, right),
			center: hostRect.left + hostRect.width / 2 + width / 2 < viewport.right ? hostRect.left + hostRect.width / 2 - width / 2 : right,
			left: Math.max(viewport.left, left)
		};
		const better = available.top > available.bottom ? "top" : "bottom";
		if (available[previous] > minHeight && direction || available[previous] > height) {
			this.direction.next(previous);
			return [position[align], position[previous]];
		}
		this.previous = better;
		this.direction.next(better);
		return [position[align], position[better]];
	}
	getAlign(align) {
		const rtl = this.el.matches("[dir=\"rtl\"] :scope");
		if (rtl && align === "start") return "right";
		if (rtl && align === "end") return "left";
		if (align === "center") return "center";
		return align === "end" ? "right" : "left";
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiDropdownPosition_BaseFactory;
			return function TuiDropdownPosition_Factory(__ngFactoryType__) {
				return (ɵTuiDropdownPosition_BaseFactory || (ɵTuiDropdownPosition_BaseFactory = ɵɵgetInheritedFactory(TuiDropdownPosition)))(__ngFactoryType__ || TuiDropdownPosition);
			};
		})();
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDropdownPosition,
			outputs: { tuiDropdownDirectionChange: "tuiDropdownDirectionChange" },
			features: [ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPosition, [{ type: Directive }], null, null);
})();
var MAX_WIDTH_GAP = 16;
var TuiDropdownAnchor = class TuiDropdownAnchor {
	constructor() {
		this.el = tuiInjectElement();
		this.directive = inject(TuiDropdownDirective);
		this.accessor = this.directive.accessor;
		this.viewport = inject(TUI_VIEWPORT);
		this.vvs = inject(TuiVisualViewportService);
		this.options = inject(TUI_DROPDOWN_OPTIONS);
		this.position = this.directive.position;
		this.styles$ = inject(TuiPositionService).pipe(takeWhile(() => this.directive.el.isConnected && !!this.directive.el.getBoundingClientRect().height), map((v) => this.position === "fixed" ? this.vvs.correct(v) : v), map((point) => this.getStyles(...point)), takeUntilDestroyed());
	}
	ngAfterViewInit() {
		this.styles$.subscribe({
			next: (styles) => Object.assign(this.el.style, styles),
			complete: () => this.directive.toggle(false)
		});
	}
	getStyles(x, y) {
		const { maxHeight, minHeight, offset, limitWidth } = this.options;
		const parent = this.el.offsetParent?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
		const { left = 0, top = 0 } = this.position === "fixed" ? {} : parent;
		const rect = this.accessor.getClientRect();
		const viewport = this.viewport.getClientRect();
		const zoom = this.directive.el.currentCSSZoom || 1;
		const above = rect.top - viewport.top - 2 * offset;
		const below = viewport.top + viewport.height - y - offset;
		const available = y > rect.bottom ? below : above;
		const height = this.el.getBoundingClientRect().right <= rect.left || x >= rect.right ? maxHeight : tuiClamp(available, minHeight, maxHeight);
		y -= top;
		x -= left;
		return {
			position: this.position,
			top: tuiPx(Math.round(Math.max(y, offset - top) / zoom)),
			left: tuiPx(Math.round(x / zoom)),
			maxHeight: tuiPx(Math.round(height / zoom)),
			width: limitWidth === "fixed" ? tuiPx(Math.round(rect.width / zoom)) : "",
			minWidth: limitWidth === "min" ? tuiPx(Math.round(rect.width / zoom)) : "",
			maxWidth: tuiPx(Math.round(viewport.width / zoom) - MAX_WIDTH_GAP)
		};
	}
	static {
		this.ɵfac = function TuiDropdownAnchor_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDropdownAnchor)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDropdownAnchor,
			features: [ɵɵProvidersFeature([
				TuiPositionService,
				tuiPositionAccessorFor("dropdown", TuiDropdownPosition),
				tuiRectAccessorFor("dropdown", forwardRef(() => TuiDropdownDirective))
			])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownAnchor, [{
		type: Directive,
		args: [{ providers: [
			TuiPositionService,
			tuiPositionAccessorFor("dropdown", TuiDropdownPosition),
			tuiRectAccessorFor("dropdown", forwardRef(() => TuiDropdownDirective))
		] }]
	}], null, null);
})();
/**
* @description:
* This component is used to show template in a portal
* using default style of white rounded box with a shadow
*/
var TuiDropdownComponent = class TuiDropdownComponent {
	constructor() {
		this.options = inject(TUI_DROPDOWN_OPTIONS);
		this.directive = inject(TuiDropdownDirective);
		this.context = inject(TUI_DROPDOWN_CONTEXT, { optional: true });
		this.darkMode = inject(TUI_DARK_MODE);
		this.theme = computed((_ = this.darkMode()) => this.directive.el.closest("[tuiTheme]")?.getAttribute("tuiTheme"));
		this.close = () => this.directive.toggle(false);
	}
	static {
		this.ɵfac = function TuiDropdownComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDropdownComponent)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiDropdownComponent,
			selectors: [["tui-dropdown"]],
			hostVars: 2,
			hostBindings: function TuiDropdownComponent_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵattribute("data-appearance", ctx.options.appearance)("tuiTheme", ctx.theme());
			},
			features: [ɵɵHostDirectivesFeature([
				TuiActiveZone,
				TuiAnimated,
				TuiDropdownAnchor
			])],
			decls: 2,
			vars: 4,
			consts: [
				[1, "t-scroll"],
				[
					"class",
					"t-primitive",
					4,
					"polymorpheusOutlet",
					"polymorpheusOutletContext"
				],
				[1, "t-primitive"]
			],
			template: function TuiDropdownComponent_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵelementStart(0, "tui-scrollbar", 0);
					ɵɵtemplate(1, TuiDropdownComponent_div_1_Template, 2, 1, "div", 1);
					ɵɵelementEnd();
				}
				if (rf & 2) {
					ɵɵadvance();
					ɵɵproperty("polymorpheusOutlet", ctx.directive.content())("polymorpheusOutletContext", ɵɵpureFunction1(2, _c0$8, ctx.close));
				}
			},
			dependencies: [PolymorpheusOutlet, TuiScrollbar],
			styles: ["[_nghost-%COMP%]{position:absolute;display:flex;box-shadow:var(--%NS%tui-shadow-medium);color:var(--%NS%tui-text-primary);background:var(--%NS%tui-background-elevation-3);border-radius:var(--%NS%tui-radius-m);overflow:hidden;border:1px solid var(--%NS%tui-border-normal);box-sizing:border-box;isolation:isolate;pointer-events:auto;--%NS%tui-from: translateY(-1rem)}[_nghost-%COMP%]:has(tui-data-list[data-size=l]){border-radius:var(--%NS%tui-radius-l)}.tui-enter[_nghost-%COMP%], .tui-leave[_nghost-%COMP%]{animation-name:tuiFade,tuiSlide;animation-duration:calc(var(--%NS%tui-duration) / 2);pointer-events:none}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}.t-scroll[_ngcontent-%COMP%]{flex-grow:1;max-inline-size:calc(100% + 2px);inline-size:max-content;overscroll-behavior:none;margin:-1px}.t-primitive[_ngcontent-%COMP%]{padding:1rem}"],
			changeDetection: 1
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownComponent, [{
		type: Component,
		args: [{
			selector: "tui-dropdown",
			imports: [PolymorpheusOutlet, TuiScrollbar],
			changeDetection: ChangeDetectionStrategy.Default,
			hostDirectives: [
				TuiActiveZone,
				TuiAnimated,
				TuiDropdownAnchor
			],
			host: {
				"[attr.data-appearance]": "options.appearance",
				"[attr.tuiTheme]": "theme()"
			},
			template: "<tui-scrollbar class=\"t-scroll\">\n    <div\n        *polymorpheusOutlet=\"directive.content() as text; context: {$implicit: close}\"\n        class=\"t-primitive\"\n    >\n        {{ text }}\n    </div>\n</tui-scrollbar>\n",
			styles: [":host{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;isolation:isolate;pointer-events:auto;--tui-from: translateY(-1rem)}:host:has(tui-data-list[data-size=l]){border-radius:var(--tui-radius-l)}:host.tui-enter,:host.tui-leave{animation-name:tuiFade,tuiSlide;animation-duration:calc(var(--tui-duration) / 2);pointer-events:none}:host:not([style*=top]){visibility:hidden}.t-scroll{flex-grow:1;max-inline-size:calc(100% + 2px);inline-size:max-content;overscroll-behavior:none;margin:-1px}.t-primitive{padding:1rem}\n"]
		}]
	}], null, null);
})();
/**
* A component to display a dropdown
*/
var TUI_DROPDOWN_COMPONENT = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_COMPONENT" : "", { factory: () => TuiDropdownComponent });
var TUI_DROPDOWN_CONTEXT = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_CONTEXT" : "");
var TUI_DROPDOWN_HOST = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_HOST" : "");
var TuiDropdownA11y = class TuiDropdownA11y {
	constructor() {
		this.id = tuiGenerateId();
		this.host = inject(TUI_DROPDOWN_HOST);
		this.dropdown = inject(TuiDropdownDirective);
		this.tuiDropdownRole = input("listbox");
		this.sync = effect(() => {
			const content = this.dropdown.content();
			const dropdown = this.dropdown.ref();
			const host = this.host.nativeElement;
			host.setAttribute("aria-expanded", String(!!dropdown));
			host.setAttribute("aria-controls", this.id);
			host.setAttribute("aria-haspopup", this.tuiDropdownRole());
			dropdown?.location.nativeElement.setAttribute("id", this.id);
			dropdown?.location.nativeElement.setAttribute("role", this.tuiDropdownRole());
			if (content) return;
			host.removeAttribute("aria-expanded");
			host.removeAttribute("aria-controls");
			host.removeAttribute("aria-haspopup");
		});
	}
	static {
		this.ɵfac = function TuiDropdownA11y_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDropdownA11y)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDropdownA11y,
			selectors: [[
				"",
				"tuiDropdownA11y",
				""
			]],
			inputs: { tuiDropdownRole: [1, "tuiDropdownRole"] }
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownA11y, [{
		type: Directive,
		args: [{ selector: "[tuiDropdownA11y]" }]
	}], null, null);
})();
var TuiDropdownDirective = class TuiDropdownDirective {
	constructor() {
		this.injector = inject(INJECTOR$1);
		this.refresh$ = new Subject();
		this.service = inject(TuiPopupService);
		this.cdr = inject(ChangeDetectorRef);
		this.drivers = coerceArray(inject(TuiDropdownDriver, {
			self: true,
			optional: true
		}));
		this.sub = this.refresh$.pipe(throttleTime(0, tuiZonefreeScheduler()), takeUntilDestroyed()).subscribe(() => {
			this.ref()?.changeDetectorRef.detectChanges();
			this.ref()?.changeDetectorRef.markForCheck();
		});
		this.autoClose = effect(() => {
			if (!this.content()) this.toggle(false);
		});
		this.ref = signal(null);
		this.el = tuiInjectElement();
		this.type = "dropdown";
		this.component = new PolymorpheusComponent(inject(TUI_DROPDOWN_COMPONENT), inject(INJECTOR$1));
		this.content = input(null, {
			alias: "tuiDropdown",
			transform: (content) => content instanceof TemplateRef ? new PolymorpheusTemplate(content, this.cdr) : content
		});
	}
	get accessor() {
		const accessors = this.injector.get(TuiRectAccessor, null, { self: true });
		return tuiFallbackAccessor("dropdown")(accessors, this);
	}
	get position() {
		return tuiCheckFixedPosition(this.el) ? "fixed" : "absolute";
	}
	ngAfterViewChecked() {
		if (this.ref()) this.refresh$.next();
	}
	ngOnDestroy() {
		this.toggle(false);
	}
	getClientRect() {
		return this.el.getBoundingClientRect();
	}
	toggle(show) {
		const ref = this.ref();
		if (show && this.content() && !ref) this.ref.set(this.service.add(this.component));
		else if (!show && ref) {
			this.ref.set(null);
			ref.destroy();
		}
		this.drivers.forEach((driver) => driver?.next(show));
	}
	static {
		this.ɵfac = function TuiDropdownDirective_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDropdownDirective)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDropdownDirective,
			selectors: [[
				"",
				"tuiDropdown",
				"",
				5,
				"ng-container",
				5,
				"ng-template"
			]],
			hostVars: 2,
			hostBindings: function TuiDropdownDirective_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵclassProp("tui-dropdown-open", ctx.ref());
			},
			inputs: { content: [
				1,
				"tuiDropdown",
				"content"
			] },
			exportAs: ["tuiDropdown"],
			features: [ɵɵProvidersFeature([tuiAsVehicle(TuiDropdownDirective), tuiProvide(TUI_DROPDOWN_HOST, ElementRef)]), ɵɵHostDirectivesFeature([
				TuiDropdownDriverDirective,
				{
					directive: TuiDropdownA11y,
					inputs: ["tuiDropdownRole", "tuiDropdownRole"]
				},
				{
					directive: TuiDropdownPosition,
					outputs: ["tuiDropdownDirectionChange", "tuiDropdownDirectionChange"]
				}
			])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDirective, [{
		type: Directive,
		args: [{
			selector: "[tuiDropdown]:not(ng-container):not(ng-template)",
			providers: [tuiAsVehicle(TuiDropdownDirective), tuiProvide(TUI_DROPDOWN_HOST, ElementRef)],
			exportAs: "tuiDropdown",
			hostDirectives: [
				TuiDropdownDriverDirective,
				{
					directive: TuiDropdownA11y,
					inputs: ["tuiDropdownRole"]
				},
				{
					directive: TuiDropdownPosition,
					outputs: ["tuiDropdownDirectionChange"]
				}
			],
			host: { "[class.tui-dropdown-open]": "ref()" }
		}]
	}], null, null);
})();
var TuiDropdownClose = class TuiDropdownClose {
	constructor() {
		this.el = tuiInjectElement();
		this.ref = inject(TuiDropdownDirective).ref;
		this.open = inject(TuiDropdownOpen);
		this.obscured = inject(TuiObscured);
		this.activeZone = inject(TuiActiveZone);
		this.tuiDropdownClose = outputFromObservable(merge(inject(TuiDropdownDriver).pipe(tuiIfMap(() => merge(tuiCloseWatcher(), this.obscured.tuiObscured$.pipe(filter(Boolean)), this.activeZone.tuiActiveZoneChange.pipe(filter((a) => !a)), tuiTypedFromEvent(this.el, "focusin").pipe(filter((event) => !this.open.nativeElement.contains(tuiGetActualTarget(event)) || !this.ref()))))), typeof CloseWatcher === "undefined" ? tuiTypedFromEvent(inject(DOCUMENT), "keydown", { capture: true }).pipe(filter(({ key }) => key === "Escape" && this.open.open() && !this.ref()?.location.nativeElement?.nextElementSibling), tuiStopPropagation()) : EMPTY));
	}
	static {
		this.ɵfac = function TuiDropdownClose_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDropdownClose)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDropdownClose,
			outputs: { tuiDropdownClose: "tuiDropdownClose" }
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownClose, [{ type: Directive }], null, null);
})();
var TuiDropdownOpen = class TuiDropdownOpen {
	constructor() {
		this.dropdownHost = contentChild("tuiDropdownHost", {
			descendants: true,
			read: ElementRef
		});
		this.directive = inject(TuiDropdownDirective);
		this.el = tuiInjectElement();
		this.obscured = inject(TuiObscured);
		this.driver = inject(TuiDropdownDriver);
		this.dropdown = computed(() => this.directive.ref()?.location.nativeElement);
		this.enabled = input(true, { alias: "tuiDropdownEnabled" });
		this.open = model(false, { alias: "tuiDropdownOpen" });
		this.driveEffect = effect(() => this.drive(this.open()));
		this.syncSub = this.driver.pipe(filter((open) => open !== this.open()), takeUntilDestroyed()).subscribe((open) => this.update(open));
		this.keydownSub = tuiTypedFromEvent(inject(DOCUMENT), "keydown").pipe(takeUntilDestroyed()).subscribe((event) => this.onKeydown(event));
	}
	get nativeElement() {
		const initial = this.dropdownHost()?.nativeElement || this.el;
		const focusable = tuiIsFocusable(initial) ? initial : tuiGetClosestFocusable({
			initial,
			root: this.el
		});
		return this.dropdownHost()?.nativeElement || focusable || this.el;
	}
	toggle(open) {
		if (this.focused && !open) this.nativeElement.focus({ preventScroll: true });
		this.update(open);
	}
	onClick(target) {
		if (!this.editable && this.nativeElement.contains(target)) this.update(!this.open());
	}
	onArrow(event, up) {
		if (!tuiIsElement(event.target) || !this.nativeElement.contains(event.target) || !this.enabled() || !this.directive.content()) return;
		event.preventDefault();
		this.focusDropdown(up);
	}
	get editable() {
		return tuiIsElementEditable(this.nativeElement);
	}
	get focused() {
		return tuiIsFocusedIn(this.nativeElement) || tuiIsFocusedIn(this.dropdown());
	}
	onKeydown(event) {
		const target = tuiGetActualTarget(event);
		if (!event.defaultPrevented && tuiIsEditingKey(event.key) && this.editable && this.focused && tuiIsHTMLElement(target) && !tuiIsElementEditable(target)) this.nativeElement.focus({ preventScroll: true });
	}
	update(open) {
		if (open && !this.enabled()) return this.drive();
		this.open.set(open);
		this.drive();
	}
	drive(open = this.open() && this.enabled()) {
		tuiSetSignal(this.obscured.tuiObscuredEnabled, open);
		this.driver.next(open);
	}
	focusDropdown(previous) {
		const root = this.dropdown();
		if (!root) {
			this.update(true);
			return;
		}
		const doc = this.el.ownerDocument;
		const child = root.appendChild(doc.createElement("div"));
		const focusable = tuiGetClosestFocusable({
			initial: previous ? child : root,
			previous,
			root
		});
		child.remove();
		focusable?.focus();
	}
	static {
		this.ɵfac = function TuiDropdownOpen_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDropdownOpen)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDropdownOpen,
			selectors: [
				[
					"",
					"tuiDropdown",
					"",
					"tuiDropdownAuto",
					""
				],
				[
					"",
					"tuiDropdown",
					"",
					"tuiDropdownOpen",
					""
				],
				[
					"",
					"tuiDropdown",
					"",
					"tuiDropdownOpenChange",
					""
				]
			],
			contentQueries: function TuiDropdownOpen_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.dropdownHost, _c1$3, 5, ElementRef);
				if (rf & 2) ɵɵqueryAdvance();
			},
			hostBindings: function TuiDropdownOpen_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("click", function TuiDropdownOpen_click_HostBindingHandler($event) {
					return ctx.onClick($event.target);
				})("keydown.arrowDown", function TuiDropdownOpen_keydown_arrowDown_HostBindingHandler($event) {
					return ctx.onArrow($event, false);
				})("keydown.arrowUp", function TuiDropdownOpen_keydown_arrowUp_HostBindingHandler($event) {
					return ctx.onArrow($event, true);
				})("tuiActiveZoneChange", function TuiDropdownOpen_tuiActiveZoneChange_HostBindingHandler() {
					return 0;
				})("tuiDropdownClose", function TuiDropdownOpen_tuiDropdownClose_HostBindingHandler() {
					return ctx.toggle(false);
				});
			},
			inputs: {
				enabled: [
					1,
					"tuiDropdownEnabled",
					"enabled"
				],
				open: [
					1,
					"tuiDropdownOpen",
					"open"
				]
			},
			outputs: { open: "tuiDropdownOpenChange" },
			features: [ɵɵProvidersFeature([
				TuiDropdownDriver,
				tuiAsDriver(TuiDropdownDriver),
				tuiProvide(TUI_DROPDOWN_HOST, TuiDropdownOpen)
			]), ɵɵHostDirectivesFeature([
				TuiObscured,
				{
					directive: TuiDropdownClose,
					outputs: ["tuiDropdownClose", "tuiDropdownClose"]
				},
				{
					directive: TuiActiveZone,
					inputs: ["tuiActiveZoneParent", "tuiActiveZoneParent"],
					outputs: ["tuiActiveZoneChange", "tuiActiveZoneChange"]
				}
			])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOpen, [{
		type: Directive,
		args: [{
			selector: "[tuiDropdown][tuiDropdownAuto],[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]",
			providers: [
				TuiDropdownDriver,
				tuiAsDriver(TuiDropdownDriver),
				tuiProvide(TUI_DROPDOWN_HOST, TuiDropdownOpen)
			],
			hostDirectives: [
				TuiObscured,
				{
					directive: TuiDropdownClose,
					outputs: ["tuiDropdownClose"]
				},
				{
					directive: TuiActiveZone,
					inputs: ["tuiActiveZoneParent"],
					outputs: ["tuiActiveZoneChange"]
				}
			],
			host: {
				"(click)": "onClick($event.target)",
				"(keydown.arrowDown)": "onArrow($event, false)",
				"(keydown.arrowUp)": "onArrow($event, true)",
				"(tuiActiveZoneChange)": "0",
				"(tuiDropdownClose)": "toggle(false)"
			}
		}]
	}], null, null);
})();
function tuiDropdown(value) {
	return tuiDirectiveBinding(TuiDropdownDirective, "content", value, {});
}
function tuiDropdownEnabled(value) {
	return tuiDirectiveBinding(TuiDropdownOpen, "enabled", value, {});
}
var TuiDropdownContent = class TuiDropdownContent {
	constructor() {
		this.directive = inject(TuiDropdownDirective);
		tuiSetSignal(this.directive.content, inject(TemplateRef));
		if (isPlatformBrowser(inject(PLATFORM_ID)) && this.directive.el.matches(":focus-within")) this.directive.toggle(true);
	}
	ngOnDestroy() {
		tuiSetSignal(this.directive.content, null);
	}
	static {
		this.ɵfac = function TuiDropdownContent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDropdownContent)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDropdownContent,
			selectors: [[
				"ng-template",
				"tuiDropdown",
				""
			]]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownContent, [{
		type: Directive,
		args: [{ selector: "ng-template[tuiDropdown]" }]
	}], () => [], null);
})();
var TuiDropdownContext = class TuiDropdownContext extends TuiRectAccessor {
	constructor() {
		super(...arguments);
		this.isTouch = inject(WA_IS_TOUCH);
		this.currentRect = EMPTY_CLIENT_RECT;
		this.userSelect = computed(() => this.isTouch() ? "none" : null);
		this.activeZone = inject(TuiActiveZone);
		this.driver = inject(TuiDropdownDriver);
		this.doc = inject(DOCUMENT);
		this.sub = merge(tuiTypedFromEvent(this.doc, "pointerdown"), tuiTypedFromEvent(this.doc, "keydown").pipe(filter(({ key }) => key === "Escape")), tuiTypedFromEvent(this.doc, "contextmenu", { capture: true })).pipe(filter((event) => this.driver.value && !this.activeZone.contains(tuiGetActualTarget(event))), tuiZoneOptimized(), takeUntilDestroyed()).subscribe(() => {
			this.driver.next(false);
			this.currentRect = EMPTY_CLIENT_RECT;
		});
		this.type = "dropdown";
	}
	getClientRect() {
		return this.currentRect;
	}
	onContextMenu(x, y) {
		this.currentRect = tuiPointToClientRect(x, y);
		this.driver.next(true);
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiDropdownContext_BaseFactory;
			return function TuiDropdownContext_Factory(__ngFactoryType__) {
				return (ɵTuiDropdownContext_BaseFactory || (ɵTuiDropdownContext_BaseFactory = ɵɵgetInheritedFactory(TuiDropdownContext)))(__ngFactoryType__ || TuiDropdownContext);
			};
		})();
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDropdownContext,
			selectors: [[
				"",
				"tuiDropdownContext",
				""
			]],
			hostVars: 6,
			hostBindings: function TuiDropdownContext_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("longtap", function TuiDropdownContext_longtap_HostBindingHandler($event) {
					return ctx.onContextMenu($event.detail.clientX, $event.detail.clientY);
				});
				if (rf & 2) ɵɵstyleProp("-webkit-touch-callout", ctx.userSelect())("-webkit-user-select", ctx.userSelect())("user-select", ctx.userSelect());
			},
			features: [ɵɵProvidersFeature([
				TuiActiveZone,
				TuiDropdownDriver,
				tuiAsDriver(TuiDropdownDriver),
				tuiAsRectAccessor(TuiDropdownContext)
			]), ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownContext, [{
		type: Directive,
		args: [{
			selector: "[tuiDropdownContext]",
			providers: [
				TuiActiveZone,
				TuiDropdownDriver,
				tuiAsDriver(TuiDropdownDriver),
				tuiAsRectAccessor(TuiDropdownContext)
			],
			host: {
				"[style.-webkit-touch-callout]": "userSelect()",
				"[style.-webkit-user-select]": "userSelect()",
				"[style.user-select]": "userSelect()",
				"(longtap)": "onContextMenu($event.detail.clientX, $event.detail.clientY)"
			}
		}]
	}], null, null);
})();
/** Default values for hint options */
var TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS = {
	showDelay: 200,
	hideDelay: 500
};
/**
* Default parameters for dropdown hover directive
*/
var [TUI_DROPDOWN_HOVER_OPTIONS, tuiDropdownHoverOptionsProvider] = tuiCreateOptions(TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
var TuiDropdownHover = class TuiDropdownHover extends TuiDriver {
	constructor() {
		super((subscriber) => this.stream$.subscribe(subscriber));
		this.dropdownHost = contentChild("tuiDropdownHost", {
			descendants: true,
			read: ElementRef
		});
		this.el = tuiInjectElement();
		this.doc = inject(DOCUMENT);
		this.options = inject(TUI_DROPDOWN_HOVER_OPTIONS);
		this.activeZone = inject(TuiActiveZone);
		this.open = inject(TuiDropdownOpen, { optional: true });
		this.stream$ = merge(
			/**
			* Dropdown can be removed not only via click/touch –
			* swipe on mobile devices removes dropdown sheet without triggering new mouseover / mouseout events.
			*/
			toObservable$1(inject(TuiDropdownDirective).ref).pipe(filter((x) => !x && this.hovered()), switchMap(() => tuiTypedFromEvent(this.doc, "pointerdown").pipe(map(tuiGetActualTarget), delay(this.tuiDropdownHideDelay()), startWith(null), takeUntil(fromEvent(this.doc, "mouseover"))))),
			tuiTypedFromEvent(this.doc, "mouseover").pipe(map(tuiGetActualTarget)),
			tuiTypedFromEvent(this.doc, "mouseout").pipe(map((e) => e.relatedTarget))
		).pipe(map((element) => tuiIsElement(element) && this.isHovered(element)), distinctUntilChanged(), switchMap((v) => of(v).pipe(delay(v ? this.tuiDropdownShowDelay() : this.tuiDropdownHideDelay()), takeUntil(this.open ? fromEvent(this.el, "pointerdown") : EMPTY))), tuiZoneOptimized(), tap((hovered) => {
			this.hovered.set(hovered);
			this.open?.toggle(hovered);
		}), share());
		this.hovered = signal(false);
		this.tuiDropdownShowDelay = input(this.options.showDelay);
		this.tuiDropdownHideDelay = input(this.options.hideDelay);
		this.type = "dropdown";
	}
	onClick(event) {
		if (this.hovered() && this.open) event.preventDefault();
	}
	isHovered(element) {
		const hovered = (this.dropdownHost()?.nativeElement || this.el).contains(element);
		const child = !this.el.contains(element) && this.activeZone.contains(element);
		return hovered || child;
	}
	static {
		this.ɵfac = function TuiDropdownHover_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDropdownHover)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDropdownHover,
			selectors: [[
				"",
				"tuiDropdownHover",
				""
			]],
			contentQueries: function TuiDropdownHover_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.dropdownHost, _c1$3, 5, ElementRef);
				if (rf & 2) ɵɵqueryAdvance();
			},
			hostBindings: function TuiDropdownHover_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("click.capture", function TuiDropdownHover_click_capture_HostBindingHandler($event) {
					return ctx.onClick($event);
				});
			},
			inputs: {
				tuiDropdownShowDelay: [1, "tuiDropdownShowDelay"],
				tuiDropdownHideDelay: [1, "tuiDropdownHideDelay"]
			},
			features: [ɵɵProvidersFeature([TuiActiveZone, tuiAsDriver(TuiDropdownHover)]), ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownHover, [{
		type: Directive,
		args: [{
			selector: "[tuiDropdownHover]",
			providers: [TuiActiveZone, tuiAsDriver(TuiDropdownHover)],
			host: { "(click.capture)": "onClick($event)" }
		}]
	}], () => [], null);
})();
var TuiDropdownFixed = class TuiDropdownFixed {
	constructor() {
		tuiOverrideOptions({ limitWidth: "fixed" }, TUI_DROPDOWN_DEFAULT_OPTIONS)(inject(TUI_DROPDOWN_OPTIONS, {
			self: true,
			optional: true
		}), null);
	}
	static {
		this.ɵfac = function TuiDropdownFixed_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDropdownFixed)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDropdownFixed,
			features: [ɵɵProvidersFeature([tuiDropdownOptionsProvider({})])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownFixed, [{
		type: Directive,
		args: [{ providers: [tuiDropdownOptionsProvider({})] }]
	}], () => [], null);
})();
var TuiDropdownAuto = class TuiDropdownAuto {
	constructor() {
		/**
		* Update directive props with new defaults before inputs are processed
		* TODO: find better way to override TuiDropdownFixed host directive from parent component
		*/
		inject(TUI_DROPDOWN_OPTIONS).limitWidth = "auto";
	}
	static {
		this.ɵfac = function TuiDropdownAuto_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDropdownAuto)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({ type: TuiDropdownAuto });
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownAuto, [{ type: Directive }], () => [], null);
})();
var TuiDropdownManual = class TuiDropdownManual {
	constructor() {
		this.driver = inject(TuiDropdownDriver);
		this.tuiDropdownManual = input(false);
	}
	ngOnChanges() {
		this.driver.next(!!this.tuiDropdownManual());
	}
	static {
		this.ɵfac = function TuiDropdownManual_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDropdownManual)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDropdownManual,
			selectors: [[
				"",
				"tuiDropdownManual",
				""
			]],
			inputs: { tuiDropdownManual: [1, "tuiDropdownManual"] },
			features: [ɵɵProvidersFeature([TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]), ɵɵNgOnChangesFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownManual, [{
		type: Directive,
		args: [{
			selector: "[tuiDropdownManual]",
			providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]
		}]
	}], null, null);
})();
var TuiDropdownPositionSided = class TuiDropdownPositionSided extends TuiPositionAccessor {
	constructor() {
		super(...arguments);
		this.options = inject(TUI_DROPDOWN_OPTIONS);
		this.viewport = inject(TUI_VIEWPORT);
		this.vertical = inject(TuiDropdownPosition);
		this.previous = this.options.direction || "bottom";
		this.tuiDropdownSided = input("");
		this.tuiDropdownSidedOffset = input(4);
		this.type = "dropdown";
	}
	getPosition(rect) {
		if (this.tuiDropdownSided() === false) return this.vertical.getPosition(rect);
		const { height, width } = rect;
		const hostRect = this.vertical.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
		const viewport = this.viewport.getClientRect();
		const { direction, offset } = this.options;
		const adjusted = this.vertical.getAlign(this.options.align);
		const align = adjusted === "center" ? "left" : adjusted;
		const available = {
			top: hostRect.bottom - viewport.top,
			left: hostRect.left - offset - viewport.left,
			right: viewport.right - hostRect.right - offset,
			bottom: viewport.bottom - hostRect.top
		};
		const position = {
			top: hostRect.bottom - height + this.tuiDropdownSidedOffset() + 1,
			left: hostRect.left - width - offset,
			right: hostRect.right + offset,
			bottom: hostRect.top - this.tuiDropdownSidedOffset() - 1
		};
		const better = available.top > available.bottom ? "top" : "bottom";
		const maxLeft = available.left > available.right ? position.left : position.right;
		const left = available[align] > width ? position[align] : maxLeft;
		if (available[this.previous] > height && direction || this.previous === better) {
			this.vertical.direction.next(this.previous);
			return [left, position[this.previous]];
		}
		this.previous = better;
		this.vertical.direction.next(better);
		return [left, position[better]];
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiDropdownPositionSided_BaseFactory;
			return function TuiDropdownPositionSided_Factory(__ngFactoryType__) {
				return (ɵTuiDropdownPositionSided_BaseFactory || (ɵTuiDropdownPositionSided_BaseFactory = ɵɵgetInheritedFactory(TuiDropdownPositionSided)))(__ngFactoryType__ || TuiDropdownPositionSided);
			};
		})();
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDropdownPositionSided,
			selectors: [[
				"",
				"tuiDropdownSided",
				""
			]],
			inputs: {
				tuiDropdownSided: [1, "tuiDropdownSided"],
				tuiDropdownSidedOffset: [1, "tuiDropdownSidedOffset"]
			},
			features: [ɵɵProvidersFeature([TuiDropdownPosition, tuiAsPositionAccessor(TuiDropdownPositionSided)]), ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPositionSided, [{
		type: Directive,
		args: [{
			selector: "[tuiDropdownSided]",
			providers: [TuiDropdownPosition, tuiAsPositionAccessor(TuiDropdownPositionSided)]
		}]
	}], null, null);
})();
var TuiDropdownSelection = class TuiDropdownSelection extends TuiDriver {
	constructor() {
		super((subscriber) => this.stream$.subscribe(subscriber));
		this.doc = inject(DOCUMENT);
		this.vcr = inject(ViewContainerRef);
		this.dropdown = inject(TuiDropdownDirective);
		this.el = tuiInjectElement();
		this.handler = computed((visible = this.tuiDropdownSelection()) => tuiIsString(visible) ? TUI_TRUE_HANDLER : visible);
		this.stream$ = combineLatest([
			toObservable$1(this.handler),
			inject(TUI_SELECTION_STREAM).pipe(map(() => this.getRange()), filter((range) => this.isValid(range)), distinctUntilChanged((x, y) => x.startOffset === y.startOffset && x.endOffset === y.endOffset && x.commonAncestorContainer === y.commonAncestorContainer)),
			merge(fromEvent(this.el, "scroll", {
				passive: true,
				capture: true
			})).pipe(throttleTime(16, void 0, {
				leading: false,
				trailing: true
			}), startWith(0))
		]).pipe(tap(([, range]) => {
			this.range = this.el.contains(range.commonAncestorContainer) && tuiIsTextNode(range.commonAncestorContainer) ? range : this.range;
		}), map(([handler, range]) => {
			const visible = this.el.contains(range.commonAncestorContainer) && handler(this.range) || this.inDropdown(range);
			const active = tuiGetFocused(this.doc);
			const textfield = active && tuiIsTextfield(active) && this.el.contains(active);
			return visible && textfield ? this.isCaretVisible(this.range) : visible;
		}));
		this.range = isPlatformBrowser(inject(PLATFORM_ID)) ? new Range() : {};
		this.type = "dropdown";
		this.tuiDropdownSelection = input("");
		this.tuiDropdownSelectionPosition = input("selection");
	}
	getClientRect() {
		switch (this.tuiDropdownSelectionPosition()) {
			case "tag": {
				const { commonAncestorContainer } = this.range;
				const element = tuiIsElement(commonAncestorContainer) ? commonAncestorContainer : commonAncestorContainer.parentNode;
				return element && tuiIsElement(element) ? element.getBoundingClientRect() : EMPTY_CLIENT_RECT;
			}
			case "word": return tuiGetWordRange(this.range).getBoundingClientRect();
			default: return this.range.getBoundingClientRect();
		}
	}
	ngOnDestroy() {
		if (this.ghost) this.ghostHost.removeChild(this.ghost);
	}
	get ghostHost() {
		return this.el.querySelector("tui-textfield .t-ghost") || this.el;
	}
	getRange() {
		const active = tuiGetFocused(this.doc);
		const selection = this.doc.getSelection();
		return (active && tuiIsTextfield(active) && this.el.contains(active) ? this.veryVerySadInputFix(active) : selection?.rangeCount && selection.getRangeAt(0) || this.range).cloneRange();
	}
	/**
	* Check if given range is at least partially inside dropdown
	*/
	inDropdown(range) {
		const { startContainer, endContainer } = range;
		const inDropdown = this.boxContains(range.commonAncestorContainer);
		const hostToDropdown = this.boxContains(endContainer) && this.el.contains(startContainer);
		const dropdownToHost = this.boxContains(startContainer) && this.el.contains(endContainer);
		return inDropdown || hostToDropdown || dropdownToHost;
	}
	/**
	* Check if Node is inside dropdown
	*/
	boxContains(node) {
		return !!this.dropdown.ref()?.location.nativeElement.contains(node);
	}
	/**
	* Check if range is not inside tui-textfield's DOM elements
	*/
	isValid(range) {
		return !this.el.contains(range.commonAncestorContainer) || !this.el.closest("tui-textfield") || range.intersectsNode(this.ghost || this.el);
	}
	veryVerySadInputFix(element) {
		const { ghost = this.initGhost(this.ghostHost) } = this;
		const { top, left, width, height } = this.ghostHost.getBoundingClientRect();
		const { selectionStart, selectionEnd, value } = element;
		const range = this.doc.createRange();
		const hostRect = this.ghostHost.getBoundingClientRect();
		ghost.style.top = tuiPx(top - hostRect.top);
		ghost.style.left = tuiPx(left - hostRect.left);
		ghost.style.width = tuiPx(width);
		ghost.style.height = tuiPx(height);
		ghost.textContent = `​${value} `;
		range.setStart(ghost.firstChild, selectionStart || 0);
		range.setEnd(ghost.firstChild, selectionEnd || 0);
		return range;
	}
	/**
	* Create an invisible DIV styled exactly like input/textarea element inside directive
	*/
	initGhost(element) {
		const ghost = this.doc.createElement("div");
		const { font, letterSpacing, textTransform, padding, borderTop } = getComputedStyle(element);
		ghost.style.position = "absolute";
		ghost.style.pointerEvents = "none";
		ghost.style.opacity = "0";
		ghost.style.whiteSpace = "pre-wrap";
		ghost.style.boxSizing = "border-box";
		ghost.style.borderTop = borderTop;
		ghost.style.font = font;
		ghost.style.letterSpacing = letterSpacing;
		ghost.style.textTransform = textTransform;
		ghost.style.padding = padding;
		this.ghostHost.appendChild(ghost);
		this.ghost = ghost;
		return ghost;
	}
	isCaretVisible(range) {
		const caret = range.getBoundingClientRect();
		const host = this.ghostHost.getBoundingClientRect();
		const styles = getComputedStyle(this.ghostHost);
		const fontSize = Number.parseFloat(styles.fontSize) || 16;
		const lineHeight = Number.parseFloat(styles.lineHeight) || fontSize * 1.2;
		const visibleTop = Math.max(caret.top, host.top);
		const visibleBottom = Math.min(caret.bottom, host.bottom);
		return Math.max(0, visibleBottom - visibleTop) >= lineHeight * .5;
	}
	static {
		this.ɵfac = function TuiDropdownSelection_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDropdownSelection)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDropdownSelection,
			selectors: [[
				"",
				"tuiDropdownSelection",
				""
			]],
			inputs: {
				tuiDropdownSelection: [1, "tuiDropdownSelection"],
				tuiDropdownSelectionPosition: [1, "tuiDropdownSelectionPosition"]
			},
			features: [ɵɵProvidersFeature([tuiAsDriver(TuiDropdownSelection), tuiAsRectAccessor(TuiDropdownSelection)]), ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownSelection, [{
		type: Directive,
		args: [{
			selector: "[tuiDropdownSelection]",
			providers: [tuiAsDriver(TuiDropdownSelection), tuiAsRectAccessor(TuiDropdownSelection)]
		}]
	}], () => [], null);
})();
var TuiWithDropdownOpen = class TuiWithDropdownOpen {
	static {
		this.ɵfac = function TuiWithDropdownOpen_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiWithDropdownOpen)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiWithDropdownOpen,
			features: [ɵɵHostDirectivesFeature([{
				directive: TuiDropdownOpen,
				inputs: [
					"tuiDropdownOpen",
					"open",
					"tuiDropdownEnabled",
					"tuiDropdownEnabled"
				],
				outputs: ["tuiDropdownOpenChange", "openChange"]
			}])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithDropdownOpen, [{
		type: Directive,
		args: [{ hostDirectives: [{
			directive: TuiDropdownOpen,
			inputs: ["tuiDropdownOpen: open", "tuiDropdownEnabled"],
			outputs: ["tuiDropdownOpenChange: openChange"]
		}] }]
	}], null, null);
})();
var TuiDropdown = [
	TuiDropdownOptionsDirective,
	TuiDropdownDriverDirective,
	TuiDropdownDirective,
	TuiDropdownComponent,
	TuiDropdownA11y,
	TuiDropdownOpen,
	TuiDropdownManual,
	TuiDropdownHover,
	TuiDropdownContent,
	TuiDropdownContext,
	TuiDropdownPosition,
	TuiDropdownPositionSided,
	TuiDropdownSelection
];
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-data-list.mjs
var _c0$7 = ["*"];
function TuiDataListComponent_Conditional_1_ng_container_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵtext(1);
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const text_r1 = ctx.polymorpheusOutlet;
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", text_r1, " ");
	}
}
function TuiDataListComponent_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "span", 0);
		ɵɵtemplate(1, TuiDataListComponent_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵproperty("polymorpheusOutlet", ctx_r1.emptyContent() || ctx_r1.fallback());
	}
}
var TUI_DATA_LIST_HOST = new InjectionToken(ngDevMode ? "TUI_DATA_LIST_HOST" : "");
function tuiAsDataListHost(host) {
	return tuiProvide(TUI_DATA_LIST_HOST, host);
}
var TUI_DATA_LIST_SIZE = new InjectionToken(ngDevMode ? "TUI_DATA_LIST_SIZE" : "");
function tuiInjectDataListSize() {
	const sizes = [
		"s",
		"m",
		"l"
	];
	const size = inject(TUI_DATA_LIST_SIZE, { optional: true }) || inject(TUI_DATA_LIST_HOST, { optional: true })?.size;
	return size && sizes.includes(size) ? size : "l";
}
/**
* Content for tuiOption component
*/
var TUI_OPTION_CONTENT = new InjectionToken(ngDevMode ? "TUI_OPTION_CONTENT" : "");
function tuiAsOptionContent(useValue) {
	return {
		provide: TUI_OPTION_CONTENT,
		useValue
	};
}
var TuiWithOptionContent = class TuiWithOptionContent {
	constructor() {
		this.local = null;
		this.global = inject(TUI_OPTION_CONTENT, { optional: true });
	}
	get content() {
		return this.global ?? this.local;
	}
	static {
		this.ɵfac = function TuiWithOptionContent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiWithOptionContent)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiWithOptionContent,
			contentQueries: function TuiWithOptionContent_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuery(dirIndex, TUI_OPTION_CONTENT, 5);
				if (rf & 2) {
					let _t;
					ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.local = _t.first);
				}
			}
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithOptionContent, [{ type: Directive }], null, { local: [{
		type: ContentChild,
		args: [TUI_OPTION_CONTENT, { descendants: true }]
	}] });
})();
var TuiOptionWithContent = class TuiOptionWithContent {
	constructor() {
		this.vcr = inject(ViewContainerRef);
		this.content = inject(TUI_OPTION_CONTENT, { optional: true });
		this.ref = this.content && createComponent(this.content, {
			environmentInjector: inject(EnvironmentInjector),
			elementInjector: inject(INJECTOR$1),
			hostElement: tuiInjectElement()
		});
		if (this.ref) {
			this.vcr.insert(this.ref.hostView);
			this.ref.changeDetectorRef.detectChanges();
		}
	}
	static {
		this.ɵfac = function TuiOptionWithContent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiOptionWithContent)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({ type: TuiOptionWithContent });
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptionWithContent, [{ type: Directive }], () => [], null);
})();
var TuiOptionWithValue = class TuiOptionWithValue {
	constructor() {
		this.host = inject(TUI_DATA_LIST_HOST, { optional: true });
		this.disabled = input(false);
		this.value = input();
	}
	onClick(value = this.value()) {
		if (value !== void 0) this.host?.handleOption?.(value);
	}
	static {
		this.ɵfac = function TuiOptionWithValue_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiOptionWithValue)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiOptionWithValue,
			selectors: [
				[
					"button",
					"tuiOption",
					"",
					"value",
					""
				],
				[
					"a",
					"tuiOption",
					"",
					"value",
					""
				],
				[
					"label",
					"tuiOption",
					"",
					"value",
					""
				]
			],
			hostBindings: function TuiOptionWithValue_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("click", function TuiOptionWithValue_click_HostBindingHandler() {
					return ctx.onClick();
				});
			},
			inputs: {
				disabled: [1, "disabled"],
				value: [1, "value"]
			},
			features: [ɵɵHostDirectivesFeature([TuiOptionWithContent])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptionWithValue, [{
		type: Directive,
		args: [{
			selector: "button[tuiOption][value], a[tuiOption][value], label[tuiOption][value]",
			hostDirectives: [TuiOptionWithContent],
			host: { "(click)": "onClick()" }
		}]
	}], null, null);
})();
var TuiDataListComponent = class TuiDataListComponent {
	constructor() {
		this.ngZone = inject(NgZone);
		this.destroyRef = inject(DestroyRef);
		this.el = tuiInjectElement();
		this.cdr = inject(ChangeDetectorRef);
		this.optionsQuery = contentChildren(forwardRef(() => TuiOptionWithValue), { descendants: true });
		this.fallback = inject(TUI_NOTHING_FOUND_MESSAGE);
		this.empty = signal(false);
		this.emptyContent = input();
		this.size = input(tuiInjectDataListSize());
		this.options = computed(() => this.optionsQuery().map(({ value }) => value()).filter(tuiIsPresent));
	}
	onKeyDownArrow(current, step) {
		const { elements } = this;
		tuiMoveFocus(elements.indexOf(current), elements, step);
	}
	handleFocusLossIfNecessary(element = this.el) {
		if (tuiIsFocusedIn(element)) this.origin?.focus({ preventScroll: true });
	}
	ngAfterContentChecked() {
		timer(0).pipe(tuiZonefree(this.ngZone), tuiTakeUntilDestroyed(this.destroyRef)).subscribe(() => {
			this.empty.set(!this.elements.length);
			this.cdr.detectChanges();
		});
	}
	get role() {
		return this.el.parentElement?.closest("[role=\"menu\"],[role=\"listbox\"]") ? null : this.el.role;
	}
	onFocusIn(relatedTarget, currentTarget) {
		if (!currentTarget.contains(relatedTarget) && !this.origin) this.origin = relatedTarget;
	}
	get elements() {
		return Array.from(this.el.querySelectorAll("[tuiOption]:not(.t-empty)"));
	}
	static {
		this.ɵfac = function TuiDataListComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDataListComponent)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiDataListComponent,
			selectors: [["tui-data-list"]],
			contentQueries: function TuiDataListComponent_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.optionsQuery, TuiOptionWithValue, 5);
				if (rf & 2) ɵɵqueryAdvance();
			},
			hostAttrs: [
				"data-tui-version",
				"5.17.0",
				"role",
				"listbox"
			],
			hostVars: 2,
			hostBindings: function TuiDataListComponent_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("focusin", function TuiDataListComponent_focusin_HostBindingHandler($event) {
					return ctx.onFocusIn($event.relatedTarget, $event.currentTarget);
				})("keydown.arrowDown.prevent", function TuiDataListComponent_keydown_arrowDown_prevent_HostBindingHandler($event) {
					return ctx.onKeyDownArrow($event.target, 1);
				})("keydown.arrowUp.prevent", function TuiDataListComponent_keydown_arrowUp_prevent_HostBindingHandler($event) {
					return ctx.onKeyDownArrow($event.target, -1);
				})("keydown.shift.tab", function TuiDataListComponent_keydown_shift_tab_HostBindingHandler() {
					return ctx.handleFocusLossIfNecessary();
				})("keydown.tab", function TuiDataListComponent_keydown_tab_HostBindingHandler() {
					return ctx.handleFocusLossIfNecessary();
				})("mousedown.prevent", function TuiDataListComponent_mousedown_prevent_HostBindingHandler() {
					return 0;
				})("mouseleave", function TuiDataListComponent_mouseleave_HostBindingHandler($event) {
					return ctx.handleFocusLossIfNecessary($event.target);
				})("wheel.zoneless.passive", function TuiDataListComponent_wheel_zoneless_passive_HostBindingHandler() {
					return ctx.handleFocusLossIfNecessary();
				});
				if (rf & 2) ɵɵattribute("data-size", ctx.size())("role", ctx.role);
			},
			inputs: {
				emptyContent: [1, "emptyContent"],
				size: [1, "size"]
			},
			features: [ɵɵProvidersFeature([
				tuiCellOptionsProvider(() => ({ size: inject(TuiDataListComponent).size() })),
				tuiAsAuxiliary(TuiDataListComponent),
				{
					provide: TUI_OPTION_CONTENT,
					useFactory: () => inject(TuiWithOptionContent, { optional: true })?.content ?? inject(TUI_OPTION_CONTENT, {
						skipSelf: true,
						optional: true
					})
				}
			])],
			ngContentSelectors: _c0$7,
			decls: 2,
			vars: 1,
			consts: [[
				"tuiCell",
				"",
				"tuiOption",
				"",
				1,
				"t-empty"
			], [4, "polymorpheusOutlet"]],
			template: function TuiDataListComponent_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵprojection(0);
					ɵɵconditionalCreate(1, TuiDataListComponent_Conditional_1_Template, 2, 1, "span", 0);
				}
				if (rf & 2) {
					ɵɵadvance();
					ɵɵconditional(ctx.empty() ? 1 : -1);
				}
			},
			dependencies: [PolymorpheusOutlet, TuiCell],
			styles: ["tui-data-list:where(*[data-tui-version=\"5.17.0\"]){display:flex;flex-direction:column;padding:.25rem}tui-data-list:where(*[data-tui-version=\"5.17.0\"]):focus-within [tuiOption]._with-dropdown:not(:focus){background:transparent}tui-data-list:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiOption]{min-block-size:0;font:var(--%NS%tui-typography-ui-s);padding:.375rem}tui-data-list:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiOption]:before,tui-data-list:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiOption]:after{font-size:1rem}tui-data-list:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiOption]{min-block-size:2.25rem;font:var(--%NS%tui-typography-ui-s);padding:.5rem .375rem}tui-data-list:where(*[data-tui-version=\"5.17.0\"])[data-size=l]{gap:.125rem;padding:.5rem}tui-data-list:where(*[data-tui-version=\"5.17.0\"])[data-size=l] [tuiOption]{font:var(--%NS%tui-typography-ui-m);padding-inline:.5rem}tui-data-list:where(*[data-tui-version=\"5.17.0\"])[data-size=l] hr{block-size:1rem;border-inline-width:.5rem}tui-data-list:where(*[data-tui-version=\"5.17.0\"]) [tuiOption]{transition-property:background;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard);box-sizing:border-box;border-radius:var(--%NS%tui-radius-s);outline:none!important;cursor:pointer;word-break:break-word;text-transform:inherit}tui-data-list:where(*[data-tui-version=\"5.17.0\"]) [tuiOption]:disabled{opacity:var(--%NS%tui-disabled-opacity);cursor:default}@media(hover:hover)and (pointer:fine){tui-data-list:where(*[data-tui-version=\"5.17.0\"]) [tuiOption]:hover:not(:disabled){background:var(--%NS%tui-background-neutral-1)}}tui-data-list:where(*[data-tui-version=\"5.17.0\"]) [tuiOption]:active:not(:disabled),tui-data-list:where(*[data-tui-version=\"5.17.0\"]) [tuiOption]:focus-within,tui-data-list:where(*[data-tui-version=\"5.17.0\"]) [tuiOption]._with-dropdown{background:var(--%NS%tui-background-neutral-1)}tui-data-list:where(*[data-tui-version=\"5.17.0\"]) [tuiOption]:after{margin-inline-start:auto}tui-data-list:where(*[data-tui-version=\"5.17.0\"])>.t-empty{pointer-events:none;color:var(--%NS%tui-text-tertiary)}tui-data-list:where(*[data-tui-version=\"5.17.0\"]) hr{position:relative;margin:0;block-size:.75rem;border:.375rem solid transparent;border-block:0}tui-data-list:where(*[data-tui-version=\"5.17.0\"]) hr+hr,tui-data-list:where(*[data-tui-version=\"5.17.0\"]) hr:first-child,tui-data-list:where(*[data-tui-version=\"5.17.0\"]) hr:last-child{display:none}tui-data-list:where(*[data-tui-version=\"5.17.0\"]) hr:before{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);content:\"\";block-size:1px;inline-size:100%;background:var(--%NS%tui-border-normal)}tui-opt-group:where(*[data-tui-version=\"5.17.0\"]){position:relative;display:flex;font-weight:700!important;gap:inherit;color:var(--%NS%tui-text-primary);flex-direction:column}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version=\"5.17.0\"]){font:var(--%NS%tui-typography-body-s)}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version=\"5.17.0\"]):before{padding:.1875rem .375rem}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version=\"5.17.0\"]){font:var(--%NS%tui-typography-ui-m)}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version=\"5.17.0\"]):before{padding:.375rem}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version=\"5.17.0\"]){font:var(--%NS%tui-typography-ui-l)}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version=\"5.17.0\"]):before{padding:.5rem}tui-opt-group:where(*[data-tui-version=\"5.17.0\"]):empty:before,tui-opt-group:where(*[data-tui-version=\"5.17.0\"])[data-label=\"\"]:before{display:none}tui-opt-group:where(*[data-tui-version=\"5.17.0\"]):before{content:attr(data-label);word-break:break-word}tui-sheet-dialog tui-opt-group:where(*[data-tui-version=\"5.17.0\"]):before{font:var(--%NS%tui-typography-heading-h6);padding:.5rem 0!important}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListComponent, [{
		type: Component,
		args: [{
			selector: "tui-data-list",
			imports: [PolymorpheusOutlet, TuiCell],
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			providers: [
				tuiCellOptionsProvider(() => ({ size: inject(TuiDataListComponent).size() })),
				tuiAsAuxiliary(TuiDataListComponent),
				{
					provide: TUI_OPTION_CONTENT,
					useFactory: () => inject(TuiWithOptionContent, { optional: true })?.content ?? inject(TUI_OPTION_CONTENT, {
						skipSelf: true,
						optional: true
					})
				}
			],
			host: {
				"data-tui-version": "5.17.0",
				role: "listbox",
				"[attr.data-size]": "size()",
				"[attr.role]": "role",
				"(focusin)": "onFocusIn($event.relatedTarget, $event.currentTarget)",
				"(keydown.arrowDown.prevent)": "onKeyDownArrow($event.target, 1)",
				"(keydown.arrowUp.prevent)": "onKeyDownArrow($event.target, -1)",
				"(keydown.shift.tab)": "handleFocusLossIfNecessary()",
				"(keydown.tab)": "handleFocusLossIfNecessary()",
				"(mousedown.prevent)": "(0)",
				"(mouseleave)": "handleFocusLossIfNecessary($event.target)",
				"(wheel.zoneless.passive)": "handleFocusLossIfNecessary()"
			},
			template: "<ng-content />\n@if (empty()) {\n    <!-- tuiOption selector purely for cosmetics, do not import -->\n    <span\n        tuiCell\n        tuiOption\n        class=\"t-empty\"\n    >\n        <ng-container *polymorpheusOutlet=\"emptyContent() || fallback() as text\">\n            {{ text }}\n        </ng-container>\n    </span>\n}\n",
			styles: ["tui-data-list:where(*[data-tui-version=\"5.17.0\"]){display:flex;flex-direction:column;padding:.25rem}tui-data-list:where(*[data-tui-version=\"5.17.0\"]):focus-within [tuiOption]._with-dropdown:not(:focus){background:transparent}tui-data-list:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiOption]{min-block-size:0;font:var(--tui-typography-ui-s);padding:.375rem}tui-data-list:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiOption]:before,tui-data-list:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiOption]:after{font-size:1rem}tui-data-list:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiOption]{min-block-size:2.25rem;font:var(--tui-typography-ui-s);padding:.5rem .375rem}tui-data-list:where(*[data-tui-version=\"5.17.0\"])[data-size=l]{gap:.125rem;padding:.5rem}tui-data-list:where(*[data-tui-version=\"5.17.0\"])[data-size=l] [tuiOption]{font:var(--tui-typography-ui-m);padding-inline:.5rem}tui-data-list:where(*[data-tui-version=\"5.17.0\"])[data-size=l] hr{block-size:1rem;border-inline-width:.5rem}tui-data-list:where(*[data-tui-version=\"5.17.0\"]) [tuiOption]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);box-sizing:border-box;border-radius:var(--tui-radius-s);outline:none!important;cursor:pointer;word-break:break-word;text-transform:inherit}tui-data-list:where(*[data-tui-version=\"5.17.0\"]) [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}@media(hover:hover)and (pointer:fine){tui-data-list:where(*[data-tui-version=\"5.17.0\"]) [tuiOption]:hover:not(:disabled){background:var(--tui-background-neutral-1)}}tui-data-list:where(*[data-tui-version=\"5.17.0\"]) [tuiOption]:active:not(:disabled),tui-data-list:where(*[data-tui-version=\"5.17.0\"]) [tuiOption]:focus-within,tui-data-list:where(*[data-tui-version=\"5.17.0\"]) [tuiOption]._with-dropdown{background:var(--tui-background-neutral-1)}tui-data-list:where(*[data-tui-version=\"5.17.0\"]) [tuiOption]:after{margin-inline-start:auto}tui-data-list:where(*[data-tui-version=\"5.17.0\"])>.t-empty{pointer-events:none;color:var(--tui-text-tertiary)}tui-data-list:where(*[data-tui-version=\"5.17.0\"]) hr{position:relative;margin:0;block-size:.75rem;border:.375rem solid transparent;border-block:0}tui-data-list:where(*[data-tui-version=\"5.17.0\"]) hr+hr,tui-data-list:where(*[data-tui-version=\"5.17.0\"]) hr:first-child,tui-data-list:where(*[data-tui-version=\"5.17.0\"]) hr:last-child{display:none}tui-data-list:where(*[data-tui-version=\"5.17.0\"]) hr:before{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);content:\"\";block-size:1px;inline-size:100%;background:var(--tui-border-normal)}tui-opt-group:where(*[data-tui-version=\"5.17.0\"]){position:relative;display:flex;font-weight:700!important;gap:inherit;color:var(--tui-text-primary);flex-direction:column}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version=\"5.17.0\"]){font:var(--tui-typography-body-s)}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version=\"5.17.0\"]):before{padding:.1875rem .375rem}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version=\"5.17.0\"]){font:var(--tui-typography-ui-m)}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version=\"5.17.0\"]):before{padding:.375rem}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version=\"5.17.0\"]){font:var(--tui-typography-ui-l)}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version=\"5.17.0\"]):before{padding:.5rem}tui-opt-group:where(*[data-tui-version=\"5.17.0\"]):empty:before,tui-opt-group:where(*[data-tui-version=\"5.17.0\"])[data-label=\"\"]:before{display:none}tui-opt-group:where(*[data-tui-version=\"5.17.0\"]):before{content:attr(data-label);word-break:break-word}tui-sheet-dialog tui-opt-group:where(*[data-tui-version=\"5.17.0\"]):before{font:var(--tui-typography-heading-h6);padding:.5rem 0!important}\n"]
		}]
	}], null, null);
})();
var TuiOptGroup = class TuiOptGroup {
	constructor() {
		this.label = input();
	}
	static {
		this.ɵfac = function TuiOptGroup_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiOptGroup)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiOptGroup,
			selectors: [["tui-opt-group"]],
			hostAttrs: [
				"data-tui-version",
				"5.17.0",
				"role",
				"group"
			],
			hostVars: 1,
			hostBindings: function TuiOptGroup_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵattribute("data-label", ctx.label() || "");
			},
			inputs: { label: [1, "label"] }
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptGroup, [{
		type: Directive,
		args: [{
			selector: "tui-opt-group",
			host: {
				"data-tui-version": "5.17.0",
				role: "group",
				"[attr.data-label]": "label() || \"\""
			}
		}]
	}], null, null);
})();
var TuiOption = class TuiOption {
	constructor() {
		this.isMobile = inject(WA_IS_MOBILE);
		this.el = tuiInjectElement();
		this.datalist = inject(forwardRef(() => TuiDataListComponent), { optional: true });
		this.dropdown = inject(TuiDropdownDirective, {
			self: true,
			optional: true
		})?.ref;
		this.disabled = input(false);
	}
	ngOnDestroy() {
		this.datalist?.handleFocusLossIfNecessary(this.el);
	}
	onMouseMove() {
		if (!this.isMobile && !tuiIsFocused(this.el) && this.datalist && this.el.closest("[tuiDataListDropdownManager]")) this.el.focus({ preventScroll: true });
	}
	static {
		this.ɵfac = function TuiOption_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiOption)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiOption,
			selectors: [
				[
					"button",
					"tuiOption",
					""
				],
				[
					"a",
					"tuiOption",
					""
				],
				[
					"label",
					"tuiOption",
					""
				]
			],
			hostAttrs: [
				"role",
				"option",
				"type",
				"button"
			],
			hostVars: 3,
			hostBindings: function TuiOption_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("mousemove.zoneless", function TuiOption_mousemove_zoneless_HostBindingHandler() {
					return ctx.onMouseMove();
				});
				if (rf & 2) {
					ɵɵattribute("disabled", ctx.disabled() || null);
					ɵɵclassProp("_with-dropdown", ctx.dropdown == null ? null : ctx.dropdown());
				}
			},
			inputs: { disabled: [1, "disabled"] },
			features: [ɵɵHostDirectivesFeature([TuiWithIcons, TuiCell])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOption, [{
		type: Directive,
		args: [{
			selector: "button[tuiOption], a[tuiOption], label[tuiOption]",
			hostDirectives: [TuiWithIcons, TuiCell],
			host: {
				role: "option",
				type: "button",
				"[attr.disabled]": "disabled() || null",
				"[class._with-dropdown]": "dropdown?.()",
				"(mousemove.zoneless)": "onMouseMove()"
			}
		}]
	}], null, null);
})();
var TuiDataList = [
	TuiDataListComponent,
	TuiOption,
	TuiOptionWithValue,
	TuiOptGroup
];
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-classes.mjs
var TuiValueTransformer = class {};
var TUI_IDENTITY_VALUE_TRANSFORMER = {
	fromControlValue: identity,
	toControlValue: identity
};
var FLAGS = {
	self: true,
	optional: true
};
/**
* Basic ControlValueAccessor class to build form components upon
*/
var TuiControl = class TuiControl {
	constructor() {
		this.fallback = inject(TUI_FALLBACK_VALUE, FLAGS);
		this.refresh$ = new Subject();
		this.internal = signal(this.fallback);
		this.control = inject(NgControl, { self: true });
		this.cdr = inject(ChangeDetectorRef);
		this.transformer = inject(TuiValueTransformer, FLAGS) ?? TUI_IDENTITY_VALUE_TRANSFORMER;
		this.value = computed(() => this.internal() ?? this.fallback);
		this.readOnly = input(false);
		this.pseudoInvalid = input(void 0, { alias: "invalid" });
		this.touched = signal(false);
		this.status = signal(void 0);
		this.disabled = computed(() => this.status() === "DISABLED");
		this.interactive = computed(() => !this.disabled() && !this.readOnly());
		this.invalid = computed(() => {
			const pseudoInvalid = this.pseudoInvalid();
			return pseudoInvalid == null ? this.interactive() && this.touched() && this.status() === "INVALID" : pseudoInvalid && this.interactive();
		});
		this.mode = computed(() => this.readOnly() ? "readonly" : this.invalid() ? "invalid" : "valid");
		this.onTouched = EMPTY_FUNCTION;
		this.onChange = EMPTY_FUNCTION;
		this.control.valueAccessor = this;
		this.refresh$.pipe(delay(0), startWith(null), map(() => this.control.control), filter(Boolean), distinctUntilChanged(), switchMap((c) => merge(c.valueChanges, c.statusChanges, c.events).pipe(startWith(null))), takeUntilDestroyed()).subscribe(() => this.update());
	}
	registerOnChange(onChange) {
		this.refresh$.next();
		this.onChange = (value) => {
			if (value === untracked(this.internal)) return;
			onChange(this.transformer.toControlValue(value));
			this.internal.set(value);
			this.update();
		};
	}
	registerOnTouched(onTouched) {
		this.onTouched = () => {
			onTouched();
			this.update();
		};
	}
	setDisabledState() {
		this.update();
	}
	writeValue(value) {
		const safe = this.control instanceof NgModel ? this.control.model : value;
		this.internal.set(this.transformer.fromControlValue(safe));
		this.update();
	}
	update() {
		this.status.set(this.control.control?.status);
		this.touched.set(!!this.control.control?.touched);
		this.cdr.markForCheck();
	}
	static {
		this.ɵfac = function TuiControl_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiControl)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiControl,
			inputs: {
				readOnly: [1, "readOnly"],
				pseudoInvalid: [
					1,
					"invalid",
					"pseudoInvalid"
				]
			}
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiControl, [{ type: Directive }], () => [], null);
})();
var TuiValidationError = class {
	constructor(message, context = {}) {
		this.message = message;
		this.context = context;
	}
};
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-id.mjs
var TuiId = class TuiId {
	constructor() {
		this.el = tuiInjectElement();
		this.autoId = tuiGenerateId();
	}
	get id() {
		return this.el.id || this.autoId;
	}
	static {
		this.ɵfac = function TuiId_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiId)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiId,
			selectors: [[
				"",
				"tuiId",
				""
			]],
			hostVars: 1,
			hostBindings: function TuiId_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵdomProperty("id", ctx.id);
			}
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiId, [{
		type: Directive,
		args: [{
			selector: "[tuiId]",
			host: { "[id]": "id" }
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-error.mjs
var _c0$6 = () => ({});
function TuiErrorComponent_Conditional_0_span_1_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "span", 2);
	if (rf & 2) {
		const text_r1 = ctx.polymorpheusOutlet;
		ɵɵproperty("innerHTML", text_r1, ɵɵsanitizeHtml);
	}
}
function TuiErrorComponent_Conditional_0_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "span", 0);
		ɵɵtemplate(1, TuiErrorComponent_Conditional_0_span_1_Template, 1, 1, "span", 1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const error_r2 = ctx;
		const ctx_r2 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵproperty("polymorpheusOutlet", error_r2.message || ctx_r2.default())("polymorpheusOutletContext", error_r2.context || ɵɵpureFunction0(2, _c0$6));
	}
}
var TuiErrorComponent = class TuiErrorComponent {
	constructor() {
		this.default = inject(TUI_DEFAULT_ERROR_MESSAGE);
		this.content = computed((error = this.error()) => tuiIsString(error) ? new TuiValidationError(error) : error);
		this.error = input(null);
	}
	static {
		this.ɵfac = function TuiErrorComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiErrorComponent)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiErrorComponent,
			selectors: [["tui-error"]],
			hostVars: 2,
			hostBindings: function TuiErrorComponent_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵclassProp("_error", ctx.content());
			},
			inputs: { error: [1, "error"] },
			decls: 1,
			vars: 1,
			consts: [
				[
					"tuiAnimated",
					"",
					1,
					"t-message-text"
				],
				[
					3,
					"innerHTML",
					4,
					"polymorpheusOutlet",
					"polymorpheusOutletContext"
				],
				[3, "innerHTML"]
			],
			template: function TuiErrorComponent_Template(rf, ctx) {
				if (rf & 1) ɵɵconditionalCreate(0, TuiErrorComponent_Conditional_0_Template, 2, 3, "span", 0);
				if (rf & 2) {
					let tmp_0_0;
					ɵɵconditional((tmp_0_0 = ctx.content()) ? 0 : -1, tmp_0_0);
				}
			},
			dependencies: [PolymorpheusOutlet, TuiAnimated],
			styles: ["[_nghost-%COMP%]{transition-property:grid-template-rows;transition-duration:calc(var(--%NS%tui-duration) / 2);transition-timing-function:var(--%NS%tui-curve-productive-standard);display:grid;font:var(--%NS%tui-typography-body-s);color:var(--%NS%tui-text-negative);overflow-wrap:break-word;grid-template-rows:0fr}._error[_nghost-%COMP%]{grid-template-rows:1fr;transition-duration:var(--%NS%tui-duration)}.t-message-text[_ngcontent-%COMP%]{white-space:pre-line;grid-area:1 / 1 / span 2}.t-message-text.tui-enter[_ngcontent-%COMP%]{animation-name:tuiFade}.t-message-text.tui-leave[_ngcontent-%COMP%]{animation-name:tuiFade;animation-duration:calc(var(--%NS%tui-duration) / 2)}.t-message-text[_ngcontent-%COMP%]:before{content:\"\";line-height:calc(24 / 14);vertical-align:bottom}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiErrorComponent, [{
		type: Component,
		args: [{
			selector: "tui-error",
			imports: [PolymorpheusOutlet, TuiAnimated],
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: { "[class._error]": "content()" },
			template: "@if (content(); as error) {\n    <span\n        tuiAnimated\n        class=\"t-message-text\"\n    >\n        <span\n            *polymorpheusOutlet=\"error.message || default() as text; context: error.context || {}\"\n            [innerHTML]=\"text\"\n        ></span>\n    </span>\n}\n",
			styles: [":host{transition-property:grid-template-rows;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);display:grid;font:var(--tui-typography-body-s);color:var(--tui-text-negative);overflow-wrap:break-word;grid-template-rows:0fr}:host._error{grid-template-rows:1fr;transition-duration:var(--tui-duration)}.t-message-text{white-space:pre-line;grid-area:1 / 1 / span 2}.t-message-text.tui-enter{animation-name:tuiFade}.t-message-text.tui-leave{animation-name:tuiFade;animation-duration:calc(var(--tui-duration) / 2)}.t-message-text:before{content:\"\";line-height:calc(24 / 14);vertical-align:bottom}\n"]
		}]
	}], null, null);
})();
var TuiErrorDirective = class TuiErrorDirective {
	constructor() {
		this.el = tuiInjectElement();
		this.content = inject(TUI_VALIDATION_ERRORS);
		this.control = new BehaviorSubject(null);
		this.errors = toSignal(this.control.pipe(filter(Boolean), distinctUntilChanged(), switchMap((control) => control.events.pipe(startWith(null), map(() => !control.disabled && control.touched && control.errors)))));
		this.key = computed((errors = this.errors() || {}) => this.order().find((id) => errors[id]) || Object.keys(errors)[0] || "");
		this.order = input([]);
		this.error = tuiDirectiveBinding(TuiErrorComponent, "error", computed((errors = this.errors() || null) => errors && this.getError(errors[this.key()], this.content[this.key()])), {
			self: true,
			optional: true
		});
	}
	registerOnChange() {}
	registerOnTouched() {}
	writeValue() {}
	validate(control) {
		this.control.next(control);
		return null;
	}
	onValidator(validator) {
		if (this.control.value && validator.control === this.control.value) validator.id = this.el.id;
	}
	getError(context, content) {
		context = isSignal(context) ? context() : context;
		if (context instanceof TuiValidationError) return context;
		if (content === void 0 && isContent(context)) return getError(context);
		if (isSignal(content)) return getError(content(), context);
		if (content instanceof Function) {
			const message = content(context);
			return getError(isSignal(message) ? message() : message, context);
		}
		return getError(content, context);
	}
	static {
		this.ɵfac = function TuiErrorDirective_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiErrorDirective)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiErrorDirective,
			selectors: [
				[
					"tui-error",
					"ngModel",
					""
				],
				[
					"tui-error",
					"formControlName",
					""
				],
				[
					"tui-error",
					"formControl",
					""
				],
				[
					"tui-error",
					"formGroup",
					""
				],
				[
					"tui-error",
					"formGroupName",
					""
				],
				[
					"tui-error",
					"formArrayName",
					""
				],
				[
					"tui-error",
					"formArray",
					""
				]
			],
			hostAttrs: ["aria-live", "polite"],
			hostBindings: function TuiErrorDirective_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("tui-validator.zoneless", function TuiErrorDirective_tui_validator_zoneless_HostBindingHandler($event) {
					return ctx.onValidator($event.detail);
				}, ɵɵresolveDocument);
			},
			inputs: { order: [1, "order"] },
			features: [ɵɵProvidersFeature([tuiProvide(NG_VALUE_ACCESSOR, TuiErrorDirective, true), tuiProvide(NG_VALIDATORS, TuiErrorDirective, true)]), ɵɵHostDirectivesFeature([TuiId])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiErrorDirective, [{
		type: Directive,
		args: [{
			selector: "tui-error[ngModel], tui-error[formControlName], tui-error[formControl], tui-error[formGroup], tui-error[formGroupName], tui-error[formArrayName], tui-error[formArray]",
			providers: [tuiProvide(NG_VALUE_ACCESSOR, TuiErrorDirective, true), tuiProvide(NG_VALIDATORS, TuiErrorDirective, true)],
			hostDirectives: [TuiId],
			host: {
				"aria-live": "polite",
				"(document:tui-validator.zoneless)": "onValidator($event.detail)"
			}
		}]
	}], null, null);
})();
function getError(content = "", context) {
	return new TuiValidationError(content, context);
}
function isContent(value) {
	return tuiIsString(value) || value instanceof TemplateRef || value instanceof PolymorpheusTemplate || value instanceof PolymorpheusComponent;
}
var TuiErrorPipe = class TuiErrorPipe {
	constructor() {
		this.control = inject(NgControl);
		this.directive = new TuiErrorDirective();
	}
	transform(order) {
		untracked(() => {
			this.directive.validate(this.control.control);
			tuiSetSignal(this.directive.order, order);
		});
		const error = this.directive.error();
		if (!error) return "";
		return typeof error.message === "function" ? error.message(error.context) : error.message;
	}
	static {
		this.ɵfac = function TuiErrorPipe_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiErrorPipe)();
		};
	}
	static {
		this.ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
			name: "tuiError",
			type: TuiErrorPipe,
			pure: false
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiErrorPipe, [{
		type: Pipe,
		args: [{
			name: "tuiError",
			pure: false
		}]
	}], null, null);
})();
var TuiError = [
	TuiErrorComponent,
	TuiErrorDirective,
	TuiErrorPipe
];
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-expand.mjs
var _c0$5 = ["*"];
function TuiExpand_Conditional_1_Template(rf, ctx) {
	if (rf & 1) ɵɵelementContainer(0, 1);
	if (rf & 2) ɵɵproperty("ngTemplateOutlet", ɵɵnextContext().content() || null);
}
var TuiExpand = class TuiExpand {
	constructor() {
		this.content = contentChild(TuiItem, { read: TemplateRef });
		this.open = signal(false);
		this.expanded = input(false);
	}
	ngOnInit() {
		this.open.set(this.expanded());
	}
	onTransitionEnd({ propertyName }) {
		if (propertyName === "grid-template-rows") this.open.set(this.expanded());
	}
	static {
		this.ɵfac = function TuiExpand_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiExpand)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiExpand,
			selectors: [["tui-expand"]],
			contentQueries: function TuiExpand_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.content, TuiItem, 5, TemplateRef);
				if (rf & 2) ɵɵqueryAdvance();
			},
			hostVars: 4,
			hostBindings: function TuiExpand_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("transitionend.self", function TuiExpand_transitionend_self_HostBindingHandler($event) {
					return ctx.onTransitionEnd($event);
				});
				if (rf & 2) ɵɵclassProp("_expanded", ctx.expanded())("_open", ctx.open());
			},
			inputs: { expanded: [1, "expanded"] },
			ngContentSelectors: _c0$5,
			decls: 3,
			vars: 1,
			consts: [[1, "t-wrapper"], [3, "ngTemplateOutlet"]],
			template: function TuiExpand_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵelementStart(0, "div", 0);
					ɵɵconditionalCreate(1, TuiExpand_Conditional_1_Template, 1, 1, "ng-container", 1);
					ɵɵprojection(2);
					ɵɵelementEnd();
				}
				if (rf & 2) {
					ɵɵadvance();
					ɵɵconditional(ctx.expanded() || ctx.open() ? 1 : -1);
				}
			},
			dependencies: [NgTemplateOutlet],
			styles: ["[_nghost-%COMP%]{transition-property:grid-template-rows,padding;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard);position:relative;display:grid;grid-template-rows:0fr;transition-delay:1ms}[_nghost-%COMP%]:not(._expanded){padding-block:0}._expanded[_nghost-%COMP%]{visibility:visible;grid-template-rows:1fr}._expanded[_nghost-%COMP%] > .t-wrapper[_ngcontent-%COMP%]{opacity:1;visibility:visible}._expanded._open[_nghost-%COMP%] > .t-wrapper[_ngcontent-%COMP%]{overflow:visible}.t-wrapper[_ngcontent-%COMP%]{transition-property:all;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard);grid-row:1 / span 2;overflow:hidden;opacity:0;visibility:hidden}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpand, [{
		type: Component,
		args: [{
			selector: "tui-expand",
			imports: [NgTemplateOutlet],
			template: `
        <div class="t-wrapper">
            @if (expanded() || open()) {
                <ng-container [ngTemplateOutlet]="content() || null" />
            }
            <ng-content />
        </div>
    `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: {
				"[class._expanded]": "expanded()",
				"[class._open]": "open()",
				"(transitionend.self)": "onTransitionEnd($event)"
			},
			styles: [":host{transition-property:grid-template-rows,padding;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);position:relative;display:grid;grid-template-rows:0fr;transition-delay:1ms}:host:not(._expanded){padding-block:0}:host._expanded{visibility:visible;grid-template-rows:1fr}:host._expanded>.t-wrapper{opacity:1;visibility:visible}:host._expanded._open>.t-wrapper{overflow:visible}.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);grid-row:1 / span 2;overflow:hidden;opacity:0;visibility:hidden}\n"]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-icon.mjs
var TuiIcon = class TuiIcon {
	constructor() {
		this.icons = inject(TuiIcons);
		this.mask = computed(() => this.icons.resolve(this.background()));
		this.background = input("");
	}
	static {
		this.ɵfac = function TuiIcon_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiIcon)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiIcon,
			selectors: [[
				"tui-icon",
				3,
				"tuiBadge",
				""
			]],
			hostVars: 2,
			hostBindings: function TuiIcon_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵstyleProp("--%NS%t-icon-bg", ctx.mask());
			},
			inputs: { background: [1, "background"] },
			features: [ɵɵHostDirectivesFeature([{
				directive: TuiIcons,
				inputs: [
					"iconStart",
					"icon",
					"iconEnd",
					"badge"
				]
			}])],
			decls: 0,
			vars: 0,
			template: function TuiIcon_Template(rf, ctx) {},
			styles: ["tui-icon:where(*[data-tui-version=\"5.17.0\"]){--%NS%tui-icon-size: 1em;position:relative;display:inline-flex;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask-image:var(--%NS%t-icon-bg);mask-image:var(--%NS%t-icon-bg);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(100% + 10 * var(--%NS%tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--%NS%tui-stroke-width)) 100%;zoom:calc(100%*clamp(0px,var(--%NS%tui-font-offset) - 10px,1px)/.8px)}@media(hover:hover)and (pointer:fine){tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-appearance=icon]:hover{color:var(--%NS%tui-text-secondary)}}tui-icon:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:before,tui-icon:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:after{zoom:1}tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-end]:before{-webkit-mask-image:var(--%NS%t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:var(--%NS%t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);-webkit-mask-composite:source-in;mask-composite:intersect}tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-end][data-icon-start=img]:before,tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-end][data-icon-start=font]:before{-webkit-mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em)}tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-end]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-start]:before{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-start]:after{transform:translate(36%,36%);--%NS%tui-icon-size: .5715em}tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-start=font]:before,tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-end=font]:after{zoom:.667}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcon, [{
		type: Component,
		args: [{
			selector: "tui-icon:not([tuiBadge])",
			template: "",
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			hostDirectives: [{
				directive: TuiIcons,
				inputs: ["iconStart: icon", "iconEnd: badge"]
			}],
			host: { "[style.--t-icon-bg]": "mask()" },
			styles: ["tui-icon:where(*[data-tui-version=\"5.17.0\"]){--tui-icon-size: 1em;position:relative;display:inline-flex;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask-image:var(--t-icon-bg);mask-image:var(--t-icon-bg);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;zoom:calc(100%*clamp(0px,var(--tui-font-offset) - 10px,1px)/.8px)}@media(hover:hover)and (pointer:fine){tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:before,tui-icon:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:after{zoom:1}tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-end]:before{-webkit-mask-image:var(--t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:var(--t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);-webkit-mask-composite:source-in;mask-composite:intersect}tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-end][data-icon-start=img]:before,tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-end][data-icon-start=font]:before{-webkit-mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em)}tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-end]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-start]:before{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-start]:after{transform:translate(36%,36%);--tui-icon-size: .5715em}tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-start=font]:before,tui-icon:where(*[data-tui-version=\"5.17.0\"])[data-icon-end=font]:after{zoom:.667}\n"]
		}]
	}], null, null);
})();
var TuiIconPipe = class TuiIconPipe {
	constructor() {
		this.transform = tuiInjectIconResolver();
	}
	static {
		this.ɵfac = function TuiIconPipe_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiIconPipe)();
		};
	}
	static {
		this.ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
			name: "tuiIcon",
			type: TuiIconPipe,
			pure: true
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconPipe, [{
		type: Pipe,
		args: [{ name: "tuiIcon" }]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-label.mjs
var Styles$4 = class Styles$4 {
	static {
		this.ɵfac = function Styles_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || Styles$4)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: Styles$4,
			selectors: [["ng-component"]],
			exportAs: ["tui-label-5.17.0"],
			decls: 0,
			vars: 0,
			template: function Styles_Template(rf, ctx) {},
			styles: ["[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]){display:flex;gap:.25rem;flex-direction:column;font:var(--%NS%tui-typography-body-s);color:var(--%NS%tui-text-primary)}[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]):not([data-orientation=vertical]){flex-direction:row;inline-size:fit-content;font:var(--%NS%tui-typography-body-m)}[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]) input[type=checkbox],[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]) input[type=radio]{font:inherit;inset-block-start:calc(var(--%NS%tui-lh) / 2);transform:translateY(-50%);margin-inline-end:.5rem}[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]) input[type=checkbox][data-size=s],[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]) input[type=radio][data-size=s]{line-height:1.3;margin-inline-end:.25rem}[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]) small{font:var(--%NS%tui-typography-body-s)}[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle]:where(:not([tuiCell] *)){margin-block-start:.125rem}[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]) [tuiSubtitle]{color:var(--%NS%tui-text-secondary)}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles$4, [{
		type: Component,
		args: [{
			template: "",
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			exportAs: `tui-label-5.17.0`,
			styles: ["[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]){display:flex;gap:.25rem;flex-direction:column;font:var(--tui-typography-body-s);color:var(--tui-text-primary)}[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]):not([data-orientation=vertical]){flex-direction:row;inline-size:fit-content;font:var(--tui-typography-body-m)}[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]) input[type=checkbox],[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]) input[type=radio]{font:inherit;inset-block-start:calc(var(--tui-lh) / 2);transform:translateY(-50%);margin-inline-end:.5rem}[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]) input[type=checkbox][data-size=s],[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]) input[type=radio][data-size=s]{line-height:1.3;margin-inline-end:.25rem}[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]) small{font:var(--tui-typography-body-s)}[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle]:where(:not([tuiCell] *)){margin-block-start:.125rem}[tuiLabel]:where(*[data-tui-version=\"5.17.0\"]) [tuiSubtitle]{color:var(--tui-text-secondary)}\n"]
		}]
	}], null, null);
})();
var TuiLabel = class TuiLabel {
	constructor() {
		this.textfield = contentChild(forwardRef(() => TUI_DATA_LIST_HOST));
		this.el = tuiInjectElement();
		this.nothing = tuiWithStyles(Styles$4);
		this.parent = inject(forwardRef(() => TUI_DATA_LIST_HOST), { optional: true });
	}
	static {
		this.ɵfac = function TuiLabel_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiLabel)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiLabel,
			selectors: [[
				"label",
				"tuiLabel",
				""
			]],
			contentQueries: function TuiLabel_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.textfield, TUI_DATA_LIST_HOST, 5);
				if (rf & 2) ɵɵqueryAdvance();
			},
			hostAttrs: ["data-tui-version", "5.17.0"],
			hostVars: 2,
			hostBindings: function TuiLabel_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵattribute("data-orientation", ctx.textfield() ? "vertical" : "horizontal")("for", ctx.el.htmlFor || (ctx.parent == null ? null : ctx.parent.id));
			}
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabel, [{
		type: Directive,
		args: [{
			selector: "label[tuiLabel]",
			host: {
				"data-tui-version": "5.17.0",
				"[attr.data-orientation]": "textfield() ? \"vertical\" : \"horizontal\"",
				"[attr.for]": "el.htmlFor || parent?.id"
			}
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-button-x.mjs
var [TUI_BUTTON_X_OPTIONS, tuiButtonXOptionsProvider] = tuiCreateOptions({
	appearance: "neutral",
	size: "s"
});
var TuiButtonX = class TuiButtonX {
	static {
		this.ɵfac = function TuiButtonX_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiButtonX)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiButtonX,
			selectors: [[
				"",
				"tuiButtonX",
				""
			]],
			hostAttrs: [
				"tuiIconButton",
				"",
				"type",
				"button"
			],
			hostVars: 2,
			hostBindings: function TuiButtonX_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("pointerdown.prevent.zoneless", function TuiButtonX_pointerdown_prevent_zoneless_HostBindingHandler() {
					return 0;
				});
				if (rf & 2) ɵɵstyleProp("--%NS%t-radius", 100, "%");
			},
			features: [ɵɵProvidersFeature([tuiButtonOptionsProvider(() => inject(TUI_BUTTON_X_OPTIONS)), {
				provide: TUI_ICON_START,
				useFactory: () => inject(TUI_COMMON_ICONS).close
			}]), ɵɵHostDirectivesFeature([{
				directive: TuiButton,
				inputs: ["size", "size"]
			}])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonX, [{
		type: Directive,
		args: [{
			selector: "[tuiButtonX]",
			providers: [tuiButtonOptionsProvider(() => inject(TUI_BUTTON_X_OPTIONS)), {
				provide: TUI_ICON_START,
				useFactory: () => inject(TUI_COMMON_ICONS).close
			}],
			hostDirectives: [{
				directive: TuiButton,
				inputs: ["size"]
			}],
			host: {
				tuiIconButton: "",
				type: "button",
				"[style.--t-radius.%]": "100",
				"(pointerdown.prevent.zoneless)": "(0)"
			}
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-filter-by-input.mjs
var TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS = { filter: (items, search, stringify) => items.find((x) => TUI_STRICT_MATCHER(x, search, stringify)) ? items : items.filter((x) => TUI_DEFAULT_MATCHER(x, search, stringify)) };
var [TUI_FILTER_BY_INPUT_OPTIONS, tuiFilterByInputOptionsProvider] = tuiCreateOptions(TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS);
var TuiFilterByInputPipe = class TuiFilterByInputPipe {
	constructor() {
		this.options = inject(TUI_FILTER_BY_INPUT_OPTIONS);
		this.search = inject(TUI_TEXTFIELD_VALUE);
		this.handlers = inject(TUI_ITEMS_HANDLERS);
		this.filter = signal(this.options.filter);
		this.filterFlat = computed((filter = this.filter(), search = this.search(), stringify = this.handlers.stringify()) => (items) => filter(items, search, stringify));
		this.items = signal([]);
		this.filtered = computed((items = this.items(), filter = this.filterFlat()) => items && (tuiIsFlat(items) ? filter(items) : this.filter2d(items)));
	}
	transform(items, filter = this.options.filter) {
		untracked(() => {
			this.items.set(items);
			this.filter.set(filter);
		});
		return this.filtered();
	}
	filter2d(groups) {
		const groupMap = new Map(groups.flatMap((group, i) => group.map((item) => [item, i])));
		const filteredGroups = [];
		this.filterFlat()(groups.flat()).forEach((item) => {
			const i = groupMap.get(item);
			filteredGroups[i] = filteredGroups[i]?.concat(item) ?? [item];
		});
		return filteredGroups;
	}
	static {
		this.ɵfac = function TuiFilterByInputPipe_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiFilterByInputPipe)();
		};
	}
	static {
		this.ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
			name: "tuiFilterByInput",
			type: TuiFilterByInputPipe,
			pure: false
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFilterByInputPipe, [{
		type: Pipe,
		args: [{
			name: "tuiFilterByInput",
			pure: false
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-textfield.mjs
var _c0$4 = ["ghost"];
var _c1$2 = ["vcr"];
var _c2 = [
	[["input"]],
	[["select"]],
	[["textarea"]],
	[[
		"label",
		"tuiLabel",
		""
	]],
	"*",
	[["tui-icon"]]
];
var _c3 = [
	"input",
	"select",
	"textarea",
	"label[tuiLabel]",
	"*",
	"tui-icon"
];
var _c4 = (a0) => ({ $implicit: a0 });
function TuiTextfieldComponent_Conditional_0_Template(rf, ctx) {}
function TuiTextfieldComponent_Conditional_11_Template(rf, ctx) {
	if (rf & 1) {
		const _r3 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "button", 7);
		ɵɵlistener("click", function TuiTextfieldComponent_Conditional_11_Template_button_click_0_listener() {
			let tmp_4_0;
			ɵɵrestoreView(_r3);
			return ɵɵresetView((tmp_4_0 = ɵɵnextContext().accessor()) == null ? null : tmp_4_0.setValue(null));
		});
		ɵɵtext(1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r3 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", ctx_r3.clear(), " ");
	}
}
function TuiTextfieldComponent_Conditional_13_ng_container_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵtext(1);
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const text_r5 = ctx.polymorpheusOutlet;
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", text_r5, " ");
	}
}
function TuiTextfieldComponent_Conditional_13_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "span", 5);
		ɵɵtemplate(1, TuiTextfieldComponent_Conditional_13_ng_container_1_Template, 2, 1, "ng-container", 8);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		let tmp_5_0;
		const ctx_r3 = ɵɵnextContext();
		ɵɵproperty("tuiCell", ctx_r3.options.size());
		ɵɵadvance();
		ɵɵproperty("polymorpheusOutlet", ctx_r3.content())("polymorpheusOutletContext", ɵɵpureFunction1(3, _c4, (tmp_5_0 = ctx_r3.control()) == null ? null : tmp_5_0.value));
	}
}
function TuiTextfieldComponent_Conditional_14_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "input", 6, 2);
	if (rf & 2) ɵɵproperty("value", ɵɵnextContext().computedFiller());
}
function TuiTextfieldItemComponent_ng_container_0_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵtext(1);
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const text_r1 = ctx.polymorpheusOutlet;
		ɵɵadvance();
		ɵɵtextInterpolate(text_r1);
	}
}
var _c5 = [
	[[
		"label",
		"tuiLabel",
		""
	]],
	[["input"]],
	[["select"]],
	"*",
	[["tui-icon"]]
];
var _c6 = [
	"label[tuiLabel]",
	"input",
	"select",
	"*",
	"tui-icon"
];
var _c7 = (a0, a1) => ({
	item: a0,
	index: a1
});
function TuiTextfieldMultiComponent_Conditional_0_Template(rf, ctx) {}
function TuiTextfieldMultiComponent_Conditional_2_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "tui-scroll-controls", 3);
}
function TuiTextfieldMultiComponent_For_7_ng_template_0_Template(rf, ctx) {}
function TuiTextfieldMultiComponent_For_7_Template(rf, ctx) {
	if (rf & 1) ɵɵtemplate(0, TuiTextfieldMultiComponent_For_7_ng_template_0_Template, 0, 0, "ng-template", 5);
	if (rf & 2) {
		const item_r3 = ctx.$implicit;
		const $index_r4 = ctx.$index;
		ɵɵproperty("polymorpheusOutlet", ɵɵnextContext().component)("polymorpheusOutletContext", ɵɵpureFunction1(5, _c4, ɵɵpureFunction2(2, _c7, item_r3, $index_r4)));
	}
}
function TuiTextfieldMultiComponent_Conditional_11_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "span", 7);
		ɵɵtext(1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r4 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵtextInterpolate(ctx_r4.placeholder);
	}
}
function TuiTextfieldMultiComponent_Conditional_16_Template(rf, ctx) {
	if (rf & 1) {
		const _r7 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "button", 12);
		ɵɵlistener("click", function TuiTextfieldMultiComponent_Conditional_16_Template_button_click_0_listener() {
			let tmp_5_0;
			ɵɵrestoreView(_r7);
			return ɵɵresetView((tmp_5_0 = ɵɵnextContext().accessor()) == null ? null : tmp_5_0.setValue([]));
		});
		ɵɵtext(1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r4 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", ctx_r4.clear(), " ");
	}
}
function TuiTextfieldMultiComponent_Conditional_20_ng_container_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵtext(1);
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const text_r8 = ctx.polymorpheusOutlet;
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", text_r8, " ");
	}
}
function TuiTextfieldMultiComponent_Conditional_20_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "span", 11);
		ɵɵtemplate(1, TuiTextfieldMultiComponent_Conditional_20_ng_container_1_Template, 2, 1, "ng-container", 13);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		let tmp_6_0;
		const ctx_r4 = ɵɵnextContext();
		ɵɵproperty("tuiCell", ctx_r4.options.size());
		ɵɵadvance();
		ɵɵproperty("polymorpheusOutlet", ctx_r4.content())("polymorpheusOutletContext", ɵɵpureFunction1(3, _c4, (tmp_6_0 = ctx_r4.control()) == null ? null : tmp_6_0.value));
	}
}
var DEFAULT = {
	appearance: "textfield",
	size: "l",
	cleaner: true
};
var TUI_TEXTFIELD_OPTIONS = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_OPTIONS" : "", { factory: () => ({
	appearance: signal(DEFAULT.appearance),
	size: signal(DEFAULT.size),
	cleaner: signal(DEFAULT.cleaner)
}) });
function tuiTextfieldOptionsProvider(options) {
	return {
		provide: TUI_TEXTFIELD_OPTIONS,
		deps: [[
			new Optional(),
			new SkipSelf(),
			TUI_TEXTFIELD_OPTIONS
		]],
		useFactory: (parent) => ({
			appearance: signal(parent?.appearance() ?? DEFAULT.appearance),
			size: signal(parent?.size() ?? DEFAULT.size),
			cleaner: signal(parent?.cleaner() ?? DEFAULT.cleaner),
			...options
		})
	};
}
var TuiTextfieldOptionsDirective = class TuiTextfieldOptionsDirective {
	constructor() {
		this.options = inject(TUI_TEXTFIELD_OPTIONS, { skipSelf: true });
		this.appearance = input(this.options.appearance(), { alias: "tuiTextfieldAppearance" });
		this.size = input(this.options.size(), {
			alias: "tuiTextfieldSize",
			transform: (size) => size || DEFAULT.size
		});
		this.cleaner = input(this.options.cleaner(), { alias: "tuiTextfieldCleaner" });
	}
	static {
		this.ɵfac = function TuiTextfieldOptionsDirective_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiTextfieldOptionsDirective)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiTextfieldOptionsDirective,
			selectors: [
				[
					"",
					"tuiTextfieldAppearance",
					""
				],
				[
					"",
					"tuiTextfieldSize",
					""
				],
				[
					"",
					"tuiTextfieldCleaner",
					""
				]
			],
			inputs: {
				appearance: [
					1,
					"tuiTextfieldAppearance",
					"appearance"
				],
				size: [
					1,
					"tuiTextfieldSize",
					"size"
				],
				cleaner: [
					1,
					"tuiTextfieldCleaner",
					"cleaner"
				]
			},
			features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective)])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldOptionsDirective, [{
		type: Directive,
		args: [{
			selector: "[tuiTextfieldAppearance],[tuiTextfieldSize],[tuiTextfieldCleaner]",
			providers: [tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective)]
		}]
	}], null, null);
})();
var TuiSelectLike = class TuiSelectLike {
	constructor() {
		this.el = tuiInjectElement();
		this.isAndroid = inject(WA_IS_ANDROID);
		this.isMobile = inject(WA_IS_MOBILE);
		this.options = inject(TUI_TEXTFIELD_OPTIONS);
	}
	clear() {
		this.el.value = "";
	}
	prevent(event) {
		if (!this.isAndroid) return;
		event.preventDefault();
		this.el.focus();
	}
	static {
		this.ɵfac = function TuiSelectLike_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiSelectLike)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiSelectLike,
			selectors: [[
				"",
				"tuiSelectLike",
				""
			]],
			hostAttrs: [
				"autocomplete",
				"off",
				"inputmode",
				"none",
				"spellcheck",
				"false",
				"tuiSelectLike",
				""
			],
			hostBindings: function TuiSelectLike_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("beforeinput", function TuiSelectLike_beforeinput_HostBindingHandler($event) {
					return ctx.isMobile && $event.inputType.includes("insertText") || ctx.options.cleaner() && $event.inputType.includes("delete") || $event.preventDefault();
				})("input.capture", function TuiSelectLike_input_capture_HostBindingHandler($event) {
					return ($event.inputType == null ? null : $event.inputType.includes("delete")) && ctx.clear();
				})("keydown.backspace", function TuiSelectLike_keydown_backspace_HostBindingHandler() {
					return ctx.options.cleaner() && ctx.clear();
				})("keydown.delete", function TuiSelectLike_keydown_delete_HostBindingHandler() {
					return ctx.options.cleaner() && ctx.clear();
				})("mousedown", function TuiSelectLike_mousedown_HostBindingHandler($event) {
					return ctx.prevent($event);
				});
			}
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSelectLike, [{
		type: Directive,
		args: [{
			selector: "[tuiSelectLike]",
			host: {
				autocomplete: "off",
				inputmode: "none",
				spellcheck: "false",
				tuiSelectLike: "",
				"(beforeinput)": "(isMobile && $event.inputType.includes(\"insertText\")) || options.cleaner() && $event.inputType.includes(\"delete\") || $event.preventDefault()",
				"(input.capture)": "$event.inputType?.includes(\"delete\") && clear()",
				"(keydown.backspace)": "options.cleaner() && clear()",
				"(keydown.delete)": "options.cleaner() && clear()",
				"(mousedown)": "prevent($event)"
			}
		}]
	}], null, null);
})();
var TUI_TEXTFIELD_ACCESSOR = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_ACCESSOR" : "");
function tuiAsTextfieldAccessor(accessor) {
	return tuiProvide(TUI_TEXTFIELD_ACCESSOR, accessor);
}
var TuiTextfieldComponent = class TuiTextfieldComponent {
	constructor() {
		this.focusedIn = tuiFocusedIn(tuiInjectElement());
		this.ghost = viewChild("ghost");
		this.dropdown = inject(TuiDropdownDirective);
		this.open = inject(TuiDropdownOpen);
		this.clear = inject(TUI_CLEAR_WORD);
		this.label = contentChild(forwardRef(() => TuiLabel), { read: ElementRef });
		this.computedFiller = computed((value = this.value()) => {
			const filler = this.filler();
			if (filler.length <= value.length) return "";
			return this.input()?.nativeElement.matches("[dir=\"rtl\"] :scope") ? `${filler.slice(0, filler.length - value.length)}${value}` : `${value}${filler.slice(value.length)}`;
		});
		this.showFiller = computed(() => this.focused() && !!this.computedFiller() && (!!this.value() || !this.input()?.nativeElement.placeholder));
		this.accessor = contentChild(TUI_TEXTFIELD_ACCESSOR);
		this.vcr = viewChild("vcr", { read: ViewContainerRef });
		this.control = contentChild(NgControl);
		this.child = contentChild(TuiControl);
		this.auxiliaries = contentChildren(TUI_AUXILIARY, { descendants: true });
		this.focused = computed(() => this.open.open() || this.focusedIn());
		this.options = inject(TUI_TEXTFIELD_OPTIONS);
		this.el = tuiInjectElement();
		this.input = contentChild(TUI_TEXTFIELD_ACCESSOR, { read: ElementRef });
		this.content = input();
		this.filler = input("");
		this.value = tuiValue(this.input);
	}
	get disabled() {
		return this.control()?.disabled ?? this.input()?.nativeElement?.disabled ?? false;
	}
	get size() {
		return this.options.size();
	}
	handleOption(option) {
		this.accessor()?.setValue(option);
		this.open.open.set(false);
	}
	get hasLabel() {
		return Boolean(this.label()?.nativeElement?.childNodes.length);
	}
	onResize({ clientWidth }) {
		this.el.style.setProperty("--t-side", tuiPx(clientWidth));
	}
	onIconClick() {
		this.input()?.nativeElement.focus();
		if (!this.open.enabled() || this.input()?.nativeElement.matches("input:read-only,textarea:read-only")) return;
		this.open.open.update((open) => !open);
		try {
			this.input()?.nativeElement.showPicker?.();
		} catch {}
	}
	onScroll(element) {
		const input = this.input();
		if (input?.nativeElement === element) this.ghost()?.nativeElement.scrollTo({ left: input?.nativeElement.scrollLeft });
	}
	static {
		this.ɵfac = function TuiTextfieldComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiTextfieldComponent)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiTextfieldComponent,
			selectors: [[
				"tui-textfield",
				3,
				"multi",
				""
			]],
			contentQueries: function TuiTextfieldComponent_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.label, TuiLabel, 5, ElementRef)(dirIndex, ctx.accessor, TUI_TEXTFIELD_ACCESSOR, 5)(dirIndex, ctx.control, NgControl, 5)(dirIndex, ctx.child, TuiControl, 5)(dirIndex, ctx.auxiliaries, TUI_AUXILIARY, 5)(dirIndex, ctx.input, TUI_TEXTFIELD_ACCESSOR, 5, ElementRef);
				if (rf & 2) ɵɵqueryAdvance(6);
			},
			viewQuery: function TuiTextfieldComponent_Query(rf, ctx) {
				if (rf & 1) ɵɵviewQuerySignal(ctx.ghost, _c0$4, 5)(ctx.vcr, _c1$2, 5, ViewContainerRef);
				if (rf & 2) ɵɵqueryAdvance(2);
			},
			hostAttrs: [1, "tui-interactive"],
			hostVars: 7,
			hostBindings: function TuiTextfieldComponent_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("animationcancel", function TuiTextfieldComponent_animationcancel_HostBindingHandler() {
					return 0;
				})("animationstart", function TuiTextfieldComponent_animationstart_HostBindingHandler() {
					return 0;
				})("click.self.prevent", function TuiTextfieldComponent_click_self_prevent_HostBindingHandler() {
					return 0;
				})("pointerdown.self.prevent", function TuiTextfieldComponent_pointerdown_self_prevent_HostBindingHandler() {
					return ctx.onIconClick();
				})("scroll.capture.zoneless", function TuiTextfieldComponent_scroll_capture_zoneless_HostBindingHandler($event) {
					return ctx.onScroll($event.target);
				})("tuiActiveZoneChange", function TuiTextfieldComponent_tuiActiveZoneChange_HostBindingHandler($event) {
					let tmp_0_0;
					return !$event && ((tmp_0_0 = ctx.control()) == null ? null : tmp_0_0.valueAccessor == null ? null : tmp_0_0.valueAccessor.onTouched == null ? null : tmp_0_0.valueAccessor.onTouched());
				});
				if (rf & 2) {
					let tmp_3_0;
					ɵɵattribute("data-size", ctx.options.size());
					ɵɵclassProp("_disabled", ctx.disabled)("_with-label", ctx.hasLabel)("_with-template", ctx.content() && ((tmp_3_0 = ctx.control()) == null ? null : tmp_3_0.value) != null);
				}
			},
			inputs: {
				content: [1, "content"],
				filler: [1, "filler"]
			},
			features: [ɵɵProvidersFeature([
				tuiButtonOptionsProvider({
					size: "xs",
					appearance: "icon"
				}),
				tuiButtonXOptionsProvider(() => inject(TUI_BUTTON_OPTIONS)),
				tuiAsDataListHost(TuiTextfieldComponent),
				{
					provide: TUI_TEXTFIELD_VALUE,
					useFactory: () => inject(TuiTextfieldComponent).value
				}
			]), ɵɵHostDirectivesFeature([
				TuiAppearance,
				TuiDropdownDirective,
				TuiDropdownFixed,
				TuiWithDropdownOpen,
				TuiWithIcons,
				TuiWithItemsHandlers,
				TuiWithOptionContent
			])],
			ngContentSelectors: _c3,
			decls: 15,
			vars: 6,
			consts: [
				["side", ""],
				["vcr", ""],
				["ghost", ""],
				[
					1,
					"t-content",
					3,
					"pointerdown",
					"resize"
				],
				[
					"tabindex",
					"-1",
					"tuiButtonX",
					""
				],
				[
					1,
					"t-template",
					3,
					"tuiCell"
				],
				[
					"aria-hidden",
					"true",
					"disabled",
					"",
					1,
					"t-filler",
					3,
					"value"
				],
				[
					"tabindex",
					"-1",
					"tuiButtonX",
					"",
					3,
					"click"
				],
				[
					4,
					"polymorpheusOutlet",
					"polymorpheusOutletContext"
				]
			],
			template: function TuiTextfieldComponent_Template(rf, ctx) {
				if (rf & 1) {
					const _r1 = ɵɵgetCurrentView();
					ɵɵprojectionDef(_c2);
					ɵɵconditionalCreate(0, TuiTextfieldComponent_Conditional_0_Template, 0, 0);
					ɵɵpipe(1, "async");
					ɵɵprojection(2);
					ɵɵprojection(3, 1);
					ɵɵprojection(4, 2);
					ɵɵprojection(5, 3);
					ɵɵelementStart(6, "span", 3, 0);
					ɵɵlistener("pointerdown", function TuiTextfieldComponent_Template_span_pointerdown_6_listener() {
						let tmp_3_0;
						ɵɵrestoreView(_r1);
						return ɵɵresetView((tmp_3_0 = ctx.input()) == null ? null : tmp_3_0.nativeElement == null ? null : tmp_3_0.nativeElement.focus());
					})("resize", function TuiTextfieldComponent_Template_span_resize_6_listener() {
						ɵɵrestoreView(_r1);
						const side_r2 = ɵɵreference(7);
						return ɵɵresetView(ctx.onResize(side_r2));
					});
					ɵɵprojection(8, 4);
					ɵɵelementContainer(9, null, 1);
					ɵɵconditionalCreate(11, TuiTextfieldComponent_Conditional_11_Template, 2, 1, "button", 4);
					ɵɵprojection(12, 5);
					ɵɵelementEnd();
					ɵɵconditionalCreate(13, TuiTextfieldComponent_Conditional_13_Template, 2, 5, "span", 5);
					ɵɵconditionalCreate(14, TuiTextfieldComponent_Conditional_14_Template, 2, 1, "input", 6);
				}
				if (rf & 2) {
					let tmp_2_0;
					let tmp_4_0;
					ɵɵconditional(((tmp_2_0 = ctx.child()) == null ? null : tmp_2_0.value()) ?? ɵɵpipeBind1(1, 4, (tmp_2_0 = ctx.control()) == null ? null : tmp_2_0.control == null ? null : tmp_2_0.control.valueChanges) ? 0 : -1);
					ɵɵadvance(11);
					ɵɵconditional(ctx.options.cleaner() ? 11 : -1);
					ɵɵadvance(2);
					ɵɵconditional(((tmp_4_0 = ctx.control()) == null ? null : tmp_4_0.value) != null ? 13 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.showFiller() ? 14 : -1);
				}
			},
			dependencies: [
				AsyncPipe,
				PolymorpheusOutlet,
				TuiButtonX,
				TuiCell
			],
			styles: ["tui-textfield:where(*[data-tui-version=\"5.17.0\"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:calc(var(--%NS%tui-duration) / 2);transition-timing-function:var(--%NS%tui-curve-productive-standard);--%NS%t-height: calc(var(--%NS%tui-height-l) + 2.5 * var(--%NS%t-label) * var(--%NS%tui-font-offset));--%NS%t-padding: var(--%NS%tui-padding-l);--%NS%t-label: 0;--%NS%t-label-y: -.75rem;--%NS%t-label-font: var(--%NS%tui-typography-ui-s);--%NS%t-end: 0px;--%NS%t-start: 0px;--%NS%t-side: 0px;--%NS%t-max: .75rem;--%NS%t-space: clamp(0px, calc(var(--%NS%t-side) + var(--%NS%t-end)), var(--%NS%t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--%NS%t-height);padding:0 var(--%NS%t-padding);border-radius:var(--%NS%tui-radius-l);font:var(--%NS%tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version=\"5.17.0\"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version=\"5.17.0\"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance][data-appearance=\"\"]{color:var(--%NS%tui-text-tertiary)}@media(hover:hover)and (pointer:fine){tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance][data-appearance=\"\"]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--%NS%tui-text-secondary)}}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance][data-appearance=\"\"]:not([data-mode~=readonly])[data-state=hover]{color:var(--%NS%tui-text-secondary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-icon-start]{--%NS%t-start: calc(2.5rem * (1 + .25 * var(--%NS%t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-icon-end]{--%NS%t-end: 1.75rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:before{z-index:1;block-size:var(--%NS%t-height);inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none;max-block-size:calc(var(--%NS%t-height) * (1 - .2 * var(--%NS%t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--%NS%t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--%NS%t-padding));margin-inline-end:calc(-1 * var(--%NS%t-padding));block-size:var(--%NS%t-height);max-block-size:calc(var(--%NS%t-height) * (1 - .2 * var(--%NS%t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--%NS%tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-content,tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{--%NS%t-height: var(--%NS%tui-height-s);--%NS%t-padding: var(--%NS%tui-padding-s);--%NS%t-max: 0px;border-radius:var(--%NS%tui-radius-m);font:var(--%NS%tui-typography-ui-s)}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-start]{--%NS%t-start: 1.5rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-end]{--%NS%t-end: 1.5rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--%NS%t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{--%NS%t-height: calc(var(--%NS%tui-height-m) + 2.5 * var(--%NS%t-label) * var(--%NS%tui-font-offset));--%NS%t-padding: var(--%NS%tui-padding-m);--%NS%t-label-font: var(--%NS%tui-typography-ui-xs);--%NS%t-label-y: -.5625rem;--%NS%t-max: .125rem;border-radius:var(--%NS%tui-radius-m);font:var(--%NS%tui-typography-ui-s)}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-start]{--%NS%t-start: calc(2.125rem * (1 + .25 * var(--%NS%t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-end]{--%NS%t-end: 1.75rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--%NS%t-padding));margin-inline-start:calc(.5rem - var(--%NS%t-padding))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--%NS%tui-disabled-opacity)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is(._disabled,[data-state=disabled])>.t-content>tui-icon{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label{--%NS%t-label: 1}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label>.t-template,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label .t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--%NS%t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--%NS%t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--%NS%tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;padding-inline-start:calc(var(--%NS%t-start) + var(--%NS%t-padding));padding-inline-end:calc(var(--%NS%t-end) + var(--%NS%t-side) + var(--%NS%t-padding) + var(--%NS%t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template:disabled,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--%NS%t-label-font);transform:translateY(calc(var(--%NS%t-label-y) - var(--%NS%tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--%NS%t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--%NS%t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]._empty{color:var(--%NS%tui-text-secondary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select option[value=\"\"]:disabled{color:transparent}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select optgroup,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select option{background-color:var(--%NS%tui-background-elevation-3)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select optgroup,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select option:not(:disabled){color:var(--%NS%tui-text-primary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) a,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-content{z-index:1;display:flex;block-size:var(--%NS%t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler{pointer-events:none!important;color:var(--%NS%tui-text-tertiary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--%NS%tui-text-negative)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--%NS%tui-text-primary)!important;font:var(--%NS%t-label-font);transform:translateY(calc(var(--%NS%t-label-y) - var(--%NS%tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--%NS%tui-text-primary)!important;font:var(--%NS%t-label-font);transform:translateY(calc(var(--%NS%t-label-y) - var(--%NS%tui-font-offset) / 2))}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldComponent, [{
		type: Component,
		args: [{
			selector: "tui-textfield:not([multi])",
			imports: [
				AsyncPipe,
				PolymorpheusOutlet,
				TuiButtonX,
				TuiCell
			],
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			providers: [
				tuiButtonOptionsProvider({
					size: "xs",
					appearance: "icon"
				}),
				tuiButtonXOptionsProvider(() => inject(TUI_BUTTON_OPTIONS)),
				tuiAsDataListHost(TuiTextfieldComponent),
				{
					provide: TUI_TEXTFIELD_VALUE,
					useFactory: () => inject(TuiTextfieldComponent).value
				}
			],
			hostDirectives: [
				TuiAppearance,
				TuiDropdownDirective,
				TuiDropdownFixed,
				TuiWithDropdownOpen,
				TuiWithIcons,
				TuiWithItemsHandlers,
				TuiWithOptionContent
			],
			host: {
				class: "tui-interactive",
				"[attr.data-size]": "options.size()",
				"[class._disabled]": "disabled",
				"[class._with-label]": "hasLabel",
				"[class._with-template]": "content() && control()?.value != null",
				"(animationcancel)": "0",
				"(animationstart)": "0",
				"(click.self.prevent)": "0",
				"(pointerdown.self.prevent)": "onIconClick()",
				"(scroll.capture.zoneless)": "onScroll($event.target)",
				"(tuiActiveZoneChange)": "!$event && control()?.valueAccessor?.onTouched?.()"
			},
			template: "@if (child()?.value() ?? (control()?.control?.valueChanges | async)) {}\n<ng-content select=\"input\" />\n<ng-content select=\"select\" />\n<ng-content select=\"textarea\" />\n<ng-content select=\"label[tuiLabel]\" />\n<span\n    #side\n    class=\"t-content\"\n    (pointerdown)=\"input()?.nativeElement?.focus()\"\n    (resize)=\"onResize(side)\"\n>\n    <ng-content />\n    <ng-container #vcr />\n    @if (options.cleaner()) {\n        <button\n            tabindex=\"-1\"\n            tuiButtonX\n            (click)=\"accessor()?.setValue(null)\"\n        >\n            {{ clear() }}\n        </button>\n    }\n    <ng-content select=\"tui-icon\" />\n</span>\n@if (control()?.value != null) {\n    <span\n        class=\"t-template\"\n        [tuiCell]=\"options.size()\"\n    >\n        <ng-container *polymorpheusOutlet=\"content() as text; context: {$implicit: control()?.value}\">\n            {{ text }}\n        </ng-container>\n    </span>\n}\n@if (showFiller()) {\n    <input\n        #ghost\n        aria-hidden=\"true\"\n        disabled\n        class=\"t-filler\"\n        [value]=\"computedFiller()\"\n    />\n}\n",
			styles: ["tui-textfield:where(*[data-tui-version=\"5.17.0\"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);--t-height: calc(var(--tui-height-l) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-l);--t-label: 0;--t-label-y: -.75rem;--t-label-font: var(--tui-typography-ui-s);--t-end: 0px;--t-start: 0px;--t-side: 0px;--t-max: .75rem;--t-space: clamp(0px, calc(var(--t-side) + var(--t-end)), var(--t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--t-height);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version=\"5.17.0\"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version=\"5.17.0\"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance][data-appearance=\"\"]{color:var(--tui-text-tertiary)}@media(hover:hover)and (pointer:fine){tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance][data-appearance=\"\"]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--tui-text-secondary)}}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance][data-appearance=\"\"]:not([data-mode~=readonly])[data-state=hover]{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-icon-start]{--t-start: calc(2.5rem * (1 + .25 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:before{z-index:1;block-size:var(--t-height);inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none;max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--t-padding));margin-inline-end:calc(-1 * var(--t-padding));block-size:var(--t-height);max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-content,tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);--t-max: 0px;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-start]{--t-start: 1.5rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-end]{--t-end: 1.5rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{--t-height: calc(var(--tui-height-m) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-m);--t-label-font: var(--tui-typography-ui-xs);--t-label-y: -.5625rem;--t-max: .125rem;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-start]{--t-start: calc(2.125rem * (1 + .25 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--t-padding));margin-inline-start:calc(.5rem - var(--t-padding))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--tui-disabled-opacity)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is(._disabled,[data-state=disabled])>.t-content>tui-icon{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label{--t-label: 1}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label>.t-template,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label .t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;padding-inline-start:calc(var(--t-start) + var(--t-padding));padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-padding) + var(--t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template:disabled,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]._empty{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select option[value=\"\"]:disabled{color:transparent}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select optgroup,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select option{background-color:var(--tui-background-elevation-3)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select optgroup,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select option:not(:disabled){color:var(--tui-text-primary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) a,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-content{z-index:1;display:flex;block-size:var(--t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler{pointer-events:none!important;color:var(--tui-text-tertiary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--tui-text-negative)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}\n"]
		}]
	}], null, null);
})();
var TuiTextfieldItemComponent = class TuiTextfieldItemComponent {
	constructor() {
		this.el = tuiInjectElement();
		this.handlers = inject(TUI_ITEMS_HANDLERS);
		this.context = injectContext();
		this.textfield = inject(TuiTextfieldMultiComponent);
		this.content = computed(() => this.textfield.item() ?? this.handlers.stringify()(this.context.$implicit.item));
	}
	prevent(e) {
		this.textfield.focused() && e.preventDefault();
	}
	static {
		this.ɵfac = function TuiTextfieldItemComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiTextfieldItemComponent)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiTextfieldItemComponent,
			selectors: [["tui-textfield-item"]],
			hostVars: 4,
			hostBindings: function TuiTextfieldItemComponent_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("keydown.arrowLeft.prevent", function TuiTextfieldItemComponent_keydown_arrowLeft_prevent_HostBindingHandler() {
					return ctx.el.previousElementSibling == null ? null : ctx.el.previousElementSibling.firstChild == null ? null : ctx.el.previousElementSibling.firstChild.focus();
				})("keydown.arrowRight.prevent", function TuiTextfieldItemComponent_keydown_arrowRight_prevent_HostBindingHandler() {
					return ctx.el.nextElementSibling == null ? null : ctx.el.nextElementSibling.firstChild == null ? null : ctx.el.nextElementSibling.firstChild.focus();
				})("pointerdown.self", function TuiTextfieldItemComponent_pointerdown_self_HostBindingHandler($event) {
					return ctx.prevent($event);
				});
				if (rf & 2) ɵɵclassProp("_disabled", ctx.handlers.disabledItemHandler()(ctx.context.$implicit.item))("_string", !ctx.textfield.item());
			},
			decls: 1,
			vars: 2,
			consts: [[
				4,
				"polymorpheusOutlet",
				"polymorpheusOutletContext"
			]],
			template: function TuiTextfieldItemComponent_Template(rf, ctx) {
				if (rf & 1) ɵɵtemplate(0, TuiTextfieldItemComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
				if (rf & 2) ɵɵproperty("polymorpheusOutlet", ctx.content())("polymorpheusOutletContext", ctx.context);
			},
			dependencies: [PolymorpheusOutlet],
			styles: ["[_nghost-%COMP%]{display:flex;max-inline-size:100%;flex-shrink:0;white-space:nowrap;text-overflow:ellipsis;color:var(--%NS%tui-text-primary)}._string[_nghost-%COMP%]{display:block;overflow:hidden;overflow:clip visible}._string._disabled[_nghost-%COMP%]{opacity:var(--%NS%tui-disabled-opacity)}._string[_nghost-%COMP%]:after{content:\",\\a0\"}[_nghost-%COMP%]:last-of-type{max-inline-size:80%}tui-textfield:not([data-focus=\"true\"])[_nghost-%COMP%]:last-of-type:after, tui-textfield:not([data-focus=\"true\"])   [_nghost-%COMP%]:last-of-type:after{display:none}tui-textfield:has([tuiSelectLike])[_nghost-%COMP%]:last-of-type:after, tui-textfield:has([tuiSelectLike])   [_nghost-%COMP%]:last-of-type:after, tui-textfield[data-mode~=\"readonly\"][_nghost-%COMP%]:last-of-type:after, tui-textfield[data-mode~=\"readonly\"]   [_nghost-%COMP%]:last-of-type:after{content:\"\\a0\"}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldItemComponent, [{
		type: Component,
		args: [{
			selector: "tui-textfield-item",
			imports: [PolymorpheusOutlet],
			template: "<ng-container *polymorpheusOutlet=\"content() as text; context: context\">{{ text }}</ng-container>",
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: {
				"[class._disabled]": "handlers.disabledItemHandler()(context.$implicit.item)",
				"[class._string]": "!textfield.item()",
				"(keydown.arrowLeft.prevent)": "el.previousElementSibling?.firstChild?.focus()",
				"(keydown.arrowRight.prevent)": "el.nextElementSibling?.firstChild?.focus()",
				"(pointerdown.self)": "prevent($event)"
			},
			styles: [":host{display:flex;max-inline-size:100%;flex-shrink:0;white-space:nowrap;text-overflow:ellipsis;color:var(--tui-text-primary)}:host._string{display:block;overflow:hidden;overflow:clip visible}:host._string._disabled{opacity:var(--tui-disabled-opacity)}:host._string:after{content:\",\\a0\"}:host:last-of-type{max-inline-size:80%}:host-context(tui-textfield:not([data-focus=\"true\"])):last-of-type:after{display:none}:host-context(tui-textfield:has([tuiSelectLike])):last-of-type:after,:host-context(tui-textfield[data-mode~=\"readonly\"]):last-of-type:after{content:\"\\a0\"}\n"]
		}]
	}], null, null);
})();
var TUI_TEXTFIELD_ITEM = new PolymorpheusComponent(TuiTextfieldItemComponent);
var TuiTextfieldMultiComponent = class TuiTextfieldMultiComponent extends TuiTextfieldComponent {
	constructor() {
		super(...arguments);
		this.height = signal(null);
		this.win = inject(WA_WINDOW);
		this.handlers = inject(TUI_ITEMS_HANDLERS);
		this.component = TUI_TEXTFIELD_ITEM;
		this.items = computed(() => this.cva()?.value() ?? []);
		this.sub = fromEvent(this.el, "scroll").pipe(filter(() => this.rows() === 1), tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
			this.el.style.setProperty("--t-scroll", tuiPx(-1 * this.el.scrollLeft));
		});
		this.cva = contentChild(TuiControl);
		this.item = contentChild(TuiItem, {
			read: TemplateRef,
			descendants: true
		});
		this.rows = input(100);
	}
	handleOption(option) {
		this.accessor()?.setValue(tuiArrayToggle(this.items(), option, this.handlers.identityMatcher()));
	}
	get placeholder() {
		const el = this.input()?.nativeElement;
		const placeholder = el?.matches("input") ? el.placeholder : this.computedFiller();
		const value = this.computedFiller() || this.value();
		const longer = value.length > placeholder.length ? value : placeholder;
		return this.focused() ? longer : "";
	}
	onItems(target) {
		this.height.update((h) => target.querySelector("tui-textfield-item")?.clientHeight || h);
	}
	onLeft(event) {
		if (this.value() || !tuiIsElement(event.currentTarget)) return;
		event.preventDefault();
		event.currentTarget.previousElementSibling?.firstElementChild?.focus();
	}
	focusInput() {
		const selection = this.win.getSelection();
		if (!selection?.rangeCount || selection.getRangeAt(0)?.collapsed) this.input()?.nativeElement.focus();
	}
	onClick(target) {
		if (target === this.el || !this.cva()?.interactive() || !this.el.matches("[tuiChevron]") && !this.el.querySelector("select, [tuiInputDateMulti]") || target.matches("input:read-only,input[inputmode=\"none\"]")) return;
		this.open.open.update((open) => !open);
		try {
			this.input()?.nativeElement.showPicker?.();
		} catch {}
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiTextfieldMultiComponent_BaseFactory;
			return function TuiTextfieldMultiComponent_Factory(__ngFactoryType__) {
				return (ɵTuiTextfieldMultiComponent_BaseFactory || (ɵTuiTextfieldMultiComponent_BaseFactory = ɵɵgetInheritedFactory(TuiTextfieldMultiComponent)))(__ngFactoryType__ || TuiTextfieldMultiComponent);
			};
		})();
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiTextfieldMultiComponent,
			selectors: [[
				"tui-textfield",
				"multi",
				""
			]],
			contentQueries: function TuiTextfieldMultiComponent_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.cva, TuiControl, 5)(dirIndex, ctx.item, TuiItem, 5, TemplateRef);
				if (rf & 2) ɵɵqueryAdvance(2);
			},
			hostVars: 7,
			hostBindings: function TuiTextfieldMultiComponent_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("click.prevent", function TuiTextfieldMultiComponent_click_prevent_HostBindingHandler($event) {
					return ctx.onClick($event.target);
				})("tuiActiveZoneChange", function TuiTextfieldMultiComponent_tuiActiveZoneChange_HostBindingHandler($event) {
					return !$event && ctx.el.scrollTo({ left: 0 });
				});
				if (rf & 2) {
					ɵɵattribute("data-state", ctx.disabled ? "disabled" : null);
					ɵɵstyleProp("--%NS%t-item-height", ctx.height(), "px")("--%NS%t-rows", ctx.rows());
					ɵɵclassProp("_empty", !ctx.items().length);
				}
			},
			inputs: { rows: [1, "rows"] },
			features: [
				ɵɵProvidersFeature([
					tuiButtonOptionsProvider({
						size: "xs",
						appearance: "icon"
					}),
					tuiButtonXOptionsProvider(() => inject(TUI_BUTTON_OPTIONS)),
					tuiAsDataListHost(TuiTextfieldMultiComponent),
					tuiProvide(TuiTextfieldComponent, TuiTextfieldMultiComponent),
					{
						provide: TUI_TEXTFIELD_VALUE,
						useFactory: () => inject(TuiTextfieldComponent).value
					},
					tuiFilterByInputOptionsProvider({ filter: (items, search, stringify) => items.filter((x) => TUI_DEFAULT_MATCHER(x, search, stringify)) })
				]),
				ɵɵHostDirectivesFeature([TuiScrollRef]),
				ɵɵInheritDefinitionFeature
			],
			ngContentSelectors: _c6,
			decls: 21,
			vars: 12,
			consts: [
				["wrapper", ""],
				["side", ""],
				["vcr", ""],
				[1, "t-scrollbar"],
				[
					1,
					"t-items",
					3,
					"click",
					"pointerdown.self.zoneless.prevent",
					"resize"
				],
				[
					3,
					"polymorpheusOutlet",
					"polymorpheusOutletContext"
				],
				[
					1,
					"t-input",
					3,
					"keydown.arrowLeft"
				],
				[1, "t-ghost"],
				[
					"aria-hidden",
					"true",
					"disabled",
					"",
					1,
					"t-filler",
					3,
					"value"
				],
				[
					1,
					"t-content",
					3,
					"click.stop",
					"pointerdown.zoneless.prevent",
					"resize"
				],
				[
					"tabindex",
					"-1",
					"tuiButtonX",
					""
				],
				[
					1,
					"t-template",
					3,
					"tuiCell"
				],
				[
					"tabindex",
					"-1",
					"tuiButtonX",
					"",
					3,
					"click"
				],
				[
					4,
					"polymorpheusOutlet",
					"polymorpheusOutletContext"
				]
			],
			template: function TuiTextfieldMultiComponent_Template(rf, ctx) {
				if (rf & 1) {
					const _r1 = ɵɵgetCurrentView();
					ɵɵprojectionDef(_c5);
					ɵɵconditionalCreate(0, TuiTextfieldMultiComponent_Conditional_0_Template, 0, 0);
					ɵɵpipe(1, "async");
					ɵɵconditionalCreate(2, TuiTextfieldMultiComponent_Conditional_2_Template, 1, 0, "tui-scroll-controls", 3);
					ɵɵelementStart(3, "div", 4, 0);
					ɵɵlistener("click", function TuiTextfieldMultiComponent_Template_div_click_3_listener() {
						return ctx.focusInput();
					})("pointerdown.self.zoneless.prevent", function TuiTextfieldMultiComponent_Template_div_pointerdown_self_zoneless_prevent_3_listener() {
						return 0;
					})("resize", function TuiTextfieldMultiComponent_Template_div_resize_3_listener() {
						ɵɵrestoreView(_r1);
						const wrapper_r2 = ɵɵreference(4);
						return ɵɵresetView(ctx.onItems(wrapper_r2));
					});
					ɵɵprojection(5);
					ɵɵrepeaterCreate(6, TuiTextfieldMultiComponent_For_7_Template, 1, 7, null, 5, ɵɵrepeaterTrackByIdentity);
					ɵɵelementStart(8, "span", 6);
					ɵɵlistener("keydown.arrowLeft", function TuiTextfieldMultiComponent_Template_span_keydown_arrowLeft_8_listener($event) {
						return ctx.onLeft($event);
					});
					ɵɵprojection(9, 1);
					ɵɵprojection(10, 2);
					ɵɵconditionalCreate(11, TuiTextfieldMultiComponent_Conditional_11_Template, 2, 1, "span", 7);
					ɵɵelement(12, "input", 8);
					ɵɵelementEnd()();
					ɵɵelementStart(13, "span", 9, 1);
					ɵɵlistener("click.stop", function TuiTextfieldMultiComponent_Template_span_click_stop_13_listener() {
						let tmp_4_0;
						ɵɵrestoreView(_r1);
						return ɵɵresetView((tmp_4_0 = ctx.input()) == null ? null : tmp_4_0.nativeElement == null ? null : tmp_4_0.nativeElement.focus());
					})("pointerdown.zoneless.prevent", function TuiTextfieldMultiComponent_Template_span_pointerdown_zoneless_prevent_13_listener() {
						return 0;
					})("resize", function TuiTextfieldMultiComponent_Template_span_resize_13_listener() {
						ɵɵrestoreView(_r1);
						const side_r6 = ɵɵreference(14);
						return ɵɵresetView(ctx.onResize(side_r6));
					});
					ɵɵprojection(15, 3);
					ɵɵconditionalCreate(16, TuiTextfieldMultiComponent_Conditional_16_Template, 2, 1, "button", 10);
					ɵɵelementContainer(17, null, 2);
					ɵɵprojection(19, 4);
					ɵɵelementEnd();
					ɵɵconditionalCreate(20, TuiTextfieldMultiComponent_Conditional_20_Template, 2, 5, "span", 11);
				}
				if (rf & 2) {
					let tmp_3_0;
					let tmp_11_0;
					ɵɵconditional(((tmp_3_0 = ctx.child()) == null ? null : tmp_3_0.value()) ?? ɵɵpipeBind1(1, 10, (tmp_3_0 = ctx.control()) == null ? null : tmp_3_0.control == null ? null : tmp_3_0.control.valueChanges) ? 0 : -1);
					ɵɵadvance(2);
					ɵɵconditional(ctx.rows() > 1 ? 2 : -1);
					ɵɵadvance();
					ɵɵclassProp("t-items_horizontal", ctx.rows() === 1);
					ɵɵadvance(3);
					ɵɵrepeater(ctx.items());
					ɵɵadvance(5);
					ɵɵconditional(ctx.placeholder ? 11 : -1);
					ɵɵadvance();
					ɵɵclassProp("t-filler_hidden", !ctx.showFiller());
					ɵɵproperty("value", ctx.computedFiller());
					ɵɵadvance(4);
					ɵɵconditional(ctx.options.cleaner() ? 16 : -1);
					ɵɵadvance(4);
					ɵɵconditional(((tmp_11_0 = ctx.control()) == null ? null : tmp_11_0.value) != null ? 20 : -1);
				}
			},
			dependencies: [
				AsyncPipe,
				PolymorpheusOutlet,
				TuiButtonX,
				TuiCell,
				TuiScrollControls
			],
			styles: ["tui-textfield:where(*[data-tui-version=\"5.17.0\"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:calc(var(--%NS%tui-duration) / 2);transition-timing-function:var(--%NS%tui-curve-productive-standard);--%NS%t-height: calc(var(--%NS%tui-height-l) + 2.5 * var(--%NS%t-label) * var(--%NS%tui-font-offset));--%NS%t-padding: var(--%NS%tui-padding-l);--%NS%t-label: 0;--%NS%t-label-y: -.75rem;--%NS%t-label-font: var(--%NS%tui-typography-ui-s);--%NS%t-end: 0px;--%NS%t-start: 0px;--%NS%t-side: 0px;--%NS%t-max: .75rem;--%NS%t-space: clamp(0px, calc(var(--%NS%t-side) + var(--%NS%t-end)), var(--%NS%t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--%NS%t-height);padding:0 var(--%NS%t-padding);border-radius:var(--%NS%tui-radius-l);font:var(--%NS%tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version=\"5.17.0\"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version=\"5.17.0\"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance][data-appearance=\"\"]{color:var(--%NS%tui-text-tertiary)}@media(hover:hover)and (pointer:fine){tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance][data-appearance=\"\"]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--%NS%tui-text-secondary)}}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance][data-appearance=\"\"]:not([data-mode~=readonly])[data-state=hover]{color:var(--%NS%tui-text-secondary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-icon-start]{--%NS%t-start: calc(2.5rem * (1 + .25 * var(--%NS%t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-icon-end]{--%NS%t-end: 1.75rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:before{z-index:1;block-size:var(--%NS%t-height);inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none;max-block-size:calc(var(--%NS%t-height) * (1 - .2 * var(--%NS%t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--%NS%t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--%NS%t-padding));margin-inline-end:calc(-1 * var(--%NS%t-padding));block-size:var(--%NS%t-height);max-block-size:calc(var(--%NS%t-height) * (1 - .2 * var(--%NS%t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--%NS%tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-content,tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{--%NS%t-height: var(--%NS%tui-height-s);--%NS%t-padding: var(--%NS%tui-padding-s);--%NS%t-max: 0px;border-radius:var(--%NS%tui-radius-m);font:var(--%NS%tui-typography-ui-s)}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-start]{--%NS%t-start: 1.5rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-end]{--%NS%t-end: 1.5rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--%NS%t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{--%NS%t-height: calc(var(--%NS%tui-height-m) + 2.5 * var(--%NS%t-label) * var(--%NS%tui-font-offset));--%NS%t-padding: var(--%NS%tui-padding-m);--%NS%t-label-font: var(--%NS%tui-typography-ui-xs);--%NS%t-label-y: -.5625rem;--%NS%t-max: .125rem;border-radius:var(--%NS%tui-radius-m);font:var(--%NS%tui-typography-ui-s)}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-start]{--%NS%t-start: calc(2.125rem * (1 + .25 * var(--%NS%t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-end]{--%NS%t-end: 1.75rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--%NS%t-padding));margin-inline-start:calc(.5rem - var(--%NS%t-padding))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--%NS%tui-disabled-opacity)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is(._disabled,[data-state=disabled])>.t-content>tui-icon{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label{--%NS%t-label: 1}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label>.t-template,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label .t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--%NS%t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--%NS%t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--%NS%tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;padding-inline-start:calc(var(--%NS%t-start) + var(--%NS%t-padding));padding-inline-end:calc(var(--%NS%t-end) + var(--%NS%t-side) + var(--%NS%t-padding) + var(--%NS%t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template:disabled,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--%NS%t-label-font);transform:translateY(calc(var(--%NS%t-label-y) - var(--%NS%tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--%NS%t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--%NS%t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]._empty{color:var(--%NS%tui-text-secondary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select option[value=\"\"]:disabled{color:transparent}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select optgroup,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select option{background-color:var(--%NS%tui-background-elevation-3)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select optgroup,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select option:not(:disabled){color:var(--%NS%tui-text-primary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) a,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-content{z-index:1;display:flex;block-size:var(--%NS%t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler{pointer-events:none!important;color:var(--%NS%tui-text-tertiary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--%NS%tui-text-negative)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--%NS%tui-text-primary)!important;font:var(--%NS%t-label-font);transform:translateY(calc(var(--%NS%t-label-y) - var(--%NS%tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--%NS%tui-text-primary)!important;font:var(--%NS%t-label-font);transform:translateY(calc(var(--%NS%t-label-y) - var(--%NS%tui-font-offset) / 2))}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"]){flex-wrap:nowrap;overflow:scroll;align-items:stretch;cursor:text;max-block-size:calc(var(--%NS%t-vertical) * 2 + var(--%NS%t-item-height) * var(--%NS%t-rows));overscroll-behavior-x:none;scroll-behavior:var(--%NS%tui-scroll-behavior)}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"]):before,tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"]):after{position:sticky;inset-block-start:0;inset-inline-start:0;block-size:10rem;min-block-size:calc(var(--%NS%t-height) * (1 - .2 * var(--%NS%t-zoom)));max-block-size:calc((var(--%NS%t-item-height, calc(var(--%NS%t-height) - 2 * var(--%NS%t-vertical))) + 2 * var(--%NS%t-vertical)) * (1 - .2 * var(--%NS%t-zoom)))}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-scrollbar{transform:translate(calc(var(--%NS%t-padding) * var(--%NS%tui-inline)));margin-inline-start:calc(-1 * var(--%NS%t-start));margin-inline-end:calc(1px - 100% + var(--%NS%t-start))}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-scrollbar .t-bar_horizontal{display:none}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items{position:sticky;z-index:-1;display:flex;inset-inline-start:var(--%NS%t-start);min-inline-size:0;min-block-size:var(--%NS%t-height);block-size:fit-content;flex:1;align-items:center;flex-wrap:wrap;padding:var(--%NS%t-vertical) 0;transition-duration:inherit;box-sizing:border-box;view-timeline:--t-scrollbar-y y}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items:after{content:\"\";min-inline-size:1px;min-block-size:1px}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items_horizontal{clip-path:inset(0 0 0 calc(var(--%NS%t-start) / 2 - var(--%NS%t-padding) - .5rem));flex-wrap:nowrap}[dir=rtl] tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items_horizontal{clip-path:inset(0 calc(var(--%NS%t-start) / 2 - var(--%NS%t-padding) - .5rem) 0 0)}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items_horizontal>.t-input{padding-inline-end:calc(var(--%NS%t-side) + var(--%NS%t-end) + var(--%NS%t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items>.t-input{position:relative;display:flex;align-items:center;flex:1;block-size:var(--%NS%t-item-height, 1.25em);max-block-size:calc(var(--%NS%t-height) - 2 * var(--%NS%t-vertical));max-inline-size:100%;pointer-events:none;transform:translate(var(--%NS%t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items>.t-input .t-filler,tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items>.t-input [tuiInput]{inset-block-start:-5%;block-size:110%;padding:0;pointer-events:auto}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items>.t-input .t-ghost{visibility:hidden;white-space:pre;text-overflow:clip;padding-inline-end:.125rem;block-size:100%}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items>.t-input .t-filler_hidden{display:none}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._with-label[data-size=l]{--%NS%t-vertical: .5625rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._with-label[data-size=l] tui-textfield-item:first-of-type{margin-block-start:1.125rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._with-label[data-size=m]{--%NS%t-vertical: .4375rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._with-label[data-size=m] tui-textfield-item:first-of-type{margin-block-start:.875rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._with-label>.t-items{align-items:flex-end}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._with-label>.t-items>label[tuiLabel]{min-inline-size:100%;margin:calc(var(--%NS%t-height) / 2 - var(--%NS%t-vertical) - .625em) 0;margin-inline-end:-100%;padding:0}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-content{position:sticky;min-block-size:var(--%NS%t-height);block-size:calc(var(--%NS%t-item-height) + 2 * var(--%NS%t-vertical));inset-block-start:0;inset-inline-start:calc(100% - var(--%NS%t-side) - var(--%NS%t-end))}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items input:not(:focus)::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-mode~=readonly]>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-mode~=readonly]>.t-items label~.t-input input::placeholder{opacity:0}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._empty>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-focus=true]:not([data-mode~=readonly]):not(:focus-within)>.t-items input::placeholder{opacity:1}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-state=disabled],tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-mode~=readonly]{pointer-events:none}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-state=disabled] select,tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-mode~=readonly] select{display:none}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=l]{--%NS%t-vertical: .625rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=l]:after{inset-inline-start:calc(100% - var(--%NS%t-end) - var(--%NS%t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{--%NS%t-vertical: .5rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:before{inset-inline-start:-.125rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:after{inset-inline-start:calc(100% - var(--%NS%t-end) - .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{--%NS%t-vertical: .125rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:before{inset-inline-start:-.25rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:after{inset-inline-start:calc(100% - var(--%NS%t-end))}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"]) tui-textfield-item{transform:translate(var(--%NS%t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"]) input::placeholder{transition-property:color;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard)}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"]) select{opacity:0;pointer-events:none!important}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._empty>.t-items select~.t-filler{display:block}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._empty:not([data-focus=true])>.t-items select~.t-filler{color:var(--%NS%tui-text-secondary)}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"]):has([tuiSelectLike]){cursor:pointer}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldMultiComponent, [{
		type: Component,
		args: [{
			selector: "tui-textfield[multi]",
			imports: [
				AsyncPipe,
				PolymorpheusOutlet,
				TuiButtonX,
				TuiCell,
				TuiScrollControls
			],
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			providers: [
				tuiButtonOptionsProvider({
					size: "xs",
					appearance: "icon"
				}),
				tuiButtonXOptionsProvider(() => inject(TUI_BUTTON_OPTIONS)),
				tuiAsDataListHost(TuiTextfieldMultiComponent),
				tuiProvide(TuiTextfieldComponent, TuiTextfieldMultiComponent),
				{
					provide: TUI_TEXTFIELD_VALUE,
					useFactory: () => inject(TuiTextfieldComponent).value
				},
				tuiFilterByInputOptionsProvider({ filter: (items, search, stringify) => items.filter((x) => TUI_DEFAULT_MATCHER(x, search, stringify)) })
			],
			hostDirectives: [TuiScrollRef],
			host: {
				"[attr.data-state]": "disabled ? \"disabled\" : null",
				"[class._empty]": "!items().length",
				"[style.--t-item-height.px]": "height()",
				"[style.--t-rows]": "rows()",
				"(click.prevent)": "onClick($event.target)",
				"(tuiActiveZoneChange)": "!$event && el.scrollTo({left: 0})"
			},
			template: "@if (child()?.value() ?? (control()?.control?.valueChanges | async)) {}\n@if (rows() > 1) {\n    <tui-scroll-controls class=\"t-scrollbar\" />\n}\n\n<div\n    #wrapper\n    class=\"t-items\"\n    [class.t-items_horizontal]=\"rows() === 1\"\n    (click)=\"focusInput()\"\n    (pointerdown.self.zoneless.prevent)=\"(0)\"\n    (resize)=\"onItems(wrapper)\"\n>\n    <ng-content select=\"label[tuiLabel]\" />\n    @for (item of items(); track item) {\n        <ng-template\n            [polymorpheusOutlet]=\"component\"\n            [polymorpheusOutletContext]=\"{$implicit: {item, index: $index}}\"\n        />\n    }\n    <span\n        class=\"t-input\"\n        (keydown.arrowLeft)=\"onLeft($event)\"\n    >\n        <ng-content select=\"input\" />\n        <ng-content select=\"select\" />\n        @if (placeholder) {\n            <span class=\"t-ghost\">{{ placeholder }}</span>\n        }\n        <input\n            aria-hidden=\"true\"\n            disabled\n            class=\"t-filler\"\n            [class.t-filler_hidden]=\"!showFiller()\"\n            [value]=\"computedFiller()\"\n        />\n    </span>\n</div>\n\n<span\n    #side\n    class=\"t-content\"\n    (click.stop)=\"input()?.nativeElement?.focus()\"\n    (pointerdown.zoneless.prevent)=\"(0)\"\n    (resize)=\"onResize(side)\"\n>\n    <ng-content />\n    @if (options.cleaner()) {\n        <button\n            tabindex=\"-1\"\n            tuiButtonX\n            (click)=\"accessor()?.setValue([])\"\n        >\n            {{ clear() }}\n        </button>\n    }\n    <ng-container #vcr />\n    <ng-content select=\"tui-icon\" />\n</span>\n\n@if (control()?.value != null) {\n    <span\n        class=\"t-template\"\n        [tuiCell]=\"options.size()\"\n    >\n        <ng-container *polymorpheusOutlet=\"content() as text; context: {$implicit: control()?.value}\">\n            {{ text }}\n        </ng-container>\n    </span>\n}\n",
			styles: ["tui-textfield:where(*[data-tui-version=\"5.17.0\"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);--t-height: calc(var(--tui-height-l) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-l);--t-label: 0;--t-label-y: -.75rem;--t-label-font: var(--tui-typography-ui-s);--t-end: 0px;--t-start: 0px;--t-side: 0px;--t-max: .75rem;--t-space: clamp(0px, calc(var(--t-side) + var(--t-end)), var(--t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--t-height);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version=\"5.17.0\"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version=\"5.17.0\"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance][data-appearance=\"\"]{color:var(--tui-text-tertiary)}@media(hover:hover)and (pointer:fine){tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance][data-appearance=\"\"]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--tui-text-secondary)}}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiAppearance][data-appearance=\"\"]:not([data-mode~=readonly])[data-state=hover]{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-icon-start]{--t-start: calc(2.5rem * (1 + .25 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:before{z-index:1;block-size:var(--t-height);inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none;max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--t-padding));margin-inline-end:calc(-1 * var(--t-padding));block-size:var(--t-height);max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-content,tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);--t-max: 0px;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-start]{--t-start: 1.5rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-end]{--t-end: 1.5rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{--t-height: calc(var(--tui-height-m) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-m);--t-label-font: var(--tui-typography-ui-xs);--t-label-y: -.5625rem;--t-max: .125rem;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-start]{--t-start: calc(2.125rem * (1 + .25 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--t-padding));margin-inline-start:calc(.5rem - var(--t-padding))}tui-textfield:where(*[data-tui-version=\"5.17.0\"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--tui-disabled-opacity)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is(._disabled,[data-state=disabled])>.t-content>tui-icon{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label{--t-label: 1}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label>.t-template,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label .t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;padding-inline-start:calc(var(--t-start) + var(--t-padding));padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-padding) + var(--t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template:disabled,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]._empty{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select option[value=\"\"]:disabled{color:transparent}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select optgroup,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select option{background-color:var(--tui-background-elevation-3)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select optgroup,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) select option:not(:disabled){color:var(--tui-text-primary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) button,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) a,tui-textfield:where(*[data-tui-version=\"5.17.0\"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version=\"5.17.0\"])>.t-content{z-index:1;display:flex;block-size:var(--t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) .t-filler{pointer-events:none!important;color:var(--tui-text-tertiary)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version=\"5.17.0\"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version=\"5.17.0\"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--tui-text-negative)}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version=\"5.17.0\"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"]){flex-wrap:nowrap;overflow:scroll;align-items:stretch;cursor:text;max-block-size:calc(var(--t-vertical) * 2 + var(--t-item-height) * var(--t-rows));overscroll-behavior-x:none;scroll-behavior:var(--tui-scroll-behavior)}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"]):before,tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"]):after{position:sticky;inset-block-start:0;inset-inline-start:0;block-size:10rem;min-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)));max-block-size:calc((var(--t-item-height, calc(var(--t-height) - 2 * var(--t-vertical))) + 2 * var(--t-vertical)) * (1 - .2 * var(--t-zoom)))}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-scrollbar{transform:translate(calc(var(--t-padding) * var(--tui-inline)));margin-inline-start:calc(-1 * var(--t-start));margin-inline-end:calc(1px - 100% + var(--t-start))}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-scrollbar .t-bar_horizontal{display:none}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items{position:sticky;z-index:-1;display:flex;inset-inline-start:var(--t-start);min-inline-size:0;min-block-size:var(--t-height);block-size:fit-content;flex:1;align-items:center;flex-wrap:wrap;padding:var(--t-vertical) 0;transition-duration:inherit;box-sizing:border-box;view-timeline:--t-scrollbar-y y}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items:after{content:\"\";min-inline-size:1px;min-block-size:1px}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items_horizontal{clip-path:inset(0 0 0 calc(var(--t-start) / 2 - var(--t-padding) - .5rem));flex-wrap:nowrap}[dir=rtl] tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items_horizontal{clip-path:inset(0 calc(var(--t-start) / 2 - var(--t-padding) - .5rem) 0 0)}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items_horizontal>.t-input{padding-inline-end:calc(var(--t-side) + var(--t-end) + var(--t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items>.t-input{position:relative;display:flex;align-items:center;flex:1;block-size:var(--t-item-height, 1.25em);max-block-size:calc(var(--t-height) - 2 * var(--t-vertical));max-inline-size:100%;pointer-events:none;transform:translate(var(--t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items>.t-input .t-filler,tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items>.t-input [tuiInput]{inset-block-start:-5%;block-size:110%;padding:0;pointer-events:auto}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items>.t-input .t-ghost{visibility:hidden;white-space:pre;text-overflow:clip;padding-inline-end:.125rem;block-size:100%}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items>.t-input .t-filler_hidden{display:none}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._with-label[data-size=l]{--t-vertical: .5625rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._with-label[data-size=l] tui-textfield-item:first-of-type{margin-block-start:1.125rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._with-label[data-size=m]{--t-vertical: .4375rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._with-label[data-size=m] tui-textfield-item:first-of-type{margin-block-start:.875rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._with-label>.t-items{align-items:flex-end}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._with-label>.t-items>label[tuiLabel]{min-inline-size:100%;margin:calc(var(--t-height) / 2 - var(--t-vertical) - .625em) 0;margin-inline-end:-100%;padding:0}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-content{position:sticky;min-block-size:var(--t-height);block-size:calc(var(--t-item-height) + 2 * var(--t-vertical));inset-block-start:0;inset-inline-start:calc(100% - var(--t-side) - var(--t-end))}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])>.t-items input:not(:focus)::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-mode~=readonly]>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-mode~=readonly]>.t-items label~.t-input input::placeholder{opacity:0}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._empty>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-focus=true]:not([data-mode~=readonly]):not(:focus-within)>.t-items input::placeholder{opacity:1}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-state=disabled],tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-mode~=readonly]{pointer-events:none}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-state=disabled] select,tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-mode~=readonly] select{display:none}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=l]{--t-vertical: .625rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=l]:after{inset-inline-start:calc(100% - var(--t-end) - var(--t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{--t-vertical: .5rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:before{inset-inline-start:-.125rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:after{inset-inline-start:calc(100% - var(--t-end) - .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{--t-vertical: .125rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:before{inset-inline-start:-.25rem}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:after{inset-inline-start:calc(100% - var(--t-end))}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"]) tui-textfield-item{transform:translate(var(--t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"]) input::placeholder{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard)}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"]) select{opacity:0;pointer-events:none!important}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._empty>.t-items select~.t-filler{display:block}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"])._empty:not([data-focus=true])>.t-items select~.t-filler{color:var(--tui-text-secondary)}tui-textfield[multi][multi]:where(*[data-tui-version=\"5.17.0\"]):has([tuiSelectLike]){cursor:pointer}\n"]
		}]
	}], null, null);
})();
var TuiTextfield = [
	TuiItem,
	TuiLabel,
	TuiTextfieldComponent,
	TuiTextfieldOptionsDirective,
	TuiTextfieldMultiComponent,
	TuiDropdownContent
];
function tuiInjectAuxiliary(predicate) {
	const { auxiliaries } = inject(TuiTextfieldComponent);
	return computed(() => auxiliaries().find(predicate) ?? null);
}
var TUI_TEXTFIELD_CONTENT = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_CONTENT" : "");
function tuiAsTextfieldContent(content) {
	return {
		provide: TUI_TEXTFIELD_CONTENT,
		useFactory: content
	};
}
var TuiTextfieldContent = class TuiTextfieldContent {
	constructor() {
		this.vcr = inject(TuiTextfieldComponent).vcr;
		this.options = { injector: inject(INJECTOR$1) };
		this.content = inject(TUI_TEXTFIELD_CONTENT, { optional: true }) || inject(TemplateRef);
		this.ref = computed(() => {
			const vcr = this.vcr();
			return this.content instanceof TemplateRef ? vcr?.createEmbeddedView(this.content) : vcr?.createComponent(this.content, this.options).hostView;
		});
	}
	ngDoCheck() {
		this.ref()?.detectChanges();
	}
	ngOnDestroy() {
		this.ref()?.destroy();
	}
	static {
		this.ɵfac = function TuiTextfieldContent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiTextfieldContent)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiTextfieldContent,
			selectors: [[
				"ng-template",
				"tuiTextfieldContent",
				""
			]]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldContent, [{
		type: Directive,
		args: [{ selector: "ng-template[tuiTextfieldContent]" }]
	}], null, null);
})();
/**
* Use it instead of host binding
* host: { '[type]': '"text"' }
* ___
* From Angular 19+ all effects are called before host bindings.
* If effects inside `tuiValue` will be called before `<input />` get `type="text"`,
* it will cause loss of initial value
*/
var TuiWithNativePicker = class TuiWithNativePicker {
	constructor() {
		tuiInjectElement().type = "text";
	}
	static {
		this.ɵfac = function TuiWithNativePicker_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiWithNativePicker)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({ type: TuiWithNativePicker });
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithNativePicker, [{ type: Directive }], () => [], null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-input.mjs
var TuiInputDirective = class TuiInputDirective {
	constructor() {
		this.el = tuiInjectElement();
		this.control = inject(NgControl, { optional: true });
		this.handlers = inject(TUI_ITEMS_HANDLERS);
		this.textfield = inject(TuiTextfieldComponent);
		this.dropdown = inject(TuiDropdownDirective);
		this.a = tuiAppearance(inject(TUI_TEXTFIELD_OPTIONS).appearance);
		this.s = tuiAppearanceState(computed(() => this.state()));
		this.m = tuiAppearanceMode(computed(() => this.mode()));
		this.f = tuiAppearanceFocus(computed(() => this.focused() ?? this.textfield.focused()));
		this.readOnly = input(false);
		this.invalid = input(null);
		this.focused = input(null);
		this.state = input(null);
		this.value = tuiValue(this.el);
		this.mode = computed(() => {
			if (this.readOnly()) return "readonly";
			if (this.invalid() === false) return "valid";
			return this.invalid() ? "invalid" : null;
		});
	}
	setValue(value) {
		this.el.focus();
		this.el.select();
		if (value == null) {
			this.el.ownerDocument.execCommand("delete");
			this.el.value = "";
		} else this.el.ownerDocument.execCommand("insertText", false, this.handlers.stringify()(value));
	}
	static {
		this.ɵfac = function TuiInputDirective_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiInputDirective)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiInputDirective,
			selectors: [[
				"input",
				"tuiInput",
				""
			]],
			hostAttrs: ["tuiInput", ""],
			hostVars: 4,
			hostBindings: function TuiInputDirective_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("focusin", function TuiInputDirective_focusin_HostBindingHandler() {
					return 0;
				})("focusout", function TuiInputDirective_focusout_HostBindingHandler() {
					return 0;
				})("input", function TuiInputDirective_input_HostBindingHandler() {
					return 0;
				});
				if (rf & 2) {
					ɵɵdomProperty("readOnly", ctx.readOnly());
					ɵɵattribute("role", ctx.dropdown.content() && !ctx.el.matches("select") ? "combobox" : null);
					ɵɵclassProp("_empty", ctx.value() === "");
				}
			},
			inputs: {
				readOnly: [1, "readOnly"],
				invalid: [1, "invalid"],
				focused: [1, "focused"],
				state: [1, "state"]
			},
			features: [ɵɵProvidersFeature([tuiAsTextfieldAccessor(TuiInputDirective)]), ɵɵHostDirectivesFeature([TuiNativeValidator, TuiId])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputDirective, [{
		type: Directive,
		args: [{
			selector: "input[tuiInput]",
			providers: [tuiAsTextfieldAccessor(TuiInputDirective)],
			hostDirectives: [TuiNativeValidator, TuiId],
			host: {
				tuiInput: "",
				"[attr.role]": "dropdown.content() && !el.matches(\"select\") ? \"combobox\" : null",
				"[class._empty]": "value() === \"\"",
				"[readOnly]": "readOnly()",
				"(focusin)": "0",
				"(focusout)": "0",
				"(input)": "0"
			}
		}]
	}], null, null);
})();
var TuiWithInput = class TuiWithInput {
	static {
		this.ɵfac = function TuiWithInput_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiWithInput)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiWithInput,
			features: [ɵɵHostDirectivesFeature([{
				directive: TuiInputDirective,
				inputs: [
					"invalid",
					"invalid",
					"focused",
					"focused",
					"readOnly",
					"readOnly",
					"state",
					"state"
				]
			}])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithInput, [{
		type: Directive,
		args: [{ hostDirectives: [{
			directive: TuiInputDirective,
			inputs: [
				"invalid",
				"focused",
				"readOnly",
				"state"
			]
		}] }]
	}], null, null);
})();
var TuiInput = [
	TuiLabel,
	TuiTextfieldComponent,
	TuiTextfieldOptionsDirective,
	TuiDropdownContent,
	TuiInputDirective
];
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-loader.mjs
/** Default values for the loader options. */
var _c0$3 = ["*"];
function TuiLoader_Conditional_2_Conditional_3_ng_container_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵtext(1);
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const text_r1 = ctx.polymorpheusOutlet;
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", text_r1, " ");
	}
}
function TuiLoader_Conditional_2_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "div", 5);
		ɵɵtemplate(1, TuiLoader_Conditional_2_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 6);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext(2);
		ɵɵadvance();
		ɵɵproperty("polymorpheusOutlet", ctx_r1.textContent());
	}
}
function TuiLoader_Conditional_2_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "div", 2);
		ɵɵnamespaceSVG();
		ɵɵelementStart(1, "svg", 3);
		ɵɵelement(2, "circle", 4);
		ɵɵelementEnd();
		ɵɵconditionalCreate(3, TuiLoader_Conditional_2_Conditional_3_Template, 2, 1, "div", 5);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵclassProp("t-loader_inherit-color", ctx_r1.inheritColor());
		ɵɵadvance(3);
		ɵɵconditional(ctx_r1.textContent() ? 3 : -1);
	}
}
var TUI_LOADER_DEFAULT_OPTIONS = {
	size: "m",
	inheritColor: false,
	overlay: false
};
/**
* Default parameters for loader component
*/
var [TUI_LOADER_OPTIONS, tuiLoaderOptionsProvider] = tuiCreateOptions(TUI_LOADER_DEFAULT_OPTIONS);
var TuiLoader = class TuiLoader {
	constructor() {
		this.options = inject(TUI_LOADER_OPTIONS);
		this.isApple = isSafari(tuiInjectElement()) || inject(WA_IS_IOS);
		this.size = input(this.options.size);
		this.inheritColor = input(this.options.inheritColor);
		this.overlay = input(this.options.overlay);
		this.textContent = input();
		this.loading = input(true);
	}
	static {
		this.ɵfac = function TuiLoader_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiLoader)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiLoader,
			selectors: [["tui-loader"]],
			hostVars: 3,
			hostBindings: function TuiLoader_HostBindings(rf, ctx) {
				if (rf & 2) {
					ɵɵattribute("data-size", ctx.size());
					ɵɵclassProp("_loading", ctx.loading());
				}
			},
			inputs: {
				size: [1, "size"],
				inheritColor: [1, "inheritColor"],
				overlay: [1, "overlay"],
				textContent: [1, "textContent"],
				loading: [1, "loading"]
			},
			ngContentSelectors: _c0$3,
			decls: 3,
			vars: 7,
			consts: [
				[
					1,
					"t-content",
					3,
					"disabled"
				],
				[
					1,
					"t-loader",
					3,
					"t-loader_inherit-color"
				],
				[1, "t-loader"],
				[
					"height",
					"100%",
					"width",
					"100%",
					1,
					"t-icon"
				],
				[1, "t-circle"],
				[1, "t-text"],
				[4, "polymorpheusOutlet"]
			],
			template: function TuiLoader_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵelementStart(0, "fieldset", 0);
					ɵɵprojection(1);
					ɵɵelementEnd();
					ɵɵconditionalCreate(2, TuiLoader_Conditional_2_Template, 4, 3, "div", 1);
				}
				if (rf & 2) {
					ɵɵstyleProp("opacity", ctx.overlay() && ctx.loading() ? .3 : null)("pointer-events", ctx.loading() ? "none" : null);
					ɵɵproperty("disabled", ctx.loading() && !ctx.isApple);
					ɵɵattribute("inert", ctx.loading() || null);
					ɵɵadvance(2);
					ɵɵconditional(ctx.loading() ? 2 : -1);
				}
			},
			dependencies: [PolymorpheusOutlet],
			styles: ["[_nghost-%COMP%]{position:relative;display:grid;flex-shrink:0;--%NS%tui-thickness: calc(var(--%NS%t-diameter) / 12)}._loading[_nghost-%COMP%]{overflow:hidden}[data-size=xs][_nghost-%COMP%]{--%NS%t-diameter: .75em}[data-size=s][_nghost-%COMP%]{--%NS%t-diameter: 1em}[data-size=m][_nghost-%COMP%]{--%NS%t-diameter: 1.5em}[data-size=l][_nghost-%COMP%]{--%NS%t-diameter: 2.5em}[data-size=xl][_nghost-%COMP%]{--%NS%t-diameter: 3.5em}[data-size=xxl][_nghost-%COMP%]{--%NS%t-diameter: 5em}.t-content[_ngcontent-%COMP%]{grid-area:1 / 1;padding:0;margin:0;border:none;isolation:inherit;min-inline-size:0;min-block-size:0}.t-loader[_ngcontent-%COMP%]{position:relative;display:flex;grid-area:1 / 1;flex-direction:column;gap:1rem;align-items:center;justify-content:center;color:var(--%NS%tui-text-primary);stroke:var(--%NS%tui-background-accent-1);font-size:1rem}[data-size=xs][_nghost-%COMP%]   .t-loader[_ngcontent-%COMP%], [data-size=s][_nghost-%COMP%]   .t-loader[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--%NS%tui-typography-body-s);color:inherit;max-inline-size:100%;text-align:center}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon[_ngcontent-%COMP%]{inline-size:var(--%NS%t-diameter);block-size:var(--%NS%t-diameter);animation:_ngcontent-%COMP%_tuiLoaderRotate 4s linear infinite}@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--%NS%t-diameter) / 2 - var(--%NS%tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--%NS%t-diameter) / 2 - var(--%NS%tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--%NS%t-diameter) / 2 - var(--%NS%tui-thickness)))}}.t-circle[_ngcontent-%COMP%]{r:calc(var(--%NS%t-diameter) / 2 - var(--%NS%tui-thickness));cx:50%;cy:50%;stroke-dasharray:calc(2 * 3.14159265 * calc(var(--%NS%t-diameter) / 2 - var(--%NS%tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--%NS%tui-thickness),1.5px);stroke-linecap:round;animation:_ngcontent-%COMP%_tuiLoaderDashOffset 4s linear infinite}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLoader, [{
		type: Component,
		args: [{
			selector: "tui-loader",
			imports: [PolymorpheusOutlet],
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: {
				"[attr.data-size]": "size()",
				"[class._loading]": "loading()"
			},
			template: "<fieldset\n    class=\"t-content\"\n    [attr.inert]=\"loading() || null\"\n    [disabled]=\"loading() && !isApple\"\n    [style.opacity]=\"overlay() && loading() ? 0.3 : null\"\n    [style.pointer-events]=\"loading() ? 'none' : null\"\n>\n    <ng-content />\n</fieldset>\n\n@if (loading()) {\n    <div\n        class=\"t-loader\"\n        [class.t-loader_inherit-color]=\"inheritColor()\"\n    >\n        <svg\n            height=\"100%\"\n            width=\"100%\"\n            class=\"t-icon\"\n        >\n            <circle class=\"t-circle\" />\n        </svg>\n        @if (textContent()) {\n            <div class=\"t-text\">\n                <ng-container *polymorpheusOutlet=\"textContent() as text\">\n                    {{ text }}\n                </ng-container>\n            </div>\n        }\n    </div>\n}\n",
			styles: [":host{position:relative;display:grid;flex-shrink:0;--tui-thickness: calc(var(--t-diameter) / 12)}:host._loading{overflow:hidden}:host[data-size=xs]{--t-diameter: .75em}:host[data-size=s]{--t-diameter: 1em}:host[data-size=m]{--t-diameter: 1.5em}:host[data-size=l]{--t-diameter: 2.5em}:host[data-size=xl]{--t-diameter: 3.5em}:host[data-size=xxl]{--t-diameter: 5em}.t-content{grid-area:1 / 1;padding:0;margin:0;border:none;isolation:inherit;min-inline-size:0;min-block-size:0}.t-loader{position:relative;display:flex;grid-area:1 / 1;flex-direction:column;gap:1rem;align-items:center;justify-content:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);font-size:1rem}:host[data-size=xs] .t-loader,:host[data-size=s] .t-loader{flex-direction:row}.t-loader.t-loader_inherit-color{color:inherit;stroke:currentColor}.t-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-typography-body-s);color:inherit;max-inline-size:100%;text-align:center}@keyframes tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon{inline-size:var(--t-diameter);block-size:var(--t-diameter);animation:tuiLoaderRotate 4s linear infinite}@keyframes tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));cx:50%;cy:50%;stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);stroke-linecap:round;animation:tuiLoaderDashOffset 4s linear infinite}\n"]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-alert.mjs
var Styles$3 = class Styles$3 {
	static {
		this.ɵfac = function Styles_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || Styles$3)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: Styles$3,
			selectors: [["ng-component"]],
			exportAs: ["tui-alert-5.17.0"],
			decls: 0,
			vars: 0,
			template: function Styles_Template(rf, ctx) {},
			styles: ["[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]){position:relative;display:grid;grid-column:1;place-self:start start;isolation:isolate;--%NS%tui-from: translateX(-100%)}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-inline=end]{justify-self:end;--%NS%tui-from: translateX(100%)}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-inline=center]{justify-self:center;--%NS%tui-from: translateY(-100%)}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]{align-self:end}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end][data-inline=center]{--%NS%tui-from: translateY(100%)}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(1){grid-row:16}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(2){grid-row:17}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(3){grid-row:18}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(4){grid-row:19}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(5){grid-row:20}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(6){grid-row:21}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(7){grid-row:22}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(8){grid-row:23}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(9){grid-row:24}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(10){grid-row:25}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]).tui-enter,[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]).tui-leave{animation-name:tuiFade,tuiSlide,tuiCollapse}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):not(:first-of-type){margin-block-start:0!important}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):not(:last-of-type){margin-block-end:0!important}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(1){grid-row:5}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(2){grid-row:6}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(3){grid-row:7}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(4){grid-row:8}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(5){grid-row:9}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(6){grid-row:10}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(7){grid-row:11}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(8){grid-row:12}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(9){grid-row:13}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(10){grid-row:14}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])>*{grid-row:1 / span 2}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])>*:before,[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])>*:after{content:\"\";display:block;block-size:.375rem}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles$3, [{
		type: Component,
		args: [{
			template: "",
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			exportAs: `tui-alert-5.17.0`,
			styles: ["[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]){position:relative;display:grid;grid-column:1;place-self:start start;isolation:isolate;--tui-from: translateX(-100%)}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-inline=end]{justify-self:end;--tui-from: translateX(100%)}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-inline=center]{justify-self:center;--tui-from: translateY(-100%)}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]{align-self:end}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end][data-inline=center]{--tui-from: translateY(100%)}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(1){grid-row:16}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(2){grid-row:17}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(3){grid-row:18}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(4){grid-row:19}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(5){grid-row:20}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(6){grid-row:21}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(7){grid-row:22}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(8){grid-row:23}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(9){grid-row:24}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])[data-block=end]:nth-of-type(10){grid-row:25}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]).tui-enter,[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]).tui-leave{animation-name:tuiFade,tuiSlide,tuiCollapse}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):not(:first-of-type){margin-block-start:0!important}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):not(:last-of-type){margin-block-end:0!important}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(1){grid-row:5}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(2){grid-row:6}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(3){grid-row:7}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(4){grid-row:8}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(5){grid-row:9}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(6){grid-row:10}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(7){grid-row:11}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(8){grid-row:12}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(9){grid-row:13}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"]):nth-of-type(10){grid-row:14}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])>*{grid-row:1 / span 2}[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])>*:before,[tuiAlert]:where(*[data-tui-version=\"5.17.0\"])>*:after{content:\"\";display:block;block-size:.375rem}\n"]
		}]
	}], null, null);
})();
var TuiAlertDirective = class TuiAlertDirective {
	constructor() {
		this.nothing = tuiWithStyles(Styles$3);
		this.context = injectContext();
	}
	static {
		this.ɵfac = function TuiAlertDirective_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiAlertDirective)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiAlertDirective,
			hostAttrs: [
				"data-tui-version",
				"5.17.0",
				"role",
				"alert",
				"tuiAlert",
				""
			],
			hostVars: 2,
			hostBindings: function TuiAlertDirective_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵattribute("data-block", ctx.context.block)("data-inline", ctx.context.inline);
			}
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertDirective, [{
		type: Directive,
		args: [{ host: {
			"data-tui-version": "5.17.0",
			role: "alert",
			tuiAlert: "",
			"[attr.data-block]": "context.block",
			"[attr.data-inline]": "context.inline"
		} }]
	}], null, null);
})();
var TuiAlertService = class TuiAlertService extends TuiPortal {
	constructor(concurrency, service = inject(TuiPopupService)) {
		super(service);
		this.current = /* @__PURE__ */ new Map();
		this.queue = /* @__PURE__ */ new Set();
		this.concurrency = Math.min(concurrency, 5);
	}
	add(component) {
		if (this.current.size < this.concurrency) this.current.set(component, this.service.add(component));
		else this.queue.add(component);
		return () => {
			this.current.get(component)?.destroy();
			this.current.delete(component);
			this.queue.delete(component);
			const [next] = this.queue;
			if (this.current.size < this.concurrency && next) {
				this.current.set(next, this.service.add(next));
				this.queue.delete(next);
			}
		};
	}
	static {
		this.ɵfac = function TuiAlertService_Factory(__ngFactoryType__) {
			ɵɵinvalidFactory();
		};
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiAlertService,
			factory: TuiAlertService.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertService, [{ type: Injectable }], () => [{ type: void 0 }, { type: void 0 }], null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-title.mjs
var Styles$2 = class Styles$2 {
	static {
		this.ɵfac = function Styles_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || Styles$2)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: Styles$2,
			selectors: [["ng-component"]],
			exportAs: ["tui-title-5.17.0"],
			decls: 0,
			vars: 0,
			template: function Styles_Template(rf, ctx) {},
			styles: ["[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]){position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--%NS%tui-typography-ui-m)}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{gap:.125rem;font:var(--%NS%tui-typography-body-s)}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiSubtitle]{font:var(--%NS%tui-typography-body-xs)}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{gap:.125rem;font:var(--%NS%tui-typography-heading-h5)}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiSubtitle]{font:var(--%NS%tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"])[data-size=l]{gap:.5rem;font:var(--%NS%tui-typography-heading-h3)}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"])[data-size=l] [tuiSubtitle]{font:var(--%NS%tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]) h1,[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]) h2,[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]) h3,[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]) h4,[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]) h5,[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]) h6{margin:0;font:inherit}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]) [tuiSubtitle]{font:var(--%NS%tui-typography-ui-s);margin:0}[tuiButton]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle]{margin-inline-end:auto}[tuiButton]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiSubtitle]{color:var(--%NS%tui-text-secondary)}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles$2, [{
		type: Component,
		args: [{
			template: "",
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			exportAs: `tui-title-5.17.0`,
			styles: ["[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]){position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-typography-ui-m)}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{gap:.125rem;font:var(--tui-typography-body-s)}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-body-xs)}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{gap:.125rem;font:var(--tui-typography-heading-h5)}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"])[data-size=l]{gap:.5rem;font:var(--tui-typography-heading-h3)}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"])[data-size=l] [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]) h1,[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]) h2,[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]) h3,[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]) h4,[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]) h5,[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]) h6{margin:0;font:inherit}[tuiTitle]:where(*[data-tui-version=\"5.17.0\"]) [tuiSubtitle]{font:var(--tui-typography-ui-s);margin:0}[tuiButton]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle]{margin-inline-end:auto}[tuiButton]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle] [tuiSubtitle]{color:var(--tui-text-secondary)}\n"]
		}]
	}], null, null);
})();
var TuiTitle = class TuiTitle {
	constructor() {
		this.nothing = tuiWithStyles(Styles$2);
		this.tuiTitle = input("");
	}
	static {
		this.ɵfac = function TuiTitle_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiTitle)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiTitle,
			selectors: [[
				"",
				"tuiTitle",
				""
			]],
			hostAttrs: [
				"data-tui-version",
				"5.17.0",
				"tuiTitle",
				""
			],
			hostVars: 1,
			hostBindings: function TuiTitle_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵattribute("data-size", ctx.tuiTitle() || null);
			},
			inputs: { tuiTitle: [1, "tuiTitle"] }
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTitle, [{
		type: Directive,
		args: [{
			selector: "[tuiTitle]",
			host: {
				"data-tui-version": "5.17.0",
				tuiTitle: "",
				"[attr.data-size]": "tuiTitle() || null"
			}
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-notification.mjs
function TuiNotificationComponent_ng_container_4_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵtext(1);
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const text_r1 = ctx.polymorpheusOutlet;
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", text_r1, " ");
	}
}
function TuiNotificationComponent_span_6_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "span", 7);
	if (rf & 2) {
		const text_r2 = ctx.polymorpheusOutlet;
		ɵɵproperty("innerHTML", text_r2, ɵɵsanitizeHtml);
	}
}
function TuiNotificationComponent_Conditional_7_Template(rf, ctx) {
	if (rf & 1) {
		const _r3 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "button", 8);
		ɵɵlistener("click", function TuiNotificationComponent_Conditional_7_Template_button_click_0_listener() {
			ɵɵrestoreView(_r3);
			return ɵɵresetView(ɵɵnextContext().item.$implicit.complete());
		});
		ɵɵtext(1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r3 = ɵɵnextContext();
		ɵɵproperty("iconStart", ctx_r3.icons.close);
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", ctx_r3.close(), " ");
	}
}
var ICONS = {
	info: "@tui.info",
	positive: "@tui.circle-check",
	negative: "@tui.circle-x",
	warning: "@tui.circle-alert",
	neutral: "@tui.info"
};
var TUI_NOTIFICATION_DEFAULT_OPTIONS = {
	appearance: "info",
	icon: (appearance) => ICONS[appearance] ?? "",
	size: "l",
	data: void 0,
	autoClose: 3e3,
	label: "",
	closable: true,
	block: "start",
	inline: "end"
};
var [TUI_NOTIFICATION_OPTIONS, tuiNotificationOptionsProvider] = tuiCreateOptions(TUI_NOTIFICATION_DEFAULT_OPTIONS);
var TUI_NOTIFICATION_CONCURRENCY = new InjectionToken(ngDevMode ? "TUI_NOTIFICATION_CONCURRENCY" : "", { factory: () => 5 });
var Styles$1 = class Styles$1 {
	static {
		this.ɵfac = function Styles_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || Styles$1)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: Styles$1,
			selectors: [["ng-component"]],
			exportAs: ["tui-notification-5.17.0"],
			decls: 0,
			vars: 0,
			template: function Styles_Template(rf, ctx) {},
			styles: ["[tuiNotification]:where(*[data-tui-version=\"5.17.0\"]){-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:flow-root;max-block-size:100%;color:var(--%NS%tui-text-primary);padding:var(--%NS%t-offset) var(--%NS%tui-padding-l);font:var(--%NS%tui-typography-body-m);border-radius:var(--%NS%tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--%NS%t-start) solid transparent;border-inline-end:var(--%NS%t-end) solid transparent;--%NS%t-offset: calc((var(--%NS%t-height) - var(--%NS%tui-lh)) / 2);--%NS%t-height: var(--%NS%tui-height-l);--%NS%t-start: 0;--%NS%t-end: 0}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-icon-start]{--%NS%t-start: 2rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-icon-end]{--%NS%t-end: 1.5rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"]):before{position:absolute;inset-inline-start:-1rem;inset-block-start:calc((var(--%NS%t-offset) + var(--%NS%tui-lh)) * (1 - .15 * var(--%NS%t-zoom)));transform:translateY(-100%)}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"]):after{position:absolute;top:50%;transform:translateY(-50%);inset-inline-end:-.5rem;font-size:1rem;margin:0;margin-inline-end:-.25rem;margin-inline-start:auto;color:var(--%NS%tui-text-tertiary)!important}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{padding:var(--%NS%t-offset) .5rem;font:var(--%NS%tui-typography-body-s);border-radius:var(--%NS%tui-radius-m);--%NS%t-height: var(--%NS%tui-height-s)}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-start]{--%NS%t-start: 1.5rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:before{inset-inline-start:calc(-1rem * (1 - .2 * var(--%NS%t-zoom)));inset-block-start:calc((var(--%NS%t-offset) + var(--%NS%tui-lh)) * (1 - .1 * var(--%NS%t-zoom)));font-size:1rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:after{inset-inline-end:-.875rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] tui-icon{font-size:1rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiTitle]{font:var(--%NS%tui-typography-body-s);font-weight:700}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiSubtitle]{font:var(--%NS%tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]>[tuiIconButton]{inset-block-start:0;inset-inline-end:0}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{padding:var(--%NS%t-offset) var(--%NS%tui-padding-m);font:var(--%NS%tui-typography-body-s);border-radius:var(--%NS%tui-radius-m);--%NS%t-height: var(--%NS%tui-height-m)}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-start]{--%NS%t-start: 1.625rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:before{inset-inline-start:-.875rem;font-size:1.25rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:after{inset-inline-end:-.75rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] tui-icon{font-size:1.25rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiTitle]{font:var(--%NS%tui-typography-ui-m);font-weight:700}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiSubtitle]{font:var(--%NS%tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]>[tuiIconButton]{inset-block-start:.375rem;inset-inline-end:.5rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle]{gap:.125rem;font:var(--%NS%tui-typography-ui-l);font-weight:700}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"]) [tuiSubtitle]{font:var(--%NS%tui-typography-body-m)}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"]) [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-block-start:.625rem;font:var(--%NS%tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])>[tuiIconButton]{position:absolute;inset-block-start:.75rem;inset-inline-end:.75rem;box-shadow:none!important;background:transparent!important}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles$1, [{
		type: Component,
		args: [{
			template: "",
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			exportAs: `tui-notification-5.17.0`,
			styles: ["[tuiNotification]:where(*[data-tui-version=\"5.17.0\"]){-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:flow-root;max-block-size:100%;color:var(--tui-text-primary);padding:var(--t-offset) var(--tui-padding-l);font:var(--tui-typography-body-m);border-radius:var(--tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--t-start) solid transparent;border-inline-end:var(--t-end) solid transparent;--t-offset: calc((var(--t-height) - var(--tui-lh)) / 2);--t-height: var(--tui-height-l);--t-start: 0;--t-end: 0}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-icon-start]{--t-start: 2rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-icon-end]{--t-end: 1.5rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"]):before{position:absolute;inset-inline-start:-1rem;inset-block-start:calc((var(--t-offset) + var(--tui-lh)) * (1 - .15 * var(--t-zoom)));transform:translateY(-100%)}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"]):after{position:absolute;top:50%;transform:translateY(-50%);inset-inline-end:-.5rem;font-size:1rem;margin:0;margin-inline-end:-.25rem;margin-inline-start:auto;color:var(--tui-text-tertiary)!important}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]{padding:var(--t-offset) .5rem;font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m);--t-height: var(--tui-height-s)}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s][data-icon-start]{--t-start: 1.5rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:before{inset-inline-start:calc(-1rem * (1 - .2 * var(--t-zoom)));inset-block-start:calc((var(--t-offset) + var(--tui-lh)) * (1 - .1 * var(--t-zoom)));font-size:1rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]:after{inset-inline-end:-.875rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] tui-icon{font-size:1rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiTitle]{font:var(--tui-typography-body-s);font-weight:700}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=s]>[tuiIconButton]{inset-block-start:0;inset-inline-end:0}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{padding:var(--t-offset) var(--tui-padding-m);font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m);--t-height: var(--tui-height-m)}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m][data-icon-start]{--t-start: 1.625rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:before{inset-inline-start:-.875rem;font-size:1.25rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]:after{inset-inline-end:-.75rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] tui-icon{font-size:1.25rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiTitle]{font:var(--tui-typography-ui-m);font-weight:700}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]>[tuiIconButton]{inset-block-start:.375rem;inset-inline-end:.5rem}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"]) [tuiTitle]{gap:.125rem;font:var(--tui-typography-ui-l);font-weight:700}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"]) [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"]) [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-block-start:.625rem;font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version=\"5.17.0\"])>[tuiIconButton]{position:absolute;inset-block-start:.75rem;inset-inline-end:.75rem;box-shadow:none!important;background:transparent!important}\n"]
		}]
	}], null, null);
})();
var TuiNotificationDirective = class TuiNotificationDirective {
	constructor() {
		this.options = inject(TUI_NOTIFICATION_OPTIONS);
		this.nothing = tuiWithStyles(Styles$1);
		this.icons = tuiIconStart(computed((icon = this.icon()) => tuiIsString(icon) ? icon : icon(this.appearance())));
		this.appearance = input(this.options.appearance);
		this.size = input(this.options.size);
		this.icon = input(this.options.icon);
	}
	static {
		this.ɵfac = function TuiNotificationDirective_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiNotificationDirective)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiNotificationDirective,
			selectors: [[
				"",
				"tuiNotification",
				"",
				5,
				"ng-template"
			]],
			hostVars: 1,
			hostBindings: function TuiNotificationDirective_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵattribute("data-size", ctx.size());
			},
			inputs: {
				appearance: [1, "appearance"],
				size: [1, "size"],
				icon: [1, "icon"]
			},
			features: [ɵɵProvidersFeature([
				tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS),
				tuiLinkOptionsProvider({ appearance: "" }),
				tuiButtonOptionsProvider({
					appearance: "outline-grayscale",
					size: "s"
				})
			]), ɵɵHostDirectivesFeature([TuiWithIcons, TuiWithAppearance])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationDirective, [{
		type: Directive,
		args: [{
			selector: "[tuiNotification]:not(ng-template)",
			providers: [
				tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS),
				tuiLinkOptionsProvider({ appearance: "" }),
				tuiButtonOptionsProvider({
					appearance: "outline-grayscale",
					size: "s"
				})
			],
			hostDirectives: [TuiWithIcons, TuiWithAppearance],
			host: { "[attr.data-size]": "size()" }
		}]
	}], null, null);
})();
var TuiNotificationComponent = class TuiNotificationComponent {
	constructor() {
		this.el = tuiInjectElement();
		this.icons = inject(TUI_COMMON_ICONS);
		this.close = inject(TUI_CLOSE_WORD);
		this.item = injectContext();
		this.sub = of(typeof this.item.autoClose === "function" ? this.item.autoClose(this.item.appearance) : this.item.autoClose).pipe(switchMap((autoClose) => autoClose ? timer(autoClose) : EMPTY), takeUntil(fromEvent(this.el, "mouseenter")), repeat({ delay: () => fromEvent(this.el, "mouseleave") }), takeUntilDestroyed()).subscribe(() => this.item.$implicit.complete());
	}
	static {
		this.ɵfac = function TuiNotificationComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiNotificationComponent)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiNotificationComponent,
			selectors: [["tui-notification-alert"]],
			hostAttrs: ["role", "alert"],
			features: [ɵɵHostDirectivesFeature([TuiAnimated, TuiAlertDirective])],
			decls: 8,
			vars: 9,
			consts: [
				[1, "t-wrapper"],
				[
					"size",
					"m",
					"tuiNotification",
					"",
					3,
					"appearance",
					"icon"
				],
				["tuiTitle", ""],
				[
					4,
					"polymorpheusOutlet",
					"polymorpheusOutletContext"
				],
				["tuiSubtitle", ""],
				[
					3,
					"innerHTML",
					4,
					"polymorpheusOutlet",
					"polymorpheusOutletContext"
				],
				[
					"tuiIconButton",
					"",
					"type",
					"button",
					3,
					"iconStart"
				],
				[3, "innerHTML"],
				[
					"tuiIconButton",
					"",
					"type",
					"button",
					3,
					"click",
					"iconStart"
				]
			],
			template: function TuiNotificationComponent_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵelementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "span", 2);
					ɵɵtemplate(4, TuiNotificationComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
					ɵɵelementStart(5, "span", 4);
					ɵɵtemplate(6, TuiNotificationComponent_span_6_Template, 1, 1, "span", 5);
					ɵɵelementEnd()();
					ɵɵconditionalCreate(7, TuiNotificationComponent_Conditional_7_Template, 2, 2, "button", 6);
					ɵɵelementEnd()()();
				}
				if (rf & 2) {
					ɵɵadvance(2);
					ɵɵclassProp("t-closable", ctx.item.closable);
					ɵɵproperty("appearance", ctx.item.appearance)("icon", ctx.item.icon);
					ɵɵadvance(2);
					ɵɵproperty("polymorpheusOutlet", ctx.item.label)("polymorpheusOutletContext", ctx.item);
					ɵɵadvance(2);
					ɵɵproperty("polymorpheusOutlet", ctx.item.content)("polymorpheusOutletContext", ctx.item);
					ɵɵadvance();
					ɵɵconditional(ctx.item.closable ? 7 : -1);
				}
			},
			dependencies: [
				PolymorpheusOutlet,
				TuiButton,
				TuiNotificationDirective,
				TuiTitle
			],
			styles: ["[_nghost-%COMP%]{inline-size:18rem;margin:1.625rem 3rem;word-break:break-word;transform:translateZ(0)}[_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%], tui-root._mobile   [_nghost-%COMP%]{margin:.625rem 1rem}.t-wrapper[_ngcontent-%COMP%]{background:var(--%NS%tui-background-base);box-shadow:var(--%NS%tui-shadow-medium);border-radius:var(--%NS%tui-radius-m)}.t-closable[data-size][_ngcontent-%COMP%]{padding-inline-end:2.5rem}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationComponent, [{
		type: Component,
		args: [{
			selector: "tui-notification-alert",
			imports: [
				PolymorpheusOutlet,
				TuiButton,
				TuiNotificationDirective,
				TuiTitle
			],
			changeDetection: ChangeDetectionStrategy.OnPush,
			hostDirectives: [TuiAnimated, TuiAlertDirective],
			host: { role: "alert" },
			template: "<div>\n    <div class=\"t-wrapper\">\n        <div\n            size=\"m\"\n            tuiNotification\n            [appearance]=\"item.appearance\"\n            [class.t-closable]=\"item.closable\"\n            [icon]=\"item.icon\"\n        >\n            <span tuiTitle>\n                <ng-container *polymorpheusOutlet=\"item.label as text; context: item\">\n                    {{ text }}\n                </ng-container>\n                <span tuiSubtitle>\n                    <span\n                        *polymorpheusOutlet=\"item.content as text; context: item\"\n                        [innerHTML]=\"text\"\n                    ></span>\n                </span>\n            </span>\n            @if (item.closable) {\n                <button\n                    tuiIconButton\n                    type=\"button\"\n                    [iconStart]=\"icons.close\"\n                    (click)=\"item.$implicit.complete()\"\n                >\n                    {{ close() }}\n                </button>\n            }\n        </div>\n    </div>\n</div>\n",
			styles: [":host{inline-size:18rem;margin:1.625rem 3rem;word-break:break-word;transform:translateZ(0)}:host :host-context(tui-root._mobile){margin:.625rem 1rem}.t-wrapper{background:var(--tui-background-base);box-shadow:var(--tui-shadow-medium);border-radius:var(--tui-radius-m)}.t-closable[data-size]{padding-inline-end:2.5rem}\n"]
		}]
	}], null, null);
})();
var TuiNotificationService = class TuiNotificationService extends TuiAlertService {
	constructor(service) {
		super(inject(TUI_NOTIFICATION_CONCURRENCY), service);
		this.options = inject(TUI_NOTIFICATION_OPTIONS);
		this.component = TuiNotificationComponent;
	}
	static {
		this.ɵfac = function TuiNotificationService_Factory(__ngFactoryType__) {
			ɵɵinvalidFactory();
		};
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiNotificationService,
			factory: function TuiNotificationService_Factory(__ngFactoryType__) {
				let __ngConditionalFactory__ = null;
				if (__ngFactoryType__) __ngConditionalFactory__ = new __ngFactoryType__();
				else __ngConditionalFactory__ = new TuiNotificationService(ɵɵinject(TuiPopupService));
				return __ngConditionalFactory__;
			},
			providedIn: "root"
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationService, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			deps: [TuiPopupService],
			useClass: TuiNotificationService
		}]
	}], () => [{ type: void 0 }], null);
})();
var TuiNotificationTemplate = class TuiNotificationTemplate {
	constructor() {
		this.tuiNotificationOptions = input({});
	}
	static {
		this.ɵfac = function TuiNotificationTemplate_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiNotificationTemplate)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiNotificationTemplate,
			selectors: [[
				"ng-template",
				"tuiNotification",
				""
			]],
			inputs: { tuiNotificationOptions: [1, "tuiNotificationOptions"] },
			features: [ɵɵProvidersFeature([tuiAsPortal(TuiNotificationService)]), ɵɵHostDirectivesFeature([{
				directive: TuiPortalDirective,
				inputs: [
					"options",
					"tuiNotificationOptions",
					"open",
					"tuiNotification"
				],
				outputs: ["openChange", "tuiNotificationChange"]
			}])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationTemplate, [{
		type: Directive,
		args: [{
			selector: "ng-template[tuiNotification]",
			providers: [tuiAsPortal(TuiNotificationService)],
			hostDirectives: [{
				directive: TuiPortalDirective,
				inputs: ["options: tuiNotificationOptions", "open: tuiNotification"],
				outputs: ["openChange: tuiNotificationChange"]
			}]
		}]
	}], null, null);
})();
var TuiNotification = [TuiNotificationDirective, TuiNotificationTemplate];
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-platform.mjs
var TuiPlatform = class TuiPlatform {
	constructor() {
		this.tuiPlatform = input(inject(TUI_PLATFORM, { skipSelf: true }));
	}
	static {
		this.ɵfac = function TuiPlatform_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiPlatform)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiPlatform,
			selectors: [[
				"",
				"tuiPlatform",
				""
			]],
			hostVars: 1,
			hostBindings: function TuiPlatform_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵattribute("data-platform", ctx.tuiPlatform());
			},
			inputs: { tuiPlatform: [1, "tuiPlatform"] },
			features: [ɵɵProvidersFeature([{
				provide: TUI_PLATFORM,
				useFactory: () => inject(TuiPlatform).tuiPlatform()
			}])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPlatform, [{
		type: Directive,
		args: [{
			selector: "[tuiPlatform]",
			providers: [{
				provide: TUI_PLATFORM,
				useFactory: () => inject(TuiPlatform).tuiPlatform()
			}],
			host: { "[attr.data-platform]": "tuiPlatform()" }
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@ng-web-apis/screen-orientation/fesm2022/ng-web-apis-screen-orientation.mjs
var WaScreenOrientationService = class WaScreenOrientationService extends Observable {
	win = inject(WA_WINDOW);
	screen = this.win.screen;
	stream$ = (this.screen ? fromEvent(this.screen.orientation, "change").pipe(startWith(null), map(() => this.win.screen.orientation.type)) : fromEvent(this.win, "orientationchange").pipe(startWith(null), map(() => {
		switch (Number.parseInt(this.win.orientation, 10)) {
			case -90: return "landscape-secondary";
			case 180: return "portrait-secondary";
			case 90: return "landscape-primary";
			default: return "portrait-primary";
		}
	}))).pipe(shareReplay({
		bufferSize: 1,
		refCount: true
	}));
	constructor() {
		super((subscriber) => this.stream$.subscribe(subscriber));
	}
	static ɵfac = function WaScreenOrientationService_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || WaScreenOrientationService)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: WaScreenOrientationService,
		factory: WaScreenOrientationService.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaScreenOrientationService, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
var WaViewportService = class WaViewportService extends Observable {
	visualViewport = inject(WA_WINDOW).visualViewport;
	stream$ = this.visualViewport ? merge(fromEvent(this.visualViewport, "resize"), fromEvent(this.visualViewport, "scroll"), fromEvent(this.visualViewport, "scrollend")).pipe(startWith(null), map(() => this.visualViewport), filter(Boolean), shareReplay({
		bufferSize: 1,
		refCount: true
	})) : EMPTY;
	constructor() {
		super((subscriber) => this.stream$.subscribe(subscriber));
	}
	static ɵfac = function WaViewportService_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || WaViewportService)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: WaViewportService,
		factory: WaViewportService.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaViewportService, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-visual-viewport.mjs
var TuiVisualViewport = class TuiVisualViewport {
	constructor() {
		this.w = inject(WA_WINDOW);
		this.style = tuiInjectElement().style;
		this.minInnerHeight = Infinity;
		this.$ = inject(WaViewportService).pipe(takeUntilDestroyed()).subscribe(({ offsetLeft, offsetTop, height, width, scale }) => {
			this.minInnerHeight = Math.min(this.minInnerHeight, this.w.innerHeight);
			this.style.setProperty("--tui-viewport-x", tuiPx(offsetLeft));
			this.style.setProperty("--tui-viewport-y", tuiPx(offsetTop));
			this.style.setProperty("--tui-viewport-height", tuiPx(height));
			this.style.setProperty("--tui-viewport-width", tuiPx(width));
			this.style.setProperty("--tui-viewport-scale", String(scale));
			this.style.setProperty("--tui-viewport-vh", tuiPx(this.w.innerHeight / 100));
			this.style.setProperty("--tui-viewport-vw", tuiPx(this.w.innerWidth / 100));
			this.style.setProperty("--tui-viewport-svh", tuiPx(this.minInnerHeight / 100));
		});
	}
	static {
		this.ɵfac = function TuiVisualViewport_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiVisualViewport)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiVisualViewport,
			selectors: [[
				"",
				"tuiVisualViewport",
				""
			]]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewport, [{
		type: Directive,
		args: [{ selector: "[tuiVisualViewport]" }]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-root.mjs
var _c0$2 = ["*", [["tuiOverContent"]]];
var _c1$1 = ["*", "tuiOverContent"];
function TuiRoot_Conditional_2_Conditional_0_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "tui-scroll-controls", 1);
}
function TuiRoot_Conditional_2_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵconditionalCreate(0, TuiRoot_Conditional_2_Conditional_0_Template, 1, 0, "tui-scroll-controls", 1);
		ɵɵelementStart(1, "tui-popups");
		ɵɵprojection(2, 1);
		ɵɵelementEnd();
	}
	if (rf & 2) ɵɵconditional(ɵɵnextContext().scrollbars ? 0 : -1);
}
var TuiRoot = class TuiRoot {
	constructor() {
		this.doc = inject(DOCUMENT);
		this.el = tuiInjectElement();
		this.child = !!inject(TuiRoot, {
			optional: true,
			skipSelf: true
		});
		this.reducedMotion = inject(TUI_REDUCED_MOTION);
		this.duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));
		this.top = signal(this.parent);
		this.breakpoint = inject(TUI_BREAKPOINT);
		this.liquidGlass = inject(TUI_LIQUID_GLASS);
		this.scrollbars = !inject(WA_IS_MOBILE) && !this.child && inject(TUI_SCROLLBAR_OPTIONS).mode !== "native" && inject(TUI_OPTIONS).scrollbars !== "native";
	}
	get parent() {
		return this.doc.fullscreenElement ? this.doc.fullscreenElement === this.el : !this.child;
	}
	static {
		this.ɵfac = function TuiRoot_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiRoot)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiRoot,
			selectors: [["tui-root"]],
			hostAttrs: ["data-tui-version", "5.17.0"],
			hostVars: 8,
			hostBindings: function TuiRoot_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("fullscreenchange", function TuiRoot_fullscreenchange_HostBindingHandler() {
					return ctx.top.set(ctx.parent);
				}, ɵɵresolveDocument)("touchstart.passive.zoneless", function TuiRoot_touchstart_passive_zoneless_HostBindingHandler() {
					return 0;
				});
				if (rf & 2) {
					ɵɵstyleProp("--%NS%tui-duration", ctx.duration, "ms")("--%NS%tui-scroll-behavior", ctx.reducedMotion ? "auto" : "smooth");
					ɵɵclassProp("_mobile", ctx.breakpoint() === "mobile")("tui-liquid-glass", ctx.liquidGlass);
				}
			},
			features: [ɵɵHostDirectivesFeature([
				TuiPlatform,
				TuiVisualViewport,
				TuiFontSize
			])],
			ngContentSelectors: _c1$1,
			decls: 3,
			vars: 1,
			consts: [[1, "t-root-content"], [1, "t-root-scrollbar"]],
			template: function TuiRoot_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef(_c0$2);
					ɵɵelementStart(0, "div", 0);
					ɵɵprojection(1);
					ɵɵelementEnd();
					ɵɵconditionalCreate(2, TuiRoot_Conditional_2_Template, 3, 1);
				}
				if (rf & 2) {
					ɵɵadvance(2);
					ɵɵconditional(ctx.top() ? 2 : -1);
				}
			},
			dependencies: [TuiPopups, TuiScrollControls],
			styles: ["@keyframes tuiPresent{to{content:\"\"}}@keyframes tuiFade{0%{opacity:0}}@keyframes tuiSlide{0%{transform:var(--%NS%tui-from, translateY(100%))}}@keyframes tuiScale{0%{transform:scale(var(--%NS%tui-scale, 0))}}@keyframes tuiCollapse{0%{grid-template-rows:0fr}to{grid-template-rows:1fr}}@keyframes tuiBlur{0%{filter:blur(var(--%NS%tui-blur, .25rem))}}.tui-enter,.tui-leave{animation-duration:var(--%NS%tui-duration);animation-timing-function:var(--%NS%tui-curve-productive-entrance);pointer-events:none}.tui-leave{animation-direction:reverse;animation-timing-function:var(--%NS%tui-curve-productive-exit)}\n", ".tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--%NS%tui-typography-body-s);color:var(--%NS%tui-text-primary);flex:1;border-image:conic-gradient(var(--%NS%tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}tui-root:has(>tui-popups tui-modal)>.t-root-content{interactivity:inert}tui-root>.t-root-scrollbar{position:fixed;inset:0;z-index:0}.t-root-content{position:relative;inset-block-start:var(--%NS%t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--%NS%t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"],
			encapsulation: 2,
			changeDetection: 1
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRoot, [{
		type: Component,
		args: [{
			selector: "tui-root",
			imports: [TuiPopups, TuiScrollControls],
			template: `
        <div class="t-root-content"><ng-content /></div>
        @if (top()) {
            @if (scrollbars) {
                <tui-scroll-controls class="t-root-scrollbar" />
            }
            <tui-popups><ng-content select="tuiOverContent" /></tui-popups>
        }
    `,
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.Default,
			hostDirectives: [
				TuiPlatform,
				TuiVisualViewport,
				TuiFontSize
			],
			host: {
				"data-tui-version": "5.17.0",
				"[class._mobile]": "breakpoint() === \"mobile\"",
				"[class.tui-liquid-glass]": "liquidGlass",
				"[style.--tui-duration.ms]": "duration",
				"[style.--tui-scroll-behavior]": "reducedMotion ? \"auto\" : \"smooth\"",
				"(document:fullscreenchange)": "top.set(parent)",
				"(touchstart.passive.zoneless)": "0"
			},
			styles: ["@keyframes tuiPresent{to{content:\"\"}}@keyframes tuiFade{0%{opacity:0}}@keyframes tuiSlide{0%{transform:var(--tui-from, translateY(100%))}}@keyframes tuiScale{0%{transform:scale(var(--tui-scale, 0))}}@keyframes tuiCollapse{0%{grid-template-rows:0fr}to{grid-template-rows:1fr}}@keyframes tuiBlur{0%{filter:blur(var(--tui-blur, .25rem))}}.tui-enter,.tui-leave{animation-duration:var(--tui-duration);animation-timing-function:var(--tui-curve-productive-entrance);pointer-events:none}.tui-leave{animation-direction:reverse;animation-timing-function:var(--tui-curve-productive-exit)}\n", ".tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-typography-body-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}tui-root:has(>tui-popups tui-modal)>.t-root-content{interactivity:inert}tui-root>.t-root-scrollbar{position:fixed;inset:0;z-index:0}.t-root-content{position:relative;inset-block-start:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-hint.mjs
/**
* A component to display a hint
*/
function TuiHintUnstyledComponent_ng_container_0_Template(rf, ctx) {
	if (rf & 1) ɵɵelementContainer(0);
}
var _c0$1 = ["*"];
function TuiHintComponent_span_1_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "span", 1);
	if (rf & 2) {
		const text_r1 = ctx.polymorpheusOutlet;
		ɵɵproperty("innerHTML", text_r1, ɵɵsanitizeHtml);
	}
}
var TUI_HINT_COMPONENT = new InjectionToken(ngDevMode ? "TUI_HINT_COMPONENT" : "", { factory: () => TuiHintComponent });
var TuiHintDriver = class TuiHintDriver extends TuiDriverDirective {
	constructor() {
		super(...arguments);
		this.type = "hint";
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiHintDriver_BaseFactory;
			return function TuiHintDriver_Factory(__ngFactoryType__) {
				return (ɵTuiHintDriver_BaseFactory || (ɵTuiHintDriver_BaseFactory = ɵɵgetInheritedFactory(TuiHintDriver)))(__ngFactoryType__ || TuiHintDriver);
			};
		})();
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiHintDriver,
			features: [ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDriver, [{ type: Directive }], null, null);
})();
var TUI_HINT_DIRECTIONS = [
	"bottom-start",
	"bottom",
	"bottom-end",
	"top-start",
	"top",
	"top-end",
	"start-top",
	"start",
	"start-bottom",
	"end-top",
	"end",
	"end-bottom"
];
/** Default values for hint options */
var TUI_HINT_DEFAULT_OPTIONS = {
	direction: "bottom-start",
	centered: true,
	showDelay: 500,
	hideDelay: 200,
	appearance: "",
	/** TODO @deprecated use {@link TUI_TOOLTIP_OPTIONS} instead **/
	icon: "@tui.circle-help"
};
/**
* Default parameters for hint directive
*/
var [TUI_HINT_OPTIONS, tuiHintOptionsProvider] = tuiCreateOptions(TUI_HINT_DEFAULT_OPTIONS);
var TuiHintHover = class TuiHintHover extends TuiDriver {
	constructor() {
		super((subscriber) => this.stream$.subscribe(subscriber));
		this.isMobile = inject(WA_IS_MOBILE);
		this.el = tuiInjectElement();
		this.hovered$ = inject(TuiHoveredService);
		this.options = inject(TUI_HINT_OPTIONS);
		this.visible = false;
		this.toggle$ = new Subject();
		this.stream$ = merge(this.toggle$.pipe(switchMap((show) => this.isMobile ? of(show).pipe(delay(0)) : of(show).pipe(delay(show ? 0 : this.hideDelay()))), takeUntil(this.hovered$), repeat()), this.hovered$.pipe(switchMap((show) => this.isMobile ? of(show).pipe(delay(0)) : of(show).pipe(delay(show ? this.showDelay() : this.hideDelay()))), takeUntil(this.toggle$), repeat())).pipe(filter(() => this.enabled), map((value) => value && (this.el.hasAttribute("tuiHintPointer") || !tuiIsObscured(this.el))), tap((visible) => {
			this.visible = visible;
		}));
		this.parent = inject(TuiHintHover, {
			optional: true,
			skipSelf: true
		});
		this.showDelay = input(this.options.showDelay, { alias: "tuiHintShowDelay" });
		this.hideDelay = input(this.options.hideDelay, { alias: "tuiHintHideDelay" });
		this.type = "hint";
		this.enabled = true;
	}
	toggle(visible = !this.visible) {
		this.toggle$.next(visible);
		this.parent?.toggle(visible);
	}
	close() {
		this.toggle$.next(false);
	}
	static {
		this.ɵfac = function TuiHintHover_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiHintHover)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiHintHover,
			inputs: {
				showDelay: [
					1,
					"tuiHintShowDelay",
					"showDelay"
				],
				hideDelay: [
					1,
					"tuiHintHideDelay",
					"hideDelay"
				]
			},
			exportAs: ["tuiHintHover"],
			features: [ɵɵProvidersFeature([tuiAsDriver(TuiHintHover), TuiHoveredService]), ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHover, [{
		type: Directive,
		args: [{
			providers: [tuiAsDriver(TuiHintHover), TuiHoveredService],
			exportAs: "tuiHintHover"
		}]
	}], () => [], null);
})();
var GAP$1 = 8;
var ARROW_OFFSET$1 = 22;
var TOP = 1;
var LEFT = 0;
var TuiHintPosition = class TuiHintPosition extends TuiPositionAccessor {
	constructor() {
		super(...arguments);
		this.el = tuiInjectElement();
		this.viewport = inject(TUI_VIEWPORT);
		this.options = inject(TUI_HINT_OPTIONS);
		this.directionChange = new Subject();
		this.accessor = tuiFallbackAccessor("hint")(inject(TuiRectAccessor, { optional: true }), { getClientRect: () => this.el.getBoundingClientRect() });
		this.points = TUI_HINT_DIRECTIONS.reduce((acc, direction) => ({
			...acc,
			[direction]: [0, 0]
		}), {});
		this.direction = input(this.options.direction, { alias: "tuiHintDirection" });
		this.offset = input(inject(WA_IS_MOBILE) ? 16 : 8, { alias: "tuiHintOffset" });
		this.centered = input(this.options.centered, { alias: "tuiHintCentered" });
		this.tuiHintDirectionChange = outputFromObservable(this.directionChange.pipe(distinctUntilChanged()));
		this.type = "hint";
	}
	getPosition({ width, height }) {
		const direction = this.direction();
		const rect = this.accessor.getClientRect();
		const leftCenter = rect.left + rect.width / 2;
		const topCenter = rect.top + rect.height / 2;
		const rtl = this.el.matches("[dir=\"rtl\"] :scope");
		const narrow = rect.width < ARROW_OFFSET$1 * 2 || this.centered();
		const short = rect.height < ARROW_OFFSET$1 * 2 || this.centered();
		const start = narrow ? leftCenter - ARROW_OFFSET$1 : rect.left;
		const end = narrow ? leftCenter - width + ARROW_OFFSET$1 : rect.right - width;
		const top = short ? topCenter - ARROW_OFFSET$1 : rect.top;
		const bottom = short ? topCenter - height + ARROW_OFFSET$1 : rect.bottom - height;
		this.points["top-start"][TOP] = rect.top - height - this.offset();
		this.points["top-start"][LEFT] = this.centered() ? end : start;
		this.points.top[TOP] = this.points["top-start"][TOP];
		this.points.top[LEFT] = leftCenter - width / 2;
		this.points["top-end"][TOP] = this.points["top-start"][TOP];
		this.points["top-end"][LEFT] = this.centered() ? start : end;
		this.points["bottom-start"][TOP] = rect.bottom + this.offset();
		this.points["bottom-start"][LEFT] = this.points["top-start"][LEFT];
		this.points.bottom[TOP] = this.points["bottom-start"][TOP];
		this.points.bottom[LEFT] = this.points.top[LEFT];
		this.points["bottom-end"][TOP] = this.points["bottom-start"][TOP];
		this.points["bottom-end"][LEFT] = this.points["top-end"][LEFT];
		this.points["start-top"][TOP] = this.centered() ? bottom : top;
		this.points["start-top"][LEFT] = rect.left - width - this.offset();
		this.points.start[TOP] = topCenter - height / 2;
		this.points.start[LEFT] = this.points["start-top"][LEFT];
		this.points["start-bottom"][TOP] = this.centered() ? bottom : top;
		this.points["start-bottom"][LEFT] = this.points["start-top"][LEFT];
		this.points["end-top"][TOP] = this.points["start-top"][TOP];
		this.points["end-top"][LEFT] = rect.right + this.offset();
		this.points.end[TOP] = this.points.start[TOP];
		this.points.end[LEFT] = this.points["end-top"][LEFT];
		this.points["end-bottom"][TOP] = this.points["start-bottom"][TOP];
		this.points["end-bottom"][LEFT] = this.points["end-top"][LEFT];
		const updated = (Array.isArray(direction) ? direction : [direction]).map((direction) => adjust(direction, rtl)).concat(TUI_HINT_DIRECTIONS).find((dir) => this.checkPosition(this.points[dir], width, height)) || this.fallback;
		this.directionChange.next(adjust(updated, rtl));
		return this.points[updated];
	}
	get fallback() {
		return this.points.top[TOP] > this.viewport.getClientRect().bottom - this.points.bottom[TOP] ? "top" : "bottom";
	}
	checkPosition([left, top], width, height) {
		const viewport = this.viewport.getClientRect();
		return top > viewport.top + GAP$1 && left > viewport.left + GAP$1 && top + height < viewport.bottom - GAP$1 && left + width < viewport.right - GAP$1;
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiHintPosition_BaseFactory;
			return function TuiHintPosition_Factory(__ngFactoryType__) {
				return (ɵTuiHintPosition_BaseFactory || (ɵTuiHintPosition_BaseFactory = ɵɵgetInheritedFactory(TuiHintPosition)))(__ngFactoryType__ || TuiHintPosition);
			};
		})();
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiHintPosition,
			inputs: {
				direction: [
					1,
					"tuiHintDirection",
					"direction"
				],
				offset: [
					1,
					"tuiHintOffset",
					"offset"
				],
				centered: [
					1,
					"tuiHintCentered",
					"centered"
				]
			},
			outputs: { tuiHintDirectionChange: "tuiHintDirectionChange" },
			features: [ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPosition, [{ type: Directive }], null, null);
})();
function adjust(direction, rtl) {
	if (rtl && direction.includes("left")) return direction.replace("left", "right");
	return rtl && direction.includes("right") ? direction.replace("right", "left") : direction;
}
var TuiHintDirective = class TuiHintDirective {
	constructor() {
		this.service = inject(TuiPopupService);
		this.ref = signal(null);
		this.content = input(null, { alias: "tuiHint" });
		this.context = input(void 0, { alias: "tuiHintContext" });
		this.appearance = input(inject(TUI_HINT_OPTIONS).appearance, { alias: "tuiHintAppearance" });
		this.visible = outputFromObservable(toObservable$1(this.ref).pipe(map(Boolean), skip(1)), { alias: "tuiHintVisible" });
		this.component = inject(PolymorpheusComponent);
		this.el = tuiInjectElement();
		this.type = "hint";
	}
	ngOnChanges() {
		if (!this.content()) this.toggle(false);
	}
	ngOnDestroy() {
		this.toggle(false);
	}
	getClientRect() {
		return this.el.getBoundingClientRect();
	}
	toggle(show) {
		if (show && this.content() && !this.ref()) this.ref.set(this.service.add(this.component));
		else if (!show) {
			this.ref()?.destroy();
			this.ref.set(null);
		}
	}
	static {
		this.ɵfac = function TuiHintDirective_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiHintDirective)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiHintDirective,
			selectors: [[
				"",
				"tuiHint",
				"",
				5,
				"ng-container",
				5,
				"ng-template"
			]],
			inputs: {
				content: [
					1,
					"tuiHint",
					"content"
				],
				context: [
					1,
					"tuiHintContext",
					"context"
				],
				appearance: [
					1,
					"tuiHintAppearance",
					"appearance"
				]
			},
			outputs: { visible: "tuiHintVisible" },
			features: [
				ɵɵProvidersFeature([tuiAsVehicle(TuiHintDirective), {
					provide: PolymorpheusComponent,
					deps: [TUI_HINT_COMPONENT, INJECTOR$1],
					useClass: PolymorpheusComponent
				}]),
				ɵɵHostDirectivesFeature([
					TuiHintDriver,
					{
						directive: TuiHintHover,
						inputs: [
							"tuiHintHideDelay",
							"tuiHintHideDelay",
							"tuiHintShowDelay",
							"tuiHintShowDelay"
						]
					},
					{
						directive: TuiHintPosition,
						inputs: [
							"tuiHintDirection",
							"tuiHintDirection",
							"tuiHintCentered",
							"tuiHintCentered",
							"tuiHintOffset",
							"tuiHintOffset"
						],
						outputs: ["tuiHintDirectionChange", "tuiHintDirectionChange"]
					}
				]),
				ɵɵNgOnChangesFeature
			]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDirective, [{
		type: Directive,
		args: [{
			selector: "[tuiHint]:not(ng-container):not(ng-template)",
			providers: [tuiAsVehicle(TuiHintDirective), {
				provide: PolymorpheusComponent,
				deps: [TUI_HINT_COMPONENT, INJECTOR$1],
				useClass: PolymorpheusComponent
			}],
			hostDirectives: [
				TuiHintDriver,
				{
					directive: TuiHintHover,
					inputs: ["tuiHintHideDelay", "tuiHintShowDelay"]
				},
				{
					directive: TuiHintPosition,
					inputs: [
						"tuiHintDirection",
						"tuiHintCentered",
						"tuiHintOffset"
					],
					outputs: ["tuiHintDirectionChange"]
				}
			]
		}]
	}], null, null);
})();
var TuiHintPointer = class TuiHintPointer extends TuiHintHover {
	constructor() {
		super(...arguments);
		this.currentRect = EMPTY_CLIENT_RECT;
	}
	getClientRect() {
		return this.currentRect;
	}
	onMove({ clientX, clientY }) {
		this.currentRect = tuiPointToClientRect(clientX, clientY);
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiHintPointer_BaseFactory;
			return function TuiHintPointer_Factory(__ngFactoryType__) {
				return (ɵTuiHintPointer_BaseFactory || (ɵTuiHintPointer_BaseFactory = ɵɵgetInheritedFactory(TuiHintPointer)))(__ngFactoryType__ || TuiHintPointer);
			};
		})();
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiHintPointer,
			selectors: [[
				"",
				"tuiHint",
				"",
				"tuiHintPointer",
				""
			]],
			hostBindings: function TuiHintPointer_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("mousemove.zoneless", function TuiHintPointer_mousemove_zoneless_HostBindingHandler($event) {
					return ctx.onMove($event);
				});
			},
			features: [ɵɵProvidersFeature([tuiAsRectAccessor(TuiHintPointer), tuiAsDriver(TuiHintPointer)]), ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPointer, [{
		type: Directive,
		args: [{
			selector: "[tuiHint][tuiHintPointer]",
			providers: [tuiAsRectAccessor(TuiHintPointer), tuiAsDriver(TuiHintPointer)],
			host: { "(mousemove.zoneless)": "onMove($event)" }
		}]
	}], null, null);
})();
var TuiHintUnstyledComponent = class TuiHintUnstyledComponent {
	constructor() {
		this.hint = inject(TuiHintDirective);
	}
	static {
		this.ɵfac = function TuiHintUnstyledComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiHintUnstyledComponent)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiHintUnstyledComponent,
			selectors: [["ng-component"]],
			decls: 1,
			vars: 1,
			consts: [[4, "polymorpheusOutlet"]],
			template: function TuiHintUnstyledComponent_Template(rf, ctx) {
				if (rf & 1) ɵɵtemplate(0, TuiHintUnstyledComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
				if (rf & 2) ɵɵproperty("polymorpheusOutlet", ctx.hint.content());
			},
			dependencies: [PolymorpheusOutlet],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyledComponent, [{
		type: Component,
		args: [{
			imports: [PolymorpheusOutlet],
			template: "<ng-container *polymorpheusOutlet=\"hint.content()\" />",
			changeDetection: ChangeDetectionStrategy.OnPush
		}]
	}], null, null);
})();
var TuiHintUnstyled = class TuiHintUnstyled {
	constructor() {
		const hint = inject(TuiHintDirective);
		tuiSetSignal(hint.content, inject(TemplateRef));
		hint.component = new PolymorpheusComponent(TuiHintUnstyledComponent, inject(INJECTOR$1));
	}
	static {
		this.ɵfac = function TuiHintUnstyled_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiHintUnstyled)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiHintUnstyled,
			selectors: [[
				"ng-template",
				"tuiHint",
				""
			]]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyled, [{
		type: Directive,
		args: [{ selector: "ng-template[tuiHint]" }]
	}], () => [], null);
})();
/** @internal */
function tuiGetHintProviders() {
	return [
		TuiPositionService,
		TuiHoveredService,
		tuiPositionAccessorFor("hint", TuiHintPosition),
		tuiRectAccessorFor("hint", forwardRef(() => TuiHintDirective))
	];
}
var GAP = 8;
var ARROW_OFFSET = 22;
var TuiHintComponent = class TuiHintComponent {
	constructor() {
		this.el = tuiInjectElement();
		this.hover = inject(TuiHintHover);
		this.vvs = inject(TuiVisualViewportService);
		this.viewport = inject(TUI_VIEWPORT);
		this.pointer = inject(TuiHintPointer, { optional: true });
		this.accessor = inject(TuiRectAccessor);
		this.hint = inject(TuiHintDirective);
		this.content = this.hint.component.component === TuiHintUnstyledComponent ? signal("") : this.hint.content;
		this.theme = this.hint.el.closest("[tuiTheme]")?.getAttribute("tuiTheme");
		this.appearance = tuiAppearance(this.hint.appearance);
		inject(TuiPositionService).pipe(takeWhile(() => this.hint.el.isConnected && !!this.hint.el.getBoundingClientRect().height), map((point) => this.vvs.correct(point)), takeUntilDestroyed()).subscribe({
			next: (point) => this.update(...point),
			complete: () => this.hint.toggle(false)
		});
		inject(TuiHoveredService).pipe(takeUntilDestroyed()).subscribe((hover) => this.hover.toggle(hover));
	}
	onClick(target) {
		if (!target.closest(this.el.tagName) && !this.hint.el.contains(target) || tuiIsObscured(this.hint.el)) this.hover.toggle(false);
	}
	apply(top, left, beakTop, beakLeft) {
		this.el.style.setProperty("top", top);
		this.el.style.setProperty("left", left);
		this.el.style.setProperty("--t-top", `${beakTop}%`);
		this.el.style.setProperty("--t-left", `${beakLeft}%`);
		this.el.style.setProperty("--t-rotate", !beakLeft || Math.ceil(beakLeft) === 100 ? "90deg" : "0deg");
	}
	update(left, top) {
		const { clientHeight, clientWidth } = this.el;
		const rect = this.accessor.getClientRect();
		if (rect === EMPTY_CLIENT_RECT || !clientHeight || !clientWidth) return;
		const viewport = this.viewport.getClientRect();
		const safeLeft = tuiClamp(Math.max(GAP, left), viewport.left + GAP, Math.max(GAP, viewport.width + viewport.left - clientWidth - GAP));
		const startX = Math.round(safeLeft) === Math.round(rect.left);
		const startY = Math.round(top) === Math.round(rect.top);
		const endX = Math.round(safeLeft + clientWidth) === Math.round(rect.right);
		const endY = Math.round(top + clientHeight) === Math.round(rect.bottom);
		const [beakLeft, beakTop] = this.vvs.correct([rect.left + rect.width / 2 - safeLeft, rect.top + rect.height / 2 - top]);
		const x = startX ? ARROW_OFFSET : endX ? clientWidth - ARROW_OFFSET : beakLeft;
		const y = startY ? ARROW_OFFSET : endY ? clientHeight - ARROW_OFFSET : beakTop;
		this.apply(tuiPx(Math.round(top)), tuiPx(Math.round(safeLeft)), Math.round(tuiClamp(y, 0, clientHeight) / clientHeight * 100), Math.round(tuiClamp(x, 0, clientWidth) / clientWidth * 100));
	}
	static {
		this.ɵfac = function TuiHintComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiHintComponent)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiHintComponent,
			selectors: [["tui-hint"]],
			hostAttrs: ["role", "tooltip"],
			hostVars: 3,
			hostBindings: function TuiHintComponent_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("click", function TuiHintComponent_click_HostBindingHandler($event) {
					return ctx.onClick($event.target);
				}, ɵɵresolveDocument);
				if (rf & 2) {
					ɵɵattribute("tuiTheme", ctx.theme);
					ɵɵclassProp("_untouchable", ctx.pointer);
				}
			},
			features: [ɵɵProvidersFeature([tuiGetHintProviders(), tuiButtonOptionsProvider({ size: "s" })]), ɵɵHostDirectivesFeature([
				TuiAppearance,
				TuiAnimated,
				TuiActiveZone
			])],
			ngContentSelectors: _c0$1,
			decls: 2,
			vars: 2,
			consts: [[
				3,
				"innerHTML",
				4,
				"polymorpheusOutlet",
				"polymorpheusOutletContext"
			], [3, "innerHTML"]],
			template: function TuiHintComponent_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵprojection(0);
					ɵɵtemplate(1, TuiHintComponent_span_1_Template, 1, 1, "span", 0);
				}
				if (rf & 2) {
					ɵɵadvance();
					ɵɵproperty("polymorpheusOutlet", ctx.content())("polymorpheusOutletContext", ctx.hint.context());
				}
			},
			dependencies: [PolymorpheusOutlet],
			styles: ["[_nghost-%COMP%]{position:absolute;max-inline-size:min(20rem,calc(100% - 1rem));padding:.75rem 1rem;background:var(--%NS%tui-background-accent-1);border-radius:var(--%NS%tui-radius-l);color:var(--%NS%tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--%NS%tui-typography-body-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--%NS%t-left) var(--%NS%t-top);--%NS%tui-background-elevation-2: var(--%NS%tui-background-elevation-3);--%NS%tui-scale: .5}.tui-enter[_nghost-%COMP%]{animation:tuiFade var(--%NS%tui-duration) var(--%NS%tui-curve-expressive-standard),tuiScale var(--%NS%tui-duration) var(--%NS%tui-curve-expressive-standard) 10ms}.tui-leave[_nghost-%COMP%]{animation:tuiFade calc(var(--%NS%tui-duration) / 2) var(--%NS%tui-curve-expressive-standard) reverse,tuiScale calc(var(--%NS%tui-duration) / 2) var(--%NS%tui-curve-expressive-standard) reverse}[_nghost-%COMP%]:before{content:\"\";position:absolute;inset-block-start:var(--%NS%t-top);inset-inline-start:var(--%NS%t-left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url('data:image/svg+xml,<svg viewBox=\"0 0 12 8\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z\" /></svg>');mask-image:url('data:image/svg+xml,<svg viewBox=\"0 0 12 8\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z\" /></svg>');transition:none;transform:translate(-50%,-50%) rotate(var(--%NS%t-rotate))}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}._untouchable[_nghost-%COMP%]{pointer-events:none}[_nghost-%COMP%]     [tuiTitle]{margin-block-end:.75rem}[_nghost-%COMP%]     [tuiTitle]+footer{margin-block-start:.75rem}[_nghost-%COMP%]     [tuiIconButton][data-appearance=icon][data-size=xs]{float:right;margin-inline-end:-.25rem}@supports (float: inline-end){[_nghost-%COMP%]     [tuiIconButton][data-appearance=icon][data-size=xs]{float:inline-end}}[_nghost-%COMP%]     img{display:block;border-radius:var(--%NS%tui-radius-m)}[_nghost-%COMP%]     footer{display:flex;justify-content:flex-end;gap:.5rem;inline-size:18rem;max-inline-size:100%;margin:1rem 0 .25rem}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintComponent, [{
		type: Component,
		args: [{
			selector: "tui-hint",
			imports: [PolymorpheusOutlet],
			template: `
        <ng-content />
        <span
            *polymorpheusOutlet="content() as text; context: hint.context()"
            [innerHTML]="text"
        ></span>
    `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			providers: [tuiGetHintProviders(), tuiButtonOptionsProvider({ size: "s" })],
			hostDirectives: [
				TuiAppearance,
				TuiAnimated,
				TuiActiveZone
			],
			host: {
				role: "tooltip",
				"[attr.tuiTheme]": "theme",
				"[class._untouchable]": "pointer",
				"(document:click)": "onClick($event.target)"
			},
			styles: [":host{position:absolute;max-inline-size:min(20rem,calc(100% - 1rem));padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-typography-body-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--t-left) var(--t-top);--tui-background-elevation-2: var(--tui-background-elevation-3);--tui-scale: .5}:host.tui-enter{animation:tuiFade var(--tui-duration) var(--tui-curve-expressive-standard),tuiScale var(--tui-duration) var(--tui-curve-expressive-standard) 10ms}:host.tui-leave{animation:tuiFade calc(var(--tui-duration) / 2) var(--tui-curve-expressive-standard) reverse,tuiScale calc(var(--tui-duration) / 2) var(--tui-curve-expressive-standard) reverse}:host:before{content:\"\";position:absolute;inset-block-start:var(--t-top);inset-inline-start:var(--t-left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url('data:image/svg+xml,<svg viewBox=\"0 0 12 8\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z\" /></svg>');mask-image:url('data:image/svg+xml,<svg viewBox=\"0 0 12 8\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z\" /></svg>');transition:none;transform:translate(-50%,-50%) rotate(var(--t-rotate))}:host:not([style*=top]){visibility:hidden}:host._untouchable{pointer-events:none}:host ::ng-deep [tuiTitle]{margin-block-end:.75rem}:host ::ng-deep [tuiTitle]+footer{margin-block-start:.75rem}:host ::ng-deep [tuiIconButton][data-appearance=icon][data-size=xs]{float:right;margin-inline-end:-.25rem}@supports (float: inline-end){:host ::ng-deep [tuiIconButton][data-appearance=icon][data-size=xs]{float:inline-end}}:host ::ng-deep img{display:block;border-radius:var(--tui-radius-m)}:host ::ng-deep footer{display:flex;justify-content:flex-end;gap:.5rem;inline-size:18rem;max-inline-size:100%;margin:1rem 0 .25rem}\n"]
		}]
	}], () => [], null);
})();
var TuiHintDescribe = class TuiHintDescribe extends TuiDriver {
	constructor() {
		super((subscriber) => this.stream$.subscribe(subscriber));
		this.doc = inject(DOCUMENT);
		this.el = tuiInjectElement();
		this.element = computed((id = this.id()) => id ? this.doc.querySelector(`#${id}`) || this.el : this.el);
		this.id = input("", { alias: "tuiHintDescribe" });
		this.type = "hint";
		this.stream$ = toObservable$1(this.id).pipe(distinctUntilChanged(), tuiIfMap(() => fromEvent(this.doc, "keydown", { capture: true }), tuiIsPresent), switchMap(() => this.focused ? of(false) : merge(tuiTypedFromEvent(this.doc, "keyup"), tuiTypedFromEvent(this.element(), "blur")).pipe(map(() => this.focused))), debounce((visible) => visible ? timer(1e3) : of(null)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized());
	}
	get focused() {
		return tuiIsFocused(this.element());
	}
	static {
		this.ɵfac = function TuiHintDescribe_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiHintDescribe)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiHintDescribe,
			selectors: [[
				"",
				"tuiHintDescribe",
				""
			]],
			inputs: { id: [
				1,
				"tuiHintDescribe",
				"id"
			] },
			features: [ɵɵProvidersFeature([tuiAsDriver(TuiHintDescribe)]), ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDescribe, [{
		type: Directive,
		args: [{
			selector: "[tuiHintDescribe]",
			providers: [tuiAsDriver(TuiHintDescribe)]
		}]
	}], () => [], null);
})();
var TuiHintHost = class TuiHintHost extends TuiRectAccessor {
	constructor() {
		super(...arguments);
		this.tuiHintHost = input();
		this.type = "hint";
	}
	getClientRect() {
		return this.tuiHintHost()?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiHintHost_BaseFactory;
			return function TuiHintHost_Factory(__ngFactoryType__) {
				return (ɵTuiHintHost_BaseFactory || (ɵTuiHintHost_BaseFactory = ɵɵgetInheritedFactory(TuiHintHost)))(__ngFactoryType__ || TuiHintHost);
			};
		})();
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiHintHost,
			selectors: [[
				"",
				"tuiHint",
				"",
				"tuiHintHost",
				""
			]],
			inputs: { tuiHintHost: [1, "tuiHintHost"] },
			features: [ɵɵProvidersFeature([tuiAsRectAccessor(TuiHintHost)]), ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHost, [{
		type: Directive,
		args: [{
			selector: "[tuiHint][tuiHintHost]",
			providers: [tuiAsRectAccessor(TuiHintHost)]
		}]
	}], null, null);
})();
var TuiHintManual = class TuiHintManual extends TuiDriver {
	constructor() {
		super((subscriber) => this.stream$.subscribe(subscriber));
		this.hover = inject(TuiHintHover);
		this.stream$ = new BehaviorSubject(false);
		this.visible = input(false, { alias: "tuiHintManual" });
		this.type = "hint";
		this.hover.enabled = false;
	}
	ngOnChanges() {
		this.stream$.next(!!this.visible());
		this.hover.enabled = this.visible() === null;
	}
	static {
		this.ɵfac = function TuiHintManual_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiHintManual)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiHintManual,
			selectors: [[
				"",
				"tuiHint",
				"",
				"tuiHintManual",
				""
			]],
			inputs: { visible: [
				1,
				"tuiHintManual",
				"visible"
			] },
			features: [
				ɵɵProvidersFeature([tuiAsDriver(TuiHintManual)]),
				ɵɵInheritDefinitionFeature,
				ɵɵNgOnChangesFeature
			]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintManual, [{
		type: Directive,
		args: [{
			selector: "[tuiHint][tuiHintManual]",
			providers: [tuiAsDriver(TuiHintManual)]
		}]
	}], () => [], null);
})();
var TuiHintOverflow = class TuiHintOverflow {
	constructor() {
		this.hint = inject(TuiHintDirective);
		this.content = input("", { alias: "tuiHintOverflow" });
	}
	onMouseEnter({ scrollWidth, clientWidth, textContent }) {
		const content = this.content();
		tuiSetSignal(this.hint.content, scrollWidth > clientWidth && content !== null ? content || textContent : "");
	}
	static {
		this.ɵfac = function TuiHintOverflow_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiHintOverflow)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiHintOverflow,
			selectors: [[
				"",
				"tuiHintOverflow",
				""
			]],
			hostBindings: function TuiHintOverflow_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("mouseenter", function TuiHintOverflow_mouseenter_HostBindingHandler($event) {
					return ctx.onMouseEnter($event.currentTarget);
				});
			},
			inputs: { content: [
				1,
				"tuiHintOverflow",
				"content"
			] },
			features: [ɵɵHostDirectivesFeature([{
				directive: TuiHintDirective,
				inputs: ["tuiHintAppearance", "tuiHintAppearance"]
			}])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintOverflow, [{
		type: Directive,
		args: [{
			selector: "[tuiHintOverflow]",
			hostDirectives: [{
				directive: TuiHintDirective,
				inputs: ["tuiHintAppearance"]
			}],
			host: { "(mouseenter)": "onMouseEnter($event.currentTarget)" }
		}]
	}], null, null);
})();
var TuiHint = [
	TuiHintComponent,
	TuiHintDirective,
	TuiHintUnstyled,
	TuiHintDriver,
	TuiHintPosition,
	TuiHintHover,
	TuiHintOverflow,
	TuiHintDescribe,
	TuiHintHost,
	TuiHintManual,
	TuiHintPointer
];
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-slider.mjs
/**
* Used as a limit for eliminating JS issues with floating point math
*/
var _c0 = ["*", [[
	"input",
	"type",
	"range"
]]];
var _c1 = ["*", "input[type=range]"];
function TuiSliderThumbLabel_Conditional_0_Template(rf, ctx) {}
var TUI_FLOATING_PRECISION = 7;
function tuiFindKeyStepsBoundariesByFn(keySteps, fn) {
	const keyStepUpperIndex = keySteps.findIndex((keyStep, i) => i && fn(keyStep));
	return [keySteps[keyStepUpperIndex - 1] || keySteps[0], keySteps[keyStepUpperIndex] || keySteps[keySteps.length - 1] || [0, 0]];
}
function tuiPercentageToKeyStepValue(valuePercentage, keySteps) {
	const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([keyStepPercentage, _]) => valuePercentage <= keyStepPercentage);
	const ratio = (valuePercentage - lowerStepPercent) / (upperStepPercent - lowerStepPercent);
	return tuiRound((upperStepValue - lowerStepValue) * ratio + lowerStepValue, 7);
}
function tuiKeyStepValueToPercentage(value, keySteps) {
	const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([_, keyStepValue]) => value <= keyStepValue);
	const ratio = (value - lowerStepValue) / (upperStepValue - lowerStepValue) || 0;
	return (upperStepPercent - lowerStepPercent) * ratio + lowerStepPercent;
}
function tuiCreateKeyStepsTransformer(keySteps) {
	return new class {
		fromControlValue(controlValue) {
			return tuiKeyStepValueToPercentage(controlValue, keySteps) / 100;
		}
		toControlValue(ratio) {
			return tuiPercentageToKeyStepValue(ratio * 100, keySteps);
		}
	}();
}
var TuiSliderComponent = class TuiSliderComponent {
	constructor() {
		this.control = inject(NgControl, {
			self: true,
			optional: true
		});
		this.ticksGradient = computed((segments = this.segments()) => this.getTicksGradient(segments));
		this.segments = input([1], {
			alias: "segments",
			transform: (x) => tuiIsNumber(x) ? Array.from({ length: x }, (_, i) => i / x) : x
		});
		this.el = tuiInjectElement();
		this.keySteps = inject(TuiSliderKeyStepsBase, {
			self: true,
			optional: true
		});
		if (this.control instanceof NgModel)
 /**
		* The ValueAccessor.writeValue method is called twice on any value accessor during component initialization,
		* when a control is bound using [(ngModel)], first time with a phantom null value.
		* With `changeDetection: ChangeDetectionStrategy.OnPush` the second call of writeValue with real value don't re-render the view.
		* ___
		* See this {@link https://github.com/angular/angular/issues/14988 issue}
		*/
		this.control.valueChanges?.pipe(tuiWatch(), take(1)).subscribe();
	}
	get valueRatio() {
		return (this.value - this.min) / (this.max - this.min) || 0;
	}
	get min() {
		return Number(this.el.min);
	}
	set min(x) {
		this.el.min = String(x);
	}
	get max() {
		return Number(this.el.max || 100);
	}
	set max(x) {
		this.el.max = String(x);
	}
	get step() {
		if (!this.el.step) return 1;
		return this.el.step === "any" ? 0 : Number(this.el.step);
	}
	set step(x) {
		this.el.step = String(x);
	}
	get value() {
		/**
		* If developer uses `[(ngModel)]` and programmatically change value,
		* the `el.nativeElement.value` is equal to the previous value at this moment
		* (it will be updated only in next microtask).
		* @see https://github.com/angular/angular/issues/13568
		*/
		if (this.control instanceof NgModel) {
			const transformer = this.keySteps?.transformer();
			const value = this.keySteps && transformer ? this.keySteps.toSliderValue(transformer.fromControlValue(this.control.value)) : this.control.viewModel;
			return this.step ? tuiRound(Math.round(value / this.step) * this.step, 7) : value;
		}
		return Number(this.el.value) || 0;
	}
	set value(newValue) {
		this.el.value = `${newValue}`;
	}
	getTicksGradient(segments) {
		if (segments.length <= 1) return "linear-gradient(to right, transparent 0 100%)";
		const percentages = segments.filter((segment) => segment > 0 && segment < 1).map((segment) => segment * 100);
		return percentages.reduce((acc, segment, index) => `${acc}
                var(--tui-text-tertiary) ${segment}% calc(${segment}% + var(--t-tick-thickness)),
                transparent ${segment}% ${percentages[index + 1] ?? 100}%${percentages[index + 1] ? "," : ")"}
                `, `linear-gradient(to right, transparent 0 ${percentages[0]}%,`);
	}
	static {
		this.ɵfac = function TuiSliderComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiSliderComponent)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiSliderComponent,
			selectors: [[
				"input",
				"type",
				"range",
				"tuiSlider",
				""
			]],
			hostVars: 4,
			hostBindings: function TuiSliderComponent_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("input", function TuiSliderComponent_input_HostBindingHandler() {
					return 0;
				});
				if (rf & 2) ɵɵstyleProp("--%NS%tui-slider-fill-ratio", ctx.valueRatio)("--%NS%tui-ticks-gradient", ctx.ticksGradient());
			},
			inputs: { segments: [1, "segments"] },
			features: [ɵɵProvidersFeature([tuiAsAuxiliary(TuiSliderComponent)])],
			decls: 0,
			vars: 0,
			template: function TuiSliderComponent_Template(rf, ctx) {},
			styles: ["[_nghost-%COMP%]{--%NS%t-tick-thickness: .25rem;position:relative;display:block;inline-size:100%;color:var(--%NS%tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:max(var(--%NS%tui-thumb-size, .75rem),1rem);padding:calc((max(var(--%NS%tui-thumb-size, .75rem),1rem) - max(calc(calc(var(--%NS%tui-thumb-size, .75rem) / 2) - .25rem),.125rem))/2) 0;box-sizing:border-box;outline:none;border-radius:1rem/3rem;background:var(--%NS%tui-ticks-gradient) no-repeat calc((var(--%NS%tui-thumb-size, .75rem) - var(--%NS%t-tick-thickness)) / 2) / calc(100% - var(--%NS%tui-thumb-size, .75rem)),linear-gradient(to var(--%NS%tui-inline-end),currentColor calc(100% * var(--%NS%tui-slider-fill-ratio)),transparent calc(100% * var(--%NS%tui-slider-fill-ratio))),var(--%NS%tui-background-neutral-2);background-clip:content-box}[_nghost-%COMP%]:active{cursor:ew-resize}[_nghost-%COMP%]:active:before{opacity:.2;transform:var(--%NS%tui-slider-thumb-transform, scale(1)) scale(2.33)}[_nghost-%COMP%]:disabled{opacity:var(--%NS%tui-disabled-opacity);pointer-events:none}[_nghost-%COMP%]:before{transition-property:transform,opacity;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard);content:\"\";position:absolute;inset-block-start:calc(max(calc(1rem - var(--%NS%tui-thumb-size, .75rem)),0rem)/2);inset-inline-start:var(--%NS%t-left);inline-size:var(--%NS%tui-thumb-size, .75rem);block-size:var(--%NS%tui-thumb-size, .75rem);border-radius:50%;transform:var(--%NS%tui-slider-thumb-transform, scale(1));background:currentColor;opacity:0;--%NS%t-left: calc(var(--%NS%tui-slider-fill-ratio) * 100% - var(--%NS%tui-slider-fill-ratio) * var(--%NS%tui-thumb-size, .75rem))}[_nghost-%COMP%]:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--%NS%tui-border-focus)}[_nghost-%COMP%]:focus-visible::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--%NS%tui-border-focus)}[_nghost-%COMP%]::-webkit-slider-thumb{transition-property:transform;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard);isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:var(--%NS%tui-thumb-size, .75rem);inline-size:var(--%NS%tui-thumb-size, .75rem);box-sizing:content-box;background-clip:content-box;border:calc(max(calc(1rem - var(--%NS%tui-thumb-size, .75rem)),0rem)/2) solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--%NS%tui-slider-thumb-transform, scale(1))}:not(:disabled)[_nghost-%COMP%]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]::-webkit-slider-thumb:hover, :active:not(:disabled)[_nghost-%COMP%]::-webkit-slider-thumb{transform:var(--%NS%tui-slider-thumb-transform, scale(1)) scale(1.333)}[_nghost-%COMP%]::-moz-range-thumb{transition-property:transform;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard);isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:var(--%NS%tui-thumb-size, .75rem);inline-size:var(--%NS%tui-thumb-size, .75rem);box-sizing:content-box;background-clip:content-box;border:calc(max(calc(1rem - var(--%NS%tui-thumb-size, .75rem)),0rem)/2) solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--%NS%tui-slider-thumb-transform, scale(1))}:not(:disabled)[_nghost-%COMP%]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]::-moz-range-thumb:hover, :active:not(:disabled)[_nghost-%COMP%]::-moz-range-thumb{transform:var(--%NS%tui-slider-thumb-transform, scale(1)) scale(1.333)}[_nghost-%COMP%]::-moz-range-progress{opacity:0}tui-textfield   [type=\"range\"][_nghost-%COMP%]{position:absolute;inset:100% var(--%NS%t-padding) 0;inline-size:auto;margin:calc(-.5*max(calc(calc(var(--%NS%tui-thumb-size, .75rem) / 2) - .25rem),.125rem)) 0 0;transform:translateY(-50%);background-color:transparent;pointer-events:auto}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderComponent, [{
		type: Component,
		args: [{
			selector: "input[type=range][tuiSlider]",
			template: "",
			changeDetection: ChangeDetectionStrategy.OnPush,
			providers: [tuiAsAuxiliary(TuiSliderComponent)],
			host: {
				"[style.--tui-slider-fill-ratio]": "valueRatio",
				"[style.--tui-ticks-gradient]": "ticksGradient()",
				/**
				* For change detection.
				* Webkit does not have built-in method for customization of filling progress (as Firefox).
				* We draw filling of progress by `background: linear-gradient(...)` of the track.
				* This function triggers change detection (for {@link valueRatio} getter) when we drag thumb of the input.
				*/
				"(input)": "0"
			},
			styles: [":host{--t-tick-thickness: .25rem;position:relative;display:block;inline-size:100%;color:var(--tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:max(var(--tui-thumb-size, .75rem),1rem);padding:calc((max(var(--tui-thumb-size, .75rem),1rem) - max(calc(calc(var(--tui-thumb-size, .75rem) / 2) - .25rem),.125rem))/2) 0;box-sizing:border-box;outline:none;border-radius:1rem/3rem;background:var(--tui-ticks-gradient) no-repeat calc((var(--tui-thumb-size, .75rem) - var(--t-tick-thickness)) / 2) / calc(100% - var(--tui-thumb-size, .75rem)),linear-gradient(to var(--tui-inline-end),currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio))),var(--tui-background-neutral-2);background-clip:content-box}:host:active{cursor:ew-resize}:host:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}:host:disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}:host:before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);content:\"\";position:absolute;inset-block-start:calc(max(calc(1rem - var(--tui-thumb-size, .75rem)),0rem)/2);inset-inline-start:var(--t-left);inline-size:var(--tui-thumb-size, .75rem);block-size:var(--tui-thumb-size, .75rem);border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));background:currentColor;opacity:0;--t-left: calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * var(--tui-thumb-size, .75rem))}:host:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host:focus-visible::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host::-webkit-slider-thumb{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:var(--tui-thumb-size, .75rem);inline-size:var(--tui-thumb-size, .75rem);box-sizing:content-box;background-clip:content-box;border:calc(max(calc(1rem - var(--tui-thumb-size, .75rem)),0rem)/2) solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled):host::-webkit-slider-thumb:hover,:active:not(:disabled):host::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:host::-moz-range-thumb{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:var(--tui-thumb-size, .75rem);inline-size:var(--tui-thumb-size, .75rem);box-sizing:content-box;background-clip:content-box;border:calc(max(calc(1rem - var(--tui-thumb-size, .75rem)),0rem)/2) solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host::-moz-range-thumb{cursor:ew-resize}:not(:disabled):host::-moz-range-thumb:hover,:active:not(:disabled):host::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:host::-moz-range-progress{opacity:0}:host-context(tui-textfield) :host([type=\"range\"]){position:absolute;inset:100% var(--t-padding) 0;inline-size:auto;margin:calc(-.5*max(calc(calc(var(--tui-thumb-size, .75rem) / 2) - .25rem),.125rem)) 0 0;transform:translateY(-50%);background-color:transparent;pointer-events:auto}\n"]
		}]
	}], () => [], null);
})();
var TuiSliderKeyStepsBase = class TuiSliderKeyStepsBase {
	constructor() {
		this.injector = inject(INJECTOR$1);
		this.control = inject(NgControl, {
			self: true,
			optional: true
		});
		this.min = signal(void 0);
		this.max = signal(void 0);
		this.sync = effect(() => {
			const steps = this.keySteps();
			this.transformer.set(steps && tuiCreateKeyStepsTransformer(steps));
			this.min.set(steps?.[0][1]);
			this.max.set(steps?.[steps.length - 1]?.[1]);
		});
		this.step = input(1);
		this.keySteps = input();
		this.transformer = signal(void 0);
		this.controlValue = toSignal(timer(0).pipe(switchMap(() => tuiControlValue(this.control))));
		this.totalSteps = computed(() => Math.round(100 / this.step()));
	}
	ngOnInit() {
		this.slider = this.injector.get(TuiSliderComponent);
	}
	takeStep(coefficient) {
		const newValue = this.slider.value + coefficient;
		return this.transformer()?.toControlValue((this.slider.value + coefficient) / this.totalSteps()) ?? newValue;
	}
	toSliderValue(fraction) {
		return this.transformer() ? fraction * this.totalSteps() : fraction;
	}
	setControlValue(controlValue) {
		const fraction = this.transformer()?.fromControlValue(controlValue) ?? controlValue;
		this.slider.value = this.toSliderValue(fraction);
	}
	getControlValue() {
		const { value } = this.slider;
		return this.transformer()?.toControlValue(value / this.totalSteps()) ?? value;
	}
	static {
		this.ɵfac = function TuiSliderKeyStepsBase_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiSliderKeyStepsBase)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiSliderKeyStepsBase,
			selectors: [[
				"input",
				"tuiSlider",
				"",
				"keySteps",
				""
			]],
			hostVars: 6,
			hostBindings: function TuiSliderKeyStepsBase_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵattribute("aria-valuemax", ctx.max())("aria-valuemin", ctx.min())("aria-valuenow", ctx.controlValue())("max", ctx.transformer() ? ctx.totalSteps() : ctx.slider == null ? null : ctx.slider.max)("min", ctx.transformer() ? 0 : ctx.slider == null ? null : ctx.slider.min)("step", ctx.transformer() ? 1 : ctx.step());
			},
			inputs: {
				step: [1, "step"],
				keySteps: [1, "keySteps"]
			}
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderKeyStepsBase, [{
		type: Directive,
		args: [{
			selector: "input[tuiSlider][keySteps]",
			host: {
				"[attr.aria-valuemax]": "max()",
				"[attr.aria-valuemin]": "min()",
				"[attr.aria-valuenow]": "controlValue()",
				"[attr.max]": "transformer() ? totalSteps() : slider?.max",
				"[attr.min]": "transformer() ? 0 : slider?.min",
				"[attr.step]": "transformer() ? 1 : step()"
			}
		}]
	}], null, null);
})();
var TuiSliderKeySteps = class TuiSliderKeySteps extends TuiControl {
	constructor() {
		super(...arguments);
		this.base = inject(TuiSliderKeyStepsBase);
	}
	set keySteps(steps) {
		this.transformer = steps ? tuiCreateKeyStepsTransformer(steps) : TUI_IDENTITY_VALUE_TRANSFORMER;
	}
	setValue(sliderValue) {
		this.onChange(this.base.transformer() ? sliderValue / this.base.totalSteps() : sliderValue);
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiSliderKeySteps_BaseFactory;
			return function TuiSliderKeySteps_Factory(__ngFactoryType__) {
				return (ɵTuiSliderKeySteps_BaseFactory || (ɵTuiSliderKeySteps_BaseFactory = ɵɵgetInheritedFactory(TuiSliderKeySteps)))(__ngFactoryType__ || TuiSliderKeySteps);
			};
		})();
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiSliderKeySteps,
			selectors: [
				[
					"input",
					"tuiSlider",
					"",
					"keySteps",
					"",
					"ngModel",
					""
				],
				[
					"input",
					"tuiSlider",
					"",
					"keySteps",
					"",
					"formControl",
					""
				],
				[
					"input",
					"tuiSlider",
					"",
					"keySteps",
					"",
					"formControlName",
					""
				]
			],
			hostVars: 2,
			hostBindings: function TuiSliderKeySteps_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("blur", function TuiSliderKeySteps_blur_HostBindingHandler() {
					return ctx.onTouched();
				})("change", function TuiSliderKeySteps_change_HostBindingHandler($event) {
					return ctx.setValue($event.target.value);
				})("input", function TuiSliderKeySteps_input_HostBindingHandler($event) {
					return ctx.setValue($event.target.value);
				});
				if (rf & 2) ɵɵdomProperty("disabled", ctx.disabled())("value", ctx.base.toSliderValue(ctx.value()));
			},
			inputs: { keySteps: "keySteps" },
			features: [ɵɵProvidersFeature([tuiFallbackValueProvider(0)]), ɵɵInheritDefinitionFeature]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderKeySteps, [{
		type: Directive,
		args: [{
			selector: "input[tuiSlider][keySteps][ngModel],input[tuiSlider][keySteps][formControl],input[tuiSlider][keySteps][formControlName]",
			inputs: ["keySteps"],
			providers: [tuiFallbackValueProvider(0)],
			host: {
				"[disabled]": "disabled()",
				"[value]": "base.toSliderValue(value())",
				"(blur)": "onTouched()",
				"(change)": "setValue($event.target.value)",
				"(input)": "setValue($event.target.value)"
			}
		}]
	}], null, null);
})();
var SLIDER_INTERACTION_KEYS = /* @__PURE__ */ new Set([
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"End",
	"Home",
	"PageDown",
	"PageUp"
]);
/**
* Native <input type='range' readonly> doesn't work.
* This directive imitates this native behaviour.
*/
var TuiSliderReadonly = class TuiSliderReadonly {
	constructor() {
		this.el = tuiInjectElement();
		this.doc = inject(DOCUMENT);
		this.readonly = input(true, { transform: coerceBooleanProperty });
		const touchStart$ = tuiTypedFromEvent(this.el, "touchstart", { passive: false });
		const touchMove$ = tuiTypedFromEvent(this.doc, "touchmove", { passive: false });
		const touchEnd$ = tuiTypedFromEvent(this.doc, "touchend", { passive: true });
		/**
		* @bad TODO think about another solution.
		* Keep in mind that preventing touch event (on slider) inside `@HostListener('touchstart')` doesn't work for mobile chrome.
		*/
		combineLatest([touchMove$, merge(touchStart$.pipe(tap((e) => this.preventEvent(e)), map(TUI_TRUE_HANDLER)), touchEnd$.pipe(map(TUI_FALSE_HANDLER)))]).pipe(filter(([_, shouldPreventMove]) => shouldPreventMove), takeUntilDestroyed()).subscribe(([moveEvent]) => this.preventEvent(moveEvent));
	}
	preventEvent(event) {
		if (event.cancelable && this.readonly()) event.preventDefault();
	}
	preventKeyboardInteraction(event) {
		if (SLIDER_INTERACTION_KEYS.has(event.key)) this.preventEvent(event);
	}
	static {
		this.ɵfac = function TuiSliderReadonly_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiSliderReadonly)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiSliderReadonly,
			selectors: [[
				"input",
				"tuiSlider",
				"",
				"readonly",
				""
			]],
			hostBindings: function TuiSliderReadonly_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("keydown", function TuiSliderReadonly_keydown_HostBindingHandler($event) {
					return ctx.preventKeyboardInteraction($event);
				})("mousedown", function TuiSliderReadonly_mousedown_HostBindingHandler($event) {
					return ctx.preventEvent($event);
				});
			},
			inputs: { readonly: [1, "readonly"] }
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderReadonly, [{
		type: Directive,
		args: [{
			selector: "input[tuiSlider][readonly]",
			host: {
				"(keydown)": "preventKeyboardInteraction($event)",
				"(mousedown)": "preventEvent($event)"
			}
		}]
	}], () => [], null);
})();
var TuiSliderThumbLabel = class TuiSliderThumbLabel {
	constructor() {
		this.slider = contentChild(TuiSliderComponent);
		this.control = contentChild(NgControl);
	}
	ngAfterContentInit() {
		ngDevMode && console.assert(Boolean(this.control()?.valueChanges), "\n[tuiSliderThumbLabel] expected <input tuiSlider type=\"range\" /> to use Angular Forms.\nUse [(ngModel)] or [formControl] or formControlName for correct work.");
	}
	get ratio() {
		return this.slider()?.valueRatio || 0;
	}
	get ghostStart() {
		return this.ratio * (this.slider()?.el.offsetWidth || 0);
	}
	static {
		this.ɵfac = function TuiSliderThumbLabel_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiSliderThumbLabel)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiSliderThumbLabel,
			selectors: [[
				"",
				"tuiSliderThumbLabel",
				""
			]],
			contentQueries: function TuiSliderThumbLabel_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.slider, TuiSliderComponent, 5)(dirIndex, ctx.control, NgControl, 5);
				if (rf & 2) ɵɵqueryAdvance(2);
			},
			features: [ɵɵProvidersFeature([tuiHintOptionsProvider({
				direction: "top",
				appearance: "floating"
			})])],
			ngContentSelectors: _c1,
			decls: 5,
			vars: 7,
			consts: [[1, "t-ghost"]],
			template: function TuiSliderThumbLabel_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef(_c0);
					ɵɵconditionalCreate(0, TuiSliderThumbLabel_Conditional_0_Template, 0, 0);
					ɵɵpipe(1, "async");
					ɵɵdomElementStart(2, "div", 0);
					ɵɵprojection(3);
					ɵɵdomElementEnd();
					ɵɵprojection(4, 1);
				}
				if (rf & 2) {
					let tmp_0_0;
					ɵɵconditional(ɵɵpipeBind1(1, 5, (tmp_0_0 = ctx.control()) == null ? null : tmp_0_0.valueChanges) ? 0 : -1);
					ɵɵadvance(2);
					ɵɵstyleProp("--%NS%tui-slider-thumb-ratio", ctx.ratio)("inset-inline-start", ctx.ghostStart, "px");
				}
			},
			dependencies: [AsyncPipe],
			styles: ["[_nghost-%COMP%]{position:relative}.t-ghost[_ngcontent-%COMP%]{position:absolute;display:grid;inset-block:0;margin:auto;border-radius:50%;pointer-events:none;inline-size:var(--%NS%tui-thumb-size, .75rem);block-size:var(--%NS%tui-thumb-size, .75rem);transform:translate(calc(var(--%NS%tui-slider-thumb-ratio) * var(--%NS%tui-thumb-size, .75rem) * -1 * var(--%NS%tui-inline)))}[dir=\"rtl\"][_nghost-%COMP%]   .t-ghost[_ngcontent-%COMP%], [dir=\"rtl\"]   [_nghost-%COMP%]   .t-ghost[_ngcontent-%COMP%]{inset-inline-start:unset!important}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderThumbLabel, [{
		type: Component,
		args: [{
			selector: "[tuiSliderThumbLabel]",
			imports: [AsyncPipe],
			changeDetection: ChangeDetectionStrategy.OnPush,
			providers: [tuiHintOptionsProvider({
				direction: "top",
				appearance: "floating"
			})],
			template: "@if (control()?.valueChanges | async) {}\n\n<div\n    class=\"t-ghost\"\n    [style.--tui-slider-thumb-ratio]=\"ratio\"\n    [style.inset-inline-start.px]=\"ghostStart\"\n>\n    <ng-content />\n</div>\n\n<ng-content select=\"input[type=range]\" />\n",
			styles: [":host{position:relative}.t-ghost{position:absolute;display:grid;inset-block:0;margin:auto;border-radius:50%;pointer-events:none;inline-size:var(--tui-thumb-size, .75rem);block-size:var(--tui-thumb-size, .75rem);transform:translate(calc(var(--tui-slider-thumb-ratio) * var(--tui-thumb-size, .75rem) * -1 * var(--tui-inline)))}:host-context([dir=\"rtl\"]) .t-ghost{inset-inline-start:unset!important}\n"]
		}]
	}], null, null);
})();
var TuiSlider = [
	TuiSliderComponent,
	TuiSliderThumbLabel,
	TuiSliderKeyStepsBase,
	TuiSliderKeySteps,
	TuiSliderReadonly
];
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components.mjs
/**
* Generated bundle index. Do not edit.
*/
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-date-format.mjs
var TuiDateFormat = class TuiDateFormat {
	constructor() {
		this.tuiDateFormat = input.required();
	}
	static {
		this.ɵfac = function TuiDateFormat_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDateFormat)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDateFormat,
			selectors: [[
				"",
				"tuiDateFormat",
				""
			]],
			inputs: { tuiDateFormat: [1, "tuiDateFormat"] },
			features: [ɵɵProvidersFeature([{
				provide: TUI_DATE_FORMAT,
				useFactory: () => {
					const parent = inject(TUI_DATE_FORMAT, { skipSelf: true });
					const format = inject(TuiDateFormat).tuiDateFormat;
					return computed(() => ({
						...parent(),
						...format()
					}));
				}
			}])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDateFormat, [{
		type: Directive,
		args: [{
			selector: "[tuiDateFormat]",
			providers: [{
				provide: TUI_DATE_FORMAT,
				useFactory: () => {
					const parent = inject(TUI_DATE_FORMAT, { skipSelf: true });
					const format = inject(TuiDateFormat).tuiDateFormat;
					return computed(() => ({
						...parent(),
						...format()
					}));
				}
			}]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-group.mjs
var TUI_GROUP_DEFAULT_OPTIONS = {
	size: "l",
	collapsed: false,
	rounded: true,
	orientation: "horizontal"
};
var [TUI_GROUP_OPTIONS, tuiGroupOptionsProvider] = tuiCreateOptions(TUI_GROUP_DEFAULT_OPTIONS);
var Styles = class Styles {
	static {
		this.ɵfac = function Styles_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || Styles)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: Styles,
			selectors: [["ng-component"]],
			exportAs: ["tui-group-5.17.0"],
			decls: 0,
			vars: 0,
			template: function Styles_Template(rf, ctx) {},
			styles: ["[tuiGroup]:where(*[data-tui-version=\"5.17.0\"]){position:relative;display:flex;transform:translateZ(0);--%NS%t-group-radius: var(--%NS%tui-radius-l);--%NS%t-group-margin: -1px;--%NS%t-group-mask: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--%NS%t-group-mask-end: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px);--%NS%t-group-mask-start: linear-gradient(to right, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) )}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*{z-index:1;flex:1 1 0;min-inline-size:0;-webkit-mask-image:var(--%NS%t-group-mask);mask-image:var(--%NS%t-group-mask);mask-clip:no-clip}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:disabled,[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*._disabled{z-index:0}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:invalid:not([data-mode]),[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*[data-mode~=invalid]{z-index:2;--%NS%t-group-mask: none;--%NS%t-group-mask-end: none;--%NS%t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:has(:invalid:not([data-mode])),[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:has([data-mode~=invalid]){z-index:2;--%NS%t-group-mask: none;--%NS%t-group-mask-end: none;--%NS%t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:has(:focus-visible){z-index:3;--%NS%t-group-mask: none;--%NS%t-group-mask-end: none;--%NS%t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:has([data-focus=true]){z-index:3;--%NS%t-group-mask: none;--%NS%t-group-mask-end: none;--%NS%t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:checked:not([data-mode]),[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*[data-mode~=checked]{z-index:4;--%NS%t-group-mask: none;--%NS%t-group-mask-end: none;--%NS%t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:has([tuiBlock]:checked){z-index:4;--%NS%t-group-mask: none;--%NS%t-group-mask-end: none;--%NS%t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:not(:last-child){margin-inline-end:var(--%NS%t-group-margin)}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:nth-child(n){border-radius:0}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:first-child{border-radius:var(--%NS%t-group-radius) 0 0 var(--%NS%t-group-radius);-webkit-mask-image:var(--%NS%t-group-mask-start);mask-image:var(--%NS%t-group-mask-start)}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:last-child{border-radius:0 var(--%NS%t-group-radius) var(--%NS%t-group-radius) 0;-webkit-mask-image:var(--%NS%t-group-mask-end);mask-image:var(--%NS%t-group-mask-end)}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:only-child{border-radius:var(--%NS%t-group-radius);-webkit-mask-image:none;mask-image:none}[dir=rtl] [tuiGroup]:where(*[data-tui-version=\"5.17.0\"]):not([data-orientation=vertical])>*:first-child{border-radius:0 var(--%NS%t-group-radius) var(--%NS%t-group-radius) 0;-webkit-mask-image:var(--%NS%t-group-mask-end);mask-image:var(--%NS%t-group-mask-end)}[dir=rtl] [tuiGroup]:where(*[data-tui-version=\"5.17.0\"]):not([data-orientation=vertical])>*:last-child{border-radius:var(--%NS%t-group-radius) 0 0 var(--%NS%t-group-radius);-webkit-mask-image:var(--%NS%t-group-mask-start);mask-image:var(--%NS%t-group-mask-start)}[dir=rtl] [tuiGroup]:where(*[data-tui-version=\"5.17.0\"]):not([data-orientation=vertical])>*:only-child{border-radius:var(--%NS%t-group-radius);-webkit-mask-image:none;mask-image:none}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-size=s],[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{--%NS%t-group-radius: var(--%NS%tui-radius-m)}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-orientation=vertical]{display:inline-flex;flex-direction:column;--%NS%t-group-mask: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--%NS%t-group-mask-start: linear-gradient(to bottom, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) );--%NS%t-group-mask-end: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px)}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--%NS%t-group-margin)}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-orientation=vertical]>*:first-child{border-radius:var(--%NS%t-group-radius) var(--%NS%t-group-radius) 0 0}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-orientation=vertical]>*:last-child{border-radius:0 0 var(--%NS%t-group-radius) var(--%NS%t-group-radius)}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-orientation=vertical]>*:only-child{border-radius:var(--%NS%t-group-radius)}\n"],
			encapsulation: 2
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles, [{
		type: Component,
		args: [{
			template: "",
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			exportAs: `tui-group-5.17.0`,
			styles: ["[tuiGroup]:where(*[data-tui-version=\"5.17.0\"]){position:relative;display:flex;transform:translateZ(0);--t-group-radius: var(--tui-radius-l);--t-group-margin: -1px;--t-group-mask: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--t-group-mask-end: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px);--t-group-mask-start: linear-gradient(to right, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) )}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*{z-index:1;flex:1 1 0;min-inline-size:0;-webkit-mask-image:var(--t-group-mask);mask-image:var(--t-group-mask);mask-clip:no-clip}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:disabled,[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*._disabled{z-index:0}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:invalid:not([data-mode]),[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*[data-mode~=invalid]{z-index:2;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:has(:invalid:not([data-mode])),[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:has([data-mode~=invalid]){z-index:2;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:has(:focus-visible){z-index:3;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:has([data-focus=true]){z-index:3;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:checked:not([data-mode]),[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*[data-mode~=checked]{z-index:4;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:has([tuiBlock]:checked){z-index:4;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:not(:last-child){margin-inline-end:var(--t-group-margin)}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:nth-child(n){border-radius:0}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:first-child{border-radius:var(--t-group-radius) 0 0 var(--t-group-radius);-webkit-mask-image:var(--t-group-mask-start);mask-image:var(--t-group-mask-start)}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:last-child{border-radius:0 var(--t-group-radius) var(--t-group-radius) 0;-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end)}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])>*:only-child{border-radius:var(--t-group-radius);-webkit-mask-image:none;mask-image:none}[dir=rtl] [tuiGroup]:where(*[data-tui-version=\"5.17.0\"]):not([data-orientation=vertical])>*:first-child{border-radius:0 var(--t-group-radius) var(--t-group-radius) 0;-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end)}[dir=rtl] [tuiGroup]:where(*[data-tui-version=\"5.17.0\"]):not([data-orientation=vertical])>*:last-child{border-radius:var(--t-group-radius) 0 0 var(--t-group-radius);-webkit-mask-image:var(--t-group-mask-start);mask-image:var(--t-group-mask-start)}[dir=rtl] [tuiGroup]:where(*[data-tui-version=\"5.17.0\"]):not([data-orientation=vertical])>*:only-child{border-radius:var(--t-group-radius);-webkit-mask-image:none;mask-image:none}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-size=s],[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-size=m]{--t-group-radius: var(--tui-radius-m)}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-orientation=vertical]{display:inline-flex;flex-direction:column;--t-group-mask: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--t-group-mask-start: linear-gradient(to bottom, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) );--t-group-mask-end: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px)}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--t-group-margin)}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-orientation=vertical]>*:first-child{border-radius:var(--t-group-radius) var(--t-group-radius) 0 0}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-orientation=vertical]>*:last-child{border-radius:0 0 var(--t-group-radius) var(--t-group-radius)}[tuiGroup]:where(*[data-tui-version=\"5.17.0\"])[data-orientation=vertical]>*:only-child{border-radius:var(--t-group-radius)}\n"]
		}]
	}], null, null);
})();
var TuiGroup = class TuiGroup {
	constructor() {
		this.options = inject(TUI_GROUP_OPTIONS);
		this.nothing = tuiWithStyles(Styles);
		this.orientation = input(this.options.orientation);
		this.collapsed = input(this.options.collapsed);
		this.rounded = input(this.options.rounded);
		this.size = input(this.options.size);
	}
	static {
		this.ɵfac = function TuiGroup_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiGroup)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiGroup,
			selectors: [[
				"",
				"tuiGroup",
				"",
				5,
				"ng-container"
			]],
			hostAttrs: [
				"data-tui-version",
				"5.17.0",
				"tuiGroup",
				""
			],
			hostVars: 12,
			hostBindings: function TuiGroup_HostBindings(rf, ctx) {
				if (rf & 2) {
					ɵɵattribute("data-orientation", ctx.orientation())("data-size", ctx.size());
					ɵɵstyleProp("--%NS%t-group-margin", ctx.collapsed() ? null : .125, "rem")("--%NS%t-group-mask-end", ctx.collapsed() ? null : "none")("--%NS%t-group-mask-start", ctx.collapsed() ? null : "none")("--%NS%t-group-mask", ctx.collapsed() ? null : "none")("--%NS%t-group-radius", ctx.rounded() ? null : 0);
				}
			},
			inputs: {
				orientation: [1, "orientation"],
				collapsed: [1, "collapsed"],
				rounded: [1, "rounded"],
				size: [1, "size"]
			}
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiGroup, [{
		type: Directive,
		args: [{
			selector: "[tuiGroup]:not(ng-container)",
			host: {
				"data-tui-version": "5.17.0",
				tuiGroup: "",
				"[attr.data-orientation]": "orientation()",
				"[attr.data-size]": "size()",
				"[style.--t-group-margin.rem]": "collapsed() ? null : 0.125",
				"[style.--t-group-mask-end]": "collapsed() ? null : \"none\"",
				"[style.--t-group-mask-start]": "collapsed() ? null : \"none\"",
				"[style.--t-group-mask]": "collapsed() ? null : \"none\"",
				"[style.--t-group-radius]": "rounded() ? null : 0"
			}
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-number-format.mjs
var TuiNumberFormat = class TuiNumberFormat {
	constructor() {
		this.tuiNumberFormat = input.required();
	}
	static {
		this.ɵfac = function TuiNumberFormat_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiNumberFormat)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiNumberFormat,
			selectors: [[
				"",
				"tuiNumberFormat",
				""
			]],
			inputs: { tuiNumberFormat: [1, "tuiNumberFormat"] },
			features: [ɵɵProvidersFeature([{
				provide: TUI_NUMBER_FORMAT,
				useFactory: () => {
					const parent = inject(TUI_NUMBER_FORMAT, { skipSelf: true });
					const format = inject(TuiNumberFormat).tuiNumberFormat;
					return computed(() => ({
						...parent(),
						...format()
					}));
				}
			}])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNumberFormat, [{
		type: Directive,
		args: [{
			selector: "[tuiNumberFormat]",
			providers: [{
				provide: TUI_NUMBER_FORMAT,
				useFactory: () => {
					const parent = inject(TUI_NUMBER_FORMAT, { skipSelf: true });
					const format = inject(TuiNumberFormat).tuiNumberFormat;
					return computed(() => ({
						...parent(),
						...format()
					}));
				}
			}]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives.mjs
/**
* Generated bundle index. Do not edit.
*/
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-format.mjs
/**
* Convert number to string with replacing exponent part on decimals
*
* @param value the number
* @return string representation of a number
*/
function tuiNumberToStringWithoutExp(value) {
	const valueAsString = String(value);
	const [numberPart, expPart] = valueAsString.split("e-");
	let valueWithoutExp = valueAsString;
	if (expPart) {
		const [, fractionalPart = ""] = numberPart?.split(".") ?? [];
		const decimalDigits = Number(expPart) + (fractionalPart?.length || 0);
		valueWithoutExp = value.toFixed(decimalDigits);
	}
	return valueWithoutExp;
}
/**
* Return fractional part of number
*
* @param value the number
* @param precision number of digits of decimal part, null to keep untouched
* @return the fractional part of number
*/
function tuiGetFractionPartPadded(value, precision) {
	const [, fractionPartPadded = ""] = tuiNumberToStringWithoutExp(value).split(".");
	return tuiIsNumber(precision) ? fractionPartPadded.slice(0, Math.max(0, precision)) : fractionPartPadded;
}
/**
* Formats number adding a thousand separators and correct decimal separator
* padding decimal part with zeroes to given length
*
* @param value the input number
* @param settings See {@link TuiNumberFormatSettings}
* @return the formatted string
*/
function tuiFormatNumber(value, settings = {}) {
	const { precision, decimalSeparator, thousandSeparator, decimalMode, rounding } = {
		...TUI_DEFAULT_NUMBER_FORMAT,
		decimalMode: "always",
		precision: Infinity,
		...settings
	};
	const rounded = Number.isFinite(precision) ? tuiRoundWith({
		value,
		precision,
		method: rounding
	}) : value;
	const integerPartString = String(Math.floor(Math.abs(rounded)));
	let fractionPartPadded = tuiGetFractionPartPadded(rounded, precision);
	const hasFraction = Number(fractionPartPadded) > 0;
	if (Number.isFinite(precision)) if (decimalMode === "always" || hasFraction && decimalMode === "pad") {
		const zeroPaddingSize = Math.max(precision - fractionPartPadded.length, 0);
		const zeroPartString = "0".repeat(zeroPaddingSize);
		fractionPartPadded = `${fractionPartPadded}${zeroPartString}`;
	} else fractionPartPadded = fractionPartPadded.replace(/0*$/, "");
	const remainder = integerPartString.length % 3;
	let result = `${value < 0 ? "-" : ""}${integerPartString.charAt(0)}`;
	for (let i = 1; i < integerPartString.length; i++) {
		if (i % 3 === remainder && integerPartString.length > 3) result += thousandSeparator;
		result += integerPartString.charAt(i);
	}
	return fractionPartPadded ? `${result}${decimalSeparator}${fractionPartPadded}` : result;
}
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-format-number.mjs
var TuiFormatNumberPipe = class TuiFormatNumberPipe {
	constructor() {
		this.format = inject(TUI_NUMBER_FORMAT);
		this.value = signal(NaN);
		this.settings = signal({});
		this.formatted = computed(() => tuiFormatNumber(this.value(), {
			...this.format(),
			precision: Number.isNaN(this.format().precision) ? Infinity : this.format().precision,
			...this.settings()
		}));
	}
	/**
	* Formats number adding a thousand separators and correct decimal separator
	* padding decimal part with zeroes to given length
	* @param value number
	* @param settings See {@link TuiNumberFormatSettings}
	*/
	transform(value, settings = {}) {
		untracked(() => {
			this.value.set(value);
			this.settings.set(settings);
		});
		return this.formatted();
	}
	static {
		this.ɵfac = function TuiFormatNumberPipe_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiFormatNumberPipe)();
		};
	}
	static {
		this.ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
			name: "tuiFormatNumber",
			type: TuiFormatNumberPipe,
			pure: false
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatNumberPipe, [{
		type: Pipe,
		args: [{
			name: "tuiFormatNumber",
			pure: false
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes.mjs
/**
* Generated bundle index. Do not edit.
*/
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-auto-focus.mjs
var AbstractTuiAutofocusHandler = class {
	constructor(el, options) {
		this.el = el;
		this.options = options;
	}
	get element() {
		return this.el.nativeElement.querySelector(this.options.query) ?? this.el.nativeElement;
	}
	get isTextFieldElement() {
		return this.element.matches(this.options.query);
	}
};
var TIMEOUT = 1e3;
var NG_ANIMATION_SELECTOR = ".ng-animating";
var TuiDefaultAutofocusHandler = class extends AbstractTuiAutofocusHandler {
	constructor(el, animationFrame$, zone, options) {
		super(el, options);
		this.animationFrame$ = animationFrame$;
		this.zone = zone;
	}
	setFocus() {
		if (this.isTextFieldElement) race(timer(this.options.delay || TIMEOUT), this.animationFrame$.pipe(throttleTime(100, tuiZonefreeScheduler(this.zone)), map(() => this.element.closest(NG_ANIMATION_SELECTOR)), skipWhile(Boolean), take(1))).subscribe(() => this.element.focus({ preventScroll: this.options.preventScroll }));
		else this.element.focus({ preventScroll: true });
	}
};
var TEXTFIELD_ATTRS = [
	"type",
	"inputMode",
	"autocomplete",
	"accept",
	"min",
	"max",
	"step",
	"pattern",
	"size",
	"maxlength"
];
var TuiIosAutofocusHandler = class extends AbstractTuiAutofocusHandler {
	constructor(el, renderer, zone, win, options) {
		super(el, options);
		this.renderer = renderer;
		this.zone = zone;
		this.win = win;
	}
	setFocus() {
		if (this.isTextFieldElement) this.zone.runOutsideAngular(() => this.iosWebkitAutofocus());
		else this.element.focus({ preventScroll: true });
	}
	iosWebkitAutofocus() {
		const fakeInput = this.makeFakeInput();
		const duration = this.getDurationTimeBeforeFocus();
		let fakeFocusTimeoutId = 0;
		let elementFocusTimeoutId = 0;
		const blurHandler = () => fakeInput.focus({ preventScroll: true });
		const focusHandler = () => {
			clearTimeout(fakeFocusTimeoutId);
			fakeFocusTimeoutId = this.win.setTimeout(() => {
				clearTimeout(elementFocusTimeoutId);
				fakeInput.removeEventListener("blur", blurHandler);
				fakeInput.removeEventListener("focus", focusHandler);
				elementFocusTimeoutId = this.win.setTimeout(() => {
					this.element.focus({ preventScroll: this.options.preventScroll });
					fakeInput.remove();
				}, duration);
			});
		};
		fakeInput.addEventListener("blur", blurHandler, { once: true });
		fakeInput.addEventListener("focus", focusHandler);
		if (this.insideDialog()) this.win.document.body.appendChild(fakeInput);
		else this.element.parentElement?.appendChild(fakeInput);
		fakeInput.focus({ preventScroll: true });
	}
	/**
	* @note:
	* emulate textfield position in layout with cursor
	* before focus to real textfield element
	*
	* required note:
	* [fakeInput.readOnly = true] ~
	* don't use {readOnly: true} value, it's doesn't work for emulate autofill
	*
	* [fakeInput.style.opacity = 0] ~
	* don't use {opacity: 0}, sometimes it's doesn't work for emulate real input
	*
	* [fakeInput.style.fontSize = 16px] ~
	* disable possible auto zoom
	*
	* [fakeInput.style.top/left] ~
	* emulate position cursor before focus to real textfield element
	*/
	makeFakeInput() {
		const fakeInput = this.renderer.createElement("input");
		const rect = this.element.getBoundingClientRect();
		this.patchFakeInputFromFocusableElement(fakeInput);
		fakeInput.style.height = tuiPx(rect.height);
		fakeInput.style.width = tuiPx(rect.width / 2);
		fakeInput.style.position = "fixed";
		fakeInput.style.zIndex = "-99999999";
		fakeInput.style.caretColor = "transparent";
		fakeInput.style.border = "none";
		fakeInput.style.outline = "none";
		fakeInput.style.color = "transparent";
		fakeInput.style.background = "transparent";
		fakeInput.style.cursor = "none";
		fakeInput.style.fontSize = tuiPx(16);
		fakeInput.style.top = tuiPx(rect.top);
		fakeInput.style.left = tuiPx(rect.left);
		return fakeInput;
	}
	getDurationTimeBeforeFocus() {
		return Number.parseFloat(this.win.getComputedStyle(this.element).getPropertyValue("--tui-duration")) || 0;
	}
	/**
	* @note:
	* unfortunately, in older versions of iOS
	* there is a bug that the fake input cursor
	* will move along with the dialog animation
	* and then that dialog will be shaking
	*/
	insideDialog() {
		return !!this.element.closest("tui-dialog");
	}
	/**
	* @note:
	* inherit basic attributes values from real input
	* for help iOS detect what do you want see on keyboard,
	* for example [inputMode=numeric, autocomplete=cc-number]
	*/
	patchFakeInputFromFocusableElement(fakeInput) {
		TEXTFIELD_ATTRS.forEach((attr) => {
			const value = this.element.getAttribute(attr);
			if (tuiIsPresent(value)) fakeInput.setAttribute(attr, value);
		});
	}
};
var [TUI_AUTOFOCUS_OPTIONS, tuiAutoFocusOptionsProvider] = tuiCreateOptions({
	delay: NaN,
	query: "input, textarea, select, [contenteditable]",
	preventScroll: false
});
var TUI_AUTOFOCUS_HANDLER = new InjectionToken(ngDevMode ? "TUI_AUTOFOCUS_HANDLER" : "");
var TUI_AUTOFOCUS_PROVIDERS = [{
	provide: TUI_AUTOFOCUS_HANDLER,
	deps: [
		ElementRef,
		WA_ANIMATION_FRAME,
		Renderer2,
		NgZone,
		WA_WINDOW,
		WA_IS_IOS,
		TUI_AUTOFOCUS_OPTIONS
	],
	useFactory: (el, animationFrame$, renderer, zone, win, isIos, options) => isIos ? new TuiIosAutofocusHandler(el, renderer, zone, win, options) : new TuiDefaultAutofocusHandler(el, animationFrame$, zone, options)
}];
var TuiAutoFocus = class TuiAutoFocus {
	constructor() {
		this.handler = inject(TUI_AUTOFOCUS_HANDLER);
		this.options = inject(TUI_AUTOFOCUS_OPTIONS);
		this.destroyRef = inject(DestroyRef);
		this.autoFocus = input(void 0, {
			alias: "tuiAutoFocus",
			transform: coerceBooleanProperty
		});
	}
	ngAfterViewInit() {
		if (this.autoFocus()) this.focus();
	}
	focus() {
		if (Number.isNaN(this.options.delay)) Promise.resolve().then(() => this.handler.setFocus());
		else timer(this.options.delay).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.handler.setFocus());
	}
	static {
		this.ɵfac = function TuiAutoFocus_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiAutoFocus)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiAutoFocus,
			selectors: [[
				"",
				"tuiAutoFocus",
				""
			]],
			inputs: { autoFocus: [
				1,
				"tuiAutoFocus",
				"autoFocus"
			] },
			features: [ɵɵProvidersFeature(TUI_AUTOFOCUS_PROVIDERS)]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoFocus, [{
		type: Directive,
		args: [{
			selector: "[tuiAutoFocus]",
			providers: TUI_AUTOFOCUS_PROVIDERS
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-focus-trap.mjs
var TuiFocusTrap = class TuiFocusTrap {
	constructor() {
		this.doc = inject(DOCUMENT);
		this.el = tuiInjectElement();
		this.activeElement = null;
		this.initialized = false;
		/**
		* This would cause currently focused element to lose focus,
		* but it might cause ExpressionChanged error due to potential HostBinding.
		* Microtask keeps it in the same frame but allows change detection to run
		*/
		Promise.resolve().then(() => {
			/**
			* The same event can synchronously close already opened focus trap and open another one.
			* All focus traps have microtask inside its `ngOnDestroy` –
			* they should be resolved before enabling of new focus trap.
			* Don't enable any new event listeners before `initialized` is equal to `true`!
			*/
			this.initialized = true;
			this.activeElement = tuiGetFocused(this.doc);
			this.el.focus();
		});
	}
	ngOnDestroy() {
		this.initialized = false;
		if (tuiIsHTMLElement(this.activeElement)) this.activeElement.focus();
	}
	onFocusIn(node) {
		const { firstElementChild } = this.el;
		if (!tuiContainsOrAfter(this.el, node) && firstElementChild) tuiGetClosestFocusable({
			initial: firstElementChild,
			root: this.el
		})?.focus();
	}
	static {
		this.ɵfac = function TuiFocusTrap_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiFocusTrap)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiFocusTrap,
			selectors: [[
				"",
				"tuiFocusTrap",
				""
			]],
			hostAttrs: ["tabIndex", "0"],
			hostBindings: function TuiFocusTrap_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("pointerdown", function TuiFocusTrap_pointerdown_HostBindingHandler($event) {
					return $event.currentTarget == null ? null : $event.currentTarget.removeAttribute("tabindex");
				})("focusin.zoneless", function TuiFocusTrap_focusin_zoneless_HostBindingHandler($event) {
					return ctx.initialized && ctx.onFocusIn($event.target);
				}, ɵɵresolveWindow);
			}
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusTrap, [{
		type: Directive,
		args: [{
			selector: "[tuiFocusTrap]",
			host: {
				tabIndex: "0",
				"(pointerdown)": "$event.currentTarget?.removeAttribute(\"tabindex\")",
				"(window:focusin.zoneless)": "initialized && onFocusIn($event.target)"
			}
		}]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-modal.mjs
function TuiModalComponent_ng_container_1_Template(rf, ctx) {
	if (rf & 1) ɵɵelementContainer(0);
}
var TuiModalComponent = class TuiModalComponent {
	constructor() {
		this.current = inject(TuiActiveZone);
		this.parent = findActive(inject(TuiActiveZone, { skipSelf: true }), tuiGetFocused(inject(DOCUMENT)));
		this.context = injectContext();
		this.component = signal(null);
	}
	ngOnInit() {
		this.current.tuiActiveZoneParentSetter = this.parent;
	}
	ngOnDestroy() {
		this.current.tuiActiveZoneParentSetter = null;
	}
	static {
		this.ɵfac = function TuiModalComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiModalComponent)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiModalComponent,
			selectors: [["tui-modal"]],
			hostAttrs: [
				"aria-modal",
				"true",
				"data-tui-version",
				"5.17.0",
				"role",
				"dialog",
				1,
				"tui-enter"
			],
			hostVars: 1,
			hostBindings: function TuiModalComponent_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("animationend.self", function TuiModalComponent_animationend_self_HostBindingHandler($event) {
					return $event.target.classList.remove("tui-enter");
				});
				if (rf & 2) ɵɵattribute("aria-labelledby", ctx.context.id);
			},
			features: [ɵɵHostDirectivesFeature([TuiActiveZone, TuiFocusTrap])],
			decls: 3,
			vars: 2,
			consts: [
				["tuiScrollRef", ""],
				[
					4,
					"polymorpheusOutlet",
					"polymorpheusOutletContext"
				],
				[1, "t-scrollbars"]
			],
			template: function TuiModalComponent_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵelementStart(0, "div", 0);
					ɵɵtemplate(1, TuiModalComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
					ɵɵelement(2, "tui-scroll-controls", 2);
					ɵɵelementEnd();
				}
				if (rf & 2) {
					ɵɵadvance();
					ɵɵproperty("polymorpheusOutlet", ctx.component())("polymorpheusOutletContext", ctx.context);
				}
			},
			dependencies: [
				PolymorpheusOutlet,
				TuiScrollControls,
				TuiScrollRef
			],
			styles: ["@keyframes tuiModalBackdrop{0%{-webkit-backdrop-filter:none;backdrop-filter:none}to{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}}@keyframes tuiDummy{to{color:currentColor}}tui-modal:where(*[data-tui-version=\"5.17.0\"]){scrollbar-width:none;-ms-overflow-style:none;position:fixed;inset:0;outline:none;overflow:auto;overscroll-behavior:none;transform:translateY(var(--%NS%t-root-top))}tui-modal:where(*[data-tui-version=\"5.17.0\"])::-webkit-scrollbar,tui-modal:where(*[data-tui-version=\"5.17.0\"])::-webkit-scrollbar-thumb{display:none}tui-modal:where(*[data-tui-version=\"5.17.0\"]):not(:last-of-type){interactivity:inert}tui-modal:where(*[data-tui-version=\"5.17.0\"]).tui-enter,tui-modal:where(*[data-tui-version=\"5.17.0\"]).tui-leave{animation-name:tuiDummy}@supports not (selector(:has(*))) or not (selector(:nth-child(1 of *))){tui-modal:where(*[data-tui-version=\"5.17.0\"]):last-of-type:not(.tui-leave):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version=\"5.17.0\"]):last-of-type.tui-enter,tui-modal:where(*[data-tui-version=\"5.17.0\"]):last-of-type.tui-leave{animation-name:tuiDummy}tui-modal:where(*[data-tui-version=\"5.17.0\"]):last-of-type.tui-enter:before,tui-modal:where(*[data-tui-version=\"5.17.0\"]):last-of-type.tui-leave:before{animation-name:tuiModalBackdrop}}@supports (selector(:has(*))){tui-modal:where(*[data-tui-version=\"5.17.0\"]):nth-last-child(1 of tui-modal:not(.tui-leave):not(:has(.tui-backdrop-hidden))):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version=\"5.17.0\"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave){animation-name:tuiDummy}tui-modal:where(*[data-tui-version=\"5.17.0\"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave):before{animation-name:tuiModalBackdrop}}tui-modal:where(*[data-tui-version=\"5.17.0\"]):before{transition-property:backdrop-filter;transition-duration:var(--%NS%tui-duration, .3s);transition-timing-function:var(--%NS%tui-curve-productive-standard);content:\"\";position:sticky;inset:0;display:block;block-size:200%;transition-timing-function:linear;animation-duration:var(--%NS%tui-duration);animation-timing-function:cubic-bezier(.14,.52,.35,.84);perspective:10rem}tui-modal:where(*[data-tui-version=\"5.17.0\"]).tui-leave:before{animation-direction:reverse}tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]{scrollbar-width:none;-ms-overflow-style:none;position:sticky;inset:0;display:grid;place-items:center;block-size:100%;overflow:auto;overscroll-behavior:none}tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]::-webkit-scrollbar,tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]::-webkit-scrollbar-thumb{display:none}tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]>.t-scrollbars{position:fixed;inset:0;margin:0;color:#747474}tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]>.t-scrollbars .t-bar_horizontal,tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]>.t-scrollbars .t-bar_vertical .t-thumb[style*=\"height: 100%\"]{display:none}tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]>.tui-enter+.t-scrollbars .t-bar_vertical,tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]>.tui-leave+.t-scrollbars .t-bar_vertical{display:none}\n"],
			encapsulation: 2,
			changeDetection: 1
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiModalComponent, [{
		type: Component,
		args: [{
			selector: "tui-modal",
			imports: [
				PolymorpheusOutlet,
				TuiScrollControls,
				TuiScrollRef
			],
			template: `
        <div tuiScrollRef>
            <ng-container *polymorpheusOutlet="component(); context: context" />
            <tui-scroll-controls class="t-scrollbars" />
        </div>
    `,
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.Default,
			hostDirectives: [TuiActiveZone, TuiFocusTrap],
			host: {
				"aria-modal": "true",
				"data-tui-version": "5.17.0",
				role: "dialog",
				class: "tui-enter",
				"[attr.aria-labelledby]": "context.id",
				"(animationend.self)": "$event.target.classList.remove(\"tui-enter\")"
			},
			styles: ["@keyframes tuiModalBackdrop{0%{-webkit-backdrop-filter:none;backdrop-filter:none}to{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}}@keyframes tuiDummy{to{color:currentColor}}tui-modal:where(*[data-tui-version=\"5.17.0\"]){scrollbar-width:none;-ms-overflow-style:none;position:fixed;inset:0;outline:none;overflow:auto;overscroll-behavior:none;transform:translateY(var(--t-root-top))}tui-modal:where(*[data-tui-version=\"5.17.0\"])::-webkit-scrollbar,tui-modal:where(*[data-tui-version=\"5.17.0\"])::-webkit-scrollbar-thumb{display:none}tui-modal:where(*[data-tui-version=\"5.17.0\"]):not(:last-of-type){interactivity:inert}tui-modal:where(*[data-tui-version=\"5.17.0\"]).tui-enter,tui-modal:where(*[data-tui-version=\"5.17.0\"]).tui-leave{animation-name:tuiDummy}@supports not (selector(:has(*))) or not (selector(:nth-child(1 of *))){tui-modal:where(*[data-tui-version=\"5.17.0\"]):last-of-type:not(.tui-leave):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version=\"5.17.0\"]):last-of-type.tui-enter,tui-modal:where(*[data-tui-version=\"5.17.0\"]):last-of-type.tui-leave{animation-name:tuiDummy}tui-modal:where(*[data-tui-version=\"5.17.0\"]):last-of-type.tui-enter:before,tui-modal:where(*[data-tui-version=\"5.17.0\"]):last-of-type.tui-leave:before{animation-name:tuiModalBackdrop}}@supports (selector(:has(*))){tui-modal:where(*[data-tui-version=\"5.17.0\"]):nth-last-child(1 of tui-modal:not(.tui-leave):not(:has(.tui-backdrop-hidden))):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version=\"5.17.0\"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave){animation-name:tuiDummy}tui-modal:where(*[data-tui-version=\"5.17.0\"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave):before{animation-name:tuiModalBackdrop}}tui-modal:where(*[data-tui-version=\"5.17.0\"]):before{transition-property:backdrop-filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);content:\"\";position:sticky;inset:0;display:block;block-size:200%;transition-timing-function:linear;animation-duration:var(--tui-duration);animation-timing-function:cubic-bezier(.14,.52,.35,.84);perspective:10rem}tui-modal:where(*[data-tui-version=\"5.17.0\"]).tui-leave:before{animation-direction:reverse}tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]{scrollbar-width:none;-ms-overflow-style:none;position:sticky;inset:0;display:grid;place-items:center;block-size:100%;overflow:auto;overscroll-behavior:none}tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]::-webkit-scrollbar,tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]::-webkit-scrollbar-thumb{display:none}tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]>.t-scrollbars{position:fixed;inset:0;margin:0;color:#747474}tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]>.t-scrollbars .t-bar_horizontal,tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]>.t-scrollbars .t-bar_vertical .t-thumb[style*=\"height: 100%\"]{display:none}tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]>.tui-enter+.t-scrollbars .t-bar_vertical,tui-modal:where(*[data-tui-version=\"5.17.0\"])>[tuiScrollRef]>.tui-leave+.t-scrollbars .t-bar_vertical{display:none}\n"]
		}]
	}], null, null);
})();
function findActive(zone, el) {
	if (!el || !zone.contains(el)) return null;
	const active = zone.children.find((child) => !child["el"].matches("[tuiActiveZoneAdapter]") && child.contains(el));
	return active ? findActive(active, el) : zone;
}
var TuiModalService = class TuiModalService extends TuiPortal {
	constructor() {
		super(inject(TuiPopupService));
		this.component = TuiModalComponent;
	}
	add(component) {
		const ref = this.service.add(component);
		const el = ref.location.nativeElement;
		el.closest("tui-root")?.firstElementChild?.setAttribute("inert", "");
		ref.instance.component.set(new PolymorpheusComponent(this.content));
		return () => {
			ref.instance.component.set(null);
			ref.changeDetectorRef.detectChanges();
			el.classList.add(TUI_LEAVE);
			Promise.allSettled(getAnimations(el)).then(async () => Promise.allSettled(getAnimations(el.firstElementChild?.firstElementChild))).then(() => {
				el.closest("tui-root")?.firstElementChild?.removeAttribute("inert");
				ref.destroy();
				el.remove();
			});
		};
	}
	static {
		this.ɵfac = function TuiModalService_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiModalService)();
		};
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiModalService,
			factory: TuiModalService.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiModalService, [{ type: Injectable }], () => [], null);
})();
function getAnimations(el) {
	return el?.getAnimations?.().map(async ({ finished }) => finished) || [];
}
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-dialog.mjs
function TuiDialogComponent_Conditional_0_Template(rf, ctx) {
	if (rf & 1) {
		const _r1 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "button", 2);
		ɵɵlistener("click", function TuiDialogComponent_Conditional_0_Template_button_click_0_listener() {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().close$.next());
		});
		ɵɵtext(1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵproperty("appearance", ctx_r1.context.appearance.includes("fullscreen") ? "action" : "neutral");
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", ctx_r1.close(), " ");
	}
}
function TuiDialogComponent_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "header")(1, "hgroup", 3);
		ɵɵelement(2, "h2", 4);
		ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵadvance(2);
		ɵɵproperty("id", ctx_r1.context.id)("innerHTML", ctx_r1.context.label, ɵɵsanitizeHtml);
	}
}
function TuiDialogComponent_ng_container_2_Conditional_5_Template(rf, ctx) {
	if (rf & 1) {
		const _r3 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "footer")(1, "button", 6);
		ɵɵlistener("click", function TuiDialogComponent_ng_container_2_Conditional_5_Template_button_click_1_listener() {
			ɵɵrestoreView(_r3);
			return ɵɵresetView(ɵɵnextContext(2).context.$implicit.complete());
		});
		ɵɵtext(2);
		ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext(2);
		ɵɵadvance(2);
		ɵɵtextInterpolate1(" ", ctx_r1.context.data || "OK", " ");
	}
}
function TuiDialogComponent_ng_container_2_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵelementStart(1, "header")(2, "hgroup", 3);
		ɵɵelement(3, "h2", 4)(4, "p", 5);
		ɵɵelementEnd()();
		ɵɵconditionalCreate(5, TuiDialogComponent_ng_container_2_Conditional_5_Template, 3, 1, "footer");
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const text_r4 = ctx.polymorpheusOutlet;
		const ctx_r1 = ɵɵnextContext();
		ɵɵadvance(3);
		ɵɵproperty("id", ctx_r1.context.id)("innerHTML", ctx_r1.context.label, ɵɵsanitizeHtml);
		ɵɵadvance();
		ɵɵproperty("innerHTML", text_r4, ɵɵsanitizeHtml);
		ɵɵadvance();
		ɵɵconditional(ctx_r1.context.closable || ctx_r1.context.dismissible ? 5 : -1);
	}
}
var TUI_DIALOGS_CLOSE = new InjectionToken(ngDevMode ? "TUI_DIALOGS_CLOSE" : "", { factory: () => inject(Router).events.pipe(filter((e) => e instanceof ActivationStart)) });
var TuiDialogCloseService = class TuiDialogCloseService extends Observable {
	constructor() {
		super((subscriber) => merge(this.esc$, this.mousedown$, this.watcher$).subscribe(subscriber));
		this.win = inject(WA_WINDOW);
		this.doc = inject(DOCUMENT);
		this.el = tuiInjectElement();
		this.esc$ = tuiTypedFromEvent(this.doc, "keydown").pipe(filter((event) => {
			const target = tuiGetActualTarget(event);
			return typeof CloseWatcher === "undefined" && event.key?.toLowerCase() === "escape" && !event.defaultPrevented && (this.el.contains(target) || this.isOutside(target));
		}));
		this.mousedown$ = tuiTypedFromEvent(this.doc, "mousedown").pipe(filter((event) => tuiGetViewportWidth(this.win) - event.clientX > 17 && this.shouldClose(event)), switchMap(() => tuiTypedFromEvent(this.doc, "mouseup").pipe(take(1), filter((event) => this.shouldClose(event)))));
		this.watcher$ = tuiCloseWatcher().pipe(tuiZonefull());
	}
	isOutside(target) {
		return tuiIsElement(target) && !tuiContainsOrAfter(this.el, target);
	}
	shouldClose(event) {
		const target = tuiGetActualTarget(event);
		return this.isOutside(target) || target === this.el && this.isOutsideRect(event);
	}
	isOutsideRect({ clientX, clientY }) {
		const rect = this.el.getBoundingClientRect();
		return clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom;
	}
	static {
		this.ɵfac = function TuiDialogCloseService_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDialogCloseService)();
		};
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiDialogCloseService,
			factory: TuiDialogCloseService.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogCloseService, [{ type: Injectable }], () => [], null);
})();
var REQUIRED_ERROR = /* @__PURE__ */ new Error("Required dialog was dismissed");
function toObservable(valueOrStream) {
	return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}
var TuiDialogComponent = class TuiDialogComponent {
	constructor() {
		this.close$ = new Subject();
		this.close = inject(TUI_CLOSE_WORD);
		this.icons = inject(TUI_COMMON_ICONS);
		this.context = injectContext();
		this.primitive = typeof this.context.content === "function" || Object(this.context.content) !== this.context.content;
		this.sub = merge(this.close$.pipe(switchMap(() => toObservable(this.context.closable))), inject(TuiDialogCloseService).pipe(exhaustMap(() => toObservable(this.context.dismissible).pipe(take(1)))), inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER))).pipe(filter(Boolean), takeUntilDestroyed()).subscribe(() => {
			if (this.context.required) this.context.$implicit.error(REQUIRED_ERROR);
			else this.context.$implicit.complete();
		});
	}
	static {
		this.ɵfac = function TuiDialogComponent_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDialogComponent)();
		};
	}
	static {
		this.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
			type: TuiDialogComponent,
			selectors: [["tui-dialog"]],
			hostAttrs: ["data-tui-version", "5.17.0"],
			hostVars: 6,
			hostBindings: function TuiDialogComponent_HostBindings(rf, ctx) {
				if (rf & 2) {
					ɵɵattribute("data-appearance", ctx.context.appearance)("data-size", ctx.context.size);
					ɵɵclassProp("_closable", ctx.context.closable)("tui-backdrop-hidden", ctx.context.appearance.includes("fullscreen"));
				}
			},
			features: [ɵɵProvidersFeature([TuiDialogCloseService]), ɵɵHostDirectivesFeature([TuiAnimated])],
			decls: 3,
			vars: 4,
			consts: [
				[
					"tabindex",
					"0",
					"tuiButtonX",
					"",
					3,
					"appearance"
				],
				[
					4,
					"polymorpheusOutlet",
					"polymorpheusOutletContext"
				],
				[
					"tabindex",
					"0",
					"tuiButtonX",
					"",
					3,
					"click",
					"appearance"
				],
				["tuiTitle", ""],
				[
					3,
					"id",
					"innerHTML"
				],
				[3, "innerHTML"],
				[
					"size",
					"m",
					"tuiAutoFocus",
					"",
					"tuiButton",
					"",
					"type",
					"button",
					3,
					"click"
				]
			],
			template: function TuiDialogComponent_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵconditionalCreate(0, TuiDialogComponent_Conditional_0_Template, 2, 2, "button", 0);
					ɵɵconditionalCreate(1, TuiDialogComponent_Conditional_1_Template, 3, 2, "header");
					ɵɵtemplate(2, TuiDialogComponent_ng_container_2_Template, 6, 4, "ng-container", 1);
				}
				if (rf & 2) {
					ɵɵconditional(ctx.context.closable ? 0 : -1);
					ɵɵadvance();
					ɵɵconditional(!ctx.primitive && ctx.context.label ? 1 : -1);
					ɵɵadvance();
					ɵɵproperty("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
				}
			},
			dependencies: [
				PolymorpheusOutlet,
				TuiAutoFocus,
				TuiButton,
				TuiButtonX,
				TuiTitle
			],
			styles: ["tui-dialog:where(*[data-tui-version=\"5.17.0\"]){position:relative;box-sizing:border-box;overflow-wrap:break-word;font:var(--%NS%tui-typography-body-m);background:var(--%NS%tui-background-elevation-1);box-shadow:var(--%NS%tui-shadow-popup)}tui-dialog:where(*[data-tui-version=\"5.17.0\"]):not([data-appearance~=fullscreen])._closable>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"]):not([data-appearance~=fullscreen])._closable>ng-component>header{padding-inline-end:2.5rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"]):not([data-appearance~=fullscreen])._closable>header p,tui-dialog:where(*[data-tui-version=\"5.17.0\"]):not([data-appearance~=fullscreen])._closable>ng-component>header p{margin-inline-end:-2.5rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])>ng-component>header{font:var(--%NS%tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version=\"5.17.0\"])>header [tuiTitle],tui-dialog:where(*[data-tui-version=\"5.17.0\"])>ng-component>header [tuiTitle]{font:inherit}tui-dialog:where(*[data-tui-version=\"5.17.0\"])>header p,tui-dialog:where(*[data-tui-version=\"5.17.0\"])>ng-component>header p{margin:.25rem 0 0;font:var(--%NS%tui-typography-body-m)}tui-dialog:where(*[data-tui-version=\"5.17.0\"])>header p:empty,tui-dialog:where(*[data-tui-version=\"5.17.0\"])>ng-component>header p:empty{display:none}tui-dialog:where(*[data-tui-version=\"5.17.0\"])>[tuiButtonX]{position:absolute;z-index:1;inset-block-start:1rem;inset-inline-end:1rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga]{max-inline-size:calc(100vw - 5rem);margin:2.5rem;padding:1.75rem;border-radius:1.5rem;--%NS%tui-from: translateY(2rem)}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga].tui-enter,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]{inline-size:25rem;padding:1.5rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>ng-component>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header{font:var(--%NS%tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.25rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>footer,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>ng-component>footer{margin-block-start:1.25rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m],tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]{inline-size:37.5rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>ng-component>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>ng-component>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header{font:var(--%NS%tui-typography-heading-h4)}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.5rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]{inline-size:50rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga]>footer,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga]>ng-component>footer{display:flex;justify-content:flex-end;flex-wrap:wrap-reverse;gap:.75rem;margin-block-start:2rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]{display:flex;flex-direction:column;block-size:100%;inline-size:100%;padding:env(safe-area-inset-top) max(calc(50vw - var(--%NS%tui-width) / 2),1rem) max(2rem,env(safe-area-inset-bottom));background:var(--%NS%tui-background-base);box-shadow:none;--%NS%tui-width: min(45rem, calc(100vw - 2rem) );--%NS%tui-from: translateY(2rem)}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size].tui-enter,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{position:sticky;inset-block-start:env(safe-area-inset-top);block-size:4rem;inline-size:auto;align-self:flex-end;margin-block-end:2rem;border-radius:0!important;font:var(--%NS%tui-typography-body-l)!important;border-image:conic-gradient(var(--%NS%tui-background-base) 0 0) fill 0 / 0 / env(safe-area-inset-top) 100vw 0}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]:before{display:none}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size].tui-app-bar>[tuiButtonX]{display:none}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]:not(._closable):not(.tui-app-bar):before{content:\"\";block-size:1.5rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{position:sticky;z-index:1;inset-block-start:0;order:-1;border-inline-end:calc(50vw - var(--%NS%tui-width) / 2) solid transparent;border-inline-start:calc(50vw - var(--%NS%tui-width) / 2) solid transparent;margin:0 calc(var(--%NS%tui-width) / 2 - 50vw) 2rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{font:var(--%NS%tui-typography-heading-h3);margin-block-end:2rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>footer,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>footer{display:flex;gap:.5rem .75rem;padding:2rem calc(50vw - var(--%NS%tui-width) / 2);margin:0 calc(var(--%NS%tui-width) / 2 - 50vw) calc(-2rem - env(safe-area-inset-top))}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>footer:before,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{inset-inline-start:0;inset-inline-end:0}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>footer,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>footer{flex-direction:row;background:color-mix(in hsl,var(--%NS%tui-background-base) 80%,transparent);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem)}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>footer:before,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{display:none}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>footer>a,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>footer>a{inline-size:auto}tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]{padding-block-end:max(1rem,env(safe-area-inset-bottom));--%NS%tui-from: translateY(4rem)}tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{align-self:flex-start;block-size:3.5rem;margin-block-end:1rem}tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{margin:calc(-1*env(safe-area-inset-top)) -1rem 1rem;padding-block-start:env(safe-area-inset-top);box-sizing:content-box}tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>header,tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{margin:-.25rem 0 1.5rem}tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>footer,tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>footer{padding:0 1rem max(1rem,env(safe-area-inset-bottom));margin:1.5rem -1rem calc(-1*max(1rem,env(safe-area-inset-bottom)))}[data-platform=ios] tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>[tuiButtonX][tuiButtonX]{block-size:2.75rem}\n"],
			encapsulation: 2,
			changeDetection: 1
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogComponent, [{
		type: Component,
		args: [{
			selector: "tui-dialog",
			imports: [
				PolymorpheusOutlet,
				TuiAutoFocus,
				TuiButton,
				TuiButtonX,
				TuiTitle
			],
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.Default,
			providers: [TuiDialogCloseService],
			hostDirectives: [TuiAnimated],
			host: {
				"data-tui-version": "5.17.0",
				"[attr.data-appearance]": "context.appearance",
				"[attr.data-size]": "context.size",
				"[class._closable]": "context.closable",
				"[class.tui-backdrop-hidden]": "context.appearance.includes(\"fullscreen\")"
			},
			template: "@if (context.closable) {\n    <button\n        tabindex=\"0\"\n        tuiButtonX\n        [appearance]=\"context.appearance.includes('fullscreen') ? 'action' : 'neutral'\"\n        (click)=\"close$.next()\"\n    >\n        {{ close() }}\n    </button>\n}\n\n@if (!primitive && context.label) {\n    <header>\n        <hgroup tuiTitle>\n            <h2\n                [id]=\"context.id\"\n                [innerHTML]=\"context.label\"\n            ></h2>\n        </hgroup>\n    </header>\n}\n\n<ng-container *polymorpheusOutlet=\"context.content as text; context: context\">\n    <header>\n        <hgroup tuiTitle>\n            <h2\n                [id]=\"context.id\"\n                [innerHTML]=\"context.label\"\n            ></h2>\n            <p [innerHTML]=\"text\"></p>\n        </hgroup>\n    </header>\n    @if (context.closable || context.dismissible) {\n        <footer>\n            <button\n                size=\"m\"\n                tuiAutoFocus\n                tuiButton\n                type=\"button\"\n                (click)=\"context.$implicit.complete()\"\n            >\n                {{ context.data || 'OK' }}\n            </button>\n        </footer>\n    }\n</ng-container>\n",
			styles: ["tui-dialog:where(*[data-tui-version=\"5.17.0\"]){position:relative;box-sizing:border-box;overflow-wrap:break-word;font:var(--tui-typography-body-m);background:var(--tui-background-elevation-1);box-shadow:var(--tui-shadow-popup)}tui-dialog:where(*[data-tui-version=\"5.17.0\"]):not([data-appearance~=fullscreen])._closable>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"]):not([data-appearance~=fullscreen])._closable>ng-component>header{padding-inline-end:2.5rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"]):not([data-appearance~=fullscreen])._closable>header p,tui-dialog:where(*[data-tui-version=\"5.17.0\"]):not([data-appearance~=fullscreen])._closable>ng-component>header p{margin-inline-end:-2.5rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])>ng-component>header{font:var(--tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version=\"5.17.0\"])>header [tuiTitle],tui-dialog:where(*[data-tui-version=\"5.17.0\"])>ng-component>header [tuiTitle]{font:inherit}tui-dialog:where(*[data-tui-version=\"5.17.0\"])>header p,tui-dialog:where(*[data-tui-version=\"5.17.0\"])>ng-component>header p{margin:.25rem 0 0;font:var(--tui-typography-body-m)}tui-dialog:where(*[data-tui-version=\"5.17.0\"])>header p:empty,tui-dialog:where(*[data-tui-version=\"5.17.0\"])>ng-component>header p:empty{display:none}tui-dialog:where(*[data-tui-version=\"5.17.0\"])>[tuiButtonX]{position:absolute;z-index:1;inset-block-start:1rem;inset-inline-end:1rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga]{max-inline-size:calc(100vw - 5rem);margin:2.5rem;padding:1.75rem;border-radius:1.5rem;--tui-from: translateY(2rem)}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga].tui-enter,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]{inline-size:25rem;padding:1.5rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>ng-component>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.25rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>footer,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=s]>ng-component>footer{margin-block-start:1.25rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m],tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]{inline-size:37.5rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>ng-component>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>ng-component>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h4)}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.5rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga][data-size=l]{inline-size:50rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga]>footer,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=taiga]>ng-component>footer{display:flex;justify-content:flex-end;flex-wrap:wrap-reverse;gap:.75rem;margin-block-start:2rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]{display:flex;flex-direction:column;block-size:100%;inline-size:100%;padding:env(safe-area-inset-top) max(calc(50vw - var(--tui-width) / 2),1rem) max(2rem,env(safe-area-inset-bottom));background:var(--tui-background-base);box-shadow:none;--tui-width: min(45rem, calc(100vw - 2rem) );--tui-from: translateY(2rem)}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size].tui-enter,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{position:sticky;inset-block-start:env(safe-area-inset-top);block-size:4rem;inline-size:auto;align-self:flex-end;margin-block-end:2rem;border-radius:0!important;font:var(--tui-typography-body-l)!important;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0 / 0 / env(safe-area-inset-top) 100vw 0}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]:before{display:none}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size].tui-app-bar>[tuiButtonX]{display:none}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]:not(._closable):not(.tui-app-bar):before{content:\"\";block-size:1.5rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{position:sticky;z-index:1;inset-block-start:0;order:-1;border-inline-end:calc(50vw - var(--tui-width) / 2) solid transparent;border-inline-start:calc(50vw - var(--tui-width) / 2) solid transparent;margin:0 calc(var(--tui-width) / 2 - 50vw) 2rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h3);margin-block-end:2rem}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>footer,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>footer{display:flex;gap:.5rem .75rem;padding:2rem calc(50vw - var(--tui-width) / 2);margin:0 calc(var(--tui-width) / 2 - 50vw) calc(-2rem - env(safe-area-inset-top))}tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>footer:before,tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{inset-inline-start:0;inset-inline-end:0}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>footer,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>footer{flex-direction:row;background:color-mix(in hsl,var(--tui-background-base) 80%,transparent);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem)}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>footer:before,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{display:none}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>footer>a,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>footer>a{inline-size:auto}tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]{padding-block-end:max(1rem,env(safe-area-inset-bottom));--tui-from: translateY(4rem)}tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{align-self:flex-start;block-size:3.5rem;margin-block-end:1rem}tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{margin:calc(-1*env(safe-area-inset-top)) -1rem 1rem;padding-block-start:env(safe-area-inset-top);box-sizing:content-box}tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>header,tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{margin:-.25rem 0 1.5rem}tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>footer,tui-root._mobile tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>ng-component>footer{padding:0 1rem max(1rem,env(safe-area-inset-bottom));margin:1.5rem -1rem calc(-1*max(1rem,env(safe-area-inset-bottom)))}[data-platform=ios] tui-dialog:where(*[data-tui-version=\"5.17.0\"])[data-appearance~=fullscreen][data-size]>[tuiButtonX][tuiButtonX]{block-size:2.75rem}\n"]
		}]
	}], null, null);
})();
var [TUI_DIALOG_OPTIONS, tuiDialogOptionsProvider] = tuiCreateOptions({
	appearance: "taiga",
	size: "m",
	required: false,
	closable: true,
	dismissible: true,
	label: "",
	data: void 0
});
var TuiDialogService = class TuiDialogService extends TuiModalService {
	constructor() {
		super(...arguments);
		this.options = inject(TUI_DIALOG_OPTIONS);
		this.content = TuiDialogComponent;
	}
	static {
		this.ɵfac = /* @__PURE__ */ (() => {
			let ɵTuiDialogService_BaseFactory;
			return function TuiDialogService_Factory(__ngFactoryType__) {
				return (ɵTuiDialogService_BaseFactory || (ɵTuiDialogService_BaseFactory = ɵɵgetInheritedFactory(TuiDialogService)))(__ngFactoryType__ || TuiDialogService);
			};
		})();
	}
	static {
		this.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
			token: TuiDialogService,
			factory: TuiDialogService.ɵfac,
			providedIn: "root"
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogService, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var TuiDialog = class TuiDialog {
	constructor() {
		this.tuiDialogOptions = input({});
	}
	static {
		this.ɵfac = function TuiDialog_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiDialog)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiDialog,
			selectors: [[
				"ng-template",
				"tuiDialog",
				""
			]],
			inputs: { tuiDialogOptions: [1, "tuiDialogOptions"] },
			features: [ɵɵProvidersFeature([tuiAsPortal(TuiDialogService)]), ɵɵHostDirectivesFeature([{
				directive: TuiPortalDirective,
				inputs: [
					"options",
					"tuiDialogOptions",
					"open",
					"tuiDialog"
				],
				outputs: ["openChange", "tuiDialogChange"]
			}])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialog, [{
		type: Directive,
		args: [{
			selector: "ng-template[tuiDialog]",
			providers: [tuiAsPortal(TuiDialogService)],
			hostDirectives: [{
				directive: TuiPortalDirective,
				inputs: ["options: tuiDialogOptions", "open: tuiDialog"],
				outputs: ["openChange: tuiDialogChange"]
			}]
		}]
	}], null, null);
})();
function tuiDialog(component, { injector, ...options } = {}) {
	if (!injector) {
		assertInInjectionContext(tuiDialog);
		injector = inject(INJECTOR$1);
	}
	const dialogService = injector.get(TuiDialogService);
	return (data) => dialogService.open(new PolymorpheusComponent(component, injector), {
		...options,
		data
	});
}
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-close.mjs
/**
* Emits on Esc/CloseWatcher and on clicks outside the host, tracked as
* mousedown/mouseup pairs → drag inside + release outside does not emit.
* Portals stacked after the host count as inside, clicks on pseudo-element
* overlays are detected by coordinates against the host rect.
*/
var TuiClose = class TuiClose {
	constructor() {
		this.tuiClose = outputFromObservable(inject(TuiDialogCloseService));
	}
	static {
		this.ɵfac = function TuiClose_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || TuiClose)();
		};
	}
	static {
		this.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
			type: TuiClose,
			selectors: [[
				"",
				"tuiClose",
				""
			]],
			outputs: { tuiClose: "tuiClose" },
			features: [ɵɵProvidersFeature([TuiDialogCloseService])]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiClose, [{
		type: Directive,
		args: [{
			selector: "[tuiClose]",
			providers: [TuiDialogCloseService]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals.mjs
/**
* Generated bundle index. Do not edit.
*/
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils.mjs
/**
* Generated bundle index. Do not edit.
*/
//#endregion
//#region node_modules/@taiga-ui/core/fesm2022/taiga-ui-core.mjs
/**
* Generated bundle index. Do not edit.
*/
//#endregion
export { AbstractTuiCalendar, SCROLL_REF_SELECTOR, TUI_ANIMATIONS_DEFAULT_DURATION, TUI_ANIMATIONS_SPEED, TUI_APPEARANCE_DEFAULT_OPTIONS, TUI_APPEARANCE_OPTIONS, TUI_ASSETS_PATH, TUI_AUXILIARY, TUI_BACK_WORD, TUI_BREAKPOINT, TUI_BUTTON_DEFAULT_OPTIONS, TUI_BUTTON_OPTIONS, TUI_BUTTON_X_OPTIONS, TUI_CALENDAR_DEFAULT_OPTIONS, TUI_CALENDAR_OPTIONS, TUI_CALENDAR_SHEET_DEFAULT_OPTIONS, TUI_CALENDAR_SHEET_OPTIONS, TUI_CDR, TUI_CELL_OPTIONS, TUI_CHECKBOX_OPTIONS, TUI_CLEAR_WORD, TUI_CLOSE_WORD, TUI_COMMON_ICONS, TUI_DARK_MODE, TUI_DARK_MODE_DEFAULT_KEY, TUI_DARK_MODE_KEY, TUI_DATA_LIST_HOST, TUI_DATA_LIST_SIZE, TUI_DATE_FORMAT, TUI_DEFAULT_DATE_FORMAT, TUI_DEFAULT_ERROR_MESSAGE, TUI_DEFAULT_ITEMS_HANDLERS, TUI_DEFAULT_NUMBER_FORMAT, TUI_DEFAULT_SCROLLBAR_OPTIONS, TUI_DIALOGS_CLOSE, TUI_DIALOG_OPTIONS, TUI_DROPDOWN_COMPONENT, TUI_DROPDOWN_CONTEXT, TUI_DROPDOWN_DEFAULT_OPTIONS, TUI_DROPDOWN_HOST, TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS, TUI_DROPDOWN_HOVER_OPTIONS, TUI_DROPDOWN_OPTIONS, TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS, TUI_FILTER_BY_INPUT_OPTIONS, TUI_FLOATING_PRECISION, TUI_FONT_OFFSET, TUI_GROUP_DEFAULT_OPTIONS, TUI_GROUP_OPTIONS, TUI_HINT_COMPONENT, TUI_HINT_DEFAULT_OPTIONS, TUI_HINT_DIRECTIONS, TUI_HINT_OPTIONS, TUI_ICON_END, TUI_ICON_REGISTRY, TUI_ICON_RESOLVER, TUI_ICON_START, TUI_ITEMS_HANDLERS, TUI_LINK_OPTIONS, TUI_LIQUID_GLASS, TUI_LOADER_DEFAULT_OPTIONS, TUI_LOADER_OPTIONS, TUI_MEDIA, TUI_MONTHS, TUI_NOTHING_FOUND_MESSAGE, TUI_NOTIFICATION_CONCURRENCY, TUI_NOTIFICATION_DEFAULT_OPTIONS, TUI_NOTIFICATION_OPTIONS, TUI_NUMBER_FORMAT, TUI_OPTIONS, TUI_OPTION_CONTENT, TUI_RADIO_OPTIONS, TUI_REDUCED_MOTION, TUI_SCROLLABLE, TUI_SCROLLBAR_OPTIONS, TUI_SCROLL_INTO_VIEW, TUI_SCROLL_REF, TUI_SELECTION_STREAM, TUI_SHORT_WEEK_DAYS, TUI_SPIN_TEXTS, TUI_TEXTFIELD_ACCESSOR, TUI_TEXTFIELD_CONTENT, TUI_TEXTFIELD_ITEM, TUI_TEXTFIELD_OPTIONS, TUI_TEXTFIELD_VALUE, TUI_VALIDATION_ERRORS, TUI_VIEWPORT, TuiAccessor, TuiAlertDirective, TuiAlertService, TuiAppearance, TuiButton, TuiButtonX, TuiCalendar, TuiCalendarSheet, TuiCalendarSheetPipe, TuiCalendarSpin, TuiCalendarYear, TuiCarousel, TuiCarouselComponent, TuiCarouselDirective, TuiCell, TuiCellResponsive, TuiCellStretch, TuiCheckbox, TuiClose, TuiDataList, TuiDataListComponent, TuiDateFormat, TuiDialog, TuiDialogCloseService, TuiDialogComponent, TuiDialogService, TuiDriver, TuiDriverDirective, TuiDropdown, TuiDropdownA11y, TuiDropdownAnchor, TuiDropdownAuto, TuiDropdownClose, TuiDropdownComponent, TuiDropdownContent, TuiDropdownContext, TuiDropdownDirective, TuiDropdownDriver, TuiDropdownDriverDirective, TuiDropdownFixed, TuiDropdownHover, TuiDropdownManual, TuiDropdownOpen, TuiDropdownOptionsDirective, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection, TuiError, TuiErrorComponent, TuiErrorDirective, TuiErrorPipe, TuiExpand, TuiFilterByInputPipe, TuiFormatNumberPipe, TuiGroup, TuiHint, TuiHintComponent, TuiHintDescribe, TuiHintDirective, TuiHintDriver, TuiHintHost, TuiHintHover, TuiHintManual, TuiHintOverflow, TuiHintPointer, TuiHintPosition, TuiHintUnstyled, TuiHintUnstyledComponent, TuiIcon, TuiIconPipe, TuiIcons, TuiInput, TuiInputDirective, TuiItemsHandlersDirective, TuiItemsHandlersValidator, TuiLabel, TuiLink, TuiLoader, TuiModalComponent, TuiModalService, TuiNotification, TuiNotificationComponent, TuiNotificationDirective, TuiNotificationService, TuiNotificationTemplate, TuiNumberFormat, TuiOptGroup, TuiOption, TuiOptionWithContent, TuiOptionWithValue, TuiOrderWeekDaysPipe, TuiPopup, TuiPopupService, TuiPopups, TuiPositionAccessor, TuiPositionService, TuiRadio, TuiRadioComponent, TuiRadioDirective, TuiRectAccessor, TuiRoot, TuiScrollControls, TuiScrollControlsService, TuiScrollIntoView, TuiScrollRef, TuiScrollable, TuiScrollbar, TuiScrollbarDirective, TuiScrollbarPosition, TuiScrollbarService, TuiSelectLike, TuiSlider, TuiSliderComponent, TuiSliderKeySteps, TuiSliderKeyStepsBase, TuiSliderReadonly, TuiSliderThumbLabel, TuiSpinButton, TuiTextfield, TuiTextfieldComponent, TuiTextfieldContent, TuiTextfieldItemComponent, TuiTextfieldMultiComponent, TuiTextfieldOptionsDirective, TuiTitle, TuiVehicle, TuiVisualViewportService, TuiWithAppearance, TuiWithDropdownOpen, TuiWithIcons, TuiWithInput, TuiWithItemsHandlers, TuiWithNativePicker, TuiWithOptionContent, provideTaiga, tuiAppearance, tuiAppearanceFocus, tuiAppearanceMode, tuiAppearanceOptionsProvider, tuiAppearanceState, tuiAsAuxiliary, tuiAsDataListHost, tuiAsDriver, tuiAsOptionContent, tuiAsPositionAccessor, tuiAsRectAccessor, tuiAsTextfieldAccessor, tuiAsTextfieldContent, tuiAsVehicle, tuiAsViewport, tuiAssetsPathProvider, tuiButtonOptionsProvider, tuiButtonXOptionsProvider, tuiCalendarOptionsProvider, tuiCalendarSheetOptionsProvider, tuiCellOptionsProvider, tuiCheckFixedPosition, tuiCheckboxOptionsProvider, tuiCommonIconsProvider, tuiCreateKeyStepsTransformer, tuiDateFormatProvider, tuiDialog, tuiDialogOptionsProvider, tuiDropdown, tuiDropdownEnabled, tuiDropdownHoverOptionsProvider, tuiDropdownOptionsProvider, tuiEnableFontScaling, tuiFallbackAccessor, tuiFilterByInputOptionsProvider, tuiFormatNumber, tuiGetDuration, tuiGetFractionPartPadded, tuiGetHintProviders, tuiGetIconMode, tuiGetViewportHeight, tuiGetViewportWidth, tuiGetWordRange, tuiGroupOptionsProvider, tuiHintOptionsProvider, tuiIconEnd, tuiIconResolverProvider, tuiIconStart, tuiIconsProvider, tuiInjectAuxiliary, tuiInjectDataListSize, tuiInjectIconResolver, tuiIsEditingKey, tuiIsObscured, tuiItemsHandlersProvider, tuiKeyStepValueToPercentage, tuiLinkOptionsProvider, tuiLoaderOptionsProvider, tuiNotificationOptionsProvider, tuiNumberFormatProvider, tuiNumberToStringWithoutExp, tuiOverrideOptions, tuiPercentageToKeyStepValue, tuiPositionAccessorFor, tuiProvideAccessor, tuiRadioOptionsProvider, tuiRectAccessorFor, tuiScrollbarOptionsProvider, tuiSizeBigger, tuiTextfieldOptionsProvider, tuiValidationErrorsProvider };
