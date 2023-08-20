import React from 'react'
import "./status.css";



const priority = [
    { id: 0, name: "Todo" },
    { id: 1, name: "Backlog" },
    { id: 2, name: "In progress" },
    { id: 3, name: "Done" },
    { id: 4, name: "Cancelled" },
  ];

const Status = ({ticketData,userData}) => {


const userCount = (element) => {
    return ticketData
      .filter(function(elem) {
        return elem.status === element.name;
      })
      .map(function(elem) {
        return <Card data={elem} available={userData} />;
      });
  };

  return (
    <div className="box" >
      {priority.map((element) => {
        return (
          <div className="container" key={ticketData.id}>
            <FilteredHeader user={element} count={userCount(element).length} />
            {userCount(element)}
          </div>
        );
      })}
    </div>
  );



}

export default Status