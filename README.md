## FirExpress
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
2. Edit ".firebaserc" file

```
{
  "projects": {
    "default": "<Your-Firebase-Project-Name-Here>"
  }
}
```

3. Install dependencies

```
npm install 
```
4. Run for development
```
npm run dev
```
5. Deploy to firebase
```
npm run deploy
```

