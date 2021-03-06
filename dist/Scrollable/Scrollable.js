"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _reactDraggable = require("react-draggable");

var _scrollableModule = _interopRequireDefault(require("./styles/scrollable.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Scrollable = function Scrollable(props) {
  var children = props.children,
      onScollCallback = props.onScollCallback,
      wrapperStyles = props.wrapperStyles,
      trackStyles = props.trackStyles,
      handleStyles = props.handleStyles,
      autoHide = props.autoHide,
      hideTime = props.hideTime,
      scrollTo = props.scrollTo;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      handleSize = _useState2[0],
      setHandleSize = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      handlePos = _useState4[0],
      setHandlePos = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      NoScroll = _useState6[0],
      setNoScroll = _useState6[1];

  var _useState7 = (0, _react.useState)(autoHide),
      _useState8 = _slicedToArray(_useState7, 2),
      Hide = _useState8[0],
      setHide = _useState8[1];

  var scrollContentElement = (0, _react.useRef)();
  var scrollTrackElement = (0, _react.useRef)();
  var scrollAreaElement = (0, _react.useRef)();
  var scrollElement = (0, _react.useRef)();
  var maxHandlePos = (0, _react.useRef)();
  var totalScrollable = (0, _react.useRef)();
  var isDraggingHandle = (0, _react.useRef)(null);
  var timer = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    scrollAreaElement.current.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    if (scrollTo) scrollAreaElement.current.scrollTop = scrollTo;
    return function cleanup() {
      if (scrollAreaElement.current) scrollAreaElement.current.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);
  (0, _react.useEffect)(function () {
    calculate();
  }, [children]);

  function calculate() {
    var scrollEl = scrollElement.current;
    var scrollTrackEl = scrollTrackElement.current;
    var scrollContentEl = scrollContentElement.current;
    var scrollAreaEl = scrollAreaElement.current;
    var handleSize = scrollEl.clientHeight / scrollContentEl.clientHeight * scrollTrackEl.clientHeight;
    maxHandlePos.current = scrollTrackEl.clientHeight - handleSize;
    totalScrollable.current = scrollContentEl.clientHeight - scrollEl.clientHeight;
    var locationInPercent = scrollAreaEl.scrollTop / totalScrollable.current;
    setNoScroll(scrollEl.clientHeight / scrollContentEl.clientHeight >= 1 ? true : false);
    setHandlePos(locationInPercent * maxHandlePos.current);
    setHandleSize(handleSize);
  }

  function onScroll(e) {
    var locationInPercent = e.target.scrollTop / totalScrollable.current;
    setHandlePos(locationInPercent * maxHandlePos.current);
    if (hideTime) onMouseMove();
    if (onScollCallback) onScollCallback(e);
  }

  function scrollToHandlePos(pos) {
    var locationInPercent;

    if (pos <= maxHandlePos.current) {
      locationInPercent = pos / maxHandlePos.current;
    } else {
      locationInPercent = 1;
    }

    var scrollPos = locationInPercent * totalScrollable.current;
    scrollAreaElement.current.scrollTop = scrollPos;
  }

  function isOnHandle(pos) {
    return handlePos <= pos && pos <= handlePos + handleSize || false;
  }

  function onDragStart(e) {
    var adjustedClientY = e.clientY - scrollElement.current.getBoundingClientRect().y;
    var onHandle = isOnHandle(adjustedClientY);

    if (!onHandle) {
      scrollToHandlePos(adjustedClientY);
    } else {
      isDraggingHandle.current = {
        initial: e.clientY,
        initialHandle: handlePos
      };
    }
  }

  function onDragMove(e) {
    if (isDraggingHandle.current) {
      var difference = e.clientY - isDraggingHandle.current.initial;
      scrollToHandlePos(isDraggingHandle.current.initialHandle + difference);
    }
  }

  function onDragStop(e) {
    isDraggingHandle.current = null;
  }

  function onResize() {
    calculate();
  }

  function setTimer(delay) {
    timer.current = setTimeout(function () {
      setHide(true);
    }, delay);
  }

  function destroyTimer() {
    if (timer.current) clearTimeout(timer.current);
  }

  function onMouseMove() {
    destroyTimer();

    if (autoHide) {
      setHide(false);
      setTimer(hideTime);
    }
  }

  function onMouseEnter() {
    scrollAreaElement.current.focus();

    if (autoHide) {
      setHide(false);
    }
  }

  function onMouseLeave() {
    scrollAreaElement.current.blur();

    if (autoHide) {
      setHide(true);
    }
  }

  var stylesScroll = (0, _bind.default)(_scrollableModule.default['scroll-wrapper'], _defineProperty({}, _scrollableModule.default['scroll-wrapper--hide'], Hide || NoScroll ? true : false));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _scrollableModule.default.wrapper,
    style: wrapperStyles,
    ref: scrollElement,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onMouseMove: hideTime ? onMouseMove : null
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _scrollableModule.default.inner,
    ref: scrollAreaElement
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: scrollContentElement
  }, children)), /*#__PURE__*/_react.default.createElement(_reactDraggable.DraggableCore, {
    onStart: onDragStart,
    onDrag: onDragMove,
    onStop: onDragStop
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: stylesScroll
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: trackStyles,
    className: _scrollableModule.default['scroll-track'],
    ref: scrollTrackElement
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _scrollableModule.default['scroll-handle'],
    style: _objectSpread({
      height: "".concat(handleSize, "px"),
      transform: "translate(0,".concat(handlePos, "px)"),
      cursor: 'pointer'
    }, handleStyles)
  })))));
};

var _default = Scrollable;
exports.default = _default;