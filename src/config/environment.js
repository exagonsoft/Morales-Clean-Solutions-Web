const MONGODB_INSTANCE = process.env.MONGODB_INSTANCE;
const MONGODB_URI = process.env.MONGODB_URI;

export const dbConnectionData = {
    user: "exagonsoft",
    password: "XH6Nuf08qF57Pg7H",
    dbName: MONGODB_INSTANCE ? MONGODB_INSTANCE : 'msccluster',
    dbUri: MONGODB_URI ? MONGODB_URI : 'mongodb+srv://exagonsoft:XH6Nuf08qF57Pg7H@msccluster.adammha.mongodb.net/?retryWrites=true&w=majority'
}