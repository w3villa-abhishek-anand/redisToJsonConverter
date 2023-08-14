// make redis connection 
const redis = require('redis');

const getClient = function() {
        const redisCli = redis.createClient();
        redisCli.on('connect', () => {
        console.log('Redis client connected');
     }
    );
    return redisCli;
}


module.exports = {getClient};

// cacheHandler.getGameClient = function() {
//     if (!gameClient) {
//         gameClient = redis.createClient(sails.config.custom.redisGameConfig);

//         gameClient.on('connect', () => {
//             sails.log.info('Game Redis server connected: ', sails.config.custom.redisGameConfig);
//         });
//     }
//     return gameClient;
// }