<div align="center">
  <img src="https://github.com/RoarshacH/AssessmentShipVistaPlants/blob/master/ShipVistaLogo.png" alt="logo" width="200" height="auto" />
  <h1>Shipvista Assessment</h1>
</div>

- User can see a list of plants on a web page, as well as their watering status
- User can art and stop watering of a plant. A plant takes 10 seconds to water
- The system supportswatering multiple plants at the same time
- Plants need to rest from watering, user is not be able to water the plant again within 30 seconds of the last watering session
- User will be visually alerted if a plant hasn’t been watered for more than 6 hours

<p>I used SQLITE as backend so no need to do any DB query To restore the data</p>
<p>I tested the app arond 4:20PM 19th April EST So The Last Waterd Time will be that. Wait after 10:20PM EST on the same day to get the alerts. Considering when you will open it it will have the Alert </p>
<p>I did not made the UI beautiful its just functional</p>
<p>I did not implement Redux completely</p>

    
<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Prerequisites

This project uses npm as package manager

<!-- Installation -->
### :gear: Installation

1. Downlord The Repo
2. Install Prereq For react Front End
```bash
  cd shipvista-plants-react
  npm install   
```
3. Open the Backend (ShipVistaPlants) API in Visual Studio
4. Run The Backend API with Visual Studio (it will install the nuget packages automatically)
5. It will run on localhost:44310
6. Go to front end folder (shipvista-plants-react)
```bash
  cd shipvista-plants-react 
```
7. Start the server for react app
```bash
  npm start  
```
or
```bash
  yarn start  
```
8. it will Start on localhost:3000
9. It will Load the 5 Plans and its details as cards
10. Click On Water the Plant to Water It you can stop it by clicking stop Watering

#### Note
if your API start on differnt port change the env varable in
- shipvista-plants-react/.env -> REACT_APP_API_BASE_URL


