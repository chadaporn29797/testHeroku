/* eslint-disable prettier/prettier */
// module.exports = require('./src');
// eslint-disable-next-line no-unused-vars

module.exports = async function App(context) {
  if (context.event.text === 'ลงขายสินค้า') {
    await context.linkRichMenu(process.env.SUB_RICH_MENU_2_ID);
  
  } else if (context.event.text === 'รายการสินค้า') {
    await context.linkRichMenu(process.env.SUB_RICH_MENU_3_ID);
  
  } else if (context.event.text === 'ค้นหาสินค้า') {
    await context.linkRichMenu(process.env.SUB_RICH_MENU_4_ID);
    
  } else if (context.event.text === 'หมวดหมู่สินค้า') {
    await context.linkRichMenu(process.env.SUB_RICH_MENU_5_ID);
  
  } else if (context.event.text === 'บริจาค') {
    await context.linkRichMenu(process.env.SUB_RICH_MENU_6_ID);

  } else if (context.event.text === 'แอดมิน') {
    await context.linkRichMenu(process.env.SUB_RICH_MENU_7_ID);

  } else if (context.event.text === 'ออกจากระบบ') {
    await context.linkRichMenu(process.env.MAIN_RICH_MENU_ID);

    ///////////// เมนูลงขายสินค้า /////////////////

  } else if (context.event.text === 'เพิ่มสินค้า') {
    await context.sendText(
      'กดคำว่าแก้ไข เพื่อใส่ข้อมูลสินค้า'
    );
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
                type: 'text',
                text: 'แก้ไข',
                color: '#DB9B6AFF',
                size: "sm",
                align: "end",
                action: {
                  type: 'message',
                  label: 'แก้ไข',
                  text: 'แก้ไขรูปภาพ'
                },
                contents: []
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
                  },{
                    type: 'text',
                    text: 'แก้ไข',
                    color: '#DB9B6AFF',
                    size: "sm",
                    align: "end",
                    action: {
                      type: 'message',
                      label: 'แก้ไข',
                      text: 'แก้ไขชื่อสินค้า'
                    },
                    contents: []
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
                    text: '+ ใส่รายละเอียด',
                    color: '#9F9898FF',
                    contents: []
                  },
                  {
                    type: 'text',
                    text: 'แก้ไข',
                    color: '#DB9B6AFF',
                    size: "sm",
                    align: "end",
                    action: {
                      type: 'message',
                      label: 'แก้ไข',
                      text: 'แก้ไขรายละเอียด'
                    },
                    contents: []
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
                    type: 'text',
                    text: 'แก้ไข',
                    color: '#DB9B6AFF',
                    size: "sm",
                    align: "end",
                    action: {
                      type: 'message',
                      label: 'แก้ไข',
                      text: 'แก้ไขราคา'
                    },
                    contents: []
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
                    text: '+ ใส่หมวดหมู่สินค้า',
                    color: '#9F9898FF',
                    contents: []
                  },
                  {
                    type: 'text',
                    text: 'แก้ไข',
                    color: '#DB9B6AFF',
                    size: "sm",
                    align: "end",
                    action: {
                      type: 'message',
                      label: 'แก้ไข',
                      text: 'แก้ไขหมวดหมู่'
                    },
                    contents: []
                  },
                ]
              },
              
            ]
          }
        ]
      }
    });

  /////----------แก้ไข เมื่อ เพิ่มสินค้า ----------/////
  } else if (context.event.text === 'แก้ไขรูปภาพ') {
    await context.sendText(
      'กรุณาใส่รูปสินค้า'
    );
    await context.sendText(
      'จะถ่ายรูปสินค้าส่งเข้ามาในไลน์ หรือเลือกจากแกลอรี่ก็ได้นะครับ'
    );
  } else if (context.event.text === 'แก้ไขชื่อสินค้า') {
    await context.sendText(
      'กรุณาใส่ชื่อสินค้า'
    );
  } else if (context.event.text === 'แก้ไขราคา') {
    await context.sendText(
      'กรุณาใส่ราคาสินค้า เป็นตัวเลข ไม่ต้องเติมบาทนะครับ'
    );
  } else if (context.event.text === 'แก้ไขรายละเอียด') {
    await context.sendText(
      'กรุณาใส่รายละเอียดสินค้า '
    );
  } else if (context.event.text === 'แก้ไขหมวดหมู่') {
    await context.sendText(
      `กรุณาใส่หมวดหมู่สินค้าตามนี้
      “อาหาร” 
      “เครื่องใช้ไฟฟ้า” 
      “เครื่องแต่งกาย” 
      “บ้านและสวน”
      “สุขภาพและความงาม”
      “เครื่องดนตรี”
      “สัตว์เลี้ยง”
      “กีฬา”
      “อื่นๆ”
    กรุณาใส่ให้ถูกต้องเพื่อช่วยให้การค้นหาสินค้าง่ายขึ้นนะครับ `
    );

  } else if (context.event.text === 'สินค้าของฉัน') {
    await context.sendFlex('This is an advanced flex', {
      type: 'bubble',
      size: 'mega',
      direction: 'ltr',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#47E291FF',
        contents: [
          {
            type: 'text',
            text: 'รายการสินค้าของคุณ',
            weight: 'bold',
            size: 'lg',
            color: '#FFFFFFFF',
            align: 'center',
            contents: [],
          },
        ],
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            //box1
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                //box2
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'image',
                    url:
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/fish.jpg',
                    aspectMode: 'cover',
                    size: 'full',
                  },
                ],
                cornerRadius: '100px',
                width: '72px',
                height: '72px',
              },
              {
                //box3
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    //text1
                    type: 'text',
                    contents: [
                      {
                        type: 'span',
                        text: 'ปลานิล',
                        weight: 'bold',
                        color: '#000000',
                      },
                    ],
                    size: 'lg',
                    wrap: true,
                  },
                  {
                    //text2
                    type: 'text',
                    contents: [
                      {
                        type: 'span',
                        text: 'ปลานิลสดร้านเจ๊แดง ราคาถูก',
                        color: '#928585FF',
                      },
                    ],
                    size: 'sm',
                    wrap: true,
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'text',
                        text: '70',
                        weight: 'bold',
                        size: 'lg',
                        color: '#2C8921FF',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'บาท',
                        weight: 'bold',
                        size: 'lg',
                        align: "end",
                        contents: []
                      },
                    ]
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'text',
                        text: 'แก้ไข',
                        color: '#277FE0FF',
                        action: {
                          type: 'message',
                          label: 'แก้ไข',
                          text: 'แก้ไข'
                        },
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'ลบ',
                        color: '#E2575EFF',
                        align: "end",
                        action: {
                          type: 'message',
                          label: 'ลบ',
                          text: 'ลบ'
                        },
                        contents: []
                      },
                    ]
                  },
                ],
              },
            ],
            spacing: 'xl',
            paddingAll: '20px',
          },
          {
            type: 'separator',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'image',
                    url:
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/fish.jpg',
                    aspectMode: 'cover',
                    size: 'full',
                  },
                ],
                cornerRadius: '100px',
                width: '72px',
                height: '72px',
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    contents: [
                      {
                        type: 'span',
                        text: 'ปลาทับทิม',
                        weight: 'bold',
                        color: '#000000',
                      },
                    ],
                    size: 'lg',
                    wrap: true,
                  },
                  {
                    type: 'text',
                    contents: [
                      {
                        type: 'span',
                        text: 'ปลาทับทิมสดร้านเจ๊แดง ราคาถูก ลูกสาวสวยมากกกกก',
                        color: '#928585FF',
                      },
                    ],
                    size: 'sm',
                    wrap: true,
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'text',
                        text: '80',
                        weight: 'bold',
                        size: 'lg',
                        color: '#2C8921FF',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'บาท',
                        weight: 'bold',
                        size: 'lg',
                        align: "end",
                        contents: []
                      },
                    ]
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'text',
                        text: 'แก้ไข',
                        color: '#277FE0FF',
                        action: {
                          type: 'message',
                          label: 'แก้ไข',
                          text: 'แก้ไข'
                        },
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'ลบ',
                        color: '#E2575EFF',
                        align: "end",
                        action: {
                          type: 'message',
                          label: 'ลบ',
                          text: 'ลบ'
                        },
                        contents: []
                      },
                    ]
                  },
                ],
              },
            ],
            spacing: 'xl',
            paddingAll: '20px',
          },
          
        ],
        paddingAll: '0px',
      },
      footer: {
        type: 'box',
        layout: 'horizontal',
        backgroundColor: '#47E291FF',
        contents: [
          {
            type: 'button',
            action: {
              type: 'message',
              label: 'เพิ่มสินค้า',
              text: 'เพิ่มสินค้า',
            },
            color: '#FFFFFFFF',
            gravity: 'center',
          },
        ],
      },
      styles: {
        header: {
          backgroundColor: '#47E291FF',
          separatorColor: '#161313FF',
        },
      },
    });

  } else if (context.event.text === 'ตั้งค่าร้านค้า') {
    await context.sendFlex('This is an advanced flex', {
      type: 'bubble',
      size: 'mega',
      direction: 'ltr',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#47E291FF',
        contents: [
          {
            type: 'text',
            text: 'ข้อมูลร้านค้า',
            weight: 'bold',
            size: 'lg',
            color: '#FFFFFFFF',
            align: 'center',
            contents: [],
          },
        ],
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'image',
                    url:
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/id-card.png',
                    aspectMode: 'cover',
                    size: 'full',
                  },
                ],
                // cornerRadius: '100px',
                width: '40px',
                height: '40px',
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    contents: [
                      {
                        type: 'span',
                        text: 'ชื่อร้านค้า',
                        weight: 'bold',
                        color: '#000000',
                      },
                    ],
                    size: 'md',
                    wrap: true,
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'text',
                        text: 'เจ๊แดงปลานิลสด',
                        size: "sm",
                        color: '#9F9898FF',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'แก้ไข',
                        color: '#DB9B6AFF',
                        size: "sm",
                        align: "end",
                        action: {
                          type: 'message',
                          label: 'แก้ไข',
                          text: 'แก้ไข'
                        },
                        contents: []
                      },
                    ]
                  },
                ],
              },
            ],
            spacing: 'xl',
            paddingAll: '15px',
          },
          {
            type: 'separator',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'image',
                    url:
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/google-maps.png',
                    aspectMode: 'cover',
                    size: 'full',
                  },
                ],
                // cornerRadius: '100px',
                width: '40px',
                height: '40px',
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    contents: [
                      {
                        type: 'span',
                        text: 'ที่ตั้งร้านค้า',
                        weight: 'bold',
                        color: '#000000',
                      },
                    ],
                    size: 'md',
                    wrap: true,
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'text',
                        text: 'ศรีสะเกษ',
                        size: "sm",
                        color: '#9F9898FF',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'แก้ไข',
                        color: '#DB9B6AFF',
                        size: "sm",
                        align: "end",
                        action: {
                          type: 'message',
                          label: 'แก้ไข',
                          text: 'แก้ไข'
                        },
                        contents: []
                      },
                    ]
                  },
                ],
              },
            ],
            spacing: 'xl',
            paddingAll: '15px',
          },
          {
            type: 'separator',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'image',
                    url:
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/telephone.png',
                    aspectMode: 'cover',
                    size: 'full',
                  },
                ],
                // cornerRadius: '100px',
                width: '40px',
                height: '40px',
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    contents: [
                      {
                        type: 'span',
                        text: 'เบอร์โทรศัพท์',
                        weight: 'bold',
                        color: '#000000',
                      },
                    ],
                    size: 'md',
                    wrap: true,
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'text',
                        text: '0848346449',
                        size: "sm",
                        color: '#9F9898FF',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'แก้ไข',
                        color: '#DB9B6AFF',
                        size: "sm",
                        align: "end",
                        action: {
                          type: 'message',
                          label: 'แก้ไข',
                          text: 'แก้ไข'
                        },
                        contents: []
                      },
                    ]
                  },
                ],
              },
            ],
            spacing: 'xl',
            paddingAll: '15px',
          },
          {
            type: 'separator',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'image',
                    url:
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/line.png',
                    aspectMode: 'cover',
                    size: 'full',
                  },
                ],
                width: '40px',
                height: '40px',
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    contents: [
                      {
                        type: 'span',
                        text: 'LINE',
                        weight: 'bold',
                        color: '#000000',
                      },
                    ],
                    size: 'md',
                    wrap: true,
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'text',
                        text: 'plasodbyjedang',
                        size: "sm",
                        color: '#9F9898FF',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'แก้ไข',
                        color: '#DB9B6AFF',
                        size: "sm",
                        align: "end",
                        action: {
                          type: 'message',
                          label: 'แก้ไข',
                          text: 'แก้ไข'
                        },
                        contents: []
                      },
                    ]
                  },
                ],
              },
            ],
            spacing: 'xl',
            paddingAll: '15px',
          },
          {
            type: 'separator',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'image',
                    url:
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/facebook.png',
                    aspectMode: 'cover',
                    size: 'full',
                  },
                ],
                // cornerRadius: '100px',
                width: '40px',
                height: '40px',
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    contents: [
                      {
                        type: 'span',
                        text: 'Facebook',
                        weight: 'bold',
                        color: '#000000',
                      },
                    ],
                    size: 'md',
                    wrap: true,
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'text',
                        text: '/เจ๊แดงปลานิลสด',
                        size: "sm",
                        color: '#9F9898FF',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'แก้ไข',
                        color: '#DB9B6AFF',
                        size: "sm",
                        align: "end",
                        action: {
                          type: 'message',
                          label: 'แก้ไข',
                          text: 'แก้ไข'
                        },
                        contents: []
                      },
                    ]
                  },
                ],
              },
            ],
            spacing: 'xl',
            paddingAll: '15px',
          },
        ],
        paddingAll: '0px',
      },
      
      footer: {
        type: 'box',
        layout: 'horizontal',
        backgroundColor: '#47E291FF',
        contents: [
          {
            type: 'button',
            action: {
              type: 'message',
              label: 'เพิ่มสินค้า',
              text: 'เพิ่มสินค้า',
            },
            color: '#FFFFFFFF',
            gravity: 'center',
          },
        ],
      },
      styles: {
        header: {
          backgroundColor: '#47E291FF',
          separatorColor: '#161313FF',
        },
      },
    });

  } else if (context.event.text === 'วิธีลงขายสินค้า') {
    await context.sendText(
      '1. กดปุ่ม "ตั้งค่าร้านค้า" ก่อนนะครับ จะมีการ์ดขึ้นมา พร้อมกับข้อความระบุว่าให้ใส่ข้อมูลอะไรเป็นลำดับ หากข้อมูลเพียงพอก็จะสามารถ เพิ่มสินค้าได้ '
    );
    await context.sendText(
      '2. กดปุ่ม "เพิ่มสินค้า" จะมีการ์ดขึ้นมา พร้อมกับข้อความระบุว่าให้ใส่ข้อมูลอะไรเป็นลำดับ'
    );
    await context.sendText(
      '3. สามารถดูรายการสินค้า และแก้ไขหรือลบสินค้าได้ โดยกดปุ่ม "สินค้าของฉัน" คาบบบ'
    );
    await context.sendText(
      '** หากพบเจอการโพสต์สินค้าที่ไม่สมควร จะขออนุญาตลบสินค้า และตัดสิทธิ์การใช้งาน บายมั้ย นะงับ'
    );

  //////////////////// เมนูรายการสินค้า ////////////////////////
  } else if (context.event.text === 'รายการสินค้าแนะนำ') {
    await context.sendFlex('This is an advanced flex', {
      type: 'carousel',
      contents: [
        {
          type: 'bubble',
          hero: {
            type: 'image',
            url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png',
            size: 'full',
            aspectRatio: '20:13',
            aspectMode: 'cover',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: 'แฮมเบอร์เกอร์',
                weight: 'bold',
                size: 'xl',
                contents: []
              },
              {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/baht.png'
                      },
                      {
                        type: 'text',
                        text: '100',
                        weight: 'bold',
                        size: 'lg',
                        color: '#02970EFF',
                        margin: 'md',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'บาท',
                        weight: 'bold',
                        size: 'md',
                        color: '#AAAAAA',
                        align: 'end',
                        contents: []
                      }
                    ]
                  },
                  {
                    type: 'text',
                    text: 'แฮมเบอร์เกอร์ ขายส่ง ราคาถูก อร่อยที่สุดในประเทศไทย',
                    size: 'md',
                    color: '#AAAAAA',
                    wrap: true,
                    contents: []
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/store.png'
                      },
                      {
                        type: 'text',
                        text: 'ติ๊กช้อป',
                        weight: 'bold',
                        flex: 0,
                        margin: 'md',
                        contents: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ติดต่อร้านค้า',
                  text: 'ติดต่อร้านค้า'
                },
                color: '#47E291FF',
                style: 'primary'
              },
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ดูสินค้าอื่นในร้าน',
                  text: 'ดูสินค้าอื่นในร้าน'
                }
              }
            ]
          }
        },
        {
          type: 'bubble',
          hero: {
            type: 'image',
            url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/fish.jpg',
            size: 'full',
            aspectRatio: '20:13',
            aspectMode: 'cover',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: 'ปลานิลสด',
                weight: 'bold',
                size: 'xl',
                contents: []
              },
              {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/baht.png'
                      },
                      {
                        type: 'text',
                        text: '80',
                        weight: 'bold',
                        size: 'lg',
                        color: '#02970EFF',
                        margin: 'md',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'บาท',
                        weight: 'bold',
                        size: 'md',
                        color: '#AAAAAA',
                        align: 'end',
                        contents: []
                      }
                    ]
                  },
                  {
                    type: 'text',
                    text: 'ปลานิลสดร้านเจ๊แดง ราคาถูก มีปลาหลากหลายชนิด ลูกสาวเจ้าของร้านก็น่ารักมาก',
                    size: 'md',
                    color: '#AAAAAA',
                    wrap: true,
                    contents: []
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/store.png'
                      },
                      {
                        type: 'text',
                        text: 'เจ๊แดงปลานิลสด',
                        weight: 'bold',
                        flex: 0,
                        margin: 'md',
                        contents: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ติดต่อร้านค้า',
                  text: 'ติดต่อร้านค้า'
                },
                color: '#47E291FF',
                style: 'primary'
              },
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ดูสินค้าอื่นในร้าน',
                  text: 'ดูสินค้าอื่นในร้าน'
                }
              }
            ]
          }
        },
        {
          type: 'bubble',
          hero: {
            type: 'image',
            url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/s1.jpg',
            size: 'full',
            aspectRatio: '20:13',
            aspectMode: 'cover',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: 'น้ำพริกตาแดงปลาทูแห้ง',
                weight: 'bold',
                size: 'xl',
                contents: []
              },
              {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/baht.png'
                      },
                      {
                        type: 'text',
                        text: '79',
                        weight: 'bold',
                        size: 'lg',
                        color: '#02970EFF',
                        margin: 'md',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'บาท',
                        weight: 'bold',
                        size: 'md',
                        color: '#AAAAAA',
                        align: 'end',
                        contents: []
                      }
                    ]
                  },
                  {
                    type: 'text',
                    text: 'น้ำพริกตาแดงปลาทูแห้ง เจ้าเก่า ตำหรับดั้งเดิม อร่อยเด็ด',
                    size: 'md',
                    color: '#AAAAAA',
                    wrap: true,
                    contents: []
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/store.png'
                      },
                      {
                        type: 'text',
                        text: 'บอร์นบอร์นน้ำพริกอุบล',
                        weight: 'bold',
                        flex: 0,
                        margin: 'md',
                        contents: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ติดต่อร้านค้า',
                  text: 'ติดต่อร้านค้า'
                },
                color: '#47E291FF',
                style: 'primary'
              },
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ดูสินค้าอื่นในร้าน',
                  text: 'ดูสินค้าอื่นในร้าน'
                }
              }
            ]
          }
        },
        {
          type: 'bubble',
          hero: {
            type: 'image',
            url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/s2.jpg',
            size: 'full',
            aspectRatio: '20:13',
            aspectMode: 'cover',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: 'บราวนี่โฮมเมด',
                weight: 'bold',
                size: 'xl',
                contents: []
              },
              {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/baht.png'
                      },
                      {
                        type: 'text',
                        text: '150',
                        weight: 'bold',
                        size: 'lg',
                        color: '#02970EFF',
                        margin: 'md',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'บาท',
                        weight: 'bold',
                        size: 'md',
                        color: '#AAAAAA',
                        align: 'end',
                        contents: []
                      }
                    ]
                  },
                  {
                    type: 'text',
                    text: 'บราวนี่โฮมเมด เนื้อฟัดจ์หนึบ อร่อยจากช้อคโกแลตนำเข้าความเข้มข้นสูง',
                    size: 'md',
                    color: '#AAAAAA',
                    wrap: true,
                    contents: []
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/store.png'
                      },
                      {
                        type: 'text',
                        text: 'หมิวเบเกอรี่',
                        weight: 'bold',
                        flex: 0,
                        margin: 'md',
                        contents: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ติดต่อร้านค้า',
                  text: 'ติดต่อร้านค้า'
                },
                color: '#47E291FF',
                style: 'primary'
              },
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ดูสินค้าอื่นในร้าน',
                  text: 'ดูสินค้าอื่นในร้าน'
                }
              }
            ]
          }
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

  } else if (context.event.text === 'สินค้าใกล้ตัว') {
    await context.sendText(
      'คุณอยู่จังหวัด อุบลราชธานี นี่คือสินค้าที่อยู่ใกล้คุณ'
    );
    await context.sendFlex('This is an advanced flex', {
      type: 'carousel',
      contents: [
        {
          type: 'bubble',
          hero: {
            type: 'image',
            url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/s1.jpg',
            size: 'full',
            aspectRatio: '20:13',
            aspectMode: 'cover',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: 'น้ำพริกตาแดงปลาทูแห้ง',
                weight: 'bold',
                size: 'xl',
                contents: []
              },
              {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/baht.png'
                      },
                      {
                        type: 'text',
                        text: '79',
                        weight: 'bold',
                        size: 'lg',
                        color: '#02970EFF',
                        margin: 'md',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'บาท',
                        weight: 'bold',
                        size: 'md',
                        color: '#AAAAAA',
                        align: 'end',
                        contents: []
                      }
                    ]
                  },
                  {
                    type: 'text',
                    text: 'น้ำพริกตาแดงปลาทูแห้ง เจ้าเก่า ตำหรับดั้งเดิม อร่อยเด็ด',
                    size: 'md',
                    color: '#AAAAAA',
                    wrap: true,
                    contents: []
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/store.png'
                      },
                      {
                        type: 'text',
                        text: 'บอร์นบอร์นน้ำพริกอุบล',
                        weight: 'bold',
                        flex: 0,
                        margin: 'md',
                        contents: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ติดต่อร้านค้า',
                  text: 'ติดต่อร้านค้า'
                },
                color: '#47E291FF',
                style: 'primary'
              },
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ดูสินค้าอื่นในร้าน',
                  text: 'ดูสินค้าอื่นในร้าน'
                }
              }
            ]
          }
        },
        {
          type: 'bubble',
          hero: {
            type: 'image',
            url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/s2.jpg',
            size: 'full',
            aspectRatio: '20:13',
            aspectMode: 'cover',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: 'บราวนี่โฮมเมด',
                weight: 'bold',
                size: 'xl',
                contents: []
              },
              {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/baht.png'
                      },
                      {
                        type: 'text',
                        text: '150',
                        weight: 'bold',
                        size: 'lg',
                        color: '#02970EFF',
                        margin: 'md',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'บาท',
                        weight: 'bold',
                        size: 'md',
                        color: '#AAAAAA',
                        align: 'end',
                        contents: []
                      }
                    ]
                  },
                  {
                    type: 'text',
                    text: 'บราวนี่โฮมเมด เนื้อฟัดจ์หนึบ อร่อยจากช้อคโกแลตนำเข้าความเข้มข้นสูง',
                    size: 'md',
                    color: '#AAAAAA',
                    wrap: true,
                    contents: []
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/store.png'
                      },
                      {
                        type: 'text',
                        text: 'หมิวเบเกอรี่',
                        weight: 'bold',
                        flex: 0,
                        margin: 'md',
                        contents: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ติดต่อร้านค้า',
                  text: 'ติดต่อร้านค้า'
                },
                color: '#47E291FF',
                style: 'primary'
              },
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ดูสินค้าอื่นในร้าน',
                  text: 'ดูสินค้าอื่นในร้าน'
                }
              }
            ]
          }
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

  } else if (context.event.text === 'รายการโปรด') {
    await context.sendText(
      'นี่คือสินค้าที่คุณเลือกเป็นรายการโปรด'
    );
    await context.sendFlex('This is an advanced flex', {
      type: 'carousel',
      contents: [
        {
          type: 'bubble',
          hero: {
            type: 'image',
            url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/s1.jpg',
            size: 'full',
            aspectRatio: '20:13',
            aspectMode: 'cover',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: 'น้ำพริกตาแดงปลาทูแห้ง',
                weight: 'bold',
                size: 'xl',
                contents: []
              },
              {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/baht.png'
                      },
                      {
                        type: 'text',
                        text: '79',
                        weight: 'bold',
                        size: 'lg',
                        color: '#02970EFF',
                        margin: 'md',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'บาท',
                        weight: 'bold',
                        size: 'md',
                        color: '#AAAAAA',
                        align: 'end',
                        contents: []
                      }
                    ]
                  },
                  {
                    type: 'text',
                    text: 'น้ำพริกตาแดงปลาทูแห้ง เจ้าเก่า ตำหรับดั้งเดิม อร่อยเด็ด',
                    size: 'md',
                    color: '#AAAAAA',
                    wrap: true,
                    contents: []
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/store.png'
                      },
                      {
                        type: 'text',
                        text: 'บอร์นบอร์นน้ำพริกอุบล',
                        weight: 'bold',
                        flex: 0,
                        margin: 'md',
                        contents: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ติดต่อร้านค้า',
                  text: 'ติดต่อร้านค้า'
                },
                color: '#47E291FF',
                style: 'primary'
              },
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ดูสินค้าอื่นในร้าน',
                  text: 'ดูสินค้าอื่นในร้าน'
                }
              }
            ]
          }
        },
        {
          type: 'bubble',
          hero: {
            type: 'image',
            url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/s2.jpg',
            size: 'full',
            aspectRatio: '20:13',
            aspectMode: 'cover',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: 'บราวนี่โฮมเมด',
                weight: 'bold',
                size: 'xl',
                contents: []
              },
              {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/baht.png'
                      },
                      {
                        type: 'text',
                        text: '150',
                        weight: 'bold',
                        size: 'lg',
                        color: '#02970EFF',
                        margin: 'md',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'บาท',
                        weight: 'bold',
                        size: 'md',
                        color: '#AAAAAA',
                        align: 'end',
                        contents: []
                      }
                    ]
                  },
                  {
                    type: 'text',
                    text: 'บราวนี่โฮมเมด เนื้อฟัดจ์หนึบ อร่อยจากช้อคโกแลตนำเข้าความเข้มข้นสูง',
                    size: 'md',
                    color: '#AAAAAA',
                    wrap: true,
                    contents: []
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/store.png'
                      },
                      {
                        type: 'text',
                        text: 'หมิวเบเกอรี่',
                        weight: 'bold',
                        flex: 0,
                        margin: 'md',
                        contents: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ติดต่อร้านค้า',
                  text: 'ติดต่อร้านค้า'
                },
                color: '#47E291FF',
                style: 'primary'
              },
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ดูสินค้าอื่นในร้าน',
                  text: 'ดูสินค้าอื่นในร้าน'
                }
              }
            ]
          }
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
    
  //////////////////// เมนูบริจาค /////////////////////////

} else if (context.event.text === 'ดูรายการ') {
  await context.sendFlex('This is an advanced flex', {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        hero: {
          type: 'image',
          url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/s3.PNG',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'md',
          contents: [
            {
              type: 'text',
              text: 'เสื้อผ้าผู้หญิง',
              weight: 'bold',
              size: 'xl',
              contents: []
            },
            {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'icon',
                      url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/delivery-man.png'
                    },
                    {
                      type: 'text',
                      text: 'ไม่ต้องออกค่าส่ง',
                      weight: 'bold',
                      size: 'lg',
                      color: '#02970EFF',
                      margin: 'md',
                      contents: []
                    },
                    
                  ]
                },
                {
                  type: 'text',
                  text: 'เสื้อผ้าผู้หญิง ไม่ใช้แล้วค่ะ หาคนที่ใส่ไซส์ s และรับสภาพได้ ทักมานะคะ',
                  size: 'md',
                  color: '#AAAAAA',
                  wrap: true,
                  contents: []
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'icon',
                      url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/account.png'
                    },
                    {
                      type: 'text',
                      text: 'เบนซ์ศรี',
                      weight: 'bold',
                      flex: 0,
                      margin: 'md',
                      contents: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              action: {
                type: 'message',
                label: 'ติดต่อ',
                text: 'ติดต่อ'
              },
              color: '#47E291FF',
              style: 'primary'
            },
            
          ]
        }
      },
      {
        type: 'bubble',
        hero: {
          type: 'image',
          url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/s4.jpg',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'md',
          contents: [
            {
              type: 'text',
              text: 'หนังสือนิยายแจ่มใส',
              weight: 'bold',
              size: 'xl',
              contents: []
            },
            {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'icon',
                      url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/delivery-man.png'
                    },
                    {
                      type: 'text',
                      text: 'ไม่ต้องออกค่าส่ง',
                      weight: 'bold',
                      size: 'lg',
                      color: '#02970EFF',
                      margin: 'md',
                      contents: []
                    },
                    
                  ]
                },
                {
                  type: 'text',
                  text: 'หนังสือนิยายแจ่มใส ให้คนละหนึ่งเรื่องนะคะ ใครสนใจทักแชทเลยนะคะ',
                  size: 'md',
                  color: '#AAAAAA',
                  wrap: true,
                  contents: []
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'icon',
                      url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/account.png'
                    },
                    {
                      type: 'text',
                      text: 'แพรศรี',
                      weight: 'bold',
                      flex: 0,
                      margin: 'md',
                      contents: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              action: {
                type: 'message',
                label: 'ติดต่อ',
                text: 'ติดต่อ'
              },
              color: '#47E291FF',
              style: 'primary'
            },
            
          ]
        }
      },
      {
        type: 'bubble',
        hero: {
          type: 'image',
          url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/s5.jpg',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'md',
          contents: [
            {
              type: 'text',
              text: 'ต้นตะบองเพชร น่ารักมากๆ',
              weight: 'bold',
              size: 'xl',
              contents: []
            },
            {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'icon',
                      url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/delivery-man.png'
                    },
                    {
                      type: 'text',
                      text: 'ออกค่าส่ง',
                      weight: 'bold',
                      size: 'lg',
                      color: '#02970EFF',
                      margin: 'md',
                      contents: []
                    },
                    
                  ]
                },
                {
                  type: 'text',
                  text: 'หาบ้านให้น้องตะบองเพชรค่าาา น้องน่ารักมาก',
                  size: 'md',
                  color: '#AAAAAA',
                  wrap: true,
                  contents: []
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'icon',
                      url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/account.png'
                    },
                    {
                      type: 'text',
                      text: 'เกดจ๋าได้ยิมไหมว่าเสียงใคร',
                      weight: 'bold',
                      flex: 0,
                      margin: 'md',
                      contents: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              action: {
                type: 'message',
                label: 'ติดต่อ',
                text: 'ติดต่อ'
              },
              color: '#47E291FF',
              style: 'primary'
            },
            
          ]
        }
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

  } else if (context.event.text === 'โพสต์') {
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
                  'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/pencil%20(1).png',
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
                text: 'ชื่อสิ่งของ',
                contents: []
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: '+ ใส่ชื่อสิ่งของ',
                    color: '#9F9898FF',
                    contents: []
                  },
                  {
                    type: 'icon',
                    size: 'lg',
                    url:
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/pencil%20(1).png',
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
                    text: '+ ใส่รายละเอียดของรายการ',
                    color: '#9F9898FF',
                    contents: []
                  },
                  {
                    type: 'icon',
                    size: 'lg',
                    url:
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/pencil%20(1).png',
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
                text: 'ค่าส่ง',
                contents: []
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: '+ ต้องการให้ออกค่าส่งหรือไม่',
                    color: '#9F9898FF',
                    contents: []
                  },
                  {
                    type: 'icon',
                    size: 'lg',
                    url:
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/pencil%20(1).png',
                  },
                ]
              },
              
            ]
          }
        ]
      }
    });

  ////////////// เมนูค้นหาสินค้า ////////////////////////

  } else if (context.event.text === 'รายการค้นหาล่าสุด') {
    await context.sendText(
      'การค้นหาล่าสุดของคุณคือ  น้ำพริก'
    );
    await context.sendFlex('This is an advanced flex', {
      type: 'carousel',
      contents: [
        {
          type: 'bubble',
          hero: {
            type: 'image',
            url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/s6.PNG',
            size: 'full',
            aspectRatio: '20:13',
            aspectMode: 'cover',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: 'น้ำพริกหมูกระจก',
                weight: 'bold',
                size: 'xl',
                contents: []
              },
              {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/baht.png'
                      },
                      {
                        type: 'text',
                        text: '69',
                        weight: 'bold',
                        size: 'lg',
                        color: '#02970EFF',
                        margin: 'md',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'บาท',
                        weight: 'bold',
                        size: 'md',
                        color: '#AAAAAA',
                        align: 'end',
                        contents: []
                      }
                    ]
                  },
                  {
                    type: 'text',
                    text: '👩🏻‍🍳👨🏻‍🍳ทำสดใหม่ทุกวันนะคะ กรอบอร่อย ไม่เหม็นหืน',
                    size: 'md',
                    color: '#AAAAAA',
                    wrap: true,
                    contents: []
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/store.png'
                      },
                      {
                        type: 'text',
                        text: 'ปัดอ้วนเจ้าแม่น้ำพริก',
                        weight: 'bold',
                        flex: 0,
                        margin: 'md',
                        contents: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ติดต่อร้านค้า',
                  text: 'ติดต่อร้านค้า'
                },
                color: '#47E291FF',
                style: 'primary'
              },
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ดูสินค้าอื่นในร้าน',
                  text: 'ดูสินค้าอื่นในร้าน'
                }
              }
            ]
          }
        },
        {
          type: 'bubble',
          hero: {
            type: 'image',
            url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/s1.jpg',
            size: 'full',
            aspectRatio: '20:13',
            aspectMode: 'cover',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: 'น้ำพริกตาแดงปลาทูแห้ง',
                weight: 'bold',
                size: 'xl',
                contents: []
              },
              {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/baht.png'
                      },
                      {
                        type: 'text',
                        text: '79',
                        weight: 'bold',
                        size: 'lg',
                        color: '#02970EFF',
                        margin: 'md',
                        contents: []
                      },
                      {
                        type: 'text',
                        text: 'บาท',
                        weight: 'bold',
                        size: 'md',
                        color: '#AAAAAA',
                        align: 'end',
                        contents: []
                      }
                    ]
                  },
                  {
                    type: 'text',
                    text: 'น้ำพริกตาแดงปลาทูแห้ง เจ้าเก่า ตำหรับดั้งเดิม อร่อยเด็ด',
                    size: 'md',
                    color: '#AAAAAA',
                    wrap: true,
                    contents: []
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'icon',
                        url: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/store.png'
                      },
                      {
                        type: 'text',
                        text: 'บอร์นบอร์นน้ำพริกอุบล',
                        weight: 'bold',
                        flex: 0,
                        margin: 'md',
                        contents: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ติดต่อร้านค้า',
                  text: 'ติดต่อร้านค้า'
                },
                color: '#47E291FF',
                style: 'primary'
              },
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ดูสินค้าอื่นในร้าน',
                  text: 'ดูสินค้าอื่นในร้าน'
                }
              }
            ]
          }
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

  /////////////////// เมนูข้อมูลส่วนตัว ////////////////////////

} else if (context.event.text === 'ข้อมูลส่วนตัว') {
  await context.sendFlex('This is an advanced flex', {
    type: 'bubble',
    size: 'mega',
    direction: 'ltr',
    header: {
      type: 'box',
      layout: 'vertical',
      backgroundColor: '#47E291FF',
      contents: [
        {
          type: 'text',
          text: 'ข้อมูลส่วนตัว',
          weight: 'bold',
          size: 'lg',
          color: '#FFFFFFFF',
          align: 'center',
          contents: [],
        },
      ],
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url:
                    'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/id-card.png',
                  aspectMode: 'cover',
                  size: 'full',
                },
              ],
              // cornerRadius: '100px',
              width: '40px',
              height: '40px',
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: 'ชื่อของคุณ',
                      weight: 'bold',
                      color: '#000000',
                    },
                  ],
                  size: 'md',
                  wrap: true,
                },
                {
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: 'ตุ๊กติ๊ก',
                      color: '#928585FF',
                    },
                  ],
                  size: 'md',
                  wrap: true,
                },
              ],
            },
          ],
          spacing: 'xl',
          paddingAll: '15px',
        },
        {
          type: 'separator',
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url:
                    'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/google-maps.png',
                  aspectMode: 'cover',
                  size: 'full',
                },
              ],
              // cornerRadius: '100px',
              width: '40px',
              height: '40px',
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: 'จังหวัดที่คุณอยู่',
                      weight: 'bold',
                      color: '#000000',
                    },
                  ],
                  size: 'md',
                  wrap: true,
                },
                {
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: 'ศรีสะเกษ',
                      color: '#928585FF',
                    },
                  ],
                  size: 'md',
                  wrap: true,
                },
              ],
            },
          ],
          spacing: 'xl',
          paddingAll: '15px',
        },
        {
          type: 'separator',
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url:
                    'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/telephone.png',
                  aspectMode: 'cover',
                  size: 'full',
                },
              ],
              // cornerRadius: '100px',
              width: '40px',
              height: '40px',
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: 'เบอร์โทรศัพท์',
                      weight: 'bold',
                      color: '#000000',
                    },
                  ],
                  size: 'md',
                  wrap: true,
                },
                {
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: '0610291134',
                      color: '#928585FF',
                    },
                  ],
                  size: 'md',
                  wrap: true,
                },
              ],
            },
          ],
          spacing: 'xl',
          paddingAll: '15px',
        },
        {
          type: 'separator',
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url:
                    'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/line.png',
                  aspectMode: 'cover',
                  size: 'full',
                },
              ],
              // cornerRadius: '100px',
              width: '40px',
              height: '40px',
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: 'LINE',
                      weight: 'bold',
                      color: '#000000',
                    },
                  ],
                  size: 'md',
                  wrap: true,
                },
                {
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: 'tuktik5522',
                      color: '#928585FF',
                    },
                  ],
                  size: 'md',
                  wrap: true,
                },
              ],
            },
          ],
          spacing: 'xl',
          paddingAll: '15px',
        },
        {
          type: 'separator',
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url:
                    'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/facebook.png',
                  aspectMode: 'cover',
                  size: 'full',
                },
              ],
              // cornerRadius: '100px',
              width: '40px',
              height: '40px',
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: 'Facebook',
                      weight: 'bold',
                      color: '#000000',
                    },
                  ],
                  size: 'md',
                  wrap: true,
                },
                {
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: '/tikker24',
                      color: '#928585FF',
                    },
                  ],
                  size: 'md',
                  wrap: true,
                },
              ],
            },
          ],
          spacing: 'xl',
          paddingAll: '15px',
        },
      ],
      paddingAll: '0px',
    },
    styles: {
      header: {
        backgroundColor: '#47E291FF',
        separatorColor: '#161313FF',
      },
    },
  });

  ////////////////////// อื่นๆ //////////////////////////////

  } else if (context.event.text === 'ติดต่อร้านค้า') {
  const imagemap = {
    baseUrl: 'https://raw.githubusercontent.com/chadaporn29797/project2020/main/image/contact.png?w=1040',
    baseSize: {
      height: 600,
      width: 1040,
    },
    actions: [
      {
        //map
        type: 'message',
        area: {
          "x": 383,
          "y": 13,
          "width": 318,
          "height": 284
        },
        text: "ที่ตั้ง"
      },
      {
        //facebook
        type: 'uri',
        linkUri: 'https://www.facebook.com/bornborn41',
        area: {
          "x": 704,
          "y": 11,
          "width": 317,
          "height": 288
        },
      },
      {
        //line
        type: 'uri',
        linkUri: 'http://line.me/ti/p/@zqc5518o',
        area: {
          "x": 388,
          "y": 302,
          "width": 313,
          "height": 290
        },
      },
      {
        //tel
        type: 'uri',
        linkUri: 'tel:0848346449',
        area: {
          "x": 704,
          "y": 300,
          "width": 315,
          "height": 292
        },
      },
    ],
  };
  const altText = 'this is an imagemap';
  await context.sendImagemap(altText, imagemap);

  } else if (context.event.text === 'ที่ตั้ง') {
    await context.sendLocation({
      type: 'location',
      title: 'ที่ตั้งร้าน',
      address: 'ศรีสะเกษ', 
      latitude: 15.1158333,
      longitude: 104.3300335
  });

  } else if (context.event.text === 'test liff') {
    const liffUrl = `https://liff.line.me/${process.env.LINE_LIFF_ID}`;
    await context.sendText(liffUrl);

  } else if (context.event.text === 'null') {
    await context.sendText(
      'ยินดีต้อนรับสู่ไลน์บอท บายมั้ย นะครับ'
    );


  ////////////////////////// แอดมิน /////////////////////////
  } else if (context.event.text === 'ดูสินค้าที่เพิ่มมาใหม่') {
    await context.sendText(
      'i try so hard and got so far'
    );
  
  } else if (context.event.text === 'ดูรายการบริจาค') {
    await context.sendText(
      'But in the end, it doesnt even matter'
    );
  
  } else if (context.event.text === 'กลับ') {
    await context.linkRichMenu(process.env.MAIN_RICH_MENU_ID);
  } else {
    await context.sendText(
      ` ${context.event.text} -> ยังใช้งานไม่ได้นะเตง ${String.fromCodePoint(
        0x100084
      )} `
    );
  }
};
