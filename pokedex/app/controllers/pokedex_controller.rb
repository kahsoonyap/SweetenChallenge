require 'json'

class PokedexController < ApplicationController

  def show
    @pokedex = JSON.parse(File.read("#{Rails.public_path}/pokedex.json"))
    render pokedex_path
  end

end
