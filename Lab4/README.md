Lab 4:

URL: http://51.105.196.205/

Nachdem die azure kubernetes cli heruntergeladen wurde(az aks install-cli)
Und die credentials gegetted wurden(az aks get-credentials --resource-group fhwn20 --name fhwn20)
Kann direkt gestartet werden(kubectl befehle werden nun automatisch auf unser angelegtes azure Kubernetes Service angewandt).

Mit "kubectl get all" sollte zur zeit nur das standart service "service/kubernetes" erscheinen.

![get all before command](https://github.com/MatthiasMan/FH_MatthiasM_SoftwareDepl/blob/main/Lab4/getllstart.PNG?raw=true)

Zuerst werden die 2 .yaml files (mysql.yaml & wordpress.yaml) angelegt.

Nun sollte zu dem Directory in dem die Files sind navigiert werden und 
"kubectl apply -f ./" eingegeben werden.
Kubernetes sucht nun im derzeitigen(bzw. angegebenen) Pfad alle ausführbaren yaml files welche ein gewisses Shema haben und führt diese aus.
alternativ könnte man auch "kubectl apply -f mysql.yaml" & "kubectl apply -f wordpress.yaml" eingeben, welches die Pods, Services, deployments und replicasets anlegt.

Nach einer warteZeit(dies kann einige minuten dauern), sollte bei erneuter eingabe von "kubectl get all", folgendes sichtbar sein:

![cluster](https://github.com/MatthiasMan/FH_MatthiasM_SoftwareDepl/blob/main/Lab4/Clusterr.PNG?raw=true)

Hierbei sind die 2 erstellten Pods, Services, Deployments und Replicasets zu sehen, einmal für mysql und einmal für wordpress;
(replicasets haben den Zweck, dass die laufenden Pods stabil bleiben)

In Azure können unsere uploads nun auch unter "Workloads", sowie "Dienste und eingehende Elemente" des Kubernetes Services betrachtet werden.

![workloads](https://github.com/MatthiasMan/FH_MatthiasM_SoftwareDepl/blob/main/Lab4/workloadss.PNG?raw=true)
![dienste](https://github.com/MatthiasMan/FH_MatthiasM_SoftwareDepl/blob/main/Lab4/dienstee.PNG?raw=true)

Nun kann die Externe IP-Adresse unseres wordpress Services besucht werden:
 
http://51.105.196.205/

![dienste](https://github.com/MatthiasMan/FH_MatthiasM_SoftwareDepl/blob/main/Lab4/Screenshott.PNG?raw=true)
