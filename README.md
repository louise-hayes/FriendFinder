
#To Start
npm start

# To run unit testing
npm test

#Description
This App is a full stack Javascript, HTML, CSS, Node and Epress 'Friend Finding' App.
THis full-stack site client-server application that takes in results from your users' surveys, then compares their answers with those from other users. The app then displays the name and picture of the user with the best overall match.

How the App works:
Upon launching the FriendFinder App the user will be presented with a button to click to launch a survey.

This will route the user via htmlRoutes.js to a survey questionnaire which is a HTML Form Input in survey.html

Once the user has entered a name, image URL and answered the 10 personality drop down questions, the App will POST this information via AJAX POST using Exporess Routing from apiRoutes.js to a utility function from required from utils.js that checks the scores against all friends in a friends.js  array of objects. The friends with the lowest difference (lowest score) is the match. This is presented in a Modal to the user as the best match.

#To laucnh from heroku: 

https://secret-mesa-65524.herokuapp.com/

#Heroku Repo:
heroku  https://git.heroku.com/secret-mesa-65524.git (fetch)
heroku  https://git.heroku.com/secret-mesa-65524.git (push)



#Github Repo:
origin  https://github.com/louise-hayes/FriendFinder.git (fetch)
origin  https://github.com/louise-hayes/FriendFinder.git (push)


#Files:
Server.js
app/friends.js
    data/
    public/home.html, survey.html
    routing/apiRoutes.js, htmlRoutes.js
    utilities/utils.js
test/utils.js



