import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time

Client = discord.Client()
client = commands.Bot(command_prefix = "?")

chat_filter = ["NIGGER", "CUNT", "PENIS", "VAGINA", "SEX", "FUCK", "FAGGOT", "GAY", "LESBIAN", "FCK"]
bypass_list = []

@client.event
async def on_ready() :
    await client.change_presence(game=discord.Game(name='Piro nigga'))
    print("Bot is ready!")

@client.event
async def on_message(message):
    contents = message.content.split(" ") #contents is a list type
    for word in contents:
        if word.upper() in chat_filter:
            if not message.author.id in bypass_list:
                await client.delete_message(message)
                await client.send_message(message.channel, "Hey! You are not allowed to use that word here!")
                await client.process_commands(message)

newUserMessage = """
Hello! Welcome to the server!
"""
    
@client.event
async def on_member_join(member):
    print("Recognised that a member called " + member.name + " joined")
    await client.send_message(member, "Welcome to the server!")
    print("Sent message to " + member.name)
    
@client.event
async def on_message(message):
 if message.content.startswith('ping'):
   await client.send_message(message.channel, 'pong')
   await client.process_commands(message)


client.login(process.env.BOT_TOKEN);
    
