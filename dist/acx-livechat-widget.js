const $cca47c333b2bb4a3$export$7f6e36e8154939a2 = 'rgb(0, 116, 178)';


const $3c904e0afa8fc680$var$styles = `\n\n@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: Cabin, sans-serif;\n}\n\n#widget-wrapper {\n}\n\n#acx-livechat-wrapper {\n    width: 375px;\n    height: 600px;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    -webkit-tap-highlight-color: transparent;\n    z-index: 999999999;\n    transition: opacity 0.4s ease 0s, transform 0.3s cubic-bezier(0.24, 0.6, 0.35, 0.96) 0s;\n    transform-origin: 100% 100%;\n    opacity: 0;\n    pointer-events: none;\n    transform: scale(0.1);\n    border-radius: 10px;\n    overflow: hidden;\n}\n\n#acx-livechat-wrapper.active {\n    transform-origin: 100% 100%;\n    opacity: 1 !important;\n    pointer-events: auto;\n    transform: scale(1) !important;\n}\n\n#acx-livechat-wrapper iframe {\n    overflow-x: hidden;\n    forder: 1px solid red;\n}\n\n.toggle-btn {\n    position: fixed;\n    z-index: 9999999999;\n    cursor: pointer;\n    outline: none;\n    height: 54px;\n    width: 54px;\n    border-radius: 100rem;\n    transition: box-shadow 0.2s ease 0s, background-color 0.3s ease 0s, opacity 0.2s ease 0s, transform 0.2s ease 0s;\n    animation: 0.3s ease 0s 1 normal none running animation-1nrbrg8;\n    right: 20px;\n    bottom: 20px;\n    background-color: ${$cca47c333b2bb4a3$export$7f6e36e8154939a2};\n    border: none;\n    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.2);\n}\n\n.toggle-btn:hover {\n    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.5);\n}\n\n`;
var $3c904e0afa8fc680$export$9099ad97b570f7c = $3c904e0afa8fc680$var$styles;


const $9d9479d926eff918$export$b01f19d402d03727 = `\n<svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M4.66495 11.1757C4.66495 14.5199 7.27019 17.2394 10.4711 17.2394C11.4516 17.2423 12.4167 16.9841 13.2752 16.4892C14.1336 15.9942 14.8571 15.2787 15.3774 14.4104L16.8773 12.0173L16.892 11.9955L20.141 15.3897L20.1369 15.3964L19.5476 16.3891C19.5203 16.4373 19.4931 16.4878 19.4656 16.536L19.2287 16.9349C17.278 20.0355 14.0056 21.8784 10.4711 21.8784C4.69637 21.8784 0 16.9698 0 10.9392C0 4.90864 4.69564 4.4294e-07 10.4711 4.4294e-07C12.202 -0.000514206 13.9061 0.447454 15.4307 1.30379L15.4977 1.34124L19.6048 5.62966L29 15.4472L28.9951 22L14.9664 7.33898C14.7201 7.02494 14.4447 6.73719 14.1441 6.47996C14.1274 6.46457 14.1105 6.45149 14.095 6.43841L14.0383 6.39224C13.0221 5.55688 11.7654 5.10492 10.4723 5.10974C7.2702 5.11025 4.66495 7.83197 4.66495 11.1757Z" fill="white"/>\n<path d="M24.4847 8L24.4916 7.99173L30 0H24.3216L21.0135 4.80127L21 4.82219L24.4847 8Z" fill="white"/>\n</svg>\n`;


var /* 

.css-14old29 {
    position: fixed;
    z-index: 2147482999;
    transition: opacity 0.4s ease 0s, transform 0.3s cubic-bezier(0.24, 0.6, 0.35, 0.96) 0s;
    height: calc(100% - 40px);
    right: 20px;
    bottom: 20px;
    transform-origin: 100% 100%;
    opacity: 0;
    pointer-events: none;
    transform: scale(0.1);
}
*/ $c78c51d9e61e2826$export$9099ad97b570f7c = `\n<button id="toggle-btn" class="toggle-btn">${$9d9479d926eff918$export$b01f19d402d03727}</button>\n`;


const $a45d6ef417af1ca6$var$liveChatTemplate = document.createElement('template');
$a45d6ef417af1ca6$var$liveChatTemplate.innerHTML = `\n<style>\n    ${$3c904e0afa8fc680$export$9099ad97b570f7c}\n</style>\n\n<div id="widget-wrapper">\n    <div id="acx-livechat-wrapper" class="inactive"></div>\n    ${$c78c51d9e61e2826$export$9099ad97b570f7c}\n</div>\n`;
var $a45d6ef417af1ca6$export$9099ad97b570f7c = $a45d6ef417af1ca6$var$liveChatTemplate;


// create customer element (<alphacx-livechat></alphacx-livechat>)
class $9d51a72ff28da81d$var$AlphaCXLiveChat extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild($a45d6ef417af1ca6$export$9099ad97b570f7c.content.cloneNode(true));
    }
    connectedCallback() {
        // called everytime `alphacx-livechat` element is inserted into the DOM
        // actions like addEventListener can be perform here
        const toggleBtn = this.shadowRoot.querySelector('#toggle-btn');
        const acxLiveChatWrapper = this.shadowRoot.querySelector('#acx-livechat-wrapper');
        toggleBtn.addEventListener('click', ()=>{
            /* const isActive = acxLiveChatWrapper.contains('active');
            if (!isActive) {
                acxLiveChatWrapper.classList.remove('active');
            } else {
                acxLiveChatWrapper.classList.add('active');
            } */ acxLiveChatWrapper.classList.toggle('active');
        });
    }
    disconnectedCallback() {
    // called everytime `alphacx-livechat` element is removed into the DOM
    // actions live removeEventListener can be perform here
    }
}
window.customElements.define('alphacx-livechat', $9d51a72ff28da81d$var$AlphaCXLiveChat);
document.addEventListener('DOMContentLoaded', ()=>{
    const AlphaCXLiveChat = document.createElement('alphacx-livechat');
    console.log("acx element => ", AlphaCXLiveChat);
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    // AlphaCXLiveChat.shadowRoot.appendChild(iframe);
    // append iframe to the shadow root
    AlphaCXLiveChat.shadowRoot.querySelector('#acx-livechat-wrapper').appendChild(iframe);
    document.body.appendChild(AlphaCXLiveChat);
    iframe.setAttribute('src', 'https://acx-livechat.vercel.app');
});
function $9d51a72ff28da81d$var$main() {
    console.log('AlphaCX LiveChat');
}
window.ACX = {
    createLiveChatWidget: $9d51a72ff28da81d$var$main
};


