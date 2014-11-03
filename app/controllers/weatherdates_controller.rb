class WeatherdatesController < ApplicationController


	def retrieve_data_fromAPI
		url = HTTParty.get("http://api.openweathermap.org/data/2.5/forecast/city?id=3128760&APPID=da6db9aad545136ce8708eb2d76c2559")      	 	
		@data = Weatherdata.new(blob: url.body)
		@data.save 
		
		respond_to do |format|
			format.html do
				render :retrieve_data_fromAPI
			end
			format.json do
				render json: @data
			end
		end
  end


	# def weather_params

	# end

end
