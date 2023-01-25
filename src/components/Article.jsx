import React from 'react'

export default function Article(props) {
  return (
    <article>
        <div style={{ position: "relative", height: "fit-content" }}>
            <h4> {props.article.title} </h4>
            <div className="underline"></div>
        </div>
        <p>
            {props.article.body}
        </p>
    </article>
  )
}
