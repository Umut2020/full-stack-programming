/**
   * Bir Json dosyasindaki veriler UI da istenilen sekilde gosterilmelidir
   * Bu uygulama icin react-bootstrap deki tablo ve card komponentleri kullanilacak
   * props yardimi ile mevcut datadaki veriler Profil>PersonalDetails>Person=ChildListView 
   * =FriendsListView> Child=Friend seklinde ilgili komponentlere aktarilarak UI da gosterilecek
   * Ic ice verilerde map() kullanilarak veriler UI render edilecek
  */

import 'bootstrap/dist/css/bootstrap.min.css'
import Profil from './Profil'
import Foreigners from './services/foreigners.json'

function App () {
  return (
    <div>
      <Profil list={Foreigners} />
    </div>
  )
}

export default App
