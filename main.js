const LinksSocialMedia = {
  github: 'LeonardoLamoia',
  youtube: 'UCwUhomFbzGbaxV_TxB9Ha7A',
  facebook: 'leolamoia',
  instagram: 'leolamoia',
  linkedin: '/in/leonardo-lamóia-rosa-/'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.href = data.login
    })
}

getGithubProfileInfos()
