10.times do
  Department.create(
    name: Faker::Commerce.department
  )

  Item.create(
    name: Faker::Commerce.product_name
  )
end


puts "Seeded done"