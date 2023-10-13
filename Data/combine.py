# Create a dictionary to store life expectancy data
life_expectancy_dict = {}

# Read life expectancy data into the dictionary
with open('data/migration-flows.csv', 'r') as file_content, open("data/clean-migration-data.csv", "w") as output_file:
    i=0
    output_index = []
    countries_list=[]
    year_list=[1990, 1995, 2000, 2005, 2010, 2015, 2020]
    for line2 in file_content:
        line2 = line2.strip()
        my_list2 = line2.split(",")
        while i < 1:
            for x in range(len(my_list2)):
                if my_list2[x].__contains__("Immigrants"):
                    output_index.append(x)
            
            for y in output_index:
                countries_list.append(my_list2[y].replace('Immigrants to ',''))
            """ out=''
            for g in range(len(countries_list)):
                if g == len(countries_list)-1:
                    out += countries_list[g]
                else:
                    out += countries_list[g]+','
            
            output_file.write(out+'\n')
            i+=1 """
            i+=1

        t=0
        if my_list2[0] != 'Year':
            out=0
            for j in output_index:
                if(my_list2[j]!= ''):
                    if(int(my_list2[j]) <0):
                        out = int(my_list2[j]) * -1
                    else:
                        out = my_list2[j]
                else:
                    out = 0
                     
                output_line = my_list2[0]+','+my_list2[1]+','+countries_list[t]+','+str(out)
                output_file.write(output_line+'\n')
                t+=1
        
        
        

        
        #my_list2 = line2.split(",")
        #pays2 = my_list2[3]
        #year2 = my_list2[5]
        #life_expectancy_dict[(pays2, year2)] = line2

# Open the final output file for writing
"""with open("data/clean-migration-data.csv", "w") as output_file:
    for line in output_file:
        line = line.strip()
        my_list = line.split(",")
        pays = my_list[0]
        year = my_list[2]
        key = (pays, year)
        
        if key in life_expectancy_dict:
            line2 = life_expectancy_dict[key]
            merged_line = line + line2
            final_file.write(merged_line + '\n') """

