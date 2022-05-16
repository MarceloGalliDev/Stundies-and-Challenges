from sqlite3 import connect
import cv2 #import library OpenCV
#import Serial


print("OpenCV Version: ", cv2.__version__)

classifier = cv2.CascadeClassifier("cascades/haarcascade_frontalface_default.xml")
webCam = cv2.VideoCapture(0)

while (True): #capture an image and run the code and then again
  connect, image = webCam.read()
  heightImage, widthImage = image.shape[:2]

  convertGray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)#BGR2GRAY - is slang the 2(two) = too
  
  findFace = classifier.detectMultiScale(convertGray, scaleFactor=1.10, minSize=(50,50), maxSize=(400,400))
  #this code, detect various sizes of faces
  #every loop it looks for a scale size up to the indicated size, which is minSize 150x150 and maxSize 200x200
  #depends on the distance from the webcam

  color = (0, 0, 250) #color wrapped around the face
  for(originX, originY, width, height) in findFace:
    cv2.rectangle(image,(originX, originY),(originX + width, originY + height), color,2)#2 = line width
    radius = 4
    centerFace = (originX + int(width/2), originY + int(height/2))
    cv2.circle(image, centerFace, radius, color)

    #normalizeZeroToOne = 1 #normalize = values between 0 and 1
    #correctionFactor = 1 #from 1 to 10
    
    
    #errorCenter = (((centerFace[0] - (widthImage/2))/normalizeZeroToOne) * correctionFactor)
    #print(errorCenter)
    #errorCenter = int(errorCenter)
    #try:
    #  if onArduino:
    #    SerialArduino.write(('servo' + str(errorCenter) + '\n').en)
    #except:
    #  print("Not send")

    print("Height", height, "Width",width)
  cv2.imshow("Face", image)
  #in the code,

  pressButtonQ = cv2.waitKey(1) & 0xFF
  if pressButtonQ == ord('q') or pressButtonQ ==27: #If you press Esc or 'q' button.
    break

webCam.release()
cv2.destroyAllWindows()