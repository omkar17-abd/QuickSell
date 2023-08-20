import React from "react";
import "./user.css";


const User = ({ ticketData, userData }) => {
  const userCount = (user) => {
    return ticketData
      .filter(function(elem) {
        return elem.userId === user.id;
      })
      .map(function(elem) {
        return <Card data={elem} />;
      });
  };

  return (
    <div className="box">
      {userData.map((user) => {
        return (
          <div className="container">
            <FilteredHeader user={user} count={userCount(user).length} />
            {userCount(user)}
          </div>
        );
      })}
    </div>
  );
};

export default User;
