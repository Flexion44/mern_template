

export default {
    port : process.env.PORT || 5050,
    mongo : {
        fullPath : process.env.MONGO_FULL_PATH || undefined,
        host : process.env.MONGO_HOST || 'mongo-db',
        port : process.env.MONGO_PORT || 27017,
        db : process.env.MONGO_DB || 'database_name',
        user : process.env.MONGO_USER || '',
        password : process.env.MONGO_PASSWORD || ''
    }
}