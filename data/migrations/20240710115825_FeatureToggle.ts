import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("FeatureToggle", (tbl) => {
        tbl.increments("id").primary();
        tbl.boolean("is_on").notNullable();
        tbl.string("value", 100).notNullable();
        tbl.string("description", 400);
        tbl.dateTime("created_at");
        tbl.dateTime("modified_at");
        tbl.string("toggled_by", 200);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("FeatureToggle");
}