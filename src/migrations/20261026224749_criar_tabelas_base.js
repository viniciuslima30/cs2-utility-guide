export async function up(knex) {
  await knex.schema.createTable('mapas', (table) => {
    table.increments('id');
    table.string('nome', 60).notNullable().unique();
  });

  await knex.schema.createTable('regioes', (table) => {
    table.increments('id');
    table.string('nome', 60).notNullable();
    table
      .integer('mapa_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('mapas')
      .onDelete('CASCADE');
    table.unique(['mapa_id', 'nome']);
  });

  await knex.schema.createTable('tipos_utilitario', (table) => {
    table.increments('id');
    table.string('nome', 40).notNullable().unique();
  });

  await knex('tipos_utilitario').insert([
    { nome: 'smoke' },
    { nome: 'flash' },
    { nome: 'molotov' },
    { nome: 'HE' },
  ]);

  await knex.schema.createTable('lineups', (table) => {
    table.increments('id');
    table.string('titulo', 120).notNullable();
    table.text('objetivo').notNullable();
    table.enu('lado', ['T', 'CT']).notNullable();
    table.string('posicao_lancamento', 200).notNullable();
    table.string('ponto_mira', 200).notNullable();
    table.string('tipo_arremesso', 40).notNullable();
    table.text('passo_a_passo').notNullable();
    table.boolean('ativa').notNullable().defaultTo(true);
    table.timestamp('criada_em').notNullable().defaultTo(knex.fn.now());

    table
      .integer('mapa_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('mapas')
      .onDelete('RESTRICT');
    table
      .integer('regiao_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('regioes')
      .onDelete('RESTRICT');
    table
      .integer('tipo_utilitario_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('tipos_utilitario')
      .onDelete('RESTRICT');

    // RN05: não pode haver lineups idênticas
    table.unique(
      ['mapa_id', 'tipo_utilitario_id', 'lado', 'posicao_lancamento', 'ponto_mira'],
      { indexName: 'lineups_unica_rn05' }
    );
    // acelera os filtros da listagem
    table.index(['mapa_id', 'regiao_id', 'tipo_utilitario_id', 'lado']);
  });

  await knex.schema.createTable('midias', (table) => {
    table.increments('id');
    table.enu('tipo', ['imagem', 'video']).notNullable();
    table.string('caminho_arquivo', 255).notNullable();
    table.integer('ordem').notNullable().defaultTo(0);
    table
      .integer('lineup_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('lineups')
      .onDelete('CASCADE');
  });

  await knex.schema.createTable('administradores', (table) => {
    table.increments('id');
    table.string('email', 255).notNullable().unique();
    table.string('senha_hash', 255).notNullable();
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists('midias');
  await knex.schema.dropTableIfExists('lineups');
  await knex.schema.dropTableIfExists('tipos_utilitario');
  await knex.schema.dropTableIfExists('regioes');
  await knex.schema.dropTableIfExists('mapas');
  await knex.schema.dropTableIfExists('administradores');
}