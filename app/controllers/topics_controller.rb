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

		Weatherdata.all.each do |object|

			JSON.parse(object.blob)["list"].each do |it|
				wind << {speed: it["wind"]["speed"]}
			end

		end


		respond_to do |format|
			format.json do
				render json: wind
			end
		end
	end


	def temperature

		temperature = []

		Weatherdata.all.each do |object|

			JSON.parse(object.blob)["list"].each do |it|
				temperature << {temperature: it["main"]["temp"]}
		end

	end

		respond_to do |format|
			format.json do
				render json: temperature
				end
			end
	end

	def humidity

		humidity = []

		Weatherdata.all.each do |object|

				JSON.parse(Weatherdata.find(1).blob)["list"].each do |it|
					humidity << {hum: it["clouds"]["all"]}
			end

		end

	respond_to do |format|
		format.json do
			render json: humidity
			end
		end
	
	end



end