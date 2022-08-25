const settingsPage = '.settings-page';
const advancedButton = `${settingsPage} button:nth-child(2)`;
const networksButton = `${settingsPage} button:nth-child(6)`;
const closeButton = `${settingsPage} .settings-page__header__title-container__close-button`;
module.exports.settingsPageElements = {
  settingsPage,
  advancedButton,
  networksButton,
  closeButton,
};
const testNetworkToggleOn =
  'div.settings-page__body > div:nth-child(7) > div:nth-child(2) > div > label > div:nth-child(1) > input[type=checkbox][value=true]';
const testNetworkToggleOff =
  'div.settings-page__body > div:nth-child(7) > div:nth-child(2) > div > label > div:nth-child(1) > input[type=checkbox][value=false]';
const customNonceToggleOn =
  '[data-testid="advanced-setting-custom-nonce"] .toggle-button--on input';
const customNonceToggleOff =
  '[data-testid="advanced-setting-custom-nonce"] .toggle-button--off input';
const resetAccountButton =
  '[data-testid="advanced-setting-reset-account"] button';
module.exports.advancedPageElements = {
  testNetworkToggleOn,
  testNetworkToggleOff,
  customNonceToggleOn,
  customNonceToggleOff,
  resetAccountButton,
};

const nevermindButton = '.modal-container button:nth-child(1)';
const resetButton = '.modal-container button:nth-child(2)';
module.exports.resetAccountModalElements = {
  nevermindButton,
  resetButton,
};

const addNetworkButton = '.networks-tab__body button';
module.exports.networksPageElements = { addNetworkButton };

const networkNameInput = '#network-name';
const rpcUrlInput = '#rpc-url';
const chainIdInput = '#chainId';
const symbolInput = '#network-ticker';
const blockExplorerInput = '#block-explorer-url';
const saveButton = '.network-form__footer button:nth-child(2)';
module.exports.addNetworkPageElements = {
  networkNameInput,
  rpcUrlInput,
  chainIdInput,
  symbolInput,
  blockExplorerInput,
  saveButton,
};