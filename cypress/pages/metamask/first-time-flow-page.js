const app = '#app-content .app';
const welcomePage = '.welcome-page';
const confirmButton = `${welcomePage} .first-time-flow__button`;
module.exports.welcomePageElements = {
  app,
  welcomePage,
  confirmButton,
};

const firstTimeFlowPage = '.first-time-flow';
const importWalletButton = `${firstTimeFlowPage} .select-action__select-button:nth-child(1) .first-time-flow__button`;
const createWalletButton = `${firstTimeFlowPage} .select-action__select-button:nth-child(2) .first-time-flow__button`;
module.exports.firstTimeFlowPageElements = {
  firstTimeFlowPage,
  importWalletButton,
  createWalletButton,
};

const metametricsPage = '.metametrics-opt-in';
const optOutAnalyticsButton = `${metametricsPage} [data-testid="page-container-footer-cancel"]`;
module.exports.metametricsPageElements = {
  metametricsPage,
  optOutAnalyticsButton,
};

// const firstTimeFlowFormPage = '.first-time-flow';
const firstTimeFlowFormPage = '.create-new-vault__form';
const secretWordsInput = `${firstTimeFlowFormPage} input[placeholder="Paste Secret Recovery Phrase from clipboard"]`;
const passwordInput = `${firstTimeFlowFormPage} #password`;
const confirmPasswordInput = `${firstTimeFlowFormPage} #confirm-password`;
const termsCheckbox = `${firstTimeFlowFormPage} .create-new-vault__terms input`;
const importButton = `${firstTimeFlowFormPage} .create-new-vault__submit-button`;
const newPasswordInput = `${firstTimeFlowFormPage} #create-password`;
const newSignupCheckbox = `${firstTimeFlowFormPage} .first-time-flow__checkbox`;
const word1Input = `${firstTimeFlowFormPage} #import-srp__srp-word-0`;
const word2Input = `${firstTimeFlowFormPage} #import-srp__srp-word-1`;
const word3Input = `${firstTimeFlowFormPage} #import-srp__srp-word-2`;
const word4Input = `${firstTimeFlowFormPage} #import-srp__srp-word-3`;
const word5Input = `${firstTimeFlowFormPage} #import-srp__srp-word-4`;
const word6Input = `${firstTimeFlowFormPage} #import-srp__srp-word-5`;
const word7Input = `${firstTimeFlowFormPage} #import-srp__srp-word-6`;
const word8Input = `${firstTimeFlowFormPage} #import-srp__srp-word-7`;
const word9Input = `${firstTimeFlowFormPage} #import-srp__srp-word-8`;
const word10Input = `${firstTimeFlowFormPage} #import-srp__srp-word-9`;
const word11Input = `${firstTimeFlowFormPage} #import-srp__srp-word-10`;
const word12Input = `${firstTimeFlowFormPage} #import-srp__srp-word-11`;

module.exports.firstTimeFlowFormPageElements = {
  firstTimeFlowFormPage,
  secretWordsInput,
  word1Input,
  word2Input,
  word3Input,
  word4Input,
  word5Input,
  word6Input,
  word7Input,
  word8Input,
  word9Input,
  word10Input,
  word11Input,
  word12Input,
  passwordInput,
  confirmPasswordInput,
  termsCheckbox,
  importButton,
  newPasswordInput,
  newSignupCheckbox,
};

const secureYourWalletPage = '.seed-phrase-intro';
const nextButton = `${secureYourWalletPage} button`;
module.exports.secureYourWalletPageElements = {
  secureYourWalletPage,
  nextButton,
};

const endOfFlowPage = '.end-of-flow';
const allDoneButton = `${endOfFlowPage} .first-time-flow__button`;
module.exports.endOfFlowPageElements = {
  endOfFlowPage,
  allDoneButton,
};

const revealSeedPage = '.reveal-seed-phrase';
const remindLaterButton = `${revealSeedPage} .first-time-flow__button`;
module.exports.revealSeedPageElements = {
  revealSeedPage,
  remindLaterButton,
};
