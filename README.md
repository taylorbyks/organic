
﻿<h1 align="center">
  Organic
</h1>

<h3 align="center">
System that aims to facilitate the search for quick service provision and in which the company will publish the services it needs, later the system will allow freelancers to view these vacancies and contact them if they are interested.</h3>

<p align="center">
  <img src="https://media.giphy.com/media/dL2nhQP9bmRvCiNo75/giphy.gif" alt="animated" />
  <img width="1440" alt="Captura de Tela 2021-03-08 às 10 01 03" src="https://user-images.githubusercontent.com/57015327/127787745-f7a00b02-18ea-42cf-80f4-a8e42b142f38.png">
  <img width="1440" alt="Captura de Tela 2021-03-08 às 10 03 43" src="https://user-images.githubusercontent.com/57015327/127787755-0ecb56ab-bc15-4bab-b818-11c16e92f0fe.png">

</p>

## 🔗 Table of contents

- [Motivation](#motivation)
- [Technologies](#technologies)
- [Installation](#installation)
- [Getting start](#start)
- [Project](#project)
- [Contribute](#contribute)
- [License](#license)

## 🎖 Motivation <a name="motivation" ></a>
<p>With the current financial situation around the world, Brazil has been facing several problems to be resolved, one of them being the large increase in citizens who became unemployed, as most companies are unable to face this moment without reducing their employees, or even even without having to permanently close their establishments. Furthermore, due to the pandemic, many self-employed workers also face various difficulties in finding services.</p>
<p>Currently, according to the IBGE, 13.9 million Brazilians are victims of unemployment, that is, citizens who often find it difficult to guarantee even the basics of everyday life. With this in mind, we decided to create a software that enables the provision of services in the area of ​​specific services that will be registered by the company. The company, therefore, provides the service you need, in addition to the amount you intend to pay, and a self-employed person applies to do it with just one click. So both parties can achieve their respective goals easily and quickly.</p>
<p>To analyze the problem in an organizational form, the i* modeling was used, taking into account the dependency relationships between the participating actors. The main objective in i* is to represent, through models, the participating actors and the dependencies between them, so that their own goals are achieved, resources are provided, tasks are carried out and goals are satisfied. The i* model has two different models: the SD model (strategic dependencies model – Strategic Dependency) which shows the strategic dependency relationships between the organization's actors and the SR model (strategic reasons model – Strategic Rationale) which displays the details of the internal strategies of the participating actors. These diagrams can be seen in annexes I and II.</p>
</h3>

## 📌 Technologies <a name="technologies"/>

- [Node](https://nodejs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [React](https://reactjs.org/)
- [Sqlite3](https://www.sqlite.org)

## 📂 Installation <a name="installation"/>

First of all, it is important that you have installed [Node](https://nodejs.org/), [Sqlite3](https://www.sqlite.org), [Yarn](https://yarnpkg.com/) and [Expo](https://expo.io/).

So, run this command in terminal to clone the project via HTTPS:

```bash
git clone https://github.com/taylorbyks/organic.git
```

**Install dependencies**

### Backend

```bash
yarn
```

After you needs to create a sqlite3 database in folder src/database named db.sqlite, and run:

```bash
yarn knex migration:run
```

### Frontend

```bash
yarn
```

### Mobile

```bash
yarn
```

## 🚀 Getting start <a name="start"/>

### Backend

Run the following command in terminal:

```bash
# Start the aplication
yarn start
```

This will open http://localhost:3333.

### Frontend

Run the following command in terminal:

```bash
# Start the aplication
yarn start
```

This will open http://localhost:3000.

### Mobile

First, you have to install Expo App on your smarthphone.

So, run the following command in terminal:

```bash
# Start the server
expo start
```

With Expo open on your smarthphone, scan the QR Code of Expo Server.

## 💻 Project <a name="project"/>

## 👍 Contribute <a name="contribute"/>

- Fork this repository.
- Create a branch with your resource: `git checkout -b feature/my-feature`
- Submit changes: `git commit -m "feat: My new feature"`
- Push your branch: `git push origin feature/my-feature`

## 📕 License <a name="license"/>

Released in 2021. This project is under the [MIT License](https://choosealicense.com/licenses/mit/).

Build with 💜 by [Taylor Byk Schinveski](https://github.com/taylorabyks/).
