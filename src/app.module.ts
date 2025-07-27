import { BullModule } from "@nestjs/bullmq";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { LoaderModule } from "./modules/loader.module";
import { buildRedisUri, RedisModule } from "./providers/redis/redis.module";

@Module({
	imports: [
		DatabaseModule,
		RedisModule,
		LoaderModule,
		BullModule.forRoot({
			connection: {
				url: buildRedisUri()
			},
			defaultJobOptions: {
				removeOnComplete: 100,
				removeOnFail: 1000,
				attempts: 3,
				backoff: {
					type: "exponential",
					delay: 1000
				}
			}
		})
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
