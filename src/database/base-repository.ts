import { EntityRepository } from "@mikro-orm/postgresql";

export class BaseRepository<
	Entity extends object
> extends EntityRepository<Entity> {
	public noTrash() {
		return this.createQueryBuilder().where({ deleted_at: null });
	}
}
