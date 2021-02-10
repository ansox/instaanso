import Footer from '../src/components/Footer'
import Menu from '../src/components/Menu'

export default function Home() {
  return (
    <div
      style={{
        flex: '1',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
      <Menu></Menu>
      <Footer />
    </div>
  )
}
