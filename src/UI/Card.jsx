import './Card.css'

export default function Card({className,children}) {
  return (
    <article className={`card $ {classname}`}>
        {children}
    </article>
  )
}
