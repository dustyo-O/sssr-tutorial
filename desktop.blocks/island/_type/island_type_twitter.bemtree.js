block('island').mod('type', 'twitter').content()(function() {
    var data = {
        postLink: '#',
        userName: 'user@name',
        userNick: 'user@nick',
        createdAt: '19 of July',
        avatar: '#avatar',
        text: 'message going here',
        type: 'twitter'
    };
    return [
        {
            elem: 'header',
            content: {
                block: 'user',
                content: [
                    {
                        block: 'link',
                        mods: { theme: 'islands' },
                        mix: { block: 'user', elem: 'name' },
                        url: data.postLink,
                        content: [data.userName, ' @', data.userNick]
                    },
                    {
                        elem: 'post-time',
                        content: data.createdAt.toString()
                    },
                    {
                        block: 'image',
                        mix: { block: 'user', elem: 'icon' },
                        url: data.avatar,
                        alt: data.userName
                    }
                ]
            }
        },
        {
            elem: 'text',
            content: data.text
        },
        {
            elem: 'footer',
            content: [
                {
                    block: 'service',
                    mods: { type: data.type }
                }
            ]
        }
    ];
});
