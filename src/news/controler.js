import News from "./model"

const newsControler = {
    
    async post (req, res) {
    try {
        const photo = new photo(req.body);
        await photo.save();
        res.send(photo);

        } catch (error) {
        res.status(500).send(error);
        }
    }
}


export default newsControler;