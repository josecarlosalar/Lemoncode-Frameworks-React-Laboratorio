export interface datosOrg {
    name: string;
    description: string;
    avatar_url: string;
    followers: number;
    following: string;
}
  
export interface MemberEntity {
    id: number;
    login: string;
    avatarUrl: string;
}