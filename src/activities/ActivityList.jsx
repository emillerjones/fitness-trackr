import { useAuth } from "../auth/AuthContext";
import { deleteActivity } from "../api/activities";
import { useState } from "react";

export default function ActivityList({ activities, syncActivities, setError, error  }) {
  const { token } = useAuth();

  return (
    <ul>
      {activities.map((activity) => (        
        <li key={activity.id}>
          {activity.name}
          {token ? (<a onClick={async () => {
              try{
                await deleteActivity(token, activity);
                await syncActivities();
                setError(null)
              }catch(error){
                setError(error.message);
              }
            }
          } >Delete</a>) : null}
        </li>        
      ))}      

      </ul>
    
  );
}
