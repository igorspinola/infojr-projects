export default function Word(props) {

  return(
    <div>
      {props.lettersArray.map((letter) => {
              return <div className="letter">{letter}</div>
            })}
    </div>
  )
  
}
