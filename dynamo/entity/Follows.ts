import {User} from "./User";

export class Follows {
    private followerHandle: User
    private followingHandle: User

    public constructor(followerHandle: User, followingHandle: User) {
        this.followingHandle=followingHandle
        this.followerHandle = followerHandle
    }

}