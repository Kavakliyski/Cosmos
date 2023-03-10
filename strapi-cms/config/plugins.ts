module.exports = ({ env }) => ({
    "vercel-deploy": {
        enabled: true,
        config: {
            deployHook:
                "https://api.vercel.com/v1/integrations/deploy/prj_Np8V9RRfIhns6gjIBdQntf83SEva/ChchlRoRG9",
            apiToken: "rYvzx2Ow1AoasakvOS6thD4t",
            appFilter: "cosmos-cms",
            // teamFilter: "your-team-id-on-vercel",
            roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
        },
    },
});