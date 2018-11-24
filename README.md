## firExpress
Express hosting for firebase functions
# install
Download this repository and
1. Setup Firebase

```
npm install -g firebase-tools
```
```
firebase login
```
```
firebase init
//(select hosting and functions)

```


2. Set firebase.json values
```json
...
"hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "function": "firExpress"
      }
    ]
  },
...
  "functions": {
    "source": "dist"
  }
...
```
3. Install dependencies

```
npm install 
```

```
cd dist/ && npm install 
```

4. Run for development
```
npm run dev
```
5. Deploy to firebase
```
npm run deploy
```

