# -*- coding: utf-8 -*-
import threading
from sqlite3 import connect
import time
import speech_recognition as sr
import pyttsx3 
import cv2
from chatterbot.trainers import ListTrainer
from chatterbot import ChatBot

AMGbot = ChatBot("Assistente Mil Grau")

# texto inicial, com as conversas o bot vai ficando mais inteligente
conversa1 = ['oi','olá','olá bom dia', 'bom dia', 'como vai?','estou bem']
conversa2 = ['e aí?','fala mano','vai lá na parada?', 'nem vou', 'e as criança?','dormindo']

treinar = ListTrainer(AMGbot)
treinar.train(conversa1)
treinar.train(conversa2)

r = sr.Recognizer()

mic = sr.Microphone(0) # 0 = microfone embutido


mensagensRecebidas = 1

desligarCameraThread = False
desligarVozThread = False

falarTexto = False
textoRecebido = ""
textoFalado = ""

nuncaTeVi = True
jaTeVi = False

def handle_data(data):
    global mensagensRecebidas, falarTexto, textoRecebido
    print("Recebi " + str(mensagensRecebidas) + ": " + data)
    
    mensagensRecebidas += 1
    textoRecebido = data
    
    falarTexto = True

def conectaCamera():
    global desligarCameraThread, nuncaTeVi, jaTeVi
    classificador = cv2.CascadeClassifier(
        "cascades/haarcascade_frontalface_default.xml")
    webCam = cv2.VideoCapture(0)
    while(True):
        conectou, imagem = webCam.read()
        
        alturaImagem, larguraImagem = imagem.shape[:2]
        
        converteuCinza = cv2.cvtColor(imagem, cv2.COLOR_BGR2GRAY)
        
        encontrarFaces = classificador.detectMultiScale(converteuCinza,
                                                        scaleFactor=1.10,
                                                        minSize=(50,50),
                                                        maxSize=(400,400))
        cor = (0,0,255)
        for(origemX, origemY, largura, altura) in encontrarFaces:
            cv2.rectangle(imagem,(origemX,origemY),
                          (origemX + largura, origemY + altura),
                          cor,2)
            
            if nuncaTeVi: # quando a camera te ver pela primeira vez
                time.sleep(0.5)
                nuncaTeVi = False
                jaTeVi = True
            
            raio = 4
            centroRosto = (origemX + int(largura/2),origemY + int(altura/2))
            cv2.circle(imagem, centroRosto, raio, cor)
            
            # Normalizar = deixa valores entre zero até um
            normalizarZeroAteUm = int(larguraImagem/2)
            # Correção = transforma valores para 1 até 10
            fatorDeCorrecao = 10
            
            erroCentro = (((centroRosto[0] - (larguraImagem/2))
            /normalizarZeroAteUm) * fatorDeCorrecao)

        cv2.imshow("Rosto", imagem)

        teclou = cv2.waitKey(1) & 0xFF
        if desligarCameraThread:
            webCam.release()
            cv2.destroyAllWindows()
            print("Desligando camera")
            break
        

    
def falar():
    global jaTeVi, falarTexto, textoRecebido, textoFalado
    
    engine = pyttsx3.init()
    
    voices = engine.getProperty('voices')
    engine.setProperty('rate', 150) # velocidade 120 = lento
    contar = 0
    for vozes in voices: # listar vozes
        print(contar, vozes.name)
        contar+=1
    
    voz = 2
    engine.setProperty('voice', voices[voz].id)
    


    while True:
        if desligarVozThread:
            engine.stop()
            break
        if jaTeVi:
            engine.say("Olá Marcelo")
            engine.runAndWait()
            jaTeVi = False
        if falarTexto:
            if textoRecebido != "":
                engine.say(textoRecebido)
                engine.runAndWait()
                textoRecebido = ""
            elif textoFalado != "":
                resposta = AMGbot.get_response(textoFalado)
                print("Assistente: " + str(resposta))
                engine.say(resposta)
                engine.runAndWait()
                textoFalado = ""
            
            falarTexto = False

def desligando():
    global desligarCameraThread, desligarVozThread
    
    desligarCameraThread = True
    desligarVozThread = True
    falarVozThread.join()
    
    print("Tudo desligado")

ligaCamera = True
if ligaCamera:
    try:
        cameraLigadaThread = threading.Thread(target=conectaCamera)
        cameraLigadaThread.start()
    except:
        print("sem câmera")
        
falarVozes = True
if falarVozes:
    try:
        falarVozThread = threading.Thread(target=falar)
        falarVozThread.start()
    except:
        print("sem mic")

while(nuncaTeVi): # só conversa depois de ver a pessoa
        pass

while (True):
    
    try:
        with mic as fonte:
            r.adjust_for_ambient_noise(fonte)
            print("Fale alguma coisa")
            audio = r.listen(fonte)
            print("Enviando para reconhecimento")
        try:
            text = r.recognize_google(audio, language= "en").lower()
            print("Você disse: {}".format(text))

            print("Dado enviado")
            if(text.startswith("desativar")):
                print("Saindo")
                
                desativando = "Assistente mil grau desativando."
                textoRecebido = desativando
                textoFalado = desativando

                desligando()
                break
            
            # retirar os textos que são comandos especiais
            if text != "" and not text.startswith("ligar") and \
            not text.startswith("desligar") \
            and not text.startswith("desativar"):
                textoFalado = text
                falarTexto = True
        except:
            print("Não entendi o que você disse\n")

    except (KeyboardInterrupt, SystemExit):
        print("Apertou Ctrl+C")
        desligando()
        break