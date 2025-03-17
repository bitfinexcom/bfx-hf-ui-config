const { BFX_HF_CUSTOM } = require('./charts')
const { DARK } = require('./themes')

module.exports = {
  affiliateCode: 'xZvWHMNR',
  showAlgoPauseInfo: true,
  rebootAutomatically: false,
  showOnlyFavoritePairs: false,
  hideOnClose: false,
  fullScreen: true,
  chart: BFX_HF_CUSTOM,
  theme: DARK,
  packetWDDelay: 30 * 1000,
  autoResumeAOs: false,
  timestampFormat: '',
}
