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
demo = User.create!(username: 'Demo-Man', email: 'Demo@demo.com', age: '09/15/1991', password: 123456)
demo.picture.attach(io: defaultProfilePicture, filename: 'user_profile_pic.png')
demo.save!

Project.create!(title: 'Seed Project', author_id: demo.id, view_count: 0, featured: false)
Project.create!(title: 'Seed2 Project', author_id: demo.id, view_count: 0, featured: false)
Project.create!(title: 'Seed3 Project', author_id: demo.id, view_count: 0, featured: false)
