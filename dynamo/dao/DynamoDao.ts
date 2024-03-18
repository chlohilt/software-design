import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DeleteCommand, DeleteCommandInput,
    DynamoDBDocumentClient,
    GetCommand, GetCommandInput,
    PutCommand,
    UpdateCommand, UpdateCommandInput,
} from "@aws-sdk/lib-dynamodb";
import {User} from "../entity/User";

export class DynamoDao {
    readonly tableName = "follows"
    readonly indexName = "follows_index"
    readonly followerHandle = "follower_handle"
    readonly followeeHandle = "followee_handle"
    readonly followeeName = "follower_name"
    readonly followerName = "followee_name"

    private readonly client = DynamoDBDocumentClient.from(new DynamoDBClient());

    async getItem(user:User) {
        const params: GetCommandInput = {
            TableName: this.tableName,
            Key: this.generateUserItem(user),
            ProjectionExpression: this.followeeHandle,
        };
        const output = await this.client.send(new GetCommand(params));
        return output.Item == undefined ? undefined : new User(output.Item[this.followeeHandle], output.Item[this.followerHandle], output.Item[this.followeeName], output.Item[this.followerName])
    }

    async updateItem(user: User, newFolloweeName: string, newFollowerName: string): Promise<void> {
        const params: UpdateCommandInput = {
            TableName: this.tableName,
            Key: this.generateUserItem(user),
            ExpressionAttributeValues: {
                ":followerName": newFollowerName,
                ":followeeName": newFolloweeName
            },
            UpdateExpression: "SET #followerName = :followerName, #followeeName = :followeeName",
            ExpressionAttributeNames: {
                "#followerName": this.followerName,
                "#followeeName": this.followeeName
            }
        };

        await this.client.send(new UpdateCommand(params));
    }

    async putItem(user: User): Promise<void> {
        const params = {
            TableName: this.tableName,
            Item: {
                [this.followeeHandle]: user.followee_handle,
                [this.followerHandle]: user.follower_handle,
                [this.followeeName]: user.followee_name,
                [this.followerName]: user.follower_name
            },
        };
        await this.client.send(new PutCommand(params));
    }


    async deleteItem(user:User) {
        const params: DeleteCommandInput = {
            TableName: this.tableName,
            Key: this.generateUserItem(user),
        };
        await this.client.send(new DeleteCommand(params));
    }

    private generateUserItem(user: User) {
        return {
            [this.followerHandle]: user.follower_handle,
            [this.followeeHandle]: user.followee_handle
        };
    }

}