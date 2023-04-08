import React from "react";
import { useParams } from "react-router-dom";
import { DetailMembers } from "@/github-api";
import { AppLayout } from "@/layout";
import { Container } from "@mui/material";

interface Props {
  name: string,
  location: string,
  repos_url: string,
  avatar: string,
}

export const DetailPage = () => {
  const {id, organizacion} = useParams();
  const [users, setUsers] = React.useState({name:'', location:'', repos_url:'', avatar:'', company:''});

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setUsers({...users, name: json.name, location: json.location, repos_url: json.repos_url, avatar: json.avatar_url, company: json.company});
      });
  }, []);

  return (
    <AppLayout>
        <Container>
            <DetailMembers users={users} id={id} organizacion={organizacion}/>
        </Container>
    </AppLayout>
  
  );
};
