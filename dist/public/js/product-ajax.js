$(document).ready(function () {
    firebase.initializeApp({
        apiKey: "AIzaSyC3PouxaTBLmR1R2YhHKTR9dldzLGhCXwA",
        authDomain: "shop-5e89b.firebaseapp.com",
        databaseURL: "https://shop-5e89b.firebaseio.com",
        projectId: "shop-5e89b",
        storageBucket: "shop-5e89b.appspot.com",
        messagingSenderId: "777977280371"
    });
    getDashboard();
});
const getDashboard = () => {
    const db = firebase.firestore();
    const prodLength = document.getElementById("productLength");
    const deptlist = document.getElementById("deptList");
    const aisle = document.getElementById("aisleList");
    const catlist = document.getElementById("catleList");
    if (prodLength) {
        try {
            $.get("/api/products", (data, status) => {
                prodLength.innerText = `${data.length}`;
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    if (deptlist) {
        try {
            const dept = db.collection("departments").get()
                .then(snap => {
                const data = snap.docs;
                deptlist.innerText = `${data.length}`;
            }).catch(err => {
                console.log(err);
            });
        }
        catch (err) {
            console.log(err);
        }
        try {
            const Aisle = db.collection("aisles").get()
                .then(snapshot => {
                const data = snapshot.docs;
                aisle.innerText = `${data.length}`;
            }).catch(err => {
                console.log(err);
            });
        }
        catch (err) {
            console.log(err);
        }
        try {
            const categ = db.collection("category").get()
                .then(snapshot => {
                const data = snapshot.docs;
                catlist.innerText = `${data.length}`;
            }).catch(err => {
                console.log(err);
            });
        }
        catch (err) {
            console.log(err);
        }
    }
};
//# sourceMappingURL=product-ajax.js.map