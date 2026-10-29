"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Options {
    constructor() {
        var _a;
        this._textArea = document.getElementById('domains');
        (_a = this._textArea) === null || _a === void 0 ? void 0 : _a.addEventListener('change', this.save.bind(this));
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const value = (_a = this._textArea) === null || _a === void 0 ? void 0 : _a.value;
            yield chrome.storage.local.set({ 'domains': value === null || value === void 0 ? void 0 : value.split('\n') });
        });
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield chrome.storage.local.get('domains');
            this.render(data.domains);
        });
    }
    render(array) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._textArea) {
                return;
            }
            this._textArea.value = (array === null || array === void 0 ? void 0 : array.join('\n')) || '';
        });
    }
}
;
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    const options = new Options();
    yield options.load();
});
//# sourceMappingURL=options.js.map