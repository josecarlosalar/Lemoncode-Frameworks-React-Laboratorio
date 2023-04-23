import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailComponent } from "./detail.component";
import { getUser } from "./api";

export const DetailContainer = () => {
  const {id, organizacion} = useParams();
  const [users, setUsers] = React.useState({name:'', location:'', repos_url:'', avatarUrl:'', company:''});

  useEffect(() => {
    const fetchData = async () => {
        const response = await getUser(id);
        setUsers({...users, name: response.name, location: response.location, repos_url: response.repos_url, avatarUrl: response.avatar_url, company: response.company});
      }
  
      fetchData();
    
  }, [id]);

  return (
    <>
        <DetailComponent organizacion={organizacion} id={id} user={users}/>
    </>
  )
}
