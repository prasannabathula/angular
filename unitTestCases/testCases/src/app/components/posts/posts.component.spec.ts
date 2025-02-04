import { of } from "rxjs";
import { Post } from "../../models/post";
import { PostsComponent } from "./posts.component";
import { PostService } from "../../services/post.service";

describe("Post Component",()=>{
    let post:Post[];
    let component:PostsComponent;
    let mockpostservice:any;
    beforeEach(()=>{
        post = [
            {id:'1',title:'title1',body:'body1'},
            {id:'2',title:'title2',body:'body2'},
            {id:'3',title:'title3',body:'body3'},
        ]
        //postCpmponent depends on postservice again post service depends on httpclient
        //we want to write isolated tests so we have to create mockservice instead of using actual service
        mockpostservice = jasmine.createSpyObj(['getPosts','deletePost'])
        component = new PostsComponent(mockpostservice);
    })

    describe('delete', ()=>{
       /*  it('should call the delete method',()=>{
            component.posts = post;
            component.deleteData(post[1]);
            expect(component.posts).not.toContain(post[1]);
            expect(component.posts.length).toBe(2);
            //Error: Cannot read properties of undefined (reading 'subscribe') because his.postService.deletePost(post) returns observable but here mockmethod without implementation is there

        }) */

            it('should call the delete method',()=>{
                component.posts = post;
                mockpostservice.deletePost.and.returnValue(of(true));
                component.deleteData(post[1]);
                console.log("check length",component.posts.length);
                expect(component.posts).not.toContain(post[1]);
                expect(component.posts.length).toBe(2);
            })  
            
            it('should call the deletePost of postservice only once ',()=>{
                component.posts = post;
                mockpostservice.deletePost.and.returnValue(of(post[1]));
                component.deleteData(post[1]);
                expect(mockpostservice.deletePost).toHaveBeenCalledTimes(1);
            })  
    })
})