header = ['Meal_Id','Name','catagory','description','Veg_Non','Nutrient','Disease','Diet','Price']
data = ['Duprez','Andrée', 'Duprez.andr@gmail.com', '1669987744','Andrée','Andrée','Andrée','Andrée','Andrée']

with open('dataset.csv', 'a', encoding='UTF8') as f:
    writer = csv.writer(f)

    # write the header
    writer.writerow(header)

    # write the data
    writer.writerow(data)