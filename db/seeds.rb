# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'Demo-Man', email: 'Demo@demo.com', age: '09/15/1991', password_digest: "$2a$10$Tq6BLgaCVdKNMnka.W7MoemtaHh.gVXo6GT/iLHsrb42/g5AKrZPu")

Project.create(title: 'Third Project', author_id: 7, view_count: 0, featured: false)
