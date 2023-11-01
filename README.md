# [DeNotes](https://denotes.vercel.app/)

**A fully decentralized note-taking app powered by the** [Interplanetary File System](https://ipfs.io) **and the implemented using** [ThirdWeb](https://portal.thirdweb.com/storage).

## Unhinged Privacy

The app is fully open source and completely decentralized, meaning none of the data is stored on any database, not even the notes. It only consists of a client-side app. No server or database is involved. You communicate directly with the IPFS.

This means nobody will ever be able to access your notes without the CID. The CID is unique to your note and makes use of content-based addressing. The only way to read your data is with this CID which nobody knows except the creator of the note.

You can even see your notes if you copy the CID provided by this app and paste it into a browser tab (along with a public gateway) as shown below.

- https://cloudflare-ipfs.com/ipfs/QmVVUyE2SdHRwu2WM45XHHsiiT3WqW6Giwf4mW4XabKGHy/rick.jpeg
- https://ipfs.io/ipfs/QmVVUyE2SdHRwu2WM45XHHsiiT3WqW6Giwf4mW4XabKGHy/rick.jpeg

These `cloudflare-ipfs.com` and `ipfs.io` are known as **public gateways** and there are many of those. You must only go to `https://ipfs.io/ipfs/${cid}` to see your data (or some other public gateway).

For a more clear picture of IPFS and content-based addressing, please go through [this short blog post](https://electroblog.hashnode.dev/beginners-guide-to-ipfs).

## So where are your CIDs stored in this app?

In the cookies of your browser. Only DeNotes can access these cookies, meaning any other website cannot see them. Your notes data persists through the sessions using cookies so it doesn't just disappear when you close the app.

## Won't the CIDs take up too much space in the cookies?🍪

They are not stored as plain text. They have been stringified and encrypted using the AES algorithm and a secret key from the environment variables. The app uses it by decrypting the cookie using the same key. So even if the cookies get leaked, nobody can make sense of it without knowing the encryption key. And it takes up slightly less storage this way.

## What if I clear the cookies?🍪

Then the CIDs disappear and you will not be able to access your notes. Ever.

That's why a new feature must be implemented for downloading these CIDs as a text file and also a feature for uploading the same text file to be able to read CIDs from it and load the notes. I will code it or you can open a pull request if you do it before me.

## Contributions🤝

Apart from the above-stated features, this app obviously has a lot of room for improvement. It's a notes app after all. It can take markdown for the notes, it can take checklists and images, and the possibilities are limitless. Feel free to implement any feature or fix any bug and open pull requests.

Please check [this file](/CONTRIBUTING.md) for more help with contributing.

