import Utils from './utils/utils';

export default {

    swagger: {
        options: {
            basePath: '/api/',
            documentationPath: '/docs',
            jsonEditor: true,
            info: {
                title: 'API Documentation',
                version: `${process.env.GIT_BRANCH}`.substring(12) || 'develop',
                contact: {
                    name: 'Prodigy Doc Responsible',
                    email: 'responsibleEmailAdress@prodigynetwork.com',
                },
            },
            grouping: 'tags',
            sortEndpoints: 'ordered',
        },
    }
};
