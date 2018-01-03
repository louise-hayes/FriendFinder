
#To Start
npm start

# To run unit testing
npm test

test files:
root/test/utils.js (tests the functions compareScores and findMatch from utilities/utils.js)
np[m mocha is installed from package.json

#Description
This App is a full stack Javascript, HTML, CSS, Node and Epress 'Friend Finding' App.
THis full-stack site client-server application that takes in results from your users' surveys, then compares their answers with those from other users. The app then displays the name and picture of the user with the best overall match.

How the App works:
Upon launching the FriendFinder App the user will be presented with a button to click to launch a survey.

This will route the user via htmlRoutes.js to a survey questionnaire which is a HTML Form Input in survey.html

Once the user has entered a name, image URL and answered the 10 personality drop down questions, the App will 
- POST this information via AJAX POST using Express Routing from apiRoutes.js 
- using a utility function required from /app/utilities/utils.js that compares the scores against all friends in a friends.js  array of objects and finds a match based on the index of the lowest friend score. The friends with the lowest difference (lowest score) is the match. This is presented in a Modal to the user as the best match.

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



