function asyncGeneratorStep(e, t, r, a, o, n, i) {
	try {
		var s = e[n](i),
			l = s.value;
	} catch (e) {
		return void r(e);
	}
	s.done ? t(l) : Promise.resolve(l).then(a, o);
}
function _asyncToGenerator(e) {
	return function () {
		var t = this,
			r = arguments;
		return new Promise(function (a, o) {
			var n = e.apply(t, r);
			function i(e) {
				asyncGeneratorStep(n, a, o, i, s, "next", e);
			}
			function s(e) {
				asyncGeneratorStep(n, a, o, i, s, "throw", e);
			}
			i(void 0);
		});
	};
}
function _defineProperty(e, t, r) {
	return t in e ? Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true }) : (e[t] = r), e;
}
function ownKeys(e, t) {
	var r = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		t &&
			(a = a.filter(function (t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})),
			r.push.apply(r, a);
	}
	return r;
}
function _objectSpread2(e) {
	for (var t = 1; t < arguments.length; t++) {
		var r = null != arguments[t] ? arguments[t] : {};
		t % 2
			? ownKeys(Object(r), true).forEach(function (t) {
					_defineProperty(e, t, r[t]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
			: ownKeys(Object(r)).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
			  });
	}
	return e;
}
function _slicedToArray(e, t) {
	return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest();
}
function _toArray(e) {
	return _arrayWithHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableRest();
}
function _arrayWithHoles(e) {
	if (Array.isArray(e)) {
		return e;
	}
}
function _iterableToArray(e) {
	if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
		return Array.from(e);
	}
}
function _iterableToArrayLimit(e, t) {
	if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
		var r = [],
			a = true,
			o = false,
			n = void 0;
		try {
			for (var i, s = e[Symbol.iterator](); !(a = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); a = true) {}
		} catch (e) {
			(o = true), (n = e);
		} finally {
			try {
				a || null == s.return || s.return();
			} finally {
				if (o) {
					throw n;
				}
			}
		}
		return r;
	}
}
function _unsupportedIterableToArray(e, t) {
	if (e) {
		if ("string" == typeof e) {
			return _arrayLikeToArray(e, t);
		}
		var r = Object.prototype.toString.call(e).slice(8, -1);
		return (
			"Object" === r && e.constructor && (r = e.constructor.name),
			"Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0
		);
	}
}
function _arrayLikeToArray(e, t) {
	(null == t || t > e.length) && (t = e.length);
	for (var r = 0, a = new Array(t); r < t; r++) {
		a[r] = e[r];
	}
	return a;
}
function _nonIterableRest() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(e, t) {
	var r;
	if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
		if (Array.isArray(e) || (r = _unsupportedIterableToArray(e)) || (t && e && "number" == typeof e.length)) {
			r && (e = r);
			var a = 0,
				o = function () {};
			return {
				s: o,
				n: function () {
					return a >= e.length ? { done: true } : { done: false, value: e[a++] };
				},
				e: function (e) {
					throw e;
				},
				f: o,
			};
		}
		throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var n,
		i = true,
		s = false;
	return {
		s: function () {
			r = e[Symbol.iterator]();
		},
		n: function () {
			var e = r.next();
			return (i = e.done), e;
		},
		e: function (e) {
			(s = true), (n = e);
		},
		f: function () {
			try {
				i || null == r.return || r.return();
			} finally {
				if (s) {
					throw n;
				}
			}
		},
	};
}
var cookieSetNX = function (e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
			r = e
				.split(";")
				.map((e) => e.trim())
				.reduce((e, t) => {
					var r = t.split("=");
					return (e[r[0]] = r[1]), e;
				}, {});
		return t.reduce((e, t) => {
			var a = t.key,
				o = t.valueFn,
				n = t.options,
				i = o();
			return r[a] ? (e[a.toLowerCase()] = r[a]) : ((r[a] = i), (e[a.toLowerCase()] = i), (document.cookie = a + "=" + (i + (n || "")))), e;
		}, {});
	},
	getKaiVer = (e) => {
		var t = / kaios\/((?:\d+.)*\d+)(?: st\/((?:\d+.)*\d+))?/gi.exec(e) || [],
			r = ["os", "st"],
			a = {};
		return (
			t.slice(1).forEach((e, t) => {
				e && (a[r[t]] = e);
			}),
			a
		);
	},
	reqByImg = (e) =>
		new Promise((t) => {
			var r = new Image(1, 1);
			(r.onload = t), (r.onerror = t), (r.src = e);
		}),
	parallelGET = (e) => (e ? Promise.all(e.map(reqByImg)) : Promise.all([])),
	logRequestUrl = "/log/v2?r=",
	createEventLogger = (e) =>
		function (t, r, a, o) {
			var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "ads_sdk";
			if ("click" === t) {
				if (r.clicked) {
					return Promise.all([]);
				}
				r.clicked = true;
			}
			var i = [logRequestUrl + e(t, r, a, o, n)];
			if (r.adData && r.adData.track && r.adData.track[t]) {
				var s,
					l = _createForOfIteratorHelper(r.adData.track[t]);
				try {
					for (l.s(); !(s = l.n()).done; ) {
						var d = s.value;
						i.push(d);
					}
				} catch (e) {
					l.e(e);
				} finally {
					l.f();
				}
			}
			return parallelGET(i);
		},
	getVersionParts = (e) => {
		var t = e.split(".").map((e) => parseInt(e));
		if (t.some(Number.isNaN)) {
			throw new Error("Invalid version format");
		}
		return t;
	},
	versionPartsCompare = (e, t) => {
		for (var r = 0; r < e.length || r < t.length; ) {
			if ((e[r] || 0) !== (t[r] || 0)) {
				return e[r] > t[r] ? 1 : -1;
			}
			r++;
		}
		return 0;
	},
	versionCompare = (e, t) => versionPartsCompare(getVersionParts(e), getVersionParts(t)),
	normalizeSDKVersion = (e) => {
		var t = getVersionParts(e),
			r = _toArray(t),
			a = r[0],
			o = r.slice(1);
		return 2 === a ? [0, a, ...o] : 3 === a ? [1, ...t] : t;
	},
	sdkVersionCompare = (e, t) => versionPartsCompare(normalizeSDKVersion(e), normalizeSDKVersion(t));
