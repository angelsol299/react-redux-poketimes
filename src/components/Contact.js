import React from "react";

const Contact = props => {
  setTimeout(() => {
    props.history.push("/about");
  }, 2000);
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus
        maxime dolores amet impedit consectetur nostrum pariatur eligendi rem
        maiores animi excepturi quam sapiente omnis ullam, fugiat perferendis
        quod sunt.
      </p>
    </div>
  );
};

export default Contact;
