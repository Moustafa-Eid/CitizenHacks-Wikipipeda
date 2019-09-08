import requests
import urllib.request
import re
from bs4 import BeautifulSoup
from tika import parser
import json

# Subroutine for webpages
# Proven that it works for facebook (in current state)
def webpage(url):
    r = requests.get(url)
    # Parse through the text to find "terms of usage"
    try:
        location = [m.start() for m in re.finditer('terms of service', r.text.lower())]
        soup = r.text[location[0]:]
    except:
        return 2

    location = [m.start() for m in re.finditer('terms of service', r.text.lower())]
    soup = r.text[location[0]:]
    location = [m.start() for m in re.finditer('<script>', soup.lower())]

    soup_stripped = soup[:location[0]]
    soup_stripped = BeautifulSoup(soup_stripped, "html.parser").get_text()

    # Prints our desired piece of code!!!
    print(soup_stripped)
    # All text.
    return soup_stripped


def pdf(file_location):
    raw = parser.from_file(file_location)
    print(raw['content'])
    return raw['content']



def analysis(text):
    doc = text
    wordlist = doc.split()
    size = len(wordlist)
    totalSum = 0
    finalRating = 0

    wordfreq = []
    for w in wordlist:
        wordfreq.append(wordlist.count(w))

    dictn = {'privacy': 10, 'security': 9.5, 'policy': 6, 'money': 1, 'safety': 8, 'honesty': 5, 'freedom': 9.5,
             'interference': 5, 'access': 4, 'control': 8, 'ethics': 5, 'ethical':5, 'information': 8, 'data': 6, 'encryption': 9, 'encrypted': 9,
             'personal': 8, 'account': 2, 'ads': 9.5, 'advertisement': 9.5, 'personalize': 8.5, 'protection': 9,
             'law': 7.5, 'laws': 8, 'cookie': 9.5, 'cookies': 9.5, 'private': 7, 'enable': 3, 'connect': 4, 'deactivate': 5, 'delete': 6,
             'spam': 7, 'fraud': 6.5, 'integrity': 9, 'https': 3.5, 'data': 5, 'our': 3, 'store': 8, 'cloud': 3.5, 'secure': 7.5,
             'history': 9, 'share': 9.5, 'permanent': 0.5, 'history': 8, 'violations': 7, 'log': 6, 'logs': 6, 'sending': 7, 'handle': 7.5,
             'handling': 7.5, 'authorities': 2, 'transparency': 10, 'principles': 4.5, 'legislation': 1.5}


    for k in range(len(dictn)):
        nKey = list(dictn)[k]
        for i in range(len(wordlist)):
            if wordlist[i].lower() == nKey.lower():
                totalSum += wordfreq[i] * dictn[nKey]
        finalRating = totalSum / size
    return finalRating

