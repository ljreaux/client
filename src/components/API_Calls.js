export async function register({
  username,
  password,
  firstname,
  lastname,
  location,
}) {
  try {
    const response = await fetch(`/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        name: `${firstname} ${lastname}`,
        location: location,
      }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function login({ username, password }) {
  try {
    const response = await fetch(`/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserInfo(token) {
  try {
    const response = await fetch(`/api/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllPosts() {
  try {
    const response = await fetch("/api/posts");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getPostById(id) {
  try {
    const response = await fetch(`/api/posts/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getPostsByTag(tagname) {
  try {
    const response = await fetch(`/api/tags/%23${tagname}/posts`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getPostsByAuthor(authorId) {
  try {
    console.log(authorId);
    const response = await fetch(`/api/posts/user/${authorId}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function createNewPost(token, body) {
  try {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function editPost(id, body, token) {
  try {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function deletePost(id, token) {
  try {
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllTags() {
  try {
    const response = await fetch(`/api/tags/`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
