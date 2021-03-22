/**
 * React kullanilarak basit bir Html sayfasi olusturmamiz isteniyor.
 * Bunun icin global olarak indirdigimiz react kutuphanesi kullaniarak
 * onceden verilen dosya yapisina(formatina) da uyularak html sayfasi olusturulmustur 
 */

// html sayfamizi olusturdugumuz fonksiyon
function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Input Format</h1>
        <p>
          First line contains <b><i>N.N</i></b> lines follow, each having a PAN number.
        </p>
        <h1>Constraints</h1>
        <ul>
          <li>
            <i><b>1 ≤ N ≥ 10</b></i>
          </li>
          <br></br>
          <li>
            Each char is an uppercase letter, ie.,<i><b>char ∈ ['A','Z']</b></i>
          </li>
          <br></br>
          <li>
            Each digit lies between 0 and 9, i.e.,<i><b>digit ∈ [0,9]</b></i>
          </li>
          <br></br>
          <li>
            The length of the PAN number is always 10, i.e.,<i><b>length(PAN) = 10</b></i>
          </li>
          <br></br>
          <li>
            Every character in PAN is either char or digit satisfying the above constraints.
          </li>
        </ul>
        <h1>Output Format</h1>
        <p>
          For every PAN number listed, print YES if it is valid and NO if it isn't.
        </p>
      </header>
    </div>
  )
}

// App fonksiyonunu index.js icin export ediyoruz.
export default App
