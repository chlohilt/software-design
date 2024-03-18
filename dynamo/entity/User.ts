export class User {

    public constructor (followerHandle: string, followerName: string, followeeHandle: string, followeeName: string) {
        this.followee_handle = followeeHandle
        this.follower_handle = followerHandle
        this.followee_name = followeeName
        this.follower_name = followerName
    }
    get followee_name() {
        return this._followee_name;
    }

    set followee_name(value) {
        this._followee_name = value;
    }
    get follower_handle() {
        return this._follower_handle;
    }

    set follower_handle(value) {
        this._follower_handle = value;
    }
    get follower_name() {
        return this._follower_name;
    }

    set follower_name(value) {
        this._follower_name = value;
    }
    get followee_handle() {
        return this._followee_handle;
    }

    set followee_handle(value) {
        this._followee_handle = value;
    }
    private _follower_handle: string = ""
    private _follower_name: string = ""
    private _followee_handle: string = ""
    private _followee_name: string = ""
}