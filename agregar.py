import pandas as pd 
# Read data from file 'filename.csv' 
# (in the same directory that your python process is based)
# Control delimiters, rows, column names with read_csv (see later) 
data = pd.read_csv("data.csv") 
# Preview the first 5 lines of the loaded data 
def conver(data):
  out = data.to_json(orient='records')[1:-1].replace('},{', '},{')
  with open('file.json', 'w') as f:
    f.write(out)

nb = data.drop('Cantidad',1)
conver(nb)