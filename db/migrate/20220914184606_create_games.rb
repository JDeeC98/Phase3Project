class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.string :release_date
      t.integer :publisher_id
      t.integer :genre_id
      t.string :game_image_url
    end
  end
end
