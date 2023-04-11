import { MemberEntity } from "./list.api.model";

export const getMemberList = (organizationName: string): Promise<MemberEntity[]> => {
    return(
        fetch(`https://api.github.com/orgs/${organizationName}/members`)
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error("Error fetching members");
                }
              })
    )
}


export const getOrganization = (organizationName: string) => {
    return(
        fetch(`https://api.github.com/orgs/${organizationName}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Error fetching members");
            }
          })
    )
}