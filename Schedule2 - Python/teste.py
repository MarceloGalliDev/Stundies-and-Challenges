from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer

chatbot = ChatBot('Mariane')

trainers = ListTrainer(chatbot)

trainers.train([
  'Hello',
  'How are you?',
  'I am good, and you?'])

while True:
  request = input('You: ')
  response = chatbot.get_response(request)
  print('Mariane: ', response)