function sdkFeaturesForVersion(versionString) {
	return {
		get navigationAPIs() {
			return 0 === sdkVersionCompare(versionString, "2.0.0") || sdkVersionCompare(versionString, "1.4.1") >= 0;
		},
		get pollAdWindowClosed() {
			return sdkVersionCompare(versionString, "1.4.5") >= 0;
		},
		get reportAd() {
			return sdkVersionCompare(versionString, "1.4.6") >= 0;
		},
	};
}
function isAppOrigin(str) {
	return str.includes("app://");
}
var NAV_ACTIONS = { OPEN_STORE: 1, OPEN_WINDOW: 2, ASSIGN_LOC: 3, OPEN_BROWSER: 4 };

function determineNavAction(e, t, sdkVersion, a) {
	switch (e) {
		case "app":
			return NAV_ACTIONS.OPEN_STORE;
		case "web-browser":
			return sdkFeaturesForVersion(sdkVersion).navigationAPIs
				? t && versionCompare(t, "2.5.0") <= 0 && !isAppOrigin(a)
					? NAV_ACTIONS.ASSIGN_LOC
					: NAV_ACTIONS.OPEN_WINDOW
				: NAV_ACTIONS.OPEN_BROWSER;
		default:
			throw new Error("unknown ad target");
	}
}
function navigateToTarget(api, navAction, targetURL, adID) {
	var MozActivityFromArgs = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window.MozActivity,
		WebActivityFromArgs = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : window.WebActivity;
	switch (navAction) {
		case NAV_ACTIONS.ASSIGN_LOC:
			api.postAssignLocationWithThemeColorWorkaround("_assign_loc", targetURL);
			break;
		case NAV_ACTIONS.OPEN_WINDOW:
			var i = api.postOpenWinWithThemeColorWorkaround(targetURL);
			if (!i) {
				break;
			}
			return i;
		case NAV_ACTIONS.OPEN_STORE:
			var activityData = { url: targetURL, type: "url", adId: adID };
			if (WebActivityFromArgs) {
				new WebActivityFromArgs("inline-open-page", activityData).start();
				break;
			}
			if (!MozActivityFromArgs) {
				break;
			}
			new MozActivityFromArgs({ name: "inline-open-page", data: activityData }).onerror = () => new MozActivityFromArgs({ name: "open-page", data: activityData });
			break;
		case NAV_ACTIONS.OPEN_BROWSER:
			if (!MozActivityFromArgs) {
				break;
			}
			new MozActivityFromArgs({ name: "view", data: { url: targetURL, type: "url" } });
			break;
		default:
			throw new Error("unknown navigation action");
	}
	return Promise.resolve();
}
var manifestURLRegex = /(https:\/\/api\.((prod|preprod|stage)\.)?kaiostech\.com\/(v3\.0\/)?apps\/manifest\/[a-zA-Z0-9-_]+)/;
function isAppTarget(e) {
	return e.match(manifestURLRegex);
}
var RFC3339 = () => {
		var e = new Date(),
			t = -e.getTimezoneOffset(),
			r = t >= 0 ? "+" : "-";
		return (
			e.getFullYear() +
			"-" +
			(e.getMonth() + 1).toString().padStart(2, "0") +
			"-" +
			e.getDate().toString().padStart(2, "0") +
			"T" +
			e.getHours().toString().padStart(2, "0") +
			":" +
			e.getMinutes().toString().padStart(2, "0") +
			":" +
			e.getSeconds().toString().padStart(2, "0") +
			r +
			Math.abs(t / 60)
				.toString()
				.padStart(2, "0") +
			":" +
			Math.abs(t % 60)
				.toString()
				.padStart(2, "0")
		);
	},
	perf = { startTime: performance.now(), prevTime: performance.now(), prevEvent: "request" },
	prepRequestQuery = (e, kaiAdsV2PrevFSDisplay_LS_item, configID, serialID, o, n) =>
		function (i, s, l, d) {
			var c,
				p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "ads_sdk",
				u = performance.now(),
				v = parseInt(u - perf.startTime),
				h = parseInt(u - perf.prevTime),
				g = perf.prevEvent;
			(perf.prevTime = u), (perf.prevEvent = i), perf[i] ? perf[i]++ : (perf[i] = 1), (c = 1 === s.fs ? s.fsdimension : { maxHeight: s.h, maxWidth: s.w });
			var y = navigator.language || "",
				m = navigator.languages;
			m && m.length && (y = m.join(","));
			var f = [
				i,
				g,
				l || "",
				perf[i],
				v,
				h,
				RFC3339(),
				s.requestId,
				e,
				s.fs ? "1" : "0",
				c.maxHeight,
				c.maxWidth,
				s.slot || "",
				s.publisher || "",
				s.manifestUrl,
				s.adData.adId || "",
				s.adData.buyer || "",
				localStorage.getItem(kaiAdsV2PrevFSDisplay_LS_item) || "",
				y,
				s.adData.type || "",
				s.app || "",
				configID || "",
				s.rotating ? "1" : "0",
				s.testMode,
				serialID || "",
				s.visibility.onScreen ? "1" : "0",
				s.visibility.onScreenPercent,
				s.loc.href,
				s.loc.origin,
				d || 0,
				s.sdkVersion,
				o,
				n,
				s.appType,
				s.appVersion,
				p,
				s.cursorEnabled ? "1" : "0",
				s.adData.fallback ? "1" : "0",
				s.adData.cpc ? "1" : "0",
				true === s.certState ? "1" : "0",
				s.adData.fingerprint || "",
			].map((e) => e.toString().replace(/\t/g, " "));
			return encodeURIComponent(f.join("\t"));
		},
	uuid = (() => {
		var e = "~-_.0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		return () => {
			var t = crypto.getRandomValues(new Uint16Array(25));
			return [].map.call(t, (t) => e[t % 66]).join("");
		};
	})(),
	uuidv4 = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e) => (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16));

