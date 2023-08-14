const cacheHandler = require('../redisConnection/redisCli');

const fetchLobbyPlayersData = function() {
    console.log("key:::", process.env.KEY);
    const redisCli = cacheHandler.getClient();
    new Promise(async (resolve, reject) => {
        await cacheHandler.getClient().hgetall(process.env.KEY, (err, reply) => {
            return resolve(reply)
        });
    }).then(
        (data) => {
            console.log("fetchLobbyPlayersData::::", JSON.parse(data));
        }
    ).catch(err=>{
        console.log("fetchLobbyPlayersData::::", err);
    });
}; 