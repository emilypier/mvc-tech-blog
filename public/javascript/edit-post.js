async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[class="post-title"]').value.trim();
  const content = document.querySelector('input[class="post-content"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/posts/edit/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.getElementById('.edit-post-form').addEventListener('submit', editFormHandler);
