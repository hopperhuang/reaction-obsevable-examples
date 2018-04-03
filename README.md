# Examples for reaction-obsevable

Get more detial:  [here](https://github.com/hopperhuang/reaction)

## Getting Started

Install dependencies.

```bash
$ npm i
```
```bash
$ npm i serve -g
```

Start dev server.

```bash
$ npm start
```

Build.

```bash
$ npm run build
```

Serve

```bash
$ npm run serve
```

## How to use

It's easy for you to use reaction-obsevable for your programme, We recommand you do like below:

1. First: define your data structure and methods about how will data change


```
// init store
const store = reaction({
  number: 1,
  increase () {
    this.number += 1
  },
  decrease () {
    this.number -= 1
  },
  names: ['hopperhuang'],
  addName () {
    this.names.push('hopper')
  }
})
```

2. Second: define your ui component and how and how will it render


```
// init ui
const ui = {
    number: document.getElementById('number')
    renderCount (number) {
        ui.number.innerHTML = store.number
    }
}

// init render
ui.renderCount(store.number)
```

3. Third: bind render function with your store


```
// bind store changes to ui
store.$listen('number', (store) => {
  ui.renderCount(store.number)
})
```

 
4. Forth: bind ui events to store's method to upgrade your ui


```
// increase button
ui.increaseButton = document.getElementById('increase')
// bind ui events to store method
ui.increaseButton.addEventListener('click', () => {
  store.increase()
})

// decrease button
ui.decreaseButton = document.getElementById('decrease')
ui.decreaseButton.addEventListener('click', () => {
  store.decrease()
})
```

see more details in source code!!!
