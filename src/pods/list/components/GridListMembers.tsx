import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Pagination,
  Divider
} from "@mui/material";
import { Link } from "react-router-dom";
import { MemberEntity } from "../list.vm";
import { routes } from "@/router";
import classes from "../list.styles.css";

interface MembersProp {
  members: MemberEntity[],
  organizationName: string
}

export const GridMembers: React.FC<MembersProp> = (props) => {
  const { members, organizationName } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  const [selectedMember, setSelectedMember] = React.useState<MemberEntity>();

  const renderListItems = () => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    return members.slice(startIndex, endIndex).map((member) => (

        
        <List key={member.id}>
          <ListItem alignItems="flex-start" >
            <ListItemAvatar className={classes.avatarList}>
              <Avatar alt="Remy Sharp" src={member.avatarUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={`Id: ${member.id}`}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  ></Typography>
                  <Link to={routes.detail(organizationName, member.login)}>
                    {member.login}
                  </Link> 
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
      </List>
    
    ));
  };

  return (
    <>
      <Box
        sx={{
          boxShadow: 2,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          p: 1,
          m: 1,
          width: 450,
          height: 500,
          borderRadius: 2,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700"
        }}
      >
      <List>
        {renderListItems()}
      </List>
      </Box>
      <Pagination
        count={Math.ceil(members.length / perPage)}
        page={currentPage}
        onChange={(event, page) => setCurrentPage(page)}
        showFirstButton
        showLastButton
        color="primary"
      />
    </>
  );
};


