import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'ep-silent-bush-a4q4nekc-pooler.us-east-1.aws.neon.tech',
    port: 3306,
    username: 'default',
    password: 'oPNcEkIW93yg',
    database: 'management_task',
    autoLoadEntities: true,
    synchronize: true,
    logging: true
}