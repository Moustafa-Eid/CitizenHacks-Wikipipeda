
doc = 'Privacy is all about freedom and control'
wordlist = doc.split()
size = len(wordlist)
totalSum = 0
finalRating = 0

wordfreq = []
for w in wordlist:
    wordfreq.append(wordlist.count(w))

dictn = {'privacy': 10, 'security': 9.5, 'policy': 6, 'money': 0, 'safety': 8, 'honesty': 5, 'freedom': 9.5,
         'interference': 5, 'access': 4, 'control': 8}

for k in range(len(dictn)):
    nKey = list(dictn)[k]
    for i in range(len(wordlist)):
        if wordlist[i].lower() == nKey.lower():
            totalSum += wordfreq[i] * dictn[nKey]
    finalRating = totalSum / size
print(finalRating)