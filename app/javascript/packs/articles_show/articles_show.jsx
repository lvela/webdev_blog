import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class ArticleShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>
          <strong>Title: </strong>
          {this.props.title}
        </p>
        <p>
          <strong>Body:</strong>
          <span dangerouslySetInnerHTML={{__html: this.props.body}}></span>
        </p>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector("[data-title]").getAttribute('data-title')
  const body = document.querySelector("[data-body]").getAttribute('data-body')

  const el = document.getElementById('article-show')

  ReactDOM.render(
    <ArticleShow title={title} body={body} />,
    document.getElementById('article-show')
  )
})
