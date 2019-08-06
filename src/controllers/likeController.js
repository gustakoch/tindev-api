const devModel = require('../models/dev');

module.exports = {
   async store(req, res) {
        const { userId } = req.params;
        const { user } = req.headers;

        const likedDev = await devModel.findById(userId);
        const loggedDev = await devModel.findById(user);

        if (!likedDev) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        if (likedDev.likes.includes(loggedDev._id)) {
            console.log('deu match');
        }

        loggedDev.likes.push(likedDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};
