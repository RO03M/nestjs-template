import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		logger: ["error", "debug", "fatal"]
	});

	app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

	const port = process.env.PORT ?? 3000;
	await app.listen(port);

	console.log("Ready");
	console.log(`Listening on :${port}`);
}

bootstrap();