class Timer {
	constructor(e, t) {
		(this.id = null), (this.callback = e);
	}
	pause() {
		window.clearTimeout(this.id);
	}
	resume() {
		window.clearTimeout(this.id),
			(this.id = window.setTimeout(() => {
				this.callback.call(), this.resume();
			}, 1e3));
	}
}

var VIDEO_Z_INDEX = "999",
	OVERLAY_Z_INDEX = "1000",
	VPAID_Z_INDEX = "1001";
class VideoPlayer {
	constructor(e, appWindow, r, a, o, n, i, s) {
		this.args = e;
		this.iframe = appWindow;
		this.adRequestURL = r;
		this.logRequestUrl = a;
		this.queryBuilder = o;
		this.logEvent = n;
		this.api = i;
		this.handleClick = s;
		this.paused = false;
		this.counter = -1;
		this.overlay = void 0;
		this.videoElement = document.createElement("video");
		this.videoElement.id = "video-id";
		this.videoElement.setAttribute("style", "z-index:" + VIDEO_Z_INDEX + ";");
		this.videoElement.muted = true;
		document.body.appendChild(this.videoElement);
		document.body.style.overflow = "hidden";
		this.timer = new Timer(() => {
			appWindow.contentWindow.postMessage(JSON.stringify(["count", --this.counter]), window.location.origin);
		});
		var l = this.VastEnvelope("data:text/xml," + encodeURIComponent(e.adData.vast)),
			d = setTimeout(() => {
				this.api.postDestroyAd("close-ad");
			}, 5e3);
		(this.player = fluidPlayer("video-id", {
			vastOptions: {
				allowVPAID: true,
				adList: [{ roll: "preRoll", vastTag: l }],
				showPlayButton: false,
				vastTimeout: 5e3,
				vastAdvanced: {
					vastLoadedCallback: () => {
						clearTimeout(d),
							this.logEvent("load", e, "", 0, "video_player"),
							this.player.vastOptions.clickthroughUrl && this.iframe.contentWindow.postMessage(JSON.stringify(["showGoBtn"]), window.location.origin);
					},
					noVastVideoCallback: () => {
						this.logEvent("error", e, "No VAST", 0, "video_player"), this.api.postDestroyAd("close-ad");
					},
					vastVideoSkippedCallback: () => {
						this.logEvent("skip", e, "", 0, "video_player");
					},
					vastVideoEndedCallback: () => {
						this.logEvent("end", e, "", 0, "video_player"), this.api.postDestroyAd("close-ad");
					},
				},
			},
			layoutControls: {
				playerInitCallback: () => {
					this.logEvent("init", e, "", 0, "video_player"), (document.getElementById("video-id_fluid_controls_container").hidden = true);
					var t = document.getElementById("fluid_video_wrapper_" + this.videoElement.id);
					(t.style.width = "100%"),
						(t.style.height = "calc(100% - 40px)"),
						(t.style.position = "absolute"),
						(this.videoElement.style.objectFit = "contain"),
						(this.videoElement.style.objectPosition = "center"),
						(this.videoElement.style.backgroundColor = "unset");
				},
			},
		})),
			this.player.on("play", () => {
				if (this.player.vastOptions) {
					if (
						(appWindow.contentWindow.postMessage(JSON.stringify(["status", "playing"]), window.location.origin),
						this.logEvent("play", this.args, "", 0, "video_player"),
						this.player.vastOptions.skipoffset && (this.player.removeSkipButton(), -1 === this.counter && (this.counter = this.player.vastOptions.skipoffset)),
						this.timer.resume(),
						this.player.vastOptions.vpaid)
					) {
						var e = document.getElementById("video-id_fluid_vpaid_slot");
						(e.style.zIndex = VPAID_Z_INDEX),
							(e.onclick = (e) => {
								this.overlay.click(), this.overlay.focus(), e.stopPropagation();
							});
					}
				} else {
					this.api.postDestroyAd("close-ad");
				}
			}),
			this.player.on("pause", () => {
				this.logEvent("pause", this.args, "", 0, "video_player"),
					appWindow.contentWindow.postMessage(JSON.stringify(["status", "paused"]), window.location.origin),
					this.timer.pause();
			});
	}
	play() {
		(this.paused = false), this.player.play(), (this.videoElement.muted = false);
	}
	pause() {
		(this.paused = true), this.player.pause();
	}
	skip() {
		this.player.vastOptions.vpaid ? this.player.stopVpaidAd() : this.player.pressSkipButton();
	}
	togglePlayback() {
		this.paused ? this.play() : this.pause();
	}
	go() {
		!this.player.vastOptions.vpaid && document.getElementById("vast_clickthrough_layer_video-id").click();
	}
	click() {
		this.overlay.click();
	}
	showOverlay() {
		(this.overlay = document.createElement("div")),
			(this.overlay.id = "vid-overlay"),
			(this.overlay.tabIndex = -1),
			this.overlay.setAttribute(
				"style",
				[
					"width: 100%",
					"height: calc(100% - 40px)",
					"position: absolute",
					"top: 0",
					"left: 0",
					"overflow: hidden",
					"background-color: rgba(0,0,0,0.0)",
					"z-index: " + OVERLAY_Z_INDEX,
				].join(";")
			),
			this.overlay.addEventListener("focus", (e) => {
				this.api.postAdFocus("adfocus");
			}),
			this.overlay.addEventListener("click", (e) => {
				this.go(), this.pause(), this.handleClick(this.args, this.player.vastOptions.clickthroughUrl);
			}),
			document.body.appendChild(this.overlay);
	}
	VastEnvelope(e) {
		return (
			"data:text/xml," +
			encodeURIComponent(
				'<VAST version="4.2">\n            <Ad id="1">\n                <Wrapper>\n                    <AdSystem version="3.0">KaiAds</AdSystem>\n                    <VASTAdTagURI><![CDATA[' +
					e +
					"]]></VASTAdTagURI>\n                    <Error>" +
					this.vastEventUrl("error", "vast") +
					"</Error>\n                    <Impression>" +
					this.vastEventUrl("impression", "vast") +
					'</Impression>\n                    <Creatives>\n                        <Creative id="1" sequence="1">\n                            <Linear>\n                                <TrackingEvents>\n                                    <Tracking event="start">' +
					this.vastEventUrl("start", "vast") +
					'</Tracking>\n                                    <Tracking event="firstQuartile">' +
					this.vastEventUrl("first_quartile", "vast") +
					'</Tracking>\n                                    <Tracking event="midpoint">' +
					this.vastEventUrl("midpoint", "vast") +
					'</Tracking>\n                                    <Tracking event="thirdQuartile">' +
					this.vastEventUrl("third_quartile", "vast") +
					'</Tracking>\n                                    <Tracking event="complete">' +
					this.vastEventUrl("complete", "vast") +
					"</Tracking>\n                                </TrackingEvents>\n                            </Linear>\n                        </Creative>\n                    </Creatives>\n                </Wrapper>\n            </Ad>\n        </VAST>"
			)
		);
	}
	vastEventUrl(e, t) {
		return this.logRequestUrl + this.queryBuilder(e, this.args, "", 0, t);
	}
}
var loadFluidPlayer = () =>
	new Promise((e, t) => {
		var r = document.createElement("script");
		r.addEventListener("load", e), r.addEventListener("error", t), (r.src = "https://static.kaiads.com/fluidplayer/fluidplayer.min.js"), document.head.appendChild(r);
	});
