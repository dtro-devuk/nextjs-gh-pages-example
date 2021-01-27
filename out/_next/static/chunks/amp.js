_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["amp"],{

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");
/* globals __webpack_hash__ */


if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill.default;
}

const data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
let {
  assetPrefix,
  page
} = data;
assetPrefix = assetPrefix || '';
let mostRecentHash = null;
/* eslint-disable-next-line */

let curHash = __webpack_require__.h();
const hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.


async function tryApplyUpdates() {
  if (!isUpdateAvailable() || !canApplyUpdates()) {
    return;
  }

  try {
    const res = await fetch("".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));
    const jsonData = await res.json();
    const curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

    const pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(mod => {
      return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
    });

    if (pageUpdated) {
      document.location.reload(true);
    } else {
      curHash = mostRecentHash;
    }
  } catch (err) {
    console.error('Error occurred checking for update', err);
    document.location.reload(true);
  }
}

(0, _eventsource.getEventSourceWrapper)({
  path: "".concat(assetPrefix, "/_next/webpack-hmr")
}).addMessageListener(event => {
  if (event.data === '\uD83D\uDC93') {
    return;
  }

  try {
    const message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, () => page);
(0, _fouc.displayContent)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
const eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(cb => {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: () => {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function (fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: cb => {
        eventCallbacks.push(cb);
      }
    };
  }

  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.default = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function () {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  fetch(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports.default = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.

function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


let evtSource;
let currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  const pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  const url = "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage);
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(event => {
    if (event.data.indexOf('{') === -1) return;

    try {
      const payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(pageRes => {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

},[["./node_modules/next/dist/client/dev/amp-dev.js","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9hbXAtZGV2LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vLi4vY2xpZW50L2Rldi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9ldmVudC1zb3VyY2UtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9jbGllbnQvZGV2L2ZvdWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9jbGllbnQvZGV2L29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkV2ZW50U291cmNlUG9seWZpbGwiLCJkYXRhIiwiSlNPTiIsImRvY3VtZW50IiwiYXNzZXRQcmVmaXgiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJob3RVcGRhdGVQYXRoIiwibW9kdWxlIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJyZXMiLCJmZXRjaCIsImpzb25EYXRhIiwiY3VyUGFnZSIsInBhZ2UiLCJwYWdlVXBkYXRlZCIsIkFycmF5IiwiT2JqZWN0IiwibW9kIiwiY29uc29sZSIsInBhdGgiLCJldmVudCIsIm1lc3NhZ2UiLCJ0cnlBcHBseVVwZGF0ZXMiLCJldmVudENhbGxiYWNrcyIsImxhc3RBY3Rpdml0eSIsImxpc3RlbmVycyIsIm9wdGlvbnMiLCJpbml0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImhhbmRsZURpc2Nvbm5lY3QiLCJzb3VyY2UiLCJpIiwiY2IiLCJjbGVhckludGVydmFsIiwic2V0VGltZW91dCIsImNsb3NlIiwiYWRkTWVzc2FnZUxpc3RlbmVyIiwiRXZlbnRTb3VyY2VXcmFwcGVyIiwiUmVzcG9uc2UiLCJUZXh0RGVjb2RlciIsIlRleHRFbmNvZGVyIiwiQWJvcnRDb250cm9sbGVyIiwiVGV4dERlY29kZXJQb2x5ZmlsbCIsIm9jdGV0c0NvdW50IiwiY29kZVBvaW50IiwiYml0c05lZWRlZCIsIlJFUExBQ0VSIiwic3RyaW5nIiwib2N0ZXRzIiwib2N0ZXQiLCJ2YWxpZCIsIlN0cmluZyIsInN1cHBvcnRzU3RyZWFtT3B0aW9uIiwic3RyZWFtIiwiayIsInRoYXQiLCJ4aHIiLCJzdGF0ZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJvblN0YXJ0Iiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImNvbnRlbnRUeXBlIiwib25Qcm9ncmVzcyIsInJlc3BvbnNlVGV4dCIsIm9uRmluaXNoIiwib25SZWFkeVN0YXRlQ2hhbmdlIiwib25UaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJ1cmwiLCJYSFJXcmFwcGVyIiwibmFtZSIsImMiLCJtYXAiLCJhcnJheSIsImFsbCIsImxpbmUiLCJwYXJ0cyIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJIZWFkZXJzUG9seWZpbGwiLCJYSFJUcmFuc3BvcnQiLCJvZmZzZXQiLCJjaHVuayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsImhlYWRlcnMiLCJvblN0YXJ0Q2FsbGJhY2siLCJvbkZpbmlzaENhbGxiYWNrIiwiSGVhZGVyc1dyYXBwZXIiLCJjb250cm9sbGVyIiwic2lnbmFsIiwidGV4dERlY29kZXIiLCJjcmVkZW50aWFscyIsIndpdGhDcmVkZW50aWFscyIsImNhY2hlIiwicmVhZGVyIiwicmVzcG9uc2UiLCJyZWFkTmV4dENodW5rIiwicmVzdWx0IiwicmVzb2x2ZSIsInJlamVjdCIsIlByb21pc2UiLCJFdmVudFRhcmdldCIsInR5cGVMaXN0ZW5lcnMiLCJsZW5ndGgiLCJsaXN0ZW5lciIsInRocm93RXJyb3IiLCJ0eXBlIiwiZm91bmQiLCJmaWx0ZXJlZCIsIkV2ZW50IiwiTWVzc2FnZUV2ZW50IiwiQ29ubmVjdGlvbkV2ZW50IiwiV0FJVElORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0VEIiwiQUZURVJfQ1IiLCJGSUVMRF9TVEFSVCIsIkZJRUxEIiwiVkFMVUVfU1RBUlQiLCJWQUxVRSIsImNvbnRlbnRUeXBlUmVnRXhwIiwiTUlOSU1VTV9EVVJBVElPTiIsIk1BWElNVU1fRFVSQVRJT04iLCJwYXJzZUR1cmF0aW9uIiwibiIsInBhcnNlSW50IiwiY2xhbXBEdXJhdGlvbiIsIk1hdGgiLCJmaXJlIiwiZiIsInN0YXJ0IiwiaXNGZXRjaFN1cHBvcnRlZCIsIkJvb2xlYW4iLCJpbml0aWFsUmV0cnkiLCJoZWFydGJlYXRUaW1lb3V0IiwibGFzdEV2ZW50SWQiLCJyZXRyeSIsIndhc0FjdGl2aXR5IiwiQ3VycmVudFRyYW5zcG9ydCIsInRyYW5zcG9ydCIsImNhbmNlbEZ1bmN0aW9uIiwiY3VycmVudFN0YXRlIiwiZGF0YUJ1ZmZlciIsImxhc3RFdmVudElkQnVmZmVyIiwiZXZlbnRUeXBlQnVmZmVyIiwidGV4dEJ1ZmZlciIsImZpZWxkU3RhcnQiLCJ2YWx1ZVN0YXJ0IiwiZXMiLCJ0ZXh0Q2h1bmsiLCJwb3NpdGlvbiIsImZpZWxkIiwicmVxdWVzdFVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RIZWFkZXJzIiwieCIsImNhbGxiYWNrIiwiZXZ0U291cmNlIiwicGF0aG5hbWUiLCJwYXRobmFtZUZuIiwiY2xvc2VQaW5nIiwib25kZW1hbmQiLCJwYXlsb2FkIiwibG9jYXRpb24iLCJwYWdlUmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOztBQUNBOztBQUNBOztBQUNBO0FBSkE7OztBQU1BLElBQUksQ0FBQ0EsTUFBTSxDQUFYLGFBQXlCO0FBQ3ZCQSxRQUFNLENBQU5BLGNBQXFCQyxxQkFBckJEO0FBR0Y7O0FBQUEsTUFBTUUsSUFBSSxHQUFHQyxJQUFJLENB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QU8sQ0FBWCxTQUFxQjtBQUNuQjtBQUNBO0FBQ0E1SixhQUFLLENBQUM2SixRQUFRLENBQVQsTUFBZ0I7QUFDbkJ6RSxxQkFBVyxFQURicEY7QUFBcUIsU0FBaEIsQ0FBTEEsTUFFUzhKLE9BQUQsSUFBYTtBQUNuQixjQUFJQSxPQUFPLENBQVBBLFdBQUosS0FBNEI7QUFDMUJELG9CQUFRLENBQVJBO0FBRUg7QUFORDdKO0FBUUg7QUFBQyxLQWJGLENBYUUsWUFBWTtBQUNaUSxhQUFPLENBQVBBO0FBRUg7QUFsQkQrSTtBQW1CRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvYW1wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCIvKiBnbG9iYWxzIF9fd2VicGFja19oYXNoX18gKi9cbmltcG9ydCBFdmVudFNvdXJjZVBvbHlmaWxsIGZyb20gJy4vZXZlbnQtc291cmNlLXBvbHlmaWxsJ1xuaW1wb3J0IHsgZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIH0gZnJvbSAnLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlJ1xuaW1wb3J0IHsgc2V0dXBQaW5nIH0gZnJvbSAnLi9vbi1kZW1hbmQtZW50cmllcy11dGlscydcbmltcG9ydCB7IGRpc3BsYXlDb250ZW50IH0gZnJvbSAnLi9mb3VjJ1xuXG5pZiAoIXdpbmRvdy5FdmVudFNvdXJjZSkge1xuICB3aW5kb3cuRXZlbnRTb3VyY2UgPSBFdmVudFNvdXJjZVBvbHlmaWxsXG59XG5cbmNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX05FWFRfREFUQV9fJykudGV4dENvbnRlbnQpXG5sZXQgeyBhc3NldFByZWZpeCwgcGFnZSB9ID0gZGF0YVxuYXNzZXRQcmVmaXggPSBhc3NldFByZWZpeCB8fCAnJ1xubGV0IG1vc3RSZWNlbnRIYXNoID0gbnVsbFxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5sZXQgY3VySGFzaCA9IF9fd2VicGFja19oYXNoX19cbmNvbnN0IGhvdFVwZGF0ZVBhdGggPVxuICBhc3NldFByZWZpeCArIChhc3NldFByZWZpeC5lbmRzV2l0aCgnLycpID8gJycgOiAnLycpICsgJ19uZXh0L3N0YXRpYy93ZWJwYWNrLydcblxuLy8gSXMgdGhlcmUgYSBuZXdlciB2ZXJzaW9uIG9mIHRoaXMgY29kZSBhdmFpbGFibGU/XG5mdW5jdGlvbiBpc1VwZGF0ZUF2YWlsYWJsZSgpIHtcbiAgLy8gX193ZWJwYWNrX2hhc2hfXyBpcyB0aGUgaGFzaCBvZiB0aGUgY3VycmVudCBjb21waWxhdGlvbi5cbiAgLy8gSXQncyBhIGdsb2JhbCB2YXJpYWJsZSBpbmplY3RlZCBieSBXZWJwYWNrLlxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcmV0dXJuIG1vc3RSZWNlbnRIYXNoICE9PSBfX3dlYnBhY2tfaGFzaF9fXG59XG5cbi8vIFdlYnBhY2sgZGlzYWxsb3dzIHVwZGF0ZXMgaW4gb3RoZXIgc3RhdGVzLlxuZnVuY3Rpb24gY2FuQXBwbHlVcGRhdGVzKCkge1xuICByZXR1cm4gbW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gJ2lkbGUnXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmVhZHMgY29kZSB1cGRhdGVzIG9uIHRoZSBmbHkgYW5kIGhhcmRcbi8vIHJlbG9hZHMgdGhlIHBhZ2Ugd2hlbiBpdCBoYXMgY2hhbmdlZC5cbmFzeW5jIGZ1bmN0aW9uIHRyeUFwcGx5VXBkYXRlcygpIHtcbiAgaWYgKCFpc1VwZGF0ZUF2YWlsYWJsZSgpIHx8ICFjYW5BcHBseVVwZGF0ZXMoKSkge1xuICAgIHJldHVyblxuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7aG90VXBkYXRlUGF0aH0ke2N1ckhhc2h9LmhvdC11cGRhdGUuanNvbmApXG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgY29uc3QgY3VyUGFnZSA9IHBhZ2UgPT09ICcvJyA/ICdpbmRleCcgOiBwYWdlXG4gICAgLy8gd2VicGFjayA1IHVzZXMgYW4gYXJyYXkgaW5zdGVhZFxuICAgIGNvbnN0IHBhZ2VVcGRhdGVkID0gKEFycmF5LmlzQXJyYXkoanNvbkRhdGEuYylcbiAgICAgID8ganNvbkRhdGEuY1xuICAgICAgOiBPYmplY3Qua2V5cyhqc29uRGF0YS5jKVxuICAgICkuc29tZSgobW9kKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBtb2QuaW5kZXhPZihcbiAgICAgICAgICBgcGFnZXMke2N1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YH1gXG4gICAgICAgICkgIT09IC0xIHx8XG4gICAgICAgIG1vZC5pbmRleE9mKFxuICAgICAgICAgIGBwYWdlcyR7XG4gICAgICAgICAgICBjdXJQYWdlLnN1YnN0cigwLCAxKSA9PT0gJy8nID8gY3VyUGFnZSA6IGAvJHtjdXJQYWdlfWBcbiAgICAgICAgICB9YC5yZXBsYWNlKC9cXC8vZywgJ1xcXFwnKVxuICAgICAgICApICE9PSAtMVxuICAgICAgKVxuICAgIH0pXG5cbiAgICBpZiAocGFnZVVwZGF0ZWQpIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjdXJIYXNoID0gbW9zdFJlY2VudEhhc2hcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycmVkIGNoZWNraW5nIGZvciB1cGRhdGUnLCBlcnIpXG4gICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gIH1cbn1cblxuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKHtcbiAgcGF0aDogYCR7YXNzZXRQcmVmaXh9L19uZXh0L3dlYnBhY2staG1yYCxcbn0pLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmRhdGEgPT09ICdcXHVEODNEXFx1REM5MycpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSlcblxuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3N5bmMnIHx8IG1lc3NhZ2UuYWN0aW9uID09PSAnYnVpbHQnKSB7XG4gICAgICBpZiAoIW1lc3NhZ2UuaGFzaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG1vc3RSZWNlbnRIYXNoID0gbWVzc2FnZS5oYXNoXG4gICAgICB0cnlBcHBseVVwZGF0ZXMoKVxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdyZWxvYWRQYWdlJykge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gICAgfVxuICB9IGNhdGNoIChleCkge1xuICAgIGNvbnNvbGUud2FybignSW52YWxpZCBITVIgbWVzc2FnZTogJyArIGV2ZW50LmRhdGEgKyAnXFxuJyArIGV4KVxuICB9XG59KVxuXG5zZXR1cFBpbmcoYXNzZXRQcmVmaXgsICgpID0+IHBhZ2UpXG5kaXNwbGF5Q29udGVudCgpXG4iLCJjb25zdCBldmVudENhbGxiYWNrcyA9IFtdXG5cbmZ1bmN0aW9uIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKSB7XG4gIHZhciBzb3VyY2VcbiAgdmFyIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKClcbiAgdmFyIGxpc3RlbmVycyA9IFtdXG5cbiAgaWYgKCFvcHRpb25zLnRpbWVvdXQpIHtcbiAgICBvcHRpb25zLnRpbWVvdXQgPSAyMCAqIDEwMDBcbiAgfVxuXG4gIGluaXQoKVxuICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ldyBEYXRlKCkgLSBsYXN0QWN0aXZpdHkgPiBvcHRpb25zLnRpbWVvdXQpIHtcbiAgICAgIGhhbmRsZURpc2Nvbm5lY3QoKVxuICAgIH1cbiAgfSwgb3B0aW9ucy50aW1lb3V0IC8gMilcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHNvdXJjZSA9IG5ldyB3aW5kb3cuRXZlbnRTb3VyY2Uob3B0aW9ucy5wYXRoKVxuICAgIHNvdXJjZS5vbm9wZW4gPSBoYW5kbGVPbmxpbmVcbiAgICBzb3VyY2Uub25lcnJvciA9IGhhbmRsZURpc2Nvbm5lY3RcbiAgICBzb3VyY2Uub25tZXNzYWdlID0gaGFuZGxlTWVzc2FnZVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlT25saW5lKCkge1xuICAgIGlmIChvcHRpb25zLmxvZykgY29uc29sZS5sb2coJ1tITVJdIGNvbm5lY3RlZCcpXG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldKGV2ZW50KVxuICAgIH1cblxuICAgIGV2ZW50Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICBpZiAoIWNiLnVuZmlsdGVyZWQgJiYgZXZlbnQuZGF0YS5pbmRleE9mKCdhY3Rpb24nKSA9PT0gLTEpIHJldHVyblxuICAgICAgY2IoZXZlbnQpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3QoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICBzb3VyY2UuY2xvc2UoKVxuICAgIHNldFRpbWVvdXQoaW5pdCwgb3B0aW9ucy50aW1lb3V0KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbG9zZTogKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICAgIHNvdXJjZS5jbG9zZSgpXG4gICAgfSxcbiAgICBhZGRNZXNzYWdlTGlzdGVuZXI6IGZ1bmN0aW9uIChmbikge1xuICAgICAgbGlzdGVuZXJzLnB1c2goZm4pXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLm9uZGVtYW5kKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcjogKGNiKSA9PiB7XG4gICAgICAgIGV2ZW50Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgICB9LFxuICAgIH1cbiAgfVxuICByZXR1cm4gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gSW1wcm92ZWQgdmVyc2lvbiBvZiBodHRwczovL2dpdGh1Yi5jb20vWWFmZmxlL0V2ZW50U291cmNlL1xuLy8gQXZhaWxhYmxlIHVuZGVyIE1JVCBMaWNlbnNlIChNSVQpXG4vLyBPbmx5IHRyaWVzIHRvIHN1cHBvcnQgSUUxMSBhbmQgbm90aGluZyBiZWxvd1xudmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50XG52YXIgUmVzcG9uc2UgPSB3aW5kb3cuUmVzcG9uc2VcbnZhciBUZXh0RGVjb2RlciA9IHdpbmRvdy5UZXh0RGVjb2RlclxudmFyIFRleHRFbmNvZGVyID0gd2luZG93LlRleHRFbmNvZGVyXG52YXIgQWJvcnRDb250cm9sbGVyID0gd2luZG93LkFib3J0Q29udHJvbGxlclxuXG5pZiAoQWJvcnRDb250cm9sbGVyID09IHVuZGVmaW5lZCkge1xuICBBYm9ydENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaWduYWwgPSBudWxsXG4gICAgdGhpcy5hYm9ydCA9IGZ1bmN0aW9uICgpIHt9XG4gIH1cbn1cblxuZnVuY3Rpb24gVGV4dERlY29kZXJQb2x5ZmlsbCgpIHtcbiAgdGhpcy5iaXRzTmVlZGVkID0gMFxuICB0aGlzLmNvZGVQb2ludCA9IDBcbn1cblxuVGV4dERlY29kZXJQb2x5ZmlsbC5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKG9jdGV0cykge1xuICBmdW5jdGlvbiB2YWxpZChjb2RlUG9pbnQsIHNoaWZ0LCBvY3RldHNDb3VudCkge1xuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAweDAwODAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4MDdmZlxuICAgIH1cbiAgICBpZiAob2N0ZXRzQ291bnQgPT09IDIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIChjb2RlUG9pbnQgPj0gMHgwODAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweGQ3ZmYpIHx8XG4gICAgICAgIChjb2RlUG9pbnQgPj0gMHhlMDAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweGZmZmYpXG4gICAgICApXG4gICAgfVxuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMykge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAweDAxMDAwMCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHgxMGZmZmZcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKClcbiAgfVxuICBmdW5jdGlvbiBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpIHtcbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDEpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPj4gNiA+IDE1ID8gMyA6IGNvZGVQb2ludCA+IDMxID8gMiA6IDFcbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAyKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID4gMTUgPyAzIDogMlxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDMpIHtcbiAgICAgIHJldHVybiAzXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigpXG4gIH1cbiAgdmFyIFJFUExBQ0VSID0gMHhmZmZkXG4gIHZhciBzdHJpbmcgPSAnJ1xuICB2YXIgYml0c05lZWRlZCA9IHRoaXMuYml0c05lZWRlZFxuICB2YXIgY29kZVBvaW50ID0gdGhpcy5jb2RlUG9pbnRcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvY3RldHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgb2N0ZXQgPSBvY3RldHNbaV1cbiAgICBpZiAoYml0c05lZWRlZCAhPT0gMCkge1xuICAgICAgaWYgKFxuICAgICAgICBvY3RldCA8IDEyOCB8fFxuICAgICAgICBvY3RldCA+IDE5MSB8fFxuICAgICAgICAhdmFsaWQoXG4gICAgICAgICAgKGNvZGVQb2ludCA8PCA2KSB8IChvY3RldCAmIDYzKSxcbiAgICAgICAgICBiaXRzTmVlZGVkIC0gNixcbiAgICAgICAgICBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUlxuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICBpZiAob2N0ZXQgPj0gMCAmJiBvY3RldCA8PSAxMjcpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXRcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMTkyICYmIG9jdGV0IDw9IDIyMykge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDFcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiAzMVxuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAyMjQgJiYgb2N0ZXQgPD0gMjM5KSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMlxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDE1XG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDI0MCAmJiBvY3RldCA8PSAyNDcpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAzXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgN1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVJcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgYml0c05lZWRlZCAhPT0gMCAmJlxuICAgICAgICAhdmFsaWQoY29kZVBvaW50LCBiaXRzTmVlZGVkLCBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpKVxuICAgICAgKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJpdHNOZWVkZWQgLT0gNlxuICAgICAgY29kZVBvaW50ID0gKGNvZGVQb2ludCA8PCA2KSB8IChvY3RldCAmIDYzKVxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gMCkge1xuICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwICsgKChjb2RlUG9pbnQgLSAweGZmZmYgLSAxKSA+PiAxMCkpXG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAgIDB4ZGMwMCArICgoY29kZVBvaW50IC0gMHhmZmZmIC0gMSkgJiAweDNmZilcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB0aGlzLmJpdHNOZWVkZWQgPSBiaXRzTmVlZGVkXG4gIHRoaXMuY29kZVBvaW50ID0gY29kZVBvaW50XG4gIHJldHVybiBzdHJpbmdcbn1cblxuLy8gRmlyZWZveCA8IDM4IHRocm93cyBhbiBlcnJvciB3aXRoIHN0cmVhbSBvcHRpb25cbnZhciBzdXBwb3J0c1N0cmVhbU9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gKFxuICAgICAgbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSgndGVzdCcpLCB7XG4gICAgICAgIHN0cmVhbTogdHJ1ZSxcbiAgICAgIH0pID09PSAndGVzdCdcbiAgICApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIElFLCBFZGdlXG5pZiAoXG4gIFRleHREZWNvZGVyID09IHVuZGVmaW5lZCB8fFxuICBUZXh0RW5jb2RlciA9PSB1bmRlZmluZWQgfHxcbiAgIXN1cHBvcnRzU3RyZWFtT3B0aW9uKClcbikge1xuICBUZXh0RGVjb2RlciA9IFRleHREZWNvZGVyUG9seWZpbGxcbn1cblxudmFyIGsgPSBmdW5jdGlvbiAoKSB7fVxuXG5mdW5jdGlvbiBYSFJXcmFwcGVyKHhocikge1xuICB0aGlzLndpdGhDcmVkZW50aWFscyA9IGZhbHNlXG4gIHRoaXMucmVzcG9uc2VUeXBlID0gJydcbiAgdGhpcy5yZWFkeVN0YXRlID0gMFxuICB0aGlzLnN0YXR1cyA9IDBcbiAgdGhpcy5zdGF0dXNUZXh0ID0gJydcbiAgdGhpcy5yZXNwb25zZVRleHQgPSAnJ1xuICB0aGlzLm9ucHJvZ3Jlc3MgPSBrXG4gIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlID0ga1xuICB0aGlzLl9jb250ZW50VHlwZSA9ICcnXG4gIHRoaXMuX3hociA9IHhoclxuICB0aGlzLl9zZW5kVGltZW91dCA9IDBcbiAgdGhpcy5fYWJvcnQgPSBrXG59XG5cblhIUldyYXBwZXIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcbiAgdGhpcy5fYWJvcnQodHJ1ZSlcblxuICB2YXIgdGhhdCA9IHRoaXNcbiAgdmFyIHhociA9IHRoaXMuX3hoclxuICB2YXIgc3RhdGUgPSAxXG4gIHZhciB0aW1lb3V0ID0gMFxuXG4gIHRoaXMuX2Fib3J0ID0gZnVuY3Rpb24gKHNpbGVudCkge1xuICAgIGlmICh0aGF0Ll9zZW5kVGltZW91dCAhPT0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoYXQuX3NlbmRUaW1lb3V0KVxuICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwXG4gICAgfVxuICAgIGlmIChzdGF0ZSA9PT0gMSB8fCBzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSA0XG4gICAgICB4aHIub25sb2FkID0ga1xuICAgICAgeGhyLm9uZXJyb3IgPSBrXG4gICAgICB4aHIub25hYm9ydCA9IGtcbiAgICAgIHhoci5vbnByb2dyZXNzID0ga1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGtcbiAgICAgIC8vIElFIDggLSA5OiBYRG9tYWluUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG4gICAgICAvLyBPcGVyYSA8IDEwOiBYTUxIdHRwUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG4gICAgICB4aHIuYWJvcnQoKVxuICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgIHRpbWVvdXQgPSAwXG4gICAgICB9XG4gICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSA0XG4gICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGUgPSAwXG4gIH1cblxuICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3RhdGUgPT09IDEpIHtcbiAgICAgIC8vIHN0YXRlID0gMjtcbiAgICAgIHZhciBzdGF0dXMgPSAwXG4gICAgICB2YXIgc3RhdHVzVGV4dCA9ICcnXG4gICAgICB2YXIgY29udGVudFR5cGUgPSB1bmRlZmluZWRcbiAgICAgIGlmICghKCdjb250ZW50VHlwZScgaW4geGhyKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHN0YXR1cyA9IHhoci5zdGF0dXNcbiAgICAgICAgICBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHRcbiAgICAgICAgICBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJylcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBJRSA8IDEwIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyIHx8IHhoci5yZWFkeVN0YXRlID09PSAzXG4gICAgICAgICAgLy8gT3BlcmEgPCAxMSB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMlxuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTEyMVxuICAgICAgICAgIHN0YXR1cyA9IDBcbiAgICAgICAgICBzdGF0dXNUZXh0ID0gJydcbiAgICAgICAgICBjb250ZW50VHlwZSA9IHVuZGVmaW5lZFxuICAgICAgICAgIC8vIEZpcmVmb3ggPCAxNCwgQ2hyb21lID8sIFNhZmFyaSA/XG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5NjU4XG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTc3ODU0XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXR1cyA9IDIwMFxuICAgICAgICBzdGF0dXNUZXh0ID0gJ09LJ1xuICAgICAgICBjb250ZW50VHlwZSA9IHhoci5jb250ZW50VHlwZVxuICAgICAgfVxuICAgICAgaWYgKHN0YXR1cyAhPT0gMCkge1xuICAgICAgICBzdGF0ZSA9IDJcbiAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gMlxuICAgICAgICB0aGF0LnN0YXR1cyA9IHN0YXR1c1xuICAgICAgICB0aGF0LnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0XG4gICAgICAgIHRoYXQuX2NvbnRlbnRUeXBlID0gY29udGVudFR5cGVcbiAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgb25Qcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBvblN0YXJ0KClcbiAgICBpZiAoc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgIHN0YXRlID0gM1xuICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9ICcnXG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBJRSA4IC0gOSB3aXRoIFhNTEh0dHBSZXF1ZXN0XG4gICAgICB9XG4gICAgICB0aGF0LnJlYWR5U3RhdGUgPSAzXG4gICAgICB0aGF0LnJlc3BvbnNlVGV4dCA9IHJlc3BvbnNlVGV4dFxuICAgICAgdGhhdC5vbnByb2dyZXNzKClcbiAgICB9XG4gIH1cbiAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIEZpcmVmb3ggNTIgZmlyZXMgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSA0KSB3aXRob3V0IGZpbmFsIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gMylcbiAgICAvLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcIlxuICAgIG9uUHJvZ3Jlc3MoKVxuICAgIGlmIChzdGF0ZSA9PT0gMSB8fCBzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSA0XG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDRcbiAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKClcbiAgICB9XG4gIH1cbiAgdmFyIG9uUmVhZHlTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoeGhyICE9IHVuZGVmaW5lZCkge1xuICAgICAgLy8gT3BlcmEgMTJcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBvbkZpbmlzaCgpXG4gICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICAgIG9uUHJvZ3Jlc3MoKVxuICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xuICAgICAgICBvblN0YXJ0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIG9uVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvblRpbWVvdXQoKVxuICAgIH0sIDUwMClcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgIG9uUHJvZ3Jlc3MoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFhEb21haW5SZXF1ZXN0I2Fib3J0IHJlbW92ZXMgb25wcm9ncmVzcywgb25lcnJvciwgb25sb2FkXG4gIHhoci5vbmxvYWQgPSBvbkZpbmlzaFxuICB4aHIub25lcnJvciA9IG9uRmluaXNoXG4gIC8vIGltcHJvcGVyIGZpeCB0byBtYXRjaCBGaXJlZm94IGJlaGF2aW9yLCBidXQgaXQgaXMgYmV0dGVyIHRoYW4ganVzdCBpZ25vcmUgYWJvcnRcbiAgLy8gc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTc2ODU5NlxuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODAyMDBcbiAgLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTE1MzU3MFxuICAvLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcbiAgeGhyLm9uYWJvcnQgPSBvbkZpbmlzaFxuXG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTczNjcyM1xuICBpZiAoXG4gICAgISgnc2VuZEFzQmluYXJ5JyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpICYmXG4gICAgISgnbW96QW5vbicgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKVxuICApIHtcbiAgICB4aHIub25wcm9ncmVzcyA9IG9uUHJvZ3Jlc3NcbiAgfVxuXG4gIC8vIElFIDggLSA5IChYTUxIVFRQUmVxdWVzdClcbiAgLy8gT3BlcmEgPCAxMlxuICAvLyBGaXJlZm94IDwgMy41XG4gIC8vIEZpcmVmb3ggMy41IC0gMy42IC0gPyA8IDkuMFxuICAvLyBvbnByb2dyZXNzIGlzIG5vdCBmaXJlZCBzb21ldGltZXMgb3IgZGVsYXllZFxuICAvLyBzZWUgYWxzbyAjNjRcbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG9uUmVhZHlTdGF0ZUNoYW5nZVxuXG4gIGlmICgnY29udGVudFR5cGUnIGluIHhocikge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgJ3BhZGRpbmc9dHJ1ZSdcbiAgfVxuICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSlcblxuICBpZiAoJ3JlYWR5U3RhdGUnIGluIHhocikge1xuICAgIC8vIHdvcmthcm91bmQgZm9yIE9wZXJhIDEyIGlzc3VlIHdpdGggXCJwcm9ncmVzc1wiIGV2ZW50c1xuICAgIC8vICM5MVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgMClcbiAgfVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX2Fib3J0KGZhbHNlKVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5fY29udGVudFR5cGVcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgdmFyIHhociA9IHRoaXMuX3hoclxuICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHhocikge1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICB9XG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRBbGxSZXNwb25zZUhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzICE9IHVuZGVmaW5lZFxuICAgID8gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgOiAnJ1xufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gbG9hZGluZyBpbmRpY2F0b3IgaW4gU2FmYXJpIDwgPyAoNiksIENocm9tZSA8IDE0LCBGaXJlZm94XG4gIGlmIChcbiAgICAhKCdvbnRpbWVvdXQnIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkgJiZcbiAgICBkb2N1bWVudCAhPSB1bmRlZmluZWQgJiZcbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlICE9IHVuZGVmaW5lZCAmJlxuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZSdcbiAgKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgdGhhdC5fc2VuZFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gMFxuICAgICAgdGhhdC5zZW5kKClcbiAgICB9LCA0KVxuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHhociA9IHRoaXMuX3hoclxuICAvLyB3aXRoQ3JlZGVudGlhbHMgc2hvdWxkIGJlIHNldCBhZnRlciBcIm9wZW5cIiBmb3IgU2FmYXJpIGFuZCBDaHJvbWUgKDwgMTkgPylcbiAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRoaXMud2l0aENyZWRlbnRpYWxzXG4gIHhoci5yZXNwb25zZVR5cGUgPSB0aGlzLnJlc3BvbnNlVHlwZVxuICB0cnkge1xuICAgIC8vIHhoci5zZW5kKCk7IHRocm93cyBcIk5vdCBlbm91Z2ggYXJndW1lbnRzXCIgaW4gRmlyZWZveCAzLjBcbiAgICB4aHIuc2VuZCh1bmRlZmluZWQpXG4gIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgIC8vIFNhZmFyaSA1LjEuNywgT3BlcmEgMTJcbiAgICB0aHJvdyBlcnJvcjFcbiAgfVxufVxuXG5mdW5jdGlvbiB0b0xvd2VyQ2FzZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYy5jaGFyQ29kZUF0KDApICsgMHgyMClcbiAgfSlcbn1cblxuZnVuY3Rpb24gSGVhZGVyc1BvbHlmaWxsKGFsbCkge1xuICAvLyBHZXQgaGVhZGVyczogaW1wbGVtZW50ZWQgYWNjb3JkaW5nIHRvIG1vemlsbGEncyBleGFtcGxlIGNvZGU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9nZXRBbGxSZXNwb25zZUhlYWRlcnMjRXhhbXBsZVxuICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB2YXIgYXJyYXkgPSBhbGwuc3BsaXQoJ1xcclxcbicpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgbGluZSA9IGFycmF5W2ldXG4gICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOiAnKVxuICAgIHZhciBuYW1lID0gcGFydHMuc2hpZnQoKVxuICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzogJylcbiAgICBtYXBbdG9Mb3dlckNhc2UobmFtZSldID0gdmFsdWVcbiAgfVxuICB0aGlzLl9tYXAgPSBtYXBcbn1cbkhlYWRlcnNQb2x5ZmlsbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX21hcFt0b0xvd2VyQ2FzZShuYW1lKV1cbn1cblxuZnVuY3Rpb24gWEhSVHJhbnNwb3J0KCkge31cblxuWEhSVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKFxuICB4aHIsXG4gIG9uU3RhcnRDYWxsYmFjayxcbiAgb25Qcm9ncmVzc0NhbGxiYWNrLFxuICBvbkZpbmlzaENhbGxiYWNrLFxuICB1cmwsXG4gIHdpdGhDcmVkZW50aWFscyxcbiAgaGVhZGVyc1xuKSB7XG4gIHhoci5vcGVuKCdHRVQnLCB1cmwpXG4gIHZhciBvZmZzZXQgPSAwXG4gIHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0XG4gICAgdmFyIGNodW5rID0gcmVzcG9uc2VUZXh0LnNsaWNlKG9mZnNldClcbiAgICBvZmZzZXQgKz0gY2h1bmsubGVuZ3RoXG4gICAgb25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKVxuICB9XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICB2YXIgc3RhdHVzID0geGhyLnN0YXR1c1xuICAgICAgdmFyIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dFxuICAgICAgdmFyIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKVxuICAgICAgdmFyIGhlYWRlcnMgPSB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgIG9uU3RhcnRDYWxsYmFjayhcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0LFxuICAgICAgICBjb250ZW50VHlwZSxcbiAgICAgICAgbmV3IEhlYWRlcnNQb2x5ZmlsbChoZWFkZXJzKSxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHhoci5hYm9ydCgpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICB9XG4gIH1cbiAgeGhyLndpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFsc1xuICB4aHIucmVzcG9uc2VUeXBlID0gJ3RleHQnXG4gIGZvciAodmFyIG5hbWUgaW4gaGVhZGVycykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycywgbmFtZSkpIHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgfVxuICB9XG4gIHhoci5zZW5kKClcbn1cblxuZnVuY3Rpb24gSGVhZGVyc1dyYXBwZXIoaGVhZGVycykge1xuICB0aGlzLl9oZWFkZXJzID0gaGVhZGVyc1xufVxuSGVhZGVyc1dyYXBwZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9oZWFkZXJzLmdldChuYW1lKVxufVxuXG5mdW5jdGlvbiBGZXRjaFRyYW5zcG9ydCgpIHt9XG5cbkZldGNoVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKFxuICB4aHIsXG4gIG9uU3RhcnRDYWxsYmFjayxcbiAgb25Qcm9ncmVzc0NhbGxiYWNrLFxuICBvbkZpbmlzaENhbGxiYWNrLFxuICB1cmwsXG4gIHdpdGhDcmVkZW50aWFscyxcbiAgaGVhZGVyc1xuKSB7XG4gIHZhciBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIHZhciBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbCAvLyBzZWUgIzEyMFxuICB2YXIgdGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKVxuICBmZXRjaCh1cmwsIHtcbiAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgIGNyZWRlbnRpYWxzOiB3aXRoQ3JlZGVudGlhbHMgPyAnaW5jbHVkZScgOiAnc2FtZS1vcmlnaW4nLFxuICAgIHNpZ25hbDogc2lnbmFsLFxuICAgIGNhY2hlOiAnbm8tc3RvcmUnLFxuICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgdmFyIHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKClcbiAgICAgIG9uU3RhcnRDYWxsYmFjayhcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICByZXNwb25zZS5zdGF0dXNUZXh0LFxuICAgICAgICByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJyksXG4gICAgICAgIG5ldyBIZWFkZXJzV3JhcHBlcihyZXNwb25zZS5oZWFkZXJzKSxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICAgICAgICAgIHJlYWRlci5jYW5jZWwoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVhZE5leHRDaHVuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZWFkZXJcbiAgICAgICAgICAgIC5yZWFkKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICAgICAgICAgICAgLy8gTm90ZTogYnl0ZXMgaW4gdGV4dERlY29kZXIgYXJlIGlnbm9yZWRcbiAgICAgICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2h1bmsgPSB0ZXh0RGVjb2Rlci5kZWNvZGUocmVzdWx0LnZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuaylcbiAgICAgICAgICAgICAgICByZWFkTmV4dENodW5rKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFsnY2F0Y2gnXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZWFkTmV4dENodW5rKClcbiAgICAgIH0pXG4gICAgfSlcbiAgICAudGhlbihcbiAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjaygpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjaygpXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICAgIH1cbiAgICApXG59XG5cbmZ1bmN0aW9uIEV2ZW50VGFyZ2V0KCkge1xuICB0aGlzLl9saXN0ZW5lcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG59XG5cbmZ1bmN0aW9uIHRocm93RXJyb3IoZSkge1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBlXG4gIH0sIDApXG59XG5cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnRhcmdldCA9IHRoaXNcbiAgdmFyIHR5cGVMaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZlbnQudHlwZV1cbiAgaWYgKHR5cGVMaXN0ZW5lcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGxlbmd0aCA9IHR5cGVMaXN0ZW5lcnMubGVuZ3RoXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIGxpc3RlbmVyID0gdHlwZUxpc3RlbmVyc1tpXVxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50KGV2ZW50KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3dFcnJvcihlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuRXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcbiAgdHlwZSA9IFN0cmluZyh0eXBlKVxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzXG4gIHZhciB0eXBlTGlzdGVuZXJzID0gbGlzdGVuZXJzW3R5cGVdXG4gIGlmICh0eXBlTGlzdGVuZXJzID09IHVuZGVmaW5lZCkge1xuICAgIHR5cGVMaXN0ZW5lcnMgPSBbXVxuICAgIGxpc3RlbmVyc1t0eXBlXSA9IHR5cGVMaXN0ZW5lcnNcbiAgfVxuICB2YXIgZm91bmQgPSBmYWxzZVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVMaXN0ZW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZUxpc3RlbmVyc1tpXSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgIGZvdW5kID0gdHJ1ZVxuICAgIH1cbiAgfVxuICBpZiAoIWZvdW5kKSB7XG4gICAgdHlwZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG59XG5FdmVudFRhcmdldC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuICB0eXBlID0gU3RyaW5nKHR5cGUpXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNcbiAgdmFyIHR5cGVMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdHlwZV1cbiAgaWYgKHR5cGVMaXN0ZW5lcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbHRlcmVkID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVMaXN0ZW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldICE9PSBsaXN0ZW5lcikge1xuICAgICAgICBmaWx0ZXJlZC5wdXNoKHR5cGVMaXN0ZW5lcnNbaV0pXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbdHlwZV1cbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdGVuZXJzW3R5cGVdID0gZmlsdGVyZWRcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gRXZlbnQodHlwZSkge1xuICB0aGlzLnR5cGUgPSB0eXBlXG4gIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIE1lc3NhZ2VFdmVudCh0eXBlLCBvcHRpb25zKSB7XG4gIEV2ZW50LmNhbGwodGhpcywgdHlwZSlcbiAgdGhpcy5kYXRhID0gb3B0aW9ucy5kYXRhXG4gIHRoaXMubGFzdEV2ZW50SWQgPSBvcHRpb25zLmxhc3RFdmVudElkXG59XG5cbk1lc3NhZ2VFdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSlcblxuZnVuY3Rpb24gQ29ubmVjdGlvbkV2ZW50KHR5cGUsIG9wdGlvbnMpIHtcbiAgRXZlbnQuY2FsbCh0aGlzLCB0eXBlKVxuICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzXG4gIHRoaXMuc3RhdHVzVGV4dCA9IG9wdGlvbnMuc3RhdHVzVGV4dFxuICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnNcbn1cblxuQ29ubmVjdGlvbkV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKVxuXG52YXIgV0FJVElORyA9IC0xXG52YXIgQ09OTkVDVElORyA9IDBcbnZhciBPUEVOID0gMVxudmFyIENMT1NFRCA9IDJcblxudmFyIEFGVEVSX0NSID0gLTFcbnZhciBGSUVMRF9TVEFSVCA9IDBcbnZhciBGSUVMRCA9IDFcbnZhciBWQUxVRV9TVEFSVCA9IDJcbnZhciBWQUxVRSA9IDNcblxudmFyIGNvbnRlbnRUeXBlUmVnRXhwID0gL150ZXh0XFwvZXZlbnRcXC1zdHJlYW07PyhcXHMqY2hhcnNldFxcPXV0ZlxcLTgpPyQvaVxuXG52YXIgTUlOSU1VTV9EVVJBVElPTiA9IDEwMDBcbnZhciBNQVhJTVVNX0RVUkFUSU9OID0gMTgwMDAwMDBcblxudmFyIHBhcnNlRHVyYXRpb24gPSBmdW5jdGlvbiAodmFsdWUsIGRlZikge1xuICB2YXIgbiA9IHBhcnNlSW50KHZhbHVlLCAxMClcbiAgaWYgKG4gIT09IG4pIHtcbiAgICBuID0gZGVmXG4gIH1cbiAgcmV0dXJuIGNsYW1wRHVyYXRpb24obilcbn1cbnZhciBjbGFtcER1cmF0aW9uID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sIE1JTklNVU1fRFVSQVRJT04pLCBNQVhJTVVNX0RVUkFUSU9OKVxufVxuXG52YXIgZmlyZSA9IGZ1bmN0aW9uICh0aGF0LCBmLCBldmVudCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZi5jYWxsKHRoYXQsIGV2ZW50KVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93RXJyb3IoZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBFdmVudFNvdXJjZVBvbHlmaWxsKHVybCwgb3B0aW9ucykge1xuICBFdmVudFRhcmdldC5jYWxsKHRoaXMpXG5cbiAgdGhpcy5vbm9wZW4gPSB1bmRlZmluZWRcbiAgdGhpcy5vbm1lc3NhZ2UgPSB1bmRlZmluZWRcbiAgdGhpcy5vbmVycm9yID0gdW5kZWZpbmVkXG5cbiAgdGhpcy51cmwgPSB1bmRlZmluZWRcbiAgdGhpcy5yZWFkeVN0YXRlID0gdW5kZWZpbmVkXG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkXG5cbiAgdGhpcy5fY2xvc2UgPSB1bmRlZmluZWRcblxuICBzdGFydCh0aGlzLCB1cmwsIG9wdGlvbnMpXG59XG5cbnZhciBpc0ZldGNoU3VwcG9ydGVkID1cbiAgZmV0Y2ggIT0gdW5kZWZpbmVkICYmIFJlc3BvbnNlICE9IHVuZGVmaW5lZCAmJiAnYm9keScgaW4gUmVzcG9uc2UucHJvdG90eXBlXG5cbmZ1bmN0aW9uIHN0YXJ0KGVzLCB1cmwsIG9wdGlvbnMpIHtcbiAgdXJsID0gU3RyaW5nKHVybClcbiAgdmFyIHdpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIEJvb2xlYW4ob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpXG5cbiAgdmFyIGluaXRpYWxSZXRyeSA9IGNsYW1wRHVyYXRpb24oMTAwMClcbiAgdmFyIGhlYXJ0YmVhdFRpbWVvdXQgPVxuICAgIG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCAhPSB1bmRlZmluZWRcbiAgICAgID8gcGFyc2VEdXJhdGlvbihvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQsIDQ1MDAwKVxuICAgICAgOiBjbGFtcER1cmF0aW9uKDQ1MDAwKVxuXG4gIHZhciBsYXN0RXZlbnRJZCA9ICcnXG4gIHZhciByZXRyeSA9IGluaXRpYWxSZXRyeVxuICB2YXIgd2FzQWN0aXZpdHkgPSBmYWxzZVxuICB2YXIgaGVhZGVycyA9XG4gICAgb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5oZWFkZXJzICE9IHVuZGVmaW5lZFxuICAgICAgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuaGVhZGVycykpXG4gICAgICA6IHVuZGVmaW5lZFxuICB2YXIgQ3VycmVudFRyYW5zcG9ydCA9XG4gICAgb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5UcmFuc3BvcnQgIT0gdW5kZWZpbmVkXG4gICAgICA/IG9wdGlvbnMuVHJhbnNwb3J0XG4gICAgICA6IFhNTEh0dHBSZXF1ZXN0XG4gIHZhciB4aHIgPVxuICAgIGlzRmV0Y2hTdXBwb3J0ZWQgJiZcbiAgICAhKG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuVHJhbnNwb3J0ICE9IHVuZGVmaW5lZClcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IG5ldyBYSFJXcmFwcGVyKG5ldyBDdXJyZW50VHJhbnNwb3J0KCkpXG4gIHZhciB0cmFuc3BvcnQgPSB4aHIgPT0gdW5kZWZpbmVkID8gbmV3IEZldGNoVHJhbnNwb3J0KCkgOiBuZXcgWEhSVHJhbnNwb3J0KClcbiAgdmFyIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gIHZhciB0aW1lb3V0ID0gMFxuICB2YXIgY3VycmVudFN0YXRlID0gV0FJVElOR1xuICB2YXIgZGF0YUJ1ZmZlciA9ICcnXG4gIHZhciBsYXN0RXZlbnRJZEJ1ZmZlciA9ICcnXG4gIHZhciBldmVudFR5cGVCdWZmZXIgPSAnJ1xuXG4gIHZhciB0ZXh0QnVmZmVyID0gJydcbiAgdmFyIHN0YXRlID0gRklFTERfU1RBUlRcbiAgdmFyIGZpZWxkU3RhcnQgPSAwXG4gIHZhciB2YWx1ZVN0YXJ0ID0gMFxuXG4gIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24gKHN0YXR1cywgc3RhdHVzVGV4dCwgY29udGVudFR5cGUsIGhlYWRlcnMsIGNhbmNlbCkge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IENPTk5FQ1RJTkcpIHtcbiAgICAgIGNhbmNlbEZ1bmN0aW9uID0gY2FuY2VsXG4gICAgICBpZiAoXG4gICAgICAgIHN0YXR1cyA9PT0gMjAwICYmXG4gICAgICAgIGNvbnRlbnRUeXBlICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICBjb250ZW50VHlwZVJlZ0V4cC50ZXN0KGNvbnRlbnRUeXBlKVxuICAgICAgKSB7XG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9IE9QRU5cbiAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlXG4gICAgICAgIHJldHJ5ID0gaW5pdGlhbFJldHJ5XG4gICAgICAgIGVzLnJlYWR5U3RhdGUgPSBPUEVOXG4gICAgICAgIHZhciBldmVudCA9IG5ldyBDb25uZWN0aW9uRXZlbnQoJ29wZW4nLCB7XG4gICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9KVxuICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICBmaXJlKGVzLCBlcy5vbm9wZW4sIGV2ZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSAnJ1xuICAgICAgICBpZiAoc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICBpZiAoc3RhdHVzVGV4dCkge1xuICAgICAgICAgICAgc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpXG4gICAgICAgICAgfVxuICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIHN0YXR1cyBcIiArXG4gICAgICAgICAgICBzdGF0dXMgK1xuICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgIHN0YXR1c1RleHQgK1xuICAgICAgICAgICAgJyB0aGF0IGlzIG5vdCAyMDAuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLidcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgIFwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBDb250ZW50LVR5cGUgc3BlY2lmeWluZyBhbiB1bnN1cHBvcnRlZCB0eXBlOiBcIiArXG4gICAgICAgICAgICAoY29udGVudFR5cGUgPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gJy0nXG4gICAgICAgICAgICAgIDogY29udGVudFR5cGUucmVwbGFjZSgvXFxzKy9nLCAnICcpKSArXG4gICAgICAgICAgICAnLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcihuZXcgRXJyb3IobWVzc2FnZSkpXG4gICAgICAgIGNsb3NlKClcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IENvbm5lY3Rpb25FdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9KVxuICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgb25Qcm9ncmVzcyA9IGZ1bmN0aW9uICh0ZXh0Q2h1bmspIHtcbiAgICBpZiAoY3VycmVudFN0YXRlID09PSBPUEVOKSB7XG4gICAgICB2YXIgbiA9IC0xXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHRDaHVuay5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgYyA9IHRleHRDaHVuay5jaGFyQ29kZUF0KGkpXG4gICAgICAgIGlmIChjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApIHx8IGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICBuID0gaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgY2h1bmsgPSAobiAhPT0gLTEgPyB0ZXh0QnVmZmVyIDogJycpICsgdGV4dENodW5rLnNsaWNlKDAsIG4gKyAxKVxuICAgICAgdGV4dEJ1ZmZlciA9IChuID09PSAtMSA/IHRleHRCdWZmZXIgOiAnJykgKyB0ZXh0Q2h1bmsuc2xpY2UobiArIDEpXG4gICAgICBpZiAoY2h1bmsgIT09ICcnKSB7XG4gICAgICAgIHdhc0FjdGl2aXR5ID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZm9yICh2YXIgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IGNodW5rLmxlbmd0aDsgcG9zaXRpb24gKz0gMSkge1xuICAgICAgICB2YXIgYyA9IGNodW5rLmNoYXJDb2RlQXQocG9zaXRpb24pXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IgJiYgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEFGVEVSX0NSKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApIHx8IGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSAhPT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRCkge1xuICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgPSBwb3NpdGlvbiArIDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgZmllbGQgPSBjaHVuay5zbGljZShmaWVsZFN0YXJ0LCB2YWx1ZVN0YXJ0IC0gMSlcbiAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY2h1bmsuc2xpY2UoXG4gICAgICAgICAgICAgICAgdmFsdWVTdGFydCArXG4gICAgICAgICAgICAgICAgICAodmFsdWVTdGFydCA8IHBvc2l0aW9uICYmXG4gICAgICAgICAgICAgICAgICBjaHVuay5jaGFyQ29kZUF0KHZhbHVlU3RhcnQpID09PSAnICcuY2hhckNvZGVBdCgwKVxuICAgICAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICAgICAgOiAwKSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGlmIChmaWVsZCA9PT0gJ2RhdGEnKSB7XG4gICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSAnXFxuJ1xuICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgKz0gdmFsdWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2lkJykge1xuICAgICAgICAgICAgICAgIGxhc3RFdmVudElkQnVmZmVyID0gdmFsdWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2V2ZW50Jykge1xuICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9IHZhbHVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdyZXRyeScpIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsUmV0cnkgPSBwYXJzZUR1cmF0aW9uKHZhbHVlLCBpbml0aWFsUmV0cnkpXG4gICAgICAgICAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnlcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2hlYXJ0YmVhdFRpbWVvdXQnKSB7XG4gICAgICAgICAgICAgICAgaGVhcnRiZWF0VGltZW91dCA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGhlYXJ0YmVhdFRpbWVvdXQpXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBvblRpbWVvdXQoKVxuICAgICAgICAgICAgICAgICAgfSwgaGVhcnRiZWF0VGltZW91dClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgaWYgKGRhdGFCdWZmZXIgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbGFzdEV2ZW50SWQgPSBsYXN0RXZlbnRJZEJ1ZmZlclxuICAgICAgICAgICAgICAgIGlmIChldmVudFR5cGVCdWZmZXIgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSAnbWVzc2FnZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IE1lc3NhZ2VFdmVudChldmVudFR5cGVCdWZmZXIsIHtcbiAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFCdWZmZXIuc2xpY2UoMSksXG4gICAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZDogbGFzdEV2ZW50SWRCdWZmZXIsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICAgICAgICAgIGlmIChldmVudFR5cGVCdWZmZXIgPT09ICdtZXNzYWdlJykge1xuICAgICAgICAgICAgICAgICAgZmlyZShlcywgZXMub25tZXNzYWdlLCBldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGF0YUJ1ZmZlciA9ICcnXG4gICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGF0ZSA9IGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgPyBBRlRFUl9DUiA6IEZJRUxEX1NUQVJUXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgZmllbGRTdGFydCA9IHBvc2l0aW9uXG4gICAgICAgICAgICAgIHN0YXRlID0gRklFTERcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTEQpIHtcbiAgICAgICAgICAgICAgaWYgKGMgPT09ICc6Jy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMVxuICAgICAgICAgICAgICAgIHN0YXRlID0gVkFMVUVfU1RBUlRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gVkFMVUVfU1RBUlQpIHtcbiAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBvbkZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3VycmVudFN0YXRlID09PSBPUEVOIHx8IGN1cnJlbnRTdGF0ZSA9PT0gQ09OTkVDVElORykge1xuICAgICAgY3VycmVudFN0YXRlID0gV0FJVElOR1xuICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgIHRpbWVvdXQgPSAwXG4gICAgICB9XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uVGltZW91dCgpXG4gICAgICB9LCByZXRyeSlcbiAgICAgIHJldHJ5ID0gY2xhbXBEdXJhdGlvbihNYXRoLm1pbihpbml0aWFsUmV0cnkgKiAxNiwgcmV0cnkgKiAyKSlcblxuICAgICAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnZXJyb3InKVxuICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjdXJyZW50U3RhdGUgPSBDTE9TRURcbiAgICBpZiAoY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYW5jZWxGdW5jdGlvbigpXG4gICAgICBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICB0aW1lb3V0ID0gMFxuICAgIH1cbiAgICBlcy5yZWFkeVN0YXRlID0gQ0xPU0VEXG4gIH1cblxuICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXQgPSAwXG5cbiAgICBpZiAoY3VycmVudFN0YXRlICE9PSBXQUlUSU5HKSB7XG4gICAgICBpZiAoIXdhc0FjdGl2aXR5ICYmIGNhbmNlbEZ1bmN0aW9uICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvd0Vycm9yKFxuICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICdObyBhY3Rpdml0eSB3aXRoaW4gJyArXG4gICAgICAgICAgICAgIGhlYXJ0YmVhdFRpbWVvdXQgK1xuICAgICAgICAgICAgICAnIG1pbGxpc2Vjb25kcy4gUmVjb25uZWN0aW5nLidcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgY2FuY2VsRnVuY3Rpb24oKVxuICAgICAgICBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FzQWN0aXZpdHkgPSBmYWxzZVxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgb25UaW1lb3V0KClcbiAgICAgICAgfSwgaGVhcnRiZWF0VGltZW91dClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHdhc0FjdGl2aXR5ID0gZmFsc2VcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvblRpbWVvdXQoKVxuICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpXG5cbiAgICBjdXJyZW50U3RhdGUgPSBDT05ORUNUSU5HXG4gICAgZGF0YUJ1ZmZlciA9ICcnXG4gICAgZXZlbnRUeXBlQnVmZmVyID0gJydcbiAgICBsYXN0RXZlbnRJZEJ1ZmZlciA9IGxhc3RFdmVudElkXG4gICAgdGV4dEJ1ZmZlciA9ICcnXG4gICAgZmllbGRTdGFydCA9IDBcbiAgICB2YWx1ZVN0YXJ0ID0gMFxuICAgIHN0YXRlID0gRklFTERfU1RBUlRcblxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQyODkxNlxuICAgIC8vIFJlcXVlc3QgaGVhZGVyIGZpZWxkIExhc3QtRXZlbnQtSUQgaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycy5cbiAgICB2YXIgcmVxdWVzdFVSTCA9IHVybFxuICAgIGlmICh1cmwuc2xpY2UoMCwgNSkgIT09ICdkYXRhOicgJiYgdXJsLnNsaWNlKDAsIDUpICE9PSAnYmxvYjonKSB7XG4gICAgICBpZiAobGFzdEV2ZW50SWQgIT09ICcnKSB7XG4gICAgICAgIHJlcXVlc3RVUkwgKz1cbiAgICAgICAgICAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICtcbiAgICAgICAgICAnbGFzdEV2ZW50SWQ9JyArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGxhc3RFdmVudElkKVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSB7fVxuICAgIHJlcXVlc3RIZWFkZXJzWydBY2NlcHQnXSA9ICd0ZXh0L2V2ZW50LXN0cmVhbSdcbiAgICBpZiAoaGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVhZGVycykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsIG5hbWUpKSB7XG4gICAgICAgICAgcmVxdWVzdEhlYWRlcnNbbmFtZV0gPSBoZWFkZXJzW25hbWVdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHRyYW5zcG9ydC5vcGVuKFxuICAgICAgICB4aHIsXG4gICAgICAgIG9uU3RhcnQsXG4gICAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgICAgIG9uRmluaXNoLFxuICAgICAgICByZXF1ZXN0VVJMLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgIHJlcXVlc3RIZWFkZXJzXG4gICAgICApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNsb3NlKClcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuICB9XG5cbiAgZXMudXJsID0gdXJsXG4gIGVzLnJlYWR5U3RhdGUgPSBDT05ORUNUSU5HXG4gIGVzLndpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFsc1xuICBlcy5fY2xvc2UgPSBjbG9zZVxuXG4gIG9uVGltZW91dCgpXG59XG5cbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudFRhcmdldC5wcm90b3R5cGUpXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DT05ORUNUSU5HID0gQ09OTkVDVElOR1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuT1BFTiA9IE9QRU5cbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNMT1NFRCA9IENMT1NFRFxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX2Nsb3NlKClcbn1cblxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5DT05ORUNUSU5HID0gQ09OTkVDVElOR1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5PUEVOID0gT1BFTlxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5DTE9TRUQgPSBDTE9TRURcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLndpdGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZFxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFNvdXJjZVBvbHlmaWxsXG4iLCIvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmVtb3ZlIE5leHQuanMnIG5vLUZPVUMgc3R5bGVzIHdvcmthcm91bmQgZm9yIHVzaW5nXG4vLyBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudC4gSXQgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGh5ZHJhdGlvbiwgb3IgZWxzZVxuLy8gcmVuZGVyaW5nIHdvbid0IGhhdmUgdGhlIGNvcnJlY3QgY29tcHV0ZWQgdmFsdWVzIGluIGVmZmVjdHMuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUNvbnRlbnQoY2FsbGJhY2spIHtcbiAgOyh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQpKGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKFxuICAgICAgdmFyIHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uZXh0LWhpZGUtZm91Y10nKSwgaSA9IHgubGVuZ3RoO1xuICAgICAgaS0tO1xuXG4gICAgKSB7XG4gICAgICB4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSlcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9KVxufVxuIiwiLyogZ2xvYmFsIGxvY2F0aW9uICovXG5pbXBvcnQgeyBnZXRFdmVudFNvdXJjZVdyYXBwZXIgfSBmcm9tICcuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UnXG5cbmxldCBldnRTb3VyY2VcbmV4cG9ydCBsZXQgY3VycmVudFBhZ2VcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUGluZygpIHtcbiAgaWYgKGV2dFNvdXJjZSkgZXZ0U291cmNlLmNsb3NlKClcbiAgZXZ0U291cmNlID0gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBQaW5nKGFzc2V0UHJlZml4LCBwYXRobmFtZUZuLCByZXRyeSkge1xuICBjb25zdCBwYXRobmFtZSA9IHBhdGhuYW1lRm4oKVxuXG4gIC8vIE1ha2Ugc3VyZSB0byBvbmx5IGNyZWF0ZSBuZXcgRXZlbnRTb3VyY2UgcmVxdWVzdCBpZiBwYWdlIGhhcyBjaGFuZ2VkXG4gIGlmIChwYXRobmFtZSA9PT0gY3VycmVudFBhZ2UgJiYgIXJldHJ5KSByZXR1cm5cbiAgY3VycmVudFBhZ2UgPSBwYXRobmFtZVxuICAvLyBjbG9zZSBjdXJyZW50IEV2ZW50U291cmNlIGNvbm5lY3Rpb25cbiAgY2xvc2VQaW5nKClcblxuICBjb25zdCB1cmwgPSBgJHthc3NldFByZWZpeH0vX25leHQvd2VicGFjay1obXI/cGFnZT0ke2N1cnJlbnRQYWdlfWBcbiAgZXZ0U291cmNlID0gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKHsgcGF0aDogdXJsLCB0aW1lb3V0OiA1MDAwLCBvbmRlbWFuZDogMSB9KVxuXG4gIGV2dFNvdXJjZS5hZGRNZXNzYWdlTGlzdGVuZXIoKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmRhdGEuaW5kZXhPZigneycpID09PSAtMSkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXG4gICAgICBpZiAocGF5bG9hZC5pbnZhbGlkKSB7XG4gICAgICAgIC8vIFBheWxvYWQgY2FuIGJlIGludmFsaWQgZXZlbiBpZiB0aGUgcGFnZSBkb2VzIG5vdCBleGlzdC5cbiAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGl0IGV4aXN0cyBiZWZvcmUgcmVsb2FkaW5nLlxuICAgICAgICBmZXRjaChsb2NhdGlvbi5ocmVmLCB7XG4gICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4oKHBhZ2VSZXMpID0+IHtcbiAgICAgICAgICBpZiAocGFnZVJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdvbi1kZW1hbmQtZW50cmllcyBmYWlsZWQgdG8gcGFyc2UgcmVzcG9uc2UnLCBlcnIpXG4gICAgfVxuICB9KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==