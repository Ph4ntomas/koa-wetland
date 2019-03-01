let _wetland;

async function _koaWetland(ctx, next) {
    //manager memoization
    let manager;
    let getManager = () => {
        if (!manager)
            manager = _wetland.getManager();
        return manager;
    };

    /*
    ** Add convenience function to retrieve the manager or a repository
    */
    ctx.getManager = getManager;

    ctx.getRepository = (Entity) => {
        return getManager().getRepository(Entity);
    };

    /*
    ** Add wetland to koa's context,
    ** so it can be used in subsequent middlewares.
    */
    ctx.wetland = _wetland;

    //Proceed to next middleware
    await next();
}

module.exports = (wetland) => {
    _wetland = wetland;
    return _koaWetland;
};
