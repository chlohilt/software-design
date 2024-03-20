import {DynamoDao} from "./dao/DynamoDao";
import {User} from "./entity/User";

class Main {
    async run() {
        const dao = new DynamoDao();

        // await dao.getItem(new User("@AwesomeUser17", "Crazy Fan", "@CrazyFan", "Cool User17"))

        const dataPage1 = await dao.getPageOfFollowers("@AwesomeUser3", 10, undefined)
        const dataPage2 = await dao.getPageOfFollowees("@AwesomeUser5", 10, undefined)

        console.log("PAGE OF FOLLOWERS")
        dataPage1.printValues()
        console.log("PAGE OF FOLLOWEES")
        dataPage2.printValues()
    }
}

new Main().run().then(r => console.log("Done"))
