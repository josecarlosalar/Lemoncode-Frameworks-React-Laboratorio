import React from "react";
import { Link, generatePath } from "react-router-dom";
import { MemberEntity } from "./model";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from "@mui/material";
import SearchAppBar from "./header";
import Container from '@mui/material/Container';

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => {
        setMembers(json);
        console.log(json);
      });
  }, []);

  return (
    <>
      <SearchAppBar />

    
      <Container className="container">
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper"
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={member.avatar_url} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={member.id}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        ></Typography>
                        <Link
                          to={generatePath("/detail/:id", { id: member.login })}
                        >
                          {member.login}
                        </Link>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </>
          </React.Fragment>
        ))}
      </Container>
    </>
  );
};
