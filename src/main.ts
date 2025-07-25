import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
	const port = process.env.PORT ?? 3000;
	const app = await NestFactory.create(AppModule, {
		logger: ["error", "debug", "fatal"]
	});
	await app.listen(port);

	console.log("Ready");
	console.log(`Listening on :${port}`);
}

bootstrap();
