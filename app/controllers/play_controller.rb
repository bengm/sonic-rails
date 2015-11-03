class PlayController < ApplicationController
  
  require 'sonic_pi'
  
  def sonic_run(command) 
  	sonic = SonicPi.new
  	sonic.run command
  end

  def note
  	synth = params[:synth] || ':blade' 
  	synth = ":" + synth if synth[0] != ":"
    sonic_run "use_synth #{synth}; play #{params[:note]}, attack: #{params[:attack]}, sustain: #{params[:sustain]}, release: #{params[:release]}"
    render json:{note: params[:note]}
  end

  def sample
    samp = params[:sample] || ':ambi_drone' 
    samp = ":" + samp if samp[0] != ":"
    command = "sample #{samp}, attack: #{params[:attack]}, sustain: #{params[:sustain]}, release: #{params[:release]}, rate: #{params[:rate]}"
    sonic_run command
    render json:{sample: samp, command: command}
  end

end
