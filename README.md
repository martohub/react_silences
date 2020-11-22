# React Native dashboard for Prometheus Alertmanager Silences API
It fetches the GraphQL response from http://localhost:9093/api/v1/silences and renders dynamically in ReactDOM container using top-level API.

![Preview](https://github.com/martohub/react_silences/blob/master/silences.png?raw=true)

### Installation  
git clone https://github.com/martohub/react_silences.git  
cd react_silences  
yarn install  
### Adjust ALERTMANAGER_URL value in src/App.js accordingly.  
vi src/App.js  
yarn start  

### For Production build:  
yarn build  

### You may serve it with a static server:  
  yarn global add serve  
  serve -s build  
