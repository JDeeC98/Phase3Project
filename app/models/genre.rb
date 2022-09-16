class Genre < ActiveRecord::Base
    has_many :games
    has_many :publishers, through: :games
end
