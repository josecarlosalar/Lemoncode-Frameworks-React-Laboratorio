import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MemberEntity } from "./list.vm";
import { ListComponent } from "./list.component";
import { datosOrg } from "./list.vm";
import { getOrganization } from "./api/list.api";
import { getMemberList } from "./list.repository";
import { routes } from "@/router";

export const ListContainer: React.FC = () => {
  const {organizacion} = useParams();
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organizationName] = React.useState<string>(organizacion);
  const [organization, setOrganization] = React.useState<datosOrg[]>([]);
  const navigate = useNavigate();

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
    
      getMemberList(organizationName).then(setMembers);
      getOrganization(organizationName).then((json) => {
        setOrganization([convertToDatosOrg(json)]);
      });
      navigate(routes.list(organizationName));
  };

  return (
    <ListComponent members={members} handleSearch={handleSearch} organization={organization}/>
  );
};
