import { Component } from '@angular/core';
import { post } from './models/card.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-day1';
  posts: post[] = [{
    id: 1,
    username: 'Omnia',
    profileImage: 'https://tse1.mm.bing.net/th/id/OIP.DZqYU0jjPHtkZpmnAkdt8gHaHa?pid=ImgDet&w=191&h=191&c=7',
    postImage: 'https://i.pinimg.com/736x/a4/e6/9e/a4e69e2a537be66476cc9dd2d52b9c91.jpg',
    content: ' What a beautiful view!',
    time: '1 hour ago',
    text: undefined,
    author: undefined
  },
  {
    id: 2,
    username: 'Basma',
    profileImage: 'https://th.bing.com/th/id/OIP.FAzhrVU7bLj0U6sdFlYnQQHaHa?w=212&h=212&c=7&r=0&o=5&pid=1.7',
    postImage: 'https://th.bing.com/th/id/R.97987d7c402df20cbbcbb2256821449d?rik=W%2b9Hflfimv3VIg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-s2afZKfQmT0%2fUrmsME_tVWI%2fAAAAAAAAAgk%2ftTNBjogQGqg%2fs1600%2fhd-wallpapers-download-mountain-valleys-wallpaper-natural-scenery-1600x1200-wallpaper.jpg&ehk=Jm525BmSs5q0%2fVetCc1JT9Mr%2fNayt8Jlw3i72cd2Y8Y%3d&risl=&pid=ImgRaw&r=0',
    content: ' What a beautiful view!',
    time: '3 hours ago',
    text: undefined,
    author: undefined
  },
  {
    id: 3,
    username: 'Noura',
    postImage: 'https://i.pinimg.com/originals/71/a0/8e/71a08e2495d28089037d75a3f985e786.jpg',
    profileImage: 'https://tse2.mm.bing.net/th/id/OIP.mj_2stg19UCww6kfImMYiQAAAA?pid=ImgDet&w=191&h=191&c=7',
    content: ' What a beautiful view!',
    time: 'Yesterday',
    text: undefined,
    author: undefined
  }, {
    id: 4,
    username: 'Saja',
    postImage: 'https://i.pinimg.com/736x/cf/04/ba/cf04ba5a2467ec0c3092e2077558c5d6.jpg',
    profileImage: 'https://tse1.mm.bing.net/th/id/OIP.rXcTxhSC8d4LeqKohC5SeQHaHa?pid=ImgDet&w=191&h=191&c=7',
    content: ' What a beautiful view!',
    time: '45 minutes ago',
    text: undefined,
    author: undefined
  }
  ];
   removePost(idx: number): void {
    this.posts.splice(idx, 1);
  }
};


