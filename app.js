// DOM references
const detailsInactiveShare = document.getElementById('details-inactive-share')
const detailsActiveShare = document.getElementById('details-active-share')
const linksActiveShare = document.getElementById('links-active-share')
const shareLinks = document.getElementById('share-links')

// Event listeners
detailsInactiveShare.addEventListener('click', () => {
  detailsInactiveShare.style.display = 'none'
  detailsActiveShare.style.display = 'inline-block'
  shareLinks.style.display = 'flex'
})

detailsActiveShare.addEventListener('click', () => {
  detailsActiveShare.style.display = 'none'
  detailsInactiveShare.style.display = 'inline-block'
  shareLinks.style.display = 'none'
})

linksActiveShare.addEventListener('click', () => {
  detailsInactiveShare.style.display = 'inline-block'
  detailsActiveShare.style.display = 'none'
  shareLinks.style.display = 'none'
})
