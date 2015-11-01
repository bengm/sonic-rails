class PlayController < ApplicationController
  
  require 'sonic_pi'
  
  def sonic_run(command) 
  	sonic = SonicPi.new
  	sonic.run command
  end

  def note
  	# expect a single note or multiple notes (chord)
  	synth = params[:synth] || ':blade' 
  	synth = ":" + synth if synth[0] != ":"
	sonic_run "use_synth #{synth}; play #{params[:note]}"
	render json:{note: params[:note]}
  end

end
