interface propTypes {
  item: {
    id: number
  },
  count: {
    map: any
  },
  page: number
}
const Paginator = (props: propTypes) => {
  return (
    <div className="row mt-5">
      <div className="col-12">
        <ul className="list-unstyled untree_co-pagination">
          {
            props.count.map((item: propTypes['item']) => {
              return (
                <li>
                  {
                    props.page !== item.id ?
                      <a href="/"> {item.id}</a>
                      :
                      <a href="/">
                        <span>{item.id}</span>
                      </a>
                  }
                </li>
              )
            })
          }
        </ul> 
      </div> 
    </div> 
  )
}

export default Paginator
