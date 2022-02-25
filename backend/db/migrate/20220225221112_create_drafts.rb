class CreateDrafts < ActiveRecord::Migration[7.0]
  def change
    create_table :drafts do |t|
      t.text :image_url
      t.text :content
      t.references :user, null: false, foreign_key: true
      t.date :created

      t.timestamps
    end
  end
end
