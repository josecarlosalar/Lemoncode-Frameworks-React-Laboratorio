import * as am from "./api/list.api.model";
import * as vm from "./list.vm";

export const mapMemberListToVM = (list: am.MemberEntity[]): vm.MemberEntity[] => 
    list.map(mapMemberToVM);

export const mapMemberToVM = (item: am.MemberEntity): vm.MemberEntity => ({
    id: item.id,
    login: item.login,
    avatarUrl: item.avatar_url,
});