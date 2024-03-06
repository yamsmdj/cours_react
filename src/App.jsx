const title = "bonjour les <strong> gens</strong>"
const todos = [
    'Présenter react',
    'Présenter le JSX',
    'Créer des composants',
]

function App() {
    return <>
            <Title color="green" >Mon composant</Title>
            <input type="text"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ea assumenda tempore unde autem voluptatum mollitia, sapiente dolore laudantium eaque! Iusto, amet. Fugiat nihil necessitatibus eius distinctio vitae! Ullam, voluptatibus!</p>
            <ul>
                {todos.map(todo => (<li key={todo}>{todo}</li>))}
            </ul>
        </>
}

function Title({ color, children, hidden }) {
    // console.log(hidden)
    if (hidden){
        return null
    }
    return <h1 style={{color: color}}>{children}</h1>
}

export default App