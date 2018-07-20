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
shibeProfilePicture = File.open('app/assets/images/FullSizeRendercopy.png')
demo = User.new(username: 'Demo-Bot', email: 'Demo@demo.com', age: DateTime.strptime('09/15/1991 0:00', "%m/%d/%Y %H:%M"), password: 123456, about: 'Demo' )
demo.picture.attach(io: defaultProfilePicture, filename: 'user_profile_pic.png')
demo.save!
shibe = User.new(username: 'Shibe', email: 'shibe@demo.com', age: DateTime.strptime('12/10/1993 0:00', "%m/%d/%Y %H:%M"), password: 987654, about: 'Demo' )
shibe.picture.attach(io: shibeProfilePicture, filename: 'FullSizeRendercopy.png')
shibe.save!

recipe1 = File.open("app/assets/images/recipe_seeds/bacon_dates/FFGKPMNJJLTRIFY.LARGE.jpg")

recipe_project1 = Project.new({title: 'Bacon Dates', author_id: shibe.id, view_count: 0, featured: false, description: "Having a BBQ is a really nice thing. Very easy in preparation if you keep it simple and really delicious. Just meat (or vegetables), some bread and a nice dessert.\n Yes, an easy dessert directly from the fire.\nWelcome to the two ingredients campfire dessert.\nIt can be better prepared before hand in your kitchen, but since it was a very spontaneous idea I did the preparation directly at the beach."})

recipe_project1.picture.attach(io: recipe1, filename: 'FFGKPMNJJLTRIFY.LARGE.jpg')

recipe_project1.save!

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
	Tadaa, thats all (yes, I know, thats almost to less to count as a recipe, but you need to get the idea and to try it, believe me.)" })

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

The combination of crispy salty bacon and soft sweet dates is really delicious. But it also fills your stomach up, so be careful not to overeat, even though it will be difficult :-)

Also be careful it will be really hot at the beginning - don't ask me why I know :-)" })



recipe_project1_step_1.media.attach(io: recipe_1_step_1, filename: 'step_one_LARGE.jpg')
recipe_project1_step_2.media.attach(io: recipe_1_step_2, filename: 'step_two.jpg')
recipe_project1_step_3.media.attach(io: recipe_1_step_3, filename: 'step_three.jpg')
recipe_project1_step_4.media.attach(io: recipe_1_step_4, filename: 'step_four.jpg')

recipe_project1_step_1.save!
recipe_project1_step_2.save!
recipe_project1_step_3.save!
recipe_project1_step_4.save!


recipe2 = File.open("app/assets/images/recipe_seeds/pickled_cherry_tomatoes/main_pic.jpg")
recipe_2_step_1 = File.open("app/assets/images/recipe_seeds/pickled_cherry_tomatoes/step_one.jpg")
recipe_2_step_2 = File.open("app/assets/images/recipe_seeds/pickled_cherry_tomatoes/step_two.jpg")
recipe_2_step_3 = File.open("app/assets/images/recipe_seeds/pickled_cherry_tomatoes/step_three.jpg")
recipe_2_step_4 = File.open("app/assets/images/recipe_seeds/pickled_cherry_tomatoes/step_four.jpg")
recipe_2_step_5 = File.open("app/assets/images/recipe_seeds/pickled_cherry_tomatoes/step_five.jpg")

recipe_project2 = Project.new({title: 'Pickled Cherry Tomatoes', author_id: shibe.id, view_count: 0, featured: false, description: 'This is a recipe incredibly delicious Pickled Cherry Tomatoes. Cherry tomatoes is a perfect choice, because are more sweet and is a good side dish for meat and mashed potatoes.'})

recipe_project2.picture.attach(io: recipe2, filename: 'main_pic.jpg')

recipe_project2.save!

