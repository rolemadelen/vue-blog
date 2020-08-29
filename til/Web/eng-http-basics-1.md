## HTTP Basics

- Hypertext Transfer Protocol (current version is **HTTP/1.1**)
- stateless protocol

HTTP allows communications between hosts and clients. This communications usually takes place in TCP/IP.
The **default port** is **80**.

This inter-communication btwn the host/client occurs via a **request/response pair**.

client -> HTTP Request -> Server <br>
Server -> Response to its request -> client

Most important feature of  **HTTP/1.1**
- persistent connections
- chunked transfer-coding
- fine-grained caching headers

### URLs
Uniform Resource Locators.
```
http://www.domain.com:1234/path/to/resource?a=b&x=y

protocol:  http:// 
host    :  www.domain.com
port    :  1234
path    : /path/to/resource
query   : ?a=b&x=y
```

<div class="divider"></div>

### Verbs
URLs lead us to the host we want to communicate, but it's the **HTTP verbs** that 
decides what actions to perform on the host (add a page, remove a page, etc...)

Popular request verbs
- GET: _fetch_ an existing resource.
- POST: _create_ a new resource.
- PUT: _update_ an existing resource.
- DELETE: _delete_ an existing resource.

Lesser used verbs
- HEAD: similar to GET but w/o the message body. Used to retrieve the server headers.
- TRACE: used to retrieve the hops that a request takes to round trip from the server. Use for diagnostic purposes.
- OPTIONS: used to retrieve the server capabilities.

### Status Codes
When a client requests to the server, the server responds with **status codes** and message payloads.
The status code tells the client how to interpret the server response.

1xx: Informational messages
- This was introduced in HTTP/1.1
- The server can send `Expect: 100-continue` telling the client to continue to send the remainder of the request or ignore it.
- HTTP/1.0 will ignore this header.

2xx: Successful
- 200 Ok
- 202 Accepted : the request was accepted but may not include the resource in the response. Useful for async processing on the server side.
- 204 No Content : there is no message body in the response.
- 205 Reset Content : indicates to the client to reset its document view.
- 206 Partial Content : indicates that the response only contains partial content.

3xx: Redirection
- 301 Moved Permanently : the resource is now located at a new URL.
- 303 See Other : the resource is temporaily located at a new URL. `Location` response header contains the temp. URL.
- 304 Not Modified : The resource has not changed and the client should use its cached copy.

4xx: Client Error
- Used when the server thinks that the client is at fault.
- 400 Bad Request : the request was malformed.
- 401 Unauthorized : the request requires authentication. Request with the `Authorization` header.
- 403 Forbidden : the server has denied access to the resource.
- 404 Not Found : the resource is invalid and DNE on the server.
- 405 Method Not Allowed : invalid HTTP verb or the server does not support that verb.
- 409 Conflict : the server could not complete the request bc the client is trying to modify a resource that is newer than the client's timestamp. This mostly occurs with PUT request during collab edits.

5xx: Server ERror
- 500 Internal Server Error
- 501 Not Implemented : the server does not yet support the requested functionality.
- 503 Service Unavailable : an internal system on the server has failed or the server is overloaded. The server won't respond and the request will timeout.

## Request and Response Message Formats
Client -> URL + verb -> Server<br>
Server -> status code + message body -> Client

HTTP spec. states that a request/response message has the following generic structure:

```
message = <start-line>
          *(<message-header>)
          CRLF        ---> this new line is mandatory
          [<message-body>]

<start-line> = Request-Line | Status-Line
<message-header> = Fild-Name ':' Field-Value
```

Message can contain one or more headers
- general headers (applicable for both request/response messages)
- request specific headers
- response specific headers
- entity headers

The message body may contain the complete entity data, or piecemeal if `Transfer-Encoding: chunked` is used.
All HTTP/1.1 clients are required to accept this encoding header.

### General Headers
```
general-header = Cache-Control
               | Connection
               | Date 
               | Pragma 
               | Traiiler
               | Transfer-Encoding
               | Upgrade
               | Via
               | Warning
```

- `Via` header is used in TRACE message and updated by all intermittent proxies and gateways
- `Pragma` is considered a custom header and may be used to include implementation-specific headers.
  + `Pragma: no-cache` (which really is `Cache-Control: no-cache`)
- `Date` header is used to timestamp the request/response message
- `Upgrade` is used to switch protocols and allow a smooth transition to a newer protocol.
- `Transfer-Encoding` is used to break the response into smaller parts with `: chunked` value.

### Entity Headers
These headers are used to provide meta-information about the content.

```
entity-header  = Allow                    
               | Content-Encoding  
               | Content-Language  
               | Content-Length    
               | Content-Location  
               | Content-MD5       
               | Content-Range     
               | Content-Type      
               | Expires           
               | Last-Modified
```

`Content-` prefixed headers provide info about the message body. 
`Expires` header shows when the entity expires. _never expires_ entitiy is sent when 
it expires more than a year after into the future. `Last-Modified` shows the last modification timestamp.

### Request Format
The structore of the request message is same as above except for the request line.
```
Request-Line = Method UR HTTP-Version CRLF
Method = "OPTIONS"
       | "HEAD"  
       | "GET"  
       | "POST"  
       | "PUT"  
       | "DELETE"  
       | "TRACE"
```

`HTTP_Version` is "HTTP/1.1".

Example
```
GET /articles/http-basics HTTP/1.1
Host: www.articles.com
Connection: keep-alive
Cache-Control: no-cache
Pragma: no-cache
Accept: text/html,application/xhtml+xml,application/xml;q=0.9
```

Known request headers
```
request-header = Accept                   
               | Accept-Charset    
               | Accept-Encoding   
               | Accept-Language   
               | Authorization     
               | Expect            
               | From              
               | Host              
               | If-Match          
               | If-Modified-Since 
               | If-None-Match     
               | If-Range          
               | If-Unmodified-Since
               | Max-Forwards       
               | Proxy-Authorization
               | Range              
               | Referer            
               | TE                 
               | User-Agent
```

### Response Format
Again, the structure is same as obve except for the status line and headers.

Status line:
```
Status-Line = HTTP-Version Status-Code Reason-Phrase CRLF
```

- HTTP-Version is sent as `HTTP/1.1`
- Status-Code is one of many discussed earlier
- Reason-Phrase is a human-readable version of the status code.

Example
```
HTTP/1.1 200 OK
```

List of response headers
```
 response-header = Accept-Ranges
                 | Age
                 | ETag              
                 | Location          
                 | Proxy-Authenticate
                 | Retry-After       
                 | Server            
                 | Vary              
                 | WWW-Authenticate
```

- `Age` is the time in seconds since  the message was generated on the server.
- `ETag` is the MD5 hash of the entity and used to check modifications
- `Location` is used when sending a redirection and contains the new URL
- `Server` identifies the server generating the message.

## Tools to view HTTP Traffic
- [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools?utm_source=dcc&utm_medium=redirect&utm_campaign=2018Q2)

## Using HTTP in Ruby on Rails
- ActionController and ActionDispatch modules provide the API for handling request and response messages.

**Action Controller** provides a high level API to read the request URL, render output, and redirect to a diff rounte.

**Action Dispatch** provides fine-grained access to the request/response messages.

<div class="divider"></div>

- [Tutsplus - HTTP Basics](https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)