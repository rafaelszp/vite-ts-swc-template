Object.defineProperty(exports, "__esModule", {
    value: true
});
const _moduluslib = /*#__PURE__*/ _interop_require_default(require("@playground/modulus-lib"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let num;
num.value = 3;
num.mod = 2;
let num2;
console.log((0, _moduluslib.default)(num));
console.log((0, _moduluslib.default)(num2));
