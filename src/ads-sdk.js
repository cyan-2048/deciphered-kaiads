function _toConsumableArray(r) {
	return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
	throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(r) {
	if (("undefined" != typeof Symbol && null != r[Symbol.iterator]) || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
	if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _slicedToArray(r, e) {
	return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, e) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray(r, e);
		var t = Object.prototype.toString.call(r).slice(8, -1);
		return (
			"Object" === t && r.constructor && (t = r.constructor.name),
			"Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, e) : undefined
		);
	}
}
function _arrayLikeToArray(r, e) {
	(null == e || e > r.length) && (e = r.length);
	for (var t = 0, o = new Array(e); t < e; t++) o[t] = r[t];
	return o;
}
function _iterableToArrayLimit(r, e) {
	var t = null == r ? null : ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
	if (null != t) {
		var o,
			n,
			a = [],
			i = !0,
			l = !1;
		try {
			for (t = t.call(r); !(i = (o = t.next()).done) && (a.push(o.value), !e || a.length !== e); i = !0);
		} catch (r) {
			(l = !0), (n = r);
		} finally {
			try {
				i || null == t.return || t.return();
			} finally {
				if (l) throw n;
			}
		}
		return a;
	}
}
function _arrayWithHoles(r) {
	if (Array.isArray(r)) return r;
}
function _typeof(r) {
	return (_typeof =
		"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
			? function (r) {
					return typeof r;
			  }
			: function (r) {
					return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
			  })(r);
}
function _defineProperties(r, e) {
	for (var t = 0; t < e.length; t++) {
		var o = e[t];
		(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
	}
}
function _createClass(r, e, t) {
	return e && _defineProperties(r.prototype, e), t && _defineProperties(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function _classCallCheck(r, e) {
	if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _inherits(r, e) {
	if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
	(r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } })),
		Object.defineProperty(r, "prototype", { writable: !1 }),
		e && _setPrototypeOf(r, e);
}
function _createSuper(r) {
	var e = _isNativeReflectConstruct();
	return function () {
		var t,
			o = _getPrototypeOf(r);
		if (e) {
			var n = _getPrototypeOf(this).constructor;
			t = Reflect.construct(o, arguments, n);
		} else t = o.apply(this, arguments);
		return _possibleConstructorReturn(this, t);
	};
}
function _possibleConstructorReturn(r, e) {
	if (e && ("object" === _typeof(e) || "function" == typeof e)) return e;
	if (undefined !== e) throw new TypeError("Derived constructors may only return object or undefined");
	return _assertThisInitialized(r);
}
function _assertThisInitialized(r) {
	if (undefined === r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return r;
}

function _wrapNativeSuper(func) {
	var map = typeof Map === "function" ? new Map() : undefined;
	return (
		(_wrapNativeSuper = function (func) {
			if (func === null || !_isNativeFunction(func)) return func;
			if (typeof func !== "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof map !== "undefined") {
				if (map.has(func)) return map.get(func);
				map.set(func, wrapped);
			}
			function wrapped() {
				return _construct(func, arguments, _getPrototypeOf(this).constructor);
			}

			wrapped.prototype = Object.create(func.prototype, {
				constructor: { value: wrapped, enumerable: false, writable: true, configurable: true },
			});

			return _setPrototypeOf(wrapped, func);
		}),
		_wrapNativeSuper(func)
	);
}

var _construct = Reflect.construct;

function _isNativeReflectConstruct() {
	if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	if (Reflect.construct.sham) return false;
	if (typeof Proxy === "function") return true;
	try {
		return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), true;
	} catch (e) {
		return false;
	}
}

function _isNativeFunction(func) {
	return Function.toString.call(func).indexOf("[native code]") !== -1;
}

var _setPrototypeOf = Object.setPrototypeOf;

var _getPrototypeOf = Object.getPrototypeOf;

var sdkVersion = "1.5.8",
	ErrorCodes = {
		DOCBODY_NOT_READY: 1,
		ONREADY_FUNC_MISSING: 2,
		AD_DIMEN_TOO_SMALL: 3,
		AD_IFRAME_GONE: 4,
		AD_REQ_TIMED_OUT: 5,
		SERVER_SAID_NO_AD: 6,
		FREQ_CAPPING: 7,
		MISSING_W_H: 8,
		BAD_SERVER_RESPONSE: 9,
		INVOKE_API_FAILED: 11,
		CANNOT_PROCESS_RESPONSE: 13,
		NO_SERVER_RESPONSE: 14,
		INVALID_TEST_PARAM: 15,
		DISPLAY_CALLED_MULTIPLE_TIMES: 16,
		CANNOT_FETCH_SETTINGS: 17,
		UNKNOWN_API_CALLED: 18,
		SDK_CANNOT_LOAD: 19,
		UNSUPPORTED_SDK_VER: 20,
		BLACKLISTED: 21,
		CERT_STATE_ERR: 22,
	},
	t = 100,
	KaiAdError = class KaiAdError extends Error {
		constructor(errorCode) {
			super(errorCode);
			this.code = errorCode;
		}
	},
	manifestFromDOM = document.querySelector('link[rel="manifest"]'),
	webmanifestURL = window.location.origin + "/manifest.webmanifest",
	isKaiOSv3 = /kaios\/3\./gi.test(window.navigator.userAgent) && !window.location.hostname.endsWith(".localhost") && !navigator.mozApps,
	isKaiOSv2 = /kaios/gi.test(window.navigator.userAgent) && window.location.hostname.endsWith(".localhost"),
	certificateIsValid = false,
	checkCert = function () {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://127.0.0.1:8081/ca");
		xhr.onload = function () {
			// returns ["2.1","2.1","2.1",".1",null]
			var versionNumber = xhr.responseText.match(/((\d+(\.\d+)?)|(\.\d+))/);
			if (versionNumber !== null && typeof parseFloat(versionNumber[0]) === "number") {
				certificateIsValid = parseFloat(versionNumber[0]) >= 2;
			} else {
				certificateIsValid = false;
			}
		};
		xhr.onerror = function (n) {
			certificateIsValid = false;
			throw new KaiAdError(ErrorCodes.CERT_STATE_ERR);
		};
		xhr.send();
	};

if (navigator.mozApps) {
	var selfDOMApp = new Promise(function (resolve) {
		navigator.mozApps.getSelf().onsuccess = function (evt) {
			resolve(evt.target.result);
		};
	});

	selfDOMApp.then(function (domApp) {
		if (domApp.manifest.type === "web" && domApp.manifestURL.startsWith("https://") && !domApp.manifestURL.startsWith("https://api.kaiostech.com/")) {
			certificateIsValid = false;
		} else checkCert();
	});
} else {
	certificateIsValid = true;
}

var JSONRecursiveReviver = function () {
		var e = new WeakSet();
		return function (key, value) {
			if (_typeof(value) === "object" && value !== null) {
				if (e.has(value)) return;
				e.add(value);
			}
			return value;
		};
	},
	pascalToDatasetAttriute = function (name) {
		return name.replace(/[A-Z]/g, function (n) {
			return "-".concat(n.toLowerCase());
		});
	},
	toDatasetAttribute = function (e, t) {
		var o = "data-".concat(pascalToDatasetAttriute(e));
		return document.querySelector("[".concat(o, '="').concat(t, '"]'));
	},
	sspOrigin = "https://ssp.kaiads.com",
	sspFrameUrl = sspOrigin + "/static/v3/frame.html?",
	// WeakMap<container, { destroy: Function }>
	frameConfigs = new WeakMap(),
	defaultTimeout = 6e4,
	// seems to only have one attribute vfsAdId
	g = {},
	getBody = () => document.body,
	hash = function () {
		var e = crypto.getRandomValues(new Uint16Array(32)),
			t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
			o = t.length;
		return [].map
			.call(e, function (n) {
				return t[n % o];
			})
			.join("");
	},
	serialID = hash(),
	y = { LOADING: 1, READY: 2, REJECTED: 3 };

function appendStyleSheetText(n) {
	var e = document.createElement("style");
	e.textContent = n;
	document.head.appendChild(e);
}
appendStyleSheetText(
	'\n     .kaiads-options-overlay {\n       position: fixed;\n       top: 0;\n       bottom: 0;\n       left: 0;\n       right: 0;\n       background-color: rgba(0, 0, 0, .9);\n       z-index: 99999;\n     }\n     .kaiads-options-container {\n       font-family: "Open Sans";\n       background-color: white;\n       position: fixed;\n       left: 0;\n       right: 0;\n       bottom: 0;\n       z-index: 99999;\n       margin-bottom: 2rem;\n     }\n     .kaiads-options-container .options-header {\n       background: #ccc;\n       text-align: center;\n       padding: 5px;\n     }\n     .kaiads-options-container .options-footer {\n       background: #ccc;\n       text-align: center;\n       padding: 5px;\n       font-weight: 600;\n     }\n     .kaiads-options-container .option {\n       display: block;\n       padding: 0.5rem;\n       cursor: none;\n     }\n     .kaiads-options-container .option:focus {\n       background-color: #8000ff;\n       color: white;\n       border: none;\n     }\n     .kaiads-options-overlay-touch {\n       width: 100%;\n       height: 100%;\n       background-color: #e9e9f2;\n       z-index: 1000;\n       position: fixed;\n       top: 0;\n       left: 0;\n       display: flex;\n       justify-content: center;\n       align-items: center;\n       -moz-user-select: none;\n     }\n     .kaiads-options-overlay-touch:focus {\n       border: none;\n       outline: none;\n     }\n     .kaiads-options-overlay-touch .popup {\n       width: 400px;\n       display: flex;\n       flex-direction: column;\n       justify-content: center;\n       align-items: center;\n     }\n     .kaiads-options-overlay-touch .title {\n       font-size: 30px;\n       font-weight: bold;\n       width: 400px;\n       min-height: 32px;\n       padding: 0 27px;\n       margin-bottom: 16px;\n       box-sizing: border-box;\n       color: #000000;\n       text-align: center;\n       word-wrap: break-word;\n     }\n     .kaiads-options-overlay-touch .wrapper {\n       width: 400px;\n       overflow: hidden;\n       padding: 13px 0;\n       border-radius: 40px;\n       border: solid 2px #000;\n       background-color: #e9e9f2;\n       position: relative;\n     }\n     .kaiads-options-overlay-touch .options {\n       max-height: 400px;\n       /* set width to 407 so that the total width still stay in 400px\n           except hidden vertical scroll bar height(7px) */\n       width: 407px;\n       padding-right: 7px;\n       padding-left: 0;\n       overflow-y: auto;\n       overflow-x: hidden;\n       box-sizing: border-box;\n     }\n     .kaiads-options-overlay-touch .option {\n       font-family: OpenSans;\n       font-size: 22px;\n       font-weight: 600;\n       color: #000;\n       display: flex;\n       width: 100%;\n       min-height: 80px;\n       align-items: center;\n       padding-left: 27px;\n       padding-right: unset;\n       box-sizing: border-box;\n     }\n     @media (prefers-color-scheme: dark) {\n       .kaiads-options-overlay-touch {\n         background-color: #000;\n       }\n       .kaiads-options-overlay-touch .title {\n         color: #e9e9f2;\n       }\n       .kaiads-options-overlay-touch .wrapper {\n         background-color: #000;\n         border: solid 2px #b2b2c2;\n       }\n       .kaiads-options-overlay-touch .option {\n         color: #e9e9f2;\n       }\n     }\n     @media (prefers-color-scheme: light) {\n       .kaiads-options-overlay-touch {\n         background-color: #e9e9f2; \n       }\n       .kaiads-options-overlay-touch .title {\n         color: #000;\n       }\n       .kaiads-options-overlay-touch .wrapper {\n         background-color: #e9e9f2;\n         border: solid 2px #000;\n       }\n       .kaiads-options-overlay-touch .option {\n         color: #000;\n       }\n     }\n   '
);

var createFrameConfig = function (adConfig) {
		var config = {};
		config.adConfig = adConfig;
		config.id = hash();
		config.ignoreKeys = [];
		config.listeners = {};
		config.state = null;

		function emit(n) {
			if (config.state === n) return;
			n === y.LOADING && typeof adConfig.onloadstart === "function" && adConfig.onloadstart();
			config.state === y.LOADING && n !== y.LOADING && typeof adConfig.onloadend === "function" && adConfig.onloadend();
			config.state = n;
		}

		config.reject = function (n) {
			emit(y.REJECTED);
			var errorCb = config.adConfig.onerror || console.error;
			errorCb(n);
			config.destroy();
		};
		config.destroy = function () {
			var n = toDatasetAttribute(serialID, config.id);
			n && n.remove();
			g.vfsAdId === config.id && (g.vfsAdId = null);
			clearTimeout(config.timeout);
		};
		config.ready = function () {
			var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			clearTimeout(config.timeout);
			emit(y.READY);
			config.adConfig.onready(
				Object.assign({}, n, {
					call: function n(e, t) {
						config.post(e, t);
					},
					on: function n(e, t) {
						!config.listeners[e] && (config.listeners[e] = []);
						config.listeners[e].push(t);
					},
				})
			);
		};
		config.post = function (event) {
			if (!config.frame || !config.frame.contentWindow) config.reject(ErrorCodes.AD_IFRAME_GONE);
			else {
				var t = {};
				t.id = config.id;
				t.event = event;
				for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
				t.args = i;
				config.frame.contentWindow.postMessage(JSON.stringify(t, JSONRecursiveReviver()), sspOrigin);
			}
		};
		config.timeout = (function () {
			return (
				(config.adConfig.timeout = config.adConfig.timeout || defaultTimeout),
				setTimeout(function () {
					config.reject(ErrorCodes.AD_REQ_TIMED_OUT);
				}, config.adConfig.timeout)
			);
		})();

		config.container = (function () {
			var n = config.adConfig.container;
			if (!n) {
				n = getBody();
				config.isFullscreen = config.adConfig.isFullscreen = 1;
			}
			return n;
		})();

		config.frame = (function () {
			var n = encodeURIComponent(document.location.origin),
				e = "".concat(sspFrameUrl, "i=").concat(config.id, "&s=").concat(serialID, "&o=").concat(n),
				t = document.createElement("iframe");
			t.setAttribute("src", e);
			var r = document.createElement("div");

			r.dataset[serialID] = config.id;
			r.style.position = "absolute";
			r.style.left = "-1000%";
			r.style.top = "0px";
			config.wrap = r;
			!config.isFullscreen &&
				(r.addEventListener("focus", function (n) {
					return config.post("focus");
				}),
				r.addEventListener("blur", function (n) {
					return config.post("blur");
				}));
			r.appendChild(t), config.container.appendChild(r);

			return t;
		})();
		emit(y.LOADING);

		return config;
	},
	themeColorWorkaround = function (_, cb) {
		var themeColors = Array.from(document.head.querySelectorAll('meta[name="theme-color"]')),
			remove = document.head.removeChild.bind(document.head),
			append = document.head.appendChild.bind(document.head);

		themeColors.forEach(remove);

		var s = document.createElement("meta");
		s.setAttribute("name", "theme-color");
		s.setAttribute("content", "transparent");
		document.head.appendChild(s);
		cb();
		document.head.removeChild(s);
		themeColors.forEach(append);
	},
	C = function (config, t, o, r, i) {
		var a = document.createElement("div");
		a.classList.add("kaiads-options-overlay");
		a.setAttribute("tabindex", -1);

		var s = document.createElement("div");
		s.classList.add("kaiads-options-container");
		s.setAttribute("tabindex", -1);

		var c = document.createElement("div");
		c.innerText = r.reportThisAdAs;
		c.classList.add("options-header");
		s.appendChild(c);

		var d = document.createElement("div");
		i.forEach(function (n, e) {
			var t = _slicedToArray(n, 2),
				o = t[0],
				r = t[1],
				i = document.createElement("a");
			i.setAttribute("tabindex", e), i.classList.add("option"), (i.innerText = o), (i.dataset.reportReason = r), d.appendChild(i), i.addEventListener("mouseover", l);
		}),
			d.addEventListener("click", p),
			s.addEventListener("keydown", f),
			a.addEventListener("keydown", f),
			document.body.appendChild(a),
			s.appendChild(d),
			document.body.appendChild(s),
			d.children.item(0).focus();
		var u = document.createElement("div");
		(u.innerText = r.select.toUpperCase()), u.classList.add("options-footer"), s.appendChild(u);
		function l(n) {
			var e = n.target || n.srcElement;
			e.focus();
		}
		function p(n) {
			_(n.target.dataset.reportReason);
		}
		function f(n) {
			n.stopPropagation();
			var e = null;
			switch (n.key) {
				case "Enter":
					document.activeElement.click();
					break;
				case "Backspace":
					n.preventDefault(), _();
					break;
				case "ArrowDown":
					e = document.activeElement.nextSibling;
					break;
				case "ArrowUp":
					e = document.activeElement.previousSibling;
					break;
				default:
					break;
			}
			e && e.focus();
		}
		function _(n) {
			s.removeEventListener("keydown", f), d.removeEventListener("click", p), a.removeEventListener("keydown", f), a.remove(), s.remove(), config.post(t, "success", n);
		}
	},
	S = function (config, t, o, r, i) {
		var a = document.createElement("div");
		a.classList.add("kaiads-options-overlay-touch"), (a.tabIndex = -1);
		var s = document.createElement("div");
		s.classList.add("popup");
		var c = document.createElement("div");
		c.classList.add("title"), (c.innerText = r.reportThisAdAs), s.appendChild(c);
		var d = document.createElement("div");
		d.classList.add("wrapper");
		var u = document.createElement("div");
		u.classList.add("options"),
			i.forEach(function (n, e) {
				var t = _slicedToArray(n, 2),
					o = t[0],
					r = t[1],
					i = document.createElement("div");
				(i.value = r), i.classList.add("option"), (i.innerText = o), i.addEventListener("click", f), u.appendChild(i);
			}),
			d.appendChild(u),
			s.appendChild(d),
			a.appendChild(s),
			document.body.appendChild(a),
			a.addEventListener("click", p),
			a.addEventListener("keydown", l),
			a.focus();
		function l(n) {
			n.stopPropagation(), n.preventDefault();
			switch (n.key) {
				case "Backspace":
				case "GoBack":
					_();
					break;
				default:
					break;
			}
		}
		function p() {
			_();
		}
		function f(n) {
			n.stopPropagation(), config.post(t, "success", n.target.value), _();
		}
		function _() {
			a.removeEventListener("click", p), a.removeEventListener("keydown", l);
			var n = document.getElementsByClassName("option");
			Array.from(n).forEach(function (n) {
				n.removeEventListener("click", f);
			}),
				a.remove();
		}
	},
	x = function (config) {
		return {
			___API___postGetSettings: function (e) {
				config.post(e, "success", config.adConfig);
			},
			___API___postGetManifestURL: function n(e) {
				if (navigator.mozApps)
					navigator.mozApps.getSelf().onsuccess = function (n) {
						config.post(e, "success", n.target.result.manifestURL);
					};
				else if (isKaiOSv2) {
					var t = "https://api.kaiostech.com/apps/manifest/kaios-ads-stub-appid";
					fetch(window.location.origin + "/.KaiAds.appinfo.json")
						.then(function (n) {
							return n.json();
						})
						.then(function (n) {
							var r = n.manifestURL || t;
							config.post(e, "success", r);
						})
						.catch(function (n) {
							config.post(e, "success", t);
						});
				} else if (manifestFromDOM) config.post(e, "success", "" + new URL(manifestFromDOM.href, window.location.href));
				else
					isKaiOSv3 &&
						fetch(webmanifestURL)
							.then(function (n) {
								return n.json();
							})
							.then(function () {
								return config.post(e, "success", "" + new URL(webmanifestURL, window.location.href));
							})
							.catch(function (n) {
								return console.error("Fetch Manifest Failure - ".concat(n));
							});
			},
			___API___postGetManifest: function n(e) {
				if (navigator.mozApps)
					navigator.mozApps.getSelf().onsuccess = function (n) {
						var t = Object.getPrototypeOf(n.target.result),
							r = Object.getOwnPropertyNames(t),
							i = JSON.stringify(n.target.result, r);
						config.post(e, "success", i, n.target.result.manifest);
					};
				else {
					var t;
					if (isKaiOSv2) t = window.location.origin + "/manifest.webmanifest";
					else if (manifestFromDOM) t = manifestFromDOM.href;
					else isKaiOSv3 && (t = webmanifestURL);
					t &&
						fetch(t)
							.then(function (n) {
								return n.json();
							})
							.then(function (n) {
								config.post(e, "success", "", n);
							})
							.catch(function (n) {
								return console.error("Get Manifest Failure - ".concat(n));
							});
				}
			},
			___API___postGetFullscreenDimension: function n(e) {
				config.post(e, "success", window.innerHeight, window.innerWidth);
			},
			___API___postGetOrigin: function n(e) {
				config.post(e, "success", document.location.href, document.location.origin);
			},
			___API___postError: function n(e) {
				config.adConfig.onerror(e);
			},
			___API___postReject: function n(e) {
				config.reject(e), clearTimeout(config.timeout);
			},
			___API___postGetVisibility: function n(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
				if (t.acceptOnScreenPercent && g.vfsAdId && g.vfsAdId !== config.id) {
					config.post(e, 0);
					return;
				}
				var r = config.frame.getBoundingClientRect();
				config.post(e, r.top, r.left, r.right, r.bottom, r.width, r.height, window.innerWidth, window.innerHeight);
			},
			___API___postDestroyAd: function n(e) {
				(config.container.style.overflow = "auto"), config.destroy();
			},
			___API___postOpenWin: function n(e, r) {
				var i = window.open(r),
					a = setInterval(function () {
						i.closed && (config.post(e, "success"), clearInterval(a));
					}, t);
			},
			___API___postOpenWinWithThemeColorWorkaround: function n(t, r) {
				themeColorWorkaround(t, function () {
					x(config).___API___postOpenWin(t, r);
				});
			},
			___API___postAssignLocation: function n(e, t) {
				window.location = t;
			},
			___API___postAssignLocationWithThemeColorWorkaround: function n(e, t) {
				themeColorWorkaround(e, function () {
					window.location = t;
				});
			},
			___API___postDisplayFullscreenAd: function n(e, t, r) {
				(g.vfsAdId = t),
					(config.container.style.position = "relative"),
					config.wrap.setAttribute("tabindex", 0),
					(config.wrap.style.cssText = r),
					(config.frame.style.cssText = r),
					(config.container.style.overflow = "hidden");
			},
			___API___postDisplayBannerAd: function n(e, t, r, i, a, s) {
				config.wrap.setAttribute("tabindex", t.tabindex || 0),
					config.wrap.classList.add(t.navClass || ""),
					(config.container.style.display = t.display),
					(config.container.style.background = i),
					(config.container.style.position = "relative"),
					(config.wrap.style.cssText = r),
					(config.frame.style.cssText = r),
					a && (config.container.style.width = a + "px"),
					s && (config.container.style.height = s + "px");
			},
			___API___postSetIgnoreKeys: function n(e, t, r, i) {
				(config.ignoreKeys = t), r && config.ready(i);
			},
			___API___postAdFocus: function n(e) {
				config.wrap.focus();
			},
			___API___postMaskGlobalFSListeners: function n() {
				(config.wrap.keydownhandler = function (n) {
					if (config.ignoreKeys.indexOf(n.key) >= 0) return;
					n.preventDefault(), n.stopPropagation(), config.post("keydown", n.key, -1);
				}),
					config.wrap.addEventListener("keydown", config.wrap.keydownhandler);
			},
			___API___postGetSDKVersion: function e(t) {
				config.post(t, "success", sdkVersion);
			},
			___API___postShowReportAdMenu: function n(e, t, r) {
				var i = /kaios/gi.test(window.navigator.userAgent) && (/touch/gi.test(window.navigator.userAgent) || /\sst\//gi.test(window.navigator.userAgent)),
					a = [
						[r.inappropriate, "INAPPROPRIATE"],
						[r.notInterested, "NOT_INTERESTED"],
						[r.seenMultipleTimes, "SEEN_MUTIPLE_TIMES"],
						[r.misleading, "MISLEADING"],
					];
				!i ? C(config, e, t, r, a) : S(config, e, t, r, a);
			},
			___API___postGetCertificateState: function n(e) {
				config.post(e, "success", certificateIsValid);
			},
		};
	},
	L = function (messageEvt) {
		if (!messageEvt || !messageEvt.origin || messageEvt.origin !== sspOrigin) return;
		var config = frameConfigs.get(messageEvt.source),
			currentConfig = JSON.parse(messageEvt.data);
		if (!config || config.id !== currentConfig.id) return;

		if (currentConfig.event && currentConfig.event.indexOf("___API___") === 0) {
			var i = x(config)[currentConfig.event];
			if (i)
				try {
					i.call.apply(i, [config].concat(_toConsumableArray(currentConfig.args), [currentConfig.flags]));
				} catch (n) {
					config.post(currentConfig.event, "error", ErrorCodes.INVOKE_API_FAILED);
				}
			else config.adConfig.onerror(ErrorCodes.UNKNOWN_API_CALLED);
		}
		config.listeners[currentConfig.event] &&
			config.listeners[currentConfig.event].forEach(function (n) {
				return n(currentConfig.args);
			});
	};

function T() {
	var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.activeElement;
	if (!n || !n.dataset[serialID]) return;
	var e = n.getElementsByTagName("iframe");
	return e.length > 0 ? e[0] : null;
}

var O = function n(e) {
	var t = g.vfsAdId ? toDatasetAttribute(serialID, g.vfsAdId) : null,
		o = t ? T(t) : T();
	if (!o) return;
	var r = frameConfigs.get(o.contentWindow);
	if (!r || r.ignoreKeys.indexOf(e.key) > -1) return;
	r.post("keydown", e.key, -1), e.preventDefault(), e.stopPropagation();
};

window.addEventListener("message", L);
window.addEventListener("keydown", O);

var emptyFunc = function n() {},
	N = function (e) {
		return e;
	},
	P = function n() {
		for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
		return t.reduce(function (n, e) {
			return function () {
				return n(e.apply(undefined, arguments));
			};
		});
	},
	R = function n(e) {
		var t = ["blacklistCache", e.appId, e.publisherId, e.slotId, e.container ? "banner" : "fullscreen", e.w, e.h].filter(Boolean);
		return t.join(":");
	},
	G = { NOT_SET: 1, ACTIVE: 2, PREV_SUCCESS: 3 },
	M = function n(e) {
		try {
			return document.cookie
				.split("; ")
				.find(function (n) {
					return n.startsWith(e);
				})
				.split("=")[1];
		} catch (n) {
			return null;
		}
	},
	U = function n(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
			o = function n(o) {
				var r = o ? "1" : "0",
					i = o ? t : 2147483647;
				document.cookie = "".concat(e, "=").concat(r, "; max-age=").concat(i, "; samesite=strict");
			},
			r = function n() {
				switch (M(e)) {
					case "0":
						return G.PREV_SUCCESS;
					case "1":
						return G.ACTIVE;
					default:
						return G.NOT_SET;
				}
			};
		return {
			getState: r,
			recordSuccess: function n() {
				return o(false);
			},
			recordFailure: function n() {
				return o(true);
			},
		};
	},
	W = function n(t) {
		var r = R(t),
			i = U(r, t.blacklistCache.ttl),
			a = i.getState();
		if (a === G.ACTIVE) throw new KaiAdError(ErrorCodes.BLACKLISTED);
		var s = function n(e) {
				return Object.assign({}, e, { onready: emptyFunc, onloadstart: emptyFunc, onloadend: emptyFunc });
			},
			c = function n(t) {
				return Object.assign({}, t, {
					onready: function n() {
						i.recordSuccess(), t.onready.apply(t, arguments);
					},
					onerror: function n(o) {
						o === ErrorCodes.BLACKLISTED && i.recordFailure();
						if (typeof t.onerror === "function") {
							for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) a[s - 1] = arguments[s];
							t.onerror.apply(t, [o].concat(a));
						}
					},
				});
			},
			d = t.blacklistCache.initiallyHideAd && a !== G.PREV_SUCCESS;
		return P(c, d ? s : N)(t);
	},
	F = function n(e, t) {
		var o = createFrameConfig(e);
		return frameConfigs.set(o.frame.contentWindow, o), { destroy: o.destroy };
	};

export default function getKaiAd(n) {
	try {
		if (!getBody()) throw new KaiAdError(ErrorCodes.DOCBODY_NOT_READY);
		if (!n.onready) throw new KaiAdError(ErrorCodes.ONREADY_FUNC_MISSING);
		if (!window.navigator.onLine) throw new KaiAdError(ErrorCodes.SDK_CANNOT_LOAD);
		return P(F, n.blacklistCache ? W : N)(n);
	} catch (e) {
		if (e instanceof KaiAdError) {
			var t = n.onerror || console.error;
			t(e.code);
			return;
		}
		throw e;
	}
}
