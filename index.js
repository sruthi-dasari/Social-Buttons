const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  <div className="bg-container">
    <div>
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button className="like-btn" buttonText="Like" />
        <Button className="comment-btn" buttonText="Comment" />
        <Button className="share-btn" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
