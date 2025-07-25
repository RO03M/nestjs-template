import { randomUUID } from "node:crypto";
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { BaseEntity } from "src/database/base-entity";

@Entity({ tableName: "users" })
export class User extends BaseEntity {
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

	constructor(name: string, email: string, username: string, password: string) {
		super();
		this.id = randomUUID();
		this.name = name;
		this.email = email;
		this.username = username;
		this.password = password;
	}
}
