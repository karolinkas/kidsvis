class TopicsController < ApplicationController
	
	def wind
		wind = lambda {
			{
			  speed: rand(10),
			}
		}

		respond_to do |format|
			format.json do
				render json: [wind.call, wind.call, wind.call, wind.call]
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
			render json: [temperature.call, temperature.call, temperature.call, temperature.call]
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
			render json: [rain.call, rain.call, rain.call, rain.call]
			end
		end
	end

end