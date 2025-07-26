import { EntityManager } from "@mikro-orm/postgresql";
import { Controller, Get } from "@nestjs/common";
import { User } from "./user.entity";

@Controller("auth")
export class AuthController {
	constructor(private readonly em: EntityManager) {}

	@Get()
	public async foo() {
		const user = new User("teste", "teste@teste.com", "username", "password");
		await this.em.createQueryBuilder(User).insert(user);

		const res = await this.em
			.createQueryBuilder(User)
			.select("*")
			.execute("all");

		return res;
	}

	@Get("no-trash")
	public async notrash() {
		const res = await this.em.getRepository(User).noTrash().execute();

		return res;
	}
}
