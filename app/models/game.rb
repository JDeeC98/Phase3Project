class Game < ActiveRecord::Base
    belongs_to :genre
    belongs_to :publisher
end