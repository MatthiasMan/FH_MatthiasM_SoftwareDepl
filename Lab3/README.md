Teil 1:
Die Aufgabe hier ist es die Software Wordpress mit externer MySQL DB (mithilfe von fertigen Images) in 2 Containern aufzusetzen.
Zuerst muss mittels "docker pull mysql" und "docker pull wordpress" die fertigen images heruntergeladen werden. 
(falls dies nicht gemacht wird werden die Images später durch das yaml file automatisch gepulled)
Um die container zu deployen, folgenden Befehl in die powershell eingeben:

docker-compose up -d 

Hierbei kreiert und startet das "up" die container und das "-d" steht für detached.
Nun sollte bei eingabe von "docker ps" die neu angelegten container sichtbar sein

Wordpress kann nun über den Browser über http://localhost:8080 zugegriffen werden.

Teil 2:
Die Aufgabe ist hier ähnlich wie Teil 1.
Diesmal dürfen jedoch nicht die bereitgestellten Images verwendet werden.
Diese Images sollen diesmal selbst auf basis von debian jessie erstellt werden.

Um die images zu builden muss folgender Befehl eingegeben werden.

docker build [path]

Dies ist jedoch nicht unbedingt notwendig, wenn schluss endlich der container das resultat seien sollen.
Bei dem docker-compose.yaml werden nämlich automatisch die images gebuildet.(falls noch nicht gebuildet)
Das deployen der Container wird wieder mit folgendem Befehl erreicht:

docker-compose up -d 

Worpress kann nun über den Browser über http://localhost:80 zugegriffen werden.