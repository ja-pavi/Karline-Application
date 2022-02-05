<h1 align="center">Karline Mobile</h1>

## Contents <!-- omit in toc -->

- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Clone the repository](#clone-the-repository)
  - [Install dependencies](#install-dependencies)
  - [Login to Expo and Firebase](#login-to-expo-and-firebase)
  - [Start local development](#start-local-development)
- [Branch Structure](#branch-structure)
  - [UI Changes](#ui-changes)
  - [Backend Changes](#backend-changes)
  - [Full-Stack Changes](#full-stack-changes)

## Setup

### Prerequisites

- [Git](https://git-scm.com/), version `>=2.x`
- [Node.JS](https://nodejs.org/en/), version `>=16.x`
  - Use [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) to manage multiple node versions
- [NPM](https://www.npmjs.com/), version `>=6.x`

### Clone the repository

```shell
git clone https://github.com/Karline-app/karline-mobile.git
cd karline-mobile
```

### Install dependencies

```shell
npm install
```

### Login to Expo and Firebase

```shell
npm run expo:login
npm run firebase:login
```

### Start local development

- Starting Developer Tools (Recommended)

  ```shell
  npm start
  ```

- Starting on Web

  ```shell
  npm run web
  ```

- Starting on iOS

  ```shell
  npm run ios
  ```

- Starting on Android

  ```shell
  npm run android
  ```
