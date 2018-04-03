// 按需引入jquery文件。
// import jq from 'jquery'
import reaction from 'reaction-obsevable'

// 引入我们需要的css
import './index.css'

// 引入ejs模板，html变动时，热更新网页,开发完成后，build打包发布时请删除，减少代码大小。
require('./index.ejs')

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

// init ui
const ui = {
  number: document.getElementById('number'),
  renderCount (number) {
    ui.number.innerHTML = store.number
  }
}
// init render
ui.renderCount(store.number)
// bind store changes to ui
store.$listen('number', (store) => {
  ui.renderCount(store.number)
})

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

// renderList
function renderItem (name) {
  return `<li>${name}</li>`
}
function renderList (array, render) {
  ui.list.innerHTML = array.reduce((accumulator, current) => accumulator + render(current), '')
}
ui.list = document.getElementById('list')
// init list
renderList(store.names, renderItem)
// binding name changes to ui
store.names.$listen('change', (names) => {
  renderList(names, renderItem)
})

// more name button
ui.moreNameButton = document.getElementById('addName')
// binding ui events to your store
ui.moreNameButton.addEventListener('click', () => {
  store.addName()
})
