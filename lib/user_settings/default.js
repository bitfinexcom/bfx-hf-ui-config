const { BFX_HF_CUSTOM } = require('./charts')
const { DARK } = require('./themes')

module.exports = {
  affiliateCode: 'xZvWHMNR',
  joinBetaProgram: false,
  showAlgoPauseInfo: true,
  rebootAutomatically: false,
  showOnlyFavoritePairs: false,
  hideOnClose: false,
  fullScreen: true,
  dms: true,
  ga: false,
  chart: BFX_HF_CUSTOM,
  theme: DARK,
  packetWDDelay: 30 * 1000,
  autoResumeAOs: false,
  timestampFormat: '',
  showOptInModal: false,
  optinCrashReports: false,
  optinBFXAnalytics: false,
}
