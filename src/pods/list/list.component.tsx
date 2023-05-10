import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { MemberEntity } from "./list.vm";
import {
  SearchOrganization,
  GridMembers
} from "@/pods";
import { AppLayout } from "@/layout";
import { datosOrg } from "./list.vm";
import classes from "./list.styles.css";

interface Props {
    members: MemberEntity[];
    handleSearch: (organizationName: string) => void;
    organization: datosOrg[];
  }
  
export const ListComponent: React.FC<Props> = (props) => {
  const {organizacion} = useParams();
  const {members, handleSearch, organization} = props;
  const [organizationName, setOrganizationName] = React.useState<string>(organizacion);

  return (
    <AppLayout>
        <Grid className={classes.globalGrid} container spacing={2}>
            <Grid item xs={12}>
              <SearchOrganization
                organizationName={organizationName}
                onchangeOrganization={setOrganizationName}
                onSearch={handleSearch}
              />
            </Grid>
            <Grid item xs={6} className={classes.gridOrg}>
                <Grid className={classes.gridImagen} item xs={6} >
                    <img className={classes.imagenOrg} src={organization[0]?.avatar_url} />
                </Grid>
                <Grid item xs={6} className={classes.datosOrg}>
                    <h2>Organización</h2>
                    <h3>{organization[0]?.name}</h3>
                    <p>{organization[0]?.description}</p>
                    <p>{organization[0]?.followers} <span><strong>Followers</strong></span> | {organization[0]?.following} <span><strong>Following</strong></span></p>
                </Grid>
            </Grid>
            <Grid item xs={6} style={{ maxHeight: 700, overflow: "auto" }}>
              <h2 className={classes.headGridMembers}>Miembros</h2>
              <GridMembers members={members} organizationName={organizationName}/>
            </Grid>
        </Grid>
    </AppLayout>
  );
};
