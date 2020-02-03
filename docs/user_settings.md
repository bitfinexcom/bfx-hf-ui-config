
<a name="UserSettings"></a>

## UserSettings
The UserSettings config provides a set of charts, themes and default values
manages lifetime events/order execution. Internally it hosts a Manager
instance from bfx-api-node-core for communication with the Bitfinex API, and
listens for websocket stream events in order to update order state/trigger
algo order events.

Execution is handled by an event system, with events being triggered by
Bitfinex API websocket stream payloads, and the algo orders themselves.

**Kind**: Object

* [UserSettings](#AOHost)
    * [CHARTS](#CHARTS) ⇒ <code>Array</code>
    * [.THEMES](#THEMES) ⇒ <code>Array</code>
    * [._default](#_default) ⇒ <code>Object</code>

### _default
It's object which contains default values for a specific config
in UserSettings case structure of `_default` looks like this: 
```
{
	CHART ⇒ string
	THEME ⇒ string
	DMS ⇒ bool
	AFFILIATE_CODE ⇒ string
}
```