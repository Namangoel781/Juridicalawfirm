import React from "react";

const AccordionItem = ({
  index,
  title,
  image,
  description,
  isActive,
  onTitleClick,
}) => {
  return (
    <React.Fragment>
      <div className={`title ${isActive}`} onClick={() => onTitleClick(index)}>
        {title}
      </div>
      <div className={`content ${isActive}`}>
        <img src={image} alt={title} />
        <p>{description}</p>
      </div>
    </React.Fragment>
  );
};

export default AccordionItem;