recipe_project2_step_1 = Instruction.new({project_id: recipe_project2.id, instruction_step: 1, title: 'Ingredients', body: "•	1 kg Cherry Tomatoes
	•	1 l Water
	•	2 tbs Salt
	•	3 tbs Sugar
	•	100 ml Vinegar 5%
	•	5 Garlic cloves
	•	3 Bay leaves
	•	2 tbs Whole pepper Mix
	•	Fresh herbs: parsley, celery, dill
" })

recipe_project2_step_2 = Instruction.new({project_id: recipe_project2.id, instruction_step: 2, title: 'Preparing', body: "•	First, prepare the cherry tomatoes: wash them and pierce each tomato with small fork or wooden toothpick.
	•	Peel and slice the garlic.
" })

recipe_project2_step_3 = Instruction.new({project_id: recipe_project2.id, instruction_step: 3, title: 'Layers', body: "Put a few sprigs of each fresh herbs on bottom of the jar, and sliced garlic. Add cherry tomatoes, and on top the same: few sprigs of each fresh herbs and remaining garlic" })

recipe_project2_step_4 = Instruction.new({project_id: recipe_project2.id, instruction_step: 4, title: 'Making the Brine', body: "Put a few sprigs of each fresh herbs on bottom of the jar, and sliced garlic. Add cherry tomatoes, and on top the same: few sprigs of each fresh herbs and remaining garlic" })

recipe_project2_step_5 = Instruction.new({project_id: recipe_project2.id, instruction_step: 5, title: 'Making the Brine', body: "Pour the vinegar mixture over the tomatoes, making sure the tomatoes are completely submerged. Close the lid and cool to room temperature, then put it in the refrigerator.
Marinate for 3 days, and after tomatoes are ready to be serve. Pickled Cherry Tomatoes will keep in the fridge for up to 2 months.
Enjoy!
NOTE: This recipe was not tested for canning and long term storage." })


recipe_project2_step_1.media.attach(io: recipe_2_step_1, filename: 'step_one.jpg')
recipe_project2_step_2.media.attach(io: recipe_2_step_2, filename: 'step_two.jpg')
recipe_project2_step_3.media.attach(io: recipe_2_step_3, filename: 'step_three.jpg')
recipe_project2_step_4.media.attach(io: recipe_2_step_4, filename: 'step_four.jpg')
recipe_project2_step_5.media.attach(io: recipe_2_step_5, filename: 'step_four.jpg')

recipe_project2_step_1.save!
recipe_project2_step_2.save!
recipe_project2_step_3.save!
recipe_project2_step_4.save!
recipe_project2_step_5.save!


recipe3 = File.open("app/assets/images/recipe_seeds/STEAK, CHEESE AND BABY SPINACH NAAN/main_pic.jpg")
recipe3_project3_step_1 = File.open("app/assets/images/recipe_seeds/STEAK, CHEESE AND BABY SPINACH NAAN/step_one.jpg")
recipe3_project3_step_2 = File.open("app/assets/images/recipe_seeds/STEAK, CHEESE AND BABY SPINACH NAAN/step_two.jpg")
recipe3_project3_step_3 = File.open("app/assets/images/recipe_seeds/STEAK, CHEESE AND BABY SPINACH NAAN/step_three.jpg")
recipe3_project3_step_4 = File.open("app/assets/images/recipe_seeds/STEAK, CHEESE AND BABY SPINACH NAAN/step_four.jpg")

recipe_project3 = Project.new({title: 'STEAK, CHEESE AND BABY SPINACH NAAN', author_id: demo.id, view_count: 0, featured: false, description:"This quick protocol is the recipe for the best sandwiches I've ever made. You can be eating them within 15 minutes of your grill being hot, and they are superb. All ingredients available at your local supermarket."})

recipe_project3.picture.attach(io: recipe3, filename: 'main_pic.jpg')
recipe_project3.save!

recipe_project3_step_1 = Instruction.new({project_id: recipe_project3.id, instruction_step: 1, title: 'Ingredients', body: "This is a four-ingredient sandwich: garlic naan bread, steak, cheese and baby spinach. The cheese can be whatever you like. The steak should be the best quality grilling steak you can bear to buy. You don't need much per sandwich." })

recipe_project3_step_2 = Instruction.new({project_id: recipe_project3.id, instruction_step: 2, title: 'Steak', body: "Get a decent steak - ribeye if you can afford it, sirloin if not. Cut off all of the external fat on the steak, but leave all internal fat. External fat drips and burns and smokes; internal fat melts and oozes into the meat making it delicious. Heavily salt both sides, rubbing the salt into the meat. I was recently introduced to Montreal steak spice, and I add that now along with the salt, but it's not necessary.
Get your grill started while you leave your prepared steaks to warm to room temperature. Once the grill (mine is a Weber Q, love it) is medium-hot (say 400°F), put your steaks on and close the lid. Turn after 4-5 minutes, then remove after another 4-5 minutes. If you have a reasonably thick steak it ought to be medium-rare (use a meat thermometer for added precision: you want the internal temperature to be 140°F). Don't overcook the steak - it will be dry and chewy instead of juicy and moist and delicious. Leave the steak on a clean cutting board to rest. Note that it continues to cook while you do this, so if you want medium-rare steaks, cooking them to rare is correct. If you pile them up, they will cook more." })

recipe_project3_step_3 = Instruction.new({project_id: recipe_project3.id, instruction_step: 3, title: 'Naan', body: "Grate your favorite cheese. I prefer blue cheese in this context, my family prefers Havarti (3rd photo here). Most of the photos show medium cheddar because the orange contrasts well for the photos and we had it in the fridge.
Throw a couple of garlic naan breads on the barbecue and grill for one minute covered, then flip. Sprinkle grated cheese on each bread and close the lid. Remove after a further minute, and plate." })

recipe_project3_step_4 = Instruction.new({project_id: recipe_project3.id, instruction_step: 4, title: 'Assembly', body: "Add thinly sliced steak to cheesy garlic naan, then liberally top with baby spinach. Serve. It's sensational. But don't take my word for it, make some yourself and impress your guests." })




recipe_project3_step_1.media.attach(io: recipe3_project3_step_1, filename: 'step_one.jpg')
recipe_project3_step_2.media.attach(io: recipe3_project3_step_2, filename: 'step_two.jpg')
recipe_project3_step_3.media.attach(io: recipe3_project3_step_3, filename: 'step_three.jpg')
recipe_project3_step_4.media.attach(io: recipe3_project3_step_4, filename: 'step_four.jpg')


recipe_project3_step_1.save!
recipe_project3_step_2.save!
recipe_project3_step_3.save!
recipe_project3_step_4.save!


recipe4 = File.open("app/assets/images/recipe_seeds/VINEGRET A RUSSIAN MIXED SALAD/thumbnail.jpg")
recipe4_step_1 = File.open("app/assets/images/recipe_seeds/VINEGRET A RUSSIAN MIXED SALAD/step_one.jpg")
recipe4_step_2 = File.open("app/assets/images/recipe_seeds/VINEGRET A RUSSIAN MIXED SALAD/step_two.jpg")
recipe4_step_3 = File.open("app/assets/images/recipe_seeds/VINEGRET A RUSSIAN MIXED SALAD/step_three.jpg")
recipe4_step_4 = File.open("app/assets/images/recipe_seeds/VINEGRET A RUSSIAN MIXED SALAD/step_four.jpg")


recipe_project4 = Project.new({title: 'VINEGRET A RUSSIAN MIXED SALAD', author_id: demo.id, view_count: 0, featured: false, description: "Vinegret (also called Russian vinaigrette) is a very popular salad in Russia and the nearest countries. It is vegetarian, easy-to-cook and healthy; it is one of the best choices of everyday food.
The word 'vinegret' in an extended sense means 'a strange mix'. So we say 'it is vinegret in his/her head' to express a huddle of ideas. This meaning occurs because you may add a variety of components to vinegret and get a different taste each time. This salad will never cloy to you; such an excellent feature for everyday food )))
I invite everyone to make (and enjoy!) vinegret salad with me. If you make it, don't forget to share your photo."})

recipe_project4.picture.attach(io: recipe4, filename: 'thumbnail.jpg')
recipe_project4.save!

recipe_project4_step_1 = Instruction.new({project_id: recipe_project4.id, instruction_step: 1, title: 'Ingredients', body: "There are two necessary ingredients, which must be in a salad to call it 'Vinegret'.
	•	Components #1 is salad oil. I usually use olive oil, but you may choose your preference. Also, using different kinds of oil (sunflower, cottonseeds, etc.), you may diversify your salad flavor. No chance it cloys to you ever!
	•	Components #2 is beetroot. It is not possible to prepare vinegret without beetroot.
Also, we should add an acid-containing ingredient.
	•	In this instructable, I used pickled cucumber, but it may be other pickled vegetables, fermented cabbage or a teaspoon of vinegar.
As for other ingredients, we may choose any from the list:
	•	potato;
	•	carrot;
	•	canned green pea or bean;
	•	onion.
Also, we need basic kitchenware:
	•	a chopping board;
	•	knives for peeling and chopping;
	•	some pots for vegetable cooking;
	•	a big pot or a big bowl for final mixing;
	•	a big wooden or plastic spoon for mixing.
" })

recipe_project4_step_2 = Instruction.new({project_id: recipe_project4.id, instruction_step: 2, title: 'Vegetables Cooking', body: 'Firstly, we should cook beetroot and potato (as well as carrot, if you want). I advise starting with a beetroot cooking because it is the most time-consuming stage.
Wash some beetroots, put them into a pot with cold water and boil them for 1.5-2.0 hours. Then, place the pot in the sink and fill it with a flow of cold water. Make beetroots get as cold as tap water. We call it "to frighten beetroots" we do it to make peeling easier.
After "making beetroots afraid" put the pot to the stove and boil for one hour more.
Potato cooking is much easier: just boil it until it gets prepared (about 30 min).'})

recipe_project4_step_3 = Instruction.new({project_id: recipe_project4.id, instruction_step: 3, title: 'Vegetables Peeling and Chopping', body: 'Peel cooked beetroot and potato then chop.
Peel and chop raw onion. Chop pickled cucumber.'})

recipe_project4_step_4 = Instruction.new({project_id: recipe_project4.id, instruction_step: 4, title: 'Final Mixing', body: 'Put all ingredients into a big pot or bowl. Add some oil and mix.
Let the salad stay for an hour and ... enjoy!
Bone appetite!'})


recipe_project4_step_1.media.attach(io: recipe4_step_1, filename: 'step_one.jpg')
recipe_project4_step_2.media.attach(io: recipe4_step_2, filename: 'step_two.jpg')
recipe_project4_step_3.media.attach(io: recipe4_step_3, filename: 'step_three.jpg')
recipe_project4_step_4.media.attach(io: recipe4_step_4, filename: 'step_four.jpg')


recipe_project4_step_1.save!
recipe_project4_step_2.save!
recipe_project4_step_3.save!
recipe_project4_step_4.save!



costume1 = File.open("app/assets/images/costumes_seeds/master_roshi/main_pic.jpg")
costume2 = File.open("app/assets/images/costumes_seeds/LUIGI'S GREEN FIREBALL PROP - SUPER MARIO BROTHERS/main_picture.jpg")

costume_project1 = Project.new({title: 'MAKING A COSPLAY MASTER ROSHI SHELL', author_id: demo.id, view_count: 0, featured: false, description: "I needed a quick costume for a Con that was quickly approaching, Being a bald white guy I had a few costumes in mind that I might be able to pull off in a few days. The costumes had to be both comfortable as well as functional (Didn't want to have to completely undress to sit down or use the restroom at the Con, One reason I haven't done a Bender from Futurama cosplay). 

 My first idea was Gru from Despicable Me, But I wasn't crazy about wearing a prosthetic nose around for 2 days. Next was Dr. Evil from the Austin Powers movies, But I can't sew very well and that Grey suit just wasn't gonna happen. Finally I decided on Master Roshi from the Dragon Ball Anime. This Character is pretty simple, Just a bald guy with a goatee and sunglasses, wearing shorts and a Hawaiian shirt. But, he does wear a turtle shell on his back and I would have to build that. This instructable will cover the process of building my Cosplay Master Roshi Shell."})

costume_project2 = Project.new({title: "LUIGI'S GREEN FIREBALL PROP - SUPER MARIO BROTHERS", author_id: demo.id, view_count: 0, featured: false, description: 'Bring Luigi’s fire flower powers from the Super Mario Universe to life with this fireball cosplay prop.
Built from felt and a foam ball, this prop is safe, cheap, and pretty sturdy. Since I made it for a Luigi costume, I opted for green flames, but you could just as easily make the classic yellow & red fireball for Mario using the same techniques.'})

costume_project1.picture.attach(io: costume1, filename: "main_pic.jpg")
costume_project2.picture.attach(io: costume2, filename: "main_picture.jpg")

costume_project1.save!
costume_project2.save!

costume_project2_step_1 = Instruction.new({project_id: costume_project2.id, instruction_step: 1, title: 'Materials & Equipment', body: '	•	5 Inch diameter foam or plastic ball
	•	Sheet of felt (white, light green, dark green), 3 sheets a piece
	•	Matching fleece scrap to cover ball
	Equipment
	•	Hot glue gun & glue
	•	Basic drawing and cutting tools
	•	Mug to balance the fireball on'})

costume_project2_step_2 = Instruction.new({project_id: costume_project2.id, instruction_step: 2, title: 'Create Templates for the Flames', body: 'You will be layering your felt to create the illusion of flames coming off of the fireball. For the dark and light green, draw several flame shapes coming out of an open triangular shape with convex sides (approx. 5 inch open side). The triangular end will cover the ball more closely and the flame end will stick out behind the main body. Adjust the size of the light green flames to determine how much of the dark green will be showing. Go wild.
For the white center of the fireball, freehand two flaming circles about 2/3rds the size of the side of the ball. Also create a strip of white flame to go down the center of the fireball (this part helps cover up seams).'})

costume_project2_step_3 = Instruction.new({project_id: costume_project2.id, instruction_step: 3, title: 'Cut Out Felt', body: 'Cut out 2 full size dark and 2 full size light green flames from the templates you like best. These will be the sides of your fireball and will have the white flame glued to them.
Cut out 2 shorter flames from each felt for the top and bottom of your fireball. These help cover up the core ball. I used the templates I made for the side flames, but trimmed them to be a little shorter and more narrow to fit the available space.
Cut out 2 white circular flames and strip of white flame for the center of the fireball.'})

costume_project2_step_4 = Instruction.new({project_id: costume_project2.id, instruction_step: 4, title: 'Cover the Core Ball', body: 'Glue fleece or another stretchy material over the surface of the ball. This will give you a surface to attached the felt to and reduce the chance that any of the white foam will be visible in the completed project.'})

costume_project2_step_5 = Instruction.new({project_id: costume_project2.id, instruction_step: 5, title: 'Glue on Flames', body: 'Starting with the dark green flames, hot glue the felt pieces to the core; top/bottom first and then sides. Glue on the top/bottom light green flames next, followed by the light green for the sides.
Position the white flames in the approximate middle of the side pieces of flame and glue down.
At the top of the fireball, glue the strip of white flame down to cover the seams created by the green flame.
You may need to fiddle a bit with the pieces of felt to get them the lay on the core the way you want. Be patient, and take your time to get the best shape you can.
If you find your flames want to flop over, glue a circle of dark green felt into the space behind the flames and glue the flames to the folded up edges of the circle to give extra support.'})

costume_project2_step_6 = Instruction.new({project_id: costume_project2.id, instruction_step: 6, title: 'Engage Your Fire Powers', body: 'Let cool and engage your fire flower powers. Although light, I wouldn’t recommend actually throwing this at anyone. Happy Making!'})

costume1_step_1 = File.open("app/assets/images/costumes_seeds/LUIGI'S GREEN FIREBALL PROP - SUPER MARIO BROTHERS/step_one.jpg")
costume_project2_step_1.media.attach(io: costume1_step_1, filename: "step_one.jpg")

costume1_step_2 = File.open("app/assets/images/costumes_seeds/LUIGI'S GREEN FIREBALL PROP - SUPER MARIO BROTHERS/step_2.jpg")
costume_project2_step_2.media.attach(io: costume1_step_2, filename: "step_2.jpg")

costume1_step_3 = File.open("app/assets/images/costumes_seeds/LUIGI'S GREEN FIREBALL PROP - SUPER MARIO BROTHERS/step_three.jpg")
costume_project2_step_3.media.attach(io: costume1_step_3, filename: "step_three.jpg")

costume1_step_4 = File.open("app/assets/images/costumes_seeds/LUIGI'S GREEN FIREBALL PROP - SUPER MARIO BROTHERS/stpe_four.jpg")
costume_project2_step_4.media.attach(io: costume1_step_4, filename: "stpe_four.jpg")

costume1_step_5 = File.open("app/assets/images/costumes_seeds/LUIGI'S GREEN FIREBALL PROP - SUPER MARIO BROTHERS/step_five.jpg")
costume_project2_step_5.media.attach(io: costume1_step_5, filename: "step_five.jpg")

costume1_step_6 = File.open("app/assets/images/costumes_seeds/LUIGI'S GREEN FIREBALL PROP - SUPER MARIO BROTHERS/step_6.jpg")
costume_project2_step_6.media.attach(io: costume1_step_6, filename: "step_6.jpg")

costume_project2_step_1.save!
costume_project2_step_2.save!
costume_project2_step_3.save!
costume_project2_step_4.save!
costume_project2_step_5.save!
costume_project2_step_6.save!



costume_project1_step_1 = Instruction.new({project_id: costume_project1.id, instruction_step: 1, title: 'Starting the Shell', body: 'For the base of the shell, I started with a Sno Racer Disc sled that I found at a thrift store. I knew that I wanted the shell to have some depth and look somewhat realistic, so I decided that I would make it with EVA floor mat foam.
But, to do this I would first need to make a pattern.'})

costume_project1_step_2 = Instruction.new({project_id: costume_project1.id, instruction_step: 2, title: 'Making the Pattern', body: "To make the pattern, I started by covering a little more than half of the sled with aluminum foil. At this point you may be asking 'Why half?'... That's because the shell will be symmetrical and will you will be able to pattern half and just flip your pattern for the other side, making a full shell! This saves lot's of time and materials. The reason for the aluminum foil is to make it easier to remove your pattern from what ever you're using to make the pattern.
Once you have your sled covered in foil, you will start covering the foil with tape. Make sure to alternate directions when you build up the layers and I suggest doing 3-4 layers of tape to ensure you have a good solid pattern. After you've finished covering the disc in tape, you will need to draw a center line. This particular sled has handle indentions, So I measured the centers of those and stretched a ratchet strap over the disc connecting the points with a sharpie to make the centerline of the disc. Once you have the centerline, you can begin to draw out your pattern. I started by sketching a design on a piece of paper and measuring the disc to figure out the proportions. Once I planned out the sizes for the panels that make up the shell pattern, I began to draw them out on the tape covered disc. Make sure to draw registration lines on your pattern to help you line things up later."})

costume_project1_step_3 = Instruction.new({project_id: costume_project1.id, instruction_step: 3, title: 'Cutting Your Pattern', body: "Using a sharp knife you can begin to liberate your pattern from the disc. You will find that the foil allows the pattern pieces to lift away easily. Once you have removed your pattern pieces from the disc, you can the set the disc aside for a little bit. And take a look at your pattern pieces, if there are any that will not lay flat you will need to cut a relief in them until they do. This is critical to making a good pattern. It was at this point that I realized that I could pattern 1/4 of the shell and flip it to create the whole shell, saving more time and materials! I also took this opportunity to cut in the registration marks that I would need to transfer to the foam in order to like everything up later."})

costume_project1_step_4 = Instruction.new({project_id: costume_project1.id, instruction_step: 4, title: 'Making a Stronger Pattern', body: "In this step, you will transfer your tape pattern to something a little more sturdy. I like to use either butcher paper or poster board, I will be using poster board for this pattern. Having a sturdy pattern is great for this application because you will be using some pattern pieces up to 4 times each and the tape would not hold up well.
To transfer the patterns to poster board you just need to peel off the foil and stick the tape down like a sticker. Then trace the lines onto the poster board (ensuring you transfer the registration marks as well)."})

costume_project1_step_5 = Instruction.new({project_id: costume_project1.id, instruction_step: 5, title: 'Transferring Your Pattern to Foam', body: "Now, you will trace your patterns onto the floor matt foam with a sharpie. I like to use stick pins to hold the pattern in place while I trace the lines. Once you have traced your pattern pieces onto the foam, you are ready to cut out the foam pieces that will make up your shell. For this part you will want to have a sharp razor knife on hand because EVA foam will dull a blade very quickly resulting in jagged edges along your cut line. Having a sharp blade and cutting with a continuous motion will yield much nicer cuts.
I wanted a beveled edge where the panels would meet on the finished shell, so once I'd cut the individual pieces I flipped them over and made an angle cut along the perimeter. After the cuts, I took a sanding block with 220 Grit sandpaper and smoothed the edges (I think the beveled detail made all the difference in the finished shell)."})

costume_project1_step_6 = Instruction.new({project_id: costume_project1.id, instruction_step: 6, title: 'Applying the Panels', body: "Once all panels were cut, beveled and sanded, I drew out my pattern on the sled to make glue-up a bit easier. For the glue I used Barge contact cement. This stuff works great on EVA foam! To use it you apply glue to both parts that you want to glue together, wait a few minutes until it becomes tacky and then stick the pieces together (Forever!)."})

costume_project1_step_7 = Instruction.new({project_id: costume_project1.id, instruction_step: 7, title: 'Attaching the Straps', body: "At this point I decided to tackle the straps that would allow me to wear the shell (If I had of waited until after gluing on all the panels, this would have been more difficult). To do this I decided to use my old camel pak (Hydration backpack), some Chicago screws and leather belt scraps. First I laid the pack in the sled to figure out my mounting points. I went with one up top and two on the bottom for stability. I then drilled holes through the sled large enough to thread the Chicago screws through. Using a leather punch, I made holes for the Chicago screws in the scrap leather. These would anchor to the D rings on the Camel Pak creating a secure mounting point. Bonus reason for using a Camel Pak: You can carry a gallon of water and snacks right in your shell! ;)"})

costume_project1_step_8 = Instruction.new({project_id: costume_project1.id, instruction_step: 8, title: 'More Panel Gluing', body: "Continuing with the panel glue-up, I worked my way around the shell gluing on all the panels.
See what a difference those beveled edges make?
Once the base of the shell was done I needed to do the edges, for that I made two simple cardstock templates. One was wide and one was a little smaller, that way I could overlap the seams on the panels creating a more realistic look. I glued these on the same way I did the panels but for some of them I had to use clamps to hold them in place until the glue setup. Note: If you use a clamp on foam, make sure that you use a piece of scrap foam between your prop and the clamp or you will have a clamp shaped indention in your finished prop."})

costume_project1_step_9 = Instruction.new({project_id: costume_project1.id, instruction_step: 9, title: 'Painting', body: "Once everything was glued up and set, I covered the shell inside and out with 3 coats of black plastidip. Followed by 2 coats of grey sand-able primer and 3 coats of purple gloss paint on the outside of the shell. Did a fit test the night before the Con."})

costume_project1_step_10 = Instruction.new({project_id: costume_project1.id, instruction_step: 10, title: 'Finished Costume', body: "And a pic from the Con (Ring of Fire Con 2018)
This project could easily be adapted into a bowser shell as well. I hope you enjoyed this build."})


costume1_step_1 = File.open("app/assets/images/costumes_seeds/master_roshi/step_one.jpg")
costume_project1_step_1.media.attach(io: costume1_step_1, filename: "step_one.jpg")
costume1_step_2 = File.open("app/assets/images/costumes_seeds/master_roshi/step_two.jpg")
costume_project1_step_2.media.attach(io: costume1_step_2, filename: "step_two.jpg")
costume1_step_3 = File.open("app/assets/images/costumes_seeds/master_roshi/step_three.jpg")
costume_project1_step_3.media.attach(io: costume1_step_3, filename: "step_three.jpg")
costume1_step_4 = File.open("app/assets/images/costumes_seeds/master_roshi/step_four.jpg")
costume_project1_step_4.media.attach(io: costume1_step_4, filename: "step_four.jpg")
costume1_step_5 = File.open("app/assets/images/costumes_seeds/master_roshi/step_five.jpg")
costume_project1_step_5.media.attach(io: costume1_step_5, filename: "step_five.jpg")
costume1_step_6 = File.open("app/assets/images/costumes_seeds/master_roshi/step_six.jpg")
costume_project1_step_6.media.attach(io: costume1_step_6, filename: "step_six.jpg")
costume1_step_7 = File.open("app/assets/images/costumes_seeds/master_roshi/step_seven.jpg")
costume_project1_step_7.media.attach(io: costume1_step_7, filename: "step_seven.jpg")
costume1_step_8 = File.open("app/assets/images/costumes_seeds/master_roshi/step_eight.jpg")
costume_project1_step_8.media.attach(io: costume1_step_8, filename: "step_eight.jpg")
costume1_step_9 = File.open("app/assets/images/costumes_seeds/master_roshi/step_nine.jpg")
costume_project1_step_9.media.attach(io: costume1_step_9, filename: "step_nine.jpg")
costume1_step_10 = File.open("app/assets/images/costumes_seeds/master_roshi/step_ten.jpg")
costume_project1_step_10.media.attach(io: costume1_step_10, filename: "step_ten.jpg")

costume_project1_step_1.save!
costume_project1_step_2.save!
costume_project1_step_3.save!
costume_project1_step_4.save!
costume_project1_step_5.save!
costume_project1_step_6.save!
costume_project1_step_7.save!
costume_project1_step_8.save!
costume_project1_step_9.save!
costume_project1_step_10.save!



carft1 = File.open("app/assets/images/non_instrucable_seeds/neko_atsume_cats/main_pic.jpg")

carft_project1 = Project.new({title: 'DIY: NEKO ATSUME CRAFT', author_id: shibe.id, view_count: 0, featured: false, description: "Guys, I have a confession: I am obsessed with Neko Atsume. So obsessed, I want real life Neko Atsume cats: hence, this DIY Neko Atsume craft for felted cats.

Of course, you’re probably like, “what took you so long?”
See, I knew about it in early 2015. You don’t get to be a cat lady without hearing about this kind of thing. My sister-in-law was an early fan.
But between Twitter, Bloglovin’, Instagram, and email, I figured the last thing I needed was another distraction on my phone, and I’ve never been into phone games like Candy Crush or Farmville or whatever. I was content to live with my real life cats, even though they wake me up waaaay to early in the morning and can’t clean up after themselves.
Then, something extraordinary happened.
I found myself without a book and with way too much time on my hands.
We went to hear Bernie Sanders speak, and they advised us not to bring in purses or bags. Which meant I had no water bottle or book.
Next time, I’ll take my chances with the Secret Service.
But, at least I had my phone. Because we waited for five hours. And I ended up caving and downloading Neko Atsume.
The rest is history. Mister BS ended up getting it too, and we are actually competitive about it. We’ve been racing to see who could get the rare cats first. Mister BS looked up tips on the Internet.
Basically, we’re ridiculous. (At least we’re not alone).
We’re so nerdy, we spent last Saturday night crafting felt finger puppets and magnets.
Now, you can too. Here’s how you can make this Neko Atsume craft."})

carft_project1.picture.attach(io: carft1, filename: 'main_pic.jpg')

carft_project1.save!


carft_1_step_2 = File.open("app/assets/images/non_instrucable_seeds/neko_atsume_cats/step 2.jpg")
carft_1_step_3 = File.open("app/assets/images/non_instrucable_seeds/neko_atsume_cats/step 3.jpg")
carft_1_step_4 = File.open("app/assets/images/non_instrucable_seeds/neko_atsume_cats/step 4.jpg")
carft_1_step_5 = File.open("app/assets/images/non_instrucable_seeds/neko_atsume_cats/step 5.jpg")
carft_1_step_6 = File.open("app/assets/images/non_instrucable_seeds/neko_atsume_cats/step 6.jpg")
carft_1_step_7 = File.open("app/assets/images/non_instrucable_seeds/neko_atsume_cats/step 7.jpg")

carft_project1_step_1 = Instruction.new({project_id: carft_project1.id, instruction_step: 1, title: 'Here’s what you need:', body: "felt (white, black, two shades of grey, red, warm yellow, two shades of brown)
		fabric scissors (I love this pair from Fiskars!)
		fabric glue (quick dry)
		needle
		embroidery floss (black, white, grey, etc)
		magnets and E6000 glue (if making magnets, can also just make finger puppets)" })

carft_project1_step_2 = Instruction.new({project_id: carft_project1.id, instruction_step: 2, title: '', body: "Print off screenshots of the cat in the size and pose that you want to recreate." })

carft_project1_step_3 = Instruction.new({project_id: carft_project1.id, instruction_step: 3, title: '', body: "Trace the basic shape on a piece of cardstock. This will be the base of your cat. Then, cut a piece of felt in the shape using your pattern." })

carft_project1_step_4 = Instruction.new({project_id: carft_project1.id, instruction_step: 4, title: '', body: "Make a second cardstock pattern, but this time cut it into the individual pieces that will be different colors or layers." })

carft_project1_step_5 = Instruction.new({project_id: carft_project1.id, instruction_step: 5, title: '', body: "Then cut out your individual layers, and any details you want to add. Get them all organized." })

carft_project1_step_6 = Instruction.new({project_id: carft_project1.id, instruction_step: 6, title: '', body: "See what you want your final placing to be, then start gluing!" })

carft_project1_step_7 = Instruction.new({project_id: carft_project1.id, instruction_step: 7, title: '', body: "After you’ve secured all your layers, stitch a french knot for eyes if you want them to appear open, or lines if their expression has closed eyes. Add a little nose and a mouse and stitch any lines to delineate their legs or tail.
If you want to make a finger puppet, cut another base and make loop stitches along the sides, leaving the bottom open. The grey kitty, Shadow, is a finger puppet, and the others are cute magnets for my desk at work. I simply used E600 glue to affix a magnet to the back.
And there you have it: your Neko Atsume craft. I will definitely be looking into making some more Neko Atsume inspired crafts in the future. Maybe some cardboard painted cafe? Or could I possibly make a cat pancake for my cats to crawl into? We shall see." })

carft1_step_2 = File.open("app/assets/images/non_instrucable_seeds/neko_atsume_cats/step 2.jpg")
carft_project1_step_2.media.attach(io: carft1_step_2, filename: "step 2.jpg")
carft1_step_3 = File.open("app/assets/images/non_instrucable_seeds/neko_atsume_cats/step 3.jpg")
carft_project1_step_3.media.attach(io: carft1_step_3, filename: "step 3.jpg")
carft1_step_4 = File.open("app/assets/images/non_instrucable_seeds/neko_atsume_cats/step 4.jpg")
carft_project1_step_4.media.attach(io: carft1_step_4, filename: "step 4.jpg")
carft1_step_5 = File.open("app/assets/images/non_instrucable_seeds/neko_atsume_cats/step 5.jpg")
carft_project1_step_5.media.attach(io: carft1_step_5, filename: "step 5.jpg")
carft1_step_6 = File.open("app/assets/images/non_instrucable_seeds/neko_atsume_cats/step 6.jpg")
carft_project1_step_6.media.attach(io: carft1_step_6, filename: "step 6.jpg")
carft1_step_7 = File.open("app/assets/images/non_instrucable_seeds/neko_atsume_cats/step 7.jpg")
carft_project1_step_7.media.attach(io: carft1_step_7, filename: "step 7.jpg")

carft_project1_step_2.save!
carft_project1_step_3.save!
carft_project1_step_4.save!
carft_project1_step_5.save!
carft_project1_step_6.save!
carft_project1_step_7.save!


carft2 = File.open("app/assets/images/non_instrucable_seeds/5_min_white_board/main_pic.jpg")

carft_project2 = Project.new({title: 'Easy DIY Whiteboards | 5 Minute Dry Erase Board', author_id: shibe.id, view_count: 0, featured: false, description: "These DIY whiteboards are ridiculously easy. So easy that it makes me think “Doh! Why didn’t I think of that sooner?!” You can make two or three or even more of them in less than five minutes. And best of all, it couldn’t possibly be any cheaper! I bought my frames from the dollar store, and I already had the fancy paper at home, so each whiteboard cost less than $5 when you include the dry erase markers.
Five minutes and five dollars. That’s my kind of project!"})

carft_project2.picture.attach(io: carft2, filename: 'main_pic.jpg')

carft_project2.save!


carft_project2_step_1 = Instruction.new({project_id: carft_project2.id, instruction_step: 1, title: '', body: "These are SO SIMPLE. This is all you need:
	•	One frame from the dollar store (Mine were for 8″ x 10″ photos)
	•	One piece of fancy scrapbook paper
	•	Dry erase markers
	•
The frames I bought had the stand at the back so you can stand them up on the counter. Or you might want to hang your whiteboard on the wall? Just double check that your frame has the right hardware for how you plan to use it. The ones I bought would be kind of wobbly if I hung them on the wall." })

carft_project2_step_2 = Instruction.new({project_id: carft_project2.id, instruction_step: 2, title: '', body: "Remove the back, add in your fancy scrapbooking paper and you’re done!" })

carft_project2_step_3 = Instruction.new({project_id: carft_project2.id, instruction_step: 3, title: '', body: "The dry erase markers wipe right off the glass in the frame!" })





carft2_step_1 = File.open("app/assets/images/non_instrucable_seeds/5_min_white_board/step_one.jpg")
carft_project2_step_1.media.attach(io: carft2_step_1, filename: "step_one.jpg")
carft2_step_2 = File.open("app/assets/images/non_instrucable_seeds/5_min_white_board/step_two.jpg")
carft_project2_step_2.media.attach(io: carft2_step_2, filename: "step_two.jpg")
carft2_step_3 = File.open("app/assets/images/non_instrucable_seeds/5_min_white_board/step_three.jpg")
carft_project2_step_3.media.attach(io: carft2_step_3, filename: "step_three.jpg")

carft_project2_step_1.save!
carft_project2_step_2.save!
carft_project2_step_3.save!

carft3 = File.open("app/assets/images/non_instrucable_seeds/DIY- Geometric Paper Wall Art/main-picture.jpg")

carft_project3 = Project.new({title: 'Diy: Geometric Paper Wall Art', author_id: demo.id, view_count: 0, featured: false, description: "You walk into Pottery Barn looking for something to hang on your wall. You browse through the store falling in love with pillows, desks, dining room sets, and then you turn the corner. You see the art piece you’ve always wanted, one you immediately fall for. You run to the sculpture/painting/photograph and admire, jaw dropped.
When of all of a sudden, you see $399.00.
You walk out of the store with slumped shoulders, your head is down … basically you look like Charlie Brown after a ‘good grief’ moment.
And then after you get some ice cream to cheer your up, you come home, and start searching the internet. You magically find this blog.
And now you’re very thankful.
And now you feel lucky.
But you’re still wondering why you’re feeling that way…
Well, it’s because we’re giving you some immaculate paper wall art that is solely done with …
"})

carft_project3.picture.attach(io: carft3, filename: 'main_pic.jpg')

carft_project3.save!

carft_project3_step_1 = Instruction.new({project_id: carft_project3.id, instruction_step: 1, title: '', body: "I wanted to make sure that my pieces were big enough to make a statement. Make a square with a standard sheet of paper by cutting the longer side to 8 1/2 inches. Don’t worry if it’s not perfect, you can always cut the uneven sides along the way." })

carft_project3_step_2 = Instruction.new({project_id: carft_project3.id, instruction_step: 2, title: '', body: "Now we’re digging in to the substance of actually making this paper wall art. Fold the one side in half making it look like the second box. Flip it the other way and fold that part down too. You should have four equal squares by the end of it (like you see in box 4)." })

carft_project3_step_3 = Instruction.new({project_id: carft_project3.id, instruction_step: 3, title: '', body: "Next, fold the bottom section to the center and then the top section to the center. This should make the flat piece of paper now have 8 different sections." })

carft_project3_step_4 = Instruction.new({project_id: carft_project3.id, instruction_step: 4, title: '', body: "The paper should be folded again so that the inside has the two latest folds and the outside is smooth. After that, work with each square box you see. You want to fold one side of the first box to make a triangle. Make sure that the tip of the corner touches the end of the crease. Then make another triangle so that the other corner touches the other end of the crease. Repeat this with the other box. It should end up looking like the fourth picture above … hopefully." })

carft_project3_step_5 = Instruction.new({project_id: carft_project3.id, instruction_step: 5, title: '', body: "Fold the triangle on the corner of one end inward. The triangle on the opposite (or diagonal) side should be folded inward too." })

carft_project3_step_6 = Instruction.new({project_id: carft_project3.id, instruction_step: 6, title: '', body: "Bring the two top corners together. Make sure you’re folding inward like the left picture above! When you put the two together, they should not end up on top of the triangle as seen in the right picture." })

carft_project3_step_7 = Instruction.new({project_id: carft_project3.id, instruction_step: 7, title: '', body: "The three sections of paper that I have shown in the first picture should go under the folded triangle you made in step 5. You may lift the folded section to tuck in the three pieces if needed." })

carft_project3_step_8 = Instruction.new({project_id: carft_project3.id, instruction_step: 8, title: '', body: "Pop in the middle crease, put the two newly made triangles together, place it down, and you are done! Well … at least with the first shape. Now just make 26 more to make some JAM approved paper wall art!" })

carft_project3_step_9 = Instruction.new({project_id: carft_project3.id, instruction_step: 9, title: '', body: "But really, you can do whatever you want with these double triangles! Make them smaller if you’re looking for a smaller art piece, make them bigger (with our Tabloid Sized Paper) for a bigger one. Or use a standard sheet and just keep adding and adding and adding to make your own shape!" })





carft3_step_1 = File.open("app/assets/images/non_instrucable_seeds/DIY- Geometric Paper Wall Art/step_1.jpg")
carft_project3_step_1.media.attach(io: carft3_step_1, filename: "step_1.jpg")
carft3_step_2 = File.open("app/assets/images/non_instrucable_seeds/DIY- Geometric Paper Wall Art/step_2.jpg")
carft_project3_step_2.media.attach(io: carft3_step_2, filename: "step_2.jpg")
carft3_step_3 = File.open("app/assets/images/non_instrucable_seeds/DIY- Geometric Paper Wall Art/step_3.jpg")
carft_project3_step_3.media.attach(io: carft3_step_3, filename: "step_3.jpg")
carft3_step_4 = File.open("app/assets/images/non_instrucable_seeds/DIY- Geometric Paper Wall Art/step_4.jpg")
carft_project3_step_4.media.attach(io: carft3_step_4, filename: "step_4.jpg")
carft3_step_5 = File.open("app/assets/images/non_instrucable_seeds/DIY- Geometric Paper Wall Art/step 5.jpg")
carft_project3_step_5.media.attach(io: carft3_step_5, filename: "step 5.jpg")
carft3_step_6 = File.open("app/assets/images/non_instrucable_seeds/DIY- Geometric Paper Wall Art/step 6.jpg")
carft_project3_step_6.media.attach(io: carft3_step_6, filename: "step 6.jpg")
carft3_step_7 = File.open("app/assets/images/non_instrucable_seeds/DIY- Geometric Paper Wall Art/step_7.jpg")
carft_project3_step_7.media.attach(io: carft3_step_7, filename: "step_7.jpg")
carft3_step_8 = File.open("app/assets/images/non_instrucable_seeds/DIY- Geometric Paper Wall Art/step_8.jpg")
carft_project3_step_8.media.attach(io: carft3_step_8, filename: "step_8.jpg")
carft3_step_9 = File.open("app/assets/images/non_instrucable_seeds/DIY- Geometric Paper Wall Art/step 9.png")
carft_project3_step_9.media.attach(io: carft3_step_9, filename: "step 9.png")

carft_project3_step_1.save!
carft_project3_step_2.save!
carft_project3_step_3.save!
carft_project3_step_4.save!
carft_project3_step_5.save!
carft_project3_step_6.save!
carft_project3_step_7.save!
carft_project3_step_8.save!
carft_project3_step_9.save!
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
