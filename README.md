# EDP Example App (Node.js)

> Do not pass or output the API token to your application client. Use the token behind your backend or server application only.

You can use every programming language to develop your app. This example shows you how to do this in Node.js. You need Node.js and Node Package Manager installed on your system.

Download or checkout this project via Git:

```bash
git clone https://github.com/Gewobag/edp-example-app.git
```

Install the project dependencies from the project root via the command line:

```bash
npm install
```

Open the `config.json` file and insert the host and your API token accordingly:

```json
{
  "host": "REPLACE_WITH_HOST",
  "token": "REPLACE_WITH_TOKEN"
}
```

Start the server:

```bash
npm run server
```

You can open the app in your browser at `http://localhost`

### Developer Notes

The demo application exists of two parts:

1. Server (Backend)

The server is a simple express implementation which basically acts like a proxy to the EDP platform data API. This is useful to keep the API token hidden and providing the original API schema without effort.

2. Client (Application)

The client is a common application which communicates with the corresponding backend server via AJAX (client-side rendered). You can also choose a classic full server-side rendered approach.