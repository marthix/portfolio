var query = window.location.search

fetch('api/v1/detail' + query)
  .then(function(response){
    return response.json()
  })

  .then(function(data){
    var work = data[0]
    var detailsPage = document.getElementById('details')

    console.log(work)

    var imageBox = document.createElement('div')
    imageBox.classList.add('col-sm-8')

    var image = document.createElement('img')
    image.setAttribute('src', './images/work/' + work.filename)

    var infoBox = document.createElement('div')
    infoBox.classList.add('col-sm-4')

    var title = document.createElement('h1')
    title.innerHTML = work.title

    // TODO: Remove this once the db content is fully filled out.
    if (work.blurb === null) {
      work.blurb = '(Coming soon!)'
    }
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

    if (work.link != null) {
      var launchLink = document.createElement('a')
      launchLink.setAttribute('href', work.link)

      var launchIcon = document.createElement('i')
      launchIcon.classList.add('fa', 'fa-external-link', 'fa-lg')
      launchIcon.setAttribute('aria-hidden', 'true')

      var launchLinkText = document.createElement('span')
      launchLinkText.innerHTML = 'Launch Project'

      launchLink.appendChild(launchIcon)
      launchLink.appendChild(launchLinkText)
    }

    if (work.github === null) {
      work.github = '#'
    }
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
    toolsText.classList.add('tools')
    toolsText.innerHTML = 'Tools'

    if (work.tools === null) {
      work.tools = '(Coming soon!)'
    }
    var tools = document.createElement('span')
    tools.innerHTML = work.tools

    toolsBox.appendChild(toolsIcon)
    toolsBox.appendChild(toolsText)
    toolsBox.appendChild(tools)

    githubLink.appendChild(githubIcon)
    githubLink.appendChild(githubLinkText)

    homeLink.appendChild(homeIcon)
    homeLink.appendChild(homeLinkText)

    detailMenu.appendChild(homeLink)
    if (work.link != null) {
      detailMenu.appendChild(launchLink)
    }
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
