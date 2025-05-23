"use strict";
function handle(field) {
    switch (field) {
        case 'email':
            return 'do email';
        case 'username':
            return 'do username';
        default:
            const _exhaustive = field;
            return _exhaustive;
    }
}
