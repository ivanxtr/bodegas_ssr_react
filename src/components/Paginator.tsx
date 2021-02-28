interface propTypes {
  item: {
    id: number
  },
  count: {
    map: any,
    length: number
  },
  page: number,
  getMoreItems: void | any
}
const Paginator = (props: propTypes) => {
  const pages: any = [];
  const howMany: any = () => {
    const index = Math.round(props.count.length / 9)
    for (let i = 0; i <= index - 1; i++) {
      pages.push(i + 1)
    }
  }
  howMany()
  return (
    <div className="row mt-5">
      <div className="col-12">
        <ul className="list-unstyled untree_co-pagination">
          {
            props.count.length > 9 ?
              pages.map((item: any, index: number) => {
                return (
                  <li key={index}>
                    {
                      props.page !== item ?
                        <section
                          className="pagination_selected"
                          onClick={() => props.getMoreItems(item)}
                        >
                          {item} 
                        </section>
                        :
                        <section
                          className="pagination_selected"
                          onClick={() => props.getMoreItems(item)}
                        >
                          <span>{item}</span>
                        </section>
                    }
                  </li>
                )
              }) : ''
          }
        </ul> 
      </div> 
    </div> 
  )
}

export default Paginator
