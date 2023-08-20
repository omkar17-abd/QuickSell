import React from "react";
import "./priority.css";

const priority = [
  { id: 0, name: "No priority" },
  { id: 1, name: "Low" },
  { id: 2, name: "Medium" },
  { id: 3, name: "High" },
  { id: 4, name: "Urgent" },
];

const Priority = ({ ticketData,userData }) => {
  const userCount = (element) => {
    return ticketData
      .filter(function(elem) {
        return elem.priority === element.id;
      })
      .map(function(elem) {
        return <Card data={elem} available={userData} />;
      });
  };

  return (
    <div className="box">
      {priority.map((element) => {
        return (
          <div className="container">
            <FilteredHeader user={element} count={userCount(element).length} />
            {userCount(element)}
          </div>
        );
      })}
    </div>
  );
};

export default Priority;
