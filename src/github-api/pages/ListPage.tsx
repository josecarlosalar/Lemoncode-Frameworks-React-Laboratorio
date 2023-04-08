import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { MemberEntity } from "../../model";
import { Navbar } from "@/ui";
import {
  SearchOrganization,
  GridMembers
} from "@/github-api";
import { SpaRounded } from "@mui/icons-material";
import { AppLayout } from "@/layout";

interface datosOrg {
    name: string;
    description: string;
    avatar_url: string;
    followers: number;
    following: string;
}

export const ListPage: React.FC = () => {
  const {organizacion} = useParams();
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organizationName, setOrganizationName] = React.useState<string>(organizacion);
  const [organization, setOrganization] = React.useState<datosOrg[]>([]);

  React.useEffect(() => {
    handleSearch(organizationName);
  }, []);

  const convertToDatosOrg = (json: any): datosOrg => ({
    name: json.name,
    description: json.description,
    avatar_url: json.avatar_url,
    followers: json.followers,
    following: json.following
  });

  const handleSearch = (organizationName: string) => {
    fetch(`https://api.github.com/orgs/${organizationName}/members`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching members");
        }
      })
      .then((json) => {
        setMembers(json);
      });
      
      fetch(`https://api.github.com/orgs/${organizationName}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching members");
        }
      })
      .then((json) => {
        setOrganization([convertToDatosOrg(json)]);
      });
  };

  return (
    <AppLayout>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <SearchOrganization
              organizationName={organizationName}
              onchangeOrganization={setOrganizationName}
              onSearch={handleSearch}
            />
          </Grid>
          
          <Grid container item xs={12} sm={6}>
            <Grid item xs={4} sm={4}>
                <img className="imagen-org sombra-img" src={organization[0]?.avatar_url} />
            </Grid>
            <Grid item xs={8} sm={8} className="datosOrg">
                <h2>Organización</h2>
                <h3>{organization[0]?.name}</h3>
                <p>{organization[0]?.description}</p>
                <p>{organization[0]?.followers} <span><strong>Followers</strong></span> | {organization[0]?.following} <span><strong>Following</strong></span></p>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} style={{ maxHeight: 700, overflow: "auto" }}>
            <h2>Miembros</h2>
            <GridMembers members={members} organizationName={organizationName}/>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
};
