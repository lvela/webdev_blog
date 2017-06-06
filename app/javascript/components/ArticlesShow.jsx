import React from 'react'

export default class ArticlesShow extends React.Component {
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

