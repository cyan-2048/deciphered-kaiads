/**
 * @name KaiAds-SDK-Loader
 *
 * @description
 * acquired from the kaiads sdk page,
 * the file name is taken from the sourcemap comment found in the file
 *
 * @link https://kaiads.com/publishers/sdk.html
 * @link https://static.kaiads.com/ads-sdk/KaiAds-SDK-v5.zip
 */

var self = this,
	kaiAdConfigs = [],
	runConfigsWith = function (func) {
		kaiAdConfigs.forEach(function (config) {
			func.apply(self, config);
		});
		kaiAdConfigs = [];
	};

window.getKaiAd = function () {
	kaiAdConfigs.push(arguments);
};
window.getKaiAd.dummy = true;

var rejectErr19 = function (config) {
		if (typeof config.onerror === "function") {
			config.onerror(19);
		}
	},
	loadScriptAsync = function (scriptSrc) {
		return new Promise(function (resolve, reject) {
			var scriptEl = document.createElement("script");
			scriptEl.addEventListener("load", function () {
				resolve();
			}),
				scriptEl.addEventListener("error", function () {
					reject();
				}),
				(scriptEl.src = scriptSrc),
				(scriptEl.async = ![]),
				document.head.appendChild(scriptEl);
		});
	},
	loadScript = function (scriptSrc) {
		return new Promise(function (resolve, reject) {
			var scriptEl = document.createElement("script");
			scriptEl.addEventListener("load", function () {
				!getKaiAd || getKaiAd.dummy ? reject() : resolve();
			}),
				scriptEl.addEventListener("error", function () {
					reject();
				}),
				(scriptEl.src = scriptSrc),
				document.head.appendChild(scriptEl);
		});
	},
	promiseChain;

if (window.navigator.mozApps) {
	window.navigator.mozApps.getSelf().onsuccess = function (evt) {
		var selfDOMApp = evt.target.result;

		if (!selfDOMApp || !selfDOMApp.manifest || !selfDOMApp.manifest.type || selfDOMApp.manifest.type === "web") {
			promiseChain = loadScript("https://static.kaiads.com/ads-sdk/ads-sdk.v5.min.js");
		}

		if (!promiseChain) {
			// returns [" KAIOS/2.5.1", "2.5.1"]
			var isKaiOSDevice = / kaios\/((?:\d+.)*\d+)/gi.exec(window.navigator.userAgent);

			if (
				isKaiOSDevice &&
				// return true
				versionChecker(isKaiOSDevice[1], "2.5") === 1
			) {
				promiseChain = loadScript("http://127.0.0.1/sdk/ads/ads-sdk.min.js").catch(function () {
					return loadScript("http://127.0.0.1:8081/sdk/ads/ads-sdk.min.js");
				});
			}
		}

		!promiseChain && (promiseChain = Promise.reject());

		promiseChain
			.catch(function () {
				runConfigsWith(rejectErr19);
				window.getKaiAd = rejectErr19;
				getKaiAd = rejectErr19;
			})
			.then(function () {
				runConfigsWith(getKaiAd);
				window.getKaiAd = getKaiAd;
			});
	};
} else {
	promiseChain = loadScript(
		/kaios/gi.test(window.navigator.userAgent) && window.location.hostname.endsWith(".localhost")
			? "http://127.0.0.1/sdk/ads/ads-sdk.min.js"
			: "https://static.kaiads.com/ads-sdk/ads-sdk.v5.min.js"
	);

	!promiseChain && (promiseChain = Promise.reject());

	promiseChain
		.catch(function () {
			runConfigsWith(rejectErr19);
			window.getKaiAd = rejectErr19;
			getKaiAd = rejectErr19;
		})
		.then(function () {
			runConfigsWith(getKaiAd);
			window.getKaiAd = getKaiAd;
		});
}

/**
 * Returns 0, 1, or -1
 *
 * @example
 * 0 == current version is equal to target version
 * 1 == current version is greater than target version
 * -1 == current version is less than target version
 *
 * @param {string} _current
 * @param {string} _target
 * @returns
 */
function versionChecker(_current, _target) {
	var currentVersion = _current.split("."),
		targetVersion = _target.split(".");
	while (currentVersion.length < targetVersion.length) {
		currentVersion.push("0");
	}
	while (targetVersion.length < currentVersion.length) {
		targetVersion.push("0");
	}
	for (var i = 0; i < currentVersion.length; ++i) {
		if (currentVersion[i] == targetVersion[i]) continue;
		else return currentVersion[i] > targetVersion[i] ? 1 : -1;
	}
	return 0;
}
