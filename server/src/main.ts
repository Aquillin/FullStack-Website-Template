import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from '../../server_config';
console.log({ config });
const { development_port, production_port } = config.server;
console.log("Hey")
async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: true,
    });
    switch (process.env.NODE_ENV) {
        case 'production':
            await app.listen(production_port);
            break;
        default:
            await app.listen(development_port);
            break;
    }
}
bootstrap();
