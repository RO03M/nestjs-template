import { randomUUID } from "node:crypto";
import {
	Entity,
	EntityRepositoryType,
	PrimaryKey,
	Property
} from "@mikro-orm/core";
import { BaseRepository } from "../../database/base-repository";
import { Hash } from "../../utils/hash";

@Entity({ tableName: "users", repository: () => BaseRepository<User> })
export class User {
	[EntityRepositoryType]?: BaseRepository<User>;

	@PrimaryKey()
	public id: string;

	@Property()
	public name: string;

	@Property()
	public email: string;

	@Property()
	public username: string;

	@Property({ hidden: true })
	public password: string;

	@Property({ type: "timestamp" })
	public created_at?: Date = new Date();

	@Property({ type: "timestamp" })
	public updated_at?: Date = new Date();

	@Property({ type: "timestamp" })
	public deleted_at: Date | null = null;

	constructor(name: string, email: string, username: string, password: string) {
		this.id = randomUUID();
		this.name = name;
		this.email = email;
		this.username = username;
		this.password = Hash.make(password);
	}
}
