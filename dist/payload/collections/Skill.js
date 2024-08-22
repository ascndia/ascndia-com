var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fields = [
    {
        name: 'title',
        type: 'text'
    },
    {
        name: 'description',
        type: 'text'
    },
    {
        name: 'show',
        type: 'checkbox'
    },
    {
        name: 'showInDashboard',
        type: 'checkbox'
    },
    {
        name: 'featured',
        type: 'checkbox'
    }
];
export var Skill = {
    slug: 'skills',
    access: {
        read: function () { return true; }
    },
    fields: __spreadArray(__spreadArray([], fields, true), [
        {
            name: 'url',
            type: 'text'
        },
        {
            name: 'src',
            type: 'text'
        },
        {
            name: 'mastery',
            type: 'text'
        },
        {
            name: 'usage',
            type: 'text'
        },
        {
            name: 'category',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    type: 'text'
                }
            ]
        }
    ], false)
};
