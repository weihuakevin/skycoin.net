export const version = 'v0.21.1';
export const downloads = [{
  platform: 'downloads.wallet.macos',
  icon: 'macos',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.21.1-gui-osx.dmg',
      filetype: '.dmg',
      filesize: '51mb',
    }],
  }, {
    name: 'downloads.wallet.withoutElectron',
    architectures: [{
      name: '',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.21.1-bin-osx-darwin-x64.zip',
      filetype: '.zip',
      filesize: '14mb',
    }],
  }],
}, {
  platform: 'downloads.wallet.windows',
  icon: 'windows',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '64bit',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.21.1-gui-win-setup.exe',
      filetype: '.exe',
      filesize: '68mb',
    }],
  }, {
    name: 'downloads.wallet.withoutElectron',
    architectures: [{
      name: '32bit',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.21.1-bin-win-x86.zip',
      filetype: '.zip',
      filesize: '14mb',
    }, {
      name: '64bit',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.21.1-bin-win-x64.zip',
      filetype: '.zip',
      filesize: '14mb',
    }],
  }],
}, {
  platform: 'downloads.wallet.linux',
  icon: 'linux',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '64bit',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.21.1-gui-linux-x64.AppImage',
      filetype: '.AppImage',
      filesize: '56mb',
    }],
  }, {
    name: 'downloads.wallet.withoutElectron',
    architectures: [{
      name: 'arm',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.21.1-bin-linux-arm.tar.gz',
      filetype: '.tar.gz',
      filesize: '14mb',
    }, {
      name: '64bit',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.21.1-bin-linux-x64.tar.gz',
      filetype: '.tar.gz',
      filesize: '14mb',
    }],
  }],
}];
