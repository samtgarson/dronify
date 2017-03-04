# Dronify

> Generate charts and config for Drone, K8S and Helm

Dronify provides a small CLI tool to get your application set up to be built on [Drone](https://github.com/drone/drone) and deployed to [Kubernetes](https://github.com/kubernetes/kubernetes) using [Helm](https://github.com/kubernetes/helm).

## Setup

```bash 
yarn global add dronify # or: npm i -g dronify
```

## Usage

- Initialise your application
```bash
cd my-app
dronify init
```

- Add a secret
```
dronify secret MY_SECRET_KEY "my secret value"
```
