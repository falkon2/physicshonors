import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);

const storage = new Storage(client);

// const promise = storage.createFile(
//     '<BUCKET_ID>',
//     ID.unique(),
//     document.getElementById('uploader').files[0]
// );

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

export default client;