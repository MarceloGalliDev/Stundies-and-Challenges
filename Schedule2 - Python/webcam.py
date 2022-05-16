from sqlite3 import connect
import cv2
#import library OpenCV
print("OpenCV Version: ", cv2.__version__)

webCam = cv2.VideoCapture(0)

while (True):
  connect, image = webCam.read()
  cv2.imshow("Face", image)

  pressButtonQ = cv2.waitKey(1) & 0xFF
  if pressButtonQ == ord('q') or pressButtonQ ==27: #If you press Esc or 'q' button.
    break

webCam.release()
cv2.destroyAllWindows()