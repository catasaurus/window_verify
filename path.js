/*
Borrowed from wesbos in his path.ts file in his hot-tips repository
can be found on his github (his username is wesbos)
*/
var PathMe = /** @class */ (function () {
    function PathMe() {
        this.moves = [];
        this.moves = [];
        return this;
    }
    PathMe.prototype.moveTo = function (x, y) {
        this.moves.push("M ".concat(x, " ").concat(y));
        return this;
    };
    PathMe.prototype.closePath = function () {
        this.moves.push('Z');
        return this;
    };
    PathMe.prototype.lineTo = function (x, y) {
        this.moves.push("L ".concat(x, " ").concat(y));
        return this;
    };
    PathMe.prototype.horizontalLineTo = function (x) {
        this.moves.push("H ".concat(x));
        return this;
    };
    PathMe.prototype.verticalLineTo = function (y) {
        this.moves.push("V ".concat(y));
        return this;
    };
    PathMe.prototype.curveTo = function (x1, y1, x2, y2, x, y) {
        this.moves.push("C ".concat(x1, " ").concat(y1, " ").concat(x2, " ").concat(y2, " ").concat(x, " ").concat(y));
        return this;
    };
    PathMe.prototype.smoothCurveTo = function (x2, y2, x, y) {
        this.moves.push("S ".concat(x2, " ").concat(y2, " ").concat(x, " ").concat(y));
        return this;
    };
    PathMe.prototype.quadraticCurveTo = function (x1, y1, x, y) {
        this.moves.push("Q ".concat(x1, " ").concat(y1, " ").concat(x, " ").concat(y));
        return this;
    };
    PathMe.prototype.smoothQuadraticCurveTo = function (x, y) {
        this.moves.push("T ".concat(x, " ").concat(y));
        return this;
    };
    PathMe.prototype.arc = function (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
        var largeArc = largeArcFlag ? 1 : 0;
        var sweep = sweepFlag ? 1 : 0;
        this.moves.push("A ".concat(rx, " ").concat(ry, " ").concat(xAxisRotation, " ").concat(largeArc, " ").concat(sweep, " ").concat(x, " ").concat(y));
        return this;
    };
    PathMe.prototype.catmullRomCurveTo = function (x1, y1, x, y) {
        this.moves.push("R ".concat(x1, " ").concat(y1, " ").concat(x, " ").concat(y));
        return this;
    };
    PathMe.prototype.toString = function () {
        return this.moves.join(' ');
    };
    return PathMe;
}());
export { PathMe };
