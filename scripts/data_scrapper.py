import csv
import requests

def get_data(url=None,file_path = None):
    CSV_URL = url
    with requests.Session() as s:
        download = s.get(CSV_URL)

        decoded_content = download.content.decode('utf-8')

        cr = csv.reader(decoded_content.splitlines(), delimiter=',')
        my_list = list(cr)

        with open(file_path,'w', newline='') as file:
            writer = csv.writer(file)
            for row in my_list:
                writer.writerow(row)

get_data(url='https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv', file_path='us-counties-refactored.csv')

get_data(url='https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-states.csv',file_path='us-states-refactored.csv')

get_data(url='https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us.csv',file_path='us-refactored.csv')