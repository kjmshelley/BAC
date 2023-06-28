module.exports = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
    //connectionString?: string, // e.g. postgres://user:password@host:5432/database
    //ssl: any, // passed directly to node.TLSSocket, supports all tls.connect options
    statement_timeout: 15000, // number of milliseconds before a statement in query will time out, default is no timeout
    query_timeout: 15000, // number of milliseconds before a query call will timeout, default is no timeout
    application_name: "BAC_newsletter", // The name of the application that created this Client instance
    connectionTimeoutMillis: 10000, // number of milliseconds to wait for connection, default is no timeout
    idle_in_transaction_session_timeout: 15000 // number of milliseconds before terminating any session with an open idle transaction, default is no timeout
};