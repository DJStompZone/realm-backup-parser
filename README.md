# Minecraft Bedrock Realms Backup Fetcher / Parser

![banner](https://i.imgur.com/TyaRONE.jpg)

This project provides utility functions for fetching and parsing backups from the Minecraft Bedrock Realms API.

## Functions

The main functions exported by this module are:

1. `getBackups`: Fetches and logs the backups from a specified realm.

2. `parseBackups`: Parses a list of backups, extracting the backup id, time, and a timestamp.

3. `getBackupsAsync`: Similar to `getBackups`, but designed to be used asynchronously.

## Setup

In order to use these functions, you must first require them in your project:

```js
const { getBackups, parseBackups, getBackupsAsync } = require('./path-to-this-module');
```

Before you run these functions, make sure to edit the example.config.json file in your project root with your XBL3TOKEN (your XBL 3.0 Auth Token) and REALMID (the id of your realm):

```json
{
  "XBL3TOKEN": "your-auth-token",
  "REALMID": 000000000
}
```

You will need to copy or rename the `example.config.json` to `config.json`.
Note: Never commit config.json file into your version control system (Git). This file contains sensitive data and should be kept secret.


## Usage

Here is an example of how to use `getBackups`:

```js
getBackups();
```

This will fetch your backups from the specified realm, parse them and then log them to the console.

For getBackupsAsync, you can use it in an async context like this:

```js
async function fetchBackups() {
    const backups = await getBackupsAsync();
    console.log(backups);
}

fetchBackups();
```

This will asynchronously fetch the backups, parse them, and then log them to the console.

The parseBackups function is used internally by the getBackups and getBackupsAsync functions, but you can also use it directly if you have a list of backups you want to parse:

```js
const backups = [{ backupId: 'backup1', lastModifiedDate: 1616499200000 }, { backupId: 'backup2', lastModifiedDate: 1616499200000 }];
const parsedBackups = parseBackups({ backups });
console.log(parsedBackups);
```

This will parse the list of backups, and then log the parsed backups to the console.


Please replace the example data and function calls with ones that match your specific use case. This README.md provides a general understanding of how to use the module functions and is intended to be adjusted to fit your needs.
