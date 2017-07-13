class Utils{
    constructor(server){
        this.server = server;
    }
    getLogger(name){
        let _logplugin = this.server.plugins['light-api-log'];
        if(_logplugin && _logplugin.service &&  _logplugin.service.logger(name)){
            return _logplugin.service.logger(name);
        }else{
            return _logger(name);
        }
    }
    getPlugin(plugsName){
        return this.server.plugins[plugsName].service;
    }

    getConfig(key){
       return this.server.settings.app[key];
     }
    getMime(filename){
        return this.server.mime.path(filename).type;
    }
}


module.exports = Utils;



