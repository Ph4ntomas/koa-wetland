# koa-wetland
A really small middleware for [koa](https://koajs.com) that expose wetland in the context, for subsequent middleware to use easily.

## Installation
### With npm
`npm i koa-wetland --save`

## Usage
### Plain [koa](https://koajs.com) :
```js
const koaWetland    = require('koa-wetland');
const wetland       = new Wetland(config);

// [...] any middleware added here will only have wetland exposed after awaiting next
app.use(koaWetland(wetland));
// [...] (any middleware that added here will have wetland exposed.
```

### With [koa-smart](https://github.com/ysocorp/koa-smart)
```js
const koaWetland    = require('koa-wetland');
const wetland       = new Wetland(config);
const KoaSmart      = require('koa-smart');
const app           = new KoaSmart({ /* [...] */ });

// [...]

app.addMiddlewares([
// [...] any middleware here will only have wetland exposed after awaiting next
    koaWetland(wetland),
// [...] (any middleware that goes here will have wetland exposed.
]);
```

### Methods
#### ctx.wetland
This is the wetland instance passed in to the middleware (the one you will have to configure).

#### ctx.getManager()
Returns an entity manager scope that only apply on the current context, 
and will only live as long as the current context does.
This function memoize the manager.

#### ctx.getRepository(Entity)
Returns the repository for given `Entity` reference, or identity string.

## License
MIT 