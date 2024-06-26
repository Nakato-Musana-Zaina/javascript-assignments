//Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console after the specified delay time.
const time = "11:00pm";
const messages = new Promise((resolve, reject)=>{
    if(time){
        resolve(`How has your day been, would you love lunch?`)
    }
    else{
        reject(`I will give you a call`)
    }
    
})
messages.then((response)=>{
    console.log({response})
    console.log(`I will see you soon`)
})
.catch((error)=>{
console.log({error});
console.log('We are done');
})
.finally(()=>{
    console.log(`I will always be happy`)
});
console.log({messages})

async function inbox(messages, time){
    try{ 
        console.log(`This has to work`)
        await messages
    }
    catch{
        console.log(`I will text you later `)
    }
}
inbox("hello", 2000)


// corrections for the number

async function DelayNode(message,delay){
await new Promise(resolve =>
    setTimeout(resolve,delay));
    console.log(message);
}
delayedNode('hello, 2000')


//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

const userId = [1,4,5,7,10,8];
// function getUserData(id){
async function getUserData(id){
    const userData= {id}
    return userData
}
//}


async function findUserData(userId){
    for (let id of userId){
        const userData = await getUserData(id);
        console.log (userData);
    }
};
findUserData(userId);

// corrections
function getUserData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`information ${id}`);
            resolve({ id, name: `User ${id}` });
        }, 1000);
    });
}

async function fetching(userIds) {
    for (const id of userIds) {
        const userData = await getUserData(id);
        console.log(userData);
    }
}
fetching(userIds).then(() => console.log('All user data provided.'));


//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.
async function performTask(){
    try{
        console.log ('Work well done')
    }
    catch{
      console.log ('Try again netx time')
    }
}
async function getPerformTask(){
    try{
        await performTask();
        console.log('we are there');
    }
    catch(error){
        console.log(error)
        console.log('We shall do better');
    }
};
getPerformTask()





//Retry Logic:
// Scenario:
// Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.


// // Example function skeleton
// function unstableTask(taskName, failureProbability) {
//     return new Promise((resolve, reject) => {
//         const randomValue = Math.random();
//         if (randomValue > failureProbability) {
    function unstableTask(taskName, failureProbability) {
        return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue > failureProbability) {
        resolve(`Task "${taskName}" completed successfully`);
        } else {
        reject(new Error(`Task "${taskName}" unsucessfull`));
        }
        });
       }
       const ourpromises = new Promise((resolve, reject)=> {
        if(randomValue> failureProbability){
            resolve('task is successful')}
            reject(`we can try again later`)


       })
       async function executeWithRetry(taskName, retries, failureProbability) {
        for (let attempts = 2; attempt => retries; attempts++) {
        try {
        await unstableTask(taskName, failureProbability);
        console.log(`Attempt ${attempts}: Task "${taskName}" successful`);
        return;
        } catch (error) {
        console.error(`Attempt ${attempts}: ${error.message}`);
        }
        }
        console.log(`You have ${retries} unsuccessuful for "${taskName}"`);
       };
       executeWithRetry('Runtime', 2, 0);