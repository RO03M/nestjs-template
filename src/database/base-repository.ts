import { EntityRepository } from "@mikro-orm/postgresql";

export class BaseRepository<
	Entity extends object
> extends EntityRepository<Entity> {
	// soft delete
	// find excluding deleted_at
}
