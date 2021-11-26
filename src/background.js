function liftRightClickBan() {
  document.addEventListener('contextmenu', (e) => {
    e.stopPropagation();
  }, true);
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: liftRightClickBan
  });
});