class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_many :drafts, dependent: :destroys
  has_secure_password
end
