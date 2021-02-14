
interface propsTypes {
  text: string;
  title: string
}

const TextBanner = (props: propsTypes) => {
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row justify-content-center text-center">
        <div className="col-lg-6">
            <h1 className="text-secondary heading-2">{ props.title }</h1>
            <p>{ props.text }</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default TextBanner
