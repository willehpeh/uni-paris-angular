import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [
    {
      id: '6cfc2290-eb4e-4afc-be95-3df5e65d3353',
      firstName: 'Virgil',
      lastName: 'Reichel',
      email: 'Darrel2@gmail.com',
      image: 'https://avataaars.io/?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=White&clotheType=Overall&eyeType=Cry&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheFancy&hairColor=SilverGray&hatColor=White&mouthType=Sad&skinColor=Tanned&topType=ShortHairShortRound',
      posts: [
        'd3a12ce8-5b40-4b3a-b715-9a0d758f013c',
        'a0fc91b9-8e7b-4894-8047-d89634360f08',
        'f5a3036d-6cdd-47fd-beb8-8d1337710982',
        '4136d527-67f7-444a-b515-931b1e884267',
        'e4ea4b7c-13a8-487c-b652-052b58ca4b6a',
        '1e634d7e-a09d-4943-9500-6f7ea628f412'
      ],
      comments: [
        'd262d2d4-9271-4956-8fd9-73f6633257fe',
        'e099799a-6cde-4ed0-a26f-7964a656758f',
        'b268893f-f6ab-4fbb-96b2-daac16361c44',
        '30210349-c065-45cd-8603-d18ba30d2d2a',
        '41ad6748-6135-490c-9984-723f0c52c1aa',
        '14a33097-9f6b-4055-8901-43176c599517'
      ]
    },
    {
      id: '3d17f086-9e9b-45b5-b5d3-6d62f2ee7d7a',
      firstName: 'Santino',
      lastName: 'Turcotte',
      email: 'Trinity.Bradtke@gmail.com',
      image: 'https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=PastelRed&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=UnibrowNatural&facialHairColor=Platinum&facialHairType=MoustacheFancy&hairColor=BrownDark&hatColor=PastelYellow&mouthType=Disbelief&skinColor=Tanned&topType=LongHairBigHair',
      posts: [
        'bfa854f0-e274-41d2-beff-2b72dbfc7013',
        '1cb1a3b3-44f1-4731-8c95-5f9cd2c94a2a',
        'ba1475bb-f8e2-474b-8ade-e2aa68afc047'
      ],
      comments: [
        '82b750c2-4203-4708-9a01-e4998422a9ae',
        'f3bf108f-e375-482d-a357-ef4e57e059e2',
        'eb48ccfe-753d-4ddb-82d6-012648da6323',
        '3d1d1279-7b6e-45dc-b673-e85622b4ba05',
        '3931df99-87a3-482e-b8fb-05a90685a1a4',
        '8e6b1a93-93c3-49da-9ee5-e3426d70bb5f',
        '1fb3157b-dd93-438e-96a2-c3272ac99720',
        '8dd5bed7-d057-4686-ada3-3ed0bf945b78',
        '0ba08605-2897-4338-9301-fa540c2e4f7a'
      ]
    },
    {
      id: 'a4b32b31-34b4-4c27-86d5-08fc2f786600',
      firstName: 'Meghan',
      lastName: 'Jast',
      email: 'Miles_Jones@hotmail.com',
      image: 'https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=BlazerSweater&eyeType=Dizzy&eyebrowType=AngryNatural&facialHairColor=Red&facialHairType=Blank&hairColor=Red&hatColor=PastelRed&mouthType=Eating&skinColor=Light&topType=LongHairCurvy',
      posts: [
        'f2556a83-4540-48cc-bead-dd556f482cce',
        '332ed05a-04e6-4336-944d-0e9c0e5752f3',
        'b04e92c5-6953-48c0-a96f-82f75bd9ef23'
      ],
      comments: [
        '2bed968a-7e00-4166-a96e-edcf46759c1f',
        '674e22b5-c74c-45ea-b49e-9baa9e9a1067',
        '4348f904-0aff-4981-b3c4-eeccb9c6c2a8',
        '7feace2b-77e0-429a-86fc-089473882809'
      ]
    },
    {
      id: '6eb53580-9c7a-4989-8097-b8134dc6521f',
      firstName: 'Bridgette',
      lastName: 'Emmerich',
      email: 'Jerod_Rippin10@yahoo.com',
      image: 'https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=Heather&clotheType=Hoodie&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Blonde&facialHairType=BeardMedium&hairColor=PastelPink&hatColor=Blue03&mouthType=Vomit&skinColor=Pale&topType=LongHairStraight',
      posts: [
        'd593a44c-5f65-452f-8e9c-ac85cdd73bfe',
        'bf5d7cce-3d78-427d-aecd-eda78717fab5',
        '3b2f96db-d1ab-4aae-9f12-e46ada690c96',
        '9cf0a3de-0c8b-4352-9ea0-b18e52dfad4a',
        '3c4c284d-d4c9-42db-a719-1cb1e353d1a9',
        'c67562b0-92b4-4403-943d-7e8797c75540'
      ],
      comments: [
        'd23364f5-9171-4e27-b5fa-2dbf31fce1a8',
        'd1c2edba-36b4-4d06-ae75-4127f510be85',
        '42ea2787-00b7-480f-845e-9332be09f833',
        '309f4013-90a9-47da-99c6-b6f66313f90d',
        '6e139e97-f8a8-4c7e-b6f5-dbd226c6e2b2',
        '1f2e9761-ba87-4295-af49-4ccc042455a1',
        '0f4d1925-ca26-4dc2-ad2b-b251776d6f23'
      ]
    },
    {
      id: 'a96c94da-c421-4a24-b6df-cc0ec8397f77',
      firstName: 'Candace',
      lastName: 'Waelchi',
      email: 'Brando46@yahoo.com',
      image: 'https://avataaars.io/?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=CollarSweater&eyeType=Close&eyebrowType=Default&facialHairColor=BrownDark&facialHairType=MoustacheFancy&hairColor=BlondeGolden&hatColor=Gray02&mouthType=Serious&skinColor=Pale&topType=ShortHairSides',
      posts: [
        'b0e8f75f-7e48-4e05-b1fd-1474f7ccbe42',
        '5d6e2338-2226-44ce-8443-c695c148e829'
      ],
      comments: [
        '3826b0ac-9d0a-4670-a587-a5fae9075ccf',
        'cb6ce6de-38d6-44a8-98fa-d672134a1614',
        '9b5d2004-f709-4e86-9810-c9afd5bab18b',
        '451ea156-2808-4671-8776-cfc7a8a5e513'
      ]
    }
  ];

  getUserByUserId(id: string): User {
    return this.users.find(user => user.id === id);
  }

  getFirstNameByUserId(id: string): string {
    const foundUser = this.getUserByUserId(id);
    if (!foundUser) {
      return null;
    }
    return foundUser.firstName;
  }

  getImageUrlByUserId(id: string): string {
    const foundUser = this.getUserByUserId(id);
    if (!foundUser) {
      return null;
    }
    return foundUser.image;
  }
}
