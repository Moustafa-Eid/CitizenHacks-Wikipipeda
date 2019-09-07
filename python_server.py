import requests
import re
from bs4 import BeautifulSoup

url = "https://www.facebook.com/legal/terms/update"
r = requests.get(url)

print(r.text + "\n")

# remove the header information
if "facebook" in url:
    print(r.text[19])
    tester = [m.start() for m in re.finditer('terms of service', r.text.lower())]
    print(tester)
    # in steps: remove everything above the first time "terms of service" is mentioned
    tester1 = r.text[tester[0]:]
    print(tester1)
    # remove everything beyond the first "script" call
    tester = [m.start() for m in re.finditer('<script', tester1.lower())]
    tester1 = tester1[:tester[0]]
    print(tester1)
    # remove all tags, just keep the text
    sanitized = BeautifulSoup(tester1, "html.parser")
    print(sanitized.text)
