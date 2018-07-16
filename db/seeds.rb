# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Project.destroy_all

defaultProfilePicture = File.open('app/assets/images/user_profile_pic.png')
demo = User.create!(username: 'Demo-Man', email: 'Demo@demo.com', age: DateTime.strptime('09/15/1991 0:00', "%m/%d/%Y %H:%M"), password: 123456, about: 'Demo' )
demo.picture.attach(io: defaultProfilePicture, filename: 'user_profile_pic.png')
demo.save!

cooking1 = File.open("app/assets/images/cooking_images/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg")
cooking2 = File.open("app/assets/images/cooking_images/pexels-photo-76093.jpeg")
cooking3 = File.open("app/assets/images/cooking_images/pexels-photo-271458.jpeg")
cooking4 = File.open("app/assets/images/cooking_images/pexels-photo-691114.jpeg")
cooking5 = File.open("app/assets/images/cooking_images/pexels-photo-958545.jpeg")
cooking6 = File.open("app/assets/images/cooking_images/pexels-photo-1040685.jpeg")
cooking7 = File.open("app/assets/images/cooking_images/salmon-dish-food-meal-46239.jpeg")

cooking_project1 = Project.create!({title: 'cooking_project1', author_id: demo.id, view_count: 0, featured: false})
cooking_project2 = Project.create!({title: 'cooking_project2', author_id: demo.id, view_count: 0, featured: false})
cooking_project3 = Project.create!({title: 'cooking_project3', author_id: demo.id, view_count: 0, featured: false})
cooking_project4 = Project.create!({title: 'cooking_project4', author_id: demo.id, view_count: 0, featured: false})
cooking_project5 = Project.create!({title: 'cooking_project5', author_id: demo.id, view_count: 0, featured: false})
cooking_project6 = Project.create!({title: 'cooking_project6', author_id: demo.id, view_count: 0, featured: false})
cooking_project7 = Project.create!({title: 'cooking_project7', author_id: demo.id, view_count: 0, featured: false})

cooking_project1.picture.attach(io: cooking1, filename: 'meat-vegetables-gemuesepiess-mushrooms-111131.jpeg')
cooking_project2.picture.attach(io: cooking2, filename: 'pexels-photo-76093.jpeg')
cooking_project3.picture.attach(io: cooking3, filename: 'pexels-photo-271458.jpeg')
cooking_project4.picture.attach(io: cooking4, filename: 'pexels-photo-691114.jpeg')
cooking_project5.picture.attach(io: cooking5, filename: 'pexels-photo-958545.jpeg')
cooking_project6.picture.attach(io: cooking6, filename: 'pexels-photo-1040685.jpeg')
cooking_project7.picture.attach(io: cooking7, filename: 'salmon-dish-food-meal-46239.jpeg')

cooking_project1.save!
cooking_project2.save!
cooking_project3.save!
cooking_project4.save!
cooking_project5.save!
cooking_project6.save!
cooking_project7.save!


costume1 = File.open("app/assets/images/costume_images/knight-armor-helmet-weapons-161936.jpeg")
costume2 = File.open("app/assets/images/costume_images/pexels-photo-65767.jpeg")
costume3 = File.open("/Users/danielmoisoff/Documents/coding/app_academy/bootcamp_course/full_stack_build/ShareYourBuild/app/assets/images/costume_images/pexels-photo-743917.jpeg")
costume4 = File.open("app/assets/images/costume_images/pexels-photo-922909.jpeg")
costume5 = File.open("app/assets/images/costume_images/pexels-photo-1097456.jpeg")

costume_project1 = Project.create!({title: 'costume_project1', author_id: demo.id, view_count: 0, featured: false})
costume_project2 = Project.create!({title: 'costume_project2', author_id: demo.id, view_count: 0, featured: false})
costume_project3 = Project.create!({title: 'costume_project3', author_id: demo.id, view_count: 0, featured: false})
costume_project4 = Project.create!({title: 'costume_project4', author_id: demo.id, view_count: 0, featured: false})
costume_project5 = Project.create!({title: 'costume_project5', author_id: demo.id, view_count: 0, featured: false})

