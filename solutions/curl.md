➜  w7d4 curl https://catfact.ninja/fact
{"fact":"A cat's jaw has only up and down motion; it does not have any lateral, side to side motion, like dogs and humans.","length":113}%

➜  w7d4 curl GET https://catfact.ninja/fact
curl: (6) Could not resolve host: GET
{"fact":"Cats have 30 vertebrae (humans have 33 vertebrae during early development; 26 after the sacral and coccygeal regions fuse)","length":122}%

➜  w7d4 curl -I https://catfact.ninja/fact
HTTP/2 200
date: Sat, 23 Nov 2024 16:04:06 GMT
content-type: application/json
vary: Accept-Encoding
cache-control: no-cache, private
x-ratelimit-limit: 100
x-ratelimit-remaining: 98
access-control-allow-origin: *
set-cookie: XSRF-TOKEN=eyJpdiI6IlpxOWxBMWxXbnI3RGF5LzVBa3J4OWc9PSIsInZhbHVlIjoiYjRxaWpIYTIzY2t6dlhMT1Z3ZlhuVXkxUUpaUWVsUTZoK2Ztc2l4TUFkU2J6MUF4eEtHZnd0TDVBK09SZmFDb2VteUIzd2kzcHcxb1dsRElMaFI1bzVjaXR6d1RSR3NRV2dtS0hyL01Qa3Q0eDNRU0NLK09ZS1ZJL0RkVEhRVXciLCJtYWMiOiJkMTk0YzZkMDlmMzA4ZWFmMmMxOTc2ZmJmOTlmMTUyODEzMWFiMDE3NjU1Y2NlZDI5YWU2MWZmOWJjYWY3MDk5IiwidGFnIjoiIn0%3D; expires=Sat, 23-Nov-2024 18:04:06 GMT; Max-Age=7200; path=/; secure; samesite=lax
set-cookie: catfacts_session=eyJpdiI6InlIdS9PUlFBNnA5dkYyTGJvZytkTHc9PSIsInZhbHVlIjoiSkVlUSt2SzRXbExFbmk1OCtaZEhrNTFzdDA5YnpjYzhla2RNdmJCTlpaRlBqSEp1VldPZExpVjRrRWE2b2EvR2FHSHZCbVdjejNzYkMydTF4Uml5OXlaYW13VDRmOGxkL3BDZUYzbUIxTThZOE9sbXRPdTFzK3ZMdGpDUG9LajQiLCJtYWMiOiIxZmJhYTgyMzI2NmNjNzAwNDY3YzFjMjRmYWY0ZmY1MDRiOGMzZWI4ZTVjODRjM2JhYzhmZWI2MDljYTc1NjFkIiwidGFnIjoiIn0%3D; expires=Sat, 23-Nov-2024 18:04:06 GMT; Max-Age=7200; path=/; secure; httponly; samesite=lax
set-cookie: 6JYdPLZ3FVliCIaBR9cQ9egNzvOAql0e6gFAnvuf=eyJpdiI6Ikx5T1RkOTZObzZuKzNFdVFtT29POWc9PSIsInZhbHVlIjoiUVBTb2lFVllyQlhBNXp4R3FoTXVsaGk5cVpjUGJtdW1uYzM2Nll1U2xrRDE5cWFwMkVUQlVBd2F4ODdOUHpsbmxmajFZTkdpRXMxc3cyakxCemw0VytMU1pYcTZSaWJoeXVVTCtJRU1ja1I0SWhSVU1saTcra0ZKODNmNXYxM3hCUGZvcXdFR095bE91WEx4bzBCalo4N2NYc0cwc2pGNnZScU9WTDU0RDZ1MUJlYzRBTzU3MlpmTWg2YTFnY3V6cG1tcUVETHpVYXJTTGhLSTBuN0JiRXlwWlRKOFh4TUNYZG0yK1lpTTdldGVsWGFaVGdCVElXSjRXY1Z6MXRvZDI3NE40TERtR2Vhdm5Fa28vdnpHZlE9PSIsIm1hYyI6IjA2ZWY4NDk2ZTJmMjM3NjVlYzcyMDVlNzZmZTUzYWVjZWI2Mjc3OWY1MDgwZjc5MmM0MjZiMmVjNjNmODA5M2IiLCJ0YWciOiIifQ%3D%3D; expires=Sat, 23-Nov-2024 18:04:06 GMT; Max-Age=7200; path=/; secure; httponly; samesite=lax
x-frame-options: SAMEORIGIN
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
cf-cache-status: DYNAMIC
report-to: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=2heqWrXnFyk9FpbU6tcPZZujlpTWsdTBxKHUm1ylygb9C%2B3qS2o2kvdYRlzrNSO%2FX6ezlx6WDZpAjLe%2FW1CWAdHUChC7S52maRbce64Y5EsBkuxUsq1CLG6SiRbWpROf"}],"group":"cf-nel","max_age":604800}
nel: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
server: cloudflare
cf-ray: 8e7264a2ecf518c4-EWR
alt-svc: h3=":443"; ma=86400
server-timing: cfL4;desc="?proto=TCP&rtt=6127&sent=6&recv=10&lost=0&retrans=0&sent_bytes=2894&recv_bytes=574&delivery_rate=450038&cwnd=191&unsent_bytes=0&cid=fd59a3f3e1271637&ts=36&x=0"

