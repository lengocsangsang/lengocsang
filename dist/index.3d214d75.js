// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ikQug":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"bB7Pu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _timeTitleJs = require("./Controller/timeTitle.js");
var _timeTitleJsDefault = parcelHelpers.interopDefault(_timeTitleJs);
var _checkBirthdayJs = require("./Controller/checkBirthday.js");
var _checkBirthdayJsDefault = parcelHelpers.interopDefault(_checkBirthdayJs);
var _addTasksJs = require("./Controller/addTasks.js");
var _addTasksJsDefault = parcelHelpers.interopDefault(_addTasksJs);
var _sidePanelJs = require("./Controller/sidePanel.js");
var _sidePanelJsDefault = parcelHelpers.interopDefault(_sidePanelJs);
var _getCoinListJs = require("./Controller/getCoinList.js");
var _getCoinListJsDefault = parcelHelpers.interopDefault(_getCoinListJs);
var _newsRenderJs = require("./Controller/newsRender.js");
var _newsRenderJsDefault = parcelHelpers.interopDefault(_newsRenderJs);
// TITLE UPDATING
(0, _timeTitleJsDefault.default)();
// TASK INPUT AND ADDING
(0, _addTasksJsDefault.default)();
// MANIPULATE SIDE-PANEL
(0, _sidePanelJsDefault.default)();
// CHECK BIRTHDAY
(0, _checkBirthdayJsDefault.default)();
setInterval((0, _checkBirthdayJsDefault.default), 60000);
// Render coin info as moving message
(0, _getCoinListJsDefault.default)();
setInterval((0, _getCoinListJsDefault.default), 86400000);
// Render news
(0, _newsRenderJsDefault.default)();

},{"./Controller/timeTitle.js":"vE6Su","./Controller/checkBirthday.js":"jW6Wi","./Controller/addTasks.js":"fCZmY","./Controller/sidePanel.js":"4pPCE","./Controller/getCoinList.js":"6ziEW","./Controller/newsRender.js":"li9m8","@parcel/transformer-js/src/esmodule-helpers.js":"a75BS"}],"vE6Su":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateClock);
var _configJs = require("./config.js");
var _configJsDefault = parcelHelpers.interopDefault(_configJs);
const titleDate = document.querySelector(".titleDate");
const titleWeekday = document.querySelector(".titleWeekday");
const titleTime = document.querySelector(".title-time");
function updateClock() {
    const today = new Date();
    const year = today.getFullYear(); // 2025
    const month = (0, _configJs.months)[today.getMonth()]; // Get month name (e.g., "Feb")
    const date = today.getDate(); // Get day of the month (e.g., 25)
    const titleHour = today.getHours().toString().padStart(2, "0");
    const titleMin = today.getMinutes().toString().padStart(2, "0");
    const titleSec = today.getSeconds().toString().padStart(2, "0");
    titleTime.textContent = `${titleHour}:${titleMin}:${titleSec}`;
    //4. Implement Date Weekday on Title
    titleDate.textContent = `${year} ${month} ${date},`;
    titleWeekday.textContent = (0, _configJsDefault.default)();
    setTimeout(updateClock, 1000);
}

},{"./config.js":"dMFhV","@parcel/transformer-js/src/esmodule-helpers.js":"a75BS"}],"dMFhV":[function(require,module,exports,__globalThis) {
// Months for timeTitle.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "months", ()=>months);
parcelHelpers.export(exports, "default", ()=>weekDayCal);
parcelHelpers.export(exports, "birthdays", ()=>birthdays);
parcelHelpers.export(exports, "fireworkColors", ()=>fireworkColors);
parcelHelpers.export(exports, "ai", ()=>ai);
parcelHelpers.export(exports, "technology", ()=>technology);
parcelHelpers.export(exports, "crypto", ()=>crypto);
parcelHelpers.export(exports, "business", ()=>business);
parcelHelpers.export(exports, "sports", ()=>sports);
parcelHelpers.export(exports, "travel", ()=>travel);
parcelHelpers.export(exports, "finance", ()=>finance);
parcelHelpers.export(exports, "familyButton", ()=>familyButton);
const months = [
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
];
function weekDayCal() {
    let weekDay;
    switch(new Date().getDay()){
        case 0:
            weekDay = "Sunday";
            break;
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tuesday";
            break;
        case 3:
            weekDay = "Wednesday";
            break;
        case 4:
            weekDay = "Thursday";
            break;
        case 5:
            weekDay = "Friday";
            break;
        case 6:
            weekDay = "Saturday";
            break;
    }
    return weekDay;
}
const birthdays = {
    HaNhu: "2000-08-07",
    MinhNhu: "2004-03-16",
    Dad: "1953-01-04",
    Sang: "1988-05-01",
    Ngan: "1982-10-10",
    Huyen: "1980-06-10",
    Trong: "1980-03-16"
};
const fireworkColors = [
    {
        color: "#ff4081",
        shadow: "0 0 5px #ff4081, 0 0 10px #ff4081, 0 0 15px #ff4081"
    },
    {
        color: "#00bcd4",
        shadow: "0 0 5px #00bcd4, 0 0 10px #00bcd4, 0 0 15px #00bcd4"
    },
    {
        color: "#ffffff",
        shadow: "0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff"
    },
    {
        color: "#8bc34a",
        shadow: "0 0 5px #8bc34a, 0 0 10px #8bc34a, 0 0 15px #8bc34a"
    },
    {
        color: "#ffeb3b",
        shadow: "0 0 5px #ffeb3b, 0 0 10px #ffeb3b, 0 0 15px #ffeb3b"
    },
    {
        color: "#9c27b0",
        shadow: "0 0 5px #9c27b0, 0 0 10px #9c27b0, 0 0 15px #9c27b0"
    },
    {
        color: "#e91e63",
        shadow: "0 0 5px #e91e63, 0 0 10px #e91e63, 0 0 15px #e91e63"
    },
    {
        color: "#2196f3",
        shadow: "0 0 5px #2196f3, 0 0 10px #2196f3, 0 0 15px #2196f3"
    },
    {
        color: "#ff5722",
        shadow: "0 0 5px #ff5722, 0 0 10px #ff5722, 0 0 15px #ff5722"
    },
    {
        color: "#673ab7",
        shadow: "0 0 5px #673ab7, 0 0 10px #673ab7, 0 0 15px #673ab7"
    },
    {
        color: "#4caf50",
        shadow: "0 0 5px #4caf50, 0 0 10px #4caf50, 0 0 15px #4caf50"
    },
    {
        color: "#ff9800",
        shadow: "0 0 5px #ff9800, 0 0 10px #ff9800, 0 0 15px #ff9800"
    },
    {
        color: "#3f51b5",
        shadow: "0 0 5px #3f51b5, 0 0 10px #3f51b5, 0 0 15px #3f51b5"
    },
    {
        color: "#009688",
        shadow: "0 0 5px #009688, 0 0 10px #009688, 0 0 15px #009688"
    },
    {
        color: "#c2185b",
        shadow: "0 0 5px #c2185b, 0 0 10px #c2185b, 0 0 15px #c2185b"
    },
    {
        color: "#607d8b",
        shadow: "0 0 5px #607d8b, 0 0 10px #607d8b, 0 0 15px #607d8b"
    },
    {
        color: "#795548",
        shadow: "0 0 5px #795548, 0 0 10px #795548, 0 0 15px #795548"
    },
    {
        color: "#ffb300",
        shadow: "0 0 5px #ffb300, 0 0 10px #ffb300, 0 0 15px #ffb300"
    }
];
const ai = document.querySelector(".country-button-ai");
const technology = document.querySelector(".country-button-technology");
const crypto = document.querySelector(".country-button-crypto");
const business = document.querySelector(".country-button-business");
const sports = document.querySelector(".country-button-sports");
const travel = document.querySelector(".country-button-travel");
const finance = document.querySelector(".country-button-finance");
const familyButton = document.getElementById("#panel-item-family");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"a75BS"}],"a75BS":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jW6Wi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>checkBirthday);
var _configJs = require("./config.js");
function checkBirthday() {
    let today = new Date();
    let todayMonth = today.getMonth();
    let todayDate = today.getDate();
    // Check for birthdays today
    for(let name in 0, _configJs.birthdays){
        let birthday = new Date((0, _configJs.birthdays)[name]);
        let birthdayMonth = birthday.getMonth();
        let birthdayDate = birthday.getDate();
        //Add moving message
        if (todayMonth === birthdayMonth && todayDate === birthdayDate) {
            document.querySelector(".moving-message").textContent = `Happy Birthday to ${name}!!!`;
            // Add fireworks to the container
            const fireworkContainer = document.querySelector(".right-container");
            // Create fireworks dynamically
            // randomly assign colors and effects to the fireworks
            function assignFireworkEffects() {
                for(let i = 0; i < 100; i++){
                    // 10 fireworks
                    const firework = document.createElement("div");
                    firework.classList.add("firework");
                    firework.style.top = `${Math.random() * 100}%`; // Random placement
                    firework.style.left = `${Math.random() * 100}%`;
                    fireworkContainer.appendChild(firework);
                }
                const fireworks = fireworkContainer.querySelectorAll(".firework");
                console.log("fireworks.length:", fireworks.length);
                for(let i = 0; i < fireworks.length; i++){
                    const randomIndex = Math.floor(Math.random() * (0, _configJs.fireworkColors).length);
                    const { color, shadow } = (0, _configJs.fireworkColors)[randomIndex];
                    // Apply the color and shadow dynamically
                    fireworks[i].style.backgroundColor = color;
                    fireworks[i].style.boxShadow = shadow;
                }
            }
            assignFireworkEffects();
            // Optional: Remove fireworks after animation completes
            setTimeout(()=>{
                const fireworks = fireworkContainer.querySelectorAll(".firework");
                fireworks.forEach((firework)=>firework.remove());
            }, 100000); // Remove fireworks after 2 seconds (when the animation is finished)
        }
    }
}

},{"./config.js":"dMFhV","@parcel/transformer-js/src/esmodule-helpers.js":"a75BS"}],"fCZmY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addTaskToMainSection);
function addTaskToMainSection() {
    document.addEventListener("DOMContentLoaded", function() {
        const taskInputBox = document.querySelector(".taskInputBox");
        const taskList = document.querySelector(".taskList");
        const clearTaskBtn = document.querySelector(".clearTaskBtn");
        loadPage();
        taskInputBox.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                e.preventDefault();
                const taskContent = taskInputBox.value.trim();
                if (taskContent === "") return alert("You haven't input your task yet");
                addTaskToDom(taskContent);
                saveTaskToLocalStorage(taskContent);
                taskInputBox.value = "";
            }
        });
        clearTaskBtn.addEventListener("click", removeItemFromLocalStorage);
        function addTaskToDom(taskContent) {
            const taskItem = document.createElement("li");
            taskItem.classList.add("task-item");
            taskItem.textContent = taskContent;
            taskList.appendChild(taskItem);
        }
        function saveTaskToLocalStorage(taskContent) {
            let tasks = getTasksFromLocalStorage();
            tasks.push(taskContent);
            // console.log(tasks);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        function getTasksFromLocalStorage() {
            let tasks = localStorage.getItem("tasks");
            if (tasks === null) tasks = [];
            else tasks = JSON.parse(tasks);
            return tasks;
        }
        function loadPage() {
            let tasks = getTasksFromLocalStorage();
            tasks.forEach((task)=>{
                addTaskToDom(task);
            });
        }
        function removeItemFromLocalStorage() {
            let tasks = getTasksFromLocalStorage();
            if (tasks.length === 0) return alert("no tasks registered yet");
            localStorage.removeItem("tasks");
            taskList.innerHTML = "";
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"a75BS"}],"4pPCE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>manipulateSidePanel);
function manipulateSidePanel() {
    document.querySelector(".side-panel-button").addEventListener("mouseenter", function() {
        document.querySelector(".side-panel").style.transform = "translateX(22.3vw)";
    });
    document.querySelector(".panel-button-container").addEventListener("mouseleave", function() {
        document.querySelector(".side-panel").style.transform = "translateX(-22.3vw)";
    });
    document.getElementById("panel-item-news").addEventListener("click", function() {
        const element = document.getElementById("newspage");
        element.scrollIntoView();
    });
    document.getElementById("panel-item-family").addEventListener("click", function() {
        const element = document.querySelector(".family-general-container");
        element.scrollIntoView();
    });
    document.getElementById("panel-item-professional").addEventListener("click", function() {
        const element = document.querySelector(".professional-general-container");
        element.scrollIntoView();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"a75BS"}],"6ziEW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>fetchCoinList);
let bitcoin, ethereum, tether, solana, dogecoin, bnb;
// BITCOIN ELEMENTS
const bitcoinElTitle = document.querySelector(".bitcoin-title");
const bitcoinPriceEl = document.querySelector(".bitcoin-price");
const bitcoinCapEl = document.querySelector(".bitcoin-market-cap");
const bitcoinSupplyEl = document.querySelector(".bitcoin-max-supply");
// ETHEREUM ELEMENTS
const ethereumElTitle = document.querySelector(".ethereum-title");
const ethereumPriceEl = document.querySelector(".ethereum-price");
const ethereumCapEl = document.querySelector(".ethereum-market-cap");
const ethereumSupplyEl = document.querySelector(".ethereum-max-supply");
// SOLANA ELEMENTS
const solanaElTitle = document.querySelector(".solana-title");
const solanaPriceEl = document.querySelector(".solana-price");
const solanaCapEl = document.querySelector(".solana-market-cap");
const solanaSupplyEl = document.querySelector(".solana-max-supply");
// TETHER ELEMENTS
const tetherElTitle = document.querySelector(".tether-title");
const tetherPriceEl = document.querySelector(".tether-price");
const tetherCapEl = document.querySelector(".tether-market-cap");
const tetherSupplyEl = document.querySelector(".tether-max-supply");
// DOGECOIN ELEMENTS
const dogecoinElTitle = document.querySelector(".dogecoin-title");
const dogecoinPriceEl = document.querySelector(".dogecoin-price");
const dogecoinCapEl = document.querySelector(".dogecoin-market-cap");
const dogecoinSupplyEl = document.querySelector(".dogecoin-max-supply");
async function fetchCoinList() {
    try {
        const allCoinsListResponse = await fetch("https://api.coingecko.com/api/v3/coins/list");
        if (!allCoinsListResponse.ok) throw new Error(`HTTP Error: ${allCoinsListResponse.status}`);
        const allCoinsList = await allCoinsListResponse.json();
        for(let i = 0; i < allCoinsList.length; i++){
            const name = allCoinsList[i].name.toLowerCase();
            if (name === "bitcoin") bitcoin = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
            if (name === "ethereum") ethereum = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
            if (name === "tether") tether = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
            if (name === "solana") solana = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
            if (name === "dogecoin") dogecoin = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
        }
        // Fetch all data
        const bitcoinResponse = await fetch(`https://api.coinpaprika.com/v1/tickers/${bitcoin}`);
        if (!bitcoinResponse.ok) throw new Error(`Bitcoin fetch failed: ${bitcoinResponse.status}`);
        const bitcoinInfo = await bitcoinResponse.json();
        const ethereumResponse = await fetch(`https://api.coinpaprika.com/v1/tickers/${ethereum}`);
        if (!ethereumResponse.ok) throw new Error(`Ethereum fetch failed: ${ethereumResponse.status}`);
        const ethereumInfo = await ethereumResponse.json();
        const solanaResponse = await fetch(`https://api.coinpaprika.com/v1/tickers/${solana}`);
        if (!solanaResponse.ok) throw new Error(`Solana fetch failed: ${solanaResponse.status}`);
        const solanaInfo = await solanaResponse.json();
        const tetherResponse = await fetch(`https://api.coinpaprika.com/v1/tickers/${tether}`);
        if (!tetherResponse.ok) throw new Error(`Tether fetch failed: ${tetherResponse.status}`);
        const tetherInfo = await tetherResponse.json();
        const dogecoinResponse = await fetch(`https://api.coinpaprika.com/v1/tickers/${dogecoin}`);
        if (!dogecoinResponse.ok) throw new Error(`Dogecoin fetch failed: ${dogecoinResponse.status}`);
        const dogecoinInfo = await dogecoinResponse.json();
        // Sequential updates with setTimeout
        const updateCoin = (delay, coinData, titleEl, priceEl, capEl, supplyEl, coinId)=>{
            setTimeout(()=>{
                if (titleEl) titleEl.textContent = coinId.toUpperCase();
                if (priceEl) priceEl.textContent = `Price: ${coinData.quotes.USD.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                })}`;
                if (capEl) capEl.textContent = `Market cap: ${coinData.quotes.USD.market_cap.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                })}`;
                if (supplyEl) supplyEl.textContent = `Max supply: ${coinData.max_supply ? coinData.max_supply.toLocaleString("en-US") : "N/A"}`;
            }, delay);
        };
        updateCoin(0, bitcoinInfo, bitcoinElTitle, bitcoinPriceEl, bitcoinCapEl, bitcoinSupplyEl, bitcoin);
        updateCoin(5000, ethereumInfo, ethereumElTitle, ethereumPriceEl, ethereumCapEl, ethereumSupplyEl, ethereum);
        updateCoin(10000, solanaInfo, solanaElTitle, solanaPriceEl, solanaCapEl, solanaSupplyEl, solana);
        updateCoin(15000, tetherInfo, tetherElTitle, tetherPriceEl, tetherCapEl, tetherSupplyEl, tether);
        updateCoin(20000, dogecoinInfo, dogecoinElTitle, dogecoinPriceEl, dogecoinCapEl, dogecoinSupplyEl, dogecoin);
    } catch (error) {
        console.error("Error:", error.message);
    }
} // let bitcoin, ethereum, tether, bnb, solana, dogecoin;
 // // BITCOIN ELEMENTS
 // const bitcoinElTitle = document.querySelector(".bitcoin-title");
 // const bitcoinPriceEl = document.querySelector(".bitcoin-price");
 // const bitcoinCapEl = document.querySelector(".bitcoin-market-cap");
 // const bitcoinSupplyEl = document.querySelector(".bitcoin-max-supply");
 // // ETHEREUM ELEMENTS
 // const ethereumElTitle = document.querySelector(".ethereum-title");
 // const ethereumPriceEl = document.querySelector(".ethereum-price");
 // const ethereumCapEl = document.querySelector(".ethereum-market-cap");
 // const ethereumSupplyEl = document.querySelector(".ethereum-max-supply");
 // // DODGECOIN ELEMENTS
 // const solanaElTitle = document.querySelector(".solana-title");
 // const solanaPriceEl = document.querySelector(".solana-price");
 // const solanaCapEl = document.querySelector(".solana-market-cap");
 // const solanaSupplyEl = document.querySelector(".solana-max-supply");
 // // TETHER ELEMENTS
 // const tetherElTitle = document.querySelector(".tether-title");
 // const tetherPriceEl = document.querySelector(".tether-price");
 // const tetherCapEl = document.querySelector(".tether-market-cap");
 // const tetherSupplyEl = document.querySelector(".tether-max-supply");
 // export default async function fetchCoinList() {
 //   try {
 //     const allCoinsListResponse = await fetch(
 //       "https://api.coingecko.com/api/v3/coins/list"
 //     );
 //     if (!allCoinsListResponse.ok) {
 //       throw new Error("Error:", allCoinsListResponse.status);
 //     }
 //     const allCoinsList = await allCoinsListResponse.json();
 //     for (let i = 0; i < allCoinsList.length; i++) {
 //       // get input string for bitcoin
 //       if (allCoinsList[i].name.toLowerCase() === "bitcoin") {
 //         bitcoin = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
 //         console.log(bitcoin);
 //       }
 //       // get input string for ethereum
 //       if (allCoinsList[i].name.toLowerCase() === "ethereum") {
 //         ethereum = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
 //       }
 //       // get input string for Tether
 //       if (allCoinsList[i].name.toLowerCase() === "tether") {
 //         tether = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
 //       }
 //       // get input string for BNB
 //       if (allCoinsList[i].name.toLowerCase() === "bnb") {
 //         bnb = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
 //       }
 //       // get input string for Solana
 //       if (allCoinsList[i].name.toLowerCase() === "solana") {
 //         solana = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
 //         console.log(solana);
 //       }
 //       // get input string for Dogdecoin
 //       if (allCoinsList[i].name.toLowerCase() === "dogecoin") {
 //         dogecoin = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
 //         console.log(dogecoin);
 //       }
 //     }
 //     async function getCoinInfo() {
 //       // bitcoin
 //       try {
 //         // SOALANA RENDER AND MOVING
 //         const solanainInfoPromise = (
 //           await fetch(`https://api.coinpaprika.com/v1/tickers/${solana}`)
 //         )
 //           .json((res) => res)
 //           .then((data) => data)
 //           .catch((err) => {
 //             throw new Error("ERROR:", err.status);
 //           });
 //         const solanaCoinInfo = await solanainInfoPromise;
 //         // SOALANA TITLE
 //         solanaElTitle.textContent = solana.toUpperCase();
 //         // SOALANA PRICE
 //         solanaPriceEl.textContent = `Price: ${solanaCoinInfo.quotes.USD.price.toLocaleString(
 //           "en-US",
 //           { style: "currency", currency: "USD" }
 //         )}`;
 //         console.log(
 //           `Market cap: ${solanaCoinInfo.quotes.USD.market_cap.toLocaleString(
 //             "en-US",
 //             {
 //               style: "currency",
 //               currency: "USD",
 //               minimumFractionDigits: 0,
 //               maximumFractionDigits: 0,
 //             }
 //           )}`
 //         );
 //         // SOALANA CAP
 //         solanaCapEl.textContent = `Market cap: ${solanaCoinInfo.quotes.USD.market_cap.toLocaleString(
 //           "en-US",
 //           {
 //             style: "currency",
 //             currency: "USD",
 //             minimumFractionDigits: 0,
 //             maximumFractionDigits: 0,
 //           }
 //         )}`;
 //         // SOALANA SUPPLY
 //         solanaSupplyEl.textContent = `Max supply: ${solanaCoinInfo.max_supply.toLocaleString(
 //           "en-US"
 //         )}`;
 //         // TETHER RENDER AND MOVING
 //         const tetherInfoPromise = (
 //           await fetch(`https://api.coinpaprika.com/v1/tickers/${tether}`)
 //         )
 //           .json((res) => res)
 //           .then((data) => data)
 //           .catch((err) => {
 //             throw new Error("ERROR:", err.status);
 //           });
 //         const tetherInfo = await tetherInfoPromise;
 //         // TETHER TITLE
 //         tetherElTitle.textContent = tether.toUpperCase();
 //         // TETHER PRICE
 //         tetherPriceEl.textContent = `Price: ${tetherInfo.quotes.USD.price.toLocaleString(
 //           "en-US",
 //           { style: "currency", currency: "USD" }
 //         )}`;
 //         console.log(
 //           `Market cap: ${tetherInfo.quotes.USD.market_cap.toLocaleString(
 //             "en-US",
 //             {
 //               style: "currency",
 //               currency: "USD",
 //               minimumFractionDigits: 0,
 //               maximumFractionDigits: 0,
 //             }
 //           )}`
 //         );
 //         // TETHER CAP
 //         tetherCapEl.textContent = `Market cap: ${tetherInfo.quotes.USD.market_cap.toLocaleString(
 //           "en-US",
 //           {
 //             style: "currency",
 //             currency: "USD",
 //             minimumFractionDigits: 0,
 //             maximumFractionDigits: 0,
 //           }
 //         )}`;
 //         // ETHEREUM SUPPLY
 //         tetherSupplyEl.textContent = `Max supply: ${tetherInfo.max_supply.toLocaleString(
 //           "en-US"
 //         )}`;
 //         // BITCOIN RENDER AND MOVING
 //         const bitcoinInfoPromise = (
 //           await fetch(`https://api.coinpaprika.com/v1/tickers/${bitcoin}`)
 //         )
 //           .json((res) => res)
 //           .then((data) => data)
 //           .catch((err) => {
 //             throw new Error("ERROR:", err.status);
 //           });
 //         const bitcoinInfo = await bitcoinInfoPromise;
 //         // BITCOIN TITLE
 //         bitcoinElTitle.textContent = bitcoin.toUpperCase();
 //         // BITCOIN PRICE
 //         bitcoinPriceEl.textContent = `Price: ${bitcoinInfo.quotes.USD.price.toLocaleString(
 //           "en-US",
 //           { style: "currency", currency: "USD" }
 //         )}`;
 //         // BITCOIN CAP
 //         bitcoinCapEl.textContent = `Market cap: ${bitcoinInfo.quotes.USD.market_cap.toLocaleString(
 //           "en-US",
 //           {
 //             style: "currency",
 //             currency: "USD",
 //             minimumFractionDigits: 0,
 //             maximumFractionDigits: 0,
 //           }
 //         )}`;
 //         // BITCOIN SUPPLY
 //         bitcoinSupplyEl.textContent = `Max supply: ${bitcoinInfo.max_supply.toLocaleString(
 //           "en-US"
 //         )}`;
 //         // ETHEREUM RENDER AND MOVING
 //         const ethereumInfoPromise = (
 //           await fetch(`https://api.coinpaprika.com/v1/tickers/${ethereum}`)
 //         )
 //           .json((res) => res)
 //           .then((data) => data)
 //           .catch((err) => {
 //             throw new Error("ERROR:", err.status);
 //           });
 //         const ethereumInfo = await ethereumInfoPromise;
 //         // ETHEREUM TITLE
 //         ethereumElTitle.textContent = ethereum.toUpperCase();
 //         // ETHEREUM PRICE
 //         ethereumPriceEl.textContent = `Price: ${ethereumInfo.quotes.USD.price.toLocaleString(
 //           "en-US",
 //           { style: "currency", currency: "USD" }
 //         )}`;
 //         // ETHEREUM CAP
 //         ethereumCapEl.textContent = `Market cap: ${ethereumInfo.quotes.USD.market_cap.toLocaleString(
 //           "en-US",
 //           {
 //             style: "currency",
 //             currency: "USD",
 //             minimumFractionDigits: 0,
 //             maximumFractionDigits: 0,
 //           }
 //         )}`;
 //         // ETHEREUM SUPPLY
 //         ethereumSupplyEl.textContent = `Max supply: ${ethereumInfo.max_supply.toLocaleString(
 //           "en-US"
 //         )}`;
 //       } catch (error) {
 //         console.log("ERROR:", error.status);
 //       }
 //     }
 //     getCoinInfo();
 //   } catch (error) {
 //     console.log("ERROR:");
 //   }
 // }
 // // let bitcoin, ethereum, tether, bnb, solana, dogdecoin;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"a75BS"}],"li9m8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>newsRender);
var _newsFunctionJs = require("./newsFunction.js");
var _newsFunctionJsDefault = parcelHelpers.interopDefault(_newsFunctionJs);
var _configJs = require("./config.js");
const backButton = document.querySelector(".back-to-homepage");
async function newsRender() {
    // AI BUTTON CLICK
    (0, _configJs.ai).addEventListener("click", async function() {
        (0, _newsFunctionJsDefault.default)("ai");
    });
    // CRYPTO BUTTON CLICK
    (0, _configJs.crypto).addEventListener("click", async function() {
        (0, _newsFunctionJsDefault.default)("crypto");
    });
    // BUSINESS BUTTON CLICK
    (0, _configJs.business).addEventListener("click", async function() {
        (0, _newsFunctionJsDefault.default)("business");
    });
    // SPORTS BUTTON CLICK
    (0, _configJs.sports).addEventListener("click", async function() {
        (0, _newsFunctionJsDefault.default)("sports");
    });
    // TRAVEL BUTTON CLICK
    (0, _configJs.travel).addEventListener("click", async function() {
        (0, _newsFunctionJsDefault.default)("travel");
    });
    // FINANCE BUTTON CLICK
    (0, _configJs.finance).addEventListener("click", async function() {
        (0, _newsFunctionJsDefault.default)("finance");
    });
    // FINANCE BUTTON CLICK
    (0, _configJs.technology).addEventListener("click", async function() {
        (0, _newsFunctionJsDefault.default)("technology");
    });
    backButton.addEventListener("click", function() {
        const element = document.querySelector(".general-container");
        element.scrollIntoView();
    });
}

},{"./newsFunction.js":"6HlH5","./config.js":"dMFhV","@parcel/transformer-js/src/esmodule-helpers.js":"a75BS"}],"6HlH5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>newsFunction);
const apiKeyForNews = "1a58498af44a4f23a5a58734f793215b";
const newsRenderEl = document.querySelector(".news-render");
function renderFunction(resultForNews) {
    if (resultForNews.totalResults === 0) {
        const newsTitle = document.createElement("em");
        newsTitle.classList.add("news-content");
        newsTitle.textContent = "No top headlines for now...";
        newsRenderEl.appendChild(newsTitle);
    }
    // CASE 2: MORE THAN 5 RESULTS FOUND
    if (resultForNews.articles.length > 5) for(let i = 0; i < 5; i++){
        // Create news title element
        const newsTitle = document.createElement("li");
        newsTitle.classList.add("news-content");
        newsTitle.textContent = resultForNews.articles[i].title;
        // Create news URL element
        const newsUrl = document.createElement("a");
        newsUrl.href = resultForNews.articles[i].url;
        newsUrl.textContent = resultForNews.articles[i].url;
        newsUrl.target = "_blank";
        // Append the news title and URL to the container
        newsRenderEl.appendChild(newsTitle);
        newsRenderEl.appendChild(newsUrl);
    }
    else for(let i = 0; i < resultForNews.articles.length; i++){
        // Create news title element
        const newsTitle = document.createElement("li");
        newsTitle.classList.add("news-content");
        newsTitle.textContent = resultForNews.articles[i].title;
        // Create news URL element
        const newsUrl = document.createElement("a");
        newsUrl.href = resultForNews.articles[i].url;
        newsUrl.textContent = resultForNews.articles[i].url;
        newsUrl.target = "_blank";
        // Append the news title and URL to the container
        newsRenderEl.appendChild(newsTitle);
        newsRenderEl.appendChild(newsUrl);
    }
}
async function newsFunction(query) {
    try {
        // 1. DELETE ALL CONTENT INSIDE newsRenderEl
        newsRenderEl.innerHTML = "";
        // 2. FETCH FOR NEWS
        const resForNews = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKeyForNews}`, {
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        });
        const resultForNews = await resForNews.json();
        // 3. RENDER NEWS
        renderFunction(resultForNews);
    } catch (error) {
        console.log("ERROR:", error.message);
    } finally{
        console.log("doing something here later");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"a75BS"}]},["ikQug","bB7Pu"], "bB7Pu", "parcelRequire94c2")

//# sourceMappingURL=index.3d214d75.js.map
