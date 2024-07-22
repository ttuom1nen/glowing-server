import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('users', (tbl) => {
        tbl.renameColumn('value', 'username')
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('users', (tbl) => {
        tbl.renameColumn('username', 'value')
    })
}