➜  w7d4 curl -X GET https://catfact.ninja/fact
{"fact":"The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat.","length":134}%

➜  w7d4 curl -X GET https://catfact.ninja/fact
{"fact":"The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat.","length":134}%

➜  w7d4 curl -v https://catfact.ninja/fact
* Host catfact.ninja:443 was resolved.
* IPv6: (none)
* IPv4: 172.67.188.187, 104.21.65.30
*   Trying 172.67.188.187:443...
* Connected to catfact.ninja (172.67.188.187) port 443
* ALPN: curl offers h2,http/1.1
* (304) (OUT), TLS handshake, Client hello (1):
*  CAfile: /etc/ssl/cert.pem
*  CApath: none
* (304) (IN), TLS handshake, Server hello (2):
* (304) (IN), TLS handshake, Unknown (8):
* (304) (IN), TLS handshake, Certificate (11):
* (304) (IN), TLS handshake, CERT verify (15):
* (304) (IN), TLS handshake, Finished (20):
* (304) (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / AEAD-CHACHA20-POLY1305-SHA256 / [blank] / UNDEF
* ALPN: server accepted h2
* Server certificate:
*  subject: CN=catfact.ninja
*  start date: Oct  3 23:49:03 2024 GMT
*  expire date: Jan  1 23:49:02 2025 GMT
*  subjectAltName: host "catfact.ninja" matched cert's "catfact.ninja"
*  issuer: C=US; O=Google Trust Services; CN=WE1
*  SSL certificate verify ok.
* using HTTP/2
* [HTTP/2] [1] OPENED stream for https://catfact.ninja/fact
* [HTTP/2] [1] [:method: GET]
* [HTTP/2] [1] [:scheme: https]
* [HTTP/2] [1] [:authority: catfact.ninja]
* [HTTP/2] [1] [:path: /fact]
* [HTTP/2] [1] [user-agent: curl/8.7.1]
* [HTTP/2] [1] [accept: */*]
> GET /fact HTTP/2
> Host: catfact.ninja
> User-Agent: curl/8.7.1
> Accept: */*
>
* Request completely sent off
< HTTP/2 200
< date: Sat, 23 Nov 2024 16:07:37 GMT
< content-type: application/json
< content-length: 108
< cache-control: no-cache, private
< x-ratelimit-limit: 100
< x-ratelimit-remaining: 98
< access-control-allow-origin: *
< set-cookie: XSRF-TOKEN=eyJpdiI6IjFtVkNuSysrMzFNbXI3Y1MzS25HZ1E9PSIsInZhbHVlIjoiTUtWc2xUVWVIeXZTbFNESFE3akxlV2xqZUxVdUtSSFAzSlhOK0Y0QUtHcHUvdVRJajh4RXZCL1lwcXZiUng1VzZMZWh2bmFwdkVNM2M3NGg5ZkV1YUU0U25oelpFazRyMGg2QmVkQ2ZEaEdBMGV0dGZCSytzZDRvUGtQaFlxWWEiLCJtYWMiOiI5ZTJmYTU5NmQ1ODE0ZjI0YjNmMjlhZmVhZDE1OWE1M2UyZWRkZjkzOWY4MzVkYTFhZDZlNWViOWYwODNmZjFkIiwidGFnIjoiIn0%3D; expires=Sat, 23-Nov-2024 18:07:37 GMT; Max-Age=7200; path=/; secure; samesite=lax
< set-cookie: catfacts_session=eyJpdiI6IlJqT202V2gxcUtCOGRId3d2RWZkOHc9PSIsInZhbHVlIjoiTFZjeUJLeGgvZlQyUUM1bjc3RXdLbk1qV1RrQUxIdVAxanpPalZrRzlIMm9ieTA5eEdQaG1wSGNmc1d2ZnJGQlZoQ3M3WGt2OHNLNGlvVmJnZmg3ZlNFT1ZabWMvTitHaEJ0V3k1YXNBUXhLSjhmdWlLeFd4ajE0OGxUTnhpU28iLCJtYWMiOiI1MGRjMTJiN2IzNjE1YTM0MDliMTAxOGQ0ZGVlMmY5ZTZhZDkxZmExZTgzMDJmZDhkOTAyZWI4OGVhNDFlMmUxIiwidGFnIjoiIn0%3D; expires=Sat, 23-Nov-2024 18:07:37 GMT; Max-Age=7200; path=/; secure; httponly; samesite=lax
< set-cookie: bM1QMk6ESBxfgQ4wPqndwDzr5LaZtqRTlnknzvvx=eyJpdiI6ImxZRmZXZjExckFhYm9GbzEvTVc4U2c9PSIsInZhbHVlIjoiNjYzeDlnd1pMSDlWV0lxOXlXTGhDMURWc1BqQVk0ekxoQysxMFZ2RjlEWXFodWtEZitGTi82U0I2ZnRzUlUrRENXQWJmNi81ZmFYNkpXd2ZSeVRkTWgybG05WnZDcUQvU1FlMHVKMXVrL0FNU2pMbEVaa3A5cHVzMmRHTnBRVEFXR1RROXFMbDBwWE1GeTBhWWNhQjVWb0doMEdLclJDcnJJQVppUWltOXdoUS9SRDJVTFJIb3hRQmNDTEU2dzhVZEZGTlhqc0xrNWJydDl4Kzd2QWZjSldYNHVMVTRWZ0xDZ0R1enFmaFpNU0JWSEJpRzUrc1puVCtKY0pOZ095ejB1MW9QbGgxdzlZM3pFeS8yaHB1aXUySVJJVHYyN0VlTnhTVGdkd0gvblZwcTNOaDhiQ0FDeTdtT1V4anFyQ2svWU9WSGFINGFoZ0htaG9HYU5YOUdycjJXRkMzcnlHRnR2dXhCc0NGdkVzQThJZ3VBRm1OY2J1QUFIR2tMRXR0IiwibWFjIjoiNmE4N2U2NTA2OGEzMzg3NTY1Yjg0NWQwZjZhM2M5N2QxYjNjNDg2ZjZhYmMwMTk3YzEyYzQxYThjM2I5NTRhNiIsInRhZyI6IiJ9; expires=Sat, 23-Nov-2024 18:07:37 GMT; Max-Age=7200; path=/; secure; httponly; samesite=lax
< x-frame-options: SAMEORIGIN
< x-xss-protection: 1; mode=block
< x-content-type-options: nosniff
< cf-cache-status: DYNAMIC
< report-to: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=7jdGvaaHwd6HLxPd7xoVayDhMJkxkvLXEokH2aGsILDI3sqdce48sLsvxqxyrlNQshAHgaTBJ4%2FrcmwSlb8nqZ5semFkV4Z3s4pxSehw%2F9ggslhTc9QGqlQHaJRd5vb7"}],"group":"cf-nel","max_age":604800}
< nel: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
< server: cloudflare
< cf-ray: 8e7269cd09ba424d-EWR
< alt-svc: h3=":443"; ma=86400
< server-timing: cfL4;desc="?proto=TCP&rtt=7236&sent=5&recv=10&lost=0&retrans=0&sent_bytes=2893&recv_bytes=569&delivery_rate=472199&cwnd=246&unsent_bytes=0&cid=88f5b3e6cb7409c5&ts=35&x=0"
<
* Connection #0 to host catfact.ninja left intact
{"fact":"Cats come back to full alertness from the sleep state faster than any other creature.","length":85}%

➜  w7d4 curl https://catfact.ninja/fact\
>
{"fact":"Cats are now Britain's favourite pet: there are 7.7 million cats as opposed to 6.6 million dogs.","length":96}%

➜  ~ curl https://catfact.ninja/facts
{"current_page":1,"data":[{"fact":"Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.","length":114},{"fact":"When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.","length":97},{"fact":"The technical term for a cat\u2019s hairball is a \u201cbezoar.\u201d","length":54},{"fact":"A group of cats is called a \u201cclowder.\u201d","length":38},{"fact":"A cat can\u2019t climb head first down a tree because every claw on a cat\u2019s paw points the same way. To get down from a tree, a cat must back down.","length":142},{"fact":"Cats make about 100 different sounds. Dogs make only about 10.","length":62},{"fact":"Every year, nearly four million cats are eaten in Asia.","length":55},{"fact":"There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.","length":100},{"fact":"Approximately 24 cat skins can make a coat.","length":43},{"fact":"While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.","length":278}],"first_page_url":"https:\/\/catfact.ninja\/facts?page=1","from":1,"last_page":34,"last_page_url":"https:\/\/catfact.ninja\/facts?page=34","links":[{"url":null,"label":"Previous","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=1","label":"1","active":true},{"url":"https:\/\/catfact.ninja\/facts?page=2","label":"2","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=3","label":"3","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=4","label":"4","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=5","label":"5","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=6","label":"6","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=7","label":"7","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=8","label":"8","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=9","label":"9","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=10","label":"10","active":false},{"url":null,"label":"...","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=33","label":"33","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=34","label":"34","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=2","label":"Next","active":false}],"next_page_url":"https:\/\/catfact.ninja\/facts?page=2","path":"https:\/\/catfact.ninja\/facts","per_page":10,"prev_page_url":null,"to":10,"total":332}%

➜  ~ curl "https://catfact.ninja/facts?page=14"
{"current_page":14,"data":[{"fact":"The first formal cat show was held in England in 1871; in America, in 1895.","length":75},{"fact":"The average litter of kittens is between 2 - 6 kittens.","length":55},{"fact":"In one stride, a cheetah can cover 23 to 26 feet (7 to 8 meters).","length":65},{"fact":"Cats are now Britain's favourite pet: there are 7.7 million cats as opposed to 6.6 million dogs.","length":96},{"fact":"A cat sees about 6 times better than a human at night, and needs 1\/6 the amount of of light that a human does - it has a layer of extra reflecting cells which absorb light.","length":172},{"fact":"The cat's tail is used to maintain balance.","length":43},{"fact":"A cat's brain is more similar to a man's brain than that of a dog.","length":66},{"fact":"According to a Gallup poll, most American pet owners obtain their cats by adopting strays.","length":90},{"fact":"A cat's normal temperature varies around 101 degrees Fahrenheit.","length":64},{"fact":"Cats respond better to women than to men, probably due to the fact that women's voices have a higher pitch.","length":107}],"first_page_url":"https:\/\/catfact.ninja\/facts?page=1","from":131,"last_page":34,"last_page_url":"https:\/\/catfact.ninja\/facts?page=34","links":[{"url":"https:\/\/catfact.ninja\/facts?page=13","label":"Previous","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=1","label":"1","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=2","label":"2","active":false},{"url":null,"label":"...","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=11","label":"11","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=12","label":"12","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=13","label":"13","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=14","label":"14","active":true},{"url":"https:\/\/catfact.ninja\/facts?page=15","label":"15","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=16","label":"16","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=17","label":"17","active":false},{"url":null,"label":"...","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=33","label":"33","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=34","label":"34","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=15","label":"Next","active":false}],"next_page_url":"https:\/\/catfact.ninja\/facts?page=15","path":"https:\/\/catfact.ninja\/facts","per_page":10,"prev_page_url":"https:\/\/catfact.ninja\/facts?page=13","to":140,"total":332}

➜  ~ curl https://catfact.ninja/facts\?\=34
{"current_page":1,"data":[{"fact":"Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.","length":114},{"fact":"When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.","length":97},{"fact":"The technical term for a cat\u2019s hairball is a \u201cbezoar.\u201d","length":54},{"fact":"A group of cats is called a \u201cclowder.\u201d","length":38},{"fact":"A cat can\u2019t climb head first down a tree because every claw on a cat\u2019s paw points the same way. To get down from a tree, a cat must back down.","length":142},{"fact":"Cats make about 100 different sounds. Dogs make only about 10.","length":62},{"fact":"Every year, nearly four million cats are eaten in Asia.","length":55},{"fact":"There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.","length":100},{"fact":"Approximately 24 cat skins can make a coat.","length":43},{"fact":"While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.","length":278}],"first_page_url":"https:\/\/catfact.ninja\/facts?page=1","from":1,"last_page":34,"last_page_url":"https:\/\/catfact.ninja\/facts?page=34","links":[{"url":null,"label":"Previous","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=1","label":"1","active":true},{"url":"https:\/\/catfact.ninja\/facts?page=2","label":"2","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=3","label":"3","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=4","label":"4","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=5","label":"5","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=6","label":"6","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=7","label":"7","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=8","label":"8","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=9","label":"9","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=10","label":"10","active":false},{"url":null,"label":"...","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=33","label":"33","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=34","label":"34","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=2","label":"Next","active":false}],"next_page_url":"https:\/\/catfact.ninja\/facts?page=2","path":"https:\/\/catfact.ninja\/facts","per_page":10,"prev_page_url":null,"to":10,"total":332}%