rem start iexplore.exe http://192.168.2.105:8000
rem cd C:\Users\Benjamin\Documents\GitHub\Kostenverwaltung
rem cd C:\Users\Benjamin\Documents\GitHub\survcam
rem php artisan serv --host 192.168.178.26 --port 8000

start "chrome" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" http://localhost:8000/Site/ --remote-debugging-port=9222 

start "php" php -S localhost:8000