// console.dir(Number)
// console.dir(Math)
// console.dir(String)
// console.dir(Boolean)

const message = "Hello world!"
const worldsList = message.split("")
console.log(worldsList)

const friends = ['Anton', 'Andrew', 'Egor']
// const myFriends = friends.join(", ")
// console.log(myFriends)
// const friendsMessage = `My friends: ${myFriends}`
// console.log(friendsMessage)

// const friendsMessage = `My friends: ${friends.join(", ")}`
// console.log(friendsMessage)

// const positionAndrew = friends.indexOf('Andrew');
// console.log(positionAndrew);

// const isEgorFriend = friends.includes("Egor");
// console.log(isEgorFriend);
// const isLuksFriend = friends.includes("Luka");
// console.log(isLuksFriend)

// const oldFriend = ["Dima", "Yaroslav", "Misha"]
// const nowFriends = ["Sasha", "Tania"]
// const newFriends = ["Kusia", "Anton", "Arsen"]
// const allFriends = oldFriend.concat(nowFriends.concat(newFriends))
// console.log(allFriends);

// const title = 'Top 10 benefints of React framework'.toLowerCase();
// const titleSplited = title.split('');
// const titleJoin = titleSplited.join('-');
// console.log(titleJoin);


const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

let sum = 0;

for (let i = 0; i < array1.length;i++){
    for(let j = 0;j < array2.length;j++){
        sum += array1[i] + array2[j]
    }
}
console.log(sum);