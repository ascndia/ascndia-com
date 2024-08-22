var adminsAndUser = function (_a) {
    var user = _a.req.user;
    if (user.role === 'admin')
        return true;
    return {
        id: {
            equals: user.id
        }
    };
};
export var User = {
    slug: 'users',
    auth: true,
    access: {
        read: adminsAndUser,
        create: function (_a) {
            var req = _a.req;
            return req.user.role === 'admin';
        },
        update: function (_a) {
            var req = _a.req;
            return req.user.role === 'admin';
        },
        delete: function (_a) {
            var req = _a.req;
            return req.user.role === 'admin';
        }
    },
    admin: {
        hidden: function (_a) {
            var user = _a.user;
            return user.role !== 'admin';
        },
        defaultColumns: ['id']
    },
    fields: [
        {
            name: 'role',
            defaultValue: 'admin',
            required: true,
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'User', value: 'user' }
            ]
        }
    ]
};
