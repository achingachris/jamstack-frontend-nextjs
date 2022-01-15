import Layout from '../layouts/Layout'

const AircraftServer = ({ aircraft }) => {
    console.log(typeof(aircraft));
  return (
    <Layout>
      <div className='container'>
        <h1 className='text-center m-3'>Aircraft</h1>
           
      </div>
    </Layout>
  )
}

export default AircraftServer

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/aircraft')
  const aircraft = await res.json()

  console.log(aircraft)

  return {
    props: {
      aircraft,
    },
  }
}
