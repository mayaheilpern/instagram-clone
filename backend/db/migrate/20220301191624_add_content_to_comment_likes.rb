class AddContentToCommentLikes < ActiveRecord::Migration[7.0]
  def change
    add_column :comment_likes, :content, :string
  end
end
