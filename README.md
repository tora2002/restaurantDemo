# Restaurant Demo: Project Specification

## Objective
Provide a platform to help users decide on restaurants and select the items depending on your preference.

## Motivation
Users are able to decide restaurants/menu items based on location, price range, cuisine, meal time, while providing a platform for the resturants to show their own menu items/price

## Technologies
Frontend: React.js
Backend: Flask
Database: MongoDB

## User Interface
Figma File Link
https://www.figma.com/file/pbIFqzu26k8dEbJF2o33GA/Build-the-Future-Restaurant-Demo-Design?node-id=0-1&t=L9lcVhYuB3drnZuu-0


## App Runthrough
A new user creates an account and logs into the app. They are now given the ability to upload new food to the database. The users are prompted with a food cards (based on the preferences that were set previously) where they can choose to swipe left to drop the food or swipe right to like the food. Same ~20 cards will be displayed to each memeber. If a member finishes swiping early, they are redirected to the Waiting for Others Page. Once all members finish, they are all directed to the Final Decision Page where they are matched with a food card based on the card that was liked the most. Upon a tie, both cards will be shown. Now everyones happy :D.

