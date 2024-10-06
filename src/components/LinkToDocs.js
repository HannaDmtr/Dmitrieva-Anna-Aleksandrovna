import jsLogo from '../assets/js-logo.svg';

const LinkToDocs = () => {
  return `<p>Если что-то не понятно, то идем читать документацию:</p>
  <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="${jsLogo}" class="docs-logo" alt="JavaScript logo" />
  </a></p>`;
};

export default LinkToDocs;
