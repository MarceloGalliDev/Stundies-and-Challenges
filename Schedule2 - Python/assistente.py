# -*- coding: utf-8 -*-
import speech_recognition as sr # pip install SpeechRecognition
import pyttsx3 # pip install pyttsx3


#chatbot
from chatterbot.trainers import ListTrainer # pip install chatterbot
# caso de erro: No module named 'chatterbot_corpus'
# python -m pip install chatterbot-corpus

from chatterbot import ChatBot

AMGbot = ChatBot("Assistente")

# texto inicial, com as conversas o bot vai ficando mais inteligente
conversa1 = ['How are you?','I am good, and you?','I am very good, thank you.']
conversa2 = ['How is your day?',"It's very good, and yours?","It's great"]

trainer = ListTrainer(AMGbot)
trainer.train(conversa1)
trainer.train(conversa2)

#import socket

#voz jarvis
#import win32com.client as comclt
#wsh= comclt.Dispatch("WScript.Shell")
#wsh.AppActivate("MiniSpeech") # select another application

engine = pyttsx3.init()

voices = engine.getProperty('voices')
engine.setProperty('rate', 150) # velocidade 120 = lento
contar = 0
for vozes in voices: # listar vozes
    print(contar, vozes.name)
    contar+=1

voz = 1
engine.setProperty('voice', voices[voz].id)

#IVONA VOICE: RICARDO
#https://harposoftware.com/en/portuguese-brasil/166-ricardo-portuguese-brasilian-voice.html
#https://kripytonianojarvis.com/site/pre-instalacao/

r = sr.Recognizer()

mic = sr.Microphone(0) # 0 = microfone embutido

falarTexto = False
textoFalado = ""


while (True):
    if falarTexto:
        if textoFalado != "":
            resposta = AMGbot.get_response(textoFalado)
            engine.say(resposta)
            engine.runAndWait()
            textoFalado = ""
        
        #voz jarvis
        #wsh.AppActivate("MiniSpeech") # select another application
        #wsh.SendKeys("^a")
        #wsh.SendKeys(textoRecebido)
        #wsh.SendKeys("%{ENTER}")
        
        falarTexto = False
        #time.sleep(3)
    try:
        with mic as fonte:
            r.adjust_for_ambient_noise(fonte)
            print("Fale alguma coisa")
            audio = r.listen(fonte)
            print("Enviando para reconhecimento")
        try:
            text = r.recognize_google(audio, language= "en").lower()
            print("Você disse: {}".format(text))

            if text != "":
                textoFalado = text
                falarTexto = True
            
            print("Dado enviado")
            if(text == "finish"):
                print("Saindo")
                
                desativando = "Ending program."
                
                engine.say(desativando)
                engine.runAndWait()
                
                #voz jarvis
                #wsh.AppActivate("MiniSpeech") # select another application
                #wsh.SendKeys("^a")
                #wsh.SendKeys(desativando)
                #wsh.SendKeys("%{ENTER}")
                
                engine.stop()
                break
        except:
            print("I did not understand, repeat please!\n")
            engine.say("what did you say?")
            engine.runAndWait()
        
        #time.sleep(0.5) # aguarda resposta do arduino
    except (KeyboardInterrupt, SystemExit):
        print("Apertou Ctrl+C")
        engine.stop()
        break
