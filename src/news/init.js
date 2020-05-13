import News from "./model";

export default {
    async run(req, res) {
        try {
            await News.deleteMany({});
            const newss = [
                {
                    title: "title1",
                    author: "author1",
                    text: "text1",
                    date: new Date("01-11-1997"),
                    stars: 1
                },
                {
                    title: "title2",
                    author: "author2",
                    text: "text2",
                    date: new Date("11-12-1997"),
                    stars: 2
                },
                {
                    title: "title3",
                    author: "author3",
                    text: "text3",
                    date: new Date("21-10-1999"),
                    stars: 3
                },
                {
                    title: "title4",
                    author: "author4",
                    text: "text4",
                    date: new Date("01-12-2007"),
                    stars: 4
                },
                {
                    title: "title5",
                    author: "author5",
                    text: "text5",
                    date: new Date("21-11-2010"),
                    stars: 5
                },
            ];

            newss.forEach(async news => await new News(news).save());
        } catch (error) {
            console.log(error)
        }
    }
}
