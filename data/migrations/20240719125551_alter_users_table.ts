import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('users', (tbl) => {
        tbl.dropPrimary()
    })

    return knex.schema.alterTable('users', (tbl) => {
        tbl.uuid("id").primary().notNullable().defaultTo(knex.raw('gen_random_uuid()')).unique().alter()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('users', (tbl) => {
        tbl.dropPrimary()
    })

    return knex.schema.alterTable('users', (tbl) => {
        tbl.uuid("id").primary().alter()
    })
}

