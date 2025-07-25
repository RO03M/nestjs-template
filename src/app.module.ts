import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { LoaderModule } from "./modules/loader.module";
import { RedisModule } from "./providers/redis/redis.module";

@Module({
	imports: [DatabaseModule, RedisModule, LoaderModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
