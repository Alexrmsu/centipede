import requests
import json
import lxml.html
from libs.timer import timer

@timer
def lancaster():
    url = "https://it.co.lancaster.pa.us/SPS/Public"
    data = {
        "LastName": "S",
        "FirstName": "J"
    }
    headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "PostmanRuntime/7.26.8",
    }
    response = requests.post(url, data=data, headers=headers)

    html = lxml.html.fromstring(response.text)
    status = html.xpath("boolean(//table[contains(text(), PIN)])")

    if status:
        print("The table is present")
        count_tr = len(html.xpath("//table/tr[position() > 1 and position() <= last()]"))
        rows = [list(map(str.strip, html.xpath(f"//table/tr[{i}]/td[position() > 0 and position() <= 8]/text()"))) for i in range(1, count_tr + 2) if html.xpath(f"boolean(//table/tr[{i}]/td[position() > 0 and position() <= 8]/text())")]
        headers = ["PIN", "Name", "DOB", "Race", "Sex", "Commit Date", "Commit Age", "Arresting Agency"]
        data = [{header: row[i] for i, header in enumerate(headers)} for row in rows]
        print(json.dumps(data, indent=2))
    else:
        print("The table is not present")

lancaster()