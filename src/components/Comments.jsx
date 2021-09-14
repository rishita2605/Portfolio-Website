import React, { Component } from 'react';
import '../styles/comments.scss'
function Comments(){
    return (
      <div className="comments">
        <div className="left-child">
            <div className="review-left-heading">
              Write A Review
            </div>
            
              <form>
              <div className="form-content">
                <input type="text" className="review-name" placeholder="Name"/>
                <textarea className="review" placeholder="Describe your experience with us"></textarea>
                <button className="submit-review-btn">SUBMIT</button>
              </div>
              </form>

        </div>
        <div className="right-child">
            <div className="best-review-parent">
              <div className="best-review">
                “I honestly didn’t know
                what to expect when I placed
                my order, but it goes so well
                with my house! Amazing purchase!”
              </div>
              <div className="best-reviewer">
                  -Surabhi Kulshreshtha 
              </div>
            </div>
            
            <div className="view-comments">
                <a className="view-comments-btn">View More Comments</a>
                <div className="comment-div">
                <div className="comment-img">
                  
                  </div>
                  <div className="comment-shadow">
                    
                  </div>
                </div>
                
                

            </div>
            
        </div>
      </div>
    )

}
export default Comments;