import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Oralla Simpkiss',
      email: 'osimpkiss0@jugem.jp',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Morris Wavish',
      email: 'mwavish1@storify.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Matthiew By',
      email: 'mby2@deviantart.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'Rahal Chang',
      email: 'rchang3@t-online.de',
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'Elianora Dominiak',
      email: 'edominiak4@google.es',
      role: 'ENGINEER',
    },
    {
      id: 6,
      name: 'Laurent Swadlinge',
      email: 'lswadlinge5@soup.io',
      role: 'ENGINEER',
    },
    {
      id: 7,
      name: 'Gene Catherick',
      email: 'gcatherick6@imageshack.us',
      role: 'INTERN',
    },
    {
      id: 8,
      name: 'Gay Doiley',
      email: 'gdoiley7@go.com',
      role: 'ENGINEER',
    },
    {
      id: 9,
      name: 'Terrill Barus',
      email: 'tbarus8@answers.com',
      role: 'INTERN',
    },
    {
      id: 10,
      name: 'Todd Benka',
      email: 'tbenka9@ihg.com',
      role: 'INTERN',
    },
  ];
  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role == role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ADMIN' | 'ENGINEER';
  }) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ){
    this.users = this.users.map(user =>{
        if(user.id === id){
            return {...user, ...updatedUser}
        }
        return user
    })
    return this.findOne(id)
  }

  delete(id:number){
    const removedUser = this.findOne(id)
    this.users = this.users.filter(user => user.id !== id)
    return removedUser
  }
}
