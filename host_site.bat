rem start iexplore.exe http://192.168.2.105:8000
rem cd C:\Users\Benjamin\Documents\GitHub\Kostenverwaltung
rem cd C:\Users\Benjamin\Documents\GitHub\survcam
rem php artisan serv --host 192.168.178.26 --port 8000

start "api" php_api.bat
start "site" php_site.bat
rem start "npm" _npm.bat
start "code" code ./

start "chrome" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" http://localhost:8001/ --remote-debugging-port=9222 
exit