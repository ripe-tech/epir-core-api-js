const epirCore = require("..");

async function run() {
    await epirCore.API.load();
    const api = new epirCore.API();
    try {
        console.info(await api.info());
    } catch (err) {
        console.error(`[ERROR] ${err.code || ""} ${err.message}`)
    }
}

run();
