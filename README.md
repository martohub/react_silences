# React Native dashboard for Prometheus Alermanager silences


![Preview](https://github.com/martohub/react_silences/blob/master/silences.png?raw=true)

### Installation
git clone https://github.com/martohub/react_silences.git
cd react_silences
yarn install
### Replace ALERTMANAGER_URL value in src/App.js with your alermanager URL
vi src/App.js
yarn start

### For Production build:
yarn build

### You may serve it with a static server:
  yarn global add serve
  serve -s build
