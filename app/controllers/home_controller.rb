class HomeController < ApplicationController
  def index
  	# stop the player on page (re)load
  	require 'sonic_pi'
  	sonic = SonicPi.new
  	sonic.stop
  end
end