function initFrame() {
	var t = 6,
		r = 7,
		a = 8,
		o = 9,
		n = 13,
		i = 14,
		s = 15,
		l = 16,
		d = 17,
		c = 20,
		p = 21,
		u = "/ad/v2?r=",
		kaiAdsV2PrevFSDisplay_LS_item = "kaiAdsV2PrevFSDisplay",
		kaiAdsUserId_item = "kaiAdsUserId",
		kaiAdsUserId = localStorage.getItem(kaiAdsUserId_item) || uuid();
	localStorage.setItem(kaiAdsUserId_item, kaiAdsUserId);
	var y,
		m,
		getSelf = navigator.mozApps && navigator.mozApps.getSelf,
		cookies = cookieSetNX(document.cookie, [
			{ key: "KUID", valueFn: uuidv4, options: "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure" },
			{ key: "KAID", valueFn: uuidv4, options: "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure" },
		]),
		kuid = cookies.kuid,
		kaid = cookies.kaid;

	class KaiAdFrameError extends Error {
		constructor(description, errCode, logToServer) {
			super(description);
			this.code = errCode;
			this.logToServer = logToServer;
		}
	}

	function getParamFromHref(e, t) {
		t || (t = window.location.href);
		e = e.replace(/[\[\]]/g, "\\$&");
		var r = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
		return r ? (r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "") : null;
	}
	var k,
		S,
		I = ["padding:0", "margin:auto", "border:0", "width:100%", "height:100%", "position:absolute", "top:0", "left:0", "display:block"].join(";"),
		E = ["padding:0", "margin:auto", "border:0", "width:100%", "height:100%", "position:fixed", "top:0", "left:0", "display:block", "z-index:999", "opacity:1.0"].join(";"),
		configID = getParamFromHref("i"),
		serialID = getParamFromHref("s"),
		appOrigin = getParamFromHref("o") || "*",
		events = new Map(),
		api = postAPI(configID, appOrigin, events),
		requestQuery = prepRequestQuery(kaiAdsUserId, kaiAdsV2PrevFSDisplay_LS_item, configID, serialID, kuid, kaid),
		log = createEventLogger(requestQuery),
		postReject = (e) => {
			api.postReject(e);
		},
		addSkipped = false,
		postMaskGlobalFSListeners = () => {
			api.postMaskGlobalFSListeners();
		},
		x = null,
		M = (e) => {
			return X(e).then(
				((t = _asyncToGenerator(function* (t) {
					(1 === e.fs || e.adData.isST) && t.contentWindow.postMessage(JSON.stringify(["showReportAd", !!api.postShowReportAdMenu]), window.location.origin);
					var r = null;
					return (
						"video" === e.adData.type &&
							1 === e.fs &&
							("undefined" == typeof fluidPlayer && (yield loadFluidPlayer()), (r = new VideoPlayer(e, t, u, logRequestUrl, requestQuery, log, api, ie))),
						"video" !== e.adData.type && "" !== e.adData.clickUrl && (x = H(e)),
						{ iframe: t, videoPlayer: r }
					);
				})),
				function (e) {
					return t.apply(this, arguments);
				})
			);
			var t;
		},
		L = function e(r) {
			for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) {
				o[n - 1] = arguments[n];
			}
			return B(r, ...o).catch((a) => {
				if (a instanceof KaiAdFrameError) {
					return a.code === t && 1 !== r.fs
						? ((r.requestId = uuid()),
						  (r.adData = { html: "", target: "", adId: "", type: "", buyer: "", clickUrl: "", color: "", readyNow: false, track: {} }),
						  new Promise((t) => {
								setTimeout(() => t(e(r, ...o)), 3e4);
						  }))
						: void (a.logToServer ? log("error", r, a.message) : Promise.resolve()).then(() => {
								postReject(a.code);
						  });
				}
				log("error", r, a.message);
			});
		},
		j = (e) => (1 === e.fs ? -1 : 3e4),
		F = (e, t, r) => {
			var a = q(e);
			setTimeout(
				() =>
					B(a, { shouldCheckInitialVisibility: true, shouldDisplayAdImmediately: true }, t)
						.catch((e) => {
							e && (!(e instanceof KaiAdFrameError) || true === e.logToServer) && log("error", a, e.message);
						})
						.then(function () {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
								r = j(a);
							r > 0 && F(a, e, r);
						}),
				r
			);
		},
		G = (e) => {
			var t = e.args[0],
				r = e.args[1],
				a = e.args[2],
				o = (e.args[3], e.args[4]),
				n = e.args[5],
				i = e.args[6],
				s = e.args[7];
			return !document.hidden && 0 !== o && 0 !== n && t < s && t >= 0 && r < i && a >= 0;
		},
		q = (e) =>
			_objectSpread2(
				_objectSpread2({}, e),
				{},
				{
					requestId: uuid(),
					adData: { html: "", target: "", adId: "", type: "", buyer: "", clickUrl: "", color: "", readyNow: false, track: {} },
					rotating: true,
					clicked: false,
					visibility: { onScreen: false, onScreenPercent: 0 },
				}
			),
		B = function (e, t) {
			var r,
				a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
				o = t.shouldCheckInitialVisibility,
				n = void 0 !== o && o,
				i = t.shouldDisplayAdImmediately,
				s = void 0 !== i && i,
				l = t.shouldPostAdReady,
				d = void 0 !== l && l;
			return (n ? ((r = e), api.postGetVisibility().then((e) => ne(e, r))) : Promise.resolve(e.visibility))
				.then((t) => (!t.onScreen || t.onScreenPercent < 10 ? Promise.reject(null) : ((e.visibility = t), K(e))))
				.then((t) => {
					return (
						(e.adData = (((i = t).target = isAppTarget(i.clickUrl) ? "app" : i.target), i.vast && (i.vast = i.vast.replace("http:", "https:")), i)),
						(o = (r = a).iframe),
						(n = r.videoPlayer),
						x && document.body.removeChild(x),
						o && document.body.removeChild(o),
						n && n.destroy(),
						M(e)
					);
					var r, o, n, i;
				})
				.then((t) => {
					if (t) {
						var r = t.iframe,
							a = t.videoPlayer;
						return a && (a.play(), a.showOverlay()), Q(e, t), log("load", e), Y(1 === e.fs, d, e.adData), s && $(e, r)(y), t;
					}
				});
		},
		K = (e) => {
			var a = requestQuery("request", e, "", 0);
			return fetch(u + a, { credentials: "include", headers: { "Accept-Encoding": "gzip" } }).then(
				(e) => {
					switch (e.status) {
						case 200:
							break;
						case 429:
							throw new KaiAdFrameError("Frequency cap in effect", r, false);
						case 404:
							throw new KaiAdFrameError("Server rejected ad", t, false);
						case 422:
							throw new KaiAdFrameError("Blacklisted", p, false);
						default:
							throw new KaiAdFrameError("No ad. Response code: " + e.status, t, true);
					}
					return e.json().then(
						(e) => {
							if (!e || !e.html) {
								throw new KaiAdFrameError("Bad server response.", o, true);
							}
							return e;
						},
						(e) => {
							throw new KaiAdFrameError("Cannot process server response. " + e.message, n, true);
						}
					);
				},
				(e) => {
					throw new KaiAdFrameError("No server response. " + e.message, i, true);
				}
			);
		},
		z =
			((k = { padding: 0, margin: "auto", border: 0, width: "100%", position: "absolute", top: 0, left: 0 }),
			(S = ""),
			Object.keys(k).forEach((e) => (S += e + ":" + k[e] + " !important;")),
			S),
		H = (e) => {
			var t = z;
			(t = t + ";z-index: 999;height: " + (1 === e.fs ? "calc(100% - 40px)" : "100%") + ";"),
				e.adData.isST &&
					(1 === e.fs
						? (t += "top: 73.5px !important; left: 27px !important; height: calc(100% - 147px) !important; width: calc(100% - 54px) !important")
						: (t += "width: calc(100% - 20px) !important"));
			var r = document.createElement("a");
			return (
				r.setAttribute("style", t),
				(r.href = "#"),
				(r.style.display = "block"),
				r.addEventListener("mousedown", (t) => (ie(e), t.preventDefault(), false)),
				document.body.appendChild(r),
				r
			);
		},
		J = (e) => {
			if (!e.contentWindow || !e.contentWindow.performance) {
				return [];
			}
			var t = e.contentWindow.performance.getEntriesByType("resource");
			if (e.contentDocument && e.contentDocument.body) {
				var r,
					a = _createForOfIteratorHelper(e.contentDocument.body.getElementsByTagName("iframe"));
				try {
					for (a.s(); !(r = a.n()).done; ) {
						var o = r.value;
						t = t.concat(J(o));
					}
				} catch (e) {
					a.e(e);
				} finally {
					a.f();
				}
			}
			return t;
		},
		X = (e) => {
			var t = z;
			t = t + ";" + (1 === e.fs ? "z-index: 999;" : "") + "height: 100%;visibility: hidden";
			var r = document.createElement("iframe");
			r.id = e.requestId;
			r.setAttribute("style", t);
			var a = new Blob([e.adData.html], { type: "text/html;charset=utf-8;" });
			return (
				(r.src = URL.createObjectURL(a)),
				new Promise((t) => {
					if (
						((r.onload = () => {
							t(r);
						}),
						document.body.appendChild(r),
						true === e.adData.readyNow)
					) {
						return t(r);
					}
				})
			);
		},
		Z = (e) => {
			var t = e.contentDocument.getElementById("innerFrame"),
				r = t.contentDocument,
				a = t.contentWindow;
			if (!r || !a) {
				return false;
			}
			var o = new MouseEvent("click", { bubbles: true, cancelable: true, view: a }),
				n = r.elementFromPoint(a.innerWidth / 2, a.innerHeight / 2);
			return !!n && "IFRAME" !== n.tagName && (n.dispatchEvent(o), true);
		},
		Q = (e, t) => {
			var r = t.iframe,
				a = t.videoPlayer;
			events.clear();
			var o = oe(e, a, r);
			events.set("keydown", o),
				events.set("keydown-nav", (e) => {
					e.args[0] === serialID && o({ id: "", event: "keydown", args: e.args.slice(1) });
				}),
				events.set("display", (a) => {
					if (y) {
						return (o = l), void api.postError(o);
					}
					var o;
					(m = Date.now()), (y = a), $(e, r)(y);
					var n = j(e);
					n > 0 && F(e, t, n);
				}),
				events.set("get", (t) => {
					"clickURL" === t.args[0] && se("get", { clickURL: e.adData.clickUrl });
				}),
				events.set("click", (t) => {
					("" !== e.adData.clickUrl || Z(r)) && ie(e);
				}),
				events.set("click-iframe", (t) => {
					"" === e.adData.clickUrl && t.args.sessionId === serialID && ie(e);
				}),
				events.set("getManifestURL", (t) => {
					"app" === e.adData.target ? se("getManifestURL", e.adData.clickUrl) : se("getManifestURL", null);
				}),
				events.set("getAdRequestId", (t) => {
					e && e.requestId ? se("getAdRequestId", e.requestId) : se("getAdRequestId", null);
				}),
				events.set("skipAd", (e) => {
					addSkipped = true;
				});
		},
		Y = (e, t, r) => {
			var a;
			a = e ? ["EndCall"] : ["EndCall", "Escape", "Backspace", "GoBack", "ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
			var o = { locale: { go: r.langGo, dismiss: r.langDismiss, report: r.langReport } };
			api.postSetIgnoreKeys("adready", a, t, o);
		},
		$ = (e, t) => (r) => {
			var a, o, n;
			if (
				(log("display", e),
				se("display"),
				setTimeout(() => {
					log("resourceStat", e, "", J(t).length);
				}, 1e3),
				e.adData &&
					e.adData.track &&
					e.adData.track.viewability &&
					((a = t),
					(o = 0),
					(n = () =>
						api
							.postGetVisibility()
							.then(G)
							.then((e) => {
								var t = performance.now();
								return e
									? o
										? t - o >= 1e3
											? { cont: false, callInterval: 0 }
											: { cont: true, callInterval: 100 }
										: ((o = t), { cont: true, callInterval: 100 })
									: ((o = 0), { cont: true, callInterval: 2e3 });
							})
							.then((e) => {
								var t = e.cont,
									r = e.callInterval;
								if (!t) {
									return true;
								}
								if (!document.contains(a)) {
									return false;
								}
								var o = performance.now();
								return new Promise((e) => {
									!(function t(a) {
										a - o >= r ? e() : setTimeout(() => requestAnimationFrame(t), r);
									})(o);
								}).then(() => n());
							})),
					n()).then((t) => (t ? parallelGET(e.adData.track.viewability) : null)),
				1 == e.fs)
			) {
				(t.style.display = "block"),
					(t.style.visibility = "unset"),
					api.postDisplayFullscreenAd("addisplay", configID, E),
					localStorage.setItem(kaiAdsV2PrevFSDisplay_LS_item, RFC3339()),
					api.postAdFocus("adfocus");
			} else {
				(t.style.display = "block"), (t.style.visibility = "unset");
				var i = r.args[0];
				(i.navClass = i.navClass || "~kai-class-" + Date.now()), api.postDisplayBannerAd("addisplay", i, I, e.adData.color, e.w, e.h);
			}
		},
		ee = "video",
		te = "fullscreen",
		re = "banner",
		ae = (e) => {
			e.contentWindow.postMessage(JSON.stringify(["hiddenAd", true]), window.location.origin), document.body.removeChild(x), (x = null);
		},
		oe = (e, t, r) => {
			var a,
				o = 1 === (a = e).fs && "video" === a.adData.type ? ee : 1 === a.fs ? te : re,
				n = {
					click: () => {
						if (o === ee && t) {
							return t.click();
						}
						if ("" === e.adData.clickUrl && !Z(r)) {
							return;
						}
						ie(e).then(() => {
							o !== re && n.close(true);
						});
					},
					close: function () {
						var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						o === ee && addSkipped && t.skip(), log("close", e), se("close", { postClickClose: a }), o === te ? api.postDestroyAd("close-ad") : o === re && e.adData.isST && ae(r);
					},
					showReportAdMenu: () => {
						((e, t, r) => {
							if (api.postShowReportAdMenu && (1 === e.fs || e.bannerReportAd || e.adData.isST)) {
								var a = {
									inappropriate: e.adData.langInappropriate,
									notInterested: e.adData.langNotInterested,
									seenMultipleTimes: e.adData.langSeenMultipleTimes,
									misleading: e.adData.langMisleading,
									select: e.adData.langSelect,
									reportThisAdAs: e.adData.langReportThisAdAs,
								};
								api.postShowReportAdMenu(e.cursorEnabled, a).then((a) => {
									var o = _slicedToArray(a.args, 2),
										n = (o[0], o[1]);
									n && (log("report", e, n), 1 === e.fs ? (log("close", e), se("close"), api.postDestroyAd("close-ad")) : e.adData.isST && t && ae(r));
								});
							}
						})(e, o === re, r);
					},
				},
				i = [
					{ keys: ["SoftLeft", "Escape", "Esc", "Backspace", "GoBack"], adTypes: [te, ee], handler: n.close },
					{ keys: ["SoftRight"], adTypes: [ee], handler: n.click },
					{ keys: ["Enter"], adTypes: [te, re], handler: n.click },
					{ keys: ["Enter"], adTypes: [ee], handler: () => t.togglePlayback() },
					{ keys: ["SoftRight"], adTypes: [re, te], handler: n.showReportAdMenu },
					{ keys: ["TapClose"], adTypes: [te, re], handler: n.close },
				]
					.filter((e) => e.adTypes.indexOf(o) > -1)
					.map((e) => {
						var t = e.keys,
							r = e.handler;
						return t.map((e) => [e, r]);
					})
					.reduce((e, t) => [...e, ...t], [])
					.reduce((e, t) => {
						var r = _slicedToArray(t, 2),
							a = r[0],
							o = r[1];
						return _objectSpread2(_objectSpread2({}, e), {}, { [a]: o });
					}, {});
			return (e) => {
				var t = e.args[0],
					r = i[t];
				if (r) {
					return r();
				}
			};
		},
		ne = (e, t) => {
			var r = { top: e.args[0], left: e.args[1], right: e.args[2], bottom: e.args[3], width: e.args[4], height: e.args[5] },
				a = e.args[6],
				o = e.args[7],
				n = r.height,
				i = r.width;
			(r.bottom < 0 || r.right < 0 || r.top > o || r.left > a) && ((n = 0), (i = 0)),
				r.top <= 0 && r.bottom >= 0 && (n = r.bottom),
				r.bottom >= o && r.top <= o && (n = o - r.top),
				r.left <= 0 && r.right >= 0 && (i = r.right),
				r.right >= a && r.left <= a && (i = a - r.left);
			var s,
				l = r.height * r.width,
				d = n * i,
				c = 0 === l ? 0 : Math.round((d / l) * 100);
			return (s = 1 === t.fs ? (y ? 100 : 0) : c), { onScreen: !document.hidden, onScreenPercent: s };
		},
		ie = function (e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.adData.clickUrl;
			if (!m || Date.now() <= m + 1e3) {
				return Promise.reject();
			}
			log("click", e), se("click");
			var r = determineNavAction(e.adData.target, e.kaiVersions.os, e.sdkVersion, e.loc.origin);
			return "" === t || navigateToTarget(api, r, t, e.requestId);
		},
		se = (e, t) => {
			api.postMsg(e, t);
		};
	window.addEventListener("message", (e) => {
		var t;
		try {
			t = JSON.parse(e.data);
		} catch (e) {
			return;
		}
		var r,
			a = Object.prototype.hasOwnProperty;
		(r = a.call(t, "id") && a.call(t, "event") && a.call(t, "args") ? { id: t.id, event: t.event, args: t.args } : { id: t[5], event: t[6], args: t[8] }).event &&
			events.has(r.event) &&
			events.get(r.event)(r);
	});
	window.addEventListener("DOMContentLoaded", (t) => {
		events.clear();
		var r,
			o,
			n,
			i,
			l,
			p,
			u,
			v,
			timeoutPromise = function (promise, timeout = 3e3) {
				return Promise.race([promise, new Promise((resolve) => setTimeout(() => resolve({ args: ["error", "timeout"] }), timeout))]);
			},
			g = () => {
				api = postAPI(configID, appOrigin, events, p, v);
				var t = uuid(),
					d = ((e, t, r, o, n, i, l, d) => {
						e.isFullscreen = e.isFullscreen || e[23] || 0;
						var c = "";
						getSelf ? (c = r.type) : "" !== t && /kaios/gi.test(navigator.userAgent) && (c = n.origin.endsWith(".localhost") ? "signed" : "PWA");
						var p = {
							w: e.w,
							h: e.h,
							testMode: e.test || 0,
							fs: e.isFullscreen,
							fsdimension: o,
							publisher: e.publisher,
							app: e.app,
							slot: e.slot,
							requestId: i,
							manifestUrl: t,
							adData: { html: "", target: "", adId: "", type: "", buyer: "", clickUrl: "", color: "", readyNow: false, track: {} },
							rotating: false,
							visibility: { onScreen: true, onScreenPercent: 100 },
							loc: n,
							sdkVersion: l,
							appType: c,
							appVersion: r.version || (r.b2g_features && r.b2g_features.version) || "",
							cursorEnabled: true === r.cursor || (r.b2g_features && true === r.b2g_features.cursor),
							kaiVersions: getKaiVer(navigator.userAgent),
							clicked: false,
							bannerReportAd: e.bannerReportAd,
							certState: d,
						};
						if (1 === p.fs || (e.w && e.h)) {
							if (1 === p.testMode || 0 === p.testMode) {
								return p.fs && postMaskGlobalFSListeners(), p;
							}
							postReject(s);
						} else {
							postReject(a);
						}
					})(r, o, n, i, l, t, p, v);
				d && L(d, { shouldPostAdReady: true });
			};
		Promise.all([
			timeoutPromise(api.postGetSettings()),
			timeoutPromise(api.postGetManifestURL()),
			timeoutPromise(api.postGetFullscreenDimension()),
			timeoutPromise(api.postGetOrigin()),
			timeoutPromise(api.postGetSDKVersion()),
			timeoutPromise(api.postGetManifest()),
		])
			.then((e) => {
				if ("error" === e[0].args[0]) {
					throw (postReject(d), new Error("cannot fetch settings"));
				}
				if (
					((r = e[0].args[1]),
					(o = "error" === e[1].args[0] ? "" : e[1].args[1]),
					(i = "error" === e[2].args[0] ? { maxWidth: window.innerWidth, maxHeight: window.innerHeight } : { maxHeight: e[2].args[1], maxWidth: e[2].args[2] }),
					(l = "error" !== e[3].args[0] && e[3].args[1].indexOf("file://") < 0 ? { href: e[3].args[1], origin: e[3].args[2] } : { href: "", origin: "" }),
					"error" === e[4].args[0])
				) {
					throw (postReject(c), new Error("unsupported SDK version"));
				}
				if (
					((p = e[4].args[1]),
					(u = parseInt(p.replace(/\./g, ""))),
					(n = "error" !== e[5].args[0] ? e[5].args[2] : { type: "", version: "" }),
					!(u < 152 || 200 === u || 300 === u || (u >= 152 && "web" === n.type && o.startsWith("https://") && !o.startsWith("https://api.kaiostech.com"))))
				) {
					return timeoutPromise(api.postGetCertificateState());
				}
				(v = !navigator.mozApps), g();
			})
			.then((e) => {
				e && ((v = "error" === e.args[0] ? !navigator.mozApps : e.args[1]), g());
			});
	});
}
var generateMsgId = function () {
		var e = new Uint8Array(((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8) || 40) / 2);
		return (
			window.crypto.getRandomValues(e),
			Array.from(e, function (e) {
				return e.toString(16).padStart(2, "0");
			}).join("")
		);
	},
	withResponse = (e) => (t) =>
		function () {
			var r = generateMsgId(),
				a = new Promise((t) => e.set(r, t));
			a.then(() => e.delete(r));
			for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++) {
				n[i] = arguments[i];
			}
			return t(r, ...n), a;
		},
	mapObjValues = (e, t) => {
		var r = {};
		for (var a in e) {
			r[a] = t(e[a]);
		}
		return r;
	},
	postAPI = (configID, appOrigin, r, sdkVersion) => {
		var o = (e, t) => {
				postMsg("___API___postOpenWinWithThemeColorWorkaround", [e, t]);
			},
			postMsg = (r, a) => {
				var o = { id: configID, event: r, args: a };
				window.parent.postMessage(JSON.stringify(o), appOrigin);
			},
			i = {
				postGetVisibility: (e) => {
					postMsg("___API___postGetVisibility", [e]);
				},
				postGetSettings: (e) => {
					postMsg("___API___postGetSettings", [e]);
				},
				postGetManifestURL: (e) => {
					postMsg("___API___postGetManifestURL", [e]);
				},
				postGetFullscreenDimension: (e) => {
					postMsg("___API___postGetFullscreenDimension", [e]);
				},
				postGetManifest: (e) => {
					postMsg("___API___postGetManifest", [e]);
				},
				postGetSDKVersion: (e) => {
					postMsg("___API___postGetSDKVersion", [e]);
				},
				postGetOrigin: (e) => {
					postMsg("___API___postGetOrigin", [e]);
				},
				postGetCertificateState: (e) => {
					postMsg("___API___postGetCertificateState", [e]);
				},
			},
			s = {
				postError: (e) => {
					postMsg("___API___postError", [e]);
				},
				postReject: (e) => {
					postMsg("___API___postReject", [e]);
				},
				postDestroyAd: (e) => {
					postMsg("___API___postDestroyAd", [e]);
				},
				postOpenWin: (e, t) => {
					postMsg("___API___postOpenWin", [e, t]);
				},
				postAssignLocation: (e, t) => {
					postMsg("___API___postAssignLocation", [e, t]);
				},
				postAssignLocationWithThemeColorWorkaround: (e, t) => {
					postMsg("___API___postAssignLocationWithThemeColorWorkaround", [e, t]);
				},
				postDisplayFullscreenAd: (e, t, r) => {
					postMsg("___API___postDisplayFullscreenAd", [e, t, r]);
				},
				postDisplayBannerAd: (e, t, r, a, o, i) => {
					postMsg("___API___postDisplayBannerAd", [e, t, r, a, o, i]);
				},
				postSetIgnoreKeys: (e, t, r, a) => {
					postMsg("___API___postSetIgnoreKeys", [e, t, r, a]);
				},
				postAdFocus: () => {
					postMsg("___API___postAdFocus", []);
				},
				postMaskGlobalFSListeners: () => {
					postMsg("___API___postMaskGlobalFSListeners", []);
				},
			};
		if (sdkVersion) {
			var l = sdkFeaturesForVersion(sdkVersion);
			l.pollAdWindowClosed ? (i.postOpenWinWithThemeColorWorkaround = o) : (s.postOpenWinWithThemeColorWorkaround = (e) => o("open_win", e)),
				l.reportAd &&
					(i.postShowReportAdMenu = (e, t, r) => {
						postMsg("___API___postShowReportAdMenu", [e, t, r]);
					});
		}
		return _objectSpread2(_objectSpread2({ postMsg: postMsg }, mapObjValues(i, withResponse(r))), s);
	};
"undefined" != typeof mswWorker && mswWorker.start(), initFrame();
