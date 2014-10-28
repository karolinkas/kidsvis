class CreateWeatherdata < ActiveRecord::Migration
  def change
    create_table :weatherdata do |t|

      t.timestamps
    end
  end
end
