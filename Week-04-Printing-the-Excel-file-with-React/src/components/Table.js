export default function Table (props) {
  return (

    <table className='table container'>
      <thead>
        <tr>
          <th scope='col'>
            ISIM
          </th>
          <th scope='col'>
            SOYISIM
          </th>
          <th scope='col'>
            YAS
          </th>
          <th scope='col'>
            MAAS
          </th>
          <th scope='col'>
            CINSIYET
          </th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((d , index) => (
           <tr key={index}>
             <th>
               {d.ISIM}
             </th>
             <td>
               {d.SOYISIM}
             </td>
             <td>
               {d.YAS}
             </td>
             <td>
               {d.ALDIGIMAAS}
             </td>
             <td>
               {d.CINSIYETI}
             </td>
           </tr>
         ))}
      </tbody>
    </table>
  )
}
