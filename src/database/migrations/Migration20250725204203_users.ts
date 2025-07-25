import { Migration } from "@mikro-orm/migrations";

export class Migration20250725204203_users extends Migration {
	override async up(): Promise<void> {
		await this.getKnex().schema.createTable("users", (table) => {
			table.uuid("id").primary();
			table.string("name").notNullable();
			table.string("email").notNullable();
			table.string("username").notNullable();
			table.string("password").notNullable();
			table.timestamps();
		});
	}

	override async down(): Promise<void> {
		this.getKnex().schema.dropTableIfExists("users");
	}
}
