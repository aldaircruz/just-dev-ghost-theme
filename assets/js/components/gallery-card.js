/* eslint-env browser */

/**
 * Gallery card support
 * Used on any individual post/page
 *
 * Detects when a gallery card has been used and applies sizing to make sure
 * the display matches what is seen in the editor.
 */

((window, document) => {
  const resizeImagesInGalleries = function resizeImagesInGalleries () {
    const images = document.querySelectorAll('.kg-gallery-image img')
    images.forEach(image => {
      const container = image.closest('.kg-gallery-image')
      const width = image.attributes.width.value
      const height = image.attributes.height.value
      const ratio = width / height
      container.style.flex = `${ratio} 1 0%`
    })
  }

  document.addEventListener('DOMContentLoaded', resizeImagesInGalleries)
})(window, document)
