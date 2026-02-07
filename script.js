const API = "http://localhost:5000";

async function createPost() {
  const content = document.getElementById("content").value;

  await fetch(`${API}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: content,
      author: "000000000000000000000000"
    })
  });

  document.getElementById("content").value = "";
  loadPosts();
}

async function loadPosts() {
  const res = await fetch(`${API}/posts`);
  const posts = await res.json();

  const postsDiv = document.getElementById("posts");
  postsDiv.innerHTML = "";

  posts.forEach(post => {
    postsDiv.innerHTML += `
      <div class="post">
        <p>${post.content}</p>
        <button onclick="likePost('${post._id}')">
          ❤️ ${post.likes.length}
        </button>
      </div>
    `;
  });
}

async function likePost(id) {
  await fetch(`${API}/posts/like/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: "000000000000000000000000"
    })
  });

  loadPosts();
}

loadPosts();
