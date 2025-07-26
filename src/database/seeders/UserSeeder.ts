import { EntityManager } from "@mikro-orm/postgresql";
import { Seeder } from "@mikro-orm/seeder";
import { User } from "../../modules/auth/user.entity";

export class UserSeeder extends Seeder {
	async run(em: EntityManager): Promise<void> {
		await em
			.createQueryBuilder(User)
			.insert(new User("name", "email", "username", "password"));
	}
}
