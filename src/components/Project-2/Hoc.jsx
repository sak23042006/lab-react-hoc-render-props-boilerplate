import React, { useState } from "react";

const HOC = (Wrapped) => {
  return (props) => {
    const [likeCounter, setLikeCounter] = useState(0);

    const handleLike = () => {
      setLikeCounter((prevCounter) => prevCounter + 1);
    };

    return (
      <Wrapped
        {...props}
        likeHandle={handleLike}
        likeCounter={likeCounter}
      />
    );
  };
};

export default HOC;