# Node Robolearnr SDK

This SDK can be used to easily leverage the [Robolearnr](https://github.com/RoboLearnr/robolearnr) API.

## Installation

```bash
npm install robolearnr
```

## Start Robolearnr

Check the [Robolearnr README.md](https://github.com/RoboLearnr/robolearnr/blob/master/README.md) on how to do this.

## Usage

```js
const rl = require('robolearnr');

rl.reset();
while (!rl.on_goal()) {
    while (!rl.before_obstacle()) {
        rl.forward();
    }
    rl.rotate();
}
```
