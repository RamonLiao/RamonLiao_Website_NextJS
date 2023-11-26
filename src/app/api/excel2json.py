import pandas as pd
import os
import json

dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, 'portfolio_data.xlsx')

df = pd.read_excel(filename, sheet_name='Projects')

# json_str = df.to_json(orient='records', indent=4)

json_str = (df.groupby(['projectName','category','description','author','architecture','languages','frameworks','databases','others','repoLink','demoLink','coverLink'])
     .apply(lambda x: x[['languages','frameworks', 'databases', 'others']]
     .to_dict('records'))
     .reset_index().rename(columns={0:'techniques'})
     .to_json(orient='records', indent=4))


# print(json_str)
result = json.loads(json_str)

path_json = os.path.join(dirname, 'projects.json')
with open(path_json, 'w') as json_file:
    # json_file.write(json_str)
    json.dump(result, json_file)
