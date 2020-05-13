import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    author:String,
    text:String,
    date: Date,
    stars: Number,
});

const News = mongoose.model("News", newsSchema);

export default News;