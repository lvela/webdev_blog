# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# This file should contain all the record creation needed to seed the database with its default values.
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

100.times do
  body = ''

  rand(8).times do
    body += "<p>#{LiterateRandomizer.paragraph}<p/> "
  end

  article = Article.create!(title: Faker::Book.title, body: body)

  (1 + rand(10)).times do
    article.comments.create!(body: Faker::ChuckNorris.fact)
  end
end
