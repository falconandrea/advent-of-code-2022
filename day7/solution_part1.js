const file = 'input.txt'
const fs = require('fs')

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return false
  }

  const struct = { name: '/', childs: [], type: 'folder' }
  let pointer = struct
  let folderName = null

  // Parse data and create tree
  const rows = data.split('\n').filter(item => item)
  for (const row of rows) {
    if (row.includes('$ cd ')) {
      folderName = row.replace('$ cd ', '')
      if (folderName === '..') {
        pointer = pointer.parent
      } else if (folderName === '/') {
        pointer = struct
        pointer.parent = null
      } else {
        pointer.childs[folderName] = {
          name: folderName,
          type: 'folder',
          childs: [],
          parent: pointer
        }
        pointer = pointer.childs[folderName]
      }
    } else if (row !== '$ ls') {
      if (row.includes('dir ')) {
        folderName = row.replace('dir ', '')
        //
      } else {
        const temp = row.split(' ')
        pointer.childs[temp[1]] = {
          name: temp[1],
          type: 'file',
          size: parseInt(temp[0])
        }
      }
    }
  }

  console.log(struct.childs.fnsvfbzt)

  // Calc size folders
  const sizeFolders = []
  let total = 0
  const getSize = (item) => {
    if (Object.keys(item).includes('childs')) {
      total = Object.keys(item.childs).map(folder => {
        if (item.childs[folder].type === 'folder') {
          total = getSize(item.childs[folder])
          sizeFolders[item.parent?.name + '/' + item.name] = total
          return total
        } else {
          return item.childs[folder].size
        }
      }).reduce((acc, value) => acc + value, 0)
      sizeFolders[item.parent?.name + '/' + item.name] = total
      return total
    }
  }

  getSize(struct)

  console.log(sizeFolders)

  total = 0
  console.log(Object.keys(sizeFolders).reduce((acc, value) => {
    return acc + (value !== '/' ? (sizeFolders[value] < 100000 ? sizeFolders[value] : 0) : 0)
  }, 0))
})
