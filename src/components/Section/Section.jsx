import s from './Section.module.css'
import { FaBeer } from 'react-icons/fa'
const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>
        <FaBeer />
        {title}
      </h2>
      {children}
    </section>
  )
}
export default Section
