module.exports = {
  header: {
    home: 'home',
    instances: 'instances',
    about: 'about',
    accounts: {
      addAcc: 'Add account',
      subtitle: 'Go ahead, add another account or your first one!',
      placeholder: 'Accounts'
    }
  },
  authModal: {
    title: 'Add user',
    email: 'email',
    password: 'password',
    submit: 'submit',
    close: 'close'
  },
  settings: {
    title: 'Settings',
    sections: {
      general: {
        title: 'General',
        listView: {
          name: 'List view',
          subtitle: 'Shows mod instances as a List instead of a Grid.'
        }
      }
    }
  },
  pages: {
    home: {
      text: 'Welcome to Glowsquid, the fabric-first modrinth-powered Minecraft launcher'
    },
    about: {
      title: 'This is mostly a test page, nothing to see here.',
      toast: 'toast'
    },
    instances: {
      search: 'Search',
      status: 'Current Status: Downloading {download} | Type: {type} | {percent}% Downloaded',
      launch: 'launch',
      moreInfo: 'More info',
      settings: 'Settings(Deletes instances rn)',
      mcVersion: 'Minecraft version: <span class="font-bold">{version}</span>',
      fabricVersion: 'Fabric loader version: <span class="font-bold">{version}</span>'
    },
    instance: {
      status: 'Current Status: Downloading {download} | Type: {type} | {percent}% Downloaded',
      addMods: 'Add mods',
      settings: 'Settings',
      tabs: {
        description: 'Description',
        mods: 'Mods'
      }
    },
    mods: {
      search: 'Search mods',
      about: 'About',
      install: 'Install',
      hint: 'You can type the mod name, author and category here'
    },
    mod: {
      install: 'Install'
    }
  }
}
