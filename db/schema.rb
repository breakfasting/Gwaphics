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

ActiveRecord::Schema.define(version: 2020_06_30_064824) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "designs", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "creator_id", null: false
    t.string "title", null: false
    t.string "description"
    t.boolean "public", null: false
    t.float "width", null: false
    t.float "height", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "folder_id"
    t.boolean "trash", default: false
    t.index ["creator_id"], name: "index_designs_on_creator_id"
    t.index ["folder_id"], name: "index_designs_on_folder_id"
    t.index ["user_id"], name: "index_designs_on_user_id"
  end

  create_table "elements", force: :cascade do |t|
    t.integer "design_id", null: false
    t.integer "elementable_id", null: false
    t.string "elementable_type", null: false
    t.float "pos_x", default: 0.0, null: false
    t.float "pos_y", default: 0.0, null: false
    t.integer "z_index", default: 0, null: false
    t.float "transparency", default: 1.0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "rotate", default: 0.0
    t.index ["design_id"], name: "index_elements_on_design_id"
    t.index ["elementable_id"], name: "index_elements_on_elementable_id"
    t.index ["elementable_type"], name: "index_elements_on_elementable_type"
  end

  create_table "folders", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_folders_on_owner_id"
  end

  create_table "images", force: :cascade do |t|
    t.float "width", null: false
    t.float "height", null: false
    t.string "url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shape_templates", force: :cascade do |t|
    t.string "type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shapes", force: :cascade do |t|
    t.float "width", null: false
    t.float "height", null: false
    t.string "color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "shape", null: false
  end

  create_table "texts", force: :cascade do |t|
    t.string "font_family"
    t.integer "font_size", null: false
    t.integer "font_weight", null: false
    t.text "text", null: false
    t.string "color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "width"
    t.float "height"
  end

  create_table "uploaded_images", force: :cascade do |t|
    t.string "title", null: false
    t.integer "uploader_id", null: false
    t.float "width", null: false
    t.float "height", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["uploader_id"], name: "index_uploaded_images_on_uploader_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
