// 通过路径下载
export function download(href, name = `${Date.now()}.txt`) {
  const a = document.createElement('a')
  a.download = name
  a.style.display = 'none'
  a.href = href
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

// 下载blob对象
export function downloadBlob(blob, name) {
  const href = URL.createObjectURL(blob)
  download(href, name)
}

// 下载文字
export function downloadStr(str, name) {
  const blob = new Blob([str])
  downloadBlob(blob, name)
}

// 下载图片
export function downloadImage(src, name = `${Date.now()}.png`) {
  const image = new Image()
  image.setAttribute('crossOrigin', 'anonymous')
  image.src = src
  image.onload = function() {
    const canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height

    const context = canvas.getContext('2d')
    context.drawImage(image, 0, 0, image.width, image.height)
    const href = canvas.toDataURL('image/png')
    download(href, name)
  }
}

export default {
  download,
  downloadBlob,
  downloadStr,
  downloadImage
}