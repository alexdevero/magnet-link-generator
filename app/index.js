import React from 'react'
import { render } from 'react-dom'

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

const App = () => <div>Magnet Link Generator is here!</div>

// Now we can render our application into it
render(<App />, document.getElementById('root'))
