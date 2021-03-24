"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Scrollable = _interopRequireDefault(require("./Scrollable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Scrollable',
  component: _Scrollable.default
};
exports.default = _default;

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '300px',
      height: '40vh'
    }
  }, /*#__PURE__*/_react.default.createElement(_Scrollable.default, {
    autoHide: true
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus id ex eu cursus. Fusce nec luctus urna. Mauris ac leo commodo magna laoreet bibendum. Pellentesque ut justo nec urna tincidunt mattis ac vitae nulla. Vivamus in pellentesque leo, sit amet ultricies sem. Nulla varius, lectus vitae eleifend volutpat, metus libero maximus neque, et lacinia mi nibh non ex. Donec imperdiet, diam sit amet rutrum placerat, nunc sapien congue nibh, in euismod nisi sem in nisi. Aenean elementum risus lacus, quis mollis neque rutrum et. Fusce fringilla metus et purus egestas, at lobortis est pretium. Praesent sollicitudin nulla eu odio posuere facilisis. Vivamus ornare commodo nisl, sed tempus ipsum lobortis maximus. Quisque a justo tincidunt, rhoncus felis sit amet, vehicula eros. Vivamus pulvinar elit et lobortis tristique. Mauris ac mauris massa. Etiam blandit tempor urna, et lacinia orci tincidunt in. Suspendisse nec pretium ligula. Nullam pulvinar venenatis sem id aliquam. Ut luctus diam a dui egestas varius. In sagittis felis nulla, at efficitur sapien fringilla sit amet. Vivamus interdum turpis eu mauris porttitor, sit amet scelerisque tortor elementum. Mauris ac mauris massa. Etiam blandit tempor urna, et lacinia orci tincidunt in. Suspendisse nec pretium ligula. Nullam pulvinar venenatis sem id aliquam. Ut luctus diam a dui egestas varius. In sagittis felis nulla, at efficitur sapien fringilla sit amet. Vivamus interdum turpis eu mauris porttitor, sit amet scelerisque tortor elementum."));
};

exports.Default = Default;