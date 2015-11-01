class PlayController < ApplicationController
  
  require 'sonic_pi'
  
  def sonic_run(command) 
  	sonic = SonicPi.new
  	sonic.run command
  end

  def note
  	# expect a single note or multiple notes (chord)
	sonic_run "play #{params[:note]}"
	render json:{note: params[:note]}
  end

end
