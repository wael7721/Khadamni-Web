const Post = require('../model/post.model');

const handleNewPost = async (req, res) => {
    const { employerid, title, description, dateofpost } = req.body;
    if (!employerid || !title || !description || !dateofpost ) return res.status(400).json({ 'message': 'Username and password are required.' });

    try{
        const result = await Post.create({
            "employee": employerid,
            "job": title,
            "description": description,
            


        });
console.log(result);
res.status(201).json({ 'success': `New user ${user} created!` });

    }
    catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}
module.exports = { handleNewPost };