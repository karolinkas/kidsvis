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
end