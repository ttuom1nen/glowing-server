import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("users", (tbl) => {
        tbl.uuid("id").primary();
        tbl.string("value", 100).notNullable().unique();
        tbl.string("email", 100).notNullable().unique();
        tbl.string("password_hash", 255).notNullable();
        tbl.timestamp("created_at").defaultTo(knex.fn.now());
        tbl.timestamp("modified_at");
        tbl.string("modified_by", 100);
        tbl.string("first_name", 100);
        tbl.string("last_name", 100);
        tbl.string("profile_picture", 255);
        tbl.string("status", 20).defaultTo("active");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("users");
}

