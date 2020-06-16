"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _testUtils = require("react-dom/test-utils");

var _chai = require("chai");

var _button = require("./button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootContainer;
beforeEach(function () {
  rootContainer = document.createElement('div');
  document.body.appendChild(rootContainer);
});
afterEach(function () {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});
describe('Button Component Testing', function () {
  it('Renders Button with Add text', function () {
    (0, _testUtils.act)(function () {
      _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_button.Button, {
        text: "Add",
        onClick: function onClick() {
          return console.log('click');
        }
      }), rootContainer);
    });
    var text = rootContainer.querySelector('button');
    (0, _chai.expect)(text.textContent).to.equal('Add');
  });
});

//# sourceMappingURL=button.test.js.map