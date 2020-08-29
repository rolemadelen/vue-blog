
## Identfication and Authentication

### Secure HTTP
The HTTPS protocol provides a secure connection on the web by adding an extra layer (SSL/TLS) between HTTP and TCP.

SSL uses a powerful form of encryption using RSA and public-key cryptography. (check Public-Key Infrastructure - PKI).

Existing clients/servers do not have to change the way they handle messages because most of the hard work happens in the
SSL layer. So one can keep developing their web apps using Basic Authentication and just change the protocol to `https://`
to automatically reap the benefits of SSL. But to make it work over HTTPS, you need to have a working digital certificate 
deployed on the server.

### Certificates
Similar to us having our ID card to show our identity, a web server needs a digital certificate to identify itself.
Certificates, or certs, are issued by a Certificate Authority (CA). The CAs are the guardians of the PKI.
The most common form of certificates is the [X.509 v3 standard](https://www.ietf.org/rfc/rfc2459.txt), which contains
information, such as:
- the cert issuer
- the algorithm used for the cert
- the subject name or organization for whom this cert is created
- the pubilc key info for the subject
- the CA Signature, using the specified sigining alogrigthm

Client makes a request over HTTPS -><br>
tries to locate a cert on the server -> <br>
if found, attempt to verify against a known list of CAs -> <br>
else, prompt a warning about the website's cert to the user

Once the cert is verified, the SSL handshake is complete and secure transmission is in effect.

## HTTP Caching
A cache helps save time, cost and bandwith, as well as provide an improved experience on the web.

A cache can be categorized into two depends on where it is located:
- **Private** - within a browser, caches usernames, passwords, URLs, browsing history and web content; generally
small and specific to a user.
- **Public** - deployed as a caching proxies between the server and client; much larger bc they serve multiple users.
A common practice is to keep multiple caching proxies btwn the client and the origin-server. This helps to serve
frequently accessed content, while still allowing a trip to the server for infrequently needed content.

### Cache Processing
The proces of caching is similar for both public and private:
- **Receive** request message
- **Parse** the URL and headers
- **Lookup** a local copy; otherwise, fetch and store locally
- Do a **freshness check** to determine the age of the content in the cache; make a request to refresh the content only if necessary.
- Create the **response** from the cached body and updated headers.
- **Send** the response back to client.
- optionally, **log** the transaction.

### Cache Control Headers
To keep the cached copy consistent with the server, HTTP provides some simple mechanisms, **Document Expiration** and **Server Revalidation**.

**Document Expiration** <br>
We can attach _expiration date_ to each document using `Cache-Control` and `Expires` response headers. This allows the client
and other cache servers to know the _age_ of the document and how long it is valid. A cache can serve the copy as long as its
_age_ is within the expiration date. A cache must serve a new copy and update all contents when a document expires.

`Expires` is an older HTTP/1.0 response header; this header requries the server clock to be in sync with the client. 
 This is less useful compared to the newer `Cache-Control: max-age=<sec>` header
introduced in HTTP/1.1. `max-age` is relative age from the time the response was created.

**Server Revalidation** <br>
Once a cached doc expires, the cache must revalidate with the server to check if the doc has changed.
Just because the doc expired, it doesn't mean it has a newer content. Revalidation ensures that the cache stays fresh.
Because of the expiration time, the cache doesn't have to check with the server for every single request, thus saving
bandwidth, time and reducing the network traffic.

Two kinds of request-headers are used for the revalidatiton: `If-Modified-Since` (a date-based) and `If-None-Match` (uses Entity-Tags--hash of the content).

### Controlling the Cachability
The validity period for a doc is defined by the server generating the doc. For example, a newspaper website should expire 
after a day (or even every hour). 

The `Cache-Control` header is far more useful and has a few different values to constrain how clients should be caching 
the response:
- `Cache-Control: no-cache` - the client is allowed to store the doc, but must revalidate with the server on every request. (same as `Pragma: no-cache` in HTTP/1.0
- `Cache-Control: no-store` - a stronger direction to the client to not store the doc at all
- `Cache-Control: must-revalidate` - tells the client to always revalidate with server. If the server is unavailable, the cached response cannot be served.
- `Cache-Control: max-age` - sets a relative expiration time from the time the response is generated.

### Constraining Freshness from the Client
- `Cache-Control: min-fresh=<sec>` - the document must be fresh for at least `<sec>` seconds.
- `Cache-Control: max-stale[=<sec>]` - the doc cannot be served from the ccahe if it has been stale for longer than `<sec>` seconds.
- `Cache-Control: max-age=<sec>` - the cache cannot return a doc that has been cached longer than `<sec>` seconds.
- `Cache-Control: no-Cache` - the client will not accept a cached resource unless it has been revalidated.

## REST
Basically tells you that there are only 7 different types of things that we usually to with individual resource via t he web:
**index**, **show**, **new**, **create**, **edit**, and **update**. This gives us an organized way of thinking about our 
resources. This is the way we model requests and should be the ONLY way that thoes requests are done. This is important for
Rails because the Rails structure follow these conventions.

## MVC
Model, View, and Controller.

The point of MVC is that the functions of a web app can be broken down into more or less distinct parts. This
helps to maintain the code because we know what file is at where.

Once a request from a browser comes into the application, at the most basic level:
1. The router figures out which controller to send it to (e.g. for your blog, the Posts controller)
2. That controller asks thet model (e.g. Post model) for data
3. That controller psases off whatever data it needs to the views (e.g. index.html.erb)
4. Once the view has all its needed date and ready to go, it gets sent back to th eclient that made the orginal request (for more detail [here](https://betterexplained.com/articles/intermediate-rails-understanding-models-views-and-controllers/)).

<div class="divider"></div>

## Reference
- [Tutsplus - HTTP: The Protocol Every Web Dev Must Know pt. 2](https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-2--net-31155)