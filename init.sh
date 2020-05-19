echo 'Starting server'

cd back-end
echo installing server dependencies
npm install
npm start &
echo 'Server componenets are up and running'
sleep 3s

echo 'Starting iTunes web app'

cd ../front-end
echo installing app dependencies
npm install
npm start
echo 'App is up and running'