} else if (context.event.text === 'เพิ่มสินค้า') {
  await context.sendFlex('This is an advanced flex', {
    type: 'bubble',
    direction: 'ltr',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'baseline',
          contents: [
            {
              type: 'text',
              text: '+ เปลี่ยนรูปภาพ',
              color: '#9F9898FF',
              contents: []
            },
            {
              type: 'icon',
              size: 'lg',
              url:
                'https://raw.githubusercontent.com/chadaporn29797/project2020/main/pencil%20(1).png',
            },
          ]
        },
        {
          type: 'image',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png',
          size: 'full',
          backgroundColor: '#FFFFFFFF'
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'ชื่อสินค้า',
              contents: []
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '+ ใส่ชื่อของสินค้า',
                  color: '#9F9898FF',
                  contents: []
                },
                {
                  type: 'icon',
                  size: 'lg',
                  url:
                    'https://raw.githubusercontent.com/chadaporn29797/project2020/main/pencil%20(1).png',
                },
              ]
            },
          ]
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'รายละเอียด',
              contents: []
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '+ ใส่รายละเอียดของสินค้า',
                  color: '#9F9898FF',
                  contents: []
                },
                {
                  type: 'icon',
                  size: 'lg',
                  url:
                    'https://raw.githubusercontent.com/chadaporn29797/project2020/main/pencil%20(1).png',
                },
              ]
            },
          ]
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'ราคา',
              contents: []
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '+ ใส่ราคาของสินค้า',
                  color: '#9F9898FF',
                  contents: []
                },
                {
                  type: 'icon',
                  size: 'lg',
                  url:
                    'https://raw.githubusercontent.com/chadaporn29797/project2020/main/pencil%20(1).png',
                },
              ]
            },
          ]
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'หมวดหมู่',
              contents: []
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '+ ใส่หมวดหมู่ของสินค้า',
                  color: '#9F9898FF',
                  contents: []
                },
                {
                  type: 'icon',
                  size: 'lg',
                  url:
                    'https://raw.githubusercontent.com/chadaporn29797/project2020/main/pencil%20(1).png',
                },
                
              ]
            },
          ]
        }
      ]
    }
  });


} else if (context.event.text === 'รายการสินค้าแนะนำ') {
  await context.sendFlex('This is an advanced flex', {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          flex: 0,
          backgroundColor: '#47E291FF',
          contents: [
            {
              type: 'text',
              text: 'ติ๊กช้อป',
              size: 'lg',
              color: '#FFFBFBFF',
              align: 'center',
              contents: [],
            },
          ],
        },
        hero: {
          type: 'image',
          url:
            'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: 'เก้าอี้สีขาว',
              weight: 'bold',
              size: 'xl',
              wrap: true,
              contents: [],
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: 'เก้าอี้วิเศษ นั่งแล้วจะล่องหนได้',
                  color: '#636363FF',
                  contents: [],
                },
              ],
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '265',
                  weight: 'bold',
                  size: 'xl',
                  flex: 0,
                  wrap: true,
                  contents: [],
                },
                {
                  type: 'text',
                  text: 'บาท',
                  weight: 'bold',
                  size: 'sm',
                  flex: 0,
                  align: 'end',
                  wrap: true,
                  contents: [],
                },
              ],
            },
          ],
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              action: {
                type: 'message',
                label: 'ติดต่อร้านค้า',
                text: 'ติดต่อร้านค้า',
              },
              style: 'primary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: 'ดูสินค้าอื่นในร้าน',
                text: 'ดูสินค้าอื่นในร้าน',
              },
            },
          ],
        },
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          flex: 0,
          backgroundColor: '#47E291FF',
          contents: [
            {
              type: 'text',
              text: 'ติ๊กช้อป',
              size: 'lg',
              color: '#FFFBFBFF',
              align: 'center',
              contents: [],
            },
          ],
        },
        hero: {
          type: 'image',
          url:
            'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: 'เก้าอี้สีขาว',
              weight: 'bold',
              size: 'xl',
              wrap: true,
              contents: [],
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: 'เก้าอี้วิเศษ นั่งแล้วจะล่องหนได้',
                  color: '#636363FF',
                  contents: [],
                },
              ],
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '265',
                  weight: 'bold',
                  size: 'xl',
                  flex: 0,
                  wrap: true,
                  contents: [],
                },
                {
                  type: 'text',
                  text: 'บาท',
                  weight: 'bold',
                  size: 'sm',
                  flex: 0,
                  align: 'end',
                  wrap: true,
                  contents: [],
                },
              ],
            },
          ],
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              action: {
                type: 'message',
                label: 'ติดต่อร้านค้า',
                text: 'ติดต่อร้านค้า',
              },
              style: 'primary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: 'ดูสินค้าอื่นในร้าน',
                text: 'ดูสินค้าอื่นในร้าน',
              },
            },
          ],
        },
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          flex: 0,
          backgroundColor: '#47E291FF',
          contents: [
            {
              type: 'text',
              text: 'ติ๊กช้อป',
              size: 'lg',
              color: '#FFFBFBFF',
              align: 'center',
              contents: [],
            },
          ],
        },
        hero: {
          type: 'image',
          url:
            'https://raw.githubusercontent.com/chadaporn29797/project2020/main/fish.jpg',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: 'เก้าอี้สีขาว',
              weight: 'bold',
              size: 'xl',
              wrap: true,
              contents: [],
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: 'เก้าอี้วิเศษ นั่งแล้วจะล่องหนได้',
                  color: '#636363FF',
                  contents: [],
                },
              ],
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '265',
                  weight: 'bold',
                  size: 'xl',
                  flex: 0,
                  wrap: true,
                  contents: [],
                },
                {
                  type: 'text',
                  text: 'บาท',
                  weight: 'bold',
                  size: 'sm',
                  flex: 0,
                  align: 'end',
                  wrap: true,
                  contents: [],
                },
              ],
            },
          ],
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              action: {
                type: 'message',
                label: 'ติดต่อร้านค้า',
                text: 'ติดต่อร้านค้า',
              },
              style: 'primary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: 'ดูสินค้าอื่นในร้าน',
                text: 'ดูสินค้าอื่นในร้าน',
              },
            },
          ],
        },
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          flex: 0,
          backgroundColor: '#47E291FF',
          contents: [
            {
              type: 'text',
              text: 'ติ๊กช้อป',
              size: 'lg',
              color: '#FFFBFBFF',
              align: 'center',
              contents: [],
            },
          ],
        },
        hero: {
          type: 'image',
          url:
            'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: 'เก้าอี้สีขาว',
              weight: 'bold',
              size: 'xl',
              wrap: true,
              contents: [],
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: 'เก้าอี้วิเศษ นั่งแล้วจะล่องหนได้',
                  color: '#636363FF',
                  contents: [],
                },
              ],
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '265',
                  weight: 'bold',
                  size: 'xl',
                  flex: 0,
                  wrap: true,
                  contents: [],
                },
                {
                  type: 'text',
                  text: 'บาท',
                  weight: 'bold',
                  size: 'sm',
                  flex: 0,
                  align: 'end',
                  wrap: true,
                  contents: [],
                },
              ],
            },
          ],
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              action: {
                type: 'message',
                label: 'ติดต่อร้านค้า',
                text: 'ติดต่อร้านค้า',
              },
              style: 'primary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: 'ดูสินค้าอื่นในร้าน',
                text: 'ดูสินค้าอื่นในร้าน',
              },
            },
          ],
        },
      },
      {
        type: 'bubble',
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              action: {
                type: 'uri',
                label: 'See more',
                uri: 'https://linecorp.com',
              },
              flex: 1,
              gravity: 'center',
            },
          ],
        },
      },
    ],
  });