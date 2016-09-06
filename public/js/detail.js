var query = window.location.search

fetch('api/v1/detail' + query)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    var work = data[0]
    var detailsPage = document.getElementById('details')

    var imageBox = document.createElement('div')
    imageBox.classList.add('col-sm-8')

    var image = document.createElement('img')
    image.setAttribute('src', './images/work/' + work.filename)

    var infoBox = document.createElement('div')
    infoBox.classList.add('col-sm-4')

    var title = document.createElement('h1')
    title.innerHTML = work.title

    var blurb = document.createElement('p')
    blurb.innerHTML = work.blurb

    var detailMenu = document.createElement('div')
    detailMenu.classList.add('detail-menu')

    var homeLink = document.createElement('a')
    homeLink.setAttribute('href', '/#Work')

    var homeIcon = document.createElement('i')
    homeIcon.classList.add('fa', 'fa-arrow-circle-left', 'fa-lg')
    homeIcon.setAttribute('aria-hidden', 'true')

    var homeLinkText = document.createElement('span')
    homeLinkText.innerHTML = 'Return Home'

    var githubLink = document.createElement('a')
    githubLink.setAttribute('href', work.github)
    githubLink.setAttribute('target', '_blank')

    var githubIcon = document.createElement('i')
    githubIcon.classList.add('fa', 'fa-github', 'fa-lg')
    githubIcon.setAttribute('aria-hidden', 'true')

    var githubLinkText = document.createElement('span')
    githubLinkText.innerHTML = 'View on GitHub'

    var toolsBox = document.createElement('p')

    var toolsIcon = document.createElement('i')
    toolsIcon.classList.add('fa', 'fa-wrench', 'fa-lg')
    toolsIcon.setAttribute('aria-hidden', 'true')

    var toolsText = document.createElement('span')
    toolsText.innerHTML = 'Tools'

    var tools = document.createElement('span')
    tools.innerHTML = work.tools

    toolsBox.appendChild(toolsIcon)
    toolsBox.appendChild(toolsText)
    toolsBox.appendChild(tools)

    homeLink.appendChild(homeIcon)
    homeLink.appendChild(homeLinkText)

    githubLink.appendChild(githubIcon)
    githubLink.appendChild(githubLinkText)

    detailMenu.appendChild(homeLink)
    detailMenu.appendChild(githubLink)
    detailMenu.appendChild(toolsBox)

    imageBox.appendChild(image)

    infoBox.appendChild(title)
    infoBox.appendChild(blurb)
    infoBox.appendChild(detailMenu)

    detailsPage.appendChild(imageBox)
    detailsPage.appendChild(infoBox)
  })

  //   <div class="detail-menu">
  //     <p><i class="fa fa-wrench fa-lg" aria-hidden="true"></i><span>Tools</span>HTML, CSS, Phaser.io</p>
  //   </div>
