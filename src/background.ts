class Background {

    constructor() {
        chrome.action.onClicked.addListener((tab) => {
            const tabId = tab.id;
            if (tabId) {
                chrome.scripting.executeScript({
                    target: { tabId },
                    func: Background.allow
                });
            }
        });
    }

    static allow() {
        document.addEventListener('contextmenu', (event) => {
            event.stopPropagation();
        }, true);
    }
}

new Background();
