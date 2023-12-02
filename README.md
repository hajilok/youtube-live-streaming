[![Publish package nodejs](https://github.com/hajilok/youtube-live-streaming/actions/workflows/npm-publish.yml/badge.svg?event=check_run)](https://github.com/hajilok/youtube-live-streaming/actions/workflows/npm-publish.yml)

# youtube-live-streaming
This is a simple node js code to create live streaming on YouTube 24/7 hours with ffempg

# Using NPM for simple and dev any code
![using npm js](https://github.com/hajilok/youtube-live-streaming/assets/120608486/456842fb-7df6-4114-a4a3-de46b4aedaf9)

**Just Need To Install Modules ffmpeg and enjoy with simple command :**

Npmjs : [https://www.npmjs.com/package/youtube-live-streaming](https://www.npmjs.com/package/youtube-live-streaming)

**Firts one :**
```
sudo apt update
sudo apt install ffmpeg
```
**Step 2 :**

**Install Node js**

```
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt-get install -y nodejs
```
**Create file  ```index.mjs``` And Install module using this In terminal :**

```
npm i youtube-live-streaming
```
**And Paste This Simple Code  to your File  ```index.mjs``` :**

```
import youtube from "youtube-live-streaming";

const api = "jwze-rrs-tmwd-pwaz-a5m5"; //change with your streamkey
const video = "hajilok.mov"; //change with your video file name or video link 
const audio = "https://stream.zeno.fm/ez4m4918n98uv"; //change with your mp3 link or audio file name  

youtube(api, video, audio);
```
**or**

```
import youtube from "youtube-live-streaming";

const data = {
   api: "jwze-rrs-tmwd-pwaz-a5m5",
   video: "hajilok.mov",
   audio: "https://stream.zeno.fm/ez4m4918n98uv",
}

youtube(data.api, data.video, data.audio);
```

**Save You file and run in terminal with ```node index.mjs```**

**Note :**
_if not working or show any error plz ignore , check in youtube for your livestreaming is working or not because is module need any developetment , you can contribute with me_

_plz install express js and ffmpeg in your sistem if need using this module_

Link Github :_[ https://github.com/hajilok/youtube-live-streaming](https://github.com/hajilok/youtube-live-streaming)_


## Example in this case,  I Using Codespace on github For Start Livestream


![proft livestream menggunakan node js](https://github.com/hajilok/youtube-live-streaming/assets/120608486/6e400904-89c3-4635-b685-01e3aa48f481)

## In case I will try to deploy and run livestreaming  wit render 
![in the case deply with render](https://github.com/hajilok/youtube-live-streaming/assets/120608486/9227bf97-0080-4e2b-9a61-20b351469272)

## in case  i using cirleci ci/D for streaming in my youtube channel 
![cirleci streaming yt](https://github.com/hajilok/youtube-live-streaming/assets/120608486/ddcae854-6591-45d3-ad50-b50ec58eefa8)

## In case I Will Create Livestreaming Radio Ncs Song With Gitlab CI/CD

![deploy with gitlab](https://github.com/hajilok/youtube-live-streaming/assets/120608486/0af8509b-9d60-4f26-a709-cade74639755)

## And Finally With Bitbucket Pipelines :

![create livestreaming with bitbucked](https://github.com/hajilok/youtube-live-streaming/assets/120608486/76197d6a-3acb-4454-986b-060cba63697e)


## Is proof Live streaming with this Project with render hosting and run 24 hours nonstop if my render is not suck 😂

**Link Live Youtube for result of this project and listening music ncs  :** [https://www.youtube.com/live/PfrvJBagIUc?si=LnTiU2CAAoo8LonV](https://www.youtube.com/live/PfrvJBagIUc?si=LnTiU2CAAoo8LonV)

**Tutorial How To Use and Deploy To Render Hosting** :

**Clichttps://www.youtube.com/live/PfrvJBagIUc?si=LnTiU2CAAoo8LonVhttps://www.youtube.com/live/PfrvJBagIUc?si=LnTiU2CAAoo8LonVk Link This :**

_[https://www.youtube.com/watch?v=0oz94rCzf7A](https://www.youtube.com/watch?v=0oz94rCzf7A)_

## Deploy On 

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

**If Need Depploy to render or any hosting using main.js file and edit  on line 7 for your video art  content like lofi girl and plz add your .env if you need to deploy on render or any hosting**

**Example**
 ```
  streamkey = " " your screet key live in youtube

 ```
**In This You can get Stream Key On Youtube**

![kuncistrey](https://github.com/hajilok/youtube-live-streaming/assets/120608486/5b5e0a14-b810-4b08-96aa-ead17f863c59)

## Note :
**in this repository , you dont not need audio lofi because me have add in default with link audio lofi if you need livestream with content 24/7 hours nonstop lofi hiphop**

**update command ffmpeg in vaiabel " command " with your command ffmpeg for better result and any content live streaming never working**


# How To Deploy or using this Projects :

## Deploy Using CirlecI Ci/D 

**This A simple , Just Need too Fork this project and**
**Copy this Yaml File and paste : :**
```
version: 2.1

jobs:
  build:
    machine:
      image: ubuntu-2204:2023.10.1
    steps:
      - checkout
      - run: sudo apt-get update -y  && sudo apt-get install nodejs -y

      - run:
          name: cloning github
          command: git clone https://github.com/hajilok/youtube-live-streaming && cd youtube-live-streaming 
      
      - run:
          name: Install Node.js dependencies
          command: npm install
      
      # Store .env file
      - run:
          name: Store .env file
          command: echo 'streamkey=jtze-r9se-tm7d-p8yez-a5m5' > .env

      # Run your Node.js app
      - run:
          name: Run Your Node.js App
          command: node main.js  # Replace with your Node.js application's entry point


workflows:
  version: 2
  build-deploy:
    jobs:
      - build


```
_**Note : ```jtze-r9se-tm7d-p8yez-a5m5``` Replace With your key streaming in Youtube**_

## Deploy With Gitlab CI/CD :

 **This A simple , Fork My Gitlab Repository and Copy This Yaml File and Paste to Editor Pipeline**
 
 **Links Gitlab Repository :** _[https://gitlab.com/yukikatodo/youtube-live-streaming](https://gitlab.com/yukikatodo/youtube-live-streaming)_

 ```
 stages:
  - build

variables:
  STREAM_KEY: jwze-r5ss-tm8d-p0az-a5d3

before_script:
  - apt-get update -y
  - apt-get install -y ffmpeg
  - apt-get install -y nodejs
  - apt-get install -y npm
  - npm install


build:
  stage: build
  script:
    - echo "streamkey=$STREAM_KEY" > .env
    - node main.js

 ```

_**In Variabels Stream Key Replace with Your streamkey in youtube**_

## Deploy With Bitbucket Pipelines CI/CD :

**Link Bitbucket :** _[https://bitbucket.org/gohashindi/youtube-live-streaming](https://bitbucket.org/gohashindi/youtube-live-streaming)_

**Simple You Need To Fork This Link Bitbucket And Edit In Pipelines Yaml With This :**
```
#  Template NodeJS build

#  This template allows you to validate your NodeJS code.
#  The workflow allows running tests and code linting on the default branch.

image: ubuntu

pipelines:
  default:
    - parallel:
        - step:
            name: Build and Test
            deployment: production
            caches:
              - node
            script:
              - apt-get update -y 
              - apt-get install ffmpeg -y
              - apt-get install nodejs npm -y
              - echo "streamkey=jwze-r5ss-tm8d-p0az-a5d3" > .env
              - npm install
              - node main.js
        

```

_**Replace This ```jwze-r5ss-tm8d-p0az-a5d3``` Your Stream Key in youtube**_

## Deploy Manual on Your Os system

### Requirement 
```
ffmpeg
node js with new version

```
**How To Install :**

**Note : On build command on render or any hosting site using node main.js**

```
sudo su - 
apt install ffmpeg ( install if you dont have ffmpeg in your system or you using codespace in github you need to install with this command on terminal with user root  )
npm install ( to install any package required on node js in codespace auto installing )
node main.js or  node index.js 


```
