import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      id: 'd3a12ce8-5b40-4b3a-b715-9a0d758f013c',
      userId: '6cfc2290-eb4e-4afc-be95-3df5e65d3353',
      title: 'Est labore voluptatem fugiat et',
      content: 'Quia sit aut placeat at quo ratione qui. Explicabo esse aspernatur. In distinctio voluptate et iste mollitia temporibus velit cupiditate.',
      comments: [
        'f3bf108f-e375-482d-a357-ef4e57e059e2',
        '6e139e97-f8a8-4c7e-b6f5-dbd226c6e2b2'
      ],
      created: '2021-01-17T02:02:56.690Z'
    },
    {
      id: 'd593a44c-5f65-452f-8e9c-ac85cdd73bfe',
      userId: '6eb53580-9c7a-4989-8097-b8134dc6521f',
      title: 'Nesciunt adipisci libero sapiente asperiores impedit velit',
      content: 'Placeat praesentium ipsam libero. Veniam nam perspiciatis non accusantium ducimus placeat dolorum. Officiis labore iusto accusantium dolores expedita ipsam.',
      comments: [],
      created: '2021-01-26T11:56:55.544Z'
    },
    {
      id: 'bfa854f0-e274-41d2-beff-2b72dbfc7013',
      userId: '3d17f086-9e9b-45b5-b5d3-6d62f2ee7d7a',
      title: 'Ad voluptatum atque aut qui dolor atque tempora quis',
      content: 'Maiores fugiat enim officia ut dolorem. Sunt atque dolor quo. Rerum dolorum error eaque et. Quis magni soluta soluta similique mollitia ut recusandae repellat. Et iste aut et est architecto et. Ut repellat veritatis pariatur in est cumque.',
      comments: [
        'b268893f-f6ab-4fbb-96b2-daac16361c44'
      ],
      created: '2021-01-28T18:36:00.075Z'
    },
    {
      id: 'f2556a83-4540-48cc-bead-dd556f482cce',
      userId: 'a4b32b31-34b4-4c27-86d5-08fc2f786600',
      title: 'Ad ipsam numquam voluptatibus quos exercitationem ad quia est accusamus',
      content: 'Ut dolorum eius iure. Nihil nemo soluta. Itaque voluptatem voluptas quis similique aut. Quam voluptatem ut.',
      comments: [
        'e099799a-6cde-4ed0-a26f-7964a656758f'
      ],
      created: '2021-01-05T04:09:52.311Z'
    },
    {
      id: '332ed05a-04e6-4336-944d-0e9c0e5752f3',
      userId: 'a4b32b31-34b4-4c27-86d5-08fc2f786600',
      title: 'Autem aspernatur non consequatur',
      content: 'Ut ut ratione aut earum totam optio dolores odit tempore. Corporis omnis distinctio sit. Quis ducimus dolorum velit. Aliquam tenetur cupiditate pariatur soluta possimus aspernatur aut. Molestias dolorem qui et vel officia. Cupiditate nisi laboriosam minima dolorem omnis ducimus quidem consequatur.',
      comments: [],
      created: '2021-01-02T15:32:24.495Z'
    },
    {
      id: 'b0e8f75f-7e48-4e05-b1fd-1474f7ccbe42',
      userId: 'a96c94da-c421-4a24-b6df-cc0ec8397f77',
      title: 'Sint eius impedit consequuntur tenetur vero',
      content: 'Nemo eos modi. Minima enim repudiandae excepturi eveniet quo consequatur odit. Est ad autem et et. Consequatur delectus porro iure eos repellat est totam. Placeat corporis sed quia aut neque placeat reprehenderit nihil laborum.',
      comments: [
        'eb48ccfe-753d-4ddb-82d6-012648da6323',
        '1fb3157b-dd93-438e-96a2-c3272ac99720',
        '451ea156-2808-4671-8776-cfc7a8a5e513'
      ],
      created: '2021-01-29T22:05:07.821Z'
    },
    {
      id: 'a0fc91b9-8e7b-4894-8047-d89634360f08',
      userId: '6cfc2290-eb4e-4afc-be95-3df5e65d3353',
      title: 'Quia',
      content: 'Veniam officia dolores et odio qui mollitia et et illum. Eum quaerat et laudantium. Architecto earum eos hic tempora dolorum necessitatibus et. Non nam aut quia aperiam et sint dolor numquam eos.',
      comments: [],
      created: '2021-01-08T18:40:18.024Z'
    },
    {
      id: 'bf5d7cce-3d78-427d-aecd-eda78717fab5',
      userId: '6eb53580-9c7a-4989-8097-b8134dc6521f',
      title: 'Mollitia hic est alias',
      content: 'Voluptatibus itaque quasi id nisi ut ipsa et aut vel. Et quia aut delectus rerum delectus sit corrupti rem. Non quis exercitationem eveniet doloremque optio consectetur aut suscipit. Eos et fuga eum. Consequatur dicta dolor nesciunt reiciendis qui maxime. Totam quibusdam incidunt fuga corporis inventore eligendi doloribus non mollitia.',
      comments: [
        'd23364f5-9171-4e27-b5fa-2dbf31fce1a8',
        '82b750c2-4203-4708-9a01-e4998422a9ae',
        '7feace2b-77e0-429a-86fc-089473882809'
      ],
      created: '2021-01-15T20:01:27.137Z'
    },
    {
      id: 'f5a3036d-6cdd-47fd-beb8-8d1337710982',
      userId: '6cfc2290-eb4e-4afc-be95-3df5e65d3353',
      title: 'Dolore libero modi quisquam unde facere',
      content: 'Dolorem nobis dolores minus fugiat officia. Quis praesentium molestiae iusto inventore in amet eum. Aut repellendus qui veritatis in blanditiis sunt dolorem magnam libero.',
      comments: [
        '4348f904-0aff-4981-b3c4-eeccb9c6c2a8'
      ],
      created: '2021-01-03T15:25:29.980Z'
    },
    {
      id: '4136d527-67f7-444a-b515-931b1e884267',
      userId: '6cfc2290-eb4e-4afc-be95-3df5e65d3353',
      title: 'Et omnis id doloribus ullam',
      content: 'Neque error quo voluptatum maiores officiis et et voluptatum eos. Aperiam reprehenderit neque vitae natus earum. Sit est dolor.',
      comments: [
        '3826b0ac-9d0a-4670-a587-a5fae9075ccf'
      ],
      created: '2021-01-12T02:44:09.292Z'
    },
    {
      id: '3b2f96db-d1ab-4aae-9f12-e46ada690c96',
      userId: '6eb53580-9c7a-4989-8097-b8134dc6521f',
      title: 'Sapiente id eius minus consequuntur et dicta animi voluptatem enim',
      content: 'Et libero cumque vero et odit aliquam architecto qui temporibus. Velit atque eos voluptatem. Sed accusantium molestiae quidem at recusandae quos excepturi nam dolore. Explicabo aut eos aliquam aut. Et enim ducimus eos aut ea. Dignissimos cupiditate nesciunt consequuntur nihil fugiat atque inventore perferendis.',
      comments: [
        'd1c2edba-36b4-4d06-ae75-4127f510be85',
        '1f2e9761-ba87-4295-af49-4ccc042455a1'
      ],
      created: '2021-01-04T03:31:57.787Z'
    },
    {
      id: 'b04e92c5-6953-48c0-a96f-82f75bd9ef23',
      userId: 'a4b32b31-34b4-4c27-86d5-08fc2f786600',
      title: 'Amet reiciendis sapiente laboriosam odio',
      content: 'Enim rem sunt repellendus omnis. Qui voluptas id ea ipsam voluptate recusandae recusandae voluptatem omnis. Autem in omnis quo consequatur velit officiis non qui amet. Asperiores minus et consequatur qui.',
      comments: [
        '42ea2787-00b7-480f-845e-9332be09f833',
        '14a33097-9f6b-4055-8901-43176c599517'
      ],
      created: '2021-01-25T13:32:19.341Z'
    },
    {
      id: '9cf0a3de-0c8b-4352-9ea0-b18e52dfad4a',
      userId: '6eb53580-9c7a-4989-8097-b8134dc6521f',
      title: 'Facere qui amet et voluptatibus animi aut in soluta',
      content: 'Quae voluptatem ut voluptas natus ullam minima. Nam numquam rerum enim qui voluptas. Molestias accusamus reiciendis. Occaecati perferendis est eos quis earum quos earum.',
      comments: [
        '0f4d1925-ca26-4dc2-ad2b-b251776d6f23'
      ],
      created: '2021-01-10T09:32:53.603Z'
    },
    {
      id: '1cb1a3b3-44f1-4731-8c95-5f9cd2c94a2a',
      userId: '3d17f086-9e9b-45b5-b5d3-6d62f2ee7d7a',
      title: 'Quis aut omnis facere nihil velit est',
      content: 'Qui voluptas molestiae possimus quo voluptatem accusamus. Voluptas cumque excepturi. Accusantium reiciendis quas architecto nesciunt ad libero porro in. Accusantium iste aliquid alias et quisquam est sed assumenda maxime. Deserunt odio provident.',
      comments: [
        '30210349-c065-45cd-8603-d18ba30d2d2a',
        '8dd5bed7-d057-4686-ada3-3ed0bf945b78'
      ],
      created: '2021-01-06T12:40:06.362Z'
    },
    {
      id: '5d6e2338-2226-44ce-8443-c695c148e829',
      userId: 'a96c94da-c421-4a24-b6df-cc0ec8397f77',
      title: 'Beatae voluptatem amet aut libero tenetur veritatis cumque quidem',
      content: 'Alias harum aut consequatur doloribus qui nesciunt eos error accusamus. Quis modi veritatis eveniet recusandae. Beatae culpa ullam distinctio sunt. Nulla est rem necessitatibus et quis quam ut temporibus. Inventore tempora assumenda dicta et repellendus omnis qui a.',
      comments: [
        '2bed968a-7e00-4166-a96e-edcf46759c1f',
        'cb6ce6de-38d6-44a8-98fa-d672134a1614',
        '8e6b1a93-93c3-49da-9ee5-e3426d70bb5f'
      ],
      created: '2021-01-11T20:45:12.160Z'
    },
    {
      id: 'e4ea4b7c-13a8-487c-b652-052b58ca4b6a',
      userId: '6cfc2290-eb4e-4afc-be95-3df5e65d3353',
      title: 'Odit dolor laboriosam quaerat aliquid necessitatibus',
      content: 'Alias adipisci quaerat. Esse vel eius est magnam sed. Provident impedit quis non reiciendis sed voluptate quidem. Molestias temporibus iste quibusdam impedit voluptatem eum corporis. Et veritatis explicabo neque cumque. Non praesentium sed consectetur ex eius omnis fuga a omnis.',
      comments: [
        '674e22b5-c74c-45ea-b49e-9baa9e9a1067'
      ],
      created: '2021-01-06T00:08:43.520Z'
    },
    {
      id: '3c4c284d-d4c9-42db-a719-1cb1e353d1a9',
      userId: '6eb53580-9c7a-4989-8097-b8134dc6521f',
      title: 'Ab blanditiis numquam et iusto corrupti earum',
      content: 'Consequatur eos sequi ad et in rerum quia et mollitia. Eos quasi ad dolor itaque nam. Nemo deleniti corporis optio repellendus voluptas officia. Et ducimus a ut et. Ut cum ut cupiditate ullam quos aliquam. Eaque aut itaque dolorem.',
      comments: [],
      created: '2021-01-14T12:44:15.609Z'
    },
    {
      id: 'c67562b0-92b4-4403-943d-7e8797c75540',
      userId: '6eb53580-9c7a-4989-8097-b8134dc6521f',
      title: 'Eveniet recusandae quos culpa soluta et',
      content: 'Voluptate eligendi sit. Accusantium fuga enim fuga itaque aut. Omnis eum nesciunt eveniet sed iure ut quaerat vel. Enim aut vel fugiat ipsa culpa blanditiis quod ipsa.',
      comments: [
        '3931df99-87a3-482e-b8fb-05a90685a1a4'
      ],
      created: '2021-01-06T06:57:36.977Z'
    },
    {
      id: '1e634d7e-a09d-4943-9500-6f7ea628f412',
      userId: '6cfc2290-eb4e-4afc-be95-3df5e65d3353',
      title: 'Vitae nemo ipsam labore nostrum',
      content: 'Voluptatum eos et. Placeat voluptates qui aut officiis dolorum id voluptatem. Omnis veritatis autem. Maiores itaque ut. Dolorum beatae earum illum enim omnis quo temporibus. Maxime libero libero quo quo odio voluptates doloremque consequuntur et.',
      comments: [
        'd262d2d4-9271-4956-8fd9-73f6633257fe',
        '41ad6748-6135-490c-9984-723f0c52c1aa'
      ],
      created: '2021-01-29T06:29:33.058Z'
    },
    {
      id: 'ba1475bb-f8e2-474b-8ade-e2aa68afc047',
      userId: '3d17f086-9e9b-45b5-b5d3-6d62f2ee7d7a',
      title: 'Eaque',
      content: 'Ratione eius corrupti fugiat a numquam est et eum consequatur. Saepe fugiat ut ea minus totam. Sint neque iure maiores commodi praesentium et. Vero voluptas quis sed quia totam distinctio. Praesentium vitae architecto labore ex dolores libero. Eaque dolor quae velit.',
      comments: [
        '309f4013-90a9-47da-99c6-b6f66313f90d',
        '3d1d1279-7b6e-45dc-b673-e85622b4ba05',
        '9b5d2004-f709-4e86-9810-c9afd5bab18b',
        '0ba08605-2897-4338-9301-fa540c2e4f7a'
      ],
      created: '2021-01-28T04:56:03.203Z'
    }
  ];

  getAllPosts(): Post[] {
    return [...this.posts];
  }

  getPostById(id: string): Post {
    const foundPost = this.posts.find(post => post.id === id);
    if (!foundPost) {
      return null;
    }
    return foundPost;
  }

  getPostByIndex(index: number): Post {
    return this.posts[index] || null;
  }

  deletePost(index: number): void {
    this.posts.splice(index, 1);
  }
}
