# musical-engine: Citizen hacks 2019 hack

Welcome to our hack project!!!

We are a small elite team of hackers in the Citizen hacks 2019 hackathon and we shall win this hackathon.

Watch our repo to keep posted!

Check Out Our Devpost for Pics and More Info!
Devpost: https://devpost.com/software/musical-engine

# Inspiration

Have you ever been tasked with reading the long convoluted privacy terms when signing up for a new service? Wondering if there's a service that respects your privacy better than others, while still allowing the same functionality? With Wiki-pipeda these concerns are a thing of the past.

# What it does

Meet wikipipeda bot - a nearly autonomous bot built on the Keybase chat API that helps you determine what's the best online service that will respect your privacy. The in the works web crawler listens for changes in privacy terms within major providers, and aggregates their care about privacy with respect to PIPEDA with a single source of truth: a number from 0 to 10. The closer a score to 10, the better a service will likely respect your privacy.

# How we built it

We worked with the KeyBase API and built out a small server from Python. With this we created our own complex but logically correct algorithm for calculating what factors in a company's wording create a warning sign for privacy and which stand in defense of it.

# Challenges we ran into

There were three major challenges that we overcame throughout this project. The first was working on actually improving the KeyBase API - we worked to create a new method that allows file transfers to the BOT! 
The second was our initial obtaining of data from the internet - unstructured data that has to be parsed in an equal way is quite difficult and we had to elect to use some strict heuristics.
Lastly was our choice of how to appropriately represent PIPEDA - focus on which pillars, what not? We believe our work sets beginning research into future modules building upon this.

# Accomplishments that we're proud of
- Our first ever chat bot implementation

- Learning of PIPEDA as well as creating a potential standard for representing it online

# What we learned

Working with chat bots is fun and something we'd love to continue to work with the KeyBase API. Working with web crawling techniques in an on-premise scenario is hugely rewarding.

# What's next for Wikipipeda

Version 0.1: developing a cloud native app that retains the same familiar interaction with Keybase users, and is able to scrape more data for better measurements.

# Built With
- python

domain: wikipipeda.tech
