# Ramon's Portfolio Website

This website is built under Next.js framework with App Router. It is deployed on a decentralised network, IPFS (InterPlanetary File System) and configured with personal ENS domain on Ethereum blockchain.

This project is developed with three sections:

1. **dApp Framework ( Next.js )**

   This repo has two branches:

   - `master`

     The _master_ branch is the main application with a few spectial features under Next.js framework, such as intercepting routes.

     - [GitHub link](https://github.com/RamonLiao/RamonLiao_Website_NextJS/)
     - [Demo Link](https://ramonliao.vercel.app/)

   - `output_export`

     The _output_export_ is adapted to be exported and uploaded to [IPFS](#1-ipfs), which means that the application is diplayed as a static site or Single-Page Application (SPA) rather than the dynamic one.

     By configuring [static export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports) in `next.config.js`, Next.js generates individual HTML files for each route during its build process. This approach helps in avoiding excessive client-side JavaScript loading, reducing bundle sizes, and facilitating quicker page loading times when running `npm run build`.

     ```JavaScript
     /**
      * @type {import('next').NextConfig}
      */
      const nextConfig = {
         output: 'export',
      }

      module.exports = nextConfig
     ```

     - [GitHub Link](https://github.com/RamonLiao/RamonLiao_Website_NextJS/tree/output_export)
     - [Demo Link](https://ramonliao.on.fleek.co/) (via Fleek platform)
     - [Demo Link](https://ramonliao.eth.link/) (deployed on IPFS and accessed via Cloudfare) - _`ramonliao.eth.link`_
     - [Demo Link](https://ramonliao.eth.limo/) (deployed on IPFS and accessed via DAO) - _`ramonliao.eth.limo`_

2. **Web3 Domain (`ENS`)**

   Registered a custom domain on Ethereum blockchain via ENS service.

   - [Registeration link](https://app.ens.domains/)

3. **Cloud Platform and Decentralized Performance**

   - [Fleek](https://fleek.co/)
   - [dAppling](https://dappling.network/)

   _(This app is realised by using Fleek platform.)_

<br>

# Terms

## 1. IPFS

IPFS represents a set of protocols centered on content addressing and peer-to-peer networking, offering various implementations due to its open-source nature. Its primary purpose is decentralized data publishing, accommodating diverse applications such as sharing files, directories, and websites in a distributed manner.

IPFS aims to tackle several shortcomings inherent in the current web and traditional data protocols like HTTP. These include addressing issues related to:

- Verifiability
- Resilience
- Centralization
- Performance
- Link rot
- Data sovereignty and ownership
- Off-chain storage
- Local-first software
- Vendor lock-in

The primary responsibilities encompass representing and addressing data, routing data, and transferring data.

Notably, IPFS employs content addressing to reference data based on its contents rather than relying on traditional location-based addressing like IP addresses.

## 2. IPNS

IPNS, the InterPlanetary Name System, enables the creation of adaptable pointers called names or IPNS names, pointing to CIDs. These names serve as links that can be modified over time while ensuring the verification of content addressing remains intact. ([link](https://docs.ipfs.tech/concepts/ipns/#interplanetary-name-system-ipns))

## 2. IPFS vs IPNS

> IPNS names are essentially pointers (IPNS names) to pointers (IPFS CIDs) whereas IPFS CIDs are immutable (because they're derived from the content) pointers to content.
>
> _- From [IPFS Docs](https://docs.ipfs.tech/concepts/ipns/)_

## 3. Content Identifiers (CIDs)

A Content Identifier (CID) serves as a reference for data stored in IPFS (InterPlanetary File System). It doesn't specify the content's storage location but acts as an address based on the content itself. CIDs are concise and don't vary in length based on the size of the content they represent. ([link](https://docs.ipfs.tech/concepts/content-addressing/))

## 4. ENS

> The Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain.
>
> _- From [ENS Docs](https://docs.ens.domains/)_

Briefly, the Ethereum Name Service (ENS) functions to translate human-readable names like 'alice.eth' into machine-readable identifiers such as Ethereum addresses or content hashes. It also facilitates 'reverse resolution', linking metadata like canonical names to Ethereum addresses. While ENS shares objectives with the Internet's Domain Name Service (DNS), its architecture is distinct due to leveraging the Ethereum blockchain. Operating on a hierarchical domain system akin to DNS, ENS grants domain owners full control over their subdomains.

1. [ENS Architecture](https://docs.ens.domains/#ens-architecture)

   ![img](/public/images/ENS-Architecture.jpg)

2. [ENS Two-Step Process](https://docs.ens.domains/#ens-architecture)

   ![img](/public/images/ENS-two-step-process.jpg)

## 5. \*.ETH.LINK vs \*.ETH.LIMO

### 1. .ETH.LINK

Eth.link serves as a centralized gateway for accessing ENS information through DNS, overseen by Cloudflare, a company specializing in CDNs (Content Delivery Networks) and DDoS (Distributed Denial-of-Service) protection services.

### 2. .ETH.LIMO

Eth.limo represents a decentralized substitute for eth.link. Like eth.link, eth.limo employs a wildcarded DNS record, \*.eth.limo. Yet, in contrast to being overseen by a singular entity, it operates through a DAO (Decentralized Autonomous Organization), where its operations are governed by a smart contract, preventing unilateral alterations.

<br>

> As an alternative to eth.link for users and dApp developers, any existing eth.link site can be accessed with eth.limo in the same manner.
>
> The LIMO project brings additional resiliency to dApps by providing an alternative means of access as a public good.
>
> _- From [ETH.LIMO Docs](https://eth.limo/#what-is-ethlimo)_

### Ref

1. [ETH.LIMO Docs](https://eth.limo/#what-is-ethlimo)
2. [Using Eth.Limo as an Alternative to Eth.Link in Fleek](https://blog.fleek.co/posts/eth-limo-alternative-eth-link)
3. [.eth.link vs .eth.limo: Comparing alternatives for .eth domain resolution](https://blog.logrocket.com/eth-link-vs-eth-limo/)

<br>

# Debugs

## 1. To deploy the app to Fleek, during the phase of `"npm build"`, an uncaughtException Error occured.

```console
$ npm WARN EBADENGINE Unsupported engine {
$ npm WARN EBADENGINE package: 'execa@7.1.1',
$ npm WARN EBADENGINE required: { node: '^14.18.0 || ^16.14.0 || >=18.0.0' },
$ npm WARN EBADENGINE current: { node: 'v16.4.2', npm: '7.18.1' }
$ npm WARN EBADENGINE }
```

```console
$ npm WARN EBADENGINE Unsupported engine {
$ npm WARN EBADENGINE package: 'next@13.4.3',
$ npm WARN EBADENGINE required: { node: '>=16.8.0' },
$ npm WARN EBADENGINE current: { node: 'v16.4.2', npm: '7.18.1' }
$ npm WARN EBADENGINE }
```

### Cause:

This app is developed with Next.js framework. Therefore, I chose the docker image `fleek/next-js` or `fleek/next-js:node-16` suggested by Fleek's tutorial [article](https://blog.fleek.co/posts/fleek-nextJS).

However, this docker image [`fleek/next-js`](https://hub.docker.com/r/fleek/next-js) has not been updated for more than 2 years. The default node engine is `'v16.4.2'` lower than the required version `'^14.18.0 || ^16.14.0 || >=18.0.0'`

```console
$ npm WARN EBADENGINE required: { node: '>=16.8.0' },
$ npm WARN EBADENGINE current: { node: 'v16.4.2', npm: '7.18.1' }
```

### Solution:

1.  Check the version of node engine of Next.js in `package.json` and upgrade/downgrade the version of Next.js.

2.  Choose the docker image [`fleek/node`](<(https://hub.docker.com/r/fleek/node/tags)>) instead. It keeps being updated to the latest version of node engine.

### Ref:

1.  [Error while trying to deploy to fleek, uncaughtException Error [ERR_UNKNOWN_BUILTIN_MODULE]: No such built-in module: node:stream/web](https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions/6118)

<br>

## 2. Google Font couldn't be found with module `"next/font/google"` during build time.

```console
$ FetchError: request to https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap failed, reason:
$ at ClientRequest.<anonymous> (/workspace/node_modules/next/dist/compiled/node-fetch/index.js:1:65756)
$ at ClientRequest.emit (node:events:514:28)
$ at ClientRequest.emit (node:domain:488:12)
$ at TLSSocket.socketErrorListener (node:_http_client:495:9)
$ at TLSSocket.emit (node:events:514:28)
$ at TLSSocket.emit (node:domain:488:12)
$ at emitErrorNT (node:internal/streams/destroy:151:8)
$ at emitErrorCloseNT (node:internal/streams/destroy:116:3)
$ at processTicksAndRejections (node:internal/process/task_queues:82:21)
$ at runNextTicks (node:internal/process/task_queues:64:3) {
$ type: 'system',
$ errno: 'ETIMEDOUT',
$ code: 'ETIMEDOUT'
$ }
```

```console
$ Failed to compile.
$ src/app/layout.js
$ `next/font` error:
$ Failed to fetch `Poppins` from Google Fonts.
$ > Build failed because of webpack errors
$ Error occured during the build.
```

### Cause:

During the build process, CSS and font files are downloaded and self-hosted along with other static assets. This prevents the browser from making requests to Google for these resources ([link](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts)).

However, with the configuration of static export in `next.config.js`, an error occurred during build time.

_( Still unsure why this happened. )_

### Solution:

1.  Download font files from [Google Fonts](https://fonts.google.com/) to the project folder and use `next/font/local` instead of `next/font/google` in `layout.js`

    Demo codes ([link](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts)):

    ```JavaScript
    import localFont from 'next/font/local'

    // Font files can be colocated inside of `app`
    const myFont = localFont({
       src: './my-font.woff2',
       display: 'swap',
    })

    export default function RootLayout({ children }) {
       return (
          <html lang="en" className={myFont.className}>
             <body>{children}</body>
          </html>
       )
    }
    ```

<br>

## 3. `"next export"` does not work with App Router

```console
$ > next export
$ ⨯ "next export" does not work with App Router. Please use "output: export" in next.config.js https://nextjs.org/docs/advanced-features/static-html-export
$ Error occured during the build.
```

### Solution:

1.  Set up `"output: export"` in `next.config.js`.

<br>

## 4. The app includes dynamic routes and client side components. An error occured during build time.

```console
output: 'export' with use client in dynamic routes doesn't work
```

### Solution (Workaround):

1.  Move 'use client' and client-side code into component ([link](https://github.com/vercel/next.js/issues/48022#issuecomment-1680182909))

    ```JavaScript
    /* /app/test/[slug]/page.jsx */
    'use client'
    import { useState } from 'react'

    const ClientPage = ({ params }: { params: { slug: string } }) => {
    const [value, setValue] = useState(params.slug)
    return (
       <div>
          <p>foo is [{ value }]</p>
          <button type="button" onClick={ () => setValue("foo") }>Set foo</button>
       </div>
    )
    }

    export function generateStaticParams() {
    return [{ slug: 'hello' }, { slug: 'world' }]
    }

    export default ClientPage
    ```

    Move 'use client' and client-side code into component:

    ```JavaScript
    /* /app/test/[slug]/page.jsx */
    import Foo from './Foo'

    const ServerPage = ({ params }: { params: { slug: string } }) => {
    return (
       <Foo slug={ params.slug } />
    )
    }
    export function generateStaticParams() {
    return [{ slug: 'hello' }, { slug: 'world' }]
    }
    export default ServerPage
    ```

    ```JavaScript
    /* /app/test/[slug]/Foo.jsx */
    'use client'
    import { useState } from 'react'

    const Foo = ({ slug }) => {
    const [value, setValue] = useState(slug)

    return (
       <div>
          <p>foo is [{ value }]</p>
          <button type="button" onClick={ () => setValue("foo") }>Set foo</button>
       </div>
    )
    }
    export default Foo
    ```

### Ref:

1.  Next.js Docs: [Unsupported Features](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#unsupported-features) for static export.
2.  [[NEXT-1030] output: 'export' with use client in dynamic routes doesn't work #48022](https://github.com/vercel/next.js/issues/48022#issuecomment-1688599391)
3.  [[NEXT-1550] App Router with output: export does not support useParams() on client #54393](https://github.com/vercel/next.js/issues/54393)

   <br>

## 5. Next.js App Router encountered build error due to dynamic routes are missing `"generateStaticParams()"`.

```console
$ > Build error occurred
$ Error: Page "/api/projects/[id]" is missing "generateStaticParams()" so it cannot be used with "output: export" config.

...

$ > Build error occurred
$ Error: Page "/projects/(.)detail/[id]/[projectName]" is missing "generateStaticParams()" so it cannot be used with "output: export" config.
```

### Solution:

1.  Refer to [Debug 4](#4-the-app-includes-dynamic-routes-and-client-side-components-an-error-occured-during-build-time)

    Move 'use client' and client-side code into component and use `generateStaticParams()` in server-side node.

    ```JavaScript
    // app/projects/detail/[id]/page.js
    import ShowPage from "./showPage.js";

    export async function generateStaticParams() {
       return [{ id: "foo" }];
    }

    export default function Page() {
    return <ShowPage />;
    }
    ```

    ```JavaScript
    // app/projects/detail/[id]/ShowPage.js
    "use client";

    import { useParams } from "next/navigation";

    export default function ShowPage() {
       const props = useParams(); // always returns 'foo' also when you navigate to /projects/detail/1
       const { id } = props.id;

       return <div>Post: {id}</div>;
    }
    ```

### Ref:

1. [[NEXT-1550] App Router with output: export does not support useParams() on client #54393](https://github.com/vercel/next.js/issues/54393#issuecomment-1778082399)
2. [generateStaticParams does not work when output: "export" #47485](https://github.com/vercel/next.js/issues/47485)
3. [[NEXT-1030] output: 'export' with use client in dynamic routes doesn't work #48022](https://github.com/vercel/next.js/issues/48022#issuecomment-1688599391)
4. Next.js Docs: [Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
5. Next.js Docs: [Generating Static Params](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params)
6. Next.js Docs: [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

<br>

## 6. Images are missing on `next build & next export`.

After configuring `"output: export"`, all images implemented by `next/image` are missing.

```console
$ Failed to load resource: the server responded with a status of 404 (Not Found)
```

### Cause:

From Next.js Docs:

> You configured output: 'export' (or ran next export) while importing the next/image component using the default loader configuration.
>
> However, the default loader relies on the Image Optimization API which is not available for exported applications.
>
> This is because Next.js optimizes images on-demand, as users request them (not at build time).

### Solution:

Refer to the Next.js Docs - [Export with Image Optimization API
](https://nextjs.org/docs/messages/export-image-api):

1. ~~Use `"next start"` to run a server, which includes the Image Optimization API.~~ (Not applicable in this case)
2. ~~Use any provider which supports Image Optimization (such as Vercel).~~ (Not applicable in this case)
3. [Configure loader](https://nextjs.org/docs/app/api-reference/components/image#loader) in next.config.js.
4. [Configure unoptimized](https://nextjs.org/docs/app/api-reference/components/image#unoptimized) in next.config.js.
