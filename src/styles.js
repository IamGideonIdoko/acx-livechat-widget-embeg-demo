import {acxBlue} from './variable';

const styles = `

@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: Cabin, sans-serif;
}

#widget-wrapper {
}

#acx-livechat-wrapper {
    width: 375px;
    height: 600px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    -webkit-tap-highlight-color: transparent;
    z-index: 999999999;
    transition: opacity 0.4s ease 0s, transform 0.3s cubic-bezier(0.24, 0.6, 0.35, 0.96) 0s;
    transform-origin: 100% 100%;
    opacity: 0;
    pointer-events: none;
    transform: scale(0.1);
    border-radius: 10px;
    overflow: hidden;
}

#acx-livechat-wrapper.active {
    transform-origin: 100% 100%;
    opacity: 1 !important;
    pointer-events: auto;
    transform: scale(1) !important;
}

#acx-livechat-wrapper iframe {
    overflow-x: hidden;
    forder: 1px solid red;
}

.toggle-btn {
    position: fixed;
    z-index: 9999999999;
    cursor: pointer;
    outline: none;
    height: 54px;
    width: 54px;
    border-radius: 100rem;
    transition: box-shadow 0.2s ease 0s, background-color 0.3s ease 0s, opacity 0.2s ease 0s, transform 0.2s ease 0s;
    animation: 0.3s ease 0s 1 normal none running animation-1nrbrg8;
    right: 20px;
    bottom: 20px;
    background-color: ${acxBlue};
    border: none;
    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.2);
}

.toggle-btn:hover {
    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.5);
}

`;


export default styles;