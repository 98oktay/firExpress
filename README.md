## firExpress
Express hosting for firebase functions
# install
Download this repositry and
1. Setup Firebase

```
npm install -g firebase-tools

firebase login

firebase init
(select hosting and functions)

```
1. set firebase.json values
```
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
