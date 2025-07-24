
const heading = React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child1'},[
        React.createElement('h1',{},'iam using react'),
        React.createElement('h2', {}, 'iam learing react'),   
    ]),
    React.createElement('div',{id:'child2'},[
        React.createElement('h1',{},'iam nanda kumar'),
        React.createElement('h2',{},'react is a poerfull tool'),
    ])
])
const root = ReactDOM.createRoot(document.getElementById('nanda'))

root.render(heading)