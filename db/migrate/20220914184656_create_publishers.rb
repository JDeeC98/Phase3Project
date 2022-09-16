class CreatePublishers < ActiveRecord::Migration[6.1]
  def change
    create_table :publishers do |t|
      t.string :name
      t.string :hq
      t.string :publisher_image_url
    end
  end
end
