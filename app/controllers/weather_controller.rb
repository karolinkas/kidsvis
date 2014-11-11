class WeatherController < ApplicationController


	def index
		@timenow = Time.now

	end

	def about

	end

	def complete
		
		complete = []

		city = params[:city] || "Barcelona"
		Weather.by_city(city).each do |it|
			complete << {complete: it }
		end

		# ["dt_text"]

		respond_to do |format|
			format.json do
				render json: complete
			end
		end

	end




	def wind
		
		wind = []

		city = params[:city] || "Barcelona"
		Weather.by_city(city).each do |it|
			wind << {speed: it["wind"]["speed"]}
		end

		respond_to do |format|
			format.json do
				render json: wind
			end
		end
	end


	def temperature

		temperature = []

		
		city = params[:city] || "Barcelona"
		Weather.by_city(city).each do |it|
				temperature << {temperature: it["main"]["temp"]}
		end

		respond_to do |format|
			format.json do
				render json: temperature
				end
			end
	end

	def humidity

		humidity = []

		city = params[:city] || "Barcelona"
		Weather.by_city(city).each do |it|
				humidity << {hum: it["clouds"]["all"]}
		end

	respond_to do |format|
		format.json do
			render json: humidity
			end
		end
	
	end

	


end
