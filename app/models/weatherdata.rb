class Weatherdata < ActiveRecord::Base

	def as_json(*)
		JSON.parse(self.blob)
	end	
	
	
end
