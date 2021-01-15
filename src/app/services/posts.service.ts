import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [
    {
      id: 'f4a3d03c-5a40-4b3b-8a12-c89886437a48',
      userId: '5ea70834-0506-495f-9200-445729113a15',
      title: 'Laborum perferendis id rem ut ut est in',
      content: 'Et eligendi minus cupiditate sit et deleniti quae aliquam ut. Sequi error ad perspiciatis quo. Repellendus est est eum labore quos placeat dolor sed. Et fugit blanditiis ut omnis delectus. Molestias quaerat magni voluptate qui rem eius.',
      comments: [
        'fca25dc7-330d-4917-be9c-9141dc03d31e'
      ],
      created: '2021-01-14T00:40:43.626Z'
    },
    {
      id: 'f8f62dd9-db02-4cbf-bd2e-3a8822022ed6',
      userId: '263b7db2-78b2-41ba-9db3-b6b59eb564ad',
      title: 'Est quibusdam voluptas ad ab perferendis',
      content: 'Et quia eum rerum velit omnis. Qui reiciendis dolor iusto. Eos aliquam repellendus et iste quisquam dolore voluptas.',
      comments: [
        '93634eb0-0ac2-436b-9421-c89e90c15fba',
        '0d62057a-be0e-4a3c-9a0f-16fe1ed3e1a1',
        '222e511e-b792-468f-b5b4-772901f8b2b9'
      ],
      created: '2021-01-12T18:55:25.569Z'
    },
    {
      id: '3162dc6e-9993-4238-bc0a-6e5f7cad98fa',
      userId: '683d41a0-ba5c-4a6f-95bb-e84a10d300b6',
      title: 'Aut et voluptates aut ullam ut aut et inventore',
      content: 'In et at omnis. Iste impedit perferendis architecto ex voluptas ullam nemo rem. Sequi nostrum esse animi iste at odit tempore. Et deleniti ipsa tenetur dolorem sit perspiciatis vero. Dolores pariatur voluptas in velit facilis quo. Eum molestiae repellat accusantium fugit nemo eum.',
      comments: [
        'f80a92ef-1e14-4989-b16f-ca2da93f2578',
        '61ce36cb-2d84-454c-9658-7655cdc434ac',
        'b30d5509-07ff-4e99-a715-e4bf6d2628ca'
      ],
      created: '2021-01-28T20:18:40.412Z'
    },
    {
      id: '93a25a41-c1da-48ae-b6cc-de1133b65102',
      userId: '263b7db2-78b2-41ba-9db3-b6b59eb564ad',
      title: 'Magnam alias facere consequatur dolorum',
      content: 'Molestiae dolores temporibus eligendi est dolorem doloremque suscipit. Dolores quibusdam sapiente et sint optio deserunt sequi. Voluptatem id perspiciatis et iusto voluptatibus voluptatem sunt. Ab sed aut fugit.',
      comments: [],
      created: '2021-01-03T22:29:44.185Z'
    },
    {
      id: '29df56eb-3017-497a-b7bb-368f431c5fb2',
      userId: '263b7db2-78b2-41ba-9db3-b6b59eb564ad',
      title: 'Quia amet sint aliquid cumque unde molestias non aut voluptas',
      content: 'Quaerat sapiente eos odio. Autem ducimus ducimus quia ex dolores perferendis fugiat voluptate unde. Accusantium odit similique officia eum maiores dolore rerum.',
      comments: [
        '6fff0092-3f89-4437-9ab4-ae0409937517',
        '32c71577-5968-4ad1-8cb9-5b379fa6773c',
        '2cbd8749-bb26-4ab3-8e1f-a0960579d1c7'
      ],
      created: '2021-01-08T11:34:28.187Z'
    },
    {
      id: '7cc5e672-e989-4493-b723-b3d2aa5613a7',
      userId: '0c0516c9-864e-4ed9-be2c-28b5b3ed9015',
      title: 'Ipsam',
      content: 'Dignissimos quia est. Quisquam quia magnam et dolore. Et quis minima. Modi odio et eos quaerat. Dolor omnis in suscipit sit iste ut sunt doloremque dolorem.',
      comments: [
        'b88e7576-53cc-449b-8f81-1ecab4409c4a'
      ],
      created: '2021-01-09T08:41:50.073Z'
    },
    {
      id: '9718c47e-3cc5-4158-b4a1-4bf50fccb343',
      userId: '263b7db2-78b2-41ba-9db3-b6b59eb564ad',
      title: 'Est quas sit delectus quibusdam aliquam quis ipsam',
      content: 'Laboriosam quo ipsam facilis et est et. Dolor quae non exercitationem sit eveniet aperiam. Ratione modi iste debitis accusantium voluptas aspernatur reiciendis.',
      comments: [],
      created: '2021-01-07T08:06:30.901Z'
    },
    {
      id: '84e904e8-6d6f-42fc-8929-974039fce1f9',
      userId: 'f7e1a607-3545-40c4-b547-ba117c7c77be',
      title: 'Illum eos error reiciendis voluptatum repellat officia tempora',
      content: 'Aut laborum non nihil maiores quam recusandae. Deleniti mollitia sunt. Et dolores accusamus minus ut corrupti pariatur omnis dicta.',
      comments: [],
      created: '2021-01-26T15:44:46.326Z'
    },
    {
      id: '3f2e75ca-905b-49c7-8ed6-b8556d590798',
      userId: '5ea70834-0506-495f-9200-445729113a15',
      title: 'Fuga sit ut laboriosam deleniti',
      content: 'Voluptate a aut ut maiores. Veritatis perspiciatis error in ipsum. Quas odit neque.',
      comments: [],
      created: '2021-01-22T19:00:58.698Z'
    },
    {
      id: 'acedc3fe-1ed5-48f3-bfb2-4766ca754f36',
      userId: '5ea70834-0506-495f-9200-445729113a15',
      title: 'Minus neque',
      content: 'Laudantium magnam est sint ut qui. Quasi inventore tenetur est laudantium omnis voluptatem qui aliquid consequuntur. Non dolores omnis quidem. Omnis exercitationem veniam suscipit in temporibus repellendus eum. Libero corporis distinctio.',
      comments: [
        '83c287cd-09b7-4ffc-aaa8-a17bbe0af7c2'
      ],
      created: '2021-01-21T20:50:19.353Z'
    },
    {
      id: '3f6eebf7-9295-4298-9434-78861497233f',
      userId: '263b7db2-78b2-41ba-9db3-b6b59eb564ad',
      title: 'Et laborum et voluptas velit eveniet nulla optio consectetur',
      content: 'Laboriosam labore nesciunt ex molestias et illum deserunt. Rerum voluptatum veniam qui perspiciatis et officia iusto. Ipsam tempora et hic impedit ab cumque ratione facilis ut. Libero quis inventore iste eos velit sint.',
      comments: [
        'b8f27bca-7d24-473c-afb1-390404b6cfde',
        '7a5241aa-1327-42d9-9034-e9edf2599caa',
        '6c5c5ac1-1793-4c58-97ba-258ebb7c7427'
      ],
      created: '2021-01-22T17:21:36.292Z'
    },
    {
      id: '0a2967d5-2a43-4383-a748-8aaba6c9ff93',
      userId: '5ea70834-0506-495f-9200-445729113a15',
      title: 'Aut optio sit labore',
      content: 'Consequatur numquam voluptates quisquam consequatur quisquam aperiam accusantium est aut. Ut consectetur asperiores tempore labore assumenda aspernatur voluptate autem. Velit aut voluptatum cum tempora occaecati quos dolore repudiandae.',
      comments: [
        '46543d8f-0c2a-438b-9c85-d14197ed4622',
        'da4e60a4-2047-4497-a4a7-3c24c2ac752d'
      ],
      created: '2021-01-02T10:30:10.785Z'
    },
    {
      id: '21594488-3e4b-4558-94aa-9b55b52ef6ba',
      userId: '263b7db2-78b2-41ba-9db3-b6b59eb564ad',
      title: 'Id ea',
      content: 'Facilis modi repellat optio tempore est incidunt aliquid rem sint. Cumque a enim et amet non numquam. Animi quo similique accusantium. Est doloribus a non est illo in molestias. Consequatur cupiditate nesciunt quis molestiae et sapiente.',
      comments: [
        'c56b97d0-e7d7-4ee7-a14c-75d75e964988',
        'fe9ddfe4-fb88-4462-97b4-aa89aed81c98',
        'd9449d42-97cf-4678-a27b-e1ef45cb4b3f'
      ],
      created: '2021-01-08T13:58:09.697Z'
    },
    {
      id: 'b368b1d0-ef16-4ec5-a9de-47428937c669',
      userId: '683d41a0-ba5c-4a6f-95bb-e84a10d300b6',
      title: 'Sunt perferendis doloremque eum',
      content: 'Sed cum quasi. Consequatur sed aliquid. Vero eaque quaerat dolor enim.',
      comments: [
        '3b09dc36-b593-4f4a-ac69-f392aa7f34f7'
      ],
      created: '2021-01-19T09:36:08.814Z'
    },
    {
      id: '26e10849-1b01-49ee-937f-063242cb4612',
      userId: '683d41a0-ba5c-4a6f-95bb-e84a10d300b6',
      title: 'Quo pariatur sed voluptatem tenetur non velit rerum eveniet odit',
      content: 'Et provident magni maxime necessitatibus accusamus impedit ipsa sed excepturi. Modi est dicta ut ullam possimus. Accusamus tempora ab beatae repellendus sit laboriosam error earum ratione. Autem sint id in accusantium maxime repellendus ullam quo earum. Hic laudantium nihil commodi est cumque magni sint.',
      comments: [
        '16047b53-fcf7-4840-8ebe-595b0bccb44c',
        'a57ff963-e36c-423c-b067-46e642609d3f'
      ],
      created: '2021-01-16T18:20:12.729Z'
    },
    {
      id: '8af2a47f-5fe8-4658-9c78-b425a51dc768',
      userId: '5ea70834-0506-495f-9200-445729113a15',
      title: 'Consectetur',
      content: 'Quasi sunt placeat illum aut neque inventore commodi. Non expedita sunt aspernatur quam animi facilis. Non esse ea sunt natus sit dolorem voluptatum maiores. Atque voluptatem impedit hic aliquam ipsa aut omnis eos.',
      comments: [
        '94f4ecc0-730d-44e6-bbdc-48a03fe05583'
      ],
      created: '2021-01-08T01:51:06.876Z'
    },
    {
      id: '63feb7d9-2a9a-4c9b-9928-a7b20d708075',
      userId: '263b7db2-78b2-41ba-9db3-b6b59eb564ad',
      title: 'Alias voluptas vel numquam perspiciatis provident molestiae',
      content: 'Porro accusamus similique. Voluptatem occaecati sapiente id nisi nesciunt debitis eum alias omnis. Sunt et eius aliquid quae est. Ipsa odit minus at ipsam incidunt aperiam et. Veritatis placeat non ut sunt reprehenderit inventore sit amet.',
      comments: [
        'b63da0d7-0ec9-4da7-a0c7-43a5fb378c9e',
        'e54dab2f-f96b-4e24-8c41-261e5b077e6a'
      ],
      created: '2021-01-29T17:36:48.927Z'
    },
    {
      id: 'e868c741-d1aa-4dfa-a147-6e074ece7e20',
      userId: '5ea70834-0506-495f-9200-445729113a15',
      title: 'Possimus velit voluptatum delectus facere nam quas occaecati',
      content: 'Expedita atque eum alias cupiditate. Magnam ipsum enim enim culpa tenetur et possimus autem. Eius ut rerum.',
      comments: [
        'a107de27-4588-492b-8a7c-f5d3c17f3bcf',
        'caae128b-a7c6-48aa-8fed-6198b062aa8e'
      ],
      created: '2021-01-30T23:30:47.614Z'
    },
    {
      id: 'eaf3650d-25f1-4486-8d88-64349b6dc91c',
      userId: '0c0516c9-864e-4ed9-be2c-28b5b3ed9015',
      title: 'Unde laudantium sint corporis illo et est',
      content: 'Minus vero et odio sed id dolorem. Repudiandae consequuntur molestiae reiciendis est aut. Maiores id et cum temporibus reprehenderit iste eum velit. Facilis earum at sapiente suscipit. Beatae dolore adipisci dolorem aut. Veritatis expedita enim dolores voluptatem distinctio blanditiis dolor reiciendis perferendis.',
      comments: [
        '1a9ca476-2aec-419b-b800-a466c4bd53f4'
      ],
      created: '2021-01-05T19:12:57.081Z'
    },
    {
      id: '5928321a-90cd-452e-9c82-225e67572634',
      userId: '5ea70834-0506-495f-9200-445729113a15',
      title: 'Eos veniam ea aut id voluptatum',
      content: 'Aperiam quia ipsa nesciunt alias voluptas odio repellat exercitationem. Corrupti quidem dicta voluptas qui illo labore. Voluptas error voluptatem unde impedit voluptates nam illo. Eaque aliquid nisi aperiam impedit amet.',
      comments: [
        'dda71a2e-38cb-4f1e-a135-343d8b02b5ef'
      ],
      created: '2021-01-24T03:56:14.577Z'
    }
  ];

  getAllPosts(): Post[] {
    return [...this.posts];
  }

  getPostByIndex(index: number): Post {
    return this.posts[index] || null;
  }

  deletePost(index: number): void {
    this.posts.splice(index, 1);
  }
}
