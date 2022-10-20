const Button = (props) => {
  //  Write your code here.
};

const element = (
  <div className="bg-container">
    <div>
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <button className="like-btn">Like</button>
        <button className="comment-btn">Comment</button>
        <button className="share-btn">Share</button>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
