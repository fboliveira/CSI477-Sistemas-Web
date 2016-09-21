# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  create_table "alunos", force: :cascade do |t|
    t.string  "nome",      limit: 80, null: false
    t.string  "rua",       limit: 80, null: false
    t.string  "numero",    limit: 10, null: false
    t.string  "bairro",    limit: 80, null: false
    t.integer "cidade_id", limit: 4,  null: false
    t.string  "cep",       limit: 8,  null: false
    t.string  "mail",      limit: 50, null: false
  end

  add_index "alunos", ["cidade_id"], name: "cidade_id", using: :btree

  create_table "cidades", force: :cascade do |t|
    t.string  "nome",      limit: 80, null: false
    t.integer "estado_id", limit: 2,  null: false
  end

  add_index "cidades", ["estado_id"], name: "estado_id", using: :btree

  create_table "estados", force: :cascade do |t|
    t.string "nome",  limit: 30, null: false
    t.string "sigla", limit: 2,  null: false
  end

  create_table "notas", id: false, force: :cascade do |t|
    t.integer "ano",      limit: 2,                         null: false
    t.integer "semestre", limit: 2,                         null: false
    t.integer "aluno_id", limit: 4,                         null: false
    t.decimal "nota1",              precision: 5, scale: 2
    t.decimal "nota2",              precision: 5, scale: 2
    t.decimal "nota3",              precision: 5, scale: 2
    t.boolean "aprovado"
  end

  add_index "notas", ["aluno_id"], name: "aluno_id", using: :btree

  create_table "usuarios", force: :cascade do |t|
    t.string "nome",  limit: 80
    t.string "login", limit: 20
    t.string "senha", limit: 32
  end

  add_foreign_key "alunos", "cidades", name: "alunos_ibfk_1"
  add_foreign_key "cidades", "estados", name: "cidades_estado"
  add_foreign_key "notas", "alunos", name: "aluno_id"
end
