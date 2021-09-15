import styles from './styles';
import toggleBtn from './components/toggleBtn';

const liveChatTemplate = document.createElement('template');

liveChatTemplate.innerHTML = `
<style>
    ${styles}
</style>

<div id="widget-wrapper">
    <div id="acx-livechat-wrapper" class="inactive"></div>
    ${toggleBtn}
</div>
`;

export default liveChatTemplate;