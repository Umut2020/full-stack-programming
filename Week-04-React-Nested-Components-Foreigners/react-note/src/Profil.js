import PersonDetailsView from './components/PersonelDetails'

function Profil (props) {
  const allPersonDetails = props.list.map(person => <PersonDetailsView person={person} />

  )

  return (
    <div>
      {allPersonDetails}
    </div>
  )
}

export default Profil
