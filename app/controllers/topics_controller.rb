class TopicsController < ApplicationController
	
	# attr_reader :wind, :temperature, :rain

 #  def initialize(wind, temperature, rain)
 #    @wind = wind
 #    @temperature = temperature
 #  end

 #  def from_json 
 #    {:wind => @wind, :temperature => @temperature, :rain => @rain }.from_json
 #  end

	def index

		@data = Weatherdata.all
		@date = Weatherdata.find(1).blob
	end

	def show
		@date = JSON.parse(Weatherdata.find(params[:id]))
	end



	def wind

		
		wind = lambda {
			{
			  speed: rand(10),
			}
		}

		respond_to do |format|
			format.json do
				render json: [wind.call, wind.call, wind.call, wind.call,wind.call, wind.call, wind.call, wind.call]
			end
		end
	end


	def temperature
	temperature = lambda {
		{
		  degrees: rand(20),
		}
	}

	respond_to do |format|
		format.json do
			render json: [temperature.call, temperature.call, temperature.call, temperature.call,temperature.call, temperature.call, temperature.call, temperature.call]
			end
		end
	end

	def rain
	rain = lambda {
		{
		  prec: rand(20),
		}
	}

	respond_to do |format|
		format.json do
			render json: [rain.call, rain.call, rain.call, rain.call,rain.call, rain.call, rain.call, rain.call]
			end
		end
	end

	 private
   def pet_params
    params.require(:data).permit(:id)
  end

end