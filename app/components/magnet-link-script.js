const generateMagnetButton = document.getElementById('generate-magnet')
const infoHashField = document.getElementById('info-hash')
const trackersField = document.getElementById('trackers')
const magnetLinkTarget = document.getElementById('magnet-target')

function generateMagnetLink(infoHash, trackers) {
  var result = 'magnet:?xt=urn:btih:'
  result += infoHash

  for (let i = 0; i < trackers.length; i++) {
    let tracker = trackers[i].replace(/\//g, '%2F').replace(/\:/g, '%3A')

    result += '&tr=' + tracker
  }

  return result
}

function generateButtonHandler(e) {
  let infoHashValue = infoHashField.value.trim()
  let trackersList = trackersField.value.split('\n')

  let magnetLink = generateMagnetLink(infoHashValue, trackersList)

  magnetLinkTarget.innerHTML = magnetLink
  magnetLinkTarget.href = magnetLink
}

generateMagnetButton.addEventListener('click', generateButtonHandler)
