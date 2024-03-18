import {DynamoDao} from "./dao/DynamoDao";
import {User} from "./entity/User";

class Main {
    async run() {
        const dao = new DynamoDao();

        for (let i = 0; i < 25; ++i) {
            await dao.putItem(new User("@CoolUser", "Cool User", "@Fan" + i, "Fan " + i))
        }

        for (let i = 0; i < 25; ++i) {
            await dao.putItem(new User("@AwesomeUser" + i, "Cool User" + i, "@CrazyFan", "Crazy Fan"))
        }

        await dao.getItem(new User("@AwesomeUser3", "Cool User3", "@CrazyFan", "Crazy Fan"))
        await dao.updateItem(new User("@AwesomeUser5", "Cool User5", "@CrazyFan", "Crazy Fan"), "New Followee", "@NewFollowee")
        await dao.deleteItem(new User("@CoolUser", "Cool User", "@Fan7", "Fan 7"))
    }
}

new Main().run().then(r => console.log("Done"))
