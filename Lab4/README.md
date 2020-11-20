Lab 4:

Nachdem die azure kubernetes cli heruntergeladen wurde(az aks install-cli)
Und die credentials gegetted wurden(az aks get-credentials --resource-group fhwn20 --name fhwn20)
Kann direkt gestartet werden(kubectl befehle werden nun automatisch auf unser angelegtes azure Kubernetes Service angewandt).

Mit "kubectl get all" sollte zur zeit nur das standart service "service/kubernetes" erscheinen.

![get all before command](https://github.com/MatthiasMan/FH_MatthiasM_SoftwareDepl/blob/main/Lab4/getllstart.PNG?raw=true)

Zuerst werden die 2 .yaml files (mysql.yaml & wordpress.yaml) angelegt.

Nun sollte zu dem Directory in dem die Files sind navigiert werden und 
"kubectl apply -f ./" eingegeben werden.
Kubernetes sucht nun im derzeitigen(bzw. angegebenen) Pfad alle ausführbare yaml files welche ein gewisses Shema haben und führt diese aus.
alternativ könnte man auch "kubectl apply -f mysql.yaml" & "kubectl apply -f wordpress.yaml" eingeben, welches die Services, deployments und volume-claims anlegt.

Nach einer warteZeit(dies kann einige minuten dauern), sollte bei erneuter eingabe von "kubectl get all", folgendes sichtbar sein:

![getallafter command](https://github.com/MatthiasMan/FH_MatthiasM_SoftwareDepl/blob/main/Lab4/getallafter.PNG?raw=true)

Hierbei sind die 2 erstellten Pods zu sehen, einmal für mysql und einmal für wordpress
die 2 erstellten services für mysl und wordpress
die erstellten deployments
und die replicasets, welche den Zweck haben, dass die laufenden Pods stabil bleiben

In Azure können unsere uploads nun auch unter "Workloads", sowie "Dienste und eingehende Elemente" des Kubernetes Services betrachtet werden.

![workloads](https://github.com/MatthiasMan/FH_MatthiasM_SoftwareDepl/blob/main/Lab4/workloads.PNG?raw=true)
![dienste](https://github.com/MatthiasMan/FH_MatthiasM_SoftwareDepl/blob/main/Lab4/dienste.PNG?raw=true)

Nun kann die Externe IP-Adresse unseres wordpress Services besucht werden. In meinem Fall ist dies:
 
20.71.66.160

![dienste](https://github.com/MatthiasMan/FH_MatthiasM_SoftwareDepl/blob/main/Lab4/Screenshot.PNG?raw=true)
