import React from "react";
import { useParams } from "react-router-dom";
import { MemberEntity } from "@/pods";
import { ListComponent } from "./list.component";
import { datosOrg } from "./list.vm";

export const ListContainer: React.FC = () => {
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

  React.useEffect(() => {
    handleSearch(organizationName);
  }, []);

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
    
    <ListComponent members={members} handleSearch={handleSearch} organization={organization}/>
  );
};
