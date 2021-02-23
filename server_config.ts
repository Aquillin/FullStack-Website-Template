import config = require('./config.json');

const { development_port, production_port } = config.server;
const { development_host, production_host } = config.client;

function convertToUrl(url: string, port: number) {
    if (url.trim() === '/') {
        return '/'
    } else if (port === 80) {
        return url;
    } else {
        return `${url}:${port}`;
    }
}

console.log(config)

const export_object: typeof config = { ...config };
export_object.client.development_host = convertToUrl(
    development_host,
    development_port
);
export_object.client.production_host = convertToUrl(
    production_host,
    production_port
);

export default export_object;