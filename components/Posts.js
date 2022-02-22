import Post from './Post'

export default function Posts() {
  return (
    <div>
      <Post
        name="Calviano Nathanael"
        message="Follow My Github"
        timestamp="22-02-2022, 22:22:22"
        image="/profile-pic.png"
        link="https://github.com/calvianoid"
        postImage="/posts/post-1.jpg"
      />
      <Post
        name="Choi Yujin"
        message="케플러 (Kep1er) Second Win @KBS 뮤직뱅크 (Music Bank)"
        timestamp="14-01-2022, 16:20:15"
        image="/profile-4.jfif"
        postImage="/posts/post-3.jpg"
      />
      <Post
        name="Lee Jieun"
        message="Lilac Debut Stage Perfomance"
        timestamp="09-04-2021, 17:15:43"
        image="/profile-1.jpg"
        postImage="/posts/post-2.jpg"
      />
    </div>
  )
}
