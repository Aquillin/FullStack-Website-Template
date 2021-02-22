import config from './config.json';

const export_object: typeof config = {...config};
export_object.client.development_host

export default export_object;
