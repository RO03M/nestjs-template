import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { config } from "dotenv";
import { AuthController } from "./auth.controller";

config();

@Module({
	imports: [
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: {
				expiresIn: "1d"
			}
		})
	],
	controllers: [AuthController]
})
export class AuthModule {}
