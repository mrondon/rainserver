import RPi.GPIO as GPIO ## Import GPIO library
import time
GPIO.setmode(GPIO.BCM) ## Use board pin numbering
GPIO.setup(17, GPIO.OUT) ## Setup GPIO Pin 7 to OUT


GPIO.output(17,0) ## Turn on GPIO pin 7
 
GPIO.cleanup() 
