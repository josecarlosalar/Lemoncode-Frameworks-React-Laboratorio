export interface datosOrg {
    name: string;
    description: string;
    avatar_url: string;
    followers: number;
    following: string;
}
  
export interface MemberEntity {
    id: string;
    login: string;
    avatar_url: string;
}