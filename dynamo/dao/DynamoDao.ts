import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DeleteCommand, DeleteCommandInput,
    DynamoDBDocumentClient,
    GetCommand, GetCommandInput,
    PutCommand, QueryCommand,
    UpdateCommand, UpdateCommandInput,
} from "@aws-sdk/lib-dynamodb";
import {User} from "../entity/User";
import {DataPage} from "../entity/DataPage";
import {Follows} from "../entity/Follows";

export class DynamoDao {
    readonly tableName = "follows"
    readonly indexName = "follows_index"
    readonly followerHandle = "follower_handle"
    readonly followeeHandle = "followee_handle"
    readonly followeeName = "follower_name"
    readonly followerName = "followee_name"

    private readonly client = DynamoDBDocumentClient.from(new DynamoDBClient());

    async getPageOfFollowees(followerHandle: string, pageSize: number, lastFolloweeHandle: string | undefined): Promise<DataPage<Follows>> {
        const params = {
            KeyConditionExpression: this.followerHandle + " = :v",
            ExpressionAttributeValues: {
                ":v": followerHandle,
            },
            TableName: this.tableName,
            Limit: pageSize,
            ExclusiveStartKey:
                lastFolloweeHandle === undefined
                    ? undefined
                    : {
                        [this.followerHandle]: followerHandle,
                        [this.followeeHandle]: lastFolloweeHandle,
                    },
        };

        const items: Follows[] = [];
        const data = await this.client.send(new QueryCommand(params));
        const hasMorePages = data.LastEvaluatedKey !== undefined;
        data.Items?.forEach((item) =>
            items.push(
                new Follows(
                    item[this.followerHandle],
                    item[this.followeeHandle]
                )
            )
        );
        return new DataPage<Follows>(items, hasMorePages);
    }

    async getPageOfFollowers(followeeHandle: string, pageSize: number, lastFollowerHandle: string | undefined): Promise<DataPage<Follows>> {
        const params = {
            KeyConditionExpression: this.followerHandle + " = :v",
            ExpressionAttributeValues: {
                ":v": followeeHandle,
            },
            TableName: this.tableName,
            Limit: pageSize,
            ExclusiveStartKey:
                lastFollowerHandle === undefined
                    ? undefined
                    : {
                        [this.followerHandle]: followeeHandle,
                        [this.followeeHandle]: lastFollowerHandle,
                    },
        };

        const items: Follows[] = [];
        const data = await this.client.send(new QueryCommand(params));
        const hasMorePages = data.LastEvaluatedKey !== undefined;
        data.Items?.forEach((item) =>
            items.push(
                new Follows(
                    item[this.followerHandle],
                    item[this.followeeHandle]
                )
            )
        );
        return new DataPage<Follows>(items, hasMorePages);
    }

    async getItem(user:User) {
        const params: GetCommandInput = {
            TableName: this.tableName,
            Key: this.generateUserItem(user),
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