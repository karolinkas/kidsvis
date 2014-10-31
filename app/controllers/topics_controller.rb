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



	def wind
		wind = []
			JSON.parse(Weatherdata.find(1).blob)["list"].each do |it|
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
			JSON.parse(Weatherdata.find(1).blob)["list"].each do |it|
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
				JSON.parse(Weatherdata.find(1).blob)["list"].each do |it|
					humidity << {hum: it["main"]["humidity"]}
			end

	respond_to do |format|
		format.json do
			render json: humidity
			end
		end
	
	end



end