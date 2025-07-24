import { defineConfig, PostgreSqlDriver } from "@mikro-orm/postgresql";
import type { PostgreSqlOptions } from "@mikro-orm/postgresql/PostgreSqlMikroORM";
import { config } from "dotenv";

config();

export const mikroormConfig: PostgreSqlOptions = {
	entities: [],
	discovery: {
		warnWhenNoEntities: false
	},
	seeder: {
		path: "dist/seeders",
		pathTs: "src/seeders"
	},
	driver: PostgreSqlDriver,
	dbName: process.env.DB_NAME,
	host: process.env.DB_HOST,
	port: +process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	debug: true,
	migrations: {
		transactional: false
	}
};

export default defineConfig(mikroormConfig);
