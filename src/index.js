import liveChatTemplate from './template';


// create customer element (<alphacx-livechat></alphacx-livechat>)
class AlphaCXLiveChat extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(liveChatTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        // called everytime `alphacx-livechat` element is inserted into the DOM
        // actions like addEventListener can be perform here

        const toggleBtn = this.shadowRoot.querySelector('#toggle-btn');
        const acxLiveChatWrapper = this.shadowRoot.querySelector('#acx-livechat-wrapper');

        toggleBtn.addEventListener('click', () => {
            /* const isActive = acxLiveChatWrapper.contains('active');
            if (!isActive) {
                acxLiveChatWrapper.classList.remove('active');
            } else {
                acxLiveChatWrapper.classList.add('active');
            } */

            acxLiveChatWrapper.classList.toggle('active');

        });
        
    }

    disconnectedCallback() {
        // called everytime `alphacx-livechat` element is removed into the DOM
        // actions live removeEventListener can be perform here
    }
}

window.customElements.define('alphacx-livechat', AlphaCXLiveChat);


document.addEventListener('DOMContentLoaded', () => {
    const AlphaCXLiveChat = document.createElement('alphacx-livechat');

    console.log("acx element => ", AlphaCXLiveChat);

    const iframe =  document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';

    // AlphaCXLiveChat.shadowRoot.appendChild(iframe);

    // append iframe to the shadow root
    AlphaCXLiveChat.shadowRoot.querySelector('#acx-livechat-wrapper').appendChild(iframe);

    document.body.appendChild(AlphaCXLiveChat);

    iframe.setAttribute('src', 'https://acx-livechat.vercel.app');
    
});


function main () {
    console.log('AlphaCX LiveChat');
}

window.ACX = {
    createLiveChatWidget: main
}