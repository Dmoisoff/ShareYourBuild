# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Project.destroy_all
Instruction.destroy_all

defaultProfilePicture = File.open('app/assets/images/user_profile_pic.png')
demo = User.new(username: 'Demo-Bot', email: 'Demo@demo.com', age: DateTime.strptime('09/15/1991 0:00', "%m/%d/%Y %H:%M"), password: 123456, about: 'Demo' )
demo.picture.attach(io: defaultProfilePicture, filename: 'user_profile_pic.png')
demo.save!

recipe1 = File.open("app/assets/images/recipe_seeds/bacon_dates/FFGKPMNJJLTRIFY.LARGE.jpg")
recipe2 = File.open("app/assets/images/recipe_seeds/pickled_cherry_tomatoes/main_pic.jpg")
recipe3 = File.open("app/assets/images/recipe_seeds/STEAK, CHEESE AND BABY SPINACH NAAN/main_pic.jpg")
recipe4 = File.open("app/assets/images/recipe_seeds/VINEGRET A RUSSIAN MIXED SALAD/thumbnail.jpg")

recipe_project1 = Project.new({title: 'Bacon Dates', author_id: demo.id, view_count: 0, featured: false, description: 'Having a BBQ is a really nice thing. Very easy in preparation if you keep it simple and really delicious. Just meat (or vegetables), some bread and a nice dessert.
Yes, an easy dessert directly from the fire.
Welcome to the two ingredients campfire dessert.
It can be better prepared before hand in your kitchen, but since it was a very spontaneous idea I did the preparation directly at the beach.'})
recipe_project2 = Project.new({title: 'Pickled Cherry Tomatoes', author_id: demo.id, view_count: 0, featured: false, description: 'This is a recipe incredibly delicious Pickled Cherry Tomatoes. Cherry tomatoes is a perfect choice, because are more sweet and is a good side dish for meat and mashed potatoes.'})
recipe_project3 = Project.new({title: 'STEAK, CHEESE AND BABY SPINACH NAAN', author_id: demo.id, view_count: 0, featured: false, description:"This quick protocol is the recipe for the best sandwiches I've ever made. You can be eating them within 15 minutes of your grill being hot, and they are superb. All ingredients available at your local supermarket."})
recipe_project4 = Project.new({title: 'VINEGRET A RUSSIAN MIXED SALAD', author_id: demo.id, view_count: 0, featured: false, description: "Vinegret (also called Russian vinaigrette) is a very popular salad in Russia and the nearest countries. It is vegetarian, easy-to-cook and healthy; it is one of the best choices of everyday food.
The word 'vinegret' in an extended sense means 'a strange mix'. So we say 'it is vinegret in his/her head' to express a huddle of ideas. This meaning occurs because you may add a variety of components to vinegret and get a different taste each time. This salad will never cloy to you; such an excellent feature for everyday food )))
I invite everyone to make (and enjoy!) vinegret salad with me. If you make it, don't forget to share your photo."})

recipe_project1.picture.attach(io: recipe1, filename: 'FFGKPMNJJLTRIFY.LARGE.jpg')
recipe_project2.picture.attach(io: recipe2, filename: 'main_pic.jpg')
recipe_project3.picture.attach(io: recipe3, filename: 'main_pic.jpg')
recipe_project4.picture.attach(io: recipe4, filename: 'thumbnail.jpg')

recipe_project1.save!
recipe_project2.save!
recipe_project3.save!
recipe_project4.save!

recipe_1_step_1 = File.open("app/assets/images/recipe_seeds/bacon_dates/step_one_LARGE.jpg")
recipe_1_step_2 = File.open("app/assets/images/recipe_seeds/bacon_dates/step_two.jpg")
recipe_1_step_3 = File.open("app/assets/images/recipe_seeds/bacon_dates/step_three.jpg")
recipe_1_step_4 = File.open("app/assets/images/recipe_seeds/bacon_dates/step_four.jpg")

recipe_project1_step_1 = Instruction.new({project_id: recipe_project1.id, instruction_step: 1, title: 'Material and Tools:', body: "What you need per date package:
	\n•	2 slices of streaky bacon
	\n•	2 dates, dried but as juicy as possible
	\n•	2 toothpicks
\n1 plate (to keep the sand from your food)
\n1 knive
\nTadaa, thats all (yes, I know, thats almost to less to count as a recipe, but you need to get the idea and to try it, believe me.)" })

recipe_project1_step_2 = Instruction.new({project_id: recipe_project1.id, instruction_step: 2, title: 'How to Prep', body: "1.	Slice the dates and take of the cores
	\n2.	Press the 2 dates cut face to cut face.
	\n3.	Wrap the first slice of bacon around.
	\n4.	Turn around 90° and wrap the second slice around it.
	\n5.	Pick one of the toothpicks horizontal through the package and the other one vertically.
	\n6.	You're finished with the first dates and bacon wonder. Repeat with your other ingredients…
" })

recipe_project1_step_3 = Instruction.new({project_id: recipe_project1.id, instruction_step: 3, title: 'Baking Process', body: "	1.	Set the packages to your BBQ and turn in regular intervals.
	\n2.	Start with the dessert preparation while you are still having some main meat/veggies on the fire, since it takes a while until it is ready.
	\n3.	Yes, it will really take a while until the bacon is crispy and the dates soft and tender.
	\n4.	Yes, it is definitely worth it." })

recipe_project1_step_4 = Instruction.new({project_id: recipe_project1.id, instruction_step: 4, title: 'Enjoy', body: "When the bacon is crispy from all sides your camp fires / BBQ dessert is ready.
\nThe combination of crispy salty bacon and soft sweet dates is really delicious. But it also fills your stomach up, so be careful not to overeat, even though it will be difficult :-)
\nAlso be careful it will be really hot at the beginning - don't ask me why I know :-)" })


#
recipe_project1_step_1.media.attach(io: recipe_1_step_1, filename: 'step_one_LARGE.jpg')
recipe_project1_step_2.media.attach(io: recipe_1_step_2, filename: 'step_two.jpg')
recipe_project1_step_3.media.attach(io: recipe_1_step_3, filename: 'step_three.jpg')
recipe_project1_step_4.media.attach(io: recipe_1_step_4, filename: 'step_four.jpg')

recipe_project1_step_1.save!
recipe_project1_step_2.save!
recipe_project1_step_3.save!
recipe_project1_step_4.save!



costume1 = File.open("app/assets/images/costumes_seeds/master_roshi/main_pic.jpg")
costume2 = File.open("app/assets/images/costumes_seeds/LUIGI'S GREEN FIREBALL PROP - SUPER MARIO BROTHERS/main_picture.jpg")

costume_project1 = Project.new({title: 'MAKING A COSPLAY MASTER ROSHI SHELL', author_id: demo.id, view_count: 0, featured: false, description: "I needed a quick costume for a Con that was quickly approaching, Being a bald white guy I had a few costumes in mind that I might be able to pull off in a few days. The costumes had to be both comfortable as well as functional (Didn't want to have to completely undress to sit down or use the restroom at the Con, One reason I haven't done a Bender from Futurama cosplay). 
\n My first idea was Gru from Despicable Me, But I wasn't crazy about wearing a prosthetic nose around for 2 days. Next was Dr. Evil from the Austin Powers movies, But I can't sew very well and that Grey suit just wasn't gonna happen. Finally I decided on Master Roshi from the Dragon Ball Anime. This Character is pretty simple, Just a bald guy with a goatee and sunglasses, wearing shorts and a Hawaiian shirt. But, he does wear a turtle shell on his back and I would have to build that. This instructable will cover the process of building my Cosplay Master Roshi Shell."})
costume_project2 = Project.new({title: "LUIGI'S GREEN FIREBALL PROP - SUPER MARIO BROTHERS", author_id: demo.id, view_count: 0, featured: false, description: 'Bring Luigi’s fire flower powers from the Super Mario Universe to life with this fireball cosplay prop.
Built from felt and a foam ball, this prop is safe, cheap, and pretty sturdy. Since I made it for a Luigi costume, I opted for green flames, but you could just as easily make the classic yellow & red fireball for Mario using the same techniques.'})

costume_project1.picture.attach(io: costume1, filename: "main_pic.jpg")
costume_project2.picture.attach(io: costume2, filename: "main_picture.jpg")

costume_project1.save!
costume_project2.save!

# cooking1 = File.open("app/assets/images/cooking_images/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg")
# cooking2 = File.open("app/assets/images/cooking_images/pexels-photo-76093.jpeg")
# cooking3 = File.open("app/assets/images/cooking_images/pexels-photo-271458.jpeg")
# cooking4 = File.open("app/assets/images/cooking_images/pexels-photo-691114.jpeg")
# cooking5 = File.open("app/assets/images/cooking_images/pexels-photo-958545.jpeg")
# cooking6 = File.open("app/assets/images/cooking_images/pexels-photo-1040685.jpeg")
# cooking7 = File.open("app/assets/images/cooking_images/salmon-dish-food-meal-46239.jpeg")
#
# cooking_project1 = Project.new({title: 'cooking_project1', author_id: demo.id, view_count: 0, featured: false})
# cooking_project2 = Project.new({title: 'cooking_project2', author_id: demo.id, view_count: 0, featured: false})
# cooking_project3 = Project.new({title: 'cooking_project3', author_id: demo.id, view_count: 0, featured: false})
# cooking_project4 = Project.new({title: 'cooking_project4', author_id: demo.id, view_count: 0, featured: false})
# cooking_project5 = Project.new({title: 'cooking_project5', author_id: demo.id, view_count: 0, featured: false})
# cooking_project6 = Project.new({title: 'cooking_project6', author_id: demo.id, view_count: 0, featured: false})
# cooking_project7 = Project.new({title: 'cooking_project7', author_id: demo.id, view_count: 0, featured: false})
#
# cooking_project1.picture.attach(io: cooking1, filename: 'meat-vegetables-gemuesepiess-mushrooms-111131.jpeg')
# cooking_project2.picture.attach(io: cooking2, filename: 'pexels-photo-76093.jpeg')
# cooking_project3.picture.attach(io: cooking3, filename: 'pexels-photo-271458.jpeg')
# cooking_project4.picture.attach(io: cooking4, filename: 'pexels-photo-691114.jpeg')
# cooking_project5.picture.attach(io: cooking5, filename: 'pexels-photo-958545.jpeg')
# cooking_project6.picture.attach(io: cooking6, filename: 'pexels-photo-1040685.jpeg')
# cooking_project7.picture.attach(io: cooking7, filename: 'salmon-dish-food-meal-46239.jpeg')
#
# cooking_project1.save!
# cooking_project2.save!
# cooking_project3.save!
# cooking_project4.save!
# cooking_project5.save!
# cooking_project6.save!
# cooking_project7.save!
#
#
# costume1 = File.open("app/assets/images/costume_images/knight-armor-helmet-weapons-161936.jpeg")
# costume2 = File.open("app/assets/images/costume_images/pexels-photo-65767.jpeg")
# costume3 = File.open("/Users/danielmoisoff/Documents/coding/app_academy/bootcamp_course/full_stack_build/ShareYourBuild/app/assets/images/costume_images/pexels-photo-743917.jpeg")
# costume4 = File.open("app/assets/images/costume_images/pexels-photo-922909.jpeg")
# costume5 = File.open("app/assets/images/costume_images/pexels-photo-1097456.jpeg")
#
# costume_project1 = Project.new({title: 'costume_project1', author_id: demo.id, view_count: 0, featured: false})
# costume_project2 = Project.new({title: 'costume_project2', author_id: demo.id, view_count: 0, featured: false})
# costume_project3 = Project.new({title: 'costume_project3', author_id: demo.id, view_count: 0, featured: false})
# costume_project4 = Project.new({title: 'costume_project4', author_id: demo.id, view_count: 0, featured: false})
# costume_project5 = Project.new({title: 'costume_project5', author_id: demo.id, view_count: 0, featured: false})
#
# costume_project1.picture.attach(io: costume1, filename: "knight-armor-helmet-weapons-161936.jpeg")
# costume_project2.picture.attach(io: costume2, filename: "pexels-photo-65767.jpeg")
# costume_project3.picture.attach(io: costume3, filename: "pexels-photo-743917.jpeg")
# costume_project4.picture.attach(io: costume4, filename: "pexels-photo-922909.jpeg")
# costume_project5.picture.attach(io: costume5, filename: "pexels-photo-1097456.jpeg")
#
# costume_project1.save!
# costume_project2.save!
# costume_project3.save!
# costume_project4.save!
# costume_project5.save!
#
#
# craft1 = File.open("app/assets/images/crafts_images/blue-decoration-folded-800199.jpg")
# craft2 = File.open("app/assets/images/crafts_images/pexels-photo-194094.jpeg")
# craft3 = File.open("app/assets/images/crafts_images/pexels-photo-194094.jpeg")
# craft4 = File.open("app/assets/images/crafts_images/pexels-photo-342342.jpeg")
# craft5 = File.open("app/assets/images/crafts_images/pexels-photo-582424.jpeg")
# craft6 = File.open("app/assets/images/crafts_images/pexels-photo-753500.jpeg")
# craft7 = File.open("app/assets/images/crafts_images/pexels-photo-1093910.jpeg")
#
# craft_project1 = Project.new({title: 'craft_project1', author_id: demo.id, view_count: 0, featured: false})
# craft_project2 = Project.new({title: 'craft_project2', author_id: demo.id, view_count: 0, featured: false})
# craft_project3 = Project.new({title: 'craft_project3', author_id: demo.id, view_count: 0, featured: false})
# craft_project4 = Project.new({title: 'craft_project4', author_id: demo.id, view_count: 0, featured: false})
# craft_project5 = Project.new({title: 'craft_project5', author_id: demo.id, view_count: 0, featured: false})
# craft_project6 = Project.new({title: 'craft_project6', author_id: demo.id, view_count: 0, featured: false})
# craft_project7 = Project.new({title: 'craft_project7', author_id: demo.id, view_count: 0, featured: false})
#
# craft_project1.picture.attach(io: craft1, filename: "blue-decoration-folded-800199.jpg")
# craft_project2.picture.attach(io: craft2, filename: "pexels-photo-194094.jpeg")
# craft_project3.picture.attach(io: craft3, filename: "pexels-photo-194094.jpeg")
# craft_project4.picture.attach(io: craft4, filename: "pexels-photo-342342.jpeg")
# craft_project5.picture.attach(io: craft5, filename: "pexels-photo-582424.jpeg")
# craft_project6.picture.attach(io: craft6, filename: "pexels-photo-753500.jpeg")
# craft_project7.picture.attach(io: craft7, filename: "pexels-photo-1093910.jpeg")
#
# craft_project1.save!
# craft_project2.save!
# craft_project3.save!
# craft_project4.save!
# craft_project5.save!
# craft_project6.save!
# craft_project7.save!
#
#
# technology1 = File.open("app/assets/images/technology_images/Anybots_robot_monty.jpg")
# technology2 = File.open("app/assets/images/technology_images/download.jpeg")
# technology3 = File.open("app/assets/images/technology_images/pexels-photo-209255.jpeg")
# technology4 = File.open("app/assets/images/technology_images/pexels-photo-595804.jpeg")
#
# technology_project1 = Project.new({title: 'technology_project1', author_id: demo.id, view_count: 0, featured: false})
# technology_project2 = Project.new({title: 'technology_project2', author_id: demo.id, view_count: 0, featured: false})
# technology_project3 = Project.new({title: 'technology_project3', author_id: demo.id, view_count: 0, featured: false})
# technology_project4 = Project.new({title: 'technology_project4', author_id: demo.id, view_count: 0, featured: false})
#
# technology_project1.picture.attach(io: technology1, filename: "Anybots_robot_monty.jpg")
# technology_project2.picture.attach(io: technology2, filename: "download.jpeg")
# technology_project3.picture.attach(io: technology3, filename: "pexels-photo-209255.jpeg")
# technology_project4.picture.attach(io: technology4, filename: "pexels-photo-595804.jpeg")
#
# technology_project1.save!
# technology_project2.save!
# technology_project3.save!
# technology_project4.save!

#
# project = {title: 'Seed Project', author_id: demo.id, view_count: 0, featured: false}
#
# Project.new(title: 'Seed Project', author_id: demo.id, view_count: 0, featured: false)
# Project.new(title: 'Seed2 Project', author_id: demo.id, view_count: 0, featured: false)
# Project.new(title: 'Seed3 Project', author_id: demo.id, view_count: 0, featured: false)
