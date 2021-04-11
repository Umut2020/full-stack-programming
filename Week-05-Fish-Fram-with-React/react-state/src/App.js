import 'bootstrap/dist/css/bootstrap.min.css'
import TableList from './components/Table'
import fishFarm from './database/fishFarm'

function App () {
  return (
    <div>
      <TableList list={fishFarm} />
    </div>
  )
}

export default App
