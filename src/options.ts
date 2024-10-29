class Options {

    private _textArea: HTMLTextAreaElement | null;

    constructor() {
        this._textArea = document.getElementById('domains') as (HTMLTextAreaElement | null);
        this._textArea?.addEventListener('change', this.save.bind(this));
    }

    async save() {
        const value = this._textArea?.value;
        await chrome.storage.local.set({ 'domains': value?.split('\n') });
    }

    async load() {
        let data = await chrome.storage.local.get('domains');
        this.render(data.domains);
    }

    async render(array: string[]) {
        if (!this._textArea) {
            return;
        }
        this._textArea.value = array?.join('\n') || '';
    }
};

window.onload = async () => {
    const options = new Options();
    await options.load();
};