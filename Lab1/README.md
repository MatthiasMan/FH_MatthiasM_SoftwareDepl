az group create --name MyMMGroup --location "North Europe"
az deployment group create --name MyMMDeployment --resource-group MyMMGroup --template-file ./Lab1/azuredeploy.json --parameters ./Lab1/azuredeploy.parameters.json
https://mymmwebapp.azurewebsites.net/



1) enter the first line to create the resource-group (cmd)
2) enter the second line to create and add a storage account and a web App to the resource group (cmd)
3) deploy your web App to the web App (for example with "Azure App Service" and "Azure Account" extension in VS Code)
4) enter the third line into the browser to see the result