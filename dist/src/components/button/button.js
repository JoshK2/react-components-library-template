"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _buttonModule = _interopRequireDefault(require("./button.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick,
      className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["text", "onClick", "className", "children"]);

  return /*#__PURE__*/_react.default.createElement("button", _extends({
    onClick: onClick,
    className: (0, _classnames.default)(_buttonModule.default.button, className)
  }, rest), text || children);
};

exports.Button = Button;
Button.propTypes = {
  /**
   * button text value
   * */
  text: _propTypes.default.string.isRequired,

  /**
   * on click function
   * */
  onClick: _propTypes.default.func.isRequired,

  /**
   * optional class
   * */
  className: _propTypes.default.string
};
Button.defaultProps = {
  text: 'Click'
};

//# sourceMappingURL=button.js.map