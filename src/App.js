import Wheel from './wheel'
import './wheel.css'

function App() {
    const sectors = [
        {color:"#f82", label:"Stack"},
        {color:"#0bf", label:"10"},
        {color:"#fb0", label:"200"},
        {color:"#0fb", label:"50"},
        {color:"#b0f", label:"100"},
        {color:"#f0b", label:"5"},
        {color:"#bf0", label:"500"},
        {color:"#0bf", label:"a10"},
        {color:"#fb0", label:"a200"},
        {color:"#0fb", label:"a50"},
        {color:"#b0f", label:"a100"},
        {color:"#f0b", label:"a5"},
        {color:"#bf0", label:"a500"},
    ];

    const winner = (data) => {
        console.log(data)
    }

    return (
        <Wheel segments={sectors} winner={winner}/>
    )
}

export default App;