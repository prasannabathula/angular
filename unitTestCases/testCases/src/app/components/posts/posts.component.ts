import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  posts : Post[] = []
  constructor(private postService:PostService){

  }

  ngOnInit(){
    this.getData();
  }

  getData() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    })
  }

  deleteData(post:Post){
    this.posts = this.posts.filter((p) => post.id !==p.id);
    this.postService.deletePost(post).subscribe();
  }
  
}
