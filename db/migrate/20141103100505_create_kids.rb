class CreateKids < ActiveRecord::Migration
  def change
    create_table :kids do |t|
      t.integer :hours
      t.integer :diameter
      t.integer :pieces

      t.timestamps
    end
  end
end
