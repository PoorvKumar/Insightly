import React from 'react'

const Post = () => {
  return (
    <div className="post">
        <div className="image">
        <img
          src="https://static.wixstatic.com/media/c7e19c_cbcf0f27ceef41dd90c0878313676080~mv2.jpg/v1/fill/w_925,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7e19c_cbcf0f27ceef41dd90c0878313676080~mv2.jpg"
          alt=""
        />
        </div>
        <div className="texts">
        <h2>Top 20 most popular types of blogs in 2023</h2>
        <p className="info">
          <a href="/" className="autor">Poorv Kumar</a>
          <time>2023-05-31 16:45</time>
        </p>
        <p className="summary">
          There are 600 million active blogs on the Internet, accounting for
          one-third of all the websites published. Starting off as online
          personal diaries, blogs have evolved dramatically over the last two
          decades to become influential sources of information on virtually any
          topic.
        </p>
        </div>
      </div>
  )
}

export default Post