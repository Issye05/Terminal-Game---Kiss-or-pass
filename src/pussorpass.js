"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
var namn = ['Eliah Bror Bäckström Dimmed', 'Tomtemor', 'Erik Lööf'];
var puss = [];
function fragaNamn() {
    for (var i = 0; i < namn.length; i++) {
        var b = namn[i];
        var svar = prompt('puss eller pass för ' + b + '?').toLowerCase().trim();
        if (svar === 'puss') {
            puss.push(b);
        }
    }
    console.log('Du vill pussa ', puss.join(', '), '<3');
}
fragaNamn();
