Teil 1:
Die Aufgabe hier ist es einen Wordpress Container mit MySQL Datenbank (mithilfe von Images) aufzusetzen.
Um den container zu deployen, folgenden Befehl in die powershell eingeben:

docker-compose up -d 

Hierbei kreiert und startet das "up" die container und das "-d" steht für detached.
Nun sollte bei eingabe von "docker ps" der neu angelegten container sichtbar sein


Teil 2:
Die Aufgabe ist hier fast wie Teil 1.
Diesmal dürfen jedoch nicht die bereitgestellten Images verwendet werden.
Diese Images sollen diesmal selbst erstellt werden.

Um die images zu builden muss folgender Befehl eingegeben werden.

docker build [path]

Dies ist jedoch nicht unbedingt notwendig, wenn schluss endlich der container das resultat seien sollen.
Bei dem docker-compose.yaml werden nämlich automatisch die images gebuildet.(falls noch nicht gebuildet)
Das deployen der Container wird wieder mit folgendem Befehl erreicht:

docker-compose up -d 