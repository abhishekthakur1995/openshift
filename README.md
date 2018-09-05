#MINIMAL NODEJS SETUP FOR OPENSHIFT REDHAT

#REQUIREMENT
git
node > v8
oc (openshift console)

STEP

# GIT SIDE
1. Create a new repository for new project.
2. Commit the changes to your new repository (including package.json (the package.json must have a start script in it), server file, node modules etc).
3. Clone the changes from github repo to your local system folder.

#OPENSHIFT SIDE
1. Click on nodeJS icon and create a project.
2. In the repository url enter the url for your newly created repository.
3. Build and start the app.




