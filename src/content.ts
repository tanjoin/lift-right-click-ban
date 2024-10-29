class Content {

    async load() {
        const data = await chrome.storage.local.get('domains');
        if (data?.domains?.find((domain: string) => location.hostname.includes(domain))) {
            this.allow();
        }
    }

    allow() {
        document.addEventListener('contextmenu', (event) => {
            event.stopPropagation();
        }, true);
    }
}

window.onload = async () => {
    const content = new Content();
    await content.load();
};