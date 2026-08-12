# google-map clone

## Overview

A project to learn how to clone a google map. This project is built with mapBox - A javascript library for creating maps.

## Project Architecture

MVC Architecture

### Folder Structure

```
.
├── README.md
├── index.html
├── src
│   ├── controller
│   │   └── main.js
│   └── view
│   └── style.css
```

## How to run google-map-clone project

1. Clone repo
   ```
   git clone git@github.com:STEPHEN-EMMAHI/google-maps-clone.git
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Run development environment
   ```
   npm run dev
   ```
4. Copy local host and send to browser. <br>
   Example: http://localhost:123/
5. Create mapbox account -
   <a href="https://share.google/Ss9sjTdkTmHrAN4Bf">Click link to creat MapBox Account</a>
   <br>
6. Copy token ID
7. Create .env file in your root project
8. Add token to .env file <br>
   Example: VITE_MAPBOX_ACCESS_TOKEN=[ insert token ]

## Tech Stack

[![Tech Skills](https://skillicons.dev/icons?i=html,css,js,tailwind,vite,git)](https://skillicons.dev)

## Concepts Learnt

1. How to setup mapBox - A javascript library for creating maps.<br>
   <a href="https://docs.mapbox.com/mapbox-gl-js/guides/">Visit mapBox GL JS</a>
2. Geolocation API
3. MapBox navigation control
4. MapBox plugins

## Limitations

1. Perfromance issues
