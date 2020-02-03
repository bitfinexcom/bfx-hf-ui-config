
# bfx-hf-ui-config

* This library gives a set of configs, which can be used in all `bfx-hf-*` services
* Any config in `bfx-hf-ui-config` contain predefined default values
  

## Installation

```bash

npm i --save bfx-hf-ui-config

```

## Docs
UserSettings (see `docs/user_settings.md`)  

## Quickstart & Example

  

To get started, import an `bfx-hf-ui-config` to your project, then get any config  you need, for istance it will be UserSettings:

  

```js

const  { _default }  =  require('bfx-hf-ui-config').UserSettings // get UserSettings default values

const send = require('../../util/ws/send')
const sendError = require('../../util/ws/send_error')
const isAuthorized = require('../../util/ws/is_authorized')

module.exports =  async (server, ws, msg) => {
    
	const { db } = server

	const { UserSettings } = db

	const [, authToken] = msg

	if (!isAuthorized(ws,  authToken)) {
		return  sendError(ws, 'Unauthorized')
	} 

	const { userSettings } = await UserSettings.getAll()

	send(ws, ['data.settings.updated', userSettings || _default]) // in case if userSettings in db are empty, then we should send _default object from the UserSettings

} 

```

## Contributing


1. Fork it (https://github.com/bitfinexcom/bfx-hf-ui-config)

2. Create your feature branch (`git checkout -b my-new-feature)

3. Commit your changes (`git commit -am 'Add some feature'`)

4. Push to the branch (`git push origin my-new-feature`)

5. Create a new Pull Request