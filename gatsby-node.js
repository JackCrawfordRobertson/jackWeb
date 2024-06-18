exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;
    createRedirect({
        fromPath: `/cv`,
        toPath: `https://drive.google.com/file/d/1g_bDzoelhFeQScVehBL2EC4tbaGt6Djd/view?usp=sharing`,
        isPermanent: true,
        redirectInBrowser: true,
    });
};
