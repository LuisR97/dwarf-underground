import React, {Component} from 'react'

class CommentsSection extends React.Component
{
    render()
    {
        return (
             <a className="article-link" href="#">
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
             </a>
        )
    }
}

export default CommentsSection