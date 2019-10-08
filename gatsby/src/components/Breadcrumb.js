import React from "react"
import BreadcrumbItem from "./BreadcrumbItem"

const Breadcrumb = props => {
  let children = React.Children.toArray(props.children)

  children = children.map((child, index) => (
    <BreadcrumbItem key={`breadcrumb_item_${index}`}>{child}</BreadcrumbItem>
  ))

  const lastIndex = children.length - 1

  children = children.reduce((accumulator, child, index) => {
    const notLast = index < lastIndex

    if (notLast) {
      accumulator.push(child, " / ")
    } else {
      accumulator.push(child)
    }
    return accumulator
  }, [])

  return <h1>{children}</h1>
}

export default Breadcrumb
