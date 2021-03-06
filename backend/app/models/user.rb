class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_many :drafts, dependent: :destroy
  has_many :post_likes, dependent: :destroy
  has_many :comment_likes, dependent: :destroy
  has_secure_password

  validates :email, uniqueness: true
  validates :username, uniqueness: true
end
