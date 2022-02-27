class AddContentToPostLike < ActiveRecord::Migration[7.0]
  def change
    add_column :post_likes, :content, :string
  end
end
