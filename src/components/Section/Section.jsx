import s from './Section.module.css'
import { GiMagicHat } from 'react-icons/gi'

const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>
        <GiMagicHat />
        {title}
      </h2>
      {children}
    </section>
  )
}
export default Section
