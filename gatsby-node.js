exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;
    createRedirect({
        fromPath: `/cv`,
        toPath: `https://drive.google.com/file/d/1MsGR8oBWlljBy9C-cqQIoX2gpd_nrEct/view?usp=sharing`,
        isPermanent: true,
        redirectInBrowser: true,
    });
};
