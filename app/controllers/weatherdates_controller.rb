class WeatherdatesController < ApplicationController

# before_filter :create 

	def index
		get_data
		@data
		
	end

	def get_data
		url = HTTParty.get("http://api.openweathermap.org/data/2.5/forecast/city?id=3128760&APPID=da6db9aad545136ce8708eb2d76c2559")      
		render json: JSON.parse(url.body)
		
  end




	def new
		@data = Weatherdata.new
	end

	def create

		@data = Weatherdata.new
		if @data.save 
			redirect root_path
		else
			render :new
		end

	end

	def update
	
	end

	# def weather_params

	# end

end
