import firebase from 'firebase';

class FireCheck {
    static authCheck(Obj) {
        const firebaseConfig = {
            apiKey: "AIzaSyBy98Cnc4cAnp5WdQI-P9iJ9sufot772Ec",
            authDomain: "modal-ddf99.firebaseapp.com",
            databaseURL: "https://modal-ddf99.firebaseio.com",
            projectId: "modal-ddf99",
            storageBucket: "modal-ddf99.appspot.com",
            messagingSenderId: "2652816594",
            appId: "1:2652816594:web:b0cdbc6cf357e1ecbf190b",
            measurementId: "G-698SEQ5056"
        };
        if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
        }
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user.email + ' is logged in' + user.uid);
                Obj.setState({ loggedIn: true, loggedInAs: user.uid, email:user.email })
            } else {
                // this.props.navigation.navigate('Home');
                
                Obj.setState({ loggedIn: false, loggedInAs:null });
            }
        });
    }
}

export default FireCheck;