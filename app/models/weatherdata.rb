class Weatherdata

	def self.by_city(city)
		url = "http://api.openweathermap.org/data/2.5/forecast?q=#{city}"
		response = HTTParty.get(url)
		JSON.parse(response.body)["list"] || []
	end


	def as_json(*)
		JSON.parse(self.blob)
	end	
	
	
end
