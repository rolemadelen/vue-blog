
## HTTP Connections
(last time -- **persistent connections**)

In addition to persistent connections, browsers/clients also supports **parallel connections** to minimize network delays.
The concept of parallel connections involves creating a pool of connections (generally 6 connections). So, if a client 
needs to download 6 data from a website, the client makes 6 parallel connections to download the data rather than
downloading one by one, one after the other. This is huge improvement over serial connections.

Parallel Connections, in combination with persistent connections, is **today's answer to minimizing network delays** and 
creating a smooth experience on the client.

## Server-side Connection Handling
The server mostly listens for incoming connections and processes them when it receives a request.
The operations involve:
- Establish connection on port 80 (or some other port)
- Receive request and parse the message
- Process the response
- Set response headers
- Send the response to the client
- Close the connection if a `Connection: close` request header was found

Most applications/websites need to know who makes a request to create more customized responses. This is the realm of
**identification** and **authentication**.

## Identification and Authentication
It is almost mandatory to know who connects to a server for tracking an app's or site's usage and the general interaction
paterns of users. The idea behind identification is to provide more personal and customized response. So naturallay,
the server must know who the user is to tailor the response.

There are couple ways a server can collect these information, and most websites use a hybrid of these methods:
- **Request headers** - `From`, `Refere`, `User-Agent`
- **Client-IP** - the IP address of the client
- **Fat URLs** - store the current user state -> modify the URL and redirects it (each click accumulates state)
- **Cookies** - the most popular and non-intrusive approach

Cookies allow the server to attach some data for outgoing responses via the `Set-Cookie` response header.
A cookie is set with one or more `name=value` pairs separated by semicolons.
Ex) `Set-Cookie: session-id=12345ABC; username=nettuts`.

A server can also restrict the cookies to certain page using `domain` and `path`, and make it persistent using `expires` value.
When the browser sends the request to the server, it ensures that only `domain` and `path` specific cookies are sent in the
requst. The request header `Cookie: name=value [; name2=value2]` is used to send these cookies to the server.

One example of this type of feature is **OAuth**, but it still requires user consent in order to work properly.
Authentication plays a large role and it probably is the only way to identify and verify the user.

## Authentication
HTTP supports basic authentication called **Basic Authentication** and more secure **Digest Authentication**.

In Basic Authentication, the server initially denies the client's request with a `WWW-Authentication` response header
and a `401 Unauthorize` status code. A client needs to enter a username and password which is sent in a base-64 
encoded format in the `Authentication` request header. If the credential is correct, the server can allow access.
Some servers might also send an `Authentication-Info` header containing additional authentication details.

--> Request<br>
<-- WWW-Authentication<br>
--> Authorization<br>
<-- Response

A corollary to Basic-Authentication is **Proxy Authentication**. Instead of a web server being the man to 
validate the credentials, the authentication is requested by an intermidate proxy.
The proxy sends a `Proxy-Authenticate` header with a `407 Unauthorized` status code. And the client is supposed
to send the credentials via the `Proxy-Authorization` request header.

Digest Authentication is similar to Basic Authentication but uses more secure hashing function to 
encrypt the username and password (commonly with MD5 or KD digest functions). Although Digest is more
secure, websites typically use Basic because of its simplicity. And to mitigate the security conecrns, the Basic is 
used with SSL.

## Secure HTTP
The HTTPS protocol provides a secure connection on the web by adding an extra layer (SSL/TLS) between HTTP and TCP.

SSL uses a powerful form of encryption using RSA and public-key cryptography. (check Public-Key Infrastructure - PKI).

Existing clients/servers do not have to change the way they handle messages because most of the hard work happens in the
SSL layer. So one can keep developing their web apps using Basic Authentication and just change the protocol to `https://`
to automatically reap the benefits of SSL.

## Reference
- [Tutsplus - HTTP: The Protocol Every Web Dev Must Know pt. 2](https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-2--net-31155)
