# use scrapy to scrape https://it.co.lancaster.pa.us/SPS/Public
# i have to make a post request with LastName and FirstName, Smith and John
# i need to check if there is the table after the request
# retrieve the data from the second tr and so on, because the first tr is the header
# check the xpath after parsin the html to xml

import scrapy
import requests
import json
import lxml.html

# remember that the post request is to a formData with only the 2 parameters from above

def request():
    url = "https://it.co.lancaster.pa.us/SPS/Public"
    data = {
        "LastName": "Smith",
        "FirstName": "John"
    }
    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    response = requests.post(url, data=data, headers=headers)

    # parse the html to xml
    html = lxml.html.fromstring(response.text)

    status = html.xpath("boolean(//table[contains(text(), PIN)])")

    # parsers
    if status:
        print("The table is present")
        count_tr = html.xpath("count(//table/tr) > 1")

        for i in range(2, count_tr + 1):
            data = html.xpath("//table/tr[{}]/td/text()".format(i))
            print(data)


    else:
        print("The table is not present")

request()