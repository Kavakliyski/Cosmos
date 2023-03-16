module.exports = ({ env }) => ({
    "vercel-deploy": {
        enabled: true,
        config: {
            deployHook:
                "https://api.vercel.com/v1/integrations/deploy/prj_Jx9ZWwf6HcAa8rrA8s84ihqbTLPR/JCVpNoy03d",
            apiToken: "RIHQZAtEL1syBuhTkKVdanyr",
            appFilter: "cosmos-cms",
            // teamFilter: "your-team-id-on-vercel",
            roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
        },
    },
});