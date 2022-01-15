import Layout from '../layouts/Layout'

const index = ({aircraft}) => {
  return <Layout>Ahaa

    <div>
      <h1>Aircraft Name: { aircraft}</h1>
    </div>
  </Layout>
}

export default index

export function getStaticProps() {
  return {
    props: { aircraft: 'Airbus A350-941' },
  }
}
