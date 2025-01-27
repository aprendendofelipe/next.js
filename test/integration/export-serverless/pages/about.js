import Link from 'next/link'

const About = ({ bar }) => (
  <div id="about-page">
    <div>
      <Link href="/">Go Back</Link>
    </div>
    <p>{`This is the About page foo${bar || ''}`}</p>
  </div>
)

About.getInitialProps = async () => {
  return { bar: typeof window === 'undefined' ? 'bar' : '' }
}

export default About
