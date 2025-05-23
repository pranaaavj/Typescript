"use strict";
var Status;
(function (Status) {
    Status["success"] = "success";
    Status["failure"] = "failure";
})(Status || (Status = {}));
var Numbers;
(function (Numbers) {
    Numbers[Numbers["first"] = 0] = "first";
    Numbers[Numbers["second"] = 1] = "second";
    Numbers[Numbers["third"] = 2] = "third";
})(Numbers || (Numbers = {}));
console.log(Status.failure);
