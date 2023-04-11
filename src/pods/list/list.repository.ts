import * as api from "./api/list.api";
import { mapMemberListToVM } from "./list.mappers";

export const getMemberList = (organizationName: string) => {
    return api.getMemberList(organizationName).then(mapMemberListToVM);
}