costume_project1.picture.attach(io: costume1, filename: "knight-armor-helmet-weapons-161936.jpeg")
costume_project2.picture.attach(io: costume2, filename: "pexels-photo-65767.jpeg")
costume_project3.picture.attach(io: costume3, filename: "pexels-photo-743917.jpeg")
costume_project4.picture.attach(io: costume4, filename: "pexels-photo-922909.jpeg")
costume_project5.picture.attach(io: costume5, filename: "pexels-photo-1097456.jpeg")

costume_project1.save!
costume_project2.save!
costume_project3.save!
costume_project4.save!
costume_project5.save!


craft1 = File.open("app/assets/images/crafts_images/blue-decoration-folded-800199.jpg")
craft2 = File.open("app/assets/images/crafts_images/pexels-photo-194094.jpeg")
craft3 = File.open("app/assets/images/crafts_images/pexels-photo-194094.jpeg")
craft4 = File.open("app/assets/images/crafts_images/pexels-photo-342342.jpeg")
craft5 = File.open("app/assets/images/crafts_images/pexels-photo-582424.jpeg")
craft6 = File.open("app/assets/images/crafts_images/pexels-photo-753500.jpeg")
craft7 = File.open("app/assets/images/crafts_images/pexels-photo-1093910.jpeg")

craft_project1 = Project.create!({title: 'craft_project1', author_id: demo.id, view_count: 0, featured: false})
craft_project2 = Project.create!({title: 'craft_project2', author_id: demo.id, view_count: 0, featured: false})
craft_project3 = Project.create!({title: 'craft_project3', author_id: demo.id, view_count: 0, featured: false})
craft_project4 = Project.create!({title: 'craft_project4', author_id: demo.id, view_count: 0, featured: false})
craft_project5 = Project.create!({title: 'craft_project5', author_id: demo.id, view_count: 0, featured: false})
craft_project6 = Project.create!({title: 'craft_project5', author_id: demo.id, view_count: 0, featured: false})
craft_project7 = Project.create!({title: 'craft_project5', author_id: demo.id, view_count: 0, featured: false})

craft_project1.picture.attach(io: craft1, filename: "blue-decoration-folded-800199.jpg")
craft_project2.picture.attach(io: craft2, filename: "pexels-photo-194094.jpeg")
craft_project3.picture.attach(io: craft3, filename: "pexels-photo-194094.jpeg")
craft_project4.picture.attach(io: craft4, filename: "pexels-photo-342342.jpeg")
craft_project5.picture.attach(io: craft5, filename: "pexels-photo-582424.jpeg")
craft_project6.picture.attach(io: craft6, filename: "pexels-photo-753500.jpeg")
craft_project7.picture.attach(io: craft7, filename: "pexels-photo-1093910.jpeg")

craft_project1.save!
craft_project2.save!
craft_project3.save!
craft_project4.save!
craft_project5.save!
craft_project6.save!
craft_project7.save!


technology1 = File.open("app/assets/images/technology_images/Anybots_robot_monty.jpg")
technology2 = File.open("app/assets/images/technology_images/download.jpeg")
technology3 = File.open("app/assets/images/technology_images/pexels-photo-209255.jpeg")
technology4 = File.open("app/assets/images/technology_images/pexels-photo-595804.jpeg")

technology_project1 = Project.create!({title: 'technology_project1', author_id: demo.id, view_count: 0, featured: false})
technology_project2 = Project.create!({title: 'technology_project2', author_id: demo.id, view_count: 0, featured: false})
technology_project3 = Project.create!({title: 'technology_project3', author_id: demo.id, view_count: 0, featured: false})
technology_project4 = Project.create!({title: 'technology_project4', author_id: demo.id, view_count: 0, featured: false})

technology_project1.picture.attach(io: technology1, filename: "Anybots_robot_monty.jpg")
technology_project2.picture.attach(io: technology2, filename: "download.jpeg")
technology_project3.picture.attach(io: technology3, filename: "pexels-photo-209255.jpeg")
technology_project4.picture.attach(io: technology4, filename: "pexels-photo-595804.jpeg")

technology_project1.save!
technology_project2.save!
technology_project3.save!
technology_project4.save!

#
# project = {title: 'Seed Project', author_id: demo.id, view_count: 0, featured: false}
#
# Project.create!(title: 'Seed Project', author_id: demo.id, view_count: 0, featured: false)
# Project.create!(title: 'Seed2 Project', author_id: demo.id, view_count: 0, featured: false)
# Project.create!(title: 'Seed3 Project', author_id: demo.id, view_count: 0, featured: false)
