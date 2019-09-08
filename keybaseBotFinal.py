import asyncio
import logging
import os
import sys
import requests


import pykeybasebot.types.chat1 as chat1
from pykeybasebot import Bot
from python_serverFinal import pdf, webpage, analysis


logging.basicConfig(level=logging.DEBUG)

if 'win32' in sys.platform:
    asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())

def process_file(filename,filetype):
    if filetype == ".pdf":
       rating = analysis(pdf(filename))
    elif filetype == ".html":
       rating = analysis(webpage(filename))
    return "This is the PIPEDA based rating for this document: " + str(rating)

class Handler:
    async def __call__(self, bot, event):
        if event.msg.content.type_name == chat1.MessageTypeStrings.ATTACHMENT.value:
            channel = event.msg.channel
            msg_id = event.msg.id
            filename = f"C:\\Users\\ugpg2\\Desktop\\KeybotFile\\{event.msg.content.attachment.object.filename}"
            await bot.chat.download(channel, msg_id, filename)
            # quick test to check if the file type is an actual link
            filetype = os.path.splitext(filename)[1]
            response = process_file(filename,filetype)
            await bot.chat.send(channel,"Analyzing Your File")
            await bot.chat.send(channel, response)
        else:
            try:
                r = requests.get(event.msg.content.text.body)
                process_file(event.msg.content.text.body, ".html")
                return 0
            except:
                return_param = print("Error encountered")

        if event.msg.content.type_name != chat1.MessageTypeStrings.TEXT.value:
            return
        if (event.msg.content.text.body).lower() == "hi" or (event.msg.content.text.body).lower() == "hello" or (event.msg.content.text.body).lower() == "howdy" or (event.msg.content.text.body).lower() == "hey" :
            channel = event.msg.channel
            await bot.chat.send(channel, "Salutations! What can I help you with today? (Please Attach a PDF File or Web URL for Analysis)")



listen_options = {
    "local": True,
    "wallet": True,
    "dev": True,
    "hide-exploding": False,
    "filter_channel": None,
    "filter_channels": None,
}

bot = Bot(
    username="momo2000", paperkey="popular electric common popular argue absent rate yellow always similar engine labor million", handler=Handler()
)

asyncio.run(bot.start(listen_options))