class CreateWeatherdata < ActiveRecord::Migration
  def change
    create_table :weatherdata do |t|
    	t.text :blob
      t.timestamps
    end
  end
end
