import { Account, Client } from 'appwrite'

const client =  new Client()

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68bfaf590000fe828933');

export const account = new Account(client)

export default client