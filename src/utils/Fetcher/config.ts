import dotenv from 'dotenv';
dotenv.config();

const config: {
    protocol: string,
    domain: string,
    key: string
} = {
    protocol: "https",
    domain: "ghblogs.herokuapp.com",
    // key: process.env.SERVER_KEY as string,
    key: "no-key",
}

export default config;