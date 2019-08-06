const devModel = require('../models/dev');

module.exports = {
   async store(req, res) {
        const { userId } = req.params;
        const { user } = req.headers;

        const dislikedDev = await devModel.findById(userId);
        const loggedDev = await devModel.findById(user);

        if (!dislikedDev) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        loggedDev.dislikes.push(dislikedDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};
