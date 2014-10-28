class WeatherdatesController < ApplicationController

# before_filter :create 

	def get_data
		url = HTTParty.get("http://api.openweathermap.org/data/2.5/forecast/city?id=3128760&APPID=da6db9aad545136ce8708eb2d76c2559")      
		@response1 = JSON.parse(url.body)
		render 'get_data'
  end

  


	# def new
	# 	@weatherdates = Weatherdates.new
	# end

	# def create

	# 	@weatherdates = Weatherdates.new(weather_params)
	# 	if @weatherdates.save 
	# 		redirect root_path
	# 	else
	# 		render :new
	# 	end

	# end

	# def update
	
	# end

	# def weather_params

	# end

end
