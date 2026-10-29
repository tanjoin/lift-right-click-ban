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
class Content {
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const data = yield chrome.storage.local.get('domains');
            if ((_a = data === null || data === void 0 ? void 0 : data.domains) === null || _a === void 0 ? void 0 : _a.find((domain) => location.hostname.includes(domain))) {
                this.allow();
            }
        });
    }
    allow() {
        document.addEventListener('contextmenu', (event) => {
            event.stopPropagation();
        }, true);
    }
}
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    const content = new Content();
    yield content.load();
});
//# sourceMappingURL=content.js.map